'use client';

import { Send, Bolt, Lock } from '@mui/icons-material';

const features = [
  {
    icon: Send,
    tag: 'Bulk Transfers',
    title: 'Pay everyone at once.',
    description: 'Upload a list and disburse salaries, supplier payments, or agent commissions across banks and mobile wallets in a single click. No limits on recipients.',
    accent: 'from-[#E8192C] to-[#6366f1]',
    bg: 'bg-[#F7F4FF]',
    iconBg: 'bg-[#E8192C]/15',
    iconColor: 'text-[#E8192C]',
  },
  {
    icon: Bolt,
    tag: 'Instant Payments',
    title: 'Money moves in seconds.',
    description: 'Send to any bank or mobile wallet in Kenya instantly. Whether it\'s KES 100 or KES 10 million — the speed is the same. No queues, no waiting days.',
    accent: 'from-[#0A0534] to-[#1a0f4e]',
    bg: 'bg-[#F0F0F8]',
    iconBg: 'bg-[#0A0534]/10',
    iconColor: 'text-[#0A0534]',
  },
  {
    icon: Lock,
    tag: 'Secure Transactions',
    title: 'Protected at every step.',
    description: 'Bank-grade encryption, multi-factor authentication, and real-time fraud monitoring. Every transaction is verified and logged for your peace of mind.',
    accent: 'from-[#059669] to-[#10b981]',
    bg: 'bg-[#F0FDF8]',
    iconBg: 'bg-emerald-100',
    iconColor: 'text-emerald-600',
  },
];

export default function HowItWorks() {
  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">
            How it works
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0534] leading-tight">
            Easy. Fast. Smart.
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {features.map(({ icon: Icon, tag, title, description, bg, iconBg, iconColor }) => (
            <div key={title} className={`${bg} rounded-3xl p-8 flex flex-col gap-5`}>
              <div className={`w-12 h-12 rounded-xl ${iconBg} flex items-center justify-center`}>
                <Icon className={iconColor} />
              </div>
              <div>
                <span className="text-xs font-semibold uppercase tracking-widest text-gray-400">{tag}</span>
                <h3 className="text-xl font-bold text-[#0A0534] mt-1 mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
