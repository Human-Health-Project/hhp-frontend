/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: {
    unoptimized: true,
    remotePatterns: [
      { protocol: "https", hostname: "humanhealthproject.org" },
      { protocol: "https", hostname: "sqa.humanhealthproject.org" },
    ],
  },
};

export default nextConfig;
