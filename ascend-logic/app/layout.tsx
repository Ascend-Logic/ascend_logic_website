import { Inter, Noto_Sans_JP } from 'next/font/google';
import { GeistSans } from 'geist/font/sans';
import './globals.css';
import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import { Metadata } from 'next';

// Geist Sans - モダンでクリーンなサンセリフフォント（Vercel製）
// 英数字に使用
const geistSans = GeistSans;

// Noto Sans JP - 日本語用の洗練されたフォント
const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  weight: ['400', '500', '700', '900'],
  display: 'swap',
  variable: '--font-noto-sans-jp',
});

export const metadata: Metadata = {
  title: {
    template: '%s | Ascend Logic',
    default: 'Ascend Logic - AIによる業務革新',
  },
  description: 'Ascend Logic - 最先端のAIソリューションで企業の業務効率化・自動化を実現します',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={`${geistSans.variable} ${notoSansJP.variable}`}>
      <body className="font-sans antialiased">
        <div className="flex flex-col min-h-screen">
          <Header />
          <main className="flex-grow pt-16">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
