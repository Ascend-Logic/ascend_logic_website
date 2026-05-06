"use client";

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Footer() {
  const pathname = usePathname();
  const isAscendAiProduct = pathname?.startsWith('/products/ascendai') ?? false;
  const privacyPolicyHref = isAscendAiProduct
    ? '/ascendai-privacy'
    : '/privacy-policy';

  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-serif-display text-xl font-bold mb-4">Ascend Logic</h3>
            <p className="text-gray-300">
              最先端のAIソリューションを提供し、企業のデジタルトランスフォーメーションを加速します。
            </p>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">サイトマップ</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-300 hover:text-white">
                  ホーム
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-300 hover:text-white">
                  サービス
                </Link>
              </li>
              <li>
                <Link href="/case-studies" className="text-gray-300 hover:text-white">
                  導入事例
                </Link>
              </li>
              <li>
                <Link href="/news" className="text-gray-300 hover:text-white">
                  お知らせ
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-300 hover:text-white">
                  会社概要
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">お問い合わせ</h4>
            <ul className="space-y-2">
              {/* <li>
                <Link href="/contact" className="text-gray-300 hover:text-white">
                  お問い合わせフォーム
                </Link>
              </li> */}
              <li>
                <Link href="/request-documents" className="text-gray-300 hover:text-white">
                  お問い合わせ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-bold text-lg mb-4">所在地</h4>
            <address className="text-gray-300 not-italic">
              〒198-0031<br />
              東京都青梅市師岡町1-125-14<br />
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8">
          {isAscendAiProduct && (
            <div className="mb-6 pb-6 border-b border-gray-800">
              <h4 className="text-sm font-bold text-gray-200 mb-2">使用AIサービス</h4>
              <p className="text-gray-400 text-xs leading-relaxed mb-2">
                本サービスは以下のAIサービスを利用しています。
              </p>
              <ul className="text-gray-400 text-xs space-y-1 list-disc list-inside marker:text-gray-500">
                <li>Google Vertex AI Gemini</li>
                <li>Google Vertex AI Search</li>
              </ul>
            </div>
          )}
          <div className="flex flex-col md:flex-row justify-between">
            <p className="text-gray-400">© 2025 Ascend Logic Inc. All rights reserved.</p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link href={privacyPolicyHref} className="text-gray-400 hover:text-white">
                プライバシーポリシー
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
