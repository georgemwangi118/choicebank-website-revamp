import Link from 'next/link';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Page Not Found | ChoiceBank',
  description: 'The page you are looking for could not be found.',
  robots: {
    index: false,
    follow: false,
  },
};

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-16 bg-[#F7F8F8] pt-32">
      <div className="max-w-2xl text-center">
        <h1 className="text-9xl font-bold text-[#E8192C]">404</h1>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A0534] mt-4 mb-6">
          Page Not Found
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Oops! The page you&apos;re looking for doesn&apos;t exist or has been moved.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <Link
            href="/"
            className="inline-block bg-[#E8192C] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c4121e] transition-colors"
          >
            Go Home
          </Link>
          <Link
            href="/contact"
            className="inline-block border-2 border-[#E8192C] text-[#E8192C] px-8 py-3 rounded-full font-semibold hover:bg-[#E8192C] hover:text-white transition-colors"
          >
            Contact Support
          </Link>
        </div>
      </div>
    </div>
  );
}