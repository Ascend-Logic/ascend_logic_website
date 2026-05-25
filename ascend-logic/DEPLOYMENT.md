# デプロイ手順（Vercel + GitHub Actions CI）

このドキュメントは、Ascend Logic ウェブサイトのデプロイ構成と運用手順を説明します。

## デプロイ構成の全体像

本番デプロイは **Vercel の Git 連携** が担当し、品質チェックは **GitHub Actions（CI）** が担当する役割分担です。

| イベント | 担当 | 結果 |
| --- | --- | --- |
| Pull Request 作成・更新 | GitHub Actions `ci.yml` | `lint` + `build` を検証（マージ前ゲート。デプロイはしない） |
| Pull Request（feature ブランチ） | Vercel Git 連携 | プレビュー URL を自動発行 |
| `main` へマージ | **Vercel Git 連携** | 本番（`https://ascendlogicai.com/`）へ自動デプロイ |

- GitHub Actions はデプロイしないため、Vercel との **二重デプロイは発生しません**。
- そのため Vercel トークン等の Secrets 登録は不要です。

> **重要（リポジトリ構成）**: Next.js 本体はリポジトリ直下ではなく **`ascend-logic/` サブディレクトリ** にあります。Vercel の **Root Directory は `ascend-logic`** を指す必要があります。

---

## 前提条件

- GitHub アカウント（リポジトリは **`Ascend-Logic` org 配下**）
- Vercel アカウント
- 対象 Vercel プロジェクト: `ascend-logic-website`（本番ドメイン `ascendlogicai.com`）

---

## 初回 / 移管後のセットアップ

GitHub リポジトリを org へ移管・移動した場合、Vercel プロジェクトの Git 連携が切れて `main` マージで自動デプロイされなくなります。以下の手順で復旧します。

### 1. ローカル remote を org リポジトリに合わせる

```bash
# 現在の remote を確認
git remote -v

# org リポジトリに更新（URL は実際の org リポジトリに置き換える）
git remote set-url origin https://github.com/Ascend-Logic/<repo>.git
```

GitHub Actions は **コードが push されたリポジトリ** でしか発火しません。`ci.yml` を含む変更は org リポジトリの `main` に入っている必要があります。

### 2. Vercel プロジェクトを org リポジトリへ再接続

1. Vercel ダッシュボード → 対象プロジェクト → **Settings → Git**
2. 既存の連携が旧リポジトリを指している場合は **Disconnect** し、**Connect Git Repository** で `Ascend-Logic/<repo>` を選択
3. 連携時に GitHub App が `Ascend-Logic` org にインストール／許可されていることを確認

### 3. プロジェクト設定の確認（移管で飛んでいないか）

- **Settings → General → Root Directory** が **`ascend-logic`** になっていること（空だとリポジトリルートをビルドして失敗します。最重要）
- **Settings → Git → Production Branch** が **`main`** になっていること
- **Settings → General → Node.js Version** が **22.x** であること（`ascend-logic/.nvmrc` = `22`、`package.json` の `engines.node` = `22.x` と一致。CI・本番・ローカルの Node メジャーを揃える）

### 4. 環境変数（メール送信機能に必須）

お問い合わせフォーム（`/api/request-documents`）は実行時に以下を参照します。**Production** スコープに登録してください（未登録でもビルド・デプロイは成功し、フォーム送信時に初めて失敗するため気づきにくい点に注意）。

| 変数名 | 値 | 説明 |
| --- | --- | --- |
| `EMAIL_USER` | your-email@gmail.com | Gmail 送信元アドレス |
| `EMAIL_APP_PASSWORD` | xxxx-xxxx-xxxx-xxxx | Gmail アプリパスワード |

- Settings → Environment Variables → **Production**（必要なら **Preview** にも）に登録
- Gmail アプリパスワードは 2 段階認証を有効にした上で [アプリパスワード設定](https://myaccount.google.com/apppasswords) から取得

### 5. カスタムドメイン

1. Settings → **Domains** で `ascendlogicai.com` と `www.ascendlogicai.com` が **当該プロジェクトの Production** に割り当てられていることを確認
2. 未割り当てなら追加し、DNS をダッシュボード表示の指示値に合わせる

推奨 DNS（最新値はダッシュボードの表示を優先）:

```
Type: A      Name: @     Value: 76.76.21.21
Type: CNAME  Name: www   Value: cname.vercel-dns.com
```

---

## GitHub Actions（CI 品質ゲート）

ワークフロー: `/.github/workflows/ci.yml`（**リポジトリルート直下**。`ascend-logic/.github/` に置くと発火しません）

- トリガー: `pull_request` （base = `main`）
- 実行内容: `ascend-logic/` で `npm ci` → `npm run lint`（oxlint, type-aware）→ `npm run build`（next build）
- デプロイはしない（本番デプロイは Vercel 連携が担当）
- Node バージョンは `ascend-logic/.nvmrc` を参照

### Branch protection（推奨）

`main` 直 push は CI を経由しません。GitHub の **Settings → Branches → Branch protection rules** で以下を設定すると、壊れたコードが本番へ自動デプロイされるのを防げます。

- Require a pull request before merging
- Require status checks to pass before merging → `CI / verify` を必須に指定

---

## 日常の開発フロー

1. feature ブランチを作成して変更
2. PR を作成 → GitHub Actions の `CI` が緑になることを確認、Vercel プレビュー URL で見た目を確認
3. PR を `main` へマージ → Vercel が本番（`ascendlogicai.com`）へ自動デプロイ

---

## ロールバック / 縮退運用

### 本番を直前の状態に戻す（Instant Rollback）

1. Vercel ダッシュボード → プロジェクト → **Deployments**
2. 戻したい安定版のデプロイの「…」メニュー → **Instant Rollback**（または **Promote to Production**）

CLI を使う場合:

```bash
# 対象ディレクトリで実行
vercel rollback <deployment-url>
```

### 自動デプロイが止まったとき

`main` マージで本番デプロイされない場合は、本書「初回 / 移管後のセットアップ」の手順 2〜3（Git 再接続・Root Directory・Production Branch）を再確認してください。多くは org 移管などによる Git 連携断が原因です。

---

## ローカルでの動作確認コマンド

```bash
cd ascend-logic
npm ci
npm run lint     # oxlint --type-aware
npm run build    # next build（本番デプロイと同じビルド）
npm run dev      # ローカル開発サーバー（http://localhost:3000）
```

---

## トラブルシューティング

### ビルドエラー

1. Vercel の **Root Directory が `ascend-logic`** になっているか
2. Node バージョンが 22.x か（`.nvmrc` / `engines` / Vercel の Node 設定が一致しているか）
3. ローカルで `npm ci && npm run build` が通るか
4. Deployment Logs で具体的なエラーを確認

### お問い合わせメールが届かない

1. Production の環境変数 `EMAIL_USER` / `EMAIL_APP_PASSWORD` が登録済みか
2. Gmail アプリパスワードが有効か（2 段階認証必須）
3. Function Logs でエラーを確認

### main にマージしてもデプロイされない

1. Vercel の Git 連携が **org リポジトリ** に接続されているか（Settings → Git）
2. Production Branch が `main` か
3. GitHub Actions / Vercel の Deployments にイベントが届いているか

---

## 参考リンク

- [Vercel Next.js デプロイガイド](https://vercel.com/docs/frameworks/nextjs)
- [Vercel Git 連携](https://vercel.com/docs/git)
- [環境変数の設定](https://vercel.com/docs/projects/environment-variables)
- [カスタムドメイン設定](https://vercel.com/docs/projects/domains)
- [Instant Rollback](https://vercel.com/docs/deployments/instant-rollback)
