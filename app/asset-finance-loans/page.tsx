import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowForward, CheckCircleOutlined, DirectionsCar, Gavel } from '@mui/icons-material';
import bg from '@/public/assets/loans/bg.png';

export const metadata: Metadata = {
  title: 'Asset Finance Loans | Choice Microfinance Bank',
  description: 'Finance vehicles and income-generating assets for your business. Competitive rates, fast decisions, and flexible repayment up to 24 months.',
};

const assetTypes = [
  {
    icon: DirectionsCar,
    title: 'Asset Finance Loan',
    description: 'Financing for customers purchasing a vehicle or asset from a yard, individual seller or company. Supports both fresh financing and hire purchase arrangements.',
    examples: ['Vehicles from YOM 2004 and above', 'Interest: from 1.5% p.m.', 'Up to Ksh 6M gross', 'Up to 24 months'],
  },
  {
    icon: DirectionsCar,
    title: 'MOTI 80% Asset Finance',
    description: 'A higher-limit asset finance option for qualifying customers and newer vehicles. Designed for stronger financial profiles that meet the stated eligibility criteria.',
    examples: ['Up to 80% of forced value', 'Interest: from 1.5% p.m.', 'YOM 2018 and above', 'up to 36 months'],
  },
  {
    icon: Gavel,
    title: 'Auction Refinancing',
    description: 'Finance for customers acquiring repossessed vehicles through organizational auctions. Helps qualifying buyers meet the purchase balance after paying the required deposit.',
    examples: ['50% deposit required', 'Loan: 50% of selling price', 'Up to 18 months', 'Interest: from 1.5% p.m.'],
  },
 
];

const requirements = [
  'Completed loan application form',
  'National ID / Passport (individual) or Certificate of Incorporation (business)',
  'KRA PIN Certificate',
  'Latest 6 months bank statements',
  'Proforma invoice or valuation for the asset',
  'Proof of income or audited accounts (for businesses)',
  'Collateral documents where applicable',
];

const steps = [
  { number: '01', title: 'Submit Your Application', description: 'Complete our online application form and provide the required documents for assessment' },
  { number: '02', title: 'Loan offer and Agreement', description: 'Once approved, receive a clear offer outlining the financing amount, rate, repayment period and terms. Review and sign the agreement.' },
  { number: '03', title: 'Disbursement', description: 'After final verification, funds are disbursed directly to you.' },
];

export default function AssetFinancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-[#0A0534] pt-40 pb-24 px-6 md:px-16 overflow-hidden">
        <Image
          src={bg}
          alt="Hero background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Asset Finance Loans</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Acquire the assets that move your business.
          </h1>
          <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-10">
            Finance vehicles and income-generating assets needed for business mobility, logistics and growth. The facility is structured around the asset value, customer financials and repayment capacity.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all group"
            >
              Explore Asset Financing
              <ArrowForward className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/sales"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Speak to a loan officer
            </Link>
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

      {/* Asset types */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">What we finance</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">Choose the financing option that supports your next move.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {assetTypes.map(({ icon: Icon, title, description, examples }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#E8192C]/10 flex items-center justify-center mb-5">
                  <Icon className="text-[#E8192C]" />
                </div>
                <h3 className="font-bold text-[#0A0534] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{description}</p>
                <ul className="space-y-1">
                  {examples.map((e) => (
                    <li key={e} className="text-xs text-gray-400 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#E8192C] shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-4xl font-bold text-[#0A0534] mb-4">Simple and hassle-free process</h2>
            <p className="text-gray-500 leading-relaxed">
              From application to approval, our streamlined process makes it easy to access the financing you need with confidence. 
            </p>
            <h2 className='text-xl font-bold text-[#0A0534]'>Drive Now, Pay Later</h2>
          </div>
          <div className="flex flex-col gap-0">
            {steps.map(({ number, title, description }, i) => (
              <div key={number} className="flex gap-5">
                {/* Step indicator column */}
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#0A0534] flex items-center justify-center shrink-0 shadow-md">
                    <span className="text-sm font-bold text-white">{number}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-[#0A0534] to-[#E8192C]/30 my-1 min-h-[40px]" />
                  )}
                </div>
                {/* Content */}
                <div className="pb-8">
                  <h3 className="font-semibold text-[#0A0534] mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Requirements</p>
            <h2 className="text-4xl font-bold text-[#0A0534] mb-4">What you need to apply.</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Gather these documents before you apply to speed up the process. Our team is available to clarify anything you&apos;re unsure about.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0A0534] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#E8192C] transition-colors group"
            >
              Finance Your Asset
              <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
            </Link>
          </div>
          <div className="space-y-3">
            {requirements.map((req) => (
              <div key={req} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100">
                <CheckCircleOutlined className="text-[#E8192C] shrink-0 mt-0.5" fontSize="small" />
                <p className="text-sm text-gray-600 leading-relaxed">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 md:px-16 bg-[#0A0534] text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to finance your next asset?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Talk to our lending team. We&apos;ll find the right structure for your situation.</p>
        <Link
          href="/sales/#contact-sales"
          className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-colors group"
        >
          Apply for Asset Finance
          <ArrowForward className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
