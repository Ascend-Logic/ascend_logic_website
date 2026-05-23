import { Noto_Sans_JP, Manrope, JetBrains_Mono } from 'next/font/google'
import './globals.css'
import type { ReactNode } from 'react'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { CodeInspector } from '@/components/dev/CodeInspector'
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
  title: {
    template: '%s | Ascend Logic',
    default: 'Ascend Logic — AIの力で、すべての企業と個人の可能性を解き放つ。',
  },
  description: 'Ascend Logic - 最先端のAIソリューションで企業の業務効率化・自動化を実現します',
}

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ja" className={`${notoSansJP.variable} ${manrope.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* LINE Seed JP は next/font/google の型定義に未登録のため Google Fonts CDN から直接ロード */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=LINE+Seed+JP:wght@400;500;700;900&display=swap" rel="stylesheet" />
      </head>
      <body className="antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </div>
        <CodeInspector />
      </body>
    </html>
  )
}
