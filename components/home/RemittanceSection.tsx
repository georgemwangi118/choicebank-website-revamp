
import Image from 'next/image';
import Link from 'next/link';
import globe from '@/public/assets/home/globe.png';
import { ArrowForward } from '@mui/icons-material';

export default function RemittanceSection() {
  return (
    <section className="py-24 px-6 md:px-16 bg-[#0A0534]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
        {/* Left: text */}
        <div className="flex flex-col justify-center">
          <span className="inline-block text-lg font-semibold tracking-widest uppercase text-[#E8192C] bg-white px-3 py-1 rounded-full w-fit mb-4">
            Remittance
          </span>
          <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
            Make Global Payments,
            <br />
            <span className="text-[#E8192C]">instantly.</span>
          </h2>
          <p className="text-white/70 text-lg leading-relaxed mb-8 max-w-lg">
            Whether you&apos;re paying international suppliers or sending money to family abroad, our remittance service gets your funds where they need to go, quickly and affordably.
          </p>
       
          <Link
            href="/remittance"
            className="group inline-flex items-center gap-2 border border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-[#E8192C] hover:text-white transition-all duration-300 w-fit"
          >
            Learn more about Remittance
            <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
          </Link>
        </div>

        {/* Right: image */}
        <div className="flex items-center justify-center">
          <Image
            src={globe}
            alt="Global Remittance"
            width={600}
            height={600}
            className="w-full max-w-xl object-contain"
          />
        </div>
      </div>
    </section>
  );
}
