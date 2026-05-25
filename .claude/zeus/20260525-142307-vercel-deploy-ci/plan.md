# Zeus 統合プラン: main マージ → Vercel 本番（ascendlogicai.com）自動デプロイの復旧・堅牢化

- 作成日時: 2026-05-25 14:35:00
- タスク: GitHub org 移管で Vercel の Git 連携が切れ、main マージで本番デプロイされなくなったのを復旧し、CI/CD を整備する
- 生レポート: `.claude/zeus/20260525-142307-vercel-deploy-ci/raw/`

---

## 1. タスク理解

### 要件
- main ブランチへのマージで `https://ascendlogicai.com/` へ Vercel 本番デプロイが自動実行される状態に戻す。
- 再発防止と品質担保のため CI を整備する。

### ユーザー確定方針（2026-05-25 確認）
- **正リポジトリ = `Ascend-Logic` org 配下**（ローカル remote の個人アカウント `saotome06/ascend_logic_website` は古い）。
- **デプロイ主役 = Vercel 連携（案B）**。main マージ→本番デプロイは Vercel が従来通り担当。**GitHub Actions は lint/build の品質ゲート専任でデプロイはしない**。

### この方針が意味すること（重要）
- **デプロイ復旧そのものは、Vercel ↔ org リポジトリの「Git 連携再接続」という手作業で完了する**。これは Zeus（コード）が実行できないダッシュボード操作。
- Zeus の実装範囲は「再接続後に壊れたコードが本番へ自動デプロイされるのを防ぐ CI ゲート」と「Node バージョン固定」「手順書の刷新」。
- **Vercel トークン不要・二重デプロイなし・vercel.json への `git.deploymentEnabled` 改変も不要**（案A で必要だったものはすべて不要になった）。

---

## 2. 現状分析サマリ

| 項目 | 実測値 |
|---|---|
| git ルート | `/Users/saotome/ascend_logic`（Next.js 本体は `ascend-logic/` サブディレクトリ）|
| ローカル remote | `https://github.com/saotome06/ascend_logic_website.git`（**個人=古い。org に要変更**）|
| Vercel プロジェクト | `saotome06s-projects/ascend-logic-website-scqw`（個人スコープ）|
| `ascend-logic/vercel.json` | `framework:nextjs`, `regions:["hnd1"]`, Root Directory 指定なし（ダッシュボード依存）|
| lint / build | `npm run lint`=**pass**、`npm run build`=**pass**（ローカル検証済み）|
| `npm run format:check` | **fail**（4ファイルで oxfmt 崩れ: apple-icon.tsx / globals.css / news/page.tsx / products/ascendai/page.tsx）|
| Node | ローカル v24.2.0 / `.nvmrc`・`engines` ともに**なし** |
| 本番必須 env | `EMAIL_USER` / `EMAIL_APP_PASSWORD`（`/api/request-documents` の nodemailer、リクエスト時評価＝ビルド時不要）|
| `.github/workflows` | なし（ゼロ新設）|
| `ascend-logic/ascend-logic/` | 空・git追跡外の遺物（削除してもgit差分なし）|

主要ファイル: `ascend-logic/vercel.json`, `ascend-logic/package.json`, `ascend-logic/DEPLOYMENT.md`, `ascend-logic/app/api/request-documents/route.ts`, `ascend-logic/.env.example`。

---

## 3. アーキテクチャ判断

### 採用: 案B（Vercel 連携が本番デプロイの主役、GitHub Actions は PR 品質ゲート専任）

| イベント | 担当 | 結果 |
|---|---|---|
| PR 作成・更新 | **GitHub Actions `ci.yml`** | lint + build を検証（マージ前ゲート、デプロイしない）|
| PR（feature ブランチ） | **Vercel Git 連携** | プレビュー URL |
| main へマージ | **Vercel Git 連携** | 本番（ascendlogicai.com）へ自動デプロイ |

**二重デプロイは構造的に発生しない**（Actions はデプロイしないため）。`vercel.json` の `git.deploymentEnabled` 改変は不要。Vercel トークン／ORG_ID／PROJECT_ID の Secrets も不要。

### 却下した案
- 案A（Actions が本番デプロイ担当・Vercel はプレビューのみ）: ユーザーが案B を選択。案A は連携経由の本番デプロイを意図的に殺し、トークン単一障害点を生むため不採用。

---

## 4. 実装ブループリント

### 4.1 変更/新規ファイル一覧（Zeus = /zeus:dev が実装）

| パス | 区分 | 責務 |
|---|---|---|
| `/Users/saotome/ascend_logic/.github/workflows/ci.yml` | **新規（git ルート直下）** | PR で `npm ci`→`lint`→`build`。マージ前品質ゲート。デプロイしない |
| `/Users/saotome/ascend_logic/ascend-logic/.nvmrc` | **新規** | 内容 `24`。ローカル/CI/Vercel の Node 一致 |
| `/Users/saotome/ascend_logic/ascend-logic/package.json` | **変更** | `"engines": { "node": ">=22" }` を追加（緩い下限。`npm ci` を落とさない）|
| `/Users/saotome/ascend_logic/ascend-logic/DEPLOYMENT.md` | **変更（全面改稿）** | org リポジトリ前提・Vercel 再接続手順・CI ゲート・rollback を反映。旧 Import 手順の矛盾記述を除去 |
| `/Users/saotome/ascend_logic/ascend-logic/ascend-logic/` | **削除（ローカルのみ）** | 空・git追跡外の遺物。git 差分は出ない。CI/CD コミットとは分離して扱う |

> **ワークフロー配置の鉄則**: `.github/workflows/` は **git ルート直下**に置く。`ascend-logic/.github/` に置くと一切起動しない。

### 4.2 ci.yml の内容（実装確定形）

```yaml
name: CI

on:
  pull_request:
    branches: [main]

concurrency:
  group: ci-${{ github.ref }}
  cancel-in-progress: true

permissions:
  contents: read

defaults:
  run:
    working-directory: ascend-logic

jobs:
  verify:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          # setup-node は defaults.working-directory の影響を受けないため
          # ascend-logic/ プレフィックス付きフルパスで指定する
          node-version-file: ascend-logic/.nvmrc
          cache: npm
          cache-dependency-path: ascend-logic/package-lock.json
      - run: npm ci
      - run: npm run lint    # oxlint --type-aware（ローカルで pass 確認済み）
      - run: npm run build   # next build（ローカルで pass 確認済み・env 不要）
```

設計根拠:
- **`format:check` は入れない**: 現状4ファイルで oxfmt 崩れがあり即赤になる。本タスク（デプロイ復旧）と無関係な整形を巻き込まないため除外。将来導入するなら別途 `npm run format` で整形してから。
- **ダミー env 不要**: route handler は `await import('nodemailer')` でリクエスト時に env 参照するため `next build` 時に評価されない（ローカルで env なしビルド成功を確認済み）。
- **`working-directory: ascend-logic`**: ci.yml は Vercel CLI を使わない純 npm なので二重適用問題は発生しない。
- **Secrets 不要**: デプロイは Vercel が担当するため Vercel トークン等は登録不要。

### 4.3 .nvmrc / package.json engines

```
# ascend-logic/.nvmrc（新規）
24
```
```jsonc
// ascend-logic/package.json に追加
"engines": { "node": ">=22" }
```

### 4.4 データフロー（デプロイ経路）

```
PR 作成
  → GitHub Actions ci.yml: npm ci → lint → build（緑/赤の品質ゲート）
  → Vercel Git 連携: feature ブランチの Preview デプロイ → PR にプレビュー URL

PR を main にマージ
  → Vercel Git 連携が main push を検知 → Root Directory=ascend-logic でビルド
  → 本番 Deployment 更新 → ascendlogicai.com に反映
  ※ GitHub Actions はデプロイに関与しない（二重デプロイなし）
```

### 4.5 ビルド順序（フェーズ別チェックリスト）

#### Phase 0: 人間がダッシュボード/リポジトリで確認（**これがデプロイ復旧の本体**・§5 詳細）
- [ ] ローカル remote を `Ascend-Logic` org のリポジトリへ変更
- [ ] Vercel プロジェクトを org リポジトリへ Git 再接続
- [ ] Root Directory = `ascend-logic` を確認
- [ ] Production Branch = `main` を確認
- [ ] ドメイン `ascendlogicai.com`（+ `www`）が当該プロジェクトの Production に割り当て済みか確認
- [ ] Production env に `EMAIL_USER` / `EMAIL_APP_PASSWORD` 登録済みか確認

#### Phase 1: コード実装（/zeus:dev）
- [ ] ブランチを切る（main 直コミット禁止）。例: `feat/ci-quality-gate`
- [ ] `ascend-logic/.nvmrc`（`24`）を作成
- [ ] `ascend-logic/package.json` に `engines.node=">=22"` を追加
- [ ] `.github/workflows/ci.yml` を git ルート直下に作成
- [ ] `ascend-logic/DEPLOYMENT.md` を全面改稿
- [ ] （任意・ローカルのみ）空ディレクトリ `ascend-logic/ascend-logic/` を削除

#### Phase 2: ローカル検証
- [ ] `cd ascend-logic && npm ci && npm run lint && npm run build` がすべて成功
- [ ] ci.yml の YAML 構文確認

#### Phase 3: 反映と稼働確認
- [ ] PR を作成 → ci.yml が緑 + Vercel プレビュー URL が出ることを確認
- [ ] （推奨）GitHub の Branch protection で「PR 必須 + ci.yml を required status」に設定
- [ ] main へマージ → Vercel が本番デプロイし `https://ascendlogicai.com/` が更新されることを確認
- [ ] `/request-documents` からテスト送信し、メール到達を確認

---

## 5. ユーザー手作業チェックリスト（Zeus 実行不可・デプロイ復旧の本体）

### A. リポジトリの一致（org へ）
- [ ] 正しい org リポジトリ URL を確認（`Ascend-Logic/<repo>`）
- [ ] `git remote set-url origin <org repo URL>` でローカル remote を更新
- [ ] ci.yml を含む変更を **org リポジトリの main** へ反映（Actions はそのリポジトリでしか発火しない）

### B. Vercel ダッシュボード（Git 連携復旧＝デプロイ復旧の核心）
- [ ] Project → Settings → Git で org リポジトリへ再接続（必要なら Disconnect → Connect、GitHub App を org にインストール）
- [ ] Settings → General → **Root Directory = `ascend-logic`** を確認（空だとルートでビルドし失敗。生命線）
- [ ] Settings → Git → **Production Branch = `main`** を確認
- [ ] Settings → General → Node.js Version が 22 以上（`.nvmrc`/engines と整合）であることを確認

### C. ドメイン（ascendlogicai.com）
- [ ] Settings → Domains で `ascendlogicai.com` と `www` が当該プロジェクトの Production に割り当て済みか確認
- [ ] 未割り当てなら追加し、DNS（ダッシュボード表示の最新値）が Vercel を指すか確認

### D. 環境変数（登録漏れ防止）
- [ ] Settings → Environment Variables の **Production** に `EMAIL_USER` / `EMAIL_APP_PASSWORD` が登録済みか確認（未登録だとフォーム送信が無言失敗）
- [ ] 必要なら Preview スコープにも登録

### E. 縮退運用（DEPLOYMENT.md に記載）
- [ ] 本番が壊れた場合は Vercel ダッシュボードの Instant Rollback で直前デプロイへ戻す手順を周知

---

## 6. テスト戦略

本タスクの成果物はアプリコードではなく CI/CD 設定のため、テスト層を以下に読み替える（グローバル CLAUDE.md のテスト/監視要求は非適用）。

- **静的検証**: ci.yml の `npm run lint`（oxlint type-aware、ローカル pass 済み）。
- **ビルド検証**: ci.yml の `npm run build`（ローカル pass 済み）。マージ前に build 破壊を検知し、Vercel 自動デプロイの失敗を未然に防ぐ。
- **結合（プレビュー）**: PR プレビュー URL でトップ・`/request-documents` の表示確認。
- **本番スモーク**: マージ後、`https://ascendlogicai.com/` の 200 応答とフォーム送信1往復を手動確認。
- **回帰防止**: Branch protection で ci.yml を required にすることで、壊れたコードが main（=本番）に入るのを防ぐ。

---

## 7. 採用案のトレードオフ

- **得るもの**: 最小実装でデプロイ復旧（連携再接続）＋ CI ゲートで本番事故を予防。トークン管理不要・二重デプロイなし・vercel.json 無改変。Node 固定で3環境一致。
- **失う/残リスク**:
  - デプロイ経路が Vercel ダッシュボード設定に依存し続ける（コードで固定されない）→ 将来また移管すると再接続が必要。今回と同じ手順書（DEPLOYMENT.md）で対処可能にしておく。
  - main 直 push は ci.yml（PR トリガー）を経由しない → Branch protection で PR 必須にして緩和（推奨手作業）。

---

## 8. 残課題・次アクション

- `format:check` の4ファイル整形は今回スコープ外。将来 CI に整形チェックを足すなら、先に `npm run format` で整えて別 PR にする。
- 本番デプロイをコードで固定したい要望が出たら、案A（GitHub Actions + Vercel CLI）への移行を別タスクで検討。
- Vercel プロジェクト自体を org スコープへ移すか（現状は個人スコープ `saotome06s-projects`）は運用判断として保留。
