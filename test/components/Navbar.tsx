
import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Navbar: React.FC<{ theme: 'dark' | 'light'; toggleTheme: () => void }> = ({ theme, toggleTheme }) => {
  const location = useLocation();
  const { language, toggleLanguage, t } = useLanguage();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  const navLinks = [
    { name: t('nav.home'), path: '/' }, 
    { name: t('nav.skills'), path: '/skills' }, 
    { name: t('nav.works'), path: '/projects' }, 
    { name: t('nav.about'), path: '/about' }
  ];

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname]);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);
  
  return (
    <>
      <nav className="fixed top-0 left-0 right-0 z-[60] flex justify-center p-4 md:p-6">
        <div className="flex items-center justify-between w-full max-w-4xl px-6 py-3 bg-white/80 dark:bg-[#121212]/80 backdrop-blur-3xl border border-black/5 dark:border-white/5 rounded-full shadow-2xl h-[64px]">
          <Link to="/" className="text-xl md:text-2xl font-black font-display text-slate-900 dark:text-white uppercase tracking-tighter shrink-0 min-w-[80px]">
            NAZAR<span className="text-brand">.</span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex gap-8">
            {navLinks.map(l => (
              <Link 
                key={l.path} 
                to={l.path} 
                className={`text-sm font-bold transition-all whitespace-nowrap ${location.pathname === l.path ? 'text-brand' : 'text-slate-400 hover:text-slate-600 dark:hover:text-white'}`}
              >
                {l.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-2 md:gap-4">
            <div className="hidden md:flex items-center gap-2 pl-4 border-l border-black/10 dark:border-white/10">
              <button 
                onClick={toggleLanguage} 
                className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-white/5 text-slate-500 font-black text-[10px] transition-all active:scale-90 uppercase tracking-tighter shrink-0"
              >
                {language === 'en' ? 'RU' : 'EN'}
              </button>
              <button onClick={toggleTheme} className="w-10 h-10 rounded-full flex items-center justify-center bg-slate-100 dark:bg-white/5 text-slate-500 transition-all active:scale-90 shrink-0">
                {theme === 'dark' ? '☀️' : '🌙'}
              </button>
            </div>

            {/* Hamburger Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden w-10 h-10 flex flex-col items-center justify-center gap-1.5 z-[70] transition-all active:scale-90"
              aria-label="Toggle Menu"
            >
              <span className={`w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`} />
              <span className={`w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ${isMenuOpen ? 'opacity-0' : ''}`} />
              <span className={`w-6 h-0.5 bg-slate-900 dark:bg-white transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div 
        className={`fixed inset-0 z-[55] md:hidden transition-all duration-500 ${isMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
      >
        <div className="absolute inset-0 bg-slate-50/95 dark:bg-[#080808]/95 backdrop-blur-2xl flex flex-col items-center justify-center p-8">
          <div className="flex flex-col items-center gap-8 mb-12">
            {navLinks.map((l, i) => (
              <Link 
                key={l.path} 
                to={l.path} 
                style={{ transitionDelay: `${i * 50}ms` }}
                className={`text-4xl font-black font-display tracking-tighter uppercase transition-all duration-500 ${
                  isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
                } ${location.pathname === l.path ? 'text-brand' : 'text-slate-900 dark:text-white'}`}
              >
                {l.name}
              </Link>
            ))}
          </div>

          <div className={`flex gap-6 transition-all duration-700 delay-300 ${isMenuOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <button 
              onClick={toggleLanguage} 
              className="px-6 py-3 rounded-2xl bg-slate-200 dark:bg-white/5 text-slate-900 dark:text-white font-black text-xs uppercase tracking-widest border border-black/5 dark:border-white/5 min-w-[100px]"
            >
              {language === 'en' ? 'Russian' : 'English'}
            </button>
            <button 
              onClick={toggleTheme} 
              className="w-12 h-12 rounded-2xl flex items-center justify-center bg-slate-200 dark:bg-white/5 text-slate-900 dark:text-white border border-black/5 dark:border-white/5"
            >
              {theme === 'dark' ? '☀️' : '🌙'}
            </button>
          </div>

          <button 
            onClick={() => setIsMenuOpen(false)}
            className="absolute bottom-12 text-slate-400 font-bold uppercase text-[10px] tracking-[0.3em]"
          >
            {language === 'en' ? 'Close Menu' : 'Закрыть'}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
