"use client";

import "./ContactUs.css";
import { useState } from "react";
import { getNames } from "country-list";
import { api } from "../services/api";

export default function ContactUs() {
  // getNames() returns countries in ISO 3166 code order, not alphabetical —
  // Andorra (AD), United Arab Emirates (AE), Afghanistan (AF)... which makes
  // a 249-entry dropdown effectively unusable. Sort it the way production
  // does, and the way anyone scanning the list would expect.
  const countries = [...getNames()].sort((a, b) => a.localeCompare(b));
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitting(true);
    setError("");

    const formData = new FormData(e.currentTarget);

    try {
      await api.contact(Object.fromEntries(formData));
      setSubmitted(true);
    } catch (submissionError) {
      setError(submissionError.message);
    } finally {
      setSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <main className="contact-page">
        <section className="contact-success">
          <div className="contact-successCard">
            <h2>Thank You!</h2>
            <p>Your message has been submitted.</p>
            <p>We will get in touch with you shortly.</p>

            <button
              className="contact-backBtn"
              onClick={() => setSubmitted(false)}
            >
              Back to Contact Form
            </button>
          </div>
        </section>
      </main>
    );
  }

  return (
    <main className="contact-page">
      <section className="contact-formSection">
        <h1 className="contact-title">Contact Us</h1>

        <form className="contact-form" onSubmit={handleSubmit}>

          <div className="contact-field">
            <label htmlFor="contact-first-name">
              First Name <span className="contact-required">*</span>
            </label>
            <input id="contact-first-name" name="first_name" type="text" required />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-last-name">
              Last Name <span className="contact-required">*</span>
            </label>
            <input id="contact-last-name" name="last_name" type="text" required />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-email">
              Email <span className="contact-required">*</span>
            </label>
            <input id="contact-email" name="email" type="email" required />
          </div>

          <div className="contact-field">
            <label htmlFor="contact-country">
              Country <span className="contact-required">*</span>
            </label>
            <select id="contact-country" name="country" required defaultValue="">
              <option value="" disabled>
                Select a country
              </option>
              {countries.map((country) => (
                <option key={country} value={country}>
                  {country}
                </option>
              ))}
            </select>
          </div>

          <div className="contact-field">
            <label htmlFor="contact-message">
              Your Message <span className="contact-required">*</span>
            </label>
            <textarea id="contact-message" name="message" rows="8" required />
          </div>

          {error && (
            <p className="contact-error" role="alert">
              {error}
            </p>
          )}

          <button type="submit" className="contact-sendBtn" disabled={submitting}>
            {submitting ? "SUBMITTING..." : "SUBMIT"}
          </button>

        </form>
      </section>
    </main>
  );
}
