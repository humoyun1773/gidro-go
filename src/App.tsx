import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { ProblemSection } from './components/ProblemSection';
import { SolutionSection } from './components/SolutionSection';
import { HowItWorks } from './components/HowItWorks';
import { LiveDashboardPreview } from './components/LiveDashboardPreview';
import { AudienceSection } from './components/AudienceSection';
import { RoiCalculator } from './components/RoiCalculator';
import { BenefitsStats } from './components/BenefitsStats';
import { TeamPartnersSection } from './components/TeamPartnersSection';
import { CaseStudiesSection } from './components/CaseStudiesSection';
import { FaqSection } from './components/FaqSection';
import { LeadFormSection } from './components/LeadFormSection';
import { AboutPage } from './components/AboutPage';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';

export function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'about'>('home');
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans antialiased overflow-x-hidden">
      {/* Sticky Modern Navbar with Page Routing & Language Switcher */}
      <Navbar 
        currentPage={currentPage}
        onNavigate={(page) => setCurrentPage(page)}
        onOpenDemoModal={handleOpenDemoModal} 
      />

      {/* Main Pages Switch */}
      <main>
        {currentPage === 'home' ? (
          <>
            {/* TZ 3.1: Hero Section */}
            <Hero onOpenDemoModal={handleOpenDemoModal} />

            {/* TZ 3.2: Problem Section (8 traditional water business problems) */}
            <ProblemSection />

            {/* TZ 3.3: Solution Section (Unified GidroGo SaaS Platform Features) */}
            <SolutionSection />

            {/* TZ 3.3: "Qanday ishlaydi" — 6-Step Workflow Process Chain */}
            <HowItWorks />

            {/* Live Interactive Dashboard Preview */}
            <LiveDashboardPreview />

            {/* TZ 3.4: Audience Targeting (1. Water Businesses / Farms, 2. Consumers) */}
            <AudienceSection onOpenDemoModal={handleOpenDemoModal} />

            {/* Interactive ROI Savings Calculator */}
            <RoiCalculator onOpenDemoModal={handleOpenDemoModal} />

            {/* TZ 3.5: Benefits & Verified Metrics */}
            <BenefitsStats />

            {/* TZ 3.6: Jamoa / Hamkorlar (Founders & Partner Water Brands) */}
            <TeamPartnersSection />

            {/* TZ 3.7: Mijozlar fikri / Case Study (Real Client Results & Before/After) */}
            <CaseStudiesSection onOpenDemoModal={handleOpenDemoModal} />

            {/* TZ 3.8: FAQ Section (Accordion Format) */}
            <FaqSection />

            {/* TZ 3.9: Final High-Conversion CTA & Lead Form + Telegram/WhatsApp */}
            <LeadFormSection />
          </>
        ) : (
          /* Dedicated "Biz haqimizda" (About Us) Page */
          <AboutPage 
            onNavigateHome={() => setCurrentPage('home')}
            onOpenDemoModal={handleOpenDemoModal}
          />
        )}
      </main>

      {/* TZ 3.10: Footer with Page Switching & Complete Requisites */}
      <Footer onNavigate={(page) => setCurrentPage(page)} />

      {/* Interactive Demo Request Modal */}
      <LeadModal isOpen={isDemoModalOpen} onClose={handleCloseDemoModal} />
    </div>
  );
}

export default App;
