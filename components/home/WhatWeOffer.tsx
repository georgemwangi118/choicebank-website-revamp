
import { SwapHoriz, CreditCard, AccountBalance, Public } from '@mui/icons-material';

const offerings = [
  {
    icon: SwapHoriz,
    title: 'Bulk Payments',
    description: 'Send money to hundreds of recipients simultaneously across banks, M-Pesa, Airtel Money, and international corridors.',
  },
  {
    icon: Public,
    title: 'Foreign Exchange',
    description: 'Access real exchange rates with no hidden markups. Send and receive in KES, USD, GBP, EUR and more.',
  },
  {
    icon: AccountBalance,
    title: 'Lending',
    description: 'Asset finance and logbook loans with competitive rates. Apply online and get a decision within hours.',
  },
  {
    icon: CreditCard,
    title: 'Remittance',
    description: 'Receive money from anywhere in the world directly into your ChoiceBank account fast, safe, and transparent.',
  },
];

export default function WhatWeOffer() {
  return (
    <section className="bg-white py-24 px-6 md:px-16">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="max-w-2xl mb-16">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">
            What we offer
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#0A0534] leading-tight mb-4">
            Your complete financial life, all in one place.
          </h2>
          <p className="text-gray-500 text-lg leading-relaxed">
            Move money your way, at real rates, without the rules that slow everyone else down.
          </p>
        </div>

        {/* Feature grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {offerings.map(({ icon: Icon, title, description }) => (
            <div
              key={title}
              className="group p-6 rounded-2xl border border-gray-100 bg-[#F7F8F8] hover:border-[#E8192C]/30 hover:bg-red-50/30 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-[#E8192C]/10 flex items-center justify-center mb-4 group-hover:bg-[#E8192C]/20 transition-colors">
                <Icon className="text-[#E8192C]" />
              </div>
              <h3 className="font-semibold text-[#0A0534] mb-2">{title}</h3>
              <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
