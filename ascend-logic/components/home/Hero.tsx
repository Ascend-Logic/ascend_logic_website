import Link from 'next/link'

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-mesh" aria-hidden="true"></div>
      <div className="al-container hero-type__inner">
        <h1 className="h-display hero-type__title">
          <span className="block">AIの力で、すべての</span>
          <span className="block">企業と個人の</span>
          <span className="block hero-type__hl">
            可能性を<em>解き放つ</em>。
          </span>
        </h1>

        <div className="hero-type__sub">
          <p className="lede">オーダーメイドAI開発から自動化、データ分析、コンサルティングまで。 最先端のAI技術を、誰もが活用できるものに。</p>
          <div className="hero-type__cta">
            <Link href="/services" className="btn btn-primary">
              <span>サービスを見る</span>
              <span className="arr">→</span>
            </Link>
            <Link href="/request-documents" className="btn btn-ghost">
              <span>無料相談を予約</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
