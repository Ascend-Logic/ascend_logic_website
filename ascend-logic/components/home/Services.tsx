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

function ServiceViz({ kind }: { kind: VizKind }) {
  if (kind === 'viz-custom') {
    return (
      <div className="viz">
        <div className="viz-stack">
          <div className="viz-layer l1">
            <span className="mono">prompt</span>
          </div>
          <div className="viz-layer l2">
            <span className="mono">retrieval</span>
          </div>
          <div className="viz-layer l3">
            <span className="mono">model</span>
          </div>
          <div className="viz-layer l4">
            <span className="mono">eval / guardrails</span>
          </div>
          <div className="viz-layer l5">
            <span className="mono">deploy</span>
          </div>
        </div>
      </div>
    )
  }
  if (kind === 'viz-rpa') {
    return (
      <div className="viz">
        <div className="viz-flow">
          <div className="flow-node">CSV</div>
          <div className="flow-arrow">→</div>
          <div className="flow-node accent">AI抽出</div>
          <div className="flow-arrow">→</div>
          <div className="flow-node">RPA</div>
          <div className="flow-arrow">→</div>
          <div className="flow-node">ERP</div>
        </div>
        {/* <div className="viz-flow-sub">
          <span className="mono tiny muted">{'// 反復処理 → 0 hr / week'}</span>
        </div> */}
      </div>
    )
  }
  if (kind === 'viz-data') {
    return (
      <div className="viz">
        <div className="viz-chart">
          <svg viewBox="0 0 200 100" preserveAspectRatio="none">
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
        <div className="viz-chart-legend">
          <span>
            <span className="legend-dot accent"></span>予測モデル
          </span>
          <span>
            <span className="legend-dot"></span>実績ベースライン
          </span>
        </div>
      </div>
    )
  }
  return (
    <div className="viz">
      <div className="viz-matrix">
        {Array.from({ length: 9 }).map((_, i) => (
          <div key={i} className={`mx-cell ${i === 4 ? 'mx-center' : ''} ${[1, 3, 5, 7].includes(i) ? 'mx-near' : ''}`}>
            {i === 4 && <span className="mono">AI</span>}
          </div>
        ))}
      </div>
      <div className="viz-matrix-labels">
        <span className="mono tiny muted">戦略 · 組織 · 人材 · データ</span>
      </div>
    </div>
  )
}

export default function Services() {
  return (
    <section className="al-section" id="services">
      <div className="al-container">
        <div className="sec-head">
          <div>
            <span className="eyebrow">SERVICES &nbsp;/&nbsp; 03</span>
            <h2 className="h-section" style={{ marginTop: 16 }}>
              4つの軸で、
              <br />
              AIを現場に届ける。
            </h2>
          </div>
          <p className="lede sec-head__lede">
            汎用AIで終わらせない。設計から定着まで、
            <br />
            専業チームが一貫して伴走します。
          </p>
        </div>

        <div className="services-list">
          {services.map((s) => (
            <article key={s.no} className="service-row">
              <div className="service-no">
                <span className="mono">{s.no}</span>
              </div>
              <div className="service-body">
                <div className="service-titles">
                  <div className="service-en en">{s.en}</div>
                  <h3 className="h-card service-jp">{s.jp}</h3>
                </div>
                <p className="service-desc">{s.desc}</p>
                <ul className="service-points">
                  {s.points.map((p) => (
                    <li key={p}>
                      <span className="bullet"></span>
                      {p}
                    </li>
                  ))}
                </ul>
                <Link href="/services" className="btn-link">
                  <span>サービス詳細</span>
                  <span className="arr">→</span>
                </Link>
              </div>
              <div className="service-viz">
                <ServiceViz kind={s.viz} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
