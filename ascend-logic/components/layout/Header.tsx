"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`bg-white/97 backdrop-blur-md fixed w-full z-50 border-b border-gray-100 transition-shadow duration-300 ${
        isScrolled ? 'header-scrolled' : ''
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="flex items-center" onClick={closeMenu}>
            <span className="font-serif-display text-xl font-bold text-indigo-900 tracking-tight">Ascend Logic</span>
          </Link>

          {/* デスクトップナビゲーション */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/services" className="nav-link text-gray-700 hover:text-indigo-600 text-sm font-medium">
              サービス
            </Link>
            <Link href="/case-studies" className="nav-link text-gray-700 hover:text-indigo-600 text-sm font-medium">
              導入事例
            </Link>
            <Link href="/news" className="nav-link text-gray-700 hover:text-indigo-600 text-sm font-medium">
              お知らせ
            </Link>
            <Link href="/about" className="nav-link text-gray-700 hover:text-indigo-600 text-sm font-medium">
              会社概要
            </Link>
            <Link
              href="/request-documents"
              className="bg-indigo-600 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-indigo-700 transition-colors"
            >
              お問い合わせ
            </Link>
          </nav>

          {/* モバイルメニューボタン */}
          <button
            className="md:hidden w-9 h-9 rounded-full border border-gray-200 flex flex-col items-center justify-center gap-1 hover:bg-gray-50 transition-colors"
            onClick={toggleMenu}
            aria-label="メニュー"
          >
            {isMenuOpen ? (
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <>
                <span className="block w-3.5 h-px bg-gray-700"></span>
                <span className="block w-3.5 h-px bg-gray-700"></span>
                <span className="block w-3.5 h-px bg-gray-700"></span>
              </>
            )}
          </button>
        </div>

        {/* モバイルナビゲーション */}
        {isMenuOpen && (
          <div className="md:hidden py-4 mobile-menu-enter">
            <nav className="flex flex-col space-y-1">
              <Link href="/services" className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 py-3 px-4 rounded-lg transition-colors" onClick={closeMenu}>
                サービス
              </Link>
              <Link href="/case-studies" className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 py-3 px-4 rounded-lg transition-colors" onClick={closeMenu}>
                導入事例
              </Link>
              <Link href="/news" className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 py-3 px-4 rounded-lg transition-colors" onClick={closeMenu}>
                お知らせ
              </Link>
              <Link href="/about" className="text-gray-700 hover:text-indigo-600 hover:bg-gray-50 py-3 px-4 rounded-lg transition-colors" onClick={closeMenu}>
                会社概要
              </Link>
              <Link
                href="/request-documents"
                className="bg-indigo-600 text-white px-4 py-3 rounded-lg hover:bg-indigo-700 text-center transition-colors mt-2"
                onClick={closeMenu}
              >
                お問い合わせ
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
