import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowForward,
  CheckCircleOutlined,
  DirectionsCar,
  WbSunny,
  Lock,
  BusinessCenter,
  Bolt,
  Gavel,
  Shield,
  TrendingUp,
} from '@mui/icons-material';

export const metadata: Metadata = {
  title: 'Loans & Financing | Choice Microfinance Bank',
  description: 'Access practical financing solutions designed around your goals, assets, cash flow and repayment ability. Logbook loans, asset finance, solar, fixed deposit loans and more.',
};

const loanProducts = [
  {
    icon: BusinessCenter,
    image: 'https://images.unsplash.com/photo-1664575602554-2087b04935a5?w=600&q=80&fit=crop',
    title: 'Choice Business Loan',
    tagline: 'Business support without asset security.',
    description: 'A retail financing solution for Choice Bank account holders who need funds for business expansion, education, emergencies, vehicle purchases or other financial goals.',
    highlights: [
      'Loan amount of up to Ksh 1M net',
      'Interest rate: 18% flat p.a. / 1.5% p.m.',
      'Loan tenure of up to 12 months',
      'Requires an active Choice Bank account for more than 6 months',
      'Business documents, 6-month statements and business visit apply',
    ],
    cta: 'Apply for a Business Loan',
    href: '/contact',
    accent: 'border-[#E8192C]',
  },
  {
    icon: DirectionsCar,
    image: 'https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=600&q=80&fit=crop',
    title: 'Logbook Loan',
    tagline: 'Unlock cash from your vehicle.',
    description: 'A motor vehicle-secured loan supported by a valid logbook registered in the borrower\'s name. Use the funds for personal, business or development needs while leveraging vehicle ownership.',
    highlights: [
      'Vehicles from YOM 2009 and above considered',
      'Loan amount of up to Ksh 5M',
      'Loan period of up to 18 months',
      'Up to 60% financing depending on YOM, make and condition',
      'TAT ranges from 6 to 12 hours',
    ],
    cta: 'Apply for a Logbook Loan',
    href: '/logbook-loans',
    accent: 'border-[#0A0534]',
  },
  {
    icon: DirectionsCar,
    image: 'https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?w=600&q=80&fit=crop',
    title: 'Asset Finance Loan',
    tagline: 'Own the vehicle or asset your business needs.',
    description: 'Financing for customers purchasing an asset from a yard, individual seller or company. Supports both fresh financing and hire purchase arrangements from yards.',
    highlights: [
      'Vehicles from YOM 2009 and above considered',
      'Interest rate: 2.5% p.m.',
      'Loan amount of up to Ksh 5M gross',
      'Loan period of up to 24 months',
      'Financing depends on vehicle value, condition and client financials',
    ],
    cta: 'Finance Your Asset',
    href: '/asset-finance-loans',
    accent: 'border-[#E8192C]',
  },
  {
    icon: DirectionsCar,
    image: 'https://images.unsplash.com/photo-1555215695-3004980ad54e?w=600&q=80&fit=crop',
    title: 'MOTI 80% Asset Finance',
    tagline: 'Higher financing for qualifying vehicles.',
    description: 'A higher-limit asset finance option for qualifying customers and vehicles. Designed for stronger financial profiles and newer assets that meet the stated eligibility criteria.',
    highlights: [
      'Financing of up to 80% of forced value',
      'Interest rate: 2.5% p.m.',
      'YOM: 2018 and above',
      'Loan period of 12 to 36 months',
      'Maximum loan amount of up to Ksh 5M gross',
    ],
    cta: 'Check Eligibility',
    href: '/contact',
    accent: 'border-[#0A0534]',
  },
  {
    icon: WbSunny,
    image: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=600&q=80&fit=crop',
    title: 'Solari Loan',
    tagline: 'Power your home or business sustainably.',
    description: 'A green energy loan for complete solar solutions for homes, schools, churches, hotels, restaurants and SMEs. Supports customers who want a reliable solar package.',
    highlights: [
      'Solar packages range from Ksh 150K to Ksh 10M',
      'Financing capped at Ksh 5M',
      'Minimum deposit of 40% of quoted reserve price',
      'Interest rate of 2% to 3% flat p.m.',
      'Loan term of up to 36 months',
    ],
    cta: 'Explore Solar Financing',
    href: '/contact',
    accent: 'border-[#E8192C]',
  },
  {
    icon: Lock,
    image: 'https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?w=600&q=80&fit=crop',
    title: 'Fixed Deposit Loan',
    tagline: 'Borrow against your savings.',
    description: 'A secured loan that allows customers to access financing using an active Choice Bank fixed deposit as collateral, while keeping the savings structure in place.',
    highlights: [
      'FD must be held with Choice Bank for at least 3 months',
      'Minimum FD value: Ksh 100,000 or USD 1,000',
      'Financing: 50% for 3M, 70% for 6M, 90% for 12M',
      'Interest rate: 6% plus FD rate',
      'Loan tenure must not exceed FD maturity',
    ],
    cta: 'Use Your FD as Security',
    href: '/contact',
    accent: 'border-[#0A0534]',
  },
  {
    icon: Gavel,
    image: 'https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?w=600&q=80&fit=crop',
    title: 'Auction Refinancing',
    tagline: 'Finance auction vehicle purchases.',
    description: 'A product for customers acquiring repossessed vehicles through organizational auctions. Helps qualifying buyers meet the purchase balance after paying the required deposit.',
    highlights: [
      'Client pays a 50% deposit of the selling price',
      'Loan amount: 50% of the selling price',
      'Loan period of up to 18 months',
      'Interest rate: 2.5% p.m. for loans above 7 months',
      'Auction documents required',
    ],
    cta: 'Finance an Auction Purchase',
    href: '/contact',
    accent: 'border-[#E8192C]',
  },
  {
    icon: Shield,
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=600&q=80&fit=crop',
    title: 'Insurance Premium Financing',
    tagline: 'Spread your insurance premium.',
    description: 'A motor insurance premium financing solution that helps customers access full insurance cover while paying the premium in installments.',
    highlights: [
      '30% deposit required on the premium amount',
      'Internal IPF charged at 4% p.m. on the balance',
      'External IPF charged at 5% p.m.',
      'Loan term of up to 10 months',
      'IPF BIMA loan up to Ksh 1M with 1-hour TAT',
    ],
    cta: 'Finance Your Cover',
    href: '/contact',
    accent: 'border-[#0A0534]',
  },
  {
    icon: Bolt,
    image: 'https://images.unsplash.com/photo-1553729459-efe14ef6055d?w=600&q=80&fit=crop',
    title: 'Emergency Loan',
    tagline: 'Extra support for existing clients.',
    description: 'A top-up product for well-paying existing clients who need urgent cash support. Runs separately from the main loan — the client carries two concurrent installments.',
    highlights: [
      'Available to existing clients with at least 3 installments paid without default',
      'No valuation required',
      'Loan amount of up to Ksh 200K net',
      'Interest rate: 10% p.m.',
      'Loan period of up to 3 months',
    ],
    cta: 'Request Emergency Support',
    href: '/contact',
    accent: 'border-[#E8192C]',
  },
  {
    icon: TrendingUp,
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&q=80&fit=crop',
    title: 'Top-Up Through Liquidation',
    tagline: 'More room from your existing loan.',
    description: 'A top-up option for existing clients who need additional financing on their current facility. The existing balance is liquidated as part of the new disbursement process.',
    highlights: [
      'Available to clients who have paid at least 50% of principal without default',
      'Current valuation is required',
      'Loan amount based on the latest valuation report',
      'Interest rate: 3% p.m.',
      'Loan period of up to 18 months',
    ],
    cta: 'Request a Top-Up',
    href: '/contact',
    accent: 'border-[#0A0534]',
  },
];

const quickStats = [
  { label: 'Loan buyoff available', value: 'Yes' },
  { label: 'Logbook loan TAT', value: '6–12 hrs' },
  { label: 'Max logbook loan', value: 'Ksh 5M' },
  { label: 'Solar loan term', value: 'Up to 36M' },
  { label: 'Emergency loan TAT', value: 'Fast' },
  { label: 'Regulation', value: 'CBK Licensed' },
];

export default function LoansPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-[#0A0534] pt-40 pb-24 px-6 md:px-16 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1600&q=80&fit=crop"
          alt="Loans hero background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Loans & Financing</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Flexible financing for the goals ahead.
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed mb-10">
            Access practical financing solutions designed around your goals, assets, cash flow and repayment ability. Whether the need is working capital, asset purchase, solar installation, insurance premium support or a top-up facility — Choice Microfinance Bank has a structured credit solution for you.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-all group"
            >
              Apply for a Loan
              <ArrowForward className="group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 border border-white/20 text-white px-8 py-4 rounded-full font-semibold hover:bg-white/10 transition-all"
            >
              Speak to a loan officer
            </Link>
          </div>
        </div>
      </div>

      {/* Quick stats */}
      <div className="py-16 px-6 md:px-16 bg-[#E8192C]/10">
        <div className="max-w-7xl mx-auto grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {quickStats.map(({ label, value }) => (
            <div key={label} className="text-center">
              <p className="text-lg font-bold text-[#0A0534]">{value}</p>
              <p className="text-xs text-gray-500 mt-1 uppercase tracking-widest">{label}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Loan products */}
      <div className="py-24 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-xl mb-14">
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Loan products</p>
            <h2 className="text-4xl font-bold text-[#0A0534]">Choose the financing option that supports your next move.</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {loanProducts.map(({ icon: Icon, image, title, tagline, description, highlights, cta, href, accent }) => (
              <div key={title} className={`bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm flex flex-col`}>
                {/* Image */}
                <div className="relative h-48 w-full">
                  <Image
                    src={image}
                    alt={title}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-[#0A0534]/40" />
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <div className="w-8 h-8 rounded-lg bg-white/20 backdrop-blur-sm flex items-center justify-center">
                      <Icon className="text-white" sx={{ fontSize: 16 }} />
                    </div>
                    <span className="text-xs font-semibold text-[#E8192C] uppercase tracking-widest bg-white/10 backdrop-blur-sm px-2 py-1 rounded-full">{tagline}</span>
                  </div>
                </div>

                {/* Content */}
                <div className={`p-7 border-t-4 ${accent} flex flex-col flex-1`}>
                  <h3 className="font-bold text-[#0A0534] text-lg mb-2">{title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed mb-5">{description}</p>
                  <ul className="space-y-2 mb-6 flex-1">
                    {highlights.map((h) => (
                      <li key={h} className="flex items-start gap-2 text-sm text-gray-600">
                        <CheckCircleOutlined className="text-[#E8192C] shrink-0 mt-0.5" fontSize="small" />
                        {h}
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={href}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[#0A0534] hover:text-[#E8192C] transition-colors group"
                  >
                    {cta}
                    <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Loan buyoff callout */}
      <div className="py-16 px-6 md:px-16 bg-[#0A0534]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-3">Loan Buyoff</p>
            <h2 className="text-4xl font-bold text-white mb-4">Already have a logbook loan elsewhere?</h2>
            <p className="text-gray-400 leading-relaxed">
              Move your existing logbook loan from another MFI or bank to Choice Bank. Qualifying customers must have paid at least 50% of principal without default. Vehicles from YOM 2014 and above.
            </p>
          </div>
          <div className="space-y-3">
            {[
              'Loan amount of up to Ksh 5M gross',
              'Loan period of up to 18 months',
              'Vehicle YOM: 2014 and above',
              'Client must have paid at least 50% of principal without default',
              'Up to 50% financing depending on YOM, make and condition',
            ].map((item) => (
              <div key={item} className="flex items-start gap-3 text-gray-300 text-sm">
                <CheckCircleOutlined className="text-[#E8192C] shrink-0 mt-0.5" fontSize="small" />
                {item}
              </div>
            ))}
            <div className="pt-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-[#E8192C] text-white px-6 py-3 rounded-full font-semibold hover:bg-[#c4121e] transition-colors group text-sm"
              >
                Request Loan Buyoff
                <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* CTA */}
      <div className="py-16 px-6 md:px-16 bg-white text-center border-t border-gray-100">
        <p className="text-sm text-gray-400 mb-4">Choice Microfinance Bank is licensed and regulated by the Central Bank of Kenya.</p>
        <h2 className="text-3xl font-bold text-[#0A0534] mb-4">Not sure which loan is right for you?</h2>
        <p className="text-gray-500 mb-8 max-w-md mx-auto">Speak to a Choice Bank loan officer. We&apos;ll match you to the right product for your situation.</p>
        <Link
          href="/contact"
          className="inline-flex items-center gap-2 bg-[#0A0534] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#E8192C] transition-colors group"
        >
          Speak to a Choice Bank Officer
          <ArrowForward className="group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
