import {
  MonitorPlay,
  Smartphone,
  Tv,
  Download,
  Shield,
  Zap,
  RefreshCw,
  ChevronRight,
} from "lucide-react";

const MOBILE_APK =
  "https://github.com/chila254/maxstream/releases/latest/download/maxstream.apk";
const TV_APK =
  "https://github.com/chila254/maxstream/releases/latest/download/maxstream-tv.apk";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <Screenshots />
      <DownloadSection />
      <Footer />
    </div>
  );
}

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <div className="flex items-center gap-2">
          <img src="/app_icon.png" alt="MaxStream" className="h-8 w-8 rounded-lg" />
          <span className="text-lg font-bold tracking-tight">MaxStream</span>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="#download"
            className="rounded-full bg-brand px-4 py-2 text-sm font-medium text-white transition hover:bg-brand-dark"
          >
            Download
          </a>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--color-brand)_0%,_transparent_60%)] opacity-15" />
      <div className="relative mx-auto max-w-6xl px-6 py-28 text-center lg:py-40">
        <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-border bg-card px-4 py-1.5 text-sm text-muted">
          <span className="h-1.5 w-1.5 rounded-full bg-green-500" />
          v1.5.0 — Now with cloud sync
        </div>
        <h1 className="mx-auto max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl lg:text-7xl">
          Stream{" "}
          <span className="text-brand">movies & series</span>{" "}
          on any device
        </h1>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-muted">
          Watch on your phone, tablet, or Android TV. Sign in to sync your
          watchlist and progress across devices.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <a
            href={MOBILE_APK}
            className="flex items-center gap-2 rounded-full bg-brand px-6 py-3 text-base font-semibold text-white transition hover:bg-brand-dark"
          >
            <Smartphone className="h-5 w-5" />
            Download for Android
            <ChevronRight className="h-4 w-4" />
          </a>
          <a
            href={TV_APK}
            className="flex items-center gap-2 rounded-full border border-border bg-card px-6 py-3 text-base font-semibold transition hover:border-muted"
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
    desc: "Sign in with email or device code. Your watchlist and progress sync across your phone and TV — never shared with third parties.",
  },
];

function Features() {
  return (
    <section className="border-t border-border bg-card/50">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Built for watching
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-muted">
          Everything you need to stream, nothing you don&apos;t.
        </p>
        <div className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="group rounded-2xl border border-border bg-background p-6 transition hover:border-brand/50"
            >
              <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-lg bg-brand/10 text-brand transition group-hover:bg-brand group-hover:text-white">
                <f.icon className="h-5 w-5" />
              </div>
              <h3 className="text-lg font-semibold">{f.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">{f.desc}</p>
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
    <section className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          See it in action
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-muted">
          A clean, modern interface designed for browsing and watching.
        </p>
        <div className="mt-16 flex gap-6 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-hide">
          {SCREENSHOTS.map((s) => (
            <div
              key={s.src}
              className="relative shrink-0 snap-center w-[260px] sm:w-[300px]"
            >
              <div className="overflow-hidden rounded-3xl border border-border bg-card">
                <img
                  src={s.src}
                  alt={s.alt}
                  className="w-full object-cover"
                />
              </div>
              <p className="mt-3 text-center text-sm text-muted">{s.alt}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function DownloadSection() {
  return (
    <section id="download" className="border-t border-border">
      <div className="mx-auto max-w-6xl px-6 py-24">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">
          Download MaxStream
        </h2>
        <p className="mx-auto mt-4 max-w-lg text-center text-muted">
          Free for Android phones and Android TV. Open-source on GitHub.
        </p>
        <div className="mt-16 grid gap-6 sm:grid-cols-2">
          {/* Mobile card */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Smartphone className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Android Phone & Tablet</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                Stream movies and series on your mobile device. Requires Android
                5.0+.
              </p>
            </div>
            <a
              href={MOBILE_APK}
              className="mt-8 flex items-center justify-center gap-2 rounded-full bg-brand px-6 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
            >
              <Download className="h-4 w-4" />
              Download APK
            </a>
          </div>

          {/* TV card */}
          <div className="flex flex-col justify-between rounded-2xl border border-border bg-card p-8">
            <div>
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-brand/10 text-brand">
                <Tv className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold">Android TV</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted">
                The full MaxStream experience on your TV with D-pad navigation
                and a dedicated player.
              </p>
            </div>
            <a
              href={TV_APK}
              className="mt-8 flex items-center justify-center gap-2 rounded-full border border-brand bg-transparent px-6 py-3 text-sm font-semibold text-brand transition hover:bg-brand hover:text-white"
            >
              <Download className="h-4 w-4" />
              Download TV APK
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-border">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 sm:flex-row">
        <div className="flex items-center gap-2 text-sm text-muted">
          <img src="/app_icon.png" alt="" className="h-6 w-6 rounded" />
          MaxStream
        </div>
        <div className="flex gap-6 text-sm text-muted">
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
