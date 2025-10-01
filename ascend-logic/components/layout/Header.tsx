"use client";

import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm fixed w-full z-10">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold text-indigo-900">Ascend Logic</span>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="text-gray-700 hover:text-indigo-600">
              サービス
            </Link>
            <Link href="/case-studies" className="text-gray-700 hover:text-indigo-600">
              導入事例
            </Link>
            <Link href="/news" className="text-gray-700 hover:text-indigo-600">
              お知らせ
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-indigo-600">
              会社概要
            </Link>
            <Link href="/request-documents" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700">
              資料請求
            </Link>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden focus:outline-none"
            onClick={toggleMenu}
            aria-label="メニュー"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* モバイルナビゲーション */}
        {isMenuOpen && (
          <div className="md:hidden py-4">
            <nav className="flex flex-col space-y-4">
              <Link href="/services" className="text-gray-700 hover:text-indigo-600 py-2">
                サービス
              </Link>
              <Link href="/case-studies" className="text-gray-700 hover:text-indigo-600 py-2">
                導入事例
              </Link>
              <Link href="/news" className="text-gray-700 hover:text-indigo-600 py-2">
                お知らせ
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 py-2">
                会社概要
              </Link>
              <Link href="/request-documents" className="bg-indigo-600 text-white px-4 py-2 rounded-md hover:bg-indigo-700 inline-block">
                資料請求
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
