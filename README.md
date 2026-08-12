# 💼 Portfolio — Nouhou Ismael Akapo

> Portfolio personal de un desarrollador Fullstack Junior, con soporte multiidioma y fondo 3D animado.

**🔗 Ver en vivo:** https://portofolio-neon-eight-61.vercel.app/

---

## 🛠️ Tecnologías

| Capa | Tecnología |
|---|---|
| Framework | Next.js 16 (App Router) |
| Estilos | Tailwind CSS v4 + estilos inline |
| 3D | Three.js + React Three Fiber |
| Iconos | react-icons |
| Idiomas | Sistema propio con React Context (sin librería externa) |
| Despliegue | Vercel |

---

## 🚀 Cómo ejecutarlo en local

### Requisitos

- [Node.js](https://nodejs.org/) 20 o superior
- Git

### Pasos

```bash
git clone https://github.com/IsmaelAkapo/Portofolio.git
cd Portofolio
npm install
npm run dev
```

Y abrir http://localhost:3000

### Otros comandos

```bash
npm run build   # compilar para producción
npm run start   # servir la versión compilada
npm run lint    # revisar el código
```

---

## 🗂️ Estructura

```
src/
├── app/
│   ├── layout.js          → fuentes (Syne + Space Mono) y metadatos
│   ├── page.js            → monta las secciones en orden
│   └── globals.css        → variables de color y scroll suave
├── components/
│   ├── Hero.js            → portada, navbar fija y selector de idioma
│   ├── Skills.js          → marquee + tecnologías por categoría
│   ├── Projects.js        → tarjetas de proyectos
│   ├── Contact.js         → email y redes
│   └── ParticlesBackground.js  → partículas 3D con Three.js
├── context/
│   └── LanguageContext.js → estado del idioma y función t()
└── locales/
    ├── es.json            → español
    ├── en.json            → inglés
    └── fr.json            → francés
```

---

## 🌍 Cómo funcionan los idiomas

No uso ninguna librería de i18n. `LanguageContext` guarda el idioma actual y expone una función `t()`:

```js
const { t, lang, setLang } = useLanguage();

<h1>{t("hero.tagline")}</h1>
```

Las claves son **planas**, con puntos en el nombre (`"skills.label"`), no objetos anidados. Si una clave no existe, `t()` devuelve la clave misma, así se ve enseguida qué falta por traducir.

**Para añadir un texto nuevo:** añadir la misma clave en `es.json`, `en.json` y `fr.json`.

---

## ➕ Cómo añadir un proyecto

Los proyectos están en el array `proyectos` al principio de `src/components/Projects.js`:

```js
{
  id: "miproyecto",                                  // debe coincidir con la clave de traducción
  titulo: "Mi Proyecto",
  tech: ["React", "Node.js"],
  github: "https://github.com/IsmaelAkapo/...",
  demo: "https://...",                               // null si no está desplegado
  imagen: "/proyectos/miproyecto.png",               // null si no hay captura
  destacado: false,                                  // true = ocupa todo el ancho
}
```

Después hay que añadir la descripción en los tres idiomas, con la clave `projects.<id>.desc`.

- Si `demo` es `null`, el botón "Ver proyecto" y la etiqueta "En vivo" desaparecen solos.
- Si `imagen` es `null`, sale un marcador con la inicial del proyecto.
- Las capturas van en `public/proyectos/`.

---

## 📬 Contacto

- **Email:** killuisma@gmail.com
- **LinkedIn:** https://www.linkedin.com/in/nouhou-ismael-357b8b39a/
- **GitHub:** https://github.com/IsmaelAkapo
