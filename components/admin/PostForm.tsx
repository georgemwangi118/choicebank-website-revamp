'use client';

import { useState, useRef } from 'react';
import { useRouter } from 'next/navigation';
import { createClient } from '@/lib/supabase/client';
import { Post } from '@/lib/supabase/types';
import Image from 'next/image';

const CATEGORIES = ['Loans', 'Business Banking', 'Savings', 'Remittance', 'Green Finance', 'API Banking'];

type FormData = Omit<Post, 'id' | 'created_at' | 'updated_at'>;

function slugify(text: string) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
}

export default function PostForm({ post }: { post?: Post }) {
  const router = useRouter();
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [saving, setSaving] = useState(false);
  const [uploading, setUploading] = useState(false);
  const [error, setError] = useState('');
  const [uploadError, setUploadError] = useState('');

  const [form, setForm] = useState<FormData>({
    slug: post?.slug ?? '',
    title: post?.title ?? '',
    excerpt: post?.excerpt ?? '',
    category: post?.category ?? CATEGORIES[0],
    date: post?.date ?? new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
    read_time: post?.read_time ?? '5 min read',
    cover_image: post?.cover_image ?? '',
    author_name: post?.author_name ?? 'Choice Bank Team',
    author_role: post?.author_role ?? '',
    content: post?.content ?? '',
    published: post?.published ?? true,
  });

  function set(key: keyof FormData, value: string | boolean) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleTitleChange(title: string) {
    setForm((prev) => ({ ...prev, title, slug: post ? prev.slug : slugify(title) }));
  }

  async function handleFileUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const file = e.target.files?.[0];
    if (!file) return;

    const maxSize = 5 * 1024 * 1024; // 5MB
    if (file.size > maxSize) {
      setUploadError('File must be under 5MB.');
      return;
    }

    setUploadError('');
    setUploading(true);

    const supabase = createClient();
    const ext = file.name.split('.').pop();
    const filename = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`;

    const { error: uploadErr } = await supabase.storage
      .from('blog-images')
      .upload(filename, file, { cacheControl: '3600', upsert: false });

    if (uploadErr) {
      setUploadError(uploadErr.message);
      setUploading(false);
      return;
    }

    const { data } = supabase.storage.from('blog-images').getPublicUrl(filename);
    set('cover_image', data.publicUrl);
    setUploading(false);

    // reset file input so the same file can be re-selected if needed
    if (fileInputRef.current) fileInputRef.current.value = '';
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSaving(true);
    setError('');

    const supabase = createClient();
    let err;

    if (post) {
      ({ error: err } = await supabase.from('posts').update({ ...form, updated_at: new Date().toISOString() }).eq('id', post.id));
    } else {
      ({ error: err } = await supabase.from('posts').insert(form));
    }

    if (err) { setError(err.message); setSaving(false); return; }
    router.push('/admin/blog');
    router.refresh();
  }

  const inputCls = 'w-full border border-gray-200 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-2 focus:ring-[#0A0534]';
  const labelCls = 'block text-xs font-semibold text-gray-600 mb-1';

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid md:grid-cols-2 gap-6">
        <div className="md:col-span-2">
          <label className={labelCls}>Title *</label>
          <input className={inputCls} required value={form.title} onChange={(e) => handleTitleChange(e.target.value)} placeholder="How Logbook Loans Work in Kenya" />
        </div>
        <div>
          <label className={labelCls}>Slug *</label>
          <input className={inputCls} required value={form.slug} onChange={(e) => set('slug', e.target.value)} placeholder="how-logbook-loans-work-kenya" />
        </div>
        <div>
          <label className={labelCls}>Category</label>
          <select className={inputCls} value={form.category} onChange={(e) => set('category', e.target.value)}>
            {CATEGORIES.map((c) => <option key={c}>{c}</option>)}
          </select>
        </div>
        <div>
          <label className={labelCls}>Date</label>
          <input className={inputCls} value={form.date} onChange={(e) => set('date', e.target.value)} placeholder="June 20, 2025" />
        </div>
        <div>
          <label className={labelCls}>Read Time</label>
          <input className={inputCls} value={form.read_time} onChange={(e) => set('read_time', e.target.value)} placeholder="5 min read" />
        </div>

        {/* Cover Image */}
        <div className="md:col-span-2">
          <label className={labelCls}>Cover Image</label>
          <div className="space-y-3">
            {/* Preview */}
            {form.cover_image && (
              <div className="relative w-full h-48 rounded-xl overflow-hidden border border-gray-200">
                <Image src={form.cover_image} alt="Cover preview" fill className="object-cover" unoptimized />
                <button
                  type="button"
                  onClick={() => set('cover_image', '')}
                  className="absolute top-2 right-2 bg-black/60 text-white text-xs px-2 py-1 rounded-lg hover:bg-black/80 transition-colors"
                >
                  Remove
                </button>
              </div>
            )}

            {/* Upload */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="inline-flex items-center gap-2 px-4 py-2 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 transition-colors disabled:opacity-50"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                  <path fillRule="evenodd" d="M11.47 2.47a.75.75 0 0 1 1.06 0l4.5 4.5a.75.75 0 0 1-1.06 1.06l-3.22-3.22V16.5a.75.75 0 0 1-1.5 0V4.81L8.03 8.03a.75.75 0 0 1-1.06-1.06l4.5-4.5ZM3 15.75a.75.75 0 0 1 .75.75v2.25a1.5 1.5 0 0 0 1.5 1.5h13.5a1.5 1.5 0 0 0 1.5-1.5V16.5a.75.75 0 0 1 1.5 0v2.25a3 3 0 0 1-3 3H5.25a3 3 0 0 1-3-3V16.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
                </svg>
                {uploading ? 'Uploading…' : 'Upload image'}
              </button>
              <span className="text-xs text-gray-400">or</span>
              <input
                className={`flex-1 ${inputCls}`}
                value={form.cover_image}
                onChange={(e) => set('cover_image', e.target.value)}
                placeholder="Paste image URL (https://…)"
              />
            </div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/jpeg,image/png,image/webp,image/gif"
              className="hidden"
              onChange={handleFileUpload}
            />
            {uploadError && <p className="text-xs text-red-500">{uploadError}</p>}
            <p className="text-xs text-gray-400">Accepted: JPG, PNG, WebP, GIF · Max 5MB</p>
          </div>
        </div>

        <div>
          <label className={labelCls}>Author Name</label>
          <input className={inputCls} value={form.author_name} onChange={(e) => set('author_name', e.target.value)} />
        </div>
        <div>
          <label className={labelCls}>Author Role</label>
          <input className={inputCls} value={form.author_role} onChange={(e) => set('author_role', e.target.value)} placeholder="Financial Education" />
        </div>
        <div className="md:col-span-2">
          <label className={labelCls}>Excerpt *</label>
          <textarea className={inputCls} rows={3} required value={form.excerpt} onChange={(e) => set('excerpt', e.target.value)} placeholder="A short summary shown in the blog listing…" />
        </div>
        <div className="md:col-span-2">
          <label className={labelCls}>Content (Markdown-style)</label>
          <p className="text-xs text-gray-400 mb-2">Use <code>## Heading</code>, <code>- bullet</code>, <code>**bold**</code>, numbered lists. Each paragraph is a separate line.</p>
          <textarea className={`${inputCls} font-mono`} rows={20} value={form.content} onChange={(e) => set('content', e.target.value)} placeholder="Write your article content here…" />
        </div>
        <div className="flex items-center gap-3">
          <input
            id="published"
            type="checkbox"
            checked={form.published}
            onChange={(e) => set('published', e.target.checked)}
            className="w-4 h-4 accent-[#0A0534]"
          />
          <label htmlFor="published" className="text-sm font-medium text-gray-700">Published (visible on website)</label>
        </div>
      </div>

      {error && <p className="text-sm text-red-500">{error}</p>}

      <div className="flex gap-4">
        <button type="submit" disabled={saving || uploading} className="bg-[#0A0534] text-white px-8 py-2.5 rounded-full font-semibold text-sm hover:bg-[#0A0534]/90 transition-colors disabled:opacity-60">
          {saving ? 'Saving…' : post ? 'Update Post' : 'Publish Post'}
        </button>
        <a href="/admin/blog" className="px-8 py-2.5 rounded-full font-semibold text-sm border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors">Cancel</a>
      </div>
    </form>
  );
}
