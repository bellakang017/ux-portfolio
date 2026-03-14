"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { InView } from "@/components/ui/in-view"

const featured = {
  title: "Virtual Influencer Strategy",
  description: "Should brands use virtual influencers? Controlled experiment (N=83) → 5-action playbook.",
  tags: ["Strategy", "Research", "Data Viz"],
  year: "2026",
  href: "/work/vi-strategy",
  thumbnail: "/vi-strategy/grouped_bar_dvs.png",
  thumbnailAlt: "Group comparison chart",
  bg: "bg-[#1a3a5c]",
}

const projects = [
  {
    title: "Trust–Action Gap",
    description: "Trust drops but purchase intent doesn\u2019t. Between-subjects experiment, N=86.",
    tags: ["Research", "Data Viz"],
    year: "2025",
    href: "/work/trust-study",
    thumbnail: "/trust-study/chart1_trust_action_gap.png",
    thumbnailAlt: "Trust action gap chart",
  },
  {
    title: "Dasique Product Design",
    description: "End-to-end product design for a K-Beauty brand.",
    tags: ["Product Design", "UX"],
    year: "2023",
    href: "/work/dasique",
    thumbnail: null,
    thumbnailAlt: "",
  },
  {
    title: "Interview Instinct Quiz",
    description: "Interactive tool for behavioral interview practice.",
    tags: ["Programming", "Education"],
    year: "2024",
    href: "/work/interview-instinct",
    thumbnail: null,
    thumbnailAlt: "",
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
                  <Image
                    src={featured.thumbnail}
                    alt={featured.thumbnailAlt}
                    width={700}
                    height={400}
                    className="h-full w-auto rounded-lg border border-white/20 shadow-xl"
                  />
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
          {projects.map((project, i) => (
            <InView
              key={project.href}
              variants={{ hidden: { opacity: 0, y: 16 }, visible: { opacity: 1, y: 0 } }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              viewOptions={{ once: true }}
            >
              <Link href={project.href} className="group block">
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
              </Link>
            </InView>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t py-10 text-center text-xs text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Bella Kang</p>
      </footer>
    </main>
  )
}
