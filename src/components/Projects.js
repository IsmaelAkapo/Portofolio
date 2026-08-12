"use client";

import Image from "next/image"; // es para que Next optimice el peso de las capturas
import { SiGithub } from "react-icons/si";
import { FiExternalLink } from "react-icons/fi"; // es para el icono del link a la demo en vivo
import { useLanguage } from "@/context/LanguageContext"; // es para acceder a la función de traducción

// es el array con mis proyectos — cada objeto se convierte en una tarjeta
// para añadir uno nuevo: copias un objeto, cambias los datos, y añades su
// clave "projects.<id>.desc" en los 3 archivos de locales
const proyectos = [
  {
    id: "eduino",
    titulo: "Eduino",
    tech: ["JavaScript", "PHP", "HTML", "CSS", "Docker"],
    github: "https://github.com/IsmaelAkapo/Eduino",
    demo: null, // es null porque todavía no está desplegado
    imagen: null, // es null porque al no estar desplegado no se le puede hacer captura
    nota: true, // es para mostrar el aviso de que se puede ejecutar en local, con las cuentas de prueba
    destacado: true, // es para que ocupe el ancho completo, al ser mi proyecto principal
  },
  {
    id: "bartido",
    titulo: "Bartido",
    tech: ["HTML", "Tailwind CSS", "JavaScript", "AOS"],
    github: "https://github.com/IsmaelAkapo/Bartido",
    demo: "https://ismaelakapo.github.io/Bartido/",
    imagen: "/proyectos/bartido.png",
    destacado: false,
  },
  {
    id: "bartidobar",
    titulo: "Bartidobar PWA",
    tech: ["PWA", "Service Worker", "JavaScript", "HTML"],
    github: "https://github.com/IsmaelAkapo/Bartidobar",
    demo: "https://ismaelakapo.github.io/Bartidobar/",
    imagen: null, // pendiente: las animaciones al hacer scroll salen en blanco al capturarla
    destacado: false,
  },
  {
    id: "daw",
    titulo: "Ejercicios DAW",
    tech: ["JavaScript", "DOM", "HTML", "CSS"],
    github: "https://github.com/IsmaelAkapo/daw_visual2Deswic",
    demo: null,
    imagen: null,
    destacado: false,
  },
  {
    id: "miproyectoweb",
    titulo: "Mi Proyecto Web",
    tech: ["HTML"],
    github: "https://github.com/IsmaelAkapo/mi_proyecto_web",
    demo: null,
    imagen: null,
    destacado: false,
  },
  {
    id: "messi",
    titulo: "Messi",
    tech: ["Markdown", "GitHub"],
    github: "https://github.com/IsmaelAkapo/Messi",
    demo: null,
    imagen: null,
    destacado: false,
  },
  {
    id: "despliegueweb",
    titulo: "Despliegue Web",
    tech: ["Git", "GitHub"],
    github: "https://github.com/IsmaelAkapo/Despliegueweb",
    demo: null,
    imagen: null,
    destacado: false,
  },
];

// es para crear la tarjeta de cada proyecto
function ProjectCard({ p, index, t }) {
  return (
    <article
      style={{
        // es para que el proyecto destacado ocupe las 2 columnas de la rejilla
        gridColumn: p.destacado ? "1 / -1" : "auto",
        display: "flex",
        flexDirection: "column",
        gap: "1.25rem",
        padding: "2.5rem",
        background: "rgba(255,255,255,0.02)",
        border: "1px solid rgba(255,255,255,0.08)",
        transition: "border-color 0.3s, transform 0.3s, background 0.3s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.borderColor = "#64FFDA";
        e.currentTarget.style.transform = "translateY(-6px)"; // es para levantar la tarjeta al pasar el mouse
        e.currentTarget.style.background = "rgba(100,255,218,0.03)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
        e.currentTarget.style.transform = "translateY(0)";
        e.currentTarget.style.background = "rgba(255,255,255,0.02)";
      }}
    >
      {/* Captura del proyecto — si no hay imagen, se muestra un marcador con la inicial */}
      <div style={{
        position: "relative",
        width: "100%",
        aspectRatio: "16 / 9", // es para que todas las tarjetas tengan la misma proporción
        overflow: "hidden",
        background: "rgba(255,255,255,0.03)",
        border: "1px solid rgba(255,255,255,0.06)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}>
        {p.imagen ? (
          <Image
            src={p.imagen}
            alt={`Captura del proyecto ${p.titulo}`}
            fill // es para que la imagen rellene el contenedor de arriba
            sizes="(max-width: 768px) 100vw, 50vw" // es para que Next sirva el tamaño adecuado según la pantalla
            style={{ objectFit: "cover", objectPosition: "top" }}
          />
        ) : (
          // es el marcador que sale mientras el proyecto no tenga captura
          <span style={{
            fontFamily: "var(--font-syne)",
            fontWeight: 900,
            fontSize: "4rem",
            color: "rgba(255,255,255,0.07)",
          }}>
            {p.titulo.charAt(0)}
          </span>
        )}
      </div>

      {/* Cabecera: número del proyecto */}
      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start" }}>
        <span style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: "0.7rem",
          letterSpacing: "0.2em",
          color: "#E8500A",
        }}>
          {/* es para numerar los proyectos como 01, 02, 03... */}
          {String(index + 1).padStart(2, "0")}
        </span>

        {/* es la etiqueta que avisa si el proyecto tiene demo en vivo */}
        {p.demo && (
          <span style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.6rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#64FFDA",
            border: "1px solid rgba(100,255,218,0.4)",
            padding: "0.25rem 0.6rem",
          }}>
            {t("projects.live")}
          </span>
        )}
      </div>

      {/* Título del proyecto */}
      <h3 style={{
        fontFamily: "var(--font-syne)",
        fontWeight: 800,
        fontSize: p.destacado ? "clamp(2rem, 4vw, 3rem)" : "1.75rem",
        color: "#fff",
        lineHeight: 1.1,
      }}>
        {p.titulo}
      </h3>

      {/* Descripción — viene de los locales para que se traduzca */}
      <p style={{
        fontFamily: "var(--font-space-mono)",
        fontSize: "0.9rem",
        lineHeight: 1.7,
        color: "#8892B0",
        maxWidth: p.destacado ? "700px" : "none", // es para que el texto no se estire demasiado en el destacado
      }}>
        {t(`projects.${p.id}.desc`)}
      </p>

      {/* Aviso de ejecución local — solo en los proyectos que no tienen demo online
          pero sí se pueden levantar con las instrucciones del README */}
      {p.nota && (
        <div style={{
          borderLeft: "2px solid #64FFDA",
          paddingLeft: "1rem",
          fontFamily: "var(--font-space-mono)",
          fontSize: "0.75rem",
          lineHeight: 1.7,
          color: "#8892B0",
        }}>
          {t(`projects.${p.id}.nota`)}
        </div>
      )}

      {/* Stack de tecnologías */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem", marginTop: "auto" }}>
        {p.tech.map(tech => (
          <span
            key={tech}
            style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.7rem",
              padding: "0.35rem 0.75rem",
              color: "#CCD6F6",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {tech}
          </span>
        ))}
      </div>

      {/* Botones — con texto visible, para que se vean bien y se pueda entrar al proyecto */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem", marginTop: "0.75rem" }}>

        {/* es el botón principal: solo aparece si el proyecto está desplegado */}
        {p.demo && (
          <a
            href={p.demo}
            target="_blank"
            rel="noopener noreferrer" // es por seguridad al abrir enlaces en pestaña nueva
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "0.6rem",
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.8rem",
              letterSpacing: "0.1em",
              color: "#64FFDA",
              border: "1px solid #64FFDA",
              padding: "0.85rem 1.5rem",
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={e => (e.currentTarget.style.background = "rgba(100,255,218,0.08)")}
            onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
          >
            <FiExternalLink /> {t("projects.viewDemo")}
          </a>
        )}

        {/* es el botón secundario al repositorio — este siempre aparece */}
        <a
          href={p.github}
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.6rem",
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.8rem",
            letterSpacing: "0.1em",
            color: "#CCD6F6",
            border: "1px solid rgba(255,255,255,0.2)",
            padding: "0.85rem 1.5rem",
            textDecoration: "none",
            transition: "background 0.2s, border-color 0.2s",
          }}
          onMouseEnter={e => {
            e.currentTarget.style.background = "rgba(255,255,255,0.05)";
            e.currentTarget.style.borderColor = "#CCD6F6";
          }}
          onMouseLeave={e => {
            e.currentTarget.style.background = "transparent";
            e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
          }}
        >
          <SiGithub /> {t("projects.viewCode")}
        </a>
      </div>
    </article>
  );
}

export default function Projects() {
  const { t } = useLanguage();

  return (
    // es la sección de proyectos — el id debe ser "proyectos" para que el link del navbar funcione
    <section
      id="proyectos"
      style={{
        background: "#0C0C0C",
        padding: "8rem 0",
        position: "relative",
        // el scroll-margin-top está en globals.css, aplicado a todas las <section>
      }}
    >
      <div style={{ padding: "0 3rem", maxWidth: "1400px", margin: "0 auto" }}>

        {/* Título de la sección — mismo patrón que en Skills */}
        <div style={{ marginBottom: "5rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{ width: "40px", height: "2px", background: "#A8A8A8" }} />
            <span style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#A8A8A8",
            }}>
              {t("projects.label")}
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
            {t("projects.title1")}
            <br />
            <span style={{ color: "#64FFDA" }}>{t("projects.title2")}</span>
          </h2>
        </div>

        {/* Rejilla de proyectos — se adapta sola al ancho de la pantalla */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))",
          gap: "1.5rem",
        }}>
          {proyectos.map((p, i) => (
            <ProjectCard key={p.id} p={p} index={i} t={t} />
          ))}
        </div>

      </div>
    </section>
  );
}
