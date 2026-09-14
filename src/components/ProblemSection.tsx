import React from 'react';
import { 
  PhoneCall, 
  Navigation, 
  Boxes, 
  Calculator, 
  Database, 
  UserX, 
  TrendingDown, 
  AlertOctagon, 
  AlertTriangle 
} from 'lucide-react';
import { PROBLEMS_DATA } from '../data/landingData';

const iconMap: Record<string, React.ReactNode> = {
  PhoneCall: <PhoneCall className="w-6 h-6 text-rose-400" />,
  Navigation: <Navigation className="w-6 h-6 text-amber-400" />,
  Boxes: <Boxes className="w-6 h-6 text-orange-400" />,
  Calculator: <Calculator className="w-6 h-6 text-yellow-400" />,
  Database: <Database className="w-6 h-6 text-red-400" />,
  UserX: <UserX className="w-6 h-6 text-rose-500" />,
  TrendingDown: <TrendingDown className="w-6 h-6 text-pink-400" />,
  AlertOctagon: <AlertOctagon className="w-6 h-6 text-red-500" />,
};

export const ProblemSection: React.FC = () => {
  return (
    <section id="muammolar" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800/80">
      {/* Subtle red/amber glow indicating problem area */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-rose-500/5 rounded-full blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-rose-500/10 border border-rose-500/20 text-rose-400 text-xs font-semibold mb-4">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Eski usulda ishlashning zararlari</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            An'anaviy suv yetkazib berishdagi{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-amber-400">
              8 ta asosiy muammo
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Daftarlar, tarqoq Telegram guruhlari va telefon qo'ng'iroqlari orqali ishlash biznesingizga har kuni vaqt, pul va mijozlar yo'qotilishiga sabab bo'lmoqda.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {PROBLEMS_DATA.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-2xl bg-slate-900/60 hover:bg-slate-900 border border-slate-800/80 hover:border-rose-500/40 p-6 transition-all duration-300 hover:shadow-xl hover:shadow-rose-950/20 flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon and Badge */}
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-xl bg-slate-800/80 border border-slate-700/60 flex items-center justify-center group-hover:scale-110 transition-transform">
                    {iconMap[item.iconName] || <AlertOctagon className="w-6 h-6 text-rose-400" />}
                  </div>
                  <span className="text-[11px] font-mono font-semibold px-2.5 py-1 rounded-md bg-rose-500/10 text-rose-300 border border-rose-500/20">
                    {item.badge}
                  </span>
                </div>

                <h3 className="text-base font-bold text-white mb-2 leading-snug group-hover:text-rose-200 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              {/* Card Footer with Impact Indicator */}
              <div className="mt-5 pt-4 border-t border-slate-800 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-medium">Zarar:</span>
                <span className="font-semibold text-rose-400/90">{item.impact}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner in Problem section */}
        <div className="mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-r from-rose-950/40 via-slate-900 to-cyan-950/40 border border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div>
            <h4 className="text-lg font-bold text-white mb-1">
              Siz ham har oy millionlab so'm va mijozlaringizni yo'qotyapsizmi?
            </h4>
            <p className="text-sm text-slate-400">
              GidroGo tizimi barcha bu muammolarni bitta dastur orqali to'liq hal qiladi.
            </p>
          </div>
          <a
            href="#yechim"
            className="shrink-0 px-6 py-3 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm transition-all shadow-lg shadow-cyan-500/20"
          >
            Yechimni ko'rish &rarr;
          </a>
        </div>
      </div>
    </section>
  );
};
