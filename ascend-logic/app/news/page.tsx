import { Metadata } from 'next';
import PageHero from '../../components/ui/PageHero';
import FadeIn from '../../components/ui/FadeIn';
import { NewsItem } from '../../types';

export const metadata: Metadata = {
  title: 'お知らせ',
  description: 'Ascend Logicの最新ニュース、プレスリリース、お知らせをご覧いただけます。',
};

export default function News() {
  const newsItems: NewsItem[] = [
    {
      id: 2,
      title: '会社設立登記完了のお知らせ',
      date: '2025年12月26日',
      category: 'お知らせ',
      excerpt: '株式会社Ascend Logicは、2025年12月26日をもちまして、会社設立の登記が完了いたしました。今後ともよろしくお願い申し上げます。',
      url: '/news/2',
    },
  ];

  return (
    <>
      <PageHero
        titleEn="News"
        titleJa="お知らせ"
        description="Ascend Logicの最新ニュース、プレスリリースをご覧いただけます。"
      />

      <section className="py-20">
        <div className="max-w-[1200px] mx-auto px-6 md:px-10">
          <div className="space-y-0 border-t border-gray-200">
            {newsItems.map((item, index) => (
              <FadeIn key={item.id} delay={index * 80}>
                <div className="border-b border-gray-200 py-8 flex flex-col md:flex-row md:items-center gap-4">
                  <div className="md:w-1/5 flex items-center gap-4">
                    <span className="text-sm text-gray-400">{item.date}</span>
                    <span className="inline-block bg-gray-100 text-gray-600 px-3 py-0.5 rounded text-xs font-medium">
                      {item.category}
                    </span>
                  </div>
                  <div className="md:w-4/5">
                    <h2 className="text-lg font-bold mb-2">{item.title}</h2>
                    <p className="text-gray-500 text-sm leading-relaxed">{item.excerpt}</p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
