'use client';

import Image from 'next/image';
import bg from '@/public/assets/home/remittance.jpg';
import playstore from '@/public/assets/footer/playstore.png';
import appstore from '@/public/assets/footer/appstore.png'


export default function RemittanceSection() {
  return (
    <section className="relative py-24 overflow-hidden">
      <Image
        src={bg}
        alt='Background Image'
        fill
        sizes='100vw'
        className='object-cover object-top'
        priority
      />
      <div className="absolute inset-0" />
      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-16">
        <div className="max-w-2xl text-left">
          <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#E8192C] mb-4">
            Remittance
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Make Global Payments,
            <br />
            <span className="text-[#E8192C]">instantly.</span>
          </h2>
          <p className="text-white text-lg leading-relaxed mb-8 max-w-lg">
            Whether you&apos;re paying international suppliers, our remittance service makes cross-border transfers fast, affordable, and stress-free every single time.
          </p>


          <div className="flex flex-wrap gap-4">
            <a
              href="https://apps.apple.com/us/app/choice-bank/id6504041400?platform=ipad"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={appstore} alt="Download on the App Store" className="h-15 w-auto" />
            </a>
            <a
              href="https://play.google.com/store/apps/details?id=micro.finance.bank.choice.kenya&hl=en"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image src={playstore} alt="Get it on Google Play" className="h-15 w-auto" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
