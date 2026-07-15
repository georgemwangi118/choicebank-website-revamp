'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { sendEmail } from '@/lib/sendEmail';
import { ArrowForward, CheckCircleOutlined, SwapHoriz, Verified, Speed, SupportAgent } from '@mui/icons-material';

const eligibility = [
  'Must have an active logbook loan with another MFI or bank',
  'Must have paid at least 50% of the principal without default',
  'Vehicle Year of Manufacture: 2004 and above',
  'Up to 50% financing depending on YOM, make and condition',
  'Loan amount of up to Ksh 5M gross',
  'Loan period of up to 18 months',
];

const documents = [
  'Original logbook (vehicle registration certificate)',
  'National ID or Passport',
  'KRA PIN Certificate',
  'Motor insurance certificate',
  'Latest 6 months Bank/M-Pesa statements',
  'Existing loan statement from current lender',
  'Letter of introduction from current lender (if required)',
];

const reasons = [
  { icon: SwapHoriz, title: 'Competitive Rates', description: 'Move to a better rate and reduce your monthly repayment burden.' },
  { icon: Speed, title: 'Fast Processing', description: 'We assess and process buyoff applications with a TAT of 6–12 hours.' },
  { icon: Verified, title: 'CBK Licensed', description: 'Transact with confidence under a fully regulated, CBK-licensed bank.' },
  { icon: SupportAgent, title: 'Dedicated Support', description: 'A loan officer guides you through the entire transfer process.' },
];

const steps = [
  { number: '01', title: 'Submit Your Application', description: 'Fill in the buyoff application form below with your vehicle and loan details.' },
  { number: '02', title: 'Verification & Offer', description: 'We verify your existing loan balance and repayment history, then issue a formal offer.' },
  { number: '03', title: 'Settlement & Transfer', description: 'We settle your outstanding balance with the current lender and transfer the logbook.' },
  { number: '04', title: 'New Loan Begins', description: 'Your new Choice Bank loan kicks in with the agreed terms. Keep driving.' },
];

function scrollToForm() {
  document.getElementById('buyoff-form')?.scrollIntoView({ behavior: 'smooth' });
}

export default function LoanBuyoffPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleMake: '',
    vehicleYear: '',
    currentLender: '',
    outstandingBalance: '',
    message: '',
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');
    try {
      await sendEmail({
        to: 'sales@choice-bank.com',
        subject: `Loan Buyoff Application — ${form.name}`,
        formTitle: 'Loan Buyoff Application',
        replyTo: form.email || undefined,
        fields: [
          { label: 'Full Name', value: form.name },
          { label: 'Phone Number', value: form.phone },
          { label: 'Email Address', value: form.email },
          { label: 'Vehicle Make & Model', value: form.vehicleMake },
          { label: 'Year of Manufacture', value: form.vehicleYear },
          { label: 'Current Lender', value: form.currentLender },
          { label: 'Outstanding Balance (Ksh)', value: form.outstandingBalance },
          { label: 'Additional Information', value: form.message },
        ],
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', phone: '', email: '', vehicleMake: '', vehicleYear: '', currentLender: '', outstandingBalance: '', message: '' });
      }, 5000);
    } catch {
      setSubmitError('Something went wrong. Please call us directly or try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-[#0A0534] pt-40 pb-24 px-6 md:px-16 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=1600&q=80&fit=crop"
          alt="Loan Buyoff"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-20"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Loan Buyoff</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Move your logbook loan<br />to Choice Bank.
          </h1>
          <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-10">
            Already repaying a logbook loan elsewhere? Transfer it to Choice Bank and enjoy better terms, a dedicated loan officer, and a faster, simpler experience.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all group"
            >
              Apply for Buyoff
              <ArrowForward className="group-hover:translate-x-1 transition-transform" />
            </button>
            <Link
              href="/sales"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Speak to an advisor
            </Link>
          </div>
        </div>
      </div>

      {/* Why move */}
      <div className="py-16 px-6 md:px-16 bg-[#E8192C]/10">
        <div className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {reasons.map(({ icon: Icon, title, description }) => (
            <div key={title} className="flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-[#E8192C]/20 flex items-center justify-center shrink-0">
                <Icon className="text-[#E8192C]" fontSize="small" />
              </div>
              <div>
                <p className="font-bold text-[#0A0534] text-sm mb-1">{title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Eligibility & Documents */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-white rounded-3xl p-10 border border-gray-100">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Eligibility</p>
            <h2 className="text-2xl font-bold text-[#0A0534] mb-6">Do you qualify?</h2>
            <ul className="space-y-4">
              {eligibility.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-600">
                  <CheckCircleOutlined className="text-[#E8192C] shrink-0 mt-0.5" fontSize="small" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-[#0A0534] rounded-3xl p-10">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Documents needed</p>
            <h2 className="text-2xl font-bold text-white mb-6">What to bring.</h2>
            <ul className="space-y-4">
              {documents.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-gray-300">
                  <CheckCircleOutlined className="text-[#E8192C] shrink-0 mt-0.5" fontSize="small" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-4xl font-bold text-[#0A0534] mb-4">Simple transfer. No disruption.</h2>
            <p className="text-gray-500 leading-relaxed">
              We handle the settlement with your current lender so you don&apos;t have to. Most transfers are completed within 48 hours of approval.
            </p>
          </div>
          <div className="flex flex-col gap-0">
            {steps.map(({ number, title, description }, i) => (
              <div key={number} className="flex gap-5">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full bg-[#0A0534] flex items-center justify-center shrink-0 shadow-md">
                    <span className="text-sm font-bold text-white">{number}</span>
                  </div>
                  {i < steps.length - 1 && (
                    <div className="w-0.5 flex-1 bg-gradient-to-b from-[#0A0534] to-[#E8192C]/30 my-1 min-h-[40px]" />
                  )}
                </div>
                <div className="pb-8">
                  <h3 className="font-semibold text-[#0A0534] mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div id="buyoff-form" className="py-24 px-6 md:px-16 bg-[#0A0534]">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Apply Now</p>
          <h2 className="text-4xl font-bold text-white mb-3">Start your buyoff application.</h2>
          <p className="text-gray-400 mb-10">Fill in your details and a Choice Bank loan officer will contact you within 6–12 hours.</p>

          {submitted ? (
            <div className="bg-white/10 border border-white/20 rounded-3xl p-12 text-center">
              <CheckCircleOutlined className="text-[#E8192C] mb-4" sx={{ fontSize: 48 }} />
              <h3 className="text-2xl font-bold text-white mb-3">Application received.</h3>
              <p className="text-gray-400">Thank you, {form.name}. Our team will reach out to you on {form.phone} within 6–12 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Full Name *</label>
                  <input
                    type="text" name="name" required value={form.name} onChange={handleChange}
                    placeholder="John Kamau"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8192C] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Phone Number *</label>
                  <input
                    type="tel" name="phone" required value={form.phone} onChange={handleChange}
                    placeholder="07XX XXX XXX"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8192C] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Email Address</label>
                <input
                  type="email" name="email" value={form.email} onChange={handleChange}
                  placeholder="john@email.com"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8192C] transition-colors"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Vehicle Make & Model *</label>
                  <input
                    type="text" name="vehicleMake" required value={form.vehicleMake} onChange={handleChange}
                    placeholder="e.g. Toyota Fielder"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8192C] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Year of Manufacture *</label>
                  <input
                    type="number" name="vehicleYear" required value={form.vehicleYear} onChange={handleChange}
                    placeholder="e.g. 2016" min="2014" max="2025"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8192C] transition-colors"
                  />
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Current Lender *</label>
                  <input
                    type="text" name="currentLender" required value={form.currentLender} onChange={handleChange}
                    placeholder="e.g. Mwananchi Credit"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8192C] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Outstanding Balance (Ksh) *</label>
                  <select
                    name="outstandingBalance" required value={form.outstandingBalance} onChange={handleChange}
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E8192C] transition-colors appearance-none"
                  >
                    <option value="" className="bg-[#0A0534]">Select a range</option>
                    <option value="Under 500K" className="bg-[#0A0534]">Under Ksh 500,000</option>
                    <option value="500K – 1M" className="bg-[#0A0534]">Ksh 500,000 – 1,000,000</option>
                    <option value="1M – 2M" className="bg-[#0A0534]">Ksh 1,000,000 – 2,000,000</option>
                    <option value="2M – 4M" className="bg-[#0A0534]">Ksh 2,000,000 – 4,000,000</option>
                    <option value="Above 4M" className="bg-[#0A0534]">Above Ksh 4,000,000</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Additional Information</label>
                <textarea
                  name="message" value={form.message} onChange={handleChange} rows={3}
                  placeholder="Any other details about your current loan or vehicle..."
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8192C] transition-colors resize-none"
                />
              </div>

              <button
                type="submit" disabled={submitting}
                className="w-full bg-[#E8192C] text-white py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-colors flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Submitting…' : 'Submit Buyoff Application'}
                {!submitting && <ArrowForward className="group-hover:translate-x-1 transition-transform" />}
              </button>

              {submitError && <p className="text-sm text-red-400 text-center">{submitError}</p>}

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree that a Choice Bank representative may contact you. Your data is handled in accordance with CBK regulations.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
