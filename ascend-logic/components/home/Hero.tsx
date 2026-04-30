import Link from 'next/link';

export default function Hero() {
  return (
    <section className="relative min-h-[640px] md:min-h-[760px] flex items-center overflow-hidden bg-[#07070d]">
      {/* Animated mesh gradient blobs */}
      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="hero-blob hero-blob-1" />
        <div className="hero-blob hero-blob-2" />
        <div className="hero-blob hero-blob-3" />
      </div>

      {/* Subtle grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.14] [background-image:linear-gradient(rgba(255,255,255,0.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.07)_1px,transparent_1px)] [background-size:56px_56px]"
        aria-hidden
      />

      {/* Bottom vignette to blend into next section */}
      <div className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#07070d]" aria-hidden />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1200px] mx-auto px-6 md:px-10 py-24 md:py-32">
        <div className="max-w-3xl">
          {/* Eyebrow */}
          {/* <div className="inline-flex items-center gap-2.5 mb-8 px-3.5 py-1.5 rounded-full border border-white/15 bg-white/[0.04] backdrop-blur-md">
            <span className="relative flex w-1.5 h-1.5">
              <span className="absolute inline-flex w-full h-full rounded-full bg-emerald-400 opacity-75 animate-ping" />
              <span className="relative inline-flex w-1.5 h-1.5 rounded-full bg-emerald-400" />
            </span>
            <span className="section-title-en text-[11px] tracking-[0.22em] uppercase text-white/75 font-medium">
              AI Solutions
            </span>
          </div> */}

          {/* Headline */}
          <h1 className="hero-title text-white text-3xl md:text-5xl lg:text-6xl !leading-[1.3] !tracking-[0.02em]">
            ロジックで、
            <br />
            ビジネスを次の高みへ。
          </h1>

          {/* Sub */}
          <p className="mt-7 md:mt-9 text-base md:text-lg text-white/60 max-w-xl leading-[1.9] tracking-wide">
            AI時代のビジネス変革を、ロジックで設計する。<br className="hidden md:block" />
            最先端のテクノロジーで、貴社のビジネスを次のステージへ。
          </p>

          {/* CTA */}
          <div className="mt-10 md:mt-12 flex flex-wrap items-center gap-3 md:gap-4">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-black text-[13px] font-semibold tracking-wide hover:bg-white/90 transition-colors"
            >
              サービスを見る
              <span className="transition-transform group-hover:translate-x-0.5">→</span>
            </Link>
            <Link
              href="/request-documents"
              className="group inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/25 text-white text-[13px] font-semibold tracking-wide hover:bg-white/10 transition-colors"
            >
              お問い合わせ
              <span className="transition-transform group-hover:translate-x-0.5">›</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 hidden md:flex flex-col items-center gap-2 text-white/40">
        <span className="section-title-en text-[10px] tracking-[0.3em] uppercase">Scroll</span>
        <span className="block w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
