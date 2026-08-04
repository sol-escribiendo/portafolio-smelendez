import { useState, useEffect, useRef } from "react";
import "./app.css";

const projects = [
  {
    id: 1,
    name: "Cmouse",
    category: "Beauty & Wellness",
    year: "2024",
    description:
      "Landing page para una plataforma de bienestar y belleza. El desafío fue crear una experiencia cálida y sofisticada que conectara emocionalmente con usuarios que buscan servicios de cuidado personal.",
    tags: ["Landing Page", "UX Design", "Visual Design"],
    color: "#3D5A3E",
    accentColor: "#F5A623",
    imageUrl:
      "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    process: [
      "Research de usuarios y competidores en el sector beauty",
      "Arquitectura de información y wireframes de baja fidelidad",
      "Sistema de diseño con paleta verde y dorado",
      "Prototipo interactivo y pruebas de usabilidad",
    ],
  },
  {
    id: 2,
    name: "Minds",
    category: "Fashion Education",
    year: "2024",
    description:
      "Plataforma educativa de moda con dashboard completo para estudiantes y profesionales. El reto fue organizar contenido denso —webinars, consultorías, tendencias— en una interfaz fluida y motivadora.",
    tags: ["Dashboard", "UX/UI", "Design System"],
    color: "#E91E8C",
    accentColor: "#FFD700",
    imageUrl:
      "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    process: [
      "Mapeo de flujos de usuario para 3 tipos de perfiles",
      "Sistema de tabs y navegación lateral optimizada",
      "Componentes reutilizables en pink branding bold",
      "Testing con usuarios reales de moda",
    ],
  },
  {
    id: 3,
    name: "Teamway",
    category: "UX Lead · Ecommerce · Retail",
    year: "2023–2024",
    description:
      "Feature OCR para la app Jumbo de Cencosud. Lideré el proceso completo desde research con 4 perfiles de usuario hasta prototipado hi-fi, análisis heurístico con 87% de efectividad y 7 User Stories. La solución permite fotografiar recetas o listas de compra para agregarlas automáticamente al carro.",
    tags: ["UX Lead", "Design Sprint", "Ecommerce", "IA"],
    color: "#1a5c1a",
    accentColor: "#A8E6A0",
    imageUrl:
      "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80",
    gallery: [],
    process: [
      "Research: 4 perfiles de cliente Jumbo — Exploradora, Eficiente, Selectiva, Oportunista",
      "Hallazgos: mapa de comportamientos, dolores, motivaciones y aspiraciones por perfil",
      "Customer Journey Map con la iniciativa OCR integrada en el flujo de compra",
      "Doble diamante: Entendiendo → Definiendo → Trazando → Prototipando → Testeando",
      "7 User Stories: fotografiar receta, subir desde galería, cambiar producto, agregar al carro",
      "Análisis heurístico: 104/120 puntos = 87% de efectividad",
      "AI Heatmap predictivo para detectar oportunidades de mejora pre-desarrollo",
    ],
    impact: "★ 87% efectividad heurística · Prototipo aprobado para desarrollo en Jumbo App",
  },
  {
    id: 4,
    name: "Minds Services",
    category: "Makeup Artist Platform",
    year: "2024",
    description:
      "Página de servicios para maquilladores profesionales dentro del ecosistema Minds. Diseñada para comunicar experiencia y confianza mientras facilita la comparación de precios y perfiles de artistas.",
    tags: ["Service Design", "UI Design", "E-commerce"],
    color: "#1A1A1A",
    accentColor: "#FF69B4",
    imageUrl:
      "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
    process: [
      "Card sorting con usuarios para jerarquía de información",
      "Grid de artistas con fotografías de impacto visual",
      "Footer tipográfico bold como firma de marca",
      "Integración de sistema de precios transparente",
    ],
  },
  {
    id: 5,
    name: "Nalia",
    category: "Agent Experience · IA · Fintech",
    year: "2025",
    description:
      "Agente de IA para gestión personal de seguros. Diseñé la identidad de marca, flujos de onboarding, chat conversacional con IA y la experiencia móvil completa — desde el login hasta la revisión de trámites — con foco en claridad, confianza y empatía hacia un usuario que no entiende sus propios seguros.",
    tags: ["AX Design", "UX/UI Mobile", "IA Conversacional", "Fintech"],
    color: "#2d2060",
    accentColor: "#B8B0F5",
    imageUrl: "/portafolio-smelendez/nalia-mobile.png",
    gallery: [
      { src: "/portafolio-smelendez/nalia-logo-page-1.png", label: "Identidad de marca — Logo Nalia" },
      { src: "/portafolio-smelendez/nalia-login-page-1.png", label: "Login, registro y mandato de representación" },
      { src: "/portafolio-smelendez/nalia-mobile.png", label: "Home, perfil y mis trámites" },
      { src: "/portafolio-smelendez/nalia-chat-page-1.png", label: "Chat con IA — análisis de seguros CMF" },
      { src: "/portafolio-smelendez/nalia-password-page-1.png", label: "Recuperación de contraseña y estados de error" },
    ],
    process: [
      "Discovery & Research: levantamiento de expectativas y casos de uso del agente",
      "Branding: identidad, tono conversacional humano y empático (tagline: 'Entiende, decide y recupera')",
      "Diseño de onboarding: login, registro, mandato de representación legal",
      "Chat conversacional con IA: flujo de análisis de documento CMF y recomendaciones personalizadas",
      "Pantallas de perfil, trámites y estados del sistema (errores, confirmaciones, vacíos)",
    ],
  },
  {
    id: 6,
    name: "USS App",
    category: "UX Research · Educación",
    year: "2022–2023",
    description:
      "Rediseño de la app institucional de la Universidad San Sebastián. Lideré la investigación de usuarios que identificó los insights clave para mejorar la experiencia y navegación. El resultado impulsó a la USS del puesto 21 al 9 en el ranking nacional.",
    tags: ["User Research", "UX Strategy", "App Design"],
    color: "#1a3a6e",
    accentColor: "#A8C4FF",
    imageUrl: "/portafolio-smelendez/uss-app-mockup.jpg",
    gallery: [
      { src: "/portafolio-smelendez/uss-persona-francisco.png", label: "Persona — Pregrado" },
      { src: "/portafolio-smelendez/uss-persona-felipe.png", label: "Persona — Postgrado" },
      { src: "/portafolio-smelendez/uss-persona-antonia.png", label: "Persona — Pregrado F" },
      { src: "/portafolio-smelendez/uss-diamante.png", label: "Doble Diamante" },
      { src: "/portafolio-smelendez/uss-app-desktop.png", label: "Wireframe Desktop" },
    ],
    process: [
      "Entrevistas y encuestas con estudiantes de pregrado y postgrado",
      "Construcción de 3 personas basadas en hallazgos reales de investigación",
      "Doble diamante: Descubrir → Definir → Desarrollar → Entregar",
      "Rediseño de arquitectura de información y flujos de navegación",
      "Wireframes desktop y mobile con autoservicios y calendario integrado",
    ],
    impact: "★ La universidad subió del puesto 21 al 9 en el ranking nacional (marzo 2023)",
  },
];

const skills = [
  { name: "UX Research", level: 95 },
  { name: "Design Systems", level: 92 },
  { name: "Figma", level: 95 },
  { name: "UX Writing", level: 88 },
  { name: "Wireframes & Prototipado", level: 93 },
  { name: "User Flows & Journeys", level: 90 },
  { name: "Métricas y Análisis", level: 85 },
  { name: "Design Sprint / Agile", level: 87 },
];

const processSteps = [
  {
    num: "01",
    title: "Discover",
    desc: "Entrevistas con usuarios, análisis competitivo y definición del problema real. Nunca diseño sin entender primero.",
    icon: "🔍",
  },
  {
    num: "02",
    title: "Define",
    desc: "Síntesis de hallazgos en insights accionables. Mapas de flujo, personas y principios de diseño.",
    icon: "🎯",
  },
  {
    num: "03",
    title: "Ideate",
    desc: "Sketches, wireframes y exploración de conceptos. Muchas ideas rápidas antes de comprometerse con una dirección.",
    icon: "💡",
  },
  {
    num: "04",
    title: "Prototype",
    desc: "Prototipos interactivos en Figma que simulan la experiencia real. Del lo-fi al hi-fi según el momento.",
    icon: "⚡",
  },
  {
    num: "05",
    title: "Test",
    desc: "Pruebas de usabilidad con usuarios reales. Itero basado en evidencia, no en opiniones.",
    icon: "🧪",
  },
  {
    num: "06",
    title: "Deliver",
    desc: "Handoff impecable al equipo de desarrollo. Design specs, tokens y acompañamiento en implementación.",
    icon: "🚀",
  },
];

const experience = [
  {
    period: "Jul – Ago 2025",
    role: "Product Designer (AX)",
    company: "Natali Mercado",
    desc: "Diseño de agente de IA para gestión de seguros. Discovery, branding, UX/UI conversacional y estrategia de producto para un agente con identidad propia, cercano y empático.",
    highlight: "Agent Experience · IA aplicada · UX Writing",
  },
  {
    period: "Ene – Mar 2025",
    role: "Product Designer",
    company: "CleverIT Group",
    desc: "Lideré equipos multidisciplinarios en diseño de experiencias digitales para Cencosud, AFP Capital (SURA) y Universidad San Sebastián. UX Research, prototipado y validación con Figma, Miro y frameworks ágiles.",
    highlight: "Cencosud · AFP Capital · U. San Sebastián",
  },
  {
    period: "Ene – Mar 2025",
    role: "Product Designer",
    company: "AFP Capital (SURA)",
    desc: "Lideré el diseño del MVP de herramienta de traspasos previsionales (VRO), enfocada en autogestión sin necesidad de ejecutivos. User flows, wireframes y prototipado en alta calidad.",
    highlight: "MVP · Fintech · Autogestión",
  },
  {
    period: "Jul 2023 – May 2024",
    role: "UX Lead",
    company: "Cencosud (Team Wizard)",
    desc: "Célula de innovación en ecommerce y retail. Lideré mejoras estratégicas en UX y comunicación aplicando Design Sprint e IA para optimizar procesos y experiencias digitales.",
    highlight: "Ecommerce · Design Sprint · IA",
  },
  {
    period: "Ago 2022 – Ene 2023",
    role: "User Researcher",
    company: "Universidad San Sebastián (USS App)",
    desc: "Lideré la investigación de usuarios en el rediseño de la app institucional. El trabajo impulsó a la universidad del puesto 21 al 9 en el ranking nacional.",
    highlight: "★ Del puesto 21 al 9 en ranking nacional",
  },
];

const education = [
  { year: "2025", name: "Inglés B1 (en curso)", institution: "Políglota" },
  { year: "2023", name: "Design System", institution: "Platzi" },
  { year: "2023", name: "Diplomado Research Ops", institution: "Aprende UX" },
  { year: "2023", name: "User Research", institution: "Platzi" },
  { year: "2023", name: "User Writing", institution: "Platzi" },
  { year: "2021", name: "Diplomado UX Content Strategy", institution: "U. Católica de Valparaíso" },
  { year: "2020", name: "Certificación Google Analytics", institution: "Adity" },
  { year: "2014", name: "Título Profesional Diseño Gráfico", institution: "AIEP" },
];

const tools = ["Figma", "Maze", "Miro", "Notion", "Google Analytics", "Hotjar"];

const blogPosts = [
  {
    title: "Cómo el design thinking transformó mi proceso creativo",
    date: "Junio 2025",
    tag: "Proceso",
    excerpt:
      "Después de 3 años aplicando design thinking en proyectos reales, estas son las lecciones que nadie te cuenta en los cursos.",
    readTime: "5 min",
  },
  {
    title: "Diseñando para la moda: lo que aprendí con Minds",
    date: "Mayo 2025",
    tag: "Caso de Estudio",
    excerpt:
      "La industria de la moda tiene reglas propias. Cómo adapté mi proceso de UX a un contexto altamente visual y emocional.",
    readTime: "8 min",
  },
  {
    title: "Sistemas de diseño: el trabajo invisible que lo cambia todo",
    date: "Abril 2025",
    tag: "Design Systems",
    excerpt:
      "Un design system bien construido no es un lujo. Es la diferencia entre escalar o romperse. Lo que he aprendido construyendo los míos.",
    readTime: "6 min",
  },
];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setVisible(true);
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return { ref, visible };
}

function RevealSection({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  const { ref, visible } = useScrollReveal();
  return (
    <div
      ref={ref}
      className={`reveal-section ${visible ? "revealed" : ""} ${className}`}
    >
      {children}
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[0];
  index: number;
}) {
  const [expanded, setExpanded] = useState(false);
  const [galleryIndex, setGalleryIndex] = useState(0);
  const { ref, visible } = useScrollReveal();

  return (
    <div
      ref={ref}
      className={`project-card ${visible ? "revealed" : ""}`}
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      <div className="project-image-wrapper">
        <img
          src={project.imageUrl}
          alt={project.name}
          className="project-image"
        />
        <div
          className="project-overlay"
          style={{ background: `${project.color}CC` }}
        >
          <div className="project-tags">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="tag"
                style={{ background: project.accentColor, color: "#000" }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="project-content">
        <div className="project-header">
          <div>
            <span className="project-category">{project.category}</span>
            <h3 className="project-name">{project.name}</h3>
          </div>
          <span className="project-year">{project.year}</span>
        </div>

        <p className="project-description">{project.description}</p>

        {project.impact && (
          <div className="project-impact">{project.impact}</div>
        )}

        <button
          className="process-toggle"
          onClick={() => setExpanded(!expanded)}
          aria-expanded={expanded}
        >
          {expanded ? "Ocultar proceso" : "Ver proceso de diseño"}
          <span className={`toggle-icon ${expanded ? "rotated" : ""}`}>↓</span>
        </button>

        {expanded && (
          <div className="process-list">
            {project.process.map((step, i) => (
              <div key={i} className="process-item">
                <span className="process-num">0{i + 1}</span>
                <span>{step}</span>
              </div>
            ))}

            {project.gallery && project.gallery.length > 0 && (
              <div className="project-gallery">
                <div className="gallery-main">
                  <img
                    src={project.gallery[galleryIndex].src}
                    alt={project.gallery[galleryIndex].label}
                    className="gallery-img"
                  />
                  <span className="gallery-label">{project.gallery[galleryIndex].label}</span>
                </div>
                <div className="gallery-thumbs">
                  {project.gallery.map((item, i) => (
                    <button
                      key={i}
                      className={`gallery-thumb ${i === galleryIndex ? "active" : ""}`}
                      onClick={() => setGalleryIndex(i)}
                    >
                      <img src={item.src} alt={item.label} />
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function App() {
  const [activeSection, setActiveSection] = useState("inicio");
  const [menuOpen, setMenuOpen] = useState(false);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? saved === "true" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const handleMouse = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { threshold: 0.3 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const navItems = [
    { id: "proyectos", label: "Proyectos" },
    { id: "proceso", label: "Proceso" },
    { id: "experiencia", label: "Experiencia" },
    { id: "sobre-mi", label: "Sobre mí" },
    { id: "blog", label: "Blog" },
    { id: "contacto", label: "Contacto" },
  ];

  return (
    <div className="app">
      {/* Custom cursor */}
      <div
        className="cursor"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      />

      {/* Nav */}
      <nav className="nav">
        <button className="nav-logo" onClick={() => scrollTo("inicio")}>
          Sol<span className="logo-dot">.</span>
        </button>

        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map((item) => (
            <button
              key={item.id}
              className={`nav-link ${activeSection === item.id ? "active" : ""}`}
              onClick={() => scrollTo(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        <button
          className="dark-toggle"
          onClick={() => setDarkMode(!darkMode)}
          aria-label={darkMode ? "Modo claro" : "Modo oscuro"}
          title={darkMode ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <button
          className="nav-cta"
          onClick={() => scrollTo("contacto")}
        >
          Hablemos
        </button>

        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span />
          <span />
          <span />
        </button>
      </nav>

      {/* Hero */}
      <section id="inicio" className="hero">
        <div className="hero-blob-pink" aria-hidden="true" />
        <div className="hero-bg-text" aria-hidden="true">
          DESIGN
        </div>
        <div className="hero-content">
          <span className="hero-eyebrow">Product Designer · Concón, Chile</span>
          <h1 className="hero-title">
            Solange
            <br />
            <em>Melendez</em>
          </h1>
          <p className="hero-subtitle">
            Diseño experiencias digitales que conectan
            <br />
            con las personas y hacen crecer los productos.
          </p>
          <div className="hero-actions">
            <button className="btn-primary" onClick={() => scrollTo("proyectos")}>
              Ver proyectos
            </button>
            <button className="btn-ghost" onClick={() => scrollTo("sobre-mi")}>
              Sobre mí →
            </button>
          </div>
        </div>
        <div className="hero-scroll-hint">
          <span>scroll</span>
          <div className="scroll-line" />
        </div>
      </section>

      {/* Projects */}
      <section id="proyectos" className="section">
        <RevealSection>
          <div className="section-header">
            <span className="section-eyebrow">Trabajo seleccionado</span>
            <h2 className="section-title">Proyectos</h2>
          </div>
        </RevealSection>

        <div className="projects-grid">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </section>

      {/* Process */}
      <section id="proceso" className="section section-dark">
        <RevealSection>
          <div className="section-header">
            <span className="section-eyebrow light">Mi forma de trabajar</span>
            <h2 className="section-title light">Proceso</h2>
          </div>
        </RevealSection>

        <div className="process-grid">
          {processSteps.map((step, i) => (
            <RevealSection key={step.num}>
              <div
                className="process-card"
                style={{ transitionDelay: `${i * 0.08}s` }}
              >
                <div className="process-icon">{step.icon}</div>
                <span className="process-step-num">{step.num}</span>
                <h3 className="process-step-title">{step.title}</h3>
                <p className="process-step-desc">{step.desc}</p>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section id="experiencia" className="section section-muted">
        <RevealSection>
          <div className="section-header">
            <span className="section-eyebrow">Trayectoria</span>
            <h2 className="section-title">Experiencia</h2>
          </div>
        </RevealSection>
        <div className="experience-list">
          {experience.map((exp, i) => (
            <RevealSection key={i}>
              <div className="exp-card" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="exp-left">
                  <span className="exp-period">{exp.period}</span>
                  <span className="exp-highlight">{exp.highlight}</span>
                </div>
                <div className="exp-right">
                  <div className="exp-header">
                    <h3 className="exp-role">{exp.role}</h3>
                    <span className="exp-company">{exp.company}</span>
                  </div>
                  <p className="exp-desc">{exp.desc}</p>
                </div>
              </div>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* About */}
      <section id="sobre-mi" className="section">
        <div className="about-grid">
          <RevealSection className="about-text-col">
            <span className="section-eyebrow">Quién soy</span>
            <h2 className="section-title">Sobre mí</h2>
            <p className="about-text">
              Diseñadora gráfica especializada en UX y diseño de productos digitales, con base en Concón, Chile. Me enfoco en liderar proyectos desde la investigación hasta la implementación, integrando estrategias de contenido, métodos de research cualitativo y cuantitativo, y tecnologías emergentes como la inteligencia artificial.
            </p>
            <p className="about-text">
              He trabajado en industrias como educación, salud, retail, tecnología, seguros y servicios financieros, colaborando con equipos multidisciplinarios para crear soluciones digitales inclusivas, ágiles y centradas en las personas.
            </p>
            <p className="about-text">
              Me apasiona la innovación y el impacto social de los productos digitales, con foco en la empatía de género, testeo continuo y metodologías centradas en la experiencia.
            </p>

            {/* Superpower skills */}
            <div className="about-badges">
              {["UX Research", "Métricas y Análisis", "UX Writing", "Design Systems", "User Flows & Journeys"].map(
                (b) => (
                  <span key={b} className="badge">
                    {b}
                  </span>
                )
              )}
            </div>

            {/* Proyecto destacado */}
            <div className="highlight-project">
              <span className="highlight-label">✦ Proyecto destacado</span>
              <h4 className="highlight-title">Leo con IA — Hackathon OpenAI LATAM Finalist</h4>
              <p className="highlight-desc">Herramienta de lectura asistida para infancias neurodivergentes. Diseñé el MVP, narrativa y validación con usuarios.</p>
            </div>

            {/* Tools */}
            <div className="tools-section">
              <span className="tools-label">Herramientas</span>
              <div className="tools-list">
                {tools.map(t => <span key={t} className="tool-chip">{t}</span>)}
              </div>
            </div>
          </RevealSection>

          <RevealSection className="skills-col">
            <h3 className="skills-title">Skills</h3>
            <div className="skills-list">
              {skills.map((skill) => (
                <div key={skill.name} className="skill-item">
                  <div className="skill-header">
                    <span className="skill-name">{skill.name}</span>
                    <span className="skill-level">{skill.level}%</span>
                  </div>
                  <div className="skill-bar">
                    <div
                      className="skill-fill"
                      style={{ width: `${skill.level}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* Education */}
            <h3 className="skills-title" style={{ marginTop: "40px" }}>Formación</h3>
            <div className="edu-list">
              {education.map((e) => (
                <div key={e.name} className="edu-item">
                  <span className="edu-year">{e.year}</span>
                  <div>
                    <span className="edu-name">{e.name}</span>
                    <span className="edu-inst">{e.institution}</span>
                  </div>
                </div>
              ))}
            </div>
          </RevealSection>
        </div>
      </section>

      {/* Blog */}
      <section id="blog" className="section section-muted">
        <RevealSection>
          <div className="section-header">
            <span className="section-eyebrow">Reflexiones & aprendizajes</span>
            <h2 className="section-title">Blog</h2>
          </div>
        </RevealSection>

        <div className="blog-grid">
          {blogPosts.map((post, i) => (
            <RevealSection key={i}>
              <article
                className="blog-card"
                style={{ transitionDelay: `${i * 0.1}s` }}
              >
                <div className="blog-card-header">
                  <span className="blog-tag">{post.tag}</span>
                  <span className="blog-read-time">{post.readTime} lectura</span>
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">{post.excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-date">{post.date}</span>
                  <button className="blog-link">Leer más →</button>
                </div>
              </article>
            </RevealSection>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="section section-dark contact-section">
        <RevealSection>
          <div className="contact-inner">
            <span className="section-eyebrow light">Trabajemos juntos</span>
            <h2 className="contact-title">
              ¿Tienes un proyecto
              <br />
              <em>en mente?</em>
            </h2>
            <p className="contact-subtitle">
              Estoy disponible para proyectos freelance y oportunidades full-time.
              Si buscas una diseñadora que entiende tanto el negocio como el
              usuario, hablemos.
            </p>
            <div className="contact-actions">
              <a
                href="mailto:contactosolmelendez@gmail.com"
                className="btn-primary btn-large"
              >
                Escribirme un email
              </a>
              <a
                href="https://www.linkedin.com/in/solange-melendez"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost btn-large"
              >
                LinkedIn →
              </a>
            </div>
          </div>
        </RevealSection>
      </section>

      {/* Footer */}
      <footer className="footer">
        <span>© 2025 Solange Melendez · Product Designer</span>
        <span>Hecho con intención y detalle ✦</span>
      </footer>
    </div>
  );
}
