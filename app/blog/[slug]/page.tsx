import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowBack, AccessTime, ArrowForward } from '@mui/icons-material';
import { blogPosts, getPostBySlug, getAllSlugs } from '@/lib/blog';

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};
  return {
    title: `${post.title} | Choice Microfinance Bank`,
    description: post.excerpt,
  };
}

function renderContent(content: string) {
  const lines = content.trim().split('\n');
  const elements: React.ReactNode[] = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];

    if (line.startsWith('## ')) {
      elements.push(
        <h2 key={i} className="text-2xl font-bold text-[#0A0534] mt-10 mb-4">
          {line.replace('## ', '')}
        </h2>
      );
    } else if (line.startsWith('- ')) {
      const items: string[] = [];
      while (i < lines.length && lines[i].startsWith('- ')) {
        items.push(lines[i].replace('- ', ''));
        i++;
      }
      elements.push(
        <ul key={`ul-${i}`} className="list-disc list-inside space-y-2 text-gray-600 mb-4 pl-2">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
          ))}
        </ul>
      );
      continue;
    } else if (/^\d+\. /.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\. /.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\. /, ''));
        i++;
      }
      elements.push(
        <ol key={`ol-${i}`} className="list-decimal list-inside space-y-2 text-gray-600 mb-4 pl-2">
          {items.map((item, j) => (
            <li key={j} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }} />
          ))}
        </ol>
      );
      continue;
    } else if (line.trim() === '') {
      // skip blank lines
    } else {
      elements.push(
        <p
          key={i}
          className="text-gray-600 leading-relaxed mb-4"
          dangerouslySetInnerHTML={{ __html: line.replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>') }}
        />
      );
    }

    i++;
  }

  return elements;
}

export default async function BlogPostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const related = blogPosts.filter((p) => p.slug !== slug && p.category === post.category).slice(0, 2);
  const fallbackRelated = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);
  const relatedPosts = related.length >= 2 ? related : fallbackRelated;

  return (
    <div className="min-h-screen bg-white">
      {/* Hero image */}
      <div className="relative h-[480px] bg-[#0A0534]">
        <Image
          src={post.coverImage}
          alt={post.title}
          fill
          sizes="100vw"
          className="object-cover object-center opacity-50"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0A0534] via-[#0A0534]/30 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 px-6 md:px-16 pb-12 max-w-4xl mx-auto w-full">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm mb-6 transition-colors"
          >
            <ArrowBack sx={{ fontSize: 16 }} /> Back to Blog
          </Link>
          <span className="inline-block text-xs font-semibold uppercase tracking-widest text-white bg-[#E8192C] px-3 py-1 rounded-full mb-4">
            {post.category}
          </span>
          <h1 className="text-3xl md:text-5xl font-bold text-white leading-tight">{post.title}</h1>
        </div>
      </div>

      {/* Meta bar */}
      <div className="border-b border-gray-100 px-6 md:px-16 py-4">
        <div className="max-w-4xl mx-auto flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span className="font-semibold text-[#0A0534]">{post.author.name}</span>
          <span className="text-gray-300">·</span>
          <span>{post.author.role}</span>
          <span className="text-gray-300">·</span>
          <span className="flex items-center gap-1">
            <AccessTime sx={{ fontSize: 14 }} /> {post.readTime}
          </span>
          <span className="text-gray-300">·</span>
          <span>{post.date}</span>
        </div>
      </div>

      {/* Article body */}
      <article className="px-6 md:px-16 py-12">
        <div className="max-w-4xl mx-auto">
          <p className="text-lg text-gray-500 leading-relaxed mb-8 border-l-4 border-[#E8192C] pl-6 italic">
            {post.excerpt}
          </p>
          <div className="prose-like">{renderContent(post.content)}</div>
        </div>
      </article>

      {/* CTA */}
      <div className="px-6 md:px-16 py-12 bg-[#F7F8F8]">
        <div className="max-w-4xl mx-auto bg-[#0A0534] rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold text-white mb-2">Ready to apply?</h3>
            <p className="text-gray-400 text-sm">Speak to a Choice Bank officer to get started today.</p>
          </div>
          <Link
            href="/contact"
            className="shrink-0 inline-flex items-center gap-2 bg-[#E8192C] text-white px-8 py-4 rounded-full font-semibold hover:bg-[#c4121e] transition-colors group"
          >
            Contact Us
            <ArrowForward className="group-hover:translate-x-1 transition-transform" fontSize="small" />
          </Link>
        </div>
      </div>

      {/* Related posts */}
      {relatedPosts.length > 0 && (
        <div className="px-6 md:px-16 py-16 bg-white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl font-bold text-[#0A0534] mb-8">More articles</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {relatedPosts.map((p) => (
                <Link key={p.slug} href={`/blog/${p.slug}`} className="group block">
                  <div className="rounded-2xl overflow-hidden border border-gray-100 hover:shadow-md transition-shadow flex flex-col">
                    <div className="relative h-44">
                      <Image
                        src={p.coverImage}
                        alt={p.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                      <div className="absolute inset-0 bg-[#0A0534]/20" />
                    </div>
                    <div className="p-6">
                      <span className="text-xs font-semibold text-[#E8192C] uppercase tracking-widest">{p.category}</span>
                      <h3 className="font-bold text-[#0A0534] mt-2 mb-1 group-hover:text-[#E8192C] transition-colors">
                        {p.title}
                      </h3>
                      <p className="text-xs text-gray-400">{p.readTime} · {p.date}</p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
