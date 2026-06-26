'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, Close, KeyboardArrowDown } from '@mui/icons-material';
import { usePathname } from 'next/navigation';

interface HeaderProps {
  variant?: 'light' | 'dark' | 'default';
}

export default function Header({ variant = 'light' }: HeaderProps) {
  const pathname = usePathname();

  const [companyLinkOpen, setCompanyLinkOpen] = useState(false);
  const [loginLinkOpen, setLoginLinkOpen] = useState(false);
  const [getStartedOpen, setGetStartedOpen] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [loanLinkOpen, setLoanLinkOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null);

  // Logo based on variant
  const logoSrc = variant === 'light' ? '/logo2.png' : variant === 'dark' ? '/logo2.png' : '/logo.png';

  // Text color based on variant
  const textColor = variant === 'light'
    ? 'text-white'
    : variant === 'dark'
      ? 'text-white'
      : 'text-[#0A0534]'

  const linkHover = 'hover:text-[#E8192C] transition-colors';

  // Button styles based on variant
  const buttonBg = variant === 'light'
    ? 'bg-white text-[#0A0534] hover:bg-gray-100'
    : variant === 'dark'
      ? 'bg-[#E8192C] text-white hover:bg-[#c4121e]'
      : 'bg-[#E8192C] text-white hover:bg-[#c4121e]';

  const businessBtnBg = variant === 'light'
    ? 'hover:bg-white/20 hover:text-white'
    : variant === 'dark'
      ? 'hover:bg-[#0A0534] hover:text-white'
      : 'hover:bg-[#0A0534] hover:text-white';

  const closeAllDropdowns = () => {
    setCompanyLinkOpen(false);
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
    <nav ref={navRef} className={`font-gilroy absolute top-0 left-0 w-full z-50 ${textColor}`}>
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex items-center justify-between h-20">
        {/** Left: Logo */}
        <div className="flex items-center space-x-6">
          <Link href="/" onClick={closeAllDropdowns}>
            <Image
              src={logoSrc}
              alt='Choice Bank Logo'
              width={120}
              height={24}
              className='w-auto h-6 object-contain'
              priority
            />
          </Link>

          {/** Desktop Tabs */}
          <div className="hidden md:flex space-x-1 bg-white/10 rounded-full px-1 py-1 text-sm font-medium">
            <Link
              href="/personal-banking"
              onClick={closeAllDropdowns}
              className={`px-3 py-1 rounded-full ${businessBtnBg} ${
                isActive('/personal-banking') ? 'bg-[#0A0534] text-white' : ''
              }`}
            >
              Personal
            </Link>
            <Link
              href="/business-banking"
              onClick={closeAllDropdowns}
              className={`px-3 py-1 rounded-full ${businessBtnBg} ${
                isActive('/business-banking') ? 'bg-[#0A0534] text-white' : ''
              }`}
            >
              Business
            </Link>
          </div>
        </div>

        {/** Desktop Navs */}
        <div className='hidden md:flex items-center space-x-6 text-sm font-medium'>
          <Link
            href="/api-banking"
            onClick={closeAllDropdowns}
            className={`${linkHover} ${isActive('/api-banking') ? 'text-[#E8192C]' : textColor}`}
          >
            API Banking
          </Link>

          {/** Company Dropdown */}
          <div className='relative'>
            <button
              onClick={() => {
                setCompanyLinkOpen(!companyLinkOpen);
                setLoanLinkOpen(false);
                setLoginLinkOpen(false);
                setGetStartedOpen(false)
              }}
              className={linkHover}
            >
              Company <KeyboardArrowDown className='inline-block ml-1' />
            </button>
            {companyLinkOpen && (
              <div className='absolute top-full mt-2 bg-white text-black rounded-md shadow-md w-40 py-2'>
                <Link
                  href="/careers"
                  className='block px-4 py-2 hover:bg-gray-100 transition-colors'
                  onClick={() => setCompanyLinkOpen(false)}
                >
                  Careers
                </Link>
                <Link
                  href="/about-us"
                  className='block px-4 py-2 hover:bg-gray-100 transition-colors'
                  onClick={() => setCompanyLinkOpen(false)}
                >
                  About Us
                </Link>
              </div>
            )}
          </div>

          {/** Loans Dropdown */}
          <div className='relative'>
            <button
              onClick={() => {
                setLoanLinkOpen(!loanLinkOpen);
                setCompanyLinkOpen(false);
                setLoginLinkOpen(false);
                setGetStartedOpen(false)
              }}
              className={linkHover}
            >
              Loans <KeyboardArrowDown className='inline-block ml-1' />
            </button>
            {loanLinkOpen && (
              <div className='absolute top-full mt-2 bg-white text-black rounded-md shadow-md w-40 py-2'>
                <Link
                  href="/asset-finance-loans"
                  className='block px-4 py-2 hover:bg-gray-100 transition-colors'
                  onClick={() => setLoanLinkOpen(false)}
                >
                  Asset Finance Loans
                </Link>
                <Link
                  href="/logbook-loans"
                  className='block px-4 py-2 hover:bg-gray-100 transition-colors'
                  onClick={() => setLoanLinkOpen(false)}
                >
                  Logbook Loans
                </Link>
              </div>
            )}
          </div>

          <Link
            href="/contact"
            className={`${linkHover} ${isActive('/help-center') ? 'text-[#E8192C]' : textColor}`}
            onClick={closeAllDropdowns}
          >
            Contact Us
          </Link>
        </div>

        {/** Desktop Actions */}
        <div className='hidden md:flex items-center space-x-4 ml-8'>
          {/** Login Dropdown */}
          <div className='relative'>
            <button
              onClick={() => {
                setLoginLinkOpen(!loginLinkOpen);
                setLoanLinkOpen(false);
                setCompanyLinkOpen(false);
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
                setCompanyLinkOpen(false);
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

            <button
              onClick={() => {
                setCompanyLinkOpen(!companyLinkOpen);
                setLoanLinkOpen(false);
                setLoginLinkOpen(false);
                setGetStartedOpen(false);
              }}
              className="flex justify-between items-center py-2 border-b border-white/10 w-full"
            >
              Company <KeyboardArrowDown />
            </button>

            {companyLinkOpen && (
              <div className="pl-4 flex flex-col space-y-2 text-base text-gray-300">
                <Link
                  href="/careers"
                  onClick={() => {
                    setCompanyLinkOpen(false);
                    setMobileOpen(false);
                  }}
                >
                  Careers
                </Link>
                <Link
                  href="/about-us"
                  onClick={() => {
                    setCompanyLinkOpen(false);
                    setMobileOpen(false);
                  }}
                >
                  About Us
                </Link>
              </div>
            )}

            <button
              onClick={() => {
                setLoanLinkOpen(!loanLinkOpen);
                setCompanyLinkOpen(false);
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
                >
                  Asset Finance Loans
                </Link>
                <Link
                  href="/logbook-loans"
                  onClick={() => {
                    setLoanLinkOpen(false);
                    setMobileOpen(false);
                  }}
                >
                  Logbook Loans
                </Link>
              </div>
            )}

            <Link
              href="/contact"
              onClick={() => setMobileOpen(false)}
              className="block py-2 border-b border-white/10"
            >
              Contact Us
            </Link>
          </div>

          {/** Login */}
          <div>
            <a
              href="https://baas-dashboard.choicedigitalbank.com/login?redirect=dashboard"
              target="_blank"
              rel="noopener noreferrer"
              className="block py-2 border-b border-white/10"
            >
              Log in
            </a>
          </div>

          {/* Get Started Button */}
          <div>
            <a
              href="https://apps.apple.com/us/app/choice-bank/id6504041400?platform=ipad"
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-[#E8192C] px-4 py-3 rounded-full text-center font-semibold hover:bg-[#c4121e] transition-colors"
            >
              Get started — It&apos;s free
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}