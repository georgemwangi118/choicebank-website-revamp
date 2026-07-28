import PostForm from '@/components/admin/PostForm';

export default function NewPostPage() {
  return (
    <div>
      <h1 className="text-2xl font-bold text-[#0A0534] mb-1">New Blog Post</h1>
      <p className="text-sm text-gray-400 mb-8">Fill in the details below and publish.</p>
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <PostForm />
      </div>
    </div>
  );
}
