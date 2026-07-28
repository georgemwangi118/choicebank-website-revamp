import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';
const AddIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path fillRule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clipRule="evenodd" />
  </svg>
);
import { Job } from '@/lib/supabase/types';
import AdminJobActions from '@/components/admin/AdminJobActions';

export default async function AdminJobsPage() {
  const supabase = await createClient();
  const { data: jobs } = await supabase.from('jobs').select('*').order('created_at', { ascending: false });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <div>
          <h1 className="text-2xl font-bold text-[#0A0534]">Job Listings</h1>
          <p className="text-sm text-gray-400 mt-1">{jobs?.length ?? 0} total listings</p>
        </div>
        <Link href="/admin/jobs/new" className="inline-flex items-center gap-2 bg-[#0A0534] text-white px-5 py-2.5 rounded-full text-sm font-semibold hover:bg-[#0A0534]/90 transition-colors">
          <AddIcon /> New Listing
        </Link>
      </div>

      <div className="bg-white rounded-2xl border border-gray-100 overflow-hidden">
        {!jobs?.length ? (
          <div className="p-12 text-center text-gray-400">No job listings yet. Create your first one.</div>
        ) : (
          <table className="w-full text-sm">
            <thead className="border-b border-gray-100 bg-gray-50">
              <tr>
                <th className="text-left px-6 py-3 font-semibold text-gray-500">Title</th>
                <th className="text-left px-6 py-3 font-semibold text-gray-500">Department</th>
                <th className="text-left px-6 py-3 font-semibold text-gray-500">Type</th>
                <th className="text-left px-6 py-3 font-semibold text-gray-500">Status</th>
                <th className="px-6 py-3" />
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {(jobs as Job[]).map((job) => (
                <tr key={job.id} className="hover:bg-gray-50 transition-colors">
                  <td className="px-6 py-4 font-medium text-[#0A0534]">{job.title}</td>
                  <td className="px-6 py-4 text-gray-500">{job.department}</td>
                  <td className="px-6 py-4 text-gray-500">{job.type}</td>
                  <td className="px-6 py-4">
                    <span className={`inline-block px-2 py-0.5 rounded-full text-xs font-semibold ${
                      job.published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-500'
                    }`}>
                      {job.published ? 'Active' : 'Draft'}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <AdminJobActions id={job.id} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
}
