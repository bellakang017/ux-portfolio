"use client"

import { useState } from "react"
import { motion } from "motion/react"

const data = [
  {
    label: "Product Rec",
    human: 2.45,
    virtual: 2.05,
    p: ".033",
    sig: "*",
    isNs: false,
  },
  {
    label: "Purchase Intention",
    human: 2.76,
    virtual: 2.52,
    p: ".324",
    sig: "ns",
    isNs: true,
  },
  {
    label: "Attitude",
    human: 3.03,
    virtual: 2.39,
    p: ".002",
    sig: "**",
    isNs: false,
  },
  {
    label: "Trust / Authenticity",
    human: 2.68,
    virtual: 2.20,
    p: ".010",
    sig: "*",
    isNs: false,
  },
]

const yMin = 1.5
const yMax = 3.6
const yRange = yMax - yMin

function scaleY(val: number) {
  return ((val - yMin) / yRange) * 100
}

function Bar({
  value,
  color,
  faded,
  delay,
  label,
  condition,
  p,
}: {
  value: number
  color: string
  faded: boolean
  delay: number
  label: string
  condition: string
  p: string
}) {
  const [hovered, setHovered] = useState(false)
  const height = scaleY(value)

  return (
    <div
      className="relative flex flex-col items-center"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {hovered && (
        <div className="absolute -top-16 z-10 rounded-md border bg-background px-3 py-1.5 text-xs shadow-sm">
          <p className="font-medium">{condition}</p>
          <p className="font-mono text-muted-foreground">
            M = {value.toFixed(2)}
          </p>
        </div>
      )}
      <div className="flex h-52 w-10 items-end sm:h-64 sm:w-14">
        <motion.div
          initial={{ height: 0 }}
          whileInView={{ height: `${height}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay, ease: "easeOut" }}
          className="w-full rounded-t"
          style={{
            backgroundColor: color,
            opacity: faded ? 0.3 : 1,
          }}
        />
      </div>
    </div>
  )
}

export function TrustActionChart() {
  return (
    <div className="rounded-xl border bg-background p-6 sm:p-8">
      <h4 className="font-mono text-lg font-bold sm:text-xl">
        The Trust&ndash;Action Gap
      </h4>
      <p className="mt-1 text-sm text-muted-foreground">
        Trust and attitude differ significantly, but purchase intention does not
        &nbsp;|&nbsp; Scale: 1&ndash;5 Likert
      </p>

      {/* Legend */}
      <div className="mt-4 flex items-center gap-5 text-xs">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#A6707D]" />
          Human
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-sm bg-[#6B2E4A]" />
          Virtual
        </span>
        <span className="ml-auto text-muted-foreground/50">
          Hover bars for values
        </span>
      </div>

      {/* Chart */}
      <div className="mt-6 flex items-end justify-around gap-2 sm:gap-4">
        {data.map((d, i) => (
          <div key={d.label} className="flex flex-col items-center gap-1">
            {/* Significance marker */}
            <div className="mb-1 h-6 text-center">
              {d.isNs ? (
                <span className="font-mono text-sm font-bold italic text-[#95A5A6]">
                  ns
                </span>
              ) : (
                <span className="font-mono text-sm font-bold text-[#C0392B]">
                  {d.sig}
                </span>
              )}
            </div>

            {/* Bar pair */}
            <div className="flex gap-1">
              <Bar
                value={d.human}
                color="#A6707D"
                faded={d.isNs}
                delay={i * 0.1}
                label={d.label}
                condition="Human"
                p={d.p}
              />
              <Bar
                value={d.virtual}
                color="#6B2E4A"
                faded={d.isNs}
                delay={i * 0.1 + 0.05}
                label={d.label}
                condition="Virtual"
                p={d.p}
              />
            </div>

            {/* p-value */}
            <p className="mt-1 font-mono text-[10px] text-muted-foreground/50">
              p={d.p}
            </p>

            {/* Label */}
            <p className="mt-0.5 max-w-[80px] text-center text-xs leading-tight text-muted-foreground sm:max-w-[100px]">
              {d.label}
            </p>
          </div>
        ))}
      </div>

      {/* Y-axis labels */}
      <div className="mt-4 flex justify-between border-t pt-2 text-[10px] font-mono text-muted-foreground/40">
        <span>1.5</span>
        <span>2.0</span>
        <span>2.5</span>
        <span>3.0</span>
        <span>3.5</span>
      </div>
    </div>
  )
}

export function CredibilityDumbbell() {
  const items = [
    { item: "Authentic", virtual: 2.08, human: 2.64, gap: 0.56, top: true },
    { item: "Trustworthy", virtual: 2.21, human: 2.72, gap: 0.51, top: false },
    { item: "Reliable", virtual: 2.24, human: 2.75, gap: 0.51, top: false },
    { item: "Has Integrity", virtual: 2.29, human: 2.76, gap: 0.47, top: false },
    { item: "Genuine", virtual: 2.42, human: 2.76, gap: 0.34, top: false },
  ]

  const xMin = 1.5
  const xMax = 3.2
  const xRange = xMax - xMin

  function scaleX(val: number) {
    return ((val - xMin) / xRange) * 100
  }

  const [hoveredIdx, setHoveredIdx] = useState<number | null>(null)

  return (
    <div className="rounded-xl border bg-background p-6 sm:p-8">
      <h4 className="font-mono text-lg font-bold sm:text-xl">
        Credibility Item Gaps
      </h4>
      <p className="mt-1 text-sm text-muted-foreground">
        Top 5 items by gap &nbsp;|&nbsp; &lsquo;Authentic&rsquo; shows the
        largest difference (&Delta;=0.56)
      </p>

      <div className="mt-4 flex items-center gap-5 text-xs">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#6B2E4A]" />
          Virtual
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-2.5 w-2.5 rounded-full bg-[#A6707D]" />
          Human
        </span>
      </div>

      <div className="mt-6 space-y-5">
        {items.map((d, i) => {
          const leftPct = scaleX(d.virtual)
          const rightPct = scaleX(d.human)
          const isHovered = hoveredIdx === i

          return (
            <div
              key={d.item}
              className="group flex items-center gap-4"
              onMouseEnter={() => setHoveredIdx(i)}
              onMouseLeave={() => setHoveredIdx(null)}
            >
              <span
                className={`w-24 shrink-0 text-right text-sm sm:w-28 ${
                  d.top ? "font-semibold" : "text-muted-foreground"
                }`}
              >
                {d.item}
              </span>

              <div className="relative h-8 flex-1">
                {/* Track */}
                <div className="absolute top-1/2 h-px w-full -translate-y-1/2 bg-border" />

                {/* Segment */}
                <motion.div
                  className="absolute top-1/2 h-0.5 -translate-y-1/2"
                  style={{
                    left: `${leftPct}%`,
                    backgroundColor: d.top ? "#6B2E4A" : "#D0D0D0",
                    height: d.top ? 3 : 1.5,
                  }}
                  initial={{ width: 0 }}
                  whileInView={{ width: `${rightPct - leftPct}%` }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.08 }}
                />

                {/* Virtual dot */}
                <motion.div
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    left: `${leftPct}%`,
                    width: d.top ? 14 : 10,
                    height: d.top ? 14 : 10,
                    backgroundColor: "#6B2E4A",
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 + 0.3 }}
                />

                {/* Human dot */}
                <motion.div
                  className="absolute top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full"
                  style={{
                    left: `${rightPct}%`,
                    width: d.top ? 14 : 10,
                    height: d.top ? 14 : 10,
                    backgroundColor: "#A6707D",
                  }}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 + 0.4 }}
                />

                {/* Delta label */}
                <span
                  className={`absolute -top-4 font-mono text-xs ${
                    d.top
                      ? "font-bold text-[#C0392B]"
                      : "text-muted-foreground"
                  }`}
                  style={{
                    left: `${(leftPct + rightPct) / 2}%`,
                    transform: "translateX(-50%)",
                  }}
                >
                  &Delta;={d.gap.toFixed(2)}
                </span>

                {/* Hover tooltip */}
                {isHovered && (
                  <div
                    className="absolute -bottom-10 z-10 rounded-md border bg-background px-3 py-1 text-[11px] shadow-sm"
                    style={{
                      left: `${(leftPct + rightPct) / 2}%`,
                      transform: "translateX(-50%)",
                    }}
                  >
                    Virtual {d.virtual.toFixed(2)} &rarr; Human{" "}
                    {d.human.toFixed(2)}
                  </div>
                )}
              </div>
            </div>
          )
        })}
      </div>

      {/* X axis */}
      <div className="ml-28 mt-6 flex justify-between text-[10px] font-mono text-muted-foreground/40 sm:ml-32">
        <span>1.5</span>
        <span>2.0</span>
        <span>2.5</span>
        <span>3.0</span>
      </div>
    </div>
  )
}

export function KeyFindingsPanel() {
  const panels = [
    {
      label: "Source Credibility",
      virtual: 2.2,
      human: 2.68,
      p: ".010",
      sig: "*",
      isNs: false,
    },
    {
      label: "Attitude",
      virtual: 2.39,
      human: 3.03,
      p: ".002",
      sig: "**",
      isNs: false,
    },
    {
      label: "Purchase Intent",
      virtual: 2.52,
      human: 2.76,
      p: ".324",
      sig: "ns",
      isNs: true,
    },
  ]

  const [hoveredPanel, setHoveredPanel] = useState<number | null>(null)

  return (
    <div className="rounded-xl border bg-background p-6 sm:p-8">
      <h4 className="font-mono text-lg font-bold sm:text-xl">
        Key Findings: The Trust&ndash;Action Gap
      </h4>
      <p className="mt-1 text-sm text-muted-foreground">
        Credibility and attitude gaps are significant &mdash; but purchase
        intent is not
      </p>

      <div className="mt-6 grid grid-cols-3 gap-3 sm:gap-4">
        {panels.map((panel, i) => (
          <div
            key={panel.label}
            className={`relative rounded-lg p-4 transition-colors ${
              panel.isNs
                ? "border border-dashed border-[#95A5A6]"
                : "border bg-background"
            } ${hoveredPanel === i ? "bg-muted/30" : ""}`}
            onMouseEnter={() => setHoveredPanel(i)}
            onMouseLeave={() => setHoveredPanel(null)}
          >
            <p className="font-mono text-xs font-bold">{panel.label}</p>
            <p className="mt-0.5 font-mono text-[10px] text-muted-foreground">
              p = {panel.p}
            </p>

            {/* Mini bars */}
            <div className="mt-4 flex items-end gap-2">
              <div className="flex flex-1 flex-col items-center">
                <motion.div
                  className="w-full rounded-t"
                  style={{
                    backgroundColor: panel.isNs ? "transparent" : "#6B2E4A",
                    border: panel.isNs
                      ? "1.5px dashed #95A5A6"
                      : "none",
                    borderBottom: panel.isNs ? "none" : undefined,
                  }}
                  initial={{ height: 0 }}
                  whileInView={{
                    height: `${(panel.virtual / 3.5) * 100}px`,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                />
                <span className="mt-1.5 text-[10px] text-muted-foreground">
                  V
                </span>
              </div>
              <div className="flex flex-1 flex-col items-center">
                <motion.div
                  className="w-full rounded-t"
                  style={{
                    backgroundColor: panel.isNs ? "transparent" : "#A6707D",
                    border: panel.isNs
                      ? "1.5px dashed #95A5A6"
                      : "none",
                    borderBottom: panel.isNs ? "none" : undefined,
                  }}
                  initial={{ height: 0 }}
                  whileInView={{
                    height: `${(panel.human / 3.5) * 100}px`,
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 + 0.05 }}
                />
                <span className="mt-1.5 text-[10px] text-muted-foreground">
                  H
                </span>
              </div>
            </div>

            {/* Sig marker */}
            <div className="mt-3 text-center">
              {panel.isNs ? (
                <span className="font-mono text-sm font-bold italic text-[#95A5A6]">
                  ns
                </span>
              ) : (
                <span className="font-mono text-sm font-bold text-[#C0392B]">
                  {panel.sig}
                </span>
              )}
            </div>

            {/* Hover detail */}
            {hoveredPanel === i && (
              <div className="absolute -bottom-12 left-1/2 z-10 -translate-x-1/2 whitespace-nowrap rounded-md border bg-background px-3 py-1.5 text-[11px] shadow-sm">
                Virtual {panel.virtual.toFixed(2)} vs Human{" "}
                {panel.human.toFixed(2)} &nbsp;|&nbsp; &Delta;=
                {(panel.human - panel.virtual).toFixed(2)}
              </div>
            )}
          </div>
        ))}
      </div>

      <p className="mt-6 text-center font-mono text-[11px] text-muted-foreground/40">
        * p &lt; .05 &nbsp;&nbsp; ** p &lt; .01 &nbsp;&nbsp; ns = not
        significant &nbsp;&nbsp;|&nbsp;&nbsp; N = 66
      </p>
    </div>
  )
}
