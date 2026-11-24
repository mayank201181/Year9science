"use client";
// Zero-login shell: boots directly into Vanshika's guest dashboard; optional cloud sign-in opens as a dismissible modal.
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useStore } from "@/lib/store";
import { AuthGate } from "./AuthGate";
import { ProfilePicker } from "./ProfilePicker";
import { SiteHeader, MobileNav } from "./SiteHeader";
import { ErrorBoundary } from "./ErrorBoundary";

function Loading() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center gap-3 text-ink-2" role="status">
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-brand-soft border-t-brand" aria-hidden />
      <span>Opening Vanshika&apos;s Year 9 Science Hub…</span>
    </div>
  );
}

function LoadError() {
  const { retryLoad, logout, switchProfile, startGuest, account } = useStore();
  return (
    <div className="mx-auto max-w-md py-16 text-center">
      <div className="text-5xl" aria-hidden>
        📡
      </div>
      <h1 className="mt-2 text-xl font-extrabold">Couldn&apos;t load cloud progress</h1>
      <p className="mt-2 text-ink-2">We couldn&apos;t reach the server, so nothing has been changed. You can retry or continue straight on this device.</p>
      <div className="mt-6 flex flex-wrap justify-center gap-2">
        <button type="button" className="btn btn-primary" onClick={() => void retryLoad()}>
          Try again
        </button>
        <button type="button" className="btn btn-secondary" onClick={startGuest}>
          Continue on this device
        </button>
        {account && account.profiles.length > 1 ? (
          <button type="button" className="btn btn-secondary" onClick={switchProfile}>
            Switch learner
          </button>
        ) : null}
        <button type="button" className="btn btn-ghost" onClick={() => void logout()}>
          Sign out
        </button>
      </div>
    </div>
  );
}

export function AppGate({ children }: { children: ReactNode }) {
  const { status, signInOpen, accountsAvailable } = useStore();
  const path = usePathname();
  const parentRoute = path?.startsWith("/parent");
  let body: ReactNode;
  if (status === "loading") body = <Loading />;
  else if (status === "load-error") body = <LoadError />;
  else if (status === "no-profile" && !parentRoute) body = <ProfilePicker />;
  else body = children;
  const showChrome = status === "ready" || status === "anon" || (status === "no-profile" && parentRoute);
  return (
    <>
      {showChrome ? (
        <ErrorBoundary silent>
          <SiteHeader />
        </ErrorBoundary>
      ) : null}
      <main className={`mx-auto w-full max-w-5xl px-4 pt-4 ${showChrome ? "pb-28" : "pb-12"}`}>{body}</main>
      {showChrome ? (
        <ErrorBoundary silent>
          <MobileNav />
        </ErrorBoundary>
      ) : null}
      {signInOpen && accountsAvailable ? <AuthGate /> : null}
    </>
  );
}
