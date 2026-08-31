import { Link, useRouterState } from "@tanstack/react-router";
import { AnimatePresence, motion, useScroll, useSpring } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const links = [
  { to: "/", label: "Home" },
  { to: "/Approach", label: "Approach" },
  { to: "/process", label: "Process / Automations" },
  { to: "/Experience", label: "Experience" },
] as const;

export function SiteHeader() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 20 });

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-background/80 backdrop-blur">
      <motion.div
        style={{ scaleX }}
        className="absolute inset-x-0 top-0 h-0.5 origin-left bg-primary"
      />
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        <Link to="/" className="text-sm font-semibold tracking-tight text-foreground">
          Tarun Shendge
        </Link>
        <nav className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active = pathname === l.to;
            return (
              <Link
                key={l.to}
                to={l.to}
                className={`relative py-2 text-sm transition-colors ${
                  active ? "text-primary" : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {l.label}
                {active && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-primary"
                    transition={{ type: "spring", stiffness: 380, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </nav>
        <button
          className="grid h-9 w-9 place-items-center rounded-md text-foreground md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="overflow-hidden border-t border-white/5 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-3">
              {links.map((l) => {
                const active = pathname === l.to;
                return (
                  <Link
                    key={l.to}
                    to={l.to}
                    onClick={() => setOpen(false)}
                    className={`rounded-md px-3 py-2 text-sm ${
                      active
                        ? "bg-primary/10 text-primary"
                        : "text-muted-foreground hover:bg-white/5 hover:text-foreground"
                    }`}
                  >
                    {l.label}
                  </Link>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
