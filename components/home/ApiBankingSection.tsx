'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ArrowForward } from '@mui/icons-material';
import bg from '@/public/assets/home/apiBanking.jpg'

export default function ApiBankingSection() {
  return (
    <section className="relative py-24 px-6 md:px-16">
      <Image 
        src={bg} 
        alt="API Banking background" 
        fill sizes="100vw" 
        className="object-cover object-top" 
        priority
      />
     
        <div className="relative rounded-3xl overflow-hidden">
          
          <div className="relative z-10 grid md:grid-cols-2 gap-0">
            {/* Left: text */}
            <div className="p-10 md:p-16 flex flex-col justify-center">
              <span className="inline-block text-xs font-semibold text-[#E8192C] uppercase tracking-widest mb-4 bg-[#E8192C]/10 px-3 py-1 rounded-full w-fit">
                API Banking
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-black leading-tight mb-4">
                Seamless integration.
                <br />
                Endless possibilities.
              </h2>
              <p className="text-black mb-8 leading-relaxed">
                Embed banking directly into your product. Whether you&apos;re a fintech, an enterprise, or a marketplace — our API gives you full banking infrastructure without the licence overhead.
              </p>
              <Link
                href="/api-banking"
                className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c4121e] transition-colors w-fit group"
              >
                Explore API Banking
                <ArrowForward className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

           
          </div>
        </div>
   
    </section>
  );
}
