import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import Section from '../../../components/ui/Section';
// import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { CaseStudy } from '../../../types';

// ページコンポーネントのpropsの型定義
interface CaseStudyDetailProps {
  params: Promise<{
    id: string;
  }>;
}

// 詳細データの型定義
interface DetailedCaseStudy extends CaseStudy {
  challenge?: string;
  approach?: string;
  technologies?: string[];
  duration?: string;
  testimonial?: string;
  testimonialAuthor?: string;
}

// 詳細ページ用の画像パスマッピング
const getImagePath = (imagePath: string): string => {
  const imageMap: { [key: string]: string } = {
    '/images/case-study-rag.jpg': '/images/case-study-rag.jpg',
    '/images/case-study-meeting.jpg': '/images/case-study-meeting.jpg',
    '/images/case-study-manhole.jpg': '/images/case-study-manhole.jpg',
    '/images/case-study-car.jpg': '/images/case-study-car.jpg',
    '/images/case-study-counseling.jpg': '/images/ai_solution.jpg',
    '/images/case-study-embassy.jpg': '/images/process-automation.jpg',
  };

  return imageMap[imagePath] || '/images/ai_consulting.jpg';
};

// この関数は実際のアプリケーションではデータベースやAPIからデータを取得する関数に置き換えます
function getCaseStudyById(id: number): DetailedCaseStudy | undefined {
  const caseStudies: DetailedCaseStudy[] = [
    {
      id: 1,
      title: '社内ドメインに特化したナレッジ検索RAGシステム・チャットbot',
      description: '建築現場で扱われる複雑な図面やCADデータなどの視覚情報を最先端のAI技術で読み取り、正確にインデックス化。社内の膨大な技術文書やマニュアル、過去のプロジェクト資料から瞬時に必要な情報を取得できる高精度な検索システムを構築しました。',
      company: '大手建設会社',
      industry: '建設・不動産',
      solution: 'AIソリューション開発',
      results: [
        '情報検索時間を90%以上削減',
        '図面認識精度98.5%を達成',
        '新人教育期間を40%短縮',
        '技術継承の効率化により年間1.5億円のコスト削減',
      ],
      imagePath: '/images/case-study-rag.jpg',
      challenge: '建設現場では膨大な図面、仕様書、工事記録が存在し、必要な情報を素早く見つけ出すことが困難でした。特に、過去の類似プロジェクトの知見を活用できていない状況で、同じ問題に何度も直面していました。',
      approach: '最新のRAG技術とマルチモーダルAIを組み合わせ、テキストだけでなく図面や画像も理解できる統合検索システムを構築。建築特有の専門用語や図面記号を学習させた独自モデルを開発しました。',
      technologies: ['RAG (Retrieval-Augmented Generation)', 'Vision Transformer', 'OpenAI GPT-4', 'Pinecone Vector DB', 'LangChain'],
      duration: '8ヶ月',
      testimonial: 'これまで資料探しに費やしていた時間が劇的に削減され、本来の設計業務に集中できるようになりました。新入社員も過去の知見にアクセスしやすくなり、教育効率が大幅に向上しています。',
      testimonialAuthor: '技術部長',
    },
    {
      id: 2,
      title: 'AI議事録システム',
      description: 'ZoomやMicrosoft Teamsなどの会議ツールに専用botを導入するだけで、リアルタイムで高精度な議事録を自動生成。話者認識、重要ポイント抽出、タスク管理まで完全自動化。SlackやNotion、Salesforceなどの業務ツールへの自動転記により、会議後のフォローアップも効率化しました。',
      company: 'IT企業コンソーシアム',
      industry: 'IT・通信',
      solution: 'プロセス自動化',
      results: [
        '議事録作成時間を95%削減',
        '文字起こし精度99.2%を実現',
        'タスク漏れを85%削減',
        '月間200時間の工数削減を達成',
      ],
      imagePath: '/images/case-study-meeting.jpg',
      challenge: '毎日多数の会議が行われる中、議事録作成に膨大な時間を費やしていました。また、会議で決定したタスクの抜け漏れや、部門間での情報共有不足が課題となっていました。',
      approach: '最新の音声認識技術と自然言語処理を組み合わせ、リアルタイムで議事録を生成。話者識別機能により「誰が何を発言したか」を正確に記録し、AIが重要な決定事項とアクションアイテムを自動抽出します。',
      technologies: ['Whisper API', 'Speaker Diarization', 'GPT-4', 'Zapier Integration', 'WebRTC'],
      duration: '4ヶ月',
      testimonial: '会議後すぐに議事録が共有され、決定事項が明確になったことで、プロジェクトの進行速度が格段に上がりました。タスクの抜け漏れもなくなり、チーム全体の生産性が向上しています。',
      testimonialAuthor: 'プロジェクトマネージャー',
    },
    {
      id: 3,
      title: 'マンホール内可視化カメラ用ファームウェア',
      description: '特殊な音響センサーとAI画像解析技術を組み合わせた革新的なシステムを開発。マンホール内の浸水度合いを音波反射と画像認識により正確に測定・分析。豪雨時の都市型水害予測や下水道インフラの予防保全に貢献しています。',
      company: '地方自治体連合',
      industry: '公共インフラ',
      solution: 'AIソリューション開発',
      results: [
        '浸水レベル検知精度96%を達成',
        '点検作業時間を75%削減',
        '災害予測の精度向上により被害を60%軽減',
        'インフラ維持管理コストを年間2億円削減',
      ],
      imagePath: '/images/case-study-manhole.jpg',
      challenge: '都市型水害の増加に伴い、下水道の浸水状況をリアルタイムで把握する必要がありました。従来の人力による点検では危険が伴い、効率も悪く、豪雨時の迅速な対応が困難でした。',
      approach: '音響センサーによる水位測定と、AIカメラによる視覚的確認を組み合わせた二重検証システムを開発。エッジコンピューティングにより、通信障害時でも自律的に動作する設計としました。',
      technologies: ['Edge AI', 'Computer Vision', 'Acoustic Sensing', 'LoRaWAN', 'TensorFlow Lite'],
      duration: '10ヶ月',
      testimonial: '豪雨時でも安全に下水道の状況を把握でき、市民への避難勧告のタイミングが的確になりました。予防保全も効率化され、インフラ管理の質が大幅に向上しています。',
      testimonialAuthor: '都市インフラ管理部門責任者',
    },
    {
      id: 4,
      title: '自動車の車種自動識別モデル開発',
      description: '数十万件以上の精緻なアノテーションと独自の画像前処理技術により、ブレた写真や部分的な画像からも高い精度で車種判別が可能なAIモデルを開発。駐車場管理システムや交通量調査、保険査定業務などで活用され、業務効率の大幅な向上を実現しています。',
      company: '大手損害保険会社',
      industry: '保険・金融',
      solution: 'データ分析・予測',
      results: [
        '車種識別精度97.8%を達成',
        '査定時間を80%短縮',
        '誤判定による手戻り作業を92%削減',
        '年間処理件数が3倍に向上',
      ],
      imagePath: '/images/case-study-car.jpg',
      challenge: '自動車保険の査定業務において、事故車両の車種特定に時間がかかり、査定の遅延が顧客満足度低下の要因となっていました。また、夜間や悪天候時の不鮮明な写真での判定が困難でした。',
      approach: '独自のデータ拡張技術により、様々な条件下での車両画像を学習。部分的な車体画像からも車種を特定できるよう、パーツ認識と全体推論を組み合わせたアンサンブルモデルを構築しました。',
      technologies: ['YOLO v8', 'Vision Transformer', 'Data Augmentation', 'Transfer Learning', 'MLOps Pipeline'],
      duration: '6ヶ月',
      testimonial: '査定時間が大幅に短縮され、お客様への迅速な対応が可能になりました。誤判定も激減し、査定品質が向上したことで、顧客満足度が大きく改善しています。',
      testimonialAuthor: '損害サービス部門統括',
    },
    {
      id: 5,
      title: 'カウンセリングAI',
      description: '精神科医監修のもと、音声分析・表情認識・自然言語処理を統合したパーソナライズドカウンセリングAIアプリを開発。最新のAI音声生成技術により、自然でリアリティのある音声でリアルタイム会話が可能。録音された声質・抑揚・話速などから専門家監修のAIモデルで心理状況を高精度に判定し、適切なサポートを提供します。',
      company: 'ヘルスケアスタートアップ',
      industry: 'ヘルスケア',
      solution: 'AIソリューション開発',
      results: [
        'カウンセリング待機時間を0に',
        '心理状態判定精度89%を達成',
        'ユーザー満足度94%を記録',
        '医療機関の負担を40%軽減',
      ],
      imagePath: '/images/case-study-counseling.jpg',
      challenge: 'メンタルヘルスケアの需要が急増する中、専門カウンセラーの不足により、多くの人が適切なサポートを受けられない状況でした。また、対面カウンセリングへの心理的ハードルも課題でした。',
      approach: '精神科医・臨床心理士と共同で、エビデンスベースのカウンセリングプロトコルをAIに実装。音声・表情・言語の多角的分析により、人間のカウンセラーに近い共感的な対話を実現しました。',
      technologies: ['Emotion Recognition AI', 'Voice Stress Analysis', 'GPT-4 Fine-tuning', 'WebRTC', 'Homomorphic Encryption'],
      duration: '12ヶ月',
      testimonial: '24時間いつでもアクセスでき、プライバシーも守られる環境で相談できることが、多くのユーザーに支持されています。医療機関との連携もスムーズで、重症例の早期発見にも貢献しています。',
      testimonialAuthor: '精神科医・医療監修責任者',
    },
    {
      id: 6,
      title: '大使館ポータルサイトの開発',
      description: '在外公館向けの多言語対応ポータルサイトを構築。AIによる自動翻訳システムと、各種申請手続きの自動化により、領事サービスの効率化と利便性向上を実現。ビザ申請から各種証明書発行まで、24時間365日対応可能なデジタル窓口として機能しています。',
      company: '某国大使館',
      industry: '政府・公共機関',
      solution: 'プロセス自動化',
      results: [
        '申請処理時間を70%削減',
        '多言語対応により利用者数が5倍増',
        '窓口業務負担を60%軽減',
        'サービス満足度が85%向上',
      ],
      imagePath: '/images/case-study-embassy.jpg',
      challenge: '在外邦人へのサービス提供において、時差や言語の壁、複雑な申請手続きが課題となっていました。また、限られた人員で増加する申請に対応することが困難でした。',
      approach: 'AI翻訳と自動フォーム生成技術を活用し、多言語対応のセルフサービスポータルを構築。申請書類の自動チェック機能により、不備による手戻りを最小化しました。',
      technologies: ['Neural Machine Translation', 'OCR + Document AI', 'Workflow Automation', 'Next.js', 'AWS GovCloud'],
      duration: '9ヶ月',
      testimonial: 'デジタル化により、在外邦人の方々がいつでもどこからでもサービスを利用できるようになりました。職員の業務負担も軽減され、より質の高いサービス提供が可能になっています。',
      testimonialAuthor: '領事部門責任者',
    },
  ];

  return caseStudies.find(study => study.id === id);
}

// 動的メタデータ生成
export async function generateMetadata({ params }: CaseStudyDetailProps): Promise<Metadata> {
  const resolvedParams = await params;
  const caseStudy = getCaseStudyById(parseInt(resolvedParams.id));

  if (!caseStudy) {
    return {
      title: '事例が見つかりません',
    };
  }

  return {
    title: `${caseStudy.title} - 導入事例`,
    description: `${caseStudy.company}様の導入事例: ${caseStudy.description.substring(0, 100)}...`,
  };
}

export default async function CaseStudyDetail({ params }: CaseStudyDetailProps) {
  const resolvedParams = await params;
  const caseStudy = getCaseStudyById(parseInt(resolvedParams.id));

  if (!caseStudy) {
    notFound();
  }

  return (
    <>
      <Section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row justify-between items-start md:items-center">
            <div>
              <Link href="/case-studies" className="inline-flex items-center text-indigo-200 hover:text-white mb-4">
                <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                導入事例一覧に戻る
              </Link>
              <h1 className="text-4xl font-bold mb-2">{caseStudy.title}</h1>
              <p className="text-xl text-indigo-200">{caseStudy.company}</p>
            </div>
            <div className="mt-4 md:mt-0">
              <span className="inline-block bg-indigo-800 text-white px-4 py-2 rounded-md">
                {caseStudy.industry}
              </span>
            </div>
          </div>
        </div>
      </Section>

      <Section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
              <div className="h-96 relative mb-8 overflow-hidden rounded-lg">
                <Image
                  src={getImagePath(caseStudy.imagePath)}
                  alt={caseStudy.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                  priority
                />
              </div>

              <h2 className="text-2xl font-bold mb-6">課題</h2>
              <p className="text-gray-700 mb-8">
                {caseStudy.challenge || `${caseStudy.company}様は、業務の非効率性と増大するコストという課題に直面していました。`}
              </p>

              <h2 className="text-2xl font-bold mb-6">アプローチ</h2>
              <p className="text-gray-700 mb-8">
                {caseStudy.approach || `Ascend Logicは、最新のAI技術を活用した${caseStudy.solution}ソリューションを提案・導入しました。`}
              </p>
            </div>

            {/* <div className="lg:col-span-1">
              <Card className="mb-8 sticky top-8">
                <h3 className="text-xl font-bold mb-4">導入概要</h3>

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-600 mb-2">ソリューション</h4>
                  <p className="text-lg">{caseStudy.solution}</p>
                </div>

                {caseStudy.technologies && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-600 mb-2">使用技術</h4>
                    <ul className="space-y-2">
                      {caseStudy.technologies.map((tech, index) => (
                        <li key={index} className="flex items-center text-sm">
                          <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mr-2 flex-shrink-0"></span>
                          {tech}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {caseStudy.duration && (
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-600 mb-2">導入期間</h4>
                    <p className="text-lg">{caseStudy.duration}</p>
                  </div>
                )}

                <div className="mb-6">
                  <h4 className="font-semibold text-gray-600 mb-2">業界</h4>
                  <p className="text-lg">{caseStudy.industry}</p>
                </div>

                <Button href="/request-documents" className="w-full">
                  詳細資料を請求する
                </Button>
              </Card>
            </div> */}
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">貴社のビジネス課題も解決します</h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto">
            AIを活用した業務改善・自動化について、お気軽にご相談ください。
            専門コンサルタントが貴社の課題をヒアリングし、最適なソリューションをご提案いたします。
          </p>
          <div className="flex justify-center gap-4">
            <Button href="/request-documents" variant="outline">お問い合わせ</Button>
          </div>
        </div>
      </Section>
    </>
  );
}