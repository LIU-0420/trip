import { SectionTitle } from "@/components/section-title";
import { itineraries } from "@/data/travel-data";

export default function ItinerariesPage() {
  return (
    <div className="space-y-10 pb-10">
      <section className="rounded-[38px] border border-white/70 bg-white/75 px-6 py-10 shadow-[0_24px_80px_rgba(42,58,85,0.08)] sm:px-8">
        <SectionTitle
          eyebrow="Itinerary Plans"
          title="现成路线，适合第一次来厦门直接参考"
          description="第一版先提供 1 日、2 日、3 日三种成熟路线。核心目标是减少路线拼装成本，让用户能快速知道每天怎么走。"
        />
      </section>

      <div className="grid gap-6">
        {itineraries.map((itinerary) => (
          <article
            key={itinerary.id}
            className="rounded-[32px] border border-white/75 bg-white/80 p-7 shadow-[0_24px_80px_rgba(44,63,84,0.08)]"
          >
            <div className="flex flex-wrap items-start justify-between gap-4">
              <div className="space-y-3">
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[#b86f44]">
                  {itinerary.audience}
                </p>
                <h2 className="font-[family-name:var(--font-display)] text-4xl text-slate-900">
                  {itinerary.title}
                </h2>
                <p className="max-w-3xl text-sm leading-7 text-slate-600">
                  {itinerary.summary}
                </p>
              </div>
              <span className="rounded-full bg-[#eef7fb] px-4 py-2 text-sm text-[#2f789f]">
                {itinerary.duration}
              </span>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {itinerary.highlights.map((item) => (
                <span
                  key={item}
                  className="rounded-full bg-[#fff2e2] px-3 py-1 text-xs text-[#9d5f32]"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="mt-8 grid gap-4 lg:grid-cols-3">
              {itinerary.dailyPlan.map((dayPlan) => (
                <div
                  key={dayPlan.day}
                  className="rounded-[26px] border border-[#eee0cf] bg-[#fffaf4] p-5"
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                    {dayPlan.day}
                  </p>
                  <ul className="mt-4 space-y-3 text-sm leading-7 text-slate-600">
                    {dayPlan.stops.map((stop) => (
                      <li key={stop} className="rounded-2xl bg-white px-4 py-3">
                        {stop}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
