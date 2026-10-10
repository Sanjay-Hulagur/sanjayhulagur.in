export const site = {
  name: "Sanjay Hulagur",
  url: "https://sanjayhulagur.in",
  locale: "en_IN",
  location: "Dharwad, Karnataka",
  role: "Head of Software Development",
  title: "AI Product Manager | Product Engineer",
  organization: "ASKI Super Specialty Hospital and Research Centre",
  organizationShort: "ASKI Hospitals",
  organizationUrl: "https://askihospitals.com",
  headline: "AI Product Manager | Product Engineer",
  description:
    "Sanjay Hulagur is an AI Product Manager and Product Engineer at ASKI Hospitals. He leads PARAM, a healthcare platform with 35+ modules used daily by 100+ staff.",
  email: "sanjayhulagur@gmail.com",
  socials: [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/sanjay-hulagur",
    },
    {
      label: "GitHub",
      href: "https://github.com/Sanjay-Hulagur",
    },
    {
      label: "Medium",
      href: "https://medium.com/@sanjayhulagur",
    },
    {
      label: "Freelancer",
      href: "https://www.freelancer.com/u/sanjayhulagur",
    },
  ],
} as const;

export type SocialLink = (typeof site.socials)[number];
