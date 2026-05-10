import { SITE } from "@/lib/site";

const linkClass = "link-shine-dark text-sw-paper/92";

export function ContactSection() {
  return (
    <section id="contact" className="bg-sw-ink text-sw-paper">
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 sm:py-24 lg:px-10">
        <div className="grid gap-14 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <p className="section-eyebrow text-[10px] font-semibold uppercase text-sw-brass">
              Contact
            </p>
            <h2 className="mt-4 text-3xl font-semibold leading-[1.08] tracking-[-0.02em] sm:text-4xl">
              Say hello before your idea gets too polished.
            </h2>
            <p className="mt-5 max-w-prose text-sm leading-relaxed text-sw-paper/70 sm:text-base">
              Email is best for pop-up proposals, sourcing asks, and anything that
              needs a link. Socials are for day-of updates, new arrivals, and the
              occasional party poster.
            </p>
          </div>

          <div className="flex flex-col gap-10 lg:col-span-6 lg:col-start-7">
            <div>
              <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-sw-paper/45">
                Email
              </p>
              <a
                className={`mt-2 inline-block text-lg font-medium ${linkClass}`}
                href={`mailto:${SITE.email}`}
              >
                {SITE.email}
              </a>
            </div>

            <div className="grid gap-8 sm:grid-cols-2">
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-sw-paper/45">
                  Instagram
                </p>
                <a
                  className={`mt-2 inline-block text-base font-medium ${linkClass}`}
                  href={SITE.instagram.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE.instagram.handle}
                </a>
              </div>
              <div>
                <p className="text-[10px] font-medium uppercase tracking-[0.28em] text-sw-paper/45">
                  Facebook
                </p>
                <a
                  className={`mt-2 inline-block text-base font-medium ${linkClass}`}
                  href={SITE.facebook.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {SITE.facebook.label}
                </a>
              </div>
            </div>
          </div>
        </div>

        <footer className="mt-20 flex flex-col gap-3 border-t border-sw-paper/15 pt-8 text-[10px] uppercase tracking-[0.25em] text-sw-paper/40 sm:flex-row sm:items-center sm:justify-between">
          <span>{SITE.name}</span>
          <span>{SITE.location}</span>
        </footer>
      </div>
    </section>
  );
}
