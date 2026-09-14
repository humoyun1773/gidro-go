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
import { PROCESS_STEPS } from '../data/landingData';

const stepIcons: Record<string, React.ReactNode> = {
  Smartphone: <Smartphone className="w-5 h-5 text-cyan-400" />,
  Cpu: <Cpu className="w-5 h-5 text-blue-400" />,
  Truck: <Truck className="w-5 h-5 text-indigo-400" />,
  Droplet: <Droplet className="w-5 h-5 text-sky-400" />,
  CheckCircle2: <CheckCircle2 className="w-5 h-5 text-emerald-400" />,
  LineChart: <LineChart className="w-5 h-5 text-purple-400" />,
};

export const HowItWorks: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(1);
  const currentStepData = PROCESS_STEPS.find(s => s.step === activeStep) || PROCESS_STEPS[0];

  return (
    <section id="jarayon" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      {/* Visual background lights */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-xs font-semibold mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Bosqichma-bosqich jarayon zanjiri</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            Qanday Ishlaydi? —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-400">
              6 Bosqichli Avtomatika
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Mijoz tugmani bosgan soniyadan boshlab biznesingiz hisobotidagi oxirgi raqamgacha bo'lgan to'liq zanjir.
          </p>
        </div>

        {/* Horizontal Process Steps Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3 mb-10">
          {PROCESS_STEPS.map((step) => {
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
                  &larr; Oldingi qadam
                </button>
                <button
                  disabled={activeStep === PROCESS_STEPS.length}
                  onClick={() => setActiveStep((prev) => Math.min(PROCESS_STEPS.length, prev + 1))}
                  className="px-4 py-2 rounded-xl bg-cyan-500 hover:bg-cyan-400 disabled:opacity-30 disabled:cursor-not-allowed text-xs font-semibold text-slate-950 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <span>Keyingi qadam</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>

            {/* Right: Realistic interactive simulation preview */}
            <div className="lg:col-span-6 bg-slate-950/80 rounded-2xl border border-slate-800 p-6 shadow-inner relative">
              <div className="flex items-center justify-between mb-4 border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2.5 h-2.5 rounded-full bg-cyan-400 animate-ping"></div>
                  <span className="text-xs font-mono text-cyan-300">GidroGo Engine: Step #{activeStep}</span>
                </div>
                <span className="text-[11px] font-mono text-slate-400">Avto-status: OK</span>
              </div>

              {/* Dynamic content per step */}
              {activeStep === 1 && (
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
                    <p className="text-cyan-400 font-semibold flex items-center gap-1">
                      <Smartphone className="w-4 h-4" /> Telegram Bot Buyurtma interfeysi
                    </p>
                    <div className="bg-slate-950 p-3 rounded-lg text-slate-300 space-y-1">
                      <p>💧 <strong>Mahsulot:</strong> 19L Ozonlashgan Toza Suv</p>
                      <p>🔢 <strong>Miqdori:</strong> 3 dona</p>
                      <p>📍 <strong>Manzil:</strong> Mirzo Ulug'bek t., Buyuk Ipak Yo'li 15</p>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 2 && (
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
                    <p className="text-blue-400 font-semibold flex items-center gap-1">
                      <Cpu className="w-4 h-4" /> Tizim Validatsiyasi & CRM tekshiruvi
                    </p>
                    <div className="bg-slate-950 p-3 rounded-lg text-slate-300 space-y-1">
                      <p>✅ Mijoz bazada mavjud: "Akbar Xamidov"</p>
                      <p>🔄 Tara balansi: Mijozda 3 ta bo'sh idish qaytarilishi kutilmoqda</p>
                      <p>⚡ Buyurtma ID: #GG-2026-9812 tasdiqlandi</p>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 3 && (
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
                    <p className="text-indigo-400 font-semibold flex items-center gap-1">
                      <Truck className="w-4 h-4" /> Smart Kuryer Tanlash (AI Dispatch)
                    </p>
                    <div className="bg-slate-950 p-3 rounded-lg text-slate-300 space-y-1">
                      <p>📍 Eng yaqin ferma: <strong>"Crystal Springs Ferma #1"</strong></p>
                      <p>🚗 Kuryer: <strong>Jamshid (Labo #01 721 AAA)</strong></p>
                      <p>⏱ Masofa: 1.8 km (taxminan 12 daqiqa yetib borish vaqti)</p>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 4 && (
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
                    <p className="text-sky-400 font-semibold flex items-center gap-1">
                      <Droplet className="w-4 h-4" /> Yetkazish & Tara Almashish
                    </p>
                    <div className="bg-slate-950 p-3 rounded-lg text-slate-300 space-y-1">
                      <p>🚚 Kuryer manzilga yetib keldi</p>
                      <p>📦 3 ta to'la 19L topshirildi</p>
                      <p>♻️ 3 ta bo'sh 19L tara qabul qilindi va skanerlandi</p>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 5 && (
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
                    <p className="text-emerald-400 font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-4 h-4" /> Onlayn & Naqd To'lov Fiksatsiyasi
                    </p>
                    <div className="bg-slate-950 p-3 rounded-lg text-slate-300 space-y-1">
                      <p>💳 To'lov usuli: Payme (60,000 so'm)</p>
                      <p>🧾 Chek: #CHK-8891 mijoz SMS / Telegramiga yuborildi</p>
                      <p>💰 Kuryer kassa balansi avtomatik yangilandi</p>
                    </div>
                  </div>
                </div>
              )}

              {activeStep === 6 && (
                <div className="space-y-3">
                  <div className="p-4 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-2">
                    <p className="text-purple-400 font-semibold flex items-center gap-1">
                      <LineChart className="w-4 h-4" /> Ma'lumotlar Saqlanishi & BI Analitika
                    </p>
                    <div className="bg-slate-950 p-3 rounded-lg text-slate-300 space-y-1">
                      <p>📈 Ferma kunlik tushumi: +60,000 so'm qo'shildi</p>
                      <p>📉 Ombor suv miqdori: -3 dona kamaytirildi</p>
                      <p>📅 Navbatdagi buyurtma eslatmasi: 10 kundan keyinga rejalashtirildi</p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
