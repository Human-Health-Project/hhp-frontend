"use client";

import "./ContactUs.css";
import { useState } from "react";
import { getNames } from "country-list";
import { api } from "../services/api";

export default function ContactUs() {
  const countries = getNames();
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
      <section className="contact-hero">
        <div className="contact-heroContent">
          <h1>Contact Us</h1>
          <p>Have questions, feedback, or suggestions? We’d love to hear from you.</p>
        </div>
      </section>

      <section className="contact-formSection">
        <div className="contact-card">
          <form className="contact-form" onSubmit={handleSubmit}>

            <div className="contact-row">
              <div className="contact-field">
                <label>First Name *</label>
                <input name="first_name" type="text" required />
              </div>

              <div className="contact-field">
                <label>Last Name *</label>
                <input name="last_name" type="text" required />
              </div>
            </div>
            <div className="contact-field">
              <label>Email *</label>
              <input name="email" type="email" required />
            </div>

            <div className="contact-field">
              <label>Country *</label>
              <select name="country" required>
                {countries.map((country) => (
                  <option key={country}>{country}</option>
                ))}
              </select>
            </div>

            <div className="contact-field">
              <label>Your Message *</label>
              <textarea name="message" rows="6" required />
            </div>

            {error && <p role="alert">{error}</p>}

            <button type="submit" className="contact-sendBtn" disabled={submitting}>
              {submitting ? "SUBMITTING..." : "SUBMIT"}
            </button>

          </form>
        </div>
      </section>
    </main>
  );
}
