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
import { useLanguage } from '../context/LanguageContext';

export const LiveDashboardPreview: React.FC = () => {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'kpi' | 'couriers' | 'inventory' | 'orders'>('kpi');
  const [isLiveActive, setIsLiveActive] = useState<boolean>(true);

  return (
    <section id="dashboard" className="py-24 bg-slate-900 relative overflow-hidden border-t border-slate-800">
      <div className="absolute top-1/2 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[150px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold mb-4">
            <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></span>
            <span>{t.dashboard.badge}</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white tracking-tight mb-5">
            {t.dashboard.title}{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
              {t.dashboard.titleHighlight}
            </span>
          </h2>

          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            {t.dashboard.subtitle}
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex items-center justify-start sm:justify-center gap-2 overflow-x-auto pb-2 sm:pb-0 no-scrollbar sm:flex-wrap w-full mb-8">
          <button
            onClick={() => setActiveTab('kpi')}
            className={`px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold flex items-center gap-2 transition-all cursor-pointer ${
              activeTab === 'kpi'
                ? 'bg-cyan-500 text-slate-950 shadow-lg shadow-cyan-500/20'
                : 'bg-slate-950/80 text-slate-300 hover:text-white border border-slate-800'
            }`}
          >
            <BarChart3 className="w-4 h-4" />
            <span>{t.dashboard.tabs.kpi}</span>
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
            <span>{t.dashboard.tabs.couriers}</span>
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
            <span>{t.dashboard.tabs.inventory}</span>
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
            <span>{t.dashboard.tabs.orders}</span>
          </button>
        </div>

        {/* Realistic Dashboard Panel Frame */}
        <div className="rounded-3xl bg-slate-950 border border-slate-800 p-4 sm:p-6 shadow-2xl shadow-cyan-950/30">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-4 mb-6 border-b border-slate-800/80 gap-3">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 rounded-xl bg-cyan-500/20 text-cyan-400 flex items-center justify-center font-black">
                G
              </div>
              <div>
                <h3 className="text-sm sm:text-base font-bold text-white flex items-center gap-2">
                  <span>{t.dashboard.branchName}</span>
                  <span className="text-[10px] bg-emerald-500/10 text-emerald-400 border border-emerald-500/30 px-2 py-0.5 rounded font-mono">
                    LIVE
                  </span>
                </h3>
                <p className="text-xs text-slate-400">{t.dashboard.branchSubtitle}</p>
              </div>
            </div>

            <div className="flex items-center gap-3 self-end sm:self-center">
              <span className="text-xs text-slate-400 font-mono hidden md:inline">
                {t.dashboard.lastUpdated}
              </span>
              <button
                onClick={() => setIsLiveActive(!isLiveActive)}
                className="px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-medium flex items-center gap-1.5 cursor-pointer transition-colors"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isLiveActive ? 'animate-spin text-cyan-400' : ''}`} />
                <span>{isLiveActive ? t.dashboard.autoRefresh : t.dashboard.paused}</span>
              </button>
            </div>
          </div>

          {/* TAB 1: KPI & FINANCIALS */}
          {activeTab === 'kpi' && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>{t.dashboard.kpis.revenueTitle}</span>
                    <DollarSign className="w-4 h-4 text-emerald-400" />
                  </div>
                  <p className="text-2xl font-black text-white">{t.dashboard.kpis.revenueVal}</p>
                  <p className="text-xs text-emerald-400 mt-1 flex items-center gap-1 font-semibold">
                    <ArrowUpRight className="w-3.5 h-3.5" /> {t.dashboard.kpis.revenueGrowth}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>{t.dashboard.kpis.waterVolumeTitle}</span>
                    <Droplets className="w-4 h-4 text-cyan-400" />
                  </div>
                  <p className="text-2xl font-black text-white">{t.dashboard.kpis.waterVolumeVal}</p>
                  <p className="text-xs text-cyan-400 mt-1 flex items-center gap-1 font-semibold">
                    <ArrowUpRight className="w-3.5 h-3.5" /> {t.dashboard.kpis.waterVolumeLiters}
                  </p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>{t.dashboard.kpis.couriersTitle}</span>
                    <Truck className="w-4 h-4 text-blue-400" />
                  </div>
                  <p className="text-2xl font-black text-white">{t.dashboard.kpis.couriersVal}</p>
                  <p className="text-xs text-slate-400 mt-1">{t.dashboard.kpis.couriersAvg}</p>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <div className="flex items-center justify-between text-slate-400 text-xs mb-2">
                    <span>{t.dashboard.kpis.ratingTitle}</span>
                    <CheckCircle2 className="w-4 h-4 text-purple-400" />
                  </div>
                  <p className="text-2xl font-black text-white">{t.dashboard.kpis.ratingVal}</p>
                  <p className="text-xs text-purple-400 mt-1">{t.dashboard.kpis.ratingCount}</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: COURIERS */}
          {activeTab === 'couriers' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
              <div className="lg:col-span-5 space-y-3">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-xs font-bold text-slate-300 uppercase">{t.dashboard.tabs.couriers} (6)</span>
                  <span className="text-xs text-cyan-400 font-mono">GPS ON</span>
                </div>

                {[
                  { id: '1', name: 'Jamshid (Labo #01 721 AAA)', area: 'Yunusobod', load: '48 / 60', status: 'OK', eta: '5 min' },
                  { id: '2', name: 'Sardor (Damas #10 432 BBB)', area: 'Chilonzor', load: '32 / 50', status: 'OK', eta: '12 min' },
                  { id: '3', name: 'Farrux (Labo #01 889 CCC)', area: 'Mirobod', load: '55 / 60', status: 'OK', eta: '18 min' },
                ].map((courier) => (
                  <div key={courier.id} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 text-xs space-y-1">
                    <div className="flex items-center justify-between">
                      <p className="font-bold text-white flex items-center gap-1.5">
                        <Truck className="w-3.5 h-3.5 text-cyan-400" />
                        {courier.name}
                      </p>
                      <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-semibold text-[10px]">
                        ETA: {courier.eta}
                      </span>
                    </div>
                    <p className="text-slate-400 text-[11px]">{courier.area} • Load: {courier.load}</p>
                  </div>
                ))}
              </div>

              <div className="lg:col-span-7 bg-slate-900/90 rounded-2xl border border-slate-800 p-4 min-h-[260px] flex flex-col justify-between">
                <div className="flex items-center gap-2 bg-slate-950/80 px-3 py-1.5 rounded-xl border border-slate-800 text-xs text-white">
                  <MapPin className="w-4 h-4 text-rose-500 animate-bounce" />
                  <span>GPS Real-Time Live Fleet</span>
                </div>
                <div className="my-auto text-center text-xs text-slate-500 py-10">
                  🗺️ Yandex Maps / OSM Integrated Vector Tracking API
                </div>
                <div className="text-xs text-slate-400 flex items-center justify-between pt-2 border-t border-slate-800">
                  <span>Smart dispatch & live traffic routing</span>
                  <span className="text-cyan-400 font-bold">Fuel saving: 28%</span>
                </div>
              </div>
            </div>
          )}

          {/* TAB 3: INVENTORY */}
          {activeTab === 'inventory' && (
            <div className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <p className="text-xs text-slate-400">19L Stock (Full)</p>
                  <p className="text-2xl font-black text-cyan-400 mt-1">1,840</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <p className="text-xs text-slate-400">Empty Returned Tara</p>
                  <p className="text-2xl font-black text-amber-400 mt-1">480</p>
                </div>
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-800">
                  <p className="text-xs text-slate-400">Bottles with Clients</p>
                  <p className="text-2xl font-black text-emerald-400 mt-1">4,210</p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 4: ORDERS */}
          {activeTab === 'orders' && (
            <div className="space-y-2.5">
              {[
                { id: 'ORD-9842', client: 'IT Park (B2B)', items: '19L x 15', total: '270,000 UZS', status: 'Delivering' },
                { id: 'ORD-9841', client: 'Malika Q.', items: '19L x 2', total: '36,000 UZS', status: 'Delivered' },
                { id: 'ORD-9840', client: 'Apex Clinic', items: '19L x 4', total: '72,000 UZS', status: 'Delivered' },
              ].map((order) => (
                <div key={order.id} className="p-3.5 rounded-xl bg-slate-900 border border-slate-800 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs">
                  <div>
                    <span className="font-mono text-cyan-400 font-bold mr-2">{order.id}</span>
                    <strong className="text-white">{order.client}</strong>
                    <span className="text-slate-400 ml-2">({order.items})</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-white font-semibold">{order.total}</span>
                    <span className="px-2 py-0.5 rounded bg-cyan-500/20 text-cyan-300 font-semibold text-[10px]">{order.status}</span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};
