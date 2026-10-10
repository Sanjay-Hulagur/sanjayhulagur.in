import type { Article } from "@/content/writing/types";

export const articles: Article[] = [
  {
    slug: "hospitals-dont-have-a-lead-problem",
    title: "Most hospitals don’t have a lead problem",
    excerpt:
      "The inquiries are already arriving on WhatsApp. They disappear because nobody is treating a message as a lead.",
    date: "2026-04-13",
    category: "Param",
    minutes: 5,
    body: [
      {
        type: "p",
        text: "A hospital marketing team will tell you they need more leads. More camps. More ads. More doctors who might send a patient. Look at the phone on the front desk and the story changes.",
      },
      {
        type: "p",
        text: "The leads are already there. A patient says hello on WhatsApp. Someone replies. The chat scrolls away. There is no owner, no follow-up, and no record that the person ever asked. That is not a demand problem. It is a tracking problem.",
      },
      {
        type: "h2",
        id: "three-bad-systems",
        text: "Referrals live in three bad systems",
      },
      {
        type: "p",
        text: "Doctor referrals, which are how a lot of hospitals actually grow, get managed the same way. A WhatsApp group. A spreadsheet someone updates when they remember. Whatever the outreach person can recall from the morning round.",
      },
      {
        type: "p",
        text: "The failure mode is quiet. A referred patient never shows up and nobody notices. A doctor who sent ten patients this quarter gets the same silence as a doctor who sent none. The outreach team’s day is invisible, so you cannot coach it.",
      },
      {
        type: "h2",
        id: "one-rule",
        text: "One rule that changed the product",
      },
      {
        type: "p",
        text: "If someone texts the hospital, they become a lead. No retyping.",
      },
      {
        type: "p",
        text: "That is the rule we put into Param. WhatsApp stops being a chat window and becomes the front of a pipeline: message, lead, follow-up, conversion. The rest of the product is the same idea applied to the field. Track the referral. See the PRO’s visits. Tell the referring doctor what happened to their patient.",
      },
      {
        type: "p",
        text: "I am building this as Head of Software at ASKI Hospitals in Bagalkot, for the growth problem we have in the building, not as a concept deck. The interesting part is how ordinary the fix is. Hospitals do not need a new channel. They need the channel they already use to leave a trace.",
      },
    ],
  },
  {
    slug: "sql-server-seven-users",
    title: "The server looked fine. Seven people could not work.",
    excerpt:
      "Pages hung. CPU was idle. The outage was a query plan, not a capacity problem.",
    date: "2026-06-23",
    category: "Production",
    minutes: 6,
    medium:
      "https://medium.com/@sanjayhulagur/why-our-sql-server-became-unusable-with-only-7-users-d868cdbb509a",
    body: [
      {
        type: "p",
        text: "One afternoon the hospital application stopped being usable. Pages hung. Requests timed out. The people on the sales desk assumed the server was overloaded. There were seven active users.",
      },
      {
        type: "p",
        text: "The machine agreed with nobody. Memory was fine. CPU was quiet. The database had been up for months. No deadlock chain worth the name. The connection pool was not exhausted. Background jobs were not sitting on locks. Every dashboard that measures whether the box is on fire said no.",
      },
      {
        type: "h2",
        id: "healthy-graphs",
        text: "Healthy graphs, dead product",
      },
      {
        type: "p",
        text: "That combination usually means the problem is a query. Query Store made it obvious: the expensive work was in the sales module, including statements that should have been cheap writes and were instead reading far too much. A couple of access patterns had no index that matched how the code actually filtered and sorted. Adding those indexes helped. One screen still fell over.",
      },
      {
        type: "p",
        text: "The same query, with a real user’s parameters, took the better part of a minute and returned a page of rows. Run it in a way that forced a fresh plan and it finished in under a second. Classic parameter sniffing. One cached plan, compiled for a small result, reused for someone with thousands of leads. Cardinality was different enough that a single plan could not serve both.",
      },
      {
        type: "h2",
        id: "what-changed",
        text: "What we changed",
      },
      {
        type: "p",
        text: "Indexes for the hot paths, and a recompile hint on the queries whose parameters swing wildly. The slow lead view went from roughly forty seconds to a few hundred milliseconds. More useful than the speed: it stopped depending on which user happened to compile the plan first.",
      },
      {
        type: "code",
        language: "sql",
        code: "-- The shape of the fix, not the production statement.\nSELECT ...\nFROM Leads\nWHERE OwnerId = @OwnerId\nOPTION (RECOMPILE);",
      },
      {
        type: "p",
        text: "A database can be unusable while every infrastructure metric looks normal.",
      },
      {
        type: "p",
        text: "I wrote the investigation up in full on [Medium](https://medium.com/@sanjayhulagur/why-our-sql-server-became-unusable-with-only-7-users-d868cdbb509a), including how we ruled out blocking, pooling, and hardware before touching plans. The lesson I keep is smaller. When a hospital team says the system is down, “the server looks healthy” is the start of the search.",
      },
    ],
  },
  {
    slug: "moving-sql-server-on-linux",
    title: "Moving SQL Server between Linux servers",
    excerpt:
      "A production database, two Docker hosts, no Windows tools. Native backups and S3 did the job.",
    date: "2026-01-29",
    category: "Production",
    minutes: 5,
    medium:
      "https://medium.com/@sanjayhulagur/migrating-a-microsoft-sql-server-database-between-linux-servers-eb34f13e7646",
    body: [
      {
        type: "p",
        text: "We had to move a production SQL Server database from one Linux machine to another. Both sides ran SQL Server in Docker. The destination was on AWS. I did not want a Windows workstation in the middle of that, and I did not want to copy container volumes and hope.",
      },
      {
        type: "p",
        text: "The source already had a boring backup. A cron job took a native .bak, compressed it, and put it in S3. That was the whole strategy: keep using the backup we already trusted, then restore it into a fresh container. Backup, store, restore. Different servers and different Docker setups do not matter if SQL Server is reading its own format.",
      },
      {
        type: "h2",
        id: "easy-to-skip",
        text: "The parts that are easy to skip",
      },
      {
        type: "ul",
        items: [
          "Stop the app for the final backup. A consistent backup can still be behind a database people are writing to.",
          "On the AWS side, an IAM role on the EC2 instance, read-only to the backup bucket. No access keys sitting on the box.",
          "Current SQL Server images do not ship sqlcmd. It has to be installed in the container before you can back up, inspect, or restore.",
          "Inspect the backup and restore with explicit file moves. Linux will not guess the data and log paths for you.",
          "A restore brings database users back, not server logins. The app will fail to connect until those are remapped.",
        ],
      },
      {
        type: "p",
        text: "The [Medium piece](https://medium.com/@sanjayhulagur/migrating-a-microsoft-sql-server-database-between-linux-servers-eb34f13e7646) is the procedure, written the way I would hand it to myself next time. This page is the reason it belongs on a portfolio: hospital software is only as real as the database move you can do on a Tuesday.",
      },
    ],
  },
  {
    slug: "pricing-spreadsheets",
    title: "Thirty pages of insurance prices",
    excerpt:
      "Matching insurer packages to what a test costs the hospital. Excel worked. It did not scale. A small app and a custom GPT did.",
    date: "2026-01-29",
    category: "Hospital ops",
    minutes: 5,
    medium:
      "https://medium.com/@sanjayhulagur/how-ai-saved-me-from-drowning-in-hospital-pricing-spreadsheets-6f44b74f8bd8",
    body: [
      {
        type: "p",
        text: "The task sounded like a spreadsheet. Here are the insurer’s packages, lab tests, radiology, bundles. Here is what each test costs us. Tell me where we make money and where we give it away.",
      },
      {
        type: "p",
        text: "Names do not match. A CBC on their sheet is not spelled the way it is spelled on ours. Thirty pages of that, copied into Excel, looked up by hand, totaled, then checked again because a mismatch hides inside a plausible number. It was correct often enough to be dangerous, and it was slow.",
      },
      {
        type: "h2",
        id: "a-tool-then-a-reader",
        text: "A tool, then a reader",
      },
      {
        type: "p",
        text: "First I built a small internal app. Master cost list, search, multi-select a package, see the total and the delta. Bolt got a usable UI up fast. Cursor was how I fixed the logic and the rough edges. That alone beat the workbook.",
      },
      {
        type: "p",
        text: "The step that changed the pace was a custom GPT with the cost list and the rules for a delta. I photographed the insurer’s sheets and uploaded the pictures. It picked out the tests, matched them, and said where the package was ahead or behind. Days of cross-checking compressed into about an hour.",
      },
      {
        type: "p",
        text: "AI did not replace the judgment. It removed the friction in front of the judgment.",
      },
      {
        type: "p",
        text: "The decision is still a hospital decision: which packages to sign, where the leak is, what to negotiate. The software’s job was to stop a pricing meeting from depending on someone’s patience with VLOOKUP. The longer version is on [Medium](https://medium.com/@sanjayhulagur/how-ai-saved-me-from-drowning-in-hospital-pricing-spreadsheets-6f44b74f8bd8).",
      },
    ],
  },
  {
    slug: "a-hospital-film-from-stills",
    title: "A hospital film from a folder of photos",
    excerpt:
      "A short hospital video, in Kannada, from still photographs. No media team. A few hours and a clear script.",
    date: "2025-12-01",
    category: "Freelance craft",
    minutes: 4,
    medium:
      "https://medium.com/@sanjayhulagur/how-i-turned-simple-hospital-photos-into-a-full-video-using-ai-in-just-a-few-hours-7ffdfc3b1ff3",
    body: [
      {
        type: "p",
        text: "Someone asked for a short film of the hospital. The usual version of that request is a crew, a shoot day, and a week of edits. What we had was photographs.",
      },
      {
        type: "p",
        text: "I treated it as a production with three jobs. Move the stills enough that they feel like shots. Write a narration that names the facilities without sounding like an announcement. Speak it in Kannada, because that is the language the film was for.",
      },
      {
        type: "h2",
        id: "the-three-jobs",
        text: "What actually shipped",
      },
      {
        type: "ul",
        items: [
          "Adobe Firefly to turn photographs into moving shots",
          "A tight script drafted with ChatGPT, then edited so it sounded like the hospital and not like a model",
          "Google AI Studio for the Kannada voiceover",
        ],
      },
      {
        type: "p",
        text: "It was done in a few hours. I would not sell it as a substitute for a campaign shot on site. I would sell it as what you do when a hospital needs a clear film this week and the alternative is a slideshow with music.",
      },
      {
        type: "p",
        text: "This sits next to the engineering work on purpose. At Kalpas I ran marketing and operations beside product. Freelance clients still ask for the site, the product, and the film as if they were separate vendors. They are often the same brief. The full piece is on [Medium](https://medium.com/@sanjayhulagur/how-i-turned-simple-hospital-photos-into-a-full-video-using-ai-in-just-a-few-hours-7ffdfc3b1ff3).",
      },
    ],
  },
  {
    slug: "strapi-in-production",
    title: "Installing Strapi in production",
    excerpt:
      "The local admin loaded. The public domain did not. The gap was Docker images, Postgres schema rights, Traefik, and Vite.",
    date: "2026-06-04",
    category: "Production",
    minutes: 5,
    medium:
      "https://medium.com/@sanjayhulagur/installing-strapi-in-production-the-problems-nobody-mentions-efc506be0f95",
    body: [
      {
        type: "p",
        text: "The install command makes a CMS look finished. A production Strapi, behind a reverse proxy, with PostgreSQL, is a different job.",
      },
      {
        type: "h2",
        id: "what-broke",
        text: "What actually broke",
      },
      {
        type: "ul",
        items: [
          "The old official Docker image is gone. Guides that still pin strapi/strapi:latest fail on pull.",
          "The database user can connect and still be refused when creating tables. Schema rights are not database rights.",
          "Localhost can be healthy while the public host is dark. A missing Traefik router looks like an application bug.",
          "Vite blocks unexpected hosts. The admin only complained after the domain was real.",
          "Content types live as files under src/api. A 400 from the builder meant nothing had been saved.",
          "npm run develop and npm run start do not treat schema changes the same way.",
        ],
      },
      {
        type: "p",
        text: "Each layer can be fine while the system is not. The useful move was to stop treating the admin screen as the source of truth and write the schemas as files.",
      },
      {
        type: "p",
        text: "The longer list, including the permission and proxy symptoms, is on [Medium](https://medium.com/@sanjayhulagur/installing-strapi-in-production-the-problems-nobody-mentions-efc506be0f95).",
      },
    ],
  },
  {
    slug: "jenkins-traefik-502",
    title: "When 502 Bad Gateway is not the app",
    excerpt:
      "Jenkins behind Traefik returned 502 for four days. Five separate faults were stacked, and the last one was 127.0.0.1 inside Docker.",
    date: "2026-01-07",
    category: "Production",
    minutes: 5,
    medium:
      "https://medium.com/@sanjayhulagur/when-502-bad-gateway-isnt-your-fault-a-real-jenkins-traefik-docker-debugging-story-732daa5f005a",
    body: [
      {
        type: "p",
        text: "Jenkins was installed natively on Ubuntu and bound to 127.0.0.1:8080. Traefik v3 ran in Docker, with Let’s Encrypt, and the domain sat behind Cloudflare. The page we wanted was the Jenkins login. What we got was 502.",
      },
      {
        type: "h2",
        id: "five-faults",
        text: "Five faults, one symptom",
      },
      {
        type: "ul",
        items: [
          "Docker 29 raised the minimum API version. Traefik was still speaking an older API, so it could not read container state.",
          "Cloudflare’s 502 hid whether the failure was DNS, TLS, or the proxy.",
          "Jenkins on localhost was correct, and it also removed any easy check from the public IP.",
          "Traefik’s backend URL was http://127.0.0.1:8080. Inside the container, that address is the container, not the host.",
          "Host networking for Traefik made 127.0.0.1 mean the machine again. A 403 from Jenkins, with the Jetty and X-Jenkins headers, meant the proxy had finally arrived.",
        ],
      },
      {
        type: "p",
        text: "The write-up on [Medium](https://medium.com/@sanjayhulagur/when-502-bad-gateway-isnt-your-fault-a-real-jenkins-traefik-docker-debugging-story-732daa5f005a) is the sequence, so the next four days do not repeat.",
      },
    ],
  },
  {
    slug: "blue-green-deployments",
    title: "Blue-green, in one sitting",
    excerpt:
      "Two environments, one live. Switch the proxy when the new one is ready, and switch it back if it is not.",
    date: "2025-11-01",
    category: "Production",
    minutes: 3,
    medium:
      "https://medium.com/@sanjayhulagur/%EF%B8%8F-hey-i-learned-about-blue-green-deployments-today-a395be97df6d",
    body: [
      {
        type: "p",
        text: "Blue is the version people are using. Green is the version you want to release. Only one of them takes traffic.",
      },
      {
        type: "p",
        text: "Deploy to green, test it, then point Traefik or Nginx at green instead of blue. If the new version misbehaves, point the proxy back. Users do not sit through a maintenance page, and rollback is a routing change.",
      },
      {
        type: "p",
        text: "The cost is running both for a while. Database migrations that are not backwards-compatible still need a plan of their own. The note I wrote the day I learned it is on [Medium](https://medium.com/@sanjayhulagur/%EF%B8%8F-hey-i-learned-about-blue-green-deployments-today-a395be97df6d).",
      },
    ],
  },
  {
    slug: "accountability-buddies",
    title: "Accountability buddies",
    excerpt:
      "A stranger on a startups Discord held a goal that friends would have let slide. This site’s early writing was one of those goals.",
    date: "2024-01-01",
    category: "Notes",
    minutes: 2,
    medium: "https://medium.com/@sanjayhulagur/accountability-buddies-b485d4c37912",
    body: [
      {
        type: "p",
        text: "On a startups Discord there is a channel for accountability buddies: someone you do not already owe an excuse, checking whether the week’s goals happened.",
      },
      {
        type: "p",
        text: "I posted, got two replies in a day, and kept a weekly call with someone in the same timezone who was also building. One of the goals was to publish. The post itself was late until that call made it due.",
      },
      {
        type: "p",
        text: "The original note is on [Medium](https://medium.com/@sanjayhulagur/accountability-buddies-b485d4c37912).",
      },
    ],
  },
];

export function getArticle(slug: string) {
  return articles.find((article) => article.slug === slug);
}

export function articlesByDate() {
  return [...articles].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}
