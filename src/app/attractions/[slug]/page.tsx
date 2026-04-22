import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import {
  attractions,
  getAttractionBySlug,
  getRelatedAttractions,
} from "@/data/travel-data";

type AttractionDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return attractions.map((item) => ({ slug: item.slug }));
}

export async function generateMetadata({
  params,
}: AttractionDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const attraction = getAttractionBySlug(slug);

  if (!attraction) {
    return {
      title: "景点未找到 | 厦门旅行攻略",
    };
  }

  return {
    title: `${attraction.name}攻略 | 厦门旅行攻略`,
    description: attraction.summary,
  };
}

export default async function AttractionDetailPage({
  params,
}: AttractionDetailPageProps) {
  const { slug } = await params;
  const attraction = getAttractionBySlug(slug);

  if (!attraction) {
    notFound();
  }

  const relatedAttractions = getRelatedAttractions(attraction.relatedAttractions);

  return (
    <div className="space-y-10 pb-10">
      <section
        className={`overflow-hidden rounded-[40px] border border-white/70 bg-gradient-to-br ${attraction.heroTone} px-6 py-10 shadow-[0_28px_90px_rgba(35,66,92,0.12)] sm:px-10 sm:py-12`}
      >
        <div className="grid gap-8 xl:grid-cols-[1.05fr_0.95fr] xl:items-end">
          <div className="max-w-4xl space-y-6">
          <div className="flex flex-wrap items-center gap-3 text-sm text-slate-700">
            <Link href="/" className="hover:text-slate-950">
              首页
            </Link>
            <span>/</span>
            <Link href="/attractions" className="hover:text-slate-950">
              热门景点
            </Link>
            <span>/</span>
            <span className="text-slate-900">{attraction.name}</span>
          </div>

          <div className="space-y-4">
            <p className="text-[0.75rem] uppercase tracking-[0.3em] text-slate-700">
              {attraction.region} / {attraction.category}
            </p>
            <h1 className="font-[family-name:var(--font-display)] text-5xl text-slate-950 sm:text-6xl">
              {attraction.name}
            </h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-700">
              {attraction.tagline}
            </p>
          </div>

          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-[24px] border border-white/60 bg-white/55 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                推荐时长
              </p>
              <p className="mt-2 text-xl font-semibold text-slate-900">
                {attraction.recommendedDuration}
              </p>
            </div>
            <div className="rounded-[24px] border border-white/60 bg-white/55 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                最佳季节
              </p>
              <p className="mt-2 text-xl font-semibold text-slate-900">
                {attraction.bestSeason}
              </p>
            </div>
            <div className="rounded-[24px] border border-white/60 bg-white/55 p-5">
              <p className="text-xs uppercase tracking-[0.24em] text-slate-500">
                交通方式
              </p>
              <p className="mt-2 text-base leading-7 text-slate-900">
                {attraction.transportation}
              </p>
              </div>
            </div>
          </div>

          <div className="overflow-hidden rounded-[32px] border border-white/55 bg-white/20 shadow-[0_24px_70px_rgba(24,48,70,0.18)]">
            <div className="relative aspect-[4/3]">
              <Image
                src={attraction.image}
                alt={attraction.imageAlt}
                fill
                priority
                sizes="(max-width: 1280px) 100vw, 42vw"
                className="object-cover"
              />
            </div>
            <div className="bg-[rgba(255,255,255,0.78)] px-5 py-4 text-xs leading-6 text-slate-600">
              图片来源：
              <a
                href={attraction.imageCommonsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-medium text-slate-900 underline-offset-4 hover:underline"
              >
                {attraction.imageCreditName}
              </a>
              ，许可：{attraction.imageLicense}
            </div>
          </div>
        </div>
      </section>

      <section className="grid gap-8 xl:grid-cols-[1.1fr_0.9fr]">
        <div className="space-y-8">
          <article className="rounded-[32px] border border-white/75 bg-white/80 p-7 shadow-[0_24px_80px_rgba(44,63,84,0.08)]">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-slate-900">
              景点简介
            </h2>
            <p className="mt-5 text-base leading-8 text-slate-600">
              {attraction.summary}
            </p>
            <ul className="mt-6 grid gap-3">
              {attraction.highlights.map((item) => (
                <li
                  key={item}
                  className="rounded-2xl bg-[#fff7ef] px-4 py-4 text-sm leading-7 text-slate-600"
                >
                  {item}
                </li>
              ))}
            </ul>
          </article>

          <article className="rounded-[32px] border border-white/75 bg-white/80 p-7 shadow-[0_24px_80px_rgba(44,63,84,0.08)]">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-slate-900">
              建议游玩顺序
            </h2>
            <ol className="mt-6 space-y-4">
              {attraction.routeGuide.map((step, index) => (
                <li
                  key={step}
                  className="grid gap-4 rounded-[26px] border border-[#efe2cf] bg-[#fffaf4] p-5 sm:grid-cols-[auto_1fr]"
                >
                  <span className="flex h-10 w-10 items-center justify-center rounded-full bg-slate-900 text-sm text-white">
                    {index + 1}
                  </span>
                  <p className="text-sm leading-7 text-slate-600">{step}</p>
                </li>
              ))}
            </ol>
          </article>

          <article className="grid gap-8 lg:grid-cols-2">
            <div className="rounded-[32px] border border-white/75 bg-white/80 p-7 shadow-[0_24px_80px_rgba(44,63,84,0.08)]">
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-slate-900">
                拍照点位
              </h2>
              <ul className="mt-6 space-y-3">
                {attraction.photoSpots.map((spot) => (
                  <li
                    key={spot}
                    className="rounded-2xl bg-[#eef7fb] px-4 py-4 text-sm text-slate-600"
                  >
                    {spot}
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-[32px] border border-white/75 bg-white/80 p-7 shadow-[0_24px_80px_rgba(44,63,84,0.08)]">
              <h2 className="font-[family-name:var(--font-display)] text-3xl text-slate-900">
                注意事项
              </h2>
              <ul className="mt-6 space-y-3">
                {attraction.tips.map((tip) => (
                  <li
                    key={tip}
                    className="rounded-2xl bg-[#fff2e2] px-4 py-4 text-sm text-slate-600"
                  >
                    {tip}
                  </li>
                ))}
              </ul>
            </div>
          </article>

          <article className="rounded-[32px] border border-white/75 bg-white/80 p-7 shadow-[0_24px_80px_rgba(44,63,84,0.08)]">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-slate-900">
              避坑提醒
            </h2>
            <div className="mt-6 grid gap-4">
              {attraction.avoidPitfalls.map((item) => (
                <div
                  key={item}
                  className="rounded-[24px] border border-[#f4d2bd] bg-[#fff5ee] px-5 py-4 text-sm leading-7 text-slate-600"
                >
                  {item}
                </div>
              ))}
            </div>
          </article>
        </div>

        <div className="space-y-8">
          <aside className="rounded-[32px] border border-white/75 bg-white/80 p-7 shadow-[0_24px_80px_rgba(44,63,84,0.08)]">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-slate-900">
              实用信息
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-600">
              <div className="rounded-2xl bg-[#f8f4ee] px-4 py-4">
                <p className="font-medium text-slate-900">开放时间</p>
                <p className="mt-2">{attraction.openTime}</p>
              </div>
              <div className="rounded-2xl bg-[#f8f4ee] px-4 py-4">
                <p className="font-medium text-slate-900">门票信息</p>
                <p className="mt-2">{attraction.ticketInfo}</p>
              </div>
              <div className="rounded-2xl bg-[#f8f4ee] px-4 py-4">
                <p className="font-medium text-slate-900">地址</p>
                <p className="mt-2">{attraction.address}</p>
              </div>
              <div className="rounded-2xl bg-[#eef7fb] px-4 py-4">
                <p className="font-medium text-slate-900">坐标参考</p>
                <p className="mt-2">{attraction.coordinates}</p>
              </div>
            </div>
          </aside>

          <aside className="rounded-[32px] border border-white/75 bg-white/80 p-7 shadow-[0_24px_80px_rgba(44,63,84,0.08)]">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-slate-900">
              周边吃住
            </h2>
            <div className="mt-6 space-y-6">
              <div>
                <p className="text-sm font-medium text-slate-900">附近吃什么</p>
                <ul className="mt-3 space-y-3">
                  {attraction.foodRecommendations.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl bg-[#fff3e6] px-4 py-3 text-sm text-slate-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <p className="text-sm font-medium text-slate-900">住哪里更顺</p>
                <ul className="mt-3 space-y-3">
                  {attraction.hotelRecommendations.map((item) => (
                    <li
                      key={item}
                      className="rounded-2xl bg-[#eef7fb] px-4 py-3 text-sm text-slate-600"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </aside>

          <aside className="rounded-[32px] border border-white/75 bg-white/80 p-7 shadow-[0_24px_80px_rgba(44,63,84,0.08)]">
            <h2 className="font-[family-name:var(--font-display)] text-3xl text-slate-900">
              相关景点
            </h2>
            <div className="mt-6 grid gap-4">
              {relatedAttractions.map((item) => (
                <Link
                  key={item.slug}
                  href={`/attractions/${item.slug}`}
                  className="rounded-[24px] border border-[#e8ddcf] bg-[#fffaf4] px-5 py-4 transition hover:border-[#d79b67] hover:bg-[#fff4e5]"
                >
                  <p className="text-sm uppercase tracking-[0.24em] text-slate-500">
                    {item.category}
                  </p>
                  <p className="mt-2 text-xl font-semibold text-slate-900">
                    {item.name}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.summary}
                  </p>
                </Link>
              ))}
            </div>
          </aside>
        </div>
      </section>
    </div>
  );
}
