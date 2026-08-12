"use client";

import { SiGithub } from "react-icons/si";
import { FaLinkedinIn } from "react-icons/fa"; // react-icons ya no trae SiLinkedin, hay que cogerlo de Font Awesome
import { FiMail } from "react-icons/fi"; // es para el icono del sobre del email
import { useLanguage } from "@/context/LanguageContext"; // es para acceder a la función de traducción

// es mi información de contacto, en un solo sitio para no repetirla por el componente
const EMAIL = "killuisma@gmail.com";
const LINKEDIN = "https://www.linkedin.com/in/nouhou-ismael-357b8b39a/";
const GITHUB = "https://github.com/IsmaelAkapo";

// es para crear los enlaces redondos de redes de abajo
function SocialLink({ href, Icon, label }) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer" // es por seguridad al abrir enlaces en pestaña nueva
      aria-label={label} // es para que un lector de pantalla sepa a dónde lleva el icono
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "48px",
        height: "48px",
        border: "1px solid rgba(255,255,255,0.15)",
        color: "#CCD6F6",
        fontSize: "1.2rem",
        transition: "color 0.2s, border-color 0.2s, transform 0.2s",
      }}
      onMouseEnter={e => {
        e.currentTarget.style.color = "#64FFDA";
        e.currentTarget.style.borderColor = "#64FFDA";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={e => {
        e.currentTarget.style.color = "#CCD6F6";
        e.currentTarget.style.borderColor = "rgba(255,255,255,0.15)";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      <Icon />
    </a>
  );
}

export default function Contact() {
  const { t } = useLanguage();

  return (
    // es la sección de contacto — el id debe ser "contacto" para que el link del navbar funcione
    <section
      id="contacto"
      style={{
        background: "#0C0C0C",
        padding: "10rem 0 6rem",
        position: "relative",
      }}
    >
      <div style={{
        padding: "0 3rem",
        maxWidth: "800px",
        margin: "0 auto",
        textAlign: "center", // es para centrar la sección y que se note que es el cierre de la página
      }}>

        {/* Label de la sección — mismo patrón que Skills y Proyectos */}
        <div style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "1rem",
          marginBottom: "1.5rem",
        }}>
          <div style={{ width: "40px", height: "2px", background: "#A8A8A8" }} />
          <span style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.75rem",
            letterSpacing: "0.3em",
            textTransform: "uppercase",
            color: "#A8A8A8",
          }}>
            {t("contact.label")}
          </span>
          <div style={{ width: "40px", height: "2px", background: "#A8A8A8" }} />
        </div>

        {/* Título */}
        <h2 style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 900,
          fontSize: "clamp(2.5rem, 7vw, 5rem)",
          lineHeight: 0.95,
          textTransform: "uppercase",
          color: "#fff",
          marginBottom: "2rem",
        }}>
          {t("contact.title1")}{" "}
          <span style={{ color: "#64FFDA" }}>{t("contact.title2")}</span>
        </h2>

        {/* Texto de invitación */}
        <p style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: "0.95rem",
          lineHeight: 1.8,
          color: "#8892B0",
          marginBottom: "3rem",
        }}>
          {t("contact.text")}
        </p>

        {/* Botón principal — el email, que es la vía de contacto que quiero destacar */}
        <a
          href={`mailto:${EMAIL}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "0.75rem",
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.9rem",
            letterSpacing: "0.1em",
            color: "#64FFDA",
            border: "1px solid #64FFDA",
            padding: "1.25rem 2.5rem",
            textDecoration: "none",
            transition: "background 0.2s",
          }}
          onMouseEnter={e => (e.currentTarget.style.background = "rgba(100,255,218,0.08)")}
          onMouseLeave={e => (e.currentTarget.style.background = "transparent")}
        >
          <FiMail /> {t("contact.cta")}
        </a>

        {/* El email escrito, por si prefieren copiarlo en vez de abrir el cliente de correo */}
        <p style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: "0.8rem",
          color: "#8892B0",
          marginTop: "1.25rem",
        }}>
          {EMAIL}
        </p>

        {/* Redes */}
        <div style={{
          display: "flex",
          justifyContent: "center",
          gap: "1rem",
          marginTop: "3.5rem",
        }}>
          <SocialLink href={GITHUB}   Icon={SiGithub}   label="GitHub" />
          <SocialLink href={LINKEDIN} Icon={FaLinkedinIn} label="LinkedIn" />
        </div>

        {/* Pie de página */}
        <p style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: "0.7rem",
          color: "#8892B0",
          marginTop: "5rem",
        }}>
          {t("contact.footer")}
        </p>

      </div>
    </section>
  );
}
