# zeus-architect レポート（self-critique）

- タスク: main マージ時に Vercel 本番へ自動デプロイする CI/CD 整備
- 起動時刻: 2026-05-25 14:28 頃

---

決定的事実（Vercel 公式/コミュニティ）: Vercel CLI は monorepo root から実行し、Root Directory 設定は Vercel が自動適用する。working-directory: ascend-logic から vercel build すると Root Directory が二重適用され ascend-logic/ascend-logic を掘る。物証として ascend-logic/ascend-logic/app/privacy-policy が現存。

## Critical
- **C1**: working-directory: ascend-logic で vercel CLI を実行するのは誤り。Root Directory 二重適用事故。→ deploy ワークフローは git ルートから vercel pull/build/deploy を実行し Root Directory を Vercel に委ねる。ci.yml は Vercel CLI を使わないので working-directory: ascend-logic で可。
- **C2**: git.deploymentEnabled はブランチ単位で commit トリガーのみ制御。CLI デプロイ（--prebuilt）は影響を受けない。main:false で PRプレビューは維持。ただし Production Branch が main である確認を Phase 0 に追加。

## High
- **H3**: format:check は内部で oxlint も実行。lint と format:check を両方並べると oxlint 二重実行。CI は format:check 一本に。
- **H4**: 本番 deploy ワークフローから品質ゲート（lint/format）を撤去。本番は「ビルドが通ること」だけを条件に。style 差分で本番が止まるのは可用性への自傷。品質は PR の ci.yml に集約。
- **H5**: route handler はビルド時に env を評価しない（nodemailer は await import、env はリクエスト時参照）。ci の next build にダミー EMAIL_* は不要。削除。

## Medium
- **M6**: .nvmrc=24（ローカル実態 Node 24.2.0 に統一）、engines.node=">=22"（緩い下限。engine-strict で npm ci が落ちない）。22.x 厳格固定は撤回。
- **M7**: PRプレビューは Vercel委譲だが連携未復旧だとプレビュー出ない。Phase 0 で連携復旧を最初に確認。
- **M8**: rollback（vercel rollback / Instant Rollback）とトークン失効時の縮退運用（一時的に deploymentEnabled.main=true）を DEPLOYMENT.md に明記。
- **M9**: 実装/push は /zeus:dev の役割。ブランチを切ってから作業（main 直コミット禁止）。

## 段階導入
Phase 3 で deploy.yml 追加、deploymentEnabled.main=false は Phase 4（Actions デプロイ成功確認後）まで入れない。先に自動デプロイを切ると本番が更新されなくなる事故を防ぐ。

## 修正版ファイル（案A前提）
- deploy-production.yml: git ルートから実行、品質ゲート無し、env VERCEL_ORG_ID/PROJECT_ID
- ci.yml: working-directory ascend-logic、npm ci→format:check→build（env なし）
- vercel.json: deploymentEnabled.main=false + $schema
- package.json: engines.node=">=22"
- .nvmrc: 24
- ascend-logic/ascend-logic/ 削除

Sources: Vercel Git Configuration / Deploying from CLI / Project Linking / Monorepos docs.

※最終的にユーザーが案B（Vercel主役）を選択したため、C1/C2/H3/H4 の deploy 系指摘は無関係化。H5/M6/M7（連携復旧順序）/ドメイン・env 確認は案B でも有効。
