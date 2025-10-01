import { Button } from '../ui/Button';

interface HeroProps {
  title: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
}

export default function Hero({ title, subtitle, ctaText, ctaLink }: HeroProps) {
  return (
    <section className="bg-indigo-900 text-white relative">
      <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 to-purple-800 opacity-90"></div>
      <div className="container mx-auto px-4 py-20 md:py-32 relative z-10">
        <div className="max-w-3xl">
          <h1 
            className="text-4xl md:text-6xl font-bold mb-6"
            dangerouslySetInnerHTML={{ __html: title }}
          />
          <p className="text-xl md:text-2xl mb-8 text-indigo-100">{subtitle}</p>
          <Button href={ctaLink} variant="white">{ctaText}</Button>
        </div>
      </div>
    </section>
  );
}
