'use client';

import Link from 'next/link';
import { Instagram, LinkedIn, X, YouTube } from '@mui/icons-material';
import tiktok from '@/public/assets/footer/tiktok.png'
import Image from 'next/image';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="font-gilroy bg-[#0A0534] text-white px-6 md:px-20 pt-10 pb-10 relative">
      {/* Call to Action */}
  

      {/* Footer Grid */}
      <div className="max-w-5xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-8 text-sm">
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
              href="https://www.linkedin.com/company/choice-microfinance-bank/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/50 p-2 rounded-md hover:bg-white hover:text-black transition-colors"
              aria-label="LinkedIn"
            >
              <LinkedIn sx={{ fontSize: 16 }} />
            </a>
            <a
              href="https://x.com/choicebank_ke"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/50 p-2 rounded-md hover:bg-white hover:text-black transition-colors"
              aria-label="X (Twitter)"
            >
              <X sx={{ fontSize: 16 }} />
            </a>
            <a
              href="https://youtube.com/@choicemicrofinancebank4783?si=Cf1ZFc7JGr5d_u3A"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/50 p-2 rounded-md hover:bg-white hover:text-black transition-colors"
              aria-label="YouTube"
            >
              <YouTube sx={{ fontSize: 16 }} />
            </a>
             <a
              href="https://www.tiktok.com/@choicebankke"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white/50 p-2 rounded-md hover:bg-white hover:text-black transition-colors"
              aria-label="TikTok"
            >
              <Image
                src={tiktok}
                alt="TikTok"
                width={16}
                height={16}
                className="w-4 h-4 object-contain"
              />
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
              <Link href="/contact" className="hover:text-white transition-colors">
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