import { useEffect } from 'react';
import { useNavigate } from "react-router-dom";
import "./HowToHelp.css";
import { Link } from "react-router-dom";
export default function HowToHelp() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash) {
      const element = document.querySelector(hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  }, []);

  const pageTitle = "HOW TO HELP";
  const introText = "We are extremely grateful to all our amazing team members, volunteers, advisers, board members and funders who allow us to continue Human Health Project's (HHP) mission while remaining independent, integrative and unbiased.";

  const aboutParagraph1 = "HHP's foundation is built upon peer-to-peer health information, education, and support. Through our programs, our objective is to empower individuals locally and globally to manage their health. We are made up of a small core staff with 80+ volunteers, 30+ board members and advisers, spread around the world.";
  const aboutParagraph2 = "At Human Health Project, there are many ways to support our mission—whether you are an individual, professional, organization, or funder. We are a global, volunteer-powered nonprofit dedicated to improving health literacy, patient advocacy, and access to trustworthy, people-centered health information. At the heart of our work is a diverse community of patients, caregivers, clinicians, researchers, and advocates who believe lived experience and shared knowledge can transform how people navigate their health.";
  const aboutParagraph3 = "By joining our community, volunteering your skills, contributing expertise, funding our work, or partnering with us, you help advance a more human, connected, and equitable healthcare experience. Together, we are building a Unified Patient Experience (UPE) that brings health education, peer support, advocacy, and real-world evidence into one integrated ecosystem—empowering people everywhere to make informed decisions and feel less alone on their health journeys.";

  const donateButtonText = "MAKE A FINANCIAL GIFT";
  const navigate = useNavigate();
  const volunteerTitle = "Volunteer";
  const volunteerPlatforms = [
    {
      name: "CommunityNI",
      location: "(Northern Ireland Based)",
      image: "https://humanhealthproject.org/wp-content/uploads/2025/10/CommunityNI-logo-e1761060872175.jpg",
      link: "https://www.communityni.org/organisation/human-health-project",
    },
    {
      name: "Idealist / VolunteerMatch",
      location: "(US Based)",
      image: "https://humanhealthproject.org/wp-content/uploads/2023/09/idealist_logo.webp",
      link: "https://www.idealist.org/en/nonprofit/c1c1d9c63442410383c781f1c92afc7c-human-health-project-los-angeles#opportunities",
    },
    {
      name: "Be Collective",
      location: "(Northern Ireland based)",
      image: "https://humanhealthproject.org/wp-content/uploads/2023/09/becollective_logo.webp",
      link: "https://uk.becollective.com/groups/5df81f74a9cfcf00230aa88a/opportunities",
    },
    {
    name: "Human Health Project",
    location: "(Apply Directly with HHP)",
    image: "https://humanhealthproject.org/wp-content/uploads/2018/11/hhp-blueTM-2.png",
    to: "/how-to-help/volunteer-with-us", // internal route
    buttonText: "View Application",
    },
  ];

  const supportersTitle = "Our Supporters";
  const supporters = [
    { name: "Cole-Crone Family Foundation", logo: "" },
    { name: "ChildLife", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_childlife_logo-400x124.webp" },
    { name: "Gerald Herman", logo: "" },
    { name: "Google", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_2000px-Google_logo-400x135.webp" },
    { name: "Microsoft", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_Microsoft_logo-400x85.webp" },
    { name: "Salesforce", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_salesforce_logo.webp" },
    { name: "Notion", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_notion_logo-400x400.webp" },
    { name: "Amazon", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_Amazon_logo-400x121.webp" },
    { name: "WordPress", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_WordPress_logo-400x91.webp" },
    { name: "SAS", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_SAS_logo-400x164.webp" },
    { name: "VolunteerMatch", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_SAS_logo-400x164.webp" },
    { name: "Zoom", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_zoom_logo-400x90.webp" },
    { name: "Atlassian", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_Atlasian_logo-400x127.webp" },
    { name: "DocHub", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/supporter_DocHub_logo-400x95.webp" },
    { name: "Sendy", logo: "https://humanhealthproject.org/wp-content/uploads/2023/08/supporter_sendy-logo.webp" },
    { name: "UptimeRobot", logo: "https://humanhealthproject.org/wp-content/uploads/2023/09/uptimerobot-logo-300x92-1.webp" },
    { name: "CoPort", logo: "https://humanhealthproject.org/wp-content/uploads/2024/08/CoPort_Logo-1-400x400.png" },
  ];
  

  return (
    <div style={styles.pageWrapper}>
      <section style={styles.headerSection}>
        <div style={styles.container}>
          <h1 style={styles.pageTitle}>{pageTitle}</h1>
          <p style={styles.introText}>{introText}</p>
        </div>
      </section>

      <section style={styles.aboutSection}>
        <div style={styles.containerWide}>
          <div className="howtohelp-aboutGrid" style={styles.aboutGrid}>
            <div style={styles.aboutContent}>
              <p style={styles.aboutParagraph}>{aboutParagraph1}</p>
              <p style={styles.aboutParagraph}>{aboutParagraph2}</p>
              <p style={styles.aboutParagraph}>{aboutParagraph3}</p>
            </div>
            <div style={styles.aboutImageContainer}>
              <img
                src="https://humanhealthproject.org/wp-content/uploads/2023/09/how-to-help-large-image-1200x796.webp"
                alt="Mother and Child"
                style={styles.aboutImage}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Donate CTA Section */}
      <section style={styles.ctaSection}>
        <div style={styles.container}>
          <button
            style={styles.donateButton}
            onClick={() => navigate("/donate")}
          >
            {donateButtonText}
          </button>
        </div>
      </section>

      {/* Volunteer Section */}
      <section style={styles.volunteerSection} id="volunteer-section">
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>{volunteerTitle}</h2>
          <div className="howtohelp-volunteerGrid" style={styles.volunteerGrid}>
          {volunteerPlatforms.map((platform, index) => (
            platform.to ? (
              <Link
                key={index}
                to={platform.to}
                style={styles.volunteerCard}
                className="howtohelp-volunteerCard"
              >
                <img
                  src={platform.image}
                  alt={platform.name}
                  style={styles.volunteerLogo}
                />
                <p style={styles.volunteerName}>{platform.name}</p>
                {platform.location && (
                  <p style={styles.volunteerLocation}>{platform.location}</p>
                )}
                <p className="volunteerActionPrimary" style={styles.volunteerActionPrimary}>
                  View Volunteer Application
                </p>
              </Link>
            ) : (
              <a
                key={index}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                style={styles.volunteerCard}
                className="howtohelp-volunteerCard"
              >
                <img
                  src={platform.image}
                  alt={platform.name}
                  style={styles.volunteerLogo}
                />
                <p style={styles.volunteerName}>{platform.name}</p>
                <p style={styles.volunteerLocation}>{platform.location}</p>
                <p className="volunteerAction" style={styles.volunteerAction}>
                  View Listing
                </p>
              </a>
            )
          ))}
          </div>
        </div>
      </section>
      {/* Intern Section */}
      <section style={styles.volunteerSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>Intern</h2>

          <div className="howtohelp-volunteerGrid" style={styles.volunteerGrid}>
            <Link
              to="/how-to-help/intern"
              style={styles.volunteerCard}
              className="howtohelp-volunteerCard"
            >
              <img
                src="https://humanhealthproject.org/wp-content/uploads/2018/11/hhp-blueTM-2.png"
                alt="Human Health Project"
                style={styles.volunteerLogo}
              />

              <p style={styles.volunteerName}>
                Human Health Project
              </p>

              <p style={styles.volunteerLocation}>
                (Apply directly with HHP)
              </p>

              <p className="volunteerActionPrimary" style={styles.volunteerActionPrimary}>
                View Intern Application
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* Supporters Section */}
      <section style={styles.supportersSection}>
        <div style={styles.container}>
          <h2 style={styles.sectionTitle}>{supportersTitle}</h2>
          <div className="howtohelp-supportersGrid" style={styles.supportersGrid}>
            {supporters.map((supporter, index) => (
              <div key={index} style={styles.supporterItem}>
                {supporter.logo ? (
                  <img
                    src={supporter.logo}
                    alt={`${supporter.name} logo`}
                    style={styles.supporterLogo}
                  />
                ) : (
                  <span style={styles.supporterName}>{supporter.name}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const styles = {
  // Page Wrapper
  pageWrapper: {
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    color: '#333',
    backgroundColor: '#fff',
    lineHeight: 1.6,
  },

  // Containers
  container: {
    maxWidth: '800px',
    margin: '0 auto',
    padding: '0 20px',
  },
  containerWide: {
    maxWidth: '1100px',
    margin: '0 auto',
    padding: '0 40px',
  },

  // Header Section
  headerSection: {
    padding: '60px 0 40px',
    textAlign: 'center',
    backgroundColor: '#fff',
  },
  pageTitle: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#222',
    marginBottom: '20px',
    letterSpacing: '1px',
  },
  introText: {
    fontSize: '17px',
    color: '#555',
    maxWidth: '700px',
    margin: '0 auto',
    lineHeight: 1.7,
  },

  // About Section
  aboutSection: {
    padding: '40px 0 60px',
    backgroundColor: '#f8f9fa',
  },
  aboutGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '50px',
    alignItems: 'start',
  },
  aboutContent: {
    paddingRight: '20px',
  },
  aboutParagraph: {
    fontSize: '16px',
    color: '#444',
    marginBottom: '20px',
    textAlign: 'justify',
    lineHeight: 1.75,
    letterSpacing: 0.25,
  },
  aboutImageContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  aboutImage: {
    width: '100%',
    maxWidth: '400px',
    height: 'auto',
    borderRadius: '8px',
    objectFit: 'cover',
  },

  // CTA Section
  ctaSection: {
    padding: '15px 0',
    textAlign: 'center',
    backgroundColor: '#f8f9fa',
  },
  donateButton: {
    backgroundColor: '#0077CC',
    color: '#fff',
    border: 'none',
    padding: '14px 50px',
    fontSize: '13px',
    fontWeight: '600',
    letterSpacing: '0.5px',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },

  // Volunteer Section
  volunteerSection: {
    padding: '60px 0',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: '26px',
    fontWeight: '600',
    color: '#222',
    marginBottom: '40px',
  },
  volunteerGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '40px',
    maxWidth: '900px',
    margin: '0 auto',
  },
  volunteerCard: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '20px',
    border: '1px solid #e5e7eb',
    borderRadius: '12px',
    backgroundColor: '#fff',
    textDecoration: 'none',
    minHeight: '220px',
    boxShadow: '0 4px 12px rgba(0,0,0,0.06)',
    cursor: 'pointer',
  },
  volunteerLogo: {
    width: '180px',
    height: '90px',
    objectFit: 'contain',
    marginBottom: '18px',
  },
  volunteerName: {
    fontSize: '14px',
    fontWeight: '600',
    color: '#333',
    marginBottom: '5px',
  },

  volunteerLocation: {
    fontSize: '13px',
    color: '#666',
  },

  volunteerAction: {
  marginTop: '10px',
  fontSize: '13px',
  fontWeight: '600',
  color: '#065399',
  },

  volunteerActionPrimary: {
    marginTop: '10px',
    fontSize: '13px',
    fontWeight: '700',
    color: '#065399',
  },
  // Supporters Section
  supportersSection: {
    padding: '60px 0 80px',
    backgroundColor: '#fff',
    textAlign: 'center',
  },
  supportersGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(5, 1fr)',
    gap: '30px 20px',
    maxWidth: '1000px',
    margin: '0 auto',
    alignItems: 'center',
  },
  supporterItem: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '15px 10px',
  },
  supporterName: {
    fontSize: '14px',
    fontWeight: '500',
    color: '#555',
  },
  supporterLogo: {
    maxWidth: '100px',
    maxHeight: '50px',
    objectFit: 'contain',
  },
};

