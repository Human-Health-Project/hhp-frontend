import "./LatestNews.css";
import { Link } from "react-router-dom";
import pinLogo from "../assets/latest-news/pin_logo.png";

export default function LatestNews() {
  return (
    <main className="news-page">
      <section className="news-section">
        <div className="news-container">

          <h1 className="news-pageTitle">LATEST NEWS</h1>

          <div className="news-featureBlock">

            <img
              src={pinLogo}
              alt="People's Impact Network"
              className="news-partnerLogo"
            />

            <h2 className="news-featureTitle">
              Community Voices for Prevention
            </h2>

            <p className="news-featureText">
              February 23, 2026
            </p>

            <Link
              to="/shared-patient-information/narratives"
              className="news-featureButton"
            >
              READ MORE
            </Link>

          </div>

        </div>
      </section>
    </main>
  );
}