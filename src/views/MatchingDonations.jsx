import React from 'react';
import CharityInfo from '../components/layout/CharityInfo';
import FooterInfo from '../components/layout/FooterInfo';
import "./MatchingDonations.css"; // ✅ add this

export default function MatchingDonations() {
  const heroTitle = "DONATIONS PAGE";
  const mainHeading = "Did You Know That Many Companies Offer A Matching Gift Program To Encourage Philanthropic Giving?";
  const descriptionText = "This means you can double or even triple your gift to the Human Health Project, allowing us to build healthier communities with our health literacy focused programs. If you're interested to know if your organization matches your gift, please reach out to Michael Diamond for help. We're set up with most donor matching platforms and other ways of employee giving. This includes but is not limited to:";

  const matchingPlatforms = [
    "BenevityCauses",
    "Schwab Charitable",
    "Fidelity Charitable",
    "Vanguard Charitable",
    "Focusing Philanthropy",
    "Goldman Sachs Gives",
    "Goldmans Sachs Matching",
    "Bank of American Charitable Fund",
  ];

  return (
    <div style={styles.pageWrapper}>
      <section style={styles.heroSection} className="matching-heroSection">
        <div style={styles.heroContent} className="matching-heroContent">
          <h1 style={styles.heroTitle}>{heroTitle}</h1>
        </div>

        <div style={styles.heroImagePlaceholder} className="matching-heroImage" />
      </section>

      <section>
        <div style={styles.mainContainer} className="matching-mainContainer">
          <h2 style={styles.mainHeading} className="matching-mainHeading">{mainHeading}</h2>

          <p style={styles.description} className="matching-description">{descriptionText}</p>

          <div style={styles.platformsGrid} className="matching-platformsGrid">
            {matchingPlatforms.map((platform, index) => (
              <div key={index} style={styles.platformItem}>
                <span style={styles.bullet}>•</span>
                <span style={styles.platformName}>{platform}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CharityInfo />
      <FooterInfo />
    </div>
  );
}

const styles = {
  pageWrapper: {
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    color: '#333',
    backgroundColor: '#fff',
    lineHeight: 1.6,
  },

  heroSection: {
    width: '100%',
    maxWidth: '900px',
    height: '100px',
    margin: '0 auto',
    backgroundColor: '#3a9bd9',
    backgroundImage: 'linear-gradient(135deg, #3a9bd9 0%, #2d8bc9 100%)',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    overflow: 'hidden',
  },
  heroContent: {
    padding: '0 40px',
    zIndex: 1,
  },
  heroTitle: {
    color: '#fff',
    fontSize: '32px',
    fontWeight: '700',
    margin: 0,
    letterSpacing: '2px',
  },
  heroImagePlaceholder: {
    width: '100px',
    height: '100%',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
  },

  mainContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px 40px 60px',
  },

  mainHeading: {
    fontSize: '32px',
    fontWeight: '700',
    color: '#222',
    lineHeight: 1.3,
    marginBottom: '25px',
  },

  description: {
    fontSize: '16px',
    color: '#444',
    lineHeight: 1.75,
    marginBottom: '30px',
  },

  platformsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '10px 20px',
    marginBottom: '50px',
  },
  platformItem: {
    display: 'flex',
    alignItems: 'flex-start',
    gap: '8px',
  },
  bullet: {
    color: '#333',
    fontSize: '14px',
    lineHeight: 1.5,
  },
  platformName: {
    fontSize: '14px',
    color: '#333',
    lineHeight: 1.5,
  },
};
