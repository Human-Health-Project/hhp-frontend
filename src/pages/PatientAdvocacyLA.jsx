import "../index.css";
import "./PatientAdvocacyNI.css";
import heroImg from "../assets/patient_advocacy/patient-advocacy-ni-hero.jpg";
import Programs from "../components/Programs";
import { Link } from "react-router-dom";

export default function PatientAdvocacyLA() {
  return (
    <main className="pani-page">
      <header
        className="relative mx-18 h-[40vh] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: `url(${heroImg})` }}
        aria-label="Patient Advocacy Los Angeles header"
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
            Understanding and Accessing Healthcare System In Los Angeles
          </h1>
        </div>
      </header>

      {/* CONTENT */}
      <section className="pani-section">
        <div className="pani-container ">
          <div className="pani-card">
            <h2
              className="pani-sectionTitle text-center"
              style={{ color: "var(--primary-color)" }}
            >
              Los Angeles – Upcoming Workshops
            </h2>
            <p className="pani-body pani-noteStrong">
              All workshop times listed are in the local time zone.
            </p>

            <div className="pani-upcomingBox">
              <p>Upcoming workshop dates will be announced soon.</p>
            </div>

            <p className="pani-body">
              These free online Zoom workshops are one hour long and cover:
            </p>

            <div className="pani-listBox">
              <ul className="pani-bullets">
                <li>
                  <strong>Learn your Insurance Eligibility:</strong> How to
                  research your eligibility and how to sign up to and renew,
                  Medi-Cal, Medicaid, Medicare, Covered California/Obamacare,
                  Health Insurance Marketplace.
                </li>
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
                  <strong>Where to Get Help in Los Angeles:</strong> How to
                  access free clinics and other free resources. How to access
                  your health records and how to make a complaint. How to
                  connect with your local representatives. Discover local
                  resources and organizations that offer support, advice, and
                  services for patients in Los Angeles.
                </li>
              </ul>
            </div>

            <p className="pani-body pani-donateText">
              <br />
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

          {/* Testimonials (optional) — keep if you want same structure */}
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
                  “I really found the workshop very interesting. Thanks so much
                  for all the great work you are doing.”
                </p>
                <p className="pani-quoteAuthor">Fiona O’ K</p>
              </div>
            </div>
          </section>

          {/* Use shared Programs component */}
          <Programs />
        </div>
      </section>
    </main>
  );
}
