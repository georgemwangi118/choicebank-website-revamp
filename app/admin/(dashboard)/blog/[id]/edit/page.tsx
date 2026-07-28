import { notFound } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import { Post } from '@/lib/supabase/types';
import PostForm from '@/components/admin/PostForm';

interface Props { params: Promise<{ id: string }>; }

export default async function EditPostPage({ params }: Props) {
  const { id } = await params;
  const supabase = await createClient();
  const { data } = await supabase.from('posts').select('*').eq('id', id).single();
  if (!data) notFound();

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#0A0534] mb-1">Edit Post</h1>
      <p className="text-sm text-gray-400 mb-8">Update the post details below.</p>
      <div className="bg-white rounded-2xl border border-gray-100 p-8">
        <PostForm post={data as Post} />
      </div>
    </div>
  );
}
