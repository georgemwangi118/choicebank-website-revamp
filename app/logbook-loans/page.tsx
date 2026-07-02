import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowForward, CheckCircleOutlined, DirectionsCar, Bolt, Shield, MonetizationOn } from '@mui/icons-material';

export const metadata: Metadata = {
  title: 'Logbook Loans | Choice Microfinance Bank',
  description: 'Unlock cash from your vehicle with a Choice Bank logbook loan. Keep driving your car while accessing up to 60% of its value.',
};

const highlights = [
  { icon: MonetizationOn, title: 'Up to Ksh 5 Million', description: 'Borrow up to 60% of your vehicle\'s value depending on year of manufacture, make and condition.' },
  { icon: Bolt, title: '6 to 12 Hour TAT', description: 'Once your documents are verified and checks are completed, funds are disbursed fast — often the same day.' },
  { icon: DirectionsCar, title: 'Keep driving your car', description: 'Your vehicle stays with you throughout the loan period. We only hold the logbook as security.' },
  { icon: Shield, title: 'Vehicles from 2009 and above', description: 'We consider vehicles from year of manufacture 2009 upward, assessed on condition and client financials.' },
];

const loanTerms = [
  { label: 'Loan amount', value: 'Up to Ksh 5M' },
  { label: 'Loan period', value: 'Up to 18 months' },
  { label: 'Financing coverage', value: 'Up to 60%' },
  { label: 'Turnaround time', value: '6 – 12 hours' },
  { label: 'Vehicle YOM', value: '2009 and above' },
  { label: 'Loan Buyoff', value: 'Available' },
];

const eligibility = [
  'Kenyan citizen or resident with a valid National ID',
  'Vehicle registered in your name with logbook available',
  'Vehicle from year of manufacture 2009 and above',
  'Comprehensive motor insurance cover in place',
  'No adverse credit history',
  'Proof of income or regular cash flow',
];

const documents = [
  'Original logbook (vehicle registration certificate)',
  'National ID or Passport',
  'KRA PIN Certificate',
  'Comprehensive motor insurance certificate',
  'Latest 3 months bank statements',
  'Proof of residence (utility bill or lease)',
];

const steps = [
  { number: '01', title: 'Apply online or at a branch', description: 'Submit your details and upload your documents digitally, or visit any Choice Bank branch to get started.' },
  { number: '02', title: 'Vehicle & document checks', description: 'Our team conducts external checks and document verification. The process is designed to move quickly.' },
  { number: '03', title: 'Loan offer issued', description: 'Receive a formal offer within hours. Review the amount, rate, and repayment schedule at no obligation.' },
  { number: '04', title: 'Sign & receive funds', description: 'Accept the offer, hand over the logbook, and funds are disbursed directly to your account.' },
];

const buyoffTerms = [
  'Loan amount of up to Ksh 5M gross',
  'Loan period of up to 18 months',
  'Vehicle YOM: 2014 and above',
  'Client must have paid at least 50% of principal without default',
  'Up to 50% financing depending on YOM, make and condition',
];

export default function LogbookLoansPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-[#0A0534] pt-40 pb-24 px-6 md:px-16 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=1600&q=80&fit=crop"
          alt="Hero background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Logbook Loans</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Unlock cash from your vehicle.
          </h1>
          <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-10">
            A motor vehicle-secured loan supported by a valid logbook registered in your name. Use the funds for personal, business or development needs — while you keep driving.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all group"
            >
              Apply for a Logbook Loan
              <ArrowForward className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Speak to an advisor
            </Link>
          </div>
        </div>
      </div>

      {/* Loan terms strip */}
      <div className="py-16 px-6 md:px-16 bg-[#E8192C]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {loanTerms.map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-lg font-bold text-[#0A0534]">{value}</p>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key highlights */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Why choose us</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">Fast cash, simple terms.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#E8192C]/10 flex items-center justify-center mb-5">
                  <Icon className="text-[#E8192C]" />
                </div>
                <h3 className="font-bold text-[#0A0534] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
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
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Documents needed</p>
            <h2 className="text-2xl font-bold text-white mb-6">What to bring.</h2>
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

      {/* Loan Buyoff */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Loan Buyoff</p>
            <h2 className="text-4xl font-bold text-[#0A0534] mb-4">Move your existing logbook loan.</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              A logbook loan product designed to buy off an existing facility from another MFI or bank. It helps qualifying customers transfer their loan after demonstrating a strong repayment history.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0A0534] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#E8192C] transition-colors group"
            >
              Request Loan Buyoff
              <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
            </Link>
          </div>
          <div className="space-y-3">
            {buyoffTerms.map((term) => (
              <div key={term} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100">
                <CheckCircleOutlined className="text-[#E8192C] shrink-0 mt-0.5" fontSize="small" />
                <p className="text-sm text-gray-600 leading-relaxed">{term}</p>
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
            <h2 className="text-4xl font-bold text-[#0A0534] mb-4">Apply today. Funds today.</h2>
            <p className="text-gray-500 leading-relaxed">
              The entire process — from application to disbursement — is designed to take between 6 and 12 hours for straightforward cases with complete documents.
            </p>
          </div>
          <div className="space-y-0 divide-y divide-gray-200">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="flex gap-6 py-6">
                <span className="text-3xl font-bold text-gray-200 w-12 shrink-0">{number}</span>
                <div>
                  <h3 className="font-semibold text-[#0A0534] mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 md:px-16 bg-[#0A0534] text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to unlock your vehicle&apos;s value?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Apply today. Our team responds within hours.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-colors group"
        >
          Apply for a Logbook Loan
          <ArrowForward className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
