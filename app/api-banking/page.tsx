import { Metadata } from 'next';
import Link from 'next/link';
import { ArrowForward, CheckCircleOutlined, Code, AccountBalance, Send, Savings, Hub } from '@mui/icons-material';

export const metadata: Metadata = {
  title: 'API Banking | ChoiceBank',
  description: 'Integrate ChoiceBank\'s API into your product. Bank accounts, disbursements, collections, and virtual wallets — all via a clean REST API.',
};

const endpoints = [
  {
    icon: AccountBalance,
    title: 'Bank Accounts',
    description: 'Programmatically open partner accounts, business accounts, personal accounts, or wallet accounts. Full KYC flow built in.',
    methods: ['POST /accounts', 'GET /accounts/:id', 'GET /accounts/:id/balance'],
  },
  {
    icon: Send,
    title: 'Disbursements',
    description: 'Send money to M-Pesa, Airtel Money, Paybill, Till numbers, Pesalink, and any Kenyan bank account via a single endpoint.',
    methods: ['POST /disbursements', 'GET /disbursements/:id', 'POST /disbursements/bulk'],
  },
  {
    icon: Hub,
    title: 'Virtual Wallets',
    description: 'Create virtual wallets to isolate funds by customer, project, or campaign. Real-time balance updates and transaction history.',
    methods: ['POST /wallets', 'GET /wallets/:id', 'POST /wallets/:id/transfer'],
  },
  {
    icon: Savings,
    title: 'Collections',
    description: 'Receive payments via Paybill, Pesalink, and bank transfers. Webhook notifications fire on every incoming transaction.',
    methods: ['POST /collections/paybill', 'GET /collections', 'POST /webhooks'],
  },
];

const sdks = [
  { lang: 'Node.js', install: 'npm install @choicebank/sdk' },
  { lang: 'Python', install: 'pip install choicebank' },
  { lang: 'Java', install: 'implementation \'com.choicebank:sdk:1.0.0\'' },
  { lang: 'PHP', install: 'composer require choicebank/sdk' },
];

const features = [
  'Sandbox environment with test credentials — no real money at risk',
  'Comprehensive API documentation with copy-paste examples',
  'Webhook support for real-time transaction events',
  'OAuth 2.0 authentication with API key fallback',
  'Rate limits designed for production workloads',
  'Dedicated integration support from our engineering team',
  '99.9% uptime SLA with status page monitoring',
  'Idempotency keys to prevent duplicate transactions',
];

export default function APIBankingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#0A0534] pt-40 pb-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">API Banking</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Build on top of a real bank.
          </h1>
          <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-10">
            Embed bank accounts, payments, and collections into your product via a clean, well-documented REST API. Regulated infrastructure, developer-grade experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all group"
            >
              Get API Access
              <ArrowForward className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Talk to our team
            </Link>
          </div>
        </div>
      </div>

      {/* Endpoints */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">API Endpoints</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">Everything you need to build.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {endpoints.map(({ icon: Icon, title, description, methods }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-[#E8192C]/10 flex items-center justify-center">
                    <Icon className="text-[#E8192C]" fontSize="small" />
                  </div>
                  <h3 className="text-xl font-bold text-[#0A0534]">{title}</h3>
                </div>
                <p className="text-gray-500 text-sm mb-5 leading-relaxed">{description}</p>
                <div className="space-y-1">
                  {methods.map((m) => (
                    <code key={m} className="block text-xs font-mono text-[#E8192C] bg-[#F7F4FF] px-3 py-1.5 rounded-lg">
                      {m}
                    </code>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* SDKs */}
      <div className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">SDK Libraries</p>
            <h2 className="text-4xl font-bold text-[#0A0534] mb-4">Your language, our API.</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Don&apos;t write boilerplate. Our official SDK libraries handle authentication, retries, and serialization so you can focus on your product logic.
            </p>
            <div className="flex items-center gap-2">
              <Code className="text-[#E8192C]" />
              <span className="text-sm text-gray-500">Available for Node.js, Python, Java, and PHP</span>
            </div>
          </div>
          <div className="space-y-3">
            {sdks.map(({ lang, install }) => (
              <div key={lang} className="bg-[#0A0534] rounded-2xl px-6 py-4 flex items-center justify-between">
                <span className="text-white font-semibold text-sm">{lang}</span>
                <code className="text-[#E8192C] text-xs font-mono">{install}</code>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Features list */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Platform features</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">Built for production.</h2>
          </div>
          <div className="grid sm:grid-cols-2 gap-4">
            {features.map((f) => (
              <div key={f} className="flex items-start gap-3 p-4 bg-white rounded-xl border border-gray-100">
                <CheckCircleOutlined className="text-[#E8192C] shrink-0 mt-0.5" fontSize="small" />
                <p className="text-sm text-gray-600 leading-relaxed">{f}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 md:px-16 bg-[#0A0534] text-center">
        <h2 className="text-3xl font-bold text-white mb-4">Start building today.</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto">Get sandbox access and start integrating in minutes. Our team is available to support your integration.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-colors group"
        >
          Request API Access
          <ArrowForward className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
