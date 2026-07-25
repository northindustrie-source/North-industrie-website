"use client";

import Link from "next/link";
import type { ReactNode } from "react";

type PageShellProps = {
  children: ReactNode;
  language: "pl" | "en";
  setLanguage: (language: "pl" | "en") => void;
};

export function PageShell({ children, language, setLanguage }: PageShellProps) {
  const navItems =
    language === "pl"
      ? [
          { href: "/", label: "Strona główna" },
          { href: "/privacy-policy", label: "Polityka prywatności" },
          { href: "/terms", label: "Regulamin" },
          { href: "/contact", label: "Kontakt" },
        ]
      : [
          { href: "/", label: "Home" },
          { href: "/privacy-policy", label: "Privacy Policy" },
          { href: "/terms", label: "Terms" },
          { href: "/contact", label: "Contact" },
        ];

  return (
    <div className="min-h-screen bg-[#020202] text-zinc-100">
      <header className="sticky top-0 z-30 border-b border-white/10 bg-black/70 backdrop-blur-xl">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4 lg:px-8">
          <Link href="/" className="text-lg font-semibold tracking-[0.25em] text-white">
            NORTH INDUSTRIE
          </Link>
          <div className="flex items-center gap-4">
            <div className="flex items-center rounded-full border border-white/10 bg-white/5 p-1">
              <button
                type="button"
                onClick={() => setLanguage("en")}
                className={`rounded-full px-3 py-1 text-sm transition ${language === "en" ? "bg-[#ff4d4d] text-white" : "text-zinc-300"}`}
              >
                EN
              </button>
              <button
                type="button"
                onClick={() => setLanguage("pl")}
                className={`rounded-full px-3 py-1 text-sm transition ${language === "pl" ? "bg-[#ff4d4d] text-white" : "text-zinc-300"}`}
              >
                PL
              </button>
            </div>
            <nav className="hidden gap-6 text-sm text-zinc-300 md:flex">
              {navItems.map((item) => (
                <Link key={item.href} href={item.href} className="transition hover:text-[#ff4d4d]">
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      <main className="mx-auto w-full max-w-6xl px-6 py-12 lg:px-8 lg:py-20">{children}</main>

      <footer className="border-t border-white/10 bg-black/70">
        <div className="mx-auto flex max-w-6xl flex-col gap-3 px-6 py-8 text-sm text-zinc-400 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© 2026 North Industrie. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="/privacy-policy" className="transition hover:text-[#ff4d4d]">
              {language === "pl" ? "Polityka prywatności" : "Privacy Policy"}
            </Link>
            <Link href="/terms" className="transition hover:text-[#ff4d4d]">
              {language === "pl" ? "Regulamin" : "Terms"}
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
