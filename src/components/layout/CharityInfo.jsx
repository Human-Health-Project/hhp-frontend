import React from 'react';
import "./CharityInfo.css";

export default function CharityInfo() {
  const charityInfoTitle = "Human Health Project Registered Charity Information";
  const charityInfoDescription = "Human Health Project is a Northern Ireland (UK) registered charity, a tax exempt 501(c)(3) Public Charity in the US and a Company Limited by Guarantee in the Republic of Ireland.";

  return (
    <section style={styles.charitySection} className="charitySection">
      <div style={styles.mainContainer} className="charityContainer">
        <div style={styles.charityInfoRow} className="charityInfoRow">
          <div style={styles.charityTextColumn}>
            <h3 style={styles.charityInfoTitle}>{charityInfoTitle}</h3>
            <p style={styles.charityInfoDescription}>{charityInfoDescription}</p>
          </div>
          <div style={styles.charityImagePlaceholder}></div>
        </div>
      </div>
    </section>
  );
}

const styles = {
  mainContainer: {
    maxWidth: '900px',
    margin: '0 auto',
    padding: '40px 40px 60px',
  },

  charitySection: {
    borderTop: '1px solid #eee',
    paddingTop: '30px',
  },
  charityInfoRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 400px',
    gap: '30px',
    marginBottom: '30px',
    alignItems: 'start',
  },
  charityTextColumn: {
    paddingRight: '20px',
  },
  charityInfoTitle: {
    fontSize: '18px',
    fontWeight: '700',
    color: '#222',
    marginBottom: '15px',
    marginTop: 0,
  },
  charityInfoDescription: {
    fontSize: '14px',
    color: '#444',
    lineHeight: 1.75,
    margin: 0,
  },
  charityImagePlaceholder: {
    width: '100%',
    height: '120px',
    backgroundImage: 'url(https://sqa.humanhealthproject.org/wp-content/uploads/2024/08/Screenshot-2024-08-22-193631.png)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    borderRadius: '4px',
  },
};
