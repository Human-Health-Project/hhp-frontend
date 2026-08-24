// src/layout/Header.jsx
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useAuth } from "../context/AuthContext";
import "./Header.css";

export default function Header() {
  const { currentUser, logout } = useAuth();
  const navigate = useNavigate();

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
      navigate("/");
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
      <Link to="join-patient-advisory-board" className="hhp-topbar-link" onClick={closeMobile}>
        Join Our Patient Advisory Board – Learn More
      </Link>
    </div>

    {/* Sticky header only */}
    <header className="hhp-header">
      <div className="hhp-header-inner">
        {/* LOGO */}
        <Link to="/" className="hhp-logo-link" onClick={closeMobile}>
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
            <NavLink to="/medical-disclaimer" className="nav-item">
              MEDICAL DISCLAIMER
            </NavLink>

            <div className="dropdown">
              <span className="nav-item">WHO WE ARE ▾</span>
              <div className="dropdown-menu">
                <NavLink to="/who-we-are/about-us">ABOUT US</NavLink>
                <NavLink to="/who-we-are/meet-the-team">MEET THE TEAM</NavLink>
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
                    <NavLink to="/what-we-do/healthcare-access/introduction">INTRODUCTION</NavLink>

                    <div className="dropdown-submenu nested">
                      <span className="submenu-title">
                        PATIENT ADVOCACY <span>›
                        </span>
                      </span>
                      <div className="dropdown-submenu-menu">
                        <NavLink to="/what-we-do/patient-advocacy/northern-ireland">
                          PATIENT ADVOCACY - NORTHERN IRELAND
                        </NavLink>
                        <NavLink to="/what-we-do/patient-advocacy/los-angeles">
                          PATIENT ADVOCACY - LOS ANGELES
                        </NavLink>
                      </div>
                    </div>

                    <div className="dropdown-submenu nested">
                      <span className="submenu-title">
                        LEARNING ACADEMY <span>›</span>
                      </span>
                      <div className="dropdown-submenu-menu">
                        <NavLink to="/what-we-do/learning-academy/videos">LEARNING ACADEMY VIDEOS</NavLink>
                        <NavLink to="/what-we-do/learning-academy/english">LEARNING ACADEMY - ENGLISH</NavLink>
                        <NavLink to="/what-we-do/learning-academy/spanish">LEARNING ACADEMY - SPANISH</NavLink>
                        <NavLink to="/what-we-do/learning-academy/mandarin">LEARNING ACADEMY - MANDARIN</NavLink>
                      </div>
                    </div>

                    <NavLink to="/what-we-do/online-events">ONLINE EVENTS</NavLink>
                  </div>
                </div>

                <div className="dropdown-submenu">
                  <span className="submenu-title">
                    STOP TYPE 2 DIABETES <span>›</span>
                  </span>
                  <div className="dropdown-submenu-menu">
                    <NavLink to="/what-we-do/stop-type-2-diabetes/introduction">INTRODUCTION</NavLink>
                  </div>
                </div>

                <div className="dropdown-submenu">
                  <span className="submenu-title">
                    SHARED PATIENT INFORMATION <span>›</span>
                  </span>
                  <div className="dropdown-submenu-menu">
                    <NavLink to="/what-we-do/shared-patient-information">INTRODUCTION</NavLink>
                    <NavLink to="/shared-patient-information/migraine">MIGRAINE</NavLink>
                    <NavLink to="/shared-patient-information/lupus">LUPUS</NavLink>
                    <NavLink to="/shared-patient-information/narratives">NARRATIVES</NavLink>
                  </div>
                </div>
              </div>
            </div>

            <div className="dropdown">
              <span className="nav-item">WHY HHP ▾</span>
              <div className="dropdown-menu">
                <NavLink to="/why-hhp/who-we-serve">WHO WE SERVE</NavLink>
              </div>
            </div>

            <div className="dropdown">
              <span className="nav-item">HOW TO HELP ▾</span>
              <div className="dropdown-menu">
                <NavLink to="/how-to-help/">SUPPORT HHP</NavLink>
                <NavLink
                  to="/how-to-help#volunteer"
                  onClick={(e) => {
                    // force scroll to volunteer section on same page even if router doesn't "navigate"
                    requestAnimationFrame(() => {
                      const el = document.querySelector("#volunteer");
                      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
                    });
                  }}
                >
                  VOLUNTEER
                </NavLink>
                <NavLink to="/how-to-help/intern">INTERN</NavLink>
                <NavLink to="/how-to-help/become-hhp-partner">BECOME A HHP PARTNER</NavLink>
                <NavLink to="/how-to-help/matching-donations">MATCHING DONATIONS</NavLink>
              </div>
            </div>
            <div className="dropdown">
              <span className="nav-item">NEWS ▾</span>
              <div className="dropdown-menu">
                <NavLink to="/latest-news">LATEST NEWS</NavLink>

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
          <NavLink to="/donate" className="btn btn-primary donate-btn hhp-desktop-only">
            DONATE
          </NavLink>

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
            <NavLink to="/login" className="btn btn-secondary join-btn hhp-desktop-only">
              JOIN US / LOG IN
            </NavLink>
          )}
        </div>
      </div>

      {/* MOBILE MENU PANEL */}
      {mobileOpen && (
        <div className="hhp-mobile-panel" role="navigation" aria-label="Mobile menu">
          <NavLink to="/medical-disclaimer" className="hhp-mobile-link" onClick={closeMobile}>
            MEDICAL DISCLAIMER
          </NavLink>

          {/* WHO WE ARE */}
          <button className="hhp-mobile-acc" type="button" onClick={() => toggle("who")} aria-expanded={openGroup.who}>
            WHO WE ARE <span className="hhp-mobile-chevron">{openGroup.who ? "–" : "+"}</span>
          </button>
          {openGroup.who && (
            <div className="hhp-mobile-sub">
              <NavLink to="/who-we-are/about-us" className="hhp-mobile-sublink" onClick={closeMobile}>
                ABOUT US
              </NavLink>
              <NavLink to="/who-we-are/meet-the-team" className="hhp-mobile-sublink" onClick={closeMobile}>
                MEET THE TEAM
              </NavLink>
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
                  <NavLink
                    to="/what-we-do/healthcare-access/introduction"
                    className="hhp-mobile-sublink"
                    onClick={closeMobile}
                  >
                    INTRODUCTION
                  </NavLink>

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
                      <NavLink
                        to="/what-we-do/patient-advocacy/northern-ireland"
                        className="hhp-mobile-sublink"
                        onClick={closeMobile}
                      >
                        NORTHERN IRELAND
                      </NavLink>
                      <NavLink
                        to="/what-we-do/patient-advocacy/los-angeles"
                        className="hhp-mobile-sublink"
                        onClick={closeMobile}
                      >
                        LOS ANGELES
                      </NavLink>
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
                      <NavLink
                        to="/what-we-do/learning-academy/videos"
                        className="hhp-mobile-sublink"
                        onClick={closeMobile}
                      >
                        VIDEOS
                      </NavLink>
                      <NavLink
                        to="/what-we-do/learning-academy/english"
                        className="hhp-mobile-sublink"
                        onClick={closeMobile}
                      >
                        ENGLISH
                      </NavLink>
                      <NavLink
                        to="/what-we-do/learning-academy/spanish"
                        className="hhp-mobile-sublink"
                        onClick={closeMobile}
                      >
                        SPANISH
                      </NavLink>
                      <NavLink
                        to="/what-we-do/learning-academy/mandarin"
                        className="hhp-mobile-sublink"
                        onClick={closeMobile}
                      >
                        MANDARIN
                      </NavLink>
                    </div>
                  )}

                  <NavLink to="/what-we-do/online-events" className="hhp-mobile-sublink" onClick={closeMobile}>
                    ONLINE EVENTS
                  </NavLink>
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
                  <NavLink
                    to="/what-we-do/stop-type-2-diabetes/introduction"
                    className="hhp-mobile-sublink"
                    onClick={closeMobile}
                  >
                    INTRODUCTION
                  </NavLink>
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
                  <NavLink
                    to="/what-we-do/shared-patient-information"
                    className="hhp-mobile-sublink"
                    onClick={closeMobile}
                  >
                    INTRODUCTION
                  </NavLink>
                  <NavLink
                    to="/shared-patient-information/migraine"
                    className="hhp-mobile-sublink"
                    onClick={closeMobile}
                  >
                    MIGRAINE
                  </NavLink>
                  <NavLink
                    to="/shared-patient-information/lupus"
                    className="hhp-mobile-sublink"
                    onClick={closeMobile}
                  >
                    LUPUS
                  </NavLink>
                  <NavLink
                    to="/shared-patient-information/narratives"
                    className="hhp-mobile-sublink"
                    onClick={closeMobile}
                  >
                    NARRATIVES
                  </NavLink>
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
              <NavLink to="/why-hhp/who-we-serve" className="hhp-mobile-sublink" onClick={closeMobile}>
                WHO WE SERVE
              </NavLink>
            </div>
          )}

          {/* HOW TO HELP */}
          <button className="hhp-mobile-acc" type="button" onClick={() => toggle("help")} aria-expanded={openGroup.help}>
            HOW TO HELP <span className="hhp-mobile-chevron">{openGroup.help ? "–" : "+"}</span>
          </button>
          {openGroup.help && (
            <div className="hhp-mobile-sub">
              <NavLink to="/how-to-help/" className="hhp-mobile-sublink" onClick={closeMobile}>
                SUPPORT HHP
              </NavLink>
              <NavLink to="/how-to-help/#volunteer" className="hhp-mobile-sublink" onClick={closeMobile}>
                VOLUNTEER
              </NavLink>
              <NavLink to="/how-to-help/intern" className="hhp-mobile-sublink" onClick={closeMobile}>
                INTERN
              </NavLink>
              <NavLink to="/how-to-help/become-hhp-partner" className="hhp-mobile-sublink" onClick={closeMobile}>
                BECOME A HHP PARTNER
              </NavLink>
              <NavLink to="/how-to-help/matching-donations" className="hhp-mobile-sublink" onClick={closeMobile}>
                MATCHING DONATIONS
              </NavLink>
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
              <NavLink
                to="/latest-news"
                className="hhp-mobile-sublink"
                onClick={closeMobile}
              >
                LATEST NEWS
              </NavLink>

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
            <NavLink to="/donate" className="hhp-mobile-btn hhp-mobile-btn--primary" onClick={closeMobile}>
              DONATE
            </NavLink>

            {currentUser ? (
              <button className="hhp-mobile-btn hhp-mobile-btn--danger" type="button" onClick={handleLogout}>
                LOG OUT
              </button>
            ) : (
              <NavLink to="/login" className="hhp-mobile-btn hhp-mobile-btn--outline" onClick={closeMobile}>
                JOIN US / LOG IN
              </NavLink>
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
