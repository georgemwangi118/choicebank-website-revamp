import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { createClient } from '@/lib/supabase/server';
import { Job } from '@/lib/supabase/types';
import JobApplicationForm from '@/components/careers/JobApplicationForm';

interface Props { params: Promise<{ id: string }>; }

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from('jobs').select('title,department').eq('id', id).single();
  if (!data) return {};
  return {
    title: `${data.title} — Careers | Choice Microfinance Bank`,
    description: `Apply for the ${data.title} role at Choice Microfinance Bank.`,
  };
}

function BulletList({ text, className = '' }: { text: string; className?: string }) {
  const items = text.split('\n').filter((r) => r.trim().startsWith('-')).map((r) => r.replace(/^-\s*/, ''));
  if (!items.length) return null;
  return (
    <ul className={`space-y-2.5 ${className}`}>
      {items.map((item, i) => (
        <li key={i} className="flex items-start gap-3 text-sm text-gray-600 leading-relaxed">
          <span className="w-1.5 h-1.5 rounded-full bg-[#E8192C] mt-2 shrink-0" />
          {item}
        </li>
      ))}
    </ul>
  );
}

export default async function JobDetailPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from('jobs').select('*').eq('id', id).eq('published', true).single();
  if (!data) notFound();

  const job = data as Job;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#0A0534] pt-40 pb-16 px-6 md:px-16">
        <div className="max-w-5xl mx-auto">
          <Link href="/careers" className="inline-flex items-center gap-2 text-white/60 hover:text-white text-sm mb-8 transition-colors">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
              <path fillRule="evenodd" d="M11.03 3.97a.75.75 0 0 1 0 1.06l-6.22 6.22H21a.75.75 0 0 1 0 1.5H4.81l6.22 6.22a.75.75 0 1 1-1.06 1.06l-7.5-7.5a.75.75 0 0 1 0-1.06l7.5-7.5a.75.75 0 0 1 1.06 0Z" clipRule="evenodd" />
            </svg>
            Back to Careers
          </Link>

          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">We&apos;re Hiring</p>
          <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-6">{job.title}</h1>

          <div className="flex flex-wrap items-center gap-4">
            <span className="inline-flex items-center gap-1.5 text-sm text-white/70">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#E8192C]">
                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.099 3.35-4.599 3.35-7.327A8.64 8.64 0 0012 3.75a8.64 8.64 0 00-8.639 8.25c0 2.728 1.406 5.228 3.35 7.327a19.58 19.58 0 002.683 2.282 16.974 16.974 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
              </svg>
              {job.location}
            </span>
            <span className="text-white/30">|</span>
            <span className="inline-flex items-center gap-1.5 text-sm text-white/70">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-[#E8192C]">
                <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Z" clipRule="evenodd" />
              </svg>
              {job.type}
            </span>
            <span className="text-white/30">|</span>
            <span className="text-sm text-white/70">{job.department}</span>
          </div>
        </div>
      </div>

      {/* Body */}
      <div className="px-6 md:px-16 py-16">
        <div className="max-w-5xl mx-auto space-y-12">

          {/* About the Role */}
          {job.description && (
            <section>
              <div className="inline-block bg-[#E8192C] text-white text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-5">
                About the Role
              </div>
              <p className="text-gray-600 leading-relaxed">{job.description}</p>
            </section>
          )}

          {/* Responsibilities + Qualifications & Skills — two columns */}
          {(job.responsibilities || job.qualifications || job.skills) && (
            <div className="grid md:grid-cols-2 gap-8">
              {job.responsibilities && (
                <div className="bg-[#F7F8F8] rounded-2xl p-8">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-9 h-9 rounded-full bg-[#E8192C] flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                        <path fillRule="evenodd" d="M18.685 19.097A9.723 9.723 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75S2.25 6.615 2.25 12a9.723 9.723 0 0 0 3.065 7.097A9.716 9.716 0 0 0 12 21.75a9.716 9.716 0 0 0 6.685-2.653Zm-12.54-1.285A7.486 7.486 0 0 1 12 15a7.486 7.486 0 0 1 5.855 2.812A8.224 8.224 0 0 1 12 20.25a8.224 8.224 0 0 1-5.855-2.438ZM15.75 9a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0Z" clipRule="evenodd" />
                      </svg>
                    </div>
                    <h2 className="text-base font-bold text-[#0A0534]">Key Responsibilities</h2>
                  </div>
                  <BulletList text={job.responsibilities} />
                </div>
              )}

              {(job.qualifications || job.skills) && (
                <div className="bg-[#F7F8F8] rounded-2xl p-8 space-y-7">
                  <div className="flex items-center gap-3 mb-1">
                    <div className="w-9 h-9 rounded-full bg-[#0A0534] flex items-center justify-center shrink-0">
                      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-white">
                        <path d="M11.7 2.805a.75.75 0 0 1 .6 0A60.65 60.65 0 0 1 22.83 8.72a.75.75 0 0 1-.231 1.337A49.948 49.948 0 0 0 12 10.518a49.948 49.948 0 0 0-10.6-1.46.75.75 0 0 1-.23-1.337A60.653 60.653 0 0 1 11.7 2.805Z" />
                        <path d="M13.06 15.473a48.45 48.45 0 0 1 7.666-3.282c.134.397.275.795.422 1.190a.75.75 0 0 1-.773.976 46.624 46.624 0 0 0-8.126 1.638A48.31 48.31 0 0 1 12 17.291a48.317 48.317 0 0 1-8.25-1.305.75.75 0 0 1-.774-.976c.147-.395.289-.793.422-1.19A48.45 48.45 0 0 1 12 15.47a48.45 48.45 0 0 1 1.06.003Z" />
                      </svg>
                    </div>
                    <h2 className="text-base font-bold text-[#0A0534]">Qualifications &amp; Skills</h2>
                  </div>
                  {job.qualifications && (
                    <div>
                      <p className="text-xs font-bold text-[#0A0534] uppercase tracking-widest mb-3">Qualifications</p>
                      <BulletList text={job.qualifications} />
                    </div>
                  )}
                  {job.skills && (
                    <div>
                      <p className="text-xs font-bold text-[#0A0534] uppercase tracking-widest mb-3">Skills &amp; Competencies</p>
                      <BulletList text={job.skills} />
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {/* How to Apply */}
          <section className="bg-[#0A0534] rounded-3xl p-8 md:p-10">
              
              <div className="bg-white rounded-2xl p-6">
                <JobApplicationForm jobTitle={job.title} />
              </div>
        
          </section>

        </div>
      </div>
    </div>
  );
}
