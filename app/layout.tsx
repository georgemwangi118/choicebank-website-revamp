import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import Header from '@/components/common/Header';
import Footer from '@/components/common/Footer';

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://choice-bank.com'),
  title: {
    default: 'Choice Microfinance Bank | Logbook Loans, Asset Finance & More in Kenya',
    template: '%s | Choice Microfinance Bank',
  },
  description: 'Choice Microfinance Bank is a CBK licensed digital microfinance bank in Kenya offering logbook loans, asset finance, business loans, fixed deposits, remittance and API banking services.',
  keywords: [
    'microfinance banks in Kenya',
    'licensed microfinance banks in Kenya',
    'CBK regulated microfinance banks in Kenya',
    'digital microfinance banks in Kenya',
    'best microfinance banks in Kenya',
    'microfinance banking services in Kenya',
    'Choice Microfinance Bank Kenya',
    'choice bank Kenya',
    'microfinance bank Nairobi',
    'microfinance bank Nakuru',
    'microfinance bank Mombasa',
    'logbook loans Kenya',
    'asset finance Kenya',
    'business loans Kenya',
    'fixed deposit Kenya',
    'remittance Kenya',
    'API banking Kenya',
    'digital banking Kenya',
    'SME loans Kenya',
    'CBK licensed bank Kenya',
  ],
  authors: [{ name: 'ChoiceBank', url: 'https://choice-bank.com' }],
  creator: 'ChoiceBank',
  publisher: 'ChoiceBank',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://choice-bank.com',
    title: 'Choice Microfinance Bank | Logbook Loans, Asset Finance & More in Kenya',
    description: 'CBK licensed microfinance bank in Kenya offering logbook loans, asset finance, business loans, fixed deposits, remittance and API banking services.',
    siteName: 'Choice Microfinance Bank',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'ChoiceBank - Digital Banking',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Choice Microfinance Bank | Logbook Loans, Asset Finance & More in Kenya',
    description: 'CBK licensed microfinance bank in Kenya offering logbook loans, asset finance, business loans, fixed deposits, remittance and API banking services.',
    images: ['/twitter-image.jpg'],
  },
  alternates: {
    canonical: 'https://choice-bank.com',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans antialiased`} suppressHydrationWarning>
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}