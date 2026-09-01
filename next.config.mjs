/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "humanhealthproject.org" },
      { protocol: "https", hostname: "sqa.humanhealthproject.org" },
    ],
  },
};

export default nextConfig;
