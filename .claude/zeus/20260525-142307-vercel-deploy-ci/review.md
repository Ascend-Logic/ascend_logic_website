# zeus-reviewer レポート（セルフレビュー）

- タスク: CI/CD 整備（案B: Vercel=本番デプロイ / Actions=PR品質ゲート）
- 起動時刻: 2026-05-25 14:46 頃
- 判定: Critical なし / Warning 2 / Info 5

---

## Warning

### W1. `.nvmrc=24` と `engines.node=">=22"` の不一致による CI/Vercel ビルド環境乖離
- 該当: `.github/workflows/ci.yml`（node-version-file）, `ascend-logic/package.json`（engines）
- CI は `.nvmrc=24` で Node 24 ビルド。Vercel は `.nvmrc` を読まず、ダッシュボードの Node.js Version 設定（engines 範囲内で既定=22 系になり得る）でビルド。「CI=24 / 本番=22」の環境差が常態化し、CI の目的（本番デプロイ失敗の未然防止）を部分的に損なう。
- 修正方針: CI と Vercel のメジャーを揃える。`.nvmrc` と `engines` を同一メジャーに寄せ、Vercel の Node 設定も合わせる。

### W2. CI=`npm ci` と vercel.json の installCommand=`npm install` の不整合
- 該当: `ascend-logic/vercel.json:4`
- CI は lockfile 厳密遵守の `npm ci`、Vercel は lockfile を更新し得る `npm install`。検証した依存ツリーと本番の依存ツリーがズレ得る。
- 修正方針: vercel.json の installCommand を `npm ci` に揃える（lockfile あり）か、差異を DEPLOYMENT.md に明記。

## Info
- I3. CLAUDE.md の lint 説明が ESLint 記述のまま（実体は oxlint）。ドキュメント統一の機会（今回差分起因ではない）。
- I4. format:check を CI から除外した判断は妥当（既存4ファイル崩れで即赤になるため）。将来一括整形→CI追加の TODO を残すと良い。
- I5. permissions: contents:read / Secrets 不要 / concurrency 設計は妥当（指摘なし）。
- I6. build 時 env 不要の前提は妥当（route.ts の env はリクエスト時評価、トップレベル評価なし）。
- I7. DEPLOYMENT.md に危険操作・事実誤認なし（git remote set-url / 再接続 / Instant Rollback / vercel rollback すべて正確）。

確認実ファイル: ci.yml, package.json, .nvmrc, vercel.json, DEPLOYMENT.md, app/api/request-documents/route.ts
