'use client';

import { useState } from 'react';
import Image from 'next/image';
import { Phone, Email, LocationOn, ArrowForward } from '@mui/icons-material';
import { sendEmail } from '@/lib/sendEmail';

const contactDetails = [
  { icon: Phone, label: 'Phone', value: '+254 729 114 444' },
  { icon: Email, label: 'Email', value: 'contactcentre@choice-bank.com' },
  { icon: LocationOn, label: 'Address', value: 'Riverside Square, Riverside Drive, Nairobi — PO BOX 29796-00100' },
];

const inquiryTypes = [
  'Personal Account',
  'Business Account',
  'API Banking',
  'Loans',
  'Support Issue',
  'Partnership',
  'Other',
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');
  const [form, setForm] = useState({ name: '', email: '', phone: '', inquiry: '', message: '' });

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');
    try {
      await sendEmail({
        to: 'contactcentre@choice-bank.com',
        subject: `Contact Us — ${form.inquiry} — ${form.name}`,
        formTitle: 'Contact Us',
        replyTo: form.email,
        fields: [
          { label: 'Full Name', value: form.name },
          { label: 'Email Address', value: form.email },
          { label: 'Phone Number', value: form.phone },
          { label: 'Inquiry Type', value: form.inquiry },
          { label: 'Message', value: form.message },
        ],
      });
      setSubmitted(true);
    } catch {
      setSubmitError('Something went wrong. Please email us directly at contactcenter@choice-bank.com.');
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-[#0A0534] pt-40 pb-24 px-6 md:px-16 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1600&q=80&fit=crop"
          alt="Hero background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Contact us</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-2xl mb-6">
            Let&apos;s talk.
          </h1>
          <p className="text-gray-400 text-xl max-w-xl leading-relaxed">
            Whether you have a question about our products, want API access, or just need help — we&apos;re here and respond within one business day.
          </p>
        </div>
      </div>

      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          {/* Left: contact info */}
          <div>
            <h2 className="text-2xl font-bold text-[#0A0534] mb-8">Get in touch directly.</h2>
            <div className="space-y-6 mb-12">
              {contactDetails.map(({ icon: Icon, label, value }) => (
                <div key={label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-[#E8192C]/10 flex items-center justify-center shrink-0">
                    <Icon className="text-[#E8192C]" fontSize="small" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-1">{label}</p>
                    <p className="text-gray-700 text-sm leading-relaxed">{value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-[#0A0534] rounded-2xl p-8">
              <h3 className="font-semibold text-white mb-2">Business hours</h3>
              <p className="text-gray-400 text-sm leading-relaxed">
                Monday – Friday: 8:00 AM – 5:00 PM EAT<br />
                Saturday: 9:00 AM – 1:00 PM EAT<br />
                Sunday & Public Holidays: Closed
              </p>
              <p className="text-gray-500 text-sm mt-4">
                For urgent banking issues, call our 24/7 line: <span className="text-white font-medium">+254 729 114 444</span>
              </p>
            </div>
          </div>

          {/* Right: form */}
          <div className="bg-white rounded-3xl p-10 border border-gray-100 shadow-sm">
            {submitted ? (
              <div className="flex flex-col items-center justify-center h-full text-center py-8">
                <div className="w-16 h-16 rounded-full bg-[#E8192C]/10 flex items-center justify-center mb-6">
                  <ArrowForward className="text-[#E8192C] text-2xl" />
                </div>
                <h3 className="text-2xl font-bold text-[#0A0534] mb-3">Message received!</h3>
                <p className="text-gray-500 max-w-xs leading-relaxed">
                  We&apos;ll get back to you at <strong>{form.email}</strong> within one business day.
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
                      placeholder="Jane Wanjiru"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-[#E8192C] transition-colors"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Phone</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="+254 7XX XXX XXX"
                      className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-[#E8192C] transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Email *</label>
                  <input
                    required
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="jane@company.com"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-[#E8192C] transition-colors"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">What&apos;s this about? *</label>
                  <select
                    required
                    name="inquiry"
                    value={form.inquiry}
                    onChange={handleChange}
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 focus:outline-none focus:border-[#E8192C] transition-colors bg-white"
                  >
                    <option value="">Select a topic</option>
                    {inquiryTypes.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-2">Message *</label>
                  <textarea
                    required
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={5}
                    placeholder="Tell us what you need..."
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-800 placeholder:text-gray-300 focus:outline-none focus:border-[#E8192C] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={submitting}
                  className="w-full bg-[#0A0534] text-white py-4 rounded-full font-semibold hover:bg-[#E8192C] transition-colors duration-300 flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {submitting ? 'Sending…' : 'Send message'}
                  {!submitting && <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />}
                </button>

                {submitError && (
                  <p className="text-sm text-red-500 text-center">{submitError}</p>
                )}
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
