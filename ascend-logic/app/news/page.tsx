import { Metadata } from 'next';
import Link from 'next/link';
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
      title: '「Ascend Logic AI Platform v2.0」正式リリースのお知らせ',
      date: '2025年4月15日',
      category: 'プレスリリース',
      excerpt: '自社開発のAIプラットフォーム最新版を正式リリース。新機能として自然言語による業務フロー自動生成機能や、マルチモーダルAI分析機能を追加。',
      url: '/news/1',
    },
    {
      id: 2,
      title: '大手製造業B社との戦略的パートナーシップ締結について',
      date: '2025年3月28日',
      category: 'お知らせ',
      excerpt: '製造業向けAI予知保全システムの共同開発および展開に関する戦略的パートナーシップを締結いたしました。',
      url: '/news/2',
    },
    {
      id: 3,
      title: '東京本社オフィス移転のお知らせ',
      date: '2025年3月15日',
      category: 'お知らせ',
      excerpt: '事業拡大に伴い、2025年4月1日より東京本社を六本木ヒルズへ移転いたします。',
      url: '/news/3',
    },
    {
      id: 4,
      title: '研究開発部門の最新成果を国際会議「AI Summit 2025」で発表',
      date: '2025年2月20日',
      category: 'プレスリリース',
      excerpt: '当社研究開発部門の最新研究成果が国際会議「AI Summit 2025」で採択され、基調講演を行います。',
      url: '/news/4',
    },
    {
      id: 5,
      title: '年間売上50億円突破のお知らせ',
      date: '2025年2月10日',
      category: 'お知らせ',
      excerpt: '創業5年目となる2024年度、年間売上50億円を突破いたしました。ご支援いただいている皆様に感謝申し上げます。',
      url: '/news/5',
    },
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
                    <Link href={item.url} className="text-indigo-600 font-medium hover:text-indigo-800">
                      詳細を見る →
                    </Link>
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
