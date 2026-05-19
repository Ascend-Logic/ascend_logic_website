import Link from 'next/link'

type VizKind = 'viz-custom' | 'viz-rpa' | 'viz-data' | 'viz-consult'

const services: {
  no: string
  en: string
  jp: string
  desc: string
  points: string[]
  viz: VizKind
}[] = [
  {
    no: '01',
    en: 'Custom AI Development',
    jp: 'オーダーメイドAI開発',
    desc: '汎用AIでは解決できない高度なビジネス課題に対して、独自AIシステムを設計・開発。最適なアーキテクチャ、モデル選定・チューニング、現場定着まで一貫して対応します。',
    points: ['アーキテクチャ設計', 'モデル選定 / Fine-tuning', '現場定着サポート'],
    viz: 'viz-custom',
  },
  {
    no: '02',
    en: 'Process Automation',
    jp: 'プロセス自動化',
    desc: 'RPAとAIを組み合わせたハイブリッド型の自動化により、反復的な業務プロセスを効率化・コスト削減。段階的な導入と継続的な改善を重視します。',
    points: ['RPA × AI ハイブリッド', '段階的導入', '継続的改善'],
    viz: 'viz-rpa',
  },
  {
    no: '03',
    en: 'Data Analytics & Forecast',
    jp: 'データ分析・予測',
    desc: '蓄積データから価値ある洞察を抽出し、高精度な予測モデルの構築と直感的なダッシュボード開発によって、データドリブンな経営意思決定を支援します。',
    points: ['予測モデル構築', 'ダッシュボード開発', '意思決定支援'],
    viz: 'viz-data',
  },
  {
    no: '04',
    en: 'AI Consulting',
    jp: 'AI導入コンサルティング',
    desc: 'AI導入戦略の策定から人材育成まで、組織全体のAI活用能力向上を支援。経営戦略とAI戦略の統合、データガバナンス体制、社内AI人材育成まで。',
    points: ['戦略策定', 'データガバナンス', '社内人材育成'],
    viz: 'viz-consult',
  },
]

const monoText = 'font-mono tracking-wide'

function ServiceViz({ kind }: { kind: VizKind }) {
  const wrap = 'size-full flex flex-col gap-3 justify-center items-center'
  if (kind === 'viz-custom') {
    const layerBase = 'px-3.5 py-2.5 border rounded-lg text-xs flex justify-between items-center'
    return (
      <div className={wrap}>
        <div className="flex flex-col gap-1.5 w-full max-w-[240px]">
          <div className={`${layerBase} bg-background border-border text-foreground-soft`}>
            <span className={`${monoText} text-xs tracking-wider`}>prompt</span>
          </div>
          <div className={`${layerBase} bg-background border-border text-foreground-soft`}>
            <span className={`${monoText} text-xs tracking-wider`}>retrieval</span>
          </div>
          <div className={`${layerBase} bg-primary border-primary text-white`}>
            <span className={`${monoText} text-xs tracking-wider text-white`}>model</span>
          </div>
          <div className={`${layerBase} bg-background border-border text-foreground-soft`}>
            <span className={`${monoText} text-xs tracking-wider`}>eval / guardrails</span>
          </div>
          <div className={`${layerBase} bg-background border-border text-foreground-soft`}>
            <span className={`${monoText} text-xs tracking-wider`}>deploy</span>
          </div>
        </div>
      </div>
    )
  }
  if (kind === 'viz-rpa') {
    const nodeBase = 'px-3.5 py-2 border rounded-md text-xs font-semibold font-mono'
    return (
      <div className={wrap}>
        <div className="flex items-center gap-2 flex-wrap justify-center">
          <div className={`${nodeBase} bg-background border-border text-foreground-soft`}>CSV</div>
          <div className="text-muted-foreground font-mono tracking-wide">→</div>
          <div className={`${nodeBase} bg-primary border-primary text-white`}>AI抽出</div>
          <div className="text-muted-foreground font-mono tracking-wide">→</div>
          <div className={`${nodeBase} bg-background border-border text-foreground-soft`}>RPA</div>
          <div className="text-muted-foreground font-mono tracking-wide">→</div>
          <div className={`${nodeBase} bg-background border-border text-foreground-soft`}>ERP</div>
        </div>
      </div>
    )
  }
  if (kind === 'viz-data') {
    return (
      <div className={wrap}>
        <div className="w-full max-w-[260px] h-[130px]">
          <svg viewBox="0 0 200 100" preserveAspectRatio="none" className="size-full">
            <defs>
              <linearGradient id="vd" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="var(--primary)" stopOpacity="0.4" />
                <stop offset="100%" stopColor="var(--primary)" stopOpacity="0" />
              </linearGradient>
            </defs>
            <path d="M0 80 L20 70 L40 72 L60 55 L80 50 L100 38 L120 42 L140 28 L160 22 L180 18 L200 10 L200 100 L0 100 Z" fill="url(#vd)" />
            <path d="M0 80 L20 70 L40 72 L60 55 L80 50 L100 38 L120 42 L140 28 L160 22 L180 18 L200 10" fill="none" stroke="var(--primary)" strokeWidth="1.5" />
            <path d="M0 90 L40 85 L80 82 L120 75 L160 70 L200 62" fill="none" stroke="var(--muted-foreground)" strokeWidth="1" strokeDasharray="3 3" />
          </svg>
        </div>
        <div className="flex gap-4 text-xs text-muted-foreground mt-2 font-mono tracking-wide">
          <span>
            <span className="inline-block size-2 bg-primary rounded-full mr-1.5 align-middle"></span>予測モデル
          </span>
          <span>
            <span className="inline-block size-2 bg-muted-foreground rounded-full mr-1.5 align-middle"></span>実績ベースライン
          </span>
        </div>
      </div>
    )
  }
  return (
    <div className={wrap}>
      <div className="grid grid-cols-[repeat(3,36px)] gap-1.5">
        {Array.from({ length: 9 }).map((_, i) => {
          const isCenter = i === 4
          const isNear = [1, 3, 5, 7].includes(i)
          let cellCls = 'size-9 rounded-md border'
          if (isCenter) {
            cellCls += ' bg-primary text-white border-primary flex items-center justify-center text-xs font-bold'
          } else if (isNear) {
            cellCls += ' bg-[color-mix(in_oklab,var(--primary)_18%,var(--muted))] border-[color-mix(in_oklab,var(--primary)_25%,var(--border))]'
          } else {
            cellCls += ' bg-muted border-border'
          }
          return (
            <div key={i} className={cellCls}>
              {isCenter && <span className={monoText}>AI</span>}
            </div>
          )
        })}
      </div>
      <div className="mt-2">
        <span className={`${monoText} text-sm text-muted-foreground`}>戦略 · 組織 · 人材 · データ</span>
      </div>
    </div>
  )
}

export default function Services({ index = 2 }: { index?: number }) {
  const no = String(index).padStart(2, '0')
  const eyebrow =
    "font-mono text-xs font-medium tracking-widest uppercase text-primary inline-flex items-center gap-2 before:content-[''] before:w-[18px] before:h-px before:bg-current before:inline-block"

  return (
    <section id="services" className="relative py-[120px] max-[720px]:py-[72px]">
      <div className="relative w-full max-w-[1280px] mx-auto px-8 max-[720px]:px-5">
        <div className="grid grid-cols-[1.2fr_1fr] gap-[60px] items-end mb-16 max-[880px]:grid-cols-1 max-[880px]:gap-6">
          <div>
            <span className={eyebrow}>SERVICES &nbsp;/&nbsp; {no}</span>
            <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl leading-[1.25] tracking-tight m-0 mt-4">
              4つの軸で、
              <br />
              AIを現場に届ける。
            </h2>
          </div>
          <p className="m-0 text-lg leading-[1.85] text-foreground-soft max-w-[44ch]">
            汎用AIで終わらせない。設計から定着まで、
            <br />
            専業チームが一貫して伴走します。
          </p>
        </div>

        <div className="flex flex-col">
          {services.map((s, idx) => (
            <article
              key={s.no}
              className={`grid grid-cols-[80px_1.2fr_1fr] gap-12 py-14 border-t border-border items-start max-[880px]:grid-cols-1 max-[880px]:gap-6 ${idx === services.length - 1 ? 'border-b' : ''}`}
            >
              <div>
                <span className="font-mono text-sm text-muted-foreground tracking-widest">{s.no}</span>
              </div>
              <div>
                <div className="flex flex-col gap-1.5 mb-4">
                  <div className="font-en [font-feature-settings:'ss01'_1,'cv11'_1] text-xs tracking-widest text-primary font-medium uppercase">{s.en}</div>
                  <h3 className="font-semibold text-xl leading-[1.4] tracking-tight m-0">{s.jp}</h3>
                </div>
                <p className="text-foreground-soft m-0 mb-6 leading-[1.8] max-w-[48ch]">{s.desc}</p>
                <ul className="list-none p-0 m-0 mb-6 flex flex-col gap-2">
                  {s.points.map((p) => (
                    <li key={p} className="flex items-center gap-2.5 text-sm text-foreground-soft">
                      <span className="size-1.5 bg-primary rounded-full flex-shrink-0"></span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="group inline-flex items-center gap-1.5 font-medium text-sm text-primary">
                  <span>サービス詳細</span>
                  <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
                </Link>
              </div>
              <div className="h-[240px] bg-surface border border-border rounded-[18px] p-6 flex items-center justify-center relative overflow-hidden max-[880px]:h-[200px]">
                <ServiceViz kind={s.viz} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
