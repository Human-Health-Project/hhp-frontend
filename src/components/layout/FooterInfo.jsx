import React from 'react';
import "./FooterInfo.css";

export default function FooterInfo() {
  const niCharityNo = "NI Charity No. 101323";
  const einNumber = "EIN: 71-0891805";
  const roiCompanyNo = "ROI Company No. 492908";

  const mailingAddressTitle = "Mailing Address";
  const mailingAddressLines = [
    "Human Health Project",
    "2271 Vandalia Avenue",
    "Los Angeles, CA 90032, USA",
  ];

  const contactTitle = "Contact Us at";
  const contactEmail = "donations@humanhealthproject.org";

  return (
    <section className="footerInfoSection">
      <div style={styles.mainContainer} className="footerInfoContainer" >
        <div style={styles.footerGrid} className="footerInfoGrid">
          <div style={styles.footerColumn} className="footerInfoCol">
            <p style={styles.registrationNumber}>
              <span style={styles.registrationText}>{niCharityNo}</span>
              <span style={styles.blueUnderline}></span>
            </p>
            <p style={styles.registrationNumberSmall}>{einNumber}</p>
            <span style={styles.blueUnderlineSmall}></span>
            <p style={styles.registrationNumberSmall}>{roiCompanyNo}</p>
          </div>

          <div style={styles.footerColumn} className="footerInfoCol">
            <h4 style={styles.footerTitle}>{mailingAddressTitle}</h4>
            {mailingAddressLines.map((line, index) => (
              <p key={index} style={styles.addressLine}>{line}</p>
            ))}
          </div>

          <div style={styles.footerColumnCenter} className="footerInfoCol footerInfoColCenter">
            <img
              src="https://widgets.guidestar.org/TransparencySeal/8067834"
              alt="Platinum Transparency 2024 - Candid"
              style={styles.badgeImage}
            />
          </div>

          <div style={styles.footerColumn} className="footerInfoCol">
            <h4 style={styles.footerTitle}>{contactTitle}</h4>
            <a href={`mailto:${contactEmail}`} style={styles.emailLink}>
              {contactEmail}
            </a>
          </div>
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

  footerGrid: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr 1fr',
    gap: '20px',
    marginTop: '30px',
    alignItems: 'start',
  },
  footerColumn: {
    display: 'flex',
    flexDirection: 'column',
  },
  footerColumnCenter: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  footerTitle: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#222',
    marginBottom: '10px',
    marginTop: 0,
  },

  registrationNumber: {
    fontSize: '15px',
    fontWeight: '700',
    color: '#222',
    marginBottom: '5px',
    marginTop: 0,
    display: 'flex',
    flexDirection: 'column',
  },
  registrationText: {
    marginBottom: '5px',
  },
  blueUnderline: {
    width: '80px',
    height: '3px',
    backgroundColor: '#0077CC',
    marginBottom: '10px',
  },
  registrationNumberSmall: {
    fontSize: '14px',
    color: '#444',
    margin: '0 0 5px 0',
  },
  blueUnderlineSmall: {
    width: '80px',
    height: '3px',
    backgroundColor: '#0077CC',
    marginBottom: '10px',
    display: 'block',
  },

  addressLine: {
    fontSize: '14px',
    color: '#444',
    margin: '0 0 3px 0',
    lineHeight: 1.5,
  },

  badgeImage: {
    width: '100px',
    height: 'auto',
  },

  emailLink: {
    fontSize: '14px',
    color: '#0077CC',
    textDecoration: 'underline',
  },
};
