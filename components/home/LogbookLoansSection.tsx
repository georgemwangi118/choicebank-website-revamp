'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowForward } from '@mui/icons-material';
import image from '@/public/assets/loans/man.png'

export default function LogbookLoansSection() {
  return (
    <section className="py-10 px-6 md:px-10 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div className="flex flex-col justify-center">
          <span className="inline-block text-lg font-semibold tracking-widest uppercase text-[#E8192C] bg-[#E8192C]/10 px-3 py-1 rounded-full w-fit mb-4">
            Logbook Loans & Asset Financing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0534] leading-tight mb-6">
            Let&apos;s Finance
            <br />
            <span className="text-[#E8192C]">Your Next Move.</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-7xl">
            From logbook loans to asset financing, we provide flexible and affordable financing solutions tailored to your needs. Whether you&apos;re looking to grow your business, invest in essential assets, or access funds using your vehicle, we&apos;re here to help you move forward with confidence.
          </p>
          <Link
            href="/logbook-loans"
            className="group inline-flex items-center gap-2 bg-[#0A0534] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#E8192C] transition-all duration-300 w-fit"
          >
            Apply now
            <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
          </Link>
        </div>

        {/* Right: image */}
        <div className="relative w-full h-[400px] md:h-[500px] rounded-3xl overflow-hidden">
          <Image
            src={image}
            alt="Logbook Loans"
            fill
            sizes="(max-width: 700px) 100vw, 50vw"
            className="object-contain"
            priority
          />
        </div>
      </div>
    </section>
  );
}
