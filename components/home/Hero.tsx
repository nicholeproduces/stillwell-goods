import { FallbackImage } from "@/components/home/FallbackImage";
import { SITE, LOGO_SRC_CANDIDATES } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="sw-grain relative overflow-hidden border-b border-sw-ink/10 bg-sw-paper"
    >
      {/* Decorative blobs — kept subtle; no layout height */}
      <div className="pointer-events-none absolute -right-20 top-8 h-[min(48vw,320px)] w-[min(48vw,320px)] rounded-full bg-sw-green/10 blur-3xl sm:-right-24 sm:top-12 sm:h-[min(72vw,520px)] sm:w-[min(72vw,520px)] sm:bg-sw-green/12" />
      <div className="pointer-events-none absolute -left-28 bottom-0 h-52 w-52 rounded-full bg-sw-brown/10 blur-3xl sm:-left-32 sm:h-80 sm:w-80" />

      <div className="relative z-[1] mx-auto max-w-7xl px-5 pb-14 pt-2 sm:px-8 sm:pb-20 sm:pt-12 lg:px-10 lg:pb-24 lg:pt-16">
        <div className="flex max-w-2xl flex-col gap-5 sm:gap-8">
          <div className="hero-logo-wrap group relative w-full max-w-xl leading-none">
            <div className="absolute -inset-3 -z-10 rounded-sm bg-gradient-to-br from-sw-cream via-transparent to-sw-green/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <FallbackImage
              candidates={LOGO_SRC_CANDIDATES}
              alt={`${SITE.name} logo`}
              width={560}
              height={180}
              sizes="(max-width: 1024px) 90vw, 480px"
              className="h-auto max-h-[5.5rem] w-full object-contain object-left sm:max-h-none"
              priority
            />
          </div>

          <div className="max-w-xl space-y-4 sm:space-y-5">
            <p className="text-pretty font-medium leading-snug tracking-[-0.02em] text-sw-ink sm:text-lg lg:text-xl">
              {SITE.tagline}
            </p>
            <div className="divider-brass" aria-hidden />
            <p className="max-w-prose text-pretty text-sm leading-relaxed text-sw-ink/75 sm:text-base">
              Stillwell Goods is a curated retail and community space for
              secondhand furniture, art, studio props, pop-ups, private events,
              and local creative projects.
            </p>
            <p className="pt-1 text-[10px] font-medium uppercase tracking-[0.28em] text-sw-ink/45">
              {SITE.location}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
