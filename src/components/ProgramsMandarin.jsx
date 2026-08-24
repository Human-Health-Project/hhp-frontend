import React from "react";
import { Link } from "react-router-dom";
import "./ProgramsMandarin.css";

export default function Programs() {
  const programs = [
    {
      title: "患者倡导研讨会",
      description:
        "您的慷慨支持通过Zoom研讨会推动患者倡导 北爱尔兰 and 洛杉矶. 建立信心，了解您的权利，获取医疗资源，同时培养一个由知情患者和支持者组成的社区",
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/patient-advocacy.jpg",
      titleLink: "/what-we-do/patient-advocacy/northern-ireland",
      inlineLinks: [
        { text: "北爱尔兰", to: "/what-we-do/patient-advocacy/northern-ireland" },
        { text: "洛杉矶", to: "/what-we-do/patient-advocacy/los-angeles" },
      ],
    },
    {
      title: "学习学院：",
      description:
        "学习学院专为希望成为赋能患者、赋能护理者，或希望了解患者参与和以患者为中心护理的人士而设计。",
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/image.png",
      titleLink: "/what-we-do/learning-academy/english",
    },
    {
      title: "共享患者信息计划",
      description:
        "支持我们的共享患者信息健康调查。我们已收集有关偏头痛和狼疮的数据，并在您的帮助下，我们正积极扩展至更多健康状况。",
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/image-1.png",
      titleLink: "/what-we-do/shared-patient-information",
    },
    {
      title: "在线点对点交流活动：",
      description:
        "这些活动通常包含学习学院课程主题，患者和专家将在其中分享他们的经验和知识。",
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/image-3.png",
      titleLink: "/what-we-do/online-events",
    },
    {
      title: "敬业的志愿者：",
      description:
        "人类健康项目由一个小型核心团队组成，并拥有100多名志愿者、30多名董事会成员和遍布全球的顾问。这些敬业的志愿者是我们使命的重要组成部分。",
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/image-450x412.jpeg",
      titleLink: "/who-we-are/meet-the-team",
    },
    {
      title: "本地合作伙伴关系",
      description:
        "我们建立本地合作伙伴关系，以向服务不足的社区提供医疗支持，这是我们赋能个人并改善健康结果使命的基石。",
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
                      您的慷慨支持通过Zoom研讨会推动患者倡导{" "}
                      <Link className="programInlineLink" to={program.inlineLinks[0].to}>
                        {program.inlineLinks[0].text}
                      </Link>{" "}
                      and{" "}
                      <Link className="programInlineLink" to={program.inlineLinks[1].to}>
                        {program.inlineLinks[1].text}
                      </Link>
                      .  建立信心，了解您的权利，获取医疗资源，同时培养一个由知情患者和支持者组成的社区
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
