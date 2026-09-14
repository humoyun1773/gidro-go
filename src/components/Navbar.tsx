import React, { useState, useEffect } from 'react';
import { Droplets, Phone, Menu, X, ArrowRight, Sparkles } from 'lucide-react';

interface NavbarProps {
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenDemoModal }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/85 backdrop-blur-xl border-b border-cyan-500/15 shadow-xl shadow-cyan-950/20'
          : 'bg-transparent border-b border-white/5'
      }`}
    >
      {/* Top micro banner */}
      <div className="bg-gradient-to-r from-cyan-600 via-blue-600 to-indigo-600 text-white text-xs py-1.5 px-4 text-center font-medium tracking-wide">
        <span className="inline-flex items-center gap-1.5 justify-center">
          <Sparkles className="w-3.5 h-3.5 animate-pulse text-cyan-200" />
          <span>Suv yetkazib berish biznesingiz uchun 14 kunlik bepul sinov davri!</span>
          <button
            onClick={onOpenDemoModal}
            className="underline underline-offset-2 ml-2 hover:text-cyan-100 font-semibold cursor-pointer"
          >
            Demo so'rash &rarr;
          </button>
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="relative w-11 h-11 rounded-2xl bg-gradient-to-tr from-cyan-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-lg shadow-cyan-500/30 group-hover:scale-105 transition-transform duration-300">
              <Droplets className="w-6 h-6 text-white" />
              <div className="absolute -inset-1 rounded-2xl bg-cyan-400/20 blur-sm -z-10 group-hover:blur-md transition-all"></div>
            </div>
            <div className="flex flex-col">
              <span className="text-2xl font-black tracking-tight text-white flex items-center gap-1">
                Gidro<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-400">Go</span>
              </span>
              <span className="text-[10px] text-cyan-300/80 font-semibold tracking-wider uppercase -mt-1">
                Water Delivery SaaS
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            <a
              href="#muammolar"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Muammolar
            </a>
            <a
              href="#yechim"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Yechim
            </a>
            <a
              href="#jarayon"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Qanday ishlaydi?
            </a>
            <a
              href="#dashboard"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors flex items-center gap-1.5"
            >
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
              </span>
              Dashboard
            </a>
            <a
              href="#auditoriya"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Kimlar uchun?
            </a>
            <a
              href="#kalkulyator"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              Kalkulyator
            </a>
            <a
              href="#faq"
              className="text-sm font-medium text-slate-300 hover:text-cyan-400 transition-colors"
            >
              FAQ
            </a>
          </nav>

          {/* Right Action Buttons */}
          <div className="hidden sm:flex items-center gap-4">
            <a
              href="tel:+998712000000"
              className="text-xs font-semibold text-slate-300 hover:text-white flex items-center gap-1.5 py-2 px-3 rounded-lg hover:bg-slate-800/60 transition-all"
            >
              <Phone className="w-3.5 h-3.5 text-cyan-400" />
              <span>+998 (71) 200-00-00</span>
            </a>

            <button
              onClick={onOpenDemoModal}
              className="relative inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-bold text-white rounded-xl group bg-gradient-to-br from-cyan-500 via-blue-600 to-indigo-600 hover:from-cyan-400 hover:via-blue-500 hover:to-indigo-500 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 active:scale-95 transition-all cursor-pointer"
            >
              <span className="relative px-5 py-2.5 transition-all ease-in duration-75 rounded-[10px] bg-slate-950/30 group-hover:bg-transparent flex items-center gap-2">
                <span>Bepul Demo Olish</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden p-2 rounded-xl text-slate-300 hover:text-white hover:bg-slate-800/80 transition-colors cursor-pointer"
            aria-label="Menyu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-slate-950/95 border-b border-cyan-500/20 px-6 py-6 space-y-4 backdrop-blur-2xl">
          <nav className="flex flex-col space-y-3">
            <a
              href="#muammolar"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-cyan-400 py-1"
            >
              Muammolar
            </a>
            <a
              href="#yechim"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-cyan-400 py-1"
            >
              Bizning Yechimimiz
            </a>
            <a
              href="#jarayon"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-cyan-400 py-1"
            >
              Qanday ishlaydi?
            </a>
            <a
              href="#dashboard"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-cyan-400 py-1 flex items-center gap-2"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
              Live Dashboard
            </a>
            <a
              href="#auditoriya"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-cyan-400 py-1"
            >
              Kimlar uchun?
            </a>
            <a
              href="#kalkulyator"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-cyan-400 py-1"
            >
              Foyda Kalkulyatori
            </a>
            <a
              href="#faq"
              onClick={() => setMobileMenuOpen(false)}
              className="text-base font-medium text-slate-300 hover:text-cyan-400 py-1"
            >
              FAQ (Savol-javob)
            </a>
          </nav>

          <div className="pt-4 border-t border-slate-800 space-y-3">
            <a
              href="tel:+998712000000"
              className="flex items-center gap-2 text-sm text-slate-300 py-1"
            >
              <Phone className="w-4 h-4 text-cyan-400" />
              <span>+998 (71) 200-00-00</span>
            </a>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenDemoModal();
              }}
              className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold text-center shadow-lg shadow-cyan-500/20"
            >
              Bepul Demo Olish
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
