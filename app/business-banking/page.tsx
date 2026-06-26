import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowForward, CheckCircleOutlined, Business, AccountBalance, SwapHoriz, Public, Hub, BarChart } from '@mui/icons-material';

export const metadata: Metadata = {
  title: 'Business Banking | ChoiceBank',
  description: 'Banking built for Kenyan businesses. Business accounts, bulk payments, foreign exchange, collections, and API access — all in one place.',
};

const accounts = [
  {
    name: 'Business Current Account',
    tagline: 'Your business\'s everyday account.',
    description: 'A fully-featured current account for day-to-day business operations. Make payments, receive funds, and manage cash flow — all in one place.',
    features: [
      'Zero monthly maintenance fees',
      'Unlimited transactions with transparent per-transaction fees',
      'Dedicated relationship manager for accounts above KES 1M',
      'Multi-signatory approval workflows',
      'Debit card for directors and authorised signatories',
      'Real-time SMS and email transaction alerts',
    ],
    accent: 'border-[#E8192C]',
    badgeBg: 'bg-[#E8192C]/10',
    badgeText: 'text-[#E8192C]',
  },
  {
    name: 'Business Savings Account',
    tagline: 'Put idle cash to work.',
    description: 'Earn competitive interest on business reserves. Keep liquidity available while growing your balance between payroll and supplier cycles.',
    features: [
      'Competitive tiered interest rates',
      'Instant access — no lock-in periods',
      'Earn interest calculated on daily closing balance',
      'Sweep from current account automatically',
      'Separate reporting for audit and compliance',
      'Eligible as collateral for business loans',
    ],
    accent: 'border-[#0A0534]',
    badgeBg: 'bg-[#0A0534]/10',
    badgeText: 'text-[#0A0534]',
  },
];

const solutions = [
  {
    icon: SwapHoriz,
    title: 'Bulk Payments',
    description: 'Pay salaries, suppliers, and agents across banks, M-Pesa, and Airtel Money in a single upload. Full reconciliation report included.',
  },
  {
    icon: Public,
    title: 'Foreign Exchange',
    description: 'Buy and sell USD, GBP, EUR, and other major currencies at competitive rates. Same-day settlement for most currency pairs.',
  },
  {
    icon: Hub,
    title: 'Collections',
    description: 'Collect from customers via Paybill, Pesalink, or bank transfer. Every payment auto-reconciled against your virtual wallet.',
  },
  {
    icon: BarChart,
    title: 'Cash Flow Reporting',
    description: 'Monthly and on-demand statements, with export to Excel and PDF. Full audit trail for every transaction.',
  },
  {
    icon: AccountBalance,
    title: 'Business Loans',
    description: 'Asset finance and logbook loans for business assets. Quick decisions and competitive rates for existing account holders.',
  },
  {
    icon: Business,
    title: 'API Banking',
    description: 'Embed our banking infrastructure directly into your product. Full API access for disbursements, accounts, and collections.',
  },
];

const requirements = [
  'Certificate of Incorporation or Business Registration',
  'KRA PIN Certificate (company)',
  'Memorandum & Articles of Association (for limited companies)',
  'Board resolution authorising account opening',
  'ID and KRA PIN for all directors/signatories',
  'Proof of business address (utility bill or lease agreement)',
];

export default function BusinessBankingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#0A0534] pt-40 pb-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Business Banking</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            A bank that moves as fast as your business.
          </h1>
          <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-10">
            From SMEs to growing enterprises — business accounts, bulk payments, FX, collections, and API access all under one roof. No switching between providers.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all group"
            >
              Open a Business Account
              <ArrowForward className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/api-banking"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Explore API Banking
            </Link>
          </div>
        </div>
      </div>

      {/* Accounts */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Account types</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">Built for how businesses actually operate.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {accounts.map(({ name, tagline, description, features, accent, badgeBg, badgeText }) => (
              <div key={name} className={`bg-white rounded-3xl p-10 border-t-4 ${accent} shadow-sm`}>
                <div className={`w-12 h-12 rounded-xl ${badgeBg} flex items-center justify-center mb-6`}>
                  <Business className={badgeText} />
                </div>
                <h2 className="text-2xl font-bold text-[#0A0534] mb-1">{name}</h2>
                <p className={`text-sm font-semibold ${badgeText} mb-4`}>{tagline}</p>
                <p className="text-gray-500 mb-6 leading-relaxed">{description}</p>
                <ul className="space-y-3 mb-8">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircleOutlined className="text-[#E8192C] shrink-0 mt-0.5" fontSize="small" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0A0534] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#1a0f4e] transition-colors group text-sm"
                >
                  Get started
                  <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Solutions */}
      <div className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Business solutions</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">Everything your business needs to move money.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {solutions.map(({ icon: Icon, title, description }) => (
              <div key={title} className="p-6 rounded-2xl bg-[#F7F8F8] hover:border-[#E8192C]/30 border border-transparent hover:bg-red-50/30 transition-all">
                <div className="w-12 h-12 rounded-xl bg-[#E8192C]/10 flex items-center justify-center mb-4">
                  <Icon className="text-[#E8192C]" />
                </div>
                <h3 className="font-semibold text-[#0A0534] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Requirements */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Account opening</p>
            <h2 className="text-4xl font-bold text-[#0A0534] mb-4">What you need to get started.</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Opening a ChoiceBank business account is straightforward. Submit your documents, and our team will have your account ready within 2 business days.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#0A0534] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#E8192C] transition-colors group"
            >
              Start your application
              <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
            </Link>
          </div>
          <div className="space-y-3">
            {requirements.map((req, i) => (
              <div key={req} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100">
                <span className="text-sm font-bold text-[#E8192C] w-6 shrink-0">{String(i + 1).padStart(2, '0')}</span>
                <p className="text-sm text-gray-600 leading-relaxed">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 md:px-16 bg-[#0A0534] text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to open your business account?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Our team will guide you through the process from start to finish.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-colors group"
        >
          Talk to us today
          <ArrowForward className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
