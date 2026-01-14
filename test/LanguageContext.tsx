
import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'ru';

interface LanguageContextType {
  language: Language;
  toggleLanguage: () => void;
  t: (key: string) => any;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguage] = useState<Language>('en');

  const toggleLanguage = () => {
    setLanguage((prev) => (prev === 'en' ? 'ru' : 'en'));
  };

  const t = (path: string) => {
    const keys = path.split('.');
    let result: any = TRANSLATIONS[language];
    for (const key of keys) {
      if (result[key] === undefined) return path;
      result = result[key];
    }
    return result;
  };

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) throw new Error('useLanguage must be used within a LanguageProvider');
  return context;
};

const TRANSLATIONS: any = {
  en: {
    nav: { home: 'Home', skills: 'Skills', works: 'Works', about: 'About' },
    home: {
      badge: 'AVAILABLE FOR HIRE',
      title1: 'FRONTEND',
      title2: 'ARTIST',
      description: "I'm Nazar, building high-end digital interfaces where performance meets creative storytelling. Specialized in React, Vue & Modern Design Systems.",
      worksBtn: 'VIEW WORKS',
      storyBtn: 'MY STORY'
    },
    skills: {
      badge: 'PROFICIENCY',
      title1: 'SKILLS &',
      title2: 'ANALYTICS',
      efficiency: 'EFFICIENCY',
      learning: 'LEARNING',
      expertise: 'SKILL LEVEL',
      expLabel: 'EXPERIENCE',
      years: 'YEARS',
      year: 'YEAR',
      servicesTitle: 'Core Services',
      designStack: 'Design Stack',
      services: ['Responsive Web Design', 'Interactive Prototypes', 'Frontend Architecture', 'Performance Optimization']
    },
    works: {
      badge: 'PORTFOLIO',
      title1: 'SELECTED',
      title2: 'WORKS',
      viewDetails: 'View Details'
    },
    about: {
      badge: 'OUR STORY',
      title: 'ABOUT ME',
      quote: '"I bridge the gap between complex backend logic and user-centric design, creating fluid digital experiences that speak for themselves."',
      connectTitle: "LET'S CONNECT",
      telegram: 'TELEGRAM',
      instagram: 'INSTAGRAM',
      email: 'EMAIL ME'
    },
    projectDetail: {
      back: 'BACK TO PROJECTS',
      techTitle: 'Technologies Used',
      featuresTitle: 'Key Features',
      demoSubtitle: 'Want to see the result?',
      demoTitle: 'Experience the Live Demo',
      openBtn: 'OPEN PROJECT',
      notFound: 'Project Not Found'
    },
    footer: {
      description: 'Crafting exceptional digital experiences through code and creative design.',
      credits: 'DESIGNED BY NAZAR'
    }
  },
  ru: {
    nav: { home: 'Главная', skills: 'Навыки', works: 'Работы', about: 'Инфо' },
    home: {
      badge: 'ДОСТУПЕН К РАБОТЕ',
      title1: 'ФРОНТЕНД',
      title2: 'МАСТЕР',
      description: "Я Назар, создаю интерфейсы премиум-класса, где мощный код сочетается с креативом. Специалист по React, Vue и современным дизайн-системам.",
      worksBtn: 'МОИ РАБОТЫ',
      storyBtn: 'ОБО МНЕ'
    },
    skills: {
      badge: 'КОМПЕТЕНЦИИ',
      title1: 'НАВЫКИ И',
      title2: 'АНАЛИТИКА',
      efficiency: 'КАЧЕСТВО',
      learning: 'РАЗВИТИЕ',
      expertise: 'УРОВЕНЬ НАВЫКОВ',
      expLabel: 'ОПЫТ РАБОТЫ',
      years: 'ЛЕТ',
      year: 'ГОД',
      servicesTitle: 'Мои услуги',
      designStack: 'Стек дизайна',
      services: ['Адаптивный дизайн', 'Интерактивные прототипы', 'Frontend-архитектура', 'Оптимизация кода']
    },
    works: {
      badge: 'ПОРТФОЛИО',
      title1: 'ЛУЧШИЕ',
      title2: 'ПРОЕКТЫ',
      viewDetails: 'Подробнее'
    },
    about: {
      badge: 'МОЯ ИСТОРИЯ',
      title: 'ОБО МНЕ',
      quote: '"Я создаю связь между сложной логикой и удобным дизайном, превращая код в интуитивно понятный цифровой опыт для каждого."',
      connectTitle: 'СВЯЖЕМСЯ?',
      telegram: 'ТЕЛЕГРАМ',
      instagram: 'ИНСТАГРАМ',
      email: 'ПОЧТА'
    },
    projectDetail: {
      back: 'К ПРОЕКТАМ',
      techTitle: 'Технологии',
      featuresTitle: 'Особенности',
      demoSubtitle: 'Хотите оценить результат?',
      demoTitle: 'Живое демо проекта',
      openBtn: 'ОТКРЫТЬ ПРОЕКТ',
      notFound: 'Проект не найден'
    },
    footer: {
      description: 'Создаю исключительный опыт через код и креатив.',
      credits: 'ДИЗАЙН И КОД - NAZAR'
    }
  }
};
