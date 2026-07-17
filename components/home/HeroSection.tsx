'use client';

import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';
import Image from 'next/image';
import bg from '@/public/assets/home/bg.png';

export default function HeroSection() {
  return (
    <section className="bg-[#F0F4F8] overflow-hidden">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center pl-6 md:pl-16 py-20">
        {/* Left: text */}
        <div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight text-[#0A0534] mb-6">
            Banking built
            <br />
            <span className="text-[#E8192C]">for your growth.</span>
          </h1>
          <p className="text-lg md:text-xl text-[#0A0534] max-w-xl mb-10 leading-relaxed">
            From everyday banking to flexible financing and seamless payments, we provide the solutions you need to grow.
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
              className="inline-flex items-center gap-2 border border-[#0A0534] text-[#0A0534] px-8 py-4 rounded-full font-semibold hover:bg-[#0A0534]/10 transition-all duration-300"
            >
              Talk to Us
            </Link>
          </div>
        </div>
        {/* Right: image flush to edge */}
        <div className="relative w-full h-[380px] md:h-[560px] rounded-l-3xl overflow-hidden">
          <Image
            src={bg}
            alt="Choice Bank"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-contain object-center"
            priority
          />
        </div>
      </div>
    </section>
  );
}
