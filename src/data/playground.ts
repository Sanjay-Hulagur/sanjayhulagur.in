export type PlayItem = {
  title: string;
  summary: string;
  kind: string;
  href: string;
  hrefLabel: string;
};

export const playground: PlayItem[] = [
  {
    title: "Hospital film from stills",
    summary:
      "Photographs, a Kannada narration, and a short turnaround. Documented because the craft sits next to the engineering work.",
    kind: "Film",
    href: "/writing/a-hospital-film-from-stills",
    hrefLabel: "Open the note",
  },
  {
    title: "Pricing desk",
    summary:
      "An internal comparison tool and a custom GPT in front of a cost list. The experiment was the reader. The decision stayed human.",
    kind: "Prototype",
    href: "/work/pricing-desk",
    hrefLabel: "Open the project",
  },
  {
    title: "Linux SQL Server move",
    summary:
      "A production restore rehearsed as a procedure: native backup, S3, IAM role, explicit file moves.",
    kind: "Procedure",
    href: "/writing/moving-sql-server-on-linux",
    hrefLabel: "Open the note",
  },
];
