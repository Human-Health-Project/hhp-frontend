import React from "react";
import { Link } from "react-router-dom";
import "./Programs.css";

export default function Programs() {
  const programs = [
    {
      title: "Talleres de defensa del paciente:",
      description:
        "Tu generosidad apoya la defensa del paciente a través de talleres por Zoom para Northern Ireland and Los Angeles.Gana confianza, comprende tus derechos y accede a recursos de atención médica mientras fomentas una comunidad de pacientes informados y aliados.",
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
        "La Academia de Aprendizaje está diseñada para cualquier persona interesada en convertirse en un paciente empoderado, un cuidador empoderado o en comprender la participación del paciente y la atención centrada en el paciente.",
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/image.png",
      titleLink: "/what-we-do/learning-academy/english",
    },
    {
      title: "Programa de Información Compartida del Paciente:",
      description:
        "Apoya nuestras encuestas de salud sobre información compartida del paciente. Hemos recopilado datos sobre migraña y lupus, y con tu ayuda, estamos trabajando activamente para incluir más condiciones de salud.",
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/image-1.png",
      titleLink: "/what-we-do/shared-patient-information",
    },
    {
      title: "Eventos en línea de apoyo entre pares:",
      description:
        "Estos eventos, que generalmente incluyen un curso de la Academia de Aprendizaje, cuentan con la participación de pacientes y expertos que comparten su experiencia y conocimientos.",
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/image-3.png",
      titleLink: "/what-we-do/online-events",
    },
    {
      title: "Voluntarios comprometidos:",
      description:
        "El Human Health Project está compuesto por un pequeño equipo central con más de 100 voluntarios, más de 30 miembros de la junta y asesores distribuidos en todo el mundo. Estos voluntarios comprometidos son una parte vital de nuestra misión.",
      image: "https://humanhealthproject.org/wp-content/uploads/2024/03/image-450x412.jpeg",
      titleLink: "/who-we-are/meet-the-team",
    },
    {
      title: "Alianzas locales:",
      description:
        "Forjamos alianzas locales para ampliar el apoyo en atención médica a comunidades desatendidas, un pilar fundamental de nuestra misión de empoderar a las personas y mejorar los resultados de salud.",
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
                      Tu generosidad apoya la defensa del paciente a través de talleres por Zoom para{" "}
                      <Link className="programInlineLink" to={program.inlineLinks[0].to}>
                        {program.inlineLinks[0].text}
                      </Link>{" "}
                      and{" "}
                      <Link className="programInlineLink" to={program.inlineLinks[1].to}>
                        {program.inlineLinks[1].text}
                      </Link>
                      . Gana confianza, comprende tus derechos y accede a recursos de atención médica mientras fomentas una comunidad de pacientes informados y aliados.
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
