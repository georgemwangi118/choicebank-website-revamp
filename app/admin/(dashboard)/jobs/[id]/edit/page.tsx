import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Job } from '@/lib/supabase/types';
import JobForm from '@/components/admin/JobForm';

interface Props { params: Promise<{ id: string }>; }

export default async function EditJobPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from('jobs').select('*').eq('id', id).single();
  if (!data) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#0A0534] mb-1">Edit Job Listing</h1>
      <p className="text-sm text-gray-400 mb-8">Update the listing details below.</p>
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <JobForm job={data as Job} />
      </div>
    </div>
  );
}
