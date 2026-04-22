import { SectionTitle } from "@/components/section-title";
import { stayAreas } from "@/data/travel-data";

export default function StayPage() {
  return (
    <div className="space-y-10 pb-10">
      <section className="rounded-[38px] border border-white/70 bg-white/75 px-6 py-10 shadow-[0_24px_80px_rgba(42,58,85,0.08)] sm:px-8">
        <SectionTitle
          eyebrow="Where To Stay"
          title="住宿区域先选对，第二天出门更轻松"
          description="第一版不做酒店列表，而是先帮助用户理解各区域的气质、适合人群和出行效率。"
        />
      </section>

      <div className="grid gap-6 lg:grid-cols-2">
        {stayAreas.map((area) => (
          <article
            key={area.id}
            className="rounded-[32px] border border-white/75 bg-white/80 p-7 shadow-[0_24px_80px_rgba(44,63,84,0.08)]"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[#2f789f]">
                  {area.vibe}
                </p>
                <h2 className="mt-3 font-[family-name:var(--font-display)] text-4xl text-slate-900">
                  {area.area}
                </h2>
              </div>
              <div className="rounded-full bg-[#eef7fb] px-4 py-2 text-sm text-[#2f789f]">
                住宿建议
              </div>
            </div>
            <p className="mt-5 text-sm leading-7 text-slate-600">
              {area.suitableFor}
            </p>
            <ul className="mt-6 space-y-3">
              {area.reasons.map((reason) => (
                <li
                  key={reason}
                  className="rounded-2xl bg-[#fff8f0] px-4 py-4 text-sm text-slate-600"
                >
                  {reason}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </div>
  );
}
