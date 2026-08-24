import "./OnlineEvents.css";
import heroImg from "../assets/onlineevents/heroimg.jpg"; // <- confirm filename
import Programs from "../components/Programs";
import { Link } from "react-router-dom";

export default function OnlineEvents() {
  return (
    <main className="oe-page">
      {/* HERO */}
      <header
        className="oe-hero"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-label="Online Events header"
      >
        <div className="oe-heroOverlay" />
        <div className="oe-container oe-heroInner">
          <h1 className="oe-title">Online Events</h1>
          <p className="oe-subtitle">Peer-to-Peer Patients Helping Each Other</p>
        </div>
      </header>

      {/* CONTENT */}
      <section className="oe-section">
        <div className="oe-container">
          <div className="oe-card">
            <p className="oe-body">
              Feeling overwhelmed by the healthcare system? You’re not alone. Our free, engaging online events are designed
              to empower you on your health journey. Whether you’re a patient looking to better understand your rights, a
              caregiver seeking guidance, or an advocate striving for health literacy, these events provide the knowledge
              and tools you need to make informed decisions, ask the right questions, and confidently navigate the
              complexities of healthcare. Join us live or at your convenience—it’s all here, accessible, and free.
            </p>

            {/* VIDEOS */}
            <section className="oe-videosSection" aria-label="Online event videos">
              <div className="oe-videosGrid">
                <div className="oe-videoCard">
                  <div className="oe-videoFrame">
                    <iframe
                      src="https://www.youtube.com/embed/TL5HRd5YHXQ"
                      title="Online Event 1"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="oe-videoCard">
                  <div className="oe-videoFrame">
                    <iframe
                      src="https://www.youtube.com/embed/70BxYSP3zXg"
                      title="Online Event 2"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="oe-videoCard">
                  <div className="oe-videoFrame">
                    <iframe
                      src="https://www.youtube.com/embed/3O_1wAfSPC8"
                      title="Online Event 3"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="oe-videoCard">
                  <div className="oe-videoFrame">
                    <iframe
                      src="https://www.youtube.com/embed/-lIVdqJ6hSM"
                      title="Online Event 4"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="oe-videoCard">
                  <div className="oe-videoFrame">
                    <iframe
                      src="https://www.youtube.com/embed/1ByC3jRk2Ig"
                      title="Online Event 5"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>

                <div className="oe-videoCard">
                  <div className="oe-videoFrame">
                    <iframe
                      src="https://www.youtube.com/embed/67m7ch6QJR0"
                      title="Online Event 6"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      allowFullScreen
                    />
                  </div>
                </div>
              </div>
            </section>

            {/* DONATE CTA */}
            <div className="oe-divider" />

            <p className="oe-body oe-donateText">
              Your gift, no matter the size, makes a meaningful difference in our mission to empower individuals to manage
              their health.
            </p>
            <p className="oe-body">Donate today and help us change lives for the better.</p>

            <div className="oe-ctaRow">
              <Link to="/donate" className="oe-button">
                DONATE NOW
              </Link>
            </div>
            <p className="oe-body oe-supportNote">Your generosity supports various aspects of our mission.</p>
          </div>
          <div>
            {/* Reuse existing Programs component (do NOT duplicate program blocks here) */}
            <Programs />
            <div className="oe-ctaRow">
              <Link to="/donate" className="oe-button oe-buttonSecondary">
                DONATE NOW
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
