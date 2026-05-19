'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Logo } from '@/components/ui/Logo'

export default function Footer() {
  const pathname = usePathname()
  const isAscendAiProduct = pathname?.startsWith('/products/ascendai') ?? false
  const privacyPolicyHref = isAscendAiProduct ? '/ascendai-privacy' : '/privacy-policy'

  return (
    <footer className="al-footer">
      <div className="al-container">
        <div className="al-footer__top">
          <div className="al-footer__brand">
            <Link href="/" className="logo" aria-label="Ascend Logic">
              <Logo variant="lockup" theme="light" height={32} />
            </Link>
            <p className="muted tiny" style={{ marginTop: 16, maxWidth: '32ch' }}>
              AIの力で、すべての企業と個人の可能性を解き放つ。
            </p>
          </div>
          <div className="al-footer__nav">
            <div>
              <div className="mono tiny muted al-footer__h">SERVICES</div>
              <ul>
                <li>
                  <Link href="/services">オーダーメイドAI開発</Link>
                </li>
                <li>
                  <Link href="/services">プロセス自動化</Link>
                </li>
                <li>
                  <Link href="/services">データ分析・予測</Link>
                </li>
                <li>
                  <Link href="/services">AI導入コンサルティング</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="mono tiny muted al-footer__h">PRODUCT</div>
              <ul>
                <li>
                  <Link href="/products/ascendai">Ascend Agent</Link>
                </li>
                <li>
                  <Link href="/products/ascendai">Features</Link>
                </li>
                <li>
                  <Link href="/products/ascendai">Security</Link>
                </li>
                <li>
                  <Link href="/request-documents">デモ依頼</Link>
                </li>
              </ul>
            </div>
            <div>
              <div className="mono tiny muted al-footer__h">COMPANY</div>
              <ul>
                <li>
                  <Link href="/about">会社情報</Link>
                </li>
                <li>
                  <Link href="/news">ニュース</Link>
                </li>
                <li>
                  <Link href="/case-studies">導入事例</Link>
                </li>
                <li>
                  <Link href="/request-documents">お問い合わせ</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="al-footer__bottom">
          <div className="al-footer__mark en" aria-hidden="true">
            ASCEND LOGIC
          </div>
          {isAscendAiProduct && (
            <div style={{ paddingTop: 8, paddingBottom: 8, borderTop: '1px solid var(--border)' }}>
              <div className="mono tiny muted" style={{ marginBottom: 8 }}>
                USING AI SERVICES
              </div>
              <p className="tiny muted" style={{ margin: 0, lineHeight: 1.7 }}>
                本サービスは以下のAIサービスを利用しています。
                <br />
                Google Vertex AI Gemini · Google Vertex AI Search
              </p>
            </div>
          )}
          <div className="al-footer__legal">
            <span className="mono tiny muted">© 2026 Ascend Logic, Inc. All rights reserved.</span>
            <span className="mono tiny" style={{ display: 'flex', gap: 16 }}>
              <Link href={privacyPolicyHref}>プライバシーポリシー</Link>
              <Link href="/terms">利用規約</Link>
            </span>
          </div>
        </div>
      </div>
    </footer>
  )
}
