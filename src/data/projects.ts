export type Project = {
  slug: string;
  name: string;
  summary: string;
  category: string;
  period: string;
  status: string;
  role: string;
  stack: string[];
  problem: string;
  overview: string;
  features: string[];
  architecture: string[];
  challenges: string[];
  outcomes: string[];
  figures: { label: string; caption: string }[];
  live?: string;
  repo?: string;
  cover: "petrol" | "sage" | "stone" | "ink";
};

export const projects: Project[] = [
  {
    slug: "param",
    name: "Param",
    summary:
      "Enterprise healthcare platform at ASKI: 35+ modules, a staff dashboard, a field and patient app, and an API, used daily by 100+ people across 11,000+ patient records.",
    category: "Healthcare platform",
    period: "2025 — now",
    status: "In production",
    role: "Product strategy, roadmap, and delivery as Head of Software Development.",
    stack: ["React", "Node.js", "TypeScript", "SQL Server", "Redis", "AWS", "WhatsApp"],
    problem:
      "Hospital growth, clinical operations, and field work were split across WhatsApp, spreadsheets, and a hospital management system that did not show the day’s work to leadership.",
    overview:
      "PARAM is three applications: a staff admin dashboard, a field and patient mobile app, and an API platform. It covers referrals, doctor relationships, clinical workflows, WhatsApp, camps, rostering, HRMS, payments, and a 10-section executive report used in weekly reviews.",
    features: [
      "Doctor relationship management with field missions, geo-routing, and referral scorecards",
      "Lead-to-admission funnel analytics and coverage maps",
      "WhatsApp Business CRM: audiences, templates, a two-way inbox, and patient notifications on the Meta Cloud API",
      "Configurable OP and IP care journeys, health camps, and facility compliance checklists",
      "Staff rostering with an optimization solver, HRMS with biometric attendance, issue tracking, and payouts",
      "Executive pack: CEO reports, census, revenue, doctor growth, marketing, operational health, and turnaround time",
      "AI: radiology dictation to structured ultrasound drafts, EMR audio insights, vision cleanliness audits, bill OCR, reply suggestions, and sales-call briefings",
    ],
    architecture: [
      "React clients for staff and field work, with a Node.js API.",
      "Microsoft SQL Server: 600+ schema migrations and 120+ stored procedures. Redis and BullMQ run 24 job queues and 50+ scheduled jobs.",
      "Real-time updates through Socket.IO and server-sent events.",
      "Integrations with Suvarna HMS for registrations, OP and IP encounters, billing, pharmacy, discharges, and EMR, plus Razorpay, Firebase Cloud Messaging, Google Analytics 4, Facebook Ads, and Tally.",
      "AWS, Docker, Jenkins, Traefik, and NGINX. Product quality is watched in self-hosted Sentry.",
    ],
    challenges: [
      "Requirements come from hospital leadership, doctors, operations, and field teams, and the product has to stay in daily use in every department.",
      "AI features sit beside the system of record. A draft report or a suggested reply is not the clinical or commercial decision.",
      "The hospital management system, payments, messaging, and analytics have to agree on the same patient.",
    ],
    outcomes: [
      "35+ modules in daily use by 100+ hospital staff, covering 11,000+ patient records.",
    ],
    figures: [
      { label: "Referral desk", caption: "Screenshot to be added — referral list and follow-up." },
      { label: "Field visit", caption: "Screenshot to be added — PRO visit and camp workflow." },
    ],
    cover: "petrol",
  },
  {
    slug: "roster",
    name: "Roster",
    summary:
      "A shift-planning product for hospital teams that still assemble the week in spreadsheets, phone calls, and last-minute swaps.",
    category: "Healthcare scheduling",
    period: "2025 — now",
    status: "In production",
    role: "Shipped as a PARAM module for hospital staff.",
    stack: ["React", "Node.js", "SQL Server"],
    problem:
      "A hospital roster fails quietly. Coverage looks complete until a ward is short on a night shift, a leave request lands after the sheet is printed, or two people are assigned the same bed bay because the workbook had two copies.",
    overview:
      "Roster is the workforce scheduling module inside PARAM. It holds shift preferences, leave, and an optimization solver so the week is one plan instead of a copied spreadsheet.",
    features: [
      "Shift preferences and assignments by unit, role, and person",
      "Leave on the same plan as the published roster",
      "An optimization solver for coverage",
      "A plan the ward can read without keeping a second workbook",
    ],
    architecture: [
      "Staff, roles, units, shift types, and assignments. A roster is a set of assignments over a date range.",
      "The solver proposes coverage. Conflicts such as double booking or leave over a published shift stay visible.",
      "It ships with the rest of PARAM: React, Node.js, and SQL Server.",
    ],
    challenges: [
      "Hospital schedules change after they are published. The product has to show the edit, not hide it in a new file.",
      "Fairness, skill mix, and night-shift load are judgments. Software can surface the constraint. It should not pretend to have made the staffing decision.",
      "If the paper copy and the screen disagree, the ward will trust the paper. The plan has to be easy to print and hard to fork.",
    ],
    outcomes: [
      "Roster is one of the operational modules in daily use inside PARAM.",
    ],
    figures: [
      { label: "Week plan", caption: "Screenshot to be added — unit roster for the week." },
      { label: "Shift conflict", caption: "Screenshot to be added — leave overlapping a published shift." },
    ],
    cover: "sage",
  },
  {
    slug: "aski",
    name: "ASKI Hospitals",
    summary:
      "Head of Software Development at a super-specialty hospital in Bagalkot. The job is the unglamorous systems staff actually touch.",
    category: "Software leadership",
    period: "2025 — now",
    status: "Current role",
    role: "Head of Software Development, ASKI Super Specialty Hospital and Research Centre.",
    stack: ["React", "Node.js", "AWS", "Docker", "Jenkins", "SQL Server"],
    problem:
      "A working hospital needs products people open every day, and infrastructure that stays up while they do.",
    overview:
      "I own product strategy and delivery for PARAM, and the AWS stack under it. The team is in Bagalkot. I am based in Dharwad. Partners are hospital leadership, doctors, operations, and field staff.",
    features: [
      "PARAM: staff dashboard, field and patient app, and API, 35+ modules",
      "AI features on OpenAI, Claude, and NVIDIA APIs",
      "Executive reporting used in weekly leadership reviews",
      "Production: Docker, Jenkins, Traefik, NGINX, 24 queues, 50+ jobs, Sentry",
    ],
    architecture: [
      "React and Node.js applications, SQL Server for the records, Redis for jobs.",
      "Suvarna HMS is the clinical system of record PARAM integrates with, not a replacement for.",
    ],
    challenges: [
      "A tooling change is also a front-desk change.",
      "Discovery, AI features, and production incidents share one team.",
    ],
    outcomes: [
      "100+ daily users and 11,000+ patient records on PARAM.",
    ],
    figures: [
      { label: "Hospital systems", caption: "Screenshot to be added — an internal tool in use." },
    ],
    live: "https://askihospitals.com",
    cover: "ink",
  },
  {
    slug: "ai-hospital",
    name: "AI hospital automation",
    summary:
      "AI inside PARAM: speech, vision, OCR, and natural-language questions over hospital data. The model drafts. The hospital decides.",
    category: "AI product",
    period: "2025 — now",
    status: "In production",
    role: "Designed and shipped the features end to end.",
    stack: ["OpenAI", "Claude", "NVIDIA APIs", "OCR", "Speech-to-text", "Vision"],
    problem:
      "Hospital work is full of speech, photos, and forms that still have to become a record someone can act on.",
    overview:
      "The suite sits inside PARAM. Dictation becomes a structured ultrasound draft. Audio from an encounter becomes chief complaint, diagnosis, and treatment notes. A photo becomes a cleanliness score. A bill image is parsed. WhatsApp gets a suggested reply. Field staff get a briefing before a sales call. Leadership can ask questions of hospital data in plain language.",
    features: [
      "Radiology dictation to structured ultrasound report drafts",
      "EMR audio insights: chief complaint, diagnosis, and treatment",
      "Vision-AI facility cleanliness audits",
      "OCR bill parsing",
      "WhatsApp lead extraction and reply suggestions",
      "AI sales-call briefings",
      "Natural-language querying of hospital data",
    ],
    architecture: [
      "OpenAI, Claude, and NVIDIA APIs, with prompt engineering and evaluation against the hospital’s own records.",
      "Outputs land in PARAM. They do not become a second source of truth.",
    ],
    challenges: [
      "A plausible draft can be wrong. The product has to show the draft as a draft.",
      "Text, vision, and voice each fail differently, so each feature is iterated against real hospital inputs.",
    ],
    outcomes: [
      "These features ship inside PARAM, which 100+ staff use daily.",
    ],
    figures: [
      { label: "Report draft", caption: "Screenshot to be added — dictation beside a structured report." },
    ],
    cover: "petrol",
  },
  {
    slug: "vidfin",
    name: "Vidfin",
    summary:
      "A production consumer mobile application. I led delivery from product scoping through launch and the iterations after it.",
    category: "Mobile",
    period: "2021 — 2025",
    status: "Shipped",
    role: "Led end-to-end delivery at Kalpas Innovations.",
    stack: ["Mobile"],
    problem:
      "A client needed a consumer mobile product taken from a scoped idea to something people could install and use.",
    overview:
      "At Kalpas I owned client discovery and delivery. Vidfin was the production mobile application in that set: scoping, launch, and iteration with the client.",
    features: [
      "Product scoping with the client",
      "Delivery through launch",
      "Iteration after the first release",
    ],
    architecture: [
      "A production consumer mobile application, delivered at Kalpas from scoping through launch.",
    ],
    challenges: [
      "The work was client delivery: requirements, timeline, and a product that had to leave the building.",
    ],
    outcomes: [
      "Vidfin launched as a production mobile application.",
    ],
    figures: [],
    cover: "stone",
  },
  {
    slug: "pricing-desk",
    name: "Insurance pricing desk",
    summary:
      "A small internal app, plus a custom GPT, that compares insurer package prices against what a test actually costs the hospital.",
    category: "Internal tool",
    period: "2026",
    status: "Shipped for the hospital",
    role: "Designed and built the workflow for ASKI’s pricing comparisons.",
    stack: ["Internal app", "Custom GPT"],
    problem:
      "Insurer packages, lab tests, radiology, and bundles had to be compared with what each test costs the hospital. Names do not match. Thirty pages of that, copied into Excel and looked up by hand, was correct often enough to be dangerous, and it was slow.",
    overview:
      "The first version was a small internal app: a master cost list, search, multi-select a package, see the total and the delta. The step that changed the pace was a custom GPT with the cost list and the rules for a delta. Photographs of the insurer’s sheets became a matched list. The decision stayed a hospital decision.",
    features: [
      "Master cost list with search",
      "Package selection with total and delta against hospital cost",
      "A custom GPT that reads photographed rate sheets and applies the same matching rules",
    ],
    architecture: [
      "The app holds the cost list the hospital already trusts. The model is a reader in front of that list, not a second source of truth.",
      "Bolt was used to get a usable interface up. Cursor was used to correct the logic.",
    ],
    challenges: [
      "A mismatch hides inside a plausible number. The tool had to make the delta obvious.",
      "AI removed the friction in front of the judgment. It did not replace the judgment.",
    ],
    outcomes: [
      "The workbook comparison was replaced for this pricing task. No broader performance claim is published.",
    ],
    figures: [
      { label: "Package delta", caption: "Screenshot to be added — package total against hospital cost." },
    ],
    cover: "stone",
  },
  {
    slug: "production",
    name: "Production, without the Windows tools",
    summary:
      "The hospital stack runs on Linux, Docker, and AWS. The interesting problems show up after the tutorial ends.",
    category: "Infrastructure",
    period: "2025 — 2026",
    status: "Ongoing",
    role: "Operator and writer. I do the migration, then I document what actually worked.",
    stack: ["SQL Server", "Docker", "AWS", "S3", "Jenkins", "Traefik"],
    problem:
      "SQL Server in Docker, backups that have to move between servers, a CMS that behaves differently in production, and a 502 that looks like the application and is not.",
    overview:
      "Migrations and incidents written up as they happened, so the next one takes hours instead of days. Native backups, IAM roles, and query plans over guesswork.",
    features: [
      "Moved a production SQL Server database between Linux Docker hosts via native backups and S3",
      "Replaced static AWS keys with an IAM role on the destination EC2 instance",
      "Traced an unusable application with a quiet CPU back to indexes and a query plan",
      "Production notes on Strapi, Jenkins, Traefik, and deploys",
    ],
    architecture: [
      "SQL Server runs in Docker on Linux. Backups are native .bak files, compressed and stored in S3.",
      "The destination host on AWS uses an instance role for read access to the backup bucket.",
    ],
    challenges: [
      "Current SQL Server images do not ship sqlcmd. Restore paths on Linux have to be declared.",
      "A restore brings database users back, not server logins.",
      "Healthy infrastructure graphs can still mean a dead product.",
    ],
    outcomes: [
      "The database move and the incident notes are documented in the writing. No uptime percentage is claimed here.",
    ],
    figures: [
      { label: "Restore", caption: "Diagram to be added — backup, S3, restore." },
    ],
    cover: "petrol",
  },
];

export function getProject(slug: string) {
  return projects.find((project) => project.slug === slug);
}
