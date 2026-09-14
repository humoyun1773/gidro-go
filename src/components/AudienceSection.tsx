import React, { useState } from 'react';
import { 
  Building2, 
  UserCheck, 
  CheckCircle, 
  ArrowRight
} from 'lucide-react';

interface AudienceSectionProps {
  onOpenDemoModal: () => void;
}

export const AudienceSection: React.FC<AudienceSectionProps> = ({ onOpenDemoModal }) => {
  const [activeTab, setActiveTab] = useState<'business' | 'consumer'>('business');

  return (
    <section id="auditoriya" className="py-24 bg-slate-950 relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute top-1/2 left-1/3 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
            <UserCheck className="w-3.5 h-3.5" />
            <span>Maqsadli auditoriya</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            GidroGo Kimlar Uchun{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Mo'ljallangan?
            </span>
          </h2>

          <p className="text-slate-400 text-base sm:text-lg leading-relaxed">
            Biznes egalari uchun kuchli boshqaruv platformasi, iste'molchilar uchun esa 1 daqiqada toza suv buyurtma qilish qulayligi.
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
              <span>Biznes Egalari & Fermalar</span>
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
              <span>Oddiy Iste'molchilar</span>
            </button>
          </div>
        </div>

        {/* Content Box */}
        {activeTab === 'business' ? (
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-cyan-500/10 text-cyan-300 text-xs font-semibold">
                  <Building2 className="w-4 h-4" /> Suv ishlab chiqaruvchilar va yetkazib berish kompaniyalari
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  Biznesingizni 100% raqamlashtiring va xarajatlarni qisqartiring
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
                  Har kuni daftarlarda hisob-kitob qilish, yo'qolgan bo'sh idishlarni qidirish va haydovchilarni telefon orqali nazorat qilishdan charchadingizmi? GidroGo sizga to'liq tinchlik va nazorat bag'ishlaydi.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">To'liq Moliyaviy Nazorat</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Har bir so'm tushum va xarajat real vaqtda avtomatik hisoblanadi.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Kuryerlar Monitoringi</h4>
                      <p className="text-xs text-slate-400 mt-0.5">GPS orqali har bir avtomobilning joylashuvi va buyurtma holati ma'lum.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">19L Tara Balansi</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Idishlar mijozda qolishi yoki yo'qolib ketishi 0% ga tushiriladi.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Avtomatlashtirilgan CRM</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Mijozlar qayta buyurtma berishi uchun avtomatik SMS va xabarnomalar.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onOpenDemoModal}
                    className="px-7 py-3.5 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm shadow-lg shadow-cyan-500/25 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Biznesingiz Uchun Demo Olish</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Biznes natijasi</span>
                  <span className="text-xs text-emerald-400 font-bold">+40% Foyda</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-slate-400 mb-1">Dastavkachilar vaqti tejalishi:</p>
                    <p className="font-bold text-white text-sm">Kuniga o'rtacha 2.5 soat / mashina</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-slate-400 mb-1">Mijozlar buyurtmasi yo'qolishi:</p>
                    <p className="font-bold text-emerald-400 text-sm">0 ta xato buyurtma</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-slate-400 mb-1">Buxgalteriya va hisob-kitob vaqti:</p>
                    <p className="font-bold text-white text-sm">Kuniga 3 soatdan 5 daqiqagacha</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="rounded-3xl bg-slate-900/90 border border-slate-800 p-8 sm:p-12 shadow-2xl relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
              <div className="lg:col-span-7 space-y-6">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-blue-500/10 text-blue-300 text-xs font-semibold">
                  <UserCheck className="w-4 h-4" /> Aholi, Xonadonlar va Ofislar uchun
                </div>

                <h3 className="text-2xl sm:text-3xl font-black text-white">
                  30 soniyada toza suv buyurtma qiling va qachon kelishini aniq biling
                </h3>

                <p className="text-slate-300 text-base leading-relaxed">
                  Telefon qilib uzoq kutish, kuryer qayerda ekanini bilmay asabiylashish va naqd pul qidirish shart emas. Sevimli suv brendingiz bir necha tugma orqali eshigingiz oldida bo'ladi.
                </p>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">1 Tugma Bilan Buyurtma</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Telegram bot yoki veb-sayt orqali 30 soniyada buyurtma bering.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Aniq Kelish Vaqti</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Kuryer necha daqiqada yetib kelishini xaritada jonli kuzatasiz.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Shaffof Onlayn To'lov</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Click, Payme yoki naqd pulda ortiqcha xatoliksiz to'lang.</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <CheckCircle className="w-5 h-5 text-cyan-400 shrink-0 mt-0.5" />
                    <div>
                      <h4 className="text-sm font-bold text-white">Sodiqlik & Keshbek</h4>
                      <p className="text-xs text-slate-400 mt-0.5">Har bir buyurtmadan bonus ballar to'plang va bepul suv oling.</p>
                    </div>
                  </div>
                </div>

                <div className="pt-4">
                  <button
                    onClick={onOpenDemoModal}
                    className="px-7 py-3.5 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm shadow-lg shadow-blue-500/25 transition-all flex items-center gap-2 cursor-pointer"
                  >
                    <span>Suv Yetkazib Beruvchini Topish</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-5 bg-slate-950 p-6 rounded-2xl border border-slate-800 space-y-4">
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <span className="text-xs font-bold text-cyan-400 uppercase tracking-wider">Mijoz Qulayligi</span>
                  <span className="text-xs text-cyan-300 font-bold">5 Yulduzli Tajriba</span>
                </div>
                <div className="space-y-3 text-xs">
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-slate-400 mb-1">Buyurtma berish vaqti:</p>
                    <p className="font-bold text-white text-sm">Bor-yo'g'i 25-30 soniya</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-slate-400 mb-1">Xabardorlik:</p>
                    <p className="font-bold text-cyan-400 text-sm">"Kuryer eshigingiz oldida" SMS xabari</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900 border border-slate-800">
                    <p className="text-slate-400 mb-1">Toza suv kafolati:</p>
                    <p className="font-bold text-white text-sm">Faqat sertifikatlangan suv zavodlari</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
