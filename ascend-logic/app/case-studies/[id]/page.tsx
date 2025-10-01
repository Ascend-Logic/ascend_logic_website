import { Metadata } from 'next';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import Section from '../../../components/ui/Section';
import { Card } from '../../../components/ui/Card';
import { Button } from '../../../components/ui/Button';
import { CaseStudy } from '../../../types';

// ページコンポーネントのpropsの型定義
interface CaseStudyDetailProps {
  params: {
    id: string;
  };
}

// 動的メタデータ生成
export async function generateMetadata({ params }: CaseStudyDetailProps): Promise<Metadata> {
  // 実際のアプリケーションでは、ここでデータベースやAPIからデータを取得します
  const caseStudy = getCaseStudyById(parseInt(params.id));
  
  if (!caseStudy) {
    return {
      title: '事例が見つかりません',
    };
  }
  
  return {
    title: caseStudy.title,
    description: `${caseStudy.company}の事例 - ${caseStudy.description.substring(0, 100)}...`,
  };
}

// この関数は実際のアプリケーションではデータベースやAPIからデータを取得する関数に置き換えます
function getCaseStudyById(id: number): CaseStudy | undefined {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: '大手金融機関の審査業務自動化',
      description: '審査プロセスの70%を自動化し、処理時間を85%削減。人的ミスも大幅に減少しました。',
      company: '株式会社A銀行',
      industry: '金融',
      solution: 'プロセス自動化',
      results: [
        '審査プロセスの70%を自動化',
        '処理時間を85%削減',
        '人的ミスを93%削減',
        'コスト削減効果: 年間約2億円',
      ],
      imagePath: '/images/case-study-1.jpg',
    },
    {
      id: 2,
      title: '製造業における予知保全システム構築',
      description: '機械学習モデルにより故障を事前予測し、ダウンタイムを60%削減。年間約3億円のコスト削減を実現。',
      company: 'B製造株式会社',
      industry: '製造業',
      solution: 'データ分析・予測',
      results: [
        '故障の96%を事前に予測',
        'ダウンタイムを60%削減',
        '保守コストを40%削減',
        'コスト削減効果: 年間約3億円',
      ],
      imagePath: '/images/case-study-2.jpg',
    },
    {
      id: 3,
      title: '小売業における需要予測システム',
      description: '過去の販売データと外部要因を組み合わせた需要予測モデルにより、在庫最適化と機会損失削減を実現。',
      company: 'C小売株式会社',
      industry: '小売',
      solution: 'データ分析・予測',
      results: [
        '予測精度85%以上を達成',
        '在庫コストを30%削減',
        '機会損失を45%削減',
        '売上向上効果: 前年比15%増',
      ],
      imagePath: '/images/case-study-3.jpg',
    },
  ];
  
  return caseStudies.find(study => study.id === id);
}

export default function CaseStudyDetail({ params }: CaseStudyDetailProps) {
  const caseStudy = getCaseStudyById(parseInt(params.id));
  
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
              <div className="h-96 relative mb-8 bg-gray-200 flex items-center justify-center">
                {/* 画像がない場合のプレースホルダー */}
                <span className="text-gray-400 text-xl">事例イメージ</span>
              </div>
              
              <h2 className="text-2xl font-bold mb-6">課題と解決策</h2>
              <p className="text-gray-700 mb-6">
                {caseStudy.company}は、業務の非効率性と人的ミスによるコスト増加という課題を抱えていました。
                従来の手作業による審査プロセスでは、処理に時間がかかり、ミスも発生しやすい状況でした。
              </p>
              <p className="text-gray-700 mb-6">
                Ascend Logicは、AIを活用した{caseStudy.solution}ソリューションを提案・導入しました。
                まず業務プロセスを詳細に分析し、自動化可能な領域を特定。その後、機械学習モデルの開発と
                既存システムとの統合を行い、段階的に導入を進めました。
              </p>
              
              <h2 className="text-2xl font-bold mb-6">導入効果</h2>
              <Card className="mb-8">
                <ul className="space-y-4">
                  {caseStudy.results?.map((result, index) => (
                    <li key={index} className="flex items-start">
                      <svg className="w-6 h-6 text-indigo-600 mr-3 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                        <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                      </svg>
                      <span className="text-lg">{result}</span>
                    </li>
                  ))}
                </ul>
              </Card>
              
              <h2 className="text-2xl font-bold mb-6">お客様の声</h2>
              <blockquote className="border-l-4 border-indigo-600 pl-6 py-2 mb-8 italic text-gray-700">
                「Ascend Logicのソリューション導入により、業務効率が劇的に向上しました。
                社員はより付加価値の高い業務に集中できるようになり、
                顧客満足度も向上しています。投資に対するリターンは期待以上でした。」
                <footer className="mt-2 font-semibold not-italic">- {caseStudy.company} CIO</footer>
              </blockquote>
            </div>
            
            <div className="lg:col-span-1">
              <Card className="mb-8">
                <h3 className="text-xl font-bold mb-4">導入ソリューション</h3>
                <p className="mb-6">{caseStudy.solution}</p>
                
                <h4 className="font-semibold mb-2">使用技術</h4>
                <ul className="space-y-2 mb-6">
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    機械学習アルゴリズム
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    自然言語処理
                  </li>
                  <li className="flex items-center">
                    <span className="inline-block w-2 h-2 bg-indigo-600 rounded-full mr-2"></span>
                    クラウドインフラストラクチャ
                  </li>
                </ul>
                
                <h4 className="font-semibold mb-2">導入期間</h4>
                <p className="mb-6">約6ヶ月</p>
                
                <Button href="/contact" className="w-full">
                  同様のソリューションについて相談する
                </Button>
              </Card>
              
              <Card>
                <h3 className="text-xl font-bold mb-4">関連サービス</h3>
                <ul className="space-y-4">
                  <li>
                    <Link href="/services" className="text-indigo-600 hover:text-indigo-800 font-medium">
                      {caseStudy.solution}
                    </Link>
                    <p className="text-gray-600 text-sm">
                      業務プロセスを自動化し、効率化とコスト削減を実現します。
                    </p>
                  </li>
                  <li>
                    <Link href="/services" className="text-indigo-600 hover:text-indigo-800 font-medium">
                      AI導入コンサルティング
                    </Link>
                    <p className="text-gray-600 text-sm">
                      貴社に最適なAI導入戦略を策定します。
                    </p>
                  </li>
                </ul>
              </Card>
            </div>
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
            <Button href="/contact">お問い合わせ</Button>
            <Button href="/request-documents" variant="outline">資料請求</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
