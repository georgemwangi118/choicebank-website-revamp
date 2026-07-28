import { createClient } from '@/lib/supabase/server';
import Link from 'next/link';

const ArticleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M4.125 3C3.089 3 2.25 3.84 2.25 4.875V18a3 3 0 0 0 3 3h15a3 3 0 0 1-3-3V4.875C17.25 3.839 16.41 3 15.375 3H4.125ZM12 9.75a.75.75 0 0 0 0 1.5h1.5a.75.75 0 0 0 0-1.5H12Zm-.75-2.25a.75.75 0 0 1 .75-.75h1.5a.75.75 0 0 1 0 1.5H12a.75.75 0 0 1-.75-.75ZM6 12.75a.75.75 0 0 0 0 1.5h7.5a.75.75 0 0 0 0-1.5H6Zm-.75 3.75a.75.75 0 0 1 .75-.75h7.5a.75.75 0 0 1 0 1.5H6a.75.75 0 0 1-.75-.75ZM6 6.75a.75.75 0 0 0-.75.75v3c0 .414.336.75.75.75h3a.75.75 0 0 0 .75-.75v-3A.75.75 0 0 0 9 6.75H6Z" clipRule="evenodd" />
  </svg>
);

const WorkIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path fillRule="evenodd" d="M7.5 5.25a3 3 0 0 1 3-3h3a3 3 0 0 1 3 3v.205c.933.085 1.857.197 2.774.334 1.454.218 2.476 1.483 2.476 2.917v3.033c0 1.211-.734 2.352-1.936 2.752A24.726 24.726 0 0 1 12 15.75c-2.73 0-5.357-.442-7.814-1.259-1.202-.4-1.936-1.541-1.936-2.752V8.706c0-1.434 1.022-2.7 2.476-2.917A48.814 48.814 0 0 1 7.5 5.455V5.25Zm7.5 0v.09a49.488 49.488 0 0 0-6 0v-.09a1.5 1.5 0 0 1 1.5-1.5h3a1.5 1.5 0 0 1 1.5 1.5Zm-3 8.25a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z" clipRule="evenodd" />
    <path d="M3 18.4v-2.796a4.3 4.3 0 0 0 .713.31A26.226 26.226 0 0 0 12 17.25c2.892 0 5.68-.468 8.287-1.335.252-.084.49-.189.713-.311V18.4c0 1.452-1.047 2.728-2.523 2.923-2.12.282-4.282.427-6.477.427a49.19 49.19 0 0 1-6.477-.427C4.047 21.128 3 19.852 3 18.4Z" />
  </svg>
);

const ArrowIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 group-hover:translate-x-1 transition-transform">
    <path fillRule="evenodd" d="M12.97 3.97a.75.75 0 0 1 1.06 0l7.5 7.5a.75.75 0 0 1 0 1.06l-7.5 7.5a.75.75 0 1 1-1.06-1.06l6.22-6.22H3a.75.75 0 0 1 0-1.5h16.19l-6.22-6.22a.75.75 0 0 1 0-1.06Z" clipRule="evenodd" />
  </svg>
);

const stats = [
  { label: 'Blog Posts', icon: ArticleIcon, href: '/admin/blog', color: 'text-[#E8192C]', bg: 'bg-[#E8192C]/10', key: 'posts' },
  { label: 'Job Listings', icon: WorkIcon, href: '/admin/jobs', color: 'text-[#0A0534]', bg: 'bg-[#0A0534]/10', key: 'jobs' },
] as const;

export default async function AdminDashboard() {
  const supabase = await createClient();

  const [{ count: postCount }, { count: jobCount }] = await Promise.all([
    supabase.from('posts').select('*', { count: 'exact', head: true }),
    supabase.from('jobs').select('*', { count: 'exact', head: true }),
  ]);

  const counts: Record<string, number> = { posts: postCount ?? 0, jobs: jobCount ?? 0 };

  return (
    <div>
      <h1 className="text-2xl font-bold text-[#0A0534] mb-1">Dashboard</h1>
      <p className="text-sm text-gray-400 mb-8">Manage your blog posts and job listings.</p>

      <div className="grid md:grid-cols-2 gap-6 mb-10">
        {stats.map(({ label, icon: Icon, href, color, bg, key }) => (
          <Link key={label} href={href} className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-md transition-shadow flex items-center justify-between group">
            <div>
              <p className="text-sm text-gray-400 mb-1">{label}</p>
              <p className="text-4xl font-bold text-[#0A0534]">{counts[key]}</p>
            </div>
            <div className={`w-12 h-12 rounded-xl ${bg} flex items-center justify-center ${color}`}>
              <Icon />
            </div>
          </Link>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Link href="/admin/blog/new" className="flex items-center justify-between bg-[#0A0534] text-white rounded-2xl p-6 hover:bg-[#0A0534]/90 transition-colors group">
          <div>
            <p className="font-semibold mb-1">New Blog Post</p>
            <p className="text-white/50 text-sm">Write and publish an article</p>
          </div>
          <ArrowIcon />
        </Link>
        <Link href="/admin/jobs/new" className="flex items-center justify-between bg-[#E8192C] text-white rounded-2xl p-6 hover:bg-[#c4121e] transition-colors group">
          <div>
            <p className="font-semibold mb-1">New Job Listing</p>
            <p className="text-white/50 text-sm">Post an open position</p>
          </div>
          <ArrowIcon />
        </Link>
      </div>
    </div>
  );
}
