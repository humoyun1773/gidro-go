import React, { useState } from 'react';
import { 
  Smartphone, 
  Cpu, 
  Truck, 
  Droplet, 
  CheckCircle2, 
  LineChart, 
  ArrowRight, 
  Layers
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const stepIcons: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-5 h-5 text-cyan-400" />,
  Cpu: <Cpu className="w-5 h-5 text-blue-400" />,
  Truck: <Truck className="w-5 h-5 text-indigo-400" />,
  Droplet: <Droplet className="w-5 h-5 text-sky-400" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
  LineChart: <LineChart className="w-5 h-5 text-purple-400" />,
};

export const HowItWorks: React.FC = () => {
  const { t } = useLanguage();
  const [activeStep, setActiveStep] = useState<number>(1);
  const currentStepData = t.howItWorks.steps.find((s) => s.step === activeStep) || t.howItWorks.steps[0];

  return (
    <section id="jarayon" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>{t.howItWorks.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            {t.howItWorks.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              {t.howItWorks.titleHighlight}
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.howItWorks.subtitle}
          </p>
        </div>

        {/* Horizontal Process Steps Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {t.howItWorks.steps.map((step) => {
            const isActive = step.step === activeStep;
            return (
              <button
                key={step.step}
                onClick={() => setActiveStep(step.step)}
                className={`text-left p-4 rounded-2xl transition-all duration-200 border cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-b from-cyan-500/20 to-blue-600/10 border-cyan-500/80 shadow-lg shadow-cyan-500/15 ring-1 ring-cyan-500/50'
                    : 'bg-slate-900/60 border-slate-800 hover:border-slate-700 hover:bg-slate-900'
                }`}
              >
                <div className="flex items-center justify-between mb-2">
                  <span
                    className={`w-7 h-7 rounded-lg flex items-center justify-center text-xs font-bold ${
                      isActive
                        ? 'bg-cyan-500 text-slate-950 font-black'
                        : 'bg-slate-800 text-slate-400'
                    }`}
                  >
                    {step.step}
                  </span>
                  <div className="opacity-80">
                    {stepIcons[step.iconName]}
                  </div>
                </div>
                <h4 className={`text-xs font-bold leading-tight ${isActive ? 'text-white' : 'text-slate-300'}`}>
                  {step.title}
                </h4>
              </button>
            );
          })}
        </div>

        {/* Selected Step Detailed Visual Presentation */}
        <div className="rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 p-6 sm:p-10 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left: Text explanation */}
            <div className="lg:col-span-6 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-xs font-mono font-semibold">
                <span>{currentStepData.badge}</span>
                <span>•</span>
                <span>{currentStepData.shortDesc}</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                {currentStepData.title}
              </h3>

              <p className="text-slate-300 text-base leading-relaxed">
                {currentStepData.fullDesc}
              </p>

              {/* Data payload pills */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {currentStepData.details.map((item, i) => (
                  <div
                    key={i}
                    className="p-3.5 rounded-xl bg-slate-950/70 border border-slate-800 text-xs"
                  >
                    <span className="text-slate-400 block mb-1">{item.label}</span>
                    <span className="text-white font-semibold text-sm">{item.value}</span>
                  </div>
                ))}
              </div>

              {/* Step Navigation Controls */}
              <div className="flex items-center gap-3 pt-4">
                <button
                  disabled={activeStep === 1}
                  onClick={() => setActiveStep((prev) => Math.max(1, prev - 1))}
                  className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold text-white transition-all cursor-pointer"
                >
                  {t.howItWorks.prevStep}
                </button>
                <button
                  disabled={activeStep === t.howItWorks.steps.length}
                  onClick={() => setActiveStep((prev) => Math.min(t.howItWorks.steps.length, prev + 1))}
                  className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold text-slate-950 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>{t.howItWorks.nextStep}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Interactive simulation preview */}
            <div className="lg:col-span-6 bg-slate-950/80 rounded-2xl border border-slate-800 p-6 shadow-inner relative">
              <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
                  <span className="text-xs font-mono text-cyan-300">{t.howItWorks.engineStep} #{activeStep}</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">STATUS: OK</span>
              </div>

              <div className="space-y-3">
                <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
                  <p className="text-cyan-400 font-semibold flex items-center gap-1">
                    {stepIcons[currentStepData.iconName]}
                    <span>{currentStepData.title}</span>
                  </p>
                  <div className="bg-slate-950 p-3.5 rounded-lg text-slate-300 space-y-2">
                    <p className="text-xs text-slate-300 leading-relaxed">{currentStepData.fullDesc}</p>
                    <div className="pt-2 border-t border-slate-800/80 grid grid-cols-2 gap-2 text-[11px]">
                      {currentStepData.details.map((d, idx) => (
                        <div key={idx}>
                          <span className="text-slate-500 block">{d.label}:</span>
                          <span className="text-cyan-300 font-semibold">{d.value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
