import { i as __toESM } from "../_runtime.mjs";
import { L as require_react, v as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { a as MapPin, c as ArrowUpRight, i as Menu, o as Mail, r as Phone, s as Linkedin, t as X } from "../_libs/lucide-react.mjs";
import { n as useLang } from "./router-BTGbXkUu.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DXPuK3bd.js
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var NAV = [
	{
		id: "about",
		fa: "درباره",
		en: "About"
	},
	{
		id: "work",
		fa: "کارها",
		en: "Work"
	},
	{
		id: "career",
		fa: "مسیر شغلی",
		en: "Career"
	},
	{
		id: "study",
		fa: "آموزش",
		en: "Study"
	},
	{
		id: "contact",
		fa: "تماس",
		en: "Contact"
	}
];
var PROFILE = {
	name: {
		fa: "مونا عبادی",
		en: "Mona Ebadi"
	},
	nameAlt: {
		fa: "Mona Ebadi",
		en: "مونا عبادی"
	},
	role: {
		fa: "مدیر محصول ارشد",
		en: "Senior Product Manager"
	},
	company: {
		fa: "آی‌بیمه",
		en: "iBime"
	},
	location: {
		fa: "تهران",
		en: "Tehran, Iran"
	},
	email: "monaebadi75@gmail.com",
	phone: "+989125903696",
	phoneDisplay: {
		fa: "۰۹۱۲ ۵۹۰ ۳۶۹۶",
		en: "+98 912 590 3696"
	},
	linkedin: "https://www.linkedin.com/in/mona-ebadi-7a1b2a2b3",
	motto: {
		fa: "از کشف تا رشد",
		en: "From discovery to growth"
	}
};
var COPY = {
	skip: {
		fa: "پرش به محتوا",
		en: "Skip to content"
	},
	langSwitch: {
		fa: "EN",
		en: "فا"
	},
	langLabel: {
		fa: "Switch to English",
		en: "تغییر به فارسی"
	},
	menuOpen: {
		fa: "باز کردن منو",
		en: "Open menu"
	},
	menuClose: {
		fa: "بستن منو",
		en: "Close menu"
	},
	badge: {
		fa: "مدیر محصول ارشد در آی‌بیمه · خانواده همراه اول",
		en: "Senior Product Manager at iBime · Hamrah Aval family"
	},
	lede: {
		fa: "مالک استراتژی، نقشه راه و رشد پلتفرم صدور آنلاین بیمه. محصول را از کشف مسئله تا هوش مصنوعی مکالمه‌ای، لایه داده و کانال فروش در مقیاس جلو می‌برم.",
		en: "I own strategy, roadmap, and growth for an online insurance platform — from problem discovery to conversational AI, a company-wide data layer, and sales channels at scale."
	},
	ctaMail: {
		fa: "ارسال پیام",
		en: "Email me"
	},
	ctaLinkedin: {
		fa: "لینکدین",
		en: "LinkedIn"
	},
	stats: [
		{
			value: {
				fa: "۰ → ۱",
				en: "0 → 1"
			},
			label: {
				fa: "هوشمندسازی",
				en: "AI products"
			}
		},
		{
			value: {
				fa: "۶+",
				en: "6+"
			},
			label: {
				fa: "کانال فروش",
				en: "Sales channels"
			}
		},
		{
			value: {
				fa: "BI",
				en: "BI"
			},
			label: {
				fa: "داشبورد متابیس",
				en: "Metabase layer"
			}
		}
	],
	aboutEyebrow: {
		fa: "مسیر",
		en: "The journey"
	},
	aboutTitle: {
		fa: "از مالی تا مالکیت محصول",
		en: "From finance to product ownership"
	},
	aboutBody: {
		fa: "با کارشناسی و کارشناسی‌ارشد مالی شروع کردم و به مدیریت محصول ارشد رسیدم — جایی که مسئله، رشد و سیستم به هم می‌رسند. در آی‌بیمه مالکیت سرتاسری محصول را دارم: کشف، اولویت‌بندی، توسعه، رشد و اندازه‌گیری. برنامه هوشمندسازی را از صفر تا یک جلو بردم؛ چت‌بات، دستیار خرید بیمه شخص ثالث و لایه BI با متابیس را ساختم تا خرید بیمه مکالمه‌ای شود و تصمیم رهبری روی داده زنده بنشیند. با فنی، طراحی، انطباق، عملیات و نمایندگان کار می‌کنم و OKR را تا هیئت‌مدیره روایت می‌کنم.",
		en: "I moved from finance into senior product ownership — where problem, growth, and system meet. At iBime I own the product end to end: discovery, prioritization, development, growth, and measurement. I took the intelligentization program from zero to one, shipping a chatbot, a third-party insurance purchase assistant, and a Metabase BI layer so buying insurance becomes conversational and leadership decides on live data. I work across engineering, design, compliance, operations, and agents, and I take OKRs all the way to the board."
	},
	aboutPoints: [
		{
			fa: "مالکیت سرتاسری: استراتژی، نقشه راه، بک‌لاگ و نتیجه کسب‌وکار",
			en: "End-to-end ownership: strategy, roadmap, backlog, and business outcome"
		},
		{
			fa: "رشد محصول: فعال‌سازی، تبدیل، نگهداشت و حلقه‌های رشد روی کانال‌های فروش",
			en: "Product growth: activation, conversion, retention, and loops across channels"
		},
		{
			fa: "تصمیم داده-محور با KPI، North Star، آزمایش فرضیه و داشبورد اجرایی",
			en: "Data-led decisions with KPIs, North Star, experiments, and executive dashboards"
		},
		{
			fa: "محصول در صنعت تنظیم‌شده: انطباق، سنهاب و بیمه مرکزی از روز اول",
			en: "Regulated-industry product: compliance, Sanhab, and Central Insurance from day one"
		}
	],
	craftEyebrow: {
		fa: "حوزه اثر",
		en: "Where I operate"
	},
	workEyebrow: {
		fa: "منتخب کارها",
		en: "Selected work"
	},
	workTitle: {
		fa: "محصولاتی که از صفر تا مقیاس بردم",
		en: "Products I took from zero to scale"
	},
	highlights: [
		{
			num: "01",
			title: {
				fa: "هوشمندسازی آی‌بیمه",
				en: "iBime intelligentization"
			},
			body: {
				fa: "رهبری برنامه هوشمندسازی سرتاسری آی‌بیمه: تعریف مسئله، نقشه راه هوش مصنوعی، هم‌راستایی فنی و کسب‌وکار، و تبدیل خرید بیمه از فرم به تجربه هوشمند.",
				en: "Led iBime’s company-wide intelligentization program: problem framing, AI roadmap, tech–business alignment, and moving insurance purchase from forms to an intelligent experience."
			}
		},
		{
			num: "02",
			title: {
				fa: "چت‌بات آی‌بیمه",
				en: "iBime chatbot"
			},
			body: {
				fa: "پیاده‌سازی چت‌بات محصول برای پاسخگویی، هدایت کاربر و کاهش بار پشتیبانی — از طراحی مکالمه و جریان تا تحویل با تیم فنی و اندازه‌گیری کیفیت پاسخ.",
				en: "Shipped the product chatbot for answers, user guidance, and lower support load — from conversation design and flows through engineering delivery and answer-quality measurement."
			}
		},
		{
			num: "03",
			title: {
				fa: "دستیار خرید شخص ثالث",
				en: "Third-party purchase assistant"
			},
			body: {
				fa: "ساخت دستیار خرید بیمه شخص ثالث؛ محصول صفر-تا-یک که استعلام، مقایسه و صدور را در یک مسیر مکالمه‌ای جمع می‌کند و اصطکاک خرید را کم می‌کند.",
				en: "Built the third-party insurance purchase assistant: a 0-to-1 product that folds inquiry, comparison, and issuance into one conversational path and cuts purchase friction."
			}
		},
		{
			num: "04",
			title: {
				fa: "متابیس و داشبورد BI",
				en: "Metabase BI layer"
			},
			body: {
				fa: "پیاده‌سازی متابیس به‌عنوان لایه هوش تجاری سازمان: تعریف سنجه واحد، داشبورد اجرایی و عملیاتی، و تبدیل داده صدور و کانال به تصمیم روزانه محصول و رهبری.",
				en: "Implemented Metabase as the company BI layer: a single metric language, executive and ops dashboards, and turning issuance and channel data into daily product and leadership decisions."
			}
		},
		{
			num: "05",
			title: {
				fa: "سنهاب و صدور آنلاین",
				en: "Sanhab & online issuance"
			},
			body: {
				fa: "طراحی و پیاده‌سازی سرویس سنهاب و هماهنگی با زیرساخت فنی و مقررات بیمه مرکزی برای صدور آنلاین بیمه‌نامه در مقیاس.",
				en: "Designed and delivered the Sanhab service, coordinating technical infrastructure with Central Insurance rules for online policy issuance at scale."
			}
		},
		{
			num: "06",
			title: {
				fa: "کانال فروش و بک‌آفیس",
				en: "Channels & back office"
			},
			body: {
				fa: "توسعه GTM روی USSD (*1# و *500#)، ستاره یک، ایوانو، ریحله و باسا کارت؛ به‌علاوه پنل بک‌آفیس نمایندگان برای کاهش خطای صدور و شتاب عملیات.",
				en: "Grew GTM across USSD (*1#, *500#), Setare Yek, Ewano, Righleh, and Basa Card — plus the agent back-office that cut issuance errors and sped up operations."
			}
		}
	],
	careerEyebrow: {
		fa: "تجربه",
		en: "Experience"
	},
	careerTitle: {
		fa: "مسیر شغلی",
		en: "Career track"
	},
	present: {
		fa: "اکنون",
		en: "Present"
	},
	studyEyebrow: {
		fa: "بنیان",
		en: "Foundation"
	},
	studyTitle: {
		fa: "آموزش و مهارت",
		en: "Study and skills"
	},
	skillsLabel: {
		fa: "ابزار و روش",
		en: "Craft and tools"
	},
	courseLabel: {
		fa: "دوره",
		en: "Course"
	},
	contactEyebrow: {
		fa: "گفتگو",
		en: "Conversation"
	},
	contactTitle: {
		fa: "برای نقش ارشد محصول بنویسید",
		en: "Let’s talk senior product work"
	},
	contactBody: {
		fa: "اگر روی رشد محصول، هوشمندسازی بیمه، تجربه مکالمه‌ای یا لایه داده تصمیم‌گیری کار می‌کنید، خوشحال می‌شوم حرف بزنیم.",
		en: "If you are hiring for product growth, insurance intelligence, conversational UX, or a decision-making data layer — I would like to talk."
	},
	footer: {
		fa: "مونا عبادی · مدیر محصول ارشد · تهران",
		en: "Mona Ebadi · Senior Product Manager · Tehran"
	}
};
var CRAFT = [
	{
		fa: "کشف محصول",
		en: "Product discovery"
	},
	{
		fa: "نقشه راه",
		en: "Roadmapping"
	},
	{
		fa: "رشد محصول",
		en: "Product growth"
	},
	{
		fa: "توسعه محصول",
		en: "Product development"
	},
	{
		fa: "صفر تا یک",
		en: "0 → 1"
	},
	{
		fa: "هوش مکالمه‌ای",
		en: "Conversational AI"
	},
	{
		fa: "داده و BI",
		en: "Data & BI"
	},
	{
		fa: "محصول رگولاتوری",
		en: "Regulated products"
	}
];
var EXPERIENCE = [
	{
		role: {
			fa: "مدیر محصول ارشد",
			en: "Senior Product Manager"
		},
		company: {
			fa: "آی‌بیمه",
			en: "iBime"
		},
		url: "https://ibime.com",
		place: {
			fa: "تهران",
			en: "Tehran"
		},
		start: {
			fa: "۰۱ / ۲۰۲۳",
			en: "Jan 2023"
		},
		end: "present",
		bullets: [
			{
				fa: "مالکیت سرتاسری استراتژی و نقشه راه پلتفرم صدور آنلاین بیمه در خانواده همراه اول؛ اولویت‌بندی با RICE و روایت OKR تا رهبری.",
				en: "End-to-end ownership of strategy and roadmap for the online insurance platform in the Hamrah Aval family; RICE prioritization and OKRs through to leadership."
			},
			{
				fa: "رهبری برنامه هوشمندسازی آی‌بیمه از کشف مسئله تا تحویل: چت‌بات، دستیار خرید و لایه هوش تجاری به‌عنوان یک سیستم واحد.",
				en: "Led the iBime intelligentization program from discovery to delivery: chatbot, purchase assistant, and BI as one system."
			},
			{
				fa: "پیاده‌سازی چت‌بات محصول؛ طراحی جریان مکالمه، کاهش بار پشتیبانی و هدایت کاربر تا نقطه صدور.",
				en: "Shipped the product chatbot — conversation flows, lower support load, and guidance through to issuance."
			},
			{
				fa: "ساخت دستیار خرید بیمه شخص ثالث (صفر تا یک): استعلام، مقایسه و صدور در یک مسیر مکالمه‌ای.",
				en: "Built the 0-to-1 third-party insurance purchase assistant: inquiry, comparison, and issuance in one conversational path."
			},
			{
				fa: "پیاده‌سازی متابیس برای داشبورد BI سازمانی؛ تعریف North Star و KPI واحد و تصمیم روزانه روی داده زنده صدور و کانال.",
				en: "Implemented Metabase for company BI dashboards; a shared North Star and KPI language, with daily decisions on live issuance and channel data."
			},
			{
				fa: "رشد محصول روی کانال‌های فروش: USSD (*1# و *500#)، ستاره یک، ایوانو، ریحله و باسا کارت — فعال‌سازی، تبدیل و نگهداشت.",
				en: "Product growth across sales channels: USSD (*1#, *500#), Setare Yek, Ewano, Righleh, and Basa Card — activation, conversion, and retention."
			},
			{
				fa: "رهبری سرویس سنهاب و هماهنگی فنی با مقررات بیمه مرکزی برای صدور آنلاین در مقیاس.",
				en: "Led the Sanhab service and technical alignment with Central Insurance rules for online issuance at scale."
			},
			{
				fa: "طراحی پنل بک‌آفیس نمایندگان و اپراتورها برای کاهش خطای صدور، شتاب عملیات و کیفیت تجربه عامل فروش.",
				en: "Designed the agent and operator back-office to cut issuance errors, speed operations, and raise the seller experience."
			},
			{
				fa: "کشف مستمر: پژوهش کاربر، JTBD، فرضیه، آزمایش و PRD؛ کار ضربدری با فنی، طراحی، انطباق، فروش و ذی‌نفعان بیرونی.",
				en: "Ongoing discovery: user research, JTBD, hypotheses, experiments, and PRDs; cross-functional work with eng, design, compliance, sales, and external stakeholders."
			}
		]
	},
	{
		role: {
			fa: "کارشناس ارشد بیمه",
			en: "Senior Insurance Specialist"
		},
		company: {
			fa: "ازکی",
			en: "Azki"
		},
		url: "https://www.azki.com",
		place: {
			fa: "تهران",
			en: "Tehran"
		},
		start: {
			fa: "۱۲ / ۲۰۲۱",
			en: "Dec 2021"
		},
		end: {
			fa: "۰۱ / ۲۰۲۳",
			en: "Jan 2023"
		},
		bullets: [{
			fa: "ساخت سیستم کیفیت تماس و مربی‌گری؛ تبدیل بینش خط مقدم به فرصت محصول و بهبود تجربه مشتری.",
			en: "Built the call-quality and coaching system; turned frontline insight into product opportunity and a better customer experience."
		}, {
			fa: "گزارش ماهانه برای مدیران ارشد، مدل‌سازی تحقق هدف سالانه و پیشنهاد مداخله روی قیف فروش.",
			en: "Monthly reporting to senior managers, annual-target modeling, and interventions on the sales funnel."
		}]
	},
	{
		role: {
			fa: "کارشناس مالی",
			en: "Finance Specialist"
		},
		company: {
			fa: "کیسون",
			en: "Kayson Inc"
		},
		url: "https://www.kayson-ir.com",
		place: {
			fa: "تهران",
			en: "Tehran"
		},
		start: {
			fa: "۰۹ / ۲۰۲۱",
			en: "Sep 2021"
		},
		end: {
			fa: "۰۶ / ۲۰۲۳",
			en: "Jun 2023"
		},
		bullets: [{
			fa: "مالکیت عملیات مالی در چارچوب قوانین صنعت؛ پل بین عدد، فرآیند و تصمیم مدیریت.",
			en: "Owned financial operations within industry regulation — bridging numbers, process, and management decisions."
		}, {
			fa: "بازطراحی فرآیندهای مالی با همکاری تیم؛ کاهش ۲۴٪ هزینه‌ها در دو سال.",
			en: "Redesigned financial processes with the team, cutting costs 24% in two years."
		}]
	},
	{
		role: {
			fa: "کارشناس مالی",
			en: "Finance Specialist"
		},
		company: {
			fa: "مرزن‌بتن صنعت",
			en: "Marzanbeton Sanat"
		},
		url: null,
		place: {
			fa: "چالوس، مازندران",
			en: "Chaloos, Mazandaran"
		},
		start: {
			fa: "۰۶ / ۲۰۱۹",
			en: "Jun 2019"
		},
		end: {
			fa: "۱۱ / ۲۰۲۱",
			en: "Nov 2021"
		},
		bullets: [{
			fa: "اداره کامل امور مالی شرکت، گزارش‌دهی و انضباط اسناد — پایه تصمیم‌گیری مبتنی بر عدد.",
			en: "Ran company finance, reporting, and record discipline — the base for number-led decisions."
		}]
	},
	{
		role: {
			fa: "مدیر دفتر کسب‌وکار",
			en: "Business Office Manager"
		},
		company: {
			fa: "آتیه‌سازان حافظ",
			en: "Atiyeh Sazan Hafez"
		},
		url: null,
		place: {
			fa: "تهران",
			en: "Tehran"
		},
		start: {
			fa: "۱۲ / ۲۰۱۸",
			en: "Dec 2018"
		},
		end: {
			fa: "۰۵ / ۲۰۱۹",
			en: "May 2019"
		},
		bullets: [{
			fa: "راهبری دفتر، هماهنگی ذی‌نفعان و بستن حلقه اجرا بین تیم‌ها.",
			en: "Ran the office, aligned stakeholders, and closed the execution loop between teams."
		}]
	}
];
var EDUCATION = [{
	title: {
		fa: "کارشناسی ارشد مدیریت بازرگانی، گرایش مالی",
		en: "M.S. Business Administration, Finance"
	},
	place: {
		fa: "دانشگاه آزاد اسلامی، واحد علوم و تحقیقات",
		en: "Islamic Azad University, Science and Research Branch"
	},
	dates: {
		fa: "۲۰۱۹ — ۲۰۲۱",
		en: "2019 — 2021"
	}
}, {
	title: {
		fa: "کارشناسی مدیریت مالی",
		en: "B.S. Finance and Financial Management"
	},
	place: {
		fa: "دانشگاه آزاد اسلامی، واحد تهران مرکزی",
		en: "Islamic Azad University, Central Tehran Branch"
	},
	dates: {
		fa: "۲۰۱۵ — ۲۰۱۸",
		en: "2015 — 2018"
	}
}];
var COURSE = {
	title: {
		fa: "مدیریت محصول دیجیتال",
		en: "Digital Product Management"
	},
	place: {
		fa: "مدرسه محصول بوژان",
		en: "Bozhan Product School"
	},
	dates: {
		fa: "۰۸ / ۲۰۲۴ — ۰۱ / ۲۰۲۵",
		en: "Aug 2024 — Jan 2025"
	}
};
var SKILLS = [
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
	"Google Sheets"
];
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function SiteNav() {
	const { lang, toggle } = useLang();
	const [open, setOpen] = (0, import_react.useState)(false);
	const [active, setActive] = (0, import_react.useState)("about");
	const [scrolled, setScrolled] = (0, import_react.useState)(false);
	(0, import_react.useEffect)(() => {
		const onScroll = () => setScrolled(window.scrollY > 12);
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	(0, import_react.useEffect)(() => {
		const nodes = NAV.map((item) => item.id).map((id) => document.getElementById(id)).filter((node) => Boolean(node));
		const observer = new IntersectionObserver((entries) => {
			const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
			if (visible?.target.id) setActive(visible.target.id);
		}, {
			rootMargin: "-35% 0px -50% 0px",
			threshold: [
				.1,
				.25,
				.5
			]
		});
		nodes.forEach((node) => observer.observe(node));
		return () => observer.disconnect();
	}, []);
	(0, import_react.useEffect)(() => {
		document.body.style.overflow = open ? "hidden" : "";
		return () => {
			document.body.style.overflow = "";
		};
	}, [open]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
			href: "#main",
			className: "sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-ink",
			children: COPY.skip[lang]
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("header", {
			className: cn("fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-200 ease-out", open ? "border-b border-paper/10 bg-ink" : scrolled ? "border-b border-line bg-paper/95" : "border-b border-transparent bg-paper/70"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
						href: "#top",
						className: "group flex items-center gap-2.5 no-underline",
						onClick: () => setOpen(false),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("grid size-8 place-items-center rounded-full text-xs font-semibold tracking-wide", open ? "bg-paper text-ink" : "bg-ink text-paper"),
							children: "M"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: cn("text-sm font-semibold tracking-wide", open ? "text-paper" : "text-ink"),
							children: PROFILE.name[lang]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
						className: "hidden items-center gap-1 md:flex",
						"aria-label": "Primary",
						children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
							href: `#${item.id}`,
							"aria-current": active === item.id ? "true" : void 0,
							className: cn("rounded-full px-3 py-2 text-sm transition-colors duration-150", active === item.id ? "bg-foam text-ink" : "text-muted hover:text-ink"),
							children: item[lang]
						}, item.id))
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							onClick: toggle,
							"aria-label": COPY.langLabel[lang],
							className: cn("grid h-11 min-w-11 place-items-center rounded-full border px-3 text-sm font-medium transition-transform duration-150 ease-out active:scale-[0.96]", open ? "border-paper/20 bg-ink-soft text-paper" : "border-line bg-surface text-ink"),
							children: COPY.langSwitch[lang]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: cn("grid size-11 place-items-center rounded-full border md:hidden", open ? "border-paper/20 bg-ink-soft text-paper" : "border-line bg-surface text-ink"),
							"aria-label": open ? COPY.menuClose[lang] : COPY.menuOpen[lang],
							"aria-expanded": open,
							onClick: () => setOpen((value) => !value),
							children: open ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, {
								className: "size-5",
								strokeWidth: 1.75
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, {
								className: "size-5",
								strokeWidth: 1.75
							})
						})]
					})
				]
			})
		}),
		/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("fixed inset-0 z-30 bg-ink text-paper transition-[opacity,visibility] duration-200 ease-out md:hidden", open ? "visible opacity-100" : "invisible opacity-0"),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("nav", {
				className: "flex h-full flex-col justify-center gap-2 px-8 pt-16",
				"aria-label": "Mobile",
				children: NAV.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("a", {
					href: `#${item.id}`,
					onClick: () => setOpen(false),
					className: "py-3 text-3xl font-medium tracking-tight text-paper",
					children: item[lang]
				}, item.id))
			})
		})
	] });
}
function ScrollProgress() {
	const [progress, setProgress] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		const onScroll = () => {
			const root = document.documentElement;
			const max = root.scrollHeight - root.clientHeight;
			setProgress(max > 0 ? root.scrollTop / max : 0);
		};
		onScroll();
		window.addEventListener("scroll", onScroll, { passive: true });
		return () => window.removeEventListener("scroll", onScroll);
	}, []);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 bg-transparent",
		"aria-hidden": true,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "scroll-progress h-full bg-brand",
			style: { transform: `scaleX(${progress})` }
		})
	});
}
function SectionEyebrow({ children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "mb-3 text-xs font-medium tracking-eyebrow text-brand-deep uppercase",
		children
	});
}
function BrandMark({ lang }) {
	const letter = lang === "fa" ? "م" : "M";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto aspect-square w-full max-w-sm",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("svg", {
			viewBox: "0 0 320 320",
			className: "size-full",
			"aria-hidden": true,
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "160",
					cy: "160",
					r: "148",
					fill: "none",
					stroke: "var(--color-line)",
					strokeWidth: "1"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "160",
					cy: "160",
					r: "118",
					fill: "none",
					stroke: "var(--color-brand)",
					strokeWidth: "1.25"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "160",
					cy: "160",
					r: "88",
					fill: "var(--color-foam)"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("path", {
					d: "M160 42 a118 118 0 0 1 102 59",
					fill: "none",
					stroke: "var(--color-accent)",
					strokeWidth: "3",
					strokeLinecap: "round"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("circle", {
					cx: "262",
					cy: "101",
					r: "5",
					fill: "var(--color-accent)"
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: cn("absolute inset-0 grid place-items-center text-ink", lang === "fa" ? "font-sans text-7xl font-semibold" : "font-display text-8xl italic"),
			children: letter
		})]
	});
}
function HomePage() {
	const { lang } = useLang();
	const year = (/* @__PURE__ */ new Date()).getFullYear();
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		id: "top",
		className: "min-h-screen bg-paper",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScrollProgress, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SiteNav, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				id: "main",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						className: "mx-auto grid max-w-6xl items-center gap-12 px-5 pt-28 pb-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:pt-36 lg:pb-28",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
								className: "rise-in mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink-soft sm:text-sm",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "size-1.5 rounded-full bg-accent" }), COPY.badge[lang]]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
								className: cn("rise-in rise-in-2 text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl", lang === "en" && "font-display italic font-medium"),
								children: PROFILE.name[lang]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("rise-in rise-in-3 mt-2 text-lg text-muted", lang === "fa" ? "font-display italic" : "font-sans"),
								children: PROFILE.nameAlt[lang]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "rise-in rise-in-4 mt-6 max-w-xl text-lg text-ink-soft",
								children: COPY.lede[lang]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: cn("rise-in rise-in-4 mt-3 text-xl text-brand-deep", lang === "en" ? "font-display italic" : "font-semibold"),
								children: PROFILE.motto[lang]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "rise-in rise-in-5 mt-8 flex flex-wrap gap-3",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: `mailto:${PROFILE.email}`,
									className: "inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-paper transition-transform duration-150 ease-out hover:bg-ink-soft active:scale-[0.96]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
										className: "size-4",
										strokeWidth: 1.75
									}), COPY.ctaMail[lang]]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
									href: PROFILE.linkedin,
									target: "_blank",
									rel: "noreferrer",
									className: "inline-flex h-12 items-center gap-2 rounded-full border border-line bg-surface px-6 text-sm font-medium text-ink transition-transform duration-150 ease-out hover:border-brand hover:bg-foam active:scale-[0.96]",
									children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
										className: "size-4",
										strokeWidth: 1.75
									}), COPY.ctaLinkedin[lang]]
								})]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dl", {
								className: "mt-12 grid grid-cols-3 gap-4 border-t border-line pt-8",
								children: COPY.stats.map((stat) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("dt", {
									className: "text-xs text-muted",
									children: stat.label[lang]
								}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("dd", {
									className: cn("mt-1 text-2xl text-ink sm:text-3xl", lang === "en" ? "font-display italic" : "font-semibold"),
									children: stat.value[lang]
								})] }, stat.label.en))
							})
						] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "rise-in rise-in-3 hidden lg:block",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(BrandMark, { lang })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "about",
						className: "border-t border-line bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: COPY.aboutEyebrow[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-semibold tracking-tight text-ink sm:text-4xl",
								children: COPY.aboutTitle[lang]
							})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "text-lg leading-relaxed text-ink-soft",
									children: COPY.aboutBody[lang]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-8 space-y-3",
									children: COPY.aboutPoints.map((point) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex gap-3 text-ink",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "mt-2 size-1.5 shrink-0 rounded-full bg-brand" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: point[lang] })]
									}, point.en))
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
									className: "mt-10 flex flex-wrap gap-2",
									children: CRAFT.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
										className: "rounded-full border border-line bg-paper px-3 py-1.5 text-sm text-ink-soft",
										children: item[lang]
									}, item.en))
								})
							] })]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "work",
						className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: COPY.workEyebrow[lang] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl",
								children: COPY.workTitle[lang]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3",
								children: COPY.highlights.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
									className: "rounded-xl border border-line bg-surface p-6 transition-transform duration-200 ease-out hover:-translate-y-0.5 md:p-8",
									children: [
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "font-display text-sm italic text-accent",
											children: item.num
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
											className: "mt-4 text-xl font-semibold text-ink",
											children: item.title[lang]
										}),
										/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "mt-3 text-sm leading-relaxed text-ink-soft",
											children: item.body[lang]
										})
									]
								}, item.num))
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "career",
						className: "border-t border-line bg-surface",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: COPY.careerEyebrow[lang] }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl font-semibold tracking-tight text-ink sm:text-4xl",
									children: COPY.careerTitle[lang]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ol", {
									className: "mt-12",
									children: EXPERIENCE.map((job) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "grid gap-4 border-s-2 border-line py-8 ps-6 first:pt-0 last:pb-0 sm:grid-cols-4 sm:gap-10",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
											className: "text-sm text-muted sm:col-span-1",
											children: [
												job.start[lang],
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
													className: "mx-1.5 text-line",
													children: "—"
												}),
												job.end === "present" ? COPY.present[lang] : job.end[lang]
											]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
											className: "sm:col-span-3",
											children: [
												/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
													className: "flex flex-wrap items-baseline gap-x-3 gap-y-1",
													children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
														className: "text-lg font-semibold text-ink",
														children: job.role[lang]
													}), job.url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
														href: job.url,
														target: "_blank",
														rel: "noreferrer",
														className: "inline-flex items-center gap-1 text-sm text-brand-deep hover:text-ink",
														children: [job.company[lang], /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUpRight, {
															className: "size-3.5",
															strokeWidth: 1.75
														})]
													}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
														className: "text-sm text-brand-deep",
														children: job.company[lang]
													})]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
													className: "mt-1 text-sm text-muted",
													children: job.place[lang]
												}),
												/* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
													className: "mt-4 space-y-2",
													children: job.bullets.map((bullet) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
														className: "text-sm leading-relaxed text-ink-soft",
														children: bullet[lang]
													}, bullet.en))
												})
											]
										})]
									}, `${job.company.en}-${job.start.en}`))
								})
							]
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("section", {
						id: "study",
						className: "mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SectionEyebrow, { children: COPY.studyEyebrow[lang] }),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
								className: "text-3xl font-semibold tracking-tight text-ink sm:text-4xl",
								children: COPY.studyTitle[lang]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "mt-12 grid gap-4 lg:grid-cols-2",
								children: [
									EDUCATION.map((item) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rounded-xl border border-line bg-surface p-6 md:p-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-sm text-muted",
												children: item.dates[lang]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 text-lg font-semibold text-ink",
												children: item.title[lang]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm text-ink-soft",
												children: item.place[lang]
											})
										]
									}, item.title.en)),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rounded-xl border border-line bg-foam p-6 md:p-8",
										children: [
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "text-xs font-medium tracking-eyebrow text-brand-deep uppercase",
												children: COPY.courseLabel[lang]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-3 text-sm text-muted",
												children: COURSE.dates[lang]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h3", {
												className: "mt-2 text-lg font-semibold text-ink",
												children: COURSE.title[lang]
											}),
											/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
												className: "mt-2 text-sm text-ink-soft",
												children: COURSE.place[lang]
											})
										]
									}),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("article", {
										className: "rounded-xl border border-line bg-surface p-6 md:p-8",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
											className: "text-xs font-medium tracking-eyebrow text-muted uppercase",
											children: COPY.skillsLabel[lang]
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("ul", {
											className: "mt-5 flex flex-wrap gap-2",
											children: SKILLS.map((skill) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", {
												className: "rounded-full border border-line bg-paper px-3 py-1.5 text-sm text-ink-soft",
												children: skill
											}, skill))
										})]
									})
								]
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("section", {
						id: "contact",
						className: "border-t border-line bg-ink text-paper",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mb-3 text-xs font-medium tracking-eyebrow text-brand uppercase",
									children: COPY.contactEyebrow[lang]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
									className: "text-3xl font-semibold tracking-tight text-paper sm:text-4xl",
									children: COPY.contactTitle[lang]
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
									className: "mt-5 max-w-lg text-base leading-relaxed text-mist",
									children: COPY.contactBody[lang]
								})
							] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("ul", {
								className: "space-y-4 self-center",
								children: [
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `mailto:${PROFILE.email}`,
										className: "flex items-center gap-4 rounded-lg border border-paper/10 bg-ink-soft px-4 py-4 transition-colors hover:border-brand",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mail, {
											className: "size-5 shrink-0 text-brand",
											strokeWidth: 1.75
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm sm:text-base",
											children: PROFILE.email
										})]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: `tel:${PROFILE.phone}`,
										className: "flex items-center gap-4 rounded-lg border border-paper/10 bg-ink-soft px-4 py-4 transition-colors hover:border-brand",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Phone, {
											className: "size-5 shrink-0 text-brand",
											strokeWidth: 1.75
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm sm:text-base",
											children: PROFILE.phoneDisplay[lang]
										})]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsx)("li", { children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("a", {
										href: PROFILE.linkedin,
										target: "_blank",
										rel: "noreferrer",
										className: "flex items-center gap-4 rounded-lg border border-paper/10 bg-ink-soft px-4 py-4 transition-colors hover:border-brand",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Linkedin, {
											className: "size-5 shrink-0 text-brand",
											strokeWidth: 1.75
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm sm:text-base",
											children: "linkedin.com/in/mona-ebadi"
										})]
									}) }),
									/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("li", {
										className: "flex items-center gap-4 px-4 py-2 text-mist",
										children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MapPin, {
											className: "size-5 shrink-0",
											strokeWidth: 1.75
										}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
											className: "text-sm sm:text-base",
											children: PROFILE.location[lang]
										})]
									})
								]
							})]
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("footer", {
				className: "border-t border-paper/10 bg-ink",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-mist sm:flex-row sm:items-center sm:justify-between sm:px-8",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: COPY.footer[lang] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", { children: ["© ", year] })]
				})
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HomePage, {});
}
//#endregion
export { Home as component };
