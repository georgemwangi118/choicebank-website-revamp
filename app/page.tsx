import HeroSection from '@/components/home/HeroSection';
import CTA from '@/components/common/CTA';
import LogbookLoansSection from '@/components/home/LogbookLoansSection';
import RemittanceSection from '@/components/home/RemittanceSection';
import WhatWeOffer from '@/components/home/WhatWeOffer';
import HowItWorks from '@/components/home/HowItWorks';
import ApiBankingSection from '@/components/home/ApiBankingSection';
import Documentation from '@/components/home/Documentation';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <LogbookLoansSection />
      <RemittanceSection />
      <WhatWeOffer />
      <HowItWorks />
      <ApiBankingSection />
      <Documentation />
      <CTA />
    </div>
  );
}