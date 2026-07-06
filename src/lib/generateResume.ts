import { jsPDF } from "jspdf";
import { toast } from "sonner";

const NAVY: [number, number, number] = [15, 27, 45];
const CYAN: [number, number, number] = [34, 211, 238];
const WHITE: [number, number, number] = [255, 255, 255];
const INK: [number, number, number] = [30, 34, 48];
const MUTED_DARK: [number, number, number] = [188, 200, 220];
const MUTED_LIGHT: [number, number, number] = [110, 118, 140];

export function downloadResumePdf() {
  const doc = new jsPDF({ unit: "pt", format: "a4" });
  const W = doc.internal.pageSize.getWidth();
  const H = doc.internal.pageSize.getHeight();
  const SIDEBAR_W = 200;

  // ===== Left sidebar =====
  doc.setFillColor(...NAVY);
  doc.rect(0, 0, SIDEBAR_W, H, "F");

  // Monogram circle
  const cx = SIDEBAR_W / 2;
  const cy = 78;
  doc.setDrawColor(...CYAN);
  doc.setLineWidth(2);
  doc.setFillColor(30, 45, 70);
  doc.circle(cx, cy, 34, "FD");
  doc.setTextColor(...CYAN);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("TS", cx, cy + 8, { align: "center" });

  let ly = 140;
  const lx = 20;
  const lw = SIDEBAR_W - 40;

  const sideHeading = (label: string) => {
    doc.setTextColor(...WHITE);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(11);
    doc.text(label, lx, ly);
    ly += 6;
    doc.setDrawColor(...CYAN);
    doc.setLineWidth(1.2);
    doc.line(lx, ly, lx + 28, ly);
    ly += 12;
  };

  const sideLabel = (label: string, value: string) => {
    doc.setTextColor(...CYAN);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(8);
    doc.text(label, lx, ly);
    ly += 10;
    doc.setTextColor(...MUTED_DARK);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    const lines = doc.splitTextToSize(value, lw);
    doc.text(lines, lx, ly);
    ly += lines.length * 10 + 4;
  };

  const sideBullet = (text: string) => {
    doc.setTextColor(...CYAN);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(9);
    doc.text("\u2022", lx, ly);
    doc.setTextColor(...MUTED_DARK);
    doc.setFont("helvetica", "normal");
    doc.setFontSize(8.5);
    const lines = doc.splitTextToSize(text, lw - 10);
    doc.text(lines, lx + 9, ly);
    ly += lines.length * 10 + 2;
  };

  sideHeading("CONTACT");
  sideLabel("Location:", "Hyderabad, TG 500048");
  sideLabel("Mobile:", "7093161409");
  sideLabel("Email:", "sdgtarun15@gmail.com");
  sideLabel("LinkedIn:", "https://www.linkedin.com/in/tarun-shendge-81a546198/");
  ly += 6;

  sideHeading("CORE SKILLS");
  [
    "Denied Party Screening (DPS)",
    "Sanctions & Risk Compliance",
    "Python & AI Agents",
    "Process Automation (Power Automate)",
    "Power BI & Dashboards",
    "SQL & Database Mgmt",
    "Regulatory Content Analysis",
    "Standard Operating Procedures (SOPs)",
    "Cross-functional Training",
  ].forEach(sideBullet);
  ly += 6;

  sideHeading("EDUCATION");
  doc.setTextColor(...CYAN);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(9);
  doc.text("2021", lx, ly);
  ly += 11;
  doc.setTextColor(...WHITE);
  doc.setFontSize(9.5);
  doc.text("Bachelor of Commerce", lx, ly);
  ly += 10;
  doc.setTextColor(...MUTED_DARK);
  doc.setFont("helvetica", "italic");
  doc.setFontSize(8);
  doc.text("Foreign Trade", lx, ly);
  ly += 10;
  doc.setFont("helvetica", "normal");
  const eduLines = doc.splitTextToSize(
    "Ethames Degree College, Hyderabad",
    lw,
  );
  doc.text(eduLines, lx, ly);
  ly += eduLines.length * 10 + 12;

  sideHeading("CERTIFICATIONS");
  [
    "Global Trade Certification (Global IMPEX)",
    "Data and Analytics Certification (TR)",
    "SQL for Exploratory Data Analysis",
    "Power BI Data Visualization & Dashboards",
    "Power Query From Excel to SQL",
    "Prompt Structuring for Enhanced AI",
  ].forEach(sideBullet);

  // ===== Right column =====
  const rx = SIDEBAR_W + 28;
  const rw = W - rx - 28;
  let ry = 60;

  doc.setTextColor(...NAVY);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.text("TARUN SHENDGE", rx, ry);
  ry += 8;
  doc.setDrawColor(...CYAN);
  doc.setLineWidth(1.4);
  doc.line(rx, ry, rx + 80, ry);
  ry += 24;

  const rightHeading = (label: string) => {
    doc.setTextColor(...NAVY);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(13);
    doc.text(label, rx, ry);
    ry += 5;
    doc.setDrawColor(...CYAN);
    doc.setLineWidth(1);
    doc.line(rx, ry, rx + 40, ry);
    ry += 14;
  };

  const rightPara = (parts: Array<[string, boolean?]>) => {
    doc.setFontSize(9.5);
    let cursorX = rx;
    const lineH = 12;
    const maxX = rx + rw;
    parts.forEach(([text, bold]) => {
      doc.setFont("helvetica", bold ? "bold" : "normal");
      doc.setTextColor(...(bold ? CYAN : INK));
      const words = text.split(/(\s+)/);
      words.forEach((w) => {
        if (!w) return;
        const width = doc.getTextWidth(w);
        if (cursorX + width > maxX && w.trim() !== "") {
          ry += lineH;
          cursorX = rx;
          if (w.startsWith(" ")) w = w.trimStart();
        }
        doc.text(w, cursorX, ry);
        cursorX += width;
      });
    });
    ry += lineH + 6;
  };

  const bullet = (parts: Array<[string, boolean?]>) => {
    doc.setTextColor(...CYAN);
    doc.setFont("helvetica", "bold");
    doc.setFontSize(10);
    doc.text("\u2022", rx, ry);
    const startX = rx + 10;
    let cursorX = startX;
    const lineH = 12;
    const maxX = rx + rw;
    doc.setFontSize(9.5);
    parts.forEach(([text, bold]) => {
      doc.setFont("helvetica", bold ? "bold" : "normal");
      doc.setTextColor(...(bold ? CYAN : INK));
      const words = text.split(/(\s+)/);
      words.forEach((w) => {
        if (!w) return;
        const width = doc.getTextWidth(w);
        if (cursorX + width > maxX && w.trim() !== "") {
          ry += lineH;
          cursorX = startX;
          if (w.startsWith(" ")) w = w.trimStart();
        }
        doc.text(w, cursorX, ry);
        cursorX += width;
      });
    });
    ry += lineH + 3;
  };

  rightHeading("SUMMARY");
  rightPara([
    ["Analytical Global Trade and Sanctions Risk professional with 4 years of experience specializing in ", false],
    ["Denied Party Screening (DPS), regulatory compliance, and workflow automation", true],
    [". Highly skilled in monitoring and interpreting complex sanctions content, mitigating risk, and transforming unstructured regulatory updates into structured compliance datasets. Proven track record of scaling operations by engineering automation solutions using ", false],
    ["Python, AI Agents, and Power Automate", true],
    [", significantly reducing manual effort. Actively seeking to leverage expertise in risk mitigation and process optimization to protect business integrity.", false],
  ]);

  ry += 4;
  rightHeading("PROFESSIONAL EXPERIENCE");

  // Role 1
  doc.setTextColor(...NAVY);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  const role1 = "Analyst - Global Trade (Sanctions & Compliance)";
  const role1Lines = doc.splitTextToSize(role1, rw - 110);
  doc.text(role1Lines, rx, ry);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...MUTED_LIGHT);
  doc.text("March 2022 - Present", rx + rw, ry, { align: "right" });
  ry += role1Lines.length * 12 + 2;
  doc.setTextColor(...CYAN);
  doc.setFont("helvetica", "bolditalic");
  doc.setFontSize(9);
  doc.text("THOMSON REUTERS  |  HYDERABAD", rx, ry);
  ry += 14;

  [
    [
      ["Spearhead ", false],
      ["Denied Party Screening (DPS)", true],
      [" processes, analyzing complex regulatory, legal, and sanctions content to ensure compliance across global trade platforms.", false],
    ],
    [
      ["Engineered and deployed automation workflows using ", false],
      ["Python, AI Agents, and Power Automate", true],
      [" to monitor 280+ regulatory websites, successfully eliminating ", false],
      ["5,000 hours", true],
      [" of manual tracking and risk analysis.", false],
    ],
    [
      ["Engineered ", false],
      ["AI chains and agents", true],
      [" within Microsoft 365 and OpenArena to automate the summarization of regulatory updates, transforming complex legal terminology into simplified, actionable compliance data.", false],
    ],
    [
      ["Conducted comprehensive onboarding and training sessions for ", false],
      ["new hires and contractors", true],
      [", establishing standard operating procedures (SOPs) for screening protocols and automated workflows.", false],
    ],
    [
      ["Received Hyderabad site-level TR Spotlight Award for building a ", false],
      ["Power BI Report", true],
      [" that drove the best process improvement and operational visibility for Quarter 2.", false],
    ],
    [
      ["Collaborate with cross-functional and global tech teams to refine data collection and integration methodologies, ensuring alignment with ever-changing international sanctions guidelines.", false],
    ],
  ].forEach((b) => bullet(b as Array<[string, boolean?]>));

  ry += 8;

  // Role 2
  doc.setTextColor(...NAVY);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(11);
  doc.text("Data Analyst Intern", rx, ry);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(9);
  doc.setTextColor(...MUTED_LIGHT);
  doc.text("2021", rx + rw, ry, { align: "right" });
  ry += 14;
  doc.setTextColor(...CYAN);
  doc.setFont("helvetica", "bolditalic");
  doc.setFontSize(9);
  doc.text("INNODATATICS  |  HYDERABAD", rx, ry);
  ry += 14;

  [
    [
      ["Gained hands-on experience analyzing campaign performance metrics to optimize ad spend and improve overall marketing effectiveness.", false],
    ],
    [
      ["Designed and implemented ", false],
      ["visual dashboards", true],
      [" and detailed reports to present findings to senior management, assisting in the development of data-driven strategies.", false],
    ],
    [
      ["Participated in cross-departmental projects to enhance data collection and modeling methodologies, aligning closely with financial data interpretation and forecasting.", false],
    ],
  ].forEach((b) => bullet(b as Array<[string, boolean?]>));

  doc.save("Tarun-Shendge-Resume.pdf");
  toast.success("Resume downloaded");
}
