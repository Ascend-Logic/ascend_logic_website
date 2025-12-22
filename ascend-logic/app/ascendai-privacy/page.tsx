import { Metadata } from 'next';
import Section from '../../components/ui/Section';

export const metadata: Metadata = {
  title: 'AscendAI プライバシーポリシー',
  description: 'AscendAI（MeetingRAG）のプライバシーポリシー。Google Workspace連携、データ収集・保管、セキュリティ対策について詳しくご説明します。',
  keywords: 'AscendAI, MeetingRAG, プライバシーポリシー, Google Workspace, Calendar API, 個人情報保護, GDPR, データセキュリティ',
  openGraph: {
    title: 'AscendAI プライバシーポリシー',
    description: 'AscendAI（MeetingRAG）における個人情報の取り扱いとデータ保護について',
    type: 'website',
  },
};

export default function AscendAIPrivacyPolicy() {
  const lastUpdated = '2025年12月23日';

  return (
    <>
      {/* ヒーローセクション */}
      <Section className="py-16 bg-gradient-to-br from-indigo-900 via-purple-900 to-indigo-800 text-white">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              AscendAI プライバシーポリシー
            </h1>
            <p className="text-xl md:text-2xl text-indigo-100 mb-2">
              議事録管理・RAGチャットシステム
            </p>
            <p className="text-sm text-indigo-200">
              最終更新日: {lastUpdated}
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
            <p className="text-lg leading-relaxed">
              株式会社Ascend Logic（以下「当社」）は、AscendAI（MeetingRAG）サービス（以下「本サービス」）をご利用いただくお客様の個人情報保護を最優先事項として位置づけています。
              本プライバシーポリシーでは、本サービスにおける個人情報の収集、使用、保管、保護について詳細にご説明します。
            </p>
          </div>
        </div>
      </Section>

      {/* メインコンテンツ */}
      <Section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="bg-white rounded-lg shadow-lg p-8 md:p-12">
            <nav className="mb-12 p-6 bg-indigo-50 rounded-lg">
              <h2 className="text-xl font-bold mb-4 text-indigo-900">目次</h2>
              <ol className="space-y-2 text-indigo-700">
                <li className="hover:text-indigo-900 transition-colors">
                  <a href="#section-1" className="flex items-start">
                    <span className="font-semibold mr-2">1.</span>
                    <span>本サービスについて</span>
                  </a>
                </li>
                <li className="hover:text-indigo-900 transition-colors">
                  <a href="#section-2" className="flex items-start">
                    <span className="font-semibold mr-2">2.</span>
                    <span>収集する情報</span>
                  </a>
                </li>
                <li className="hover:text-indigo-900 transition-colors">
                  <a href="#section-3" className="flex items-start">
                    <span className="font-semibold mr-2">3.</span>
                    <span>情報の利用目的</span>
                  </a>
                </li>
                <li className="hover:text-indigo-900 transition-colors">
                  <a href="#section-4" className="flex items-start">
                    <span className="font-semibold mr-2">4.</span>
                    <span>Google API Services の使用</span>
                  </a>
                </li>
                <li className="hover:text-indigo-900 transition-colors">
                  <a href="#section-5" className="flex items-start">
                    <span className="font-semibold mr-2">5.</span>
                    <span>データの保管とセキュリティ</span>
                  </a>
                </li>
                <li className="hover:text-indigo-900 transition-colors">
                  <a href="#section-6" className="flex items-start">
                    <span className="font-semibold mr-2">6.</span>
                    <span>データの第三者提供</span>
                  </a>
                </li>
                <li className="hover:text-indigo-900 transition-colors">
                  <a href="#section-7" className="flex items-start">
                    <span className="font-semibold mr-2">7.</span>
                    <span>ユーザーの権利</span>
                  </a>
                </li>
                <li className="hover:text-indigo-900 transition-colors">
                  <a href="#section-8" className="flex items-start">
                    <span className="font-semibold mr-2">8.</span>
                    <span>GDPR 準拠</span>
                  </a>
                </li>
                <li className="hover:text-indigo-900 transition-colors">
                  <a href="#section-9" className="flex items-start">
                    <span className="font-semibold mr-2">9.</span>
                    <span>データ保持期間</span>
                  </a>
                </li>
                <li className="hover:text-indigo-900 transition-colors">
                  <a href="#section-10" className="flex items-start">
                    <span className="font-semibold mr-2">10.</span>
                    <span>お問い合わせ</span>
                  </a>
                </li>
              </ol>
            </nav>

            <div className="space-y-12">
              {/* 第1条 - 本サービスについて */}
              <section id="section-1" className="scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-indigo-900 border-b-4 border-indigo-600 pb-3">
                  1. 本サービスについて
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    <strong className="text-indigo-900">AscendAI（別名: MeetingRAG）</strong>は、
                    議事録管理とRAG（Retrieval-Augmented Generation）ベースのチャット機能を提供するクラウドサービスです。
                  </p>

                  <div className="bg-indigo-50 p-6 rounded-lg border-l-4 border-indigo-600">
                    <h3 className="font-bold text-lg mb-3 text-indigo-900">主な機能</h3>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li><strong>Google Workspace連携</strong>: Google Calendar APIを使用したカレンダーイベント同期</li>
                      <li><strong>会議録画の文字起こし</strong>: AI技術による自動文字起こし</li>
                      <li><strong>AI議事録生成</strong>: 文字起こしテキストから構造化された議事録を自動生成</li>
                      <li><strong>カレンダーイベント管理</strong>: カレンダーイベントの表示、同期、管理</li>
                      <li><strong>RAGチャット機能</strong>: 蓄積されたナレッジベースに基づく対話型AI検索</li>
                      <li><strong>ナレッジ管理</strong>: 組織内の知識の体系的な管理と検索</li>
                    </ul>
                  </div>

                  <p className="pt-2">
                    <strong>使用技術スタック:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>フロントエンド: Next.js</li>
                    <li>バックエンド: FastAPI (Python)</li>
                    <li>データベース: Google Cloud SQL (PostgreSQL)</li>
                    <li>認証: Firebase Authentication</li>
                    <li>ストレージ: Google Cloud Storage</li>
                  </ul>
                </div>
              </section>

              {/* 第2条 - 収集する情報 */}
              <section id="section-2" className="scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-indigo-900 border-b-4 border-indigo-600 pb-3">
                  2. 収集する情報
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">

                  {/* 2.1 Google Calendar API から収集する情報 */}
                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                    <h3 className="font-bold text-xl mb-4 text-blue-900">2.1 Google Calendar API から収集する情報</h3>
                    <p className="mb-3">
                      本サービスは、Google Calendar API を使用して以下の情報を収集します：
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li><strong>カレンダーイベント情報</strong>
                        <ul className="list-circle list-inside ml-6 mt-1 space-y-1 text-sm">
                          <li>イベントの件名（タイトル）</li>
                          <li>イベントの説明文</li>
                          <li>開催場所</li>
                          <li>開始時刻・終了時刻</li>
                          <li>参加者のメールアドレスと応答ステータス</li>
                          <li>イベントの主催者情報</li>
                          <li>イベントのリンク（Google Meet等）</li>
                        </ul>
                      </li>
                      <li><strong>繰り返しイベントの情報</strong>（繰り返しルール、例外日等）</li>
                      <li><strong>カレンダーの表示設定</strong>（タイムゾーン等）</li>
                    </ul>

                    <div className="mt-4 p-4 bg-white rounded border border-blue-200">
                      <p className="text-sm font-semibold text-blue-900 mb-2">📋 使用する API スコープ:</p>
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded block mb-1">
                        https://www.googleapis.com/auth/calendar.readonly
                      </code>
                      <p className="text-xs text-gray-600 mt-2">
                        このスコープにより、カレンダーイベントの読み取り専用アクセスが可能になります。
                        カレンダーへの書き込みや変更は一切行いません。
                      </p>
                    </div>
                  </div>

                  {/* 2.2 ユーザー認証情報 */}
                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                    <h3 className="font-bold text-xl mb-4 text-green-900">2.2 ユーザー認証情報</h3>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li><strong>メールアドレス</strong> - アカウント識別とログインに使用</li>
                      <li><strong>基本プロフィール情報</strong> - 氏名、プロフィール画像URL</li>
                      <li><strong>Firebase Authentication UID</strong> - 内部的なユーザー識別子</li>
                      <li><strong>OAuth トークン</strong> - Google API アクセス用のアクセストークンとリフレッシュトークン</li>
                    </ul>

                    <div className="mt-4 p-4 bg-white rounded border border-green-200">
                      <p className="text-sm font-semibold text-green-900 mb-2">🔑 使用する API スコープ:</p>
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded block mb-1">
                        https://www.googleapis.com/auth/userinfo.email
                      </code>
                      <code className="text-xs bg-gray-100 px-2 py-1 rounded block">
                        https://www.googleapis.com/auth/userinfo.profile
                      </code>
                    </div>
                  </div>

                  {/* 2.3 アプリケーション利用データ */}
                  <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                    <h3 className="font-bold text-xl mb-4 text-purple-900">2.3 アプリケーション利用データ</h3>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li><strong>会議録画ファイル</strong> - Google Meet等の会議録画（ユーザーがアップロード）</li>
                      <li><strong>文字起こしテキスト</strong> - 録画ファイルから生成された文字起こしデータ</li>
                      <li><strong>AI生成議事録</strong> - 文字起こしテキストから生成された構造化議事録</li>
                      <li><strong>チャット履歴</strong> - RAGチャット機能で行われた質問と回答の履歴</li>
                      <li><strong>ユーザー設定</strong> - 通知設定、表示設定等のユーザー個別設定</li>
                      <li><strong>利用ログ</strong> - アクセス日時、操作内容、エラーログ等</li>
                    </ul>
                  </div>

                  {/* 2.4 技術的情報 */}
                  <div className="bg-gray-50 p-6 rounded-lg border-l-4 border-gray-600">
                    <h3 className="font-bold text-xl mb-4 text-gray-900">2.4 技術的情報</h3>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li>IPアドレス</li>
                      <li>ブラウザの種類とバージョン</li>
                      <li>デバイス情報（OS、画面解像度等）</li>
                      <li>Cookie とセッション情報</li>
                      <li>アクセスログ（日時、参照元URL等）</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 第3条 - 情報の利用目的 */}
              <section id="section-3" className="scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-indigo-900 border-b-4 border-indigo-600 pb-3">
                  3. 情報の利用目的
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>当社は、収集した情報を以下の目的で利用します：</p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-indigo-50 p-5 rounded-lg">
                      <h4 className="font-bold text-indigo-900 mb-2">✅ サービスの提供</h4>
                      <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                        <li>カレンダーイベントの表示・同期</li>
                        <li>会議録画の文字起こし</li>
                        <li>AI議事録の自動生成</li>
                        <li>RAGチャット機能の提供</li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-5 rounded-lg">
                      <h4 className="font-bold text-blue-900 mb-2">🔐 認証とアクセス管理</h4>
                      <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                        <li>ユーザー認証とログイン処理</li>
                        <li>アカウントの識別と管理</li>
                        <li>マルチテナント環境でのデータ分離</li>
                      </ul>
                    </div>

                    <div className="bg-green-50 p-5 rounded-lg">
                      <h4 className="font-bold text-green-900 mb-2">📊 サービス改善</h4>
                      <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                        <li>利用状況の分析</li>
                        <li>エラーの検出と修正</li>
                        <li>新機能の開発</li>
                        <li>ユーザー体験の向上</li>
                      </ul>
                    </div>

                    <div className="bg-purple-50 p-5 rounded-lg">
                      <h4 className="font-bold text-purple-900 mb-2">📧 コミュニケーション</h4>
                      <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                        <li>サービス通知の送信</li>
                        <li>サポート対応</li>
                        <li>重要なお知らせの配信</li>
                      </ul>
                    </div>

                    <div className="bg-yellow-50 p-5 rounded-lg">
                      <h4 className="font-bold text-yellow-900 mb-2">🛡️ セキュリティ</h4>
                      <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                        <li>不正アクセスの検出と防止</li>
                        <li>利用規約違反の調査</li>
                        <li>セキュリティ監査</li>
                      </ul>
                    </div>

                    <div className="bg-red-50 p-5 rounded-lg">
                      <h4 className="font-bold text-red-900 mb-2">⚖️ 法令遵守</h4>
                      <ul className="list-disc list-inside text-sm space-y-1 ml-2">
                        <li>法的義務の履行</li>
                        <li>規制当局への報告</li>
                        <li>法的手続きへの対応</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </section>

              {/* 第4条 - Google API Services の使用 */}
              <section id="section-4" className="scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-indigo-900 border-b-4 border-indigo-600 pb-3">
                  4. Google API Services の使用
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">

                  <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-4 text-red-900 flex items-center">
                      <span className="text-2xl mr-2">⚠️</span>
                      重要: Google API Services ユーザーデータポリシー遵守
                    </h3>
                    <p className="mb-4">
                      本サービスは、<strong>Google API Services のユーザーデータポリシー</strong>
                      （限定的な使用要件を含む）を完全に遵守しています。
                    </p>
                    <a
                      href="https://developers.google.com/terms/api-services-user-data-policy"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-red-700 hover:text-red-900 font-semibold underline"
                    >
                      Google API Services User Data Policy を確認する
                      <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                    <h3 className="font-bold text-xl mb-4 text-blue-900">限定的な使用の原則</h3>
                    <p className="mb-3">
                      Google API から取得したデータは、以下の原則に従って限定的に使用されます：
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li>
                        <strong>目的の限定</strong>:
                        Google API から取得したデータは、ユーザーに明示された機能の提供のためにのみ使用されます
                      </li>
                      <li>
                        <strong>第三者への共有禁止</strong>:
                        Google API データを第三者と共有、販売、またはレンタルすることはありません
                      </li>
                      <li>
                        <strong>広告目的での使用禁止</strong>:
                        Google API データを広告配信やターゲティングの目的で使用することはありません
                      </li>
                      <li>
                        <strong>人間による閲覧の制限</strong>:
                        人間による Google API データの閲覧は、セキュリティ、法令遵守、サービス提供に必要な場合に限定されます
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                    <h3 className="font-bold text-xl mb-4 text-green-900">データアクセスの透明性</h3>
                    <p className="mb-3">
                      本サービスが Google Calendar API からアクセスする情報とその用途：
                    </p>
                    <div className="overflow-x-auto">
                      <table className="w-full text-sm border-collapse">
                        <thead>
                          <tr className="bg-green-100">
                            <th className="border border-green-300 px-4 py-2 text-left">収集データ</th>
                            <th className="border border-green-300 px-4 py-2 text-left">使用目的</th>
                            <th className="border border-green-300 px-4 py-2 text-left">保管場所</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td className="border border-green-300 px-4 py-2">カレンダーイベント情報</td>
                            <td className="border border-green-300 px-4 py-2">イベント表示、会議との紐付け</td>
                            <td className="border border-green-300 px-4 py-2">Google Cloud SQL</td>
                          </tr>
                          <tr className="bg-green-50">
                            <td className="border border-green-300 px-4 py-2">参加者情報</td>
                            <td className="border border-green-300 px-4 py-2">会議参加者の表示</td>
                            <td className="border border-green-300 px-4 py-2">Google Cloud SQL</td>
                          </tr>
                          <tr>
                            <td className="border border-green-300 px-4 py-2">メールアドレス</td>
                            <td className="border border-green-300 px-4 py-2">アカウント識別、認証</td>
                            <td className="border border-green-300 px-4 py-2">Firebase Auth / Cloud SQL</td>
                          </tr>
                          <tr className="bg-green-50">
                            <td className="border border-green-300 px-4 py-2">基本プロフィール</td>
                            <td className="border border-green-300 px-4 py-2">ユーザー表示名の提供</td>
                            <td className="border border-green-300 px-4 py-2">Firebase Auth / Cloud SQL</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                    <h3 className="font-bold text-xl mb-4 text-purple-900">OAuth 連携の解除</h3>
                    <p className="mb-3">
                      ユーザーは、いつでも以下の方法で Google Workspace 連携を解除できます：
                    </p>
                    <div className="space-y-3">
                      <div className="bg-white p-4 rounded border border-purple-200">
                        <p className="font-semibold text-purple-900 mb-2">方法1: Google アカウント設定から解除</p>
                        <ol className="list-decimal list-inside space-y-1 text-sm ml-2">
                          <li>Google アカウント（<a href="https://myaccount.google.com/" target="_blank" rel="noopener noreferrer" className="text-purple-600 underline">myaccount.google.com</a>）にアクセス</li>
                          <li>「セキュリティ」→「サードパーティによるアクセス」を選択</li>
                          <li>「AscendAI」を探して「アクセスを削除」をクリック</li>
                        </ol>
                      </div>

                      <div className="bg-white p-4 rounded border border-purple-200">
                        <p className="font-semibold text-purple-900 mb-2">方法2: 本サービス内から解除</p>
                        <p className="text-sm">
                          AscendAI の設定画面から「Google Workspace 連携を解除」ボタンをクリック
                        </p>
                      </div>
                    </div>
                    <p className="mt-3 text-sm text-purple-800">
                      ℹ️ 連携を解除すると、カレンダーイベントの同期が停止しますが、
                      既に収集されたデータは削除されません。データの削除を希望される場合は、
                      <a href="#section-7" className="underline font-semibold">「7. ユーザーの権利」</a>をご確認ください。
                    </p>
                  </div>
                </div>
              </section>

              {/* 第5条 - データの保管とセキュリティ */}
              <section id="section-5" className="scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-indigo-900 border-b-4 border-indigo-600 pb-3">
                  5. データの保管とセキュリティ
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                    <h3 className="font-bold text-xl mb-4 text-blue-900">5.1 データ保管場所</h3>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li>
                        <strong>データベース</strong>: Google Cloud SQL（PostgreSQL） - 日本国内リージョン（asia-northeast1）
                      </li>
                      <li>
                        <strong>ファイルストレージ</strong>: Google Cloud Storage - 日本国内バケット
                      </li>
                      <li>
                        <strong>認証情報</strong>: Firebase Authentication - Google管理の安全な環境
                      </li>
                    </ul>
                    <p className="mt-3 text-sm text-blue-800">
                      すべてのデータは日本国内のデータセンターに保管され、
                      データ主権とGDPR要件に準拠しています。
                    </p>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                    <h3 className="font-bold text-xl mb-4 text-green-900">5.2 セキュリティ対策</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="bg-white p-4 rounded border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">🔐 暗号化</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside ml-2">
                          <li>通信時: SSL/TLS 暗号化（HTTPS）</li>
                          <li>保存時: AES-256 暗号化</li>
                          <li>OAuth トークン: 安全に暗号化して保存</li>
                        </ul>
                      </div>

                      <div className="bg-white p-4 rounded border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">🔒 アクセス制御</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside ml-2">
                          <li>マルチテナント分離アーキテクチャ</li>
                          <li>役割ベースアクセス制御（RBAC）</li>
                          <li>最小権限の原則の適用</li>
                        </ul>
                      </div>

                      <div className="bg-white p-4 rounded border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">🛡️ 監視とログ</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside ml-2">
                          <li>24時間365日のセキュリティ監視</li>
                          <li>異常アクセスの検出とアラート</li>
                          <li>監査ログの記録と保持</li>
                        </ul>
                      </div>

                      <div className="bg-white p-4 rounded border border-green-200">
                        <h4 className="font-semibold text-green-900 mb-2">🔍 定期監査</h4>
                        <ul className="text-sm space-y-1 list-disc list-inside ml-2">
                          <li>セキュリティ脆弱性スキャン</li>
                          <li>ペネトレーションテスト</li>
                          <li>コンプライアンス監査</li>
                        </ul>
                      </div>
                    </div>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                    <h3 className="font-bold text-xl mb-4 text-purple-900">5.3 バックアップと災害対策</h3>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li><strong>自動バックアップ</strong>: 毎日自動的にデータベースとファイルのバックアップを実施</li>
                      <li><strong>バックアップ保持</strong>: 30日間のバックアップ履歴を保持</li>
                      <li><strong>災害復旧計画</strong>: RPO（目標復旧時点）24時間、RTO（目標復旧時間）4時間以内</li>
                      <li><strong>地理的冗長化</strong>: 複数のアベイラビリティゾーンにデータを複製</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
                    <h3 className="font-bold text-xl mb-4 text-yellow-900">5.4 従業員のアクセス管理</h3>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li>個人情報へのアクセスは業務上必要な従業員に限定</li>
                      <li>全従業員に対する秘密保持契約（NDA）の締結</li>
                      <li>定期的なセキュリティ研修の実施</li>
                      <li>アクセスログの記録と定期的な監査</li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 第6条 - データの第三者提供 */}
              <section id="section-6" className="scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-indigo-900 border-b-4 border-indigo-600 pb-3">
                  6. データの第三者提供
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">

                  <div className="bg-red-50 border-2 border-red-300 p-6 rounded-lg">
                    <h3 className="font-bold text-xl mb-4 text-red-900 flex items-center">
                      <span className="text-2xl mr-2">🚫</span>
                      基本方針: 第三者への提供は行いません
                    </h3>
                    <p className="mb-3">
                      当社は、お客様の個人情報を第三者に販売、レンタル、または共有することは<strong className="text-red-900">一切ありません</strong>。
                    </p>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                    <h3 className="font-bold text-xl mb-4 text-blue-900">例外的に提供する場合</h3>
                    <p className="mb-3">以下の場合に限り、個人情報を第三者に提供することがあります：</p>
                    <ul className="list-disc list-inside space-y-3 ml-2">
                      <li>
                        <strong>法令に基づく場合</strong>
                        <p className="text-sm ml-6 mt-1">裁判所、警察、税務署などの公的機関から法令に基づく開示要請があった場合</p>
                      </li>
                      <li>
                        <strong>生命・身体・財産の保護のため</strong>
                        <p className="text-sm ml-6 mt-1">人の生命、身体または財産の保護のために必要があり、本人の同意を得ることが困難な場合</p>
                      </li>
                      <li>
                        <strong>国の機関等への協力</strong>
                        <p className="text-sm ml-6 mt-1">国の機関や地方公共団体が法令の定める事務を遂行する際に協力する必要がある場合</p>
                      </li>
                      <li>
                        <strong>お客様の同意がある場合</strong>
                        <p className="text-sm ml-6 mt-1">お客様から明示的な同意を得た場合</p>
                      </li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                    <h3 className="font-bold text-xl mb-4 text-green-900">業務委託先について</h3>
                    <p className="mb-3">
                      サービス提供のため、以下の業務委託先にデータ処理を委託していますが、
                      これらは「第三者提供」には該当しません：
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li>
                        <strong>Google Cloud Platform</strong> - インフラストラクチャ提供
                        <p className="text-sm ml-6 mt-1">データベース、ストレージ、コンピューティングリソースの提供</p>
                      </li>
                      <li>
                        <strong>Firebase</strong> - 認証サービス提供
                        <p className="text-sm ml-6 mt-1">ユーザー認証とトークン管理</p>
                      </li>
                    </ul>
                    <p className="mt-3 text-sm text-green-800">
                      これらの委託先とは適切な秘密保持契約を締結し、
                      個人情報の安全管理について定期的な監督を行っています。
                    </p>
                  </div>
                </div>
              </section>

              {/* 第7条 - ユーザーの権利 */}
              <section id="section-7" className="scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-indigo-900 border-b-4 border-indigo-600 pb-3">
                  7. ユーザーの権利
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    お客様は、ご自身の個人情報について以下の権利を有します：
                  </p>

                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-blue-50 p-5 rounded-lg border-l-4 border-blue-600">
                      <h4 className="font-bold text-blue-900 mb-3 flex items-center">
                        <span className="text-xl mr-2">👁️</span>
                        アクセス権
                      </h4>
                      <p className="text-sm">
                        ご自身の個人情報がどのように収集・使用されているか確認する権利
                      </p>
                    </div>

                    <div className="bg-green-50 p-5 rounded-lg border-l-4 border-green-600">
                      <h4 className="font-bold text-green-900 mb-3 flex items-center">
                        <span className="text-xl mr-2">✏️</span>
                        訂正権
                      </h4>
                      <p className="text-sm">
                        不正確または不完全な個人情報の訂正・追加を要求する権利
                      </p>
                    </div>

                    <div className="bg-red-50 p-5 rounded-lg border-l-4 border-red-600">
                      <h4 className="font-bold text-red-900 mb-3 flex items-center">
                        <span className="text-xl mr-2">🗑️</span>
                        削除権（忘れられる権利）
                      </h4>
                      <p className="text-sm">
                        特定の条件下で個人情報の削除を要求する権利
                      </p>
                    </div>

                    <div className="bg-purple-50 p-5 rounded-lg border-l-4 border-purple-600">
                      <h4 className="font-bold text-purple-900 mb-3 flex items-center">
                        <span className="text-xl mr-2">⏸️</span>
                        処理の制限権
                      </h4>
                      <p className="text-sm">
                        個人情報の処理を制限するよう要求する権利
                      </p>
                    </div>

                    <div className="bg-yellow-50 p-5 rounded-lg border-l-4 border-yellow-600">
                      <h4 className="font-bold text-yellow-900 mb-3 flex items-center">
                        <span className="text-xl mr-2">📦</span>
                        データポータビリティ権
                      </h4>
                      <p className="text-sm">
                        構造化された一般的な形式で個人情報を受け取り、他のサービスに移管する権利
                      </p>
                    </div>

                    <div className="bg-indigo-50 p-5 rounded-lg border-l-4 border-indigo-600">
                      <h4 className="font-bold text-indigo-900 mb-3 flex items-center">
                        <span className="text-xl mr-2">🚫</span>
                        異議申立権
                      </h4>
                      <p className="text-sm">
                        個人情報の処理に異議を申し立てる権利
                      </p>
                    </div>
                  </div>

                  <div className="bg-gray-100 p-6 rounded-lg border-2 border-gray-300">
                    <h3 className="font-bold text-xl mb-4 text-gray-900">権利の行使方法</h3>
                    <p className="mb-3">
                      上記の権利を行使される場合は、以下のお問い合わせ窓口までご連絡ください：
                    </p>
                    <div className="bg-white p-4 rounded border border-gray-300">
                      <p className="font-semibold mb-2">📧 メール:</p>
                      <a href="mailto:rsaotome@ascendlogicai.com" className="text-indigo-600 hover:text-indigo-800 underline">
                        rsaotome@ascendlogicai.com
                      </a>
                      <p className="text-sm text-gray-600 mt-2">
                        件名: 「個人情報に関する権利行使の申請」
                      </p>
                    </div>
                    <p className="mt-4 text-sm text-gray-700">
                      ℹ️ ご本人確認を行った上で、法令に従い適切に対応いたします。
                      通常、<strong>7営業日以内</strong>に回答いたします。
                    </p>
                  </div>

                  <div className="bg-orange-50 p-6 rounded-lg border-l-4 border-orange-600">
                    <h3 className="font-bold text-xl mb-4 text-orange-900">アカウント削除について</h3>
                    <p className="mb-3">
                      アカウントを完全に削除する場合、以下のデータが削除されます：
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-2 mb-3">
                      <li>ユーザープロフィール情報</li>
                      <li>カレンダーイベントデータ</li>
                      <li>会議録画ファイルと文字起こしテキスト</li>
                      <li>AI生成議事録</li>
                      <li>チャット履歴</li>
                      <li>すべての利用ログ（法令で保持が義務付けられているものを除く）</li>
                    </ul>
                    <p className="text-sm text-orange-800">
                      ⚠️ アカウント削除は<strong>不可逆的な操作</strong>です。
                      削除後、データの復旧は一切できませんのでご注意ください。
                    </p>
                  </div>
                </div>
              </section>

              {/* 第8条 - GDPR準拠 */}
              <section id="section-8" className="scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-indigo-900 border-b-4 border-indigo-600 pb-3">
                  8. GDPR 準拠
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                    <h3 className="font-bold text-xl mb-4 text-blue-900">8.1 EU居住者の皆様へ</h3>
                    <p className="mb-3">
                      当社は、<strong>EU一般データ保護規則（GDPR）</strong>を遵守し、
                      EU居住者の個人データを適切に保護します。
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li>データ処理の法的根拠の明確化</li>
                      <li>データ最小化の原則の適用</li>
                      <li>データ保護影響評価（DPIA）の実施</li>
                      <li>72時間以内のデータ侵害通知</li>
                      <li>データ保護責任者（DPO）の指名</li>
                    </ul>
                  </div>

                  <div className="bg-green-50 p-6 rounded-lg border-l-4 border-green-600">
                    <h3 className="font-bold text-xl mb-4 text-green-900">8.2 データ処理の法的根拠</h3>
                    <p className="mb-3">当社は、以下の法的根拠に基づいて個人データを処理します：</p>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li>
                        <strong>契約の履行</strong>:
                        サービス提供契約の履行に必要な処理
                      </li>
                      <li>
                        <strong>同意</strong>:
                        お客様から明示的な同意を得た処理
                      </li>
                      <li>
                        <strong>正当な利益</strong>:
                        サービス改善、セキュリティ対策等の正当な利益のための処理
                      </li>
                      <li>
                        <strong>法的義務</strong>:
                        法令遵守のために必要な処理
                      </li>
                    </ul>
                  </div>

                  <div className="bg-purple-50 p-6 rounded-lg border-l-4 border-purple-600">
                    <h3 className="font-bold text-xl mb-4 text-purple-900">8.3 国際データ転送</h3>
                    <p className="mb-3">
                      当社は日本国内でデータを保管していますが、EU圏外へのデータ転送が発生する場合は、
                      以下の適切な保護措置を講じます：
                    </p>
                    <ul className="list-disc list-inside space-y-2 ml-2">
                      <li>標準契約条項（SCC）の締結</li>
                      <li>適切性認定を受けた国へのデータ転送</li>
                      <li>拘束的企業準則（BCR）の適用</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
                    <h3 className="font-bold text-xl mb-4 text-yellow-900">8.4 監督機関への苦情申立</h3>
                    <p className="mb-3">
                      EU居住者の方は、データ保護に関する懸念事項について、
                      お住まいの国のデータ保護監督機関に苦情を申し立てる権利があります。
                    </p>
                    <p className="text-sm">
                      各国の監督機関のリストは、
                      <a
                        href="https://edpb.europa.eu/about-edpb/board/members_en"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-yellow-700 hover:text-yellow-900 underline font-semibold"
                      >
                        欧州データ保護会議（EDPB）のウェブサイト
                      </a>
                      でご確認いただけます。
                    </p>
                  </div>
                </div>
              </section>

              {/* 第9条 - データ保持期間 */}
              <section id="section-9" className="scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-indigo-900 border-b-4 border-indigo-600 pb-3">
                  9. データ保持期間
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p>
                    当社は、収集した個人情報を以下の期間保持します：
                  </p>

                  <div className="overflow-x-auto">
                    <table className="w-full border-collapse bg-white shadow-sm rounded-lg overflow-hidden">
                      <thead>
                        <tr className="bg-indigo-100">
                          <th className="border border-indigo-300 px-4 py-3 text-left font-bold">データの種類</th>
                          <th className="border border-indigo-300 px-4 py-3 text-left font-bold">保持期間</th>
                          <th className="border border-indigo-300 px-4 py-3 text-left font-bold">保持理由</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">ユーザーアカウント情報</td>
                          <td className="border border-gray-300 px-4 py-3">アカウント削除まで</td>
                          <td className="border border-gray-300 px-4 py-3">サービス提供のため</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">カレンダーイベントデータ</td>
                          <td className="border border-gray-300 px-4 py-3">アカウント削除まで</td>
                          <td className="border border-gray-300 px-4 py-3">イベント管理機能の提供</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">会議録画・文字起こし</td>
                          <td className="border border-gray-300 px-4 py-3">ユーザー削除操作まで</td>
                          <td className="border border-gray-300 px-4 py-3">議事録生成機能の提供</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">AI生成議事録</td>
                          <td className="border border-gray-300 px-4 py-3">ユーザー削除操作まで</td>
                          <td className="border border-gray-300 px-4 py-3">ナレッジベース構築</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">チャット履歴</td>
                          <td className="border border-gray-300 px-4 py-3">6ヶ月間</td>
                          <td className="border border-gray-300 px-4 py-3">RAG機能の精度向上</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">アクセスログ</td>
                          <td className="border border-gray-300 px-4 py-3">90日間</td>
                          <td className="border border-gray-300 px-4 py-3">セキュリティ監視</td>
                        </tr>
                        <tr>
                          <td className="border border-gray-300 px-4 py-3">監査ログ</td>
                          <td className="border border-gray-300 px-4 py-3">7年間</td>
                          <td className="border border-gray-300 px-4 py-3">法令遵守（会社法等）</td>
                        </tr>
                        <tr className="bg-gray-50">
                          <td className="border border-gray-300 px-4 py-3">バックアップデータ</td>
                          <td className="border border-gray-300 px-4 py-3">30日間</td>
                          <td className="border border-gray-300 px-4 py-3">災害復旧対策</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                    <h3 className="font-bold text-xl mb-3 text-blue-900">保持期間経過後の処理</h3>
                    <p className="mb-2">
                      保持期間が経過したデータは、以下の方法で安全に削除されます：
                    </p>
                    <ul className="list-disc list-inside space-y-1 ml-2">
                      <li>データベースからの完全削除（物理削除）</li>
                      <li>バックアップデータからの削除</li>
                      <li>ログファイルの自動パージ</li>
                      <li>削除証明の記録保持</li>
                    </ul>
                  </div>

                  <div className="bg-yellow-50 p-6 rounded-lg border-l-4 border-yellow-600">
                    <h3 className="font-bold text-xl mb-3 text-yellow-900">法令による保持義務</h3>
                    <p className="text-sm">
                      一部のデータは、会社法、税法、その他の法令により、
                      一定期間の保持が義務付けられています。
                      これらのデータについては、法定保存期間が経過するまで削除できない場合があります。
                    </p>
                  </div>
                </div>
              </section>

              {/* 第10条 - お問い合わせ */}
              <section id="section-10" className="scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-indigo-900 border-b-4 border-indigo-600 pb-3">
                  10. お問い合わせ
                </h2>
                <div className="space-y-6 text-gray-700 leading-relaxed">
                  <p className="text-lg">
                    本プライバシーポリシーに関するご質問、個人情報の取り扱いに関するお問い合わせは、
                    以下の窓口までご連絡ください。
                  </p>

                  <div className="bg-gradient-to-br from-indigo-50 to-purple-50 p-8 rounded-lg border-2 border-indigo-300 shadow-md">
                    <h3 className="font-bold text-2xl mb-6 text-indigo-900 text-center">
                      お問い合わせ窓口
                    </h3>

                    <div className="space-y-4">
                      <div className="bg-white p-4 rounded-lg border border-indigo-200">
                        <p className="font-semibold text-indigo-900 mb-2">🏢 事業者名</p>
                        <p className="text-gray-800">株式会社Ascend Logic</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-indigo-200">
                        <p className="font-semibold text-indigo-900 mb-2">👤 代表者</p>
                        <p className="text-gray-800">代表取締役 早乙女 琉真</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-indigo-200">
                        <p className="font-semibold text-indigo-900 mb-2">📍 所在地</p>
                        <p className="text-gray-800">〒198-0031 東京都青梅市師岡町1-125-14</p>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-indigo-200">
                        <p className="font-semibold text-indigo-900 mb-2">📧 メールアドレス</p>
                        <a
                          href="mailto:rsaotome@ascendlogicai.com"
                          className="text-indigo-600 hover:text-indigo-800 underline font-semibold"
                        >
                          rsaotome@ascendlogicai.com
                        </a>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-indigo-200">
                        <p className="font-semibold text-indigo-900 mb-2">🌐 ウェブサイト</p>
                        <a
                          href="https://ascendlogicai.com"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-indigo-600 hover:text-indigo-800 underline"
                        >
                          https://ascendlogicai.com
                        </a>
                      </div>

                      <div className="bg-white p-4 rounded-lg border border-indigo-200">
                        <p className="font-semibold text-indigo-900 mb-2">🕐 対応時間</p>
                        <p className="text-gray-800">平日 10:00 - 18:00（土日祝日を除く）</p>
                        <p className="text-sm text-gray-600 mt-1">
                          ※ 時間外のお問い合わせについては、翌営業日に対応いたします
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-blue-600">
                    <h3 className="font-bold text-xl mb-3 text-blue-900">個人情報保護管理者</h3>
                    <p className="text-gray-800">
                      個人情報保護管理者: 代表取締役 早乙女 琉真
                    </p>
                    <p className="text-sm text-gray-600 mt-2">
                      個人情報の適切な管理と保護について全体的な責任を負っています。
                    </p>
                  </div>
                </div>
              </section>

              {/* ポリシー変更履歴 */}
              <section className="scroll-mt-20">
                <h2 className="text-3xl font-bold mb-6 text-indigo-900 border-b-4 border-indigo-600 pb-3">
                  ポリシーの変更
                </h2>
                <div className="space-y-4 text-gray-700 leading-relaxed">
                  <p>
                    当社は、法令の改正、サービス内容の変更、社会情勢の変化等に応じて、
                    本プライバシーポリシーを変更することがあります。
                  </p>
                  <p>
                    変更後のプライバシーポリシーは、本ページに掲載した時点から効力を生じます。
                    重要な変更がある場合は、サービス内での通知またはメールにてお知らせします。
                  </p>

                  <div className="bg-gray-100 p-6 rounded-lg border-2 border-gray-300">
                    <h3 className="font-bold text-xl mb-4 text-gray-900">変更履歴</h3>
                    <ul className="space-y-2">
                      <li className="flex items-start">
                        <span className="font-semibold mr-3 text-indigo-900">2025年12月23日:</span>
                        <span>初版制定</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </section>

              {/* 最終更新日 */}
              <div className="text-center pt-8 border-t-2 border-gray-300">
                <p className="text-gray-600 font-semibold">
                  最終更新日: {lastUpdated}
                </p>
                <p className="text-sm text-gray-500 mt-2">
                  制定日: 2025年12月23日
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* フッターCTA */}
      <Section className="py-12 bg-gradient-to-r from-indigo-600 to-purple-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            ご不明な点がございますか？
          </h2>
          <p className="text-lg mb-6 text-indigo-100">
            プライバシーポリシーに関するご質問は、お気軽にお問い合わせください
          </p>
          <a
            href="mailto:rsaotome@ascendlogicai.com"
            className="inline-block bg-white text-indigo-600 px-8 py-3 rounded-lg font-semibold hover:bg-indigo-50 transition-colors shadow-lg"
          >
            お問い合わせ
          </a>
        </div>
      </Section>
    </>
  );
}
