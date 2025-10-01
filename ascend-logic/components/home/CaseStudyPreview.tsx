import Link from 'next/link';
import { Card } from '../ui/Card';
import { CaseStudy } from '../../types';

export default function CaseStudyPreview() {
  const caseStudies: CaseStudy[] = [
    {
      id: 1,
      title: '大手金融機関の審査業務自動化',
      description: '審査プロセスの70%を自動化し、処理時間を85%削減。人的ミスも大幅に減少しました。',
      company: '株式会社A銀行',
      imagePath: '/images/case-study-1.jpg',
    },
    {
      id: 2,
      title: '製造業における予知保全システム構築',
      description: '機械学習モデルにより故障を事前予測し、ダウンタイムを60%削減。年間約3億円のコスト削減を実現。',
      company: 'B製造株式会社',
      imagePath: '/images/case-study-2.jpg',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {caseStudies.map((study) => (
        <Card key={study.id} className="overflow-hidden">
          <div className="h-48 relative mb-4">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400">
              {/* 画像がない場合のプレースホルダー */}
              <span className="text-lg">事例画像</span>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">{study.title}</h3>
          <p className="text-indigo-600 mb-3">{study.company}</p>
          <p className="text-gray-600 mb-4">{study.description}</p>
          <Link href={`/case-studies/${study.id}`} className="text-indigo-600 font-medium hover:text-indigo-800">
            詳細を見る →
          </Link>
        </Card>
      ))}
    </div>
  );
}
