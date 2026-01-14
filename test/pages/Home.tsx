
import React from 'react';
import { Link } from 'react-router-dom';
import { useLanguage } from '../LanguageContext';

const Home: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen pt-32 lg:pt-48 px-6 max-w-7xl mx-auto overflow-hidden">
      <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-12 lg:gap-16 items-center">
        <div className="z-20 relative flex flex-col items-start order-2 lg:order-1">
          <span className="inline-block py-2 px-4 mb-6 rounded-full bg-brand/10 border border-brand/20 text-brand text-[10px] font-black uppercase tracking-[0.2em] whitespace-nowrap">
            {t('home.badge')}
          </span>
          <div className="h-auto mb-6">
            <h1 className="text-5xl md:text-7xl lg:text-[5.2rem] font-black font-display tracking-tighter leading-[0.9] text-slate-900 dark:text-white uppercase">
              {t('home.title1')}<br/>
              <span className="text-brand">{t('home.title2')}</span>
            </h1>
          </div>
          <div className="min-h-[60px] mb-10 max-w-lg">
            <p className="text-base md:text-lg text-slate-500 dark:text-slate-400 leading-relaxed font-medium">
              {t('home.description')}
            </p>
          </div>
          <div className="flex flex-wrap gap-4 w-full sm:w-auto">
            <Link to="/projects" className="flex-1 sm:flex-none px-8 py-4 bg-brand text-white font-black rounded-2xl shadow-xl shadow-brand/20 transform hover:-translate-y-1 transition-all text-center min-w-[170px] uppercase text-[10px] tracking-widest">
              {t('home.worksBtn')}
            </Link>
            <Link to="/about" className="flex-1 sm:flex-none px-8 py-4 border border-black/10 dark:border-white/10 font-black rounded-2xl dark:text-white hover:bg-black/5 dark:hover:bg-white/5 transition-all text-center min-w-[170px] uppercase text-[10px] tracking-widest">
              {t('home.storyBtn')}
            </Link>
          </div>
        </div>
        <div className="relative group flex justify-center lg:justify-end shrink-0 order-1 lg:order-2">
          <div className="absolute inset-0 bg-brand/20 blur-[100px] rounded-full scale-90 group-hover:scale-110 transition-all duration-1000 -z-10" />
          {/* Reduced max-width from 500px to 430px (approx 14% reduction) */}
          <div className="w-full max-w-[430px] aspect-[4/5] rounded-[2.5rem] lg:rounded-[3.5rem] bg-white/40 dark:bg-white/5 border-[8px] border-white dark:border-[#1a1a1a] shadow-2xl relative z-0 transform lg:rotate-2 group-hover:rotate-0 transition-all duration-700 overflow-hidden shrink-0">
            <img 
              src="https://i.postimg.cc/KjQMQQ5L/izobrazenie-2026-01-14-202842232.png" 
              alt="Nazar" 
              className="w-full h-full object-cover grayscale-[0.15] hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand/30 to-transparent pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
