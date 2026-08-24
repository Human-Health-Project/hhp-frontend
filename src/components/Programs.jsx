import React from "react";
import { Link } from "react-router-dom";
import "./Programs.css";

export default function Programs() {
  const programs = [
    {
      title: "Patient Advocacy Workshops:",
      description:
        "Your generosity supports patient advocacy through Zoom workshops for Northern Ireland and Los Angeles. Gain confidence, understand your rights, and access healthcare resources while fostering a community of informed patients and allies.",
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/patient-advocacy.jpg",
      titleLink: "/what-we-do/patient-advocacy/northern-ireland",
      inlineLinks: [
        { text: "Northern Ireland", to: "/what-we-do/patient-advocacy/northern-ireland" },
        { text: "Los Angeles", to: "/what-we-do/patient-advocacy/los-angeles" },
      ],
    },
    {
      title: "Learning Academy:",
      description:
        "The Learning Academy is designed for anyone interested in becoming an empowered patient, empowered caregiver, or those seeking to understand patient engagement and patient-centered care.",
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/image.png",
      titleLink: "/what-we-do/learning-academy/english",
    },
    {
      title: "Shared Patient Information Program:",
      description:
        "Support our Shared Patient Information Health surveys. We've collected data on Migraine and Lupus and with your help, we are actively working on adding more health conditions.",
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/image-1.png",
      titleLink: "/what-we-do/shared-patient-information",
    },
    {
      title: "Online Peer to Peer Events:",
      description:
        "These events, which typically include a Learning Academy course title, include patients and experts sharing their experience and knowledge.",
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/image-3.png",
      titleLink: "/what-we-do/online-events",
    },
    {
      title: "Dedicated Volunteers:",
      description:
        "The Human Health Project is made up of a small core staff with over 100 volunteers, 30+ board members, and advisers spread around the world. These dedicated volunteers are a vital part of our mission.",
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/image-450x412.jpeg",
      titleLink: "/who-we-are/meet-the-team",
    },
    {
      title: "Local Partnerships:",
      description:
        "We forge local alliances to extend healthcare support to underserved communities, a cornerstone of our mission to empower individuals and enhance health outcomes.",
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/image-1.jpeg",
      titleLink: "/how-to-help/become-hhp-partner",
    },
  ];

  return (
    <section className="programsSection" aria-label="More programs">
      <div className="programsContainer">
        <div className="programsGrid">
          {programs.map((program, index) => (
            <div key={index} className="programCard">
              <div className="programImgWrap">
                <img className="programImg" src={program.image} alt={program.title} />
              </div>

              <div className="programContent">
                <p className="programTitle">
                  <Link className="programTitleLink" to={program.titleLink}>
                    {program.title}
                  </Link>
                </p>

                <p className="programDesc">
                  {program.inlineLinks ? (
                    <>
                      Your generosity supports patient advocacy through Zoom workshops for{" "}
                      <Link className="programInlineLink" to={program.inlineLinks[0].to}>
                        {program.inlineLinks[0].text}
                      </Link>{" "}
                      and{" "}
                      <Link className="programInlineLink" to={program.inlineLinks[1].to}>
                        {program.inlineLinks[1].text}
                      </Link>
                      . Gain confidence, understand your rights, and access healthcare resources while fostering a community of informed patients and allies.
                    </>
                  ) : (
                    program.description
                  )}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
