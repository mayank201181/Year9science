"use client";
// Top bar (logo, desktop nav, stars, profile menu) and persistent bottom navigation dock
// across ALL screen sizes (mobile, iPad & desktop).
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { useStore } from "@/lib/store";
import { rankFor } from "@/lib/learning";
import { addDaysISO, todayISO } from "@/lib/dates";

const NAV = [
  { href: "/", label: "Home", icon: "🏠" },
  { href: "/topics", label: "Topics", icon: "📚" },
  { href: "/cram", label: "Cram", icon: "🚨" },
  { href: "/watch", label: "Watch", icon: "🎬" },
  { href: "/episodes", label: "Sitcom", icon: "📺" },
  { href: "/daily", label: "Daily 5", icon: "🎯" },
  { href: "/review", label: "Review", icon: "🔁" },
  { href: "/progress", label: "Progress", icon: "📈" },
];

const DESKTOP_NAV = [
  { href: "/topics", label: "Topics" },
  { href: "/cram", label: "🚨 Cram" },
  { href: "/formulas", label: "🎯 Science Vault" },
  { href: "/exam", label: "📝 Mock Papers" },
  { href: "/watch", label: "🎬 Watch" },
  { href: "/episodes", label: "📺 Sitcom" },
  { href: "/sprint", label: "⚡ 60s Sprint" },
  { href: "/progress", label: "Progress" },
];

function active(path: string, href: string) {
  return href === "/" ? path === "/" : path.startsWith(href);
}

export function SiteHeader() {
  const { data, activeProfile, mode, account, accountsAvailable, switchProfile, logout, leaveGuest } = useStore();
  const path = usePathname() ?? "/";
  const [openAt, setOpenAt] = useState<string | null>(null);
  const open = openAt === path;
  const menuRef = useRef<HTMLDivElement>(null);
  const { rank } = rankFor(data.stars);
  const streak = data.streak;
  const streakLive = streak.count > 1 && (streak.last === todayISO() || streak.last === addDaysISO(-1));

  useEffect(() => {
    if (!open) return;
    const onDown = (e: MouseEvent | TouchEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) setOpenAt(null);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpenAt(null);
    document.addEventListener("mousedown", onDown);
    document.addEventListener("touchstart", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("touchstart", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <header className="no-print sticky top-0 z-30 border-b border-line bg-surface/90 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center gap-3 px-4">
        <Link href="/" className="flex items-center gap-2 font-black tracking-tight">
          <span className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-br from-brand to-brand-2 text-lg text-white" aria-hidden>
            🔬
          </span>
          <span className="hidden sm:inline">Year 9 Science</span>
        </Link>

        <nav className="ml-2 hidden items-center gap-1 lg:flex" aria-label="Main">
          {DESKTOP_NAV.map((n) => (
            <Link key={n.href} href={n.href} className={`rounded-lg px-2.5 py-1.5 text-sm font-bold ${active(path, n.href) ? "bg-brand-soft text-brand" : "text-ink-2 hover:bg-surface-2"}`}>
              {n.label}
            </Link>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-2">
          <Link href="/cram" className="chip border-bad/30 bg-bad-soft text-bad text-sm lg:hidden" title="Custom Year 9 Science Exam Cram Sheet">
            🚨 <span className="hidden sm:inline">Cram</span>
          </Link>
          <Link href="/formulas" className="chip border-brand/30 bg-brand-soft text-brand text-sm lg:hidden" title="Year 9 Science Exam Traps, Pseudocode & SQL Vault">
            🎯 <span className="hidden sm:inline">Exam Vault</span>
          </Link>
          <Link href="/episodes" className="chip border-brand/30 bg-brand-soft text-brand text-sm lg:hidden" title="Narrated Sitcom Episodes">
            📺 <span className="hidden sm:inline">Sitcom</span>
          </Link>
          <Link href="/watch" className="chip border-brand/30 bg-brand-soft text-brand text-sm lg:hidden" title="Watch Episodes">
            🎬 <span className="hidden sm:inline">Watch</span>
          </Link>
          <Link href="/progress" className="chip text-sm" title={`${rank.name} · ${data.stars} stars`}>
            ⭐ {data.stars}
          </Link>

          {streakLive ? (
            <span className="chip hidden text-sm sm:inline-flex" title="Days in a row">
              🔥 {streak.count}
            </span>
          ) : null}

          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setOpenAt(open ? null : path)}
              aria-expanded={open}
              aria-haspopup="menu"
              aria-label={`${activeProfile?.name ?? "Vanshika"} menu`}
              className="flex h-10 items-center gap-1 rounded-xl px-2 hover:bg-surface-2"
            >
              <span className="text-2xl" aria-hidden>
                {activeProfile?.avatar ?? "🔬"}
              </span>
              <span className="hidden max-w-[8rem] truncate text-sm font-bold sm:inline">{activeProfile?.name ?? "Vanshika"}</span>
            </button>

            {open ? (
              <div role="menu" className="card absolute right-0 top-12 z-40 w-64 p-2 text-sm">
                <div className="px-3 py-2 text-xs text-ink-2">{mode === "guest" ? "Local iPad/device mode — saved automatically" : `${account?.name ?? ""} family`}</div>
                <Link role="menuitem" href="/cram" className="block rounded-lg px-3 py-2 font-bold text-bad hover:bg-surface-2">
                  🚨 Custom Exam Cram Sheet
                </Link>
                <Link role="menuitem" href="/formulas" className="block rounded-lg px-3 py-2 font-bold text-brand hover:bg-surface-2">
                  🎯 Year 9 Science Science Vault
                </Link>
                <Link role="menuitem" href="/exam" className="block rounded-lg px-3 py-2 font-bold text-brand hover:bg-surface-2">
                  📝 Year 9 Science Mock Exams
                </Link>
                <Link role="menuitem" href="/episodes" className="block rounded-lg px-3 py-2 font-bold hover:bg-surface-2">
                  📺 Sitcom Episodes
                </Link>
                <Link role="menuitem" href="/watch" className="block rounded-lg px-3 py-2 hover:bg-surface-2">
                  🎬 Watch Hub
                </Link>
                <Link role="menuitem" href="/shorts" className="block rounded-lg px-3 py-2 hover:bg-surface-2">
                  📱 Concept Shorts
                </Link>
                <Link role="menuitem" href="/skills" className="block rounded-lg px-3 py-2 hover:bg-surface-2">
                  🧩 Skills &amp; Procedural Drills
                </Link>
                <Link role="menuitem" href="/sprint" className="block rounded-lg px-3 py-2 hover:bg-surface-2">
                  ⚡ 60s Fluency Sprint
                </Link>
                {mode === "cloud" ? (
                  <>
                    <hr className="my-1 border-line" />
                    <Link role="menuitem" href="/parent" className="block rounded-lg px-3 py-2 hover:bg-surface-2">
                      👨‍👩‍👧 Parent dashboard
                    </Link>
                    {account && account.profiles.length > 1 ? (
                      <button role="menuitem" type="button" className="block w-full rounded-lg px-3 py-2 text-left hover:bg-surface-2" onClick={switchProfile}>
                        🔄 Switch learner
                      </button>
                    ) : null}
                    <button role="menuitem" type="button" className="block w-full rounded-lg px-3 py-2 text-left hover:bg-surface-2" onClick={() => void logout()}>
                      🚪 Sign out
                    </button>
                  </>
                ) : accountsAvailable ? (
                  <>
                    <hr className="my-1 border-line" />
                    <button role="menuitem" type="button" className="block w-full rounded-lg px-3 py-2 text-left hover:bg-surface-2" onClick={leaveGuest}>
                      ☁️ Sign in / create account
                    </button>
                  </>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </header>
  );
}

export function MobileNav() {
  const path = usePathname() ?? "/";

  return (
    <nav className="no-print fixed inset-x-0 bottom-0 z-30 border-t border-line bg-surface/95 pb-[env(safe-area-inset-bottom)] backdrop-blur" aria-label="Bottom navigation">
      <div className="mx-auto grid max-w-3xl grid-cols-8 px-1">
        {NAV.map((n) => (
          <Link key={n.href} href={n.href} className={`flex min-w-0 flex-col items-center gap-0.5 py-2 text-[0.625rem] font-bold leading-tight whitespace-nowrap transition-colors sm:text-xs ${active(path, n.href) ? "text-brand" : "text-ink-2 hover:text-ink"}`} aria-current={active(path, n.href) ? "page" : undefined}>
            <span className="text-lg sm:text-xl" aria-hidden>
              {n.icon}
            </span>
            <span className="truncate">{n.label}</span>
          </Link>
        ))}
      </div>
    </nav>
  );
}
