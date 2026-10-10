export type Talk = {
  title: string;
  event: string;
  date: string;
  location: string;
  href?: string;
  summary: string;
};

/** Add a talk only when the event is real. */
export const talks: Talk[] = [];
