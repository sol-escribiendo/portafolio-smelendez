import { useState, useEffect, useRef } from "react";
import "./app.css";

const projects = [
  {
    id: 6, name: "USS App", category: "UX Research · Educación Superior", year: "2022–2023",
    description: "Rediseño de la app Mi USS de la Universidad San Sebastián. Lideré la investigación con 3 perfiles de estudiantes, benchmark universitario y estrategia de experiencia digital en 3 etapas. El trabajo impulsó a la USS del puesto 21 al 9 en el ranking nacional.",
    tags: ["User Research", "UX Strategy", "App Design", "Mobile"],
    color: "#1a3a6e", accentColor: "#A8C4FF",
    imageUrl: "/portafolio-smelendez/uss-app-desktop.png",
    gallery: [
      { src: "/portafolio-smelendez/uss-app-3.png", label: "Mi USS — Nueva experiencia digital" },
      { src: "/portafolio-smelendez/uss-app-4.png", label: "Clases semanales al alcance" },
      { src: "/portafolio-smelendez/uss-app-1.png", label: "Credencial digital USS" },
      { src: "/portafolio-smelendez/uss-app-2.png", label: "Calificaciones e historial" },
      { src: "/portafolio-smelendez/uss-persona-francisco.png", label: "Persona — Advance" },
      { src: "/portafolio-smelendez/uss-persona-felipe.png", label: "Persona — Postgrado" },
      { src: "/portafolio-smelendez/uss-persona-antonia.png", label: "Persona — Pregrado" },
      { src: "/portafolio-smelendez/uss-diamante.png", label: "Doble Diamante" },
      { src: "/portafolio-smelendez/uss-app-desktop.png", label: "Wireframe Desktop" },
    ],
    process: [
      "Benchmark de apps universitarias chilenas para identificar oportunidades",
      "3 perfiles de estudiante: Pregrado (nativas digitales), Advance (on-line, regiones) y Postgrado (trámites 100% online)",
      "Entrevistas cualitativas identificando necesidades de instantaneidad, trámites online y conexión móvil",
      "Análisis de arquitectura de información existente en Mi USS y Mi Portal",
      "Estrategia en 3 etapas: Upgrade de diseño → Homologación Portal + App → Autoservicios académicos",
      "Rediseño de flujos: clases, calificaciones, credencial digital, autogestión y vida universitaria",
      "Wireframes y prototipado hi-fi de app mobile y portal desktop con nuevo Kit Digital USS",
    ],
    impact: "★ La USS subió del puesto 21 al 9 en el ranking nacional (marzo 2023)",
  },
  {
    id: 5, name: "Nalia", category: "Agent Experience · IA · Fintech", year: "2025",
    description: "Agente de IA para gestión personal de seguros. Diseñé la identidad de marca, flujos de onboarding, chat conversacional con IA y la experiencia móvil completa.",
    tags: ["AX Design", "UX/UI Mobile", "IA Conversacional", "Fintech"],
    color: "#2d2060", accentColor: "#B8B0F5",
    imageUrl: "/portafolio-smelendez/nalia-mobile.png",
    gallery: [
      { src: "/portafolio-smelendez/nalia-logo-page-1.png", label: "Identidad de marca" },
      { src: "/portafolio-smelendez/nalia-login-page-1.png", label: "Login y registro" },
      { src: "/portafolio-smelendez/nalia-mobile.png", label: "Home y trámites" },
      { src: "/portafolio-smelendez/nalia-chat-page-1.png", label: "Chat con IA" },
      { src: "/portafolio-smelendez/nalia-password-page-1.png", label: "Recuperación" },
    ],
    process: [
      "Discovery & Research: levantamiento de expectativas y casos de uso",
      "Branding: identidad, tono conversacional humano y empático",
      "Diseño de onboarding: login, registro, mandato de representación",
      "Chat conversacional con IA: flujo de análisis de documento CMF",
      "Pantallas de perfil, trámites y estados del sistema",
    ],
    impact: "★ Agente con identidad propia · Entiende, decide y recupera",
  },
  {
    id: 3, name: "Team Wizard", category: "UX Lead · Innovación · Ecommerce", year: "2023–2024",
    description: "Célula de innovación de Cencosud para prototipar el futuro digital de sus banderas. Como UX Lead participé en múltiples iniciativas — desde asistentes con IA hasta feature OCR y seguimiento de pedidos — transformando ideas en prototipos funcionales en sprints de 2 semanas.",
    tags: ["UX Lead", "Design Sprint", "Innovación", "IA", "Ecommerce"],
    color: "#0a1628", accentColor: "#4ade80",
    imageUrl: "/portafolio-smelendez/tw-deck-1.png",
    gallery: [
      { src: "/portafolio-smelendez/tw-deck-1.png", label: "WizardTeam Cencosud — Prototipando el futuro digital" },
      { src: "/portafolio-smelendez/tw-deck-2.png", label: "¿Por qué Wizard? El equipo multidisciplinario" },
      { src: "/portafolio-smelendez/tw-deck-4.png", label: "Framework Wizard Sprint (1 Sprint = 2 semanas)" },
      { src: "/portafolio-smelendez/tw-asistente-ai.png", label: "Iniciativa: Jumbito — Asistente IA con recetas" },
      { src: "/portafolio-smelendez/tw-flow-chart.png", label: "Iniciativa: OCR — Fotografía tu receta → carro de compras" },
      { src: "/portafolio-smelendez/tw-seguimiento-pedido.png", label: "Iniciativa: Snackbar y seguimiento de pedido en camino" },
      { src: "/portafolio-smelendez/tw-deck-7.png", label: "MVP — Producto Mínimo Viable funcional" },
      { src: "/portafolio-smelendez/tw-deck-9.png", label: "Perfiles del equipo Wizard Dev" },
    ],
    process: [
      "Célula multidisciplinaria: UX Researcher, UX Writers, UX Designers y Devs bajo framework Wizard Sprint",
      "Iniciativa OCR Jumbo: fotografiar recetas y listas para agregar al carro (87% efectividad heurística)",
      "Iniciativa Jumbito: asistente IA con ChatGPT para recetas y listas de compras desde Jumbo.cl",
      "Iniciativa Seguimiento de pedido: snackbar en home + mapa en tiempo real del estado del despacho",
      "Framework propio: Ingresar → Entender → Idear → Validar → Prototipar → Testear → Delivery",
      "Cada iniciativa entregada como prototipo hi-fi en 2 semanas; las aprobadas pasaban a Wizard Dev para desarrollo",
    ],
    impact: "★ Múltiples iniciativas prototipadas y aprobadas para desarrollo en las apps de Jumbo y Cencosud",
  },
  {
    id: 2, name: "Minds", category: "Fashion Education · Dashboard", year: "2024",
    description: "Plataforma educativa de moda con dashboard completo para estudiantes y profesionales. Dashboard de webinars, consultorías y tendencias en una interfaz fluida.",
    tags: ["Dashboard", "UX/UI", "Design System"],
    color: "#E91E8C", accentColor: "#FFD700",
    imageUrl: "https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=800&q=80",
    gallery: [],
    process: [
      "Mapeo de flujos de usuario para 3 tipos de perfiles",
      "Sistema de tabs y navegación lateral optimizada",
      "Componentes reutilizables en pink branding bold",
      "Testing con usuarios reales de moda",
    ],
  },
  {
    id: 1, name: "Cmouse", category: "Beauty & Wellness", year: "2024",
    description: "Landing page para plataforma de bienestar y belleza. Experiencia cálida y sofisticada que conecta emocionalmente con usuarios que buscan servicios de cuidado personal.",
    tags: ["Landing Page", "UX Design", "Visual Design"],
    color: "#3D5A3E", accentColor: "#F5A623",
    imageUrl: "https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?w=800&q=80",
    gallery: [],
    process: [
      "Research de usuarios y competidores en el sector beauty",
      "Arquitectura de información y wireframes de baja fidelidad",
      "Sistema de diseño con paleta verde y dorado",
      "Prototipo interactivo y pruebas de usabilidad",
    ],
  },
  {
    id: 4, name: "Minds Services", category: "Makeup Artist Platform", year: "2024",
    description: "Página de servicios para maquilladores profesionales dentro del ecosistema Minds. Comunica experiencia y confianza mientras facilita la comparación de precios.",
    tags: ["Service Design", "UI Design", "E-commerce"],
    color: "#1A1A1A", accentColor: "#FF69B4",
    imageUrl: "https://images.unsplash.com/photo-1487412947147-5cebf100ffc2?w=800&q=80",
    gallery: [],
    process: [
      "Card sorting con usuarios para jerarquía de información",
      "Grid de artistas con fotografías de impacto visual",
      "Footer tipográfico bold como firma de marca",
      "Integración de sistema de precios transparente",
    ],
  },
];

const processSteps = [
  { num: "01", title: "Descubre", desc: "Entrevistas con usuarios, análisis competitivo y definición del problema real.", icon: "🔍" },
  { num: "02", title: "Define", desc: "Síntesis de hallazgos en insights accionables. Mapas de flujo y personas.", icon: "🎯" },
  { num: "03", title: "Idea", desc: "Sketches, wireframes y exploración de conceptos. Muchas ideas rápidas.", icon: "💡" },
  { num: "04", title: "Prototipa", desc: "Prototipos interactivos en Figma que simulan la experiencia real.", icon: "⚡" },
  { num: "05", title: "Testea", desc: "Pruebas de usabilidad con usuarios reales. Itero basado en evidencia.", icon: "🧪" },
  { num: "06", title: "Entrega", desc: "Handoff impecable al equipo de desarrollo con design specs y tokens.", icon: "🚀" },
];

const experience = [
  { period: "Jul – Ago 2025", role: "Product Designer (AX)", company: "Seguros · Insurtech", desc: "Diseño de agente de IA para gestión de seguros. Discovery, branding, UX/UI conversacional y estrategia de producto.", highlight: "Agent Experience · IA · UX Writing" },
  { period: "Ene – Mar 2025", role: "Product Designer", company: "Fintech · Retail · Educación", desc: "Lideré equipos multidisciplinarios en diseño de experiencias digitales para clientes de rubros financiero, retail y educación superior.", highlight: "Fintech · Retail · Educación" },
  { period: "Ene – Mar 2025", role: "Product Designer", company: "Fintech · Previsión", desc: "Diseño del MVP de herramienta de traspasos previsionales, enfocada en autogestión sin ejecutivos. User flows y prototipado hi-fi.", highlight: "MVP · Fintech · Autogestión" },
  { period: "Jul 2023 – May 2024", role: "UX Lead", company: "Ecommerce · Retail", desc: "Célula de innovación en ecommerce y retail. Design Sprint e IA para optimizar procesos y experiencias digitales.", highlight: "Ecommerce · Design Sprint · IA" },
  { period: "Ago 2022 – Ene 2023", role: "User Researcher", company: "Educación Superior", desc: "Investigación de usuarios en el rediseño de la app institucional. El trabajo impulsó a la universidad del puesto 21 al 9 en el ranking nacional.", highlight: "★ Del puesto 21 al 9 en ranking nacional" },
];

const skills = [
  { name: "UX Research", level: 95 }, { name: "Figma", level: 95 },
  { name: "Design Systems", level: 92 }, { name: "Wireframes & Prototipado", level: 93 },
  { name: "UX Writing", level: 88 }, { name: "Design Sprint / Agile", level: 87 },
];

const education = [
  { year: "2025", name: "Inglés B1 (en curso)", institution: "Políglota" },
  { year: "2023", name: "Design System", institution: "Platzi" },
  { year: "2023", name: "Diplomado Research Ops", institution: "Aprende UX" },
  { year: "2021", name: "Diplomado UX Content Strategy", institution: "U. Católica de Valparaíso" },
  { year: "2020", name: "Certificación Google Analytics", institution: "Adity" },
  { year: "2014", name: "Título Profesional Diseño Gráfico", institution: "AIEP" },
];

const tools = ["Figma", "Maze", "Miro", "Notion", "Google Analytics", "Hotjar"];

const blogPosts = [
  { title: "Cómo diseñé una IA que habla como persona: el caso Nalia", date: "Julio 2025", tag: "Inteligencia Artificial", excerpt: "Diseñar un agente de IA no es solo definir flujos. Es construir una personalidad. Te cuento cómo creé la identidad conversacional de Nalia y qué aprendí sobre Agent Experience.", readTime: "7 min", color: "#25503D" },
  { title: "Del puesto 21 al 9: cómo la investigación cualitativa movió un ranking", date: "Enero 2024", tag: "Datos Cualitativos", excerpt: "Entrevistas, análisis heurístico y mapas de flujo transformaron la USS App. No fue magia — fue escuchar a usuarios reales que nos dijeron exactamente qué fallaba.", readTime: "9 min", color: "#CA649D" },
  { title: "OCR + Design Sprint: cómo innovamos en 5 días en una app de supermercado", date: "Octubre 2023", tag: "Innovación", excerpt: "Cuando Cencosud necesitaba fotografiar recetas y convertirlas en carritos, usamos Design Sprint para pasar de problema a prototipo aprobado en tiempo récord.", readTime: "8 min", color: "#F576A5" },
  { title: "Por qué los frameworks ágiles no sirven si no tienes datos de usuario", date: "Agosto 2023", tag: "Frameworks Ágiles", excerpt: "Scrum, Kanban, Design Sprint — todos son poderosos. Pero ninguno reemplaza entender quién usa tu producto y por qué.", readTime: "6 min", color: "#25503D" },
  { title: "Construir productos sostenidos en datos: el mix cualitativo-cuantitativo", date: "Mayo 2023", tag: "Datos & Producto", excerpt: "Analytics me dice qué hacen. Las entrevistas me dicen por qué. Hotjar me muestra dónde se pierden. Cuando combino las tres fuentes, dejo de adivinar.", readTime: "10 min", color: "#CA649D" },
  { title: "Agent Experience: el nuevo campo que nadie está hablando (todavía)", date: "Julio 2025", tag: "Inteligencia Artificial", excerpt: "UX fue el diseño de interfaces. AX — Agent Experience — es el diseño de agentes que actúan por nosotros. Una disciplina emergente que une diseño conversacional y ética de IA.", readTime: "8 min", color: "#F576A5" },
];

const marqueeItems = ["UX Research","Design Systems","Agent Experience","IA Aplicada","UX Writing","Métricas & Datos","Design Sprint","Prototyping","User Testing","Visual Design"];

function useScrollReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVisible(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  return { ref, visible };
}

function Reveal({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  const { ref, visible } = useScrollReveal();
  return <div ref={ref} className={`reveal-section ${visible ? "revealed" : ""} ${className}`}>{children}</div>;
}

function ProjectDetail({ project, onClose }: { project: (typeof projects)[0]; onClose: () => void }) {
  const [gi, setGi] = useState(0);
  useEffect(() => {
    document.body.style.overflow = "hidden";
    const k = (e: KeyboardEvent) => e.key === "Escape" && onClose();
    window.addEventListener("keydown", k);
    return () => { document.body.style.overflow = ""; window.removeEventListener("keydown", k); };
  }, [onClose]);
  return (
    <div className="project-detail-overlay" onClick={onClose}>
      <div className="project-detail-panel" onClick={e => e.stopPropagation()}>
        <button className="detail-close" onClick={onClose}>✕ Cerrar</button>
        <div className="detail-hero" style={{ background: project.color }}>
          {project.imageUrl ? <img src={project.imageUrl} alt={project.name} /> : <div className="detail-hero-placeholder">{project.name}</div>}
          <div className="detail-hero-overlay"><div className="proj-detail-tags">{project.tags.map(t => <span key={t} className="proj-detail-tag" style={{ background: project.accentColor, color: "#000" }}>{t}</span>)}</div></div>
        </div>
        <div className="detail-content">
          <div className="detail-header">
            <div><span className="sec-eyebrow">{project.category}</span><h2 className="detail-title">{project.name}</h2></div>
            <span style={{ fontSize: "0.8rem", color: "var(--ink-muted)" }}>{project.year}</span>
          </div>
          <p className="detail-desc">{project.description}</p>
          {project.impact && <div className="detail-impact">{project.impact}</div>}
          <h3 className="detail-sec-title">Proceso de diseño</h3>
          <div className="detail-process">
            {project.process.map((s, i) => <div key={i} className="detail-process-item"><span className="detail-process-num">0{i + 1}</span><span>{s}</span></div>)}
          </div>
          {project.gallery && project.gallery.length > 0 && (
            <>
              <h3 className="detail-sec-title">Galería</h3>
              <div className="gallery-main"><img src={project.gallery[gi].src} alt={project.gallery[gi].label} className="gallery-img" /><span className="gallery-label">{project.gallery[gi].label}</span></div>
              <div className="gallery-thumbs">{project.gallery.map((item, i) => <button key={i} className={`gallery-thumb ${i === gi ? "active" : ""}`} onClick={() => setGi(i)}><img src={item.src} alt={item.label} /></button>)}</div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ProjectCard({ project, onOpen }: { project: (typeof projects)[0]; onOpen: () => void }) {
  const { ref, visible } = useScrollReveal();
  return (
    <div ref={ref} className={`proj-card reveal-section ${visible ? "revealed" : ""}`}>
      <div className="proj-img-wrap" onClick={onOpen}>
        {project.imageUrl ? <img src={project.imageUrl} alt={project.name} className="proj-img" /> : <div className="proj-img-placeholder" style={{ background: project.color }}>{project.name}</div>}
        <div className="proj-tags-overlay">{project.tags.slice(0, 2).map(t => <span key={t} className="proj-tag-pill">{t}</span>)}</div>
      </div>
      <div className="proj-body">
        <div className="proj-eyebrow">{project.category}</div>
        <div className="proj-name">{project.name}</div>
        <div className="proj-desc" style={{ marginTop: 6 }}>{project.description.slice(0, 90)}…</div>
        <div className="proj-footer">
          <span className="proj-year">{project.year}</span>
          <button className="proj-open" onClick={onOpen}>Ver proyecto →</button>
        </div>
      </div>
    </div>
  );
}

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("inicio");
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null);
  const [darkMode, setDarkMode] = useState(() => {
    const saved = localStorage.getItem("darkMode");
    return saved ? saved === "true" : window.matchMedia("(prefers-color-scheme: dark)").matches;
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", darkMode ? "dark" : "light");
    localStorage.setItem("darkMode", String(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const h = (e: MouseEvent) => setCursorPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", h);
    return () => window.removeEventListener("mousemove", h);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("section[id]");
    const obs = new IntersectionObserver(es => es.forEach(e => { if (e.isIntersecting) setActiveSection(e.target.id); }), { threshold: 0.3 });
    sections.forEach(s => obs.observe(s));
    return () => obs.disconnect();
  }, []);

  const scrollTo = (id: string) => { document.getElementById(id)?.scrollIntoView({ behavior: "smooth" }); setMenuOpen(false); };
  const navItems = [
    { id: "proyectos", label: "Proyectos" }, { id: "proceso", label: "Proceso" },
    { id: "experiencia", label: "Experiencia" }, { id: "sobre-mi", label: "Sobre mí" },
    { id: "blog", label: "Blog" },
  ];
  const doubled = [...marqueeItems, ...marqueeItems];

  return (
    <div className="app">
      <div className="cursor" style={{ left: cursorPos.x, top: cursorPos.y }} />

      <nav className="nav">
        <button className="nav-logo" onClick={() => scrollTo("inicio")}>SOL<span>.</span></button>
        <div className={`nav-links ${menuOpen ? "open" : ""}`}>
          {navItems.map(i => <button key={i.id} className={`nav-link ${activeSection === i.id ? "active" : ""}`} onClick={() => scrollTo(i.id)}>{i.label}</button>)}
        </div>
        <div className="nav-right">
          <button className="dark-toggle" onClick={() => setDarkMode(!darkMode)} aria-label="Toggle modo">{darkMode ? "☀️" : "🌙"}</button>
          <button className="nav-cta" onClick={() => scrollTo("contacto")}>Hablemos</button>
        </div>
        <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu"><span /><span /><span /></button>
      </nav>

      <section id="inicio" className="hero">
        <div className="hero-left">
          <div>
            <div className="hero-eyebrow">Product Designer · Concón, Chile</div>
            <h1 className="hero-title">Diseño que<br/><em>mueve</em><br/>personas.</h1>
            <p className="hero-subtitle">UX Research · IA aplicada · Design Systems. Creo experiencias digitales desde la evidencia, con foco en las personas.</p>
            <div className="hero-actions">
              <button className="btn-primary" onClick={() => scrollTo("proyectos")}>Ver proyectos →</button>
              <button className="btn-ghost" onClick={() => scrollTo("sobre-mi")}>Sobre mí</button>
            </div>
          </div>
        </div>
        <div className="hero-right">
          <div className="hero-photo">
            <div className="hero-photo-placeholder">
              <svg width="56" height="56" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>Tu foto aquí<br/>próximamente</span>
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat"><div className="stat-num">6+</div><div className="stat-label">Proyectos</div></div>
            <div className="stat"><div className="stat-num">5+</div><div className="stat-label">Años exp.</div></div>
            <div className="stat"><div className="stat-num">OpenAI</div><div className="stat-label">LATAM Finalist</div></div>
          </div>
        </div>
      </section>

      <div className="marquee" aria-hidden="true">
        <div className="marquee-track">
          {doubled.map((item, i) => (
            <span key={i} className="marquee-item">{i % 2 === 1 ? <span className="marquee-sep"> ✦ </span> : null}{item}</span>
          ))}
        </div>
      </div>

      <section id="proyectos" className="section">
        <Reveal>
          <div className="section-header">
            <div><span className="sec-eyebrow">Trabajo seleccionado</span><h2 className="sec-title">Proyectos.</h2></div>
            <button className="sec-link" onClick={() => {}}>6 proyectos</button>
          </div>
        </Reveal>
        <div className="proj-grid">
          {projects.map(p => <ProjectCard key={p.id} project={p} onOpen={() => setSelectedProject(p)} />)}
        </div>
      </section>

      {selectedProject && <ProjectDetail project={selectedProject} onClose={() => setSelectedProject(null)} />}

      <section id="proceso" className="section section-dark">
        <Reveal>
          <div className="section-header">
            <div><span className="sec-eyebrow sec-eyebrow-light">Mi forma de trabajar</span><h2 className="sec-title sec-title-light">Proceso.</h2></div>
          </div>
        </Reveal>
        <div className="proc-grid">
          {processSteps.map((s, i) => (
            <Reveal key={s.num}>
              <div className="proc-card" style={{ transitionDelay: `${i * 0.07}s` }}>
                <span className="proc-icon">{s.icon}</span>
                <span className="proc-num">{s.num}</span>
                <div className="proc-title">{s.title}</div>
                <p className="proc-desc">{s.desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="experiencia" className="section section-muted">
        <Reveal>
          <div className="section-header">
            <div><span className="sec-eyebrow">Trayectoria</span><h2 className="sec-title">Experiencia.</h2></div>
          </div>
        </Reveal>
        <div className="exp-list">
          {experience.map((e, i) => (
            <Reveal key={i}>
              <div className="exp-item">
                <div><div className="exp-period">{e.period}</div><div className="exp-highlight">{e.highlight}</div></div>
                <div><div className="exp-role">{e.role}</div><div className="exp-company">{e.company}</div><p className="exp-desc">{e.desc}</p></div>
              </div>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="sobre-mi" className="about-block">
        <Reveal className="about-left">
          <div>
            <span className="sec-eyebrow sec-eyebrow-light">Quién soy</span>
            <h2 className="about-title">Product<br/><em>Designer</em><br/>& Researcher.</h2>
            <p className="about-text">Diseñadora gráfica especializada en UX y diseño de productos digitales, con base en Concón, Chile. Me enfoco en liderar proyectos desde la investigación hasta la implementación, integrando IA y metodologías centradas en las personas.</p>
            <p className="about-text" style={{ marginTop: 12 }}>He trabajado en educación, salud, retail, tecnología, seguros y servicios financieros, siempre con el mismo principio: diseñar desde la empatía y validar con datos.</p>
            <div className="skill-pills" style={{ marginTop: 20 }}>
              {["UX Research", "Métricas y Análisis", "UX Writing", "Design Systems", "User Flows"].map(b => <span key={b} className="skill-pill">{b}</span>)}
            </div>
            <div className="about-leo">
              <div className="leo-label">✦ Proyecto destacado</div>
              <div className="leo-title">Leo con IA — OpenAI LATAM Finalist</div>
              <p className="leo-desc">Herramienta de lectura asistida para infancias neurodivergentes. MVP, narrativa y validación con usuarios.</p>
            </div>
            <div className="tools-row">
              {tools.map(t => <span key={t} className="tool-chip">{t}</span>)}
            </div>
          </div>
        </Reveal>
        <Reveal className="about-right">
          <div className="profile-photo">
            <div className="profile-photo-ph">
              <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
              <span>Tu foto próximamente</span>
            </div>
          </div>
          <div className="skills-list">
            {skills.map(s => (
              <div key={s.name} className="skill-item">
                <div className="skill-hdr"><span>{s.name}</span><span style={{ color: "var(--ink-muted)", fontSize: "0.72rem" }}>{s.level}%</span></div>
                <div className="skill-bar"><div className="skill-fill" style={{ width: `${s.level}%` }} /></div>
              </div>
            ))}
          </div>
          <div>
            <div className="edu-title">Formación</div>
            <div className="edu-list">
              {education.map(e => (
                <div key={e.name} className="edu-item">
                  <span className="edu-year">{e.year}</span>
                  <div><span className="edu-name">{e.name}</span><span className="edu-inst">{e.institution}</span></div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section id="blog" className="section">
        <Reveal>
          <div className="section-header">
            <div><span className="sec-eyebrow">Reflexiones & aprendizajes</span><h2 className="sec-title">Blog.</h2></div>
          </div>
        </Reveal>
        <div className="blog-grid">
          {blogPosts.map((p, i) => (
            <Reveal key={i}>
              <article className="blog-card" style={{ transitionDelay: `${i * 0.08}s` }}>
                <div className="blog-card-top">
                  <span className="blog-tag" style={{ background: `${p.color}18`, color: p.color, border: `1px solid ${p.color}33` }}>{p.tag}</span>
                  <span className="blog-read-time">{p.readTime}</span>
                </div>
                <h3 className="blog-title">{p.title}</h3>
                <p className="blog-excerpt">{p.excerpt}</p>
                <div className="blog-footer">
                  <span className="blog-date">{p.date}</span>
                  <button className="blog-link" style={{ color: p.color }}>Leer más →</button>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section id="contacto" className="section section-dark" style={{ textAlign: "center" }}>
        <Reveal>
          <div className="contact-inner">
            <span className="sec-eyebrow sec-eyebrow-light">Trabajemos juntas</span>
            <h2 className="contact-title">¿Tienes un proyecto<br/><em>en mente?</em></h2>
            <p className="contact-sub">Disponible para proyectos freelance y oportunidades full-time. Si buscas una diseñadora que entiende tanto el negocio como el usuario, hablemos.</p>
            <div className="contact-actions">
              <a href="mailto:contactosolmelendez@gmail.com" className="btn-contact-primary">Escribirme ✉️</a>
              <a href="https://www.linkedin.com/in/solange-melendez" target="_blank" rel="noopener noreferrer" className="btn-contact-ghost">LinkedIn →</a>
            </div>
          </div>
        </Reveal>
      </section>

      <footer className="footer">
        <div className="footer-name">Solange<br/>Meléndez.</div>
        <div className="footer-bottom">
          <span className="footer-copy">© 2025 Solange Meléndez · Product Designer · Concón, Chile</span>
          <div className="footer-links"><span>contactosolmelendez@gmail.com</span><span>LinkedIn</span></div>
        </div>
      </footer>
    </div>
  );
}
