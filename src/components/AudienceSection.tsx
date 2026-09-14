import React, { useState } from 'react';
import { 
  Building2, 
  UserCheck, 
  ArrowRight
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AudienceSectionProps {
  onOpenDemoModal: () => void;
}

export const AudienceSection: React.FC<AudienceSectionProps> = ({ onOpenDemoModal }) => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'business' | 'consumer'>('business');

  return (
    <section id="auditoriya" className="py-24 bg-slate-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
            <UserCheck className="w-3.5 h-3.5" />
            <span>{t.audience.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            {t.audience.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              {t.audience.titleHighlight}
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.audience.subtitle}
          </p>

          {/* Toggle pill buttons */}
          <div className="flex items-center justify-center p-1.5 rounded-2xl bg-slate-900 border border-slate-800 max-w-md mx-auto mt-8">
            <button
              onClick={() => setActiveTab('business')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'business'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <Building2 className="w-4 h-4" />
              <span>{t.audience.businessTab}</span>
            </button>
            <button
              onClick={() => setActiveTab('consumer')}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-bold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                activeTab === 'consumer'
                  ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              <UserCheck className="w-4 h-4" />
              <span>{t.audience.consumerTab}</span>
            </button>
          </div>
        </div>

        {/* Content Box */}
        {activeTab === 'business' ? (
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 text-xs font-semibold">
                  <Building2 className="w-4 h-4" /> {t.audience.businessBadge}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {t.audience.businessTitle}
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
                  {t.audience.businessDesc}
                </p>

                <div className="pt-4">
                  <button
                    onClick={onOpenDemoModal}
                    className="px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>{t.audience.businessBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <p className="text-slate-400 mb-1">Time saved:</p>
                  <p className="font-bold text-white text-sm">~2.5 hours / vehicle daily</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <p className="text-slate-400 mb-1">Bottle loss:</p>
                  <p className="font-bold text-emerald-400 text-sm">0 lost 19L bottles</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <p className="text-slate-400 mb-1">Accounting routine:</p>
                  <p className="font-bold text-cyan-400 text-sm">Instant 1-click reports</p>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 text-blue-300 text-xs font-semibold">
                  <UserCheck className="w-4 h-4" /> {t.audience.consumerBadge}
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  {t.audience.consumerTitle}
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
                  {t.audience.consumerDesc}
                </p>

                <div className="pt-4">
                  <button
                    onClick={onOpenDemoModal}
                    className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>{t.audience.consumerBtn}</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-3 text-xs">
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <p className="text-slate-400 mb-1">Order speed:</p>
                  <p className="font-bold text-white text-sm">Takes less than 30 seconds</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <p className="text-slate-400 mb-1">Notifications:</p>
                  <p className="font-bold text-cyan-400 text-sm">Live SMS & Telegram alerts</p>
                </div>
                <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                  <p className="text-slate-400 mb-1">Purity guaranteed:</p>
                  <p className="font-bold text-white text-sm">Certified springs only</p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
