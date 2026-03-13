"use client"

import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import { TextAnimate } from "@/components/ui/text-animate"
import { TextEffect } from "@/components/ui/text-effect"
import { AnimatedGroup } from "@/components/ui/animated-group"
import { MagicCard } from "@/components/ui/magic-card"

const projects = [
  {
    title: "Trust\u2013Action Gap",
    description: "Between-subjects experiment (N=86) on virtual vs. human influencer credibility. Trust drops, but purchase intent doesn\u2019t.",
    tags: ["Research", "Data Viz", "UX"],
    year: "2025",
    href: "/work/trust-study",
  },
  {
    title: "Dasique Product Design",
    description: "End-to-end product design for a K-Beauty brand\u2019s digital experience.",
    tags: ["Product Design", "UX", "K-Beauty"],
    year: "2023",
    href: "/work/dasique",
  },
  {
    title: "Interview Instinct Quiz",
    description: "Interactive learning tool that helps students practice behavioral interview responses.",
    tags: ["Programming", "Education"],
    year: "2024",
    href: "/work/interview-instinct",
  },
  {
    title: "Copilot Adoption Kit",
    description: "Toolkit for onboarding teams to AI-assisted workflows in education settings.",
    tags: ["AI", "Education"],
    year: "2026",
    href: "/work/copilot-kit",
  },
]

export default function Home() {
  return (
    <main className="min-h-svh">
      {/* Hero */}
      <section className="flex min-h-[85vh] flex-col items-center justify-center px-6">
        <div className="mx-auto max-w-2xl text-center">
          <TextAnimate
            as="h1"
            by="word"
            animation="blurInUp"
            className="text-5xl font-bold tracking-tight sm:text-7xl"
            once
          >
            Bella Kang
          </TextAnimate>

          <TextEffect
            as="p"
            per="word"
            preset="fade-in-blur"
            delay={0.4}
            className="mt-6 text-lg text-muted-foreground sm:text-xl"
          >
            UX Researcher & Designer
          </TextEffect>

          <TextEffect
            as="p"
            per="word"
            preset="fade"
            delay={0.8}
            className="mt-3 text-sm text-muted-foreground/70"
          >
            Designing with evidence. Building with intent.
          </TextEffect>
        </div>
      </section>

      {/* Projects */}
      <section className="mx-auto max-w-5xl px-6 pb-32">
        <h2 className="mb-12 text-sm font-medium uppercase tracking-widest text-muted-foreground">
          Selected Work
        </h2>

        <AnimatedGroup
          preset="blur-slide"
          className="grid gap-4 sm:grid-cols-2"
        >
          {projects.map((project) => (
            <Link key={project.href} href={project.href} className="group">
              <MagicCard
                className="rounded-xl"
                gradientColor="#f5f5f5"
                gradientOpacity={0.6}
                gradientFrom="#e5e5e5"
                gradientTo="#d4d4d4"
              >
                <div className="flex flex-col justify-between p-8 sm:min-h-[240px]">
                  <div>
                    <div className="flex items-start justify-between">
                      <h3 className="text-xl font-semibold tracking-tight">
                        {project.title}
                      </h3>
                      <ArrowUpRight className="h-4 w-4 text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
                    </div>
                    <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                      {project.description}
                    </p>
                    <div className="mt-3 flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full border px-2.5 py-0.5 text-xs text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <p className="mt-6 text-sm text-muted-foreground">
                    {project.year}
                  </p>
                </div>
              </MagicCard>
            </Link>
          ))}
        </AnimatedGroup>
      </section>

      {/* Footer */}
      <footer className="border-t py-12 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Bella Kang</p>
      </footer>
    </main>
  )
}
