import { Metadata } from 'next'
import Link from 'next/link'
import PageHero from '../../components/ui/PageHero'
import FadeIn from '../../components/ui/FadeIn'

export const metadata: Metadata = {
  title: '会社概要',
  description: 'Ascend Logicの会社概要、ビジョン、ミッション、役員紹介、沿革についてご紹介します。',
}

export default function About() {
  const company = {
    name: '株式会社Ascend Logic',
    founded: '2025年12月',
    ceo: '早乙女 琉真',
    address: '東京都青梅市師岡町1-125-14',
    business: ['AIソリューション開発', 'プロセス自動化', 'データ分析・予測', 'AI導入コンサルティング'],
  }

  const companyInfo = [
    { label: '会社名', value: company.name },
    { label: '設立', value: company.founded },
    { label: '代表者', value: company.ceo },
    { label: '本社所在地', value: company.address },
  ]

  return (
    <>
      <PageHero titleEn="About" titleJa="会社概要" description="AIの力で、すべての企業と個人の可能性を解き放つ" />

      {/* Vision & Mission */}
      <section className="py-20 border-b border-gray-200">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-0 border-t border-l border-gray-200">
            <div className="border-r border-b border-gray-200 p-8 md:p-12">
              <FadeIn>
                <h2 className="font-en tracking-wide font-semibold text-sm text-gray-400 tracking-widest mb-3">Vision</h2>
                <h3 className="text-2xl font-bold mb-6">ビジョン</h3>
                <p className="text-lg text-gray-800 leading-relaxed mb-4">「AIの力で、すべての企業と個人の可能性を解き放つ」</p>
                <p className="text-gray-600 leading-relaxed">
                  AIは単なる技術革新ではなく、人間の創造性と可能性を拡張するツールです。 私たちは最先端のAI技術を活用し、企業や個人が直面する複雑な課題を解決し、
                  新たな価値創造を実現するパートナーであり続けます。
                </p>
              </FadeIn>
            </div>
            <div className="border-r border-b border-gray-200 p-8 md:p-12">
              <FadeIn delay={100}>
                <h2 className="font-en tracking-wide font-semibold text-sm text-gray-400 tracking-widest mb-3">Mission</h2>
                <h3 className="text-2xl font-bold mb-6">ミッション</h3>
                <p className="text-lg text-gray-800 leading-relaxed mb-4">「最先端のAI技術を、誰もが活用できるものに」</p>
                <p className="text-gray-600 leading-relaxed">
                  高度に専門的なAI技術を、あらゆる業種・規模の企業が簡単に導入・活用できるソリューションとして提供します。
                  私たちは技術の民主化を通じて、社会全体のデジタルトランスフォーメーションを加速します。
                </p>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* Company Info */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <FadeIn>
            <div className="text-center mb-14">
              <h2 className="font-en tracking-wide font-semibold text-sm text-gray-400 tracking-widest mb-2">Company</h2>
              <p className="text-2xl font-bold">会社情報</p>
            </div>
          </FadeIn>
          <FadeIn>
            <div className="max-w-3xl mx-auto">
              <table className="w-full">
                <tbody>
                  {companyInfo.map((item, index) => (
                    <tr key={index} className="border-b border-gray-200">
                      <th className="py-4 text-left text-gray-500 text-sm font-medium align-top w-1/3">{item.label}</th>
                      <td className="py-4 text-gray-800">{item.value}</td>
                    </tr>
                  ))}
                  <tr className="border-b border-gray-200">
                    <th className="py-4 text-left text-gray-500 text-sm font-medium align-top w-1/3">事業内容</th>
                    <td className="py-4 text-gray-800">
                      <ul className="space-y-1">
                        {company.business.map((item, index) => (
                          <li key={index} className="flex items-center">
                            <span className="w-1 h-1 bg-gray-400 rounded-full mr-3 flex-shrink-0"></span>
                            {item}
                          </li>
                        ))}
                      </ul>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <h2 className="font-en tracking-wide font-semibold text-2xl md:text-3xl text-white mb-4">Contact Us</h2>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">AIの導入やビジネスの課題解決について、お気軽にご相談ください。</p>
            <Link href="/request-documents" className="group inline-flex items-center gap-2 px-8 py-3 border-[1.5px] border-[#333] rounded-[30px] text-sm font-semibold bg-transparent transition-all duration-300 text-[#333] tracking-wide hover:bg-[#333] hover:text-white !border-white/30 !text-white hover:!bg-white/10">
              お問い合わせ
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
