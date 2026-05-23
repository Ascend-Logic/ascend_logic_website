import { Metadata } from 'next'
import PageHero from '@/components/ui/PageHero'
import FadeIn from '@/components/ui/FadeIn'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'Ascend Logicのプライバシーポリシー。個人情報の取り扱いについてご説明します。',
}

export default function PrivacyPolicy() {
  const sections = [
    {
      title: '第1条（個人情報の定義）',
      content: (
        <p className="text-gray-600 leading-relaxed">
          本ポリシーにおいて「個人情報」とは、個人情報保護法第2条第1項に定義される、 生存する個人に関する情報であって、当該情報に含まれる氏名、生年月日その他の記述等により
          特定の個人を識別することができるもの（他の情報と容易に照合することができ、 それにより特定の個人を識別することができることとなるものを含む）、 または個人識別符号が含まれる情報を指します。
        </p>
      ),
    },
    {
      title: '第2条（個人情報の収集方法）',
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">当社は、以下の方法により個人情報を収集することがあります。</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>お客様からの直接のご提供（お問い合わせフォーム、資料請求フォーム等）</li>
            <li>ウェブサイトの利用履歴（Cookieやアクセスログ等）</li>
            <li>名刺交換や商談を通じた情報収集</li>
            <li>第三者からの適法な情報提供</li>
          </ul>
        </>
      ),
    },
    {
      title: '第3条（個人情報の利用目的）',
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">当社は、収集した個人情報を以下の目的で利用いたします。</p>
          <ol className="list-decimal list-inside space-y-2 text-gray-600 ml-4">
            <li>当社サービスの提供、運営、改善のため</li>
            <li>お客様からのお問い合わせへの対応のため</li>
            <li>資料送付、見積書・請求書等の発行のため</li>
            <li>契約の締結、履行、アフターサポートのため</li>
            <li>新サービス、キャンペーン、イベント等の案内のため</li>
            <li>マーケティング分析、市場調査のため</li>
            <li>当社ウェブサイトの品質向上、利便性向上のため</li>
            <li>利用規約違反や不正利用の調査、対応のため</li>
            <li>法令に基づく対応のため</li>
          </ol>
        </>
      ),
    },
    {
      title: '第4条（個人情報の第三者提供）',
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">当社は、以下のいずれかに該当する場合を除き、お客様の同意なく個人情報を第三者に提供することはありません。</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>法令に基づく場合</li>
            <li>人の生命、身体または財産の保護のために必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            <li>公衆衛生の向上または児童の健全な育成の推進のために特に必要がある場合であって、本人の同意を得ることが困難であるとき</li>
            <li>
              国の機関もしくは地方公共団体またはその委託を受けた者が法令の定める事務を遂行することに対して協力する必要がある場合であって、本人の同意を得ることにより当該事務の遂行に支障を及ぼすおそれがあるとき
            </li>
            <li>あらかじめお客様の同意を得た場合</li>
          </ul>
        </>
      ),
    },
    {
      title: '第5条（個人情報の開示・訂正・削除）',
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">お客様は、当社が保有するお客様ご自身の個人情報について、以下の権利を有します。</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>開示の請求</li>
            <li>訂正、追加または削除の請求</li>
            <li>利用の停止または消去の請求</li>
            <li>第三者への提供の停止の請求</li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-4">これらの請求を行う場合は、下記のお問い合わせ窓口までご連絡ください。 当社は、ご本人確認を行った上で、法令に従い適切に対応いたします。</p>
        </>
      ),
    },
    {
      title: '第6条（個人情報の安全管理）',
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">当社は、個人情報の漏えい、滅失または毀損の防止その他の個人情報の安全管理のために必要かつ適切な措置を講じます。</p>
          <ul className="list-disc list-inside space-y-2 text-gray-600 ml-4">
            <li>組織的安全管理措置（個人情報保護管理者の設置、規程の整備等）</li>
            <li>人的安全管理措置（従業員への教育・研修の実施、秘密保持契約の締結等）</li>
            <li>物理的安全管理措置（入退室管理、盗難防止措置等）</li>
            <li>技術的安全管理措置（アクセス制御、不正ソフトウェア対策、暗号化等）</li>
          </ul>
        </>
      ),
    },
    {
      title: '第7条（Cookieおよびアクセス解析ツール）',
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">当社ウェブサイトでは、サービスの品質向上、利用状況の分析のために、 CookieおよびGoogle Analytics等のアクセス解析ツールを使用しています。</p>
          <p className="text-gray-600 leading-relaxed mb-4">
            Cookieとは、ウェブサイトを訪問した際にブラウザに保存される小さなテキストファイルです。 Cookieにより、ウェブサイトの利便性向上やアクセス状況の把握が可能になります。
          </p>
          <p className="text-gray-600 leading-relaxed">
            お客様は、ブラウザの設定によりCookieの受け入れを拒否することができますが、 その場合、当社ウェブサイトの一部機能が正常に動作しない可能性があります。
          </p>
        </>
      ),
    },
    {
      title: '第8条（本ポリシーの変更）',
      content: (
        <p className="text-gray-600 leading-relaxed">
          当社は、法令の改正、社会情勢の変化、事業内容の変更等に応じて、 本ポリシーを変更することがあります。変更後のプライバシーポリシーは、
          当社ウェブサイト上に掲載した時点から効力を生じるものとします。
        </p>
      ),
    },
    {
      title: '第9条（お問い合わせ窓口）',
      content: (
        <>
          <p className="text-gray-600 leading-relaxed mb-4">個人情報の取り扱いに関するお問い合わせは、以下の窓口までご連絡ください。</p>
          <div className="bg-gray-50 p-6 rounded-lg">
            <p className="text-gray-800 font-medium mb-2">株式会社Ascend Logic</p>
            <p className="text-gray-600 text-sm mb-1">所在地: 〒198-0031 東京都青梅市師岡町1-125-14</p>
            <p className="text-gray-600 text-sm">メールアドレス: rsaotome@ascendlogicai.com</p>
          </div>
        </>
      ),
    },
  ]

  return (
    <>
      <PageHero titleEn="Privacy Policy" titleJa="プライバシーポリシー" description="株式会社Ascend Logicは、お客様の個人情報保護の重要性について認識し、適切な取扱い及び保護に努めます。" />

      <section className="py-20">
        <div className="max-w-[900px] mx-auto px-6 md:px-10">
          <div className="space-y-12">
            {sections.map((section, index) => (
              <FadeIn key={index}>
                <div>
                  <h2 className="text-lg font-bold mb-4 pb-3 border-b border-gray-200">{section.title}</h2>
                  {section.content}
                </div>
              </FadeIn>
            ))}

            <FadeIn>
              <div className="text-right text-gray-400 text-sm pt-4">
                <p>制定日: 2025年10月1日</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  )
}
