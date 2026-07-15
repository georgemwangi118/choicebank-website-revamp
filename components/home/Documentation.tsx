'use client';

import { ArrowForward } from '@mui/icons-material';

const steps = [
  {
    number: '01',
    title: 'Sign up as a partner',
    description: 'Create your developer account and get sandbox credentials in under 5 minutes. No paperwork, no waiting.',
  },
  {
    number: '02',
    title: 'Integrate the API',
    description: 'Use our REST API or language SDK (Node.js, Python, Java, PHP). Our documentation covers every endpoint with copy-paste examples.',
  },
  {
    number: '03',
    title: 'Test in sandbox',
    description: 'Simulate real transactions disbursements, collections, account creation without moving a single shilling.',
  },
  {
    number: '04',
    title: 'Go live',
    description: 'Flip the switch. Our team reviews your integration and you go live with full production access and dedicated support.',
  },
];

export default function Documentation() {
  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Left */}
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">
              Developer experience
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-[#0A0534] leading-tight mb-6">
              From zero to live in a day.
            </h2>
            <p className="text-gray-500 text-lg leading-relaxed mb-8">
              We built our API for developers, not committees. Clean endpoints, predictable responses, and documentation written by engineers who use it daily.
            </p>
            <a
              href="https://choice-bank.gitbook.io/choice-bank"
              target='_blank'
              className="inline-flex items-center gap-2 border-2 border-[#0A0534] text-[#0A0534] px-6 py-3 rounded-full font-semibold hover:bg-[#0A0534] hover:text-white transition-all duration-300 group"
            >
              Read the docs
              <ArrowForward className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>

          {/* Right: steps */}
          <div className="flex flex-col gap-0">
            {steps.map(({ number, title, description }, i) => (
              <div key={number} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#0A0534] flex items-center justify-center shrink-0 shadow-md">
                    <span className="text-sm font-bold text-white">{number}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-[#0A0534] to-[#E8192C]/30 my-1 min-h-[40px]" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold text-[#0A0534] mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
