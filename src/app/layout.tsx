import type { Metadata } from "next";
import "./globals.css";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "厦门旅行攻略",
  description: "一个聚焦厦门热门景点、行程、美食与住宿建议的旅游攻略网站。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN" className="h-full antialiased">
      <body className="min-h-full">
        <div className="page-shell">
          <SiteHeader />
          <main className="mx-auto w-full max-w-7xl flex-1 px-5 pb-10 pt-8 sm:px-8">
            {children}
          </main>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
