import HeroSection from '@/components/home/HeroSection';
import LogbookLoansSection from '@/components/home/LogbookLoansSection';
import RemittanceSection from '@/components/home/RemittanceSection';
import HowItWorks from '@/components/home/HowItWorks';
import ApiBankingSection from '@/components/home/ApiBankingSection';

export default function Home() {
  return (
    <div className="relative">
      <HeroSection />
      <LogbookLoansSection />
      <RemittanceSection />
      <ApiBankingSection />
      <HowItWorks />
    </div>
  );
}