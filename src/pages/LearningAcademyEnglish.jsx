// src/pages/LearningAcademyEnglish.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./LearningAcademyEnglish.css";
import Programs from '../components/Programs';

/* HERO */
import learningAcademyHeroImg from "../assets/Learning-Academy/Hero_img.png";

/**
 * Videos (English)
 */
const videos = [
  { title: "What to do When You Can’t Get a Diagnosis", url: "https://youtu.be/NI7lsbtpb7Q" },
  { title: "How Shared Patient Information Is Transforming HealthCare", url: "https://youtu.be/d76TAoANXPw" },
  { title: "Finding Credible Information Online (How to Research Online and the ePatient)", url: "https://youtu.be/VG0wzaXE-CU" },
  { title: "Patient Empowerment & the ePatient Movement (How to Stand Up for Yourself and be Heard)", url: "https://youtu.be/LNrLFxKJBIo" },
  { title: "Understanding the Language of Health (Health Literacy)", url: "https://youtu.be/eVY0Eyv8bRs" },
  { title: "Your Right as a patient (Patient Bill of Rights)", url: "https://youtu.be/d92T28rrBKU" },
  { title: "Knowing your Health Insurance Eligibility and How to Sign Up and Renew", url: "https://youtu.be/E9xO5Zb6Srk" },
  { title: "Preventing Medical Errors", url: "https://youtu.be/hbG9Dkz6chA" },
  { title: "Building Your Healthcare Team", url: "https://youtu.be/j9q7pUUXAtY" },
  { title: "Approaches to Patient Advocacy", url: "https://youtu.be/iTkRsXqUGHg" },
  { title: "Managing Opioids and Other Controlled Substances", url: "https://youtu.be/sreABpbiYHU" },
  { title: "Understanding the Role of a Patient Advocate", url: "https://youtu.be/wsBV08yKexo" },
];

function toYouTubeEmbed(url) {
  // supports youtu.be/<id> and youtube.com/watch?v=<id>
  const u = new URL(url);
  let id = "";

  if (u.hostname.includes("youtu.be")) {
    id = u.pathname.replace("/", "");
  } else {
    id = u.searchParams.get("v") || "";
  }

  return id ? `https://www.youtube.com/embed/${id}` : url;
}

export default function LearningAcademyEnglish() {
  return (
    <div className="la-page">
      {/* HERO (same HHP edit style) */}
      <section
        className="la-hero"
        style={{ backgroundImage: `url(${learningAcademyHeroImg})` }}
      >
        <div className="la-heroOverlay" />

        <div className="md-container">
          <div className="la-heroInner">
            <div className="la-heroEyebrow">HUMAN HEALTH PROJECT PROGRAM</div>
            <h1 className="la-heroTitle">Learning Academy</h1>
            <div className="la-heroSubtitle">
              Empower yourself with our courses
            </div>
          </div>
        </div>
      </section>
      <div className="la-container">
        {/* Intro card */}
        <section className="la-introCard la-curvedCard">
          <p>
            Feeling overwhelmed by the healthcare system? You’re not alone. Our free, bite-sized online courses are
            designed to empower you on your health journey, regardless of your role. Whether you’re a patient facing a
            new diagnosis, a caregiver supporting a loved one, or an advocate fighting for better healthcare access,
            these courses equip you with the knowledge and tools you need to take charge of your health decisions, ask
            informed questions, and feel confident navigating the complexities of the medical world. It’s all here, at
            your own pace, and completely free.
          </p>
        </section>

        <p className="la-subline">
          Short self paced patient empowerment courses designed for anyone interested in becoming an empowered patient,
          empowered caregiver, patient advocate, or those seeking to understand patient engagement and patient-centered
          care.
        </p>

        {/* Video grid */}
        <section className="la-videos">
          <div className="la-videosGrid">
            {videos.map((v) => (
              <div key={v.url} className="la-videoCard la-curvedCard">
                <div className="la-videoWrap">
                  <iframe
                    src={toYouTubeEmbed(v.url)}
                    title={v.title}
                    loading="lazy"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
                <div className="la-videoTitle">{v.title}</div>
              </div>
            ))}
          </div>
        </section>

        {/* Donation block (place near bottom like the page) */}
        <section className="la-donate la-curvedCard">
          <p className="la-donateText">
            Your gift, no matter the size, makes a meaningful difference in our mission to empower individuals to
            manage their health.
          </p>
          <h2 className="la-donateTitle"> Donate today and help us change lives for the better.</h2>

          <div className="la-donateBtnRow">
            <Link to="/donate" className="la-btn" aria-label="Donate Now">
              DONATE NOW
            </Link>
          </div>
          <br />
          <p className="la-donateText">Your generosity supports various aspects of our mission.</p>
        </section>
      </div>
      <Programs />
      <div className="la-donateBtnRow">
            <Link to="/donate" className="la-btn" aria-label="Donate Now">
              DONATE NOW
            </Link>
      </div>

    </div>
  );
}
