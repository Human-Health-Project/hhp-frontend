import React, { useState } from 'react';
import ProgramsGrid from '../components/Programs';

export default function Intern() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    areasOfInterest: [],
    googleFormFilled: false,
    professionalSummary: '',
  });

  const heroTitle = "Intern with HHP";

  const internshipDetailsTitle = "Internship Details";
  const internshipDetails = [
    { label: "Duration", value: "3-6 months" },
    { label: "Type", value: "Remote (work from anywhere)" },
    { label: "Schedule", value: "Flexible hours — aside from weekly team calls" },
    { label: "Compensation", value: "Unpaid" },
  ];

  const howToApplyTitle = "How to Apply";
  const howToApplySteps = [
    "Choose an area that interests you",
    "Write a short professional summary (200-300 words) about why you'd be a great fit",
    "Fill the Q&A form for your application to be processed",
    "Attach your Resume",
  ];

  const fullNameLabel = "Full Name";
  const emailLabel = "Email";
  const areasOfInterestLabel = "Areas of Interest";
  const checkboxesLabel = "Application Confirmation";
  const googleFormCheckboxLabel = "I have filled out the Google Form mentioned above";
  const professionalSummaryLabel = "Please provide a professional summary and how you are a good fit for HHP (Limit your summary to 200-300 words)";
  const formLinkText = "For your application to be processed, complete the Q&A in this form";
  const formLinkLabel = "link";
  const submitButtonText = "Submit";

  const areasOfInterestOptions = [
    "Business Analysis",
    "Graphic Designer",
    "Human Resources Assistant",
    "Laravel Developer",
    "Product Analysis",
    "Social Media Intern",
    "Software Quality Assurance Analyst",
    "System Administrator",
    "Technical Project Manager",
    "UX/UI",
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (option) => {
    setFormData((prev) => {
      const areas = prev.areasOfInterest.includes(option)
        ? prev.areasOfInterest.filter((item) => item !== option)
        : [...prev.areasOfInterest, option];
      return { ...prev, areasOfInterest: areas };
    });
  };

  const handleGoogleFormCheckbox = () => {
    setFormData((prev) => ({ ...prev, googleFormFilled: !prev.googleFormFilled }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  return (
    <div style={styles.pageWrapper}>
      <section style={{
        ...styles.heroSection,
        backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(https://humanhealthproject.org/wp-content/uploads/2025/11/luca-bravo-9l_326FISzk-unsplash-1200x800.jpg)'
      }}>
        <div style={styles.heroOverlay}>
          <div style={styles.heroContainer}>
            <h1 style={styles.heroTitle}>{heroTitle}</h1>
          </div>
        </div>
      </section>

      <div style={styles.mainContainer}>
        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>{internshipDetailsTitle}</h2>
          <ul style={styles.detailsList}>
            {internshipDetails.map((detail, index) => (
              <li key={index} style={styles.detailItem}>
                <span style={styles.detailLabel}>{detail.label}:</span> {detail.value}
              </li>
            ))}
          </ul>
        </section>

        <section style={styles.section}>
          <h2 style={styles.sectionTitle}>{howToApplyTitle}</h2>
          <ul style={styles.stepsList}>
            {howToApplySteps.map((step, index) => (
              <li key={index} style={styles.stepItem}>{step}</li>
            ))}
          </ul>
        </section>

        <form onSubmit={handleSubmit} style={styles.form}>
          <div style={styles.formGroup}>
            <label style={styles.label}>
              {fullNameLabel} <span style={styles.required}>*</span>
            </label>
            <input
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              {emailLabel} <span style={styles.required}>*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              style={styles.input}
              required
            />
          </div>

          <div style={styles.formGroup}>
            <label style={styles.label}>
              {areasOfInterestLabel} <span style={styles.required}>*</span>
            </label>
            <div style={styles.checkboxGroup}>
              {areasOfInterestOptions.map((option, index) => (
                <label key={index} style={styles.checkboxLabel}>
                  <input
                    type="checkbox"
                    checked={formData.areasOfInterest.includes(option)}
                    onChange={() => handleCheckboxChange(option)}
                    style={styles.checkbox}
                  />
                  {option}
                </label>
              ))}
            </div>
          </div>

          {/* Form Link */}
          <p style={styles.formLinkText}>
            {formLinkText}{' '}
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSciGuQGvSdq8wcqdFu6TwOtT0JDY1sdX8DnsDTlSuQcKE-r8g/viewform" style={styles.link}>{formLinkLabel}</a>
          </p>

          {/* Google Form Checkbox */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              {checkboxesLabel} <span style={styles.required}>*</span>
            </label>
            <label style={styles.checkboxLabel}>
              <input
                type="checkbox"
                checked={formData.googleFormFilled}
                onChange={handleGoogleFormCheckbox}
                style={styles.checkbox}
              />
              {googleFormCheckboxLabel}
            </label>
          </div>

          {/* Professional Summary */}
          <div style={styles.formGroup}>
            <label style={styles.label}>
              {professionalSummaryLabel} <span style={styles.required}>*</span>
            </label>
            <textarea
              name="professionalSummary"
              value={formData.professionalSummary}
              onChange={handleInputChange}
              style={styles.textarea}
              rows={6}
              required
            />
          </div>

          {/* Submit Button */}
          <button type="submit" style={styles.submitButton}>
            {submitButtonText}
          </button>
        </form>

        <ProgramsGrid />
      </div>
    </div>
  );
}

// ============================================
// STYLES
// ============================================
const styles = {
  // Page Wrapper
  pageWrapper: {
    fontFamily: "'Segoe UI', 'Helvetica Neue', Arial, sans-serif",
    color: '#333',
    backgroundColor: '#fff',
    lineHeight: 1.6,
  },

  // Hero Section
  heroSection: {
    width: '100%',
    height: '280px',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    position: 'relative',
  },
  heroOverlay: {
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.4)',
    display: 'flex',
    alignItems: 'center',
  },
  heroContainer: {
    maxWidth: '1000px',
    margin: '0 auto',
    padding: '0 40px',
    width: '100%',
  },
  heroTitle: {
    color: '#fff',
    fontSize: '36px',
    fontWeight: '700',
    margin: 0,
  },

  // Main Container
  mainContainer: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '40px 40px 80px',
  },

  // Sections
  section: {
    marginBottom: '30px',
  },
  sectionTitle: {
    fontSize: '20px',
    fontWeight: '700',
    color: '#222',
    marginBottom: '15px',
  },

  // Details List
  detailsList: {
    listStyle: 'disc',
    paddingLeft: '25px',
    margin: 0,
  },
  detailItem: {
    fontSize: '16px',
    color: '#444',
    marginBottom: '6px',
  },
  detailLabel: {
    textDecoration: 'underline',
  },

  // Steps List
  stepsList: {
    listStyle: 'disc',
    paddingLeft: '25px',
    margin: 0,
  },
  stepItem: {
    fontSize: '16px',
    color: '#444',
    marginBottom: '6px',
  },

  // Form
  form: {
    marginTop: '30px',
  },
  formGroup: {
    marginBottom: '20px',
  },
  label: {
    display: 'block',
    fontSize: '16px',
    fontWeight: '400',
    color: '#333',
    marginBottom: '8px',
  },
  required: {
    color: '#c00',
  },
  input: {
    width: '100%',
    padding: '10px 0',
    fontSize: '16px',
    border: 'none',
    borderBottom: '1px solid #999',
    outline: 'none',
    backgroundColor: 'transparent',
    boxSizing: 'border-box',
  },
  textarea: {
    width: '100%',
    padding: '12px',
    fontSize: '16px',
    border: '1px solid #ccc',
    borderRadius: '4px',
    outline: 'none',
    resize: 'vertical',
    boxSizing: 'border-box',
    fontFamily: 'inherit',
  },

  // Checkboxes
  checkboxGroup: {
    display: 'flex',
    flexDirection: 'column',
    gap: '8px',
  },
  checkboxLabel: {
    display: 'flex',
    alignItems: 'center',
    fontSize: '16px',
    color: '#444',
    cursor: 'pointer',
  },
  checkbox: {
    marginRight: '10px',
    width: '16px',
    height: '16px',
  },

  // Form Link
  formLinkText: {
    fontSize: '16px',
    color: '#444',
    marginBottom: '20px',
  },
  link: {
    color: '#c00',
    textDecoration: 'none',
    fontWeight: '500',
  },

  // Submit Button
  submitButton: {
    backgroundColor: '#0077CC',
    color: '#fff',
    border: 'none',
    padding: '12px 28px',
    fontSize: '16px',
    fontWeight: '600',
    borderRadius: '4px',
    cursor: 'pointer',
    transition: 'background-color 0.2s ease',
  },
};