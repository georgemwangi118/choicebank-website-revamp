'use client';

import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import Image from 'next/image';
import bg from '@/public/assets/home/bg1.jpeg';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen overflow-hidden flex flex-col justify-center">
      {/* Background image */}
      <Image
        src={bg}
        alt="Choice Bank"
        fill
        sizes="100vw"
        className="object-cover object-center"
        priority
      />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16 w-full py-20">
        <div className="max-w-2xl">
          
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#0A0534] mb-6">
            Banking built
            <br />
            <span className="text-[#E8192C]">for your growth.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#0A0534] max-w-xl mb-10 leading-relaxed">
            From everyday banking to flexible financing and seamless payments, we provide the solutions you need to grow 
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/loans"
              className="group inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all duration-300"
            >
              Explore Our Products
              <ArrowForward className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-[#0A0534] text-[#0A0534] px-8 py-4 rounded-full font-semibold hover:border-white hover:bg-white/10 transition-all duration-300"
            >
              Talk to Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
