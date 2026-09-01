import "../index.css";
import "../styles/global.css";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Providers from "./providers";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ||
  "https://hhp-frontend-production-orchrg.laravel.cloud";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: "Human Health Project",
  description:
    "Human Health Project is a peer-to-peer healthcare non-profit helping patients learn from the shared experiences of others.",
  icons: { icon: "/hhp-logo.png" },
  openGraph: {
    type: "website",
    siteName: "Human Health Project",
    title: "Human Health Project",
    description:
      "Peer-to-peer healthcare information, education, and support from Human Health Project.",
    url: "/",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <div className="app">
            <Header />
            <main>{children}</main>
            <Footer />
          </div>
        </Providers>
      </body>
    </html>
  );
}
