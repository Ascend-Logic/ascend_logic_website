import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import Section from '../../components/ui/Section';
import { Card } from '../../components/ui/Card';
import { CaseStudy } from '../../types';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: '導入事例',
  description: 'Ascend Logicのサービス導入事例のご紹介。様々な業種のお客様がどのようにAIで業務を改善したかをご覧いただけます。',
};

export default function CaseStudies() {
  // 画像パスのマッピング - 存在する画像は対応する画像を、存在しない画像は代替画像を使用
  const getImagePath = (study: CaseStudy): string => {
    const imageMap: { [key: string]: string } = {
      '/images/case-study-rag.jpg': '/images/case-study-rag.jpg',
      '/images/case-study-meeting.jpg': '/images/case-study-meeting.jpg',
      '/images/case-study-manhole.jpg': '/images/case-study-manhole.jpg',
      '/images/case-study-car.jpg': '/images/case-study-car.jpg', // 代替画像
      '/images/case-study-counseling.jpg': '/images/ai_solution.jpg', // 代替画像
      '/images/case-study-embassy.jpg': '/images/process-automation.jpg', // 代替画像
    };

    return imageMap[study.imagePath] || '/images/ai_consulting.jpg'; // デフォルト画像
  };

  const caseStudies: CaseStudy[] = [
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
    }
  ];

  return (
    <>
      <Section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">導入事例</h1>
          <p className="text-xl max-w-3xl">
            Ascend Logicのサービスを導入したお客様の実績をご紹介します。
            様々な業種のお客様がどのようにAIで業務改善を実現したかをご覧ください。
          </p>
        </div>
      </Section>

      <Section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {caseStudies.map((study) => (
              <Card key={study.id} className="overflow-hidden">
                <div className="h-48 relative mb-4">
                  <Image
                    src={getImagePath(study)}
                    alt={study.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, 50vw"
                  />
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold flex-1 pr-2">{study.title}</h2>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm whitespace-nowrap">
                    {study.industry}
                  </span>
                </div>
                {/* <p className="text-indigo-600 mb-3">{study.company}</p> */}
                <p className="text-gray-600 mb-4 line-clamp-3">{study.description}</p>
                {/* <div className="mb-4">
                  <h3 className="font-semibold mb-2">導入効果</h3>
                  <ul className="space-y-1">
                    {study.results?.slice(0, 3).map((result, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {result}
                      </li>
                    ))}
                    {study.results && study.results.length > 3 && (
                      <li className="text-sm text-gray-500 ml-6">他{study.results.length - 3}件の効果</li>
                    )}
                  </ul>
                </div> */}
                <Link href={`/case-studies/${study.id}`} className="text-indigo-600 font-medium hover:text-indigo-800">
                  詳細を見る →
                </Link>
              </Card>
            ))}
          </div>
        </div>
      </Section>

      <Section className="py-20 bg-indigo-50">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">導入をご検討中のお客様へ</h2>
          <p className="text-lg mb-10 max-w-3xl mx-auto">
            事例に関する詳細資料や、お客様のビジネス課題に対する具体的なソリューション案をご希望の方は、
            以下よりお問い合わせください。専門コンサルタントが丁寧にサポートいたします。
          </p>
          <div className="flex justify-center gap-4">
            {/* <Button href="/contact">お問い合わせ</Button> */}
            <Button href="/request-documents" variant="outline">お問い合わせ</Button>
          </div>
        </div>
      </Section>
    </>
  );
}