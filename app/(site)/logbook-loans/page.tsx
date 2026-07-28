'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState, useEffect, useCallback } from 'react';
import { ArrowForward, CheckCircleOutlined, Close, DirectionsCar, FlashOn, SwapHoriz } from '@mui/icons-material';
import bg from '@/public/assets/loans/logbook.png';

const highlights = [
  {
    icon: DirectionsCar,
    title: 'Pesa Speedy Loan',
    description: 'A short-term loan for clients who need quick financing using their vehicle and existing third-party insurance cover. Keep driving while accessing funds.',
    accent: 'bg-[#0A0534]',
  },
  {
    icon: FlashOn,
    title: 'Wezesha Loan',
    description: 'A quick emergency loan where the client leaves the vehicle in our custody until the loan is fully repaid. Designed for urgent, time-sensitive financial needs.',
    accent: 'bg-[#0A0534]',
  },
  {
    icon: SwapHoriz,
    title: 'Loan Buyoff',
    description: 'Transfer and clear an existing logbook loan from another bank or financial institution. Benefit from better terms and a streamlined repayment plan.',
    accent: 'bg-[#0A0534]',
  },
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
  { number: '01', title: 'Submit Your Application', description: 'Complete our online application form and provide the required documents for assessment.' },
  { number: '02', title: 'Loan Offer and Agreement', description: 'Once approved, receive a clear offer outlining the financing amount, rate, repayment period and terms. Review and sign the agreement.' },
  { number: '03', title: 'Disbursement', description: 'After final verification, funds are disbursed directly to you.' },
];

// ── Types ─────

interface Product { id: string; name: string; }

interface PreApprovalResult {
  status: string;
  minSuggestedAmount: number | null;
  maxSuggestedAmount: number | null;
  message: string;
  nextAction: string;
}

interface DocCheckItem { code: string; name: string; collected: boolean; blocksCalculation: boolean; }

interface PreApprovalResponse {
  id: string;
  preApprovalNo: string;
  docCheckResult: { complete: boolean; items: DocCheckItem[] };
  preApprovalResult: PreApprovalResult;
}

//Helpers

const emptyForm = { name: '', phone: '', email: '', vehicleMake: '', vehicleModel: '', vehicleYear: '', productId: '', amount: '' };

function formatPhone(raw: string): string {
  const digits = raw.replace(/\D/g, '');
  if (digits.startsWith('0') && digits.length >= 9) return '+254' + digits.slice(1);
  if (digits.startsWith('254') && digits.length >= 12) return '+' + digits;
  if (digits.startsWith('7') && digits.length >= 9) return '+254' + digits;
  return raw;
}

//Modal

function ApplicationModal({ onClose }: { onClose: () => void }) {
  const [form, setForm] = useState(emptyForm);

  // API-loaded data
  const [products, setProducts] = useState<Product[]>([]);
  const [brands, setBrands] = useState<string[]>([]);
  const [models, setModels] = useState<string[]>([]);
  const [loadingBrands, setLoadingBrands] = useState(true);
  const [loadingModels, setLoadingModels] = useState(false);

  // Submission state
  const [submitting, setSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState('');

  // Post-submit state
  const [preApproval, setPreApproval] = useState<PreApprovalResponse | null>(null);

  // Load products + brands on mount
  useEffect(() => {
    fetch('/api/loan/products')
      .then((r) => r.json())
      .then((d) => setProducts(d.data ?? []))
      .catch(() => {});

    fetch('/api/loan/brands')
      .then((r) => r.json())
      .then((brands: string[]) => setBrands(brands))
      .catch(() => setBrands([]))
      .finally(() => setLoadingBrands(false));
  }, []);

  // Load models whenever make changes
  const loadModels = useCallback(async (make: string) => {
    if (!make) { setModels([]); return; }
    setLoadingModels(true);
    try {
      const r = await fetch(`/api/loan/models?make=${encodeURIComponent(make)}`);
      const data: string[] = await r.json();
      setModels(data);
    } catch {
      setModels([]);
    } finally {
      setLoadingModels(false);
    }
  }, []);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) {
    const { name, value } = e.target;
    if (name === 'vehicleMake') {
      setForm((f) => ({ ...f, vehicleMake: value, vehicleModel: '' }));
      loadModels(value);
    } else {
      setForm((f) => ({ ...f, [name]: value }));
    }
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setSubmitError('');
    const phone = formatPhone(form.phone);
    try {
      const res = await fetch('/api/loan/apply', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          channel: 'CHOICE_BANK_WEBSITE',
          agreed_to_user_agreement: true,
          phone_number: phone,
          device_id: crypto.randomUUID(),
          product_id: form.productId,
          make: form.vehicleMake,
          model: form.vehicleModel,
          year: Number(form.vehicleYear),
          application_amount: Number(form.amount),
          mpesa_statement_password: null,
        }),
      });
      const data = await res.json();
      if (!res.ok || data.code !== 200) throw new Error(data.message ?? 'Submission failed');
      setPreApproval(data.data as PreApprovalResponse);
    } catch (err) {
      setSubmitError(err instanceof Error ? err.message : 'Something went wrong. Please call us directly or try again.');
    } finally {
      setSubmitting(false);
    }
  }

  const inputCls = 'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm text-[#0A0534] placeholder-gray-300 focus:outline-none focus:border-[#E8192C] transition-colors';
  const selectCls = `${inputCls} appearance-none bg-white`;
  const labelCls = 'block text-xs font-semibold text-gray-500 uppercase tracking-widest mb-1.5';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4" onClick={onClose}>
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" />
      <div
        className="relative bg-white rounded-3xl w-full max-w-3xl min-h-[80vh] max-h-[95vh] overflow-y-auto shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-8 py-6 flex items-start justify-between border-b border-gray-100">
          <div>
            <p className="text-xs font-semibold text-[#E8192C] uppercase tracking-widest mb-1">Logbook Loan Application</p>
            <h3 className="text-xl font-bold text-[#0A0534]">Apply for a Logbook Loan</h3>
          </div>
          <button onClick={onClose} className="text-[#0A0534] hover:text-[#E8192C] transition-colors mt-0.5 shrink-0"><Close /></button>
        </div>

        <div className="px-8 py-6">

          {/* ── Success screen ── */}
          {preApproval && (
            <div className="text-center py-10">
              <CheckCircleOutlined className="text-[#E8192C] mb-4" sx={{ fontSize: 52 }} />
              <p className="text-xs font-semibold text-[#E8192C] uppercase tracking-widest mb-2">{preApproval.preApprovalNo}</p>
              <h4 className="text-xl font-bold text-[#0A0534] mb-2">Application received!</h4>
              
              <button onClick={onClose} className="bg-[#0A0534] text-white px-8 py-3 rounded-full text-sm font-semibold hover:bg-[#E8192C] transition-colors">Close</button>
            </div>
          )}

          {/* ── Form ── */}
          {!preApproval && (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name & Phone */}
              <div className="grid grid-cols-2 gap-4">
                <div className="col-span-2 sm:col-span-1">
                  <label className={labelCls}>Full Name *</label>
                  <input type="text" name="name" required value={form.name} onChange={handleChange} placeholder="John Kamau" className={inputCls} />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className={labelCls}>Phone Number *</label>
                  <input type="tel" name="phone" required value={form.phone} onChange={handleChange} placeholder="07XX XXX XXX" className={inputCls} />
                 
                </div>
              </div>

              {/* Email */}
              <div>
                <label className={labelCls}>Email Address</label>
                <input type="email" name="email" value={form.email} onChange={handleChange} placeholder="john@email.com" className={inputCls} />
              </div>

              {/* Loan Product */}
              <div>
                <label className={labelCls}>Loan Product *</label>
                <select name="productId" required value={form.productId} onChange={handleChange} className={selectCls}>
                  <option value="">{products.length === 0 ? 'Loading products…' : 'Select a product'}</option>
                  {products.map((p) => <option key={p.id} value={p.id}>{p.name}</option>)}
                </select>
              </div>

              {/* Vehicle Make & Model (cascading — API driven) */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Vehicle Make *</label>
                  <select name="vehicleMake" required value={form.vehicleMake} onChange={handleChange} disabled={loadingBrands} className={`${selectCls} disabled:opacity-50`}>
                    <option value="">{loadingBrands ? 'Loading…' : 'Select make'}</option>
                    {brands.map((b) => <option key={b} value={b}>{b}</option>)}
                  </select>
                </div>
                <div>
                  <label className={labelCls}>Vehicle Model *</label>
                  <select name="vehicleModel" required value={form.vehicleModel} onChange={handleChange} disabled={!form.vehicleMake || loadingModels} className={`${selectCls} disabled:opacity-50`}>
                    <option value="">{loadingModels ? 'Loading…' : 'Select model'}</option>
                    {models.map((m) => <option key={m} value={m}>{m}</option>)}
                  </select>
                </div>
              </div>

              {/* Year & Amount */}
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className={labelCls}>Year of Manufacture *</label>
                  <input type="number" name="vehicleYear" required value={form.vehicleYear} onChange={handleChange} placeholder="e.g. 2015" min="2004" max="2025" className={inputCls} />
                </div>
                <div>
                  <label className={labelCls}>Loan Amount (Ksh) *</label>
                  <input type="number" name="amount" required value={form.amount} onChange={handleChange} placeholder="e.g. 500000" min="50000" max="6000000" step="1000" className={inputCls} />
                </div>
              </div>

              <button type="submit" disabled={submitting}
                className="w-full bg-[#E8192C] text-white py-3.5 rounded-full font-semibold hover:bg-[#c4121e] transition-colors flex items-center justify-center gap-2 group disabled:opacity-60 disabled:cursor-not-allowed">
                {submitting ? 'Submitting…' : 'Submit Application'}
                {!submitting && <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />}
              </button>

              {submitError && <p className="text-sm text-red-500 text-center">{submitError}</p>}
              <p className="text-xs text-gray-400 text-center">A Choice Bank loan officer will contact you.</p>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function LogbookLoansPage() {
  const [modalLoan, setModalLoan] = useState<string | null>('Logbook Loan');

  function openModal(loanType: string) { setModalLoan(loanType); }
  function closeModal() { setModalLoan(null); }

  return (
    <div className="min-h-screen bg-white">
      {modalLoan && <ApplicationModal onClose={closeModal} />}

      {/* Hero */}
      <div className="bg-[#0A0534]/90 py-20 overflow-hidden">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center pl-6 md:pl-16">
          {/* Left: text */}
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Logbook Loans</p>
            <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight mb-6">
              Unlock cash from your vehicle.
            </h1>
            <p className="text-white/70 text-xl max-w-xl leading-relaxed mb-10">
              Access financing using your vehicle&apos;s logbook as security and keep driving while meeting your personal, business, or development needs.
            </p>
            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => openModal('Logbook Loan')}
                className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all group"
              >
                Apply for a Logbook Loan
                <ArrowForward className="group-hover:translate-x-1 transition-transform" />
              </button>
              <Link href="/sales" className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all">
                Speak to a loan officer
              </Link>
            </div>
          </div>
          {/* Right: image flush to edge */}
          <div className="relative w-full h-[380px] md:h-[560px] rounded-l-3xl overflow-hidden">
            <Image src={bg} alt="Logbook Loans" fill sizes="(max-width: 768px) 100vw, 50vw" className="object-contain object-center" priority />
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="py-20 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
  
 
            <h2 className="text-4xl text-center font-bold text-[#0A0534] mb-10">More than just a loan.</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { stat: 'Access Up to Ksh 6M',  },
              { stat: 'Approval Under 6 Hours',  },
              { stat: 'Flexible Repayment Plan',   },
              { stat: 'Affordable Rates',  },
            ].map(({ stat}) => (
              <div key={stat} className="bg-[#F7F8F8] rounded-2xl p-6 border border-gray-100 hover:border-[#E8192C]/30 hover:shadow-md transition-all duration-300">
                <p className="text-lg font-bold text-[#0A0534] mb-1">{stat}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Key Highlights */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14 text-center mx-auto">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Explore our Logbook Loan products</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map(({  title, description }, i) => (
              <div key={title} className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
              
                {/* Content */}
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-lg font-bold text-[#0A0534] mb-3">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed flex-1">{description}</p>
                  <button
                    onClick={() => openModal(title)}
                    className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-[#E8192C] hover:gap-2 transition-all"
                  >
                    Apply now <ArrowForward fontSize="small" />
                  </button>
                </div>
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
            <h2 className="text-2xl font-bold text-white mb-6">Requirements</h2>
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
            <h2 className="text-4xl font-bold text-[#0A0534] mb-4">Apply today. Funds today.</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              The entire process from application to disbursement is designed to take between 6 and 12 hours for straightforward cases with complete documents.
            </p>
            <button
              onClick={() => openModal('Logbook Loan')}
              className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all group"
            >
              Apply Now
              <ArrowForward className="group-hover:translate-x-1 transition-transform" />
            </button>
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
    </div>
  );
}
