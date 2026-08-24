import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Bot, CheckCircle2, Cog, Database, Sparkles } from "lucide-react";
import { AnimatedBar, CountUp, FadeIn } from "@/components/Motion";

export const Route = createFileRoute("/process")({
  head: () => ({
    meta: [
      { title: "Process & Automation — Tarun Shendge" },
      {
        name: "description",
        content:
          "Architected AI chains and automation workflows that mitigate global trade risk and streamline regulatory compliance.",
      },
      { property: "og:title", content: "Process & Automation — Tarun Shendge" },
      {
        property: "og:description",
        content: "Scaling intelligence through risk automation.",
      },
    ],
  }),
  component: ProcessPage,
});

const stats = [
  { v: "5K+", l: "Hours Saved" },
  { v: "280+", l: "Websites Monitored" },
  { v: "4+", l: "Years Risk Exp" },
  { v: "AI", l: "Agent Native" },
];

const tools = [
  { name: "Python SDK", pct: 92 },
  { name: "OpenArena Chain", pct: 85 },
  { name: "Power BI", pct: 90 },
  { name: "Power Automate", pct: 88 },
  { name: "Cloud A.I.", pct: 80 },
  { name: "Copilot Studio", pct: 76 },
];

const pipeline = [
  {
    n: "01",
    title: "Ingestion",
    body: "Scraping and aggregating raw data from over 280+ disparate regulatory sources globally.",
  },
  {
    n: "02",
    title: "Transformation",
    body: "AI-driven summarization and categorization of complex legal texts into actionable risk points.",
  },
  {
    n: "03",
    title: "Action",
    body: "Automated reporting and alerting systems that notify key stakeholders in real-time.",
  },
];

function ProcessPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      {/* Hero */}
      <span className="text-[11px] font-medium uppercase tracking-widest text-primary">
        Process & Automation
      </span>
      <h1 className="mt-3 max-w-3xl text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
        Scaling <span className="text-primary">Intelligence</span>
        <br />
        through Risk Automation.
      </h1>
      <p className="mt-6 max-w-2xl text-sm text-muted-foreground">
        I architect complex AI chains and automated workflows to mitigate global trade risk, turning
        regulatory complexity into streamlined operational engines.
      </p>

      {/* Stats */}
      <div className="mt-14 grid grid-cols-2 gap-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <FadeIn key={s.l} delay={i * 0.08}>
            <div className="text-center">
              <CountUp value={s.v} className="text-5xl font-extrabold text-primary" />
              <div className="mt-2 text-xs font-medium uppercase tracking-widest text-muted-foreground">
                {s.l}
              </div>
            </div>
          </FadeIn>
        ))}
      </div>

      {/* Technical Implementations */}
      <div className="mt-20">
        <h2 className="text-center text-3xl font-bold tracking-tight">Technical Implementations</h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          Case studies in efficiency and compliance engineering.
        </p>

        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {/* Regulatory Surveillance Engine */}
          <article className="rounded-2xl border border-white/10 bg-surface p-6 lg:col-span-2">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-primary">
              <Cog className="h-4 w-4" /> Automation Architecture
            </div>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-2xl font-bold text-foreground">Regulatory Surveillance Engine</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  Engineered and deployed automation workflows using Python, AI Agents, and Power
                  Automate to monitor 280+ regulatory websites, successfully eliminating 5,000+ hours
                  of manual tracking and risk analysis.
                </p>
                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="rounded-md bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary ring-1 ring-primary/30">
                    Real-time Data
                  </span>
                  <span className="rounded-md bg-primary/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-widest text-primary ring-1 ring-primary/30">
                    99.9% Compliance
                  </span>
                </div>
              </div>
              <div className="rounded-xl bg-background/50 p-4 ring-1 ring-white/5">
                <SurveillanceChart />
                <div className="mt-3 text-center">
                  <div className="text-2xl font-bold text-primary">5,000h</div>
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    Recovered Annual Capacity
                  </div>
                </div>
              </div>
            </div>
          </article>

          {/* Tool Chain */}
          <article className="rounded-2xl border border-white/10 bg-surface p-6">
            <div className="text-[11px] font-semibold uppercase tracking-widest text-primary">
              Tool Chain
            </div>
            <ul className="mt-5 space-y-4">
              {tools.map((t, i) => (
                <li key={t.name}>
                  <div className="flex items-center justify-between text-xs text-foreground">
                    <span>{t.name}</span>
                    <span className="text-primary">{t.pct}%</span>
                  </div>
                  <AnimatedBar pct={t.pct} delay={i * 0.1} />
                </li>
              ))}
            </ul>
          </article>

          {/* RAG */}
          <article className="rounded-2xl border border-white/10 bg-surface p-6">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-primary">
              <Sparkles className="h-4 w-4" /> RAG Architecture
            </div>
            <h3 className="mt-4 text-xl font-bold text-foreground">Legal Summarization Pipeline</h3>
            <p className="mt-3 text-sm text-muted-foreground">
              Engineered AI chains and agents RAG within Microsoft 365 and OpenArena to automate the
              summarization of regulatory updates, transforming complex legal terminology into
              simplified, actionable compliance data.
            </p>
            <div className="mt-6 flex items-end gap-1">
              <div className="h-8 w-3 rounded-sm bg-primary/40" />
              <div className="h-14 w-3 rounded-sm bg-primary/60" />
              <div className="h-6 w-3 rounded-sm bg-primary/40" />
              <div className="h-16 w-3 rounded-sm bg-primary" />
              <div className="h-10 w-3 rounded-sm bg-primary/60" />
            </div>
          </article>

          {/* Data Precision */}
          <article className="rounded-2xl border border-white/10 bg-surface p-6 lg:col-span-2">
            <div className="flex items-center gap-2 text-[11px] font-semibold uppercase tracking-widest text-primary">
              <Database className="h-4 w-4" /> Data Precision
            </div>
            <div className="mt-4 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-xl font-bold text-foreground">
                  Mitigating Risk Through Data Precision
                </h3>
                <p className="mt-3 text-sm text-muted-foreground">
                  This module focuses on the intersection of sanctions compliance and high-
                  availability automation. By building custom agents workflows, I ensure that no
                  regulatory shift goes unnoticed.
                </p>
                <ul className="mt-5 space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Denied Party Screening (DPS)
                    Optimization
                  </li>
                  <li className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> Regulatory Content Analysis (RCA)
                  </li>
                </ul>
              </div>
              <BarsChart />
            </div>
          </article>
        </div>
      </div>

      {/* Pipeline */}
      <div className="mt-24">
        <h2 className="text-center text-3xl font-bold tracking-tight">The Automation Pipeline</h2>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {pipeline.map((p, i) => (
            <FadeIn key={p.n} delay={i * 0.15}>
              <motion.div
                whileHover={{ y: -6, borderColor: "rgba(34,211,238,0.4)" }}
                className="rounded-2xl border border-white/10 bg-surface p-6 transition-shadow hover:shadow-[0_0_40px_-15px_var(--primary)]"
              >
                <div className="text-3xl font-extrabold text-primary">{p.n}</div>
                <div className="mt-3 flex items-center gap-2 text-lg font-bold text-foreground">
                  <Bot className="h-5 w-5 text-primary" /> {p.title}
                </div>
                <p className="mt-3 text-sm text-muted-foreground">{p.body}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}

function SurveillanceChart() {
  return (
    <svg viewBox="0 0 200 100" className="h-32 w-full">
      <defs>
        <linearGradient id="g1" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0" stopColor="oklch(0.82 0.15 210)" stopOpacity="0.5" />
          <stop offset="1" stopColor="oklch(0.82 0.15 210)" stopOpacity="0" />
        </linearGradient>
      </defs>
      <motion.polyline
        points="0,70 20,55 40,60 60,40 80,45 100,30 120,35 140,20 160,25 180,15 200,10"
        fill="none"
        stroke="oklch(0.82 0.15 210)"
        strokeWidth="2"
        initial={{ pathLength: 0 }}
        whileInView={{ pathLength: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.6, ease: "easeOut" }}
      />
      <motion.polygon
        points="0,70 20,55 40,60 60,40 80,45 100,30 120,35 140,20 160,25 180,15 200,10 200,100 0,100"
        fill="url(#g1)"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, delay: 0.4 }}
      />
    </svg>
  );
}

function BarsChart() {
  const bars = [40, 65, 30, 80, 55, 90, 45];
  return (
    <div className="flex h-40 items-end justify-around gap-3 rounded-xl bg-background/50 p-4 ring-1 ring-white/5">
      {bars.map((h, i) => (
        <motion.div
          key={i}
          className="w-6 rounded-t bg-primary"
          style={{ opacity: 0.4 + (h / 100) * 0.6 }}
          initial={{ height: 0 }}
          whileInView={{ height: `${h}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: i * 0.08, ease: "easeOut" }}
        />
      ))}
    </div>
  );
}

