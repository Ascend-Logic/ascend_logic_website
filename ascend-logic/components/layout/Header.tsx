'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import { Logo } from '@/components/ui/Logo'

const navItems = [
  { jp: 'サービス', en: 'Services', href: '/services' },
  { jp: 'プロダクト', en: 'Product', href: '/products/ascendai' },
  { jp: '導入事例', en: 'Cases', href: '/case-studies' },
  { jp: '会社情報', en: 'Company', href: '/about' },
  { jp: 'ニュース', en: 'News', href: '/news' },
]

const btnBase = 'inline-flex items-center gap-2.5 px-4 py-[9px] rounded-full font-semibold text-sm tracking-wide border border-transparent whitespace-nowrap transition-all duration-200'
const btnPrimary = `${btnBase} bg-primary text-primary-foreground hover:bg-primary-deep hover:-translate-y-px`
const btnGhost = `${btnBase} bg-transparent text-foreground border-border-strong hover:border-foreground`

export default function Header() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setOpen(false)

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 backdrop-blur-[14px] backdrop-saturate-[140%] [-webkit-backdrop-filter:blur(14px)_saturate(140%)] bg-[color-mix(in_oklab,var(--background)_78%,transparent)] border-b transition-all duration-[250ms] ${
        scrolled ? 'border-border' : 'border-transparent'
      }`}
    >
      <div className="w-full max-w-[1280px] mx-auto px-8 max-[720px]:px-5 flex items-center justify-between h-[68px]">
        <Link href="/" className="inline-flex items-center gap-2.5 font-en font-bold text-base tracking-tight text-foreground" onClick={close} aria-label="Ascend Logic">
          <Logo variant="lockup" theme="light" height={32} priority />
        </Link>

        <nav className="flex items-center gap-1 max-[980px]:hidden">
          {navItems.map((it) => (
            <Link
              key={it.href}
              href={it.href}
              className="relative px-3.5 py-2 text-sm font-medium text-foreground-soft rounded-full transition-colors duration-200 hover:text-foreground hover:bg-text-muted-foreground"
            >
              {it.jp}
            </Link>
          ))}
        </nav>

        <div className="flex gap-2 items-center">
          <Link href="/request-documents" className={`${btnGhost} max-[980px]:hidden`}>
            <span>お問い合わせ</span>
          </Link>
          <Link href="/products/ascendai" className={`${btnPrimary} group max-[560px]:hidden`}>
            <span>Ascend Agent</span>
            <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
          </Link>
          <button
            type="button"
            className="hidden size-9 rounded-full border border-border-strong bg-transparent flex-col items-center justify-center gap-1 text-foreground max-[980px]:flex"
            onClick={() => setOpen((v) => !v)}
            aria-label="メニュー"
            aria-expanded={open}
          >
            <span className="block w-3.5 h-px bg-current"></span>
            <span className="block w-3.5 h-px bg-current"></span>
            <span className="block w-3.5 h-px bg-current"></span>
          </button>
        </div>
      </div>

      {open && (
        <div className="w-full max-w-[1280px] mx-auto px-8 max-[720px]:px-5">
          <div className="pt-4 pb-6 border-t border-border">
            {navItems.map((it) => (
              <Link key={it.href} href={it.href} className="py-3.5 px-1 text-base font-medium text-foreground border-b border-border flex items-center justify-between" onClick={close}>
                <span>{it.jp}</span>
                <span className="font-mono tracking-wide text-sm text-muted-foreground">{it.en}</span>
              </Link>
            ))}
            <div className="mt-5 flex flex-col gap-2">
              <Link href="/request-documents" className={btnGhost} onClick={close}>
                <span>お問い合わせ</span>
              </Link>
              <Link href="/products/ascendai" className={`${btnPrimary} group`} onClick={close}>
                <span>Ascend Agent</span>
                <span className="inline-block transition-transform duration-200 group-hover:translate-x-[3px]">→</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
