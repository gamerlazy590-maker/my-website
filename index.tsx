import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  Clock3,
  Gauge,
  Hash,
  Link2,
  PlayCircle,
  Rocket,
  ShieldCheck,
  Sparkles,
  UploadCloud,
  Wand2,
  Zap,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { PublicLayout } from "@/components/site/PublicLayout";
import { MiniHookTool } from "@/components/site/MiniHookTool";
import { ScoreGauge } from "@/components/ScoreGauge";
import heroImg from "@/assets/hero-studio.jpg";
import { FREE_MONTHLY_DIRECT_UPLOADS, PRO_PRICE_MONTHLY_USD } from "@/lib/viewpulse/plans";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "ViewPulse — Turn Raw Clips Into High-Retention TikTok Hits" },
      {
        name: "description",
        content:
          "ViewPulse scores your 3-second hook, writes SEO captions and hashtags, predicts peak posting times and publishes straight to TikTok.",
      },
      { property: "og:title", content: "ViewPulse — Turn Raw Clips Into High-Retention TikTok Hits" },
      {
        property: "og:description",
        content: "AI hook scoring, TikTok SEO captions, peak-time prediction and one-click direct publishing.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://pixel-perfect-replay-63172.lovable.app/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "ViewPulse — Turn Raw Clips Into High-Retention TikTok Hits" },
      { name: "twitter:description", content: "AI hook scoring, TikTok SEO captions, peak-time prediction and one-click direct publishing." },
    ],
    links: [{ rel: "canonical", href: "https://pixel-perfect-replay-63172.lovable.app/" }],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "SoftwareApplication",
          name: "ViewPulse",
          applicationCategory: "MultimediaApplication",
          operatingSystem: "Web",
          url: "https://pixel-perfect-replay-63172.lovable.app/",
          description: "AI hook scoring, TikTok SEO captions, hashtags and peak posting times — published directly to TikTok.",
          offers: { "@type": "Offer", price: "0", priceCurrency: "USD" },
        }),
      },
    ],
  }),
  component: Landing,
});

const steps = [
  { icon: Link2, title: "Connect TikTok securely", body: "Sign in with TikTok's official Login Kit. We never see your password and you can disconnect anytime." },
  { icon: Wand2, title: "AI hook, caption & timing", body: "Get scored hooks, keyword-rich captions, a smart hashtag mix and today's peak windows for your niche." },
  { icon: Rocket, title: "One-click direct publish", body: "Pick privacy and interaction settings, then post or send to your TikTok drafts through the official API." },
];

const features = [
  { icon: Gauge, title: "3-Second Hook Scorer", body: "Every hook gets a 0–100 strength score with the psychology behind it, so you open with the line that stops thumbs." },
  { icon: Hash, title: "TikTok SEO Caption & Hashtag Engine", body: "Captions written for TikTok search plus a balanced mix of broad discovery and niche-specific tags." },
  { icon: Clock3, title: "Peak Audience Time Predictor", body: "Niche-aware posting windows for today, adjusted for weekends, scored into your readiness total." },
  { icon: UploadCloud, title: "Official API Direct Upload", body: "Chunked uploads through TikTok's Content Posting API v2 — straight to your profile or drafts inbox." },
];

const stats = [
  { value: "+41%", label: "Avg. 3-second retention lift", sub: "after switching to a top-scored hook" },
  { value: "4.6×", label: "Faster posting workflow", sub: "from raw clip to published post" },
  { value: "92", label: "Median readiness score", sub: "on posts published via ViewPulse" },
];

function Landing() {
  return (
    <PublicLayout>
      {/* HERO */}
      <section className="mx-auto grid max-w-6xl items-center gap-12 px-5 pb-16 pt-10 sm:px-6 md:pt-20 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,1fr)]">
        <div className="animate-fade-up">
          <span className="inline-flex max-w-full items-center gap-2 rounded-full border border-border bg-surface/70 px-3 py-1 text-xs font-medium text-muted-foreground">
            <span className="size-1.5 shrink-0 animate-pulse-ring rounded-full bg-cyan" />
            Built on TikTok's official Login Kit & Content Posting API
          </span>
          <h1 className="mt-5 text-[2.25rem] font-extrabold leading-[1.05] tracking-tight [overflow-wrap:anywhere] sm:text-5xl md:text-6xl">
            Turn your raw clips into <span className="text-gradient-brand">high-retention</span> TikTok hits
          </h1>
          <p className="mt-5 max-w-xl text-lg text-muted-foreground">
            ViewPulse scores your opening hook, writes SEO captions and hashtags, and predicts your audience's peak hours —
            then uploads directly to TikTok so every post launches at full strength.
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild variant="hero" size="xl">
              <Link to="/signup">
                Start Free — Connect TikTok <ArrowRight />
              </Link>
            </Button>
            <Button asChild variant="glass" size="xl">
              <Link to="/" hash="live-demo">
                <PlayCircle /> Try Live Demo
              </Link>
            </Button>
          </div>
          <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Check className="size-4 text-success" /> Free forever plan</span>
            <span className="flex items-center gap-1.5"><Check className="size-4 text-success" /> No card required</span>
            <span className="flex items-center gap-1.5"><ShieldCheck className="size-4 text-success" /> Revoke access anytime</span>
          </div>
        </div>
        <div className="relative">
          <div className="absolute -inset-6 rounded-[2rem] bg-gradient-brand opacity-20 blur-3xl" />
          <div className="relative overflow-hidden rounded-3xl border border-border shadow-glow-cyan">
            <img src={heroImg} alt="ViewPulse creator studio analyzing a vertical TikTok video" width={1536} height={1152} className="h-full w-full object-cover" />
          </div>
          <div className="glass absolute -bottom-6 -left-4 hidden animate-float items-center gap-3 rounded-2xl p-3 sm:flex">
            <ScoreGauge value={94} size={84} stroke={8} label="Ready" />
            <div className="pr-2">
              <div className="text-xs text-muted-foreground">Hook strength</div>
              <div className="font-mono text-lg font-bold">96 / 100</div>
            </div>
          </div>
        </div>
      </section>

      {/* LIVE DEMO */}
      <section id="live-demo" className="mx-auto max-w-4xl scroll-mt-28 px-6 py-12">
        <MiniHookTool />
      </section>

      {/* HOW IT WORKS */}
      <section id="how-it-works" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20">
        <SectionHeading eyebrow="How it works" title="From raw clip to optimized post in three steps" />
        <div className="relative mt-12 grid gap-6 md:grid-cols-3">
          <div className="absolute left-0 right-0 top-10 hidden h-px bg-gradient-brand opacity-40 md:block" />
          {steps.map((s, i) => (
            <div key={s.title} className="glass-card relative p-6">
              <div className="flex items-center gap-3">
                <span className="grid size-12 place-items-center rounded-xl bg-gradient-brand text-pulse-foreground shadow-glow-pulse">
                  <s.icon className="size-5" />
                </span>
                <span className="font-mono text-sm text-muted-foreground">0{i + 1}</span>
              </div>
              <h3 className="mt-5 text-lg font-bold">{s.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{s.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURES */}
      <section id="features" className="mx-auto max-w-6xl scroll-mt-28 px-6 py-20">
        <SectionHeading eyebrow="Core features" title="Everything a creator needs before hitting post" />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {features.map((f) => (
            <div key={f.title} className="glass-card group p-7 transition-transform hover:-translate-y-1">
              <span className="grid size-11 place-items-center rounded-xl border border-border bg-surface-2 text-cyan transition-colors group-hover:text-pulse">
                <f.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-xl font-bold">{f.title}</h3>
              <p className="mt-2 text-muted-foreground">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* SOCIAL PROOF */}
      <section className="mx-auto max-w-6xl px-6 py-16">
        <div className="border-gradient-brand grid gap-px overflow-hidden rounded-3xl md:grid-cols-3">
          {stats.map((s) => (
            <div key={s.label} className="bg-surface p-8 text-center">
              <div className="text-gradient-brand font-mono text-4xl font-bold sm:text-5xl">{s.value}</div>
              <div className="mt-3 font-semibold">{s.label}</div>
              <div className="mt-1 text-sm text-muted-foreground">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="mx-auto max-w-5xl scroll-mt-28 px-6 py-20">
        <SectionHeading eyebrow="Pricing" title="Start free. Upgrade when you're posting daily." />
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <PriceCard
            name="Free Starter"
            price="$0"
            cadence="forever"
            cta="Start free"
            features={[
              "Unlimited AI hook & caption checks",
              "Viral Readiness Score",
              "Peak posting time predictor",
              `${FREE_MONTHLY_DIRECT_UPLOADS} direct TikTok uploads / month`,
              "Sandbox mode for testing",
            ]}
          />
          <PriceCard
            highlight
            name="Pro Creator"
            price={`$${PRO_PRICE_MONTHLY_USD}`}
            cadence="per month"
            cta="Get started"
            features={[
              "Everything in Free",
              "Unlimited direct uploads",
              "Send to TikTok drafts / inbox",
              "Performance tracker for every post",
              "Priority AI generation",
            ]}
          />
        </div>
      </section>

      {/* CTA */}
      <section className="mx-auto max-w-6xl px-6 py-10">
        <div className="relative overflow-hidden rounded-3xl border border-border bg-surface px-6 py-10 text-center md:p-16">
          <div className="grid-bg absolute inset-0 opacity-60" />
          <div className="relative">
            <Zap className="mx-auto size-8 text-cyan" />
            <h2 className="mt-4 text-2xl font-extrabold sm:text-3xl md:text-4xl">Your next post deserves a better first three seconds.</h2>
            <p className="mx-auto mt-3 max-w-xl text-muted-foreground">Connect TikTok, drop a clip, and let ViewPulse handle the rest.</p>
            <Button asChild variant="hero" size="xl" className="mt-7">
              <Link to="/signup">
                <Sparkles /> Start Free — Connect TikTok
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </PublicLayout>
  );
}

function SectionHeading({ eyebrow, title }: { eyebrow: string; title: string }) {
  return (
    <div className="mx-auto max-w-2xl text-center">
      <div className="text-xs font-semibold uppercase tracking-[0.2em] text-cyan">{eyebrow}</div>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">{title}</h2>
    </div>
  );
}

function PriceCard({
  name,
  price,
  cadence,
  features,
  cta,
  highlight,
}: {
  name: string;
  price: string;
  cadence: string;
  features: string[];
  cta: string;
  highlight?: boolean;
}) {
  return (
    <div className={highlight ? "border-gradient-brand relative rounded-3xl p-8 shadow-glow-pulse" : "glass-card rounded-3xl p-8"}>
      {highlight && (
        <span className="absolute -top-3 right-6 rounded-full bg-gradient-brand px-3 py-1 text-xs font-bold text-pulse-foreground">
          Most popular
        </span>
      )}
      <h3 className="text-lg font-bold">{name}</h3>
      <div className="mt-4 flex items-baseline gap-2">
        <span className="text-5xl font-extrabold">{price}</span>
        <span className="text-sm text-muted-foreground">{cadence}</span>
      </div>
      <ul className="mt-6 space-y-3">
        {features.map((f) => (
          <li key={f} className="flex items-start gap-2.5 text-sm">
            <Check className="mt-0.5 size-4 shrink-0 text-cyan" /> {f}
          </li>
        ))}
      </ul>
      <Button asChild variant={highlight ? "hero" : "glass"} size="xl" className="mt-8 w-full">
        <Link to="/signup">{cta}</Link>
      </Button>
    </div>
  );
}
