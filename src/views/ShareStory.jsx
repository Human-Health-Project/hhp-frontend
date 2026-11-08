"use client";

import { useState } from "react";
import { api } from "../services/api";
import "./ShareStory.css";

/**
 * Share a story: replaces the Google Form "Human Health Project 2 Community
 * Voices for Prevention: Share Your Story", with the same questions and
 * wording. Submissions are stored as pending and only appear on Community
 * Voices after an admin approves them (see /admin/stories).
 *
 * The Google Form's "Video or Audio Link" question asked for a link but used
 * a file-upload control; this form asks for the link, as the question says.
 */

const STAGES = [
  {
    name: "setup",
    title: "1. The Setup: What did life look like before you found the answers or support you needed?",
    help: "Think back to the beginning of your health journey. What was the very first symptom, red flag, or frustrating obstacle you encountered? How did you feel trying to navigate the system or find reliable information?",
  },
  {
    name: "turningPoint",
    title: "2. The Turning Point: What was the breakthrough or realization that shifted things for you?",
    help: "Was there a specific piece of health information, a conversation, or a lifestyle change that finally clicked? How did you overcome the barriers in front of you?",
  },
  {
    name: "wisdom",
    title: "3. The Wisdom: What is the most important takeaway or piece of advice you have for others?",
    help: "Looking back now, what is the one thing you wish you had known back then? If you could hand a piece of advice to a stranger who is currently struggling with this same issue, what would you tell them?",
  },
];

const TERMS = [
  { name: "agreeTerms", label: "I confirm that I have read and agree to the Terms & Consent above" },
  { name: "agreePublicSharing", label: "I understand my story may be shared publicly (based on my anonymity preference)" },
  { name: "agreeNotMedicalAdvice", label: "I understand this is not medical advice and is for educational purposes" },
];

const EMPTY = {
  setup: "",
  turningPoint: "",
  wisdom: "",
  mediaLink: "",
  contactEmail: "",
  consentAnonymity: false,
  agreeTerms: false,
  agreePublicSharing: false,
  agreeNotMedicalAdvice: false,
  website: "", // honeypot, see below
};

export default function ShareStory() {
  const [form, setForm] = useState(EMPTY);
  const [submitState, setSubmitState] = useState({ status: "idle", message: "", errors: {} });

  const update = (event) => {
    const { name, type, value, checked } = event.target;
    setForm((previous) => ({ ...previous, [name]: type === "checkbox" ? checked : value }));
  };

  const fieldError = (name) => submitState.errors?.[name]?.[0];

  const handleSubmit = async (event) => {
    event.preventDefault();
    setSubmitState({ status: "loading", message: "", errors: {} });

    try {
      await api.submitStory({
        ...form,
        setup: form.setup.trim(),
        turningPoint: form.turningPoint.trim(),
        wisdom: form.wisdom.trim(),
        mediaLink: form.mediaLink.trim() || null,
        contactEmail: form.contactEmail.trim() || null,
      });
      setForm(EMPTY);
      setSubmitState({ status: "success", message: "", errors: {} });
      window.scrollTo({ top: 0, behavior: "smooth" });
    } catch (error) {
      setSubmitState({
        status: "error",
        message: error?.message || "Something went wrong sending your story. Please try again.",
        errors: error?.errors || {},
      });
    }
  };

  if (submitState.status === "success") {
    return (
      <div className="ss-page">
        <div className="ss-container">
          <div className="ss-card ss-thanks" role="status">
            <p className="ss-eyebrow">Community Voices</p>
            <h1 className="ss-title">Thank you for sharing your story</h1>
            <p>
              Our editorial team reads every story before it is published on Community Voices.
              If you left an email address, we may contact you with follow-up questions. It will
              never be published.
            </p>
            <a href="/what-we-do/community-voices#stories" className="ss-button">
              Read other stories
            </a>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="ss-page">
      <div className="ss-container">
        <header className="ss-card ss-intro">
          <p className="ss-eyebrow">Community Voices</p>
          <h1 className="ss-title">Share Your Story</h1>
          <p>
            Your story has the power to change a life. Sharing your health journey anonymously
            helps someone else feel less alone and gives them the tools to take control of their
            own health. No names, no tracking—just real voices. Take your time; there are no right
            or wrong answers. This form takes roughly 5–10 minutes to complete.
          </p>
          <p className="ss-requiredNote"><span aria-hidden="true">*</span> Indicates required question</p>
        </header>

        <form className="ss-form" onSubmit={handleSubmit}>
          <fieldset className="ss-card ss-section">
            <legend className="ss-sectionTitle">Your Health Story</legend>
            <p className="ss-sectionText">
              This section captures the three stages of your journey. Please share as much or as
              little detail as you feel comfortable with.
            </p>

            {STAGES.map(({ name, title, help }) => (
              <div className="ss-question" key={name}>
                <label className="ss-label" htmlFor={`ss-${name}`}>
                  {title} <span className="ss-required" aria-hidden="true">*</span>
                </label>
                <p className="ss-help" id={`ss-${name}-help`}>{help}</p>
                <textarea
                  id={`ss-${name}`}
                  name={name}
                  className="ss-textarea"
                  rows={6}
                  maxLength={10000}
                  required
                  value={form[name]}
                  onChange={update}
                  aria-describedby={`ss-${name}-help${fieldError(name) ? ` ss-${name}-error` : ""}`}
                  aria-invalid={fieldError(name) ? "true" : undefined}
                />
                {fieldError(name) && <p className="ss-fieldError" id={`ss-${name}-error`}>{fieldError(name)}</p>}
              </div>
            ))}
          </fieldset>

          <fieldset className="ss-card ss-section">
            <legend className="ss-sectionTitle">Final wrap-up</legend>
            <p className="ss-sectionText">Final wrap-up and permission settings.</p>

            <div className="ss-question">
              <label className="ss-label" htmlFor="ss-mediaLink">Optional: Video or Audio Link</label>
              <p className="ss-help" id="ss-mediaLink-help">
                If you prefer to speak rather than type, you can record a quick 3-minute video or
                audio clip on your phone, upload it to a private link (like Google Drive, Dropbox,
                or YouTube Unlisted), and paste the link here.
              </p>
              <input
                id="ss-mediaLink"
                name="mediaLink"
                type="url"
                inputMode="url"
                className="ss-input"
                placeholder="https://"
                value={form.mediaLink}
                onChange={update}
                aria-describedby={`ss-mediaLink-help${fieldError("mediaLink") ? " ss-mediaLink-error" : ""}`}
              />
              {fieldError("mediaLink") && <p className="ss-fieldError" id="ss-mediaLink-error">{fieldError("mediaLink")}</p>}
            </div>

            <div className="ss-question">
              <p className="ss-label" id="ss-consent-title">
                Consent &amp; Anonymity Agreement <span className="ss-required" aria-hidden="true">*</span>
              </p>
              <label className="ss-check">
                <input
                  type="checkbox"
                  name="consentAnonymity"
                  checked={form.consentAnonymity}
                  onChange={update}
                  required
                  aria-labelledby="ss-consent-title ss-consent-text"
                />
                <span id="ss-consent-text">
                  I understand that my response is completely anonymous and give HHP permission to
                  share my story to help educate and inspire others through its programs, website,
                  and newsletters.
                </span>
              </label>
            </div>

            <div className="ss-question">
              <label className="ss-label" htmlFor="ss-contactEmail">Optional Confidential Contact</label>
              <p className="ss-help" id="ss-contactEmail-help">
                If you are open to our editorial team reaching out to you with follow-up questions,
                please leave your email address here. This will be kept strictly confidential, will
                never be published, and will be separated from your public story.
              </p>
              <input
                id="ss-contactEmail"
                name="contactEmail"
                type="email"
                autoComplete="email"
                className="ss-input ss-input--short"
                value={form.contactEmail}
                onChange={update}
                aria-describedby={`ss-contactEmail-help${fieldError("contactEmail") ? " ss-contactEmail-error" : ""}`}
              />
              {fieldError("contactEmail") && <p className="ss-fieldError" id="ss-contactEmail-error">{fieldError("contactEmail")}</p>}
            </div>

            <fieldset className="ss-question ss-terms">
              <legend className="ss-label">
                Please review our{" "}
                <a href="/terms" target="_blank" rel="noopener noreferrer">
                  Terms &amp; Conditions<span className="ss-srOnly"> (opens in a new tab)</span>
                </a>{" "}
                before submitting your story. <span className="ss-required" aria-hidden="true">*</span>
              </legend>
              {TERMS.map(({ name, label }) => (
                <label className="ss-check" key={name}>
                  <input type="checkbox" name={name} checked={form[name]} onChange={update} required />
                  <span>{label}</span>
                </label>
              ))}
            </fieldset>
          </fieldset>

          {/* Honeypot: hidden from people and screen readers. Bots that fill
              every field fill this one, and the backend discards those. */}
          <div className="ss-honeypot" aria-hidden="true">
            <label htmlFor="ss-website">Website</label>
            <input id="ss-website" name="website" type="text" tabIndex={-1} autoComplete="off" value={form.website} onChange={update} />
          </div>

          {submitState.status === "error" && (
            <p className="ss-formError" role="alert">{submitState.message}</p>
          )}

          <button type="submit" className="ss-button" disabled={submitState.status === "loading"}>
            {submitState.status === "loading" ? "Submitting…" : "Submit your story"}
          </button>
        </form>
      </div>
    </div>
  );
}
