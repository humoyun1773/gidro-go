import React from 'react';
import { 
  Target, 
  Eye, 
  ShieldCheck, 
  Users, 
  Leaf, 
  Clock, 
  ArrowRight, 
  Sparkles, 
  Phone, 
  Mail, 
  MapPin 
} from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface AboutPageProps {
  onNavigateHome: () => void;
  onOpenDemoModal: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onNavigateHome, onOpenDemoModal }) => {
  const { t } = useLanguage();

  return (
    <div className="pt-28 pb-20 bg-slate-950 text-slate-100 min-h-screen">
      {/* Hero Header */}
      <section className="relative py-16 sm:py-24 overflow-hidden border-b border-slate-800/80">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/15 rounded-full blur-[150px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs sm:text-sm font-semibold mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>{t.about.badge}</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white tracking-tight leading-tight max-w-4xl mx-auto mb-6">
            {t.about.heroTitle}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-sky-300 to-blue-500">
              {t.about.heroHighlight}
            </span>
          </h1>

          <p className="text-base sm:text-xl text-slate-300 max-w-3xl mx-auto leading-relaxed mb-8">
            {t.about.heroSub}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <button
              onClick={onNavigateHome}
              className="px-6 py-3 rounded-xl bg-slate-900 border border-slate-700 hover:border-cyan-500/50 text-white font-semibold text-sm transition-all cursor-pointer"
            >
              {t.about.backBtn}
            </button>
            <button
              onClick={onOpenDemoModal}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-sm shadow-lg shadow-cyan-500/25 hover:from-cyan-400 hover:to-blue-500 transition-all cursor-pointer flex items-center gap-2"
            >
              <span>{t.about.partnerBtn}</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Mission */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center mb-6">
                <Target className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">{t.about.missionTitle}</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t.about.missionDesc}
              </p>
            </div>

            {/* Vision */}
            <div className="p-8 sm:p-10 rounded-3xl bg-slate-900/80 border border-slate-800 relative overflow-hidden">
              <div className="w-14 h-14 rounded-2xl bg-blue-500/20 text-blue-400 flex items-center justify-center mb-6">
                <Eye className="w-7 h-7" />
              </div>
              <h2 className="text-2xl font-bold text-white mb-4">{t.about.visionTitle}</h2>
              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t.about.visionDesc}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              {t.about.valuesTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {t.about.valuesSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all">
              <ShieldCheck className="w-8 h-8 text-cyan-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">100% Shaffoflik</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Moliya, kassa, kuryerlar hisobi va bo'sh taralar harakati real vaqtda ochiq va aniq hisoblanadi.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all">
              <Clock className="w-8 h-8 text-blue-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Vaqtni Qadrlash</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Kuryer marshrutini optimallashtirish va mijozlarga suvni kutilganidan tezroq yetkazib berish.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all">
              <Leaf className="w-8 h-8 text-emerald-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Ekologik Mas'uliyat</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                19L ko'p martalik idishlar aylanmasini to'g'ri boshqarish orqali bir martalik plastik chiqindilarni millionlab qisqartirish.
              </p>
            </div>

            <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 hover:border-cyan-500/40 transition-all">
              <Users className="w-8 h-8 text-purple-400 mb-4" />
              <h3 className="text-lg font-bold text-white mb-2">Hamkorga E'tibor</h3>
              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                Har bir suv korxonasining muammolarini o'rganamiz va 24/7 texnik hamda amaliy ko'mak beramiz.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Startup Milestones / History */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-3">
              {t.about.timelineTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {t.about.timelineSub}
            </p>
          </div>

          <div className="space-y-6 relative border-l border-cyan-500/30 ml-4 pl-6">
            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-cyan-400 ring-4 ring-slate-950"></div>
              <span className="text-xs font-mono text-cyan-400 font-bold">2024-yil — Boshlanish</span>
              <h3 className="text-lg font-bold text-white mt-1">Muammoni o'rganish & MVP</h3>
              <p className="text-sm text-slate-400 mt-1">
                Toshkentdagi 15 ta suv zavodi va fermalari bilan suhbatlar o'tkazilib, bo'sh taralar yo'qolishi va dispetcherlik muammosi aniqlandi. Dastlabki prototip sinovdan o'tdi.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-blue-500 ring-4 ring-slate-950"></div>
              <span className="text-xs font-mono text-blue-400 font-bold">2025-yil — Kengayish</span>
              <h3 className="text-lg font-bold text-white mt-1">Smart GPS Dispatch & Onlayn To'lovlar</h3>
              <p className="text-sm text-slate-400 mt-1">
                Kuryerlar uchun qulay mobil ilova, Yandex Maps marshrutlash va Click/Payme integratsiyasi joriy qilindi. 30 dan ortiq yirik suv yetkazib beruvchilar tizimga ulandi.
              </p>
            </div>

            <div className="relative">
              <div className="absolute -left-[31px] top-1.5 w-4 h-4 rounded-full bg-emerald-400 ring-4 ring-slate-950"></div>
              <span className="text-xs font-mono text-emerald-400 font-bold">2026-yil — Hozirgi kunda</span>
              <h3 className="text-lg font-bold text-white mt-1">Yagona SaaS Standarti</h3>
              <p className="text-sm text-slate-400 mt-1">
                GidroGo bugungi kunda 50+ hamkor suv korxonalari, 150,000+ yetkazilgan buyurtmalar va to'liq avtomatlashtirilgan moliyaviy hisobot bilan O'zbekistonda yetakchi bo'lib xizmat qilmoqda.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Team (TZ 3.6 Asoschilar) */}
      <section className="py-20 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight mb-4">
              {t.about.teamTitle}
            </h2>
            <p className="text-slate-400 text-sm sm:text-base">
              {t.about.teamSub}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center text-3xl font-black text-white mx-auto shadow-lg shadow-cyan-500/20">
                HA
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Humoyun Anvarov</h3>
                <p className="text-xs text-cyan-400 font-medium">CEO & Founder</p>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Logistika tizimlari va SaaS platformalarini ishlab chiqish bo'yicha 5+ yillik tajribaga ega.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-3xl font-black text-white mx-auto shadow-lg shadow-blue-500/20">
                DT
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Davron Toshmatov</h3>
                <p className="text-xs text-blue-400 font-medium">CTO</p>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Yuqori yuklamali arxitekturalar, geo-monitoring va xavfsiz ma'lumotlar bazasi mutaxassisi.
              </p>
            </div>

            <div className="p-6 rounded-3xl bg-slate-900 border border-slate-800 text-center space-y-4">
              <div className="w-24 h-24 rounded-full bg-gradient-to-tr from-indigo-600 to-purple-600 flex items-center justify-center text-3xl font-black text-white mx-auto shadow-lg shadow-indigo-500/20">
                SR
              </div>
              <div>
                <h3 className="text-lg font-bold text-white">Sardor Rahimov</h3>
                <p className="text-xs text-purple-400 font-medium">COO & Operations</p>
              </div>
              <p className="text-xs text-slate-400 leading-relaxed">
                Fermalar va kuryerlik tarmog'ini boshqarish, korxonalarni tizimga sozlash bo'yicha ekspert.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office & Contact Box */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="p-8 sm:p-12 rounded-3xl bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 shadow-2xl flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="space-y-4 text-center md:text-left">
              <h3 className="text-2xl sm:text-3xl font-bold text-white">
                {t.about.contactTitle}
              </h3>
              <p className="text-slate-300 text-sm max-w-md">
                {t.about.contactSub}
              </p>
              <div className="space-y-2 text-xs text-slate-400 pt-2">
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <MapPin className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span>Toshkent shahri, Amir Temur shoh ko'chasi, 107B</span>
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Phone className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href="tel:+998712000000" className="hover:text-white">+998 (71) 200-00-00</a>
                </p>
                <p className="flex items-center gap-2 justify-center md:justify-start">
                  <Mail className="w-4 h-4 text-cyan-400 shrink-0" />
                  <a href="mailto:info@gidrogo.uz" className="hover:text-white">info@gidrogo.uz</a>
                </p>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 shrink-0">
              <button
                onClick={onOpenDemoModal}
                className="px-6 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all cursor-pointer"
              >
                {t.about.partnerBtn}
              </button>
              <button
                onClick={onNavigateHome}
                className="px-6 py-3.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white font-semibold text-sm transition-all cursor-pointer"
              >
                {t.nav.home}
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
