"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, X, FileText, Play } from "lucide-react"
import { InView } from "@/components/ui/in-view"

const featured = {
  title: "Grad Pokemon Quiz",
  description:
    "How do you turn awkward grad school networking into genuine connection? A gamified personality quiz disguised as a Pok\u00e9mon battle \u2014 11 screens, 7 personality types, 51 Pok\u00e9mon.",
  tags: ["Game Design", "Product Design", "UX Engineering", "Gamification"],
  year: "2026",
  href: "https://bella-sandbox.vercel.app/case-study",
  thumbnail: null,
  thumbnailAlt: "Grad Pokemon Quiz screenshot",
  bg: "bg-[#0a0505]",
}

const projects = [
  {
    title: "Virtual Influencer Strategy",
    description:
      "Should brands use virtual influencers? Controlled experiment (N=83) \u2192 5-action playbook.",
    tags: ["Strategy", "Research", "Data Viz"],
    year: "2026",
    href: "/work/vi-strategy",
    thumbnail: "/vi-strategy/grouped_bar_dvs.png",
    thumbnailAlt: "Group comparison chart",
  },
  {
    title: "Trust\u2013Action Gap",
    description: "Trust drops but purchase intent doesn\u2019t. Between-subjects experiment, N=86.",
    tags: ["Research", "Data Viz"],
    year: "2025",
    href: "/work/trust-study",
    thumbnail: "/trust-study/chart1_trust_action_gap.png",
    thumbnailAlt: "Trust action gap chart",
  },
  {
    title: "Interview Instinct Quiz",
    description: "What\u2019s your interview animal? 24 scenarios reveal your instinct type \u2014 8 personality archetypes for behavioral interview coaching. Built for IWG Workshop at UT Austin.",
    tags: ["Game Design", "UX Engineering", "Education"],
    year: "2026",
    href: "#interview-instinct-modal",
    thumbnail: "/interview-instinct/thumbnail.svg",
    thumbnailAlt: "Interview Instinct Quiz",
    hasModal: true,
  },
  {
    title: "Copilot Adoption Kit",
    description: "AI-assisted workflow onboarding toolkit.",
    tags: ["AI", "Education"],
    year: "2026",
    href: "/work/copilot-kit",
    thumbnail: null,
    thumbnailAlt: "",
  },
]

export default function Home() {
  const [modalOpen, setModalOpen] = useState(false)

  return (
    <main className="min-h-svh">
      {/* Hero — minimal */}
      <section className="px-6 pt-32 pb-20">
        <div className="mx-auto max-w-4xl">
          <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
            Bella Kang
          </h1>
          <p className="mt-4 max-w-md text-base text-muted-foreground">
            UX researcher who designs with evidence.
          </p>
        </div>
      </section>

      {/* Featured Project — large */}
      <section className="mx-auto max-w-4xl px-6 pb-8">
        <InView
          variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
          transition={{ duration: 0.4 }}
          viewOptions={{ once: true }}
        >
          <Link href={featured.href} className="group block">
            <div className="overflow-hidden rounded-2xl border transition-shadow hover:shadow-lg">
              {/* Thumbnail — large */}
              <div className={`relative h-64 sm:h-80 overflow-hidden ${featured.bg}`}>
                <div className="absolute inset-0 flex items-center justify-center p-8">
                  {featured.thumbnail ? (
                    <Image
                      src={featured.thumbnail}
                      alt={featured.thumbnailAlt}
                      width={700}
                      height={400}
                      className="h-full w-auto rounded-lg border border-white/20 shadow-xl"
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-3">
                      <svg width="80" height="80" viewBox="0 0 80 80" fill="none" className="opacity-60">
                        <circle cx="40" cy="40" r="36" stroke="#ef4444" strokeWidth="4" />
                        <line x1="4" y1="40" x2="76" y2="40" stroke="#ef4444" strokeWidth="4" />
                        <circle cx="40" cy="40" r="10" stroke="#ef4444" strokeWidth="4" fill="#0a0505" />
                      </svg>
                      <span className="text-sm font-medium tracking-wide text-white/40">
                        CATCH &apos;EM ALL
                      </span>
                    </div>
                  )}
                </div>
              </div>
              {/* Info */}
              <div className="flex items-start justify-between p-6">
                <div>
                  <h2 className="text-lg font-semibold tracking-tight">
                    {featured.title}
                  </h2>
                  <p className="mt-1 text-sm text-muted-foreground">
                    {featured.description}
                  </p>
                  <div className="mt-3 flex items-center gap-3">
                    <span className="text-xs text-muted-foreground/60">{featured.year}</span>
                    <div className="flex gap-1.5">
                      {featured.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border px-2 py-0.5 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <ArrowUpRight className="mt-1 h-4 w-4 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
              </div>
            </div>
          </Link>
        </InView>
      </section>

      {/* Other Projects — 2-col grid */}
      <section className="mx-auto max-w-4xl px-6 pb-32">
        <div className="grid gap-4 sm:grid-cols-2">
          {projects.map((project, i) => {
            const isModal = "hasModal" in project && project.hasModal

            const cardContent = (
              <div className="overflow-hidden rounded-xl border transition-shadow hover:shadow-md">
                {/* Thumbnail */}
                <div className="relative h-40 overflow-hidden bg-muted/30">
                  {project.thumbnail ? (
                    <Image
                      src={project.thumbnail}
                      alt={project.thumbnailAlt}
                      width={500}
                      height={280}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center">
                      <span className="text-3xl font-bold tracking-tight text-muted-foreground/10">
                        {project.title.charAt(0)}
                      </span>
                    </div>
                  )}
                </div>
                {/* Info */}
                <div className="flex items-start justify-between p-5">
                  <div>
                    <h3 className="text-sm font-semibold tracking-tight">
                      {project.title}
                    </h3>
                    <p className="mt-1 text-xs text-muted-foreground line-clamp-2">
                      {project.description}
                    </p>
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-xs text-muted-foreground/50">{project.year}</span>
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border px-2 py-0.5 text-[10px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <ArrowUpRight className="mt-0.5 h-3.5 w-3.5 shrink-0 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                </div>
              </div>
            )

            return (
              <InView
                key={project.title}
                variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                viewOptions={{ once: true }}
              >
                {isModal ? (
                  <button
                    onClick={() => setModalOpen(true)}
                    className="group block w-full text-left"
                  >
                    {cardContent}
                  </button>
                ) : (
                  <Link href={project.href} className="group block">
                    {cardContent}
                  </Link>
                )}
              </InView>
            )
          })}
        </div>
      </section>

      {/* Interview Instinct Modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4"
          onClick={() => setModalOpen(false)}
        >
          {/* Backdrop */}
          <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

          {/* Modal */}
          <div
            className="relative w-full max-w-sm rounded-2xl border bg-background p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close button */}
            <button
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-muted-foreground hover:text-foreground transition-colors"
            >
              <X className="h-4 w-4" />
            </button>

            <h3 className="text-lg font-semibold tracking-tight">
              Interview Instinct
            </h3>
            <p className="mt-1 text-sm text-muted-foreground">
              Choose how you&apos;d like to explore this project.
            </p>

            <div className="mt-5 space-y-3">
              {/* Option 1: Case Study / Handout */}
              <a
                href="https://bellakang017.github.io/iwg-handout-v10.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border p-4 transition-all hover:border-foreground/20 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <FileText className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Workshop Guide</p>
                  <p className="text-xs text-muted-foreground">
                    IWG handout with types, HIVE framework, and exercises
                  </p>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
              </a>

              {/* Option 2: Play the Quiz */}
              <a
                href="https://bellakang017.github.io/interview-instinct.html"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 rounded-xl border p-4 transition-all hover:border-foreground/20 hover:shadow-sm"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-muted">
                  <Play className="h-5 w-5 text-muted-foreground" />
                </div>
                <div className="flex-1">
                  <p className="text-sm font-medium">Play the Quiz</p>
                  <p className="text-xs text-muted-foreground">
                    24 scenarios — discover your interview animal
                  </p>
                </div>
                <ArrowUpRight className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
              </a>
            </div>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="border-t py-10 text-center text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Bella Kang</p>
      </footer>
    </main>
  )
}
