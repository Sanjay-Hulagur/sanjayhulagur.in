export type Experiment = {
  title: string;
  summary: string;
  status: string;
  date?: string;
  href?: string;
  hrefLabel?: string;
};

export const experiments: Experiment[] = [
  {
    title: "Radiology dictation into a report draft",
    summary:
      "Speech-to-text from a dictation becomes a structured ultrasound report draft inside PARAM. The draft is not the signed report.",
    status: "In production",
    date: "2026",
    href: "/work/ai-hospital",
    hrefLabel: "AI hospital",
  },
  {
    title: "Vision audits and bill OCR",
    summary:
      "A facility photograph is scored for cleanliness. A photographed bill is parsed. Both sit next to the hospital record.",
    status: "In production",
    date: "2026",
    href: "/work/ai-hospital",
    hrefLabel: "AI hospital",
  },
  {
    title: "WhatsApp as the front of a pipeline",
    summary:
      "A hospital inquiry on WhatsApp becomes a lead in Param, with an owner and a follow-up, instead of remaining a chat.",
    status: "In production",
    date: "2026",
    href: "/work/param",
    hrefLabel: "Param",
  },
  {
    title: "Rate sheets read from photographs",
    summary:
      "A custom GPT matches photographed insurer packages to the hospital cost list. The app remains the source of truth for the delta.",
    status: "Shipped internally",
    date: "January 2026",
    href: "/writing/pricing-spreadsheets",
    hrefLabel: "Read the note",
  },
  {
    title: "A Kannada film from still photographs",
    summary:
      "Hospital photographs moved into shots, a tight narration, and a Kannada voiceover. A few hours, not a shoot day. Not a substitute for a campaign filmed on site.",
    status: "Shipped",
    date: "December 2025",
    href: "/writing/a-hospital-film-from-stills",
    hrefLabel: "Read the note",
  },
  {
    title: "A CMS that only worked on localhost",
    summary:
      "Strapi, PostgreSQL, and Traefik. The admin loaded locally. Schema rights, a missing router, and Vite’s host check were what the public domain needed.",
    status: "Written up",
    date: "June 2026",
    href: "/writing/strapi-in-production",
    hrefLabel: "Read the note",
  },
  {
    title: "Query plans when the graphs are green",
    summary:
      "An application with seven active users became unusable while CPU stayed quiet. The investigation ended at indexes and parameter sniffing.",
    status: "Written up",
    date: "June 2026",
    href: "/writing/sql-server-seven-users",
    hrefLabel: "Read the note",
  },
];
