'use client';

import Link from 'next/link';
import { ArrowForward, ArrowBack } from '@mui/icons-material';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import logbookImage from '@/public/assets/loans/bg1.png';
import assetFinanceImage from '@/public/assets/loans/bg.png';
import apiImage from '@/public/assets/home/api.png';
import container from '@/public/assets/home/container.jpg'

const slides = [
  {
    label: 'Logbook Loans',
    heading: 'Unlock cash\nfrom your vehicle.',
    subheading: 'Use your car as collateral and access up to Ksh 5M while you keep driving. TAT as fast as 6 hours.',
    cta: { text: 'Apply for a Logbook Loan', href: '/logbook-loans' },
    ctaSecondary: { text: 'Learn more', href: '/logbook-loans' },
    image: logbookImage,
  },
  {
    label: 'Remittance',
    heading: 'Pay suppliers\nin China directly.',
    subheading: 'CNY Express lets Kenyan importers send money in CNY/KES to Chinese suppliers. Fast, traceable, and professionally handled.',
    cta: { text: 'Start a CNY Transfer', href: '/remittance' },
    ctaSecondary: { text: 'Learn more', href: '/remittance' },
    image: container,
  },
  {
    label: 'Fixed Deposit',
    heading: 'Make your\nsavings work harder.',
    subheading: 'Lock in a guaranteed return over 3, 6, or 12 months. Minimum Ksh 100,000 and your FD can also secure a loan.',
    cta: { text: 'Open a Fixed Deposit', href: '/personal-banking' },
    ctaSecondary: { text: 'Learn more', href: '/personal-banking' },
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=1600&q=80&fit=crop',
  },
  {
    label: 'Asset Finance',
    heading: 'Own the asset\nyour business needs.',
    subheading: 'Finance vehicles and income-generating assets with up to Ksh 5M over 24 months. Competitive rates from 2.5% p.m.',
    cta: { text: 'Explore Asset Finance', href: '/asset-finance-loans' },
    ctaSecondary: { text: 'Learn more', href: '/asset-finance-loans' },
    image: assetFinanceImage,
  },
  {
    label: 'Banking as a Service',
    heading: 'The bank behind\nyour fintech.',
    subheading: 'Embed real accounts, payments, and collections into your product through Choice Bank\'s CBK-licensed BaaS infrastructure.',
    cta: { text: 'Explore BaaS', href: '/api-banking' },
    ctaSecondary: { text: 'Read the Docs', href: 'https://choice-bank.gitbook.io/choice-bank' },
    image: apiImage,
  },
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);
  const [animating, setAnimating] = useState(false);

  const goTo = useCallback((index: number) => {
    if (animating) return;
    setAnimating(true);
    setTimeout(() => {
      setCurrent(index);
      setAnimating(false);
    }, 300);
  }, [animating]);

  const next = useCallback(() => goTo((current + 1) % slides.length), [current, goTo]);
  const prev = useCallback(() => goTo((current - 1 + slides.length) % slides.length), [current, goTo]);

  useEffect(() => {
    const timer = setInterval(next, 6000);
    return () => clearInterval(timer);
  }, [next]);

  const slide = slides[current];

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image — transitions between slides */}
      <div className={`absolute inset-0 transition-opacity duration-500 ${animating ? 'opacity-0' : 'opacity-100'}`}>
        <Image
          src={slide.image}
          alt={slide.label}
          fill
          sizes="100vw"
          className="object-cover object-center"
          priority
        />
      </div>

      {/* Dark overlay */}
      <div className="absolute inset-0 bg-[#0A0534]/60" />

      {/* Gradient orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-32 w-full">
        <div className={`text-left max-w-2xl transition-all duration-500 ${animating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}>

          {/* Label pill */}
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-white bg-[#E8192C] px-4 py-1.5 rounded-full mb-6">
            {slide.label}
          </span>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-white mb-6 whitespace-pre-line">
            {slide.heading}
          </h1>

          <p className="text-lg md:text-xl text-gray-300 max-w-xl mb-10 leading-relaxed">
            {slide.subheading}
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href={slide.cta.href}
              className="group inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all duration-300"
            >
              {slide.cta.text}
              <ArrowForward className="group-hover:translate-x-1 transition-transform" />
            </Link>
            {slide.ctaSecondary.href.startsWith('http') ? (
              <a
                href={slide.ctaSecondary.href}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                {slide.ctaSecondary.text}
              </a>
            ) : (
              <Link
                href={slide.ctaSecondary.href}
                className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
              >
                {slide.ctaSecondary.text}
              </Link>
            )}
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="absolute bottom-10 left-0 right-0 z-10 px-6 md:px-16 max-w-7xl mx-auto flex items-center justify-between">
        {/* Dot indicators */}
        <div className="flex items-center gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => goTo(i)}
              className={`rounded-full transition-all duration-300 ${i === current ? 'w-8 h-2 bg-[#E8192C]' : 'w-2 h-2 bg-white/40 hover:bg-white/70'}`}
            />
          ))}
        </div>

        {/* Prev / Next arrows */}
        <div className="flex items-center gap-2">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
          >
            <ArrowBack fontSize="small" />
          </button>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-white/10 transition-all"
          >
            <ArrowForward fontSize="small" />
          </button>
        </div>
      </div>
    </section>
  );
}
