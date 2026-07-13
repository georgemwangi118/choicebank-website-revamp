import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowForward, CheckCircleOutlined, DirectionsCar, WbSunny, Gavel } from '@mui/icons-material';
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
    examples: ['Vehicles from YOM 2009+', 'Interest: 2.5% p.m.', 'Up to Ksh 5M gross', 'Up to 24 months'],
  },
  {
    icon: DirectionsCar,
    title: 'MOTI 80% Asset Finance',
    description: 'A higher-limit asset finance option for qualifying customers and newer vehicles. Designed for stronger financial profiles that meet the stated eligibility criteria.',
    examples: ['Up to 80% of forced value', 'Interest: 2.5% p.m.', 'YOM 2018 and above', '12 to 36 months'],
  },
  {
    icon: Gavel,
    title: 'Auction Refinancing',
    description: 'Finance for customers acquiring repossessed vehicles through organizational auctions. Helps qualifying buyers meet the purchase balance after paying the required deposit.',
    examples: ['50% deposit required', 'Loan: 50% of selling price', 'Up to 18 months', 'Interest: 2.5% p.m.'],
  },
  {
    icon: WbSunny,
    title: 'Solari Loan',
    description: 'A green energy loan for complete solar solutions for homes, schools, churches, hotels, restaurants and SMEs seeking reliable solar packages.',
    examples: ['Packages: Ksh 150K – Ksh 10M', 'Financing capped at Ksh 5M', '40% minimum deposit', 'Up to 36 months'],
  },
];

const features = [
  { label: 'Loan amount', value: 'Up to Ksh 5M' },
  { label: 'Interest rate', value: '2.5% p.m.' },
  { label: 'Loan period', value: 'Up to 24 months' },
  { label: 'Vehicle YOM', value: '2009 and above' },
  { label: 'MOTI financing', value: 'Up to 80%' },
  { label: 'Decision', value: 'Within 48 hours' },
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
  { number: '01', title: 'Submit your application', description: 'Fill in our online form or visit any branch. Our team will acknowledge within 4 business hours.' },
  { number: '02', title: 'Document review', description: 'We assess your documents and credit profile. Most applications get a decision within 48 hours.' },
  { number: '03', title: 'Loan offer', description: 'Receive a formal offer letter detailing the loan amount, rate, and repayment schedule. No surprises.' },
  { number: '04', title: 'Disbursement', description: 'Accept the offer, sign the agreement, and funds are disbursed directly to the supplier or dealer.' },
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
              Speak to an advisor
            </Link>
          </div>
        </div>
      </div>

      {/* Loan terms */}
      <div className="py-16 px-6 md:px-16 bg-[#E8192C]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {features.map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-lg font-bold text-[#0A0534]">{value}</p>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Asset types */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">What we finance</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">Choose the financing option that supports your next move.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
            <h2 className="text-4xl font-bold text-[#0A0534] mb-4">Simple process. Fast decision.</h2>
            <p className="text-gray-500 leading-relaxed">
              We&apos;ve removed the bureaucracy from asset finance. Most applications are decided within 48 hours, and we&apos;ll keep you updated at every step.
            </p>
          </div>
          <div className="space-y-0 divide-y divide-gray-100">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="flex gap-6 py-6">
                <span className="text-3xl font-bold text-gray-100 w-12 shrink-0">{number}</span>
                <div>
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
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-colors group"
        >
          Apply for Asset Finance
          <ArrowForward className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
