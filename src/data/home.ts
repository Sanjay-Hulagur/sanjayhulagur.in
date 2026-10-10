export type TileTone = "editorial" | "featured" | "visual" | "sage" | "stone";

export type HomeTile = {
  index: string;
  title: string;
  description: string;
  href: string;
  tone: TileTone;
  image?: string;
  imageAlt?: string;
};

export const homeTiles: HomeTile[] = [
  {
    index: "01",
    title: "About",
    description: "AI product manager, seven years in.",
    href: "/about",
    tone: "editorial",
  },
  {
    index: "02",
    title: "Work",
    description: "Hospital products and the systems under them.",
    href: "/work",
    tone: "featured",
  },
  {
    index: "03",
    title: "Param",
    description: "35+ modules, 100+ daily users.",
    href: "/work/param",
    tone: "featured",
  },
  {
    index: "04",
    title: "AI Lab",
    description: "Experiments beside the production work.",
    href: "/lab",
    tone: "featured",
  },
  {
    index: "05",
    title: "Writing",
    description: "Notes from hospital software.",
    href: "/writing",
    tone: "editorial",
  },
  {
    index: "06",
    title: "Photography",
    description: "A gallery, with sample plates for now.",
    href: "/photos",
    tone: "visual",
    image: "/visuals/plate-light.svg",
    imageAlt: "",
  },
  {
    index: "07",
    title: "Tools",
    description: "Utilities, only when they actually work.",
    href: "/tools",
    tone: "stone",
  },
  {
    index: "08",
    title: "Resume",
    description: "Experience, practice, and how to reach me.",
    href: "/resume",
    tone: "editorial",
  },
  {
    index: "09",
    title: "Speaking",
    description: "Talks and rooms, when there are any.",
    href: "/speaking",
    tone: "stone",
  },
  {
    index: "10",
    title: "Now",
    description: "What is in progress.",
    href: "/now",
    tone: "sage",
  },
  {
    index: "11",
    title: "Reading",
    description: "Books and papers on the desk.",
    href: "/reading",
    tone: "editorial",
  },
  {
    index: "12",
    title: "Bookmarks",
    description: "References I return to.",
    href: "/links",
    tone: "editorial",
  },
  {
    index: "13",
    title: "Contact",
    description: "Start with the problem.",
    href: "/contact",
    tone: "editorial",
  },
  {
    index: "14",
    title: "Journal",
    description: "Short notes from the work.",
    href: "/journal",
    tone: "editorial",
  },
  {
    index: "15",
    title: "Playground",
    description: "Films, prototypes, and side work.",
    href: "/playground",
    tone: "visual",
    image: "/visuals/plate-dark.svg",
    imageAlt: "",
  },
];
