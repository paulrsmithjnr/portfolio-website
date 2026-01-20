import { NavLink, Link, useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Spotlight } from "../components/ui/Spotlight";
import { cn } from "../lib/utils";

interface LegalSection {
  title: string;
  body: string;
  bullets?: string[];
}

interface LegalMetaItem {
  label: string;
  value: string;
}

interface LegalPageProps {
  title: string;
  subtitle?: string;
  lastUpdated: string;
  sections: LegalSection[];
  meta?: LegalMetaItem[];
}

const LegalPage = ({
  title,
  subtitle,
  lastUpdated,
  sections,
  meta,
}: LegalPageProps) => {
  const location = useLocation();
  const year = new Date().getFullYear();

  useEffect(() => {
    if (typeof window === "undefined" || window.scrollY < 1) {
      return;
    }

    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    window.scrollTo({
      top: 0,
      behavior: prefersReducedMotion ? "auto" : "smooth",
    });
  }, [location.pathname]);

  return (
    <div className="relative min-h-screen overflow-hidden bg-black-100 text-white">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(203,172,249,0.18),transparent_65%)]" />
      <div className="absolute inset-0 bg-grid-white opacity-20" />

      <Spotlight
        className="-top-36 left-6 h-[70vh] w-[70vw]"
        fill="white"
      />
      <Spotlight
        className="top-10 right-[-15%] h-[70vh] w-[60vw]"
        fill="purple"
      />

      <div className="relative z-10">
        <header className="mx-auto flex w-full max-w-6xl flex-col gap-4 px-6 pb-4 pt-10 md:flex-row md:items-center md:justify-end">
          <nav className="flex flex-wrap items-center gap-3 text-[0.65rem] uppercase tracking-[0.3em] text-white/60">
            {[
              { label: "Terms", to: "/terms" },
              { label: "Privacy", to: "/privacy" },
            ].map((link) => (
              <NavLink
                key={link.to}
                to={link.to}
                className={({ isActive }) =>
                  cn(
                    "rounded-full border border-transparent px-3 py-1 transition-colors",
                    isActive
                      ? "border-white/20 bg-white/10 text-white"
                      : "hover:border-white/20 hover:text-white"
                  )
                }
              >
                {link.label}
              </NavLink>
            ))}
          </nav>
        </header>

        <main className="mx-auto w-full max-w-5xl px-6 pb-20">
          <div className="rounded-3xl border border-white/10 bg-black-200 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.45)] backdrop-blur-xl md:p-12">
            <div className="flex flex-col gap-6">
              <div>
                <h1 className="mt-3 text-4xl font-bold tracking-tight text-white md:text-5xl">
                  {title}
                </h1>
                {subtitle && (
                  <p className="mt-4 max-w-2xl text-base text-white-200">
                    {subtitle}
                  </p>
                )}
                {meta && meta.length > 0 && (
                  <div className="mt-5 flex flex-col gap-2 text-sm text-white-200">
                    {meta.map((item) => (
                      <div
                        key={`${item.label}-${item.value}`}
                        className="flex flex-wrap items-center gap-2"
                      >
                        <span className="text-white/60">{item.label}:</span>
                        <span className="text-white-100 break-words">{item.value}</span>
                      </div>
                    ))}
                  </div>
                )}
                <div className="mt-6 inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-2 text-[0.65rem] uppercase tracking-[0.3em] text-white/70">
                  Updated {lastUpdated}
                </div>
              </div>
            </div>

            <div className="mt-10 h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />

            <div className="prose prose-invert mt-10 max-w-none">
              {sections.map((section) => (
                <section key={section.title}>
                  <h2>{section.title}</h2>
                  <p>{section.body}</p>
                  {section.bullets && (
                    <ul>
                      {section.bullets.map((item) => (
                        <li key={item}>{item}</li>
                      ))}
                    </ul>
                  )}
                </section>
              ))}
            </div>
          </div>
        </main>

        <footer className="mx-auto w-full max-w-5xl px-6 pb-10 text-xs text-white/50">
          <div className="flex flex-col items-center gap-3 border-t border-white/10 pt-6 sm:flex-row sm:justify-between">
            <p>&copy; {year} Paul Smith. All rights reserved.</p>
            <div className="flex items-center gap-3">
              <Link
                to="/terms"
                className="transition-colors hover:text-white"
              >
                Terms
              </Link>
              <span className="text-white/20">/</span>
              <Link
                to="/privacy"
                className="transition-colors hover:text-white"
              >
                Privacy
              </Link>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LegalPage;
