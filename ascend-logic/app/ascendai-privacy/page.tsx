import { Metadata } from 'next'
import { ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import Section from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Ascend Agent プライバシーポリシー',
  description: 'Ascend Agentのプライバシーポリシー。Google Workspace連携、データ収集・保管、セキュリティ対策について詳しくご説明します。',
  keywords: 'Ascend Agent, プライバシーポリシー, Google Workspace, Calendar API, 個人情報保護, GDPR, データセキュリティ',
  openGraph: {
    title: 'Ascend Agent プライバシーポリシー',
    description: 'Ascend Agentにおける個人情報の取り扱いとデータ保護について',
    type: 'website',
  },
}

export default function AscendAgentPrivacyPolicy() {
  const lastUpdated = '2025年12月23日'

  return (
    <>
      {/* ヒーローセクション */}
      <Section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">プライバシーポリシー</h1>
          <p className="text-xl text-gray-300 mb-2">Ascend Agent</p>
          <p className="text-sm text-gray-400">最終更新日: {lastUpdated}</p>
        </div>
      </Section>

      {/* メインコンテンツ */}
      <Section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">
            {/* 前文 */}
            <div className="mb-12 pb-8 border-b">
              <p className="text-lg leading-relaxed text-gray-700">
                株式会社Ascend Logic（以下「当社」）は、Ascend Agentサービス（以下「本サービス」）をご利用いただくお客様の個人情報保護を最優先事項として位置づけています。
                本プライバシーポリシーでは、本サービスにおける個人情報の収集、使用、保管、保護について詳細にご説明します。
              </p>
            </div>

            {/* 目次 */}
            <nav className="mb-12 p-6 bg-gray-50 rounded">
              <h2 className="text-xl font-bold mb-4 text-gray-900">目次</h2>
              <ol className="space-y-2 text-gray-700">
                <li>
                  <a href="#section-1" className="hover:text-gray-900">
                    1. 本サービスについて
                  </a>
                </li>
                <li>
                  <a href="#section-2" className="hover:text-gray-900">
                    2. 収集する情報
                  </a>
                </li>
                <li>
                  <a href="#section-3" className="hover:text-gray-900">
                    3. 情報の利用目的
                  </a>
                </li>
                <li>
                  <a href="#section-4" className="hover:text-gray-900">
                    4. Google API Services の使用
                  </a>
                </li>
                <li>
                  <a href="#section-5" className="hover:text-gray-900">
                    5. データの保管とセキュリティ
                  </a>
                </li>
                <li>
                  <a href="#section-6" className="hover:text-gray-900">
                    6. データの第三者提供
                  </a>
                </li>
                <li>
                  <a href="#section-7" className="hover:text-gray-900">
                    7. ユーザーの権利
                  </a>
                </li>
                <li>
                  <a href="#section-8" className="hover:text-gray-900">
                    8. GDPR 準拠
                  </a>
                </li>
                <li>
                  <a href="#section-9" className="hover:text-gray-900">
                    9. データ保持期間
                  </a>
                </li>
                <li>
                  <a href="#section-10" className="hover:text-gray-900">
                    10. お問い合わせ
                  </a>
                </li>
              </ol>
            </nav>

            {/* 第1条 */}
            <section id="section-1" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-900">1. 本サービスについて</h2>
              <p className="mb-4">
                <strong>Ascend Agent</strong>は、 議事録管理とRAG（Retrieval-Augmented Generation）ベースのチャット機能を提供するクラウドサービスです。
              </p>

              <h3 className="text-lg font-bold mt-6 mb-3">主な機能</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Google Workspace連携: Google Calendar APIを使用したカレンダーイベント同期</li>
                <li>会議録画の文字起こし: AI技術による自動文字起こし</li>
                <li>AI議事録生成: 文字起こしテキストから構造化された議事録を自動生成</li>
                <li>カレンダーイベント管理: カレンダーイベントの表示、同期、管理</li>
                <li>RAGチャット機能: 蓄積されたナレッジベースに基づく対話型AI検索</li>
                <li>ナレッジ管理: 組織内の知識の体系的な管理と検索</li>
              </ul>

              <h3 className="text-lg font-bold mt-6 mb-3">使用技術スタック</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>フロントエンド: Next.js</li>
                <li>バックエンド: FastAPI (Python)</li>
                <li>データベース: Google Cloud SQL (PostgreSQL)</li>
                <li>認証: Firebase Authentication</li>
                <li>ストレージ: Google Cloud Storage</li>
              </ul>
            </section>

            {/* 第2条 */}
            <section id="section-2" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-900">2. 収集する情報</h2>

              <h3 className="text-lg font-bold mt-6 mb-3">2.1 Google Calendar API から収集する情報</h3>
              <p className="mb-3">本サービスは、Google Calendar API を使用して以下の情報を収集します：</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  カレンダーイベント情報
                  <ul className="list-circle pl-6 mt-1 space-y-1">
                    <li>イベントの件名（タイトル）</li>
                    <li>イベントの説明文</li>
                    <li>開催場所</li>
                    <li>開始時刻・終了時刻</li>
                    <li>参加者のメールアドレスと応答ステータス</li>
                    <li>イベントの主催者情報</li>
                    <li>イベントのリンク（Google Meet等）</li>
                  </ul>
                </li>
                <li>繰り返しイベントの情報（繰り返しルール、例外日等）</li>
                <li>カレンダーの表示設定（タイムゾーン等）</li>
              </ul>

              <div className="bg-gray-50 p-4 rounded mb-6">
                <p className="text-sm font-semibold mb-2">使用する API スコープ:</p>
                <code className="text-sm bg-white px-2 py-1 rounded block mb-2">https://www.googleapis.com/auth/calendar.readonly</code>
                <p className="text-sm text-gray-600">このスコープにより、カレンダーイベントの読み取り専用アクセスが可能になります。 カレンダーへの書き込みや変更は一切行いません。</p>
              </div>

              <h3 className="text-lg font-bold mt-6 mb-3">2.2 ユーザー認証情報</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>メールアドレス - アカウント識別とログインに使用</li>
                <li>基本プロフィール情報 - 氏名、プロフィール画像URL</li>
                <li>Firebase Authentication UID - 内部的なユーザー識別子</li>
                <li>OAuth トークン - Google API アクセス用のアクセストークンとリフレッシュトークン</li>
              </ul>

              <div className="bg-gray-50 p-4 rounded mb-6">
                <p className="text-sm font-semibold mb-2">使用する API スコープ:</p>
                <code className="text-sm bg-white px-2 py-1 rounded block mb-1">https://www.googleapis.com/auth/userinfo.email</code>
                <code className="text-sm bg-white px-2 py-1 rounded block">https://www.googleapis.com/auth/userinfo.profile</code>
              </div>

              <h3 className="text-lg font-bold mt-6 mb-3">2.3 アプリケーション利用データ</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>会議録画ファイル - Google Meet等の会議録画（ユーザーがアップロード）</li>
                <li>文字起こしテキスト - 録画ファイルから生成された文字起こしデータ</li>
                <li>AI生成議事録 - 文字起こしテキストから生成された構造化議事録</li>
                <li>チャット履歴 - RAGチャット機能で行われた質問と回答の履歴</li>
                <li>ユーザー設定 - 通知設定、表示設定等のユーザー個別設定</li>
                <li>利用ログ - アクセス日時、操作内容、エラーログ等</li>
              </ul>

              <h3 className="text-lg font-bold mt-6 mb-3">2.4 技術的情報</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>IPアドレス</li>
                <li>ブラウザの種類とバージョン</li>
                <li>デバイス情報（OS、画面解像度等）</li>
                <li>Cookie とセッション情報</li>
                <li>アクセスログ（日時、参照元URL等）</li>
              </ul>
            </section>

            {/* 第3条 */}
            <section id="section-3" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-900">3. 情報の利用目的</h2>
              <p className="mb-4">当社は、収集した情報を以下の目的で利用します：</p>

              <h3 className="text-lg font-bold mt-6 mb-3">サービスの提供</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>カレンダーイベントの表示・同期</li>
                <li>会議録画の文字起こし</li>
                <li>AI議事録の自動生成</li>
                <li>RAGチャット機能の提供</li>
              </ul>

              <h3 className="text-lg font-bold mt-6 mb-3">認証とアクセス管理</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>ユーザー認証とログイン処理</li>
                <li>アカウントの識別と管理</li>
                <li>マルチテナント環境でのデータ分離</li>
              </ul>

              <h3 className="text-lg font-bold mt-6 mb-3">サービス改善</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>利用状況の分析</li>
                <li>エラーの検出と修正</li>
                <li>新機能の開発</li>
                <li>ユーザー体験の向上</li>
              </ul>

              <h3 className="text-lg font-bold mt-6 mb-3">セキュリティ</h3>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>不正アクセスの検出と防止</li>
                <li>利用規約違反の調査</li>
                <li>セキュリティ監査</li>
              </ul>

              <h3 className="text-lg font-bold mt-6 mb-3">法令遵守</h3>
              <ul className="list-disc pl-6 space-y-1">
                <li>法的義務の履行</li>
                <li>規制当局への報告</li>
                <li>法的手続きへの対応</li>
              </ul>
            </section>

            {/* 第4条 */}
            <section id="section-4" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-900">4. Google API Services の使用</h2>

              <div className="bg-gray-50 border-l-4 border-gray-900 p-6 mb-6">
                <h3 className="font-bold text-lg mb-3">重要: Google API Services ユーザーデータポリシー遵守</h3>
                <p className="mb-3">
                  本サービスは、<strong>Google API Services のユーザーデータポリシー</strong>
                  （限定的な使用要件を含む）を完全に遵守しています。
                </p>
                <a
                  href="https://developers.google.com/terms/api-services-user-data-policy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-gray-900 hover:underline font-semibold"
                >
                  Google API Services User Data Policy を確認する <ArrowUpRight className="w-4 h-4" />
                </a>
              </div>

              <h3 className="text-lg font-bold mt-6 mb-3">限定的な使用の原則</h3>
              <p className="mb-3">Google API から取得したデータは、以下の原則に従って限定的に使用されます：</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <strong>目的の限定</strong>: Google API から取得したデータは、ユーザーに明示された機能の提供のためにのみ使用されます
                </li>
                <li>
                  <strong>第三者への共有禁止</strong>: Google API データを第三者と共有、販売、またはレンタルすることはありません
                </li>
                <li>
                  <strong>広告目的での使用禁止</strong>: Google API データを広告配信やターゲティングの目的で使用することはありません
                </li>
                <li>
                  <strong>人間による閲覧の制限</strong>: 人間による Google API データの閲覧は、セキュリティ、法令遵守、サービス提供に必要な場合に限定されます
                </li>
              </ul>

              <h3 className="text-lg font-bold mt-6 mb-3">データアクセスの透明性</h3>
              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">収集データ</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">使用目的</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">保管場所</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">カレンダーイベント情報</td>
                      <td className="border border-gray-300 px-4 py-2">イベント表示、会議との紐付け</td>
                      <td className="border border-gray-300 px-4 py-2">Google Cloud SQL</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">参加者情報</td>
                      <td className="border border-gray-300 px-4 py-2">会議参加者の表示</td>
                      <td className="border border-gray-300 px-4 py-2">Google Cloud SQL</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">メールアドレス</td>
                      <td className="border border-gray-300 px-4 py-2">アカウント識別、認証</td>
                      <td className="border border-gray-300 px-4 py-2">Firebase Auth / Cloud SQL</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">基本プロフィール</td>
                      <td className="border border-gray-300 px-4 py-2">ユーザー表示名の提供</td>
                      <td className="border border-gray-300 px-4 py-2">Firebase Auth / Cloud SQL</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold mt-6 mb-3">OAuth 連携の解除</h3>
              <p className="mb-3">ユーザーは、いつでも以下の方法で Google Workspace 連携を解除できます：</p>

              <h4 className="font-semibold mt-4 mb-2">方法1: Google アカウント設定から解除</h4>
              <ol className="list-decimal pl-6 space-y-1 mb-4">
                <li>
                  Google アカウント（
                  <a href="https://myaccount.google.com/" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline">
                    myaccount.google.com
                  </a>
                  ）にアクセス
                </li>
                <li>「セキュリティ」→「サードパーティによるアクセス」を選択</li>
                <li>「Ascend Agent」を探して「アクセスを削除」をクリック</li>
              </ol>

              <h4 className="font-semibold mt-4 mb-2">方法2: 本サービス内から解除</h4>
              <p className="mb-4">Ascend Agent の設定画面から「Google Workspace 連携を解除」ボタンをクリック</p>

              <p className="text-sm text-gray-600">
                連携を解除すると、カレンダーイベントの同期が停止しますが、既に収集されたデータは削除されません。 データの削除を希望される場合は、
                <a href="#section-7" className="underline">
                  「7. ユーザーの権利」
                </a>
                をご確認ください。
              </p>
            </section>

            {/* 第5条 */}
            <section id="section-5" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-900">5. データの保管とセキュリティ</h2>

              <h3 className="text-lg font-bold mt-6 mb-3">5.1 データ保管場所</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>データベース: Google Cloud SQL（PostgreSQL） - 日本国内リージョン（asia-northeast1）</li>
                <li>ファイルストレージ: Google Cloud Storage - 日本国内バケット</li>
                <li>認証情報: Firebase Authentication - Google管理の安全な環境</li>
              </ul>
              <p className="text-sm text-gray-600 mb-6">すべてのデータは日本国内のデータセンターに保管され、データ主権とGDPR要件に準拠しています。</p>

              <h3 className="text-lg font-bold mt-6 mb-3">5.2 セキュリティ対策</h3>

              <h4 className="font-semibold mt-4 mb-2">暗号化</h4>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>通信時: SSL/TLS 暗号化（HTTPS）</li>
                <li>保存時: AES-256 暗号化</li>
                <li>OAuth トークン: 安全に暗号化して保存</li>
              </ul>

              <h4 className="font-semibold mt-4 mb-2">アクセス制御</h4>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>マルチテナント分離アーキテクチャ</li>
                <li>役割ベースアクセス制御（RBAC）</li>
                <li>最小権限の原則の適用</li>
              </ul>

              <h4 className="font-semibold mt-4 mb-2">監視とログ</h4>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>24時間365日のセキュリティ監視</li>
                <li>異常アクセスの検出とアラート</li>
                <li>監査ログの記録と保持</li>
              </ul>

              <h4 className="font-semibold mt-4 mb-2">定期監査</h4>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>セキュリティ脆弱性スキャン</li>
                <li>ペネトレーションテスト</li>
                <li>コンプライアンス監査</li>
              </ul>

              <h3 className="text-lg font-bold mt-6 mb-3">5.3 バックアップと災害対策</h3>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>自動バックアップ: 毎日自動的にデータベースとファイルのバックアップを実施</li>
                <li>バックアップ保持: 30日間のバックアップ履歴を保持</li>
                <li>災害復旧計画: RPO（目標復旧時点）24時間、RTO（目標復旧時間）4時間以内</li>
                <li>地理的冗長化: 複数のアベイラビリティゾーンにデータを複製</li>
              </ul>

              <h3 className="text-lg font-bold mt-6 mb-3">5.4 従業員のアクセス管理</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>個人情報へのアクセスは業務上必要な従業員に限定</li>
                <li>全従業員に対する秘密保持契約（NDA）の締結</li>
                <li>定期的なセキュリティ研修の実施</li>
                <li>アクセスログの記録と定期的な監査</li>
              </ul>
            </section>

            {/* 第6条 */}
            <section id="section-6" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-900">6. データの第三者提供</h2>

              <div className="bg-gray-50 border-l-4 border-gray-900 p-6 mb-6">
                <h3 className="font-bold text-lg mb-3">基本方針: 第三者への提供は行いません</h3>
                <p>
                  当社は、お客様の個人情報を第三者に販売、レンタル、または共有することは
                  <strong>一切ありません</strong>。
                </p>
              </div>

              <h3 className="text-lg font-bold mt-6 mb-3">例外的に提供する場合</h3>
              <p className="mb-3">以下の場合に限り、個人情報を第三者に提供することがあります：</p>
              <ul className="list-disc pl-6 space-y-3 mb-6">
                <li>
                  <strong>法令に基づく場合</strong>
                  <br />
                  <span className="text-sm text-gray-600">裁判所、警察、税務署などの公的機関から法令に基づく開示要請があった場合</span>
                </li>
                <li>
                  <strong>生命・身体・財産の保護のため</strong>
                  <br />
                  <span className="text-sm text-gray-600">人の生命、身体または財産の保護のために必要があり、本人の同意を得ることが困難な場合</span>
                </li>
                <li>
                  <strong>国の機関等への協力</strong>
                  <br />
                  <span className="text-sm text-gray-600">国の機関や地方公共団体が法令の定める事務を遂行する際に協力する必要がある場合</span>
                </li>
                <li>
                  <strong>お客様の同意がある場合</strong>
                  <br />
                  <span className="text-sm text-gray-600">お客様から明示的な同意を得た場合</span>
                </li>
              </ul>

              <h3 className="text-lg font-bold mt-6 mb-3">業務委託先について</h3>
              <p className="mb-3">サービス提供のため、以下の業務委託先にデータ処理を委託していますが、これらは「第三者提供」には該当しません：</p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>
                  <strong>Google Cloud Platform</strong> - インフラストラクチャ提供
                  <br />
                  <span className="text-sm text-gray-600">データベース、ストレージ、コンピューティングリソースの提供</span>
                </li>
                <li>
                  <strong>Firebase</strong> - 認証サービス提供
                  <br />
                  <span className="text-sm text-gray-600">ユーザー認証とトークン管理</span>
                </li>
              </ul>
              <p className="text-sm text-gray-600">これらの委託先とは適切な秘密保持契約を締結し、個人情報の安全管理について定期的な監督を行っています。</p>
            </section>

            {/* 第7条 */}
            <section id="section-7" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-900">7. ユーザーの権利</h2>
              <p className="mb-4">お客様は、ご自身の個人情報について以下の権利を有します：</p>

              <h3 className="text-lg font-bold mt-6 mb-3">アクセス権</h3>
              <p className="mb-4">ご自身の個人情報がどのように収集・使用されているか確認する権利</p>

              <h3 className="text-lg font-bold mt-6 mb-3">訂正権</h3>
              <p className="mb-4">不正確または不完全な個人情報の訂正・追加を要求する権利</p>

              <h3 className="text-lg font-bold mt-6 mb-3">削除権（忘れられる権利）</h3>
              <p className="mb-4">特定の条件下で個人情報の削除を要求する権利</p>

              <h3 className="text-lg font-bold mt-6 mb-3">処理の制限権</h3>
              <p className="mb-4">個人情報の処理を制限するよう要求する権利</p>

              <h3 className="text-lg font-bold mt-6 mb-3">データポータビリティ権</h3>
              <p className="mb-4">構造化された一般的な形式で個人情報を受け取り、他のサービスに移管する権利</p>

              <h3 className="text-lg font-bold mt-6 mb-3">異議申立権</h3>
              <p className="mb-6">個人情報の処理に異議を申し立てる権利</p>

              <div className="bg-gray-50 p-6 rounded mb-6">
                <h3 className="font-bold text-lg mb-3">権利の行使方法</h3>
                <p className="mb-3">上記の権利を行使される場合は、以下のお問い合わせ窓口までご連絡ください：</p>
                <p className="font-semibold">メール:</p>
                <a href="mailto:rsaotome@ascendlogicai.com" className="text-gray-900 underline mb-2 block">
                  rsaotome@ascendlogicai.com
                </a>
                <p className="text-sm text-gray-600">件名: 「個人情報に関する権利行使の申請」</p>
                <p className="text-sm text-gray-600 mt-3">
                  ご本人確認を行った上で、法令に従い適切に対応いたします。通常、
                  <strong>7営業日以内</strong>に回答いたします。
                </p>
              </div>

              <h3 className="text-lg font-bold mt-6 mb-3">アカウント削除について</h3>
              <p className="mb-3">アカウントを完全に削除する場合、以下のデータが削除されます：</p>
              <ul className="list-disc pl-6 space-y-1 mb-4">
                <li>ユーザープロフィール情報</li>
                <li>カレンダーイベントデータ</li>
                <li>会議録画ファイルと文字起こしテキスト</li>
                <li>AI生成議事録</li>
                <li>チャット履歴</li>
                <li>すべての利用ログ（法令で保持が義務付けられているものを除く）</li>
              </ul>
              <p className="text-sm text-gray-600">
                アカウント削除は<strong>不可逆的な操作</strong>
                です。削除後、データの復旧は一切できませんのでご注意ください。
              </p>
            </section>

            {/* 第8条 */}
            <section id="section-8" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-900">8. GDPR 準拠</h2>

              <h3 className="text-lg font-bold mt-6 mb-3">8.1 EU居住者の皆様へ</h3>
              <p className="mb-3">
                当社は、<strong>EU一般データ保護規則（GDPR）</strong>
                を遵守し、EU居住者の個人データを適切に保護します。
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>データ処理の法的根拠の明確化</li>
                <li>データ最小化の原則の適用</li>
                <li>データ保護影響評価（DPIA）の実施</li>
                <li>72時間以内のデータ侵害通知</li>
                <li>データ保護責任者（DPO）の指名</li>
              </ul>

              <h3 className="text-lg font-bold mt-6 mb-3">8.2 データ処理の法的根拠</h3>
              <p className="mb-3">当社は、以下の法的根拠に基づいて個人データを処理します：</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>
                  <strong>契約の履行</strong>: サービス提供契約の履行に必要な処理
                </li>
                <li>
                  <strong>同意</strong>: お客様から明示的な同意を得た処理
                </li>
                <li>
                  <strong>正当な利益</strong>: サービス改善、セキュリティ対策等の正当な利益のための処理
                </li>
                <li>
                  <strong>法的義務</strong>: 法令遵守のために必要な処理
                </li>
              </ul>

              <h3 className="text-lg font-bold mt-6 mb-3">8.3 国際データ転送</h3>
              <p className="mb-3">当社は日本国内でデータを保管していますが、EU圏外へのデータ転送が発生する場合は、以下の適切な保護措置を講じます：</p>
              <ul className="list-disc pl-6 space-y-2 mb-6">
                <li>標準契約条項（SCC）の締結</li>
                <li>適切性認定を受けた国へのデータ転送</li>
                <li>拘束的企業準則（BCR）の適用</li>
              </ul>

              <h3 className="text-lg font-bold mt-6 mb-3">8.4 監督機関への苦情申立</h3>
              <p className="mb-3">EU居住者の方は、データ保護に関する懸念事項について、お住まいの国のデータ保護監督機関に苦情を申し立てる権利があります。</p>
              <p className="text-sm text-gray-600">
                各国の監督機関のリストは、
                <a href="https://edpb.europa.eu/about-edpb/board/members_en" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline">
                  欧州データ保護会議（EDPB）のウェブサイト
                </a>
                でご確認いただけます。
              </p>
            </section>

            {/* 第9条 */}
            <section id="section-9" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-900">9. データ保持期間</h2>
              <p className="mb-4">当社は、収集した個人情報を以下の期間保持します：</p>

              <div className="overflow-x-auto mb-6">
                <table className="w-full border-collapse border border-gray-300">
                  <thead>
                    <tr className="bg-gray-100">
                      <th className="border border-gray-300 px-4 py-2 text-left">データの種類</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">保持期間</th>
                      <th className="border border-gray-300 px-4 py-2 text-left">保持理由</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">ユーザーアカウント情報</td>
                      <td className="border border-gray-300 px-4 py-2">アカウント削除まで</td>
                      <td className="border border-gray-300 px-4 py-2">サービス提供のため</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">カレンダーイベントデータ</td>
                      <td className="border border-gray-300 px-4 py-2">アカウント削除まで</td>
                      <td className="border border-gray-300 px-4 py-2">イベント管理機能の提供</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">会議録画・文字起こし</td>
                      <td className="border border-gray-300 px-4 py-2">ユーザー削除操作まで</td>
                      <td className="border border-gray-300 px-4 py-2">議事録生成機能の提供</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">AI生成議事録</td>
                      <td className="border border-gray-300 px-4 py-2">ユーザー削除操作まで</td>
                      <td className="border border-gray-300 px-4 py-2">ナレッジベース構築</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">チャット履歴</td>
                      <td className="border border-gray-300 px-4 py-2">6ヶ月間</td>
                      <td className="border border-gray-300 px-4 py-2">RAG機能の精度向上</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">アクセスログ</td>
                      <td className="border border-gray-300 px-4 py-2">90日間</td>
                      <td className="border border-gray-300 px-4 py-2">セキュリティ監視</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">監査ログ</td>
                      <td className="border border-gray-300 px-4 py-2">7年間</td>
                      <td className="border border-gray-300 px-4 py-2">法令遵守（会社法等）</td>
                    </tr>
                    <tr>
                      <td className="border border-gray-300 px-4 py-2">バックアップデータ</td>
                      <td className="border border-gray-300 px-4 py-2">30日間</td>
                      <td className="border border-gray-300 px-4 py-2">災害復旧対策</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <h3 className="text-lg font-bold mt-6 mb-3">保持期間経過後の処理</h3>
              <p className="mb-2">保持期間が経過したデータは、以下の方法で安全に削除されます：</p>
              <ul className="list-disc pl-6 space-y-1 mb-6">
                <li>データベースからの完全削除（物理削除）</li>
                <li>バックアップデータからの削除</li>
                <li>ログファイルの自動パージ</li>
                <li>削除証明の記録保持</li>
              </ul>

              <p className="text-sm text-gray-600">
                一部のデータは、会社法、税法、その他の法令により、一定期間の保持が義務付けられています。 これらのデータについては、法定保存期間が経過するまで削除できない場合があります。
              </p>
            </section>

            {/* 第10条 */}
            <section id="section-10" className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-900">10. お問い合わせ</h2>
              <p className="mb-6">本プライバシーポリシーに関するご質問、個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください。</p>

              <div className="bg-gray-50 p-6 rounded space-y-3">
                <div>
                  <p className="font-semibold text-gray-900">事業者名</p>
                  <p className="text-gray-700">株式会社Ascend Logic</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">代表者</p>
                  <p className="text-gray-700">代表取締役 早乙女 琉真</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">所在地</p>
                  <p className="text-gray-700">〒198-0031 東京都青梅市師岡町1-125-14</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">メールアドレス</p>
                  <a href="mailto:rsaotome@ascendlogicai.com" className="text-gray-900 underline">
                    rsaotome@ascendlogicai.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">ウェブサイト</p>
                  <a href="https://ascendlogicai.com" target="_blank" rel="noopener noreferrer" className="text-gray-900 underline">
                    https://ascendlogicai.com
                  </a>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">対応時間</p>
                  <p className="text-gray-700">平日 10:00 - 18:00（土日祝日を除く）</p>
                  <p className="text-sm text-gray-600">時間外のお問い合わせについては、翌営業日に対応いたします</p>
                </div>
              </div>

              <div className="mt-6 p-4 bg-gray-50 rounded">
                <h3 className="font-bold mb-2">個人情報保護管理者</h3>
                <p className="text-gray-700">代表取締役 早乙女 琉真</p>
                <p className="text-sm text-gray-600 mt-2">個人情報の適切な管理と保護について全体的な責任を負っています。</p>
              </div>
            </section>

            {/* ポリシー変更履歴 */}
            <section className="mb-12 scroll-mt-20">
              <h2 className="text-2xl font-bold mb-4 pb-2 border-b-2 border-gray-900">ポリシーの変更</h2>
              <p className="mb-3">当社は、法令の改正、サービス内容の変更、社会情勢の変化等に応じて、本プライバシーポリシーを変更することがあります。</p>
              <p className="mb-6">変更後のプライバシーポリシーは、本ページに掲載した時点から効力を生じます。 重要な変更がある場合は、サービス内での通知またはメールにてお知らせします。</p>

              <div className="bg-gray-50 p-6 rounded">
                <h3 className="font-bold mb-3">変更履歴</h3>
                <p>2025年12月23日: 初版制定</p>
              </div>
            </section>

            {/* 最終更新日 */}
            <div className="text-center pt-8 border-t">
              <p className="text-gray-700 font-semibold">最終更新日: {lastUpdated}</p>
              <p className="text-sm text-gray-500 mt-2">制定日: 2025年12月23日</p>
            </div>
          </div>
        </div>
      </Section>

      {/* フッターCTA */}
      <Section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">ご不明な点がございますか？</h2>
          <p className="text-lg mb-6 text-gray-300">プライバシーポリシーに関するご質問は、お気軽にお問い合わせください</p>
          <Link href="/request-documents" className="inline-block bg-white text-gray-900 px-8 py-3 rounded font-semibold hover:bg-gray-100 transition-colors">
            お問い合わせ
          </Link>
        </div>
      </Section>
    </>
  )
}
