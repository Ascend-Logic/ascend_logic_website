# zeus-plan-reviewer レポート

- タスク: main マージ時に Vercel 本番へ自動デプロイする CI/CD 整備
- 起動時刻: 2026-05-25 14:31 頃

---

## 総合判定: 条件付き承認

修正版は self-critique で C1/C2 など重要な落とし穴を潰しており堅牢。骨子（案A）と段階導入は妥当。ただし事実誤認1件（Critical）と運用懸念が複数あり、plan.md 確定前に修正必要。

## Critical
- **C1 の前提確認が Phase 0 に欠落**: DEPLOYMENT.md 30-37 行で Root Directory=ascend-logic は確定。C1 の結論「git ルートから実行」は結果的に正しい。だが org 移管でプロジェクト設定（Root Directory 含む）が保持されているか不明。Phase 0 に「ダッシュボード Settings → General → Root Directory が ascend-logic か目視確認」を明示追加すべき。

## Warning
- DEPLOYMENT.md は既存146行で、旧 Import 手順（個人リポジトリ前提・Git連携=本番デプロイ前提）と新CI/CDが矛盾。全面改稿が必要。
- **remote が saotome06/ascend_logic_website（個人）のまま**。タスクは「org 移管」。Actions を置くリポジトリと食い違う恐れ。Phase 0 で「Actions が動くべきリポジトリ（org/個人）を確定し remote を一致させる」。
- 段階導入の Phase 3→4 の間、Vercel連携の本番デプロイと Actions のデプロイが二重に走る期間がある。workflow_dispatch で先に検証し、push:main 化と main:false を同時投入して二重期間をゼロに。
- **「両方」の解釈固定リスク**: 案A は連携経由の本番デプロイを意図的に殺す。ユーザーが「連携経由でも本番デプロイされる状態」を期待しているなら別設計。実装前にユーザー確認すべき。
- **ascendlogicai.com のドメイン割り当て確認が欠落**。org 移管でプロジェクト作り直しならカスタムドメイン未割り当ての可能性。Phase 0 に追加。
- env 登録漏れ防止が「DEPLOYMENT.md に書く」止まり。env 未登録でもビルド/デプロイは成功し、フォーム送信時に初めて実行時エラー。Phase 0 で Production env に EMAIL_USER/EMAIL_APP_PASSWORD 登録済み確認を必須化。

## Info
- グローバル CLAUDE.md のテスト/監視要求は本タスク（CI/CD設定）では非適用と明記。
- setup-node の node-version-file / cache-dependency-path に ascend-logic/ プレフィックスを付ける案は正しい（defaults.working-directory は uses アクションのパス解決に影響しない）。
- ゴミディレクトリ削除は git 追跡外なので無害。CI/CDコミットとは分けて言及。
- deploy.yml に workflow_dispatch を併記すると段階導入の検証が容易。

## レビュアー所見（最重要3点）
1. C1 の前提（Vercel側 Root Directory=ascend-logic）の Phase 0 確認が必須。
2. remote が個人アカウントのまま — Actions を置くリポジトリとの整合を Phase 0 で確定。
3. 「両方」の解釈固定 — 実装前に解釈確認を。

---

## 反映: ユーザー確認結果（2026-05-25）
- リポジトリ: **Ascend-Logic org 配下** が正（ローカル remote は古い）。
- デプロイ主役: **Vercel 連携を主役に戻す（案B）**。GitHub Actions は品質ゲート専任（デプロイしない）。
→ これにより C1/C2/H3/H4（deploy系）は無関係化。Critical は解消。残課題は remote 修正・連携再接続・Root Directory/Production Branch/ドメイン/env 確認・DEPLOYMENT.md 改稿・Node 固定・CI ゲート新設。
