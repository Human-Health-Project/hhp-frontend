import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import "./LupusReports.css";

/* Hero */
import lupusHeroImg from "../assets/lupus/after-charts/lupus-hero.png";

/* After-charts images */
import shareLearnMigraineImg from "../assets/lupus/after-charts/share-learn-migraine.png";
import patientAdvocacyImg from "../assets/lupus/after-charts/service-patient-advocacy.jpg";
import patientEducationImg from "../assets/lupus/after-charts/service-patient-education.png";

/**
 * Auto-load every .png chart under src/assets/lupus/charts/
 */
const chartImages = import.meta.glob("../assets/lupus/charts/**/*.png", {
  eager: true,
  import: "default",
});

function getChartSrc(relativePathFromChartsRoot) {
  const key = `../assets/lupus/charts/${relativePathFromChartsRoot}`;
  return chartImages[key] || null;
}

export default function LupusData() {
  const groups = useMemo(
    () => [
      {
        title: "General Information",
        folder: "general-information",
        items: [
          { label: "Age", file: "age.png" },
          { label: "Gender", file: "gender.png" },
          {
            label: "General Health",
            files: ["general-health.png", "general-health-1.png", "general-health-2.png"],
          },
          { label: "Quality of Life", file: "quality-of-life.png" },
          { label: "Heredity", file: "heredity.png" },
          { label: "Healthcare Provider", file: "healthcare-provider.png" },
          { label: "Ethnicity", file: "ethnicity.png" },
          { label: "Country of Residence", file: "country-of-residence.png" },
          { label: "Response Map", file: "response-map.png" },
        ],
      },
      { title: "Causes", folder: "causes", items: [{ label: "Causes", files:[ "causes.png", "causes-1.png" ],}] },
      {
        title: "Symptoms",
        folder: "symptoms",
        items: [
          { label: "Severity", file: "severity.png" },
          { label: "Duration", file: "duration.png" },
          { label: "Frequency", file: "frequency.png" },
          { label: "Onset", files: ["onset.png", "onset-1.png" ]},
          { label: "Hormonal Changes", file: "hormonal-changes.png" },
        ],
      },
      {
        title: "Lifestyle Changes",
        folder: "lifestyle-changes",
        items: [
          { label: "Types of Changes", file: "types-of-changes.png" },
          { label: "Efficacy", file: "efficacy.png" },
          { label: "Side Effects", file: "side-effects.png" },
          { label: "Adherence", file: "adherence.png" },
        ],
      },
      {
        title: "Natural/Alt. Treatments",
        folder: "natural-alt-treatments",
        items: [
          { label: "Types of Treatments", file: "types-of-treatments.png" },
          { label: "Efficacy", file: "efficacy.png" },
          { label: "Adherence", file: "adherence.png" },
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

  /**
   * selected shape:
   * {
   *   title: string,
   *   key: string,               // used for active menu item
   *   images: [{ src, relative }]
   * }
   */
  const [selected, setSelected] = useState(null);

  const toggleSection = (title) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  const handleClickItem = (group, item) => {
    const files = item.files || [item.file];

    const images = files.map((f) => ({
      src: getChartSrc(`${group.folder}/${f}`),
      relative: `${group.folder}/${f}`,
    }));

    const key = `${group.folder}/${item.label}`;

    setSelected({ title: item.label, key, images });

    // scroll page to chart
    const el = document.getElementById("ld-chart-area");
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });

    // reset inner chart scroll to top
    requestAnimationFrame(() => {
      const viewport = document.querySelector(".ld-chartViewport");
      if (viewport) viewport.scrollTop = 0;
    });
  };

  const SelectedChart = () => {
    if (!selected) {
      return (
        <div className="ld-emptyState ld-curvedCard" id="ld-chart-area">
          <div className="ld-emptyTitle">Charts</div>
          <div className="ld-emptyText">Select any subcategory on the left to view its chart.</div>
        </div>
      );
    }

    return (
      <section id="ld-chart-area" className="ld-section">
        <div className="ld-card ld-curvedCard">
          <h3 className="ld-cardTitle">{selected.title}</h3>

          <div className="ld-chartViewport">
            <div className="ld-chartStack">
              {selected.images.map((img, idx) => (
                <div className="ld-imgWrap" key={`${img.relative}-${idx}`}>
                  {img.src ? (
                    <img
                      className="ld-img"
                      src={img.src}
                      alt={`${selected.title} ${idx + 1}`}
                      loading="lazy"
                    />
                  ) : (
                    <div className="ld-missingImg">
                      Image not found:
                      <code className="ld-code">{img.relative}</code>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="ld-page">
      {/* HERO IMAGE (exact HHP edit) */}
      <section className="hhp-hero">
        <img
          className="hhp-heroImg"
          src={lupusHeroImg}
          alt="Lupus Data"
          style={{ objectFit: "cover", objectPosition: "center 15%" }}
        />
        <div className="hhp-heroOverlay">
          <div className="hhp-heroInner">
            <div className="hhp-heroEyebrow">HUMAN HEALTH PROJECT PROGRAM</div>
            <h1 className="hhp-heroTitle">Lupus Data</h1>
          </div>
        </div>
      </section>

      <div className="ld-container">
        {/* Description card */}
        <header className="ld-hero ld-curvedCard">
          <p>
            Lupus is an autoimmune disease that occurs when the immune system attacks tissues and organs.
          </p>

          <p>
            Inflammation caused by lupus can damage many different parts of the body including the joints, skin, kidneys,
            blood cells, brain, heart, and lungs.
          </p>

          <p><strong>There are several types of lupus:</strong></p>

          <ul className="ld-bulletList">
            <li>
              <strong>Systemic lupus erythematosus (SLE):</strong> The most common type.
              It can be mild or severe and can affect many parts of the body.
            </li>

            <li>
              <strong>Cutaneous lupus:</strong> Includes chronic cutaneous lupus (CCLE),
              subacute cutaneous lupus (SCLE), and acute cutaneous lupus (ACLE).
            </li>

            <li>
              <strong>Drug-induced lupus:</strong> Caused by certain prescription drugs.
            </li>

            <li>
              <strong>Neonatal lupus:</strong> A rare type affecting newborns, caused by
              the transfer of lupus antibodies from mother to fetus.
            </li>

            <li>
              Lupus can be difficult to diagnose because its signs and symptoms can be vague, and often mimic those of other
              conditions. Lupus is more common in women of childbearing age; however, men, children, and teenagers can develop lupus as
              well. The disease can affect all ages, but people with lupus usually develop the disease between the ages of
              15-44.
            </li>
          </ul>
          <p>
            Researchers believe that lupus develops in response to a combination of factors both inside and outside the
            body, including hormones, genetics, and environment. It appears that people with an inherited predisposition
            for lupus may develop the disease when they are exposed to something in the environment that can trigger lupus.
            The cause of lupus in most cases, however, is unknown.
          </p>

          <div className="ld-note">
            <strong>PLEASE NOTE:</strong> The data in the links below was collected from 2016 to 2020 and as a result some
            of it may now be out of date.
          </div>
        </header>

        {/* Layout */}
        <div className="ld-layout ld-layoutAfterHero">
          {/* LEFT */}
          <aside className="ld-sidebar">
            <div className="ld-sidebarInner ld-curvedCard">
              {groups.map((group) => {
                const isOpen = !!openSections[group.title];

                return (
                  <div key={group.title} className="ld-menuGroup">
                    <button
                      type="button"
                      className="ld-menuHeader"
                      onClick={() => toggleSection(group.title)}
                      aria-expanded={isOpen}
                    >
                      <span>{group.title}</span>
                      <span className={`ld-caret ${isOpen ? "open" : ""}`}>▾</span>
                    </button>

                    {isOpen && (
                      <div className="ld-menuItems">
                        {group.items.map((item) => {
                          const itemKey = `${group.folder}/${item.label}`;
                          const isActive = selected?.key === itemKey;

                          return (
                            <button
                              key={itemKey}
                              type="button"
                              className={`ld-menuItem ${isActive ? "active" : ""}`}
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
          <main className="ld-content">
            <SelectedChart />

            {/* Share & Learn */}
            <section className="ld-shareLearn">
              <h2 className="ld-blueTitle">Share &amp; Learn</h2>

              <div className="ld-curvedCard ld-padLg">
                <div className="ld-twoCol">
                  <div className="ld-imageFrame">
                    <img src={shareLearnMigraineImg} alt="Share and Learn" />
                  </div>

                  <div className="ld-twoColText">
                    <p className="ld-centerText">
                      Migraines are a headache disorder characterized by recurrent headaches that range from
                      moderate to severe.
                    </p>

                    <Link to="/shared-patient-information/migraine" className="ld-btn" aria-label="View Migraine Data">
                      VIEW MIGRAINE DATA
                    </Link>
                  </div>
                </div>
              </div>
            </section>

            {/* Stay Connected */}
            <section className="ld-stayConnectedWrap">
              <div className="ld-curvedCard ld-stayConnectedCard">
                <h2 className="ld-blueTitle">Stay Connected for New Condition Launches!</h2>
                <p className="ld-centerText ld-stayDesc">
                  Are you interested in learning more about similar conditions and other programs the Human Health
                  Project has to offer? Stay connect as HHP develops and launches new programs!
                </p>
                <div className="ld-centerRow">
                  <Link to="/signup" className="ld-btn" aria-label="Learn More">
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </section>

            {/* Other Services */}
            <section className="ld-otherServices">
              <h2 className="ld-blueTitle ld-blueTitleLines">Learn More About Our Other Services</h2>

              <div className="ld-servicesGrid">
                <div className="ld-serviceCard ld-curvedCard">
                  <div className="ld-imageFrame">
                    <img src={patientAdvocacyImg} alt="Patient Advocacy" />
                  </div>
                  <div className="ld-serviceTitle">Patient Advocacy</div>
                  <p className="ld-serviceDesc">HHP provides access to a supportive peer-to-peer community.</p>
                  <Link to="/what-we-do/patient-advocacy/los-angeles" className="ld-btn" aria-label="View Services">
                    VIEW SERVICES
                  </Link>
                </div>

                <div className="ld-serviceCard ld-curvedCard">
                  <div className="ld-imageFrame">
                    <img src={patientEducationImg} alt="Patient Education" />
                  </div>
                  <div className="ld-serviceTitle">Patient Education</div>
                  <p className="ld-serviceDesc">We help patients through education and peer-to-peer information.</p>
                  <Link to="/what-we-do/learning-academy/videos" className="ld-btn" aria-label="Learn More Patient Education">
                    LEARN MORE
                  </Link>
                </div>
              </div>
            </section>

            {/* Join strip */}
            <section className="ld-joinStrip">
              <div className="ld-joinCard ld-curvedCard">
                <div className="ld-joinText">
                  <div>Our project is growing and we want you to be a part of it.</div>
                  <div className="ld-joinTagline">More People. More Information. Better Health.</div>
                </div>

                <Link to="/signup" className="ld-btn ld-joinBtn" aria-label="Join Us">
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
