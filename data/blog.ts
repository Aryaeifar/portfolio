export type BlogLocale = "en" | "fa";

export interface BlogPost {
  slug: string;
  date: string;
  tags: string[];
  thumbnail?: string;
  readTime: string;
  title: Record<BlogLocale, string>;
  description: Record<BlogLocale, string>;
  body: Record<BlogLocale, string>;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "doom-fps-in-the-browser",
    date: "2026-08-20",
    tags: ["React", "Next.js", "Three.js", "AI"],
    thumbnail: "/assets/images/doom-cover.png",
    readTime: "6 min read",
    title: {
      en: "Building a Doom-style FPS in the browser",
      fa: "ساخت یک FPS به سبک دوم در مرورگر",
    },
    description: {
      en: "How I used Next.js, React Three Fiber, and AI to ship a pointer-lock shooter with pixel enemies, ammo, and a death screen.",
      fa: "چطور با Next.js، React Three Fiber و هوش مصنوعی یک شوتر با قفل اشاره‌گر، دشمنان پیکسلی و صفحه مرگ ساختم.",
    },
    body: {
      en: `<p>I wanted a small game that still felt like a real FPS: mouse look, WASD, a gun, and something that fights back. The result is a Doom-inspired arena that runs entirely in the browser.</p>
<h2 id="stack">The stack</h2>
<p>The game is a Next.js app with a client-only canvas from React Three Fiber. The room is a handful of meshes. Enemies are billboard sprites. The HUD is plain React overlayed on the canvas: health, ammo, kills, reload, and a “YOU DIED” state.</p>
<h2 id="controls">Pointer lock and shooting</h2>
<p>Gameplay starts with Space. That request pointer lock, then mouse movement drives the camera. Left click fires with a magazine and fire-rate cap. Right click reloads. Empty clicks get a dry-fire sound so the gun still feels physical.</p>
<h2 id="ai">Also made with AI</h2>
<p>This was a fast experiment: AI helped scaffold the Three.js loop, sound cues, and HUD. The interesting part was keeping the feel tight — kick, muzzle flash, and enemy spawn distance — instead of dumping features into the scene.</p>
<h2 id="takeaway">Takeaway</h2>
<p>A convincing browser FPS does not need a full engine. A locked mouse, a dark room, and one enemy that respawns is enough if the feedback is loud and immediate.</p>`,
      fa: `<p>می‌خواستم بازی کوچکی بسازم که حس یک FPS واقعی را بدهد: نگاه با ماوس، WASD، اسلحه، و دشمنی که جواب می‌دهد. نتیجه یک آرنای الهام‌گرفته از دوم است که کامل در مرورگر اجرا می‌شود.</p>
<h2 id="stack">استک</h2>
<p>بازی یک اپ Next.js است با کانواس کلاینت‌ساید از React Three Fiber. اتاق چند مش ساده است. دشمنان اسپریت‌های بیلبورد هستند. HUD روی کانواس می‌نشیند: سلامت، مهمات، کشتار، ریلود و حالت «YOU DIED».</p>
<h2 id="controls">قفل اشاره‌گر و شلیک</h2>
<p>بازی با Space شروع می‌شود. بعد از قفل اشاره‌گر، حرکت ماوس دوربین را می‌چرخاند. کلیک چپ شلیک می‌کند و کلیک راست ریلود. شلیک خالی صدای خشک دارد تا اسلحه هنوز فیزیکی حس شود.</p>
<h2 id="ai">با کمک هوش مصنوعی</h2>
<p>این یک آزمایش سریع بود. هوش مصنوعی به حلقه Three.js، صدا و HUD کمک کرد. کار اصلی حفظ حس بازی بود: لگد، فلاش لوله، و فاصله اسپان دشمن.</p>
<h2 id="takeaway">نتیجه</h2>
<p>یک FPS قانع‌کننده در مرورگر به موتور کامل نیاز ندارد. ماوس قفل‌شده، یک اتاق تاریک، و یک دشمن که دوباره ظاهر می‌شود کافی است اگر بازخورد تند و واضح باشد.</p>`,
    },
  },
  {
    slug: "vue-react-next-nuxt",
    date: "2026-07-12",
    tags: ["Vue", "Nuxt", "React", "Next.js"],
    readTime: "5 min read",
    title: {
      en: "Vue and React in the same toolbox",
      fa: "ویو و ری‌اکت در یک جعبه ابزار",
    },
    description: {
      en: "After years of Vue and Nuxt, and shipping Next.js products too, here is how I pick a stack without turning it into a religion.",
      fa: "بعد از سال‌ها کار با Vue و Nuxt و ساخت محصول با Next.js، این‌طور استک را انتخاب می‌کنم بدون اینکه تبدیل به مذهب شود.",
    },
    body: {
      en: `<p>I still reach for Vue when the UI is dense and the team wants templates that read like HTML. Nuxt keeps routing, i18n, and layouts boring in a good way — this portfolio is proof.</p>
<h2 id="when-react">When I pick React</h2>
<p>React wins when the ecosystem around the problem is React-shaped: Three.js via R3F, shadcn-style primitives, or a product already on Next.js. t-Learning is a Next app because the content and routing model fit App Router better than fighting Nuxt into the same shape.</p>
<h2 id="overlap">The overlap that actually matters</h2>
<p>Both stacks are component trees, reactive state, and CSS you have to own. The costly part is not JSX vs SFCs. It is design tokens, empty states, and making the same page feel fast in Farsi and English.</p>
<h2 id="practice">Practice</h2>
<p>Keep one personal site in the framework you think in, and take client work in whatever they already deploy. Switching syntax is cheap. Switching product taste is not.</p>`,
      fa: `<p>وقتی UI شلوغ است و تیم قالب‌هایی می‌خواهد که مثل HTML خوانده شوند، هنوز سراغ Vue می‌روم. Nuxt مسیرها، i18n و لایه‌ها را ساده نگه می‌دارد — همین پورتفولیو شاهدش است.</p>
<h2 id="when-react">کی ری‌اکت را برمی‌دارم</h2>
<p>ری‌اکت وقتی برنده است که اکوسیستم مسئله ری‌اکتی باشد: Three.js با R3F، کامپوننت‌های شادسی‌ان، یا محصولی که از قبل روی Next است. تی‌لرنینگ اپ Next است چون مدل محتوا و روتینگ با App Router جور بود.</p>
<h2 id="overlap">هم‌پوشانی واقعی</h2>
<p>هر دو استک درخت کامپوننت، استیت واکنشی و CSS هستند. هزینه اصلی JSX در برابر SFC نیست. توکن‌های طراحی، حالت خالی، و سریع بودن صفحه به فارسی و انگلیسی است.</p>
<h2 id="practice">روش کار</h2>
<p>سایت شخصی را در فریمورکی نگه دار که با آن فکر می‌کنی، و کار مشتری را در چیزی که از قبل دیپلوی می‌کنند. عوض کردن سینتکس ارزان است. عوض کردن سلیقه محصول نه.</p>`,
    },
  },
  {
    slug: "shipping-frontend-products",
    date: "2026-05-03",
    tags: ["Nuxt", "Portfolio", "UI Frameworks"],
    readTime: "4 min read",
    title: {
      en: "What shipping frontend products taught me",
      fa: "ساخت محصول فرانت‌اند چه چیزی به من یاد داد",
    },
    description: {
      en: "Patterns that survived real clients: bilingual layouts, honest project pages, and UI that still works when the CMS is late.",
      fa: "الگوهایی که در کار واقعی ماندند: لایه‌های دوزبانه، صفحه پروژه‌های صادقانه، و UI که وقتی CMS دیر می‌رسد هنوز کار می‌کند.",
    },
    body: {
      en: `<p>Most of the sites on my projects page were not greenfield art. They were booking flows, menus, jewelry catalogs, municipal reports, and learning platforms that had to work on cheap phones.</p>
<h2 id="bilingual">Bilingual is a layout problem</h2>
<p>Farsi is not a translation overlay. Direction, numerals, and line length change the composition. If the English card looks tight, the Persian card will overflow unless you design both from day one.</p>
<h2 id="cms">Assume the CMS is late</h2>
<p>Hard-code fallbacks. Show a cover image even if the CMS thumbnail 404s. Keep the project story on the card so the page is useful without a live link.</p>
<h2 id="details">Details that age well</h2>
<p>Theme toggle, a resume file that actually downloads, and playground links to real GitHub repos. Small things, but they are the difference between a portfolio and a screenshot dump.</p>`,
      fa: `<p>بیشتر سایت‌های صفحه پروژه‌ها اثر هنری از صفر نبودند. فلو رزرو، منو، کاتالوگ طلا، گزارش شهری و پلتفرم آموزش بودند که باید روی گوشی ارزان کار می‌کردند.</p>
<h2 id="bilingual">دوزبانه بودن مسئله چیدمان است</h2>
<p>فارسی یک لایه ترجمه نیست. جهت، اعداد و طول خط ترکیب را عوض می‌کنند. اگر کارت انگلیسی تنگ باشد، کارت فارسی سرریز می‌شود مگر از روز اول هر دو را طراحی کنید.</p>
<h2 id="cms">فرض کنید CMS دیر می‌رسد</h2>
<p>فال‌بک سخت‌کد کنید. حتی اگر تامبنیل CMS چهارصدوچهار شد کاور نشان بدهید. داستان پروژه را روی کارت نگه دارید تا صفحه بدون لینک زنده هم مفید باشد.</p>
<h2 id="details">جزئیاتی که عمر می‌کنند</h2>
<p>تغییر تم، رزومه‌ای که واقعاً دانلود می‌شود، و لینک زمین بازی به ریپوهای واقعی گیت‌هاب. چیزهای کوچک، اما فاصله پورتفولیو با تلی از اسکرین‌شات همین‌هاست.</p>`,
    },
  },
  {
    slug: "playground-as-lab",
    date: "2026-03-18",
    tags: ["Vue", "Animation", "Components"],
    readTime: "4 min read",
    title: {
      en: "Treat the playground as a lab, not a junk drawer",
      fa: "زمین بازی را آزمایشگاه ببین، نه کشوی درهم",
    },
    description: {
      en: "Polygon drawers, subtitle players, and English-digit directives belong on a playground page only if they still teach something.",
      fa: "رسم چندضلعی، پلیر زیرنویس و دایرکتیو ارقام انگلیسی فقط وقتی به زمین بازی می‌آیند که هنوز چیزی یاد بدهند.",
    },
    body: {
      en: `<p>The playground on this site is a list of tiny Vue experiments I actually published: a polygon drawer, a subtitle-sync player, a directive that converts Persian digits, a YouTube-style player.</p>
<h2 id="rule">One rule</h2>
<p>If I cannot explain the component in two sentences, it does not ship. A playground is for sharp edges — canvas hit testing, SRT parsing, input normalization — not for abandoned CodePens.</p>
<h2 id="reuse">Reuse beats novelty</h2>
<p>The polygon drawer showed up again in map work. The digit directive shows up on every Farsi form. Experiments earn their place when a later product steals from them.</p>
<h2 id="next">What is next</h2>
<p>More small tools with a public repo and a demo. Less mystery. If it is on the playground, you should be able to clone it in an afternoon.</p>`,
      fa: `<p>زمین بازی این سایت فهرست آزمایش‌های کوچک Vue است که واقعاً منتشر شده‌اند: رسم چندضلعی، پلیر همگام‌سازی زیرنویس، دایرکتیو تبدیل ارقام فارسی، پلیر شبیه یوتیوب.</p>
<h2 id="rule">یک قانون</h2>
<p>اگر نتوانم کامپوننت را در دو جمله توضیح بدهم، منتشر نمی‌شود. زمین بازی برای لبه‌های تیز است — تست برخورد کانواس، پارس SRT، نرمال‌سازی ورودی — نه برای کدپن‌های رهاشده.</p>
<h2 id="reuse">استفاده مجدد بهتر از تازگی است</h2>
<p>رسم چندضلعی دوباره در کار نقشه آمد. دایرکتیو ارقام در هر فرم فارسی ظاهر می‌شود. آزمایش وقتی جایگاه دارد که محصول بعدی از آن بدزدد.</p>
<h2 id="next">بعدی چیست</h2>
<p>ابزارهای کوچک بیشتر با ریپوی عمومی و دمو. رمز و راز کمتر. اگر در زمین بازی است، باید بتوانی در یک بعدازظهر کلونش کنی.</p>`,
    },
  },
];
