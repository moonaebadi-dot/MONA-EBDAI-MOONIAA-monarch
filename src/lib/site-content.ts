export type Lang = "fa" | "en";

export const NAV = [
  { id: "about", fa: "درباره", en: "About" },
  { id: "work", fa: "کارها", en: "Work" },
  { id: "career", fa: "مسیر شغلی", en: "Career" },
  { id: "study", fa: "آموزش", en: "Study" },
  { id: "contact", fa: "تماس", en: "Contact" },
] as const;

export const PROFILE = {
  name: { fa: "مونا عبادی", en: "Mona Ebadi" },
  nameAlt: { fa: "Mona Ebadi", en: "مونا عبادی" },
  role: { fa: "مدیر محصول ارشد", en: "Senior Product Manager" },
  company: { fa: "آی‌بیمه", en: "iBime" },
  location: { fa: "تهران", en: "Tehran, Iran" },
  email: "monaebadi75@gmail.com",
  phone: "+989125903696",
  phoneDisplay: { fa: "۰۹۱۲ ۵۹۰ ۳۶۹۶", en: "+98 912 590 3696" },
  linkedin: "https://www.linkedin.com/in/mona-ebadi-7a1b2a2b3",
  motto: { fa: "از کشف تا رشد", en: "From discovery to growth" },
};

export const COPY = {
  skip: { fa: "پرش به محتوا", en: "Skip to content" },
  langSwitch: { fa: "EN", en: "فا" },
  langLabel: { fa: "Switch to English", en: "تغییر به فارسی" },
  menuOpen: { fa: "باز کردن منو", en: "Open menu" },
  menuClose: { fa: "بستن منو", en: "Close menu" },
  badge: {
    fa: "مدیر محصول ارشد در آی‌بیمه · خانواده همراه اول",
    en: "Senior Product Manager at iBime · Hamrah Aval family",
  },
  lede: {
    fa: "مالک استراتژی، نقشه راه و رشد پلتفرم صدور آنلاین بیمه. محصول را از کشف مسئله تا هوش مصنوعی مکالمه‌ای، لایه داده و کانال فروش در مقیاس جلو می‌برم.",
    en: "I own strategy, roadmap, and growth for an online insurance platform — from problem discovery to conversational AI, a company-wide data layer, and sales channels at scale.",
  },
  ctaMail: { fa: "ارسال پیام", en: "Email me" },
  ctaLinkedin: { fa: "لینکدین", en: "LinkedIn" },
  stats: [
    { value: { fa: "۰ → ۱", en: "0 → 1" }, label: { fa: "هوشمندسازی", en: "AI products" } },
    { value: { fa: "۶+", en: "6+" }, label: { fa: "کانال فروش", en: "Sales channels" } },
    { value: { fa: "BI", en: "BI" }, label: { fa: "داشبورد متابیس", en: "Metabase layer" } },
  ],
  aboutEyebrow: { fa: "مسیر", en: "The journey" },
  aboutTitle: { fa: "از مالی تا مالکیت محصول", en: "From finance to product ownership" },
  aboutBody: {
    fa: "با کارشناسی و کارشناسی‌ارشد مالی شروع کردم و به مدیریت محصول ارشد رسیدم — جایی که مسئله، رشد و سیستم به هم می‌رسند. در آی‌بیمه مالکیت سرتاسری محصول را دارم: کشف، اولویت‌بندی، توسعه، رشد و اندازه‌گیری. برنامه هوشمندسازی را از صفر تا یک جلو بردم؛ چت‌بات، دستیار خرید بیمه شخص ثالث و لایه BI با متابیس را ساختم تا خرید بیمه مکالمه‌ای شود و تصمیم رهبری روی داده زنده بنشیند. با فنی، طراحی، انطباق، عملیات و نمایندگان کار می‌کنم و OKR را تا هیئت‌مدیره روایت می‌کنم.",
    en: "I moved from finance into senior product ownership — where problem, growth, and system meet. At iBime I own the product end to end: discovery, prioritization, development, growth, and measurement. I took the intelligentization program from zero to one, shipping a chatbot, a third-party insurance purchase assistant, and a Metabase BI layer so buying insurance becomes conversational and leadership decides on live data. I work across engineering, design, compliance, operations, and agents, and I take OKRs all the way to the board.",
  },
  aboutPoints: [
    {
      fa: "مالکیت سرتاسری: استراتژی، نقشه راه، بک‌لاگ و نتیجه کسب‌وکار",
      en: "End-to-end ownership: strategy, roadmap, backlog, and business outcome",
    },
    {
      fa: "رشد محصول: فعال‌سازی، تبدیل، نگهداشت و حلقه‌های رشد روی کانال‌های فروش",
      en: "Product growth: activation, conversion, retention, and loops across channels",
    },
    {
      fa: "تصمیم داده-محور با KPI، North Star، آزمایش فرضیه و داشبورد اجرایی",
      en: "Data-led decisions with KPIs, North Star, experiments, and executive dashboards",
    },
    {
      fa: "محصول در صنعت تنظیم‌شده: انطباق، سنهاب و بیمه مرکزی از روز اول",
      en: "Regulated-industry product: compliance, Sanhab, and Central Insurance from day one",
    },
  ],
  craftEyebrow: { fa: "حوزه اثر", en: "Where I operate" },
  workEyebrow: { fa: "منتخب کارها", en: "Selected work" },
  workTitle: { fa: "محصولاتی که از صفر تا مقیاس بردم", en: "Products I took from zero to scale" },
  highlights: [
    {
      num: "01",
      title: { fa: "هوشمندسازی آی‌بیمه", en: "iBime intelligentization" },
      body: {
        fa: "رهبری برنامه هوشمندسازی سرتاسری آی‌بیمه: تعریف مسئله، نقشه راه هوش مصنوعی، هم‌راستایی فنی و کسب‌وکار، و تبدیل خرید بیمه از فرم به تجربه هوشمند.",
        en: "Led iBime’s company-wide intelligentization program: problem framing, AI roadmap, tech–business alignment, and moving insurance purchase from forms to an intelligent experience.",
      },
    },
    {
      num: "02",
      title: { fa: "چت‌بات آی‌بیمه", en: "iBime chatbot" },
      body: {
        fa: "پیاده‌سازی چت‌بات محصول برای پاسخگویی، هدایت کاربر و کاهش بار پشتیبانی — از طراحی مکالمه و جریان تا تحویل با تیم فنی و اندازه‌گیری کیفیت پاسخ.",
        en: "Shipped the product chatbot for answers, user guidance, and lower support load — from conversation design and flows through engineering delivery and answer-quality measurement.",
      },
    },
    {
      num: "03",
      title: { fa: "دستیار خرید شخص ثالث", en: "Third-party purchase assistant" },
      body: {
        fa: "ساخت دستیار خرید بیمه شخص ثالث؛ محصول صفر-تا-یک که استعلام، مقایسه و صدور را در یک مسیر مکالمه‌ای جمع می‌کند و اصطکاک خرید را کم می‌کند.",
        en: "Built the third-party insurance purchase assistant: a 0-to-1 product that folds inquiry, comparison, and issuance into one conversational path and cuts purchase friction.",
      },
    },
    {
      num: "04",
      title: { fa: "متابیس و داشبورد BI", en: "Metabase BI layer" },
      body: {
        fa: "پیاده‌سازی متابیس به‌عنوان لایه هوش تجاری سازمان: تعریف سنجه واحد، داشبورد اجرایی و عملیاتی، و تبدیل داده صدور و کانال به تصمیم روزانه محصول و رهبری.",
        en: "Implemented Metabase as the company BI layer: a single metric language, executive and ops dashboards, and turning issuance and channel data into daily product and leadership decisions.",
      },
    },
    {
      num: "05",
      title: { fa: "سنهاب و صدور آنلاین", en: "Sanhab & online issuance" },
      body: {
        fa: "طراحی و پیاده‌سازی سرویس سنهاب و هماهنگی با زیرساخت فنی و مقررات بیمه مرکزی برای صدور آنلاین بیمه‌نامه در مقیاس.",
        en: "Designed and delivered the Sanhab service, coordinating technical infrastructure with Central Insurance rules for online policy issuance at scale.",
      },
    },
    {
      num: "06",
      title: { fa: "کانال فروش و بک‌آفیس", en: "Channels & back office" },
      body: {
        fa: "توسعه GTM روی USSD (*1# و *500#)، ستاره یک، ایوانو، ریحله و باسا کارت؛ به‌علاوه پنل بک‌آفیس نمایندگان برای کاهش خطای صدور و شتاب عملیات.",
        en: "Grew GTM across USSD (*1#, *500#), Setare Yek, Ewano, Righleh, and Basa Card — plus the agent back-office that cut issuance errors and sped up operations.",
      },
    },
  ],
  careerEyebrow: { fa: "تجربه", en: "Experience" },
  careerTitle: { fa: "مسیر شغلی", en: "Career track" },
  present: { fa: "اکنون", en: "Present" },
  studyEyebrow: { fa: "بنیان", en: "Foundation" },
  studyTitle: { fa: "آموزش و مهارت", en: "Study and skills" },
  skillsLabel: { fa: "ابزار و روش", en: "Craft and tools" },
  courseLabel: { fa: "دوره", en: "Course" },
  contactEyebrow: { fa: "گفتگو", en: "Conversation" },
  contactTitle: { fa: "برای نقش ارشد محصول بنویسید", en: "Let’s talk senior product work" },
  contactBody: {
    fa: "اگر روی رشد محصول، هوشمندسازی بیمه، تجربه مکالمه‌ای یا لایه داده تصمیم‌گیری کار می‌کنید، خوشحال می‌شوم حرف بزنیم.",
    en: "If you are hiring for product growth, insurance intelligence, conversational UX, or a decision-making data layer — I would like to talk.",
  },
  footer: {
    fa: "مونا عبادی · مدیر محصول ارشد · تهران",
    en: "Mona Ebadi · Senior Product Manager · Tehran",
  },
};

export const CRAFT = [
  { fa: "کشف محصول", en: "Product discovery" },
  { fa: "نقشه راه", en: "Roadmapping" },
  { fa: "رشد محصول", en: "Product growth" },
  { fa: "توسعه محصول", en: "Product development" },
  { fa: "صفر تا یک", en: "0 → 1" },
  { fa: "هوش مکالمه‌ای", en: "Conversational AI" },
  { fa: "داده و BI", en: "Data & BI" },
  { fa: "محصول رگولاتوری", en: "Regulated products" },
];

export const EXPERIENCE = [
  {
    role: { fa: "مدیر محصول ارشد", en: "Senior Product Manager" },
    company: { fa: "آی‌بیمه", en: "iBime" },
    url: "https://ibime.com",
    place: { fa: "تهران", en: "Tehran" },
    start: { fa: "۰۱ / ۲۰۲۳", en: "Jan 2023" },
    end: "present" as const,
    bullets: [
      {
        fa: "مالکیت سرتاسری استراتژی و نقشه راه پلتفرم صدور آنلاین بیمه در خانواده همراه اول؛ اولویت‌بندی با RICE و روایت OKR تا رهبری.",
        en: "End-to-end ownership of strategy and roadmap for the online insurance platform in the Hamrah Aval family; RICE prioritization and OKRs through to leadership.",
      },
      {
        fa: "رهبری برنامه هوشمندسازی آی‌بیمه از کشف مسئله تا تحویل: چت‌بات، دستیار خرید و لایه هوش تجاری به‌عنوان یک سیستم واحد.",
        en: "Led the iBime intelligentization program from discovery to delivery: chatbot, purchase assistant, and BI as one system.",
      },
      {
        fa: "پیاده‌سازی چت‌بات محصول؛ طراحی جریان مکالمه، کاهش بار پشتیبانی و هدایت کاربر تا نقطه صدور.",
        en: "Shipped the product chatbot — conversation flows, lower support load, and guidance through to issuance.",
      },
      {
        fa: "ساخت دستیار خرید بیمه شخص ثالث (صفر تا یک): استعلام، مقایسه و صدور در یک مسیر مکالمه‌ای.",
        en: "Built the 0-to-1 third-party insurance purchase assistant: inquiry, comparison, and issuance in one conversational path.",
      },
      {
        fa: "پیاده‌سازی متابیس برای داشبورد BI سازمانی؛ تعریف North Star و KPI واحد و تصمیم روزانه روی داده زنده صدور و کانال.",
        en: "Implemented Metabase for company BI dashboards; a shared North Star and KPI language, with daily decisions on live issuance and channel data.",
      },
      {
        fa: "رشد محصول روی کانال‌های فروش: USSD (*1# و *500#)، ستاره یک، ایوانو، ریحله و باسا کارت — فعال‌سازی، تبدیل و نگهداشت.",
        en: "Product growth across sales channels: USSD (*1#, *500#), Setare Yek, Ewano, Righleh, and Basa Card — activation, conversion, and retention.",
      },
      {
        fa: "رهبری سرویس سنهاب و هماهنگی فنی با مقررات بیمه مرکزی برای صدور آنلاین در مقیاس.",
        en: "Led the Sanhab service and technical alignment with Central Insurance rules for online issuance at scale.",
      },
      {
        fa: "طراحی پنل بک‌آفیس نمایندگان و اپراتورها برای کاهش خطای صدور، شتاب عملیات و کیفیت تجربه عامل فروش.",
        en: "Designed the agent and operator back-office to cut issuance errors, speed operations, and raise the seller experience.",
      },
      {
        fa: "کشف مستمر: پژوهش کاربر، JTBD، فرضیه، آزمایش و PRD؛ کار ضربدری با فنی، طراحی، انطباق، فروش و ذی‌نفعان بیرونی.",
        en: "Ongoing discovery: user research, JTBD, hypotheses, experiments, and PRDs; cross-functional work with eng, design, compliance, sales, and external stakeholders.",
      },
    ],
  },
  {
    role: { fa: "کارشناس ارشد بیمه", en: "Senior Insurance Specialist" },
    company: { fa: "ازکی", en: "Azki" },
    url: "https://www.azki.com",
    place: { fa: "تهران", en: "Tehran" },
    start: { fa: "۱۲ / ۲۰۲۱", en: "Dec 2021" },
    end: { fa: "۰۱ / ۲۰۲۳", en: "Jan 2023" },
    bullets: [
      {
        fa: "ساخت سیستم کیفیت تماس و مربی‌گری؛ تبدیل بینش خط مقدم به فرصت محصول و بهبود تجربه مشتری.",
        en: "Built the call-quality and coaching system; turned frontline insight into product opportunity and a better customer experience.",
      },
      {
        fa: "گزارش ماهانه برای مدیران ارشد، مدل‌سازی تحقق هدف سالانه و پیشنهاد مداخله روی قیف فروش.",
        en: "Monthly reporting to senior managers, annual-target modeling, and interventions on the sales funnel.",
      },
    ],
  },
  {
    role: { fa: "کارشناس مالی", en: "Finance Specialist" },
    company: { fa: "کیسون", en: "Kayson Inc" },
    url: "https://www.kayson-ir.com",
    place: { fa: "تهران", en: "Tehran" },
    start: { fa: "۰۹ / ۲۰۲۱", en: "Sep 2021" },
    end: { fa: "۰۶ / ۲۰۲۳", en: "Jun 2023" },
    bullets: [
      {
        fa: "مالکیت عملیات مالی در چارچوب قوانین صنعت؛ پل بین عدد، فرآیند و تصمیم مدیریت.",
        en: "Owned financial operations within industry regulation — bridging numbers, process, and management decisions.",
      },
      {
        fa: "بازطراحی فرآیندهای مالی با همکاری تیم؛ کاهش ۲۴٪ هزینه‌ها در دو سال.",
        en: "Redesigned financial processes with the team, cutting costs 24% in two years.",
      },
    ],
  },
  {
    role: { fa: "کارشناس مالی", en: "Finance Specialist" },
    company: { fa: "مرزن‌بتن صنعت", en: "Marzanbeton Sanat" },
    url: null,
    place: { fa: "چالوس، مازندران", en: "Chaloos, Mazandaran" },
    start: { fa: "۰۶ / ۲۰۱۹", en: "Jun 2019" },
    end: { fa: "۱۱ / ۲۰۲۱", en: "Nov 2021" },
    bullets: [
      {
        fa: "اداره کامل امور مالی شرکت، گزارش‌دهی و انضباط اسناد — پایه تصمیم‌گیری مبتنی بر عدد.",
        en: "Ran company finance, reporting, and record discipline — the base for number-led decisions.",
      },
    ],
  },
  {
    role: { fa: "مدیر دفتر کسب‌وکار", en: "Business Office Manager" },
    company: { fa: "آتیه‌سازان حافظ", en: "Atiyeh Sazan Hafez" },
    url: null,
    place: { fa: "تهران", en: "Tehran" },
    start: { fa: "۱۲ / ۲۰۱۸", en: "Dec 2018" },
    end: { fa: "۰۵ / ۲۰۱۹", en: "May 2019" },
    bullets: [
      {
        fa: "راهبری دفتر، هماهنگی ذی‌نفعان و بستن حلقه اجرا بین تیم‌ها.",
        en: "Ran the office, aligned stakeholders, and closed the execution loop between teams.",
      },
    ],
  },
];

export const EDUCATION = [
  {
    title: {
      fa: "کارشناسی ارشد مدیریت بازرگانی، گرایش مالی",
      en: "M.S. Business Administration, Finance",
    },
    place: {
      fa: "دانشگاه آزاد اسلامی، واحد علوم و تحقیقات",
      en: "Islamic Azad University, Science and Research Branch",
    },
    dates: { fa: "۲۰۱۹ — ۲۰۲۱", en: "2019 — 2021" },
  },
  {
    title: {
      fa: "کارشناسی مدیریت مالی",
      en: "B.S. Finance and Financial Management",
    },
    place: {
      fa: "دانشگاه آزاد اسلامی، واحد تهران مرکزی",
      en: "Islamic Azad University, Central Tehran Branch",
    },
    dates: { fa: "۲۰۱۵ — ۲۰۱۸", en: "2015 — 2018" },
  },
];

export const COURSE = {
  title: { fa: "مدیریت محصول دیجیتال", en: "Digital Product Management" },
  place: { fa: "مدرسه محصول بوژان", en: "Bozhan Product School" },
  dates: { fa: "۰۸ / ۲۰۲۴ — ۰۱ / ۲۰۲۵", en: "Aug 2024 — Jan 2025" },
};

export const SKILLS = [
  "Product Discovery",
  "JTBD",
  "RICE",
  "PRD",
  "OKR",
  "North Star",
  "KPI",
  "Product Growth",
  "Product Development",
  "0 → 1",
  "Roadmapping",
  "A/B Testing",
  "User Research",
  "GTM",
  "Stakeholder Management",
  "Conversational AI",
  "Chatbot",
  "Metabase",
  "BI Dashboards",
  "Sanhab",
  "Compliance",
  "Trello",
  "MSP",
  "Google Sheets",
];
