import React from 'react';
import { Droplets, Phone, Mail, MapPin, Send, Globe, Heart } from 'lucide-react';
import { useLanguage } from '../context/LanguageContext';

interface FooterProps {
  onNavigate?: (page: 'home' | 'about') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate }) => {
  const { t } = useLanguage();

  const handleNav = (page: 'home' | 'about') => {
    if (onNavigate) {
      onNavigate(page);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-slate-950 border-t border-slate-800/80 pt-14 sm:pt-16 pb-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8 sm:gap-10 pb-12 border-b border-slate-800/80">
          {/* Col 1: Brand & Bio */}
          <div className="lg:col-span-2 space-y-4">
            <button
              onClick={() => handleNav('home')}
              className="flex items-center gap-3 text-left cursor-pointer"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <Droplets className="w-5 h-5 text-white" />
              </div>
              <span className="text-2xl font-black text-white tracking-tight">
                Gidro<span className="text-cyan-400">Go</span>
              </span>
            </button>

            <p className="text-sm text-slate-400 leading-relaxed max-w-sm">
              {t.footer.desc}
            </p>

            <div className="flex items-center gap-3 pt-2">
              <a
                href="https://t.me/gidrogo_support"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                </svg>
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all"
                aria-label="LinkedIn"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M4.98 3.5c0 1.381-1.11 2.5-2.48 2.5s-2.48-1.119-2.48-2.5c0-1.38 1.11-2.5 2.48-2.5s2.48 1.12 2.48 2.5zm.02 4.5h-5v16h5v-16zm7.982 0h-4.968v16h4.969v-8.399c0-4.67 6.029-5.052 6.029 0v8.399h4.988v-10.131c0-7.88-8.922-7.593-11.018-3.714v-2.155z"/>
                </svg>
              </a>
              <a
                href="#"
                className="w-9 h-9 rounded-xl bg-slate-900 border border-slate-800 hover:border-cyan-500/50 hover:bg-slate-800 text-slate-400 hover:text-cyan-400 flex items-center justify-center transition-all"
                aria-label="Website"
              >
                <Globe className="w-4 h-4" />
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              {t.footer.pagesCol}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li>
                <button
                  onClick={() => handleNav('home')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left font-semibold text-cyan-300"
                >
                  {t.nav.home}
                </button>
              </li>
              <li>
                <button
                  onClick={() => handleNav('about')}
                  className="hover:text-cyan-400 transition-colors cursor-pointer text-left font-semibold text-cyan-300"
                >
                  {t.nav.about}
                </button>
              </li>
              <li><a href="#muammolar" onClick={() => handleNav('home')} className="hover:text-cyan-400 transition-colors">{t.nav.problems}</a></li>
              <li><a href="#yechim" onClick={() => handleNav('home')} className="hover:text-cyan-400 transition-colors">{t.nav.solution}</a></li>
              <li><a href="#jarayon" onClick={() => handleNav('home')} className="hover:text-cyan-400 transition-colors">{t.nav.howItWorks}</a></li>
              <li><a href="#dashboard" onClick={() => handleNav('home')} className="hover:text-cyan-400 transition-colors">{t.nav.dashboard}</a></li>
              <li><a href="#natijalar" onClick={() => handleNav('home')} className="hover:text-cyan-400 transition-colors">Case Studies</a></li>
              <li><a href="#jamoa" onClick={() => handleNav('home')} className="hover:text-cyan-400 transition-colors">Jamoa & Hamkorlar</a></li>
              <li><a href="#kalkulyator" onClick={() => handleNav('home')} className="hover:text-cyan-400 transition-colors">{t.nav.calculator}</a></li>
              <li><a href="#faq" onClick={() => handleNav('home')} className="hover:text-cyan-400 transition-colors">{t.nav.faq}</a></li>
            </ul>
          </div>

          {/* Col 3: Legal & Platform */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              {t.footer.servicesCol}
            </h4>
            <ul className="space-y-2 text-xs text-slate-400">
              <li><a href="#aloqa" className="hover:text-cyan-400 transition-colors">14 kunlik Bepul Sinov</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Fiskal to'lov integratsiyasi</a></li>
              <li><a href="#faq" className="hover:text-cyan-400 transition-colors">Mobil Kuryer Ilovasi</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Maxfiylik siyosati</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Foydalanish shartlari</a></li>
              <li><a href="#" className="hover:text-cyan-400 transition-colors">Xavfsizlik & SSL Shifrlash</a></li>
            </ul>
          </div>

          {/* Col 4: Contacts */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider font-mono">
              {t.footer.contactsCol}
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-400">
              <li className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="tel:+998712000000" className="hover:text-white">+998 (71) 200-00-00</a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
                <a href="mailto:info@gidrogo.uz" className="hover:text-white">info@gidrogo.uz</a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-cyan-400 shrink-0 mt-0.5" />
                <span>O'zbekiston, Toshkent shahri, Amir Temur shoh ko'chasi, 107B</span>
              </li>
              <li className="pt-2">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-[11px] font-medium border border-emerald-500/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span>
                  {t.footer.support247}
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 gap-4">
          <p>{t.footer.copyright}</p>
          <div className="flex items-center gap-1 text-slate-400">
            <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" />
            <span>{t.footer.loveText}</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
