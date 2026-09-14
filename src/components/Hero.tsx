import React from 'react';
import { 
  Play, 
  ArrowRight, 
  CheckCircle, 
  ShieldCheck, 
  Clock, 
  TrendingUp, 
  Droplets, 
  Truck, 
  MapPin
} from 'lucide-react';

interface HeroProps {
  onOpenDemoModal: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDemoModal }) => {
  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      {/* Background glowing effects */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[650px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none -z-0"></div>
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-blue-600/15 rounded-full blur-[120px] pointer-events-none -z-0"></div>
      <div className="absolute bottom-10 left-10 w-[350px] h-[350px] bg-indigo-600/15 rounded-full blur-[100px] pointer-events-none -z-0"></div>

      {/* Grid pattern overlay */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:24px_24px]"
      ></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-6 backdrop-blur-md animate-fade-in shadow-lg shadow-cyan-500/10">
            <span className="flex h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
            <span>O'zbekistonda ichimlik suvi yetkazib berish bo'yicha yagona SaaS platforma</span>
          </div>

          {/* Main Tagline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.15] mb-6">
            Suv yetkazib berish biznesingizni{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              yagona tizimda
            </span>{' '}
            boshqaring
          </h1>

          {/* Subheading */}
          <p className="text-lg sm:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mx-auto mb-10">
            Mijoz buyurtmasidan tortib to'lovgacha, haydovchilar marshrutidan tortib ombordagi 19L idishlar (tara) hisobigacha — barchasi to'liq avtomatlashtirilgan yagona aqlli tizimda.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-14">
            <button
              onClick={onOpenDemoModal}
              className="w-full sm:w-auto px-8 py-4 rounded-2xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 text-white font-bold text-base sm:text-lg shadow-xl shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center justify-center gap-3 cursor-pointer group"
            >
              <span>Bepul Demo Olish</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href="#dashboard"
              className="w-full sm:w-auto px-7 py-4 rounded-2xl bg-slate-900/80 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/50 text-slate-200 hover:text-white font-semibold text-base transition-all flex items-center justify-center gap-2.5 backdrop-blur-md"
            >
              <Play className="w-4 h-4 text-cyan-400 fill-cyan-400" />
              <span>Tizim Interfeysini Ko'rish</span>
            </a>
          </div>

          {/* Micro trust indicators */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 max-w-3xl mx-auto pt-6 border-t border-slate-800/80 text-left">
            <div className="flex items-center gap-2.5">
              <CheckCircle className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-xs text-slate-300 font-medium">14 kun bepul sinov</span>
            </div>
            <div className="flex items-center gap-2.5">
              <ShieldCheck className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-xs text-slate-300 font-medium">100% tara hisobi</span>
            </div>
            <div className="flex items-center gap-2.5">
              <Clock className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-xs text-slate-300 font-medium">1 kunda to'liq sozlash</span>
            </div>
            <div className="flex items-center gap-2.5">
              <TrendingUp className="w-4 h-4 text-cyan-400 shrink-0" />
              <span className="text-xs text-slate-300 font-medium">+35% daromad o'sishi</span>
            </div>
          </div>
        </div>

        {/* Hero Visual Mockup: Futuristic Glass Dashboard & Delivery Flow */}
        <div className="mt-14 relative max-w-5xl mx-auto">
          {/* Outer glow ring */}
          <div className="absolute -inset-1.5 rounded-3xl bg-gradient-to-r from-cyan-500/30 via-blue-600/30 to-indigo-600/30 blur-xl opacity-70"></div>

          {/* Main Container */}
          <div className="relative rounded-3xl bg-slate-900/90 border border-slate-700/80 p-3 sm:p-5 shadow-2xl backdrop-blur-2xl">
            {/* Top window controls */}
            <div className="flex items-center justify-between pb-4 border-b border-slate-800 px-2">
              <div className="flex items-center gap-2">
                <span className="w-3 h-3 rounded-full bg-rose-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-amber-500/80"></span>
                <span className="w-3 h-3 rounded-full bg-emerald-500/80"></span>
                <span className="ml-3 text-xs text-slate-400 font-mono hidden sm:inline">
                  app.gidrogo.uz / dashboard / live-dispatch
                </span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping"></span>
                  Tizim Onlayn
                </span>
              </div>
            </div>

            {/* Dashboard Content Mockup */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 mt-4">
              {/* Left Column: Metrics & Live Dispatch */}
              <div className="lg:col-span-8 space-y-4">
                {/* Metric cards */}
                <div className="grid grid-cols-3 gap-3">
                  <div className="bg-slate-950/60 rounded-2xl p-3 border border-slate-800">
                    <p className="text-[11px] text-slate-400">Bugungi Buyurtmalar</p>
                    <p className="text-xl sm:text-2xl font-bold text-white mt-1">248 dona</p>
                    <span className="text-[10px] text-emerald-400 font-semibold">+18% kechagiga nisbatan</span>
                  </div>
                  <div className="bg-slate-950/60 rounded-2xl p-3 border border-slate-800">
                    <p className="text-[11px] text-slate-400">Faol Dastavkachilar</p>
                    <p className="text-xl sm:text-2xl font-bold text-cyan-400 mt-1">12 / 14</p>
                    <span className="text-[10px] text-slate-400 font-medium">92% yuklangan</span>
                  </div>
                  <div className="bg-slate-950/60 rounded-2xl p-3 border border-slate-800">
                    <p className="text-[11px] text-slate-400">19L Tara Qoldig'i</p>
                    <p className="text-xl sm:text-2xl font-bold text-white mt-1">1,420</p>
                    <span className="text-[10px] text-cyan-400 font-semibold">Omborda xavfsiz</span>
                  </div>
                </div>

                {/* Live orders table snippet */}
                <div className="bg-slate-950/70 rounded-2xl p-4 border border-slate-800/80">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                      <Droplets className="w-3.5 h-3.5 text-cyan-400" />
                      Real Vaqt Buyurtmalar Oqimi
                    </span>
                    <span className="text-[10px] bg-cyan-500/20 text-cyan-300 px-2 py-0.5 rounded font-mono">
                      Avto-taqsimlash: FAOL
                    </span>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-bold">
                          #89
                        </div>
                        <div>
                          <p className="font-semibold text-white">Yunusobod, 14-mavze 24-uy</p>
                          <p className="text-[11px] text-slate-400">19L Toza Suv x 4 dona • Qarz: Yo'q</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2 py-0.5 rounded-md bg-blue-500/20 text-blue-300 font-medium text-[11px]">
                          Kuryer Yo'lda
                        </span>
                        <p className="text-[10px] text-slate-400 mt-0.5">Avto #3 (Diyor)</p>
                      </div>
                    </div>

                    <div className="flex items-center justify-between p-2.5 rounded-xl bg-slate-900/90 border border-slate-800 text-xs">
                      <div className="flex items-center gap-2.5">
                        <div className="w-8 h-8 rounded-lg bg-emerald-500/20 text-emerald-400 flex items-center justify-center font-bold">
                          #90
                        </div>
                        <div>
                          <p className="font-semibold text-white">Chilonzor, Bunyodkor shoh ko'chasi</p>
                          <p className="text-[11px] text-slate-400">19L Tog' Suvi x 6 dona • To'lov: Payme</p>
                        </div>
                      </div>
                      <div className="text-right">
                        <span className="inline-block px-2 py-0.5 rounded-md bg-emerald-500/20 text-emerald-300 font-medium text-[11px]">
                          Yetkazildi
                        </span>
                        <p className="text-[10px] text-slate-400 mt-0.5">Tara qabul qilindi: 6 ta</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: Mini Map & Courier Status */}
              <div className="lg:col-span-4 flex flex-col justify-between bg-gradient-to-b from-slate-950/90 to-slate-900/90 rounded-2xl p-4 border border-slate-800/80">
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-xs font-bold text-slate-200 uppercase tracking-wider flex items-center gap-1.5">
                      <Truck className="w-3.5 h-3.5 text-cyan-400" />
                      Dastavka Monitoringi
                    </span>
                    <span className="text-[10px] text-cyan-400 font-mono">GPS Onlayn</span>
                  </div>

                  {/* Visual Map Representation */}
                  <div className="relative h-32 rounded-xl bg-slate-950 border border-slate-800 overflow-hidden flex items-center justify-center">
                    <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#38bdf8_1px,transparent_1px)] [background-size:12px_12px]"></div>
                    {/* Simulated map route */}
                    <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-1/2 border-t-2 border-dashed border-cyan-500/60"></div>
                    <div className="absolute top-6 left-8 flex items-center gap-1 bg-slate-900/90 px-2 py-1 rounded-md border border-cyan-500/40 text-[10px] text-cyan-300">
                      <MapPin className="w-3 h-3 text-cyan-400" /> Ferma ombori
                    </div>
                    <div className="absolute bottom-6 right-8 flex items-center gap-1 bg-cyan-600/90 px-2 py-1 rounded-md text-[10px] text-white font-medium shadow-md shadow-cyan-500/30">
                      <Truck className="w-3 h-3" /> Mashina #3 (Yo'lda)
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-4 border-t border-slate-800 space-y-2">
                  <div className="flex items-center justify-between text-xs">
                    <span className="text-slate-400">Mashinadagi suv qoldig'i:</span>
                    <span className="font-semibold text-white">42 / 60 idish</span>
                  </div>
                  <div className="w-full bg-slate-800 rounded-full h-1.5 overflow-hidden">
                    <div className="bg-gradient-to-r from-cyan-500 to-blue-500 h-1.5 rounded-full w-[70%]"></div>
                  </div>
                  <div className="flex items-center justify-between text-[11px] text-slate-400 pt-1">
                    <span>Qaytarilgan bo'sh tara:</span>
                    <span className="text-cyan-400 font-bold">18 dona</span>
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
