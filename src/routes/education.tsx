import { createFileRoute } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  Award,
  BarChart3,
  Bot,
  CheckCircle2,
  ChevronDown,
  Database,
  GraduationCap,
  LineChart,
  ShieldCheck,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";
import { CountUp, FadeIn, AnimatedBar } from "@/components/Motion";

export const Route = createFileRoute("/education")({
  head: () => ({
    meta: [
      { title: "Experience — Tarun Shendge" },
      {
        name: "description",
        content:
          "Professional experience, education, certifications, technical capabilities, and career impact across global trade, sanctions risk, analytics, and automation.",
      },
    ],
  }),
  component: ExperiencePage,
});

/* =========================================================
   CORE IMPACT
========================================================= */

const coreImpact = [
  {
    value: "5K+",
    head: "Hours Saved",
    sub: "Through automated monitoring",
    detail:
      "AI-driven automation using Python and Power Automate helped eliminate more than 5,000 manual hours.",
  },
  {
    value: "280+",
    head: "Sites Monitored",
    sub: "Regulatory websites tracked",
    detail:
      "Regulatory websites are monitored to identify relevant updates and support trade compliance workflows.",
  },
  {
    value: "100%",
    head: "Accuracy",
    sub: "In trade sanctions reviews",
    detail:
      "Focused on accuracy and consistency across trade sanctions and Denied Party Screening reviews.",
  },
];

/* =========================================================
   TECH STACK
========================================================= */

const techStack = [
  {
    name: "AI Design",
    category: "AI",
    description: "Designing AI-driven solutions for compliance workflows.",
  },
  {
    name: "Agent Architecture",
    category: "AI",
    description: "Building structured AI agent workflows and architectures.",
  },
  {
    name: "RAG-based Chain",
    category: "AI",
    description: "Using retrieval-based approaches for information processing.",
  },
  {
    name: "Power Automate",
    category: "Automation",
    description: "Automating repetitive business and compliance workflows.",
  },
  {
    name: "Copilot Studio",
    category: "AI",
    description: "Working with AI assistants and Copilot-based workflows.",
  },
  {
    name: "Claude AI",
    category: "AI",
    description: "Using generative AI for information processing and workflow support.",
  },
  {
    name: "Power BI",
    category: "Analytics",
    description: "Creating dashboards and presenting data-driven insights.",
  },
  {
    name: "LangChain",
    category: "AI",
    description: "Working with LLM application and AI chain architectures.",
  },
  {
    name: "Python",
    category: "Development",
    description: "Using Python for automation, monitoring, and data processing.",
  },
  {
    name: "Sanctions",
    category: "Compliance",
    description: "Specialized knowledge in sanctions and trade compliance.",
  },
  {
    name: "Compliance",
    category: "Compliance",
    description: "Supporting global trade compliance and risk workflows.",
  },
  {
    name: "LLMs / NLP",
    category: "AI",
    description: "Applying language models and natural language processing.",
  },
];

/* =========================================================
   EXPERIENCE
========================================================= */

const timeline = [
  {
    role: "Analyst · Global Trade",
    org: "Sanctions & Compliance",
    date: "2023 — Present",
    short:
      "Global trade analysis, sanctions compliance, Denied Party Screening, and AI-driven automation.",
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
    short:
      "Data analysis, marketing analytics, Power BI dashboards, and forecasting support.",
    bullets: [
      "Analyzed campaign performance metrics to optimize ad spend and marketing effectiveness.",
      "Designed visual dashboards in Power BI to present senior management with data-driven strategy insights.",
      "Collaborated with cross-departmental teams to enhance data collection and interpret complex forecasting models.",
    ],
  },
];

/* =========================================================
   EDUCATION
========================================================= */

const focus = [
  "Global Business Environment",
  "Trade Laws & Ethics",
  "Export-Import Procedures",
];

const coursework = [
  "Financial Accounting",
  "Business Analytics",
  "Economics of Global Trade",
];

/* =========================================================
   CERTIFICATIONS
========================================================= */

const certifications = [
  {
    name: "Global Trade Certification",
    issuer: "Global IMPEX",
    pct: 95,
    description:
      "Professional learning focused on global trade and international business.",
  },
  {
    name: "Data and Analytics",
    issuer: "TR Academy",
    pct: 90,
    description:
      "Training focused on data analysis and analytical decision-making.",
  },
  {
    name: "SQL for Exploratory Data",
    issuer: "Advanced SQL",
    pct: 88,
    description:
      "Training in SQL and exploratory data analysis.",
  },
  {
    name: "Power BI Data Viz",
    issuer: "Visualization",
    pct: 92,
    description:
      "Training focused on visual analytics and Power BI.",
  },
  {
    name: "Prompt Structuring AI",
    issuer: "GenAI Expert",
    pct: 85,
    description:
      "Training focused on prompt design and generative AI workflows.",
  },
];

/* =========================================================
   PROFESSIONAL FOCUS
========================================================= */

const professionalFocus = [
  {
    icon: LineChart,
    title: "Analytical Mindset",
    description:
      "Leveraging quantitative data to drive strategic compliance decisions in complex global markets.",
  },
  {
    icon: ShieldCheck,
    title: "Risk Governance",
    description:
      "Specialized knowledge in international trade sanctions and denied party screening protocols.",
  },
  {
    icon: Sparkles,
    title: "Continuous Learning",
    description:
      "Continually expanding technical horizons through professional accreditation in AI governance and advanced trade automation tools.",
  },
];

/* =========================================================
   TECHNICAL PROFICIENCY
   SQL REMOVED — PYTHON ADDED
========================================================= */

const proficiency = [
  {
    icon: Bot,
    name: "Power Automate",
    description:
      "Workflow automation for repetitive business and compliance activities.",
  },
  {
    icon: Zap,
    name: "Python",
    description:
      "Automation, monitoring, processing, and technical workflow development.",
  },
  {
    icon: BarChart3,
    name: "Power BI",
    description:
      "Data visualization and dashboard development.",
  },
  {
    icon: Sparkles,
    name: "AI Agents / Copilot Studio",
    description:
      "AI-assisted workflows and agent-based automation.",
  },
  {
    icon: Workflow,
    name: "Workflow",
    description:
      "Designing and improving structured business processes.",
  },
  {
    icon: ShieldCheck,
    name: "Compliance",
    description:
      "Trade sanctions, Denied Party Screening, and compliance processes.",
  },
];

/* =========================================================
   PAGE
========================================================= */

function ExperiencePage() {
  const [activeImpact, setActiveImpact] = useState<number | null>(null);
  const [activeExperience, setActiveExperience] = useState(0);
  const [activeSkillCategory, setActiveSkillCategory] = useState("All");
  const [activeSkill, setActiveSkill] = useState<string | null>(null);
  const [educationTab, setEducationTab] = useState<"education" | "focus">(
    "education",
  );
  const [activeCertification, setActiveCertification] = useState(0);
  const [activeFocus, setActiveFocus] = useState(0);
  const [activeProficiency, setActiveProficiency] = useState(0);

  const categories = [
    "All",
    "AI",
    "Automation",
    "Analytics",
    "Development",
    "Compliance",
  ];

  const filteredSkills =
    activeSkillCategory === "All"
      ? techStack
      : techStack.filter(
          (skill) => skill.category === activeSkillCategory,
        );

  return (
    <div className="mx-auto max-w-7xl px-6 py-10 md:py-14">

      {/* =====================================================
          HERO
      ===================================================== */}

      <FadeIn>
        <span className="text-sm font-medium uppercase tracking-widest text-primary">
          Professional Journey
        </span>

        <h1 className="mt-3 text-5xl font-bold tracking-tight md:text-6xl">
          Experience
        </h1>

        <div className="mt-4 h-px w-24 bg-primary" />

        <p className="mt-5 max-w-3xl text-sm leading-7 text-muted-foreground md:text-base">
          A professional journey across global trade, sanctions compliance,
          data analytics, automation, and AI-driven workflow improvement.
        </p>
      </FadeIn>

      {/* =====================================================
          INTERACTIVE IMPACT
      ===================================================== */}

      <section className="mt-12">

        <div className="mb-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-primary">
          <span className="h-px w-8 bg-primary" />
          Core Impact
        </div>

        <div className="grid gap-4 md:grid-cols-3">

          {coreImpact.map((item, index) => {
            const active = activeImpact === index;

            return (
              <motion.button
                key={item.value}
                type="button"
                onClick={() =>
                  setActiveImpact(active ? null : index)
                }
                whileHover={{ y: -4 }}
                whileTap={{ scale: 0.99 }}
                className={`rounded-2xl border p-6 text-left transition-all ${
                  active
                    ? "border-primary/40 bg-primary/5"
                    : "border-white/10 bg-surface hover:border-primary/30"
                }`}
              >

                <div className="flex items-start justify-between">

                  <CountUp
                    value={item.value}
                    className="text-4xl font-extrabold text-primary md:text-5xl"
                  />

                  <ChevronDown
                    className={`h-5 w-5 text-primary transition-transform ${
                      active ? "rotate-180" : ""
                    }`}
                  />

                </div>

                <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-foreground">
                  {item.head}
                </div>

                <div className="mt-1 text-xs text-muted-foreground">
                  {item.sub}
                </div>

                <AnimatePresence>
                  {active && (
                    <motion.p
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      className="mt-5 border-t border-primary/20 pt-4 text-sm leading-6 text-muted-foreground"
                    >
                      {item.detail}
                    </motion.p>
                  )}
                </AnimatePresence>

              </motion.button>
            );
          })}

        </div>
      </section>

      {/* =====================================================
          EXPERIENCE
      ===================================================== */}

      <section className="mt-16 border-t border-white/5 pt-14">

        <div className="mb-8">

          <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-primary">
            <span className="h-px w-8 bg-primary" />
            Career Timeline
          </div>

          <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
            Professional Journey
          </h2>

        </div>

        <div className="grid gap-5 lg:grid-cols-[300px_1fr]">

          {/* EXPERIENCE SELECTOR */}

          <div className="space-y-2">

            {timeline.map((item, index) => {
              const active = activeExperience === index;

              return (
                <button
                  key={item.role}
                  type="button"
                  onClick={() => setActiveExperience(index)}
                  className={`w-full rounded-xl border p-5 text-left transition-all ${
                    active
                      ? "border-primary/40 bg-primary/5"
                      : "border-white/10 bg-surface hover:border-primary/30"
                  }`}
                >

                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {item.date}
                  </div>

                  <div className="mt-2 text-base font-bold text-foreground">
                    {item.role}
                  </div>

                  <div className="mt-1 text-xs text-muted-foreground">
                    {item.org}
                  </div>

                </button>
              );
            })}

          </div>

          {/* EXPERIENCE DETAILS */}

          <AnimatePresence mode="wait">

            <motion.article
              key={activeExperience}
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -20,
              }}
              className="rounded-2xl border border-white/10 bg-surface p-7 md:p-9"
            >

              <div className="flex flex-wrap items-start justify-between gap-4">

                <div>

                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                    {timeline[activeExperience].date}
                  </div>

                  <h3 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">
                    {timeline[activeExperience].role}
                  </h3>

                  <div className="mt-1 text-sm text-primary">
                    {timeline[activeExperience].org}
                  </div>

                </div>

                <div className="grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary ring-1 ring-primary/30">
                  <Workflow className="h-5 w-5" />
                </div>

              </div>

              <p className="mt-6 text-sm leading-7 text-muted-foreground">
                {timeline[activeExperience].short}
              </p>

              <div className="mt-7 border-t border-white/5 pt-6">

                <div className="mb-4 text-xs font-semibold uppercase tracking-widest text-primary">
                  Key Contributions
                </div>

                <ul className="space-y-4">

                  {timeline[activeExperience].bullets.map(
                    (bullet) => (
                      <li
                        key={bullet}
                        className="flex gap-3 text-sm leading-6 text-muted-foreground"
                      >
                        <CheckCircle2 className="mt-0.5 h-4 w-4 flex-shrink-0 text-primary" />
                        <span>{bullet}</span>
                      </li>
                    ),
                  )}

                </ul>

              </div>

            </motion.article>

          </AnimatePresence>

        </div>
      </section>

      {/* =====================================================
          TECH STACK
      ===================================================== */}

      <section className="mt-16 border-t border-white/5 pt-14">

        <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-primary">
          <span className="h-px w-8 bg-primary" />
          Technical Toolkit
        </div>

        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Tech Stack
        </h2>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
          Explore the technologies and domains used across automation,
          analytics, AI, development, and compliance.
        </p>

        {/* CATEGORY FILTER */}

        <div className="mt-7 flex flex-wrap gap-2">

          {categories.map((category) => (
            <button
              key={category}
              type="button"
              onClick={() => {
                setActiveSkillCategory(category);
                setActiveSkill(null);
              }}
              className={`rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-wider transition-all ${
                activeSkillCategory === category
                  ? "border-primary bg-primary text-primary-foreground"
                  : "border-white/10 bg-surface text-muted-foreground hover:border-primary/30 hover:text-primary"
              }`}
            >
              {category}
            </button>
          ))}

        </div>

        {/* SKILLS */}

        <div className="mt-5 flex flex-wrap gap-2">

          {filteredSkills.map((skill, index) => {
            const active = activeSkill === skill.name;

            return (
              <motion.button
                key={skill.name}
                type="button"
                initial={{
                  opacity: 0,
                  scale: 0.85,
                }}
                animate={{
                  opacity: 1,
                  scale: 1,
                }}
                transition={{
                  delay: index * 0.025,
                }}
                whileHover={{
                  y: -3,
                }}
                onClick={() =>
                  setActiveSkill(active ? null : skill.name)
                }
                className={`rounded-md border px-3 py-2 text-xs font-medium uppercase tracking-wider transition-all ${
                  active
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-primary/30 bg-primary/5 text-primary hover:bg-primary/10"
                }`}
              >
                {skill.name}
              </motion.button>
            );
          })}

        </div>

        {/* SELECTED SKILL */}

        <AnimatePresence mode="wait">

          {activeSkill && (
            <motion.div
              key={activeSkill}
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-5"
            >

              {(() => {
                const selected = techStack.find(
                  (skill) => skill.name === activeSkill,
                );

                if (!selected) return null;

                return (
                  <>
                    <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                      {selected.category}
                    </div>

                    <div className="mt-2 text-lg font-bold text-foreground">
                      {selected.name}
                    </div>

                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {selected.description}
                    </p>
                  </>
                );
              })()}

            </motion.div>
          )}

        </AnimatePresence>

      </section>

      {/* =====================================================
          EDUCATION
      ===================================================== */}

      <section className="mt-16 border-t border-white/5 pt-14">

        <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-primary">
          <span className="h-px w-8 bg-primary" />
          Education
        </div>

        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Academic Foundation
        </h2>

        {/* TABS */}

        <div className="mt-7 flex gap-2">

          <button
            type="button"
            onClick={() => setEducationTab("education")}
            className={`rounded-md px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-all ${
              educationTab === "education"
                ? "bg-primary text-primary-foreground"
                : "border border-white/10 bg-surface text-muted-foreground hover:border-primary/30 hover:text-primary"
            }`}
          >
            Formal Education
          </button>

          <button
            type="button"
            onClick={() => setEducationTab("focus")}
            className={`rounded-md px-5 py-3 text-xs font-semibold uppercase tracking-wider transition-all ${
              educationTab === "focus"
                ? "bg-primary text-primary-foreground"
                : "border border-white/10 bg-surface text-muted-foreground hover:border-primary/30 hover:text-primary"
            }`}
          >
            Focus Areas
          </button>

        </div>

        <AnimatePresence mode="wait">

          {educationTab === "education" ? (
            <motion.div
              key="education"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              className="mt-5 rounded-2xl border border-white/10 bg-surface p-7 md:p-9"
            >

              <div className="flex items-start gap-4">

                <div className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/30">
                  <GraduationCap className="h-6 w-6" />
                </div>

                <div>

                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                    2021 | Completed
                  </div>

                  <h3 className="mt-2 text-2xl font-bold text-foreground">
                    Bachelor of Commerce
                  </h3>

                  <div className="mt-1 text-sm text-primary">
                    Foreign Trade
                  </div>

                  <div className="mt-1 text-sm italic text-muted-foreground">
                    EThames Degree College, Hyderabad
                  </div>

                </div>

              </div>

              <div className="mt-8 grid gap-5 md:grid-cols-2">

                <div className="rounded-xl border border-white/10 bg-background p-5">

                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Core Focus Areas
                  </div>

                  <ul className="mt-4 space-y-3">

                    {focus.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}

                  </ul>

                </div>

                <div className="rounded-xl border border-white/10 bg-background p-5">

                  <div className="text-xs font-semibold uppercase tracking-widest text-primary">
                    Relevant Coursework
                  </div>

                  <ul className="mt-4 space-y-3">

                    {coursework.map((item) => (
                      <li
                        key={item}
                        className="flex items-center gap-2 text-sm text-muted-foreground"
                      >
                        <CheckCircle2 className="h-4 w-4 text-primary" />
                        {item}
                      </li>
                    ))}

                  </ul>

                </div>

              </div>

            </motion.div>
          ) : (
            <motion.div
              key="focus"
              initial={{
                opacity: 0,
                y: 10,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                y: -10,
              }}
              className="mt-5 grid gap-5 md:grid-cols-3"
            >

              {focus.map((item, index) => (
                <motion.button
                  key={item}
                  type="button"
                  whileHover={{
                    y: -4,
                  }}
                  className="rounded-xl border border-white/10 bg-surface p-6 text-left hover:border-primary/30"
                >

                  <div className="text-xs font-semibold text-primary">
                    0{index + 1}
                  </div>

                  <div className="mt-4 text-base font-bold text-foreground">
                    {item}
                  </div>

                  <div className="mt-2 text-sm text-muted-foreground">
                    Academic focus supporting the foundation in global trade.
                  </div>

                </motion.button>
              ))}

            </motion.div>
          )}

        </AnimatePresence>

      </section>

      {/* =====================================================
          CERTIFICATIONS
      ===================================================== */}

      <section className="mt-16 border-t border-white/5 pt-14">

        <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-primary">
          <span className="h-px w-8 bg-primary" />
          Professional Certifications
        </div>

        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Certifications & Training
        </h2>

        <div className="mt-8 grid gap-5 lg:grid-cols-[0.8fr_1.2fr]">

          {/* CERTIFICATION SELECTOR */}

          <div className="space-y-2">

            {certifications.map((certification, index) => (
              <button
                key={certification.name}
                type="button"
                onClick={() =>
                  setActiveCertification(index)
                }
                className={`w-full rounded-xl border p-4 text-left transition-all ${
                  activeCertification === index
                    ? "border-primary/40 bg-primary/5"
                    : "border-white/10 bg-surface hover:border-primary/30"
                }`}
              >

                <div className="text-sm font-semibold text-foreground">
                  {certification.name}
                </div>

                <div className="mt-1 text-xs text-muted-foreground">
                  {certification.issuer}
                </div>

              </button>
            ))}

          </div>

          {/* CERTIFICATION DETAIL */}

          <AnimatePresence mode="wait">

            <motion.div
              key={activeCertification}
              initial={{
                opacity: 0,
                x: 20,
              }}
              animate={{
                opacity: 1,
                x: 0,
              }}
              exit={{
                opacity: 0,
                x: -20,
              }}
              className="rounded-2xl border border-white/10 bg-surface p-7 md:p-9"
            >

              <div className="grid h-14 w-14 place-items-center rounded-xl bg-primary/10 text-primary ring-1 ring-primary/30">
                <Award className="h-6 w-6" />
              </div>

              <div className="mt-7 text-xs font-semibold uppercase tracking-widest text-primary">
                {certifications[activeCertification].issuer}
              </div>

              <h3 className="mt-2 text-2xl font-bold text-foreground">
                {certifications[activeCertification].name}
              </h3>

              <p className="mt-4 text-sm leading-7 text-muted-foreground">
                {certifications[activeCertification].description}
              </p>

              <div className="mt-7">

                <div className="flex items-center justify-between text-xs">

                  <span className="font-semibold uppercase tracking-widest text-muted-foreground">
                    Training Progress
                  </span>

                  <span className="font-semibold text-primary">
                    {certifications[activeCertification].pct}%
                  </span>

                </div>

                <AnimatedBar
                  pct={certifications[activeCertification].pct}
                  delay={0}
                  className="mt-3"
                />

              </div>

            </motion.div>

          </AnimatePresence>

        </div>

      </section>

      {/* =====================================================
          PROFESSIONAL FOCUS
      ===================================================== */}

      <section className="mt-16 border-t border-white/5 pt-14">

        <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-primary">
          <span className="h-px w-8 bg-primary" />
          Professional Focus
        </div>

        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          The Thinking Behind the Work
        </h2>

        <div className="mt-8 grid gap-4 md:grid-cols-3">

          {professionalFocus.map((item, index) => {
            const Icon = item.icon;
            const active = activeFocus === index;

            return (
              <motion.button
                key={item.title}
                type="button"
                onClick={() => setActiveFocus(index)}
                whileHover={{
                  y: -4,
                }}
                className={`rounded-2xl border p-6 text-left transition-all ${
                  active
                    ? "border-primary/40 bg-primary/5"
                    : "border-white/10 bg-surface hover:border-primary/30"
                }`}
              >

                <div
                  className={`grid h-11 w-11 place-items-center rounded-xl ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <h3 className="mt-5 text-lg font-bold text-foreground">
                  {item.title}
                </h3>

                <AnimatePresence mode="wait">

                  {active && (
                    <motion.p
                      initial={{
                        opacity: 0,
                        height: 0,
                      }}
                      animate={{
                        opacity: 1,
                        height: "auto",
                      }}
                      exit={{
                        opacity: 0,
                        height: 0,
                      }}
                      className="mt-3 text-sm leading-6 text-muted-foreground"
                    >
                      {item.description}
                    </motion.p>
                  )}

                </AnimatePresence>

                {!active && (
                  <div className="mt-3 text-xs font-semibold uppercase tracking-wider text-primary">
                    Tap to explore
                  </div>
                )}

              </motion.button>
            );
          })}

        </div>

      </section>

      {/* =====================================================
          TECHNICAL PROFICIENCY
      ===================================================== */}

      <section className="mt-16 border-t border-white/5 pt-14">

        <div className="flex items-center gap-3 text-sm font-semibold uppercase tracking-widest text-primary">
          <span className="h-px w-8 bg-primary" />
          Technical Capabilities
        </div>

        <h2 className="mt-3 text-4xl font-bold tracking-tight md:text-5xl">
          Technical Proficiency
        </h2>

        <p className="mt-4 max-w-3xl text-sm leading-7 text-muted-foreground">
          Select a capability to see how it connects to the broader
          professional toolkit.
        </p>

        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-6">

          {proficiency.map((item, index) => {
            const Icon = item.icon;
            const active = activeProficiency === index;

            return (
              <motion.button
                key={item.name}
                type="button"
                onClick={() => setActiveProficiency(index)}
                whileHover={{
                  y: -4,
                }}
                whileTap={{
                  scale: 0.97,
                }}
                className={`flex flex-col items-center gap-3 rounded-xl border p-5 text-center transition-all ${
                  active
                    ? "border-primary/40 bg-primary/5"
                    : "border-white/10 bg-surface hover:border-primary/30"
                }`}
              >

                <div
                  className={`grid h-11 w-11 place-items-center rounded-md ${
                    active
                      ? "bg-primary text-primary-foreground"
                      : "bg-primary/10 text-primary"
                  }`}
                >
                  <Icon className="h-5 w-5" />
                </div>

                <div className="text-xs font-semibold text-foreground">
                  {item.name}
                </div>

              </motion.button>
            );
          })}

        </div>

        <AnimatePresence mode="wait">

          <motion.div
            key={activeProficiency}
            initial={{
              opacity: 0,
              y: 10,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
              y: -10,
            }}
            className="mt-5 rounded-xl border border-primary/20 bg-primary/5 p-5"
          >

            <div className="text-xs font-semibold uppercase tracking-widest text-primary">
              Selected Capability
            </div>

            <div className="mt-2 text-lg font-bold text-foreground">
              {proficiency[activeProficiency].name}
            </div>

            <p className="mt-2 text-sm leading-6 text-muted-foreground">
              {proficiency[activeProficiency].description}
            </p>

          </motion.div>

        </AnimatePresence>

      </section>

    </div>
  );
}