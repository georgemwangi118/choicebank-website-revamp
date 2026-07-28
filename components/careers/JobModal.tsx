'use client';

import { useState, useRef, useEffect } from 'react';
import { Job } from '@/lib/supabase/types';

interface Props {
  job: Job;
  onClose: () => void;
}

export default function JobModal({ job, onClose }: Props) {
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
  const modalRef = useRef<HTMLDivElement>(null);

  // close on Escape
  useEffect(() => {
    function onKey(e: KeyboardEvent) { if (e.key === 'Escape') onClose(); }
    document.addEventListener('keydown', onKey);
    document.body.style.overflow = 'hidden';
    return () => {
      document.removeEventListener('keydown', onKey);
      document.body.style.overflow = '';
    };
  }, [onClose]);

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
    fd.append('position', job.title);
    fd.append('cover_letter', coverLetter);
    if (cv) fd.append('cv', cv);

    const res = await fetch('/api/apply-job', { method: 'POST', body: fd });
    const data = await res.json();

    if (!res.ok) { setError(data.error ?? 'Something went wrong. Please try again.'); setSubmitting(false); return; }
    setSubmitted(true);
    setSubmitting(false);
  }

  const requirements = job.requirements
    ? job.requirements.split('\n').filter((r) => r.trim().startsWith('-')).map((r) => r.replace(/^-\s*/, ''))
    : [];

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center p-4 pt-16 bg-black/50 backdrop-blur-sm overflow-y-auto">
      <div
        ref={modalRef}
        className="relative bg-white rounded-3xl w-full max-w-2xl shadow-2xl mb-8"
      >
        {/* Header */}
        <div className="bg-[#0A0534] rounded-t-3xl p-8">
          <button
            onClick={onClose}
            className="absolute top-5 right-5 w-8 h-8 flex items-center justify-center rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
            </svg>
          </button>
          <div className="flex flex-wrap items-center gap-2 mb-3">
            <span className="text-xs font-semibold bg-white/10 text-white px-2.5 py-0.5 rounded-full">{job.type}</span>
            <span className="text-xs text-white/50">{job.department}</span>
            <span className="text-white/30">·</span>
            <span className="text-xs text-white/50">{job.location}</span>
          </div>
          <h2 className="text-2xl font-bold text-white">{job.title}</h2>
        </div>

        <div className="p-8">
          {/* Job details */}
          <div className="mb-8">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">About the Role</p>
            <p className="text-gray-600 leading-relaxed text-sm whitespace-pre-line">{job.description}</p>
          </div>

          {requirements.length > 0 && (
            <div className="mb-8">
              <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Requirements</p>
              <ul className="space-y-2">
                {requirements.map((req, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="text-[#E8192C] mt-0.5 shrink-0">•</span>
                    {req}
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="border-t border-gray-100 pt-8">
            {submitted ? (
              <div className="text-center py-8">
                <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-7 h-7 text-green-600">
                    <path fillRule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm13.36-1.814a.75.75 0 1 0-1.22-.872l-3.236 4.53L9.53 12.22a.75.75 0 0 0-1.06 1.06l2.25 2.25a.75.75 0 0 0 1.14-.094l3.75-5.25Z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-lg font-bold text-[#0A0534] mb-2">Application Submitted!</h3>
                <p className="text-sm text-gray-500 mb-6">Thank you for applying for the <strong>{job.title}</strong> role. Our HR team will be in touch.</p>
                <button onClick={onClose} className="bg-[#0A0534] text-white px-8 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0A0534]/90 transition-colors">
                  Close
                </button>
              </div>
            ) : (
              <>
                <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-5">Apply for this Role</p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Full Name *</label>
                      <input
                        required value={name} onChange={(e) => setName(e.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A0534]"
                        placeholder="Jane Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-600 mb-1">Email Address *</label>
                      <input
                        type="email" required value={email} onChange={(e) => setEmail(e.target.value)}
                        className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A0534]"
                        placeholder="jane@example.com"
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Phone Number</label>
                    <input
                      type="tel" value={phone} onChange={(e) => setPhone(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A0534]"
                      placeholder="+254 7XX XXX XXX"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Cover Letter</label>
                    <textarea
                      rows={4} value={coverLetter} onChange={(e) => setCoverLetter(e.target.value)}
                      className="w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A0534]"
                      placeholder="Tell us why you're the right fit for this role…"
                    />
                  </div>

                  {/* CV Upload */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-600 mb-1">Upload CV</label>
                    <button
                      type="button"
                      onClick={() => fileRef.current?.click()}
                      className="w-full border-2 border-dashed border-gray-200 rounded-xl px-4 py-5 text-sm text-gray-400 hover:border-[#0A0534] hover:text-[#0A0534] transition-colors flex flex-col items-center gap-2"
                    >
                      {cv ? (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6 text-green-500">
                            <path fillRule="evenodd" d="M5.625 1.5H9a3.75 3.75 0 0 1 3.75 3.75v1.875c0 1.036.84 1.875 1.875 1.875H16.5a3.75 3.75 0 0 1 3.75 3.75v7.875c0 1.035-.84 1.875-1.875 1.875H5.625a1.875 1.875 0 0 1-1.875-1.875V3.375c0-1.036.84-1.875 1.875-1.875Zm6.905 9.97a.75.75 0 0 0-1.06 0l-3 3a.75.75 0 1 0 1.06 1.06l1.72-1.72V18a.75.75 0 0 0 1.5 0v-4.19l1.72 1.72a.75.75 0 1 0 1.06-1.06l-3-3Z" clipRule="evenodd" />
                            <path d="M14.25 5.25a5.23 5.23 0 0 0-1.279-3.434 9.768 9.768 0 0 1 6.963 6.963A5.23 5.23 0 0 0 16.5 7.5h-1.875a.375.375 0 0 1-.375-.375V5.25Z" />
                          </svg>
                          <span className="font-medium text-[#0A0534]">{cv.name}</span>
                          <span className="text-xs text-gray-400">Click to change file</span>
                        </>
                      ) : (
                        <>
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-6 h-6">
                            <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                          </svg>
                          <span>Click to upload your CV</span>
                          <span className="text-xs">PDF, DOC, DOCX · Max 5MB</span>
                        </>
                      )}
                    </button>
                    <input ref={fileRef} type="file" accept=".pdf,.doc,.docx" className="hidden" onChange={handleCvChange} />
                    {cvError && <p className="text-xs text-red-500 mt-1">{cvError}</p>}
                  </div>

                  {error && <p className="text-sm text-red-500">{error}</p>}

                  <button
                    type="submit"
                    disabled={submitting}
                    className="w-full bg-[#E8192C] text-white py-3 rounded-full font-semibold text-sm hover:bg-[#c4121e] transition-colors disabled:opacity-60"
                  >
                    {submitting ? 'Submitting…' : 'Submit Application'}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
