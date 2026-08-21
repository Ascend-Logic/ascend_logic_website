import { ArrowUpRight } from 'lucide-react'

const features = [
  {
    ic: '01',
    t: '高単価・FDE / AI案件',
    d: 'FDE（Forward Deployed Engineer）やAIエージェント開発など、市場に出回りにくい高単価案件を中心にご紹介。',
  },
  {
    ic: '02',
    t: 'エンジニアが専任で伴走',
    d: '元メガベンチャーエンジニアが担当。技術スタックと志向を理解した上で案件をマッチングします。',
  },
  {
    ic: '03',
    t: '単価交渉まで代行',
    d: '言い出しにくい単価の話も専任担当が代行。市場相場を踏まえた適正な報酬水準を実現します。',
  },
  {
    ic: '04',
    t: '働き方に合わせた案件',
    d: 'フルリモート、週3日稼働など、ライフスタイルに合わせて選べる案件も多数掲載しています。',
  },
]

const chips = ['高単価', 'FDE', 'AIエージェント開発', 'フルリモート', '週3日〜']

export default function Freelance({ index = 4 }: { index?: number }) {
  const no = String(index).padStart(2, '0')

  return (
    <section id="freelance" className="relative py-[120px] max-[720px]:py-[72px] bg-surface border-t border-border">
      <div className="relative w-full max-w-[1280px] mx-auto px-8 max-[720px]:px-5">
        <div className="grid grid-cols-[1.3fr_1fr] gap-[60px] items-end mb-14 max-[880px]:grid-cols-1 max-[880px]:gap-5">
          <div>
            <span className="font-mono text-xs font-medium tracking-widest uppercase text-primary inline-flex items-center gap-2 before:content-[''] before:w-[18px] before:h-px before:bg-current before:inline-block">
              SERVICE &nbsp;/&nbsp; {no}
            </span>
            <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl leading-[1.25] tracking-tight m-0 mt-4">
              <span className="font-en [font-feature-settings:'ss01'_1,'cv11'_1] text-sm tracking-widest text-primary uppercase font-semibold mb-[18px] inline-block">
                Ascend Freelance<span className="font-jp normal-case tracking-normal text-muted-foreground">（アセンドフリーランス）</span>
              </span>
              <br />
              フリーランスエンジニアと、
              <br />
              高単価・FDE・AI案件をつなぐ。
            </h2>
          </div>
          <p className="m-0 text-lg font-medium leading-[1.85] text-foreground-soft max-w-[44ch]">
            エンジニア向けのフリーランスエージェントサービス。 案件探しから単価交渉まで、技術のわかる担当者が専任で伴走します。
          </p>
        </div>

        <div className="grid grid-cols-4 border-t border-border max-[880px]:grid-cols-1">
          {features.map((f, i) => (
            <div
              key={f.ic}
              className={`flex gap-4 items-start py-8 px-7 border-b border-l border-border max-[880px]:px-0 max-[880px]:py-6 max-[880px]:border-l-0 max-[880px]:last:border-b-0 ${
                i === 0 ? 'border-l-0 pl-0' : ''
              } ${i === features.length - 1 ? 'pr-0' : ''}`}
            >
              <span className="font-mono tracking-widest text-xs text-primary pt-1 flex-shrink-0">{f.ic}</span>
              <div>
                <div className="font-semibold text-base mb-1.5">{f.t}</div>
                <div className="text-sm text-muted-foreground leading-[1.7]">{f.d}</div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-14 pt-8 flex justify-between items-center gap-8 flex-wrap">
          <div className="flex gap-2 flex-wrap">
            {chips.map((chip) => (
              <span
                key={chip}
                className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase whitespace-nowrap px-2.5 py-[5px] border border-border-strong rounded-full text-foreground-soft bg-background"
              >
                {chip}
              </span>
            ))}
          </div>
          <div>
            <a
              href="https://ascend-freelance.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 px-5 py-3 rounded-full font-semibold text-sm tracking-wide border border-transparent whitespace-nowrap bg-foreground text-background transition-all duration-200 hover:-translate-y-px"
            >
              <span>サービスサイトを見る</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-[3px] group-hover:-translate-y-[3px]" />
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
