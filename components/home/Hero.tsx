import { FallbackImage } from "@/components/home/FallbackImage";
import { SITE, SISTERS_SRC_CANDIDATES, LOGO_SRC_CANDIDATES } from "@/lib/site";

export function Hero() {
  return (
    <section
      id="top"
      className="sw-grain relative overflow-hidden border-b border-sw-ink/10 bg-sw-paper"
    >
      <div className="pointer-events-none absolute -right-24 top-12 h-[min(72vw,520px)] w-[min(72vw,520px)] rounded-full bg-sw-green/12 blur-3xl max-lg:top-6 max-lg:h-[min(56vw,380px)] max-lg:w-[min(56vw,380px)]" />
      <div className="pointer-events-none absolute -left-32 bottom-0 h-80 w-80 rounded-full bg-sw-brown/10 blur-3xl max-lg:h-52 max-lg:w-52" />

      <div className="relative mx-auto grid max-w-7xl gap-6 px-5 pb-14 pt-5 sm:gap-10 sm:px-8 sm:pb-20 sm:pt-14 lg:grid-cols-12 lg:gap-6 lg:px-10 lg:pb-24 lg:pt-16">
        <div className="order-2 flex flex-col justify-start gap-5 sm:gap-8 lg:order-1 lg:col-span-6 lg:row-span-2 lg:justify-end lg:gap-8">
          <div className="hero-logo-wrap group relative max-w-xl">
            <div className="absolute -inset-3 -z-10 rounded-sm bg-gradient-to-br from-sw-cream via-transparent to-sw-green/10 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
            <FallbackImage
              candidates={LOGO_SRC_CANDIDATES}
              alt={`${SITE.name} logo`}
              width={560}
              height={180}
              sizes="(max-width: 1024px) 90vw, 480px"
              className="h-auto max-h-[5.25rem] w-full object-contain object-left sm:max-h-none"
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
          </div>
        </div>

        <div className="relative order-1 lg:order-2 lg:col-span-6 lg:col-start-7 lg:mt-8">
          <div
            className="hero-photo-ring relative aspect-[4/5] w-full max-lg:mx-auto max-lg:max-w-md lg:max-w-none lg:translate-x-4 lg:translate-y-2"
            style={{ clipPath: "polygon(8% 0, 100% 0, 100% 92%, 0 100%, 0 12%)" }}
          >
            <div className="absolute -right-6 -top-6 -z-10 h-[78%] w-[88%] rounded-sm bg-sw-green shadow-[0_24px_60px_-20px_rgba(20,20,20,0.45)]" />
            <div className="photo-frame photo-frame--lift relative h-full w-full overflow-hidden bg-sw-ink/5">
              <FallbackImage
                candidates={SISTERS_SRC_CANDIDATES}
                alt="Photography from Stillwell Goods"
                fill
                sizes="(max-width: 1024px) 90vw, 45vw"
                className="object-cover transition duration-700 ease-out hover:scale-[1.03]"
              />
            </div>
          </div>
          <p className="mt-4 max-w-xs text-[10px] font-medium uppercase tracking-[0.28em] text-sw-ink/45 lg:ml-2">
            {SITE.location}
          </p>
        </div>
      </div>
    </section>
  );
}
