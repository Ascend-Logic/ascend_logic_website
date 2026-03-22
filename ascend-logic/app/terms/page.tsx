import { Metadata } from 'next';
import Link from 'next/link';
import PageHero from '../../components/ui/PageHero';
import FadeIn from '../../components/ui/FadeIn';

export const metadata: Metadata = {
  title: 'Ascend Agent 利用規約',
  description: 'Ascend Agentの利用規約とプライバシーポリシーをご確認いただけます。',
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        titleEn="Terms of Service"
        titleJa="Ascend Agent 利用規約"
        description="最終更新日: 2026年2月15日"
      />

      {/* 利用規約本文 */}
      <section className="py-20">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="space-y-12">

            <FadeIn>
              <div>
                <h2 className="text-lg font-bold mb-4 pb-3 border-b border-gray-200">第1条（適用）</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>本利用規約（以下「本規約」といいます）は、Ascend Logic株式会社（以下「当社」といいます）が提供する「Ascend Agent」（以下「本サービス」といいます）の利用条件を定めるものです。</p>
                  <p>本規約は、本サービスの利用に関する当社と登録ユーザーとの間の権利義務関係を定めることを目的とし、登録ユーザーと当社との間の本サービスの利用に関わる一切の関係に適用されます。</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h2 className="text-lg font-bold mb-4 pb-3 border-b border-gray-200">第2条（定義）</h2>
                <p className="text-gray-600 leading-relaxed mb-4">本規約において使用する以下の用語は、各々以下に定める意味を有するものとします。</p>
                <div className="bg-gray-50 p-6 rounded-lg space-y-3 text-sm">
                  <div><span className="font-medium text-gray-800">本サービス:</span><span className="text-gray-600 ml-2">当社が提供する「Ascend Agent」という名称のオンライン会議自動議事録作成サービス</span></div>
                  <div><span className="font-medium text-gray-800">登録ユーザー:</span><span className="text-gray-600 ml-2">本規約に同意の上、本サービスの利用登録を完了した個人又は法人</span></div>
                  <div><span className="font-medium text-gray-800">ユーザーコンテンツ:</span><span className="text-gray-600 ml-2">登録ユーザーが本サービスに投稿、アップロード、送信その他の方法により掲載したコンテンツ</span></div>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h2 className="text-lg font-bold mb-4 pb-3 border-b border-gray-200">第3条（登録）</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>本サービスの利用を希望する者は、本規約を遵守することに同意し、当社の定める方法で利用登録を申請することができます。</p>
                  <p>当社は、登録希望者が以下に該当する場合、登録を拒否することがあります：</p>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>提供した登録情報に虚偽がある場合</li>
                    <li>反社会的勢力等との関わりがある場合</li>
                    <li>過去に本規約に違反したことがある場合</li>
                  </ul>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h2 className="text-lg font-bold mb-4 pb-3 border-b border-gray-200">第4条（禁止事項）</h2>
                <p className="text-gray-600 leading-relaxed mb-4">登録ユーザーは、以下の行為を行ってはなりません：</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                  <li>法令に違反する行為</li>
                  <li>第三者の知的財産権、プライバシー、名誉を侵害する行為</li>
                  <li>本サービスのシステムに過度な負荷をかける行為</li>
                  <li>不正アクセス、第三者へのなりすまし</li>
                  <li>他のユーザーに不利益や不快感を与える行為</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h2 className="text-lg font-bold mb-4 pb-3 border-b border-gray-200">第5条（サービスの停止）</h2>
                <p className="text-gray-600 leading-relaxed mb-4">当社は、以下の場合、事前通知なく本サービスを停止できます：</p>
                <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                  <li>システムの緊急メンテナンスが必要な場合</li>
                  <li>天災地変などの不可抗力により運営できない場合</li>
                  <li>その他、当社が停止を必要と判断した場合</li>
                </ul>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h2 className="text-lg font-bold mb-4 pb-3 border-b border-gray-200">第6条（知的財産権）</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>本サービスに関する知的財産権は全て当社に帰属します。</p>
                  <p>ユーザーコンテンツの知的財産権は登録ユーザーに留保されますが、登録ユーザーは、本サービスの提供・改善に必要な範囲で、当社がユーザーコンテンツを利用することを許諾します。</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h2 className="text-lg font-bold mb-4 pb-3 border-b border-gray-200">第7条（データの取り扱い）</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>当社は、登録ユーザーの会議録画・文字起こしデータをGoogle Cloud Storageに安全に保存します。</p>
                  <p>ユーザーの明示的な許可なく、第三者にデータを共有することはありません。</p>
                  <p>データの取り扱いの詳細は、別途<Link href="#privacy-policy" className="text-gray-800 underline underline-offset-2 hover:text-indigo-600 transition-colors">プライバシーポリシー</Link>に定めます。</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h2 className="text-lg font-bold mb-4 pb-3 border-b border-gray-200">第8条（登録抹消）</h2>
                <p className="text-gray-600 leading-relaxed">当社は、登録ユーザーが本規約に違反した場合、事前通知なく登録を抹消できます。</p>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h2 className="text-lg font-bold mb-4 pb-3 border-b border-gray-200">第9条（免責）</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>当社は、本サービスが特定の目的に適合すること、不具合が生じないことを保証しません。</p>
                  <p>当社は、本サービスに起因する損害について、当該損害が発生した月の利用料金を超えて賠償する責任を負いません。</p>
                </div>
              </div>
            </FadeIn>

            <FadeIn>
              <div>
                <h2 className="text-lg font-bold mb-4 pb-3 border-b border-gray-200">第10条（準拠法・管轄裁判所）</h2>
                <div className="space-y-4 text-gray-600 leading-relaxed">
                  <p>本規約の準拠法は日本法とします。</p>
                  <p>本規約に関する紛争は、東京地方裁判所を第一審の専属的合意管轄裁判所とします。</p>
                </div>
              </div>
            </FadeIn>

          </div>
        </div>
      </section>

      {/* プライバシーポリシーセクション */}
      <section id="privacy-policy" className="py-20 bg-gray-50 border-t border-gray-200">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <FadeIn>
            <h2 className="section-title-en text-sm text-gray-400 tracking-widest mb-2">Privacy Policy</h2>
            <p className="text-2xl font-bold mb-2">Ascend Agent プライバシーポリシー</p>
            <p className="text-sm text-gray-400 mb-12">最終更新日: 2026年2月15日</p>
          </FadeIn>

          <div className="space-y-12">
            {[
              { title: '1. 個人情報の収集', content: (
                <>
                  <p className="text-gray-600 leading-relaxed mb-4">当社は、本サービスの提供にあたり、以下の個人情報を収集します：</p>
                  <div className="bg-white p-6 rounded-lg space-y-3 border border-gray-200 text-sm">
                    <div><span className="font-medium text-gray-800">登録情報:</span><span className="text-gray-600 ml-2">メールアドレス、氏名、所属組織</span></div>
                    <div><span className="font-medium text-gray-800">Google アカウント情報:</span><span className="text-gray-600 ml-2">Google Calendar へのアクセス許可</span></div>
                    <div><span className="font-medium text-gray-800">会議データ:</span><span className="text-gray-600 ml-2">会議の録画、文字起こし、議事録</span></div>
                  </div>
                </>
              )},
              { title: '2. 個人情報の利用目的', content: (
                <>
                  <p className="text-gray-600 leading-relaxed mb-4">収集した個人情報は、以下の目的で利用します：</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li>本サービスの提供、維持、改善</li>
                    <li>ユーザーサポート、問い合わせ対応</li>
                    <li>利用規約違反への対応</li>
                    <li>サービスの重要な変更の通知</li>
                  </ul>
                </>
              )},
              { title: '3. 第三者サービスの利用', content: (
                <>
                  <p className="text-gray-600 leading-relaxed mb-4">本サービスは、以下の第三者サービスを利用します：</p>
                  <div className="bg-white p-6 rounded-lg space-y-3 border border-gray-200 text-sm">
                    <div><span className="font-medium text-gray-800">Google Calendar API:</span><span className="text-gray-600 ml-2">会議スケジュールの取得（読み取り専用）</span></div>
                    <div><span className="font-medium text-gray-800">外部API:</span><span className="text-gray-600 ml-2">会議への参加、録画、文字起こし</span></div>
                    <div><span className="font-medium text-gray-800">Google Cloud Platform:</span><span className="text-gray-600 ml-2">データの保存、AI処理</span></div>
                  </div>
                </>
              )},
              { title: '4. Google Calendar API の使用について', content: (
                <>
                  <h3 className="text-base font-medium mb-3 mt-4">使用目的</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600 mb-6">
                    <li>ユーザーのGoogle Calendarから会議スケジュールを取得</li>
                    <li>会議開始時刻に合わせて自動的にAI Botを起動</li>
                  </ul>
                  <h3 className="text-base font-medium mb-3">アクセス範囲</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600 mb-6">
                    <li>カレンダーイベントの読み取り（calendar.readonly）</li>
                    <li>カレンダーイベントへの書き込み（calendar.events）</li>
                  </ul>
                  <h3 className="text-base font-medium mb-3">データの保存</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600 mb-6">
                    <li>カレンダーデータは一時的にキャッシュされ、必要な処理後に削除されます</li>
                    <li>会議メタデータ（タイトル、開始時刻）のみをデータベースに保存します</li>
                  </ul>
                  <h3 className="text-base font-medium mb-3">制限事項</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li>Ascend Agentは、Googleの限定用途の要件を遵守します</li>
                    <li>取得したデータを広告目的で使用することはありません</li>
                    <li>ユーザーの許可なく第三者と共有することはありません</li>
                  </ul>
                </>
              )},
              { title: '5. データの保存と管理', content: (
                <div className="bg-white p-6 rounded-lg space-y-3 border border-gray-200 text-sm">
                  <div><span className="font-medium text-gray-800">保存場所:</span><span className="text-gray-600 ml-2">Google Cloud Storage（日本リージョン）</span></div>
                  <div><span className="font-medium text-gray-800">保存期間:</span><span className="text-gray-600 ml-2">ユーザーが削除するまで無期限</span></div>
                  <div><span className="font-medium text-gray-800">暗号化:</span><span className="text-gray-600 ml-2">保存時および転送時に暗号化されます</span></div>
                  <div><span className="font-medium text-gray-800">アクセス制御:</span><span className="text-gray-600 ml-2">ユーザー本人と当社の限定された担当者のみがアクセス可能</span></div>
                </div>
              )},
              { title: '6. データの共有', content: (
                <>
                  <p className="text-gray-600 leading-relaxed mb-4">当社は、以下の場合を除き、個人情報を第三者に提供しません：</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li>ユーザーの同意がある場合</li>
                    <li>法令に基づく場合</li>
                    <li>人の生命、身体又は財産の保護のために必要がある場合</li>
                  </ul>
                </>
              )},
              { title: '7. Cookie の使用', content: (
                <p className="text-gray-600 leading-relaxed">本サービスは、ユーザーの利便性向上のためCookieを使用します。ブラウザの設定でCookieを無効化できますが、一部機能が制限される場合があります。</p>
              )},
              { title: '8. ユーザーの権利', content: (
                <>
                  <p className="text-gray-600 leading-relaxed mb-4">ユーザーは、以下の権利を有します：</p>
                  <ul className="list-disc list-inside space-y-2 ml-4 text-gray-600">
                    <li>個人情報の開示請求</li>
                    <li>個人情報の訂正・削除請求</li>
                    <li>個人情報の利用停止請求</li>
                    <li>Google Calendar へのアクセス許可の取り消し</li>
                  </ul>
                </>
              )},
              { title: '9. セキュリティ', content: (
                <p className="text-gray-600 leading-relaxed">当社は、個人情報の漏洩、滅失、毀損を防止するため、適切な安全管理措置を講じます。</p>
              )},
              { title: '10. プライバシーポリシーの変更', content: (
                <p className="text-gray-600 leading-relaxed">当社は、必要に応じて本プライバシーポリシーを変更できます。変更後のプライバシーポリシーは、本サービス上に掲示した時点で効力を生じます。</p>
              )},
              { title: '11. お問い合わせ', content: (
                <>
                  <p className="text-gray-600 leading-relaxed mb-4">個人情報の取り扱いに関するお問い合わせは、以下までご連絡ください：</p>
                  <div className="bg-white p-6 rounded-lg border border-gray-200">
                    <p className="font-medium text-gray-800 mb-2">Ascend Logic株式会社</p>
                    <p className="text-gray-600 text-sm">Email: <a href="mailto:rsaotome@ascendlogicai.com" className="text-gray-800 underline underline-offset-2 hover:text-indigo-600 transition-colors">rsaotome@ascendlogicai.com</a></p>
                  </div>
                </>
              )},
            ].map((section, index) => (
              <FadeIn key={index}>
                <div>
                  <h2 className="text-lg font-bold mb-4 pb-3 border-b border-gray-200">{section.title}</h2>
                  {section.content}
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
        <div className="relative z-10 text-center px-6">
          <FadeIn>
            <p className="text-white/60 text-sm mb-6">ご不明な点がございましたら、お気軽にお問い合わせください。</p>
            <Link href="/request-documents" className="pill-btn">
              お問い合わせ
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
