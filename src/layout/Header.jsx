"use client";

// src/layout/Header.jsx
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./Header.css";

export default function Header() {
  const { currentUser, logout } = useAuth();
  const router = useRouter();

  const [mobileOpen, setMobileOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState({
    who: false,
    what: false,
    why: false,
    help: false,
    healthcareAccess: false,
    patientAdvocacy: false,
    learningAcademy: false,
    stopT2D: false,
    spi: false,
    newSection: false,
  });

  const toggle = (key) => setOpenGroup((s) => ({ ...s, [key]: !s[key] }));
  const closeMobile = () => setMobileOpen(false);

  useEffect(() => {
    if (!mobileOpen) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [mobileOpen]);

  const handleLogout = async () => {
    try {
      await logout();
      closeMobile();
      router.push("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const getUserDisplayName = () => {
    if (currentUser?.displayName) return currentUser.displayName.split(" ")[0];
    if (currentUser?.email) return currentUser.email.split("@")[0];
    return "User";
  };

return (
  <>
    {/* Non-sticky announcement bar (scrolls away) */}
    <div className="hhp-topbar">
      <Link href="/join-patient-advisory-board" prefetch={false} className="hhp-topbar-link" onClick={closeMobile}>
        Join Our Patient Advisory Board – Learn More
      </Link>
    </div>

    {/* Sticky header only */}
    <header className="hhp-header">
      <div className="hhp-header-inner">
        {/* LOGO */}
        <Link href="/" className="hhp-logo-link" onClick={closeMobile}>
          <img src="/hhp-logo.png" alt="Human Health Project" className="hhp-logo" />
        </Link>

        {/* RIGHT SIDE */}
        <div className="hhp-header-right">
          {/* MOBILE: hamburger only (icon-only; shown on mobile via CSS) */}
          <button
            type="button"
            className="hhp-mobile-toggle"
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((v) => !v)}
          >
            <span className="hhp-mobile-toggle-icon">{mobileOpen ? "✕" : "☰"}</span>
          </button>

          {/* DESKTOP NAV */}
          <nav className="hhp-nav">
            <Link href="/medical-disclaimer" className="nav-item">
              MEDICAL DISCLAIMER
            </Link>

            <div className="dropdown">
              <span className="nav-item">WHO WE ARE ▾</span>
              <div className="dropdown-menu">
                <Link href="/who-we-are/about-us">ABOUT US</Link>
                <Link href="/who-we-are/meet-the-team">MEET THE TEAM</Link>
              </div>
            </div>

            <div className="dropdown">
              <span className="nav-item">WHAT WE DO ▾</span>

              <div className="dropdown-menu">
                <div className="dropdown-submenu">
                  <span className="submenu-title">
                    HEALTHCARE ACCESS <span>›</span>
                  </span>

                  <div className="dropdown-submenu-menu">
                    <Link href="/what-we-do/healthcare-access/introduction">INTRODUCTION</Link>

                    <div className="dropdown-submenu nested">
                      <span className="submenu-title">
                        PATIENT ADVOCACY <span>›
                        </span>
                      </span>
                      <div className="dropdown-submenu-menu">
                        <Link href="/what-we-do/patient-advocacy/northern-ireland">
                          PATIENT ADVOCACY - NORTHERN IRELAND
                        </Link>
                        <Link href="/what-we-do/patient-advocacy/los-angeles">
                          PATIENT ADVOCACY - LOS ANGELES
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown-submenu nested">
                      <span className="submenu-title">
                        LEARNING ACADEMY <span>›</span>
                      </span>
                      <div className="dropdown-submenu-menu">
                        <Link href="/what-we-do/learning-academy/videos">LEARNING ACADEMY VIDEOS</Link>
                        <Link href="/what-we-do/learning-academy/english">LEARNING ACADEMY - ENGLISH</Link>
                        <Link href="/what-we-do/learning-academy/spanish">LEARNING ACADEMY - SPANISH</Link>
                        <Link href="/what-we-do/learning-academy/mandarin">LEARNING ACADEMY - MANDARIN</Link>
                      </div>
                    </div>

                    <Link href="/what-we-do/online-events">ONLINE EVENTS</Link>
                  </div>
                </div>

                <div className="dropdown-submenu">
                  <span className="submenu-title">
                    STOP TYPE 2 DIABETES <span>›</span>
                  </span>
                  <div className="dropdown-submenu-menu">
                    <Link href="/what-we-do/stop-type-2-diabetes/introduction">INTRODUCTION</Link>
                  </div>
                </div>

                <div className="dropdown-submenu">
                  <span className="submenu-title">
                    SHARED PATIENT INFORMATION <span>›</span>
                  </span>
                  <div className="dropdown-submenu-menu">
                    <Link href="/what-we-do/shared-patient-information">INTRODUCTION</Link>
                    <Link href="/shared-patient-information/migraine">MIGRAINE</Link>
                    <Link href="/shared-patient-information/lupus">LUPUS</Link>
                    <Link href="/shared-patient-information/narratives">NARRATIVES</Link>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown">
              <span className="nav-item">WHY HHP ▾</span>
              <div className="dropdown-menu">
                <Link href="/why-hhp/who-we-serve">WHO WE SERVE</Link>
              </div>
            </div>

            <div className="dropdown">
              <span className="nav-item">HOW TO HELP ▾</span>
              <div className="dropdown-menu">
                <Link href="/how-to-help/">SUPPORT HHP</Link>
                <Link
                  href="/how-to-help#volunteer"
                  onClick={(e) => {
                    // force scroll to volunteer section on same page even if router doesn't "navigate"
                    requestAnimationFrame(() => {
                      const el = document.querySelector("#volunteer");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    });
                  }}
                >
                  VOLUNTEER
                </Link>
                <Link href="/how-to-help/intern">INTERN</Link>
                <Link href="/how-to-help/become-hhp-partner">BECOME A HHP PARTNER</Link>
                <Link href="/how-to-help/matching-donations">MATCHING DONATIONS</Link>
              </div>
            </div>
            <div className="dropdown">
              <span className="nav-item">NEWS ▾</span>
              <div className="dropdown-menu">
                <Link href="/latest-news">LATEST NEWS</Link>

                <a
                  href="https://humanhealthproject.org/blog/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  BLOGS
                </a>
              </div>
            </div>
          </nav>

          {/* DESKTOP-ONLY BUTTONS (hidden on mobile via CSS) */}
          <Link href="/donate" className="btn btn-primary donate-btn hhp-desktop-only">
            DONATE
          </Link>

          {currentUser ? (
            <div className="user-menu dropdown hhp-desktop-only">
              <span className="btn btn-secondary user-btn">{getUserDisplayName()} ▾</span>
              <div className="dropdown-menu user-dropdown">
                <span className="user-email">{currentUser.email}</span>
                <button onClick={handleLogout} className="logout-btn">
                  LOG OUT
                </button>
              </div>
            </div>
          ) : (
            <Link href="/login" className="btn btn-secondary join-btn hhp-desktop-only">
              JOIN US / LOG IN
            </Link>
          )}
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      {mobileOpen && (
        <div className="hhp-mobile-panel" role="navigation" aria-label="Mobile menu">
          <Link href="/medical-disclaimer" className="hhp-mobile-link" onClick={closeMobile}>
            MEDICAL DISCLAIMER
          </Link>

          {/* WHO WE ARE */}
          <button className="hhp-mobile-acc" type="button" onClick={() => toggle("who")} aria-expanded={openGroup.who}>
            WHO WE ARE <span className="hhp-mobile-chevron">{openGroup.who ? "–" : "+"}</span>
          </button>
          {openGroup.who && (
            <div className="hhp-mobile-sub">
              <Link href="/who-we-are/about-us" className="hhp-mobile-sublink" onClick={closeMobile}>
                ABOUT US
              </Link>
              <Link href="/who-we-are/meet-the-team" className="hhp-mobile-sublink" onClick={closeMobile}>
                MEET THE TEAM
              </Link>
            </div>
          )}

          {/* WHAT WE DO */}
          <button
            className="hhp-mobile-acc"
            type="button"
            onClick={() => toggle("what")}
            aria-expanded={openGroup.what}
          >
            WHAT WE DO <span className="hhp-mobile-chevron">{openGroup.what ? "–" : "+"}</span>
          </button>

          {openGroup.what && (
            <div className="hhp-mobile-sub">
              <button
                className="hhp-mobile-acc hhp-mobile-acc--nested"
                type="button"
                onClick={() => toggle("healthcareAccess")}
                aria-expanded={openGroup.healthcareAccess}
              >
                HEALTHCARE ACCESS <span className="hhp-mobile-chevron">{openGroup.healthcareAccess ? "–" : "+"}</span>
              </button>

              {openGroup.healthcareAccess && (
                <div className="hhp-mobile-sub hhp-mobile-sub--nested">
                  <Link
                    href="/what-we-do/healthcare-access/introduction"
                    className="hhp-mobile-sublink"
                    onClick={closeMobile}
                  >
                    INTRODUCTION
                  </Link>

                  <button
                    className="hhp-mobile-acc hhp-mobile-acc--nested2"
                    type="button"
                    onClick={() => toggle("patientAdvocacy")}
                    aria-expanded={openGroup.patientAdvocacy}
                  >
                    PATIENT ADVOCACY{" "}
                    <span className="hhp-mobile-chevron">{openGroup.patientAdvocacy ? "–" : "+"}</span>
                  </button>
                  {openGroup.patientAdvocacy && (
                    <div className="hhp-mobile-sub hhp-mobile-sub--nested2">
                      <Link
                        href="/what-we-do/patient-advocacy/northern-ireland"
                        className="hhp-mobile-sublink"
                        onClick={closeMobile}
                      >
                        NORTHERN IRELAND
                      </Link>
                      <Link
                        href="/what-we-do/patient-advocacy/los-angeles"
                        className="hhp-mobile-sublink"
                        onClick={closeMobile}
                      >
                        LOS ANGELES
                      </Link>
                    </div>
                  )}

                  <button
                    className="hhp-mobile-acc hhp-mobile-acc--nested2"
                    type="button"
                    onClick={() => toggle("learningAcademy")}
                    aria-expanded={openGroup.learningAcademy}
                  >
                    LEARNING ACADEMY{" "}
                    <span className="hhp-mobile-chevron">{openGroup.learningAcademy ? "–" : "+"}</span>
                  </button>
                  {openGroup.learningAcademy && (
                    <div className="hhp-mobile-sub hhp-mobile-sub--nested2">
                      <Link
                        href="/what-we-do/learning-academy/videos"
                        className="hhp-mobile-sublink"
                        onClick={closeMobile}
                      >
                        VIDEOS
                      </Link>
                      <Link
                        href="/what-we-do/learning-academy/english"
                        className="hhp-mobile-sublink"
                        onClick={closeMobile}
                      >
                        ENGLISH
                      </Link>
                      <Link
                        href="/what-we-do/learning-academy/spanish"
                        className="hhp-mobile-sublink"
                        onClick={closeMobile}
                      >
                        SPANISH
                      </Link>
                      <Link
                        href="/what-we-do/learning-academy/mandarin"
                        className="hhp-mobile-sublink"
                        onClick={closeMobile}
                      >
                        MANDARIN
                      </Link>
                    </div>
                  )}

                  <Link href="/what-we-do/online-events" className="hhp-mobile-sublink" onClick={closeMobile}>
                    ONLINE EVENTS
                  </Link>
                </div>
              )}

              <button
                className="hhp-mobile-acc hhp-mobile-acc--nested"
                type="button"
                onClick={() => toggle("stopT2D")}
                aria-expanded={openGroup.stopT2D}
              >
                STOP TYPE 2 DIABETES <span className="hhp-mobile-chevron">{openGroup.stopT2D ? "–" : "+"}</span>
              </button>
              {openGroup.stopT2D && (
                <div className="hhp-mobile-sub hhp-mobile-sub--nested">
                  <Link
                    href="/what-we-do/stop-type-2-diabetes/introduction"
                    className="hhp-mobile-sublink"
                    onClick={closeMobile}
                  >
                    INTRODUCTION
                  </Link>
                </div>
              )}

              <button
                className="hhp-mobile-acc hhp-mobile-acc--nested"
                type="button"
                onClick={() => toggle("spi")}
                aria-expanded={openGroup.spi}
              >
                SHARED PATIENT INFORMATION{" "}
                <span className="hhp-mobile-chevron">{openGroup.spi ? "–" : "+"}</span>
              </button>

              {openGroup.spi && (
                <div className="hhp-mobile-sub hhp-mobile-sub--nested">
                  <Link
                    href="/what-we-do/shared-patient-information"
                    className="hhp-mobile-sublink"
                    onClick={closeMobile}
                  >
                    INTRODUCTION
                  </Link>
                  <Link
                    href="/shared-patient-information/migraine"
                    className="hhp-mobile-sublink"
                    onClick={closeMobile}
                  >
                    MIGRAINE
                  </Link>
                  <Link
                    href="/shared-patient-information/lupus"
                    className="hhp-mobile-sublink"
                    onClick={closeMobile}
                  >
                    LUPUS
                  </Link>
                  <Link
                    href="/shared-patient-information/narratives"
                    className="hhp-mobile-sublink"
                    onClick={closeMobile}
                  >
                    NARRATIVES
                  </Link>
                </div>
              )}
            </div>
          )}

          {/* WHY HHP */}
          <button className="hhp-mobile-acc" type="button" onClick={() => toggle("why")} aria-expanded={openGroup.why}>
            WHY HHP <span className="hhp-mobile-chevron">{openGroup.why ? "–" : "+"}</span>
          </button>
          {openGroup.why && (
            <div className="hhp-mobile-sub">
              <Link href="/why-hhp/who-we-serve" className="hhp-mobile-sublink" onClick={closeMobile}>
                WHO WE SERVE
              </Link>
            </div>
          )}

          {/* HOW TO HELP */}
          <button className="hhp-mobile-acc" type="button" onClick={() => toggle("help")} aria-expanded={openGroup.help}>
            HOW TO HELP <span className="hhp-mobile-chevron">{openGroup.help ? "–" : "+"}</span>
          </button>
          {openGroup.help && (
            <div className="hhp-mobile-sub">
              <Link href="/how-to-help/" className="hhp-mobile-sublink" onClick={closeMobile}>
                SUPPORT HHP
              </Link>
              <Link href="/how-to-help/#volunteer" className="hhp-mobile-sublink" onClick={closeMobile}>
                VOLUNTEER
              </Link>
              <Link href="/how-to-help/intern" className="hhp-mobile-sublink" onClick={closeMobile}>
                INTERN
              </Link>
              <Link href="/how-to-help/become-hhp-partner" className="hhp-mobile-sublink" onClick={closeMobile}>
                BECOME A HHP PARTNER
              </Link>
              <Link href="/how-to-help/matching-donations" className="hhp-mobile-sublink" onClick={closeMobile}>
                MATCHING DONATIONS
              </Link>
            </div>
          )}

          <button
            className="hhp-mobile-acc"
            type="button"
            onClick={() => toggle("newSection")}
            aria-expanded={openGroup.newSection}
          >
            NEWS <span className="hhp-mobile-chevron">{openGroup.newSection ? "–" : "+"}</span>
          </button>

          {openGroup.newSection && (
            <div className="hhp-mobile-sub">
              <Link
                href="/latest-news"
                className="hhp-mobile-sublink"
                onClick={closeMobile}
              >
                LATEST NEWS
              </Link>

              <a
                href="https://humanhealthproject.org/blog/"
                className="hhp-mobile-sublink"
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMobile}
              >
                BLOGS
              </a>
            </div>
          )}

          {/* Bottom Buttons (Donate + Join/Login) */}
          <div className="hhp-mobile-bottom">
            <Link href="/donate" className="hhp-mobile-btn hhp-mobile-btn--primary" onClick={closeMobile}>
              DONATE
            </Link>

            {currentUser ? (
              <button className="hhp-mobile-btn hhp-mobile-btn--danger" type="button" onClick={handleLogout}>
                LOG OUT
              </button>
            ) : (
              <Link href="/login" className="hhp-mobile-btn hhp-mobile-btn--outline" onClick={closeMobile}>
                JOIN US / LOG IN
              </Link>
            )}
          </div>

          {currentUser && (
            <div className="hhp-mobile-email">
              Signed in as <span>{currentUser.email}</span>
            </div>
          )}
        </div>
      )}
    </header>
  </>
);
}
