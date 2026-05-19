import Link from 'next/link'

export default function Hero() {
  return (
    <section id="top" className="relative pt-[140px] pb-[100px] overflow-hidden">
      <div className="relative w-full max-w-[1280px] mx-auto px-8 grid grid-cols-2 gap-x-[60px] gap-y-[80px] items-end max-[880px]:grid-cols-1 max-[880px]:gap-10 max-[720px]:px-5">
        <h1 className="m-0 col-span-2 font-bold leading-[1.14] tracking-tight text-[clamp(40px,6.2vw,92px)] max-w-[18ch]">
          <span className="block">AIの力で、すべての</span>
          <span className="block">企業と個人の</span>
          <span className="block">
            可能性を
            <em className="not-italic relative bg-[linear-gradient(120deg,var(--primary-deep)_0%,var(--primary-soft)_100%)] bg-clip-text text-transparent">解き放つ</em>。
          </span>
        </h1>

        <div className="col-start-1 col-end-2 flex flex-col gap-7 max-w-[480px]">
          <p className="m-0 text-lede leading-[1.85] text-foreground-soft max-w-[60ch]">
            オーダーメイドAI開発から自動化、データ分析、コンサルティングまで。 最先端のAI技術を、誰もが活用できるものに。
          </p>
          <div className="flex gap-3 flex-wrap">
            <Link
              href="/services"
              className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full font-semibold text-sm tracking-wide border border-transparent whitespace-nowrap bg-primary text-primary-foreground transition-all duration-200 hover:bg-primary-deep hover:-translate-y-px"
            >
              <span>サービスを見る</span>
              <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
            </Link>
            <Link
              href="/request-documents"
              className="inline-flex items-center gap-2.5 px-5 py-3 rounded-full font-semibold text-sm tracking-wide border border-border-strong whitespace-nowrap bg-transparent text-foreground transition-all duration-200 hover:border-foreground"
            >
              <span>無料相談を予約</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
