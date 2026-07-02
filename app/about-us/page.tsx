import { Metadata } from 'next';
import Image from 'next/image';
import { CheckCircleOutlined } from '@mui/icons-material';

export const metadata: Metadata = {
  title: 'About Us | ChoiceBank',
  description: 'Learn about ChoiceBank — our mission to make banking smarter, faster, and more accessible for SMEs, individuals, and innovators in Kenya.',
};

const values = [
  {
    title: 'Customer First',
    description: 'Every product decision starts with one question: does this make our customers\' lives easier? If not, we don\'t ship it.',
  },
  {
    title: 'Radical Transparency',
    description: 'No hidden fees, no fine print. You see exactly what you\'re charged, exactly what you\'re earning, every time.',
  },
  {
    title: 'Speed as a Feature',
    description: 'Slow banking is broken banking. We engineer for speed at every layer — from account opening to final settlement.',
  },
  {
    title: 'Security Without Compromise',
    description: 'Bank-grade encryption, multi-factor auth, and real-time fraud monitoring — without making the experience painful.',
  },
  {
    title: 'Built for Africa',
    description: 'We understand the unique financial landscape of East Africa. Our products reflect local needs, not imported assumptions.',
  },
  {
    title: 'Always Improving',
    description: 'We release updates weekly, listen to feedback daily, and treat every complaint as a product brief.',
  },
];

const milestones = [
  { year: '2019', event: 'ChoiceBank founded with a mission to modernize microfinance in Kenya.' },
  { year: '2020', event: 'Received full Microfinance Bank licence from the Central Bank of Kenya.' },
  { year: '2021', event: 'Launched mobile app with 2,000 customers in the first month.' },
  { year: '2022', event: 'Crossed 5,000 active business accounts; launched API Banking beta.' },
  { year: '2023', event: 'Processed over $1B in transactions; expanded to international remittance.' },
  { year: '2024', event: 'Launched BaaS platform; surpassed 10,000 businesses on the platform.' },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-[#0A0534] pt-40 pb-24 px-6 md:px-16 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1600&q=80&fit=crop"
          alt="Hero background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">About us</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Banking built for the Africa that&apos;s moving fast.
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
            ChoiceBank is a CBK-regulated Microfinance Bank headquartered in Nairobi. We exist to give SMEs, individuals, and developers access to financial infrastructure that actually keeps pace with their ambitions.
          </p>
        </div>
      </div>

      {/* Mission + Vision */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-10 border border-gray-100">
            <span className="text-xs font-semibold text-[#E8192C] uppercase tracking-widest">Mission</span>
            <h2 className="text-2xl font-bold text-[#0A0534] mt-3 mb-4">
              Make banking a tool for growth, not a barrier to it.
            </h2>
            <p className="text-gray-500 leading-relaxed">
              We believe access to great banking shouldn&apos;t be a privilege. Every business, every individual — regardless of size or sector — deserves a bank that moves at the speed of their ambitions. We provide the financial rails for Kenya&apos;s next generation of entrepreneurs.
            </p>
          </div>
          <div className="bg-[#0A0534] rounded-3xl p-10">
            <span className="text-xs font-semibold text-[#E8192C] uppercase tracking-widest">Vision</span>
            <h2 className="text-2xl font-bold text-white mt-3 mb-4">
              The most trusted digital bank for SMEs across Africa.
            </h2>
            <p className="text-gray-400 leading-relaxed">
              We are building toward a future where every business in Africa can access the same quality of banking infrastructure that powers global enterprises — with the local knowledge and regulatory trust that only a homegrown bank can provide.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Our values</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">What we stand for.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map(({ title, description }) => (
              <div key={title} className="p-6 rounded-2xl bg-[#F7F8F8] border border-gray-100">
                <div className="flex items-center gap-2 mb-3">
                  <CheckCircleOutlined className="text-[#E8192C]" fontSize="small" />
                  <h3 className="font-semibold text-[#0A0534]">{title}</h3>
                </div>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timeline */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Our journey</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">How we got here.</h2>
          </div>
          <div className="space-y-0 divide-y divide-gray-200">
            {milestones.map(({ year, event }) => (
              <div key={year} className="flex gap-8 py-6">
                <span className="text-lg font-bold text-[#E8192C] w-14 shrink-0">{year}</span>
                <p className="text-gray-600 leading-relaxed">{event}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Regulatory note */}
      <div className="py-16 px-6 md:px-16 bg-[#0A0534]">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-gray-400 text-sm max-w-2xl mx-auto leading-relaxed">
            ChoiceBank is licensed and regulated by the <strong className="text-white">Central Bank of Kenya (CBK)</strong> as a Microfinance Bank. Your deposits are protected and all operations comply with Kenya&apos;s Banking Act and CBK Prudential Guidelines.
          </p>
        </div>
      </div>
    </div>
  );
}
