import { Reveal } from "@/components/home/Reveal";

const pillars = [
  {
    title: "Furniture",
    body: "Vintage and secondhand pieces with character—tables, seating, storage, and the kind of silhouettes that read on camera and at home.",
  },
  {
    title: "Props & studio",
    body: "Objects, set dressing, and oddities for shoots, stages, and creative tests. Built for working artists and production schedules.",
  },
  {
    title: "Art & objects",
    body: "Wall work, sculpture, prints, and small editions from neighbors and friends. A rotating lens on what LIC is making right now.",
  },
] as const;

export function ShopSection() {
  return (
    <section
      id="shop"
      className="border-b border-sw-ink/10 bg-sw-cream py-20 sm:py-28"
    >
      <div className="mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <Reveal>
          <div className="grid gap-12 lg:grid-cols-12 lg:items-start">
            <div className="lg:col-span-5">
              <p className="text-[10px] font-semibold uppercase tracking-[0.35em] text-sw-green">
                Shop / Source
              </p>
              <h2 className="mt-4 max-w-md text-pretty text-3xl font-semibold leading-tight tracking-tight text-sw-ink sm:text-4xl">
                Furnish the set. Fill the room. Feed the idea.
              </h2>
              <p className="mt-6 max-w-prose text-pretty text-sm leading-relaxed text-sw-ink/70 sm:text-base">
                Browse in person—with music on when the day allows—pull for a
                project, or collaborate on sourcing. Inventory turns: what you
                see this month may be gone the next, which is half the fun.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2 lg:col-span-7">
              <div className="shop-card sm:col-span-2 group relative overflow-hidden rounded-sm border border-sw-ink/10 bg-sw-paper p-8 shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-lg">
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(184,154,98,0.12),transparent_55%)] opacity-0 transition duration-500 group-hover:opacity-100" />
                <p className="relative max-w-lg text-lg font-medium leading-snug text-sw-ink">
                  A working retail floor: touch, measure, listen to a record,
                  meet someone making something down the block.
                </p>
                <div className="relative mt-10 flex flex-wrap gap-3">
                  {["In-store shopping", "Project pulls", "Local pickup"].map(
                    (t) => (
                      <span
                        key={t}
                        className="border border-sw-ink/15 bg-sw-cream/80 px-3 py-1 text-[10px] font-medium uppercase tracking-[0.2em] text-sw-ink/80"
                      >
                        {t}
                      </span>
                    ),
                  )}
                </div>
              </div>

              {pillars.map((p, i) => (
                <article
                  key={p.title}
                  className={`shop-card group flex flex-col justify-between rounded-sm border border-sw-ink/10 bg-sw-paper/90 p-6 transition duration-500 hover:-translate-y-1 hover:border-sw-green/25 hover:shadow-md sm:p-8 ${
                    i === 2 ? "sm:col-span-2 sm:mx-auto sm:max-w-3xl lg:max-w-none" : ""
                  }`}
                >
                  <div>
                    <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-sw-green">
                      {p.title}
                    </h3>
                    <p className="mt-4 text-sm leading-relaxed text-sw-ink/75">
                      {p.body}
                    </p>
                  </div>
                  <div className="mt-8 h-px w-12 bg-gradient-to-r from-sw-brass to-transparent transition-all duration-500 group-hover:w-full group-hover:max-w-[min(100%,12rem)]" />
                </article>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
