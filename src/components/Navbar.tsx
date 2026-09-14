import React, { useState, useEffect } from 'react';
import { Droplets, Menu, X, Sparkles } from 'lucide-react';

interface NavbarProps {
  currentPage: 'home' | 'about';
  onNavigate: (page: 'home' | 'about') => void;
  onOpenDemoModal: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ currentPage, onNavigate, onOpenDemoModal }) => {
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

  const handleNavClick = (page: 'home' | 'about') => {
    onNavigate(page);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-slate-950/90 backdrop-blur-xl border-b border-cyan-500/15 shadow-xl shadow-cyan-950/20'
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
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-3 group text-left cursor-pointer"
          >
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
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-7">
            {/* Main Page Switches */}
            <button
              onClick={() => handleNavClick('home')}
              className={`text-sm font-bold transition-all px-3 py-1.5 rounded-xl cursor-pointer ${
                currentPage === 'home'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Bosh sahifa
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-sm font-bold transition-all px-3 py-1.5 rounded-xl cursor-pointer ${
                currentPage === 'about'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm shadow-cyan-500/10'
                  : 'text-slate-300 hover:text-white'
              }`}
            >
              Biz haqimizda
            </button>

            <span className="w-px h-5 bg-slate-800"></span>

            {/* In-page Anchor Links */}
            {currentPage === 'home' ? (
              <>
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
                <a
                  href="#aloqa"
                  className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
                >
                  Aloqa
                </a>
              </>
            ) : (
              <a
                href="#aloqa"
                onClick={() => handleNavClick('home')}
                className="text-sm font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Biz bilan bog'lanish
              </a>
            )}
          </nav>

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
            <button
              onClick={() => handleNavClick('home')}
              className={`text-left text-base font-bold py-1.5 transition-colors ${
                currentPage === 'home' ? 'text-cyan-400' : 'text-slate-300'
              }`}
            >
              Bosh sahifa
            </button>

            <button
              onClick={() => handleNavClick('about')}
              className={`text-left text-base font-bold py-1.5 transition-colors ${
                currentPage === 'about' ? 'text-cyan-400' : 'text-slate-300'
              }`}
            >
              Biz haqimizda
            </button>

            <div className="pt-2 border-t border-slate-800/80 space-y-2">
              <a
                href="#muammolar"
                onClick={() => {
                  handleNavClick('home');
                  setMobileMenuOpen(false);
                }}
                className="block text-sm font-medium text-slate-400 hover:text-cyan-400 py-1"
              >
                Muammolar
              </a>
              <a
                href="#yechim"
                onClick={() => {
                  handleNavClick('home');
                  setMobileMenuOpen(false);
                }}
                className="block text-sm font-medium text-slate-400 hover:text-cyan-400 py-1"
              >
                Bizning Yechimimiz
              </a>
              <a
                href="#dashboard"
                onClick={() => {
                  handleNavClick('home');
                  setMobileMenuOpen(false);
                }}
                className="block text-sm font-medium text-cyan-400 py-1"
              >
                Live Dashboard
              </a>
              <a
                href="#kalkulyator"
                onClick={() => {
                  handleNavClick('home');
                  setMobileMenuOpen(false);
                }}
                className="block text-sm font-medium text-slate-400 hover:text-cyan-400 py-1"
              >
                Foyda Kalkulyatori
              </a>
              <a
                href="#faq"
                onClick={() => {
                  handleNavClick('home');
                  setMobileMenuOpen(false);
                }}
                className="block text-sm font-medium text-slate-400 hover:text-cyan-400 py-1"
              >
                FAQ (Savol-javob)
              </a>
              <a
                href="#aloqa"
                onClick={() => {
                  handleNavClick('home');
                  setMobileMenuOpen(false);
                }}
                className="block text-sm font-semibold text-cyan-300 py-1"
              >
                Aloqa va Konsultatsiya
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};
