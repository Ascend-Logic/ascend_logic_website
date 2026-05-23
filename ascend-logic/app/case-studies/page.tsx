import { Metadata } from 'next'
import { ArrowRight } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import CtaLink from '@/components/ui/CtaLink'
import PageHero from '@/components/ui/PageHero'
import FadeIn from '@/components/ui/FadeIn'
import { CaseStudy } from '@/types'

export const metadata: Metadata = {
  title: '導入事例',
  description: 'Ascend Logicのサービス導入事例のご紹介。様々な業種のお客様がどのようにAIで業務を改善したかをご覧いただけます。',
}

export default function CaseStudies() {
  const getImagePath = (study: CaseStudy): string => {
    const imageMap: { [key: string]: string } = {
      '/images/case-study-rag.jpg': '/images/case-study-rag.jpg',
      '/images/case-study-meeting.jpg': '/images/case-study-meeting.jpg',
      '/images/case-study-manhole.jpg': '/images/case-study-manhole.jpg',
      '/images/case-study-car.jpg': '/images/case-study-car.jpg',
      '/images/case-study-counseling.jpg': '/images/mental_health.png',
      '/images/case-study-embassy.jpg': '/images/process-automation.jpg',
      '/images/case-study-aiocr.jpg': '/images/case-study-aiocr.jpg',
    }
    return imageMap[study.imagePath] || '/images/ai_consulting.jpg'
  }

  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: '社内ドメインに特化したナレッジ検索RAGシステム・チャットbot',
      description:
        '建築現場で扱われる複雑な図面やCADデータなどの視覚情報を最先端のAI技術で読み取り、正確にインデックス化。社内の膨大な技術文書やマニュアル、過去のプロジェクト資料から瞬時に必要な情報を取得できる高精度な検索システムを構築しました。',
      company: '大手建設会社',
      industry: '建設・不動産',
      solution: 'AIソリューション開発',
      results: ['情報検索時間を90%以上削減', '図面認識精度98.5%を達成', '新人教育期間を40%短縮', '技術継承の効率化により年間1.5億円のコスト削減'],
      imagePath: '/images/case-study-rag.jpg',
    },
    {
      id: 2,
      title: 'AI議事録システム',
      description:
        'ZoomやMicrosoft Teamsなどの会議ツールに専用botを導入するだけで、リアルタイムで高精度な議事録を自動生成。話者認識、重要ポイント抽出、タスク管理まで完全自動化。SlackやNotion、Salesforceなどの業務ツールへの自動転記により、会議後のフォローアップも効率化しました。',
      company: 'IT企業コンソーシアム',
      industry: 'IT・通信',
      solution: 'プロセス自動化',
      results: ['議事録作成時間を95%削減', '文字起こし精度99.2%を実現', 'タスク漏れを85%削減', '月間200時間の工数削減を達成'],
      imagePath: '/images/case-study-meeting.jpg',
    },
    // {
    //   id: 3,
    //   title: 'マンホール内可視化カメラ用ファームウェア',
    //   description: '特殊な音響センサーとAI画像解析技術を組み合わせた革新的なシステムを開発。マンホール内の浸水度合いを音波反射と画像認識により正確に測定・分析。豪雨時の都市型水害予測や下水道インフラの予防保全に貢献しています。',
    //   company: '地方自治体連合',
    //   industry: '公共インフラ',
    //   solution: 'AIソリューション開発',
    //   results: ['浸水レベル検知精度96%を達成', '点検作業時間を75%削減', '災害予測の精度向上により被害を60%軽減', 'インフラ維持管理コストを年間2億円削減'],
    //   imagePath: '/images/case-study-manhole.jpg',
    // },
    {
      id: 4,
      title: '自動車の車種自動識別モデル開発',
      description:
        '数十万件以上の精緻なアノテーションと独自の画像前処理技術により、ブレた写真や部分的な画像からも高い精度で車種判別が可能なAIモデルを開発。駐車場管理システムや交通量調査、保険査定業務などで活用され、業務効率の大幅な向上を実現しています。',
      company: '大手損害保険会社',
      industry: '保険・金融',
      solution: 'データ分析・予測',
      results: ['車種識別精度97.8%を達成', '査定時間を80%短縮', '誤判定による手戻り作業を92%削減', '年間処理件数が3倍に向上'],
      imagePath: '/images/case-study-car.jpg',
    },
    {
      id: 5,
      title: 'カウンセリングAI',
      description:
        '精神科医監修のもと、音声分析・表情認識・自然言語処理を統合したパーソナライズドカウンセリングAIアプリを開発。最新のAI音声生成技術により、自然でリアリティのある音声でリアルタイム会話が可能。録音された声質・抑揚・話速などから専門家監修のAIモデルで心理状況を高精度に判定し、適切なサポートを提供します。',
      company: 'ヘルスケアスタートアップ',
      industry: 'ヘルスケア',
      solution: 'AIソリューション開発',
      results: ['カウンセリング待機時間を0に', '心理状態判定精度89%を達成', 'ユーザー満足度94%を記録', '医療機関の負担を40%軽減'],
      imagePath: '/images/case-study-counseling.jpg',
    },
    {
      id: 6,
      title: '大使館ポータルサイトの開発',
      description:
        '在外公館向けの多言語対応ポータルサイトを構築。AIによる自動翻訳システムと、各種申請手続きの自動化により、領事サービスの効率化と利便性向上を実現。ビザ申請から各種証明書発行まで、24時間365日対応可能なデジタル窓口として機能しています。',
      company: '某国大使館',
      industry: '政府・公共機関',
      solution: 'プロセス自動化',
      results: ['申請処理時間を70%削減', '多言語対応により利用者数が5倍増', '窓口業務負担を60%軽減', 'サービス満足度が85%向上'],
      imagePath: '/images/case-study-embassy.jpg',
    },
    {
      id: 7,
      title: 'AI-OCR 自動転記システム',
      description:
        '契約書や領収書などの紙ベース帳票をPDFとしてアップロードすると、AI-OCRエンジンが文書内のテキスト・表組み・手書き文字を自動認識し、構造化データを抽出。確認・編集後にワンクリックでExcelへ自動転記でき、従来の手入力作業を大幅に削減するソリューションを構築しました。',
      company: '不動産管理会社',
      industry: '不動産・管理',
      solution: 'プロセス自動化',
      results: ['手入力工数を80%以上削減', '複数ファイルの一括処理に対応', 'データ抽出精度の大幅向上', '契約書管理業務の効率化を実現'],
      imagePath: '/images/case-study-aiocr.jpg',
    },
  ]

  return (
    <>
      <PageHero titleEn="Case Studies" titleJa="導入事例" description="様々な業種のお客様がどのようにAIで業務改善を実現したかをご覧ください。" />

      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 border-t border-l border-gray-200">
            {caseStudies.map((study, index) => (
              <FadeIn key={study.id} delay={index * 80}>
                <Link href={`/case-studies/${study.id}`} className="block border-r border-b border-gray-200 group">
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src={getImagePath(study)}
                      alt={study.title}
                      fill
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                    <div className="absolute top-3 left-3">
                      <span className="bg-white/90 text-gray-800 px-3 py-1 text-xs font-medium rounded">{study.industry}</span>
                    </div>
                  </div>
                  <div className="p-5">
                    <h2 className="text-base font-bold mb-2 group-hover:text-indigo-600 transition-colors line-clamp-2">{study.title}</h2>
                    <p className="text-gray-500 text-xs leading-relaxed line-clamp-3">{study.description}</p>
                    <span className="inline-flex items-center gap-1 mt-3 text-xs text-gray-400 group-hover:text-indigo-600 transition-colors">
                      詳細を見る <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </Link>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <h2 className="font-en tracking-wide font-semibold text-2xl md:text-3xl text-white mb-4">Contact Us</h2>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">
              事例に関する詳細や、お客様のビジネス課題に対する具体的なソリューション案をご希望の方は、 お気軽にお問い合わせください。
            </p>
            <CtaLink href="/request-documents" variant="outline-light">
              お問い合わせ
            </CtaLink>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
