import { Metadata } from 'next';
import { createClient } from '@/lib/supabase/server';
import { Job } from '@/lib/supabase/types';
import CareersClient from '@/components/careers/CareersClient';

export const metadata: Metadata = {
  title: 'Careers | Choice Microfinance Bank',
  description: 'Join the Choice Microfinance Bank team. Explore open roles across lending, technology, operations and more.',
};

export default async function CareersPage() {
  const supabase = await createClient();
  const { data } = await supabase
    .from('jobs')
    .select('*')
    .eq('published', true)
    .order('created_at', { ascending: false });

  const jobs: Job[] = data ?? [];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="bg-[#0A0534] pt-40 pb-24 px-6 md:px-16">
        <div className="max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Careers</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Build the future of banking in Kenya.
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
            Choice Microfinance Bank is a CBK-licensed institution serving individuals and businesses. Join a team shaping financial access for Kenyans.
          </p>
        </div>
      </div>

      {/* Values strip */}
      <div className="py-16 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { title: 'Purpose-driven work', body: 'Every role at Choice Bank directly supports better financial access for Kenyans — from loans to remittance to digital banking.' },
            { title: 'Growth-focused culture', body: 'We invest in our people. Training, mentorship, and clear paths for advancement are built into how we operate.' },
            { title: 'CBK-regulated stability', body: 'Work for a licensed, regulated institution with a track record of responsible lending and customer-first banking.' },
          ].map(({ title, body }) => (
            <div key={title} className="bg-white rounded-2xl p-8 border border-gray-100">
              <h3 className="font-bold text-[#0A0534] mb-3">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{body}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Job listings — client component handles the modal */}
      <CareersClient jobs={jobs} />
    </div>
  );
}
