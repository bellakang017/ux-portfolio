"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, ArrowUpRight, BarChart3, ExternalLink } from "lucide-react"
import { TextAnimate } from "@/components/ui/text-animate"
import { TextEffect } from "@/components/ui/text-effect"
import { InView } from "@/components/ui/in-view"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { MagicCard } from "@/components/ui/magic-card"

const meta = {
  title: "Virtual Influencer Strategy",
  subtitle:
    "Controlled experiment (N=83): virtual influencers cost 30% less but score 0.39 lower on trust. We built a 5-action playbook to capture the savings without the penalty.",
  role: "Lead Researcher & Strategist",
  timeline: "Spring 2026",
  methods: ["Experimental Design", "Automated Analysis", "Strategy"],
  tools: ["Python", "Qualtrics", "24 Statistical Methods"],
}

const insightCards = [
  { stat: "d = 0.55", label: "Trust gap — virtual influencers score significantly lower" },
  { stat: "β = .293", label: "Attitude → purchase intent (stronger than trust)" },
  { stat: "p = .027", label: "Trust mediates purchase intent — it's the mechanism" },
]

const categoryFit = [
  { category: "Fashion / Streetwear", fit: "deploy", reason: "Attitude-driven. Novelty is an asset." },
  { category: "Gaming / Tech", fit: "deploy", reason: "Digital-native audience. Samsung: 126M views." },
  { category: "Beauty / Skincare", fit: "hybrid", reason: "Visual fit but 'real skin' proof needed." },
  { category: "Health / Wellness", fit: "avoid", reason: "Trust mediates purchase (p=.027). Gap is fatal." },
  { category: "Finance / Insurance", fit: "avoid", reason: "Maximum trust sensitivity. Regulatory risk." },
]

const fitColors: Record<string, string> = {
  deploy: "bg-green-50 text-green-700 border-green-200",
  hybrid: "bg-amber-50 text-amber-700 border-amber-200",
  avoid: "bg-red-50 text-red-700 border-red-200",
}

const strategies = [
  {
    title: "Right category",
    body: "Fashion, gaming = deploy. Health, finance = avoid. Trust mediates purchase (p=.027).",
  },
  {
    title: "Emotion over credibility",
    body: "Attitude predicts purchase 46% more than trust. Entertain first, sell second.",
  },
  {
    title: "VI for reach, human for close",
    body: "3× organic engagement but 0.6% vs 3.6% on sponsored (BMW case). Hybrid funnel.",
  },
  {
    title: "Segment audiences",
    body: "4 clusters, 4 strategies. Believers convert. Skeptics need transparency. Resistors — skip.",
  },
  {
    title: "Own the disclosure",
    body: "FTC enforcement up 340%. Concealment = backlash. Make AI-powered the brand feature.",
  },
]

const cases = [
  {
    name: "Miquela × Samsung",
    outcome: "success" as const,
    stat: "126M organic views",
    why: "Entertainment-first in a tech category. Attitude play, not trust play.",
    img: "https://cdn.prod.website-files.com/5d7e8885cad5174a2fcb98d7/64933f9c0c7c9d517168b331_5eddd9f5af2fbd3c05bffc66_virtual-influencer-lil-miquela.jpeg",
  },
  {
    name: "Noonoouri × Dior",
    outcome: "success" as const,
    stat: "130+ luxury collabs",
    why: "Cartoon aesthetic bypasses trust question entirely. Fashion = pure attitude.",
    img: "https://cdn.prod.website-files.com/5d7e8885cad5174a2fcb98d7/64933f9d5ac24012720d4bea_5eddda6b255e446d17a740f1_virtual-influencer-noonoouri.jpeg",
  },
  {
    name: "Miquela × BMW iX2",
    outcome: "failure" as const,
    stat: "0.6% vs 3.6%",
    why: "Automotive is trust-dependent. VI at bottom of funnel = wrong fit.",
    img: "https://www.brandinginasia.com/wp-content/uploads/2023/10/BMW-and-Lil-Miquela.jpg",
  },
]

const charts = [
  { src: "/vi-strategy/grouped_bar_dvs.png", label: "Group comparison across all DVs" },
  { src: "/vi-strategy/forest_plot.png", label: "Effect size forest plot" },
  { src: "/vi-strategy/violin_trust.png", label: "Trust distribution by group" },
  { src: "/vi-strategy/mediation_diagram.png", label: "Mediation path model" },
  { src: "/vi-strategy/regression_scatter.png", label: "Trust–PI regression by group" },
  { src: "/vi-strategy/cluster_scatter.png", label: "Consumer segments" },
]

const myRole = [
  "Experiment design: between-subjects (N=83), Qualtrics survey with validated scales (Trust α=.89, PI α=.90, Attitude α=.94)",
  "Automated analysis pipeline: 24 statistical methods (t-tests, mediation, EFA, clustering, Bayesian, path analysis) with quality scoring",
  "Strategy development: translated experimental findings into 5 actionable recommendations with market validation",
  "Deliverable creation: 9-slide strategy deck + full research portfolio with 11 publication-quality visualizations",
]

export default function VIStrategyPage() {
  return (
    <main className="min-h-svh">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center justify-between px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </Link>
          <a
            href="https://bellakang017.github.io/bella-autolab/output/ghost-deck/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            Strategy Deck
            <ExternalLink className="h-3.5 w-3.5" />
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="mx-auto max-w-3xl px-6 pt-20 pb-16">
        <TextAnimate
          as="h1"
          by="word"
          animation="blurInUp"
          className="text-4xl font-bold tracking-tight sm:text-5xl"
          once
        >
          {meta.title}
        </TextAnimate>

        <TextEffect
          as="p"
          per="word"
          preset="fade-in-blur"
          delay={0.4}
          className="mt-6 text-lg leading-relaxed text-muted-foreground"
        >
          {meta.subtitle}
        </TextEffect>

        <div className="mt-10 grid grid-cols-2 gap-6 border-t pt-8 sm:grid-cols-4">
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60">Role</p>
            <p className="mt-1 text-sm">{meta.role}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60">Timeline</p>
            <p className="mt-1 text-sm">{meta.timeline}</p>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60">Methods</p>
            <div className="mt-1 flex flex-wrap gap-1.5">
              {meta.methods.map((m) => (
                <span key={m} className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground">{m}</span>
              ))}
            </div>
          </div>
          <div>
            <p className="text-xs font-medium uppercase tracking-widest text-muted-foreground/60">Tools</p>
            <p className="mt-1 text-sm text-muted-foreground">{meta.tools.join(", ")}</p>
          </div>
        </div>

        {/* Deliverables — right after hero */}
        <div className="mt-10 grid gap-4 sm:grid-cols-2">
          <a
            href="https://bellakang017.github.io/bella-autolab/output/ghost-deck/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border bg-foreground/[0.03] px-6 py-5 transition-colors hover:bg-foreground/[0.06]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/[0.06]">
                <BarChart3 className="h-5 w-5 text-foreground/70" />
              </div>
              <div>
                <p className="text-sm font-semibold">Strategy Deck</p>
                <p className="text-xs text-muted-foreground">9 slides &middot; Interactive</p>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>

          <a
            href="https://bellakang017.github.io/bella-autolab/output/portfolio/"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center justify-between rounded-xl border bg-foreground/[0.03] px-6 py-5 transition-colors hover:bg-foreground/[0.06]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/[0.06]">
                <BarChart3 className="h-5 w-5 text-foreground/70" />
              </div>
              <div>
                <p className="text-sm font-semibold">Research Portfolio</p>
                <p className="text-xs text-muted-foreground">24 analyses &middot; Full data</p>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>
      </section>

      {/* Key Insight */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <InView
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewOptions={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          <h3 className="text-2xl font-semibold tracking-tight">The Insight</h3>
          <p className="mt-3 text-lg font-medium">
            Virtual influencers save money but carry a trust penalty. The fix isn&apos;t better AI &mdash; it&apos;s better strategy.
          </p>

          <AnimatedGroup preset="blur-slide" className="mt-8 grid grid-cols-3 gap-4">
            {insightCards.map((card) => (
              <div key={card.stat} className="rounded-lg border p-4">
                <AnimatedGradientText
                  className="font-mono text-2xl font-bold"
                  colorFrom="#1a1a1a"
                  colorTo="#888888"
                  speed={0.5}
                >
                  {card.stat}
                </AnimatedGradientText>
                <p className="mt-2 text-xs leading-snug text-muted-foreground">{card.label}</p>
              </div>
            ))}
          </AnimatedGroup>
        </InView>
      </section>

      {/* Evidence — Charts */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <InView
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewOptions={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          <h3 className="text-2xl font-semibold tracking-tight">Evidence</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            24 automated analyses, 12 passed quality threshold. Key visualizations below.
          </p>

          <div className="mt-6 grid grid-cols-2 gap-4">
            {charts.map((chart) => (
              <div key={chart.src} className="overflow-hidden rounded-lg border">
                <Image src={chart.src} alt={chart.label} width={600} height={400} className="w-full" />
                <p className="px-3 py-2 text-center text-xs text-muted-foreground">{chart.label}</p>
              </div>
            ))}
          </div>
        </InView>
      </section>

      {/* Category Fit */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <InView
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewOptions={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          <h3 className="text-2xl font-semibold tracking-tight">Where VIs Work (and Don&apos;t)</h3>
          <div className="mt-6 space-y-2">
            {categoryFit.map((item) => (
              <div key={item.category} className="flex items-center gap-4 rounded-lg border px-5 py-3.5">
                <span className={`shrink-0 rounded border px-2.5 py-0.5 text-xs font-semibold ${fitColors[item.fit]}`}>
                  {item.fit === "deploy" ? "Deploy" : item.fit === "hybrid" ? "Hybrid" : "Avoid"}
                </span>
                <span className="text-sm font-medium">{item.category}</span>
                <span className="ml-auto text-xs text-muted-foreground">{item.reason}</span>
              </div>
            ))}
          </div>
        </InView>
      </section>

      {/* Case Studies */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <InView
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewOptions={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          <h3 className="text-2xl font-semibold tracking-tight">Market Validation</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Real campaigns that prove the playbook.
          </p>

          <AnimatedGroup preset="blur-slide" className="mt-6 grid gap-4">
            {cases.map((c) => (
              <MagicCard
                key={c.name}
                className="rounded-xl"
                gradientColor="#f5f5f5"
                gradientOpacity={0.6}
                gradientFrom="#e5e5e5"
                gradientTo="#d4d4d4"
              >
                <div className="flex gap-5 p-5">
                  <div className="h-24 w-24 shrink-0 overflow-hidden rounded-lg">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img src={c.img} alt={c.name} className="h-full w-full object-cover" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-2">
                      <span className={`rounded border px-2 py-0.5 text-xs font-semibold ${
                        c.outcome === "success" ? "bg-green-50 text-green-700 border-green-200" : "bg-red-50 text-red-700 border-red-200"
                      }`}>
                        {c.outcome === "success" ? "Success" : "Failure"}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">{c.stat}</span>
                    </div>
                    <h4 className="mt-1.5 font-semibold">{c.name}</h4>
                    <p className="mt-1 text-sm text-muted-foreground">{c.why}</p>
                  </div>
                </div>
              </MagicCard>
            ))}
          </AnimatedGroup>
        </InView>
      </section>

      {/* Strategy Recommendations */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <InView
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewOptions={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          <h3 className="text-2xl font-semibold tracking-tight">5 Recommendations</h3>

          <AnimatedGroup preset="blur-slide" className="mt-6 grid gap-4">
            {strategies.map((item, i) => (
              <MagicCard
                key={item.title}
                className="rounded-xl"
                gradientColor="#f5f5f5"
                gradientOpacity={0.6}
                gradientFrom="#e5e5e5"
                gradientTo="#d4d4d4"
              >
                <div className="p-6">
                  <p className="font-mono text-xs text-muted-foreground/40">{String(i + 1).padStart(2, "0")}</p>
                  <h4 className="mt-1 font-semibold">{item.title}</h4>
                  <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
                </div>
              </MagicCard>
            ))}
          </AnimatedGroup>
        </InView>
      </section>

      {/* My Role */}
      <section className="mx-auto max-w-3xl px-6 pb-32">
        <InView
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewOptions={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          <h3 className="text-2xl font-semibold tracking-tight">My Role</h3>

          <AnimatedGroup preset="blur-slide" className="mt-6 space-y-3" asChild="div">
            {myRole.map((item, i) => (
              <div key={i} className="flex gap-3 text-sm leading-relaxed">
                <span className="font-mono text-muted-foreground/40">{String(i + 1).padStart(2, "0")}</span>
                <span className="text-muted-foreground">{item}</span>
              </div>
            ))}
          </AnimatedGroup>
        </InView>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 text-center text-sm text-muted-foreground">
        <Link href="/" className="transition-colors hover:text-foreground">&larr; Back to all projects</Link>
      </footer>
    </main>
  )
}
