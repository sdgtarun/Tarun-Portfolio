import { Link } from "@tanstack/react-router";
import { Mail, Linkedin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="border-t border-white/5 bg-background">
      <div className="mx-auto max-w-7xl px-6 py-8 md:py-14">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <div className="text-base font-semibold text-foreground">Tarun Shendge</div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Improving complex workflows through process redesign, automation and Al.
            </p>
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">Sitemap</div>
            <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
              <li><Link to="/" className="hover:text-primary">Home</Link></li>
              <li><Link to="/approach" className="hover:text-primary">Approach</Link></li>
              <li><Link to="/process" className="hover:text-primary">Process / Automations</Link></li>
              <li><Link to="/experience" className="hover:text-primary">Experience</Link></li>
            </ul>
          </div>
          <div>
            <div className="text-sm font-semibold text-foreground">Contact</div>
            <p className="mt-3 max-w-xs text-sm text-muted-foreground">
              Let's build a smarter system and process that deliver results
            </p>
            <div className="mt-4 flex gap-3">
              <a
                href="mailto:sdgtarun15@gmail.com"
                aria-label="Email"
                className="grid h-10 w-10 place-items-center rounded-md bg-surface text-primary ring-1 ring-white/10 hover:bg-surface-2"
              >
                <Mail className="h-4 w-4" />
              </a>
         <a
  href="https://www.linkedin.com/in/tarun-shendge-81a546198/"
  target="_blank"
  rel="noopener noreferrer"
  aria-label="LinkedIn"
  className="grid h-10 w-10 place-items-center rounded-md bg-surface text-primary ring-1 ring-white/10 hover:bg-primary/10 hover:ring-primary/40"
>
  <Linkedin className="h-4 w-4" />
</a>
            </div>
          </div>
        </div>
        <div className="mt-8 md:mt-12 border-t border-white/5 pt-6 text-center text-xs uppercase tracking-wider text-muted-foreground">
          © Tarun Shendge. Global Trade &amp; Sanctions Risk Specialist. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
