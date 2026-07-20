import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
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
