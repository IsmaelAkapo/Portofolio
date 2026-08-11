"use client";
import ParticlesBackground from "@/components/ParticlesBackground";
import { useLanguage } from "@/context/LanguageContext";
export default function Hero() {
  const {t,lang,setLang}=useLanguage();
  return (
    <section style={{
      minHeight: "100vh",
      background: "#0C0C0C",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      padding: "0 clamp(2rem, 8vw, 8rem)",
      position: "relative",
      overflow: "hidden"
    }}>

      <ParticlesBackground />

      {/* Navbar */}
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0,
        display: "flex", justifyContent: "space-between", alignItems: "center",
        padding: "1.5rem clamp(2rem, 8vw, 8rem)",
        background: "rgba(12,12,12,0.85)",
        backdropFilter: "blur(10px)",
        zIndex: 100
      }}>
        <span style={{
          fontFamily: "var(--font-space-mono)",
          color: "#64FFDA",
          fontSize: "0.85rem",
          letterSpacing: "0.15em"
        }}>NIA</span>

        <div style={{ display: "flex", gap: "2rem" }}>
          {[
            { key: "nav.about",    href: "#sobre-mí"  },
            { key: "nav.skills",   href: "#skills"    },
            { key: "nav.projects", href: "#proyectos" },
            { key: "nav.contact",  href: "#contacto"  },
          ].map(({ key, href }, i) => (
            <a key={key}
              href={href}
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.75rem",
                color: "#CCD6F6",
                textDecoration: "none",
                letterSpacing: "0.1em",
                transition: "color 0.2s"
              }}
              onMouseEnter={e => e.target.style.color = "#64FFDA"}
              onMouseLeave={e => e.target.style.color = "#CCD6F6"}
            >
              <span style={{ color: "#64FFDA", marginRight: "4px" }}>0{i + 1}.</span>
              {t(key)}
            </a>
          ))}
        </div>

        {/* es el botón switcher para cambiar el idioma */}
        <div style={{ display: "flex", gap: "0.5rem", marginLeft: "2rem" }}>
          {["es", "fr", "en"].map((l) => (
            <button
              key={l}
              onClick={() => setLang(l)}
              style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.65rem",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                background: "transparent",
                border: "none",
                cursor: "pointer",
                color: lang === l ? "#64FFDA" : "#8892B0",
                transition: "color 0.2s",
              }}
            >
              {l}
            </button>
          ))}
        </div>

      </nav>

      {/* Contenido */}
      <div style={{ maxWidth: "900px", paddingTop: "4rem" }}>

        <p style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: "clamp(0.85rem, 2vw, 1rem)",
          color: "#64FFDA",
          marginBottom: "1.5rem",
          letterSpacing: "0.1em"
        }}>
          {t("hero.greeting")}
        </p>

        <h1 style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 900,
          fontSize: "clamp(2.5rem, 8vw, 5.5rem)",
          color: "#CCD6F6",
          lineHeight: 1.1,
          margin: 0
        }}>
          Nouhou Ismael Akapo.
        </h1>

        <h2 style={{
          fontFamily: "var(--font-syne)",
          fontWeight: 700,
          fontSize: "clamp(2rem, 6vw, 4.5rem)",
          color: "#8892B0",
          lineHeight: 1.1,
          margin: "0.25rem 0 2rem"
        }}>
          {t("hero.tagline")}
        </h2>

        <p style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: "clamp(0.85rem, 1.5vw, 1rem)",
          color: "#8892B0",
          lineHeight: 1.8,
          maxWidth: "540px",
          marginBottom: "3rem"
        }}>
          {t("hero.description")}
        </p>

        <div style={{ display: "flex", gap: "1.5rem", flexWrap: "wrap" }}>
          <a href="#proyectos" style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.85rem",
            color: "#64FFDA",
            border: "1px solid #64FFDA",
            padding: "1rem 2rem",
            textDecoration: "none",
            letterSpacing: "0.1em",
            transition: "background 0.2s",
            display: "inline-block"
          }}
            onMouseEnter={e => e.currentTarget.style.background = "rgba(100,255,218,0.08)"}
            onMouseLeave={e => e.currentTarget.style.background = "transparent"}
          >
            {t("hero.cta")}
          </a>
        </div>
      </div>

      {/* Links laterales */}
      <div style={{
        position: "fixed",
        bottom: 0, left: "2.5rem",
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: "1.5rem"
      }}>
        {["GitHub", "LinkedIn"].map(link => (
          <a key={link} href="#" style={{
            fontFamily: "var(--font-space-mono)",
            fontSize: "0.65rem",
            color: "#8892B0",
            textDecoration: "none",
            letterSpacing: "0.1em",
            writingMode: "vertical-rl",
            transition: "color 0.2s"
          }}
            onMouseEnter={e => e.target.style.color = "#64FFDA"}
            onMouseLeave={e => e.target.style.color = "#8892B0"}
          >{link}</a>
        ))}
        <div style={{ width: "1px", height: "80px", background: "#8892B0" }} />
      </div>

      {/* Email lateral derecho */}
      <div style={{
        position: "fixed",
        bottom: 0, right: "2.5rem",
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: "1.5rem"
      }}>
        <a href="mailto:tu@email.com" style={{
          fontFamily: "var(--font-space-mono)",
          fontSize: "0.65rem",
          color: "#8892B0",
          textDecoration: "none",
          letterSpacing: "0.1em",
          writingMode: "vertical-rl",
          transition: "color 0.2s"
        }}
          onMouseEnter={e => e.target.style.color = "#64FFDA"}
          onMouseLeave={e => e.target.style.color = "#8892B0"}
        >
          tu@email.com
        </a>
        <div style={{ width: "1px", height: "80px", background: "#8892B0" }} />
      </div>

    </section>
  );
}
