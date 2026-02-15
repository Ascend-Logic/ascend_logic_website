import { Metadata } from 'next';
import Link from 'next/link';
import Section from '../../components/ui/Section';

export const metadata: Metadata = {
  title: 'Ascend Agent 利用規約',
  description: 'Ascend Agentの利用規約とプライバシーポリシーをご確認いただけます。',
};

export default function TermsPage() {
  return (
    <>
      {/* ヒーローセクション */}
      <Section className="py-20 bg-gray-900 text-white">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Ascend Agent 利用規約</h1>
          <p className="text-xl text-gray-300">最終更新日: 2026年2月15日</p>
        </div>
      </Section>

      {/* 利用規約本文 */}
      <Section className="py-16">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="prose prose-lg max-w-none">

            {/* 第1条 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">第1条（適用）</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  本利用規約（以下「本規約」といいます）は、Ascend Logic株式会社（以下「当社」といいます）が提供する「Ascend Agent」（以下「本サービス」といいます）の利用条件を定めるものです。
                </p>
                <p>
                  本規約は、本サービスの利用に関する当社と登録ユーザーとの間の権利義務関係を定めることを目的とし、登録ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。
                </p>
              </div>
            </div>

            {/* 第2条 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">第2条（定義）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                本規約において使用する以下の用語は、各々以下に定める意味を有するものとします。
              </p>
              <div className="bg-gray-50 p-6 rounded-lg space-y-3">
                <div>
                  <span className="font-semibold text-gray-900">本サービス:</span>
                  <span className="text-gray-700 ml-2">当社が提供する「Ascend Agent」という名称のオンライン会議自動議事録作成サービス</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">登録ユーザー:</span>
                  <span className="text-gray-700 ml-2">本規約に同意の上、本サービスの利用登録を完了した個人又は法人</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">ユーザーコンテンツ:</span>
                  <span className="text-gray-700 ml-2">登録ユーザーが本サービスに投稿、アップロード、送信その他の方法により掲載したコンテンツ</span>
                </div>
              </div>
            </div>

            {/* 第3条 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">第3条（登録）</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  本サービスの利用を希望する者は、本規約を遵守することに同意し、当社の定める方法で利用登録を申請することができます。
                </p>
                <p>当社は、登録希望者が以下に該当する場合、登録を拒否することがあります：</p>
                <ul className="list-disc list-inside space-y-2 ml-4">
                  <li>提供した登録情報に虚偽がある場合</li>
                  <li>反社会的勢力等との関わりがある場合</li>
                  <li>過去に本規約に違反したことがある場合</li>
                </ul>
              </div>
            </div>

            {/* 第4条 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">第4条（禁止事項）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                登録ユーザーは、以下の行為を行ってはなりません：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li>法令に違反する行為</li>
                <li>第三者の知的財産権、プライバシー、名誉を侵害する行為</li>
                <li>本サービスのシステムに過度な負荷をかける行為</li>
                <li>不正アクセス、第三者へのなりすまし</li>
                <li>他のユーザーに不利益や不快感を与える行為</li>
              </ul>
            </div>

            {/* 第5条 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">第5条（サービスの停止）</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、以下の場合、事前通知なく本サービスを停止できます：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li>システムの緊急メンテナンスが必要な場合</li>
                <li>天災地変などの不可抗力により運営できない場合</li>
                <li>その他、当社が停止を必要と判断した場合</li>
              </ul>
            </div>

            {/* 第6条 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">第6条（知的財産権）</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  本サービスに関する知的財産権は全て当社に帰属します。
                </p>
                <p>
                  ユーザーコンテンツの知的財産権は登録ユーザーに留保されますが、登録ユーザーは、本サービスの提供・改善に必要な範囲で、当社がユーザーコンテンツを利用することを許諾します。
                </p>
              </div>
            </div>

            {/* 第7条 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">第7条（データの取り扱い）</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  当社は、登録ユーザーの会議録画・文字起こしデータをGoogle Cloud Storageに安全に保存します。
                </p>
                <p>
                  ユーザーの明示的な許可なく、第三者にデータを共有することはありません。
                </p>
                <p>
                  データの取り扱いの詳細は、別途<Link href="#privacy-policy" className="text-indigo-600 hover:text-indigo-800 underline">プライバシーポリシー</Link>に定めます。
                </p>
              </div>
            </div>

            {/* 第8条 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">第8条（登録抹消）</h2>
              <p className="text-gray-700 leading-relaxed">
                当社は、登録ユーザーが本規約に違反した場合、事前通知なく登録を抹消できます。
              </p>
            </div>

            {/* 第9条 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">第9条（免責）</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  当社は、本サービスが特定の目的に適合すること、不具合が生じないことを保証しません。
                </p>
                <p>
                  当社は、本サービスに起因する損害について、当該損害が発生した月の利用料金を超えて賠償する責任を負いません。
                </p>
              </div>
            </div>

            {/* 第10条 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">第10条（準拠法・管轄裁判所）</h2>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  本規約の準拠法は日本法とします。
                </p>
                <p>
                  本規約に関する紛争は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。
                </p>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* プライバシーポリシーセクション */}
      <Section id="privacy-policy" className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <h1 className="text-4xl font-bold mb-8">Ascend Agent プライバシーポリシー</h1>
          <p className="text-xl text-gray-600 mb-12">最終更新日: 2026年2月15日</p>

          <div className="prose prose-lg max-w-none">

            {/* 1. 個人情報の収集 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">1. 個人情報の収集</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、本サービスの提供にあたり、以下の個人情報を収集します：
              </p>
              <div className="bg-white p-6 rounded-lg space-y-3 border border-gray-200">
                <div>
                  <span className="font-semibold text-gray-900">登録情報:</span>
                  <span className="text-gray-700 ml-2">メールアドレス、氏名、所属組織</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Google アカウント情報:</span>
                  <span className="text-gray-700 ml-2">Google Calendar へのアクセス許可</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">会議データ:</span>
                  <span className="text-gray-700 ml-2">会議の録画、文字起こし、議事録</span>
                </div>
              </div>
            </div>

            {/* 2. 個人情報の利用目的 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">2. 個人情報の利用目的</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                収集した個人情報は、以下の目的で利用します：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li>本サービスの提供、維持、改善</li>
                <li>ユーザーサポート、問い合わせ対応</li>
                <li>利用規約違反への対応</li>
                <li>サービスの重要な変更の通知</li>
              </ul>
            </div>

            {/* 3. 第三者サービスの利用 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">3. 第三者サービスの利用</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                本サービスは、以下の第三者サービスを利用します：
              </p>
              <div className="bg-white p-6 rounded-lg space-y-3 border border-gray-200">
                <div>
                  <span className="font-semibold text-gray-900">Google Calendar API:</span>
                  <span className="text-gray-700 ml-2">会議スケジュールの取得（読み取り専用）</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">外部API:</span>
                  <span className="text-gray-700 ml-2">会議への参加、録画、文字起こし</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">Google Cloud Platform:</span>
                  <span className="text-gray-700 ml-2">データの保存、AI処理</span>
                </div>
              </div>
            </div>

            {/* 4. Google Calendar API の使用について */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">4. Google Calendar API の使用について</h2>

              <h3 className="text-xl font-semibold mb-3 mt-6">使用目的</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 mb-6">
                <li>ユーザーのGoogle Calendarから会議スケジュールを取得</li>
                <li>会議開始時刻に合わせて自動的にAI Botを起動</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">アクセス範囲</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 mb-6">
                <li>カレンダーイベントの読み取り（calendar.readonly）</li>
                <li>カレンダーイベントへの書き込み（calendar.events）</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">データの保存</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700 mb-6">
                <li>カレンダーデータは一時的にキャッシュされ、必要な処理後に削除されます</li>
                <li>会議メタデータ（タイトル、開始時刻）のみをデータベースに保存します</li>
              </ul>

              <h3 className="text-xl font-semibold mb-3">制限事項</h3>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li>Ascend Agentは、Googleの限定用途の要件を遵守します</li>
                <li>取得したデータを広告目的で使用することはありません</li>
                <li>ユーザーの許可なく第三者と共有することはありません</li>
              </ul>
            </div>

            {/* 5. データの保存と管理 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">5. データの保存と管理</h2>
              <div className="bg-white p-6 rounded-lg space-y-3 border border-gray-200">
                <div>
                  <span className="font-semibold text-gray-900">保存場所:</span>
                  <span className="text-gray-700 ml-2">Google Cloud Storage（日本リージョン）</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">保存期間:</span>
                  <span className="text-gray-700 ml-2">ユーザーが削除するまで無期限</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">暗号化:</span>
                  <span className="text-gray-700 ml-2">保存時および転送時に暗号化されます</span>
                </div>
                <div>
                  <span className="font-semibold text-gray-900">アクセス制御:</span>
                  <span className="text-gray-700 ml-2">ユーザー本人と当社の限定された担当者のみがアクセス可能</span>
                </div>
              </div>
            </div>

            {/* 6. データの共有 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">6. データの共有</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                当社は、以下の場合を除き、個人情報を第三者に提供しません：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li>ユーザーの同意がある場合</li>
                <li>法令に基づく場合</li>
                <li>人の生命、身体又は財産の保護のために必要がある場合</li>
              </ul>
            </div>

            {/* 7. Cookie の使用 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">7. Cookie の使用</h2>
              <p className="text-gray-700 leading-relaxed">
                本サービスは、ユーザーの利便性向上のためCookieを使用します。ブラウザの設定でCookieを無効化できますが、一部機能が制限される場合があります。
              </p>
            </div>

            {/* 8. ユーザーの権利 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">8. ユーザーの権利</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                ユーザーは、以下の権利を有します：
              </p>
              <ul className="list-disc list-inside space-y-2 ml-4 text-gray-700">
                <li>個人情報の開示請求</li>
                <li>個人情報の訂正・削除請求</li>
                <li>個人情報の利用停止請求</li>
                <li>Google Calendar へのアクセス許可の取り消し</li>
              </ul>
            </div>

            {/* 9. セキュリティ */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">9. セキュリティ</h2>
              <p className="text-gray-700 leading-relaxed">
                当社は、個人情報の漏洩、滅失、毀損を防止するため、適切な安全管理措置を講じます。
              </p>
            </div>

            {/* 10. プライバシーポリシーの変更 */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">10. プライバシーポリシーの変更</h2>
              <p className="text-gray-700 leading-relaxed">
                当社は、必要に応じて本プライバシーポリシーを変更できます。変更後のプライバシーポリシーは、本サービス上に掲示した時点で効力を生じます。
              </p>
            </div>

            {/* 11. お問い合わせ */}
            <div className="mb-12">
              <h2 className="text-2xl font-bold mb-4">11. お問い合わせ</h2>
              <p className="text-gray-700 leading-relaxed mb-4">
                個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください：
              </p>
              <div className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-900 mb-2">Ascend Logic株式会社</p>
                <p className="text-gray-700">Email: <a href="mailto:rsaotome@ascendlogicai.com" className="text-indigo-600 hover:text-indigo-800 underline">rsaotome@ascendlogicai.com</a></p>
              </div>
            </div>

          </div>
        </div>
      </Section>

      {/* フッターCTA */}
      <Section className="py-12 bg-gray-900 text-white">
        <div className="container mx-auto px-4 text-center">
          <p className="mb-4">ご不明な点がございましたら、お気軽にお問い合わせください。</p>
          <Link
            href="/request-documents"
            className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition-colors"
          >
            お問い合わせ
          </Link>
        </div>
      </Section>
    </>
  );
}
