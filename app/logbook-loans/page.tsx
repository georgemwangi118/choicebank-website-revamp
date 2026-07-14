'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { sendEmail } from '@/lib/sendEmail';
import { ArrowForward, CheckCircleOutlined, DirectionsCar, Bolt, Shield, MonetizationOn } from '@mui/icons-material';
import bg from '@/public/assets/loans/bg1.png';

const highlights = [
  { icon: MonetizationOn, title: 'Up to Ksh 5 Million', description: 'Borrow up to 60% of your vehicle\'s value depending on year of manufacture, make and condition.' },
  { icon: Bolt, title: '6 to 12 Hour TAT', description: 'Once your documents are verified and checks are completed, funds are disbursed fast — often the same day.' },
  { icon: DirectionsCar, title: 'Keep driving your car', description: 'Your vehicle stays with you throughout the loan period. We only hold the logbook as security.' },
  { icon: Shield, title: 'Vehicles from 2009 and above', description: 'We consider vehicles from year of manufacture 2009 upward, assessed on condition and client financials.' },
];

const loanTerms = [
  { label: 'Loan amount', value: 'Up to Ksh 6M' },
  { label: 'Loan period', value: 'Up to 48 months' },
  { label: 'Financing coverage', value: 'Up to 80%' },
  { label: 'Turnaround time', value: '6 – 12 hours' },
  { label: 'Vehicle YOM', value: '2004 and above' },
  { label: 'Affordable', value: 'Available' },
];

const eligibility = [
  'Valid National ID',
  'Vehicle registered with logbook available',
  'Vehicle from year of manufacture 2004 and above',
  'Motor insurance cover in place',
  'Proof of income',
];

const documents = [
  'Original logbook (vehicle registration certificate)',
  'National ID or Passport',
  'KRA PIN Certificate',
  'Motor insurance certificate',
  'Latest 6 months Bank/M-Pesa statements',
];

const steps = [
  { number: '01', title: 'Apply online or at a branch', description: 'Submit your details and upload your documents digitally, or visit any Choice Bank branch to get started.' },
  { number: '02', title: 'Loan offer issued', description: 'Receive a formal offer within hours. Review the amount, rate, and repayment schedule at no obligation.' },
  { number: '03', title: 'Receive funds', description: 'Accept the offer, hand over the logbook, and funds are disbursed directly to your account.' },
];

const buyoffTerms = [
  'Loan amount of up to Ksh 6M gross',
  'Loan period of up to 48 months',
  'Vehicle YOM: 2004 and above',
  'Client must have paid at least 50% of principal without default',
  'Up to 50% financing depending on YOM, make and condition',
];

function scrollToForm() {
  document.getElementById('apply-form')?.scrollIntoView({ behavior: 'smooth' });
}

export default function LogbookLoansPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    vehicleMake: '',
    vehicleYear: '',
    amount: '',
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
        subject: `Logbook Loan Application — ${form.name}`,
        formTitle: 'Logbook Loan Application',
        replyTo: form.email || undefined,
        fields: [
          { label: 'Full Name', value: form.name },
          { label: 'Phone Number', value: form.phone },
          { label: 'Email Address', value: form.email },
          { label: 'Vehicle Make & Model', value: form.vehicleMake },
          { label: 'Year of Manufacture', value: form.vehicleYear },
          { label: 'Loan Amount Needed', value: form.amount },
          { label: 'Additional Information', value: form.message },
        ],
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', phone: '', email: '', vehicleMake: '', vehicleYear: '', amount: '', message: '' });
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
          src={bg}
          alt="Hero background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Logbook Loans</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Unlock cash from your vehicle.
          </h1>
          <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-10">
            A motor vehicle-secured loan supported by a valid logbook registered in your name. Use the funds for personal, business or development needs — while you keep driving.
          </p>
          <div className="flex flex-wrap gap-4">
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all group"
            >
              Apply for a Logbook Loan
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

      {/* Loan terms strip */}
      <div className="py-16 px-6 md:px-16 bg-[#E8192C]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {loanTerms.map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-lg font-bold text-[#0A0534]">{value}</p>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Key highlights */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Why choose us</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">Fast cash, simple terms.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map(({ icon: Icon, title, description }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100">
                <div className="w-12 h-12 rounded-xl bg-[#E8192C]/10 flex items-center justify-center mb-5">
                  <Icon className="text-[#E8192C]" />
                </div>
                <h3 className="font-bold text-[#0A0534] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Eligibility & Documents */}
      <div className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12">
          <div className="bg-[#F7F8F8] rounded-3xl p-10">
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

      {/* Loan Buyoff */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Loan Buyoff</p>
            <h2 className="text-4xl font-bold text-[#0A0534] mb-4">Move your existing logbook loan.</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              A logbook loan product designed to buy off an existing facility from another MFI or bank. It helps qualifying customers transfer their loan after demonstrating a strong repayment history.
            </p>
            <button
              onClick={scrollToForm}
              className="inline-flex items-center gap-2 bg-[#0A0534] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#E8192C] transition-colors group"
            >
              Request Loan Buyoff
              <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
            </button>
          </div>
          <div className="space-y-3">
            {buyoffTerms.map((term) => (
              <div key={term} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100">
                <CheckCircleOutlined className="text-[#E8192C] shrink-0 mt-0.5" fontSize="small" />
                <p className="text-sm text-gray-600 leading-relaxed">{term}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* How it works */}
      <div className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">How it works</p>
            <h2 className="text-4xl font-bold text-[#0A0534] mb-4">Apply today. Funds today.</h2>
            <p className="text-gray-500 leading-relaxed">
              The entire process — from application to disbursement — is designed to take between 6 and 12 hours for straightforward cases with complete documents.
            </p>
          </div>
          <div className="space-y-0 divide-y divide-gray-200">
            {steps.map(({ number, title, description }) => (
              <div key={number} className="flex gap-6 py-6">
                <span className="text-3xl font-bold text-gray-200 w-12 shrink-0">{number}</span>
                <div>
                  <h3 className="font-semibold text-[#0A0534] mb-1">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Application Form */}
      <div id="apply-form" className="py-24 px-6 md:px-16 bg-[#0A0534]">
        <div className="max-w-3xl mx-auto">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Apply Now</p>
          <h2 className="text-4xl font-bold text-white mb-3">Start your application.</h2>
          <p className="text-gray-400 mb-10">Fill in your details below and a Choice Bank loan officer will contact you within hours.</p>

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
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Kamau"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8192C] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="07XX XXX XXX"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8192C] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@email.com"
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8192C] transition-colors"
                />
              </div>

              <div className="grid md:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Vehicle Make & Model *</label>
                  <input
                    type="text"
                    name="vehicleMake"
                    required
                    value={form.vehicleMake}
                    onChange={handleChange}
                    placeholder="e.g. Toyota Fielder"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8192C] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-300 mb-2">Year of Manufacture *</label>
                  <input
                    type="number"
                    name="vehicleYear"
                    required
                    value={form.vehicleYear}
                    onChange={handleChange}
                    placeholder="e.g. 2015"
                    min="2004"
                    max="2025"
                    className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8192C] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Loan Amount Needed (Ksh) *</label>
                <select
                  name="amount"
                  required
                  value={form.amount}
                  onChange={handleChange}
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-[#E8192C] transition-colors appearance-none"
                >
                  <option value="" className="bg-[#0A0534]">Select a range</option>
                  <option value="Under 500K" className="bg-[#0A0534]">Under Ksh 500,000</option>
                  <option value="500K - 1M" className="bg-[#0A0534]">Ksh 500,000 – 1,000,000</option>
                  <option value="1M - 2M" className="bg-[#0A0534]">Ksh 1,000,000 – 2,000,000</option>
                  <option value="2M - 4M" className="bg-[#0A0534]">Ksh 2,000,000 – 4,000,000</option>
                  <option value="Above 4M" className="bg-[#0A0534]">Above Ksh 4,000,000</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-gray-300 mb-2">Additional Information</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Any other details about your vehicle or loan purpose..."
                  className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-[#E8192C] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#E8192C] text-white py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-colors flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Submitting…' : 'Submit Application'}
                {!submitting && <ArrowForward className="group-hover:translate-x-1 transition-transform" />}
              </button>

              {submitError && (
                <p className="text-sm text-red-400 text-center">{submitError}</p>
              )}

              <p className="text-xs text-gray-500 text-center">
                By submitting, you agree that a Choice Bank representative may contact you regarding your application. Your data is handled in accordance with CBK regulations.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
