import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Award, BarChart3, CheckCircle2, Sparkles, Workflow } from "lucide-react";
import { CountUp, FadeIn } from "@/components/Motion";

export const Route = createFileRoute("/experience")({
  head: () => ({
    meta: [
      { title: "Experience — Tarun Shendge" },
      {
        name: "description",
        content:
          "Career milestones in global trade, sanctions risk, and AI-driven compliance automation.",
      },
      { property: "og:title", content: "Experience — Tarun Shendge" },
      {
        property: "og:description",
        content: "Professional journey across global trade analysis and risk automation.",
      },
    ],
  }),
  component: ExperiencePage,
});

const coreImpact = [
  { value: "5K+", head: "Hours Saved", sub: "Through automated monitoring" },
  { value: "280+", head: "Sites Monitored", sub: "Regulatory websites tracked" },
  { value: "100%", head: "Accuracy", sub: "In trade sanctions reviews" },
];

const techStack = [
  "AI Design",
  "Agent Architecture",
  "RAG-based Chain",
  "Power Automate",
  "Copilot studio",
  "Claude AI",
  "Power BI",
  "Python",
  "Microsoft 365 Suite",
  "Sanctions",
  "Compliance",
  "LLM'S/NLP"
];

const timeline = [
  {
    role: "Analyst · Global Trade",
    org: "Sanctions & Compliance",
    date: "2023 — Present",
    bullets: [
      "Spearhead Denied Party Screening (DPS) processes, analyzing complex regulatory, legal, and sanctions content to enable actionable trade data.",
      "Engineered AI-driven automation using Python and Power Automate, eliminating 5,000+ manual hours.",
      "Deployed AI chains within Microsoft 365 to automate regulatory update summarization.",
      "Recipient of Hyderabad-wide-level TR Spotlight Award.",
      "Received multiple appreciations via e-mails from management for exceptional performance and technical contributions.",
    ],
  },
  {
    role: "Data Analyst Intern",
    org: "Marketing / Hyderabad",
    date: "2021",
    bullets: [
      "Analyzed campaign performance metrics to optimize ad spend and marketing effectiveness.",
      "Designed visual dashboards in Power BI to present senior management with data-driven strategy insights.",
      "Collaborated with cross-departmental teams to enhance data collection and interpret complex forecasting models.",
    ],
  },
];

const certifications = [
  { icon: Award, label: "Global Trade (IMEX)" },
  { icon: BarChart3, label: "Data & Analytics (TR)" },
  { icon: Workflow, label: "Power Automate" },
  { icon: Sparkles, label: "Prompt Structuring" },
];

function ExperiencePage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-10">
      <span className="text-[11px] font-medium uppercase tracking-widest text-primary">
        Career Milestones
      </span>
      <h1 className="mt-3 text-5xl font-bold tracking-tight md:text-6xl">Professional Journey</h1>
      <div className="mt-4 h-px w-24 bg-primary" />

      <div className="mt-12 grid gap-10 lg:grid-cols-[300px_1fr]">
        {/* Left column */}
        <aside className="space-y-10">
          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-primary">
              Core Impact
            </div>
            <div className="mt-6 space-y-6">
              {coreImpact.map((i, idx) => (
                <FadeIn key={i.value} delay={idx * 0.1}>
                  <CountUp value={i.value} className="text-3xl font-extrabold text-primary sm:text-4xl" />
                  <div className="text-xs font-semibold uppercase tracking-wider text-foreground">
                    {i.head}
                  </div>
                  <div className="text-xs text-muted-foreground">{i.sub}</div>
                </FadeIn>
              ))}
            </div>
          </div>

          <div>
            <div className="text-[11px] font-semibold uppercase tracking-widest text-primary">
              Tech Stack
            </div>
            <div className="mt-4 flex flex-wrap gap-2">
              {techStack.map((t, i) => (
                <motion.span
                  key={t}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.03 }}
                  whileHover={{ y: -2, backgroundColor: "rgba(34,211,238,0.15)" }}
                  className="cursor-default rounded-md border border-primary/30 bg-primary/5 px-3 py-1.5 text-[11px] font-medium uppercase tracking-wider text-primary"
                >
                  {t}
                </motion.span>
              ))}
            </div>
          </div>
        </aside>

        {/* Timeline */}
        <div className="relative space-y-6">
          {timeline.map((item, idx) => (
            <FadeIn key={item.role} delay={idx * 0.1}>
              <motion.article
                whileHover={{ y: -4, borderColor: "rgba(34,211,238,0.4)" }}
                className="relative rounded-2xl border border-white/10 bg-surface p-8 transition-shadow hover:shadow-[0_0_40px_-15px_var(--primary)]"
              >
                <div className="flex flex-wrap items-baseline justify-between gap-3">
                  <div>
                    <h3 className="text-xl font-bold text-foreground">
                      {item.role} <span className="text-primary">({item.org})</span>
                    </h3>
                    <div className="mt-1 text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                      {item.date}
                    </div>
                  </div>
                </div>
                <ul className="mt-6 space-y-3">
                  {item.bullets.map((b) => (
                    <li key={b} className="flex gap-3 text-sm text-muted-foreground">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </motion.article>
            </FadeIn>
          ))}
        </div>
      </div>

      {/* Certifications */}
      <div className="mt-20">
        <div className="text-[11px] font-semibold uppercase tracking-widest text-primary">
          Professional Certifications
        </div>
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {certifications.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ y: -4, scale: 1.03 }}
              className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-surface p-8 text-center hover:border-primary/40"
            >
              <div className="grid h-12 w-12 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/30">
                <Icon className="h-6 w-6" />
              </div>
              <div className="text-xs font-semibold uppercase tracking-widest text-foreground">
                {label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
