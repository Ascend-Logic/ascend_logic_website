import FadeIn from './FadeIn'

interface PageHeroProps {
  titleEn: string
  titleJa: string
  description?: string
}

export default function PageHero({ titleEn, titleJa, description }: PageHeroProps) {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />
      <div className="relative z-10 max-w-[1200px] mx-auto px-6 md:px-10 text-center">
        <FadeIn>
          <h1 className="font-en tracking-wide font-semibold text-4xl md:text-5xl text-white mb-2">{titleEn}</h1>
          <p className="text-white/50 text-sm font-medium mb-6">{titleJa}</p>
          {description && <p className="text-white/60 text-sm md:text-base max-w-2xl mx-auto leading-relaxed">{description}</p>}
        </FadeIn>
      </div>
    </section>
  )
}
