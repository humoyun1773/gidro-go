import React from 'react';
import { Users, Award, ShieldCheck, Droplets } from 'lucide-react';
import { TEAM_DATA, PARTNERS_DATA } from '../data/landingData';
import { useLanguage } from '../context/LanguageContext';

export const TeamPartnersSection: React.FC = () => {
  const { t } = useLanguage();

  return (
    <section id="jamoa" className="py-24 bg-slate-900/60 relative overflow-hidden border-t border-slate-800">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Sub-section 1: Team & Founders (TZ 3.6 Asoschilar) */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
            <Users className="w-3.5 h-3.5" />
            <span>{t.teamPartners.teamBadge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            {t.teamPartners.teamTitle}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              {t.teamPartners.teamHighlight}
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.teamPartners.teamSubtitle}
          </p>
        </div>

        {/* 3 Founders Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
          {TEAM_DATA.map((member, idx) => (
            <div
              key={idx}
              className="p-8 rounded-3xl bg-slate-950/80 border border-slate-800 hover:border-cyan-500/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-cyan-950/30 text-center flex flex-col justify-between group"
            >
              <div>
                <div className={`w-20 h-20 rounded-2xl bg-gradient-to-tr ${member.gradient} flex items-center justify-center text-2xl font-black text-white mx-auto mb-6 shadow-lg shadow-cyan-500/20 group-hover:scale-105 transition-transform`}>
                  {member.initials}
                </div>

                <h3 className="text-xl font-bold text-white mb-1.5">{member.name}</h3>
                <p className="text-xs font-semibold text-cyan-400 mb-4">{member.role}</p>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">{member.bio}</p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-800/80 flex items-center justify-center gap-2 text-[11px] text-slate-500 font-mono">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                <span>Tasdiqlangan mutaxassis</span>
              </div>
            </div>
          ))}
        </div>

        {/* Sub-section 2: Partner Farms & Brands (TZ 3.6 Hamkor fermalar) */}
        <div className="pt-12 border-t border-slate-800/80">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-300 text-xs font-semibold mb-3">
              <Award className="w-3.5 h-3.5" />
              <span>{t.teamPartners.partnersBadge}</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-black text-white mb-2">
              {t.teamPartners.partnersTitle}
            </h3>
            <p className="text-xs sm:text-sm text-slate-400">
              {t.teamPartners.partnersSubtitle}
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {PARTNERS_DATA.map((partner, i) => (
              <div
                key={i}
                className="p-5 rounded-2xl bg-slate-950/60 border border-slate-800 hover:border-cyan-500/40 transition-all flex flex-col items-center justify-center text-center group"
              >
                <span className="text-3xl mb-2.5 group-hover:scale-110 transition-transform">{partner.icon}</span>
                <span className="font-bold text-slate-200 text-xs sm:text-sm group-hover:text-cyan-400 transition-colors">
                  {partner.name}
                </span>
                <span className="text-[10px] text-slate-400 mt-1 flex items-center gap-1 font-mono">
                  <Droplets className="w-2.5 h-2.5 text-cyan-400" />
                  {partner.bottles}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
