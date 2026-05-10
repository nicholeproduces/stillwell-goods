import { SITE } from "@/lib/site";

export function BandStrip() {
  const bits = [
    SITE.location.split(",")[0],
    "Furniture",
    "Art",
    "Props",
    "Pop-ups",
    "Community",
  ] as const;

  return (
    <div className="border-y border-sw-ink/10 bg-sw-ink/[0.04] py-3">
      <div className="mx-auto flex max-w-7xl flex-wrap items-center justify-center gap-x-5 gap-y-2 px-5 text-[10px] font-semibold uppercase tracking-[0.32em] text-sw-ink/55 sm:px-8 lg:px-10">
        {bits.map((b, i) => (
          <span key={b} className="flex items-center gap-5">
            {i > 0 ? (
              <span className="text-sw-brass/90" aria-hidden>
                ·
              </span>
            ) : null}
            <span>{b}</span>
          </span>
        ))}
      </div>
    </div>
  );
}
