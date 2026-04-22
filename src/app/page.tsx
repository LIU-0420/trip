import Image from "next/image";
import Link from "next/link";

import { SectionTitle } from "@/components/section-title";
import {
  attractions,
  foodSpots,
  itineraries,
  siteStats,
  stayAreas,
} from "@/data/travel-data";
import { withBasePath } from "@/lib/base-path";

const featuredAttractions = attractions.slice(0, 3);

export default function HomePage() {
  return (
    <div className="space-y-20 pb-10">
      <section className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="glass-panel soft-shadow overflow-hidden rounded-[38px]">
          <div className="relative h-full bg-[linear-gradient(135deg,#143556_0%,#1c6ca1_42%,#f2a068_100%)] px-7 py-8 text-white sm:px-10 sm:py-12">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.26),transparent_30%),radial-gradient(circle_at_bottom_left,rgba(255,217,181,0.26),transparent_24%)]" />
            <div className="relative space-y-8">
              <div className="space-y-4">
                <p className="text-[0.72rem] uppercase tracking-[0.34em] text-white/75">
                  Xiamen City Guide
                </p>
                <h1 className="max-w-3xl font-[family-name:var(--font-display)] text-5xl leading-tight text-balance sm:text-6xl">
                  把厦门的海风、街巷和热门景点，一次讲明白
                </h1>
                <p className="max-w-2xl text-base leading-8 text-white/86 sm:text-lg">
                  从鼓浪屿到环岛路，从沙坡尾到中山路，这里提供适合第一次来厦门游客的景点攻略、路线建议和吃住参考。
                </p>
              </div>

              <div className="flex flex-wrap gap-3">
                <Link
                  href="/attractions"
                  className="rounded-full bg-white px-6 py-3 text-sm font-medium text-slate-900 transition hover:bg-[#fff0d8]"
                >
                  先看热门景点
                </Link>
                <Link
                  href="/itineraries"
                  className="rounded-full border border-white/35 px-6 py-3 text-sm font-medium text-white transition hover:bg-white/10"
                >
                  查看现成路线
                </Link>
              </div>

              <div className="grid gap-4 sm:grid-cols-3">
                {siteStats.map((item) => (
                  <div
                    key={item.label}
                    className="rounded-[24px] border border-white/20 bg-white/10 p-4 backdrop-blur-sm"
                  >
                    <p className="text-3xl font-semibold">{item.value}</p>
                    <p className="mt-2 text-sm text-white/74">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="grid gap-6">
          <div className="glass-panel soft-shadow rounded-[32px] p-7">
            <p className="text-[0.72rem] uppercase tracking-[0.28em] text-[#bc7b4d]">
              快速判断
            </p>
            <h2 className="mt-4 font-[family-name:var(--font-display)] text-3xl text-slate-900">
              第一次来厦门，该怎么安排最稳
            </h2>
            <ul className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <li className="rounded-2xl bg-[#fff4e9] px-4 py-4">
                第一天优先鼓浪屿，中午前上岛更舒服。
              </li>
              <li className="rounded-2xl bg-[#eef8fb] px-4 py-4">
                南普陀、沙坡尾、环岛路很适合放在同一天。
              </li>
              <li className="rounded-2xl bg-[#fff1de] px-4 py-4">
                晚上想要烟火气，中山路和曾厝垵都不会错。
              </li>
            </ul>
          </div>

          <div className="rounded-[32px] border border-[#f0d2b5] bg-[#fff3e8] p-7 shadow-[0_18px_50px_rgba(181,102,41,0.1)]">
            <p className="text-sm font-medium text-[#9d5d2a]">内容重点</p>
            <p className="mt-4 text-2xl font-[family-name:var(--font-display)] text-slate-900">
              这一版先把“热门景点详细攻略页”做扎实
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">
              页面内容围绕景点简介、交通方式、游玩顺序、拍照点、避坑提醒和周边吃住建议展开，方便直接拿来规划行程。
            </p>
          </div>
        </div>
      </section>

      <section className="space-y-8">
        <SectionTitle
          eyebrow="Featured Places"
          title="热门景点先看这几个"
          description="第一版先挑最适合第一次来厦门的景点做重点展示，既要有城市代表性，也要方便串成顺路路线。"
        />
        <div className="grid gap-6 lg:grid-cols-3">
          {featuredAttractions.map((item) => (
            <article
              key={item.slug}
              className="overflow-hidden rounded-[30px] border border-white/75 bg-white/75 shadow-[0_24px_80px_rgba(30,67,91,0.08)]"
            >
              <div className="relative h-56">
                <Image
                  src={withBasePath(item.image)}
                  alt={item.imageAlt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,23,36,0.85)] via-[rgba(14,23,36,0.24)] to-transparent p-6" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/80">
                    <span>{item.region}</span>
                    <span>{item.category}</span>
                  </div>
                  <div>
                    <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-white">
                      {item.name}
                    </h3>
                    <p className="mt-2 text-sm text-white/82">{item.tagline}</p>
                  </div>
                </div>
              </div>
              <div className="space-y-5 p-6">
                <p className="text-sm leading-7 text-slate-600">{item.summary}</p>
                <div className="grid gap-3 text-sm text-slate-600">
                  <div className="rounded-2xl bg-[#f8f2eb] px-4 py-3">
                    推荐时长：{item.recommendedDuration}
                  </div>
                  <div className="rounded-2xl bg-[#eef7fb] px-4 py-3">
                    最佳季节：{item.bestSeason}
                  </div>
                </div>
                <Link
                  href={`/attractions/${item.slug}`}
                  className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm text-white transition hover:bg-slate-700"
                >
                  打开详细攻略
                </Link>
                <p className="text-xs leading-6 text-slate-500">
                  图片：{item.imageCreditName} / {item.imageLicense}
                </p>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr]">
        <div className="space-y-8 rounded-[34px] border border-white/70 bg-white/75 p-7 shadow-[0_24px_80px_rgba(40,64,88,0.08)] sm:p-8">
          <SectionTitle
            eyebrow="Smart Routes"
            title="现成路线，适合直接抄作业"
            description="如果你不想自己拼路线，第一版先提供几条适合第一次来厦门的成熟玩法。"
          />
          <div className="space-y-4">
            {itineraries.map((item) => (
              <article
                key={item.id}
                className="rounded-[26px] border border-[#efe3d2] bg-[#fffaf4] p-5"
              >
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h3 className="font-[family-name:var(--font-display)] text-2xl text-slate-900">
                    {item.title}
                  </h3>
                  <span className="rounded-full bg-[#e7f4fa] px-3 py-1 text-xs text-[#236b96]">
                    {item.duration}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-7 text-slate-600">
                  {item.summary}
                </p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {item.highlights.map((highlight) => (
                    <span
                      key={highlight}
                      className="rounded-full bg-[#fff0dd] px-3 py-1 text-xs text-[#9d5f32]"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className="space-y-8">
          <div className="rounded-[34px] border border-white/70 bg-[linear-gradient(180deg,#fff4e8_0%,#fffdf8_100%)] p-7 shadow-[0_22px_70px_rgba(160,102,51,0.1)] sm:p-8">
            <SectionTitle
              eyebrow="Eat Well"
              title="先知道去哪一带吃饭"
              description="厦门的吃不在于追满榜单，而在于先找到适合自己节奏的区域。"
            />
            <div className="mt-8 space-y-4">
              {foodSpots.map((item) => (
                <div
                  key={item.id}
                  className="rounded-[24px] border border-[#f4dfc7] bg-white/80 p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {item.area}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.22em] text-[#b17046]">
                      Food
                    </span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-slate-700">
                    {item.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.summary}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="rounded-[34px] border border-white/70 bg-[linear-gradient(180deg,#edf7fb_0%,#ffffff_100%)] p-7 shadow-[0_22px_70px_rgba(31,99,145,0.1)] sm:p-8">
            <SectionTitle
              eyebrow="Stay Better"
              title="住在哪个区域更顺"
              description="住宿决策的核心不是贵不贵，而是第二天出门顺不顺。"
            />
            <div className="mt-8 grid gap-4">
              {stayAreas.slice(0, 2).map((item) => (
                <div
                  key={item.id}
                  className="rounded-[24px] border border-[#d8ebf5] bg-white/85 p-5"
                >
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-xl font-semibold text-slate-900">
                      {item.area}
                    </h3>
                    <span className="text-xs uppercase tracking-[0.22em] text-[#31759c]">
                      Stay
                    </span>
                  </div>
                  <p className="mt-2 text-sm text-slate-700">{item.vibe}</p>
                  <p className="mt-3 text-sm leading-7 text-slate-600">
                    {item.suitableFor}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
