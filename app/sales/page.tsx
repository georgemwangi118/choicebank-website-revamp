import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import {
  Phone,
  Email,
  WhatsApp,
  LocationOn,
  ArrowForward,
  CheckCircleOutlined,
  AccessTime,
} from '@mui/icons-material';

export const metadata: Metadata = {
  title: 'Speak to a Sales Advisor | Choice Microfinance Bank',
  description: 'Connect directly with a Choice Bank sales advisor for loans, asset finance, and all lending products. Fast response, no queues.',
};

const advisors = [
  {
    name: 'Loans Sales Desk',
    role: 'Logbook Loans & Asset Finance',
    phone: '+254 729 114 444',
    whatsapp: '+254 729 114 444',
    email: 'loans@choice-bank.com',
    availability: 'Mon – Fri, 8:00 AM – 6:00 PM',
  },
  {
    name: 'Business Banking Desk',
    role: 'SME Loans & Business Accounts',
    phone: '+254 729 114 444',
    whatsapp: '+254 729 114 444',
    email: 'business@choice-bank.com',
    availability: 'Mon – Fri, 8:00 AM – 6:00 PM',
  },
  {
    name: 'Remittance & FX Desk',
    role: 'CNY Express & Cross-Border Payments',
    phone: '+254 729 114 444',
    whatsapp: '+254 729 114 444',
    email: 'remittance@choice-bank.com',
    availability: 'Mon – Fri, 8:00 AM – 5:00 PM',
  },
];

const promises = [
  'A sales advisor picks up your enquiry — not a bot',
  'Response within 2 hours during business hours',
  'No obligation — just an honest conversation about your options',
  'Confidential. Your details are never shared outside Choice Bank',
];

export default function SalesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-[#0A0534] pt-40 pb-24 px-6 md:px-16 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=1600&q=80&fit=crop"
          alt="Sales advisor background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Sales & Advisory</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Talk to someone who<br />knows your product.
          </h1>
          <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-10">
            Our sales advisors are specialists — not generalists. Reach the right desk directly and get answers about loan terms, eligibility, and what you qualify for.
          </p>
          <a
            href="https://wa.me/254729114444"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#25D366] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#1ebe5d] transition-all group"
          >
            <WhatsApp />
            Chat on WhatsApp
            <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
          </a>
        </div>
      </div>

      {/* What to expect */}
      <div className="py-16 px-6 md:px-16 bg-[#E8192C]/10">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {promises.map((p) => (
            <div key={p} className="flex items-start gap-3">
              <CheckCircleOutlined className="text-[#E8192C] shrink-0 mt-0.5" fontSize="small" />
              <p className="text-sm text-[#0A0534] font-medium leading-snug">{p}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Advisor desks */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Our Sales Desks</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">Reach the right advisor.</h2>
            <p className="text-gray-500 mt-4 leading-relaxed">Each desk handles a specific product area so you speak to someone who can actually answer your question.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {advisors.map((advisor) => (
              <div key={advisor.name} className="bg-white rounded-3xl p-8 border border-gray-100 flex flex-col gap-5">
                <div>
                  <h3 className="font-bold text-[#0A0534] text-lg">{advisor.name}</h3>
                  <p className="text-sm font-semibold text-[#E8192C] mt-1">{advisor.role}</p>
                </div>

                <div className="space-y-3 flex-1">
                  <a
                    href={`tel:${advisor.phone.replace(/\s/g, '')}`}
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#E8192C] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#0A0534]/5 flex items-center justify-center shrink-0 group-hover:bg-[#E8192C]/10 transition-colors">
                      <Phone fontSize="small" className="text-[#0A0534] group-hover:text-[#E8192C]" />
                    </div>
                    {advisor.phone}
                  </a>

                  <a
                    href={`https://wa.me/${advisor.whatsapp.replace(/\D/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#25D366] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#0A0534]/5 flex items-center justify-center shrink-0 group-hover:bg-[#25D366]/10 transition-colors">
                      <WhatsApp fontSize="small" className="text-[#0A0534] group-hover:text-[#25D366]" />
                    </div>
                    WhatsApp
                  </a>

                  <a
                    href={`mailto:${advisor.email}`}
                    className="flex items-center gap-3 text-sm text-gray-600 hover:text-[#E8192C] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-xl bg-[#0A0534]/5 flex items-center justify-center shrink-0 group-hover:bg-[#E8192C]/10 transition-colors">
                      <Email fontSize="small" className="text-[#0A0534] group-hover:text-[#E8192C]" />
                    </div>
                    {advisor.email}
                  </a>

                  <div className="flex items-center gap-3 text-sm text-gray-400">
                    <div className="w-9 h-9 rounded-xl bg-[#0A0534]/5 flex items-center justify-center shrink-0">
                      <AccessTime fontSize="small" className="text-gray-400" />
                    </div>
                    {advisor.availability}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Branch visit */}
      <div className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Visit Us</p>
            <h2 className="text-4xl font-bold text-[#0A0534] mb-6">Prefer to come in person?</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Walk into any Choice Bank branch and ask to speak with a loans or business banking advisor. No appointment needed during business hours.
            </p>
            <div className="space-y-4">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8192C]/10 flex items-center justify-center shrink-0">
                  <LocationOn className="text-[#E8192C]" fontSize="small" />
                </div>
                <div>
                  <p className="font-semibold text-[#0A0534] text-sm">Head Office</p>
                  <p className="text-sm text-gray-500">Riverside Square, Riverside Drive, Nairobi</p>
                  <p className="text-sm text-gray-400">PO BOX 29796-00100</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-xl bg-[#E8192C]/10 flex items-center justify-center shrink-0">
                  <AccessTime className="text-[#E8192C]" fontSize="small" />
                </div>
                <div>
                  <p className="font-semibold text-[#0A0534] text-sm">Branch Hours</p>
                  <p className="text-sm text-gray-500">Monday – Friday: 8:00 AM – 5:00 PM</p>
                  <p className="text-sm text-gray-500">Saturday: 9:00 AM – 1:00 PM</p>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-[#0A0534] rounded-3xl p-10">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">General Inquiries</p>
            <h3 className="text-2xl font-bold text-white mb-6">Not sure which desk to call?</h3>
            <div className="space-y-4">
              <a
                href="tel:+254729114444"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#E8192C]/20 transition-colors">
                  <Phone fontSize="small" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Call Centre</p>
                  <p className="font-semibold">+254 729 114 444</p>
                </div>
              </a>
              <a
                href="mailto:contactcentre@choice-bank.com"
                className="flex items-center gap-4 text-gray-300 hover:text-white transition-colors group"
              >
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center shrink-0 group-hover:bg-[#E8192C]/20 transition-colors">
                  <Email fontSize="small" />
                </div>
                <div>
                  <p className="text-xs text-gray-500 uppercase tracking-widest">Email</p>
                  <p className="font-semibold">contactcentre@choice-bank.com</p>
                </div>
              </a>
            </div>
            <div className="mt-8 pt-8 border-t border-white/10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 text-sm text-gray-400 hover:text-white transition-colors group"
              >
                View full contact page
                <ArrowForward fontSize="small" className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
