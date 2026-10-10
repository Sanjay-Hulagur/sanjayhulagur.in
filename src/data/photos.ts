export type Photo = {
  src: string;
  alt: string;
  caption: string;
  location?: string;
  date?: string;
  width: number;
  height: number;
};

export const photos: Photo[] = [
  {
    src: "/visuals/plate-light.svg",
    alt: "Sample abstract plate in porcelain, petrol, and brass. Not a photograph of a person or place.",
    caption: "Sample plate 01. Replace this file with a photograph.",
    location: "Placeholder",
    width: 1200,
    height: 1500,
  },
  {
    src: "/visuals/plate-dark.svg",
    alt: "Sample abstract plate in deep petrol with a brass rule.",
    caption: "Sample plate 02. Replace this file with a photograph.",
    location: "Placeholder",
    width: 1200,
    height: 900,
  },
  {
    src: "/visuals/plate-sage.svg",
    alt: "Sample abstract plate in sage and warm stone.",
    caption: "Sample plate 03. Replace this file with a photograph.",
    location: "Placeholder",
    width: 1200,
    height: 1200,
  },
  {
    src: "/visuals/plate-column.svg",
    alt: "Sample abstract plate of vertical architectural bands.",
    caption: "Sample plate 04. Replace this file with a photograph.",
    location: "Placeholder",
    width: 1200,
    height: 1600,
  },
  {
    src: "/visuals/plate-horizon.svg",
    alt: "Sample abstract plate with a low horizon line.",
    caption: "Sample plate 05. Replace this file with a photograph.",
    location: "Placeholder",
    width: 1400,
    height: 900,
  },
  {
    src: "/visuals/plate-court.svg",
    alt: "Sample abstract plate suggesting a courtyard plan.",
    caption: "Sample plate 06. Replace this file with a photograph.",
    location: "Placeholder",
    width: 1200,
    height: 1400,
  },
];
