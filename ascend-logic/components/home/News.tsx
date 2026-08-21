import { ArrowRight, ArrowUpRight } from 'lucide-react'
import Link from 'next/link'
import { newsItems } from '@/lib/news'

export default function News({ index = 6 }: { index?: number }) {
  const no = String(index).padStart(2, '0')
  return (
    <section id="news" className="relative py-[80px] max-[720px]:py-[48px]">
      <div className="relative w-full max-w-[1280px] mx-auto px-8 max-[720px]:px-5">
        <div className="grid grid-cols-[1.2fr_1fr] gap-[60px] items-end mb-16 max-[880px]:grid-cols-1 max-[880px]:gap-6">
          <div>
            <span className="font-mono text-xs font-medium tracking-widest uppercase text-primary inline-flex items-center gap-2 before:content-[''] before:w-[18px] before:h-px before:bg-current before:inline-block">
              NEWS &nbsp;/&nbsp; {no}
            </span>
            <h2 className="font-bold text-2xl md:text-4xl lg:text-5xl leading-[1.25] tracking-tight m-0 mt-4">ニュース / ブログ</h2>
          </div>
          <Link href="/news" className="group inline-flex items-center gap-1.5 font-medium text-sm text-primary justify-self-end max-[880px]:justify-self-start">
            <span>すべて見る</span>
            <ArrowRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-[3px]" />
          </Link>
        </div>
        <ul className="list-none p-0 m-0 border-t border-border">
          {newsItems.map((n) => {
            const isExternal = n.url.startsWith('http')
            const rowClass =
              'grid grid-cols-[120px_auto_1fr_24px] gap-6 items-center py-5 border-b border-border cursor-pointer transition-all duration-200 hover:bg-muted hover:px-3 group max-[720px]:grid-cols-[100px_1fr_16px]'
            const Inner = (
              <>
                <span className="font-mono text-xs text-muted-foreground tracking-wider whitespace-nowrap">{n.date}</span>
                <span className="inline-flex items-center gap-1.5 font-mono text-[10px] tracking-wider uppercase whitespace-nowrap px-2.5 py-[5px] border border-border-strong rounded-full text-foreground-soft bg-background justify-self-start max-[720px]:hidden">
                  {n.category}
                </span>
                <span className="text-base text-foreground font-medium">{n.title}</span>
                <span className="text-muted-foreground transition-all duration-200 group-hover:text-primary group-hover:translate-x-1 inline-flex">
                  {isExternal ? <ArrowUpRight className="w-4 h-4" /> : <ArrowRight className="w-4 h-4" />}
                </span>
              </>
            )
            return (
              <li key={n.id} className="list-none">
                {isExternal ? (
                  <a href={n.url} target="_blank" rel="noopener noreferrer" className={rowClass}>
                    {Inner}
                  </a>
                ) : (
                  <Link href={n.url} className={rowClass}>
                    {Inner}
                  </Link>
                )}
              </li>
            )
          })}
        </ul>
      </div>
    </section>
  )
}
