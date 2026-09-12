"use client";

import { useState, useEffect } from "react";
import {
  MonitorPlay,
  Smartphone,
  Tv,
  Download,
  Shield,
  Zap,
  RefreshCw,
  ChevronRight,
  Sun,
  Moon,
  Menu,
  X,
  ChevronDown,
  Code2,
  ExternalLink,
} from "lucide-react";
import { useTheme } from "@/components/theme-provider";

const MOBILE_APK_ARM64 =
  "https://github.com/chila254/maxstream/releases/latest/download/maxstream-arm64-v8a.apk";
const MOBILE_APK_ARM32 =
  "https://github.com/chila254/maxstream/releases/latest/download/maxstream-armeabi-v7a.apk";
const MOBILE_APK_X86 =
  "https://github.com/chila254/maxstream/releases/latest/download/maxstream-x86_64.apk";
const TV_APK =
  "https://github.com/chila254/maxstream/releases/latest/download/maxstream-tv.apk";

const NAV_LINKS = [
  { label: "Features", href: "#features" },
  { label: "Screenshots", href: "#screenshots" },
  { label: "Download", href: "#download" },
  { label: "FAQ", href: "#faq" },
];

export default function Home() {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSidebarOpen(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, []);

  return (
    <div className="flex min-h-screen flex-col">
      <Navbar onMenuToggle={() => setSidebarOpen((o) => !o)} />
      <Sidebar open={sidebarOpen} onClose={() => setSidebarOpen(false)} />

      {sidebarOpen && (
        <div
          className="fixed inset-0 z-30 bg-black/40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="flex-1">
        <Hero />
        <Features />
        <Screenshots />
        <DownloadSection />
        <FAQ />
      </main>
      <Footer />
    </div>
  );
}

function Navbar({ onMenuToggle }: { onMenuToggle: () => void }) {
  const { theme, toggle } = useTheme();

  return (
    <nav className="sticky top-0 z-40 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={onMenuToggle}
            className="rounded-md p-1.5 hover:bg-border/50 lg:hidden"
            aria-label="Menu"
          >
            <Menu className="h-5 w-5" />
          </button>
          <a href="#" className="flex items-center gap-2">
            <img
              src="/app_icon.png"
              alt="MaxStream"
              className="h-7 w-7 rounded-lg"
            />
            <span className="text-base font-bold tracking-tight sm:text-lg">
              MaxStream
            </span>
          </a>
        </div>

        <div className="hidden items-center gap-1 lg:flex">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="rounded-lg px-3 py-1.5 text-sm text-muted transition hover:bg-border/50 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={toggle}
            className="rounded-lg p-1.5 text-muted transition hover:bg-border/50 hover:text-foreground"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4" />
            ) : (
              <Moon className="h-4 w-4" />
            )}
          </button>
          <a
            href="#download"
            className="hidden rounded-full bg-brand px-3 py-1.5 text-xs font-medium text-white transition hover:bg-brand-dark sm:inline-flex sm:text-sm"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}

function Sidebar({
  open,
  onClose,
}: {
  open: boolean;
  onClose: () => void;
}) {
  return (
    <aside
      className={`fixed inset-y-0 left-0 z-40 flex w-72 flex-col border-r border-border bg-card transition-transform duration-200 lg:hidden ${
        open ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div className="flex h-14 items-center justify-between border-b border-border px-4">
        <a href="#" className="flex items-center gap-2" onClick={onClose}>
          <img
            src="/app_icon.png"
            alt="MaxStream"
            className="h-7 w-7 rounded-lg"
          />
          <span className="text-base font-bold tracking-tight">MaxStream</span>
        </a>
        <button
          onClick={onClose}
          className="rounded-md p-1.5 hover:bg-border/50"
          aria-label="Close menu"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      <nav className="flex-1 overflow-y-auto p-4">
        <div className="space-y-1">
          {NAV_LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={onClose}
              className="block rounded-lg px-3 py-2.5 text-sm font-medium text-muted transition hover:bg-border/50 hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
        </div>

        <div className="mt-6 space-y-1">
          <a
            href="https://github.com/chila254/maxstream"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-muted transition hover:bg-border/50 hover:text-foreground"
          >
            <Code2 className="h-4 w-4" />
            GitHub
          </a>
          <a
            href="https://github.com/chila254/maxstream/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 rounded-lg px-3 py-2.5 text-sm text-muted transition hover:bg-border/50 hover:text-foreground"
          >
            <ExternalLink className="h-4 w-4" />
            Releases
          </a>
        </div>
      </nav>

      <div className="border-t border-border p-4 space-y-2">
        <a
          href="#download"
          className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-dark"
        >
          <Download className="h-4 w-4" />
          Download APKs
        </a>
        <a
          href={TV_APK}
          className="flex w-full items-center justify-center gap-2 rounded-full border border-brand bg-transparent px-4 py-2 text-xs font-medium text-brand transition hover:bg-brand hover:text-white"
        >
          <Tv className="h-4 w-4" />
          Android TV
        </a>
      </div>
    </aside>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-brand)_0%,_transparent_60%)] opacity-10 dark:opacity-15" />
      <div className="relative mx-auto max-w-6xl px-4 py-20 text-center sm:px-6 sm:py-28 lg:py-36">
        <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-border bg-card px-3 py-1 text-xs sm:text-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          v1.6.0 — Voice search, live recommendations & TV subtitles
        </div>
        <h1 className="mx-auto max-w-3xl text-3xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
          Stream{" "}
          <span className="text-brand">movies & series</span>{" "}
          on any device
        </h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-muted sm:text-lg">
          Watch on your phone, tablet, or Android TV. Sign in to sync your
          watchlist and progress across devices.
        </p>
        <div className="mt-8 flex flex-col items-center gap-3 sm:flex-row sm:justify-center">
          <a
            href="#download"
            className="flex w-full items-center justify-center gap-2 rounded-full bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark sm:w-auto sm:text-base"
          >
            <Smartphone className="h-5 w-5" />
            Download for Android
            <ChevronRight className="h-4 w-4" />
          </a>
          <a
            href={TV_APK}
            className="flex w-full items-center justify-center gap-2 rounded-full border border-border bg-card px-5 py-3 text-sm font-semibold transition hover:border-muted sm:w-auto sm:text-base"
          >
            <Tv className="h-5 w-5" />
            Download for Android TV
          </a>
        </div>
      </div>
    </section>
  );
}

const FEATURES = [
  {
    icon: MonitorPlay,
    title: "Multi-server streaming",
    desc: "Switch between VixSrc, VidLink, and more servers without restarting playback.",
  },
  {
    icon: RefreshCw,
    title: "Cloud sync",
    desc: "Your watchlist, watch history, and continue-watching sync between your phone and TV in real time.",
  },
  {
    icon: Zap,
    title: "Fast & lightweight",
    desc: "Parallel server racing, pre-flight validation, and memory-pressure handling for smooth playback.",
  },
  {
    icon: Shield,
    title: "Your account, your data",
    desc: "Sign in with email or device code. Your watchlist and progress sync across your phone and TV.",
  },
];

function Features() {
  return (
    <section id="features" className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          Built for watching
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm text-muted sm:text-base">
          Everything you need to stream, nothing you don&apos;t.
        </p>
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4 sm:mt-16">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-background p-5 transition hover:border-brand/50 sm:p-6"
            >
              <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-base font-semibold sm:text-lg">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                {f.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const SCREENSHOTS = [
  { src: "/screenshots/Home_Screen.jpg", alt: "Home screen" },
  { src: "/screenshots/Login-Signup_Screen.jpg", alt: "Login & Signup" },
  { src: "/screenshots/Search_Screen1.jpg", alt: "Search" },
  { src: "/screenshots/Search_Screen2.jpg", alt: "Search results" },
  { src: "/screenshots/Watchlist_Screen.jpg", alt: "Watchlist" },
  { src: "/screenshots/More_Screen.jpg", alt: "More" },
];

function Screenshots() {
  return (
    <section id="screenshots" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          See it in action
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm text-muted sm:text-base">
          A clean, modern interface designed for browsing and watching.
        </p>
        <div className="mt-12 flex gap-5 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide sm:mt-16 sm:gap-6">
          {SCREENSHOTS.map((s) => (
            <div
              key={s.src}
              className="relative shrink-0 snap-center w-[220px] sm:w-[260px] lg:w-[300px]"
            >
              <div className="overflow-hidden rounded-2xl border border-border bg-card sm:rounded-3xl">
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full object-cover"
                />
              </div>
              <p className="mt-2 text-center text-xs text-muted sm:mt-3 sm:text-sm">
                {s.alt}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadSection() {
  const [dialogOpen, setDialogOpen] = useState(false);

  return (
    <section id="download" className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          Download MaxStream
        </h2>
        <p className="mx-auto mt-3 max-w-lg text-center text-sm text-muted sm:text-base">
          Free for Android phones and Android TV. Open-source on GitHub.
        </p>
        <div className="mt-12 flex justify-center sm:mt-16">
          <button
            onClick={() => setDialogOpen(true)}
            className="flex items-center justify-center gap-2 rounded-full bg-brand px-8 py-4 text-base font-semibold text-white transition hover:bg-brand-dark sm:text-lg"
          >
            <Download className="h-5 w-5" />
            Download APK
          </button>
        </div>
      </div>

      {dialogOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4"
          onClick={() => setDialogOpen(false)}
        >
          <div
            className="w-full max-w-md rounded-2xl border border-border bg-background p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="mb-5 flex items-center justify-between">
              <h3 className="text-lg font-bold">Choose your APK</h3>
              <button
                onClick={() => setDialogOpen(false)}
                className="rounded-lg p-1.5 hover:bg-border/50"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
                  Mobile
                </p>
                <div className="space-y-2">
                  <a
                    href={MOBILE_APK_ARM64}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition hover:border-brand/50"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Smartphone className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">arm64-v8a</p>
                      <p className="text-xs text-muted">Samsung S7+, Pixel, OnePlus, Xiaomi, most phones 2017+</p>
                    </div>
                    <Download className="h-4 w-4 shrink-0 text-muted" />
                  </a>
                  <a
                    href={MOBILE_APK_ARM32}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition hover:border-brand/50"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Smartphone className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">armeabi-v7a</p>
                      <p className="text-xs text-muted">Older budget phones: Galaxy J2–J7, Moto E/G, LG K series</p>
                    </div>
                    <Download className="h-4 w-4 shrink-0 text-muted" />
                  </a>
                  <a
                    href={MOBILE_APK_X86}
                    className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition hover:border-brand/50"
                  >
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                      <Smartphone className="h-4 w-4" />
                    </div>
                    <div className="flex-1">
                      <p className="text-sm font-semibold">x86_64</p>
                      <p className="text-xs text-muted">Emulators (AVD, BlueStacks), ChromeOS, Intel devices</p>
                    </div>
                    <Download className="h-4 w-4 shrink-0 text-muted" />
                  </a>
                </div>
              </div>

              <div className="border-t border-border pt-4">
                <p className="mb-2 text-xs font-medium uppercase tracking-wider text-muted">
                  TV
                </p>
                <a
                  href={TV_APK}
                  className="flex items-center gap-3 rounded-xl border border-border bg-card p-3 transition hover:border-brand/50"
                >
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand">
                    <Tv className="h-4 w-4" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-semibold">Universal (all TV devices)</p>
                    <p className="text-xs text-muted">Android TV, Fire TV, Chromecast, Nvidia Shield</p>
                  </div>
                  <Download className="h-4 w-4 shrink-0 text-muted" />
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

const FAQ_ITEMS = [
  {
    q: "Is MaxStream free?",
    a: "Yes. MaxStream is completely free and open-source. There are no subscriptions, ads, or in-app purchases.",
  },
  {
    q: "What devices are supported?",
    a: "MaxStream runs on Android phones and tablets (Android 5.0+) and Android TV devices. An iOS version is not available yet.",
  },
  {
    q: "Do I need an account?",
    a: "You need to sign in (via email or device code) to use cloud sync. Without signing in you can still browse, but your watchlist and progress won't sync.",
  },
  {
    q: "How do I install the APK?",
    a: "Download the APK from this page, then open it on your device. You may need to enable 'Install from unknown sources' in your device settings. On Android TV, use the 'Send files to TV' app or a USB drive.",
  },
  {
    q: "Does it work on Fire TV / Fire Stick?",
    a: "Yes. Sideload the TV APK using the Downloader app or ADB. The app is built for Android TV and works on Fire OS devices.",
  },
  {
    q: "How do I update?",
    a: "The app checks GitHub for new releases automatically. You'll get a prompt to download and install the update in-app.",
  },
];

function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="border-t border-border">
      <div className="mx-auto max-w-3xl px-4 py-20 sm:px-6 sm:py-24">
        <h2 className="text-center text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
          Frequently asked questions
        </h2>
        <div className="mt-10 divide-y divide-border sm:mt-12">
          {FAQ_ITEMS.map((item, i) => (
            <div key={i}>
              <button
                onClick={() =>
                  setOpenIndex(openIndex === i ? null : i)
                }
                className="flex w-full items-center justify-between gap-4 py-4 text-left text-sm font-medium sm:py-5 sm:text-base"
              >
                {item.q}
                <ChevronDown
                  className={`h-4 w-4 shrink-0 text-muted transition-transform ${
                    openIndex === i ? "rotate-180" : ""
                  }`}
                />
              </button>
              <div
                className={`overflow-hidden transition-all duration-200 ${
                  openIndex === i ? "max-h-40 pb-4" : "max-h-0"
                }`}
              >
                <p className="text-sm leading-relaxed text-muted">
                  {item.a}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 py-6 sm:flex-row sm:px-6 sm:py-8">
        <div className="flex items-center gap-2 text-sm text-muted">
          <img src="/app_icon.png" alt="" className="h-5 w-5 rounded sm:h-6 sm:w-6" />
          MaxStream
        </div>
        <div className="flex gap-5 text-sm text-muted">
          <a
            href="https://github.com/chila254/maxstream"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-foreground"
          >
            GitHub
          </a>
          <a
            href="https://github.com/chila254/maxstream/releases"
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-foreground"
          >
            Releases
          </a>
        </div>
      </div>
    </footer>
  );
}
