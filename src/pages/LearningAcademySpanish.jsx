// src/pages/LearningAcademySpanish.jsx
import React from "react";
import { Link } from "react-router-dom";
import "./LearningAcademySpanish.css";
import Programs from '../components/ProgramsSpanish';

/* HERO */
import learningAcademyHeroImg from "../assets/Learning-Academy-Spanish/Hero_img.png";

/**
 * Videos (English)
 */
const videos = [
  { title: "Conozca su Elegibilidad para el Seguro: Cómo Registrarse y Renovar", url: "https://youtu.be/i7HhxuBqiIk" },
  { title: "Prevención de Errores Médicos", url: "https://youtu.be/RrjyPX6DLoc" },
  { title: "¿Qué me Pasa? Qué Hacer Cuando no Puedes Obtener un Diagnóstico", url: "https://youtu.be/PMu1lUZCpCM" },
  { title: "Gestión y Seguridad de Opioides y Sustancias Controladas en su Cuidado", url: "https://youtu.be/f1WHpoWqQA0" },
  { title: "Comprender el Papel del Defensor del Paciente", url: "https://youtu.be/QgZFLenn2CE" },
  { title: "Cómo el Intercambio de Información de Pacientes Está Transformando la Atención de la Salud", url: "https://youtu.be/6h59Ibcs2WE" },
  { title: "Tus Derechos Como Paciente Carta de Derechos del Paciente", url: "https://youtu.be/DbXLla-GrQ8" },
  { title: "Comprender el Lenguaje de la Salud Alfabetización en Salud", url: "https://youtu.be/9wjFQHVGdTA" },
  { title: "Empoderamiento del Paciente y el Movimiento de E-Pacientes Cómo Defenderte y Hacerte Oír", url: "https://youtu.be/IeUUVKw9ZIM" },
  { title: "Cómo Encontrar Información Confiable en Internet Investigar en Línea y el E-Paciente", url: "https://youtu.be/JNlpdVZswUY" },
  { title: "Cómo Crear Tu Equipo de Atención de la Salud", url: "https://youtu.be/VXQiQKEgbPA" },
  { title: "Estrategias de Defensa del Paciente", url: "https://youtu.be/Yp4FHLW2r_s" },
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
            <h1 className="la-heroTitle">Academia de Aprendizaje</h1>
            <div className="la-heroSubtitle">
              Empodérate con nuestros cursos
            </div>
          </div>
        </div>
      </section>
      <div className="la-container">
        {/* Intro card */}
        <section className="la-introCard la-curvedCard">
          <p>
            ¿Te sientes abrumado por el sistema de salud? No estás solo. Nuestros cursos en línea gratuitos y en formato 
            breve están diseñados para empoderarte en tu camino hacia la salud, sin importar tu rol. Ya seas un paciente 
            enfrentando un nuevo diagnóstico, un cuidador apoyando a un ser querido o un defensor luchando por un mejor 
            acceso a la atención médica, estos cursos te brindan el conocimiento y las herramientas necesarias para tomar 
            el control de tus decisiones de salud, hacer preguntas informadas y sentirte seguro al navegar las complejidades
            del mundo médico. Todo está aquí, a tu propio ritmo y completamente gratis..
          </p>
        </section>

        <p className="la-subline">
          Cursos cortos y autodirigidos de empoderamiento para pacientes, diseñados para cualquier persona interesada
           en convertirse en un paciente empoderado, un cuidador empoderado, un defensor del paciente o en comprender 
           la participación del paciente y la atención centrada en el paciente.
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
            Tu donación, sin importar el tamaño, marca una diferencia significativa en nuestra misión de
            empoderar a las personas para que gestionen su salud.
          </p>
          <h2 className="la-donateTitle"> Dona hoy y ayúdanos a cambiar vidas para mejor.</h2>

          <div className="la-donateBtnRow">
            <Link to="/donate" className="la-btn" aria-label="Donate Now">
              DONA AROHA
            </Link>
          </div>
          <br />
          <p className="la-donateText">Tu generosidad apoya diversos aspectos de nuestra misión.</p>
        </section>
      </div>
      <Programs />
      <div className="la-donateBtnRow">
            <Link to="/donate" className="la-btn" aria-label="Donate Now">
              DONA AROHA
            </Link>
      </div>

    </div>
  );
}
