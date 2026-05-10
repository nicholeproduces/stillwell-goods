import { FallbackImage } from "@/components/home/FallbackImage";
import { Reveal } from "@/components/home/Reveal";
import { SISTERS_SRC_CANDIDATES } from "@/lib/site";

export function FamilySection() {
  return (
    <section
      id="family"
      className="sw-grain border-b border-sw-ink/10 bg-sw-paper py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <div className="grid items-center gap-12 lg:grid-cols-12 lg:gap-8">
          <Reveal className="order-2 lg:order-1 lg:col-span-5">
            <p className="section-eyebrow text-[10px] font-semibold uppercase text-sw-brown">
              The Family
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.02em] text-sw-ink sm:text-4xl">
              Meet The Family
            </h2>
            <p className="mt-6 max-w-prose text-pretty text-sm leading-relaxed text-sw-ink/75 sm:text-base">
              Stillwell Goods was created by sisters Nicole and Jacqueline Real
              as a place where design, creativity, and community could live under
              one roof. Drawing on more than 30 years of combined experience across
              film, television, music, styling, and production, they bring a
              personal and highly curated point of view to Long Island City.
            </p>
            <p className="mt-5 max-w-prose text-pretty text-sm leading-relaxed text-sw-ink/75 sm:text-base">
              More than a store, Stillwell Goods is a space for secondhand
              furniture, art, studio finds, pop-ups, events, and neighborhood
              connection.
            </p>
          </Reveal>

          <Reveal className="order-1 lg:order-2 lg:col-span-7">
            <div className="relative mx-auto max-w-lg lg:mx-0 lg:max-w-none">
              <div className="absolute -left-4 top-10 hidden h-48 w-48 rounded-full border border-sw-brass/35 lg:block" />
              <div className="photo-frame photo-frame--lift relative aspect-[3/4] w-full translate-x-0 overflow-hidden rounded-sm bg-sw-ink/5 lg:-translate-x-6 lg:translate-y-4">
                <FallbackImage
                  candidates={SISTERS_SRC_CANDIDATES}
                  alt="Nicole and Jacqueline Real, founders of Stillwell Goods"
                  fill
                  sizes="(max-width: 1024px) 90vw, 50vw"
                  className="object-cover object-[50%_28%] transition duration-700 ease-out hover:scale-[1.02]"
                />
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
