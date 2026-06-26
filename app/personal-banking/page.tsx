import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowForward, CheckCircleOutlined, Savings, AccountBalanceWallet, SwapHoriz, Public } from '@mui/icons-material';

export const metadata: Metadata = {
  title: 'Personal Banking | ChoiceBank',
  description: 'Open a personal account with ChoiceBank. Savings, current accounts, instant transfers, and zero monthly fees.',
};

const accounts = [
  {
    icon: Savings,
    name: 'Savings Account',
    tagline: 'Save with purpose.',
    description: 'A high-yield savings account that rewards consistency. Watch your money grow with competitive rates and full liquidity.',
    features: [
      'Competitive interest rates, calculated daily',
      '24/7 access — withdraw anytime with no penalties',
      'Set savings goals and track your progress in-app',
      'Automated round-up savings on every transaction',
      'Instant notifications on deposits and interest credits',
    ],
    cta: 'Open Savings Account',
    accent: 'border-[#E8192C]',
    badgeBg: 'bg-[#E8192C]/10',
    badgeText: 'text-[#E8192C]',
  },
  {
    icon: AccountBalanceWallet,
    name: 'Current Account',
    tagline: 'Spend without friction.',
    description: 'A full-featured current account for your daily financial life — zero maintenance fees, free debit card, and seamless payments.',
    features: [
      'Zero monthly maintenance fees — ever',
      'Free debit card with international acceptance',
      'Real-time transfers to any bank or mobile wallet',
      'International transfers at competitive FX rates',
      'Up to 3 sub-accounts for budgeting',
    ],
    cta: 'Open Current Account',
    accent: 'border-[#0A0534]',
    badgeBg: 'bg-[#0A0534]/10',
    badgeText: 'text-[#0A0534]',
  },
];

const perks = [
  {
    icon: SwapHoriz,
    title: 'Instant transfers',
    description: 'Send money to any bank, M-Pesa, or Airtel Money in seconds — 24/7, including weekends and public holidays.',
  },
  {
    icon: Public,
    title: 'Send abroad',
    description: 'Receive diaspora remittances or send money internationally at real exchange rates with transparent fees.',
  },
  {
    icon: Savings,
    title: 'No hidden charges',
    description: 'We publish every fee in plain language. If you can\'t find a fee before you transact, we don\'t charge it.',
  },
  {
    icon: AccountBalanceWallet,
    title: 'Loans available',
    description: 'Asset finance and logbook loans available for account holders. Quick decisions, fair rates.',
  },
];

export default function PersonalBankingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#0A0534] pt-40 pb-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Personal Banking</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Banking that grows with you.
          </h1>
          <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-10">
            From your first savings goal to running your finances across multiple accounts — ChoiceBank gives you the tools, not the headaches.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all group"
          >
            Open an Account
            <ArrowForward className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Accounts */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Account types</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">Pick the account that fits.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {accounts.map(({ icon: Icon, name, tagline, description, features, cta, accent, badgeBg, badgeText }) => (
              <div key={name} className={`bg-white rounded-3xl p-10 border-t-4 ${accent} shadow-sm`}>
                <div className={`w-12 h-12 rounded-xl ${badgeBg} flex items-center justify-center mb-6`}>
                  <Icon className={badgeText} />
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
                  {cta}
                  <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Perks */}
      <div className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Why ChoiceBank</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">Everything your bank should be.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {perks.map(({ icon: Icon, title, description }) => (
              <div key={title} className="p-6 rounded-2xl bg-[#F7F8F8]">
                <div className="w-10 h-10 rounded-lg bg-[#E8192C]/10 flex items-center justify-center mb-4">
                  <Icon className="text-[#E8192C]" fontSize="small" />
                </div>
                <h3 className="font-semibold text-[#0A0534] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA strip */}
      <div className="py-16 px-6 md:px-16 bg-[#0A0534] text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Ready to open your account?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Takes less than 5 minutes. No branch visit required.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-colors group"
        >
          Get started — It&apos;s free
          <ArrowForward className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
