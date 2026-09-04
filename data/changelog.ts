export type ChangelogLocale = "en" | "fa";

export interface ChangelogEntry {
  date: string;
  version: string;
  tags: string[];
  title: Record<ChangelogLocale, string>;
  highlights: Record<ChangelogLocale, string[]>;
  features: Record<ChangelogLocale, string[]>;
  fixes: Record<ChangelogLocale, string[]>;
}

export const changelogEntries: ChangelogEntry[] = [
  {
    date: "2026-09-04",
    version: "2.1",
    tags: ["UI", "Blog", "Theme"],
    title: {
      en: "Blog, shared hero, and animated theme toggle",
      fa: "بلاگ، هیروی مشترک و تغییر تم انیمیشنی",
    },
    highlights: {
      en: [
        "New blog with listing cards and article pages",
        "PageHero and flickering grid on every main page",
        "Magic UI-style animated dark/light toggle with a circular reveal",
      ],
      fa: [
        "بلاگ جدید با کارت‌های فهرست و صفحه مقاله",
        "PageHero و شبکه نقطه‌ای روی صفحات اصلی",
        "تغییر تم تاریک/روشن به سبک Magic UI با آشکار شدن دایره‌ای",
      ],
    },
    features: {
      en: [
        "Header link to Blog with English and Farsi copy",
        "Shared title block so ME, Projects, Playground, and Blog match",
        "View Transitions clip-path reveal on theme change",
      ],
      fa: [
        "لینک بلاگ در هدر با متن انگلیسی و فارسی",
        "بلوک عنوان مشترک برای هماهنگی صفحات",
        "آشکار شدن clip-path هنگام تغییر تم",
      ],
    },
    fixes: {
      en: [
        "Blog no longer used a separate full-bleed layout from the rest of the site",
        "Theme preference still persists in localStorage after the animated toggle",
      ],
      fa: [
        "بلاگ دیگر لایه‌ای جدا از بقیه سایت ندارد",
        "ترجیح تم بعد از تاگل انیمیشنی در localStorage می‌ماند",
      ],
    },
  },
  {
    date: "2026-08-20",
    version: "2.0",
    tags: ["Projects", "Games", "AI"],
    title: {
      en: "Doom FPS on the projects page",
      fa: "دوم FPS در صفحه پروژه‌ها",
    },
    highlights: {
      en: [
        "Added a Doom-inspired browser FPS built with Next.js, React, and AI",
        "Project card opens a dialog with screenshots and a longer write-up",
      ],
      fa: [
        "افزودن FPS مرورگر الهام‌گرفته از دوم با Next.js، React و هوش مصنوعی",
        "کارت پروژه دیالوگ با اسکرین‌شات و توضیح کامل باز می‌کند",
      ],
    },
    features: {
      en: [
        "Pointer-lock look, WASD, shooting, reload, health, and pixel enemies",
        "Gallery of arena, combat, start, and death screens",
      ],
      fa: [
        "نگاه با قفل اشاره‌گر، WASD، شلیک، ریلود، سلامت و دشمنان پیکسلی",
        "گالری آرنا، نبرد، شروع و صفحه مرگ",
      ],
    },
    fixes: {
      en: ["Kept the existing projects grid and card pattern"],
      fa: ["الگوی فعلی گرید و کارت پروژه‌ها حفظ شد"],
    },
  },
  {
    date: "2026-08-19",
    version: "1.2",
    tags: ["Projects", "Next.js"],
    title: {
      en: "t-Learning on the projects list",
      fa: "تی‌لرنینگ در فهرست پروژه‌ها",
    },
    highlights: {
      en: [
        "Health-sciences education platform for courses, events, and congresses",
        "Listed as a Next.js and React project",
      ],
      fa: [
        "پلتفرم آموزش علوم سلامت برای دوره، رویداد و کنگره",
        "به‌عنوان پروژه Next.js و React ثبت شد",
      ],
    },
    features: {
      en: ["Link out to t-learning.net from the project card"],
      fa: ["لینک به t-learning.net از کارت پروژه"],
    },
    fixes: {
      en: [],
      fa: [],
    },
  },
  {
    date: "2026-03-18",
    version: "1.0",
    tags: ["Playground", "Vue"],
    title: {
      en: "Playground experiments published",
      fa: "انتشار آزمایش‌های زمین بازی",
    },
    highlights: {
      en: [
        "Polygon drawer, subtitle-sync player, English-digit directive, and YouTube-style player",
        "Each experiment links to a public GitHub repo",
      ],
      fa: [
        "رسم چندضلعی، پلیر زیرنویس، دایرکتیو ارقام انگلیسی و پلیر شبیه یوتیوب",
        "هر آزمایش به ریپوی عمومی گیت‌هاب لینک دارد",
      ],
    },
    features: {
      en: ["Playground page as a lab for small Vue tools"],
      fa: ["صفحه زمین بازی به‌عنوان آزمایشگاه ابزارهای کوچک Vue"],
    },
    fixes: {
      en: [],
      fa: [],
    },
  },
];
