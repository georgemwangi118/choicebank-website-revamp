'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowForward, CheckCircleOutlined, Close, DirectionsCar, Gavel } from '@mui/icons-material';
import { sendEmail } from '@/lib/sendEmail';
import bg from '@/public/assets/loans/asset-finance.png';

const assetTypes = [
  {
    icon: DirectionsCar,
    title: 'Asset Finance Loan',
    description: 'Financing for customers purchasing a vehicle or asset from a yard, individual seller or company. Supports both fresh financing and hire purchase arrangements.',
    examples: ['Vehicles from YOM 2004 and above', 'Interest: from 1.5% p.m.', 'Up to Ksh 6M ', 'Up to 24 months'],
  },
  {
    icon: DirectionsCar,
    title: 'MOTI-80 Asset Finance',
    description: 'A higher-limit asset finance option for qualifying customers and newer vehicles. Designed for stronger financial profiles that meet the stated eligibility criteria.',
    examples: ['Up to 80% of forced value', 'Interest: from 1.5% p.m.', 'YOM 2018 and above', 'up to 48 months'],
  },
  {
    icon: Gavel,
    title: 'Auction Refinancing',
    description: 'Finance for customers acquiring repossessed vehicles through organizational auctions. Helps qualifying buyers meet the purchase balance after paying the required deposit.',
    examples: ['50% deposit required', 'Loan: 50% of selling price', 'Up to 18 months', 'Interest: from 1.5% p.m.'],
  },
];

const requirements = [
  'Completed loan application form',
  'National ID / Passport (individual) or Certificate of Incorporation (business)',
  'KRA PIN Certificate',
  'Latest 6 months bank statements',
  'Proforma invoice or valuation for the asset',
  'Proof of income or audited accounts (for businesses)',
];

const steps = [
  { number: '01', title: 'Submit Your Application', description: 'Complete our online application form and provide the required documents for assessment' },
  { number: '02', title: 'Loan offer and Agreement', description: 'Once approved, receive a clear offer outlining the financing amount, rate, repayment period and terms. Review and sign the agreement.' },
  { number: '03', title: 'Disbursement', description: 'After final verification, funds are disbursed directly to you.' },
];

const emptyForm = { name: '', phone: '', email: '', assetType: '', assetValue: '', message: '' };

function ApplicationModal({ onClose, loanType }: { onClose: () => void; loanType: string }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [form, setForm] = useState(emptyForm);

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
        subject: `Asset Finance Application — ${loanType} — ${form.name}`,
        formTitle: `${loanType} Application`,
        replyTo: form.email,
        fields: [
          { label: 'Full Name', value: form.name },
          { label: 'Phone Number', value: form.phone },
          { label: 'Email Address', value: form.email },
          { label: 'Asset Type', value: form.assetType },
          { label: 'Estimated Asset Value', value: form.assetValue },
          { label: 'Additional Notes', value: form.message },
        ],
      });
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please try again or email sales@choice-bank.com directly.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl shadow-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="bg-[#0A0534] rounded-t-3xl px-8 pt-8 pb-6">
          <button onClick={onClose} className="absolute top-5 right-5 text-white/60 hover:text-white transition-colors">
            <Close />
          </button>
          <p className="text-xs font-semibold text-[#E8192C] uppercase tracking-widest mb-1">Asset Finance Application</p>
          <h2 className="text-2xl font-bold text-white">{loanType}</h2>
        </div>

        <div className="px-8 py-6">
          {submitted ? (
            <div className="flex flex-col items-center text-center py-8">
              <div className="w-16 h-16 rounded-full bg-[#E8192C]/10 flex items-center justify-center mb-4">
                <CheckCircleOutlined className="text-[#E8192C] text-3xl" />
              </div>
              <h3 className="text-xl font-bold text-[#0A0534] mb-2">Application Received!</h3>
              <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
                Our sales team will get back to you shortly. We look forward to helping you.
              </p>
              <button onClick={onClose} className="mt-6 bg-[#0A0534] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#E8192C] transition-colors duration-300">
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Full Name *</label>
                <input required name="name" value={form.name} onChange={handleChange} placeholder="John Kamau"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0534] placeholder-gray-300 focus:outline-none focus:border-[#E8192C] transition-colors" />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Phone Number *</label>
                  <input required name="phone" value={form.phone} onChange={handleChange} placeholder="07XX XXX XXX"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0534] placeholder-gray-300 focus:outline-none focus:border-[#E8192C] transition-colors" />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Email Address</label>
                  <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@email.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0534] placeholder-gray-300 focus:outline-none focus:border-[#E8192C] transition-colors" />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Asset Type *</label>
                <select required name="assetType" value={form.assetType} onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0534] focus:outline-none focus:border-[#E8192C] transition-colors">
                  <option value="">Select asset type</option>
                  <option>Motor Vehicle</option>
                  <option>Commercial Vehicle / Truck</option>
                  <option>Others</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">How much are you looking for (Ksh) *</label>
                <input required name="assetValue" value={form.assetValue} onChange={handleChange} placeholder="e.g. 1,500,000"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0534] placeholder-gray-300 focus:outline-none focus:border-[#E8192C] transition-colors" />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Additional Notes</label>
                <textarea name="message" value={form.message} onChange={handleChange} rows={3} placeholder="Any other details..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0534] placeholder-gray-300 focus:outline-none focus:border-[#E8192C] transition-colors resize-none" />
              </div>

              <button type="submit" disabled={submitting}
                className="w-full bg-[#0A0534] text-white py-4 rounded-full font-semibold hover:bg-[#E8192C] transition-colors duration-300 flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed">
                {submitting ? 'Sending…' : 'Submit Application'}
                {!submitting && <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />}
              </button>

              {submitError && <p className="text-sm text-red-500 text-center">{submitError}</p>}
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function AssetFinancePage() {
  const [modalLoan, setModalLoan] = useState<string | null>(null);

  function openModal(loanType: string) { setModalLoan(loanType); }
  function closeModal() { setModalLoan(null); }

  return (
    <div className="min-h-screen bg-white">
      {modalLoan && <ApplicationModal onClose={closeModal} loanType={modalLoan} />}

      {/* Hero */}
      <div className="bg-[#0A0534]/90 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center pl-6 md:pl-16">
          {/* Left: text */}
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Asset Finance Loans</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Drive now, Pay later.
            </h1>
            <p className="text-white/70 text-xl max-w-xl leading-relaxed mb-10">
              Finance new and used personal vehicles and income-generating assets with our flexible Asset Financing solution. Tailored financing to help you achieve your personal and business goals.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => openModal('Asset Finance Loan')}
                className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all group"
              >
                Apply Now
                <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
              </button>
              <Link
                href="/sales"
                className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Speak to a loan officer
              </Link>
            </div>
          </div>
          {/* Right: image flush to edge */}
          <div className="relative w-full h-[380px] md:h-[560px] rounded-l-3xl overflow-hidden">
            <Image
              src={bg}
              alt="Asset Finance"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl text-center font-bold text-[#0A0534] mb-10">More than just a loan.</h2>
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {[
              { stat: 'Access Up to Ksh 6M' },
              { stat: 'Get upto 80% financing' },
              { stat: 'Approval Under 6 Hours' },
              { stat: 'Flexible Repayment Plan' },
              { stat: 'Affordable Rates' },
            ].map(({ stat }) => (
              <div key={stat} className="bg-[#F7F8F8] rounded-2xl p-6 border border-gray-100 hover:border-[#E8192C]/30 hover:shadow-md transition-all duration-300">
                <p className="text-base font-bold text-[#0A0534] mb-1">{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Asset types */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">What we finance</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">Choose the financing option that supports your next move.</h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {assetTypes.map(({ icon: Icon, title, description, examples }) => (
              <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100 flex flex-col">
                <div className="w-12 h-12 rounded-xl bg-[#E8192C]/10 flex items-center justify-center mb-5">
                  <Icon className="text-[#E8192C]" />
                </div>
                <h3 className="font-bold text-[#0A0534] mb-2">{title}</h3>
                <p className="text-sm text-gray-500 mb-4 leading-relaxed">{description}</p>
                <ul className="space-y-1 mb-6 flex-1">
                  {examples.map((e) => (
                    <li key={e} className="text-xs text-gray-500 flex items-center gap-2">
                      <span className="w-1 h-1 rounded-full bg-[#E8192C] shrink-0" />
                      {e}
                    </li>
                  ))}
                </ul>
                <button
                  onClick={() => openModal(title)}
                  className="mt-auto inline-flex items-center gap-2 bg-[#0A0534] text-white px-6 py-3 rounded-full text-sm font-semibold hover:bg-[#E8192C] transition-colors duration-300 group w-fit"
                >
                  Apply now
                  <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
                </button>
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
            <h2 className="text-4xl font-bold text-[#0A0534] mb-4">Simple and hassle-free process</h2>
            <p className="text-gray-500 leading-relaxed">
              From application to approval, our streamlined process makes it easy to access the financing you need with confidence.
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

      {/* Requirements */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Requirements</p>
            <h2 className="text-4xl font-bold text-[#0A0534] mb-4">What you need to apply.</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Gather these documents before you apply to speed up the process. Our team is available to clarify anything you&apos;re unsure about.
            </p>
            <button
              onClick={() => openModal('Asset Finance Loan')}
              className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all group"
            >
              Apply Now
              <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
            </button>
          </div>
          <div className="space-y-3">
            {requirements.map((req) => (
              <div key={req} className="flex items-start gap-4 bg-white p-4 rounded-xl border border-gray-100">
                <CheckCircleOutlined className="text-[#E8192C] shrink-0 mt-0.5" fontSize="small" />
                <p className="text-sm text-gray-600 leading-relaxed">{req}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
