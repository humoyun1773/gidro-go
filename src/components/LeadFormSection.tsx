import React, { useState } from 'react';
import { Send, Phone, MessageSquare, CheckCircle2, Sparkles, Check } from 'lucide-react';
import type { LeadFormData } from '../types';
import { useLanguage } from '../context/LanguageContext';

export const LeadFormSection: React.FC = () => {
  const { t } = useLanguage();
  const [formData, setFormData] = useState<LeadFormData>({
    fullName: '',
    phone: '+998 ',
    companyName: '',
    businessType: 'Suv yetkazib berish korxonasi (Ferma)',
    dailyBottles: '100-300 dona',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate saving lead and connecting with Telegram Bot notification
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 900);
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setFormData({
      fullName: '',
      phone: '+998 ',
      companyName: '',
      businessType: 'Suv yetkazib berish korxonasi (Ferma)',
      dailyBottles: '100-300 dona',
      message: '',
    });
  };

  return (
    <section id="aloqa" className="py-24 bg-slate-950 relative overflow-hidden border-t border-slate-800">
      {/* Background glowing gradients */}
      <div className="absolute top-1/3 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[160px] pointer-events-none"></div>
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto rounded-3xl bg-gradient-to-b from-slate-900 via-slate-900 to-slate-950 border border-slate-800 p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Left Column: CTA Info */}
            <div className="lg:col-span-5 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold">
                <Sparkles className="w-3.5 h-3.5" />
                <span>{t.leadForm.badge}</span>
              </div>

              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight leading-tight">
                {t.leadForm.title}{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">
                  {t.leadForm.titleHighlight}
                </span>
              </h2>

              <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
                {t.leadForm.subtitle}
              </p>

              <div className="space-y-3 pt-2">
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{t.leadForm.check1}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{t.leadForm.check2}</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-slate-300">
                  <div className="w-5 h-5 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center shrink-0">
                    <Check className="w-3.5 h-3.5" />
                  </div>
                  <span>{t.leadForm.check3}</span>
                </div>
              </div>

              {/* Direct channels */}
              <div className="pt-6 border-t border-slate-800 space-y-3">
                <p className="text-xs text-slate-400 uppercase font-mono">{t.leadForm.quickContact}:</p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <a
                    href="tel:+998712000000"
                    className="flex-1 p-3 rounded-xl bg-slate-950 border border-slate-800 hover:border-cyan-500/40 text-xs text-slate-300 flex items-center gap-2.5 transition-all"
                  >
                    <Phone className="w-4 h-4 text-cyan-400" />
                    <span>+998 (71) 200-00-00</span>
                  </a>
                  <a
                    href="https://t.me/gidrogo_support"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 p-3 rounded-xl bg-cyan-950/40 border border-cyan-800/40 hover:bg-cyan-900/40 text-xs text-cyan-300 flex items-center gap-2.5 transition-all font-semibold"
                  >
                    <MessageSquare className="w-4 h-4 text-cyan-400" />
                    <span>{t.leadForm.tgChat}</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Right Column: Interactive Lead Form */}
            <div className="lg:col-span-7 bg-slate-950/90 rounded-2xl border border-slate-800 p-6 sm:p-8 shadow-xl">
              {isSubmitted ? (
                <div className="text-center py-10 space-y-4">
                  <div className="w-16 h-16 rounded-full bg-emerald-500/20 text-emerald-400 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">{t.leadForm.successTitle}</h3>
                  <p className="text-slate-300 text-sm max-w-md mx-auto">
                    {t.leadForm.successDesc} <span className="text-cyan-400 font-bold">{formData.phone}</span>
                  </p>
                  <div className="pt-4">
                    <button
                      onClick={handleReset}
                      className="px-6 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-white transition-all cursor-pointer"
                    >
                      {t.leadForm.resetBtn}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-white mb-2">{t.leadForm.formTitle}</h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t.leadForm.nameLabel} *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder={t.leadForm.namePlaceholder}
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t.leadForm.phoneLabel} *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+998 90 123 45 67"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all font-mono"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t.leadForm.companyLabel}
                      </label>
                      <input
                        type="text"
                        placeholder={t.leadForm.companyPlaceholder}
                        value={formData.companyName}
                        onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1.5">
                        {t.leadForm.typeLabel}
                      </label>
                      <select
                        value={formData.businessType}
                        onChange={(e) => setFormData({ ...formData, businessType: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                      >
                        {t.leadForm.types.map((tp, idx) => (
                          <option key={idx} value={tp}>{tp}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.leadForm.volumeLabel}
                    </label>
                    <select
                      value={formData.dailyBottles}
                      onChange={(e) => setFormData({ ...formData, dailyBottles: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900 border border-slate-800 text-white text-xs focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    >
                      {t.leadForm.volumes.map((vol, idx) => (
                        <option key={idx} value={vol}>{vol}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1.5">
                      {t.leadForm.msgLabel}
                    </label>
                    <textarea
                      rows={3}
                      placeholder={t.leadForm.msgPlaceholder}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2 rounded-xl bg-slate-900 border border-slate-800 text-white placeholder-slate-500 text-xs focus:outline-none focus:border-cyan-500 focus:ring-1 focus:ring-cyan-500 transition-all"
                    ></textarea>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full py-3.5 px-4 rounded-xl bg-gradient-to-r from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 text-white font-bold text-sm shadow-xl shadow-cyan-500/25 active:scale-[0.99] transition-all flex items-center justify-center gap-2 cursor-pointer disabled:opacity-50"
                  >
                    {isSubmitting ? (
                      <span className="inline-flex items-center gap-2">
                        <span className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                        {t.leadForm.submittingBtn}
                      </span>
                    ) : (
                      <>
                        <span>{t.leadForm.submitBtn}</span>
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>

                  <p className="text-[11px] text-slate-500 text-center">
                    {t.leadForm.privacyNotice}
                  </p>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
