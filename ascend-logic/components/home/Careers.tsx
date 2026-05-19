const careers = [
  { team: 'ENGINEERING', role: 'AIエンジニア', loc: 'Tokyo / Remote', type: 'Full-time' },
  {
    team: 'ENGINEERING',
    role: 'ソフトウェアエンジニア (Backend)',
    loc: 'Tokyo / Remote',
    type: 'Full-time',
  },
  { team: 'PRODUCT', role: 'プロダクトマネージャー', loc: 'Tokyo', type: 'Full-time' },
  { team: 'CONSULTING', role: 'AIコンサルタント', loc: 'Tokyo / Hybrid', type: 'Full-time' },
  { team: 'DESIGN', role: 'プロダクトデザイナー', loc: 'Tokyo / Remote', type: 'Full-time' },
]

export default function Careers() {
  return (
    <section id="careers" className="relative py-[120px] max-[720px]:py-[72px]">
      <div className="relative w-full max-w-[1280px] mx-auto px-8 max-[720px]:px-5">
        <div className="grid grid-cols-[1.1fr_1fr] gap-[60px] mb-12 max-[880px]:grid-cols-1 max-[880px]:gap-6">
          <div>
            <span className="font-mono text-xs font-medium tracking-eyebrow uppercase text-primary inline-flex items-center gap-2 before:content-[''] before:w-[18px] before:h-px before:bg-current before:inline-block">
              CAREERS &nbsp;/&nbsp; 08
            </span>
            <h2 className="font-bold text-section leading-[1.25] tracking-tight m-0 mt-4">
              一緒にAIで、
              <br />
              社会の可能性を解き放つ。
            </h2>
            <p className="m-0 text-lede leading-[1.85] text-foreground-soft max-w-[44ch] mt-4">
              創業期のAscend Logicでは、AIの民主化を共に推進する仲間を募集しています。
            </p>
          </div>
          <div></div>
        </div>

        <ul className="list-none p-0 m-0 border-t border-border">
          {careers.map((c) => (
            <li
              key={c.role}
              className="grid grid-cols-[140px_1fr_200px_100px_24px] gap-6 items-center py-[22px] border-b border-border cursor-pointer transition-all duration-200 hover:bg-muted hover:px-3 group max-[880px]:grid-cols-1 max-[880px]:gap-1.5 max-[880px]:py-4"
            >
              <span className="font-mono text-xs tracking-uppercase-wide text-primary">{c.team}</span>
              <span className="text-lg font-semibold">{c.role}</span>
              <span className="text-muted-foreground text-sm">{c.loc}</span>
              <span className="inline-flex items-center gap-1.5 font-mono text-xs tracking-wider uppercase px-2.5 py-[5px] border border-border-strong rounded-full text-foreground-soft bg-background">
                {c.type}
              </span>
              <span className="text-muted-foreground transition-all duration-200 group-hover:text-primary group-hover:translate-x-1">→</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
