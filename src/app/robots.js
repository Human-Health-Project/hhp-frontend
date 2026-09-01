const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ||
  "https://hhp-frontend-production-orchrg.laravel.cloud";

export default function robots() {
  return {
    rules: {
      userAgent: "*",
      allow: "/",
    },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
