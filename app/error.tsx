'use client';

import { useEffect } from 'react';
import Link from 'next/link';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Application Error:', error);
  }, [error]);

  return (
    <div className="min-h-screen flex items-center justify-center px-6 md:px-16 bg-[#F7F8F8] pt-32">
      <div className="max-w-2xl text-center">
        <h1 className="text-6xl font-bold text-[#E8192C] mb-4">
          Oops!
        </h1>
        <h2 className="text-3xl md:text-4xl font-bold text-[#0A0534] mb-6">
          Something went wrong
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          We apologize for the inconvenience. Please try again or contact support.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <button
            onClick={reset}
            className="inline-block bg-[#E8192C] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c4121e] transition-colors"
          >
            Try Again
          </button>
          <Link
            href="/"
            className="inline-block border-2 border-[#E8192C] text-[#E8192C] px-8 py-3 rounded-full font-semibold hover:bg-[#E8192C] hover:text-white transition-colors"
          >
            Go Home
          </Link>
        </div>
      </div>
    </div>
  );
}