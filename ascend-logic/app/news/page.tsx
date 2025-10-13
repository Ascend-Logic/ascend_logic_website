import { Metadata } from 'next';
// import Link from 'next/link';
import Section from '../../components/ui/Section';
import { Card } from '../../components/ui/Card';
import { NewsItem } from '../../types';

export const metadata: Metadata = {
  title: 'お知らせ',
  description: 'Ascend Logicの最新ニュース、プレスリリース、お知らせをご覧いただけます。',
};

export default function News() {
  const newsItems: NewsItem[] = [
    {
      id: 1,
      title: '「Ascend Logic AI」正式リリースのお知らせ',
      date: '2025年10月1日',
      category: 'プレスリリース',
      excerpt: '自社開発のAIプラットフォーム最新版を正式リリース。新機能として自然言語による業務フロー自動生成機能や、マルチモーダルAI分析機能を追加。',
      url: '/news/1',
    }
  ];

  return (
    <>
      <Section className="py-20 bg-indigo-900 text-white">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-6">お知らせ</h1>
          <p className="text-xl max-w-3xl">
            Ascend Logicの最新ニュース、プレスリリース、お知らせをご覧いただけます。
          </p>
        </div>
      </Section>

      <Section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8">
            {newsItems.map((item) => (
              <Card key={item.id} className="border border-gray-100">
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-1/5">
                    <div className="text-gray-500 text-sm">{item.date}</div>
                    <span className="inline-block bg-indigo-100 text-indigo-800 px-3 py-1 rounded-full text-sm mt-2">
                      {item.category}
                    </span>
                  </div>
                  <div className="md:w-4/5">
                    <h2 className="text-xl font-bold mb-2">{item.title}</h2>
                    <p className="text-gray-600 mb-4">{item.excerpt}</p>
                    {/* <Link href={item.url} className="text-indigo-600 font-medium hover:text-indigo-800">
                      詳細を見る →
                    </Link> */}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </Section>
    </>
  );
}
