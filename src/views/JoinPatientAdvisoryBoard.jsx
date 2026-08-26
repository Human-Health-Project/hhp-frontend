import React from "react";
import Programs from "../components/Programs";
import "./JoinPatientAdvisoryBoard.css";
import heroImg from "../assets/join_advisory_board/hero_img.jpg";

export default function JoinPatientAdvisoryBoard() {
  return (
    <div className="jpab-page">

      {/* HERO */}
      <section className="jpab-hero">
        <img
          src={heroImg}
          alt="Human Health Project Advisory Council"
          className="jpab-hero-img"
        />
        <div className="jpab-hero-overlay">
          <h1 className="jpab-hero-title">
            Human Health Project <br />
            Advisory Council
          </h1>
        </div>
      </section>

      <div className="jpab-container jpab-content">

        {/* INTRO SECTION */}
        <section className="jpab-section jpab-card">
          <p>
            The Human Health Project (HHP) is a non-profit organization that shares
            peer-to-peer health information, education, and support. Through our
            programs, our objective is to empower individuals to manage their health.
            Our goal is to create a world where all people affected by health challenges
            live healthy lives, supported by a community that cares. Our mission is to
            serve the health of the underserved and vulnerable through holistic
            information, education, and advocacy. We rely on the help of a small core
            staff of 80+ volunteers and 30+ board members and advisers, spread around
            the world.
          </p>
        </section>

        {/* OPPORTUNITY SECTION */}
        <section className="jpab-section jpab-card">
          <h2 className="jpab-section-title">The Opportunity</h2>

          <p>
            Listening to the communities we serve is central to our mission, and we
            value communication and feedback in all we do. The Advisory Council,
            made up of people living with particular health conditions, is an
            advisory body to our Board of Directors. The Advisory Council’s mission
            is to support HHP in our work sharing health information, educating
            people in the communities we serve, and looking for ways to support
            clients. Because of their experiences living with challenging health
            conditions, Advisory Council members are in the perfect position to give
            us critical insights on how best to support people with health
            conditions similar to their own.
          </p>

          <p>
            If this work sounds like something that interests you, we need your help!
            Typically, terms on the Advisory Council last two years, and the group
            meets quarterly to advise our Board of Directors on which programs would
            best support the people we serve. The time commitment is fairly minimal –
            around an hour or two each month. Meetings are scheduled at the
            convenience of Advisory Council members. If you think your insights could
            be helpful to other people living with similar conditions to your own,
            please join us!
          </p>

          {/* CTA BUTTON */}
          <div className="jpab-cta-wrapper">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSeehFVlxAyUzT7U9QlxHfYbgbaOPDFB8S-mTVUBz7APNnhfWg/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="jpab-cta-btn"
            >
              JOIN THE ADVISORY COUNCIL
            </a>
          </div>
        </section>

        {/* Programs Component */}
        <Programs />

      </div>
    </div>
  );
}
