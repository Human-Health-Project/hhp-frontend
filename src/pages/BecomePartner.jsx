import React from "react";
import Programs from "../components/Programs";
import "./BecomePartner.css";

export default function BecomePartner() {
  const heroTitle = "Join Us! Become an HHP Partner";
  const paragraph =
    "The mission of The Human Health Project is to improve the health of the underserved and vulnerable. We do this by educating and empowering individuals so that they can understand and access the healthcare system effectively. HHP is looking to work with other organizations who share the objective of improving health literacy! We'd love to have you join us as a partner in this effort. If you represent a local community group, association, or any other organization that wants to help educate people with the goal of improving their health, we'd like to hear from you to discuss how working together can accelerate the advancement of our respective missions. Human Health Project empowers patients by using a three-pronged approach Education, Information, and Advocacy. As an HHP partner, you can help us use these tools to improve health outcomes among people in your community, leading to better overall health, at a lower cost. Going forward, we are expanding our high quality educational content and program activities to focus on Non Communicable Conditions, with an initial focus on \"Preventing Type 2 Diabetes with Health Literacy\". In parallel with this we are building a Unified Member/Patient eXperience combining integrations, automation, AI and human support in the delivery of our programs, to help patients prevent and/or manage such conditions including peer-to-peer activities, improving their health and lowering costs.";
  const contactText =
    "If you'd like to learn more about the HHP Partner Program. Email us at";
  const contactEmail = "partners@humanhealthproject.org";
  const donateButtonText = "DONATE NOW";

  return (
    <div style={styles.pageWrapper}>
      <section style={styles.heroSection}>
        <div style={styles.heroOverlay}>
          <h1 style={styles.heroTitle}>{heroTitle}</h1>
        </div>
      </section>

      <section style={styles.contentSection}>
        <div className="bp-contentContainer" style={styles.contentContainer}>
          <div style={styles.textColumn}>
            <p style={styles.paragraph}>{paragraph}</p>

            <p style={styles.contactText}>
              {contactText}
              <br />
              <a href={`mailto:${contactEmail}`} style={styles.emailLink}>
                {contactEmail}
              </a>
            </p>
          </div>

          <div className="bp-rightColumn" style={styles.rightColumn}>
            <img
              src="https://humanhealthproject.org/wp-content/uploads/2024/07/Donation_Image-e1722820999357.jpg"
              alt="Two Women Embracing"
              style={styles.imagePlaceholder}
            />
            <button
              style={styles.donateButton}
              onClick={() =>
                window.open(
                  "https://www.gofundme.com/f/stop-type2diabetes-before-it-starts",
                  "_blank",
                )
              }
            >
              {donateButtonText}
            </button>
          </div>
        </div>
      </section>
      <Programs />
    </div>
  );
}

const styles = {
  pageWrapper: {
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    color: "#000000",
    backgroundColor: "#fff",
    lineHeight: 1.7,
  },
  heroSection: {
    width: "100%",
    maxWidth: "1000px",
    height: "220px",
    margin: "0 auto",
    backgroundImage:
      "url(https://humanhealthproject.org/wp-content/uploads/2024/07/woman-leading-meeting-e1722823028301.png)",
    backgroundSize: "cover",
    backgroundPosition: "center",
    position: "relative",
    borderRadius: "0",
  },
  heroOverlay: {
    width: "100%",
    height: "100%",
    backgroundColor: "rgba(0, 0, 0, 0.15)",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  heroTitle: {
    color: "#fff",
    fontSize: "36px",
    fontWeight: "700",
    margin: 0,
    textAlign: "center",
    textShadow: "1px 1px 3px rgba(0, 0, 0, 0.3)",
    padding: "0 20px",
  },
  contentSection: {
    padding: "50px 20px 80px",
  },
  contentContainer: {
    maxWidth: "1000px",
    margin: "0 auto",
    display: "grid",
    gridTemplateColumns: "1fr 220px",
    gap: "40px",
    alignItems: "start",
  },
  textColumn: {
    paddingRight: "20px",
  },
  paragraph: {
    fontSize: "16px",
    color: "#000000",
    marginBottom: "20px",
    lineHeight: 1.75,
    textAlign: "left",
  },
  contactText: {
    fontSize: "14px",
    color: "#000000",
    fontWeight: "500",
    marginTop: "30px",
    lineHeight: 1.6,
  },
  emailLink: {
    color: "#0077CC",
    textDecoration: "none",
    fontWeight: "400",
  },
  rightColumn: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
  },
  imagePlaceholder: {
    width: "200px",
    height: "auto",
    backgroundColor: "#f0f4f0",
    borderRadius: "4px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    border: "1px solid #e0e0e0",
  },
  imagePlaceholderText: {
    fontSize: "14px",
    color: "#888",
    textAlign: "center",
    padding: "10px",
  },
  donateButton: {
    backgroundColor: "#0077CC",
    color: "#fff",
    border: "none",
    padding: "14px 40px",
    fontSize: "14px",
    fontWeight: "600",
    letterSpacing: "0.5px",
    borderRadius: "4px",
    cursor: "pointer",
    transition: "background-color 0.2s ease",
    width: "100%",
    maxWidth: "200px",
  },
};
