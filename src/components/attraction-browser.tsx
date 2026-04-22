"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

import type { Attraction } from "@/data/travel-data";

type AttractionBrowserProps = {
  attractions: Attraction[];
};

export function AttractionBrowser({ attractions }: AttractionBrowserProps) {
  const [keyword, setKeyword] = useState("");
  const [activeCategory, setActiveCategory] = useState("全部");

  const categories = ["全部", ...new Set(attractions.map((item) => item.category))];
  const filteredAttractions = attractions.filter((item) => {
    const matchCategory =
      activeCategory === "全部" || item.category === activeCategory;
    const matchKeyword =
      keyword.trim() === "" ||
      item.name.includes(keyword.trim()) ||
      item.summary.includes(keyword.trim()) ||
      item.tags.some((tag) => tag.includes(keyword.trim()));

    return matchCategory && matchKeyword;
  });

  return (
    <div className="space-y-8">
      <div className="grid gap-4 rounded-[28px] border border-white/60 bg-white/75 p-5 shadow-[0_24px_80px_rgba(22,52,84,0.08)] lg:grid-cols-[1.2fr_1fr]">
        <label className="space-y-2">
          <span className="text-sm font-medium text-slate-700">搜索景点</span>
          <input
            value={keyword}
            onChange={(event) => setKeyword(event.target.value)}
            placeholder="比如：鼓浪屿、看海、拍照"
            className="w-full rounded-2xl border border-[#e5d1b4] bg-[#fffaf3] px-4 py-3 text-sm text-slate-900 outline-none transition focus:border-[#d98248] focus:bg-white"
          />
        </label>

        <div className="space-y-2">
          <span className="text-sm font-medium text-slate-700">按类型筛选</span>
          <div className="flex flex-wrap gap-2">
            {categories.map((category) => {
              const isActive = category === activeCategory;
              return (
                <button
                  key={category}
                  type="button"
                  onClick={() => setActiveCategory(category)}
                  className={`rounded-full px-4 py-2 text-sm transition ${
                    isActive
                      ? "bg-slate-900 text-white"
                      : "bg-[#fff3e5] text-slate-700 hover:bg-[#ffe2bf]"
                  }`}
                >
                  {category}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {filteredAttractions.map((item) => (
          <article
            key={item.slug}
            className="group overflow-hidden rounded-[30px] border border-white/70 bg-white/75 shadow-[0_24px_80px_rgba(40,64,88,0.1)]"
          >
            <div className="relative h-52 overflow-hidden">
              <Image
                src={item.image}
                alt={item.imageAlt}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                className="object-cover transition duration-500 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[rgba(14,23,36,0.82)] via-[rgba(14,23,36,0.2)] to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 text-white">
                <div className="flex items-center justify-between text-xs uppercase tracking-[0.22em] text-white/78">
                  <span>{item.region}</span>
                  <span>{item.category}</span>
                </div>
                <h3 className="mt-3 font-[family-name:var(--font-display)] text-3xl text-white">
                  {item.name}
                </h3>
                <p className="mt-2 max-w-xs text-sm text-white/84">{item.tagline}</p>
              </div>
            </div>

            <div className="space-y-5 p-6">
              <p className="text-sm leading-7 text-slate-600">{item.summary}</p>
              <div className="flex flex-wrap gap-2">
                {item.tags.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full bg-[#fff2e2] px-3 py-1 text-xs text-[#9b5d32]"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="grid gap-3 text-sm text-slate-600 sm:grid-cols-2">
                <div className="rounded-2xl bg-[#f8f4ee] px-4 py-3">
                  推荐时长：{item.recommendedDuration}
                </div>
                <div className="rounded-2xl bg-[#eff8fb] px-4 py-3">
                  最佳季节：{item.bestSeason}
                </div>
              </div>
              <Link
                href={`/attractions/${item.slug}`}
                className="inline-flex rounded-full bg-slate-900 px-5 py-3 text-sm text-white transition hover:bg-slate-700"
              >
                查看详细攻略
              </Link>
              <p className="text-xs leading-6 text-slate-500">
                图片：{item.imageCreditName} / {item.imageLicense}
              </p>
            </div>
          </article>
        ))}
      </div>

      {filteredAttractions.length === 0 ? (
        <div className="rounded-[26px] border border-dashed border-[#d6b38e] bg-white/70 px-6 py-12 text-center text-slate-600">
          没有找到匹配景点，可以换一个关键词试试。
        </div>
      ) : null}
    </div>
  );
}
