import React, { useState } from 'react';
import { 
  Building, 
  MapPin, 
  Truck, 
  Droplets, 
  Quote, 
  TrendingUp, 
  CheckCircle2, 
  XCircle, 
  ArrowRight,
  Award
} from 'lucide-react';
import { CASE_STUDIES_DATA } from '../data/landingData';
import { useLanguage } from '../context/LanguageContext';

interface CaseStudiesSectionProps {
  onOpenDemoModal: () => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenDemoModal }) => {
  const { t } = useLanguage();
  const [selectedCaseId, setSelectedCaseId] = useState<string>(CASE_STUDIES_DATA[0].id);

  const activeCase = CASE_STUDIES_DATA.find((c) => c.id === selectedCaseId) || CASE_STUDIES_DATA[0];

  return (
    <section id="natijalar" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      {/* Background soft glow */}
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>{t.caseStudies.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            {t.caseStudies.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              {t.caseStudies.titleHighlight}
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.caseStudies.subtitle}
          </p>
        </div>

        {/* Company Selectors (Pills) */}
        <div className="flex items-center justify-start sm:justify-center gap-3 overflow-x-auto pb-4 sm:pb-0 mb-10 no-scrollbar">
          {CASE_STUDIES_DATA.map((item) => {
            const isSelected = item.id === selectedCaseId;
            return (
              <button
                key={item.id}
                onClick={() => setSelectedCaseId(item.id)}
                className={`px-5 py-3 rounded-2xl text-xs sm:text-sm font-bold flex items-center gap-2.5 transition-all cursor-pointer whitespace-nowrap shrink-0 border ${
                  isSelected
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white border-transparent shadow-lg shadow-cyan-500/20 ring-1 ring-cyan-400/40'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border-slate-800'
                }`}
              >
                <Building className="w-4 h-4" />
                <span>{item.companyName}</span>
              </button>
            );
          })}
        </div>

        {/* Detailed Case Study Card */}
        <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-6 sm:p-10 lg:p-12 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left: Testimonial & Company Overview */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex flex-wrap items-center gap-3 text-xs">
                <span className="px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 font-semibold border border-cyan-500/20 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {activeCase.location}
                </span>
                <span className="px-3 py-1 rounded-lg bg-blue-500/10 text-blue-300 font-semibold border border-blue-500/20 flex items-center gap-1.5">
                  <Droplets className="w-3.5 h-3.5" />
                  {activeCase.bottlesDaily}
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-800 text-slate-300 font-semibold flex items-center gap-1.5">
                  <Truck className="w-3.5 h-3.5 text-cyan-400" />
                  {activeCase.couriersCount}
                </span>
              </div>

              <div className="relative pl-6 border-l-2 border-cyan-500/50 space-y-3">
                <Quote className="w-8 h-8 text-cyan-500/30 absolute -top-2 -left-3" />
                <p className="text-slate-200 text-base sm:text-lg leading-relaxed italic">
                  "{activeCase.quote}"
                </p>
                <div>
                  <h4 className="text-white font-bold text-base">{activeCase.author}</h4>
                  <p className="text-xs text-cyan-400">{activeCase.authorRole} • {activeCase.companyName}</p>
                </div>
              </div>

              {/* Before vs After comparison */}
              <div className="pt-2 space-y-2.5 text-xs">
                <div className="p-3 rounded-xl bg-rose-500/5 border border-rose-500/20 flex items-start gap-2.5 text-slate-300">
                  <XCircle className="w-4 h-4 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-rose-300 block mb-0.5">{t.caseStudies.beforeLabel}</strong>
                    <span>{activeCase.beforeGidrogo}</span>
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-emerald-500/5 border border-emerald-500/20 flex items-start gap-2.5 text-slate-300">
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-emerald-300 block mb-0.5">{t.caseStudies.afterLabel}</strong>
                    <span>{activeCase.afterGidrogo}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Key Verified Metrics */}
            <div className="lg:col-span-5 bg-slate-950 p-6 sm:p-8 rounded-2xl border border-slate-800 space-y-6">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 flex items-center gap-1.5">
                  <TrendingUp className="w-4 h-4 text-cyan-400" />
                  {t.caseStudies.resultsLabel}
                </span>
                <span className="text-[10px] px-2 py-0.5 rounded bg-emerald-500/10 text-emerald-400 border border-emerald-500/20 font-bold">
                  VERIFIED
                </span>
              </div>

              <div className="grid grid-cols-2 gap-4">
                {activeCase.metrics.map((metric, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-900 border border-slate-800/80">
                    <p className="text-2xl sm:text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
                      {metric.value}
                    </p>
                    <p className="text-xs text-slate-400 mt-1">{metric.label}</p>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenDemoModal}
                className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-xs sm:text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
              >
                <span>Biznesingizda Shunday Natijaga Erishing</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
