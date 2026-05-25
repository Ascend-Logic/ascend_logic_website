# 修正ログ

## Round 1（セルフレビュー Warning 対応 / 2026-05-25）

ユーザー判断: W1=Node 22.x に統一 / W2=npm ci に統一（いずれも修正）。

| 指摘 | 修正内容 | 該当ファイル |
|---|---|---|
| W1: CI(.nvmrc=24) と Vercel 本番(Node 既定 22系) の不一致 | `.nvmrc` を `24`→`22`、`engines.node` を `">=22"`→`"22.x"` に変更。CI・本番・ローカルの Node メジャーを 22 に統一。Vercel ダッシュボードも 22.x に設定する旨を DEPLOYMENT.md に明記。 | `ascend-logic/.nvmrc`, `ascend-logic/package.json`, `ascend-logic/DEPLOYMENT.md` |
| W2: CI=`npm ci` と vercel.json の installCommand=`npm install` の不整合 | `vercel.json` の `installCommand` を `npm install`→`npm ci` に変更。lockfile 厳密化で CI と本番の依存ツリーを一致。 | `ascend-logic/vercel.json` |

注: Node 22 は移管前に本番(Vercel)で稼働していた実績ランタイム。ローカルは v24.2.0 だが `engines` は警告止まり（`.npmrc` の engine-strict 無し）のためローカルの `npm ci`/`build` は引き続き 24 で動作可能。

Critical は0件だったため Phase 8 の再レビューはスキップ（skill 規約: Critical 修正時のみ再レビュー）。修正は JSON 妥当性・YAML 読込・lint を再検証して確認。
