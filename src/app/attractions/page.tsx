import { AttractionBrowser } from "@/components/attraction-browser";
import { SectionTitle } from "@/components/section-title";
import { attractions } from "@/data/travel-data";

export default function AttractionsPage() {
  return (
    <div className="space-y-10 pb-10">
      <section className="rounded-[38px] border border-white/70 bg-white/75 px-6 py-10 shadow-[0_24px_80px_rgba(42,58,85,0.08)] sm:px-8">
        <SectionTitle
          eyebrow="Hot Attractions"
          title="厦门热门景点攻略库"
          description="这里先整理适合第一次来厦门游客的核心景点。可以按景点类型筛选，也可以直接搜索看海、拍照、夜游等关键词。"
        />
      </section>

      <AttractionBrowser attractions={attractions} />
    </div>
  );
}
