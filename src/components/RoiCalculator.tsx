import React, { useState } from 'react';
import { Calculator, ArrowRight, DollarSign, Clock, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface RoiCalculatorProps {
  onOpenDemoModal: () => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenDemoModal }) => {
  const { t } = useLanguage();
  const [dailyBottles, setDailyBottles] = useState<number>(250);
  const [vehicles, setVehicles] = useState<number>(4);

  // Calculations
  const savedHoursPerMonth = Math.round(vehicles * 2.2 * 26); // 2.2 hours saved per car/day * 26 working days
  const fuelSavingUzs = Math.round(vehicles * 45000 * 26); // ~45k UZS daily fuel saved per car * 26 days
  const lostBottlesSavedCount = Math.round(dailyBottles * 0.04 * 26); // 4% lost bottles saved
  const lostBottlesValueUzs = lostBottlesSavedCount * 55000; // 55,000 UZS per 19L bottle
  const totalMonthlyGain = fuelSavingUzs + lostBottlesValueUzs + Math.round(dailyBottles * 1200 * 26);

  const formatNumber = (num: number) => {
    return new Intl.NumberFormat('uz-UZ').format(num);
  };

  return (
    <section id="kalkulyator" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
            <Calculator className="w-3.5 h-3.5" />
            <span>{t.calculator.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            {t.calculator.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              {t.calculator.titleHighlight}
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            {t.calculator.subtitle}
          </p>
        </div>

        <div className="max-w-5xl mx-auto rounded-3xl bg-slate-900 border border-slate-800 p-6 sm:p-10 shadow-2xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Controls */}
            <div className="lg:col-span-6 space-y-8">
              {/* Slider 1: Daily bottles */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-white">
                    {t.calculator.bottlesLabel}
                  </label>
                  <span className="text-cyan-400 font-mono font-bold text-lg px-3 py-1 bg-slate-950 rounded-xl border border-slate-800">
                    {formatNumber(dailyBottles)}
                  </span>
                </div>
                <input
                  type="range"
                  min="30"
                  max="1500"
                  step="10"
                  value={dailyBottles}
                  onChange={(e) => setDailyBottles(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                  <span>30</span>
                  <span>750</span>
                  <span>1,500+</span>
                </div>
              </div>

              {/* Slider 2: Number of vehicles */}
              <div>
                <div className="flex justify-between items-center mb-3">
                  <label className="text-sm font-bold text-white">
                    {t.calculator.vehiclesLabel}
                  </label>
                  <span className="text-cyan-400 font-mono font-bold text-lg px-3 py-1 bg-slate-950 rounded-xl border border-slate-800">
                    {vehicles}
                  </span>
                </div>
                <input
                  type="range"
                  min="1"
                  max="20"
                  step="1"
                  value={vehicles}
                  onChange={(e) => setVehicles(Number(e.target.value))}
                  className="w-full h-2.5 bg-slate-950 rounded-lg appearance-none cursor-pointer accent-cyan-400"
                />
                <div className="flex justify-between text-[11px] text-slate-500 mt-1 font-mono">
                  <span>1</span>
                  <span>10</span>
                  <span>20</span>
                </div>
              </div>

              <div className="p-4 rounded-2xl bg-slate-950/80 border border-slate-800 text-xs text-slate-400 space-y-1">
                <p className="font-semibold text-slate-300">💡 {t.calculator.totalGainsTitle}</p>
                <p>• {t.calculator.savedHours} {savedHoursPerMonth} h</p>
                <p>• {t.calculator.savedFuel} ~{formatNumber(fuelSavingUzs)}</p>
                <p>• {t.calculator.savedBottles} {lostBottlesSavedCount}</p>
              </div>
            </div>

            {/* Right Result Card */}
            <div className="lg:col-span-6 rounded-2xl bg-gradient-to-br from-slate-950 to-slate-900 border border-cyan-500/30 p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4">
                <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  {t.calculator.gainsBadge}
                </span>
              </div>

              <div>
                <p className="text-xs text-slate-400">{t.calculator.totalGainsTitle}</p>
                <p className="text-3xl sm:text-4xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-400 mt-1">
                  +{formatNumber(totalMonthlyGain)}
                </p>
                <p className="text-xs text-slate-400 mt-1">{t.calculator.totalGainsSub}</p>
              </div>

              <div className="space-y-3 text-xs border-t border-slate-800/80 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5 text-cyan-400" /> {t.calculator.savedHours}
                  </span>
                  <span className="font-bold text-white">{savedHoursPerMonth} h</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <DollarSign className="w-3.5 h-3.5 text-emerald-400" /> {t.calculator.savedFuel}
                  </span>
                  <span className="font-bold text-white">~{formatNumber(fuelSavingUzs)}</span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-slate-400 flex items-center gap-1.5">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> {t.calculator.savedBottles}
                  </span>
                  <span className="font-bold text-emerald-400">{lostBottlesSavedCount} ({formatNumber(lostBottlesValueUzs)})</span>
                </div>
              </div>

              <div className="pt-2">
                <button
                  onClick={onOpenDemoModal}
                  className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>{t.calculator.ctaBtn}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
