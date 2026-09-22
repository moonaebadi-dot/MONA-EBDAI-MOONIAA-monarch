import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { COPY, NAV, PROFILE } from "@/lib/site-content";
import { cn } from "@/lib/utils";
import { useLang } from "./language";

export function SiteNav() {
  const { lang, toggle } = useLang();
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState<string>("about");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const ids = NAV.map((item) => item.id);
    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((node): node is HTMLElement => Boolean(node));
    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
        if (visible?.target.id) setActive(visible.target.id);
      },
      { rootMargin: "-35% 0px -50% 0px", threshold: [0.1, 0.25, 0.5] },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:start-4 focus:top-4 focus:z-50 focus:rounded-md focus:bg-surface focus:px-3 focus:py-2 focus:text-ink"
      >
        {COPY.skip[lang]}
      </a>
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-40 transition-[background-color,border-color] duration-200 ease-out",
          open
            ? "border-b border-paper/10 bg-ink"
            : scrolled
              ? "border-b border-line bg-paper/95"
              : "border-b border-transparent bg-paper/70",
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-5 sm:px-8">
          <a href="#top" className="group flex items-center gap-2.5 no-underline" onClick={() => setOpen(false)}>
            <span
              className={cn(
                "grid size-8 place-items-center rounded-full text-xs font-semibold tracking-wide",
                open ? "bg-paper text-ink" : "bg-ink text-paper",
              )}
            >
              M
            </span>
            <span
              className={cn(
                "text-sm font-semibold tracking-wide",
                open ? "text-paper" : "text-ink",
              )}
            >
              {PROFILE.name[lang]}
            </span>
          </a>

          <nav className="hidden items-center gap-1 md:flex" aria-label="Primary">
            {NAV.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                aria-current={active === item.id ? "true" : undefined}
                className={cn(
                  "rounded-full px-3 py-2 text-sm transition-colors duration-150",
                  active === item.id
                    ? "bg-foam text-ink"
                    : "text-muted hover:text-ink",
                )}
              >
                {item[lang]}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label={COPY.langLabel[lang]}
              className={cn(
                "grid h-11 min-w-11 place-items-center rounded-full border px-3 text-sm font-medium transition-transform duration-150 ease-out active:scale-[0.96]",
                open
                  ? "border-paper/20 bg-ink-soft text-paper"
                  : "border-line bg-surface text-ink",
              )}
            >
              {COPY.langSwitch[lang]}
            </button>
            <button
              type="button"
              className={cn(
                "grid size-11 place-items-center rounded-full border md:hidden",
                open
                  ? "border-paper/20 bg-ink-soft text-paper"
                  : "border-line bg-surface text-ink",
              )}
              aria-label={open ? COPY.menuClose[lang] : COPY.menuOpen[lang]}
              aria-expanded={open}
              onClick={() => setOpen((value) => !value)}
            >
              {open ? <X className="size-5" strokeWidth={1.75} /> : <Menu className="size-5" strokeWidth={1.75} />}
            </button>
          </div>
        </div>
      </header>

      <div
        className={cn(
          "fixed inset-0 z-30 bg-ink text-paper transition-[opacity,visibility] duration-200 ease-out md:hidden",
          open ? "visible opacity-100" : "invisible opacity-0",
        )}
      >
        <nav className="flex h-full flex-col justify-center gap-2 px-8 pt-16" aria-label="Mobile">
          {NAV.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => setOpen(false)}
              className="py-3 text-3xl font-medium tracking-tight text-paper"
            >
              {item[lang]}
            </a>
          ))}
        </nav>
      </div>
    </>
  );
}

export function ScrollProgress() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const root = document.documentElement;
      const max = root.scrollHeight - root.clientHeight;
      setProgress(max > 0 ? root.scrollTop / max : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="pointer-events-none fixed inset-x-0 top-0 z-50 h-0.5 bg-transparent" aria-hidden>
      <div
        className="scroll-progress h-full bg-brand"
        style={{ transform: `scaleX(${progress})` }}
      />
    </div>
  );
}
