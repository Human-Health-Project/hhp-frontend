import React, { useMemo, useState, useRef, useEffect } from "react";
import "./MigraineReports.css";
import { Link } from "react-router-dom";
/* After-charts images */
import shareLearnLupusImg from "../assets/migraine/after-charts/share-learn-lupus.png";
import patientAdvocacyImg from "../assets/migraine/after-charts/service-patient-advocacy.jpg";
import patientEducationImg from "../assets/migraine/after-charts/service-patient-education.png";
import migraineHeroImg from "../assets/migraine/migraine-hero.png";

/**
 * Auto-load every .png chart under src/assets/migraine/charts/
 * You only need to name files correctly; no more importing each chart.
 */
const chartImages = import.meta.glob("../assets/migraine/charts/**/*.png", {
  eager: true,
  import: "default",
});

function getChartSrc(relativePathFromChartsRoot) {
  const key = `../assets/migraine/charts/${relativePathFromChartsRoot}`;
  return chartImages[key] || null;
}

export default function MigraineData() {
  const groups = useMemo(
    () => [
      {
        title: "General Information",
        folder: "general-information",
        items: [
          { label: "Age", file: "age.png" },
          { label: "Gender", file: "gender.png" },
          { label: "General Health", file: "general-health.png" },
          { label: "Quality of Life", file: "quality-of-life.png" },
          { label: "Heredity", file: "heredity.png" },
          { label: "Healthcare Provider", file: "healthcare-provider.png" },
          { label: "Ethnicity", file: "ethnicity.png" },
          { label: "Country of Residence", file: "country-of-residence.png" },
          { label: "Response Map", file: "response-map.png" },
        ],
      },
      {
        title: "Causes",
        folder: "causes",
        items: [
          { label: "Causes-Food", file: "causes.png" },
          { label: "Causes", file: "causes-2.png" }
        ],
      },
      {
        title: "Symptoms",
        folder: "symptoms",
        items: [
          { label: "Severity", file: "severity.png" },
          { label: "Duration", file: "duration.png" },
          { label: "Frequency", file: "frequency.png" },
          { label: "Onset", file: "onset.png" },
          { label: "Sleep Disturbance", file: "sleep-disturbance.png" },
          { label: "Hormonal Changes", file: "hormonal-changes.png" },
          { label: "Location of Discomfort", file: "location-of-discomfort.png" },
        ],
      },
      {
        title: "Life Changes",
        folder: "life-changes",
        items: [
          { label: "Types of Treatments", file: "types-of-treatments.png" },
          { label: "Efficacy", file: "efficacy.png" },
          { label: "Side Effects", file: "side-effects.png" },
          { label: "Adherence", file: "adherence.png" },
          { label: "Cost", file: "cost.png" },
          { label: "Duration", file: "duration.png" },
          { label: "Accessibility", file: "accessibility.png" },
        ],
      },
      {
        title: "Natural/Alt. Treatments",
        folder: "natural-alt-treatments",
        items: [
          { label: "Types of Treatments", file: "types-of-treatments.png" },
          { label: "Efficacy", file: "efficacy.png" },
          { label: "Side Effects", file: "side-effects.png" },
          { label: "Adherence", file: "adherence.png" },
          { label: "Cost", file: "cost.png" },
          { label: "Duration", file: "duration.png" },
          { label: "Accessibility", file: "accessibility.png" },
        ],
      },
      {
        title: "OTC Treatments",
        folder: "otc-treatments",
        items: [
          { label: "Types of Treatments", file: "types-of-treatments.png" },
          { label: "Efficacy", file: "efficacy.png" },
          { label: "Side Effects", file: "side-effects.png" },
          { label: "Adherence", file: "adherence.png" },
          { label: "Cost", file: "cost.png" },
          { label: "Duration", file: "duration.png" },
          { label: "Accessibility", file: "accessibility.png" },
        ],
      },
      {
        title: "Prescription Treatments",
        folder: "prescription-treatments",
        items: [
          { label: "Types of Treatments", file: "types-of-treatments.png" },
          { label: "Efficacy", file: "efficacy.png" },
          { label: "Side Effects", file: "side-effects.png" },
          { label: "Adherence", file: "adherence.png" },
          { label: "Cost", file: "cost.png" },
          { label: "Duration", file: "duration.png" },
          { label: "Accessibility", file: "accessibility.png" },
        ],
      },
      {
        title: "Procedures & Surgeries",
        folder: "procedures-surgeries",
        items: [
          { label: "Types of Treatments", file: "types-of-treatments.png" },
          { label: "Efficacy", file: "efficacy.png" },
          { label: "Side Effects", file: "side-effects.png" },
          { label: "Adherence", file: "adherence.png" },
          { label: "Cost", file: "cost.png" },
          { label: "Duration", file: "duration.png" },
          { label: "Accessibility", file: "accessibility.png" },
        ],
      },
    ],
    []
  );

  const [openSections, setOpenSections] = useState(() => {
    const initial = {};
    groups.forEach((g, idx) => (initial[g.title] = idx === 0));
    return initial;
  });

  const [selected, setSelected] = useState(null);

  const chartViewportRef = useRef(null);

  useEffect(() => {
    if (chartViewportRef.current) chartViewportRef.current.scrollTop = 0;
  }, [selected?.relative]);

  const toggleSection = (title) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const handleClickItem = (group, item) => {
    const relative = `${group.folder}/${item.file}`;
    const src = getChartSrc(relative);

    setSelected({
      title: item.label,
      src,
      relative,
    });

    const el = document.getElementById("md-chart-area");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const SelectedChart = () => {
    if (!selected) {
      return (
        <div className="md-emptyState md-curvedCard" id="md-chart-area">
          <div className="md-emptyTitle">Charts</div>
          <div className="md-emptyText">Select any subcategory on the list to view its chart.</div>
        </div>
      );
    }

    return (
      <section id="md-chart-area" className="md-section">
        <div className="md-card md-curvedCard">
          <h3 className="md-cardTitle">{selected.title}</h3>

          {!selected.src ? (
            <div className="md-missingImg">
              Image not found:
              <code className="md-code">{selected.relative}</code>
              <div className="md-missingHint">Make sure the file exists and is named exactly as listed.</div>
            </div>
          ) : (
            <div className="md-chartViewport" ref={chartViewportRef}>
              <div className="md-imgWrap">
                <img className="md-img" src={selected.src} alt={selected.title} loading="lazy" />
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

  return (
    <div className="md-page">
      <div className="md-container">
        {/* HERO */}
        {/* Hero Image */}
        <section className="hhp-hero">
          <img className="hhp-heroImg" src={migraineHeroImg} alt="Migraine Data" />

          <div className="hhp-heroOverlay">
            <div className="hhp-heroInner">
              <div className="hhp-heroEyebrow">HUMAN HEALTH PROJECT PROGRAM</div>
              <h1 className="hhp-heroTitle">Migraine Data</h1>
              {/* optional */}
              {/* <div className="hhp-heroSub">General Information</div> */}
            </div>
          </div>
        </section>
        <header className="md-hero md-curvedCard">
          <h1 className="md-title">Migraine Data</h1>

          <p>
            Migraines are a headache disorder characterized by recurrent headaches that range from moderate to
            severe.
          </p>
          <p>
            Typically, the headaches affect one-half of the head, are pulsating in nature, and last from two to
            72 hours. Associated symptoms may include nausea, vomiting, and sensitivity to light, sound, or
            smell. The pain is generally made worse by physical activity. Up to one-third of people have an
            aura: typically a short period of visual disturbance which signals that a headache will soon occur.
            Occasionally, an aura can occur with little or no headache following it.
          </p>
          <p>
            Migraines are believed to be due to a mixture of environmental and genetic factors. About
            two-thirds of cases run in families. Changing hormone levels may also play a role, as migraines
            affect slightly more boys than girls before puberty and two to three times more women than men. The
            risk of migraines usually decreases during pregnancy. The underlying mechanisms are not fully known.
            It is, however, believed to involve the nerves and blood vessels of the brain.
          </p>

          <div className="md-note">
            <strong>PLEASE NOTE:</strong> The data in the links below was collected from 2016 to 2020 and as a
            result some of it may now be out of date.
          </div>
        </header>

        {/* Layout after hero */}
        <div className="md-layout md-layoutAfterHero">
          {/* LEFT */}
          <aside className="md-sidebar">
            <div className="md-sidebarInner md-curvedCard">
              {groups.map((group) => {
                const isOpen = !!openSections[group.title];

                return (
                  <div key={group.title} className="md-menuGroup">
                    <button
                      type="button"
                      className="md-menuHeader"
                      onClick={() => toggleSection(group.title)}
                      aria-expanded={isOpen}
                    >
                      <span>{group.title}</span>
                      <span className={`md-caret ${isOpen ? "open" : ""}`}>▾</span>
                    </button>

                    {isOpen && (
                      <div className="md-menuItems">
                        {group.items.map((item) => {
                          const isActive =
                            selected?.title === item.label &&
                            selected?.relative === `${group.folder}/${item.file}`;

                          return (
                            <button
                              key={`${group.folder}/${item.file}`}
                              type="button"
                              className={`md-menuItem ${isActive ? "active" : ""}`}
                              onClick={() => handleClickItem(group, item)}
                            >
                              {item.label}
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </aside>

          {/* RIGHT */}
          <main className="md-content">
            <SelectedChart />

            {/* Share & Learn (curved card) */}
            <section className="md-shareLearn">
              <h2 className="md-blueTitle">Share &amp; Learn</h2>

              <div className="md-curvedCard md-padLg">
                <div className="md-twoCol">
                  <div className="md-imageFrame">
                    <img src={shareLearnLupusImg} alt="Share and Learn" />
                  </div>

                  <div className="md-twoColText">
                    <p className="md-centerText">
                      Lupus is an autoimmune disease that occurs when the immune system attacks tissues and organs.
                    </p>

                    <Link
                      to="/shared-patient-information/lupus"
                      className="md-btn"
                      aria-label="View Lupus Data"
                    >
                      VIEW LUPUS DATA
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Stay Connected (curved light-blue card) */}
            <section className="md-stayConnectedWrap">
              <div className="md-curvedCard md-stayConnectedCard">
                <h2 className="md-blueTitle">Stay Connected for New Condition Launches!</h2>
                <p className="md-centerText md-stayDesc">
                  Are you interested in learning more about similar conditions and other programs the Human Health
                  Project has to offer? Stay connect as HHP develops and launches new programs!
                </p>

                <div className="md-centerRow">
                  <Link
                    to="/signup"
                    className="md-btn"
                    aria-label="Learn More"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </section>

            {/* Other Services (curved cards) */}
            <section className="md-otherServices">
              <h2 className="md-blueTitle md-blueTitleLines">
                Learn More About Our Other Services
              </h2>

              <div className="md-servicesGrid">
                <div className="md-serviceCard md-curvedCard">
                  <div className="md-imageFrame">
                    <img src={patientAdvocacyImg} alt="Patient Advocacy" />
                  </div>
                  <div className="md-serviceTitle">Patient Advocacy</div>
                  <p className="md-serviceDesc">
                    HHP provides access to a supportive peer-to-peer community.
                  </p>

                  <Link
                    to="/what-we-do/patient-advocacy/los-angeles"
                    className="md-btn"
                    aria-label="View Services"
                  >
                    VIEW SERVICES
                  </Link>
                </div>

                <div className="md-serviceCard md-curvedCard">
                  <div className="md-imageFrame">
                    <img src={patientEducationImg} alt="Patient Education" />
                  </div>
                  <div className="md-serviceTitle">Patient Education</div>
                  <p className="md-serviceDesc">
                    We help patients through education and peer-to-peer information.
                  </p>

                  <Link
                    to="/what-we-do/learning-academy/videos"
                    className="md-btn"
                    aria-label="Learn More Patient Education"
                  >
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </section>

            {/* Join strip (curved gray card) */}
            <section className="md-joinStrip">
              <div className="md-joinCard md-curvedCard">
                <div className="md-joinText">
                  <div>Our project is growing and we want you to be a part of it.</div>
                  <div className="md-joinTagline">
                    More People. More Information. Better Health.
                  </div>
                </div>

                <Link
                  to="/signup"
                  className="md-btn md-joinBtn"
                  aria-label="Join Us"
                >
                  JOIN US!
                </Link>
              </div>
            </section>
          </main>
        </div>
      </div>
    </div>
  );
}
