import { Noto_Sans_JP, Manrope, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import type { ReactNode } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { Metadata } from 'next'

// Noto Sans JP - 日本語フォールバック
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
})

// Manrope - 英文ディスプレイ
const manrope = Manrope({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
  variable: '--font-manrope',
})

// JetBrains Mono - モノスペース（タグ・メタ情報）
const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  weight: ['400', '500', '600'],
  display: 'swap',
  variable: '--font-jetbrains-mono',
})

export const metadata: Metadata = {
  metadataBase: new URL('https://ascendlogicai.com'),
  title: {
    template: '%s | Ascend Logic（アセンドロジック）',
    default: '株式会社Ascend Logic（アセンドロジック） — AIの力で、すべての企業と個人の可能性を解き放つ。',
  },
  description: '株式会社Ascend Logic（アセンドロジック）は、オーダーメイドAI開発・プロセス自動化・データ分析・AI導入コンサルティング、自社プロダクト Ascend Agent（アセンドエージェント）を提供するAIソリューション企業です。',
  keywords: ['アセンドロジック', '株式会社Ascend Logic', 'Ascend Logic', 'Ascend Logic Inc', 'アセンドエージェント', 'アセンド・エージェント', 'Ascend Agent', 'AIソリューション', 'AIアシスタント', 'AI議事録', 'AI開発企業', 'AIコンサルティング'],
  openGraph: {
    siteName: 'Ascend Logic（アセンドロジック）',
    locale: 'ja_JP',
    type: 'website',
  },
}

// サイト全体に効く組織の構造化データ。
// alternateName でカタカナ表記「アセンドロジック」を正式な英語社名のエイリアスとして
// 検索エンジンに伝える。
const organizationJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': 'https://ascendlogicai.com/#organization',
  name: 'Ascend Logic',
  alternateName: ['アセンドロジック', '株式会社Ascend Logic', 'Ascend Logic, Inc.'],
  legalName: '株式会社Ascend Logic',
  url: 'https://ascendlogicai.com',
  logo: 'https://ascendlogicai.com/icon.svg',
  foundingDate: '2025-12',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '師岡町1-125-14',
    addressLocality: '青梅市',
    addressRegion: '東京都',
    postalCode: '198-0043',
    addressCountry: 'JP',
  },
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* LINE Seed JP は next/font/google の型定義に未登録のため Google Fonts CDN から直接ロード */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=LINE+Seed+JP:wght@400;500;700;900&display=swap" rel="stylesheet" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
      </head>
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  )
}
