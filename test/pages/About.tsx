
import React from 'react';
import GlassCard from '../components/GlassCard';
import { EXPERIENCES } from '../constants';
import { useLanguage } from '../LanguageContext';

const About: React.FC = () => {
  const { language, t } = useLanguage();
  const experiences = EXPERIENCES(language);

  return (
    <div className="min-h-screen pt-40 px-6 max-w-5xl mx-auto pb-40">
      <div className="text-center mb-24">
        <span className="text-brand font-black text-sm tracking-[0.3em] uppercase mb-4 block">{t('about.badge')}</span>
        <h2 className="text-7xl md:text-8xl font-black font-display tracking-tighter text-slate-900 dark:text-white uppercase">{t('about.title')}</h2>
        <p className="text-slate-500 dark:text-slate-400 mt-8 text-xl max-w-2xl mx-auto leading-relaxed italic font-medium">
          {t('about.quote')}
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-12 mb-32">
        {experiences.map(e => (
          <GlassCard key={e.title} className="p-10 text-left">
             <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="text-brand font-black text-xs tracking-widest block mb-2">{e.periodLabel || e.period}</span>
                  <h3 className="text-3xl font-black font-display text-slate-900 dark:text-white">{e.title}</h3>
                </div>
                <p className="text-brand font-black text-sm uppercase tracking-tighter px-4 py-1 bg-brand/10 rounded-full">{e.company}</p>
             </div>
             <p className="text-lg text-slate-500 dark:text-slate-400 mb-8 font-medium italic leading-relaxed">"{e.description}"</p>
             <div className="space-y-4">
                {e.achievements.map(a => (
                  <div key={a} className="flex items-center gap-4 text-sm font-bold text-slate-600 dark:text-slate-300">
                    <div className="w-2 h-2 bg-brand rounded-full shadow-[0_0_10px_rgba(123,77,255,0.6)]" /> {a}
                  </div>
                ))}
             </div>
          </GlassCard>
        ))}
      </div>

      <div className="text-center bg-white/40 dark:bg-white/5 rounded-[4rem] p-16 border border-black/5 dark:border-white/5 backdrop-blur-3xl shadow-2xl">
        <h3 className="text-5xl font-black font-display text-slate-900 dark:text-white mb-10 tracking-tighter">{t('about.connectTitle')}</h3>
        <div className="flex flex-wrap justify-center gap-6">
          <a href="https://t.me/tixaeye" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-10 py-5 bg-brand text-white font-black rounded-2xl shadow-xl shadow-brand/30 transition-all hover:-translate-y-2 hover:shadow-brand/50 uppercase">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
            {t('about.telegram')}
          </a>
          <a href="https://www.instagram.com/hetz_322/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-10 py-5 bg-white dark:bg-white/5 text-slate-900 dark:text-white border-2 border-black/10 dark:border-white/10 font-black rounded-2xl transition-all hover:-translate-y-2 hover:border-brand/50 uppercase">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            {t('about.instagram')}
          </a>
          <a href="mailto:nazargolov23@gmail.com" className="flex items-center gap-3 px-10 py-5 bg-white dark:bg-white/5 text-slate-900 dark:text-white border-2 border-black/10 dark:border-white/10 font-black rounded-2xl transition-all hover:-translate-y-2 hover:border-brand/50 uppercase">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path><polyline points="22,6 12,13 2,6"></polyline></svg>
            {t('about.email')}
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
