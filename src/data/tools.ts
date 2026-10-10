export type ToolEntry = {
  name: string;
  description: string;
  category: string;
  href: string;
  status: "Live" | "Reference" | "Draft";
};

/**
 * Only list a tool that has a real destination.
 * Do not add cards for applications that are not built.
 */
export const tools: ToolEntry[] = [];
