"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { SITE } from "@/lib/site";

const nav = [
  { href: "#shop", label: "Shop / Source" },
  { href: "#events", label: "Events" },
  { href: "#family", label: "The Family" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onResize = () => {
      if (window.matchMedia("(min-width: 768px)").matches) setMenuOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [menuOpen]);

  useEffect(() => {
    if (menuOpen) {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-5 pb-3 pt-[max(0.85rem,env(safe-area-inset-top))] sm:items-end sm:gap-6 sm:px-8 sm:pb-4 sm:pt-5 lg:px-10">
        <Link
          href="#top"
          className="group shrink-0 py-1 font-semibold tracking-[0.2em] text-sw-ink transition-colors hover:text-sw-green"
          onClick={() => setMenuOpen(false)}
        >
          <span className="text-[11px] uppercase">{SITE.name}</span>
        </Link>

        <nav
          className="hidden items-center gap-7 text-[11px] font-medium uppercase tracking-[0.22em] text-sw-ink/70 md:flex"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link-shine whitespace-nowrap text-sw-ink/72 hover:text-sw-ink"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <button
          type="button"
          className="flex h-11 min-w-[2.75rem] shrink-0 items-center justify-center rounded-sm border border-sw-ink/12 bg-sw-paper/80 px-3 text-[10px] font-semibold uppercase tracking-[0.22em] text-sw-ink shadow-sm md:hidden"
          aria-expanded={menuOpen}
          aria-controls="mobile-nav"
          onClick={() => setMenuOpen((o) => !o)}
        >
          {menuOpen ? "Close" : "Menu"}
        </button>
      </div>

      <div
        id="mobile-nav"
        aria-hidden={!menuOpen}
        className={`border-t border-sw-ink/10 bg-[color-mix(in_oklab,var(--sw-paper)_94%,transparent)] shadow-[inset_0_1px_0_rgb(255_255_255_/_0.5)] backdrop-blur-md md:hidden ${
          menuOpen ? "block" : "hidden"
        }`}
      >
        <nav
          className="mx-auto flex max-w-7xl flex-col gap-0 px-5 py-2 sm:px-8"
          aria-label="Mobile primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="border-b border-sw-ink/[0.06] py-3.5 text-[11px] font-medium uppercase tracking-[0.22em] text-sw-ink/85 transition-colors last:border-b-0 hover:bg-sw-ink/[0.03] hover:text-sw-ink active:bg-sw-ink/[0.05]"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
