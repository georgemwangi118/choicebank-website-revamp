import JobForm from '@/components/admin/JobForm';

export default function NewJobPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#0A0534] mb-1">New Job Listing</h1>
      <p className="text-sm text-gray-400 mb-8">Fill in the details and post the listing.</p>
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <JobForm />
      </div>
    </div>
  );
}
