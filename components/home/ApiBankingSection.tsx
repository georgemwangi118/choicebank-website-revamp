'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowForward } from '@mui/icons-material';
import bg from '@/public/assets/loans/api.png';

export default function ApiBankingSection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div className="flex flex-col justify-center">
          <span className="inline-block text-xs font-semibold text-[#E8192C] uppercase tracking-widest mb-4 bg-[#E8192C]/10 px-3 py-1 rounded-full w-fit">
            API Banking
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0A0534] leading-tight mb-4">
            Seamless integration.
            <br />
            Endless possibilities.
          </h2>
          <p className="text-gray-500 mb-8 leading-relaxed">
            Embed banking directly into your product. Whether you&apos;re a fintech, an enterprise, or a marketplace, our API gives you full banking infrastructure without the licence overhead.
          </p>
          <Link
            href="/api-banking"
            className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c4121e] transition-colors w-fit group"
          >
            Explore API Banking
            <ArrowForward className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        {/* Right: image */}
        <div className="relative w-full h-72 md:h-[420px] rounded-3xl overflow-hidden">
          <Image
            src={bg}
            alt="API Banking"
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-center"
          />
        </div>
      </div>
    </section>
  );
}
