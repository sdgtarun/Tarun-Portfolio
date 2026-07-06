## Home page fixes

- **Shrink hero portrait**: cap `TiltPortrait` at `max-w-[320px]` and center it in its column so it stops dominating the hero.
- **Icon row under intro** — replace with 3 real, useful actions:
  - `Linkedin` icon → opens `https://www.linkedin.com/in/tarunshendge` in a new tab.
  - `Github`/`Code2` icon → opens `https://github.com/tarunshendge` in a new tab.
  - `Mail` icon (labeled "Chat with me") → `mailto:adgarun15@gmail.com?subject=Let's connect`.
- Add a **floating chat bubble** bottom-right on every page (mounted in `__root.tsx`) that also opens `mailto:adgarun15@gmail.com`. Pulsing cyan ring, tooltip "Chat with me".

## PDF resume — match the uploaded reference

Rewrite `src/lib/generateResume.ts` so `downloadResumePdf()` renders the exact two-column design from the uploaded image:

- **Left dark sidebar** (deep navy `#0F1B2D`, full page height):
  - Circular "TS" cyan-ringed monogram at top.
  - CONTACT: Location, Mobile, Email, LinkedIn.
  - CORE SKILLS: cyan bulleted list (DPS, Sanctions & Risk Compliance, Python & AI Agents, Process Automation (Power Automate), Power BI & Dashboards, SQL & Database Mgmt, Regulatory Content Analysis, Standard Operating Procedures (SOPs), Cross-functional Training).
  - EDUCATION: 2021 · Bachelor of Commerce · Foreign Trade · Ethames Degree College, Hyderabad.
  - CERTIFICATIONS: Global Trade Cert (Global IMPEX), Data & Analytics Cert (TR), SQL for EDA, Power BI Visualization & Dashboards, Power Query From Excel to SQL, Prompt Structuring for Enhanced AI.
- **Right white column**:
  - Large "TARUN SHENDGE" wordmark, dark navy.
  - `SUMMARY` heading with cyan underline + paragraph with bolded key terms (Denied Party Screening (DPS), regulatory compliance, workflow automation, Python, AI Agents, Power Automate).
  - `PROFESSIONAL EXPERIENCE` heading with cyan underline.
    - **Analyst · Global Trade (Sanctions & Compliance)** — Thomson Reuters / Hyderabad — Mar 2022 – Present, with the 6 bullets from the reference (bold cyan highlights on DPS, Python/AI Agents/Power Automate, 5,000 hours, MS 365/OpenArena, Power BI Report).
    - **Data Analyst Intern** — Innodatatics / Hyderabad — 2021, 3 bullets.
- Cyan `•` markers, helvetica weights, `splitTextToSize` wrapping, page-break safety, filename `Tarun-Shendge-Resume.pdf`, sonner toast after save.

Verify visually by generating the PDF from the preview and (if needed) rendering pages to images to catch overlap/clipping.

## Interactivity boost (subtle but visible)

Add lightweight motion across the site:

- **`<CursorGlow />`** mounted in `__root.tsx` — soft cyan radial blob following the pointer with spring easing; disabled on touch and `prefers-reduced-motion`.
- **`<Magnetic>`** wrapper in `src/components/Motion.tsx` — CTAs (Work With Me, Download CV, Contact Me, Download PDF Resume, floating chat bubble) nudge toward the cursor on hover.
- **Skill cards**: add pointer-based tilt (rotateX/Y capped ~6°) on top of existing hover lift + cyan glow.
- **Stats strip**: cyan underline sweep on view.
- **Header**: thin cyan scroll-progress bar at the top of `SiteHeader`.
- **Portrait**: slow floating idle animation (translateY ±4px) layered on top of mouse tilt.
- **FadeIn**: add scale 0.98 → 1 to make scroll reveals feel alive.

## Files touched

- `src/routes/index.tsx` — smaller portrait, new LinkedIn/GitHub/Mail buttons, magnetic CTAs, tilt on skill cards.
- `src/lib/generateResume.ts` — full rewrite to the two-column design above.
- `src/components/Motion.tsx` — add `Magnetic`, tweak `FadeIn`.
- `src/components/CursorGlow.tsx` — new.
- `src/components/ChatBubble.tsx` — new (floating mailto button).
- `src/components/SiteHeader.tsx` — scroll-progress bar.
- `src/routes/__root.tsx` — mount `<CursorGlow />` and `<ChatBubble />`.
- `src/routes/resume.tsx` — magnetic wrap on download button.

## Out of scope

No copy changes, no new pages, no backend, no route changes.
