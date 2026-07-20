import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircleOutlined, Business, AccountBalance, SwapHoriz, Public, WbSunny, PhoneAndroid, ArrowForward } from '@mui/icons-material';
import image from '@/public/assets/pages/business.png'
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Business Banking | Choice Microfinance Bank',
  description: 'Practical financial solutions for SMEs, startups and growing enterprises across Kenya.',
};

const accounts = [
  {
    icon: Business,
    name: 'Business Current Account',
    tagline: 'Run your business with better control.',
    description: 'A reliable account for SMEs, startups and growing enterprises that need a secure place to manage collections, payments and daily operations. Keeps business finances separate from personal funds.',
    features: [
      'Manage collections, supplier payments and cash flow',
      'Keep business finances separate and organized',
      'Build transaction history for future credit assessment',
      'Access support through Choice Bank branches and digital channels',
    ],
    accent: 'border-[#E8192C]',
    badgeBg: 'bg-[#E8192C]/10',
    badgeText: 'text-[#E8192C]',
  },
  {
    icon: AccountBalance,
    name: 'Business Fixed Deposits',
    tagline: 'Put idle business funds to work.',
    description: 'A secure way for businesses to earn predictable returns on funds not immediately required for operations. Suitable for SMEs and corporate clients focused on capital preservation.',
    features: [
      'Tenures available for 3, 6, 9 or 12 months',
      'Competitive fixed returns agreed at placement',
      'Supports better treasury planning for businesses',
      'Can be used as collateral for credit facilities',
    ],
    accent: 'border-[#0A0534]',
    badgeBg: 'bg-[#0A0534]/10',
    badgeText: 'text-[#0A0534]',
  },
];

const solutions = [
  {
    icon: AccountBalance,
    title: 'SME Financing',
    description: 'Choice Business Loan up to Ksh 1M. Tenure of up to 12 months. Assessment based on account transactions and customer profile.',
  },
  {
    icon: Public,
    title: 'Asset Financing',
    description: 'Finance vehicles and income-generating assets up to Ksh 6M. Interest from 1.5% p.m. Loan period up to 48 months.',
  },
  {
    icon: SwapHoriz,
    title: 'Business Money Transfers',
    description: 'Move funds for suppliers, operations and business commitments through reliable banking channels. Designed for smoother daily transactions.',
  },
  {
    icon: Public,
    title: 'Foreign Exchange & Supplier Payments',
    description: 'Guided currency solutions for supplier payments, imports and cross-border transactions. Built for importers and businesses trading internationally.',
  },
  {
    icon: WbSunny,
    title: 'Solari Loan',
    description: 'Green energy financing for solar installations. Packages from Ksh 150K to Ksh 10M, capped at Ksh 6M. Loan period up to 36 months.',
  },
  {
    icon: PhoneAndroid,
    title: 'Business Digital Banking',
    description: 'Remote access to banking services through mobile and internet banking. Ideal for busy entrepreneurs and teams that need flexible account access.',
  },
];

const businessTypes = [
  {
    type: 'Sole Proprietorship',
    requirements: [
      'National ID or Passport of the owner',
      'KRA PIN Certificate (individual)',
      'Business Registration Certificate',
      'Proof of business address (utility bill or lease)',
    ],
  },
  {
    type: 'Limited Company (Ltd)',
    requirements: [
      'Certificate of Incorporation',
      'Memorandum & Articles of Association',
      'CR12 (list of directors from the Registrar)',
      'Board resolution authorising account opening',
      'National ID / Passport & KRA PIN for all directors and signatories',
      'Proof of business address',
      'KRA PIN Certificate (company)',
    ],
  },
  {
    type: 'Partnership',
    requirements: [
      'Partnership Deed / Agreement',
      'National ID / Passport & KRA PIN for all partners',
      'KRA PIN Certificate (partnership)',
      'Business Registration Certificate',
      'Proof of business address',
      'Resolution/letter authorising signatories',
    ],
  },
  {
    type: 'Trust',
    requirements: [
      'Trust Deed',
      'National ID / Passport & KRA PIN for all trustees',
      'KRA PIN Certificate (trust)',
      'Resolution authorising account opening and signatories',
      'Proof of registered address',
    ],
  },
  {
    type: 'NGO / Association / Society',
    requirements: [
      'Certificate of Registration (NGO Board / Registrar of Societies)',
      'Constitution or by-laws',
      'Minutes / resolution authorising account opening',
      'National ID / Passport & KRA PIN for officials and signatories',
      'Proof of registered address',
    ],
  },
  {
    type: 'Chama / Investment Group',
    requirements: [
      'Group constitution or by-laws',
      'Minutes of the meeting authorising account opening',
      'National ID & KRA PIN for all officials and signatories',
      'Proof of meeting venue or registered address',
    ],
  },
];

export default function BusinessBankingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-[#0A0534]/90 pt-40 pb-24 px-6 md:px-16 overflow-hidden">
        <Image
          src={image}
          alt="Hero background"
          fill
          sizes="100vw"
          className="object-contain object-center opacity-30"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Business Banking</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Banking built around your business goals.
          </h1>
          <p className="text-white text-sm max-w-xl leading-relaxed mb-10">
            Practical financial solutions for sole traders, SMEs, partnerships, trusts and enterprises across Kenya. Manage cash flow, transact with confidence, grow deposits and access financing designed around real business needs.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href='/contact'
              className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all group"
            >
              Contact Us to Get Started
              <ArrowForward className="group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>

      {/* Accounts */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Account types</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">The Right Account for Every Business.</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {accounts.map(({ icon: Icon, name, tagline, description, features, accent, badgeBg, badgeText }) => (
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
            <h2 className="text-4xl font-bold text-[#0A0534]">Solutions for every stage of business growth.</h2>
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

      {/* KYB Requirements by business type */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-2xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Account opening requirements</p>
            <h2 className="text-4xl font-bold text-[#0A0534] mb-4">What you need to get started.</h2>
            <p className="text-gray-500 leading-relaxed">
              Requirements vary by business type. Find your structure below. Our team is happy to guide you through the process.
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {businessTypes.map(({ type, requirements }) => (
              <div key={type} className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col">
                <h3 className="font-bold text-[#0A0534] text-lg mb-5 pb-4 border-b border-gray-100">{type}</h3>
                <ul className="space-y-3 flex-1">
                  {requirements.map((req) => (
                    <li key={req} className="flex items-start gap-3 text-sm text-gray-600">
                      <CheckCircleOutlined className="text-[#E8192C] shrink-0 mt-0.5" sx={{ fontSize: 16 }} />
                      {req}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <p className="text-xs text-gray-400 mt-8">
            Requirements are subject to the bank&apos;s KYB/AML policy and may vary. Additional documents may be requested during onboarding.
          </p>
        </div>
      </div>
    </div>
  );
}
