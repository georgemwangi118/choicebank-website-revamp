'use client';

import { useState, useRef } from 'react';

export default function JobApplicationForm({ jobTitle }: { jobTitle: string }) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [coverLetter, setCoverLetter] = useState('');
  const [cv, setCv] = useState<File | null>(null);
  const [cvError, setCvError] = useState('');
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const fileRef = useRef<HTMLInputElement>(null);

  function handleCvChange(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;
    if (file.size > 5 * 1024 * 1024) { setCvError('File must be under 5MB.'); return; }
    setCvError('');
    setCv(file);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitting(true);
    setError('');

    const fd = new FormData();
    fd.append('name', name);
    fd.append('email', email);
    fd.append('phone', phone);
    fd.append('position', jobTitle);
    fd.append('cover_letter', coverLetter);
    if (cv) fd.append('cv', cv);

    const res = await fetch('/api/apply-job', { method: 'POST', body: fd });
    const data = await res.json();

    if (!res.ok) { setError(data.error ?? 'Something went wrong. Please try again.'); setSubmitting(false); return; }
    setSubmitted(true);
    setSubmitting(false);
  }

  const inputCls = 'w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A0534] bg-white';
  const labelCls = 'block text-xs font-semibold text-gray-600 mb-1.5';

  if (submitted) {
    return (
      <div className="text-center py-12 bg-[#F7F8F8] rounded-2xl">
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-green-600">
            <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
          </svg>
        </div>
        <h3 className="text-xl font-bold text-[#0A0534] mb-2">Application Submitted!</h3>
        <p className="text-sm text-gray-500 max-w-sm mx-auto">
          Thank you for applying for the <strong>{jobTitle}</strong> role. Our HR team will review your application and be in touch.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className={labelCls}>Full Name *</label>
          <input required value={name} onChange={(e) => setName(e.target.value)} className={inputCls} placeholder="Jane Doe" />
        </div>
        <div>
          <label className={labelCls}>Email Address *</label>
          <input type="email" required value={email} onChange={(e) => setEmail(e.target.value)} className={inputCls} placeholder="jane@example.com" />
        </div>
      </div>

      <div>
        <label className={labelCls}>Phone Number</label>
        <input type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} className={inputCls} placeholder="+254 7XX XXX XXX" />
      </div>

      <div>
        <label className={labelCls}>Cover Letter</label>
        <textarea
          rows={6}
          value={coverLetter}
          onChange={(e) => setCoverLetter(e.target.value)}
          className={inputCls}
          placeholder="Tell us why you're the right fit for this role — your experience, motivation, and what you'd bring to Choice Bank…"
        />
      </div>

      {/* CV Upload */}
      <div>
        <label className={labelCls}>Upload CV *</label>
        <button
          type="button"
          onClick={() => fileRef.current?.click()}
          className="w-full border-2 border-dashed border-gray-200 rounded-xl px-6 py-8 text-sm text-gray-400 hover:border-[#0A0534] hover:text-[#0A0534] transition-colors flex flex-col items-center gap-3"
        >
          {cv ? (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8 text-green-500">
                <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6.905 9.97a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72V18a.75.75 0 0 0 1.5 0v-4.19l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
              </svg>
              <div className="text-center">
                <p className="font-semibold text-[#0A0534]">{cv.name}</p>
                <p className="text-xs text-gray-400 mt-0.5">{(cv.size / 1024).toFixed(0)} KB · Click to change</p>
              </div>
            </>
          ) : (
            <>
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-8 h-8">
                <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
              </svg>
              <div className="text-center">
                <p className="font-medium">Click to upload your CV</p>
                <p className="text-xs mt-0.5">PDF, DOC, DOCX · Max 5MB</p>
              </div>
            </>
          )}
        </button>
        <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleCvChange} />
        {cvError && <p className="text-xs text-red-500 mt-1.5">{cvError}</p>}
      </div>

      {error && (
        <div className="bg-red-50 border border-red-200 rounded-xl px-4 py-3 text-sm text-red-600">{error}</div>
      )}

      <button
        type="submit"
        disabled={submitting}
        className="w-full bg-[#E8192C] text-white py-3.5 rounded-full font-semibold text-sm hover:bg-[#c4121e] transition-colors disabled:opacity-60"
      >
        {submitting ? 'Submitting application…' : 'Submit Application'}
      </button>
    
    </form>
  );
}
