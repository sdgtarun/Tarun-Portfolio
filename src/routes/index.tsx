import { createFileRoute, Link } from "@tanstack/react-router";
import { TypeAnimation } from "react-type-animation";
import {
  ArrowRight,
  BadgeCheck,
  BarChart3,
  Bot,
  Database,
  Download,
  FileText,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Shield,
  ShieldCheck,
  Sparkles,
  Users,
  Workflow,
} from "lucide-react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import portrait from "@/assets/portrait.jpg";
import { CountUp, FadeIn, Magnetic } from "@/components/Motion";
import { downloadResumePdf } from "@/lib/generateResume";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tarun Shendge — Global Trade & Sanctions Risk Specialist" },
      {
        name: "description",
        content:
          "Analytical specialist with 4+ years in Denied Party Screening, regulatory compliance, and AI-driven workflow automation.",
      },
    ],
  }),
  component: Home,
});

const stats = [
  { value: "4+", label: "Years of", label2: "Experience" },
  { value: "280+", label: "Regulatory Websites", label2: "" },
  { value: "5,000+", label: "Manual Hours", label2: "Eliminated" },
  { value: "AI Agents+", label: "AUTOMATION", label2: "" },
];

const skills = [
  { icon: Shield, label: "Denied Party Screening (DPS)" },
  { icon: ShieldCheck, label: "Sanctions & Risk Compliance" },
  { icon: Bot, label: "Python & AI Agents" },
  { icon: Sparkles, label: "Working with LLMs" },
  { icon: Workflow, label: "Process Automation" },
  { icon: BarChart3, label: "Power BI & Dashboards" },
  { icon: Database, label: "Power automate" },
  { icon: FileText, label: "Regulatory Content Analysis" },
  { icon: GraduationCap, label: "Standard Operating Procedures" },
  { icon: Users, label: "Cross-functional Training" },
];

function TiltPortrait() {
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const sx = useSpring(rx, { stiffness: 120, damping: 12 });
  const sy = useSpring(ry, { stiffness: 120, damping: 12 });
  const rotateX = useTransform(sy, [-0.5, 0.5], [6, -6]);
  const rotateY = useTransform(sx, [-0.5, 0.5], [-6, 6]);

  return (
    <motion.div
      className="relative [perspective:1000px]"
      onMouseMove={(e) => {
        const b = e.currentTarget.getBoundingClientRect();
        rx.set((e.clientX - b.left) / b.width - 0.5);
        ry.set((e.clientY - b.top) / b.height - 0.5);
      }}
      onMouseLeave={() => {
        rx.set(0);
        ry.set(0);
      }}
    >
      <motion.div
        className="absolute -left-3 -top-3 h-full w-full -rotate-3 rounded-2xl border border-primary/40"
        animate={{ rotate: [-3, -4, -3] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute -left-1 -top-1 h-full w-full -rotate-1 rounded-2xl border border-primary/30"
        animate={{ rotate: [-1, -2, -1] }}
        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
        className="relative overflow-hidden rounded-2xl border border-primary/50 cyan-glow"
      >
        <img
          src={portrait}
          alt="Portrait of Tarun Shendge"
          width={832}
          height={1024}
          className="block h-full w-full object-cover grayscale hover:grayscale-0 transition-all duration-700 hover:scale-105"
        />
      </motion.div>
    </motion.div>
  );
}

function Home() {
  return (

    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="pointer-events-none absolute left-1/2 top-40 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-primary/15 blur-3xl"
        />
        <div className="mx-auto grid max-w-7xl items-center gap-10 px-6 py-16 md:grid-cols-[320px_1fr] md:py-24">
          <div className="mx-auto w-full max-w-[320px]">
            <TiltPortrait />
          </div>

          <FadeIn className="flex flex-col justify-center" delay={0.1}>
            <span className="inline-flex w-fit rounded-full border border-primary/40 bg-primary/10 px-4 py-1 text-[11px] font-medium uppercase tracking-widest text-primary">
              PROCESS × AUTOMATION × AI  
            </span>
            <h1 className="mt-6 text-5xl font-bold leading-[1.05] tracking-tight md:text-6xl">
              Hello, I'm
              <br />
              <span className="text-gradient-cyan">Tarun Shendge</span>
            </h1>
            <p className="mt-6 text-lg text-foreground">
  And I'm a{" "}
  <span className="text-primary underline decoration-primary/60 underline-offset-4">
    <TypeAnimation
      sequence={[
        "Global Trade Analyst",
        2000,
        "I REDESIGN HOW WORK MOVES",
        2000,
        "AI Workflow Specialist",
        2000,
      ]}
      wrapper="span"
      speed={50}
      repeat={Infinity}
    />
  </span>
</p>
            <p className="mt-6 max-w-lg text-sm leading-relaxed text-muted-foreground">
               I analyze complex workflows, identify operational friction, redesign processes, and build automation and AI solutions where they create measurable value.
            </p>

            <div className="mt-6 flex gap-2">
              {[
                {
                  Icon: Linkedin,
                  action: () =>
                    window.open("https://www.linkedin.com/in/tarun-shendge-81a546198/", "_blank", "noopener"),
                  label: "LinkedIn",
                },
                {
                  Icon: Github,
                  action: () =>
                    window.open("https://github.com/sdgtarun", "_blank", "noopener"),
                  label: "GitHub",
                },
                {
                  Icon: Mail,
                  action: () => {
                    window.location.href = "mailto:sdgtarun15@gmail.com?subject=Let%27s%20connect";
                  },
                  label: "Chat with me",
                },
              ].map(({ Icon, action, label }) => (
                <motion.button
                  key={label}
                  whileHover={{ y: -3, scale: 1.08 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={action}
                  aria-label={label}
                  title={label}
                  className="grid h-10 w-10 place-items-center rounded-md bg-surface text-primary ring-1 ring-white/10 transition-colors hover:bg-primary/10 hover:ring-primary/40"
                >
                  <Icon className="h-4 w-4" />
                </motion.button>
              ))}
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Magnetic>
                <Link
                  to="/experience"
                  className="group inline-flex items-center gap-2 rounded-md bg-primary px-5 py-3 text-sm font-medium text-primary-foreground transition-transform hover:-translate-y-0.5 hover:opacity-90"
                >
                  Explore My Experience{" "}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Magnetic>
              <Magnetic>
                <button
                  onClick={downloadResumePdf}
                  className="inline-flex items-center gap-2 rounded-md border border-primary/50 bg-transparent px-5 py-3 text-sm font-medium text-primary transition-colors hover:bg-primary/10"
                >
                  Download CV <Download className="h-4 w-4" />
                </button>
              </Magnetic>
            </div>
          </FadeIn>
        </div>
      </section>


      {/* Stats */}
      <section className="border-y border-white/5 bg-surface/40">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-6 py-10 md:grid-cols-4">
          {stats.map((s, i) => (
            <FadeIn key={s.value} delay={i * 0.08}>
              <div className="flex items-center gap-4">
                <CountUp value={s.value} className="text-4xl font-extrabold text-primary" />
                <div className="text-xs leading-tight text-muted-foreground">
                  <div>{s.label}</div>
                  <div className="font-semibold text-foreground">{s.label2}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Core Skills */}
      <section className="mx-auto max-w-7xl px-6 py-20">
        <FadeIn>
          <h2 className="text-3xl font-bold tracking-tight">Core Skills</h2>
          <p className="mt-3 max-w-xl text-sm text-muted-foreground">
            A comprehensive toolkit of technical and regulatory expertise developed through years of
            global trade risk management.
          </p>
        </FadeIn>

        <div className="mt-10 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map(({ icon: Icon, label }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.4, delay: (i % 5) * 0.05 }}
              whileHover={{ y: -4 }}
              className="group flex flex-col items-center gap-3 rounded-xl border border-white/5 bg-surface p-6 text-center transition-colors hover:border-primary/40 hover:shadow-[0_0_30px_-10px_var(--primary)]"
            >
              <div className="grid h-10 w-10 place-items-center rounded-md bg-primary/10 text-primary ring-1 ring-primary/30 transition-transform group-hover:scale-110">
                <Icon className="h-5 w-5" />
              </div>
              <div className="text-xs font-medium leading-tight text-foreground">{label}</div>
            </motion.div>
          ))}
        </div>
      </section>
    </>
  );
}
