import Link from "next/link";
import { SITE } from "@/lib/site";

const nav = [
  { href: "#shop", label: "Shop / Source" },
  { href: "#events", label: "Events" },
  { href: "#family", label: "The Family" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  return (
    <header className="site-header">
      <div className="mx-auto flex max-w-7xl items-end justify-between gap-6 px-5 pb-4 pt-5 sm:px-8 lg:px-10">
        <Link
          href="#top"
          className="group shrink-0 font-semibold tracking-[0.2em] text-sw-ink transition-colors hover:text-sw-green"
        >
          <span className="text-[11px] uppercase">{SITE.name}</span>
        </Link>
        <nav
          className="-mr-1 flex min-w-0 flex-1 justify-end gap-5 overflow-x-auto overscroll-x-contain pb-1 [-ms-overflow-style:none] [scrollbar-width:none] sm:mr-0 sm:gap-7 sm:overflow-visible sm:text-[11px] [&::-webkit-scrollbar]:hidden"
          aria-label="Primary"
        >
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="nav-link-shine shrink-0 whitespace-nowrap text-[10px] font-medium uppercase tracking-[0.22em] text-sw-ink/72 hover:text-sw-ink sm:text-[11px]"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
