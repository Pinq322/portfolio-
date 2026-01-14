
import React from 'react';
import GlassCard from '../components/GlassCard';
import { SKILLS } from '../constants';
import { useLanguage } from '../LanguageContext';

const Skills: React.FC = () => {
  const { t } = useLanguage();
  return (
    <div className="min-h-screen pt-40 px-6 max-w-7xl mx-auto pb-40">
      <div className="mb-24 flex flex-col md:flex-row justify-between items-end gap-10">
        <div className="max-w-2xl">
          <span className="text-brand font-black text-xs tracking-[0.3em] uppercase mb-4 block">{t('skills.badge')}</span>
          <h2 className="text-6xl md:text-8xl font-black font-display tracking-tighter text-slate-900 dark:text-white uppercase">
            {t('skills.title1')}<br/>
            <span className="text-slate-300 dark:text-slate-600">{t('skills.title2')}</span>
          </h2>
        </div>
        <div className="flex gap-4 p-4 bg-white/50 dark:bg-white/5 rounded-3xl border border-black/5 dark:border-white/10 backdrop-blur-xl shrink-0">
          <div className="text-center px-6">
            <p className="text-4xl font-black text-brand font-display">95%</p>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{t('skills.efficiency')}</p>
          </div>
          <div className="w-[1px] bg-black/5 dark:bg-white/10" />
          <div className="text-center px-6">
            <p className="text-4xl font-black dark:text-white font-display">24/7</p>
            <p className="text-[9px] font-bold text-slate-400 uppercase tracking-widest mt-1">{t('skills.learning')}</p>
          </div>
        </div>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 grid sm:grid-cols-2 gap-6">
          {SKILLS.map(s => (
            <GlassCard key={s.name} className="p-8 group">
              <div className="flex justify-between items-start mb-10">
                <h3 className="text-3xl font-bold font-display text-slate-900 dark:text-white">{s.name}</h3>
                <span className="text-[10px] font-black uppercase tracking-widest text-brand px-3 py-1 bg-brand/10 rounded-full">{s.status}</span>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between text-[10px] font-black text-slate-500 uppercase tracking-widest">
                  <span>{t('skills.expertise')}</span>
                  <span className="text-slate-900 dark:text-white">{s.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-slate-100 dark:bg-white/5 rounded-full overflow-hidden">
                  <div className="h-full bg-brand transition-all duration-1000" style={{ width: `${s.percentage}%` }} />
                </div>
                <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">
                  {s.yearsNum} {s.yearsNum === 1 ? t('skills.year') : t('skills.years')} {t('skills.expLabel')}
                </p>
              </div>
            </GlassCard>
          ))}
        </div>
        <div className="space-y-6">
          <GlassCard className="p-10 bg-brand text-white border-none shadow-2xl shadow-brand/30">
            <h4 className="text-2xl font-bold mb-6 font-display uppercase tracking-tight">{t('skills.servicesTitle')}</h4>
            <ul className="space-y-6 opacity-90">
              {t('skills.services').map((item: string) => (
                <li key={item} className="flex items-center gap-3 font-bold text-sm">
                  <div className="w-1.5 h-1.5 bg-white rounded-full shrink-0" /> {item}
                </li>
              ))}
            </ul>
          </GlassCard>
          <div className="p-10 rounded-[2.5rem] bg-white/50 dark:bg-white/5 border border-black/5 dark:border-white/5">
             <h4 className="text-lg font-black font-display mb-6 dark:text-white uppercase tracking-widest">{t('skills.designStack')}</h4>
             <div className="flex flex-wrap gap-2">
                {['Figma', 'Sketch', 'Adobe XD', 'Photoshop', 'Spline'].map(t => (
                  <span key={t} className="px-4 py-2 bg-white dark:bg-white/5 text-[10px] font-black uppercase rounded-xl dark:text-slate-400 border border-black/5 dark:border-white/5">{t}</span>
                ))}
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
