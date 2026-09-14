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
import { FaqSection } from './components/FaqSection';
import { LeadFormSection } from './components/LeadFormSection';
import { Footer } from './components/Footer';
import { LeadModal } from './components/LeadModal';

export function App() {
  const [isDemoModalOpen, setIsDemoModalOpen] = useState(false);

  const handleOpenDemoModal = () => {
    setIsDemoModalOpen(true);
  };

  const handleCloseDemoModal = () => {
    setIsDemoModalOpen(false);
  };

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 selection:bg-cyan-500 selection:text-slate-950 font-sans antialiased overflow-x-hidden">
      {/* Sticky Modern Navbar */}
      <Navbar onOpenDemoModal={handleOpenDemoModal} />

      {/* Main Sections */}
      <main>
        {/* 1. Hero Section */}
        <Hero onOpenDemoModal={handleOpenDemoModal} />

        {/* 2. Problem Section (8 traditional problems) */}
        <ProblemSection />

        {/* 3. Solution Section (Unified GidroGo SaaS Platform) */}
        <SolutionSection />

        {/* 4. Process Workflow (6-step pipeline from order to stats) */}
        <HowItWorks />

        {/* 5. Interactive Live Dashboard Preview */}
        <LiveDashboardPreview />

        {/* 6. Audience Targeting (Water Farms / Companies & Consumers) */}
        <AudienceSection onOpenDemoModal={handleOpenDemoModal} />

        {/* 7. Interactive ROI Savings Calculator */}
        <RoiCalculator onOpenDemoModal={handleOpenDemoModal} />

        {/* 8. Benefits, Verified Metrics & Partner Trust Brands */}
        <BenefitsStats />

        {/* 9. FAQ Section */}
        <FaqSection />

        {/* 10. Final High-Conversion Lead Form Section */}
        <LeadFormSection />
      </main>

      {/* 11. Footer */}
      <Footer />

      {/* Interactive Demo Request Modal */}
      <LeadModal isOpen={isDemoModalOpen} onClose={handleCloseDemoModal} />
    </div>
  );
}

export default App;
