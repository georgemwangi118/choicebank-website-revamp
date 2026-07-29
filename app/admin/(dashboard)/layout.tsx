import { redirect } from 'next/navigation';
import { createClient } from '@/lib/supabase/server';
import AdminSidebar from '@/components/admin/AdminSidebar';
import SessionGuard from '@/components/admin/SessionGuard';

export const metadata = { title: 'Admin | Choice Bank', robots: { index: false } };

export default async function AdminDashboardLayout({ children }: { children: React.ReactNode }) {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect('/admin/login');

  return (
    <div className="min-h-screen bg-gray-50 flex" suppressHydrationWarning>
      <AdminSidebar />
      <main className="flex-1 p-8 overflow-auto" suppressHydrationWarning>{children}</main>
      <SessionGuard />
    </div>
  );
}
