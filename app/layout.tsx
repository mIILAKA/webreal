import type { Metadata } from "next";
import Link from "next/link";
import "./globals.css";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://ai-coding-plan-finder.vercel.app";
const siteName = "AI Coding Plan Finder";
const siteDescription = "Claude Code / Codex / Cursor のどれを契約すべきか、月予算と使い方から診断する無料ツールです。";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: siteName,
  title: {
    default: `${siteName} | AIコーディング課金プラン診断`,
    template: `%s | ${siteName}`
  },
  description: siteDescription,
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${siteName} | AIコーディング課金プラン診断`,
    description: siteDescription,
    url: siteUrl,
    siteName,
    locale: "ja_JP",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: `${siteName} | AIコーディング課金プラン診断`,
    description: siteDescription
  },
  verification: {
    google: "VGyBx07OdGTXbiPKFXzTYYXorqLXIM-VDcqPBcbWVc0"
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <header className="site-header">
          <nav className="nav" aria-label="Main navigation">
            <Link className="brand" href="/">
              {siteName}
            </Link>
            <div className="nav-links">
              <Link href="/">診断</Link>
              <Link href="/about">診断ロジック</Link>
              <Link href="/blog">ブログ</Link>
            </div>
          </nav>
        </header>
        <main>{children}</main>
      </body>
    </html>
  );
}
