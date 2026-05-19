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
    <header className={`al-nav ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="al-container al-nav__inner">
        <Link href="/" className="logo" onClick={close} aria-label="Ascend Logic">
          <Logo variant="lockup" theme="light" height={32} priority />
        </Link>

        <nav className="al-nav__links">
          {navItems.map((it) => (
            <Link key={it.href} href={it.href} className="al-nav__link">
              {it.jp}
            </Link>
          ))}
        </nav>

        <div className="al-nav__cta">
          <Link href="/request-documents" className="btn btn-ghost">
            <span>お問い合わせ</span>
          </Link>
          <Link href="/products/ascendai" className="btn btn-primary">
            <span>Ascend Agent</span>
            <span className="arr">→</span>
          </Link>
          <button type="button" className="al-nav__mobile-btn" onClick={() => setOpen((v) => !v)} aria-label="メニュー" aria-expanded={open}>
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </div>

      {open && (
        <div className="al-container" style={{ display: 'block' }}>
          <div className="al-nav__mobile" style={{ display: 'block' }}>
            {navItems.map((it) => (
              <Link key={it.href} href={it.href} className="al-nav__mobile-link" onClick={close}>
                <span>{it.jp}</span>
                <span className="mono tiny muted">{it.en}</span>
              </Link>
            ))}
            <div className="al-nav__mobile-cta">
              <Link href="/request-documents" className="btn btn-ghost" onClick={close}>
                <span>お問い合わせ</span>
              </Link>
              <Link href="/products/ascendai" className="btn btn-primary" onClick={close}>
                <span>Ascend Agent</span>
                <span className="arr">→</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
