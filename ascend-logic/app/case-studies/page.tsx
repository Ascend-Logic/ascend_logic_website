import { Metadata } from 'next';
import Link from 'next/link';
import Section from '../../components/ui/Section';
import { Card } from '../../components/ui/Card';
import { CaseStudy } from '../../types';
import { Button } from '@/components/ui/Button';

export const metadata: Metadata = {
  title: '導入事例',
  description: 'Ascend Logicのサービス導入事例のご紹介。様々な業種のお客様がどのようにAIで業務を改善したかをご覧いただけます。',
};

export default function CaseStudies() {
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
                  <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
                    {/* 画像がない場合のプレースホルダー */}
                    <span className="text-lg">事例画像</span>
                  </div>
                </div>
                <div className="flex justify-between items-start mb-4">
                  <h2 className="text-xl font-bold">{study.title}</h2>
                  <span className="bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm">
                    {study.industry}
                  </span>
                </div>
                <p className="text-indigo-600 mb-3">{study.company}</p>
                <p className="text-gray-600 mb-4">{study.description}</p>
                <div className="mb-4">
                  <h3 className="font-semibold mb-2">導入効果</h3>
                  <ul className="space-y-1">
                    {study.results?.map((result, index) => (
                      <li key={index} className="flex items-start text-sm">
                        <svg className="w-4 h-4 text-indigo-600 mr-2 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {result}
                      </li>
                    ))}
                  </ul>
                </div>
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
            <Button href="/contact">お問い合わせ</Button>
            <Button href="/request-documents" variant="outline">資料請求</Button>
          </div>
        </div>
      </Section>
    </>
  );
}
