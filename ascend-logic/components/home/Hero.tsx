"use client";

import { useEffect, useState, useCallback } from 'react';

interface Slide {
  tag: string;
  title: string;
  subtitle: string;
}

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const slides: Slide[] = [
    {
      tag: 'AI Solutions',
      title: 'AI時代の\nビジネス変革',
      subtitle: '最先端のAIテクノロジーで、あなたのビジネスを次のレベルへ',
    },
    {
      tag: 'Case Study',
      title: 'AIで業務効率を\n飛躍的に向上',
      subtitle: '議事録作成・ナレッジ検索・データ分析をAIが自動化',
    },
    {
      tag: 'About Us',
      title: 'テクノロジーで\n社会に価値を届ける',
      subtitle: 'Ascend Logicは、AIの力で企業の課題解決に取り組みます',
    },
  ];

  const goToSlide = useCallback((index: number) => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setTimeout(() => {
      setActiveSlide(index);
      setTimeout(() => {
        setIsTransitioning(false);
      }, 50);
    }, 400);
  }, [isTransitioning]);

  // Auto-rotate
  useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(() => {
      goToSlide((activeSlide + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [isPaused, activeSlide, slides.length, goToSlide]);

  const current = slides[activeSlide];

  return (
    <section className="relative min-h-[420px] md:min-h-[580px] flex items-center justify-center overflow-hidden">
      {/* 背景 */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e] via-[#16213e] to-[#0f3460]" />

      {/* テキストコンテンツ（中央配置） */}
      <div className="relative z-10 text-center px-6 w-full max-w-3xl mx-auto">
        <span
          className={`inline-block text-[11px] bg-white/15 text-white/80 px-4 py-1.5 rounded tracking-[0.2em] mb-6 font-medium uppercase font-serif-display transition-all duration-400 ${
            isTransitioning ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
          }`}
        >
          {current.tag}
        </span>

        <h1
          className={`hero-title text-4xl md:text-6xl lg:text-7xl text-white whitespace-pre-line transition-all duration-400 ${
            isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'
          }`}
        >
          {current.title}
        </h1>

        <p
          className={`text-sm md:text-base text-white/50 mt-5 md:mt-8 max-w-xl mx-auto tracking-wide transition-all duration-400 delay-75 ${
            isTransitioning ? 'opacity-0 translate-y-3' : 'opacity-100 translate-y-0'
          }`}
        >
          {current.subtitle}
        </p>
      </div>

      {/* ドットインジケーター（下部中央） */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex items-center gap-4">
        <button
          onClick={() => setIsPaused(!isPaused)}
          className="text-white/50 hover:text-white text-sm cursor-pointer transition-colors"
          aria-label={isPaused ? '再生' : '一時停止'}
        >
          {isPaused ? '▶' : '❚❚'}
        </button>
        {slides.map((_, i) => (
          <span
            key={i}
            className={`hero-dot ${i === activeSlide ? 'active' : ''}`}
            onClick={() => goToSlide(i)}
          />
        ))}
      </div>
    </section>
  );
}
