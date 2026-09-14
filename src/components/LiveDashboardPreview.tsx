import React, { useState } from 'react';
import { 
  BarChart3, 
  Truck, 
  Boxes, 
  ClipboardList, 
  MapPin, 
  RefreshCw, 
  ArrowUpRight, 
  DollarSign, 
  Droplets,
  CheckCircle2
} from 'lucide-react';

export const LiveDashboardPreview: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'kpi' | 'couriers' | 'inventory' | 'orders'>('kpi');
  const [isLiveActive, setIsLiveActive] = useState<boolean>(true);

  return (
    <section id="dashboard" className="py-24 bg-slate-900 relative overflow-hidden border-t border-slate-800">
      {/* Background glow */}
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>Interaktiv boshqaruv paneli</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            GidroGo Dashboard —{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              Biznesingiz Kaftingizda
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Qo'lda hisob-kitob qilish davri o'tdi. Birgina ekranda tushum, kuryerlar marshruti va ombordagi har bir 19 litrli idishni nazorat qiling.
          </p>
        </div>

        {/* Tab Switcher Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-8">
          <button
            onClick={() => setActiveTab('kpi')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'kpi'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-950/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>Asosiy Moliya & Statistika</span>
          </button>

          <button
            onClick={() => setActiveTab('couriers')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'couriers'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-950/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Truck className="w-4 h-4" />
            <span>Kuryerlar & GPS Xarita</span>
          </button>

          <button
            onClick={() => setActiveTab('inventory')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'inventory'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-950/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <Boxes className="w-4 h-4" />
            <span>Ombor & 19L Tara Hisobi</span>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'orders'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-950/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <ClipboardList className="w-4 h-4" />
            <span>Buyurtmalar Jurnali (Jonli)</span>
          </button>
        </div>

        {/* Realistic Dashboard Panel Frame */}
        <div className="rounded-3xl bg-slate-950 border border-slate-800 p-4 sm:p-6 shadow-2xl shadow-cyan-950/30">
          {/* Header Bar */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-6 border-b border-slate-800/80 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black">
                G
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span>"Oqdaryo Suv Ferma #1" Filiali</span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded font-mono">
                    LIVE
                  </span>
                </h3>
                <p className="text-xs text-slate-400">Toshkent shahri va viloyati bo'yicha markaziy panel</p>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-center">
              <span className="text-xs text-slate-400 font-mono hidden md:inline">
                Oxirgi yangilanish: hozirgina
              </span>
              <button
                onClick={() => setIsLiveActive(!isLiveActive)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isLiveActive ? 'animate-spin text-cyan-400' : ''}`} />
                <span>{isLiveActive ? 'Avto-yangilanish' : 'To\'xtatilgan'}</span>
              </button>
            </div>
          </div>

          {/* TAB 1: KPI & FINANCIALS */}
          {activeTab === 'kpi' && (
            <div className="space-y-6">
              {/* 4 KPI cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>Bugungi Sof Tushum</span>
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-2xl font-black text-white">8,420,000 so'm</p>
                  <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1 font-semibold">
                    <ArrowUpRight className="w-3.5 h-3.5" /> +24% kechagiga nisbatan
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>Yetkazilgan Suv Hajmi</span>
                    <Droplets className="w-4 h-4 text-cyan-400" />
                  </div>
                  <p className="text-2xl font-black text-white">421 dona (19L)</p>
                  <p className="text-xs text-cyan-400 mt-1 flex items-center gap-1 font-semibold">
                    <ArrowUpRight className="w-3.5 h-3.5" /> 7,999 litr toza suv
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>Faol Kuryerlar</span>
                    <Truck className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-2xl font-black text-white">12 mashina</p>
                  <p className="text-xs text-slate-400 mt-1">O'rtacha yetkazish: 24 daqiqa</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>Mijozlar Qanoatligi</span>
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  </div>
                  <p className="text-2xl font-black text-white">4.96 / 5.0</p>
                  <p className="text-xs text-purple-400 mt-1">394 baholash asosida</p>
                </div>
              </div>

              {/* Graphical representation mock */}
              <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2 p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                  <div className="flex items-center justify-between mb-4">
                    <h4 className="text-sm font-bold text-white">Haftalik Buyurtmalar Dinamikasi</h4>
                    <span className="text-xs text-cyan-400 font-mono">2026-yil sentabr</span>
                  </div>
                  {/* Visual simulated bar chart */}
                  <div className="h-44 flex items-end justify-between gap-3 pt-6 px-2">
                    {[
                      { day: 'Dush', val: '65%', amount: '310 ta' },
                      { day: 'Sesh', val: '78%', amount: '380 ta' },
                      { day: 'Chor', val: '72%', amount: '350 ta' },
                      { day: 'Pay', val: '88%', amount: '420 ta' },
                      { day: 'Jum', val: '95%', amount: '460 ta' },
                      { day: 'Shan', val: '100%', amount: '490 ta' },
                      { day: 'Yak', val: '82%', amount: '390 ta' },
                    ].map((item, idx) => (
                      <div key={idx} className="flex-1 flex flex-col items-center gap-2 group">
                        <span className="text-[10px] text-slate-400 opacity-0 group-hover:opacity-100 transition-opacity font-mono">
                          {item.amount}
                        </span>
                        <div className="w-full bg-slate-800 rounded-t-lg overflow-hidden flex items-end h-32">
                          <div
                            style={{ height: item.val }}
                            className="w-full bg-gradient-to-t from-blue-600 to-cyan-400 rounded-t-lg group-hover:from-cyan-400 group-hover:to-cyan-300 transition-all"
                          ></div>
                        </div>
                        <span className="text-[11px] font-medium text-slate-400">{item.day}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800 flex flex-col justify-between">
                  <div>
                    <h4 className="text-sm font-bold text-white mb-4">To'lovlar Taqsimoti</h4>
                    <div className="space-y-3">
                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-300">Click & Payme</span>
                          <span className="text-white font-bold">58% (4.88M so'm)</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2">
                          <div className="bg-cyan-400 h-2 rounded-full w-[58%]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-300">Naqd pul</span>
                          <span className="text-white font-bold">34% (2.86M so'm)</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2">
                          <div className="bg-blue-500 h-2 rounded-full w-[34%]"></div>
                        </div>
                      </div>

                      <div>
                        <div className="flex justify-between text-xs mb-1">
                          <span className="text-slate-300">Hisob-raqam (B2B shartnoma)</span>
                          <span className="text-white font-bold">8% (680K so'm)</span>
                        </div>
                        <div className="w-full bg-slate-800 rounded-full h-2">
                          <div className="bg-indigo-500 h-2 rounded-full w-[8%]"></div>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 p-3 rounded-xl bg-slate-950 border border-slate-800 text-[11px] text-slate-400">
                    💡 Barcha to'lovlar fiskallashtiriladi va 1C / Soliq hisobotiga avtomatik eksport qilinadi.
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: COURIERS & LIVE GPS MAP */}
          {activeTab === 'couriers' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-300 uppercase">Yo'ldagi Kuryerlar (6)</span>
                  <span className="text-xs text-cyan-400 font-mono">Barchasi onlayn</span>
                </div>

                {[
                  { id: '1', name: 'Jamshid (Labo #01 721 AAA)', area: 'Yunusobod & Mirzo Ulug\'bek', load: '48 / 60 idish', status: 'Yetkazmoqda', eta: '5 daq' },
                  { id: '2', name: 'Sardor (Damas #10 432 BBB)', area: 'Chilonzor & Uchtepa', load: '32 / 50 idish', status: 'Marshrutda', eta: '12 daq' },
                  { id: '3', name: 'Farrux (Labo #01 889 CCC)', area: 'Yakkasaroy & Mirobod', load: '55 / 60 idish', status: 'Omborga qaytmoqda', eta: '18 daq' },
                  { id: '4', name: 'Ulug\'bek (Porter #01 112 DDD)', area: 'Sergeli & Yangihayot', load: '70 / 80 idish', status: 'Yetkazmoqda', eta: '8 daq' },
                ].map((courier) => (
                  <div key={courier.id} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/40 text-xs space-y-2">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-white flex items-center gap-1.5">
                        <Truck className="w-3.5 h-3.5 text-cyan-400" />
                        {courier.name}
                      </p>
                      <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-semibold text-[10px]">
                        {courier.status}
                      </span>
                    </div>
                    <div className="flex items-center justify-between text-slate-400 text-[11px]">
                      <span>Hudud: {courier.area}</span>
                      <span>ETA: {courier.eta}</span>
                    </div>
                    <div className="flex items-center justify-between text-slate-300 text-[11px] pt-1 border-t border-slate-800/60">
                      <span>Mashina yuki: <strong>{courier.load}</strong></span>
                      <span className="text-emerald-400">GPS signal: 100%</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-slate-800 p-4 relative min-h-[340px] flex flex-col justify-between overflow-hidden">
                <div className="flex items-center justify-between z-10">
                  <div className="flex items-center gap-2 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800 text-xs text-white">
                    <MapPin className="w-4 h-4 text-rose-500 animate-bounce" />
                    <span>Toshkent Shahri Real-Vaqt Logistika Xaritasi</span>
                  </div>
                  <span className="bg-emerald-500/20 text-emerald-400 text-[11px] px-2.5 py-1 rounded-lg font-mono">
                    Sun'iy yo'ldosh faol
                  </span>
                </div>

                {/* Vector map simulation */}
                <div className="my-auto py-10 relative flex items-center justify-center">
                  <div className="w-full h-48 border border-dashed border-cyan-500/30 rounded-2xl relative bg-slate-950/60 flex items-center justify-center overflow-hidden">
                    <div className="absolute inset-0 opacity-15 bg-[radial-gradient(#06b6d4_1px,transparent_1px)] [background-size:16px_16px]"></div>
                    
                    {/* Simulated hub */}
                    <div className="absolute top-8 left-12 p-2 rounded-xl bg-blue-600/90 text-white text-[11px] font-bold shadow-lg shadow-blue-500/30 flex items-center gap-1.5">
                      <div className="w-2 h-2 rounded-full bg-white animate-ping"></div>
                      Bosh Ombor & Zavod
                    </div>

                    {/* Simulated vehicles */}
                    <div className="absolute top-20 right-20 p-2 rounded-xl bg-cyan-600/90 text-white text-[10px] font-semibold flex items-center gap-1">
                      <Truck className="w-3 h-3" /> Mashina #1 (Mirobod)
                    </div>

                    <div className="absolute bottom-6 left-1/3 p-2 rounded-xl bg-indigo-600/90 text-white text-[10px] font-semibold flex items-center gap-1">
                      <Truck className="w-3 h-3" /> Mashina #2 (Chilonzor)
                    </div>

                    <div className="text-center text-xs text-slate-500 pointer-events-none">
                      Yandex Maps / OpenStreetMap API integratsiyasi
                    </div>
                  </div>
                </div>

                <div className="text-xs text-slate-400 flex items-center justify-between pt-2 border-t border-slate-800">
                  <span>Sun'iy intellekt marshrutni tirbandlikka qarab har 2 daqiqada yangilaydi</span>
                  <span className="text-cyan-400 font-bold">Yoqilg'i tejami: 28%</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: INVENTORY & TARA CONTROL */}
          {activeTab === 'inventory' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <p className="text-xs text-slate-400">Ombordagi To'la 19L Idishlar</p>
                  <p className="text-2xl font-black text-cyan-400 mt-1">1,840 dona</p>
                  <p className="text-xs text-slate-400 mt-1">Bugungi qadoqlangan: +650 ta</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <p className="text-xs text-slate-400">Qaytarilgan Bo'sh Tara (Yuvishda)</p>
                  <p className="text-2xl font-black text-amber-400 mt-1">480 dona</p>
                  <p className="text-xs text-slate-400 mt-1">Dezinfeksiya navbatida</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <p className="text-xs text-slate-400">Mijozlardagi Tara (Balansda)</p>
                  <p className="text-2xl font-black text-emerald-400 mt-1">4,210 dona</p>
                  <p className="text-xs text-emerald-400 mt-1 font-semibold">100% raqamlashgan (Yo'qolish 0)</p>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-slate-900/80 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-3">Mashinalardagi Tara Hisoboti</h4>
                <div className="overflow-x-auto">
                  <table className="w-full text-xs text-left">
                    <thead className="text-slate-400 border-b border-slate-800">
                      <tr>
                        <th className="py-2.5">Kuryer / Mashina</th>
                        <th className="py-2.5">Yuklangan To'la</th>
                        <th className="py-2.5">Topshirildi</th>
                        <th className="py-2.5">Qaytarilgan Bo'sh</th>
                        <th className="py-2.5">Mashina Qoldig'i</th>
                        <th className="py-2.5">Holat</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 text-slate-300">
                      <tr>
                        <td className="py-3 font-semibold text-white">Jamshid (#01 721 AAA)</td>
                        <td>60 dona</td>
                        <td>38 dona</td>
                        <td>38 dona</td>
                        <td>22 to'la / 38 bo'sh</td>
                        <td><span className="text-emerald-400 font-bold">Moslik 100%</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-white">Sardor (#10 432 BBB)</td>
                        <td>50 dona</td>
                        <td>24 dona</td>
                        <td>23 dona</td>
                        <td>26 to'la / 23 bo'sh</td>
                        <td><span className="text-amber-400 font-bold">1 ta qarz (mijozda)</span></td>
                      </tr>
                      <tr>
                        <td className="py-3 font-semibold text-white">Farrux (#01 889 CCC)</td>
                        <td>60 dona</td>
                        <td>58 dona</td>
                        <td>58 dona</td>
                        <td>2 to'la / 58 bo'sh</td>
                        <td><span className="text-emerald-400 font-bold">Moslik 100%</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ORDERS STREAM */}
          {activeTab === 'orders' && (
            <div className="space-y-4">
              <div className="flex items-center justify-between text-xs text-slate-400">
                <span>Oxirgi 5 daqiqadagi buyurtmalar oqimi</span>
                <span className="text-cyan-400 font-mono">Filtr: Barcha kanallar</span>
              </div>

              <div className="space-y-2.5">
                {[
                  { id: 'ORD-9842', client: 'IT Park Uzbekistan (B2B)', items: '19L Suv x 15 dona', total: '270,000 so\'m', source: 'Telegram Bot', courier: 'Ulug\'bek (#01 112 DDD)', status: 'Kuryerga topshirildi', badgeColor: 'bg-blue-500/20 text-blue-300' },
                  { id: 'ORD-9841', client: 'Malika Qosimova', items: '19L Suv x 2 dona', total: '36,000 so\'m', source: 'Veb-sayt', courier: 'Jamshid (#01 721 AAA)', status: 'Yetkazildi', badgeColor: 'bg-emerald-500/20 text-emerald-300' },
                  { id: 'ORD-9840', client: 'Apex Dent Klinikasi', items: '19L Suv x 4 dona', total: '72,000 so\'m', source: 'Qo\'ng\'iroq (Operator)', courier: 'Sardor (#10 432 BBB)', status: 'Yetkazildi', badgeColor: 'bg-emerald-500/20 text-emerald-300' },
                  { id: 'ORD-9839', client: 'Javohir Eshonqulov', items: '19L Suv x 3 dona', total: '54,000 so\'m', source: 'Telegram Bot', courier: 'Farrux (#01 889 CCC)', status: 'Yo\'lda (5 daq)', badgeColor: 'bg-amber-500/20 text-amber-300' },
                ].map((order) => (
                  <div key={order.id} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs gap-2">
                    <div className="flex items-center gap-3">
                      <span className="font-mono font-bold text-cyan-400 bg-cyan-950/60 px-2 py-1 rounded border border-cyan-800/40">
                        {order.id}
                      </span>
                      <div>
                        <p className="font-bold text-white text-sm">{order.client}</p>
                        <p className="text-slate-400">{order.items} • {order.total} • Kanal: <span className="text-slate-300 font-medium">{order.source}</span></p>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 self-end sm:self-center">
                      <div className="text-right hidden md:block">
                        <p className="text-slate-300 font-medium">{order.courier}</p>
                      </div>
                      <span className={`px-2.5 py-1 rounded-md font-semibold text-[11px] ${order.badgeColor}`}>
                        {order.status}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
