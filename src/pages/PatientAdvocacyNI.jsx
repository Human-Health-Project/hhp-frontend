import "./PatientAdvocacyNI.css";
import heroImg from "../assets/patient_advocacy/patient-advocacy-ni-hero.jpg";
import workshopImg from "../assets/patient_advocacy/PatientAdvocacyWorkshop.jpg";
import learningImg from "../assets/patient_advocacy/LearningAcademy.jpg";
import sharedImg from "../assets/patient_advocacy/SharedPatientInformationProgram.jpg";
import onlineEventsImg from "../assets/patient_advocacy/OnlinePeertoPeerEvents.jpg";
import volunteersImg from "../assets/patient_advocacy/DedicatedVolunteers.jpg";
import partnershipsImg from "../assets/patient_advocacy/LocalPartnerships.jpg";
import { Link } from "react-router-dom";

export default function PatientAdvocacyNI() {
  return (
    <main className="pani-page">
      <header
        className="relative mx-18 h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-label="Patient Advocacy Northern Ireland header"
      >
        {/* Dark overlay for readability */}
        <div className="pani-heroOverlay"></div>

        <div className="relative z-10 text-center px-4">
          <h1 className="pani-title text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
            Patient Advocacy Workshops
          </h1>
          <h1
            className="text-center px-4 md:px-0 text-base! sm:text-lg! md:text-xl! lg:text-2xl!"
            style={{ color: "var(--pani-white)" }}
          >
            Understanding and Accessing Healthcare System In Northern Ireland
          </h1>
        </div>
      </header>

      {/* CONTENT */}
      <section className="pani-section">
        <div className="pani-container">
          <div className="pani-card">
            <h2
              className="pani-sectionTitle text-center"
              style={{ color: "var(--primary-color)" }}
            >
              Northern Ireland – Upcoming Workshops
            </h2>
            <p className="pani-body pani-noteStrong">
              All workshop times listed are in the local time zone.
            </p>

            {/* Dates removed intentionally */}
            <div className="pani-upcomingBox">
              <p>Upcoming workshop dates will be announced soon.</p>
            </div>

            {/* NEW SECTION — TEXT ONLY */}
            <p className="pani-body">
              These free online Zoom workshops are one hour long and cover:
            </p>

            <div className="pani-listBox">
              <ul className="pani-bullets">
                <li>
                  <strong>Knowing your Patient Rights:</strong> Understand the
                  full spectrum of your healthcare rights, including consent and
                  privacy, to better advocate for your health needs. Learn how
                  to navigate legal frameworks and resources to protect and
                  assert your rights effectively.
                </li>

                <li>
                  <strong>How to Stand up and Be Heard:</strong> Learn effective
                  communication strategies to ensure your voice is heard by
                  healthcare providers and policymakers.
                </li>

                <li>
                  <strong>How to Research Online as an ePatient:</strong> Gain
                  skills to find reliable health information online and
                  critically evaluate medical sources. Develop the ability to
                  discern credible websites and avoid misinformation while
                  accessing the latest research and treatment options.
                </li>

                <li>
                  <strong>Where to Get Help in Northern Ireland:</strong> How to
                  access your health records and how to make a complaint. How to
                  connect with your local representatives. Discover local
                  resources and organizations that offer support, advice, and
                  services for patients in Northern Ireland.
                </li>
              </ul>
            </div>

            <p className="pani-body pani-donateText">
              <br></br>
              Your gift, no matter the size, makes a meaningful difference in
              our mission to empower individuals to manage their health.
            </p>

            <p className="pani-body">
              Donate today and help us change lives for the better.
            </p>

            <div className="pani-ctaRow">
              <Link to="/donate" className="pani-button">
                DONATE NOW
              </Link>
            </div>
          </div>
          {/* TESTIMONIALS */}
          <section className="pani-testimonialsSection">
            <h2 className="pani-sectionTitle">Testimonials</h2>

            <div className="pani-testimonialsGrid">
              <div className="pani-quoteCard">
                <p className="pani-quoteText">
                  “Thank you so much for running the session. It was really
                  informative and helpful. I think with attending the sessions
                  I’m building on my knowledge of my condition and therefore my
                  confidence to advocate for myself.”
                </p>
                <p className="pani-quoteAuthor">Michelle M</p>
              </div>

              <div className="pani-quoteCard">
                <p className="pani-quoteText">
                  “I really found last week’s meeting (workshop) very
                  interesting. Thanks so much for all the great work you are
                  doing”
                </p>
                <p className="pani-quoteAuthor">Fiona O’ K</p>
              </div>
            </div>
          </section>

          {/* BOTTOM PROGRAM BLOCKS (image + text like screenshot) */}
          <section className="pani-programSection" aria-label="More programs">
            <div className="pani-programGrid">
              {/* 1 */}
              <div className="pani-programItem">
                <div className="pani-programImgWrap">
                  <img
                    className="pani-programImg"
                    src={workshopImg}
                    alt="Patient Advocacy Workshops"
                  />
                </div>
                <div className="pani-programContent">
                  <p className="pani-programTitle">
                    <Link
                      className="pani-titleLink"
                      to="/what-we-do/patient-advocacy/northern-ireland"
                    >
                      Patient Advocacy Workshops:
                    </Link>
                  </p>
                  <p className="pani-body">
                    Your generosity supports patient advocacy through Zoom
                    workshops for{" "}
                    <Link
                      className="pani-inlineLink"
                      to="/what-we-do/patient-advocacy/northern-ireland"
                    >
                      Northern Ireland
                    </Link>{" "}
                    and{" "}
                    <Link
                      className="pani-inlineLink"
                      to="/what-we-do/patient-advocacy/los-angeles"
                    >
                      Los Angeles
                    </Link>
                    . Gain confidence, understand your rights, and access
                    healthcare resources while fostering a community of informed
                    patients and allies.
                  </p>
                </div>
              </div>

              {/* 2 */}
              <div className="pani-programItem">
                <div className="pani-programImgWrap">
                  <img
                    className="pani-programImg"
                    src={learningImg}
                    alt="Learning Academy"
                  />
                </div>
                <div className="pani-programContent">
                  <p className="pani-programTitle">
                    <Link
                      className="pani-titleLink"
                      to="/what-we-do/learning-academy/english"
                    >
                      Learning Academy:
                    </Link>
                  </p>
                  <p className="pani-body">
                    The Learning Academy is designed for anyone interested in
                    becoming an empowered patient, empowered caregiver, or those
                    seeking to understand patient engagement and
                    patient-centered care.
                  </p>
                </div>
              </div>

              {/* 3 */}
              <div className="pani-programItem">
                <div className="pani-programImgWrap">
                  <img
                    className="pani-programImg"
                    src={sharedImg}
                    alt="Shared Patient Information Program"
                  />
                </div>
                <div className="pani-programContent">
                  <p className="pani-programTitle">
                    <Link
                      className="pani-titleLink"
                      to="/what-we-do/shared-patient-information"
                    >
                      Shared Patient Information Program:
                    </Link>
                  </p>
                  <p className="pani-body">
                    Support our Shared Patient Information Health surveys. We’ve
                    collected data on Migraine and Lupus and with your help, we
                    are actively working on adding more health conditions.
                  </p>
                </div>
              </div>

              {/* 4 */}
              <div className="pani-programItem">
                <div className="pani-programImgWrap">
                  <img
                    className="pani-programImg"
                    src={onlineEventsImg}
                    alt="Online Peer to Peer Events"
                  />
                </div>
                <div className="pani-programContent">
                  <p className="pani-programTitle">
                    <Link
                      className="pani-titleLink"
                      to="/what-we-do/online-events"
                    >
                      Online Peer to Peer Events:
                    </Link>
                  </p>
                  <p className="pani-body">
                    These events, which typically include a Learning Academy
                    course title, include patients and experts sharing their
                    experience and knowledge.
                  </p>
                </div>
              </div>

              {/* 5 */}
              <div className="pani-programItem">
                <div className="pani-programImgWrap">
                  <img
                    className="pani-programImg"
                    src={volunteersImg}
                    alt="Dedicated Volunteers"
                  />
                </div>
                <div className="pani-programContent">
                  <p className="pani-programTitle">
                    <Link
                      className="pani-titleLink"
                      to="/who-we-are/meet-the-team"
                    >
                      Dedicated Volunteers:
                    </Link>
                  </p>
                  <p className="pani-body">
                    The Human Health Project is made up of a small core staff
                    with over 100 volunteers, 30+ board members, and advisers
                    spread around the world. These dedicated volunteers are a
                    vital part of our mission.
                  </p>
                </div>
              </div>

              {/* 6 */}
              <div className="pani-programItem">
                <div className="pani-programImgWrap">
                  <img
                    className="pani-programImg"
                    src={partnershipsImg}
                    alt="Local Partnerships"
                  />
                </div>
                <div className="pani-programContent">
                  <p className="pani-programTitle">
                    <Link
                      className="pani-titleLink"
                      to="/how-to-help/become-hhp-partner"
                    >
                      Local Partnerships:
                    </Link>
                  </p>
                  <p className="pani-body">
                    We forge local alliances to extend healthcare support to
                    underserved communities, a cornerstone of our mission to
                    empower individuals and enhance health outcomes.
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
