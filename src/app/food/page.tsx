import { SectionTitle } from "@/components/section-title";
import { foodSpots } from "@/data/travel-data";

export default function FoodPage() {
  return (
    <div className="space-y-10 pb-10">
      <section className="rounded-[38px] border border-white/70 bg-white/75 px-6 py-10 shadow-[0_24px_80px_rgba(42,58,85,0.08)] sm:px-8">
        <SectionTitle
          eyebrow="Taste Xiamen"
          title="吃在厦门，先找对区域"
          description="厦门吃喝选择很多，第一版先不追求海量店铺，而是先告诉用户在哪一带更适合解决什么类型的吃饭需求。"
        />
      </section>

      <div className="grid gap-6 lg:grid-cols-3">
        {foodSpots.map((item) => (
          <article
            key={item.id}
            className="rounded-[32px] border border-white/75 bg-white/80 p-7 shadow-[0_24px_80px_rgba(44,63,84,0.08)]"
          >
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[#b86f44]">
              {item.area}
            </p>
            <h2 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-slate-900">
              {item.title}
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">{item.summary}</p>
            <div className="mt-6 flex flex-wrap gap-2">
              {item.mustTry.map((food) => (
                <span
                  key={food}
                  className="rounded-full bg-[#fff2e2] px-3 py-1 text-xs text-[#9d5f32]"
                >
                  {food}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
