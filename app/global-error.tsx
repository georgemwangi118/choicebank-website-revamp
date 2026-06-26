'use client';

import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error('Global Error:', error);
  }, [error]);

  return (
    <html>
      <body>
        <div className="min-h-screen flex items-center justify-center px-6 md:px-16 bg-[#F7F8F8]">
          <div className="max-w-2xl text-center">
            <h1 className="text-6xl font-bold text-[#E8192C] mb-4">
              Critical Error
            </h1>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0A0534] mb-6">
              Something went terribly wrong
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              We&apos;re sorry for the inconvenience. Please try refreshing the page or contact support.
            </p>
            <button
              onClick={reset}
              className="inline-block bg-[#E8192C] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#c4121e] transition-colors"
            >
              Try Again
            </button>
          </div>
        </div>
      </body>
    </html>
  );
}