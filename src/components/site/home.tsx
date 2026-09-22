import { ArrowUpRight, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import {
  COPY,
  COURSE,
  CRAFT,
  EDUCATION,
  EXPERIENCE,
  PROFILE,
  SKILLS,
  type Lang,
} from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { useLang } from "./language";
import { ScrollProgress, SiteNav } from "./nav";

function SectionEyebrow({ children }: { children: string }) {
  return (
    <p className="mb-3 text-xs font-medium tracking-eyebrow text-brand-deep uppercase">
      {children}
    </p>
  );
}

function BrandMark({ lang }: { lang: Lang }) {
  const letter = lang === "fa" ? "م" : "M";
  return (
    <div className="relative mx-auto aspect-square w-full max-w-sm">
      <svg viewBox="0 0 320 320" className="size-full" aria-hidden>
        <circle cx="160" cy="160" r="148" fill="none" stroke="var(--color-line)" strokeWidth="1" />
        <circle cx="160" cy="160" r="118" fill="none" stroke="var(--color-brand)" strokeWidth="1.25" />
        <circle cx="160" cy="160" r="88" fill="var(--color-foam)" />
        <path
          d="M160 42 a118 118 0 0 1 102 59"
          fill="none"
          stroke="var(--color-accent)"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <circle cx="262" cy="101" r="5" fill="var(--color-accent)" />
      </svg>
      <span
        className={cn(
          "absolute inset-0 grid place-items-center text-ink",
          lang === "fa" ? "font-sans text-7xl font-semibold" : "font-display text-8xl italic",
        )}
      >
        {letter}
      </span>
    </div>
  );
}

export function HomePage() {
  const { lang } = useLang();
  const year = new Date().getFullYear();

  return (
    <div id="top" className="min-h-screen bg-paper">
      <ScrollProgress />
      <SiteNav />

      <main id="main">
        <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pt-28 pb-20 sm:px-8 lg:grid-cols-2 lg:gap-16 lg:pt-36 lg:pb-28">
          <div>
            <p className="rise-in mb-5 inline-flex items-center gap-2 rounded-full border border-line bg-surface px-3 py-1.5 text-xs font-medium text-ink-soft sm:text-sm">
              <span className="size-1.5 rounded-full bg-accent" />
              {COPY.badge[lang]}
            </p>
            <h1
              className={cn(
                "rise-in rise-in-2 text-5xl font-semibold tracking-tight text-ink sm:text-6xl lg:text-7xl",
                lang === "en" && "font-display italic font-medium",
              )}
            >
              {PROFILE.name[lang]}
            </h1>
            <p
              className={cn(
                "rise-in rise-in-3 mt-2 text-lg text-muted",
                lang === "fa" ? "font-display italic" : "font-sans",
              )}
            >
              {PROFILE.nameAlt[lang]}
            </p>
            <p className="rise-in rise-in-4 mt-6 max-w-xl text-lg text-ink-soft">{COPY.lede[lang]}</p>
            <p
              className={cn(
                "rise-in rise-in-4 mt-3 text-xl text-brand-deep",
                lang === "en" ? "font-display italic" : "font-semibold",
              )}
            >
              {PROFILE.motto[lang]}
            </p>

            <div className="rise-in rise-in-5 mt-8 flex flex-wrap gap-3">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex h-12 items-center gap-2 rounded-full bg-ink px-6 text-sm font-medium text-paper transition-transform duration-150 ease-out hover:bg-ink-soft active:scale-[0.96]"
              >
                <Mail className="size-4" strokeWidth={1.75} />
                {COPY.ctaMail[lang]}
              </a>
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-12 items-center gap-2 rounded-full border border-line bg-surface px-6 text-sm font-medium text-ink transition-transform duration-150 ease-out hover:border-brand hover:bg-foam active:scale-[0.96]"
              >
                <Linkedin className="size-4" strokeWidth={1.75} />
                {COPY.ctaLinkedin[lang]}
              </a>
            </div>

            <dl className="mt-12 grid grid-cols-3 gap-4 border-t border-line pt-8">
              {COPY.stats.map((stat) => (
                <div key={stat.label.en}>
                  <dt className="text-xs text-muted">{stat.label[lang]}</dt>
                  <dd
                    className={cn(
                      "mt-1 text-2xl text-ink sm:text-3xl",
                      lang === "en" ? "font-display italic" : "font-semibold",
                    )}
                  >
                    {stat.value[lang]}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="rise-in rise-in-3 hidden lg:block">
            <BrandMark lang={lang} />
          </div>
        </section>

        <section id="about" className="border-t border-line bg-surface">
          <div className="mx-auto grid max-w-6xl gap-10 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:gap-20 lg:py-28">
            <div>
              <SectionEyebrow>{COPY.aboutEyebrow[lang]}</SectionEyebrow>
              <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
                {COPY.aboutTitle[lang]}
              </h2>
            </div>
            <div>
              <p className="text-lg leading-relaxed text-ink-soft">{COPY.aboutBody[lang]}</p>
              <ul className="mt-8 space-y-3">
                {COPY.aboutPoints.map((point) => (
                  <li key={point.en} className="flex gap-3 text-ink">
                    <span className="mt-2 size-1.5 shrink-0 rounded-full bg-brand" />
                    <span>{point[lang]}</span>
                  </li>
                ))}
              </ul>
              <ul className="mt-10 flex flex-wrap gap-2">
                {CRAFT.map((item) => (
                  <li
                    key={item.en}
                    className="rounded-full border border-line bg-paper px-3 py-1.5 text-sm text-ink-soft"
                  >
                    {item[lang]}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="work" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <SectionEyebrow>{COPY.workEyebrow[lang]}</SectionEyebrow>
          <h2 className="max-w-xl text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {COPY.workTitle[lang]}
          </h2>
          <div className="mt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {COPY.highlights.map((item) => (
              <article
                key={item.num}
                className="rounded-xl border border-line bg-surface p-6 transition-transform duration-200 ease-out hover:-translate-y-0.5 md:p-8"
              >
                <p className="font-display text-sm italic text-accent">{item.num}</p>
                <h3 className="mt-4 text-xl font-semibold text-ink">{item.title[lang]}</h3>
                <p className="mt-3 text-sm leading-relaxed text-ink-soft">{item.body[lang]}</p>
              </article>
            ))}
          </div>
        </section>

        <section id="career" className="border-t border-line bg-surface">
          <div className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
            <SectionEyebrow>{COPY.careerEyebrow[lang]}</SectionEyebrow>
            <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
              {COPY.careerTitle[lang]}
            </h2>
            <ol className="mt-12">
              {EXPERIENCE.map((job) => (
                <li
                  key={`${job.company.en}-${job.start.en}`}
                  className="grid gap-4 border-s-2 border-line py-8 ps-6 first:pt-0 last:pb-0 sm:grid-cols-4 sm:gap-10"
                >
                  <p className="text-sm text-muted sm:col-span-1">
                    {job.start[lang]}
                    <span className="mx-1.5 text-line">—</span>
                    {job.end === "present" ? COPY.present[lang] : job.end[lang]}
                  </p>
                  <div className="sm:col-span-3">
                    <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                      <h3 className="text-lg font-semibold text-ink">{job.role[lang]}</h3>
                      {job.url ? (
                        <a
                          href={job.url}
                          target="_blank"
                          rel="noreferrer"
                          className="inline-flex items-center gap-1 text-sm text-brand-deep hover:text-ink"
                        >
                          {job.company[lang]}
                          <ArrowUpRight className="size-3.5" strokeWidth={1.75} />
                        </a>
                      ) : (
                        <span className="text-sm text-brand-deep">{job.company[lang]}</span>
                      )}
                    </div>
                    <p className="mt-1 text-sm text-muted">{job.place[lang]}</p>
                    <ul className="mt-4 space-y-2">
                      {job.bullets.map((bullet) => (
                        <li key={bullet.en} className="text-sm leading-relaxed text-ink-soft">
                          {bullet[lang]}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="study" className="mx-auto max-w-6xl px-5 py-20 sm:px-8 lg:py-28">
          <SectionEyebrow>{COPY.studyEyebrow[lang]}</SectionEyebrow>
          <h2 className="text-3xl font-semibold tracking-tight text-ink sm:text-4xl">
            {COPY.studyTitle[lang]}
          </h2>
          <div className="mt-12 grid gap-4 lg:grid-cols-2">
            {EDUCATION.map((item) => (
              <article key={item.title.en} className="rounded-xl border border-line bg-surface p-6 md:p-8">
                <p className="text-sm text-muted">{item.dates[lang]}</p>
                <h3 className="mt-2 text-lg font-semibold text-ink">{item.title[lang]}</h3>
                <p className="mt-2 text-sm text-ink-soft">{item.place[lang]}</p>
              </article>
            ))}
            <article className="rounded-xl border border-line bg-foam p-6 md:p-8">
              <p className="text-xs font-medium tracking-eyebrow text-brand-deep uppercase">
                {COPY.courseLabel[lang]}
              </p>
              <p className="mt-3 text-sm text-muted">{COURSE.dates[lang]}</p>
              <h3 className="mt-2 text-lg font-semibold text-ink">{COURSE.title[lang]}</h3>
              <p className="mt-2 text-sm text-ink-soft">{COURSE.place[lang]}</p>
            </article>
            <article className="rounded-xl border border-line bg-surface p-6 md:p-8">
              <p className="text-xs font-medium tracking-eyebrow text-muted uppercase">
                {COPY.skillsLabel[lang]}
              </p>
              <ul className="mt-5 flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <li
                    key={skill}
                    className="rounded-full border border-line bg-paper px-3 py-1.5 text-sm text-ink-soft"
                  >
                    {skill}
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </section>

        <section id="contact" className="border-t border-line bg-ink text-paper">
          <div className="mx-auto grid max-w-6xl gap-12 px-5 py-20 sm:px-8 lg:grid-cols-2 lg:py-28">
            <div>
              <p className="mb-3 text-xs font-medium tracking-eyebrow text-brand uppercase">
                {COPY.contactEyebrow[lang]}
              </p>
              <h2 className="text-3xl font-semibold tracking-tight text-paper sm:text-4xl">
                {COPY.contactTitle[lang]}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-relaxed text-mist">{COPY.contactBody[lang]}</p>
            </div>
            <ul className="space-y-4 self-center">
              <li>
                <a
                  href={`mailto:${PROFILE.email}`}
                  className="flex items-center gap-4 rounded-lg border border-paper/10 bg-ink-soft px-4 py-4 transition-colors hover:border-brand"
                >
                  <Mail className="size-5 shrink-0 text-brand" strokeWidth={1.75} />
                  <span className="text-sm sm:text-base">{PROFILE.email}</span>
                </a>
              </li>
              <li>
                <a
                  href={`tel:${PROFILE.phone}`}
                  className="flex items-center gap-4 rounded-lg border border-paper/10 bg-ink-soft px-4 py-4 transition-colors hover:border-brand"
                >
                  <Phone className="size-5 shrink-0 text-brand" strokeWidth={1.75} />
                  <span className="text-sm sm:text-base">{PROFILE.phoneDisplay[lang]}</span>
                </a>
              </li>
              <li>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="flex items-center gap-4 rounded-lg border border-paper/10 bg-ink-soft px-4 py-4 transition-colors hover:border-brand"
                >
                  <Linkedin className="size-5 shrink-0 text-brand" strokeWidth={1.75} />
                  <span className="text-sm sm:text-base">linkedin.com/in/mona-ebadi</span>
                </a>
              </li>
              <li className="flex items-center gap-4 px-4 py-2 text-mist">
                <MapPin className="size-5 shrink-0" strokeWidth={1.75} />
                <span className="text-sm sm:text-base">{PROFILE.location[lang]}</span>
              </li>
            </ul>
          </div>
        </section>
      </main>

      <footer className="border-t border-paper/10 bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-5 py-6 text-sm text-mist sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>{COPY.footer[lang]}</p>
          <p>© {year}</p>
        </div>
      </footer>
    </div>
  );
}
