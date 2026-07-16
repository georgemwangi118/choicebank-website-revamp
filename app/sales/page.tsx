'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import { sendEmail } from '@/lib/sendEmail';
import {
  Phone,
  Email,
  WhatsApp,
  LocationOn,
  ArrowForward,
  CheckCircleOutlined,
  AccessTime,
} from '@mui/icons-material';
import bg from '@/public/handshake.jpg'



const promises = [
  'A sales advisor picks up your enquiry, not a bot',
  'Response within 20 minutes during business hours',
  'No obligation, just an honest conversation about your options',
  'Confidential. Your details are never shared outside Choice Bank',
];

const productOptions = [
  'Logbook Loan',
  'Asset Finance Loan',
  'MOTI 80% Asset Finance',
  'Auction Refinancing',
  'Choice Business Loan',
  'Solari (Solar) Loan',
  'Fixed Deposit Loan',
  'Insurance Premium Financing',
  'Emergency Loan',
  'Loan Buyoff',
  'Remittance / CNY Express',
  'API Banking / BaaS',
  'Other',
];

export default function SalesPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    product: '',
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
        subject: `Sales Enquiry — ${form.product} — ${form.name}`,
        formTitle: 'Sales Advisor Enquiry',
        replyTo: form.email || undefined,
        fields: [
          { label: 'Full Name', value: form.name },
          { label: 'Phone Number', value: form.phone },
          { label: 'Email Address', value: form.email },
          { label: 'Product of Interest', value: form.product },
          { label: 'Loan Amount Needed', value: form.amount },
          { label: 'Additional Details', value: form.message },
        ],
      });
      setSubmitted(true);
      setTimeout(() => {
        setSubmitted(false);
        setForm({ name: '', phone: '', email: '', product: '', amount: '', message: '' });
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
          alt="Sales advisor background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Contact Us</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Talk to someone who<br />knows your product.
          </h1>
          <p className="text-gray-400 text-xl max-w-xl leading-relaxed mb-10">
            Our sales advisors are specialists not generalists. Reach the right desk directly and get answers about loan terms, eligibility, and what you qualify for.
          </p>
          <a
            href="https://wa.me/254110123123"
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

     

      {/* Application Form */}
      <div id="contact-sales" className="py-24 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          {/* Left: context */}
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Get in Touch</p>
            <h2 className="text-4xl font-bold text-[#0A0534] mb-6">Leave your details.<br />We&apos;ll call you back.</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Not ready to call? Fill in the form and a sales advisor will reach out within 2 hours during business hours. Tell us what product you&apos;re interested in and we&apos;ll come prepared.
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
                  <p className="text-sm text-gray-500">Monday – Friday: 8:00 AM – 4:00 PM</p>
                  <p className="text-sm text-gray-500">Saturday: 9:00 AM – 12:00 PM</p>
                  <p className="text-sm text-gray-500">Public Holidays and Sundays: Closed</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-[#F7F8F8] rounded-3xl p-10 border border-gray-100">
            {submitted ? (
              <div className="flex flex-col items-center justify-center text-center py-12">
                <CheckCircleOutlined className="text-[#E8192C] mb-4" sx={{ fontSize: 52 }} />
                <h3 className="text-2xl font-bold text-[#0A0534] mb-3">Enquiry received!</h3>
                <p className="text-gray-500 text-sm max-w-xs leading-relaxed">
                  Thank you, {form.name}. A sales advisor will call you on <strong>{form.phone}</strong> within 2 hours.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Full Name *</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="John Kamau"
                      className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#E8192C] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Phone Number *</label>
                    <input
                      required
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="07XX XXX XXX"
                      className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#E8192C] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="john@email.com"
                    className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#E8192C] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Product of Interest *</label>
                  <select
                    required
                    name="product"
                    value={form.product}
                    onChange={handleChange}
                    className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#E8192C] transition-colors"
                  >
                    <option value="">Select a product</option>
                    {productOptions.map((p) => (
                      <option key={p} value={p}>{p}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Loan Amount Needed (Ksh)</label>
                  <select
                    name="amount"
                    value={form.amount}
                    onChange={handleChange}
                    className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#E8192C] transition-colors"
                  >
                    <option value="">Select a range</option>
                    <option value="Under 500K">Under Ksh 500,000</option>
                    <option value="500K – 1M">Ksh 500,000 – 1,000,000</option>
                    <option value="1M – 2M">Ksh 1,000,000 – 2,000,000</option>
                    <option value="2M – 4M">Ksh 2,000,000 – 4,000,000</option>
                    <option value="Above 4M">Above Ksh 4,000,000</option>
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Additional Details</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Tell us more about what you need..."
                    className="w-full border border-gray-300 bg-white rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-400 focus:outline-none focus:border-[#E8192C] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#E8192C] text-white py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-colors flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending…' : 'Request a Callback'}
                  {!submitting && <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />}
                </button>

                {submitError && (
                  <p className="text-sm text-red-500 text-center">{submitError}</p>
                )}

                <p className="text-xs text-gray-400 text-center">
                  A Choice Bank sales advisor will contact you within 2 hours. Your information is handled in accordance with CBK regulations.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>

      {/* General inquiries */}
      <div className="py-16 px-6 md:px-16 bg-[#0A0534]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">General Inquiries</p>
            <h3 className="text-2xl font-bold text-white mb-4">Not sure which desk to call?</h3>
            <p className="text-gray-400 text-sm leading-relaxed">Our main contact centre handles all incoming queries and routes you to the right specialist.</p>
          </div>
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
            <div className="pt-4 border-t border-white/10">
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
