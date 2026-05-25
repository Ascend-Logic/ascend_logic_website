# zeus-explorer レポート

- タスク: main マージ時に Vercel 本番（ascendlogicai.com）へ自動デプロイする CI/CD 整備
- 起動時刻: 2026-05-25 14:23:07

---

調査が完了。入れ子 `ascend-logic/ascend-logic/app/privacy-policy/` は完全に空のディレクトリで、git 追跡もされていない無害な遺物。

## アーキテクチャ概観（リポジトリ構成）

```
/Users/saotome/ascend_logic/   ← git root (remote: github.com/saotome06/ascend_logic_website)
├── .gitignore                 ← 中身は1行「Ascend Logic Homepage v1/」のみ
├── README.md
├── CLAUDE.md
├── Ascend Logic Homepage v1/  ← git追跡外（root .gitignore で除外。デザイン資料の遺物）
└── ascend-logic/              ← ★ Next.js アプリ本体 = Vercel Root Directory
    ├── package.json / package-lock.json (lockfileVersion 3)
    ├── next.config.ts
    ├── vercel.json
    ├── .gitignore             ← .env* と .vercel を除外
    ├── .oxlintrc.json / .oxfmtrc.json
    ├── DEPLOYMENT.md          ← ★ 既存のVercelデプロイ手順書
    ├── app/ components/ lib/ types/ public/
    └── ascend-logic/app/privacy-policy/  ← 空ディレクトリ・git追跡外（無害な遺物）
```

### 重要な構造的事実
- Next.js 本体は git root 直下ではなく `ascend-logic/` サブディレクトリ。Vercel の Root Directory・GitHub Actions の working-directory は ascend-logic を指す必要がある。
- `ascend-logic/ascend-logic/` は app/privacy-policy/ のみを含む空ディレクトリツリー。git 追跡外。無視可。
- node_modules も .next も git 追跡されていない。.env* も追跡外（健全）。

## 主要発見
1. ascend-logic/DEPLOYMENT.md に既に「main push で Vercel 自動デプロイ」「Root Directory=ascend-logic」が記述済み。二重デプロイ回避の最重要論点。
2. vercel.json は最小構成（buildCommand/devCommand/installCommand/framework:nextjs/regions:[hnd1]）。Root Directory 指定は無くダッシュボード依存。
3. lint は oxlint（ESLint ではない）。build=next build, lint=`oxlint . --type-aware`, format:check=`oxfmt --check . && oxlint . --type-aware`。
4. Node バージョン指定が一切無い（.nvmrc 無し / engines 無し）。lockfileVersion 3。next ^15.5.9 / react ^19。
5. 本番必須 env: EMAIL_USER / EMAIL_APP_PASSWORD（/api/request-documents の nodemailer）。
6. .github/workflows は存在しない（ゼロ新設）。

## 必読ファイル一覧
- ascend-logic/DEPLOYMENT.md — 二重デプロイ回避方針の決定に直結。Root Directory=ascend-logic の根拠。
- ascend-logic/vercel.json — デプロイ設定の現状。
- ascend-logic/package.json — CI で叩く build/lint/format:check と依存。
- ascend-logic/.env.example — Vercel に登録すべき env キー。
- ascend-logic/.gitignore — .env* と .vercel 除外確認。
- root .gitignore — 特殊構成確認。
- ascend-logic/.oxlintrc.json — CI lint ゲート挙動（correctness: error）。
- ascend-logic/next.config.ts — code-inspector-plugin の確認。

## 留意事項
1. 二重デプロイが最大リスク。方針を最初に固定すること。
2. monorepo 風サブディレクトリ構成。全 CI ステップで working-directory: ascend-logic 必須。setup-node の cache-dependency-path も ascend-logic/package-lock.json。
3. Node バージョン未固定。CI で node-version 明示推奨。
4. lint は oxlint。
5. ascend-logic/ascend-logic/ 空ディレクトリは無視可。
6. env 登録漏れ注意（メール送信が無言失敗）。
