'use client';

import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import Image from 'next/image';
import bg from '@/public/assets/home/bg.jpg';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* Background image */}
      <Image
        src={bg}
        alt="Hero background"
        fill
        sizes="100vw"
        className="object-cover object-top"
        priority
      />

      {/* Light color overlay on top of background */}
      <div className="absolute inset-0 bg-[#0A0534]/45" />

      {/* Subtle gradient orbs */}
      <div className="absolute top-0 left-0 w-[600px] h-[600px] bg-red-600/10 rounded-full blur-[120px] -translate-x-1/2 -translate-y-1/2" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px] translate-x-1/3 translate-y-1/3" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 pt-32 pb-20 w-full">
        {/* LEFT — text content */}
        <div className="text-left max-w-2xl">
          <h1 className="text-5xl md:text-7xl lg:text-[88px] font-bold leading-[1.05] text-white mb-6">
            Banking that
            <br />
            <span className="text-[#E8192C]">works for you.</span>
          </h1>

          <p className="text-lg md:text-xl text-white max-w-xl mb-10 leading-relaxed">
            Built for SMEs, individuals, and innovators who demand more from
            their bank — faster payments, smarter savings, and seamless API
            access.
          </p>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/personal-banking"
              className="group inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all duration-300"
            >
              Personal Banking
              <ArrowForward className="group-hover:translate-x-1 transition-transform text-lg" />
            </Link>
            <Link
              href="/api-banking"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            >
              Explore API Banking
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}