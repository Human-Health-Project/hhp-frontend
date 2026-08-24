import React from "react";
import { Link } from "react-router-dom";
import "./LearningAcademyMandarin.css";
import Programs from '../components/ProgramsMandarin';

/* HERO */
import learningAcademyHeroImg from "../assets/Learning-Academy-Mandarin/Hero_img.png";

/**
 * Videos 
 */
const videos = [
  { title: "如何在美国注册和续订健康保险", url: "https://youtu.be/rjO87yJ_6yo" },
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
            <h1 className="la-heroTitle">学习学院</h1>
            <div className="la-heroSubtitle">
              通过我们的课程提升自己
            </div>
          </div>
        </div>
      </section>
      <div className="la-container">
        {/* Intro card */}
        <section className="la-introCard la-curvedCard">
          <p>
            对医疗系统感到不知所措？你并不孤单。我们的免费在线微课程旨在赋能您的健康之旅，无论您的角色如何。
            无论您是面对新诊断的患者、支持亲人的护理者，还是为更好的医疗资源而奋斗的倡导者，这些课程都能为您提供必要的知识和工具，
            让您掌控健康决策、提出明智问题，并自信地应对医疗世界的复杂性。一切尽在这里，随时随地自由学习，完全免费
          </p>
        </section>

        <p className="la-subline">
         短期自主学习的患者赋能课程，专为希望成为赋能患者、赋能护理者、患者倡导者，或希望了解患者参与和以患者为中心的护理的人士设计。
        </p>
        <p className="la-subline">
        患者权利法案
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
           您的捐赠，无论大小，都会对我们的使命产生深远影响，助力个人掌控健康,
          </p>
          <h2 className="la-donateTitle"> 今天捐赠，帮助我们改善更多人的生活。</h2>

          <div className="la-donateBtnRow">
            <Link to="/donate" className="la-btn" aria-label="Donate Now">
              立即捐赠
            </Link>
          </div>
          <br />
          <p className="la-donateText">您的慷慨支持推动我们使命的各个方面</p>
        </section>
      </div>
      <Programs />
      <div className="la-donateBtnRow">
            <Link to="/donate" className="la-btn" aria-label="Donate Now">
              立即捐赠
            </Link>
      </div>

    </div>
  );
}
