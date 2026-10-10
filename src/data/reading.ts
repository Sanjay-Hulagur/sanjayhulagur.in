export type ReadingItem = {
  title: string;
  author: string;
  category: string;
  note: string;
  href?: string;
};

/**
 * Add books and essays here. The page renders an empty state when this list is empty
 * so the site never presents a fabricated reading list.
 */
export const reading: ReadingItem[] = [];
