import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  BarChart3,
  Bot,
  CheckCircle2,
  Database,
  GraduationCap,
  LineChart,
  ShieldCheck,
  Workflow,
} from "lucide-react";
import { AnimatedBar, FadeIn } from "@/components/Motion";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Education & Certifications — Tarun Shendge" },
      {
        name: "description",
        content:
          "Formal education, technical certifications, and proficiencies in global trade risk and compliance automation.",
      },
      { property: "og:title", content: "Education — Tarun Shendge" },
      { property: "og:description", content: "Academic and professional growth." },
    ],
  }),
  component: EducationPage,
});

const focus = ["Global Business Environment", "Trade Laws & Ethics", "Export-Import Procedures"];
const coursework = ["Financial Accounting", "Business Analytics", "Economics of Global Trade"];

const certs = [
  { name: "Global Trade Certification", issuer: "Global IMPEX", pct: 95 },
  { name: "Data and Analytics", issuer: "TR Academy", pct: 90 },
  { name: "SQL for Exploratory Data", issuer: "Advanced SQL", pct: 88 },
  { name: "Power BI Data Viz", issuer: "Visualization", pct: 92 },
  { name: "Prompt Structuring AI", issuer: "GenAI Expert", pct: 85 },
];

const proficiency = [
  { icon: Bot, name: "Power Automate" },
  { icon: Database, name: "SQL" },
  { icon: BarChart3, name: "Power BI" },
  { icon: LineChart, name: "AI Agents/ Copilot studio" },
  { icon: Workflow, name: "Workflow" },
  { icon: ShieldCheck, name: "Compliance" },
];

function EducationPage() {
  return (
    <div className="mx-auto max-w-7xl px-6 py-16">
      <span className="text-[11px] font-medium uppercase tracking-widest text-primary">
        Academic & Professional Growth
      </span>
      <h1 className="mt-3 text-5xl font-bold tracking-tight md:text-6xl">
        Education <span className="text-primary">&</span> Certifications
      </h1>
      <p className="mt-4 max-w-3xl text-sm text-muted-foreground">
        A blend of formal business education and specialized technical training in global trade risk,
        data analytics, and automated compliance systems.
      </p>

      <div className="mt-12 grid gap-6 lg:grid-cols-2">
        {/* Formal Education */}
        <article className="rounded-2xl border border-white/10 bg-surface p-8">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/30">
              <GraduationCap className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold">Formal Education</h3>
          </div>
          <div className="mt-6">
            <div className="text-xs font-semibold uppercase tracking-widest text-primary">
              2021 | Completed
            </div>
            <div className="mt-2 text-2xl font-bold text-foreground">Bachelor of Commerce</div>
            <div className="text-sm text-primary">Foreign Trade</div>
            <div className="mt-1 text-sm italic text-muted-foreground">
              EThames Degree College, Hyderabad
            </div>
          </div>

          <div className="mt-6 grid gap-6 md:grid-cols-2">
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                Core Focus Areas
              </div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {focus.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {f}
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <div className="text-[11px] font-semibold uppercase tracking-widest text-primary">
                Relevant Coursework
              </div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                {coursework.map((c) => (
                  <li key={c} className="flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary" /> {c}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </article>

        {/* Certifications */}
        <article className="rounded-2xl border border-white/10 bg-surface p-8">
          <div className="flex items-center gap-3">
            <div className="grid h-9 w-9 place-items-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/30">
              <ShieldCheck className="h-5 w-5" />
            </div>
            <h3 className="text-xl font-bold">Certifications</h3>
          </div>
          <ul className="mt-6 space-y-5">
            {certs.map((c, i) => (
              <li key={c.name}>
                <div className="flex items-baseline justify-between gap-4">
                  <div className="text-sm font-semibold text-foreground">{c.name}</div>
                  <div className="text-xs text-muted-foreground">
                    {c.issuer} · <span className="text-primary">{c.pct}%</span>
                  </div>
                </div>
                <AnimatedBar pct={c.pct} delay={i * 0.1} className="mt-2" />
              </li>
            ))}
          </ul>
        </article>
      </div>

      {/* Mindset cards */}
      <div className="mt-8 grid gap-6 md:grid-cols-3">
        <div className="rounded-2xl border border-white/10 bg-surface p-6">
          <LineChart className="h-6 w-6 text-primary" />
          <h4 className="mt-4 text-lg font-bold">Analytical Mindset</h4>
          <p className="mt-2 text-sm text-muted-foreground">
            Leveraging quantitative data to drive strategic compliance decisions in complex global
            markets.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-surface p-6">
          <ShieldCheck className="h-6 w-6 text-primary" />
          <h4 className="mt-4 text-lg font-bold">Risk Governance</h4>
          <p className="mt-2 text-sm text-muted-foreground">
            Specialized knowledge in international trade sanctions and denied party screening
            protocols.
          </p>
        </div>
        <div className="rounded-2xl border border-white/10 bg-surface p-6 text-sm text-muted-foreground">
          Continually expanding technical horizons through professional accreditation in AI
          governance and advanced trade automation tools.
        </div>
      </div>

      {/* Proficiency */}
      <div className="mt-20">
        <h2 className="text-3xl font-bold tracking-tight">Technical Proficiency</h2>
        <div className="mt-8 grid grid-cols-3 gap-4 md:grid-cols-6">
          {proficiency.map(({ icon: Icon, name }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.06 }}
              whileHover={{ y: -4, scale: 1.05 }}
              className="flex flex-col items-center gap-3 rounded-xl border border-white/10 bg-surface p-5 text-center hover:border-primary/40"
            >
              <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/30">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-xs font-medium text-foreground">{name}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
