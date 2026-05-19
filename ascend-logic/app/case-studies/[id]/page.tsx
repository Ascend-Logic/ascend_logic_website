import { Metadata } from 'next'
import Link from 'next/link'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import FadeIn from '../../../components/ui/FadeIn'
import { CaseStudy } from '../../../types'

interface CaseStudyDetailProps {
  params: Promise<{ id: string }>
}

interface DetailedCaseStudy extends CaseStudy {
  challenge?: string
  approach?: string
  technologies?: string[]
  duration?: string
  testimonial?: string
  testimonialAuthor?: string
}

const getImagePath = (imagePath: string): string => {
  const imageMap: { [key: string]: string } = {
    '/images/case-study-rag.jpg': '/images/case-study-rag.jpg',
    '/images/case-study-meeting.jpg': '/images/case-study-meeting.jpg',
    '/images/case-study-manhole.jpg': '/images/case-study-manhole.jpg',
    '/images/case-study-car.jpg': '/images/case-study-car.jpg',
    '/images/case-study-counseling.jpg': '/images/mental_health.png',
    '/images/case-study-embassy.jpg': '/images/process-automation.jpg',
    '/images/case-study-aiocr.jpg': '/images/case-study-aiocr.jpg',
  }
  return imageMap[imagePath] || '/images/ai_consulting.jpg'
}

function getCaseStudyById(id: number): DetailedCaseStudy | undefined {
  const caseStudies: DetailedCaseStudy[] = [
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
      challenge:
        '建設現場では膨大な図面、仕様書、工事記録が存在し、必要な情報を素早く見つけ出すことが困難でした。特に、過去の類似プロジェクトの知見を活用できていない状況で、同じ問題に何度も直面していました。',
      approach: '最新のRAG技術とマルチモーダルAIを組み合わせ、テキストだけでなく図面や画像も理解できる統合検索システムを構築。建築特有の専門用語や図面記号を学習させた独自モデルを開発しました。',
      technologies: ['RAG (Retrieval-Augmented Generation)', 'Vision Transformer', 'OpenAI GPT-4', 'Pinecone Vector DB', 'LangChain'],
      duration: '3ヶ月',
      testimonial: 'これまで資料探しに費やしていた時間が劇的に削減され、本来の設計業務に集中できるようになりました。新入社員も過去の知見にアクセスしやすくなり、教育効率が大幅に向上しています。',
      testimonialAuthor: '技術部長',
    },
    {
      id: 2,
      title: 'AI議事録システム',
      description: 'ZoomやMicrosoft Teamsなどの会議ツールに専用botを導入するだけで、リアルタイムで高精度な議事録を自動生成。話者認識、重要ポイント抽出、タスク管理まで完全自動化。',
      company: 'IT企業コンソーシアム',
      industry: 'IT・通信',
      solution: 'プロセス自動化',
      results: ['議事録作成時間を95%削減', '文字起こし精度99.2%を実現', 'タスク漏れを85%削減', '月間200時間の工数削減を達成'],
      imagePath: '/images/case-study-meeting.jpg',
      challenge: '毎日多数の会議が行われる中、議事録作成に膨大な時間を費やしていました。また、会議で決定したタスクの抜け漏れや、部門間での情報共有不足が課題となっていました。',
      approach:
        '最新の音声認識技術と自然言語処理を組み合わせ、リアルタイムで議事録を生成。話者識別機能により「誰が何を発言したか」を正確に記録し、AIが重要な決定事項とアクションアイテムを自動抽出します。',
      technologies: ['Whisper API', 'Speaker Diarization', 'GPT-4', 'Zapier Integration', 'WebRTC'],
      duration: '3ヶ月',
      testimonial: '会議後すぐに議事録が共有され、決定事項が明確になったことで、プロジェクトの進行速度が格段に上がりました。',
      testimonialAuthor: 'プロジェクトマネージャー',
    },
    // {
    //   id: 3,
    //   title: 'マンホール内可視化カメラ用ファームウェア',
    //   description: '特殊な音響センサーとAI画像解析技術を組み合わせた革新的なシステムを開発。マンホール内の浸水度合いを音波反射と画像認識により正確に測定・分析。',
    //   company: '地方自治体連合',
    //   industry: '公共インフラ',
    //   solution: 'AIソリューション開発',
    //   results: ['浸水レベル検知精度96%を達成', '点検作業時間を75%削減', '災害予測の精度向上により被害を60%軽減', 'インフラ維持管理コストを年間2億円削減'],
    //   imagePath: '/images/case-study-manhole.jpg',
    //   challenge: '都市型水害の増加に伴い、下水道の浸水状況をリアルタイムで把握する必要がありました。従来の人力による点検では危険が伴い、効率も悪く、豪雨時の迅速な対応が困難でした。',
    //   approach: '音響センサーによる水位測定と、AIカメラによる視覚的確認を組み合わせた二重検証システムを開発。エッジコンピューティングにより、通信障害時でも自律的に動作する設計としました。',
    //   technologies: ['Edge AI', 'Computer Vision', 'Acoustic Sensing', 'LoRaWAN', 'TensorFlow Lite'],
    //   duration: '3ヶ月',
    //   testimonial: '豪雨時でも安全に下水道の状況を把握でき、市民への避難勧告のタイミングが的確になりました。',
    //   testimonialAuthor: '都市インフラ管理部門責任者',
    // },
    {
      id: 4,
      title: '自動車の車種自動識別モデル開発',
      description: '数十万件以上の精緻なアノテーションと独自の画像前処理技術により、ブレた写真や部分的な画像からも高い精度で車種判別が可能なAIモデルを開発。',
      company: '大手損害保険会社',
      industry: '保険・金融',
      solution: 'データ分析・予測',
      results: ['車種識別精度97.8%を達成', '査定時間を80%短縮', '誤判定による手戻り作業を92%削減', '年間処理件数が3倍に向上'],
      imagePath: '/images/case-study-car.jpg',
      challenge: '自動車保険の査定業務において、事故車両の車種特定に時間がかかり、査定の遅延が顧客満足度低下の要因となっていました。',
      approach: '独自のデータ拡張技術により、様々な条件下での車両画像を学習。部分的な車体画像からも車種を特定できるよう、パーツ認識と全体推論を組み合わせたアンサンブルモデルを構築しました。',
      technologies: ['YOLO v8', 'Vision Transformer', 'Data Augmentation', 'Transfer Learning', 'MLOps Pipeline'],
      duration: '4ヶ月',
      testimonial: '査定時間が大幅に短縮され、お客様への迅速な対応が可能になりました。',
      testimonialAuthor: '損害サービス部門統括',
    },
    {
      id: 5,
      title: 'カウンセリングAI',
      description: '精神科医監修のもと、音声分析・表情認識・自然言語処理を統合したパーソナライズドカウンセリングAIアプリを開発。',
      company: 'ヘルスケアスタートアップ',
      industry: 'ヘルスケア',
      solution: 'AIソリューション開発',
      results: ['カウンセリング待機時間を0に', '心理状態判定精度89%を達成', 'ユーザー満足度94%を記録', '医療機関の負担を40%軽減'],
      imagePath: '/images/case-study-counseling.jpg',
      challenge: 'メンタルヘルスケアの需要が急増する中、専門カウンセラーの不足により、多くの人が適切なサポートを受けられない状況でした。',
      approach: '精神科医・臨床心理士と共同で、エビデンスベースのカウンセリングプロトコルをAIに実装。音声・表情・言語の多角的分析により、人間のカウンセラーに近い共感的な対話を実現しました。',
      technologies: ['Emotion Recognition AI', 'Voice Stress Analysis', 'GPT-4 Fine-tuning', 'WebRTC', 'Homomorphic Encryption'],
      duration: '6ヶ月',
      testimonial: '24時間いつでもアクセスでき、プライバシーも守られる環境で相談できることが、多くのユーザーに支持されています。',
      testimonialAuthor: '精神科医・医療監修責任者',
    },
    {
      id: 6,
      title: '大使館ポータルサイトの開発',
      description: '在外公館向けの多言語対応ポータルサイトを構築。AIによる自動翻訳システムと、各種申請手続きの自動化により、領事サービスの効率化と利便性向上を実現。',
      company: '某国大使館',
      industry: '政府・公共機関',
      solution: 'プロセス自動化',
      results: ['申請処理時間を70%削減', '多言語対応により利用者数が5倍増', '窓口業務負担を60%軽減', 'サービス満足度が85%向上'],
      imagePath: '/images/case-study-embassy.jpg',
      challenge: '在外邦人へのサービス提供において、時差や言語の壁、複雑な申請手続きが課題となっていました。',
      approach: 'AI翻訳と自動フォーム生成技術を活用し、多言語対応のセルフサービスポータルを構築。申請書類の自動チェック機能により、不備による手戻りを最小化しました。',
      technologies: ['Neural Machine Translation', 'OCR + Document AI', 'Workflow Automation', 'Next.js', 'AWS GovCloud'],
      duration: '1ヶ月',
      testimonial: 'デジタル化により、在外邦人の方々がいつでもどこからでもサービスを利用できるようになりました。',
      testimonialAuthor: '領事部門責任者',
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
      challenge:
        '不動産管理業務では、契約書・領収書・各種届出書類など膨大な紙ベースの帳票を日常的に処理する必要がありました。物件名・号室・契約者名・日付などの情報を手作業でExcelに転記しており、入力ミスや作業工数の増大が慢性的な課題となっていました。',
      approach:
        'AI-OCRエンジンを活用し、PDFアップロードからデータ抽出・確認・Excel出力までを4ステップのワークフロー（ファイルアップロード → OCR処理 → データ確認 → エクセルダウンロード）で設計。原本PDFと抽出結果を並べて確認・編集できるプレビュー画面を実装し、複数ファイルの一括処理にも対応しました。',
      technologies: ['AI-OCR', 'Document AI', 'Python', 'Next.js', 'Google Cloud Platform'],
      duration: '2ヶ月',
    },
  ]
  return caseStudies.find((study) => study.id === id)
}

export async function generateMetadata({ params }: CaseStudyDetailProps): Promise<Metadata> {
  const resolvedParams = await params
  const caseStudy = getCaseStudyById(parseInt(resolvedParams.id))
  if (!caseStudy) {
    return { title: '事例が見つかりません' }
  }
  return {
    title: `${caseStudy.title} - 導入事例`,
    description: `${caseStudy.company}様の導入事例: ${caseStudy.description.substring(0, 100)}...`,
  }
}

export default async function CaseStudyDetail({ params }: CaseStudyDetailProps) {
  const resolvedParams = await params
  const caseStudy = getCaseStudyById(parseInt(resolvedParams.id))

  if (!caseStudy) {
    notFound()
  }

  return (
    <>
      {/* Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10">
          <FadeIn>
            <Link href="/case-studies" className="inline-flex items-center text-white/50 hover:text-white text-sm mb-6 transition-colors">
              <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              導入事例一覧に戻る
            </Link>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div>
                <h1 className="text-2xl md:text-4xl font-bold text-white mb-2">{caseStudy.title}</h1>
                <p className="text-white/50 text-sm">{caseStudy.company}</p>
              </div>
              <span className="inline-block self-start bg-white/10 text-white/80 px-4 py-1.5 rounded text-xs tracking-wider font-medium">{caseStudy.industry}</span>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <FadeIn>
                <div className="h-80 md:h-96 relative mb-10 overflow-hidden rounded-lg">
                  <Image src={getImagePath(caseStudy.imagePath)} alt={caseStudy.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 66vw" priority />
                </div>
              </FadeIn>

              <FadeIn>
                <h2 className="font-en tracking-wide font-semibold text-sm text-gray-400 tracking-widest mb-2">Challenge</h2>
                <h3 className="text-xl font-bold mb-4">課題</h3>
                <p className="text-gray-600 leading-relaxed mb-12">{caseStudy.challenge || `${caseStudy.company}様は、業務の非効率性と増大するコストという課題に直面していました。`}</p>
              </FadeIn>

              <FadeIn>
                <h2 className="font-en tracking-wide font-semibold text-sm text-gray-400 tracking-widest mb-2">Approach</h2>
                <h3 className="text-xl font-bold mb-4">アプローチ</h3>
                <p className="text-gray-600 leading-relaxed mb-12">{caseStudy.approach || `Ascend Logicは、最新のAI技術を活用した${caseStudy.solution}ソリューションを提案・導入しました。`}</p>
              </FadeIn>
            </div>

            <div className="lg:col-span-1">
              <FadeIn>
                <div className="sticky top-24 bg-gray-50 rounded-lg p-6 space-y-6">
                  <div>
                    <h4 className="text-xs text-gray-400 tracking-wider uppercase mb-2 font-en tracking-wide font-semibold">Solution</h4>
                    <p className="font-medium">{caseStudy.solution}</p>
                  </div>
                  {caseStudy.duration && (
                    <div>
                      <h4 className="text-xs text-gray-400 tracking-wider uppercase mb-2 font-en tracking-wide font-semibold">Duration</h4>
                      <p className="font-medium">{caseStudy.duration}</p>
                    </div>
                  )}
                  {caseStudy.technologies && (
                    <div>
                      <h4 className="text-xs text-gray-400 tracking-wider uppercase mb-2 font-en tracking-wide font-semibold">Technologies</h4>
                      <div className="flex flex-wrap gap-2">
                        {caseStudy.technologies.map((tech, index) => (
                          <span key={index} className="text-xs bg-white border border-gray-200 px-3 py-1 rounded">
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                  <Link href="/request-documents" className="pill-btn block text-center !mt-8">
                    お問い合わせ
                  </Link>
                </div>
              </FadeIn>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
        <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 text-center">
          <FadeIn>
            <h2 className="font-en tracking-wide font-semibold text-2xl md:text-3xl text-white mb-4">Contact Us</h2>
            <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto mb-10 leading-relaxed">AIを活用した業務改善・自動化について、お気軽にご相談ください。</p>
            <Link href="/request-documents" className="pill-btn !border-white/30 !text-white hover:!bg-white/10">
              お問い合わせ
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  )
}
