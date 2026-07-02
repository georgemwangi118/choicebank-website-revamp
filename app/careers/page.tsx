import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowForward } from '@mui/icons-material';

export const metadata: Metadata = {
  title: 'Careers | ChoiceBank',
  description: 'Join the team building the future of banking in Kenya. Open roles in engineering, product, operations, and more.',
};

const openRoles = [
  {
    title: 'Senior Software Engineer — Backend',
    team: 'Engineering',
    type: 'Full-time',
    location: 'Nairobi (Hybrid)',
    description: 'Build and maintain our core banking APIs, payment processing pipelines, and integration platform. We write mostly Node.js and Python.',
  },
  {
    title: 'Product Designer',
    team: 'Product',
    type: 'Full-time',
    location: 'Nairobi (Hybrid)',
    description: 'Own the end-to-end design for our mobile app, web dashboard, and developer portal. Strong systems thinking and a portfolio of shipped financial products preferred.',
  },
  {
    title: 'Credit Analyst',
    team: 'Lending',
    type: 'Full-time',
    location: 'Nairobi (On-site)',
    description: 'Assess loan applications, develop credit models, and work closely with our risk and compliance teams to manage a growing loan portfolio.',
  },
  {
    title: 'Business Development Manager — API Banking',
    team: 'Sales',
    type: 'Full-time',
    location: 'Nairobi (Hybrid)',
    description: 'Grow our API Banking partner base. You\'ll work with fintechs, SACCOs, and enterprises to identify use cases and close deals.',
  },
  {
    title: 'Customer Experience Associate',
    team: 'Operations',
    type: 'Full-time',
    location: 'Nairobi (On-site)',
    description: 'Be the first line of support for our customers — resolving account issues, payment queries, and escalations with speed and empathy.',
  },
  {
    title: 'Compliance & Risk Officer',
    team: 'Compliance',
    type: 'Full-time',
    location: 'Nairobi (On-site)',
    description: 'Ensure our operations meet CBK regulatory requirements. Experience with AML/KYC frameworks in a Kenyan banking context is essential.',
  },
];

const perks = [
  { label: 'Competitive salary', detail: 'Benchmarked against the market, reviewed annually.' },
  { label: 'Health insurance', detail: 'Comprehensive cover for you and your dependants.' },
  { label: 'Learning budget', detail: 'KES 100,000/year for courses, conferences, and certifications.' },
  { label: 'Flexible hours', detail: 'We care about output, not when you start your Slack.' },
  { label: 'Staff banking benefits', detail: 'Preferential rates on loans and zero-fee accounts.' },
  { label: 'Growth trajectory', detail: 'We promote from within and share a clear career ladder.' },
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-[#0A0534] pt-40 pb-24 px-6 md:px-16 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=1600&q=80&fit=crop"
          alt="Hero background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Careers</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Build the future of banking with us.
          </h1>
          <p className="text-gray-400 text-xl max-w-xl leading-relaxed">
            We&apos;re a small team with a big mission. Every role at ChoiceBank has real impact — on our customers, on the product, and on the future of finance in Kenya.
          </p>
        </div>
      </div>

      {/* Open roles */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Open positions</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">{openRoles.length} roles available.</h2>
          </div>

          <div className="space-y-4">
            {openRoles.map((role) => (
              <div key={role.title} className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-[#E8192C]/30 transition-colors">
                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex flex-wrap gap-2 mb-3">
                      <span className="text-xs font-semibold text-[#E8192C] bg-[#E8192C]/10 px-3 py-1 rounded-full">{role.team}</span>
                      <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{role.type}</span>
                      <span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">{role.location}</span>
                    </div>
                    <h3 className="text-lg font-bold text-[#0A0534] mb-2">{role.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed max-w-2xl">{role.description}</p>
                  </div>
                  <Link
                    href={`/contact?inquiry=Job Application — ${encodeURIComponent(role.title)}`}
                    className="inline-flex items-center gap-2 border border-[#0A0534] text-[#0A0534] px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0A0534] hover:text-white transition-colors group shrink-0"
                  >
                    Apply
                    <ArrowForward fontSize="small" className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
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
            <h2 className="text-4xl font-bold text-[#0A0534]">What you get.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {perks.map(({ label, detail }) => (
              <div key={label} className="p-6 rounded-2xl bg-[#F7F8F8]">
                <h3 className="font-semibold text-[#0A0534] mb-2">{label}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* No open role CTA */}
      <div className="py-16 px-6 md:px-16 bg-[#0A0534] text-center">
        <h2 className="text-2xl font-bold text-white mb-3">Don&apos;t see your role?</h2>
        <p className="text-gray-400 mb-8 max-w-md mx-auto text-sm">We hire for attitude and aptitude. Send us your CV and tell us how you&apos;d contribute.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-colors group"
        >
          Get in touch
          <ArrowForward className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
