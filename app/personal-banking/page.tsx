import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowForward, CheckCircleOutlined, Savings, AccountBalanceWallet, Lock, SwapHoriz, CurrencyExchange, PhoneAndroid } from '@mui/icons-material';

export const metadata: Metadata = {
  title: 'Personal Banking | Choice Microfinance Bank',
  description: 'Secure, accessible and flexible banking solutions designed to help you save, transact and plan with confidence.',
};

const accounts = [
  {
    icon: AccountBalanceWallet,
    name: 'Personal Account',
    tagline: 'Everyday banking, made simple.',
    description: 'A secure account for deposits, withdrawals, payments, savings and access to Choice Bank services. A reliable foundation for managing day-to-day money with confidence.',
    features: [
      'Manage everyday transactions securely',
      'Suitable for salary, savings and personal payments',
      'Supports access to mobile and internet banking',
      'Helps build a banking relationship for future financial needs',
    ],
    cta: 'Open a Personal Account',
    accent: 'border-[#E8192C]',
    badgeBg: 'bg-[#E8192C]/10',
    badgeText: 'text-[#E8192C]',
  },
  {
    icon: Savings,
    name: 'Savings Account',
    tagline: 'Save with purpose.',
    description: 'Build consistency in your money habits with a simple account that helps you set funds aside while keeping your money accessible. Ideal for personal goals, emergencies and future plans.',
    features: [
      'Separate savings from everyday spending',
      'Suitable for short-term and long-term goals',
      'Easy deposits and account access',
      'Supports disciplined personal financial planning',
    ],
    cta: 'Start Saving Today',
    accent: 'border-[#0A0534]',
    badgeBg: 'bg-[#0A0534]/10',
    badgeText: 'text-[#0A0534]',
  },
  {
    icon: Lock,
    name: 'Fixed Deposit',
    tagline: 'Let your money work for you.',
    description: 'Place funds for an agreed period and earn predictable returns at fixed rates. A strong option for customers seeking secure growth, capital preservation and financial flexibility.',
    features: [
      'Minimum placement from Ksh 100,000 or USD 1,000',
      'Flexible tenures: 3, 6 or 12 months',
      'Fixed rates agreed at placement',
      'Can be used as collateral for loans and overdrafts',
    ],
    cta: 'Open a Fixed Deposit',
    accent: 'border-[#E8192C]',
    badgeBg: 'bg-[#E8192C]/10',
    badgeText: 'text-[#E8192C]',
  },
];

const services = [
  {
    icon: SwapHoriz,
    title: 'Money Transfers',
    description: 'Send and receive funds through reliable banking channels designed for convenience and ease. Built for everyday payments, family support and personal transactions.',
  },
  {
    icon: CurrencyExchange,
    title: 'Foreign Exchange',
    description: 'Access foreign exchange support for travel, international payments and cross-border financial needs. Professional FX assistance with transparent, guided transactions.',
  },
  {
    icon: PhoneAndroid,
    title: 'Mobile & Internet Banking',
    description: 'Access key banking services through digital channels designed for convenience, security and easier money management. Built for customers who prefer digital-first banking.',
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
            Banking that fits your everyday life.
          </h1>
          <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-10">
            Secure, accessible and flexible banking solutions designed to help you save, transact and plan with confidence. From daily money movement to fixed deposits and digital access, Choice Microfinance Bank gives you tools to manage your financial life with clarity.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all group"
          >
            Open a Personal Account
            <ArrowForward className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>
      </div>

      {/* Accounts */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Account types & services</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">Pick the service that fits.</h2>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {accounts.map(({ icon: Icon, name, tagline, description, features, cta, accent, badgeBg, badgeText }) => (
              <div key={name} className={`bg-white rounded-3xl p-10 border-t-4 ${accent} shadow-sm flex flex-col`}>
                <div className={`w-12 h-12 rounded-xl ${badgeBg} flex items-center justify-center mb-6`}>
                  <Icon className={badgeText} />
                </div>
                <h2 className="text-xl font-bold text-[#0A0534] mb-1">{name}</h2>
                <p className={`text-sm font-semibold ${badgeText} mb-4`}>{tagline}</p>
                <p className="text-gray-500 mb-6 leading-relaxed text-sm">{description}</p>
                <ul className="space-y-3 mb-8 flex-1">
                  {features.map((f) => (
                    <li key={f} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircleOutlined className="text-[#E8192C] shrink-0 mt-0.5" fontSize="small" />
                      {f}
                    </li>
                  ))}
                </ul>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 bg-[#0A0534] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#E8192C] transition-colors group text-sm"
                >
                  {cta}
                  <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Additional Services */}
      <div className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">More services</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">Everything your bank should be.</h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, description }) => (
              <div key={title} className="p-8 rounded-2xl bg-[#F7F8F8]">
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
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Speak to a Choice Bank officer and get started today.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-colors group"
        >
          Speak to a Choice Bank Officer
          <ArrowForward className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
