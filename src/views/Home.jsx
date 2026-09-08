"use client";

import Link from "next/link";
import { useState } from "react";
import CommunityVoicesBanner from "@/components/CommunityVoicesBanner";
import { api } from "@/services/api";
import "./Home.css";

export default function Home() {
  const [newsletter, setNewsletter] = useState({ email: "", country: "AF" });
  const [newsletterState, setNewsletterState] = useState({ status: "idle", message: "" });

  const subscribeToNewsletter = async (event) => {
    event.preventDefault();
    setNewsletterState({ status: "loading", message: "" });

    try {
      await api.subscribeToNewsletter(newsletter);
      setNewsletter({ email: "", country: "AF" });
      setNewsletterState({
        status: "success",
        message: "Thank you for subscribing. Please check your email.",
      });
    } catch (error) {
      const duplicate = error?.status === 422 && error?.errors?.email;
      setNewsletterState({
        status: "error",
        message: duplicate
          ? "This email is already subscribed."
          : error?.message || "Subscription failed. Please try again.",
      });
    }
  };

  const whyCards = [
    {
      id: 1,
      className: 'advocacy',
      title: 'Patient Advocacy - Online Workshops',
      description: 'Join our online workshops to learn how to advocate for yourself and help others with their healthcare journeys. Get the skills and knowledge to navigate the healthcare system.',
      link: '/what-we-do/patient-advocacy/los-angeles',
      imageUrl: '/media/2023/09/patient-advocacy-1.webp'
    },
    {
      id: 2,
      className: 'shared',
      title: 'Shared Patient Information',
      description: 'Our Shared Patient Information (SPI) Program allows patients to share their health data securely. We help you understand how to use and benefit from sharing information.',
      link: '/what-we-do/shared-patient-information',
      imageUrl: '/media/2023/09/homepage_laptop_with_hand-1024x683.webp'
    },
    {
      id: 3,
      className: 'caregiver',
      title: 'Learning Academy',
      description: 'The Learning Academy is designed for anyone interested in becoming an empowered patient, empowered caregiver or those seeking to understand patient engagement and patient-centered care.',
      link: '/what-we-do/learning-academy/english',
      imageUrl: '/media/2023/09/patient-education_2-1-1024x683.webp'
    }
  ];

  const involvementCards = [
    {
      id: 1,
      className: 'donate',
      title: 'Donate',
      link: '/donate',
      imageUrl: '/media/2023/09/homepage_flowers_in_hand.webp'
    },
    {
      id: 2,
      className: 'support',
      title: 'Support HHP',
      link: '/how-to-help/',
      imageUrl: '/media/2023/09/homepage_all_hands_in.webp'
    },
    {
      id: 3,
      className: 'partner',
      title: 'Partner with Us',
      link: '/how-to-help/become-hhp-partner',
      imageUrl: '/media/2023/09/partner-1-1-1024x683.webp'
    },
    {
      id: 4,
      className: 'volunteer',
      title: 'Volunteer',
      link: '/how-to-help#volunteer-section',
      imageUrl: '/media/2023/09/homepage_coffee_shop-1024x683.webp'
    }
  ];

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero-section community-voices-home-hero">
        <CommunityVoicesBanner />
      </section>

      {/* Why Peer-to-Peer Section */}
      <section className="section why-section">
        <div className="container">
          <h2 className="section-title">Why Peer-to-Peer Healthcare?</h2>
          <div className="cards-grid">
            {whyCards.map((card) => (
              <div key={card.id} className="info-card">
                <div className={`card-image ${card.className}`}>
                  <img src={card.imageUrl} alt={card.title} />
                </div>
                <div className="card-content">
                  <h3>{card.title}</h3>
                  <p>{card.description}</p>

                  {/* FIXED */}
                  <Link href={card.link} className="btn btn-primary btn-small">
                    Learn More<span className="sr-only"> about {card.title}</span>
                  </Link>

                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Image Section */}
      <section className="feature-image-section">
        <div className="feature-overlay">
          <div className="container">
            <div className="feature-content"></div>
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section impact-section">
        <div className="container">
          <div className="impact-content">
            <h2>Our Impact Peer to Peer Program</h2>
            <p>
              When facing a difficult health situation, we need information, education, and support.
              We need accurate, unbiased, user-friendly information to help best deal with our health issues.
              We need access to education to be able to better understand and manage our conditions and how
              our healthcare system works (locally). We need support when we are vulnerable, to be shown the way,
              to be heard and to know our rights and all our treatment options.
            </p>
            <p>
              WHY HHP? We solve this problem by providing information, education and support. Information is
              provided through our Shared Patient Information (SPI) Program. Education is provided through our
              Patient Education programs and support is provided through HHP&apos;s Patient Advocacy. The combination
              of these elements empowers individuals to take control and navigate their health care well.
            </p>
          </div>
        </div>
      </section>

      {/* Get Involved Section */}
      <section className="section get-involved-section">
        <div className="container">
          <div className="involvement-grid">
            {involvementCards.map((card) => (
              <Link
                key={card.id}
                href={card.link}
                className={`involvement-card ${card.className}`}
                style={{ textDecoration: "none" }}
              >
                <div className="involvement-card-overlay">
                  <h3>{card.title}</h3>
                </div>
                <img src={card.imageUrl} alt={card.title} />
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section cta-section">
        <div className="container">
          <p className="cta-text">Empower others to change their lives and change your own in the process</p>
          <div className="cta-box">
            <p>Our project is growing and we want you to be a part of it.<br></br>More People. More Information. Better Health.</p>
            {/* FIXED */}
            <Link href="/signup" className="btn btn-join">
              Join Us
            </Link>

          </div>
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="section newsletter-section">
        <div className="container">
          <div className="newsletter-content">
            <h3 className="newsletter-title">Subscribe to our newsletter</h3>
            <form onSubmit={subscribeToNewsletter}>
              <div className="form-group">
                <label htmlFor="email">Email *</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  autoComplete="email"
                  placeholder="Enter your email"
                  value={newsletter.email}
                  onChange={(event) => setNewsletter((current) => ({ ...current, email: event.target.value }))}
                  disabled={newsletterState.status === "loading"}
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="country">Country *</label>
                <select
                  id="country"
                  name="country"
                  autoComplete="country"
                  value={newsletter.country}
                  onChange={(event) => setNewsletter((current) => ({ ...current, country: event.target.value }))}
                  disabled={newsletterState.status === "loading"}
                  required
                >
                  <option value="AF">Afghanistan</option>
                  <option value="US">United States</option>
                  <option value="UK">United Kingdom</option>
                  <option value="CA">Canada</option>
                  <option value="AU">Australia</option>
                </select>
              </div>
              <button type="submit" className="btn btn-primary" disabled={newsletterState.status === "loading"}>
                {newsletterState.status === "loading" ? "Subscribing..." : "Subscribe"}
              </button>
              {newsletterState.message && (
                <p
                  className={`newsletter-message newsletter-message-${newsletterState.status}`}
                  role={newsletterState.status === "error" ? "alert" : "status"}
                  aria-live="polite"
                >
                  {newsletterState.message}
                </p>
              )}
            </form>
          </div>
        </div>
      </section>

    </div>
  )
}
