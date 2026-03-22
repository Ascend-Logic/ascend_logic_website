import Link from 'next/link';
import FadeIn from '../ui/FadeIn';

interface ServiceItem {
  title: string;
  titleEn: string;
  subtitle: string;
  href: string;
}

export default function Services() {
  const services: ServiceItem[] = [
    {
      title: 'AIソリューション開発',
      titleEn: 'AI Solutions',
      subtitle: 'カスタムAI開発',
      href: '/services',
    },
    {
      title: 'プロセス自動化',
      titleEn: 'Automation',
      subtitle: '業務効率化',
      href: '/services',
    },
    {
      title: 'データ分析・予測',
      titleEn: 'Analytics',
      subtitle: 'データドリブン経営',
      href: '/services',
    },
  ];

  return (
    <FadeIn>
      <div className="grid grid-cols-1 md:grid-cols-3">
        {services.map((service) => (
          <Link key={service.titleEn} href={service.href} className="grid-card group">
            <h3 className="section-title-en text-xl md:text-2xl font-bold">{service.titleEn}</h3>
            <p className="text-xs text-gray-500 mt-1">{service.subtitle}</p>
            <p className="text-sm text-gray-700 mt-3 font-medium">{service.title}</p>
            <span className="grid-card-arrow group-hover:text-indigo-600">›</span>
          </Link>
        ))}
      </div>
    </FadeIn>
  );
}
