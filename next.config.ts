import type { NextConfig } from "next";

const csp = [
  "default-src 'self'",
  // Next.js inline scripts + Telvoip inline init script
  "script-src 'self' 'unsafe-inline'",
  // MUI injects inline styles at runtime; Google Fonts and Telvoip CSS are external
  "style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://app.telvoip.io",
  // Self-hosted Gilroy fonts + Google Fonts static files (Material Icons)
  "font-src 'self' https://fonts.gstatic.com",
  // Local images, data URIs (MUI icons), Unsplash and Supabase storage
  "img-src 'self' data: https://images.unsplash.com https://*.supabase.co",
  // Telvoip chat iframe
  "frame-src https://app.telvoip.io",
  // Client-side API calls: Telvoip settings fetch + Supabase (HTTP and WebSocket)
  "connect-src 'self' https://api.telvoip.io https://knyhzwfcbyurvapvbivf.supabase.co wss://knyhzwfcbyurvapvbivf.supabase.co",
  // Block plugins (Flash etc.)
  "object-src 'none'",
  // Prevent base tag hijacking
  "base-uri 'self'",
  // Only allow forms to submit to same origin
  "form-action 'self'",
].join('; ');

const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: csp,
  },
  // Force HTTPS for 2 years; include subdomains
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains',
  },
  // Prevent clickjacking — disallow embedding this site in iframes
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN',
  },
  // Stop browsers guessing file types (MIME sniffing)
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  // Only send the origin (no path) when navigating to external sites
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  // Restrict access to browser features (camera, mic, location etc.)
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=()',
  },
];

const nextConfig: NextConfig = {
  // Remove the X-Powered-By: Next.js header that reveals the tech stack
  poweredByHeader: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: '*.supabase.co',
      },
    ],
  },
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: securityHeaders,
      },
    ];
  },
  async redirects() {
    return [
      // Old /borrow/ URL structure → current URLs (301 permanent — tells Google to update its index)
      { source: '/borrow/logbook-loans', destination: '/logbook-loans', permanent: true },
      { source: '/borrow/asset-finance', destination: '/asset-finance-loans', permanent: true },
      { source: '/borrow/asset-finance-loans', destination: '/asset-finance-loans', permanent: true },
      { source: '/borrow/loan-buyoff', destination: '/loan-buyoff', permanent: true },
      { source: '/borrow/:path*', destination: '/loans', permanent: true },
      // Other common stale paths
      { source: '/about', destination: '/about-us', permanent: true },
      { source: '/remittance-cny', destination: '/remittance', permanent: true },
    ];
  },
};

export default nextConfig;
