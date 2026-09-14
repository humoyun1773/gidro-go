import React, { useState, useRef, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { Globe, ChevronDown, Check } from 'lucide-react';
import type { Language } from '../i18n';

// Clean SVG Flags for cross-platform consistency (works reliably on Windows, macOS, Linux, iOS, Android)
const FlagUz: React.FC = () => (
  <svg className="w-4 h-3 rounded-xs shrink-0 shadow-xs border border-white/10" viewBox="0 0 640 320">
    <rect width="640" height="106.7" fill="#0099b5" />
    <rect y="106.7" width="640" height="106.7" fill="#ffffff" />
    <rect y="213.3" width="640" height="106.7" fill="#1eb53a" />
    <rect y="103" width="640" height="4" fill="#d62828" />
    <rect y="213" width="640" height="4" fill="#d62828" />
    <circle cx="70" cy="53" r="24" fill="#ffffff" />
    <circle cx="78" cy="53" r="20" fill="#0099b5" />
  </svg>
);

const FlagRu: React.FC = () => (
  <svg className="w-4 h-3 rounded-xs shrink-0 shadow-xs border border-white/10" viewBox="0 0 640 400">
    <rect width="640" height="133.3" fill="#ffffff" />
    <rect y="133.3" width="640" height="133.3" fill="#0039a6" />
    <rect y="266.6" width="640" height="133.4" fill="#d52b1e" />
  </svg>
);

const FlagEn: React.FC = () => (
  <svg className="w-4 h-3 rounded-xs shrink-0 shadow-xs border border-white/10" viewBox="0 0 640 400">
    <clipPath id="uk-flag-clip">
      <rect width="640" height="400" />
    </clipPath>
    <g clipPath="url(#uk-flag-clip)">
      <rect width="640" height="400" fill="#012169" />
      <path d="M0,0 L640,400 M640,0 L0,400" stroke="#fff" strokeWidth="60" />
      <path d="M0,0 L640,400 M640,0 L0,400" stroke="#cf142b" strokeWidth="20" />
      <path d="M320,0 V400 M0,200 H640" stroke="#fff" strokeWidth="100" />
      <path d="M320,0 V400 M0,200 H640" stroke="#cf142b" strokeWidth="60" fill="none" />
    </g>
  </svg>
);

export const LanguageSelector: React.FC = () => {
  const { lang, setLang } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; flagComponent: React.FC }[] = [
    { code: 'uz', label: "O'zbek", flagComponent: FlagUz },
    { code: 'ru', label: 'Русский', flagComponent: FlagRu },
    { code: 'en', label: 'English', flagComponent: FlagEn },
  ];

  const currentLang = languages.find((l) => l.code === lang) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative inline-block text-left" ref={dropdownRef}>
      {/* Clean, single-code button without duplicate texts */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-slate-900/90 hover:bg-slate-800 border border-slate-700/80 hover:border-cyan-500/40 text-xs font-semibold text-slate-200 hover:text-white transition-all cursor-pointer shadow-sm active:scale-95"
        aria-label="Tilni tanlash / Language selector"
      >
        <Globe className="w-3.5 h-3.5 text-cyan-400 shrink-0" />
        <span className="font-mono font-bold uppercase tracking-wider text-white">
          {currentLang.code}
        </span>
        <ChevronDown 
          className={`w-3.5 h-3.5 text-slate-400 transition-transform duration-200 ${
            isOpen ? 'rotate-180 text-cyan-400' : ''
          }`} 
        />
      </button>

      {/* Language Options Dropdown */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-40 rounded-2xl bg-slate-900/95 border border-cyan-500/30 shadow-2xl shadow-cyan-950/50 py-1.5 z-50 backdrop-blur-xl animate-fade-in">
          {languages.map((item) => {
            const Flag = item.flagComponent;
            const isSelected = lang === item.code;
            return (
              <button
                key={item.code}
                type="button"
                onClick={() => {
                  setLang(item.code);
                  setIsOpen(false);
                }}
                className={`w-full px-3.5 py-2.5 text-left text-xs font-medium flex items-center justify-between transition-all cursor-pointer ${
                  isSelected
                    ? 'bg-cyan-500/15 text-cyan-300 font-bold'
                    : 'text-slate-300 hover:bg-slate-800/80 hover:text-white'
                }`}
              >
                <span className="flex items-center gap-2.5">
                  <Flag />
                  <span>{item.label}</span>
                </span>
                {isSelected ? (
                  <Check className="w-3.5 h-3.5 text-cyan-400" />
                ) : (
                  <span className="font-mono text-[10px] text-slate-500 uppercase">
                    {item.code}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};
