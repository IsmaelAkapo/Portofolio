"use client";

import {
  SiReact, SiJavascript, SiNodedotjs, SiPython,
  SiPhp, SiHtml5, SiCss, SiGit, SiGithub,
  SiDocker,
  SiMysql, SiTailwindcss
} from "react-icons/si";
import ParticlesBackground from "@/components/ParticlesBackground"; // es para reutilizar el fondo de partículas del Hero
import { useLanguage } from "@/context/LanguageContext"; // es para acceder al idioma actual y la función de traducción
const skills = [
  { name: "React",        Icon: SiReact,            color: "#61DAFB", cat: "frontend"  },
  { name: "JavaScript",   Icon: SiJavascript,       color: "#F7DF1E", cat: "frontend"  },
  { name: "HTML",         Icon: SiHtml5,            color: "#E34F26", cat: "frontend"  },
  { name: "CSS",          Icon: SiCss,              color: "#1572B6", cat: "frontend"  },
  { name: "Tailwind CSS", Icon: SiTailwindcss,      color: "#38B2AC", cat: "frontend"  },
  { name: "Node.js",      Icon: SiNodedotjs,        color: "#339933", cat: "backend"   },
  { name: "Python",       Icon: SiPython,           color: "#3776AB", cat: "backend"   },
  { name: "PHP",          Icon: SiPhp,              color: "#777BB4", cat: "backend"   },
  { name: "Java",         Icon: null,               color: "#007396", cat: "backend"   },
  { name: "Git",          Icon: SiGit,              color: "#F05032", cat: "devops"    },
  { name: "Docker",       Icon: SiDocker,           color: "#2496ED", cat: "devops"    },
  { name: "GitHub",       Icon: SiGithub,           color: "#ffffff", cat: "tools"     },
  { name: "VS Code",      Icon: null,               color: "#007ACC", cat: "tools"     },
  { name: "MySQL",        Icon: SiMysql,            color: "#4479A1", cat: "database"  },
];

// es para crear un componente de pastilla que muestra el icono y nombre de cada habilidad
function SkillPill({ name, Icon, color }) {
  return (
    <div
      style={{
        display: "flex", alignItems: "center", gap: "0.6rem",
        padding: "0.6rem 1rem", // es para agregar un relleno de 0.6rem en la parte superior
        // e inferior y 1rem en los lados
        border: "1px solid rgba(255,255,255,0.08)", // es para agregar un borde sutil alrededor de
        // la pastilla de habilidad
        transition: "border-color 0.2s, background 0.2s",
        cursor: "default"
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = color;
        e.currentTarget.style.background = `${color}22`; // es para agregar un fondo semitransparente del color
        // de la habilidad cuando el mouse entra en la pastilla
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.background = "transparent";
      }}
    >
      {Icon && <Icon style={{ color, fontSize: "1.2rem", flexShrink: 0 }} />}
      <span style={{
        fontFamily: "var(--font-syne)", fontWeight: 700,
        fontSize: "0.85rem", color: "#fff", whiteSpace: "nowrap"
      }}>{name}</span>
    </div>
  );
}

// es para crear una fila de categoría con label a la izquierda y pills a la derecha
function CategoryRow({ label, items, accentColor }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "2rem",
        padding: "1.75rem 0",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      {/* Label de categoría */}
      <div style={{ flexShrink: 0, width: "110px" }}>
        <span style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: "0.65rem",
          color: accentColor,
          letterSpacing: "0.25em",
          textTransform: "uppercase",
        }}>{label}</span>
      </div>

      {/* Línea separadora */}
      <div style={{ width: "30px", height: "1px", background: "rgba(255,255,255,0.15)", flexShrink: 0 }} />

      {/* Pills */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {items.map(s => <SkillPill key={s.name} {...s} />)}
      </div>
    </div>
  );
}

export default function Skills() {
  const { t } = useLanguage(); // es para acceder a la función de traducción
  const allSkills = skills.map(s => s.name);

  const frontend = skills.filter(s => s.cat === "frontend"); // es para filtrar las habilidades que pertenecen a
  // la categoría "frontend" y almacenarlas en la variable frontend
  const backend  = skills.filter(s => s.cat === "backend");
  const devops   = skills.filter(s => s.cat === "devops");
  const tools    = skills.filter(s => s.cat === "tools");
  const database = skills.filter(s => s.cat === "database");

  return (
    // es para crear la sección skills con partículas 3D de fondo, igual que el Hero
    <section
      id="skills"
      style={{
        background: "#0C0C0C",
        padding: "8rem 0",
        overflow: "hidden",
        position: "relative", // es para que las partículas se posicionen dentro de la sección
      }}
    >
      {/* Partículas 3D de fondo — igual que el Hero */}
      <ParticlesBackground />

      {/* Contenido encima de las partículas */}
      <div style={{ position: "relative", zIndex: 1 }}>

        {/* Título */}
        <div style={{ padding: "0 3rem", maxWidth: "1400px", margin: "0 auto 5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{ width: "40px", height: "2px", background: "#A8A8A8" }} />
            <span style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#A8A8A8",
            }}>
              {t("skills.label")}
            </span>
          </div>
          <h2 style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 900,
            fontSize: "clamp(3rem, 8vw, 6rem)",
            lineHeight: 0.9,
            textTransform: "uppercase",
            color: "#fff",
          }}>
            {t("skills.title1")}
            <br />
            <span style={{ color: "#E8500A" }}>{t("skills.title2")}</span>
          </h2>
        </div>

        {/* Marquee */}
        <div style={{ overflow: "hidden", marginBottom: "5rem" }}>
          <div style={{ display: "flex", width: "max-content", animation: "marquee 25s linear infinite" }}>
            {[...allSkills, ...allSkills, ...allSkills].map((name, i) => (
              <span key={i} style={{
                fontFamily: "var(--font-syne)",
                fontWeight: 800,
                fontSize: "clamp(1.5rem, 3vw, 2.5rem)",
                textTransform: "uppercase",
                whiteSpace: "nowrap",
                padding: "0 2rem",
                letterSpacing: "-0.02em",
                color: i % 3 === 0 ? "#E8500A" : i % 3 === 1 ? "#A8A8A8" : "rgba(255,255,255,0.07)",
              }}>
                {name}{" "}
                <span style={{ color: "#64FFDA", fontSize: "0.3em" }}>◆</span>
              </span>
            ))}
          </div>
        </div>

        {/* Filas de categorías */}
        <div style={{
          padding: "0 3rem",
          maxWidth: "1400px",
          margin: "0 auto",
          borderTop: "1px solid rgba(255,255,255,0.06)",
        }}>
          <CategoryRow label="Frontend" items={frontend} accentColor="#E8500A" />
          <CategoryRow label="Backend"  items={backend}  accentColor="#64FFDA" />
          <CategoryRow label="DevOps"   items={devops}   accentColor="#E8500A" />
          <CategoryRow label="Database" items={database} accentColor="#A8A8A8" />
          <CategoryRow label="Tools"    items={tools}    accentColor="#A8A8A8" />
        </div>

      </div>
    </section>
  );
}
