'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Close, KeyboardArrowDown } from '@mui/icons-material';
import { usePathname } from 'next/navigation';

export default function Header() {
  const pathname = usePathname();

  const [loginLinkOpen, setLoginLinkOpen] = useState(false);
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loanLinkOpen, setLoanLinkOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const logoSrc = '/logo.png';
  const textColor = 'text-white';
  const linkHover = 'hover:text-[#E8192C] transition-colors';
  const buttonBg = 'bg-[#E8192C] text-white hover:bg-[#c4121e]';

  const closeAllDropdowns = () => {
    setLoanLinkOpen(false);
    setLoginLinkOpen(false);
    setGetStartedOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        closeAllDropdowns();
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const isActive = (path: string) => pathname === path;

  return (
    <nav ref={navRef} className={`font-gilroy fixed top-0 left-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0A0534] shadow-md' : 'bg-transparent'} ${textColor}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-20">
        {/** Left: Logo */}
        <div className="flex items-center space-x-6">
          <Link href="/" onClick={closeAllDropdowns}>
            <div className="bg-white rounded-lg px-3 py-1">
              <Image
                src={logoSrc}
                alt='Choice Bank Logo'
                width={200}
                height={30}
                className='w-auto h-10 object-contain'
                priority
              />
            </div>
          </Link>
        </div>

        {/** Desktop Navs */}
        <div className='hidden md:flex items-center space-x-6 text-sm font-medium'>
          <Link
            href="/personal-banking"
            onClick={closeAllDropdowns}
            className={`${linkHover} ${isActive('/personal-banking') ? 'text-[#E8192C]' : textColor}`}
          >
            Personal Banking
          </Link>
          <Link
            href="/business-banking"
            onClick={closeAllDropdowns}
            className={`${linkHover} ${isActive('/business-banking') ? 'text-[#E8192C]' : textColor}`}
          >
            Business Banking
          </Link>
        
          <Link
            href="/api-banking"
            onClick={closeAllDropdowns}
            className={`${linkHover} ${isActive('/api-banking') ? 'text-[#E8192C]' : textColor}`}
          >
            API Banking
          </Link>

          <Link
            href="/remittance"
            onClick={closeAllDropdowns}
            className={`${linkHover} ${isActive('/remittance') ? 'text-[#E8192C]' : textColor}`}
          >
            Remittance
          </Link>

          <Link
            href="/blog"
            onClick={closeAllDropdowns}
            className={`${linkHover} ${isActive('/blog') ? 'text-[#E8192C]' : textColor}`}
          >
            Blog
          </Link>

          {/** Loans Dropdown */}
          <div className='relative'>
            <button
              onClick={() => {
                setLoanLinkOpen(!loanLinkOpen);
                setLoginLinkOpen(false);
                setGetStartedOpen(false)
              }}
              className={linkHover}
            >
              Loans <KeyboardArrowDown className='inline-block ml-1' />
            </button>
            {loanLinkOpen && (
              <div className='absolute top-full mt-2 bg-white text-black rounded-md shadow-md w-48 py-2'>
                <Link
                  href="/loans"
                  className='block px-4 py-2 hover:bg-gray-100 transition-colors font-semibold'
                  onClick={() => setLoanLinkOpen(false)}
                >
                  All Loans
                </Link>
                <Link
                  href="/logbook-loans"
                  className='block px-4 py-2 hover:bg-gray-100 transition-colors'
                  onClick={() => setLoanLinkOpen(false)}
                >
                  Logbook Loans
                </Link>
                <Link
                  href="/asset-finance-loans"
                  className='block px-4 py-2 hover:bg-gray-100 transition-colors'
                  onClick={() => setLoanLinkOpen(false)}
                >
                  Asset Finance Loans
                </Link>
                <Link
                  href="/loan-buyoff"
                  className='block px-4 py-2 hover:bg-gray-100 transition-colors'
                  onClick={() => setLoanLinkOpen(false)}
                >
                  Loan Buyoff
                </Link>
              </div>
            )}
          </div>
        </div>

        {/** Desktop Actions */}
        <div className='hidden md:flex items-center space-x-4 ml-8'>
          {/** Login Dropdown */}
          <div className='relative'>
            <button
              onClick={() => {
                setLoginLinkOpen(!loginLinkOpen);
                setLoanLinkOpen(false);
                setGetStartedOpen(false)
              }}
              className={linkHover}
            >
              Log in <KeyboardArrowDown className='inline-block ml-1' />
            </button>
            {loginLinkOpen && (
              <div className="absolute top-full mt-2 bg-white text-black rounded-md shadow-md w-48 py-2 right-0">
                <a
                  href="https://baas-dashboard.choicedigitalbank.com/login?redirect=dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 font-[500] transition-colors"
                  onClick={() => setLoginLinkOpen(false)}
                >
                  BaaS Dashboard
                </a>
                <a
                  href="https://business.choicedigitalbank.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 font-[500] transition-colors"
                  onClick={() => setLoginLinkOpen(false)}
                >
                  Business Internet Banking
                </a>
              </div>
            )}
          </div>

          {/** Get Started Dropdown */}
          <div className='relative'>
            <button
              onClick={() => {
                setGetStartedOpen(!getStartedOpen);
                setLoanLinkOpen(false);
                setLoginLinkOpen(false);
              }}
              className={`px-4 py-2 rounded-full font-semibold ${buttonBg} transition-colors duration-300`}
            >
              Get the App
            </button>
            {getStartedOpen && (
              <div className="absolute top-full mt-2 bg-white text-black rounded-md shadow-md w-48 py-2 right-0">
                <a
                  href="https://apps.apple.com/us/app/choice-bank/id6504041400?platform=ipad"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 font-[500] transition-colors"
                  onClick={() => setGetStartedOpen(false)}
                >
                  App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=micro.finance.bank.choice.kenya&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block px-4 py-2 text-sm text-gray-800 hover:bg-gray-200 font-[500] transition-colors"
                  onClick={() => setGetStartedOpen(false)}
                >
                  Play Store
                </a>
              </div>
            )}
          </div>
        </div>

        {/** Mobile Hamburger */}
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <Close fontSize="large" /> : <Menu fontSize="large" />}
        </button>
      </div>

      {/** Mobile Menu */}
      {mobileOpen && (
        <div className='md:hidden bg-[#0A0534] text-white px-4 py-6 space-y-4'>
          {/** Main Nav Links */}
          <div className='flex flex-col space-y-3 text-lg front-medium'>
            <Link
              href="/personal-banking"
              onClick={() => setMobileOpen(false)}
              className="block py-2 border-b border-white/10"
            >
              Personal
            </Link>
            <Link
              href="/business-banking"
              onClick={() => setMobileOpen(false)}
              className="block py-2 border-b border-white/10"
            >
              Business
            </Link>
          
            <Link
              href="/api-banking"
              onClick={() => setMobileOpen(false)}
              className="block py-2 border-b border-white/10"
            >
              API Banking
            </Link>
            <Link
              href="/remittance"
              onClick={() => setMobileOpen(false)}
              className="block py-2 border-b border-white/10"
            >
              Remittance
            </Link>
            <Link
              href="/blog"
              onClick={() => setMobileOpen(false)}
              className="block py-2 border-b border-white/10"
            >
              Blog
            </Link>

            <button
              onClick={() => {
                setLoanLinkOpen(!loanLinkOpen);
                setLoginLinkOpen(false);
                setGetStartedOpen(false);
              }}
              className="flex justify-between items-center py-2 border-b border-white/10 w-full"
            >
              Loans <KeyboardArrowDown />
            </button>

            {loanLinkOpen && (
              <div className="pl-4 flex flex-col space-y-2 text-base text-gray-300">
                <Link
                  href="/asset-finance-loans"
                  onClick={() => {
                    setLoanLinkOpen(false);
                    setMobileOpen(false);
                  }}
                  className={linkHover}
                >
                  Asset Finance Loans
                </Link>
                <Link
                  href="/logbook-loans"
                  onClick={() => {
                    setLoanLinkOpen(false);
                    setMobileOpen(false);
                  }}
                  className={linkHover}
                >
                  Logbook Loans
                </Link>
                <Link
                  href="/loan-buyoff"
                  onClick={() => {
                    setLoanLinkOpen(false);
                    setMobileOpen(false);
                  }}
                  className={linkHover}
                >
                  Loan Buyoff
                </Link>
              </div>
            )}
          </div>

          <button
            onClick={() => {
              setLoginLinkOpen(!loginLinkOpen);
              setLoanLinkOpen(false);
              setGetStartedOpen(false);
            }}
            className="flex justify-between items-center py-2 border-b border-white/10 w-full"
          >
            Login <KeyboardArrowDown />
          </button>

          {/** Login */}
          {loginLinkOpen && (
            <div className="pl-4 flex flex-col space-y-2 text-base text-gray-300">
              <a
                  href="https://baas-dashboard.choicedigitalbank.com/login?redirect=dashboard"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setLoginLinkOpen(false)}
                  className={linkHover}
                >
                  BaaS Dashboard
                </a>
                <a
                  href="https://business.choicedigitalbank.com/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setLoginLinkOpen(false)}
                  className={linkHover}
                >
                  Business Internet Banking
                </a>
            </div>
          )}

          <button
            onClick={() => {
              setGetStartedOpen(!getStartedOpen);
              setLoginLinkOpen(false);
              setLoanLinkOpen(false);
              
            }}
            className="flex justify-between items-center py-2 border-b border-white/10 w-full"
          >
            Get the App <KeyboardArrowDown />
          </button>

          {/** Login */}
          {getStartedOpen && (
            <div className="pl-4 flex flex-col space-y-2 text-base text-gray-300">
               <a
                  href="https://apps.apple.com/us/app/choice-bank/id6504041400?platform=ipad"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setGetStartedOpen(false)}
                  className={linkHover}
                >
                  App Store
                </a>
                <a
                  href="https://play.google.com/store/apps/details?id=micro.finance.bank.choice.kenya&hl=en"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setGetStartedOpen(false)}
                  className={linkHover}
                >
                  Play Store
                </a>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}