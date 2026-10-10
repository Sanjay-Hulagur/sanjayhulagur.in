export type JournalEntry = {
  date: string;
  title: string;
  text: string;
};

export const journal: JournalEntry[] = [
  {
    date: "2026-04-13",
    title: "A message is a lead",
    text: "If someone texts the hospital, they become a lead. No retyping. That rule is ordinary, which is why it holds. The chat was already the channel. It just never left a trace.",
  },
  {
    date: "2026-01-29",
    title: "Healthy graphs",
    text: "A database can be unusable while every infrastructure metric looks normal. When a ward says the system is down, “the server looks healthy” is the start of the search.",
  },
  {
    date: "2026-06-04",
    title: "Localhost is not the site",
    text: "Strapi can say it started, and the admin can load on localhost, while the public domain is still dark. Health of the process is not reachability.",
  },
  {
    date: "2026-01-07",
    title: "127.0.0.1 inside Docker",
    text: "A 502 from Jenkins behind Traefik was Traefik calling itself. Inside the container, 127.0.0.1 is not the host.",
  },
  {
    date: "2025-12-01",
    title: "The film and the product",
    text: "Freelance clients still ask for the site, the product, and the film as if they were separate vendors. They are often the same brief.",
  },
];
