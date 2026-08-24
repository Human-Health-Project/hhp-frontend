import { useState } from "react";
import { Link } from "react-router-dom";
import "./HealthcareAccessIntro.css";

const TOP_WATCH_URL = "https://youtu.be/NI7lsbtpb7Q?si=6EVMtP33qeX4vQ9P";
const TOP_EMBED_URL = "https://www.youtube-nocookie.com/embed/NI7lsbtpb7Q";

const RIGHT1_WATCH_URL = "https://youtu.be/i7HhxuBqiIk?si=x2rDK-wNCmZSBfp6";
const RIGHT1_EMBED_URL = "https://www.youtube-nocookie.com/embed/i7HhxuBqiIk";

const RIGHT2_WATCH_URL = "https://youtu.be/rjO87yJ_6yo?si=EM83hHBWxqA_EfVF";
const RIGHT2_EMBED_URL = "https://www.youtube-nocookie.com/embed/rjO87yJ_6yo";

export default function HealthcareAccessIntroduction() {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    country: "",
  });

  function updateField(key, value) {
    setForm((prev) => ({ ...prev, [key]: value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!form.firstName.trim() || !form.lastName.trim() || !form.email.trim() || !form.country.trim()) return;

    alert("Thanks — you’re signed up to be notified about upcoming events.");
    setForm({ firstName: "", lastName: "", email: "", country: "" });
  }

  return (
    <main className="haci-page">
      <section className="haci-section">
        <div className="haci-container">
          <div className="haci-topVideoCard">
            <div className="haci-cardHeaderRow">
              <h2 className="haci-cardTitle">Watch the introduction</h2>
              <a className="haci-link" href={TOP_WATCH_URL} target="_blank" rel="noreferrer">
                Open on YouTube
              </a>
            </div>

            <div className="haci-videoWrap">
              <iframe
                className="haci-video"
                src={TOP_EMBED_URL}
                title="Healthcare Access for All — Introduction"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          <div className="haci-mainGrid">
            {/* LEFT: FORM */}
            <section className="haci-card haci-cardPadded haci-formCard" aria-label="Notification signup form">
              <h2 className="haci-h2">Healthcare Access for All</h2>
              <h2 className="haci-cardTitle">Sign up today</h2>
              <p className="haci-body">
                Be notified about upcoming events in our Healthcare Access for All program.
              </p>

              <div className="haci-listBox">
                <ul className="haci-bullets haci-bulletsVisible">
                  <li>
                    <a className="haci-anchorLink" href="#patient-advocacy-workshops">
                      Patient Advocacy Workshops
                    </a>
                  </li>
                  <li>
                    <a className="haci-anchorLink" href="#online-video-courses">
                      Online Video Courses
                    </a>
                  </li>
                  <li>
                    <a className="haci-anchorLink" href="#peer-to-peer-events">
                      Peer-to-Peer Events
                    </a>
                  </li>
                </ul>
              </div>

              <form className="haci-form" onSubmit={handleSubmit}>
                <div className="haci-twoColInputs">
                  <div>
                    <label className="haci-label" htmlFor="haci-first">
                      First Name <span className="haci-required">*</span>
                    </label>
                    <input
                      id="haci-first"
                      className="haci-input"
                      value={form.firstName}
                      onChange={(e) => updateField("firstName", e.target.value)}
                      autoComplete="given-name"
                      required
                    />
                  </div>

                  <div>
                    <label className="haci-label" htmlFor="haci-last">
                      Last Name <span className="haci-required">*</span>
                    </label>
                    <input
                      id="haci-last"
                      className="haci-input"
                      value={form.lastName}
                      onChange={(e) => updateField("lastName", e.target.value)}
                      autoComplete="family-name"
                      required
                    />
                  </div>
                </div>

                <label className="haci-label" htmlFor="haci-email">
                  Email <span className="haci-required">*</span>
                </label>
                <input
                  id="haci-email"
                  className="haci-input"
                  type="email"
                  value={form.email}
                  onChange={(e) => updateField("email", e.target.value)}
                  autoComplete="email"
                  placeholder="you@example.com"
                  required
                />

                <label className="haci-label" htmlFor="haci-country">
                  Country <span className="haci-required">*</span>
                </label>
                <input
                  id="haci-country"
                  className="haci-input"
                  value={form.country}
                  onChange={(e) => updateField("country", e.target.value)}
                  autoComplete="country-name"
                  placeholder="United States"
                  required
                />

                <button className="haci-button haci-buttonFull" type="submit">
                  Sign Up
                </button>

                <p className="haci-note">
                  We’ll only use your details to send program and event updates.
                </p>
              </form>
            </section>

            {/* RIGHT: TWO VIDEOS */}
            <aside className="haci-rightStack" aria-label="Related videos">
              <div className="haci-card haci-cardPadded">
                <div className="haci-cardHeaderRow">
                  
                  <a className="haci-link" href={RIGHT1_WATCH_URL} target="_blank" rel="noreferrer">
                    Open on YouTube
                  </a>
                </div>
                <div className="haci-videoWrap">
                  <iframe
                    className="haci-video"
                    src={RIGHT1_EMBED_URL}
                    title="Know your eligibility — video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>

              <div className="haci-card haci-cardPadded">
                <div className="haci-cardHeaderRow">

                  <a className="haci-link" href={RIGHT2_WATCH_URL} target="_blank" rel="noreferrer">
                    Open on YouTube
                  </a>
                </div>
                <div className="haci-videoWrap">
                  <iframe
                    className="haci-video"
                    src={RIGHT2_EMBED_URL}
                    title="Program overview — video"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            </aside>
          </div>

          {/* TEXT SECTIONS (same content as WP page) */}
          <section className="haci-content">
            <p className="haci-eyebrow">Human Health Project Program</p>
            <h2 id="patient-advocacy-workshops" className="haci-h2">Patient Advocacy Workshops</h2>
            <p className="haci-body">
              These are online workshops, available separately with a{" "}
              <Link
                to="/what-we-do/patient-advocacy/northern-ireland"
                className="haci-inlineLink"
              >
                Northern Ireland
              </Link>{" "}
              and{" "}
              <Link
                to="/what-we-do/patient-advocacy/los-angeles"
                className="haci-inlineLink"
              >
                Los Angeles
              </Link>
              , California focus.  They are free of charge. You can be located anywhere in the world to be able
              to register and attend the workshops. They equip participants with practical skills to advocate
              for themselves and their loved ones.
            </p>
          

            <div className="haci-listBox">
              <ul className="haci-bullets haci-bulletsVisible">
                <li>Your Rights as a Patient</li>
                <li>How to Stand Up for Yourself and Be Heard</li>
                <li>Knowing your Health Insurance Eligibility and How to Sign Up and Renew (Los Angeles workshops only)</li>
                <li>How to Research Online as an ePatient</li>
                <li>Where to Get Help</li>
              </ul>
            </div>
            <p className="haci-body">
              Learn more about{" "}
              <Link to="/what-we-do/stop-type-2-diabetes/introduction" className="haci-inlineLink">
                Human Health Project’s (HHP) programs
              </Link>
            </p>

            <h2 id="online-video-courses" className="haci-h2">Online Video Courses</h2>
            <p className="haci-body">
              Our comprehensive video courses cover essential topics for empowered healthcare navigation. These include:
            </p>

            <div className="haci-listBox">
              <ul className="haci-bullets haci-bulletsVisible">
                <li>Your Rights as a Patient</li>
                <li>Patient Empowerment and the ePatient Movement</li>
                <li>What to do When You Can’t Get a Diagnosis</li>
                <li>Finding Credible Information Online</li>
                <li>Knowing your Health Insurance Eligibility (Los Angeles, US focused)</li>
                <li>Health Literacy (The Language of Health)</li>
                <li>Preventing Medical Errors</li>
                <li>Building Your Healthcare Team</li>
                <li>Approaches to Patient Advocacy</li>
                <li>Managing Opioids and Other Controlled Substances</li>
                <li>Understanding the Role of a Patient Advocate</li>
              </ul>
            </div>
            <p className="haci-body">
              Explore the courses in{" "}
              <Link
                to="/what-we-do/learning-academy/english"
                className="haci-inlineLink"
              >
                English
              </Link>
              ,{" "}
              <Link
                to="/what-we-do/learning-academy/spanish"
                className="haci-inlineLink"
              >
                Español
              </Link>{" "}
              and{" "}
              <Link
                to="/what-we-do/learning-academy/mandarin"
                className="haci-inlineLink"
              >
                Mandarin
              </Link>
              .
            </p>


            <h2 id="peer-to-peer-events" className="haci-h2">Online Peer to Peer Events</h2>
            <p className="haci-body">
              We have hosted impactful online panels, reaching over 1,000 attendees. These events foster community
              and shared learning. Our most recent panel, “How to Stand Up for Yourself: Patient Empowerment and the ePatient Movement with a focus on IBD,” exemplifies our commitment to addressing specific health challenges.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}
