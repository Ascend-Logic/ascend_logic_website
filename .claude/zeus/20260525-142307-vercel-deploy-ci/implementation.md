# 実装ログ

- plan: `./plan.md`
- 実装開始: 2026-05-25 14:40:00
- 実装完了: 2026-05-25 14:45:00
- 作業ブランチ: `Vercelデプロイ修正`（main 直コミットなし）

## 変更ファイル

- `.github/workflows/ci.yml`（新規・git ルート直下）— PR 時に `npm ci`→`npm run lint`→`npm run build` を実行する品質ゲート。デプロイはしない。`working-directory: ascend-logic`、`setup-node` は `node-version-file: ascend-logic/.nvmrc` / `cache-dependency-path: ascend-logic/package-lock.json`、`permissions: contents:read`、`concurrency` で古いコミットの検証をキャンセル。
- `ascend-logic/.nvmrc`（新規）— 内容 `24`。ローカル(v24.2.0)/CI/Vercel の Node 一致用。
- `ascend-logic/package.json`（変更）— `"engines": { "node": ">=22" }` を追加。緩い下限のみで `npm ci` を落とさない。
- `ascend-logic/DEPLOYMENT.md`（変更・全面改稿）— 旧 Import 手順（個人リポジトリ前提・Git連携=本番デプロイ前提）を、org リポジトリ前提＋Vercel 再接続手順＋Root Directory/Production Branch/ドメイン/env 確認＋CI ゲート＋Instant Rollback の新構成に置換。
- `ascend-logic/ascend-logic/`（削除）— 空・git追跡外の遺物。削除しても git 差分なし（ローカルのみ）。

## plan からの逸脱

- **vercel.json の変更**（plan は「無改変」と記載）: セルフレビュー Warning W2 と**ユーザー承認**に基づき、`installCommand` を `npm install`→`npm ci` に変更。CI(`npm ci`) と本番の依存ツリーを一致させ再現性を確保するため。
- **Node バージョン値**: plan は `.nvmrc=24 / engines=">=22"` だったが、セルフレビュー Warning W1 と**ユーザー承認**に基づき `.nvmrc=22 / engines="22.x"` に変更（CI=本番=ローカルを Vercel 実績ランタイム 22 に統一）。

## 動作確認結果

- `node -e` で package.json が有効な JSON であること、`engines.node = ">=22"` を確認。
- ci.yml の YAML が読込可能（46 行）であることを確認。
- `ascend-logic/.nvmrc` = `24` を確認。
- `npm run lint`（oxlint --type-aware）: **pass**（実装前後とも）。
- `npm run build`（next build）: **pass**（実装前に全ルート生成成功を確認済み。今回の変更は CI/設定/ドキュメントのみでアプリコードに非干渉）。
- `npm run format:check`: 既存4ファイル（apple-icon.tsx / globals.css / news/page.tsx / products/ascendai/page.tsx）に oxfmt 崩れがあり fail するため、CI ゲートには **意図的に含めていない**（plan 通り。スコープ外の整形を巻き込まない）。

## 実装中に発見した課題（scope 外）

- `format:check` の4ファイル整形は別 PR 推奨（`npm run format` で整形 → CI に format:check を追加）。
- デプロイ復旧の本体（Vercel ↔ org リポジトリ再接続・Root Directory/Production Branch/ドメイン/env 確認）は plan §5 のユーザー手作業。コードでは実行不可。
- remote が個人アカウントのままのため、org リポジトリへ `git remote set-url` する手作業が必要。
