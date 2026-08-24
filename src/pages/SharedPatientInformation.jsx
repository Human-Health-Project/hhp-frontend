import "./SharedPatientInformation.css";
import { Link } from "react-router-dom";
import { useEffect, useMemo, useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { UilMicroscope } from "@iconscout/react-unicons";
import migraineImg from "../assets/shared_patient_info/migraines_img.jpg";
import lupusImg from "../assets/shared_patient_info/lupus_img.jpg";
import patientAdvocacyImg from "../assets/shared_patient_info/patient_advocacy_img.jpg";
import patientEduImg from "../assets/shared_patient_info/patient_edu_img.jpg";

const GOOGLE_COLORS_5 = ["#3366CC", "#DC3912", "#FF9900", "#109618", "#990099"];
const GOOGLE_COLORS_3 = ["#3366CC", "#DC3912", "#FF9900"];

function formatPercent(value) {
  const rounded = Math.round(value * 10) / 10;
  return Number.isInteger(rounded) ? `${rounded}%` : `${rounded}%`;
}

function PieSurveySlide({ title, responses, items, colors }) {
  return (
    <div className="spi-chartCard">
      <div className="spi-chartHeader">
        <h3 className="spi-chartTitle">{title}</h3>
        <p className="spi-chartMeta">{responses} responses</p>
      </div>

      <div className="spi-chartGrid">
        <div className="spi-chartCanvas">
          <ResponsiveContainer width="100%" height={340}>
            <PieChart>
              <Pie
                data={items}
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                labelLine={false}
                label={(entry) => formatPercent(entry.value)}
                isAnimationActive={false}
              >
                {items.map((_, i) => (
                  <Cell key={i} fill={colors[i % colors.length]} />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
        </div>

        <ul className="spi-legend" aria-label="Chart legend">
          {items.map((it, i) => (
            <li key={it.name} className="spi-legendItem">
              <span
                className="spi-legendSwatch"
                style={{ background: colors[i % colors.length] }}
              />
              <span className="spi-legendLabel">{it.name}</span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default function SharedPatientInformation() {
  const slides = useMemo(
    () => [
      {
        title:
          "How difficult was it for you to navigate the Migraine Headache survey data?",
        responses: 92,
        colors: GOOGLE_COLORS_5,
        items: [
          { name: "Very easy", value: 40.2 },
          { name: "Easy", value: 38.0 },
          { name: "Neither easy nor difficult", value: 16.3 },
          { name: "Difficult", value: 4.3 },
          { name: "Very difficult", value: 1.1 },
        ],
      },
      {
        title:
          "How would you rate the overall organization of the Migraine Headache survey data results?",
        responses: 92,
        colors: GOOGLE_COLORS_5,
        items: [
          { name: "Excellent", value: 19.6 },
          { name: "Very Good", value: 45.7 },
          { name: "Good", value: 26.1 },
          { name: "Fair", value: 7.6 },
          { name: "Poor", value: 1.1 },
        ],
      },
      {
        title:
          "If a friend or family member were experiencing Migraine Headaches, would you recommend that they view the survey data?",
        responses: 92,
        colors: GOOGLE_COLORS_3,
        items: [
          { name: "Yes", value: 71.7 },
          { name: "No", value: 7.6 },
          { name: "Not sure", value: 20.7 },
        ],
      },
      {
        title:
          "How useful was the information provided in the Migraine Headache survey results?",
        responses: 92,
        colors: GOOGLE_COLORS_5,
        items: [
          { name: "Very useful", value: 21.7 },
          { name: "Useful", value: 46.7 },
          { name: "Neutral", value: 29.3 },
          { name: "Not very useful", value: 1.1 },
          { name: "Not useful at all", value: 1.1 },
        ],
      },
      {
        title:
          "Do you plan to use what you’ve learned from the Migraine survey results to help you or someone you care for to better manage Migraine Headaches?",
        responses: 92,
        colors: GOOGLE_COLORS_3,
        items: [
          { name: "Yes", value: 54.3 },
          { name: "No", value: 9.8 },
          { name: "Not sure", value: 35.9 },
        ],
      },
    ],
    [],
  );

  const [active, setActive] = useState(0);
  const goPrev = () => setActive((i) => (i === 0 ? slides.length - 1 : i - 1));
  const goNext = () => setActive((i) => (i === slides.length - 1 ? 0 : i + 1));

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [slides.length]);

  return (
    <main className="spi-page">
      <section className="spi-section">
        <div className="spi-container">
          <h1 className="spi-title">Shared Patient Information</h1>

          {/* TOP ROW: FORM + VIDEO */}
          <div className="spi-topRow">
            <div className="spi-card">
              <p className="spi-body">
                Sign up today to be notified about updates
              </p>

              <form className="spi-form">
                <div className="spi-formRow">
                  <div>
                    <label>First Name *</label>
                    <input type="text" />
                  </div>
                  <div>
                    <label>Last Name *</label>
                    <input type="text" />
                  </div>
                </div>

                <div>
                  <label>Email *</label>
                  <input type="email" />
                </div>

                <div>
                  <label>Country *</label>
                  <input type="text" />
                </div>

                <button type="button" className="spi-button">
                  SIGN UP
                </button>
              </form>
            </div>

            <div className="spi-card spi-videoCard">
              <div className="spi-cardInner">
                <div className="spi-videoWrap">
                  <iframe
                    className="spi-video"
                    src="https://www.youtube-nocookie.com/embed/d76TAoANXPw"
                    title="Shared Patient Information"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>

                <a
                  className="spi-link"
                  href="https://youtu.be/d76TAoANXPw"
                  target="_blank"
                  rel="noreferrer"
                >
                  Open on YouTube
                </a>
              </div>
            </div>
          </div>

          {/* WELCOME */}
          <h2 className="spi-subtitle">Welcome</h2>
          <p className="spi-body">
            Our Shared Patient Information (SPI) pilot program: We conducted our
            pilot Shared Patient Information program, previously known as our
            Real World Data program, in the years from 2016 to 2020. During that
            time we launched patient conditions surveys on Migraine and Lupus
            and we shared the results of the surveys on the approximately 50
            pages of Shared Patient Information reports which you can click into
            below. In all over 13,000 people took the surveys and over 500,000
            people have viewed the data.
          </p>
          <p className="spi-body spi-note">
            PLEASE NOTE: The data in the links below was collected from 2016 to
            2020 and as a result some of it may now be out of date.
          </p>

          {/* GET THE WHOLE PICTURE */}
          <h2 className="spi-subtitle">Get the Whole Picture</h2>
          <p className="spi-body">
            Healthcare is fragmented, and this adversely impacts quality, cost,
            and outcomes. For example, doctors and practitioners typically don’t
            have knowledge of each other’s medicines and the broad range of
            treatments available. Additionally, due to the rapid growth of
            technology and online resources, the amount of health information
            has increased exponentially. The abundance of information available
            has made it much more difficult to find the information you need.
            Knowing who to trust in a sea of commercial health resources can
            seem almost impossible.
          </p>
          <p className="spi-body">
            These are significant problems, and that’s what HHP’s Shared Patient
            Information program is about. We provide independent, unbiased
            information from our community, including all types of medicines, to
            help you make informed healthcare decisions. Participate by sharing
            your experiences or learning about how others manage their health
            conditions.
          </p>

          {/* REPORTS */}
          <h2 className="spi-subtitle">Share & Learn</h2>
          <div className="spi-reportGrid">
            <article className="spi-reportCard">
              <img
                className="spi-reportImg"
                src={migraineImg}
                alt="Migraines"
                loading="lazy"
              />
              <p className="spi-body spi-center">
                <strong>Migraines</strong> are a headache disorder characterized
                by recurrent headaches that range from moderate to severe.
              </p>
              <Link
                to="/shared-patient-information/migraine"
                className="spi-buttonLink"
              >
                VIEW MIGRAINE REPORTS
              </Link>
            </article>

            <article className="spi-reportCard">
              <img
                className="spi-reportImg"
                src={lupusImg}
                alt="Lupus"
                loading="lazy"
              />
              <p className="spi-body spi-center">
                <strong>Lupus</strong> is an autoimmune disease that occurs when
                the immune system attacks tissues and organs.
              </p>
              <Link
                to="/shared-patient-information/lupus"
                className="spi-buttonLink"
              >
                VIEW LUPUS REPORTS
              </Link>
            </article>
          </div>
          <h2 className="spi-subtitle">SPI Narratives</h2>
          <div className="spi-narrativeBanner">
            <div className="spi-narrativeBannerContent">
              <p className="spi-body">
                Explore our SPI announcement content, including Community Voices
                for Prevention (CVP), and learn how storytelling can support
                preventive health and community wellness.
              </p>
              <Link
                to="/shared-patient-information/narratives"
                className="spi-buttonLink"
              >
                VIEW SPI NARRATIVES
              </Link>
            </div>
          </div>

          {/* WHAT OUR MEMBERS ARE SAYING */}
          <h2 className="spi-subtitle">What Our Members Are Saying</h2>
          <p className="spi-body">
            In 2016, HHP launched the first Shared Patient Information survey on
            migraine headaches. Since then, over 13,000 survey respondents have
            contributed to HHP’s Migraine Headache Survey, and the survey
            results and graphical reports have had almost 400,000 pageviews. The
            most recent feedback has been outstanding, with over 80% of survey
            respondents reporting the data was easy to navigate and well
            organized. More than 70% reported that they would recommend the data
            to friends or family who are experiencing migraines. More than half
            of migraine survey respondents said they would use the migraine data
            to help themselves or someone they care for.
          </p>
          <p className="spi-body">
            Most notably, after viewing the migraine survey data, respondents
            who reported their understanding of migraine headaches as excellent,
            very good, or good increased by almost 20%. An increase of over 23%
            was observed in respondents who reported their understanding of
            migraine treatments as excellent, very good, or good. Lastly,
            respondents who reported their understanding of migraine causes and
            triggers as excellent, very good, or good increased by 14%.
          </p>
          <p className="spi-body">
            In 2017, HHP introduced the HHP Lupus Survey. To date, our lupus
            data has had over 25,000 pageviews, and continues to grow. We are
            extremely grateful to all our members who contributed to the
            Migraine and Lupus Surveys to provide useful information to others
            and help make the Shared Patient Information program a continued
            success.
          </p>

          {/* CHART CAROUSEL */}
          <div className="spi-carousel" aria-label="Survey charts carousel">
            <div className="spi-carouselTop">
              <button
                type="button"
                className="spi-arrow"
                onClick={goPrev}
                aria-label="Previous chart"
              >
                ‹
              </button>

              <div className="spi-carouselFrame">
                <PieSurveySlide {...slides[active]} />
              </div>

              <button
                type="button"
                className="spi-arrow"
                onClick={goNext}
                aria-label="Next chart"
              >
                ›
              </button>
            </div>

            <div className="spi-dots" aria-label="Chart navigation">
              {slides.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  className={`spi-dot ${i === active ? "is-active" : ""}`}
                  onClick={() => setActive(i)}
                  aria-label={`Go to chart ${i + 1}`}
                />
              ))}
            </div>
          </div>

          {/* BECOME OUR PARTNER (ALIGNED INSIDE CONTAINER) */}
          <h2 className="spi-subtitle">Become Our Partner</h2>

          <p className="spi-body">
            As part of HHP’s philosophy of collaboration, we are committed to
            partnering with local community health groups and associations to
            support quality improvements in healthcare, better population health
            and lower costs for all stakeholders. At HHP, we are excited to work
            with partners in this new program by promoting the sharing of best
            practices and allowing the dissemination of information and data
            worldwide.
          </p>

          <p className="spi-body">
            HHP works in partnership to deliver the Shared Patient Information
            program individually or integrated with the other elements of HHP
            IMPACT, such as Patient Advocacy and Learning Academy. This program
            provides local and global health data including causes, symptoms and
            treatments on specific health conditions to improve patient
            outcomes.
          </p>

          <div className="spi-partnerAction">
            <Link
              to="/how-to-help/become-hhp-partner"
              className="spi-button spi-buttonCenter"
            >
              LEARN MORE
            </Link>
          </div>
        </div>
        {/* SPI BENEFITS (icons grid) */}
        <div className="spi-benefits spi-narrow">
          <div className="spi-benefitsGrid">
            <article className="spi-benefit">
              <div className="spi-iconCircle spi-yellow" aria-hidden="true">
                {/* network icon */}
                <svg viewBox="0 0 24 24" className="spi-iconSvg">
                  <path
                    d="M12 5a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm7 10a3 3 0 1 0 0 6 3 3 0 0 0 0-6ZM5 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6Zm6.6-4.2L6.9 15M12.4 11l5.1 3.2M7.4 18.2l9.1-.1"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="spi-benefitTitle">Crowdsourced</h3>
              <p className="spi-benefitText">
                SPI is derived from a broad range of individuals’ experiences in
                the real world, including patients often excluded from clinical
                trials.
              </p>
            </article>

            <article className="spi-benefit">
              <div className="spi-iconCircle spi-blueSoft" aria-hidden="true">
                {/* clock icon */}
                <svg viewBox="0 0 24 24" className="spi-iconSvg">
                  <path
                    d="M12 7v6l4 2M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="spi-benefitTitle">Real-time updates</h3>
              <p className="spi-benefitText">
                SPI can provide information to patients sooner than clinical
                trial data. HHP’s Shared Patient Information is displayed in
                real-time.
              </p>
            </article>

            <article className="spi-benefit">
              <div className="spi-iconCircle spi-green" aria-hidden="true">
                {/* list icon */}
                <svg viewBox="0 0 24 24" className="spi-iconSvg">
                  <path
                    d="M8 6h13M8 12h13M8 18h13M3 6h1M3 12h1M3 18h1"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </div>
              <h3 className="spi-benefitTitle">Comparable outcomes</h3>
              <p className="spi-benefitText">
                SPI enables patients to compare outcomes between a broader range
                of treatments.
              </p>
            </article>

            <article className="spi-benefit">
              <div className="spi-iconCircle spi-green" aria-hidden="true">
                {/* chart icon */}
                <svg viewBox="0 0 24 24" className="spi-iconSvg">
                  <path
                    d="M4 19V5M4 19h16M8 16v-4M12 16V8M16 16v-6"
                    fill="none"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <h3 className="spi-benefitTitle">Actionable insights</h3>
              <p className="spi-benefitText">
                SPI complements clinical trial research and transforms it into
                actionable insights by adding greater value and impact.
              </p>
            </article>

            <article className="spi-benefit ">
              <div className="spi-iconCircle" aria-hidden="true">
                <UilMicroscope size="42" color="#ffffff" />
              </div>
              <h3 className="spi-benefitTitle">Bridging the gap</h3>
              <p className="spi-benefitText">
                SPI bridges the gap between clinical trial research and patient
                outcomes in real-world settings.
              </p>
            </article>
          </div>
        </div>

        <div className="spi-box spi-statsBox spi-narrow">
          <div className="spi-statsGrid">
            <div className="spi-stat">
              <div className="spi-statNumber">225</div>
              <div className="spi-statLabel">Countries Worldwide</div>
            </div>
            <div className="spi-stat">
              <div className="spi-statNumber">50+</div>
              <div className="spi-statLabel">Migraine Reports</div>
            </div>
            <div className="spi-stat">
              <div className="spi-statNumber">13,000</div>
              <div className="spi-statLabel">Survey Respondent</div>
            </div>
            <div className="spi-stat">
              <div className="spi-statNumber">1M</div>
              <div className="spi-statLabel">Site Visitor</div>
            </div>
            <div className="spi-stat">
              <div className="spi-statNumber">60</div>
              <div className="spi-statLabel">Migraine Treatment Ratings</div>
            </div>
          </div>
        </div>

        {/* OUR FUTURE PLANS */}
        {/* OUR FUTURE PLANS (BLUE) */}
        <div className="spi-dividerTitle spi-dividerBlue spi-narrow">
          <span className="spi-dividerLine" />
          <h2 className="spi-dividerText">Our Future Plans</h2>
          <span className="spi-dividerLine" />
        </div>

        <div className="spi-plans">
          <article className="spi-planCard spi-planGreen">
            <h4 className="spi-planTitle">HEALTH CONDITIONS</h4>
            <p className="spi-planText">
              Expansion of the SPI program to include more conditions &amp;
              regions
            </p>
          </article>

          <article className="spi-planCard spi-planPurple">
            <h4 className="spi-planTitle">PARTNERSHIP</h4>
            <p className="spi-planText">
              Increasing our collaborative partnerships with other local and
              international NGOs
            </p>
          </article>

          <article className="spi-planCard spi-planBlue">
            <h4 className="spi-planTitle">MOBILE APP</h4>
            <p className="spi-planText">
              Developing the SPI program to include mobile access
            </p>
          </article>
        </div>

        {/* NEXT SECTION HEADING */}
        <div className="spi-dividerTitle spi-dividerTitleTight">
          <span className="spi-dividerLine" />
          <h2 className="spi-dividerText">
            Learn More About Our Other Services
          </h2>
          <span className="spi-dividerLine" />
        </div>

        <div className="spi-services">
          <div className="spi-servicesGrid">
            {/* Patient Advocacy */}
            <article className="spi-serviceCard spi-serviceCardBox">
              <img
                src={patientAdvocacyImg}
                alt="Patient Advocacy"
                className="spi-serviceImg"
              />

              <h3 className="spi-serviceTitle">Patient Advocacy</h3>

              <p className="spi-serviceText">
                HHP provides access to a supportive peer-to-peer community.
              </p>

              <Link
                to="/what-we-do/patient-advocacy/los-angeles"
                className="spi-serviceBtn"
              >
                VIEW SERVICES
              </Link>
            </article>

            {/* Patient Education */}
            <article className="spi-serviceCard spi-serviceCardBox">
              <img
                src={patientEduImg}
                alt="Patient Education"
                className="spi-serviceImg"
              />

              <h3 className="spi-serviceTitle">Patient Education</h3>

              <p className="spi-serviceText">
                We help patients through education and peer-to-peer information.
              </p>

              <Link
                to="/what-we-do/learning-academy/english"
                className="spi-serviceBtn"
              >
                LEARN MORE
              </Link>
            </article>
          </div>

          {/* JOIN STRIP */}
          <div className="spi-joinStrip">
            <div className="spi-joinText">
              <div className="spi-joinLine1">
                Our project is growing and we want you to be a part of it.
              </div>
              <div className="spi-joinLine2">
                <em>More People. More Information. Better Health.</em>
              </div>
            </div>

            <Link to="/signup" className="spi-joinBtn">
              JOIN US!
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
