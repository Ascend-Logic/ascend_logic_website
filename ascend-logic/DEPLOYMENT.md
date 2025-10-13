# Vercelへのデプロイ手順

このドキュメントでは、Ascend LogicウェブサイトをVercelにデプロイする手順を説明します。

## 前提条件

- GitHubアカウント
- Vercelアカウント（無料プランで可能）
- リポジトリ: https://github.com/saotome06/ascend_logic_website.git

## デプロイ手順

### 1. Vercelアカウントにログイン

1. [Vercel](https://vercel.com)にアクセス
2. 「Sign Up」または「Log In」をクリック
3. GitHubアカウントで認証

### 2. 新しいプロジェクトをインポート

1. Vercelダッシュボードで「Add New...」→「Project」をクリック
2. 「Import Git Repository」セクションで、GitHubリポジトリを選択
3. `saotome06/ascend_logic_website` を検索して「Import」をクリック

### 3. プロジェクト設定

以下の設定が自動的に検出されます：

- **Framework Preset**: Next.js
- **Root Directory**: `ascend-logic`（重要：サブディレクトリを指定）
- **Build Command**: `npm run build`
- **Output Directory**: `.next`（自動設定）
- **Install Command**: `npm install`

#### Root Directoryの設定

リポジトリのルートではなく、`ascend-logic`ディレクトリをRoot Directoryに設定してください。

「Root Directory」欄で「Edit」をクリックし、`ascend-logic`を入力します。

### 4. 環境変数の設定

**重要**: お問い合わせフォームのメール送信機能を有効にするため、環境変数を設定してください。

1. 「Environment Variables」セクションを展開
2. 以下の環境変数を追加：

| 変数名 | 値 | 説明 |
|--------|-----|------|
| `EMAIL_USER` | your-email@gmail.com | Gmail送信元アドレス |
| `EMAIL_APP_PASSWORD` | xxxx-xxxx-xxxx-xxxx | Gmailアプリパスワード |

#### Gmailアプリパスワードの取得方法

1. Googleアカウントにログイン
2. [アプリパスワード設定ページ](https://myaccount.google.com/apppasswords)にアクセス
3. 「アプリを選択」→「その他（カスタム名）」を選択
4. 「Vercel - Ascend Logic」などの名前を入力
5. 「生成」をクリックして16桁のパスワードを取得
6. このパスワードを`EMAIL_APP_PASSWORD`に設定

**注意**:
- 2段階認証が有効になっている必要があります
- アプリパスワードは一度だけ表示されるため、必ず控えてください

### 5. デプロイ実行

1. すべての設定を確認
2. 「Deploy」ボタンをクリック
3. ビルドプロセスが開始されます（通常1〜3分）

### 6. デプロイ完了

デプロイが完了すると：

- 自動生成されたURL（例: `https://your-project.vercel.app`）が発行されます
- 「Visit」ボタンでサイトを確認できます
- カスタムドメインを設定することも可能です

## 自動デプロイ

Vercelは自動的にGitHubリポジトリと連携します：

- **本番環境**: `main`ブランチにプッシュすると自動デプロイ
- **プレビュー環境**: プルリクエストごとにプレビューURLが生成されます

## カスタムドメインの設定

1. Vercelダッシュボードでプロジェクトを選択
2. 「Settings」→「Domains」に移動
3. 「Add」ボタンをクリックしてドメインを追加
4. DNSレコードの設定指示に従う

### 推奨DNS設定

独自ドメイン（例: `ascendlogicai.com`）を使用する場合：

```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## トラブルシューティング

### ビルドエラーが発生する場合

1. Root Directoryが`ascend-logic`に設定されているか確認
2. Node.jsバージョンを確認（Vercelはデフォルトで最新LTSを使用）
3. ログを確認して具体的なエラーメッセージを特定

### メール送信が機能しない場合

1. 環境変数が正しく設定されているか確認
2. Gmailアプリパスワードが有効か確認
3. Vercelのログ（Deployment Logs）でエラーメッセージを確認

### パフォーマンス最適化

- Vercelは自動的にCDNで配信します
- 画像は`next/image`で自動最適化されます
- Edge Functionsを活用した高速配信

## モニタリング

Vercelダッシュボードで以下を確認できます：

- **Analytics**: アクセス数、パフォーマンスメトリクス
- **Logs**: リアルタイムログ、エラートレース
- **Speed Insights**: Core Web Vitalsのスコア

## コスト

- **Hobby（無料）プラン**: 個人プロジェクト向け、十分な機能
- **Pro プラン**: 商用サイトの場合は$20/月で推奨（パスワード保護、優先サポート等）

## 参考リンク

- [Vercel Next.js デプロイガイド](https://vercel.com/docs/frameworks/nextjs)
- [環境変数の設定](https://vercel.com/docs/concepts/projects/environment-variables)
- [カスタムドメイン設定](https://vercel.com/docs/concepts/projects/domains)
