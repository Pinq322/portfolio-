
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { useLanguage } from '../LanguageContext';

const Projects: React.FC = () => {
  const navigate = useNavigate();
  const { language, t } = useLanguage();
  const localizedProjects = PROJECTS(language);

  return (
    <div className="min-h-screen pt-40 px-6 max-w-7xl mx-auto pb-40">
      <div className="mb-24">
        <span className="text-brand font-black text-sm tracking-[0.3em] uppercase mb-4 block">{t('works.badge')}</span>
        <h2 className="text-6xl md:text-8xl font-black font-display tracking-tighter text-slate-900 dark:text-white">
          {t('works.title1')}<br/>
          <span className="text-slate-300 dark:text-slate-600">{t('works.title2')}</span>
        </h2>
      </div>
      <div className="grid md:grid-cols-2 gap-20">
        {localizedProjects.map(p => (
          <div key={p.id} onClick={() => navigate(`/projects/${p.id}`)} className="group cursor-pointer">
            <div className="relative aspect-[16/10] rounded-[3rem] overflow-hidden border border-black/5 dark:border-white/5 mb-8 shadow-xl group-hover:shadow-2xl transition-all duration-700">
              <img src={p.image} className="absolute inset-0 w-full h-full object-cover transition-all duration-1000 group-hover:scale-105" alt={p.title} />
              <div className="absolute inset-0 bg-brand/80 opacity-0 group-hover:opacity-100 transition-all duration-500 backdrop-blur-sm flex items-center justify-center text-white">
                <span className="text-xs font-black uppercase tracking-[0.4em]">{t('works.viewDetails')}</span>
              </div>
            </div>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-4xl font-black font-display text-slate-900 dark:text-white tracking-tighter">{p.title}</h3>
              <span className="text-slate-400 font-mono text-sm">{p.year}</span>
            </div>
            <p className="text-lg text-slate-500 max-w-md">{p.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
