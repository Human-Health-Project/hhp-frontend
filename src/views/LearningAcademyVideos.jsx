import React, { useMemo, useState, useEffect } from "react";
import "./LearningAcademyVideos.css";

function getYouTubeId(url) {
  try {
    const u = new URL(url);

    if (u.hostname.includes("youtu.be")) return u.pathname.replace("/", "");

    const v = u.searchParams.get("v");
    if (v) return v;

    return "";
  } catch {
    // fallback for odd formats
    const match = String(url).match(/(youtu\.be\/|v=)([^&/]+)/);
    return match?.[2] || "";
  }
}

function getYouTubeThumb(url) {
  const id = getYouTubeId(url);
  return id ? `https://img.youtube.com/vi/${id}/hqdefault.jpg` : "";
}

export default function LearningAcademyVideosFilter() {
  const videos = useMemo(
    () => [
      // =========================
      // English — Patient Advocacy & Empowerment
      // =========================
      {
        title: "Understanding the Role of the Patient Advocate - Quiz in Description",
        url: "https://www.youtube.com/watch?v=wsBV08yKexo",
        topic: "Patient Advocacy & Empowerment",
        language: "English",
      },
      {
        title: "Approaches to Patient Advocacy - Quiz in Description",
        url: "https://www.youtube.com/watch?v=iTkRsXqUGHg",
        topic: "Patient Advocacy & Empowerment",
        language: "English",
      },

      // =========================
      // English — Navigating the Healthcare System
      // =========================
      {
        title: "Patient Empowerment and the ePatient Movement - Quiz in Description",
        url: "https://www.youtube.com/watch?v=LNrLFxKJBIo",
        topic: "Navigating the Healthcare System",
        language: "English",
      },
      {
        title: "Building Your Healthcare Team - Quiz in Description",
        url: "https://www.youtube.com/watch?v=j9q7pUUXAtY",
        topic: "Navigating the Healthcare System",
        language: "English",
      },
      {
        title: "Understanding the Language of Health (Health Literacy) - Quiz in Description",
        url: "https://www.youtube.com/watch?v=eVY0Eyv8bRs",
        topic: "Navigating the Healthcare System",
        language: "English",
      },
      {
        title: "Finding Credible Information Online - Quiz in Description",
        url: "https://www.youtube.com/watch?v=VG0wzaXE-CU",
        topic: "Navigating the Healthcare System",
        language: "English",
      },

      // =========================
      // English — Patient Rights / Safety / Protection
      // =========================
      {
        title: "Your Rights as a Patient (Patient Bill of Rights)",
        url: "https://www.youtube.com/watch?v=d92T28rrBKU",
        topic: "Patient Rights / Safety / Protection",
        language: "English",
      },
      {
        title: "Preventing Medical Errors - Quiz in Description",
        url: "https://www.youtube.com/watch?v=hbG9Dkz6chA",
        topic: "Patient Rights / Safety / Protection",
        language: "English",
      },
      {
        title: "Managing and Securing Opioids and Controlled Substances in Your Care - Quiz in Description",
        url: "https://www.youtube.com/watch?v=sreABpbiYHU",
        topic: "Patient Rights / Safety / Protection",
        language: "English",
      },
      {
        title: "How Shared Patient Information (Previously Real-World Data) is Transforming Healthcare - Quiz Below",
        url: "https://www.youtube.com/watch?v=d76TAoANXPw",
        topic: "Patient Rights / Safety / Protection",
        language: "English",
      },

      // =========================
      // English — Diagnosis & Medical Problem Solving
      // =========================
      {
        title: "What's Wrong With Me: What to do When You Can't Get a Diagnosis - Quiz in Description",
        url: "https://www.youtube.com/watch?v=NI7lsbtpb7Q",
        topic: "Diagnosis & Medical Problem Solving",
        language: "English",
      },
      {
        title: "Knowing Your Insurance Eligibility: How to Sign Up and Renew - Quiz in Description",
        url: "https://www.youtube.com/watch?v=E9xO5Zb6Srk",
        topic: "Diagnosis & Medical Problem Solving",
        language: "English",
      },

      // =========================
      // Mandarin — Diagnosis & Medical Problem Solving
      // =========================
      {
        title: "如何在美国注册和续订健康保险",
        url: "https://www.youtube.com/watch?v=rjO87yJ_6yo",
        topic: "Diagnosis & Medical Problem Solving",
        language: "Mandarin",
      },

      // =========================
      // Spanish — Diagnosis & Medical Problem Solving
      // =========================
      {
        title: "Conozca su Elegibilidad para el Seguro: Cómo Registrarse y Renovar",
        url: "https://youtu.be/i7HhxuBqiIk",
        topic: "Diagnosis & Medical Problem Solving",
        language: "Spanish",
      },
      {
        title: "¿Qué me Pasa? Qué Hacer Cuando no Puedes Obtener un Diagnóstico",
        url: "https://youtu.be/PMu1lUZCpCM",
        topic: "Diagnosis & Medical Problem Solving",
        language: "Spanish",
      },

      // =========================
      // Spanish — Navigating the Healthcare System
      // =========================
      {
        title: "Comprender el lenguaje de la salud (alfabetización en salud)",
        url: "https://youtu.be/9wjFQHVGdTA",
        topic: "Navigating the Healthcare System",
        language: "Spanish",
      },
      {
        title: "Empoderamiento del Paciente y el Movimiento de E-Pacientes: Cómo Defenderte y Hacerte Oír",
        url: "https://youtu.be/IeUUVKw9ZIM",
        topic: "Navigating the Healthcare System",
        language: "Spanish",
      },
      {
        title: "Cómo Encontrar Información Confiable en Internet: Investigar en Línea y el E-Paciente",
        url: "https://youtu.be/JNlpdVZswUY",
        topic: "Navigating the Healthcare System",
        language: "Spanish",
      },
      {
        title: "Cómo Crear Tu Equipo de Atención de la Salud",
        url: "https://youtu.be/VXQiQKEgbPA",
        topic: "Navigating the Healthcare System",
        language: "Spanish",
      },

      // =========================
      // Spanish — Patient Advocacy & Empowerment
      // =========================
      {
        title: "Comprender el Papel del Defensor del Paciente",
        url: "https://youtu.be/QgZFLenn2CE",
        topic: "Patient Advocacy & Empowerment",
        language: "Spanish",
      },
      {
        title: "Estrategias de Defensa del Paciente",
        url: "https://youtu.be/Yp4FHLW2r_s",
        topic: "Patient Advocacy & Empowerment",
        language: "Spanish",
      },

      // =========================
      // Spanish — Patient Rights / Safety / Protection
      // =========================
      {
        title: "Prevención de Errores Médicos",
        url: "https://youtu.be/RrjyPX6DLoc",
        topic: "Patient Rights / Safety / Protection",
        language: "Spanish",
      },
      {
        title: "Gestión y Seguridad de Opioides y Sustancias Controladas en su Cuidado",
        url: "https://youtu.be/f1WHpoWqQA0",
        topic: "Patient Rights / Safety / Protection",
        language: "Spanish",
      },
      {
        title: "Cómo el intercambio de información de pacientes está transformando la atención de la salud",
        url: "https://youtu.be/6h59Ibcs2WE",
        topic: "Patient Rights / Safety / Protection",
        language: "Spanish",
      },
      {
        title: "Tus derechos como paciente: carta de derechos del paciente",
        url: "https://youtu.be/DbXLla-GrQ8",
        topic: "Patient Rights / Safety / Protection",
        language: "Spanish",
      },
    ],
    []
  );

  const allTopics = useMemo(() => {
    const set = new Set(videos.map((v) => v.topic));
    return Array.from(set);
  }, [videos]);

  const allLanguages = useMemo(() => {
    const order = ["English", "Mandarin", "Spanish"];
    const set = new Set(videos.map((v) => v.language));
    return order.filter((l) => set.has(l));
  }, [videos]);

  const [selectedTopics, setSelectedTopics] = useState([]);
  const [selectedLangs, setSelectedLangs] = useState([]);
  const [page, setPage] = useState(1);

  const pageSize = 8;

  const toggleValue = (value, setter) => {
    setter((prev) => (prev.includes(value) ? prev.filter((x) => x !== value) : [...prev, value]));
  };

  const clearAll = () => {
    setSelectedTopics([]);
    setSelectedLangs([]);
    setPage(1);
  };

  const filtered = useMemo(() => {
    const topicOn = selectedTopics.length > 0;
    const langOn = selectedLangs.length > 0;

    return videos.filter((v) => {
      const okTopic = !topicOn || selectedTopics.includes(v.topic);
      const okLang = !langOn || selectedLangs.includes(v.language);
      return okTopic && okLang;
    });
  }, [videos, selectedTopics, selectedLangs]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));

  useEffect(() => {
    setPage(1);
  }, [selectedTopics, selectedLangs]);

  useEffect(() => {
    if (page > totalPages) setPage(totalPages);
  }, [page, totalPages]);

  const pageItems = useMemo(() => {
    const start = (page - 1) * pageSize;
    return filtered.slice(start, start + pageSize);
  }, [filtered, page, pageSize]);

  // counts (respect the OTHER filter dimension)
  const topicCounts = useMemo(() => {
    const langOn = selectedLangs.length > 0;
    const base = videos.filter((v) => !langOn || selectedLangs.includes(v.language));
    const map = {};
    allTopics.forEach((t) => (map[t] = 0));
    base.forEach((v) => (map[v.topic] = (map[v.topic] || 0) + 1));
    return map;
  }, [videos, allTopics, selectedLangs]);

  const languageCounts = useMemo(() => {
    const topicOn = selectedTopics.length > 0;
    const base = videos.filter((v) => !topicOn || selectedTopics.includes(v.topic));
    const map = {};
    allLanguages.forEach((l) => (map[l] = 0));
    base.forEach((v) => (map[v.language] = (map[v.language] || 0) + 1));
    return map;
  }, [videos, allLanguages, selectedTopics]);

  return (
    <div className="lavf-page">
      <div className="lavf-container">
        <h1 className="lavf-title">LEARNING ACADEMY VIDEOS</h1>

        <div className="lavf-layout">
          {/* LEFT: Cards */}
          <main className="lavf-main">
            <div className="lavf-grid">
              {pageItems.map((v) => {
                const thumb = getYouTubeThumb(v.url);

                return (
                  <a
                    key={`${v.url}-${v.language}`}
                    className="lavf-card"
                    href={v.url}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={`Open video: ${v.title}`}
                  >
                    <div className="lavf-thumbFrame">
                      {thumb ? (
                        <img className="lavf-thumb" src={thumb} alt={v.title} loading="lazy" />
                      ) : (
                        <div className="lavf-thumbFallback">Thumbnail unavailable</div>
                      )}
                      <div className="lavf-badges">
                        <span className="lavf-badge">{v.language}</span>
                        <span className="lavf-badge lavf-badgeMuted">{v.topic}</span>
                      </div>
                    </div>

                    <div className="lavf-cardBody">
                      <div className="lavf-cardTitle">{v.title}</div>
                    </div>
                  </a>
                );
              })}
            </div>

            {filtered.length === 0 && (
              <div className="lavf-empty">No videos match your filters. Try Clear all.</div>
            )}

            {/* Pagination (8 per page) */}
            {filtered.length > 0 && (
              <div className="lavf-pagination">
                <button
                  type="button"
                  className="lavf-pageBtn"
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                >
                  Prev
                </button>

                <div className="lavf-pageInfo">
                  Page <strong>{page}</strong> of <strong>{totalPages}</strong>
                </div>

                <button
                  type="button"
                  className="lavf-pageBtn"
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                >
                  Next
                </button>
              </div>
            )}
          </main>

          {/* RIGHT: Filters */}
          <aside className="lavf-side">
            <div className="lavf-filterCard">
              <div className="lavf-filterTop">
                <div className="lavf-filterHeading">Filters</div>
                <button type="button" className="lavf-clearBtn" onClick={clearAll}>
                  Clear all
                </button>
              </div>

              <div className="lavf-filterSection">
                <div className="lavf-filterLabel">Topic</div>

                <div className="lavf-filterList">
                  {allTopics.map((t) => (
                    <label key={t} className="lavf-checkRow">
                      <input
                        type="checkbox"
                        checked={selectedTopics.includes(t)}
                        onChange={() => toggleValue(t, setSelectedTopics)}
                      />
                      <span className="lavf-checkText">{t}</span>
                      <span className="lavf-count">{topicCounts[t] ?? 0}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="lavf-filterSection">
                <div className="lavf-filterLabel">Language</div>

                <div className="lavf-filterList">
                  {allLanguages.map((l) => (
                    <label key={l} className="lavf-checkRow">
                      <input
                        type="checkbox"
                        checked={selectedLangs.includes(l)}
                        onChange={() => toggleValue(l, setSelectedLangs)}
                      />
                      <span className="lavf-checkText">{l}</span>
                      <span className="lavf-count">{languageCounts[l] ?? 0}</span>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
