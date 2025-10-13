import Link from 'next/link';
import Image from 'next/image';
import { Card } from '../ui/Card';
import { CaseStudy } from '../../types';

export default function CaseStudyPreview() {
  // 画像パスのマッピング
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

  // case-studies ページと同じデータを使用（最初の2件のみ表示）
  const allCaseStudies: CaseStudy[] = [
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
  ];

  const caseStudies = allCaseStudies.slice(0, 2);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {caseStudies.map((study) => (
        <Card key={study.id} className="overflow-hidden">
          <div className="h-48 relative mb-4">
            <Image
              src={getImagePath(study.imagePath)}
              alt={study.title}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="flex justify-between items-start mb-4">
            <h3 className="text-xl font-bold flex-1 pr-2">{study.title}</h3>
            <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm whitespace-nowrap">
              {study.industry}
            </span>
          </div>
          <p className="text-gray-600 mb-4 line-clamp-3">{study.description}</p>
          <Link href={`/case-studies/${study.id}`} className="text-indigo-600 font-medium hover:text-indigo-800">
            詳細を見る →
          </Link>
        </Card>
      ))}
    </div>
  );
}
