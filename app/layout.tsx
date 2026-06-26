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
    default: 'ChoiceBank - Digital Banking for SMEs & Individuals',
    template: '%s | ChoiceBank',
  },
  description: 'ChoiceBank is a digital bank built for SMEs, Individuals, and Innovators. Experience seamless banking with bulk transfers, instant payments, and powerful API solutions.',
  keywords: [
    'digital banking',
    'SME banking', 
    'online banking',
    'API banking',
    'bulk transfers',
    'instant payments',
    'business banking',
    'personal banking',
    'fintech',
    'banking solutions'
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
    title: 'ChoiceBank - Digital Banking for SMEs & Individuals',
    description: 'Bank smarter, grow faster with ChoiceBank\'s innovative digital banking solutions.',
    siteName: 'ChoiceBank',
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
    title: 'ChoiceBank - Digital Banking for SMEs & Individuals',
    description: 'Bank smarter, grow faster with ChoiceBank\'s innovative digital banking solutions.',
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
      <body className={`${inter.variable} font-sans antialiased`}>
        <Header variant='light' />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}