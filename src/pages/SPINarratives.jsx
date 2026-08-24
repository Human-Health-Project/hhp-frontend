import "./SPINarratives.css";

export default function SPINarratives() {
  return (
    <div className="spi-page">
      <section className="spi-hero">
        <div className="spi-container">
          <p className="spi-eyebrow">SPI Narratives</p>
          <h1 className="spi-title">
            Revolutionizing Preventive Health Through the Power of Story:
            Announcing Community Voices for Prevention (CVP)
          </h1>
        </div>
      </section>

      <section className="spi-content-section">
        <div className="spi-container">
          <div className="spi-card">
            <p>
              At the Human Health Project, we believe that the most powerful
              health advocate is a peer who has walked the path before you. We
              are thrilled to announce our newest initiative,{" "}
              <strong>Community Voices for Prevention (CVP)</strong>.
            </p>

            <p>
              Traditional health messaging can often feel clinical or distant.
              CVP changes that by centering the{" "}
              <strong>Shared Patient Experience</strong>. Our goal is to recruit
              community members to share their real-world stories—focusing on
              early screenings, lifestyle changes, and symptom recognition—to
              provide a culturally relevant, relatable roadmap for others.
            </p>

            <h2>Partnering for Impact</h2>

            <p>
              This project is made possible through the generous support and
              funding of the People’s Impact Foundation. We are honored to
              partner with an organization that shares our commitment to
              community-driven wellness and creating measurable change for
              underserved populations.
            </p>

            <p>
              Together, we are working to reach over 1,000 community members and
              host peer-panel events that turn individual experiences into
              collective health literacy.
            </p>

            <p className="spi-link-row">
              To learn more about the foundation’s work, visit:{" "}
              <a
                href="https://peoplesimpact.org"
                target="_blank"
                rel="noopener noreferrer"
                className="spi-external-link"
              >
                peoplesimpact.org
              </a>
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}