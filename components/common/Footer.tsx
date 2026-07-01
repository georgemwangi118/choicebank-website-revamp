'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { Instagram, LinkedIn, X } from '@mui/icons-material';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const [getAppOpen, setGetAppOpen] = useState(false);
  const getAppRef = useRef<HTMLDivElement>(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (getAppRef.current && !getAppRef.current.contains(event.target as Node)) {
        setGetAppOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <footer className="font-gilroy bg-[#08003C] text-white px-6 md:px-20 pt-24 pb-10 relative">
      {/* Call to Action */}
      <div className="text-center mb-16">
        <p className="text-sm text-[#E8192C] uppercase tracking-wide">
          Unlock the Future of Payments:
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mt-2 leading-tight">
          Start Sending Money, Saving Smart, and <br />
          <span className="text-[#E8192C]">
            Taking Control of Your Finances!
          </span>
        </h2>
        <div className="flex flex-wrap justify-center gap-4 mt-8">
          <Link
            href="/personal-banking"
            className="bg-white text-black px-6 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors"
          >
            Learn more
          </Link>

          {/* Get the App dropdown */}
          <div className="relative" ref={getAppRef}>
            <button
              onClick={() => setGetAppOpen(!getAppOpen)}
              className="border border-white text-white px-6 py-3 rounded-full font-medium hover:bg-white hover:text-black transition-colors"
            >
              Get the app
            </button>
            {getAppOpen && (
              <div className="absolute top-full mt-2 bg-white text-black rounded-md shadow-md w-48 py-2 right-0 z-10">
                <a
                  href="https://apps.apple.com/us/app/choice-bank/id6504041400?platform=ipad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 font-[500] transition-colors"
                  onClick={() => setGetAppOpen(false)}
                >
                  App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=micro.finance.bank.choice.kenya&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 font-[500] transition-colors"
                  onClick={() => setGetAppOpen(false)}
                >
                  Play Store
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      <hr className="border-white/10 mb-10" />

      {/* Footer Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-8 text-sm">
        {/* Contact */}
        <div>
          <h3 className="font-semibold mb-2">Contact us</h3>
          <p className="text-white/70 mb-1">+254 729 114 444</p>
          <p className="text-white/70 mb-1">contactcentre@choice-bank.com</p>
          <p className="text-white/70 mb-1">
            Riverside Square, <br />
            Riverside drive
          </p>
          <p className="text-white/70 mb-2">PO BOX 29796 - 00100 Nairobi</p>
          <div className="flex space-x-2">
            <a
              href="https://www.instagram.com/choicemfbbank/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/50 p-2 rounded-md hover:bg-white hover:text-black transition-colors"
              aria-label="Instagram"
            >
              <Instagram sx={{ fontSize: 16 }} />
            </a>
            <a
              href="https://www.linkedin.com/company/choice-microfinance-bank/mycompany/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/50 p-2 rounded-md hover:bg-white hover:text-black transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedIn sx={{ fontSize: 16 }} />
            </a>
            <a
              href="https://twitter.com/choicemfbbank"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/50 p-2 rounded-md hover:bg-white hover:text-black transition-colors"
              aria-label="X (Twitter)"
            >
              <X sx={{ fontSize: 16 }} />
            </a>
          </div>
        </div>

        {/* Products */}
        <div>
          <h3 className="font-semibold mb-2">Products</h3>
          <ul className="space-y-1 text-white/70">
            <li>
              <Link href="/business-banking" className="hover:text-white transition-colors">
                Business Private Banking
              </Link>
            </li>
            <li>
              <Link href="/personal-banking" className="hover:text-white transition-colors">
                Personal Private Banking
              </Link>
            </li>
            <li>
              <Link href="/api-banking" className="hover:text-white transition-colors">
                API Banking
              </Link>
            </li>
            <li>
              <Link href="/asset-finance-loans" className="hover:text-white transition-colors">
                Asset Finance Loans
              </Link>
            </li>
            <li>
              <Link href="/logbook-loans" className="hover:text-white transition-colors">
                Logbook Loans
              </Link>
            </li>
          </ul>
        </div>

        {/* Company */}
        <div>
          <h3 className="font-semibold mb-2">Company</h3>
          <ul className="space-y-1 text-white/70">
            <li>
              <Link href="/about-us" className="hover:text-white transition-colors">
                About Us
              </Link>
            </li>
            <li>
              <Link href="/careers" className="hover:text-white transition-colors">
                Careers
              </Link>
            </li>
            
            <li>
              <Link href="/contact-us" className="hover:text-white transition-colors">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Legal */}
        <div>
          <h3 className="font-semibold mb-2">Legal</h3>
          <ul className="space-y-1 text-white/70">
            <li>
              <a
                href="https://app.choicedigitalbank.com/#/privacypolicy"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Privacy policy
              </a>
            </li>
            <li>
              <a
                href="https://app.choicedigitalbank.com/#/conditions"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition-colors"
              >
                Terms of service
              </a>
            </li>
            <li>
              <Link href="#" className="hover:text-white transition-colors">
                Acceptable use policy
              </Link>
            </li>
          </ul>
        </div>

        {/* Support */}
        <div>
          <h3 className="font-semibold mb-2">Support</h3>
          <ul className="space-y-1 text-white/70">
            
            <li>
              <Link href="/faq" className="hover:text-white transition-colors">
                FAQ
              </Link>
            </li>
          </ul>
        </div>
      </div>

      {/* Bottom note */}
      <p className="text-center text-white/60 text-sm mt-16">
        Ⓒ{currentYear} Choice Bank is regulated by CBK
      </p>
    </footer>
  );
}