import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowForward,
  CheckCircleOutlined,
  AccountBalance,
  Send,
  Savings,
  Hub,
  Shield,
  Speed,
  SupportAgent,
  AccountTree,
} from '@mui/icons-material';
import bg from '@/public/carbon.png'

export const metadata: Metadata = {
  title: 'Banking as a Service | Choice Microfinance Bank',
  description: 'Choice Bank offers BaaS infrastructure to fintechs and digital businesses — embed accounts, payments, collections and cross-border rails into your product via API.',
};

const capabilities = [
  {
    icon: AccountBalance,
    title: 'Embedded Bank Accounts',
    description: 'Open real, CBK-regulated bank accounts for your customers programmatically. Each account is a fully functional bank account — not a wallet abstraction.',
    details: ['Personal & business account creation', 'Full KYC flow via API', 'Real-time balance & statement access', 'Account numbers on Kenya\'s banking rails'],
  },
  {
    icon: Send,
    title: 'Payments & Disbursements',
    description: 'Send money to M-Pesa, Airtel Money, Paybill, Till numbers, Pesalink, and any Kenyan bank — all from a single disbursement endpoint.',
    details: ['Mobile money (M-Pesa, Airtel)', 'Bank-to-bank transfers via Pesalink', 'Bulk disbursements for payroll or agents', 'Real-time status callbacks via webhooks'],
  },
  {
    icon: Savings,
    title: 'Collections & Inflows',
    description: 'Accept payments from your users through dedicated virtual accounts, Paybill shortcodes, and Pesalink — with instant transaction notifications.',
    details: ['Virtual account collections', 'Paybill & Pesalink inflows', 'Webhook events on every receipt', 'Automatic reconciliation support'],
  },
  {
    icon: Hub,
    title: 'Virtual Wallets',
    description: 'Create isolated virtual wallets per user, merchant, or project. Move funds between wallets in real time without touching the banking rails.',
    details: ['Multi-wallet architecture', 'Instant internal transfers', 'Per-wallet transaction history', 'Flexible balance controls'],
  },
  {
    icon: AccountTree,
    title: 'Cross-Border & FX',
    description: 'Settle China supplier payments in CNY/RMB and support diaspora remittance flows — all through the same BaaS integration.',
    details: ['CNY/RMB payments to China', 'Kenya–China corridor (CNY Express)', 'FX rate guidance and conversion', 'Traceable international transactions'],
  },
  {
    icon: Shield,
    title: 'Regulatory Coverage',
    description: 'Build under Choice Bank\'s CBK licence. Your product is backed by a regulated institution — removing the licensing burden from your roadmap.',
    details: ['CBK-licensed banking partner', 'AML/KYC compliance built in', 'Transaction reporting handled', 'Audit trail on all operations'],
  },
];

const useCases = [
  { title: 'Lending Platforms', description: 'Disburse loans directly to borrower accounts or mobile money. Collect repayments via dedicated virtual accounts.' },
  { title: 'Savings & Wallets', description: 'Offer your users real bank accounts with interest-bearing balances, backed by a CBK-regulated institution.' },
  { title: 'Payroll & Agent Networks', description: 'Pay employees, agents, or merchants across mobile money and bank channels in bulk via a single API call.' },
  { title: 'E-commerce & Marketplaces', description: 'Collect from buyers and settle to sellers — with escrow-style wallet controls and automated reconciliation.' },
  { title: 'China Import Payments', description: 'Enable your users to pay Chinese suppliers in CNY directly from Kenya through the CNY Express corridor.' },
  { title: 'Microfinance & SACCOs', description: 'Digitise your lending and savings operations on top of a regulated banking layer without building core banking from scratch.' },
];

const reasons = [
  { icon: Shield, label: 'CBK Licensed', description: 'Operate under a real banking licence — no regulatory grey areas.' },
  { icon: Speed, label: 'Fast Integration', description: 'Sandbox access within 48 hours. Go live in weeks, not months.' },
  { icon: SupportAgent, label: 'Dedicated Support', description: 'A technical partnership team with you from integration to production.' },
  { icon: AccountBalance, label: 'Real Banking Rails', description: 'Pesalink, M-Pesa, Airtel, SWIFT. The actual infrastructure.' },
];

export default function APIBankingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#0A0534] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center pl-6 md:pl-16">
          {/* Left: text */}
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Banking as a Service</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              The bank behind<br />your fintech.
            </h1>
            <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-10">
              Build, launch, and scale financial services with secure banking infrastructure designed for fintechs, lenders, SACCOs, and businesses. Connect seamlessly to payments, accounts, lending, FX, savings through our secure digital banking solutions, while offering your customers a fully branded financial experience powered by Choice Bank’s regulated infrastructure.
            </p>
          
            <div className="flex flex-wrap gap-4">
              <a
                href="https://choice-bank.gitbook.io/choice-bank"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all group"
              >
                Read the Docs
                <ArrowForward className="group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>
          {/* Right: image flush to edge */}
          <div className="relative w-full h-[480px] md:h-[650px] rounded-l-3xl overflow-hidden">
            <Image
              src={bg}
              alt="API Banking"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-contain object-center"
              priority
            />
          </div>
        </div>
      </div>

      {/* Why Choice BaaS */}
      <div className="py-16 px-6 md:px-16 bg-[#E8192C]/10">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map(({ icon: Icon, label, description }) => (
            <div key={label} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#E8192C]/20 flex items-center justify-center shrink-0">
                <Icon className="text-[#E8192C]" fontSize="small" />
              </div>
              <div>
                <p className="font-bold text-[#0A0534] text-sm mb-1">{label}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* BaaS Capabilities */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Platform Capabilities</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">Everything your product needs.</h2>
            <p className="text-gray-500 mt-4 leading-relaxed">Access the full stack of banking services through a single, well-documented API partnership.</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {capabilities.map(({ icon: Icon, title, description, details }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#E8192C]/10 flex items-center justify-center mb-5">
                  <Icon className="text-[#E8192C]" />
                </div>
                <h3 className="font-bold text-[#0A0534] text-lg mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{description}</p>
                <ul className="space-y-2">
                  {details.map((d) => (
                    <li key={d} className="flex items-start gap-2 text-xs text-gray-500">
                      <CheckCircleOutlined className="text-[#E8192C] shrink-0 mt-0.5" sx={{ fontSize: 14 }} />
                      {d}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Use cases */}
      <div className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Who It&apos;s For</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">Built for builders.</h2>
            <p className="text-gray-500 mt-4 leading-relaxed">Whether you&apos;re a fintech, SACCO, marketplace, or enterprise — if you need banking infrastructure, this is the conversation to start.</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {useCases.map(({ title, description }) => (
              <div key={title} className="border border-gray-100 rounded-2xl p-7 hover:border-[#E8192C]/30 hover:shadow-sm transition-all">
                <h3 className="font-bold text-[#0A0534] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-24 px-6 md:px-16 bg-[#0A0534]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">How Partnership Works</p>
            <h2 className="text-4xl font-bold text-white mb-6">From conversation to production.</h2>
            <p className="text-gray-400 leading-relaxed mb-8">
              We don&apos;t run a self-serve sign-up flow — BaaS partnerships are scoped properly from the start. Here&apos;s how we work together.
            </p>
            <a
              href="https://choice-bank.gitbook.io/choice-bank"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-6 py-3 rounded-full font-semibold hover:bg-white/10 transition-all group text-sm"
            >
              Our API Docs
              <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
            </a>
          </div>
          <div className="space-y-0 divide-y divide-white/10">
            {[
              { step: '01', title: 'Initial conversation', detail: 'Tell us about your product, your users, and what banking capabilities you need. No commitment required.' },
              { step: '02', title: 'Scope & agreement', detail: 'We define the integration scope, data flows, compliance requirements, and go-live timeline together.' },
              { step: '03', title: 'Sandbox access', detail: 'You get sandbox credentials and API documentation to begin building and testing within 48 hours of agreement.' },
              { step: '04', title: 'Integration & review', detail: 'Our technical team reviews your integration, supports testing, and signs off before production launch.' },
              { step: '05', title: 'Go live', detail: 'Flip to production. Your users can now open accounts, send payments, and collect funds through a CBK-licensed bank.' },
            ].map(({ step, title, detail }) => (
              <div key={step} className="flex gap-6 py-6">
                <span className="text-2xl font-bold text-white/20 w-10 shrink-0">{step}</span>
                <div>
                  <h4 className="font-semibold text-white mb-1">{title}</h4>
                  <p className="text-sm text-gray-400 leading-relaxed">{detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8 bg-white rounded-3xl p-10 border border-gray-100">
          <div>
            <h2 className="text-3xl font-bold text-[#0A0534] mb-3">Ready to embed banking into your product?</h2>
            <p className="text-gray-500 max-w-lg leading-relaxed">Start with a conversation. Our partnership team will help you figure out the right integration for your use case.</p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 shrink-0">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-colors group whitespace-nowrap"
            >
              Start a Partnership
              <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
            </Link>
            <a
              href="https://choice-bank.gitbook.io/choice-bank"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-[#0A0534] text-[#0A0534] px-8 py-4 rounded-full font-semibold hover:bg-[#0A0534] hover:text-white transition-colors group whitespace-nowrap"
            >
              Read the Docs
              <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
