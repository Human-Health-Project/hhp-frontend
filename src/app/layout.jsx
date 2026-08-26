import "../index.css";
import "../styles/global.css";

import Header from "../layout/Header";
import Footer from "../layout/Footer";
import Providers from "./providers";

export const metadata = {
  title: "Human Health Project",
  description:
    "Human Health Project is a peer-to-peer healthcare non-profit helping patients learn from the shared experiences of others.",
  icons: { icon: "/hhp-logo.png" },
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
