import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowForward,
  CheckCircleOutlined,
  FlightTakeoff,
  CurrencyExchange,
  Storefront,
  Public,
  Groups,
  Handshake,
} from '@mui/icons-material';
import bg from '@/public/remittance.jpg'

export const metadata: Metadata = {
  title: 'Remittance | Choice Microfinance Bank',
  description: 'Send money beyond borders with secure, guided and business-ready remittance solutions. CNY Express, supplier payments, diaspora support and more.',
};

const stats = [
  { label: 'Countries supported', value: '50+' },
  { label: 'Kenya–China corridor', value: 'CNY Express' },
  { label: 'Transaction handling', value: 'Secure & traceable' },
  { label: 'Regulation', value: 'CBK Licensed' },
  { label: 'FX support', value: 'CNY / KES & more' },
  { label: 'Service type', value: 'Personal & Business' },
];

const services = [
  {
    icon: FlightTakeoff,
    title: 'CNY Express',
    tagline: 'Fast, secure CNY transfers from Kenya to China.',
    description: 'A focused remittance solution for customers and importers who need to pay suppliers in China directly in CNY/KES. Supports faster China-bound payments with professional banking guidance.',
    highlights: [
      'Pay suppliers in CNY/KES directly from Kenya',
      'Designed for importers, traders and China-linked businesses',
      'Supports safer, traceable and compliant transaction handling',
      'Built around speed, convenience and clear payment support',
    ],
    cta: 'Start a CNY Transfer',
  },
  {
    icon: Storefront,
    title: 'Supplier Payments to China',
    tagline: 'Settle suppliers with more confidence.',
    description: 'Support your import business with a payment service built around China trade. Move funds for supplier invoices, sourcing payments and business commitments with clearer coordination.',
    highlights: [
      'Useful for importers paying Chinese suppliers',
      'Supports trade-related supplier payments',
      'Helps reduce payment friction in the Kenya–China corridor',
      'Works well for repeat business payments',
    ],
    cta: 'Pay a Supplier',
  },
  {
    icon: CurrencyExchange,
    title: 'Competitive FX Support',
    tagline: 'Move money with currency clarity.',
    description: 'Combine remittance support with professional foreign exchange guidance, helping customers understand conversion, transaction requirements and the value of every payment.',
    highlights: [
      'Guided FX support for cross-border payments',
      'Useful for CNY/KES and other currency needs',
      'Helps customers transact with better clarity',
      'Designed for transparent payment conversations',
    ],
    cta: 'Talk to Our FX Team',
  },
  {
    icon: Public,
    title: 'Cross-Border Money Transfers',
    tagline: 'Move funds beyond borders.',
    description: 'A reliable service for customers who need to send money across markets for trade, family support, education, travel or other legitimate financial needs.',
    highlights: [
      'Supports personal and business remittance needs',
      'Designed for secure and professional handling',
      'Suitable for one-off and recurring cross-border payments',
      'Available through Choice Bank support channels',
    ],
    cta: 'Make a Transfer',
  },
  {
    icon: Groups,
    title: 'Diaspora & Investment Support',
    tagline: 'Connecting global funds to local opportunity.',
    description: 'Choice Bank supports customers looking to bridge international money movement with local needs, including diaspora-linked payments, investment support and guided financial transactions.',
    highlights: [
      'Supports diaspora-linked financial needs',
      'Useful for local beneficiaries and investment conversations',
      'Guided by secure banking processes',
      'Aligned with Choice Bank\'s technology-led financial access vision',
    ],
    cta: 'Speak to a Remittance Officer',
  },
  {
    icon: Handshake,
    title: 'Remittance Partnerships',
    tagline: 'Payment capability for growth-focused platforms.',
    description: 'For fintechs, merchants and digital businesses looking to enable cross-border payment capability and China payment rails through a licensed banking partner.',
    highlights: [
      'Suitable for fintech and merchant partnership messaging',
      'Supports China payment positioning',
      'Connects naturally to API Banking capability',
      'Open to custom business partnership discussions',
    ],
    cta: 'Discuss a Partnership',
  },
];

export default function RemittancePage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-[#0A0534] pt-40 pb-24 px-6 md:px-16 overflow-hidden">
        <Image
          src={bg}
          alt="Hero background"
          fill
          sizes="100vw"
          className="object-cover opacity-30"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Remittance</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Cross-border payments built for modern trade.
          </h1>
          <p className="text-white text-sm max-w-2xl leading-relaxed mb-10">
            Send money beyond borders with secure, guided and business-ready remittance solutions. From CNY Express payments between Kenya and China to supplier settlements and diaspora-linked transactions, Choice Microfinance Bank helps customers move funds with clarity and confidence.
          </p>
        </div>
      </div>

      {/* Stats strip */}
      <div className="py-16 px-6 md:px-16 bg-[#E8192C]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {stats.map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-lg font-bold text-[#0A0534]">{value}</p>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CNY Express spotlight */}
      <div className="py-24 px-6 md:px-16 bg-[#0A0534]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="inline-block text-xs font-semibold tracking-widest uppercase text-[#E8192C] mb-4 bg-[#E8192C]/10 px-3 py-1 rounded-full">
              Featured Service
            </span>
            <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">
              Kenya to China,<br />
              <span className="text-[#E8192C]">direct in CNY.</span>
            </h2>
            <p className="text-white text-lg leading-relaxed mb-8">
              CNY Express is our dedicated China payment corridor — built for importers, traders and businesses that need to pay suppliers in CNY/KES directly from Kenya. Fast, traceable, and professionally handled.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                'Pay suppliers in CNY/KES directly from Kenya',
                'Traceable and compliant transaction handling',
                'Designed for importers and China-linked businesses',
                'Supported by professional FX guidance',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-gray-300">
                  <CheckCircleOutlined className="text-[#E8192C] mt-0.5 shrink-0" fontSize="small" />
                  <span className="text-sm">{item}</span>
                </li>
              ))}
            </ul>
           
          </div>
          <div className="grid grid-cols-2 gap-4">
            {[
              { label: 'Corridor', value: 'Kenya → China' },
              { label: 'Currency', value: 'CNY / KES' },
              { label: 'Purpose', value: 'Supplier Payments' },
              { label: 'Handling', value: 'Secure & Traceable' },
            ].map(({ label, value }) => (
              <div key={label} className="bg-white/5 border border-white/10 rounded-2xl p-6 text-center">
                <p className="text-2xl font-bold text-white mb-1">{value}</p>
                <p className="text-xs text-gray-400 uppercase tracking-widest">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* All services */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Remittance services</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">Move money where business takes you.</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map(({ icon: Icon, title, tagline, description, highlights }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#E8192C]/10 flex items-center justify-center mb-5">
                  <Icon className="text-[#E8192C]" />
                </div>
                <h3 className="font-bold text-[#0A0534] text-lg mb-1">{title}</h3>
                <p className="text-sm font-semibold text-[#E8192C] mb-3">{tagline}</p>
                <p className="text-sm text-gray-500 leading-relaxed mb-5">{description}</p>
                <ul className="space-y-2 mb-6 flex-1">
                  {highlights.map((h) => (
                    <li key={h} className="flex items-start gap-2 text-xs text-gray-500">
                      <CheckCircleOutlined className="text-[#E8192C] shrink-0 mt-0.5" sx={{ fontSize: 14 }} />
                      {h}
                    </li>
                  ))}
                </ul>
              
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Compliance note */}
      <div className="py-12 px-6 md:px-16 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <p className="text-sm text-gray-500 max-w-xl">
            Choice Microfinance Bank is licensed and regulated by the Central Bank of Kenya. All remittance transactions are handled through secure, compliant and traceable banking processes.
          </p>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-[#0A0534] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#E8192C] transition-colors group text-sm"
          >
            Speak to a Choice Bank Officer
            <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
          </Link>
        </div>
      </div>
    </div>
  );
}
