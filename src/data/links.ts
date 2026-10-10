export type Bookmark = {
  title: string;
  href: string;
  note: string;
};

export type BookmarkGroup = {
  category: string;
  links: Bookmark[];
};

export const bookmarks: BookmarkGroup[] = [
  {
    category: "Hospital",
    links: [
      {
        title: "ASKI Hospitals",
        href: "https://askihospitals.com",
        note: "The super-specialty hospital in Bagalkot where the software work sits.",
      },
    ],
  },
  {
    category: "Writing",
    links: [
      {
        title: "Medium",
        href: "https://medium.com/@sanjayhulagur",
        note: "Longer technical write-ups. The essays on this site point at the full pieces.",
      },
      {
        title: "Why our SQL Server became unusable with only 7 users",
        href: "https://medium.com/@sanjayhulagur/why-our-sql-server-became-unusable-with-only-7-users-d868cdbb509a",
        note: "Indexes, parameter sniffing, and a server that looked healthy.",
      },
      {
        title: "Migrating SQL Server between Linux servers",
        href: "https://medium.com/@sanjayhulagur/migrating-a-microsoft-sql-server-database-between-linux-servers-eb34f13e7646",
        note: "Docker, S3, IAM, and a maintenance window.",
      },
      {
        title: "When 502 Bad Gateway isn’t your fault",
        href: "https://medium.com/@sanjayhulagur/when-502-bad-gateway-isnt-your-fault-a-real-jenkins-traefik-docker-debugging-story-732daa5f005a",
        note: "Jenkins, Traefik, and Docker. The application was not the bug.",
      },
      {
        title: "Installing Strapi in production",
        href: "https://medium.com/@sanjayhulagur/installing-strapi-in-production-the-problems-nobody-mentions-efc506be0f95",
        note: "What the install guides leave out once it has to stay up.",
      },
      {
        title: "Blue-green deployments",
        href: "https://medium.com/@sanjayhulagur/%EF%B8%8F-hey-i-learned-about-blue-green-deployments-today-a395be97df6d",
        note: "Two environments, one of them live, and a proxy that can switch back.",
      },
      {
        title: "Accountability buddies",
        href: "https://medium.com/@sanjayhulagur/accountability-buddies-b485d4c37912",
        note: "An early note on keeping a publishing goal with a stranger.",
      },
    ],
  },
  {
    category: "Profiles",
    links: [
      {
        title: "LinkedIn",
        href: "https://www.linkedin.com/in/sanjay-hulagur",
        note: "The best place to start a project conversation.",
      },
      {
        title: "GitHub",
        href: "https://github.com/Sanjay-Hulagur",
        note: "Code.",
      },
      {
        title: "Freelancer",
        href: "https://www.freelancer.com/u/sanjayhulagur",
        note: "Profile and hire request.",
      },
    ],
  },
];
