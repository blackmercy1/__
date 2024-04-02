import {
  AmbitLogo,
  BarepapersLogo,
  BimLogo,
  CDGOLogo,
  ClevertechLogo,
  ConsultlyLogo,
  EvercastLogo,
  Howdy,
  JarockiMeLogo,
  JojoMobileLogo,
  Minimal,
  MobileVikingsLogo,
  MonitoLogo,
  NSNLogo,
  ParabolLogo,
  TastyCloudLogo,
  YearProgressLogo,
} from "@/images/logos";
import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Арюков Алексей",
  initials: "АА",
  location: "Tbilisi, Georgia, EST",
  locationLink: "https://www.google.com/maps/place/Tbilisi",
  about:
      "C# Unity Developer",
  summary:
      "Я разработчик в индустрии видеоигр с более чем 2.5 годами опыта. Мой опыт включает разработку игр на языках программирования C# и C++. Мой опыт в программировании включает проекты Skabma и Choice of Life: Middle Ages 2, а также Pixel Gun.",
  avatarUrl: "https://avatars.githubusercontent.com/u/99472435?v=4",
  personalWebsiteUrl: "https://nothing.me",
  contact: {
    email: "leshaar14@gmail.com",
    tel: "+799605504321",
    social: [
      {
        name: "GitHub",
        url: "https://github.com/blackmercy1",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/aryukov-ally-028ba6267/",
        icon: LinkedInIcon,
      },
    ],
  },
  education: [
    {
      school: "Baltic federal university",
      degree: "Бакалавр, Прикладная математика",
      start: "2020",
      end: "",
    },
  ],
  work: [
    {
      company: "Samustai",
      link: "https://www.samustai.com",
      badges: ["Remote"],
      title: "C# gameplay developer",
      logo: ParabolLogo,
      start: "2022",
      end: "Настоящее время",
      description:
          "Портирование игр на консоли (PS, Xbox, Nintendo Switch), написание элементов управления для консолей, профилирование и оптимизация проектов (шейдеры, графика, код, сцены, использование памяти и многое другое), доработка исходного кода проекта, добавление логических модулей в игровые продукты",
    },
    {
      company: "Clicker knight",
      link: "https://clevertech.biz",
      badges: ["Remote"],
      title: "C# gameplay developer",
      logo: ClevertechLogo,
      start: "2021",
      end: "2022",
      description:
          "Разработка игровых модулей (инвентарь, магазин), разработка новых NPC, верстка сложных элементов пользовательского интерфейса для всех типов экранов, Поддержка старой игровой логики, включая рефакторинг, улучшение архитектурных модулей, разработка собственных окон редактора для легкой настройки ассетов, создание боевого пропуска с подключение платежных систем",
    },
  ],
  skills: [
    "C#",
    "Unity",
    "Git",
    "Jira",
    "Agile",
    "Linux",
    "MVC",
    "Jira",
    "Python",
    "C++",
  ],
  projects: [
    {
      title: "Skabma",
      techStack: [
        "Unity",
        "Profiling",
        "Optimization",
        "Bug fixing",
        "HLSL",
        "ShaderLab",
        "C#",
        "Git",
        "HDRP + URP render pipelines",
        "HLSL",
        "C# + C++",
      ],
      description: "Game about Sami people",
      logo: ConsultlyLogo,
      link: {
        label: "skabma.com",
        href: "https://www.skabma.com",
      },

    },
    {
      title: "Pixel gun",
      techStack: [
        "Unity",
        "Profiling",
        "Git",
        "Built-in graphics",
        "Steam API",
        "ShaderLab",
        "HLSL",
        "C#",
      ],
      description: "Multiplier game with big fan base",
      logo: ConsultlyLogo,
      link: {
        label: "pixelgun3d.com",
        href: "https://pixelgun3d.com",
      },

    },

    {
      title: "TCOL2",
      techStack: [
        "Unity",
        "Profiling",
        "Git",
        "Built-in",
        "Optimization",
        "Reward system",
        "HLSL",
        "Xbox",
        "Playstation",
      ],
      description: "Card game about importance of choice",
      logo: ConsultlyLogo,
      link: {
        label: "ChoiceOfLife",
        href: "https://www.nintendo.de/Spiele/Nintendo-Switch-Download-Software/Choice-of-Life-Middle-Ages-2-2337485.html",
      },

    },

  ],
} as const;