'use client';

import Link from 'next/link';
import { Job } from '@/lib/supabase/types';

export default function CareersClient({ jobs }: { jobs: Job[] }) {
  const departments = [...new Set(jobs.map((j) => j.department))];

  return (
    <div className="py-20 px-6 md:px-16 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="max-w-xl mb-14">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Open Positions</p>
          <h2 className="text-4xl font-bold text-[#0A0534]">
            {jobs.length ? `${jobs.length} open role${jobs.length === 1 ? '' : 's'}` : 'No open roles right now'}
          </h2>
          {!jobs.length && (
            <p className="text-gray-400 mt-4 text-sm">
              We don&apos;t have any open positions at the moment. Check back soon or send us a speculative application via the contact page.
            </p>
          )}
        </div>

        {jobs.length > 0 && (
          <div className="space-y-10">
            {departments.map((dept) => (
              <div key={dept}>
                <h3 className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4">{dept}</h3>
                <div className="space-y-4">
                  {jobs.filter((j) => j.department === dept).map((job) => (
                    <div key={job.id} className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow">
                      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="text-xs font-semibold bg-[#0A0534]/10 text-[#0A0534] px-2.5 py-0.5 rounded-full">{job.type}</span>
                            <span className="flex items-center gap-1 text-xs text-gray-400">
                              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 shrink-0">
                                <path fillRule="evenodd" d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-2.099 3.35-4.599 3.35-7.327A8.64 8.64 0 0012 3.75a8.64 8.64 0 00-8.639 8.25c0 2.728 1.406 5.228 3.35 7.327a19.58 19.58 0 002.683 2.282 16.974 16.974 0 001.144.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
                              </svg>
                              {job.location}
                            </span>
                          </div>
                          <h4 className="text-lg font-bold text-[#0A0534] mb-1">{job.title}</h4>
                          <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{job.description}</p>
                        </div>
                        <Link
                          href={`/careers/${job.id}`}
                          className="shrink-0 inline-flex items-center gap-2 bg-[#E8192C] text-white px-6 py-2.5 rounded-full text-sm font-semibold hover:bg-[#c4121e] transition-colors group"
                        >
                          View & Apply
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 group-hover:translate-x-0.5 transition-transform">
                            <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
                          </svg>
                        </Link>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
