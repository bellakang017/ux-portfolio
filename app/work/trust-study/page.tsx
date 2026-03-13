"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowLeft, FileText, ArrowUpRight } from "lucide-react"
import { TextAnimate } from "@/components/ui/text-animate"
import { TextEffect } from "@/components/ui/text-effect"
import { InView } from "@/components/ui/in-view"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text"
import { MagicCard } from "@/components/ui/magic-card"
import {
  TrustActionChart,
  CredibilityDumbbell,
  KeyFindingsPanel,
} from "@/components/trust-action-chart"

const meta = {
  title: "Trust\u2013Action Gap",
  subtitle:
    "Virtual influencer identity reduces credibility (p=.010) and attitude (p=.002), but purchase intention persists (p=.324). Between-subjects experiment, N=86.",
  role: "Project Lead",
  timeline: "Spring 2025",
  methods: ["Experimental Research", "AI Trust", "UX"],
  tools: ["Qualtrics", "R \u00b7 ggplot2", "Figma"],
}

const insightCards = [
  { stat: "\u0394 0.56", label: "Authenticity gap \u2014 largest of all 8 credibility items" },
  { stat: "p = .002", label: "Attitude significantly lower for virtual" },
  { stat: "p = .324 ns", label: "But purchase intent? No difference" },
]

const recommendations = [
  {
    title: "Show capability before identity",
    body: "Users judge genuineness before reliability \u2014 lead with what the AI can do, not what it is.",
  },
  {
    title: "Graduate the disclosure",
    body: "Direct AI disclosure triggered 27.7% strong negatives; timing and framing are open design variables.",
  },
  {
    title: "Design for functional trust",
    body: "Purchase intent persists despite negative attitude \u2014 support confident action, not emotional comfort.",
  },
]

const myRole = [
  "Research design & Qualtrics survey instrument (randomization, attention checks, validated scales)",
  "Statistical analysis: item-level mean comparison, response distribution across all constructs",
  "Final report: Methods section + Discussion Part 2 (TPB, CASA paradigm, Proteus Effect). Developed \u2018emotional vs functional authenticity\u2019 framework",
]

const slides = [
  "/trust-study/slide-1.png",
  "/trust-study/slide-2.png",
  "/trust-study/slide-3.png",
  "/trust-study/slide-4.png",
  "/trust-study/slide-5.png",
  "/trust-study/slide-6.png",
  "/trust-study/slide-7.png",
  "/trust-study/slide-8.png",
  "/trust-study/slide-9.png",
  "/trust-study/slide-10.png",
]

export default function TrustStudyPage() {
  return (
    <main className="min-h-svh">
      {/* Nav */}
      <nav className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur-sm">
        <div className="mx-auto flex max-w-3xl items-center px-6 py-4">
          <Link
            href="/"
            className="flex items-center gap-1.5 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            Back
          </Link>
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
      </section>

      {/* The Insight */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <InView
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewOptions={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          <h3 className="text-2xl font-semibold tracking-tight">The Insight</h3>
          <p className="mt-3 text-lg font-medium">
            People distrust virtual influencers but buy anyway.
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

      {/* Evidence */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <InView
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewOptions={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          <h3 className="text-2xl font-semibold tracking-tight">Evidence</h3>
          <p className="mt-2 text-xs text-muted-foreground/50">
            Hover over bars for exact values
          </p>

          <div className="mt-6 space-y-6">
            <TrustActionChart />
            <CredibilityDumbbell />
            <KeyFindingsPanel />
          </div>

          <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
            Attitude toward the virtual influencer dropped significantly
            (&Delta;=0.39, p=.002), but purchase intention showed no meaningful
            difference (&Delta;=0.16, p=.324). The gap between what people feel
            and what they do is where the design opportunity lives.
          </p>
        </InView>
      </section>

      {/* Design Recommendations */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <InView
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewOptions={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          <h3 className="text-2xl font-semibold tracking-tight">Design Recommendations</h3>

          <AnimatedGroup preset="blur-slide" className="mt-6 grid gap-4">
            {recommendations.map((item, i) => (
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

      {/* Research Presentation */}
      <section className="mx-auto max-w-3xl px-6 pb-16">
        <InView
          variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewOptions={{ once: true, margin: "0px 0px -80px 0px" }}
        >
          <h3 className="text-2xl font-semibold tracking-tight">Research Presentation</h3>
          <p className="mt-2 text-sm text-muted-foreground">
            Final presentation delivered to ADV 382 Quantitative and Qualitative Research, UT Austin
          </p>

          <div className="mt-6 flex gap-3 overflow-x-auto pb-4 snap-x snap-mandatory">
            {slides.map((src, i) => (
              <div key={src} className="flex-none w-[80%] sm:w-[60%] snap-center overflow-hidden rounded-lg border">
                <Image src={src} alt={`Presentation slide ${i + 1}`} width={800} height={450} className="w-full" />
              </div>
            ))}
          </div>
          <p className="mt-2 text-center text-xs text-muted-foreground/40">&larr; Scroll &rarr;</p>

          <a
            href="/trust-study/final-report.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="group mt-8 flex items-center justify-between rounded-xl border bg-foreground/[0.03] px-6 py-5 transition-colors hover:bg-foreground/[0.06]"
          >
            <div className="flex items-center gap-4">
              <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-foreground/[0.06]">
                <FileText className="h-5 w-5 text-foreground/70" />
              </div>
              <div>
                <p className="text-sm font-semibold">Read the Full Research Report</p>
                <p className="text-xs text-muted-foreground">
                  38 pages &nbsp;&middot;&nbsp; Methods, Results, Discussion &nbsp;&middot;&nbsp; PDF
                </p>
              </div>
            </div>
            <ArrowUpRight className="h-4 w-4 text-muted-foreground transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
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
