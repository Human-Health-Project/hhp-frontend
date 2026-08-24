import { useState } from "react";
import "./StopType2Diabetes.css";

const GOFUNDME_URL =
  "https://www.gofundme.com/f/stop-type2diabetes-before-it-starts";

const YOUTUBE_WATCH_URL = "https://youtu.be/JxZLRnaZ4LI?si=sBkNMTWT5GImHqEe";

const YOUTUBE_EMBED_URL = "https://www.youtube-nocookie.com/embed/JxZLRnaZ4LI";

export default function StopType2Diabetes() {
  const [email, setEmail] = useState("");

  function handleNotifySubmit(e) {
    e.preventDefault();
    if (!email.trim()) return;

    // Placeholder (connect to Mailchimp/HubSpot/etc later)
    alert("Thanks — we’ll notify you when the program is available.");
    setEmail("");
  }

  return (
    <main className="std2d-page">
      {/* VIDEO ON TOP */}
      <section className="std2d-section">
        <div className="std2d-container">
          <h1 className="std2d-title">Stop Type 2 Diabetes Before It Starts</h1>

          <div className="std2d-videoCard">
            <div className="std2d-cardHeaderRow">
              <h2 className="std2d-cardTitle">Watch the overview</h2>
              <a
                className="std2d-link"
                href={YOUTUBE_WATCH_URL}
                target="_blank"
                rel="noreferrer"
              >
                Open on YouTube
              </a>
            </div>

            <div className="std2d-videoWrap">
              <iframe
                className="std2d-video"
                src={YOUTUBE_EMBED_URL}
                title="Stop Type 2 Diabetes Before It Starts — Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>

          {/* BELOW VIDEO: LEFT FORM / RIGHT QR */}
          <div className="std2d-twoCol">
            {/* LEFT: NOTIFY FORM */}
            <section
              className="std2d-card std2d-cardPadded"
              aria-label="Program notification signup"
            >
              <h2 className="std2d-cardTitle">Get notified when it launches</h2>
              <p className="std2d-cardText">
                Sign up to be notified when the program is available both à la
                carte and as an immersive 3-month rolling curriculum in English
                and Spanish.
              </p>

              <div className="std2d-listBox">
                <ul className="std2d-bullets std2d-bulletsVisible">
                  <li>
                    18 Engaging Video Lessons with gamified quizzes to increase
                    retention
                  </li>
                  <li>
                    Monthly Patient Advocacy Workshops to help people navigate
                    their healthcare
                  </li>
                  <li>
                    Peer Support Communities to reinforce habits and
                    accountability
                  </li>
                  <li>
                    Immediate, Actionable Guidance on diet, exercise, fasting,
                    and more
                  </li>
                </ul>
              </div>

              <form className="std2d-form" onSubmit={handleNotifySubmit}>
                <label className="std2d-label" htmlFor="std2d-email">
                  Email <span className="std2d-required">*</span>
                </label>

                <div className="std2d-formRow">
                  <input
                    id="std2d-email"
                    className="std2d-input"
                    type="email"
                    autoComplete="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="you@example.com"
                    required
                  />
                  <button className="std2d-button" type="submit">
                    Sign Up
                  </button>
                </div>
              </form>

              <p className="std2d-note">
                We’ll only use your email to send program availability updates.
              </p>
            </section>

            {/* RIGHT: QR DONATION */}
            <div className="container">
              <iframe
                src="https://www.gofundme.com/f/stop-type2diabetes-before-it-starts/widget/large"
                width="100%"
                height="600"
                frameBorder="0"
                scrolling="no"
                title="Stop Type-2 Diabetes"
                style={{ border: "none" }}
              ></iframe>
            </div>
          </div>
        </div>
      </section>

      {/* HERO */}
      <header className="std2d-hero">
        <div className="std2d-container">
          <p className="std2d-eyebrow">Human Health Project Campaign</p>

          <p className="std2d-subtitle">
            It’s not just a health crisis — it’s a person: your parents, your
            friends, maybe you.
            <span className="std2d-subtitleStrong">
              {" "}
              1 in 3 adults has pre-diabetes.
            </span>
          </p>

          <div className="std2d-heroInfo">
            <p>
              At Human Health Project (HHP), a holistic health literacy charity,
              we’ve already launched successful initiatives like our{" "}
              <strong>Healthcare Access for All</strong> and{" "}
              <strong>Shared Patient Information</strong> programs. These have
              empowered thousands to take control of their health.
            </p>

            <p className="std2d-heroInfoEmphasis">
              Now, we’re building our most ambitious program yet:
            </p>

            <div className="std2d-programName">
              STOP TYPE-2 DIABETES BEFORE IT STARTS
            </div>

            <p>
              A digital, video-based curriculum that gives people the tools to
              prevent Type 2 diabetes through better habits, better knowledge,
              and real-time support.
            </p>

            <p>
              We’re over halfway there with the “Stop Type 2 Diabetes Before It
              Starts” curriculum; we just need to produce the final 12 videos
              and supporting materials. Your support is the final push needed to
              get this proven, life-saving knowledge to everyone who needs it.
            </p>
          </div>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <section className="std2d-section std2d-sectionAlt">
        <div className="std2d-container">
          <div className="std2d-contentGrid">
            <article className="std2d-article">
              {/* FLAT (no box) */}
              <div className="std2d-block std2d-blockPlain">
                <h2 className="std2d-h2">
                  The Power of Prevention: Funding Knowledge
                </h2>
                <p>
                  We believe in prevention, not just treatment. Your support
                  doesn’t just treat a problem it helps stop it at the root.
                  Informed people make better choices and better choices prevent
                  disease.
                </p>
                <p>
                  We don’t believe in waiting for a crisis. We believe in
                  empowering people to write their own health stories. Health
                  literacy is the ultimate form of prevention, it’s the tool
                  that allows individuals to take control, understand their
                  bodies, and prevent Type 2 diabetes before it takes root.
                </p>
                <p>
                  Your support for “Stop Type 2 Diabetes Before It Starts” is an
                  investment in this self-reliance. This campaign is not a fight
                  against a disease; it is about handing people the playbook for
                  a healthier life.
                </p>
              </div>

              {/* FLAT (no box) */}
              <div className="std2d-block std2d-blockPlain">
                <h2 className="std2d-h2">
                  Invest in Health Literacy, Save a Life
                </h2>
                <p>
                  By funding the completion of our final 12 videos, you are
                  helping us deliver the single most effective intervention
                  there is: knowledge.
                </p>
                <p className="std2d-strongLine">
                  Give us the resources to complete the program, and we will
                  deliver.
                </p>
              </div>

              {/* KEEP BOX (goal + table) */}
              <div className="std2d-block">
                <h2 className="std2d-h2">
                  Empowering Communities to Prevent Type 2
                </h2>

                <div className="std2d-goalBox">
                  <div>
                    <p className="std2d-goalLabel">
                      Program Completion Funding Goal
                    </p>
                    <p className="std2d-goalText">
                      We’ve finished the first 6 of 18 video modules. Your
                      donation funds the remaining 12 modules, quizzes, and
                      gamified elements for the “Stop Type 2 Diabetes Before It
                      Starts” program.
                    </p>
                  </div>

                  <div className="std2d-goalAmount">
                    <p className="std2d-goalAmountLabel">Total Goal</p>
                    <p className="std2d-goalAmountValue">$8,000</p>
                  </div>
                </div>

                <div
                  className="std2d-tableWrap"
                  role="region"
                  aria-label="Funding breakdown table"
                >
                  <table className="std2d-table">
                    <thead>
                      <tr>
                        <th>Category</th>
                        <th>Impact</th>
                        <th>% of Total</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Video Production (Final 12 Modules)</td>
                        <td>
                          Filming, editing, graphics, and voiceover for
                          professional content.
                        </td>
                        <td>60%</td>
                      </tr>
                      <tr>
                        <td>Platform Development &amp; QA</td>
                        <td>
                          Interactive quizzes, gamification, and user experience
                          testing.
                        </td>
                        <td>20%</td>
                      </tr>
                      <tr>
                        <td>Expert Review &amp; Translation</td>
                        <td>
                          Compensation for medical expert review and initial
                          Spanish translation.
                        </td>
                        <td>15%</td>
                      </tr>
                      <tr>
                        <td>Outreach &amp; Launch</td>
                        <td>
                          Essential promotion to ensure communities know the
                          resource is available.
                        </td>
                        <td>5%</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>

              {/* KEEP BOX (investment cards) */}
              <div className="std2d-block">
                <h2 className="std2d-h2">Your Investment is Tangible</h2>

                <div className="std2d-investmentGrid">
                  <div className="std2d-miniCard">
                    <p className="std2d-miniTitle">$50</p>
                    <p className="std2d-miniText">
                      could fund the voiceover for one critical educational
                      module.
                    </p>
                  </div>
                  <div className="std2d-miniCard">
                    <p className="std2d-miniTitle">$250</p>
                    <p className="std2d-miniText">
                      could sponsor the graphic design for a key prevention
                      quiz.
                    </p>
                  </div>
                  <div className="std2d-miniCard">
                    <p className="std2d-miniTitle">$500</p>
                    <p className="std2d-miniText">
                      could fund the complete production and editing of a full
                      video lesson.
                    </p>
                  </div>
                </div>

                <div className="std2d-highlightBox">
                  <p>
                    Every donation brings us closer to transforming lives with
                    knowledge. With your support, we’ll deliver a fully
                    developed, bilingual curriculum designed for real-world
                    change.
                  </p>
                </div>
              </div>

              {/* FLAT (no box) */}
              <div className="std2d-block std2d-blockPlain">
                <h2 className="std2d-h2">
                  Your Donation Builds a Life-Saving Program
                </h2>
                <p>
                  Your investment directly creates the complete “Stop Type 2
                  Diabetes Before It Starts” program - a comprehensive,
                  multi-faceted solution designed for immediate, real-world
                  application.
                </p>
                <p>
                  The funds we raise will finalize the production and launch of
                  this program, available both à la carte and as an immersive
                  3-month rolling curriculum in English and Spanish.
                </p>

                <p className="std2d-sectionLabel">
                  Here’s exactly what your support will create:
                </p>
                <div className="std2d-listBox">
                  <ul className="std2d-bullets std2d-bulletsVisible">
                    <li>
                      18 Engaging Video Lessons with gamified quizzes to
                      increase retention
                    </li>
                    <li>
                      Monthly Patient Advocacy Workshops to help people navigate
                      their healthcare
                    </li>
                    <li>
                      Peer Support Communities to reinforce habits and
                      accountability
                    </li>
                    <li>
                      Immediate, Actionable Guidance on diet, exercise, fasting,
                      and more
                    </li>
                  </ul>
                </div>
              </div>

              {/* FLAT (no box) */}
              <div className="std2d-block std2d-blockPlain">
                <h2 className="std2d-h2">
                  The Knowledge You Fund Will Be Used To
                </h2>
                <p>
                  This program provides participants with practical, actionable
                  steps to immediately stabilize their blood sugar and prevent
                  Type 2 diabetes.
                </p>

                <p className="std2d-sectionLabel">They will learn:</p>
                <div className="std2d-listBox">
                  <ul className="std2d-bullets std2d-bulletsVisible">
                    <li>
                      Foods that keep your blood glucose steady what to choose
                    </li>
                    <li>
                      Mastering mindful choices in a sugary world, and what
                      foods to avoid
                    </li>
                    <li>
                      How the order that food is eaten affects glucose spikes
                    </li>
                    <li>
                      The surprising power of vinegar: reducing glucose spikes
                      before meals
                    </li>
                    <li>
                      Why exercising after meals helps reduce glucose spikes
                    </li>
                    <li>
                      How fasting helps reduce blood sugar spikes and improves
                      health
                    </li>
                    <li>
                      Start your day right: the best breakfasts for balanced
                      blood sugar
                    </li>
                    <li>
                      The best time to eat dessert, and which ones are healthier
                    </li>
                  </ul>
                </div>
              </div>
            </article>

            {/* RIGHT COLUMN: Removed (per your request) */}
            <aside className="std2d-sideNote">
              <div className="std2d-sideCard">
                <h3 className="std2d-sideTitle">Quick Donate</h3>
                <p className="std2d-sideText">
                  Click the QR card above or use this button anytime.
                </p>
                <a
                  className="std2d-button std2d-buttonFull"
                  href={GOFUNDME_URL}
                  target="_blank"
                  rel="noreferrer"
                >
                  GoFundMe
                </a>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
