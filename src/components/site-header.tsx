import Link from "next/link";

const navItems = [
  { href: "/", label: "首页" },
  { href: "/attractions", label: "热门景点" },
  { href: "/itineraries", label: "行程推荐" },
  { href: "/food", label: "美食推荐" },
  { href: "/stay", label: "住宿建议" },
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-white/45 bg-[rgba(255,248,240,0.82)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-5 py-4 sm:px-8">
        <Link href="/" className="flex items-center gap-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[linear-gradient(135deg,#ff9c6f,#1d8ec8)] text-sm font-semibold text-white shadow-[0_10px_30px_rgba(29,142,200,0.25)]">
            XM
          </div>
          <div>
            <p className="text-[0.68rem] uppercase tracking-[0.32em] text-slate-500">
              Xiamen Guide
            </p>
            <p className="font-[family-name:var(--font-display)] text-xl text-slate-900">
              厦门旅行攻略
            </p>
          </div>
        </Link>

        <nav className="hidden gap-5 text-sm text-slate-700 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="rounded-full px-3 py-2 transition hover:bg-white hover:text-slate-950"
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
