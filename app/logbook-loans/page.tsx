import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowForward, CheckCircleOutlined, DirectionsCar, Bolt, Shield, MonetizationOn } from '@mui/icons-material';

export const metadata: Metadata = {
  title: 'Logbook Loans | ChoiceBank',
  description: 'Unlock cash from your vehicle with a ChoiceBank logbook loan. Keep driving your car while accessing up to 50% of its value.',
};

const highlights = [
  { icon: MonetizationOn, title: 'Up to 50% of vehicle value', description: 'Borrow against the current market value of your registered vehicle — new or used.' },
  { icon: Bolt, title: 'Funds in 24 hours', description: 'Once your documents are verified and the loan is approved, funds hit your account the same day or next business day.' },
  { icon: DirectionsCar, title: 'Keep driving your car', description: 'Your vehicle stays with you throughout the loan period. We only hold the logbook as security.' },
  { icon: Shield, title: 'No hidden charges', description: 'We publish our full fee schedule upfront. What you see in the offer letter is what you pay — nothing else.' },
];

const loanTerms = [
  { label: 'Loan amount', value: 'KES 50,000 – KES 5,000,000' },
  { label: 'Repayment period', value: 'Up to 24 months' },
  { label: 'Financing coverage', value: 'Up to 50% of vehicle value' },
  { label: 'Decision turnaround', value: 'Within 24 hours' },
  { label: 'Vehicle age', value: 'Up to 10 years old' },
  { label: 'Early repayment', value: 'Allowed, no penalty' },
];

const eligibility = [
  'Kenyan citizen or resident with a valid National ID',
  'Vehicle registered in your name (or jointly)',
  'Vehicle aged 10 years or less at time of application',
  'Comprehensive insurance cover in place',
  'No active logbook loan on the same vehicle',
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
  { number: '01', title: 'Apply online or at a branch', description: 'Submit your details and upload your documents digitally, or visit our Nairobi office on Riverside Drive.' },
  { number: '02', title: 'Vehicle valuation', description: 'Our valuation partner assesses your vehicle. This is done at your convenience — we come to you.' },
  { number: '03', title: 'Loan offer', description: 'Receive a formal offer within 24 hours. Review the amount, rate, and repayment schedule at no obligation.' },
  { number: '04', title: 'Sign & receive funds', description: 'Sign the agreement, hand over the logbook, and receive funds directly in your ChoiceBank account.' },
];

export default function LogbookLoansPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#0A0534] pt-40 pb-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Logbook Loans</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Your car stays with you. The cash comes to you.
          </h1>
          <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-10">
            Unlock up to 50% of your vehicle&apos;s value as a cash loan — without selling or surrendering your car. Keep driving while you repay, with terms up to 24 months.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all group"
            >
              Apply Now
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

      {/* How it works */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-4xl font-bold text-[#0A0534] mb-4">Apply today. Funds tomorrow.</h2>
            <p className="text-gray-500 leading-relaxed">
              The entire process — from application to disbursement — is designed to take less than 24 hours for straightforward cases. Here&apos;s how it works.
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
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Apply online in minutes. Our team reviews and responds within 24 hours.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-colors group"
        >
          Apply for a logbook loan
          <ArrowForward className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
