"use client";

import { useLanguage } from "@/context/LanguageContext"; // es para acceder a la función de traducción

// es la lista de datos rápidos que aparece a la derecha del texto
const datos = [
  { clave: "about.data1.label", valor: "about.data1.value" },
  { clave: "about.data2.label", valor: "about.data2.value" },
  { clave: "about.data3.label", valor: "about.data3.value" },
];

export default function About() {
  const { t } = useLanguage();

  return (
    // es la sección sobre mí — el id debe ser "sobre-mi" para que el link del navbar funcione
    <section
      id="sobre-mi"
      style={{
        background: "#0C0C0C",
        padding: "8rem 0",
        position: "relative",
      }}
    >
      <div style={{ padding: "0 3rem", maxWidth: "1400px", margin: "0 auto" }}>

        {/* Título de la sección — mismo patrón que las demás */}
        <div style={{ marginBottom: "4rem" }}>
          <div style={{ display: "flex", alignItems: "center", gap: "1rem", marginBottom: "1rem" }}>
            <div style={{ width: "40px", height: "2px", background: "#A8A8A8" }} />
            <span style={{
              fontFamily: "var(--font-space-mono)",
              fontSize: "0.75rem",
              letterSpacing: "0.3em",
              textTransform: "uppercase",
              color: "#A8A8A8",
            }}>
              {t("about.label")}
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
            {t("about.title1")}
            <br />
            <span style={{ color: "#E8500A" }}>{t("about.title2")}</span>
          </h2>
        </div>

        {/* Dos columnas: el texto a la izquierda, los datos rápidos a la derecha.
            Con auto-fit se apilan solas en móvil, sin media queries */}
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "4rem",
          alignItems: "start",
        }}>

          {/* Texto */}
          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            {["about.p1", "about.p2", "about.p3"].map(clave => (
              <p key={clave} style={{
                fontFamily: "var(--font-space-mono)",
                fontSize: "0.9rem",
                lineHeight: 1.9,
                color: "#8892B0",
              }}>
                {t(clave)}
              </p>
            ))}
          </div>

          {/* Datos rápidos */}
          <div style={{ display: "flex", flexDirection: "column" }}>
            {datos.map(({ clave, valor }, i) => (
              <div
                key={clave}
                style={{
                  padding: "1.5rem 0",
                  // es para no poner borde arriba en el primero y que no se duplique la línea
                  borderTop: i === 0 ? "none" : "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <span style={{
                  display: "block",
                  fontFamily: "var(--font-space-mono)",
                  fontSize: "0.65rem",
                  letterSpacing: "0.25em",
                  textTransform: "uppercase",
                  color: "#64FFDA",
                  marginBottom: "0.6rem",
                }}>
                  {t(clave)}
                </span>
                <span style={{
                  fontFamily: "var(--font-syne)",
                  fontWeight: 700,
                  fontSize: "1.1rem",
                  color: "#CCD6F6",
                  lineHeight: 1.4,
                }}>
                  {t(valor)}
                </span>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
