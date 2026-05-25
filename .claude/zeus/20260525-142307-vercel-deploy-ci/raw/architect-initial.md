# zeus-architect レポート（初回案）

- タスク: main マージ時に Vercel 本番へ自動デプロイする CI/CD 整備
- 起動時刻: 2026-05-25 14:25 頃

---

# 実装ブループリント: Ascend Logic CI/CD 復旧・堅牢化

## 0. 規約準拠の前提宣言
グローバル CLAUDE.md は Python クリーンアーキ／K8s／Docker を強制するが、本タスクは静的 Next.js サイトの Vercel デプロイ CI/CD であり K8s/Docker/JWT 等は対象外。プロジェクト CLAUDE.md（Next.js 15 / oxlint / ascend-logic サブディレクトリ）を優先。

## 1. アーキテクチャ判断（二重デプロイ回避）
### 断言: 案 A — GitHub Actions が本番デプロイの唯一責任者、Vercel Git連携は PRプレビューのみ
- main push → GitHub Actions（vercel deploy --prebuilt --prod）
- PR → Vercel Git連携（プレビュー）
- PR/push → Actions の検証ジョブ（lint+build、デプロイなし）

二重デプロイ封殺: ascend-logic/vercel.json に `"git": { "deploymentEnabled": { "main": false } }` を追加。

却下: 案 B（Vercel が本番も担当、Actions は検証のみ）はユーザー意図「Actions で堅牢化」に反する。

## 2. 新規/変更ファイル
- .github/workflows/deploy-production.yml（新規・git ルート直下）
- .github/workflows/ci.yml（新規）
- ascend-logic/vercel.json（変更: deploymentEnabled.main=false）
- ascend-logic/package.json（変更: engines.node）
- ascend-logic/.nvmrc（新規）
- ascend-logic/DEPLOYMENT.md（変更）

注意: .github/workflows は git ルート直下に置く（ascend-logic/.github は起動しない）。

## 3. Node バージョン固定
.nvmrc=22 + engines.node="22.x"（後の critique で 24/">=22" に修正）。

## 4. ワークフロー（初回案）
- ci.yml: pull_request:main、defaults working-directory ascend-logic、npm ci→lint→format:check→build（ダミー EMAIL_* env）。
- deploy-production.yml: push:main、working-directory ascend-logic、npm ci→lint→format:check→vercel pull/build/deploy --prod。concurrency cancel-in-progress:false、permissions contents:read。

## 5〜12（要約）
vercel.json に deploymentEnabled.main=false。PRプレビューは Vercel委譲。Secrets: VERCEL_TOKEN/ORG_ID/PROJECT_ID。ユーザー手作業チェックリスト（Secrets登録/ダッシュボード再接続/Root Directory確認/env確認/ドメイン確認/初回E2E）。

※この初回案は後続の self-critique で working-directory の Root Directory 二重適用（C1）等が指摘され修正された。最終的にユーザー判断で案B（Vercel主役）に変更されたため、本初回案の deploy-production.yml 系は不採用。
