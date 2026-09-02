import Link from 'next/link';
import Image from 'next/image';
import { ArrowForward, CheckCircleOutlined, DirectionsCar, FlashOn, SwapHoriz } from '@mui/icons-material';
import bg from '@/public/assets/loans/logbook.png';

const highlights = [
  {
    icon: DirectionsCar,
    title: 'Pesa Speedy Loan',
    description: 'A short-term loan for clients who need quick financing using their vehicle and existing third-party insurance cover. Keep driving while accessing funds.',
    accent: 'bg-[#0A0534]',
  },
  {
    icon: FlashOn,
    title: 'Wezesha Loan',
    description: 'A quick emergency loan where the client leaves the vehicle in our custody until the loan is fully repaid. Designed for urgent, time-sensitive financial needs.',
    accent: 'bg-[#0A0534]',
  },
  {
    icon: SwapHoriz,
    title: 'Loan Buyoff',
    description: 'Transfer and clear an existing logbook loan from another bank or financial institution. Benefit from better terms and a streamlined repayment plan.',
    accent: 'bg-[#0A0534]',
  },
];

const eligibility = [
  'Valid National ID',
  'Vehicle registered with logbook available',
  'Vehicle from year of manufacture 2004 and above',
  'Motor insurance cover in place',
  'Proof of income',
];

const documents = [
  'Original logbook (vehicle registration certificate)',
  'National ID or Passport',
  'KRA PIN Certificate',
  'Motor insurance certificate',
  'Latest 6 months Bank/M-Pesa statements',
];

const steps = [
  { number: '01', title: 'Submit Your Application', description: 'Complete our online application form and provide the required documents for assessment.' },
  { number: '02', title: 'Loan Offer and Agreement', description: 'Once approved, receive a clear offer outlining the financing amount, rate, repayment period and terms. Review and sign the agreement.' },
  { number: '03', title: 'Disbursement', description: 'After final verification, funds are disbursed directly to you.' },
];

// ── Types ─────

const APPLY_URL = 'https://choicebank.co.ke/m/loan/calculator?channel=CHOICE_BANK_WEBSITE';

export default function LogbookLoansPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero */}
      <div className="bg-[#0A0534]/90 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center pl-6 md:pl-16">
          {/* Left: text */}
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Logbook Loans</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Unlock cash from your vehicle.
            </h1>
            <p className="text-white/70 text-xl max-w-xl leading-relaxed mb-10">
              Access financing using your vehicle&apos;s logbook as security and keep driving while meeting your personal, business, or development needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <a
                href={APPLY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all group"
              >
                Apply for a Logbook Loan
                <ArrowForward className="group-hover:translate-x-1 transition-transform" />
              </a>
              <Link href="/sales" className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                Speak to a loan officer
              </Link>
            </div>
          </div>
          {/* Right: image flush to edge */}
          <div className="relative w-full h-[380px] md:h-[560px] rounded-l-3xl overflow-hidden">
            <Image src={bg} alt="Logbook Loans" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain object-center" priority />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
  
 
            <h2 className="text-4xl text-center font-bold text-[#0A0534] mb-10">More than just a loan.</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: 'Access Up to Ksh 6M',  },
              { stat: 'Approval Under 6 Hours',  },
              { stat: 'Flexible Repayment Plan',   },
              { stat: 'Affordable Rates',  },
            ].map(({ stat}) => (
              <div key={stat} className="bg-[#F7F8F8] rounded-2xl p-6 border border-gray-100 hover:border-[#E8192C]/30 hover:shadow-md transition-all duration-300">
                <p className="text-lg font-bold text-[#0A0534] mb-1">{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14 text-center mx-auto">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Explore our Logbook Loan products</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map(({  title, description }, i) => (
              <div key={title} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              
                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-[#0A0534] mb-3">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{description}</p>
                  <a
                    href={APPLY_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#E8192C] hover:gap-2 transition-all"
                  >
                    Apply now <ArrowForward fontSize="small" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Eligibility & Documents */}
      <div className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-[#F7F8F8] rounded-3xl p-10">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Eligibility</p>
            <h2 className="text-2xl font-bold text-[#0A0534] mb-6">Do you qualify?</h2>
            <ul className="space-y-4">
              {eligibility.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircleOutlined className="text-[#E8192C] shrink-0 mt-0.5" fontSize="small" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0A0534] rounded-3xl p-10">
            <h2 className="text-2xl font-bold text-white mb-6">Requirements</h2>
            <ul className="space-y-4">
              {documents.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircleOutlined className="text-[#E8192C] shrink-0 mt-0.5" fontSize="small" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-4xl font-bold text-[#0A0534] mb-4">Apply today. Funds today.</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              The entire process from application to disbursement is designed to take between 6 and 12 hours for straightforward cases with complete documents.
            </p>
            <a
              href={APPLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all group"
            >
              Apply Now
              <ArrowForward className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
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
    </div>
  );
}
