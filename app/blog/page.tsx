import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowForward, AccessTime } from '@mui/icons-material';
import { blogPosts } from '@/lib/blog';

export const metadata: Metadata = {
  title: 'Blog | Choice Microfinance Bank',
  description: 'Financial insights, product guides, and market updates from Choice Microfinance Bank.',
};

const categories = ['All', 'Loans', 'Business Banking', 'Savings', 'Remittance', 'Green Finance', 'API Banking'];

export default function BlogPage() {
  const [featured, ...rest] = blogPosts;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero */}
      <div className="relative bg-[#0A0534] pt-40 pb-24 px-6 md:px-16 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1455390582262-044cdead277a?w=1600&q=80&fit=crop"
          alt="Blog hero background"
          fill
          sizes="100vw"
          className="object-cover object-center opacity-30"
          priority
        />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-sm font-semibold text-[#E8192C] uppercase tracking-widest mb-4">Insights & Guides</p>
          <h1 className="text-5xl md:text-6xl font-bold text-white leading-tight max-w-3xl mb-6">
            Financial knowledge, plainly written.
          </h1>
          <p className="text-gray-400 text-xl max-w-2xl leading-relaxed">
            Guides on loans, savings, remittance, and business banking — written for Kenyan individuals and businesses navigating their financial decisions.
          </p>
        </div>
      </div>

      {/* Featured post */}
      <div className="py-16 px-6 md:px-16 bg-[#F7F8F8]">
        <div className="max-w-7xl mx-auto">
          <p className="text-xs font-semibold text-[#E8192C] uppercase tracking-widest mb-8">Featured Article</p>
          <Link href={`/blog/${featured.slug}`} className="group block">
            <div className="grid md:grid-cols-2 gap-0 rounded-3xl overflow-hidden bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
              <div className="relative h-72 md:h-auto">
                <Image
                  src={featured.coverImage}
                  alt={featured.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-[#0A0534]/20" />
              </div>
              <div className="p-10 flex flex-col justify-center">
                <span className="inline-block text-xs font-semibold uppercase tracking-widest text-[#E8192C] bg-[#E8192C]/10 px-3 py-1 rounded-full mb-4 w-fit">
                  {featured.category}
                </span>
                <h2 className="text-2xl md:text-3xl font-bold text-[#0A0534] leading-tight mb-4 group-hover:text-[#E8192C] transition-colors">
                  {featured.title}
                </h2>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">{featured.excerpt}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs text-gray-400">
                    <AccessTime sx={{ fontSize: 14 }} />
                    <span>{featured.readTime}</span>
                    <span className="mx-1">·</span>
                    <span>{featured.date}</span>
                  </div>
                  <span className="inline-flex items-center gap-1 text-sm font-semibold text-[#0A0534] group-hover:text-[#E8192C] transition-colors">
                    Read article <ArrowForward sx={{ fontSize: 16 }} className="group-hover:translate-x-1 transition-transform" />
                  </span>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* All posts grid */}
      <div className="py-16 px-6 md:px-16 bg-white">
        <div className="max-w-7xl mx-auto">
          {/* Category filters */}
          <div className="flex flex-wrap gap-2 mb-12">
            {categories.map((cat) => (
              <span
                key={cat}
                className={`px-4 py-2 rounded-full text-sm font-medium border cursor-default ${
                  cat === 'All'
                    ? 'bg-[#0A0534] text-white border-[#0A0534]'
                    : 'border-gray-200 text-gray-500 hover:border-[#0A0534] hover:text-[#0A0534] transition-colors'
                }`}
              >
                {cat}
              </span>
            ))}
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {rest.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <div className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow h-full flex flex-col">
                  <div className="relative h-52">
                    <Image
                      src={post.coverImage}
                      alt={post.title}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-[#0A0534]/20" />
                    <span className="absolute top-4 left-4 text-xs font-semibold uppercase tracking-widest text-white bg-[#E8192C] px-3 py-1 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <div className="p-6 flex flex-col flex-1">
                    <h3 className="font-bold text-[#0A0534] text-lg leading-snug mb-3 group-hover:text-[#E8192C] transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-500 leading-relaxed mb-4 flex-1">{post.excerpt}</p>
                    <div className="flex items-center gap-2 text-xs text-gray-400">
                      <AccessTime sx={{ fontSize: 12 }} />
                      <span>{post.readTime}</span>
                      <span className="mx-1">·</span>
                      <span>{post.date}</span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* CTA strip */}
      <div className="py-16 px-6 md:px-16 bg-[#0A0534]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold text-white mb-2">Ready to take the next step?</h3>
            <p className="text-gray-400 text-sm">Open an account, apply for a loan, or speak to a Choice Bank officer today.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-colors group"
          >
            Get in Touch
            <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
          </Link>
        </div>
      </div>
    </div>
  );
}
