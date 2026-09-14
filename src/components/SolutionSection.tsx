import React from 'react';
import { 
  Zap, 
  Compass, 
  MapPin, 
  ShieldCheck, 
  CreditCard, 
  BarChart3, 
  CheckCircle2, 
  Sparkles
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

const solutionIcons: Record<string, React.ReactNode> = {
  Zap: <Zap className="w-6 h-6 text-cyan-400" />,
  Compass: <Compass className="w-6 h-6 text-blue-400" />,
  MapPin: <MapPin className="w-6 h-6 text-sky-400" />,
  ShieldCheck: <ShieldCheck className="w-6 h-6 text-emerald-400" />,
  CreditCard: <CreditCard className="w-6 h-6 text-indigo-400" />,
  BarChart3: <BarChart3 className="w-6 h-6 text-cyan-300" />,
};

export const SolutionSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="yechim" className="py-24 bg-slate-900 relative overflow-hidden">
      <div className="absolute top-1/3 right-1/4 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none"></div>
      <div className="absolute bottom-10 left-10 w-[400px] h-[400px] bg-blue-600/10 rounded-full blur-[130px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.solution.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            {t.solution.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              {t.solution.titleHighlight}
            </span>{' '}
            {t.solution.titleEnd}
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.solution.subtitle}
          </p>
        </div>

        {/* 6 Grid Modules */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {t.solution.items.map((feature) => (
            <div
              key={feature.id}
              className="relative group rounded-3xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/50 p-8 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-500/10 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/20 border border-cyan-500/30 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {solutionIcons[feature.iconName] || <Zap className="w-6 h-6 text-cyan-400" />}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-3 py-1 rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {feature.highlight}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">
                  {feature.title}
                </h3>

                <p className="text-sm text-slate-300 leading-relaxed">
                  {feature.description}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-800/80 flex items-center gap-2 text-xs font-semibold text-cyan-400">
                <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-400" />
                <span>{feature.benefit}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
