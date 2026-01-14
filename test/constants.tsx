
import { Project, Skill, Experience } from './types';

export const PROJECTS: (lang: 'en' | 'ru') => Project[] = (lang) => [
  {
    id: 1,
    title: "Advoo Marketing",
    category: lang === 'en' ? "Digital Marketing Agency" : "Маркетинговое агентство",
    description: lang === 'en' 
      ? "Digital marketing agency platform. Enhancing business efficiency through AI tools and expert strategy."
      : "Платформа для маркетингового агентства. Повышение эффективности бизнеса через AI-инструменты.",
    fullDescription: lang === 'en'
      ? "A high-end marketing ecosystem that leverages AI instruments and 5+ years of advertising experience to maximize campaign effectiveness. The platform features 'Target' - a specialized module for precision audience hitting and business efficiency enhancement."
      : "Высококлассная маркетинговая экосистема, использующая AI-инструменты и более чем 5-летний опыт работы в рекламе. Платформа включает модуль 'Target' для точного попадания в аудиторию.",
    keyFeatures: lang === 'en' ? [
      "AI-Powered Targeting Instruments",
      "Digital Presence Promotion",
      "Strategic Business Analytics",
      "Custom Campaign Management",
      "Interactive Project Discussion UI"
    ] : [
      "Инструменты таргетинга на базе ИИ",
      "Продвижение цифрового присутствия",
      "Стратегическая бизнес-аналитика",
      "Управление кампаниями",
      "Интерактивный интерфейс обсуждения проектов"
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop", 
    tech: ["React", "Tailwind CSS", "AI Integration", "Framer Motion"],
    liveLink: "https://advoo.netlify.app",
    year: "2024"
  },
  {
    id: 2,
    title: "Vue Cinemas",
    category: lang === 'en' ? "Streaming & Cinema" : "Стриминг и Кино",
    description: lang === 'en'
      ? "Premium movie platform with interactive collections, films, and serials browsing."
      : "Премиальная киноплатформа с интерактивными коллекциями и поиском фильмов.",
    fullDescription: lang === 'en'
      ? "Vue Cinemas is a feature-rich movie portal offering a seamless experience for cinema lovers. Browse through latest releases with a high-impact visual interface, tailored for movie, series, and cartoon enthusiasts."
      : "Vue Cinemas — это функциональный кинопортал, предлагающий бесшовный опыт для любителей кино. Просматривайте последние релизы в эффектном визуальном интерфейсе.",
    keyFeatures: lang === 'en' ? [
      "Interactive Movie Collections",
      "Film/Series/Cartoon Filtering",
      "Dynamic Movie Detail Pages",
      "Responsive Content Streaming",
      "Glassmorphic Navigation Bar"
    ] : [
      "Интективные коллекции фильмов",
      "Фильтрация фильмов/сериалов/мультфильмов",
      "Динамические страницы деталей",
      "Адаптивный стриминг контента",
      "Глассморфная панель навигации"
    ],
    image: "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?q=80&w=2070&auto=format&fit=crop",
    tech: ["Vue.js", "SCSS", "Movie API", "Vite"],
    liveLink: "https://pinq322.github.io/vue-cinemas/",
    year: "2023"
  }
];

export const SKILLS: (Skill & { yearsNum: number })[] = [
  { name: "React / Vue", level: "Advanced", yearsOfExp: "", yearsNum: 2, status: "Daily", percentage: 94 },
  { name: "TypeScript", level: "Intermediate", yearsOfExp: "", yearsNum: 1.5, status: "Active", percentage: 82 },
  { name: "Next.js", level: "Intermediate", yearsOfExp: "", yearsNum: 1, status: "Active", percentage: 78 },
  { name: "Tailwind CSS", level: "Advanced", yearsOfExp: "", yearsNum: 2, status: "Daily", percentage: 96 },
  { name: "Node.js", level: "Intermediate", yearsOfExp: "", yearsNum: 1.5, status: "Active", percentage: 65 },
  { name: "Figma", level: "Intermediate", yearsOfExp: "", yearsNum: 2, status: "Daily", percentage: 88 },
];

export const EXPERIENCES: (lang: 'en' | 'ru') => Experience[] = (lang) => [
  {
    period: "2023 - Present",
    periodLabel: lang === 'en' ? "2023 - Present" : "2023 - Наст. время",
    title: lang === 'en' ? "Junior Frontend Developer" : "Junior Фронтенд разработчик",
    company: "Creative Studio",
    description: lang === 'en' 
      ? "Developing modern web interfaces for high-growth startups and agencies like Advoo."
      : "Разработка современных веб-интерфейсов для быстрорастущих стартапов и агентств.",
    achievements: lang === 'en' ? [
      "Reduced load times by 30%",
      "Implemented design systems in Tailwind",
      "Built 5+ production-ready apps"
    ] : [
      "Сократил время загрузки на 30%",
      "Внедрил дизайн-системы на Tailwind",
      "Создал более 5 приложений готовых к продакшену"
    ]
  }
];
