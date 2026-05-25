# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## プロジェクト概要

Ascend Logicは、AIソリューションを提供する企業のコーポレートサイトです。Next.js 15 (App Router) + TypeScript + Tailwind CSSで構築されています。

## 開発コマンド

### 基本コマンド
```bash
# 開発サーバーの起動（Turbopack使用）
npm run dev

# プロダクションビルド
npm run build

# プロダクションサーバーの起動
npm start

# ESLintによるコード検証
npm run lint
```

### その他
```bash
# Tailwind CSSの再初期化（通常は不要）
npm run tailwind:init
```

開発サーバーは http://localhost:3000 で起動します。

## アーキテクチャと構造

### Next.js App Routerの構造

このプロジェクトはNext.js 15のApp Routerを使用しています。主要なルート構成：

- `/` - トップページ（Hero、サービス概要、導入事例プレビュー）
- `/services` - サービス一覧ページ
- `/case-studies` - 導入事例一覧
- `/case-studies/[id]` - 個別の導入事例詳細（動的ルート）
- `/about` - 会社概要
- `/news` - お知らせ一覧
- `/request-documents` - お問い合わせフォーム
- `/api/request-documents` - お問い合わせフォームのAPIエンドポイント

### ディレクトリ構成

```
ascend-logic/
├── app/                    # Next.js App Routerのページとルート
│   ├── layout.tsx         # ルートレイアウト（Header/Footer含む）
│   ├── page.tsx           # トップページ
│   ├── globals.css        # グローバルスタイル
│   ├── services/          # サービスページ
│   ├── case-studies/      # 導入事例（一覧・詳細）
│   ├── about/             # 会社概要
│   ├── news/              # お知らせ
│   ├── request-documents/ # お問い合わせフォーム
│   └── api/               # APIルート
│       └── request-documents/
│           └── route.ts   # お問い合わせAPI
├── components/            # 再利用可能なコンポーネント
│   ├── home/             # トップページ専用コンポーネント
│   │   ├── Hero.tsx      # ヒーローセクション
│   │   ├── Services.tsx  # サービス概要カード
│   │   └── CaseStudyPreview.tsx # 事例プレビュー
│   ├── layout/           # レイアウトコンポーネント
│   │   ├── Header.tsx    # ヘッダー（ナビゲーション）
│   │   └── Footer.tsx    # フッター
│   └── ui/               # 汎用UIコンポーネント
│       ├── Button.tsx
│       ├── Card.tsx
│       └── Section.tsx
├── types/                # TypeScript型定義
│   └── index.ts         # 共通型（Service, CaseStudy, FormState等）
└── public/              # 静的ファイル（画像等）
```

### 型定義（types/index.ts）

プロジェクト全体で使用される型定義が集約されています：

- `Service` - サービス情報
- `CaseStudy` - 導入事例
- `FormState` - お問い合わせフォームの状態
- `NewsItem`, `TeamMember`, `Award` など

新しい型を追加する際は、このファイルに集約してください。

### コンポーネント設計

- **Client Components**: インタラクティブな機能が必要な場合は`"use client"`ディレクティブを使用（例: Header.tsx、フォーム）
- **Server Components**: デフォルトでサーバーコンポーネントを使用し、パフォーマンスを最適化
- **再利用性**: 共通のUIパターンは`components/ui/`に配置

### スタイリング

- Tailwind CSS v4を使用
- `app/globals.css`でグローバルスタイルとTailwindディレクティブを定義
- インラインクラス名でスタイリング（Utility-first approach）
- レスポンシブデザイン: モバイルファーストで`md:`, `lg:`などのブレークポイントを使用

### メール送信機能

お問い合わせフォーム（`/api/request-documents`）は以下の機能を提供：

- nodemailerを使用したGmail経由のメール送信
- 管理者への通知メールと、顧客への自動返信メールの2通を送信
- 環境変数で設定が必要: `EMAIL_USER`, `EMAIL_APP_PASSWORD`
- エラーハンドリング: エラー発生時も顧客には成功レスポンスを返す（UX配慮）

### 環境変数

`.env.local`ファイルで以下の環境変数を設定する必要があります（`.env.example`参照）:

```
EMAIL_USER=your-email@gmail.com
EMAIL_APP_PASSWORD=your-app-password
```

**重要**: `.env.local`はgitignoreされており、コミットされません。

### パスエイリアス

`tsconfig.json`で`@/*`エイリアスが設定されています：

```typescript
import Header from '@/components/layout/Header';
```

ルートディレクトリ（`ascend-logic/`）からの相対パスとして解決されます。

### ESLint設定

- Next.js標準の`next/core-web-vitals`と`next/typescript`を使用
- Flat Config形式（eslint.config.mjs）で設定

## 開発時の注意事項

### 日本語コンテンツ
- このサイトは日本語のコーポレートサイトです
- メタデータ、コンテンツ、UIテキストは日本語で記述してください
- `lang="ja"`がルートレイアウトで設定されています

### 動的ルート
- 導入事例の詳細ページは`/case-studies/[id]`で動的に生成されます
- 新しい動的ルートを追加する場合も同様のパターンを使用してください

### パフォーマンス
- Next.js 15のTurbopackを開発時に使用（`--turbopack`フラグ）
- 画像は`next/image`コンポーネントで最適化
- Client Componentは必要最小限に留め、デフォルトはServer Component

### メタデータ管理
- 各ページで`Metadata`型を使用してSEO対策を実施
- `layout.tsx`でテンプレート設定（`%s | Ascend Logic`）

### フォント設定
- **英数字**: Geist Sans（Vercel製のモダンなサンセリフフォント）
- **日本語**: Noto Sans JP（weight: 400, 500, 700, 900）
- CSS変数で管理: `--font-noto-sans-jp`
- `layout.tsx`で両フォントを組み合わせて設定

### SEO関連ファイル
- `app/sitemap.ts` - サイトマップの自動生成
- `app/robots.ts` - robots.txtの設定
- これらのファイルはNext.js 15の機能を使用して自動生成されます

### その他のページ
- `/privacy-policy` - プライバシーポリシーページ（法的要件）
