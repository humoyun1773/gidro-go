import React from 'react';
import { Award } from 'lucide-react';
import { STATS_DATA } from '../data/landingData';

export const BenefitsStats: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 relative overflow-hidden border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Isbotlangan Natijalar</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            Raqamlar So'zlaganda —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              GidroGo Samaradorligi
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Biznesingiz har bir jarayonini avtomatlashtirish orqali erishiladigan haqiqiy ko'rsatkichlar.
          </p>
        </div>

        {/* 4 Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {STATS_DATA.map((stat, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-950/70 border border-slate-800 hover:border-cyan-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-cyan-950/30 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xs font-bold font-mono px-2.5 py-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    {stat.change}
                  </span>
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 group-hover:animate-ping"></div>
                </div>

                <div className="text-4xl sm:text-5xl font-black text-white tracking-tight mb-2 group-hover:text-cyan-400 transition-colors">
                  {stat.value}
                </div>

                <h3 className="text-base font-bold text-slate-200 mb-2">
                  {stat.label}
                </h3>

                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {stat.description}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 text-[11px] text-cyan-400 font-medium">
                100% amaliyotda tasdiqlangan
              </div>
            </div>
          ))}
        </div>

        {/* Partners & Trust Brands Bar (3.6 Hamkor fermalar) */}
        <div className="mt-20 pt-10 border-t border-slate-800/80 text-center">
          <p className="text-xs font-bold uppercase tracking-widest text-slate-400 mb-8">
            50 dan ortiq yetakchi suv korxonalari va fermalari GidroGo tizimiga ishonishadi
          </p>

          <div className="flex flex-wrap items-center justify-center gap-8 sm:gap-14 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {[
              { name: "Aqua Pure Tech", icon: "💧" },
              { name: "Crystal Springs O'zbekiston", icon: "💎" },
              { name: "Zomin Tog' Suvi", icon: "🏔️" },
              { name: "HydroLife Farm", icon: "🌱" },
              { name: "Silver Water Group", icon: "✨" },
            ].map((partner, i) => (
              <div key={i} className="flex items-center gap-2 text-slate-300 font-bold text-sm sm:text-base hover:text-cyan-400 transition-colors">
                <span className="text-xl">{partner.icon}</span>
                <span>{partner.name}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
