'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';
import { sendEmail } from '@/lib/sendEmail';
import {
  ArrowForward,
  CheckCircleOutlined,
  Close,
} from '@mui/icons-material';
import bg from '@/public/assets/loans/money.png'
import solar from '@/public/assets/loans/solar.jpeg'
import lorry from '@/public/assets/loans/lorry.png'
import img5 from '@/public/assets/loans/img5.jpeg'
import img4 from '@/public/assets/loans/img4.jpeg'
import img6 from '@/public/assets/loans/img6.jpeg'
import img2 from '@/public/assets/loans/img2.jpeg'

const loanProducts = [
  {
    image: img5,
    title: 'Logbook Loan',
    description: 'A motor vehicle-secured loan supported by a valid logbook registered in the borrower\'s name. Use the funds for personal, business or development needs while leveraging vehicle ownership.',
    cta: 'Apply for a Logbook Loan',
    accent: 'border-[#0A0534]',
  },
  {
    image: lorry,
    title: 'Asset Finance Loan',
    description: 'Financing for customers purchasing an asset from a yard, individual seller or company. Supports both fresh financing and hire purchase arrangements from yards.',
    cta: 'Finance Your Asset',
    accent: 'border-[#E8192C]',
  },
  {
    image: img4,
    title: 'Choice Business Loan',
    description: 'A retail financing solution for Choice Bank account holders who need funds for business expansion, education, emergencies, vehicle purchases or other financial goals.',
    cta: 'Apply for a Business Loan',
    accent: 'border-[#E8192C]',
  },
  {
    image: img6,
    title: 'Check-Off Loan',
    description: 'Access convenient financing with repayments deducted directly from your salary. It is a simple, reliable solution designed to help you meet personal needs, manage emergencies, or achieve important goals with ease.',
    cta: 'Apply for a Check-Off Loan',
    accent: 'border-[#0A0534]',
  },
  {
    image: solar,
    title: 'Solari Loan',
    description: 'A green energy loan for complete solar solutions for homes, schools, churches, hotels, restaurants and SMEs. Supports customers who want a reliable solar package.',
    cta: 'Explore Solar Financing',
    accent: 'border-[#E8192C]',
  },
  {
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80&fit=crop',
    title: 'Fixed Deposit Loan',
    description: 'A secured loan that allows customers to access financing using an active Choice Bank fixed deposit as collateral, while keeping the savings structure in place.',
    cta: 'Use Your FD as Security',
    accent: 'border-[#0A0534]',
  },


  {
    image: img2,
    title: 'Title Deed Loan',
    tagline: 'Extra support for existing clients.',
    description: 'Unlock the financial value of your property and access funding for business growth, personal projects, or major investments. Your title deed gives you the opportunity to secure flexible financing while keeping ownership of your property.',
    cta: 'Request for Title Deed Loan',
    accent: 'border-[#E8192C]',
  },
 
];

interface ModalState {
  open: boolean;
  loanType: string;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  amount: string;
  message: string;
}

function LoanModal({ loanType, onClose }: { loanType: string; onClose: () => void }) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [form, setForm] = useState<FormState>({ name: '', phone: '', email: '', amount: '', message: '' });

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
        subject: `Loan Application — ${loanType} — ${form.name}`,
        formTitle: `${loanType} Application`,
        replyTo: form.email || undefined,
        fields: [
          { label: 'Full Name', value: form.name },
          { label: 'Phone Number', value: form.phone },
          { label: 'Email Address', value: form.email },
          { label: 'Loan Amount Needed', value: form.amount },
          { label: 'Additional Details', value: form.message },
        ],
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', phone: '', email: '', amount: '', message: '' });
        onClose();
      }, 4000);
    } catch {
      setSubmitError('Something went wrong. Please call us directly or try again.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl w-full max-w-lg max-h-[90vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal header */}
        <div className="bg-[#0A0534] rounded-t-3xl px-8 py-6 flex items-start justify-between">
          <div>
            <p className="text-xs font-semibold text-[#E8192C] uppercase tracking-widest mb-1">Loan Application</p>
            <h3 className="text-xl font-bold text-white leading-snug">{loanType}</h3>
          </div>
          <button
            onClick={onClose}
            className="text-white/60 hover:text-white transition-colors mt-0.5 shrink-0"
          >
            <Close />
          </button>
        </div>

        <div className="px-8 py-6">
          {submitted ? (
            <div className="text-center py-8">
              <CheckCircleOutlined className="text-[#E8192C] mb-4" sx={{ fontSize: 48 }} />
              <h4 className="text-xl font-bold text-[#0A0534] mb-2">Application received.</h4>
              <p className="text-gray-500 text-sm">Thank you, {form.name}. A Choice Bank loan officer will contact you on {form.phone} within 6–12 hours.</p>
              <button
                onClick={onClose}
                className="mt-6 inline-flex items-center gap-2 bg-[#0A0534] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#E8192C] transition-colors text-sm"
              >
                Close
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Full Name *</label>
                  <input
                    type="text"
                    name="name"
                    required
                    value={form.name}
                    onChange={handleChange}
                    placeholder="John Kamau"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0534] placeholder-gray-300 focus:outline-none focus:border-[#E8192C] transition-colors"
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Phone Number *</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="07XX XXX XXX"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0534] placeholder-gray-300 focus:outline-none focus:border-[#E8192C] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Email Address</label>
                <input
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="john@email.com"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0534] placeholder-gray-300 focus:outline-none focus:border-[#E8192C] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Loan Amount Needed (Ksh) *</label>
                <select
                  name="amount"
                  required
                  value={form.amount}
                  onChange={handleChange}
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0534] focus:outline-none focus:border-[#E8192C] transition-colors appearance-none bg-white"
                >
                  <option value="">Select a range</option>
                  <option value="Under 500K">Under Ksh 500,000</option>
                  <option value="500K - 1M">Ksh 500,000 – 1,000,000</option>
                  <option value="1M - 2M">Ksh 1,000,000 – 2,000,000</option>
                  <option value="2M - 4M">Ksh 2,000,000 – 4,000,000</option>
                  <option value="Above 4M">Above Ksh 4,000,000</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5">Additional Details</label>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={3}
                  placeholder="Any other relevant information..."
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0534] placeholder-gray-300 focus:outline-none focus:border-[#E8192C] transition-colors resize-none"
                />
              </div>

              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-[#E8192C] text-white py-3.5 rounded-full font-semibold hover:bg-[#c4121e] transition-colors flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {submitting ? 'Submitting…' : 'Submit Application'}
                {!submitting && <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />}
              </button>

              {submitError && (
                <p className="text-sm text-red-500 text-center">{submitError}</p>
              )}

              <p className="text-xs text-gray-400 text-center">
                A Choice Bank loan officer will contact you within 6–12 hours. Your data is handled in accordance with CBK regulations.
              </p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LoansPage() {
  const [modal, setModal] = useState<ModalState>({ open: false, loanType: '' });

  function openModal(loanType: string) {
    setModal({ open: true, loanType });
  }

  function closeModal() {
    setModal({ open: false, loanType: '' });
  }

  function scrollToProducts() {
    document.getElementById('loan-products')?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Modal */}
      {modal.open && <LoanModal loanType={modal.loanType} onClose={closeModal} />}

      {/* Hero */}
      <div className="bg-[#0A0534] py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center pl-6 md:pl-16">
          {/* Left: text */}
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Loans & Financing</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Financing That Helps Us Grow Together
            </h1>
            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Explore flexible loan solutions designed to support your personal goals, business ambitions, and everyday financial needs. At Choice Microfinance Bank, we make access to financing simple, convenient, and tailored to help you move forward with confidence.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={scrollToProducts}
                className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all group"
              >
                Explore your options below
                <ArrowForward className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link
                href="/sales"
                className="inline-flex items-center gap-2 border border-white/30 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
              >
                Speak to a loan officer
              </Link>
            </div>
          </div>

          {/* Right: image flush to edge */}
          <div className="relative w-full h-[380px] md:h-[560px] rounded-l-3xl overflow-hidden shadow-2xl">
            <Image
              src={bg}
              alt="Loans"
              fill
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-center"
              priority
            />
          </div>
        </div>
      </div>

      {/* Loan products */}
      <div id="loan-products" className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-lg font-bold text-[#E8192C] uppercase tracking-widest mb-3">Loan products</p>
            <h2 className="text-4xl font-semibold text-[#0A0534]">Choose the financing option that supports your next move.</h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {loanProducts.map(({ image, title, description, cta, accent }) => (
              <div
                key={title}
                className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col group transition-all duration-300 hover:-translate-y-2 hover:shadow-xl hover:border-[#E8192C]/20"
              >
                {/* Image */}
                <div className="relative h-56 w-full overflow-hidden">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#0A0534]/40 group-hover:bg-[#0A0534]/50 transition-colors duration-300" />
                  
                </div>

                {/* Content */}
                <div className={`p-6 border-t-4 ${accent} flex flex-col flex-1`}>
                  <h3 className="font-bold text-[#0A0534] text-base mb-2 group-hover:text-[#E8192C] transition-colors duration-300">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5 flex-1">{description}</p>
                  <button
                    onClick={() => openModal(title)}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A0534] hover:text-[#E8192C] transition-colors group/btn"
                  >
                    {cta}
                    <ArrowForward className="group-hover/btn:translate-x-1 transition-transform" fontSize="small" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Loan buyoff callout */}
      <div className="py-16 px-6 md:px-16 bg-[#0A0534]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Loan Buyoff</p>
            <h2 className="text-4xl font-bold text-white mb-4">Already have a logbook loan elsewhere?</h2>
            <p className="text-gray-400 leading-relaxed">
              Move your existing logbook loan from another MFI or bank to Choice Bank. Qualifying customers must have paid at least 50% of principal without default. Vehicles from YOM 2004 and above.
            </p>
          </div>
          <div className="space-y-3">
            {[
              'Loan amount of up to Ksh 6M gross',
              'Loan period of up to 18 months',
              'Vehicle YOM: 2004 and above',
              'Client must have paid at least 50% of principal without default',
              'Up to 50% financing depending on YOM, make and condition',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                <CheckCircleOutlined className="text-[#E8192C] shrink-0 mt-0.5" fontSize="small" />
                {item}
              </div>
            ))}
            <div className="pt-4">
              <button
                onClick={() => openModal('Loan Buyoff')}
                className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c4121e] transition-colors group text-sm"
              >
                Request Loan Buyoff
                <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 md:px-16 bg-white text-center border-t border-gray-100">
        
        <h2 className="text-3xl font-bold text-[#0A0534] mb-4">Not sure which loan is right for you?</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">We&apos;ll match you to the right product for your situation.</p>
        <Link
          href="/sales"
          className="inline-flex items-center gap-2 bg-[#0A0534] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#E8192C] transition-colors group"
        >
          Speak to a Choice Bank Officer
          <ArrowForward className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
