import { createFileRoute, Link } from "@tanstack/react-router";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import {
  ArrowRight,
  Bot,
  Check,
  Database,
  FileSearch,
  Gauge,
  GitBranch,
  Hand,
  Lightbulb,
  Search,
  Settings2,
  Sparkles,
  Workflow,
  Zap,
} from "lucide-react";

const approachSteps = [
  {
    number: "01",
    title: "OBSERVE",
    subtitle: "Understand the work",
    icon: Search,
    statement:
      "Before changing a process, understand what is actually happening.",
    details: [
      "Understand the current workflow",
      "Identify people, systems and handoffs",
      "Find repetitive manual activity",
      "Capture exceptions and dependencies",
    ],
  },
  {
    number: "02",
    title: "MAP",
    subtitle: "Make the workflow visible",
    icon: GitBranch,
    statement:
      "Break complex work into visible stages and decision points.",
    details: [
      "Map inputs and outputs",
      "Identify dependencies",
      "Separate routine work from exceptions",
      "Make bottlenecks visible",
    ],
  },
  {
    number: "03",
    title: "DIAGNOSE",
    subtitle: "Find the friction",
    icon: Gauge,
    statement:
      "Find where time, effort and attention are being unnecessarily consumed.",
    details: [
      "Locate repetitive work",
      "Identify unnecessary handoffs",
      "Find information gaps",
      "Prioritize the highest-value opportunities",
    ],
  },
  {
    number: "04",
    title: "REDESIGN",
    subtitle: "Simplify before automating",
    icon: Settings2,
    statement:
      "Improve the process before deciding which technology belongs in it.",
    details: [
      "Remove unnecessary steps",
      "Simplify decision paths",
      "Standardize repeatable activities",
      "Design the future-state workflow",
    ],
  },
  {
    number: "05",
    title: "ENABLE",
    subtitle: "Choose the right intervention",
    icon: Zap,
    statement:
      "Use the right combination of automation, AI, data and human judgment.",
    details: [
      "Python for monitoring and processing",
      "Workflow automation for orchestration",
      "AI for information processing",
      "Human review where judgment matters",
    ],
  },
  {
    number: "06",
    title: "MEASURE",
    subtitle: "Prove the change",
    icon: Check,
    statement:
      "A redesigned process should create a measurable improvement.",
    details: [
      "Measure time saved",
      "Measure manual effort reduced",
      "Measure consistency and scalability",
      "Continue improving the workflow",
    ],
  },
];

const interventions = [
  {
    title: "AUTOMATION",
    icon: Workflow,
    description:
      "For repetitive, predictable activities that can follow defined rules.",
  },
  {
    title: "AI",
    icon: Bot,
    description:
      "For supporting information processing, extraction, classification and summarization.",
  },
  {
    title: "DATA",
    icon: Database,
    description:
      "For structuring information so that it can be used consistently.",
  },
  {
    title: "HUMAN",
    icon: Hand,
    description:
      "For judgment, exceptions, validation and decisions that should remain human.",
  },
];

const transformationStages = [
  {
    title: "MANUAL",
    text: "People repeatedly perform the same work.",
  },
  {
    title: "STRUCTURED",
    text: "The workflow is broken into clear stages.",
  },
  {
    title: "AUTOMATED",
    text: "Predictable activities are handled automatically.",
  },
  {
    title: "INTELLIGENT",
    text: "AI supports information-heavy activities where useful.",
  },
  {
    title: "MEASURABLE",
    text: "The outcome is monitored and improved.",
  },
];

function ApproachPage() {
  const [activeStep, setActiveStep] = useState(0);
  const [activeIntervention, setActiveIntervention] = useState(0);
  const [activeTransformation, setActiveTransformation] = useState(0);

  const step = approachSteps[activeStep];
  const StepIcon = step.icon;

  return (
    <main className="overflow-hidden">

      {/* =========================================================
          HERO
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-6 pb-12 pt-10 md:pb-16 md:pt-14">
        <div className="grid items-center gap-8 lg:grid-cols-[1fr_0.9fr] lg:gap-14">

          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="mb-4 flex items-center gap-3 text-[16px] font-semibold uppercase tracking-[0.2em] text-primary">
              <span className="h-px w-8 bg-primary" />
              MY APPROACH
            </div>

            <h1 className="max-w-3xl text-5xl font-semibold leading-[0.96] tracking-[-0.045em] text-foreground md:text-7xl">
              Start with the
              <br />
              <span className="text-primary">work.</span>
              <br />
              Then design the
              <br />
              <span className="text-primary">system.</span>
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-7 text-muted-foreground md:text-lg">
              I understand how the work moves, identify friction, redesign the
              process and then choose where automation, AI, data or human
              judgment can create the most value.
            </p>
          </motion.div>

          {/* RIGHT — INTERACTIVE MODEL */}

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="rounded-2xl border border-white/10 bg-surface/30 p-5 md:p-7">

              <div className="mb-5 flex items-center justify-between">
                <span className="text-[16px] font-semibold uppercase tracking-[0.18em] text-muted-foreground">
                  THE MODEL
                </span>

                <Sparkles className="h-5 w-5 text-primary" />
              </div>

              <div className="space-y-2">

                {[
                  ["01", "UNDERSTAND"],
                  ["02", "REDESIGN"],
                  ["03", "ENABLE"],
                  ["04", "MEASURE"],
                ].map(([number, title], index) => (
                  <motion.button
                    key={number}
                    type="button"
                    onClick={() => setActiveStep(index)}
                    whileHover={{ x: 4 }}
                    whileTap={{ scale: 0.99 }}
                    className={`flex w-full items-center gap-4 rounded-xl border p-4 text-left transition-all duration-200 md:p-5 ${
                      activeStep === index
                        ? "border-primary/40 bg-primary/5"
                        : "border-transparent bg-background hover:border-primary/20"
                    }`}
                  >
                    <span className="text-xs font-semibold text-primary">
                      {number}
                    </span>

                    <span className="text-sm font-semibold tracking-[0.08em] text-foreground">
                      {title}
                    </span>

                    <span
                      className={`ml-auto h-2 w-2 rounded-full transition-all ${
                        activeStep === index
                          ? "bg-primary"
                          : "bg-muted-foreground/20"
                      }`}
                    />
                  </motion.button>
                ))}

              </div>

              <AnimatePresence mode="wait">
                <motion.div
                  key={activeStep}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -8 }}
                  className="mt-4 rounded-xl border border-primary/20 bg-primary/5 p-5"
                >
                  <div className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    {approachSteps[activeStep].title}
                  </div>

                  <p className="mt-2 text-sm leading-6 text-foreground">
                    {approachSteps[activeStep].statement}
                  </p>
                </motion.div>
              </AnimatePresence>

            </div>
          </motion.div>
        </div>
      </section>

      {/* =========================================================
          PRINCIPLE
      ========================================================= */}

      <section className="border-y border-white/5 bg-surface/20">
        <div className="mx-auto max-w-7xl px-6 py-14 md:py-18">

          <div className="grid gap-8 lg:grid-cols-2 lg:items-end">

            <div>
              <div className="mb-4 flex items-center gap-3 text-[16px] font-semibold uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-8 bg-primary" />
                THE PRINCIPLE
              </div>

              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.035em] text-foreground md:text-6xl">
                Don't automate
                <br />
                the <span className="text-primary">problem.</span>
              </h2>
            </div>

            <p className="max-w-xl text-base leading-7 text-muted-foreground md:text-lg">
              Automation is most valuable when it is applied to a process
              that has already been understood and improved. The objective is
              not more technology. The objective is better work.
            </p>

          </div>
        </div>
      </section>

      {/* =========================================================
          SIX STEP METHOD
      ========================================================= */}

      <section
        id="method"
        className="mx-auto max-w-7xl scroll-mt-20 px-6 py-14 md:py-20"
      >

        <div className="mb-8">

          <div className="mb-4 flex items-center gap-3 text-[16px] font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" />
            THE SIX-STEP APPROACH
          </div>

          <h2 className="max-w-4xl text-4xl font-semibold leading-[1] tracking-[-0.035em] text-foreground md:text-6xl">
            How the thinking
            <br />
            <span className="text-primary">works.</span>
          </h2>

        </div>

        <div className="grid gap-5 lg:grid-cols-[0.75fr_1.25fr]">

          {/* STEP SELECTOR */}

          <div className="space-y-2">

            {approachSteps.map((item, index) => {
              const Icon = item.icon;
              const active = index === activeStep;

              return (
                <button
                  key={item.number}
                  type="button"
                  onClick={() => setActiveStep(index)}
                  className={`group w-full rounded-xl border p-4 text-left transition-all duration-200 md:p-5 ${
                    active
                      ? "border-primary/40 bg-primary/5"
                      : "border-white/10 bg-surface/20 hover:border-primary/20"
                  }`}
                >

                  <div className="flex items-center gap-4">

                    <span
                      className={`w-8 text-sm font-semibold ${
                        active
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    >
                      {item.number}
                    </span>

                    <Icon
                      className={`h-5 w-5 ${
                        active
                          ? "text-primary"
                          : "text-muted-foreground"
                      }`}
                    />

                    <div className="min-w-0 flex-1">

                      <div className="text-sm font-semibold tracking-[0.05em] text-foreground">
                        {item.title}
                      </div>

                      <div className="mt-1 text-xs text-muted-foreground">
                        {item.subtitle}
                      </div>

                    </div>

                    <span
                      className={`h-2 w-2 rounded-full transition-all ${
                        active
                          ? "bg-primary"
                          : "bg-muted-foreground/20"
                      }`}
                    />

                  </div>

                </button>
              );
            })}

          </div>

          {/* ACTIVE PANEL */}

          <div className="relative min-h-[400px] overflow-hidden rounded-2xl border border-white/10 bg-surface/30">

            <div className="absolute right-6 top-5 text-[110px] font-semibold leading-none text-primary/5 md:text-[160px]">
              {step.number}
            </div>

            <AnimatePresence mode="wait">

              <motion.div
                key={activeStep}
                initial={{ opacity: 0, x: 25 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="relative p-7 md:p-10"
              >

                <div className="flex h-14 w-14 items-center justify-center rounded-xl border border-primary/25 bg-primary/5">
                  <StepIcon className="h-6 w-6 text-primary" />
                </div>

                <div className="mt-7 text-xs font-semibold uppercase tracking-[0.18em] text-primary">
                  STEP {step.number}
                </div>

                <h3 className="mt-2 text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
                  {step.title}
                </h3>

                <p className="mt-4 max-w-2xl text-lg leading-8 text-foreground">
                  {step.statement}
                </p>

                <div className="mt-7 grid gap-3 sm:grid-cols-2">

                  {step.details.map((detail) => (
                    <div
                      key={detail}
                      className="flex items-start gap-3 rounded-xl border border-white/10 bg-background p-4"
                    >
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />

                      <span className="text-sm leading-6 text-muted-foreground">
                        {detail}
                      </span>
                    </div>
                  ))}

                </div>

              </motion.div>

            </AnimatePresence>

          </div>

        </div>
      </section>

      {/* =========================================================
          INTERVENTION
      ========================================================= */}

      <section className="border-y border-white/5 bg-surface/20">

        <div className="mx-auto max-w-7xl px-6 py-14 md:py-20">

          <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">

            <div>

              <div className="mb-4 flex items-center gap-3 text-[16px] font-semibold uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-8 bg-primary" />
                CHOOSE THE INTERVENTION
              </div>

              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.035em] text-foreground md:text-6xl">
                Not every problem
                <br />
                needs <span className="text-primary">AI.</span>
              </h2>

              <p className="mt-5 max-w-xl text-base leading-7 text-muted-foreground">
                The type of work determines the intervention. Click each
                option to see where it fits.
              </p>

            </div>

            <div>

              <div className="grid gap-2 sm:grid-cols-2">

                {interventions.map((item, index) => {
                  const Icon = item.icon;
                  const active = activeIntervention === index;

                  return (
                    <button
                      key={item.title}
                      type="button"
                      onClick={() => setActiveIntervention(index)}
                      className={`rounded-xl border p-5 text-left transition-all ${
                        active
                          ? "border-primary/40 bg-primary/5"
                          : "border-white/10 bg-background hover:border-primary/20"
                      }`}
                    >

                      <Icon
                        className={`h-5 w-5 ${
                          active
                            ? "text-primary"
                            : "text-muted-foreground"
                        }`}
                      />

                      <div className="mt-4 text-sm font-semibold tracking-[0.1em] text-foreground">
                        {item.title}
                      </div>

                      <div className="mt-2 text-xs leading-5 text-muted-foreground">
                        {item.description}
                      </div>

                    </button>
                  );
                })}

              </div>

              <AnimatePresence mode="wait">

                <motion.div
                  key={activeIntervention}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-3 rounded-xl border border-primary/20 bg-primary/5 p-5"
                >

                  <div className="text-xs font-semibold uppercase tracking-[0.15em] text-primary">
                    SELECTED
                  </div>

                  <div className="mt-2 text-xl font-semibold text-foreground">
                    {interventions[activeIntervention].title}
                  </div>

                  <p className="mt-2 text-sm leading-6 text-muted-foreground">
                    {interventions[activeIntervention].description}
                  </p>

                </motion.div>

              </AnimatePresence>

            </div>

          </div>

        </div>
      </section>

      {/* =========================================================
          TRANSFORMATION JOURNEY
      ========================================================= */}

      <section className="mx-auto max-w-7xl px-6 py-14 md:py-20">

        <div className="mb-8">

          <div className="mb-4 flex items-center gap-3 text-[16px] font-semibold uppercase tracking-[0.2em] text-primary">
            <span className="h-px w-8 bg-primary" />
            FROM PROBLEM TO OUTCOME
          </div>

          <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.035em] text-foreground md:text-6xl">
            See the workflow
            <br />
            <span className="text-primary">transform.</span>
          </h2>

        </div>

        <div className="rounded-2xl border border-white/10 bg-surface/30 p-6 md:p-10">

          {/* DESKTOP PROGRESS */}

          <div className="relative mb-10 hidden md:block">

            <div className="absolute left-0 right-0 top-4 h-px bg-white/10" />

            <motion.div
              className="absolute left-0 top-4 h-px bg-primary"
              animate={{
                width: `${
                  (activeTransformation /
                    (transformationStages.length - 1)) *
                  100
                }%`,
              }}
              transition={{ duration: 0.3 }}
            />

            <div className="relative flex justify-between">

              {transformationStages.map((stage, index) => (
                <button
                  key={stage.title}
                  type="button"
                  onClick={() => setActiveTransformation(index)}
                  className="group flex flex-col items-center"
                >

                  <span
                    className={`flex h-8 w-8 items-center justify-center rounded-full border text-xs font-semibold transition-all ${
                      index <= activeTransformation
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-white/20 bg-background text-muted-foreground"
                    }`}
                  >
                    {index + 1}
                  </span>

                  <span
                    className={`mt-3 text-xs font-semibold tracking-[0.1em] ${
                      index === activeTransformation
                        ? "text-primary"
                        : "text-muted-foreground"
                    }`}
                  >
                    {stage.title}
                  </span>

                </button>
              ))}

            </div>
          </div>

          {/* MOBILE */}

          <div className="mb-7 flex gap-2 overflow-x-auto pb-2 md:hidden">

            {transformationStages.map((stage, index) => (
              <button
                key={stage.title}
                type="button"
                onClick={() => setActiveTransformation(index)}
                className={`shrink-0 rounded-full border px-4 py-2 text-xs font-semibold ${
                  index === activeTransformation
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-white/10 text-muted-foreground"
                }`}
              >
                {stage.title}
              </button>
            ))}

          </div>

          <AnimatePresence mode="wait">

            <motion.div
              key={activeTransformation}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              className="grid gap-7 md:grid-cols-[0.7fr_1.3fr] md:items-center"
            >

              <div>

                <div className="text-7xl font-semibold leading-none text-primary/15 md:text-8xl">
                  0{activeTransformation + 1}
                </div>

                <h3 className="mt-3 text-3xl font-semibold text-foreground md:text-4xl">
                  {transformationStages[activeTransformation].title}
                </h3>

              </div>

              <div className="rounded-xl border border-primary/20 bg-primary/5 p-6 md:p-8">

                <div className="flex items-center gap-3">

                  <FileSearch className="h-5 w-5 text-primary" />

                  <span className="text-xs font-semibold uppercase tracking-[0.14em] text-primary">
                    WHAT CHANGES
                  </span>

                </div>

                <p className="mt-4 text-xl leading-8 text-foreground md:text-2xl">
                  {transformationStages[activeTransformation].text}
                </p>

                {activeTransformation <
                  transformationStages.length - 1 && (
                  <button
                    type="button"
                    onClick={() =>
                      setActiveTransformation(
                        activeTransformation + 1,
                      )
                    }
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-primary"
                  >
                    NEXT STAGE
                    <ArrowRight className="h-4 w-4" />
                  </button>
                )}

              </div>

            </motion.div>

          </AnimatePresence>

        </div>
      </section>

      {/* =========================================================
          FINAL CTA
      ========================================================= */}

      <section className="border-t border-white/5 bg-surface/20">

        <div className="mx-auto max-w-7xl px-6 py-14 md:py-18">

          <div className="flex flex-col gap-7 md:flex-row md:items-end md:justify-between">

            <div>

              <div className="mb-4 flex items-center gap-3 text-[16px] font-semibold uppercase tracking-[0.2em] text-primary">
                <span className="h-px w-8 bg-primary" />
                NEXT
              </div>

              <h2 className="text-4xl font-semibold leading-[1] tracking-[-0.035em] text-foreground md:text-5xl">
                See the approach
                <br />
                <span className="text-primary">
                  in practice.
                </span>
              </h2>

            </div>

            <Link
              to="/process"
              className="inline-flex w-fit items-center gap-2 rounded-md bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5"
            >
              SEE TRANSFORMATIONS
              <ArrowRight className="h-4 w-4" />
            </Link>

          </div>

        </div>
      </section>

    </main>
  );
}

export const Route = createFileRoute("/approach")({
  component: ApproachPage,
});