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
            Logbook Loans & Assets Financing
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0534] leading-tight mb-6">
            Let Your Car Unlock
            <br />
            <span className="text-[#E8192C]">Your Next Financial Move.</span>
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-lg">
            Unlock the value of your vehicle with our fast, flexible and affordable logbook financing.
          </p>
          <Link
            href="/logbook-loans/#apply-form"
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
