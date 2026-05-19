import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'

const monoTiny = 'font-mono tracking-wide text-sm'

function FooterColumn({ heading, items }: { heading: string; items: { href: string; label: string }[] }) {
  return (
    <div>
      <div className={`${monoTiny} text-muted-foreground mb-4`}>{heading}</div>
      <ul className="list-none p-0 m-0 flex flex-col gap-2">
        {items.map((it) => (
          <li key={it.label}>
            <Link href={it.href} className="text-sm text-foreground-soft hover:text-primary">
              {it.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default function Footer() {
  return (
    <footer className="pt-20 pb-8 border-t border-border bg-background">
      <div className="w-full max-w-[1280px] mx-auto px-8 max-[720px]:px-5">
        <div className="grid grid-cols-[1fr_2fr] gap-[60px] pb-16 max-[880px]:grid-cols-1">
          <div>
            <Link href="/" className="inline-flex items-center gap-2.5 font-en font-bold text-base tracking-tight text-foreground" aria-label="Ascend Logic">
              <Logo variant="lockup" theme="light" height={32} />
            </Link>
            <p className="text-muted-foreground text-sm mt-4 max-w-[32ch]">AIの力で、すべての企業と個人の可能性を解き放つ。</p>
          </div>
          <div className="grid grid-cols-3 gap-8 max-[880px]:grid-cols-2">
            <FooterColumn
              heading="SERVICES"
              items={[
                { href: '/services', label: 'オーダーメイドAI開発' },
                { href: '/services', label: 'プロセス自動化' },
                { href: '/services', label: 'データ分析・予測' },
                { href: '/services', label: 'AI導入コンサルティング' },
              ]}
            />
            <FooterColumn
              heading="PRODUCT"
              items={[
                { href: '/products/ascendai', label: 'Ascend Agent' },
                { href: '/products/ascendai', label: 'Features' },
                { href: '/products/ascendai', label: 'Security' },
                { href: '/request-documents', label: 'デモ依頼' },
              ]}
            />
            <FooterColumn
              heading="COMPANY"
              items={[
                { href: '/about', label: '会社情報' },
                { href: '/news', label: 'ニュース' },
                { href: '/case-studies', label: '導入事例' },
                { href: '/request-documents', label: 'お問い合わせ' },
              ]}
            />
          </div>
        </div>
      </div>
    </footer>
  )
}
