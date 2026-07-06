import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import {
  Award,
  CheckCircle2,
  Download,
  GraduationCap,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Shield,
  ShieldCheck,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { toast } from "sonner";
import portrait from "@/assets/portrait.jpg";
import { CountUp, FadeIn } from "@/components/Motion";
import { downloadResumePdf } from "@/lib/generateResume";

export const Route = createFileRoute("/resume")({
  head: () => ({
    meta: [
      { title: "Resume — Tarun Shendge" },
      {
        name: "description",
        content:
          "Refined resume of Tarun Shendge — Global Trade & Sanctions Risk Specialist with 4+ years in DPS, compliance, and AI automation.",
      },
      { property: "og:title", content: "Resume — Tarun Shendge" },
      {
        property: "og:description",
        content: "Available for full-time roles and strategic consulting.",
      },
    ],
  }),
  component: ResumePage,
});

const coreSkills = [
  "Denied Party Screening",
  "Sanctions Compliance",
  "Python & AI Agents using Open Arena",
  "Power Automate",
  "Power BI & Dashboards",
  "Copilot studio",
  "Regulatory Analysis",
  "SOP Development",
];

const kpis = [
  { icon: Shield, v: "100%", l: "Compliance Rate" },
  { icon: Zap, v: "15+", l: "Live Automations" },
  { icon: Users, v: "500+", l: "Daily Screenings" },
  { icon: Trophy, v: "1st", l: "Spotlight Award" },
];

function ResumePage() {
  return (
    <div className="mx-auto max-w-6xl px-6 py-14">
      {/* Header card */}
      <div className="rounded-2xl border border-white/10 bg-surface p-8">
        <div className="grid gap-8 md:grid-cols-[220px_1fr]">
          <div className="overflow-hidden rounded-xl ring-1 ring-primary/40">
            <img
              src={portrait}
              alt="Tarun Shendge"
              width={832}
              height={1024}
              loading="lazy"
              className="h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
            />
          </div>
          <div>
            <span className="text-[11px] font-semibold uppercase tracking-widest text-primary">
              Global Trade & Sanctions Risk Specialist
            </span>
            <h1 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
              Hello, I'm <span className="text-primary">Tarun Shendge</span>
            </h1>
            <p className="mt-4 max-w-xl text-sm text-muted-foreground">
              Analytical Global Trade and Sanctions Risk professional with 4 years of experience
              specializing in Denied Party Screening (DPS), regulatory compliance, and workflow
              automation.
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              <a
                href="mailto:sdgarun15@gmail.com"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:opacity-90"
              >
                <Mail className="h-4 w-4" /> Contact Me
              </a>
              <button
                onClick={() => {
                  downloadResumePdf();
                  toast.success("Resume PDF generated");
                }}
                className="inline-flex items-center gap-2 rounded-md border border-primary/50 px-5 py-2.5 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
              >
                <Download className="h-4 w-4" /> Download PDF
              </button>
            </div>
            <div className="mt-6 flex flex-wrap gap-8">
              {[
                { v: "4+", l: "Years Exp" },
                { v: "280+", l: "Sites Monitored" },
                { v: "5k+", l: "Hours Saved" },
              ].map((s) => (
                <div key={s.l}>
                  <CountUp value={s.v} className="text-2xl font-bold text-primary" />
                  <div className="text-[11px] uppercase tracking-widest text-muted-foreground">
                    {s.l}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[280px_1fr]">
        {/* Sidebar */}
        <aside className="space-y-8">
          <Section title="Contact" icon={Mail}>
            <ul className="space-y-2 text-xs text-muted-foreground">
              <li className="flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5 text-primary" /> Hyderabad, TG 500048
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-3.5 w-3.5 text-primary" /> 7093161409
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-3.5 w-3.5 text-primary" /> sdgtarun15@gmail.com
              </li>
              <li className="flex items-center gap-2">
                <Linkedin className="h-3.5 w-3.5 text-primary" /> https://www.linkedin.com/in/tarun-shendge-81a546198/
              </li>
            </ul>
          </Section>

          <Section title="Core Skills" icon={ShieldCheck}>
            <div className="flex flex-wrap gap-2">
              {coreSkills.map((s) => (
                <span
                  key={s}
                  className="rounded-md border border-primary/30 bg-primary/5 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-primary"
                >
                  {s}
                </span>
              ))}
            </div>
          </Section>

          <Section title="Education" icon={GraduationCap}>
            <div className="text-xs">
              <div className="font-semibold text-primary">2021</div>
              <div className="mt-1 font-semibold text-foreground">Bachelor of Commerce</div>
              <div className="text-muted-foreground">Average: Foreign Trade</div>
              <div className="text-muted-foreground">Ethames Degree College, Hyderabad</div>
            </div>
          </Section>

          <Section title="Certifications" icon={Award}>
            <ul className="space-y-1.5 text-xs text-muted-foreground">
              <li>· Global Trade Certification (Global IMPEX)</li>
              <li>· Data and Analytics Certification (TR)</li>
              <li>· SQL for Exploratory Data Analysis</li>
              <li>· Prompt Structuring for Enhanced AI</li>
            </ul>
          </Section>
        </aside>

        {/* Right column */}
        <div className="space-y-8">
          <section>
            <h2 className="text-center text-3xl font-bold tracking-[0.3em] text-foreground">
              SUMMARY
            </h2>
            <div className="mx-auto mt-2 h-px w-24 bg-primary" />
            <p className="mt-6 text-sm leading-relaxed text-muted-foreground">
              Highly skilled in monitoring and interpreting complex sanctions content, mitigating
              risk, and transforming unstructured regulatory updates into structured compliance
              datasets. Proven track record of scaling operations by engineering automation
              solutions using{" "}
              <span className="text-primary">Python, AI Agents, and Power Automate</span>,
              significantly reducing manual effort. Actively seeking to leverage expertise in risk
              mitigation and process optimization to protect business integrity.
            </p>
          </section>

          <section>
            <h2 className="text-center text-3xl font-bold tracking-[0.3em] text-foreground">
              PROFESSIONAL EXPERIENCE
            </h2>
            <div className="mx-auto mt-2 h-px w-24 bg-primary" />

            <article className="mt-6">
              <div className="flex flex-wrap items-baseline justify-between">
                <h3 className="text-lg font-bold text-foreground">
                  Analyst · Global Trade{" "}
                  <span className="text-primary">(Sanctions &amp; Compliance)</span>
                </h3>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  March 2023 — Present
                </div>
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Thomson Reuters | Hyderabad
              </div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  Spearhead Denied Party Screening (DPS) processes, analyzing complex regulatory,
                  legal, and sanctions content to enable actionable trade data.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  Engineered and deployed automation workflows using Python and Power Automate to
                  monitor 280+ regulatory websites, eliminating 5,000+ hours of manual tracking.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  Engineered AI chains and agents with MS 365 to automate the summarization of
                  regulatory updates.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  Received site-level TR Spotlight Award for building a Power BI Report that drove
                  operational visibility for Q3.
                </li>
              </ul>
            </article>

            <article className="mt-8">
              <div className="flex flex-wrap items-baseline justify-between">
                <h3 className="text-lg font-bold text-foreground">Data Analyst Intern</h3>
                <div className="text-[11px] font-semibold uppercase tracking-widest text-muted-foreground">
                  2021
                </div>
              </div>
              <div className="text-xs uppercase tracking-widest text-muted-foreground">
                Innovatetech | Hyderabad
              </div>
              <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  Gained hands-on experience analyzing campaign performance metrics to optimize ad
                  spend.
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                  Designed and implemented visual dashboards for senior management assisting in
                  data-driven strategies.
                </li>
              </ul>
            </article>
          </section>

          <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
            {kpis.map(({ icon: Icon, v, l }, i) => (
              <FadeIn key={l} delay={i * 0.08}>
                <motion.div
                  whileHover={{ y: -4, scale: 1.03 }}
                  className="flex flex-col items-center gap-2 rounded-xl border border-white/10 bg-surface p-5 text-center hover:border-primary/40"
                >
                  <Icon className="h-5 w-5 text-primary" />
                  <CountUp value={v} className="text-2xl font-bold text-primary" />
                  <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                    {l}
                  </div>
                </motion.div>
              </FadeIn>
            ))}
          </div>

          <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-white/10 bg-surface p-6">
            <div>
              <div className="text-lg font-bold">Ready to secure your operations?</div>
              <div className="text-sm text-muted-foreground">
                Available for full-time roles and strategic consulting.
              </div>
            </div>
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                downloadResumePdf();
                toast.success("Resume PDF generated");
              }}
              className="inline-flex items-center gap-2 rounded-md bg-gradient-to-r from-primary to-cyan-500 px-5 py-3 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 hover:opacity-90"
            >
              <Download className="h-4 w-4" /> Download PDF Resume
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  icon: Icon,
  children,
}: {
  title: string;
  icon: React.ComponentType<{ className?: string }>;
  children: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 border-b border-white/10 pb-2">
        <Icon className="h-4 w-4 text-primary" />
        <div className="text-[11px] font-semibold uppercase tracking-widest text-primary">
          {title}
        </div>
      </div>
      <div className="mt-3">{children}</div>
    </div>
  );
}
