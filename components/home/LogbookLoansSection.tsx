'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowForward } from '@mui/icons-material';
import bg from '@/public/assets/home/logbook.jpg'

export default function LogbookLoansSection() {
  return (
    <section className="relative overflow-hidden">
      {/* Image drives the section height */}
      <Image
        src={bg}
        alt='Logbook Loans'
        sizes='100vw'
        className='w-full h-auto'
        priority
      />
      {/* Content overlaid on top */}
      <div className="absolute inset-0 flex items-center">
      <div className="w-full max-w-7xl mx-auto px-6 md:px-16">
        <div className="flex flex-col lg:flex-row items-center gap-16">

          {/* Content */}
          <div className="max-w-2xl text-left">
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#E8192C] mb-4">
              Logbook Loans
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0534] leading-tight mb-6">
              Your car, your
              <br />
              <span className="text-[#E8192C]">financial lifeline.</span>
            </h2>
            <p className="lg:text-black md:text-black text-[#E8192C] text-lg leading-relaxed mb-8 max-w-lg">
              Unlock the value sitting in your vehicle without giving it up. Our logbook loans give you fast access to cash using your car as collateral — you keep driving, we keep it simple.
            </p>

            <Link
              href="/logbook-loans/#apply-form"
              className="group inline-flex items-center gap-2 bg-[#0A0534] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#E8192C] transition-all duration-300"
            >
              Apply now
              <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
            </Link>
          </div>


        </div>
      </div>
      </div>
    </section>
  );
}