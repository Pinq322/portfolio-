
import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../constants';
import { useLanguage } from '../LanguageContext';

const ProjectDetail: React.FC = () => {
  const { id } = useParams();
  const { language, t } = useLanguage();
  const project = PROJECTS(language).find(p => p.id === Number(id));

  if (!project) return <div className="pt-40 text-center text-white">{t('projectDetail.notFound')}</div>;

  return (
    <div className="min-h-screen pt-32 px-6 pb-40 max-w-5xl mx-auto">
      <Link to="/projects" className="inline-flex items-center gap-2 text-brand font-black mb-12 group">
        <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand/10 transition-all group-hover:-translate-x-2">←</span> {t('projectDetail.back')}
      </Link>
      <div className="aspect-video rounded-[3rem] overflow-hidden border border-black/5 dark:border-white/5 mb-16 shadow-2xl">
        <img src={project.image} className="w-full h-full object-cover" alt={project.title} />
      </div>
      <div className="mb-16">
        <span className="text-brand font-black text-xs uppercase tracking-widest mb-4 block">{project.category}</span>
        <h1 className="text-6xl md:text-8xl font-black font-display tracking-tighter text-slate-900 dark:text-white mb-10">{project.title}</h1>
        <p className="text-xl text-slate-500 dark:text-slate-400 leading-relaxed max-w-4xl border-l-4 border-brand pl-8">{project.fullDescription}</p>
      </div>
      <div className="grid md:grid-cols-2 gap-20">
        <div>
          <h2 className="text-3xl font-black font-display mb-8 text-slate-900 dark:text-white">{t('projectDetail.techTitle')}</h2>
          <div className="flex flex-wrap gap-3">
            {project.tech.map(t => (
              <span key={t} className="px-6 py-3 bg-brand/10 text-brand rounded-2xl text-sm font-black border border-brand/20">{t}</span>
            ))}
          </div>
        </div>
        <div>
          <h2 className="text-3xl font-black font-display mb-8 text-slate-900 dark:text-white">{t('projectDetail.featuresTitle')}</h2>
          <ul className="space-y-6">
            {project.keyFeatures.map(f => (
              <li key={f} className="flex items-center gap-4 text-slate-600 dark:text-slate-300 font-medium">
                <div className="w-6 h-6 rounded-full bg-brand/20 flex items-center justify-center shrink-0">
                  <svg className="w-4 h-4 text-brand" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="4"><path d="M5 13l4 4L19 7" /></svg>
                </div>
                {f}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="mt-24 pt-12 border-t border-black/5 dark:border-white/5 flex flex-col sm:flex-row items-center justify-between gap-8">
        <div>
           <p className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">{t('projectDetail.demoSubtitle')}</p>
           <h3 className="text-3xl font-bold font-display text-slate-900 dark:text-white">{t('projectDetail.demoTitle')}</h3>
        </div>
        <a href={project.liveLink} target="_blank" rel="noopener noreferrer" className="flex items-center gap-3 px-12 py-5 bg-brand text-white font-black rounded-full shadow-2xl shadow-brand/40 transform hover:scale-105 active:scale-95 transition-all">
          {t('projectDetail.openBtn')}
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
        </a>
      </div>
    </div>
  );
};

export default ProjectDetail;
