import Link from 'next/link'
import CaseVisual from './CaseVisual'

type Kind = 'construction' | 'it' | 'infra' | 'insurance' | 'healthcare' | 'government' | 'property'

const cases: { id: number; ind: string; en: string; tag: string; note: string; viz: Kind }[] = [
  {
    id: 1,
    ind: '建設・不動産',
    en: 'Construction & Real Estate',
    tag: 'RAGナレッジ検索',
    note: '図面・技術文書を横断検索',
    viz: 'construction',
  },
  {
    id: 2,
    ind: 'IT・通信',
    en: 'IT & Telecom',
    tag: 'AI議事録システム',
    note: '会議の自動文字起こし・タスク管理',
    viz: 'it',
  },
  {
    id: 4,
    ind: '保険・金融',
    en: 'Insurance & Finance',
    tag: '車種自動識別AI',
    note: '損害査定業務の高速化',
    viz: 'insurance',
  },
  {
    id: 5,
    ind: 'ヘルスケア',
    en: 'Healthcare',
    tag: 'カウンセリングAI',
    note: '音声・表情でメンタル支援',
    viz: 'healthcare',
  },
  {
    id: 6,
    ind: '政府・公共機関',
    en: 'Government',
    tag: '大使館ポータル',
    note: '多言語デジタル窓口',
    viz: 'government',
  },
  {
    id: 7,
    ind: '不動産・管理',
    en: 'Property Management',
    tag: 'AI-OCR 自動転記',
    note: '紙帳票をExcelへ自動転記',
    viz: 'property',
  },
]

export default function Cases() {
  return (
    <section id="cases" className="relative py-[120px] max-[720px]:py-[72px]">
      <div className="relative w-full max-w-[1280px] mx-auto px-8 max-[720px]:px-5">
        <div className="grid grid-cols-[1.2fr_1fr] gap-[60px] items-end mb-16 max-[880px]:grid-cols-1 max-[880px]:gap-6">
          <div>
            <span className="font-mono text-xs font-medium tracking-eyebrow uppercase text-primary inline-flex items-center gap-2 before:content-[''] before:w-[18px] before:h-px before:bg-current before:inline-block">
              CASE STUDIES &nbsp;/&nbsp; 05
            </span>
            <h2 className="font-bold text-section leading-[1.25] tracking-tight m-0 mt-4">
              業種を問わず、
              <br />
              現場に届くAIを。
            </h2>
          </div>
          <p className="m-0 text-lede leading-[1.85] text-foreground-soft max-w-[44ch]">技術の専門性と、現場定着への伴走支援が私たちの強みです。</p>
        </div>

        <div className="grid grid-cols-4 gap-px bg-border border border-border rounded-[18px] overflow-hidden max-[980px]:grid-cols-2 max-[560px]:grid-cols-1">
          {cases.map((c, i) => (
            <article key={c.en} className="bg-background p-6 flex flex-col gap-4 min-h-[320px] transition-colors duration-200 hover:bg-surface">
              <div className="font-mono text-[10px] tracking-widest text-muted-foreground">CASE / {String(i + 1).padStart(2, '0')}</div>
              <div className="h-[110px] bg-muted border border-border rounded-md overflow-hidden flex items-center justify-center [&_svg]:size-full [&_svg]:block">
                <CaseVisual kind={c.viz} />
              </div>
              <div className="flex flex-col gap-2.5">
                <div>
                  <span className="font-en text-xs tracking-widest text-primary font-medium uppercase block mb-1">{c.en}</span>
                  <h3 className="text-lg font-bold m-0 leading-[1.4]">{c.ind}</h3>
                </div>
                <div>
                  <span className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase px-2.5 py-[5px] border border-border-strong rounded-full text-foreground-soft bg-background">
                    <span className="size-[5px] rounded-full bg-primary"></span>
                    {c.tag}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm m-0">{c.note}</p>
              </div>
            </article>
          ))}
          <div className="bg-muted p-6 flex flex-col gap-3 min-h-[320px] justify-center items-center text-center">
            <div className="font-en font-semibold text-[56px] leading-none tracking-tighter text-primary">+</div>
            <div>
              <div className="text-lg font-bold m-0 leading-[1.4]">あなたの業界も。</div>
              <p className="text-muted-foreground text-sm">
                業種・課題に応じてご提案。
                <br />
                まずは無料相談から。
              </p>
              <Link href="/request-documents" className="group inline-flex items-center gap-1.5 font-medium text-sm text-primary">
                <span>相談する</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
