import { Link } from "react-router-dom";
import './AboutUs.css';

// Content Data
const aboutUsContent = {
  hero: {
    title: "Who We Are"
  },
  story: {
    title: "Our Story",
    paragraphs: [
      "Human Health Project's (HHP) foundation is built upon peer-to-peer health information, education, and support. Through our programs, our objective is to empower individuals to manage their health.",
      "HHP was founded in 2002 by Dr. Phil Harrington who had spent three years trying to find a diagnosis which sparked the idea for HHP. Today we are made up of a small core staff with 80+ volunteers, 30+ board members and advisers, spread around the world."
    ]
  },
  visionMission: {
    vision: {
      title: "Our Vision",
      text: "We envision a world where all people affected by health challenges live healthy lives supported by a community that cares."
    },
    mission: {
      title: "Our Mission",
      text: "To improve the health of the underserved and vulnerable through reliable information, education, and advocacy."
    }
  },
  values: {
    title: "Our Values",
    items: [
      {
        title: "Patient-Centered Healthcare",
        text: "HHP supports the patient empowerment movement and e-patient initiatives. We believe medicine should be participatory, and that individuals who are equipped with the most accurate and up-to-date health information, education, and support are empowered to make informed health decisions for themselves and those in their care.",
        imageUrl: "https://humanhealthproject.org/wp-content/uploads/2023/09/patient-advocacy-1-300x200.webp",
        reversed: false,
        background: "blue"
      },
      {
        title: "Peer-Led Patient Advocacy",
        text: "Peer-Led patient advocacy is about supporting people who are not being heard in the healthcare system, and empowering them to use their rights of autonomy. Through sharing of information, experiences, and resources, advocates inspire patients to have confidence and take ownership in their care plan.",
        imageUrl: "https://humanhealthproject.org/wp-content/uploads/2023/09/Peer-Led-Patient-Advocacy.webp",
        reversed: true,
        background: "white"
      },
      {
        title: "Health Information Access",
        text: "We believe people have a right to accurate and unbiased information about all types of medicines including conventional, alternative and integrative. We believe free access to health information is not a privilege, but rather a human right that should be granted to every individual regardless of geographic location, social class, or financial position.",
        imageUrl: "https://humanhealthproject.org/wp-content/uploads/2023/09/Migraine-or-cluster-headache-Two-questions-to-help-you-seek-the-right-treatment-1.webp",
        reversed: false,
        background: "blue"
      },
      {
        title: "Local Partnerships & Volunteer Opportunities",
        text: "Our mission transcends borders, and we embrace partnerships with other nonprofit organizations. We are primarily volunteer-based and rely on local volunteers and partnerships to help us fulfill our mission. Through our partnerships and volunteers, we aim to improve the lives of the most underserved and vulnerable communities around the world.",
        imageUrl: "https://humanhealthproject.org/wp-content/uploads/2023/09/Local-Partnerships-and-Volunteer-Opportunities.webp",
        reversed: true,
        background: "blue"
      },
      {
        title: "Diversity, Equity and Inclusion",
        text: "Human Health Project is for everyone, no matter where you came from, what you look like or how you identify. To succeed in our mission and truly help underserved and vulnerable people to increase their health literacy and as a result improve their health outcomes and reduce medical errors and deaths, we must continue to play our part in building a more inclusive and equitable world, starting with our own organization at a board, staff and volunteer level.",
        imageUrl: "https://humanhealthproject.org/wp-content/uploads/2021/07/Equality.webp",
        reversed: false,
        background: "white"
      },
      {
        title: "The Universal Declaration Of Human Rights",
        text: "Human Health Project recognizes The Universal Declaration of Human Rights by the United Nations. Click below to read more.",
        imageUrl: "https://humanhealthproject.org/wp-content/uploads/2023/09/Local-and-Global-1.webp",
        reversed: true,
        background: "blue",
        hasButton: true,
        buttonText: "Read More"
      }
    ]
  },
  support: {
    title: "Support HHP",
    donateTitle: "DONATE TODAY",
    donateText: "We rely on your donations to pay for servers, bandwidth, maintenance, and development of the Human Health Project platform including salaries. We need a small paid staff of 2 to work with a volunteer team of 80 people. Your financial gift will help us help people across the globe.",
    buttonText: "Give Now"
  },
  footerCta: {
    text: "Our project is growing and we want you to be a part of it.\nMore People. More Information. Better Health.",
    buttonText: "Join Us!"
  }
};

// SVG Icons as components
const UsersIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const HeartIcon = () => (
  <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
  </svg>
);

export default function AboutUs() {
  return (
    <div className="section">
      <div className="container">
        {/* Hero Section */}
        <section className="about-hero">
          <h1 className="about-hero__title">{aboutUsContent.hero.title}</h1>
        </section>

        {/* Our Story Section */}
        <section className="about-story">
          <h2 className="about-story__title">{aboutUsContent.story.title}</h2>
          {aboutUsContent.story.paragraphs.map((paragraph, index) => (
            <p key={index} className="about-story__text">
              {paragraph}
            </p>
          ))}
        </section>

        {/* Vision & Mission Section */}
        <section className="about-vision-mission">
          <div className="about-vision-mission__grid">
            <div className="about-vision-mission__item">
              <div className="about-vision-mission__icon">
                <UsersIcon />
              </div>
              <div className="about-vision-mission__content">
                <h3 className="about-vision-mission__title">{aboutUsContent.visionMission.vision.title}</h3>
                <p className="about-vision-mission__text">
                  {aboutUsContent.visionMission.vision.text}
                </p>
              </div>
            </div>
            <div className="about-vision-mission__item">
              <div className="about-vision-mission__icon">
                <HeartIcon />
              </div>
              <div className="about-vision-mission__content">
                <h3 className="about-vision-mission__title">{aboutUsContent.visionMission.mission.title}</h3>
                <p className="about-vision-mission__text">
                  {aboutUsContent.visionMission.mission.text}
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values Header */}
        <section className="about-values-header">
          <h2 className="about-values-header__title">{aboutUsContent.values.title}</h2>
        </section>

        {/* Values Section */}
        <div className="about-values">
          {aboutUsContent.values.items.map((value, index) => (
            <div
              key={index}
              className={`about-value-row ${value.reversed ? 'about-value-row--reversed' : ''}`}
            >
              <div className={`about-value-row__content about-value-row__content--${value.background}`}>
                <h3 className={`about-value-row__title ${value.background === 'white' ? 'about-value-row__title--blue' : ''}`}>
                  {value.title}
                </h3>
                <p className="about-value-row__text">
                  {value.text}
                </p>
                {value.hasButton && (
                  <a
                    href="https://www.un.org/en/about-us/universal-declaration-of-human-rights"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="about-value-row__button"
                  >
                    {value.buttonText}
                  </a>
                )}
              </div>
              <div
                className="about-value-row__image"
                style={{
                  backgroundImage: `url('${value.imageUrl}')`,
                }}
              />
            </div>
          ))}
        </div>

        {/* Support HHP Section */}
        <section className="about-support">
          <h2 className="about-support__title">
            {aboutUsContent.support.title}
          </h2>
          <div className="about-support__wrapper">
            
            {/* Left - Donate Content */}
            <div className="about-support__left">
              <h3 className="about-support__donate-title">
                {aboutUsContent.support.donateTitle}
              </h3>

              <p className="about-support__donate-text">
                {aboutUsContent.support.donateText}
              </p>

              <Link
                to="/donate"
                className="about-support__donate-button"
              >
                {aboutUsContent.support.buttonText}
              </Link>
            </div>

            {/* Right - Full Image */}
            <div className="about-support__right">
              <img
                src="https://humanhealthproject.org/wp-content/uploads/2023/09/donate-giving-heart.webp"
                alt="Hands holding a red heart"
                className="about-support__image"
              />
            </div>

          </div>
        </section>

        {/* Footer CTA */}
        <section className="about-footer-cta">
          <p className="about-footer-cta__text">
            {aboutUsContent.footerCta.text.split('\n').map((line, index) => (
              <span key={index}>
                {line}
                {index === 0 && <br />}
              </span>
            ))}
          </p>
          <Link
            to="/signup"
            className="about-footer-cta__button"
          >
            {aboutUsContent.footerCta.buttonText}
          </Link>
        </section>
      </div>
    </div>
  );
}