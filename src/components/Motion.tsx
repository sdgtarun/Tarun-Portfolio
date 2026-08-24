import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useEffect, useRef, type ReactNode } from "react";

export function FadeIn({
  children,
  delay = 0,
  y = 20,
  className,
}: {
  children: ReactNode;
  delay?: number;
  y?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function Magnetic({
  children,
  className,
  strength = 0.35,
}: {
  children: ReactNode;
  className?: string;
  strength?: number;
}) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const sx = useSpring(x, { damping: 15, stiffness: 200 });
  const sy = useSpring(y, { damping: 15, stiffness: 200 });
  return (
    <motion.span
      style={{ x: sx, y: sy, display: "inline-block" }}
      onMouseMove={(e) => {
        const r = e.currentTarget.getBoundingClientRect();
        x.set((e.clientX - (r.left + r.width / 2)) * strength);
        y.set((e.clientY - (r.top + r.height / 2)) * strength);
      }}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      className={className}
    >
      {children}
    </motion.span>
  );
}

function parseTarget(v: string): { num: number; prefix: string; suffix: string } | null {
  const m = v.match(/^([^\d-]*)(-?[\d.,]+)(.*)$/);
  if (!m) return null;
  const num = parseFloat(m[2].replace(/,/g, ""));
  if (Number.isNaN(num)) return null;
  return { prefix: m[1], num, suffix: m[3] };
}

export function CountUp({ value, className }: { value: string; className?: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  const parsed = parseTarget(value);
  const mv = useMotionValue(0);
  const spring = useSpring(mv, { damping: 24, stiffness: 60 });
  const display = useTransform(spring, (v) => {
    if (!parsed) return value;
    const n = Math.round(v);
    return `${parsed.prefix}${n}${parsed.suffix}`;
  });

  useEffect(() => {
    if (!parsed) return;
    if (inView) mv.set(parsed.num);
  }, [inView, mv, parsed]);

  if (!parsed) return <span className={className}>{value}</span>;
  return <motion.span ref={ref} className={className}>{display}</motion.span>;
}

export function AnimatedBar({
  pct,
  delay = 0,
  className,
}: {
  pct: number;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-40px" });
  return (
    <div ref={ref} className={`mt-1.5 h-1 overflow-hidden rounded-full bg-white/10 ${className ?? ""}`}>
      <motion.div
        initial={{ width: 0 }}
        animate={{ width: inView ? `${pct}%` : 0 }}
        transition={{ duration: 1.1, ease: "easeOut", delay }}
        className="h-full rounded-full bg-primary"
      />
    </div>
  );
}

