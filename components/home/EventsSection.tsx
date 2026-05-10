import { Reveal } from "@/components/home/Reveal";

const bullets = [
  "Rotating vendors & pop-ups",
  "DJs, listening nights, open studios",
  "Artist features & small openings",
  "Neighborhood collaborations",
] as const;

export function EventsSection() {
  return (
    <section
      id="events"
      className="relative overflow-hidden bg-sw-green text-sw-paper"
    >
      <div className="pointer-events-none absolute -left-40 top-1/2 h-[120%] w-[55%] -translate-y-1/2 bg-[radial-gradient(ellipse_at_center,rgba(20,20,20,0.35),transparent_70%)]" />
      <div className="relative mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-28 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12 lg:gap-10">
          <Reveal className="lg:col-span-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-sw-brass">
              Events / Pop-Ups
            </p>
            <h2 className="mt-4 max-w-2xl text-pretty text-3xl font-semibold leading-tight tracking-tight sm:text-4xl lg:text-[2.35rem] lg:leading-[1.12]">
              The calendar stays loose on purpose—room for last-minute magic.
            </h2>
            <p className="mt-6 max-w-prose text-pretty text-sm leading-relaxed text-sw-paper/80 sm:text-base">
              Stillwell hosts rotating vendors, DJs, artists, and community nights
              that treat the block as the guest list. If you are a small brand, a
              maker, or a neighbor with a half-formed idea, say hello.
            </p>
          </Reveal>

          <Reveal className="lg:col-span-5">
            <ul className="space-y-5 border-l border-sw-paper/25 pl-6">
              {bullets.map((line) => (
                <li
                  key={line}
                  className="text-sm font-medium leading-snug tracking-wide text-sw-paper/95 transition duration-300 hover:translate-x-1 hover:text-sw-cream"
                >
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-10 rounded-sm border border-sw-paper/20 bg-sw-ink/20 p-6 backdrop-blur-sm">
              <p className="text-[11px] font-medium uppercase tracking-[0.28em] text-sw-brass">
                Host with us
              </p>
              <p className="mt-3 text-sm leading-relaxed text-sw-paper/85">
                Pop-ups, workshops, fundraisers, and private gatherings—tell us
                what you are dreaming and we will figure out fit.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
