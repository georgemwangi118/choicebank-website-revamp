'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Job } from '@/lib/supabase/types';

const DEPARTMENTS = ['Technology', 'Finance', 'Operations', 'Sales & Marketing', 'Credit', 'Customer Service', 'Compliance', 'HR & Admin'];
const TYPES = ['Full-time', 'Part-time', 'Contract', 'Internship'];

type FormData = Omit<Job, 'id' | 'created_at' | 'updated_at'>;

const BULLET_HINT = 'One item per line, starting with a dash: - Item here';

export default function JobForm({ job }: { job?: Job }) {
  const router = useRouter();
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState('');

  const [form, setForm] = useState<FormData>({
    title: job?.title ?? '',
    department: job?.department ?? DEPARTMENTS[0],
    location: job?.location ?? 'Nairobi, Kenya',
    type: job?.type ?? 'Full-time',
    description: job?.description ?? '',
    responsibilities: job?.responsibilities ?? '',
    qualifications: job?.qualifications ?? '',
    skills: job?.skills ?? '',
    published: job?.published ?? true,
  });

  function set(key: keyof FormData, value: string | boolean) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');

    const supabase = createClient();
    let err;

    if (job) {
      ({ error: err } = await supabase.from('jobs').update({ ...form, updated_at: new Date().toISOString() }).eq('id', job.id));
    } else {
      ({ error: err } = await supabase.from('jobs').insert(form));
    }

    if (err) { setError(err.message); setSaving(false); return; }
    router.push('/admin/jobs');
    router.refresh();
  }

  const inputCls = 'w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A0534]';
  const labelCls = 'block text-xs font-semibold text-gray-600 mb-1';
  const hintCls = 'text-xs text-gray-400 mb-2';

  return (
    <form onSubmit={handleSubmit} className="space-y-8">
      {/* Basic info */}
      <div className="grid md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className={labelCls}>Job Title *</label>
          <input className={inputCls} required value={form.title} onChange={(e) => set('title', e.target.value)} placeholder="Junior Customer Support Officer" />
        </div>
        <div>
          <label className={labelCls}>Department</label>
          <select className={inputCls} value={form.department} onChange={(e) => set('department', e.target.value)}>
            {DEPARTMENTS.map((d) => <option key={d}>{d}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls}>Type</label>
          <select className={inputCls} value={form.type} onChange={(e) => set('type', e.target.value)}>
            {TYPES.map((t) => <option key={t}>{t}</option>)}
          </select>
        </div>
        <div className="md:col-span-2">
          <label className={labelCls}>Location</label>
          <input className={inputCls} value={form.location} onChange={(e) => set('location', e.target.value)} placeholder="Nairobi, Kenya" />
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-100 pt-6 space-y-6">
        <h3 className="text-sm font-semibold text-[#0A0534]">Job Content</h3>

        <div>
          <label className={labelCls}>About the Role *</label>
          <p className={hintCls}>A short paragraph describing what this position does and what the successful candidate will be responsible for.</p>
          <textarea className={inputCls} rows={4} required value={form.description} onChange={(e) => set('description', e.target.value)}
            placeholder="Choice Microfinance Bank is seeking a dynamic and customer-focused Junior Customer Support Officer…" />
        </div>

        <div>
          <label className={labelCls}>Key Responsibilities</label>
          <p className={hintCls}>{BULLET_HINT}</p>
          <textarea className={`${inputCls} font-mono`} rows={8} value={form.responsibilities} onChange={(e) => set('responsibilities', e.target.value)}
            placeholder={"- Serve as the first point of contact for customers\n- Respond promptly to customer inquiries\n- Open, maintain and update customer accounts"} />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className={labelCls}>Qualifications</label>
            <p className={hintCls}>{BULLET_HINT}</p>
            <textarea className={`${inputCls} font-mono`} rows={6} value={form.qualifications} onChange={(e) => set('qualifications', e.target.value)}
              placeholder={"- Bachelor's Degree in Banking, Finance or related field\n- Minimum 2 years experience in customer service"} />
          </div>
          <div>
            <label className={labelCls}>Skills & Competencies</label>
            <p className={hintCls}>{BULLET_HINT}</p>
            <textarea className={`${inputCls} font-mono`} rows={6} value={form.skills} onChange={(e) => set('skills', e.target.value)}
              placeholder={"- Excellent communication skills\n- Strong problem-solving skills\n- High level of integrity and professionalism"} />
          </div>
        </div>
      </div>

      <div className="flex items-center gap-3 pt-2">
        <input id="pub" type="checkbox" checked={form.published} onChange={(e) => set('published', e.target.checked)} className="w-4 h-4 accent-[#0A0534]" />
        <label htmlFor="pub" className="text-sm font-medium text-gray-700">Published (visible on careers page)</label>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="flex gap-4">
        <button type="submit" disabled={saving} className="bg-[#0A0534] text-white px-8 py-2.5 rounded-full font-semibold text-sm hover:bg-[#0A0534]/90 transition-colors disabled:opacity-60">
          {saving ? 'Saving…' : job ? 'Update Listing' : 'Post Listing'}
        </button>
        <a href="/admin/jobs" className="px-8 py-2.5 rounded-full font-semibold text-sm border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">Cancel</a>
      </div>
    </form>
  );
}
