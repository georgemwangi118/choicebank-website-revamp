import Link from 'next/link';
import { ArrowForward } from '@mui/icons-material';

export default function CTA() {
  return (
    <section className="bg-[#F7F8F8] py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="bg-gradient-to-br from-[#0A0534] to-[#1a0f4e] rounded-3xl px-10 md:px-20 py-16 text-center">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">
            Get started today
          </p>
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4 leading-tight">
            Ready to bank smarter?
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
            Join thousands of businesses and individuals who trust ChoiceBank for payments, savings, and growth. It takes less than 5 minutes to get started.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              href="/personal-banking"
              className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all duration-300 group"
            >
              Open a free account
              <ArrowForward className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all duration-300"
            >
              Talk to sales
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
