import Link from 'next/link';
import Image from 'next/image';
import FadeIn from '../ui/FadeIn';

interface TopicItem {
  id: number;
  title: string;
  tag: string;
  tagColor: string;
  date: string;
  image: string;
  href: string;
}

export default function CaseStudyPreview() {
  const topics: TopicItem[] = [
    {
      id: 1,
      title: '社内ドメインに特化したナレッジ検索RAGシステム・チャットbot',
      tag: '導入事例',
      tagColor: 'bg-indigo-600',
      date: '2025年10月',
      image: '/images/case-study-rag.jpg',
      href: '/case-studies/1',
    },
    {
      id: 2,
      title: 'AI議事録システムで会議の生産性を飛躍的に向上',
      tag: '導入事例',
      tagColor: 'bg-indigo-600',
      date: '2025年10月',
      image: '/images/case-study-meeting.jpg',
      href: '/case-studies/2',
    },
    {
      id: 3,
      title: '会社設立登記完了のお知らせ',
      tag: 'お知らせ',
      tagColor: 'bg-gray-800',
      date: '2025年12月26日',
      image: '/images/ai_solution.jpg',
      href: '/news',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {topics.map((topic, index) => (
        <FadeIn key={topic.id} delay={index * 100}>
          <Link href={topic.href} className="topic-card block group">
            <div className="relative aspect-[16/10] overflow-hidden bg-gray-100">
              <Image
                src={topic.image}
                alt={topic.title}
                fill
                className="object-cover img-zoom"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
              <span className={`absolute bottom-2.5 left-2.5 ${topic.tagColor} text-white text-[10px] font-bold px-2.5 py-1 rounded`}>
                {topic.tag}
              </span>
              <span className="absolute bottom-2.5 right-2.5 text-[10px] text-white/80">
                {topic.date}
              </span>
            </div>
            <p className="px-4 py-3.5 text-[13px] font-medium leading-relaxed group-hover:text-indigo-600 transition-colors">
              {topic.title}
            </p>
          </Link>
        </FadeIn>
      ))}
    </div>
  );
}
