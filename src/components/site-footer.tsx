const quickTips = [
  "鼓浪屿建议早上上岛",
  "环岛路更适合傍晚安排",
  "中山路适合夜游和集中觅食",
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-[#e7d8c2] bg-[#f8ecdf]">
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-8 lg:grid-cols-[1.3fr_1fr]">
        <div className="space-y-4">
          <p className="text-[0.7rem] uppercase tracking-[0.28em] text-[#9b6d46]">
            Xiamen Travel Notes
          </p>
          <h2 className="font-[family-name:var(--font-display)] text-3xl text-slate-900">
            把厦门最值得去的地方，讲得更清楚一点
          </h2>
          <p className="max-w-2xl text-sm leading-7 text-slate-600">
            这是一个以内容攻略为核心的厦门旅游网站第一版。重点不是功能堆砌，而是把热门景点、路线和吃住建议讲清楚。
          </p>
        </div>

        <div className="rounded-[28px] border border-white/60 bg-white/70 p-6 shadow-[0_20px_60px_rgba(122,78,35,0.08)]">
          <p className="text-sm font-semibold text-slate-900">快速提醒</p>
          <ul className="mt-4 space-y-3 text-sm text-slate-600">
            {quickTips.map((tip) => (
              <li key={tip} className="rounded-2xl bg-[#fff6ec] px-4 py-3">
                {tip}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
