const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ||
  "https://hhp-frontend-production-orchrg.laravel.cloud";

export const dynamic = "force-static";

const routes = [
  "/",
  "/medical-disclaimer",
  "/who-we-are/about-us",
  "/who-we-are/meet-the-team",
  "/why-hhp/who-we-serve",
  "/what-we-do/healthcare-access/introduction",
  "/what-we-do/patient-advocacy/northern-ireland",
  "/what-we-do/patient-advocacy/los-angeles",
  "/what-we-do/learning-academy/videos",
  "/what-we-do/learning-academy/english",
  "/what-we-do/learning-academy/spanish",
  "/what-we-do/learning-academy/mandarin",
  "/what-we-do/online-events",
  "/what-we-do/stop-type-2-diabetes/introduction",
  "/what-we-do/shared-patient-information",
  "/what-we-do/community-voices",
  "/shared-patient-information/migraine",
  "/shared-patient-information/lupus",
  "/shared-patient-information/narratives",
  "/how-to-help",
  "/how-to-help/intern",
  "/how-to-help/become-hhp-partner",
  "/how-to-help/matching-donations",
  "/how-to-help/volunteer-with-us",
  "/donate",
  "/about/program-council",
  "/meet-team-advisory-board",
  "/privacy",
  "/terms",
  "/contact",
  "/join-patient-advisory-board",
  "/latest-news",
];

export default function sitemap() {
  const lastModified = new Date();

  return routes.map((route) => ({
    url: `${siteUrl}${route}`,
    lastModified,
    changeFrequency: route === "/" || route === "/latest-news" ? "weekly" : "monthly",
    priority: route === "/" ? 1 : 0.7,
  }));
}
