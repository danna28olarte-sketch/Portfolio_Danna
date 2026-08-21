"use client";

import { FormEvent, PointerEvent as ReactPointerEvent, useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  BarChart3,
  CheckCircle2,
  Clock3,
  LayoutTemplate,
  Mail,
  Megaphone,
  Menu,
  MessageCircle,
  Moon,
  Play,
  Search,
  Sparkles,
  Sun,
  Video,
  Workflow,
  X,
  Zap,
} from "lucide-react";
import { Service, EN_SERVICES, ES_SERVICES } from "./servicesData";

type Lang = "en" | "es";
type Theme = "dark" | "light";

type Copy = {
  nav: {
    aria: string;
    home: string;
    services: string;
    work: string;
    contact: string;
    diagnosis: string;
    openMenu: string;
    closeMenu: string;
    themeLight: string;
    themeDark: string;
  };
  hero: {
    badge: string;
    title: React.ReactNode;
    text: string;
    work: string;
    system: string;
    visualAria: string;
    video: string;
    variations: string;
  };
  proof: Array<[string, string]>;
  blocks: {
    eyebrow: string;
    title: string;
    text: string;
    items: string[];
    connected: string;
  };
  services: {
    eyebrow: string;
    title: React.ReactNode;
    text: string;
    selected: string;
    items: Service[];
    viewProjects: string;
    closeModal: string;
  };
  portfolio: {
    eyebrow: string;
    title: string;
    all: string;
    items: Array<[string, string, string]>;
  };
  cta: {
    title: string;
    text: string;
    button: string;
  };
  contact: {
    eyebrow: string;
    title: React.ReactNode;
    text: string;
    email: string;
    whatsapp: string;
    response: string;
    fields: {
      name: string;
      company: string;
      whatsapp: string;
      web: string;
      business: string;
      services: string;
      multi: string;
      message: string;
      submit: string;
      idle: string;
      sent: string;
    };
    placeholders: {
      name: string;
      company: string;
      whatsapp: string;
      web: string;
      business: string;
      message: string;
    };
    serviceOptions: string[];
  };
  footer: string;
};

// Services data array is imported from servicesData.ts

const COPY: Record<Lang, Copy> = {
  en: {
    nav: {
      aria: "Primary navigation",
      home: "Home",
      services: "Services",
      work: "Work",
      contact: "Contact",
      diagnosis: "Diagnosis",
      openMenu: "Open menu",
      closeMenu: "Close menu",
      themeLight: "Switch to light theme",
      themeDark: "Switch to dark theme",
    },
    hero: {
      badge: "[CREATIVE_AI_26]",
      title: <>Visual Content & <em>AI for E-commerce</em>.</>,
      text: "Scalable creative systems producing high-impact, consistent, and visually compelling product & lifestyle content using AI.",
      work: "Contact me",
      system: "View system",
      visualAria: "Danna Olarte visual system",
      video: "AI · CREATIVE ENGINE",
      variations: "saved / month",
    },
    proof: [
      ["SPECIALTY", "AI CONTENT CREATION"],
      ["FOCUS", "ECOMMERCE BRANDS"],
      ["BASE", "BOGOTÁ, COLOMBIA"],
      ["STATUS", "AVAILABLE NOW"],
    ],
    blocks: {
      eyebrow: "WHAT I DO · 3 BLOCKS",
      title: "Scalable creative systems, not simple assets.",
      text: "Each block operates independently, but together they form your store's visual engine.",
      items: [
        "AI Content Creation",
        "Audiovisual Production",
        "Content Automation",
      ],
      connected: "Visual Assets & Frameworks",
    },
    services: {
      eyebrow: "SERVICES · 4 PILLARS",
      title: <>Four blocks. <em>One system.</em></>,
      text: "Each block operates independently, but together they form your store's visual engine.",
      selected: "Implemented projects",
      items: EN_SERVICES,
      viewProjects: "View projects",
      closeModal: "Close",
    },
    portfolio: {
      eyebrow: "PORTFOLIO · SELECTED WORK",
      title: "Mixed media, visual systems, and campaign-ready assets.",
      all: "Contact me",
      items: [
        ["Skincare: Hero set", "AI Image", "large"],
        ["Coffee brand: :30 spot", "Video Ad", "wide"],
        ["Sneakers: static carousel", "Creative", "small"],
        ["DTC supplement: LP", "Landing", "small"],
        ["Workflow: 12 variations / hour", "Automation", "wide"],
        ["Apparel: lifestyle pack", "AI Image", "small"],
        ["Home goods: Reels x6", "Short video", "small"],
      ],
    },
    cta: {
      title: "Turn your creative concepts into a content system working 24/7.",
      text: "Free creative audit · 20 minutes · no commitment",
      button: "Get started",
    },
    contact: {
      eyebrow: "CONTACT · LEAD CAPTURE",
      title: <>Tell us what you sell. <em>We create the content.</em></>,
      text: "Send us a short brief and we will return a free 20-minute creative diagnosis: what is missing, what to optimize, and what to produce first.",
      email: "danna.28.olarte@gmail.com",
      whatsapp: "WhatsApp: +57 313 612 9197",
      response: "Typical reply within ~24h, business days",
      fields: {
        name: "Name",
        company: "Company",
        whatsapp: "WhatsApp",
        web: "Website / Instagram",
        business: "Type of business",
        services: "Service needed",
        multi: "(multi-select)",
        message: "Message",
        submit: "Request diagnosis",
        idle: "No spam. Ever.",
        sent: "Brief received. We will contact you soon.",
      },
      placeholders: {
        name: "Your name",
        company: "Your brand name",
        whatsapp: "+57 313 612 9197",
        web: "pagurai.com · @brand",
        business: "Skincare DTC, specialty coffee, etc.",
        message: "Tell us what you need...",
      },
      serviceOptions: ["AI Content Creation", "Audiovisual Production", "Content Automation"],
    },
    footer: "HERO → ABOUT ME → SERVICES → PORTFOLIO → CONTACT",
  },
  es: {
    nav: {
      aria: "Navegación principal",
      home: "Inicio",
      services: "Servicios",
      work: "Trabajo",
      contact: "Contacto",
      diagnosis: "Diagnóstico",
      openMenu: "Abrir menú",
      closeMenu: "Cerrar menú",
      themeLight: "Cambiar a tema claro",
      themeDark: "Cambiar a tema oscuro",
    },
    hero: {
      badge: "[CREATIVE_AI_26]",
      title: <>Contenido Visual e <em>IA para E-commerce</em>.</>,
      text: "Sistemas creativos escalables que producen contenido de producto y estilo de vida atractivo, consistente y visualmente impactante.",
      work: "Contáctame",
      system: "Ver sistema",
      visualAria: "Sistema visual de Danna Olarte",
      video: "IA · MOTOR CREATIVO",
      variations: "ahorradas / mes",
    },
    proof: [
      ["ESPECIALIDAD", "CREACIÓN DE CONTENIDO CON IA"],
      ["ENFOQUE", "MARCAS ECOMMERCE"],
      ["BASE", "BOGOTÁ, COLOMBIA"],
      ["ESTADO", "DISPONIBLE AHORA"],
    ],
    blocks: {
      eyebrow: "QUÉ HAGO · 3 BLOQUES",
      title: "Sistemas creativos escalables, no simples piezas sueltas.",
      text: "Cada bloque opera de forma independiente, pero juntos forman el motor visual de tu tienda.",
      items: [
        "Creación de Contenido con IA",
        "Producción audiovisual",
        "Automatización de contenido",
      ],
      connected: "Activos Visuales & Frameworks",
    },
    services: {
      eyebrow: "SERVICIOS · 4 PILARES",
      title: <>Cuatro bloques. <em>Un sistema.</em></>,
      text: "Cada pilar funciona por sí solo, pero están pensados para conectarse en un motor visual para tu tienda.",
      selected: "Proyectos implementados",
      items: ES_SERVICES,
      viewProjects: "Ver proyectos",
      closeModal: "Cerrar",
    },
    portfolio: {
      eyebrow: "PORTFOLIO · TRABAJOS SELECCIONADOS",
      title: "Mixed media, sistemas visuales y piezas listas para campaña.",
      all: "Contáctame",
      items: [
        ["Skincare: Hero set", "Imagen IA", "large"],
        ["Marca de café: spot :30", "Video Ad", "wide"],
        ["Tenis: carrusel estático", "Creatividad", "small"],
        ["Suplemento DTC: LP", "Landing", "small"],
        ["Workflow: 12 variaciones / hour", "Automatización", "wide"],
        ["Apparel: pack lifestyle", "Imagen IA", "small"],
        ["Hogar: Reels x6", "Video corto", "small"],
      ],
    },
    cta: {
      title: "Convierte tus conceptos en un sistema de contenido que trabaje 24/7.",
      text: "Diagnóstico creativo gratis · 20 minutos · sin compromiso",
      button: "Empezar",
    },
    contact: {
      eyebrow: "CONTACTO · CAPTURA DE LEAD",
      title: <>Cuéntanos qué vendes. <em>Nosotros creamos el contenido.</em></>,
      text: "Envíanos un brief corto y te devolvemos un diagnóstico creativo gratis de 20 min: qué falta, qué optimizar y qué producir primero.",
      email: "danna.28.olarte@gmail.com",
      whatsapp: "WhatsApp: +57 313 612 9197",
      response: "Respuesta habitual en ~24h, días hábiles",
      fields: {
        name: "Nombre",
        company: "Empresa",
        whatsapp: "WhatsApp",
        web: "Sitio web / Instagram",
        business: "Tipo de negocio",
        services: "Servicio que necesitas",
        multi: "(multi-selección)",
        message: "Mensaje",
        submit: "Solicitar diagnóstico",
        idle: "Sin spam. Nunca.",
        sent: "Brief recibido. Te contactaremos pronto.",
      },
      placeholders: {
        name: "Tu nombre",
        company: "Nombre de tu marca",
        whatsapp: "+57 313 612 9197",
        web: "pagurai.com · @marca",
        business: "Skincare DTC, café especialidad, etc.",
        message: "Cuéntanos qué necesitas...",
      },
      serviceOptions: ["Creación de contenido con IA", "Producción audiovisual", "Automatización de contenido"],
    },
    footer: "HERO → SOBRE MÍ → SERVICIOS → PORTFOLIO → CONTACTO",
  },
};

const BLOCK_IMAGES = [
  "/assets/images/content/Image creator.webp",
  "/assets/images/content/Video Prodcution.webp",
  "/assets/images/content/Content automation.webp",
];

const PORTFOLIO_IMAGES = [
  "/assets/images/content/Fashion_ Hero set AI Image.webp",
  "/assets/images/content/Coffee brand.webp",
  "/assets/images/content/Sneakers Carrusel.webp",
  "/assets/images/content/DTC supplement.webp",
  "/assets/images/content/workflow 12 variations.webp",
  "/assets/images/content/Apparel lifestyle pack.webp",
  "/assets/images/content/Home goods.webp",
];



export function moveGlow(e: ReactPointerEvent<HTMLElement>) {
  const rect = e.currentTarget.getBoundingClientRect();
  e.currentTarget.style.setProperty("--mx", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--my", `${e.clientY - rect.top}px`);
  e.currentTarget.style.setProperty("--glow-x", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--glow-y", `${e.clientY - rect.top}px`);
  e.currentTarget.style.setProperty("--px", `${e.clientX - rect.left}px`);
  e.currentTarget.style.setProperty("--py", `${e.clientY - rect.top}px`);
}

export function DotMatrix() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let raf = 0;
    let time = 0;
    let dots: Array<{ x: number; y: number; seed: number; delay: number }> = [];
    let accentColor = [0, 152, 255];

    const hash = (x: number, y: number) =>
      ((Math.sin(x * 127.1 + y * 311.7) * 43758.5453123) % 1 + 1) % 1;

    const resize = () => {
      const dpr = window.devicePixelRatio || 1;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const accentString =
        getComputedStyle(document.documentElement).getPropertyValue("--accent-rgb").trim() ||
        "0, 152, 255";
      accentColor = accentString.split(",").map((value) => Number(value.trim()));
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      dots = [];
      const grid = 20;
      const cols = Math.ceil(width / grid) + 1;
      const rows = Math.ceil(height / grid) + 1;
      for (let r = 0; r < rows; r += 1) {
        for (let c = 0; c < cols; c += 1) {
          dots.push({
            x: c * grid + grid / 2,
            y: r * grid + grid / 2,
            seed: hash(c, r),
            delay: hash(c + 0.5, r + 0.5),
          });
        }
      }
    };

    const draw = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      ctx.clearRect(0, 0, width, height);
      time += 0.016;

      const cx = width / 2;
      const cy = height / 2;
      const maxDist = Math.sqrt(cx * cx + cy * cy) || 1;

      dots.forEach((dot) => {
        const flicker = Math.sin(time * 3.5 + dot.seed * 50) * 0.5 + 0.5;
        const phase = Math.sin(time * 1.5 + dot.delay * 12) * 0.5 + 0.5;
        const blink = Math.sin(time * 1.8 + dot.seed * 100 + dot.delay * 60);
        const blinkOn = blink > (dot.seed > 0.7 ? -0.4 : 0.1) ? 1 : 0;
        const dist = Math.sqrt((dot.x - cx) ** 2 + (dot.y - cy) ** 2);
        const reveal = Math.max(0, Math.min(1, time * 1.2 - (dist / maxDist) * 3));
        let baseOpacity;

        if (dot.seed > 0.85) {
          baseOpacity = (0.46 + flicker * 0.34) * blinkOn;
        } else if (dot.seed > 0.6) {
          baseOpacity = (0.22 + phase * 0.18) * blinkOn;
        } else {
          baseOpacity = (0.07 + flicker * 0.08) * blinkOn;
        }

        const opacity = baseOpacity * reveal;
        if (opacity < 0.01) return;

        const rgb = dot.seed > 0.92 ? accentColor.join(",") : "255,255,255";
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 1.5, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${rgb},${opacity})`;
        ctx.fill();
      });

      raf = requestAnimationFrame(draw);
    };

    resize();
    draw();
    window.addEventListener("resize", resize);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <div className="vw-dot-bg" aria-hidden="true">
      <canvas id="matrix-canvas" ref={canvasRef} />
      <div className="vw-dot-fade" />
    </div>
  );
}

function useCardGlow() {
  useEffect(() => {
    const selectors = [
      ".glow-card",
      ".service-row",
      ".portfolio-card",
      ".contact-cards div",
      ".lead-form",
      ".hero-visual",
      ".proof-strip div",
      ".modal-container",
      ".modal-banner",
    ].join(",");

    const updateGlow = (event: PointerEvent) => {
      document.querySelectorAll<HTMLElement>(selectors).forEach((card) => {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--glow-x", `${event.clientX - rect.left}px`);
        card.style.setProperty("--glow-y", `${event.clientY - rect.top}px`);
      });
    };

    document.addEventListener("pointermove", updateGlow);
    return () => document.removeEventListener("pointermove", updateGlow);
  }, []);
}

function Button({
  children,
  href = "#contacto",
  variant = "primary",
}: {
  children: React.ReactNode;
  href?: string;
  variant?: "primary" | "secondary" | "ghost";
}) {
  return (
    <a className={`site-btn ${variant}`} href={href} onPointerMove={moveGlow}>
      <span className="btn-glow" aria-hidden="true" />
      <span className="btn-content">{children}</span>
    </a>
  );
}

export default function PaguraiLanding() {
  const [lang, setLang] = useState<Lang>("en");
  const [theme, setTheme] = useState<Theme>("dark");
  const [menuOpen, setMenuOpen] = useState(false);
  const [selected, setSelected] = useState([0, 2]);
  const [sent, setSent] = useState(false);
  const [activeModalService, setActiveModalService] = useState<number | null>(null);
  const [activeModalBlock, setActiveModalBlock] = useState<number | null>(null);

  const copy = COPY[lang];
  useCardGlow();

  const blockToServiceMap: Record<number, number> = {
    0: 0,
    1: 1,
    2: 2,
    3: 3,
    4: 4,
    5: 5,
  };

  useEffect(() => {
    if (activeModalService !== null) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [activeModalService]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setActiveModalService(null);
        setActiveModalBlock(null);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setActiveModalService(null);
      setActiveModalBlock(null);
    }
  };

  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);

  const changeLanguage = (nextLang: Lang) => {
    setLang(nextLang);
    setSent(false);
  };

  const toggleService = (serviceIndex: number) => {
    setSelected((current) =>
      current.includes(serviceIndex)
        ? current.filter((item) => item !== serviceIndex)
        : [...current, serviceIndex],
    );
  };

  const submitForm = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSent(true);
  };

  return (
    <div className={`app-shell theme-${theme}`}>
      <DotMatrix />
      <div className="bg-cover" aria-hidden="true" />
      <div className="bg-glows" aria-hidden="true" />
      <div className="bg-grid" aria-hidden="true" />

      <header className="site-header">
        <nav className="cyber-nav" aria-label={copy.nav.aria} onPointerMove={moveGlow}>
          <a className="brand-mark" href="#inicio" aria-label="Danna Olarte home">
            <span style={{ fontFamily: "var(--font-display)", fontStyle: "italic", fontWeight: 700, textTransform: "uppercase", color: "var(--accent-color)", fontSize: "20px", letterSpacing: "0.05em" }}>Danna Olarte</span>
          </a>

          <div id="primary-navigation" className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#inicio" onClick={() => setMenuOpen(false)}>{copy.nav.home}</a>
            <a href="#sobre-mi" onClick={() => setMenuOpen(false)}>{lang === "es" ? "Sobre Mí" : "About Me"}</a>
            <a href="#servicios" onClick={() => setMenuOpen(false)}>{copy.nav.services}</a>
            <a href="#portfolio" onClick={() => setMenuOpen(false)}>{copy.nav.work}</a>
            <a href="#contacto" onClick={() => setMenuOpen(false)}>{copy.nav.contact}</a>
          </div>

          <div className="nav-controls" aria-label="Language and theme controls">
            <div className="language-toggle" aria-label="Language selector">
              <button className={lang === "en" ? "active" : ""} type="button" onClick={() => changeLanguage("en")}>
                EN
              </button>
              <button className={lang === "es" ? "active" : ""} type="button" onClick={() => changeLanguage("es")}>
                ES
              </button>
            </div>

            <button
              className="theme-toggle"
              type="button"
              aria-label={theme === "dark" ? copy.nav.themeLight : copy.nav.themeDark}
              onClick={() => setTheme((value) => (value === "dark" ? "light" : "dark"))}
            >
              {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
            </button>
          </div>

          <Button href="#contacto" variant="secondary">
            {copy.nav.diagnosis} <ArrowRight size={16} />
          </Button>

          <button
            className="menu-btn"
            type="button"
            aria-label={menuOpen ? copy.nav.closeMenu : copy.nav.openMenu}
            aria-expanded={menuOpen}
            aria-controls="primary-navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </nav>
      </header>

      <main>
        <section className="hero-section" id="inicio">
          <div className="hero-copy">
            <span className="section-badge">{copy.hero.badge}</span>
            <h1>{copy.hero.title}</h1>
            <p>{copy.hero.text}</p>
            <div className="hero-actions">
              <Button href="#contacto">
                {copy.hero.work} <ArrowRight size={18} />
              </Button>
              <Button href="#servicios" variant="ghost">
                <Play size={17} /> {copy.hero.system}
              </Button>
            </div>
          </div>

          <aside className="hero-visual" aria-label={copy.hero.visualAria}>
            <div className="visual-toolbar">
              <span />
              <span />
              <span />
              <strong>AUTOMATION ENGINE</strong>
            </div>
            <div className="visual-stage">
              <div className="reel-card main-reel" style={{ background: "rgba(18, 18, 26, 0.6)", overflow: "hidden", position: "relative" }}>
                <Image
                  src="/assets/images/projects/WORFLOW-CAR.webp"
                  alt="Automation Workflow"
                  fill
                  style={{ objectFit: "cover" }}
                />
                <span style={{ position: "absolute", zIndex: 10, background: "rgba(0,0,0,0.6)", padding: "4px 8px", borderRadius: "4px", left: "12px", bottom: "12px", fontSize: "11px", fontFamily: "var(--font-display)" }}>
                  {copy.hero.video}
                </span>
              </div>
              <div className="metric-card">
                <BarChart3 size={20} />
                <strong>99.8%</strong>
                <span>{lang === "es" ? "menos errores" : "errors reduced"}</span>
              </div>
              <div className="metric-card pink">
                <Zap size={20} />
                <strong>140h</strong>
                <span>{copy.hero.variations}</span>
              </div>
            </div>
          </aside>
        </section>

        <section className="proof-strip" aria-label="Danna Olarte facts">
          {copy.proof.map(([k, v]) => (
            <div key={k}>
              <span>{k}</span>
              <strong>{v}</strong>
            </div>
          ))}
        </section>

        {/* ABOUT ME SECTION */}
        <section className="section-block" id="sobre-mi">
          <div className="section-head" style={{ marginBottom: "40px" }}>
            <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-start" }}>
              <span className="eyebrow" style={{ marginBottom: "24px" }}>Danna Olarte</span>
              <h2 className="about-title-styled" style={{ margin: 0 }}>
                {lang === "es" ? "SOBRE MÍ" : "ABOUT ME"}
              </h2>
            </div>
          </div>

          <div className="about-grid">
            {/* Left Column: Portrait Card */}
            <div className="glow-card about-portrait-card" onPointerMove={moveGlow}>
              <div className="about-portrait-wrapper">
                <Image
                  src="/assets/images/projects/DannaOlarte.webp"
                  alt="Danna Olarte"
                  fill
                  className="about-portrait-img"
                  style={{ objectFit: "cover" }}
                />
              </div>
            </div>

            {/* Right Column Grid */}
            <div className="about-cards-right">
              {/* Top Row */}
              <div className="about-row-top">
                {/* Wide description card */}
                <div className="glow-card about-desc-card" onPointerMove={moveGlow}>
                  <p className="about-text">
                    {lang === "es"
                      ? "Mi nombre es Danna Olarte. Como Diseñadora Creativa de IA, me especializo en transformar ideas en experiencias visuales de alto impacto combinando creatividad, narrativa (storytelling) e inteligencia artificial. Diseño sistemas creativos escalables que ayudan a las marcas a producir contenido atractivo, consistente y visualmente impactante en múltiples plataformas digitales."
                      : "My name is Danna Olarte. As an AI Creative Designer, I specialize in transforming ideas into high-impact visual experiences through the combination of creativity, storytelling, and artificial intelligence. I design scalable creative systems that help brands produce engaging, consistent, and visually compelling content across multiple digital platforms."}
                  </p>
                </div>

                {/* Experience card */}
                <div className="glow-card about-exp-card" onPointerMove={moveGlow}>
                  <div className="exp-bg-grid" />
                  <div className="exp-content">
                    <span className="exp-num">2</span>
                    <span className="exp-label">
                      {lang === "es" ? "años de experiencia" : "years of experience"}
                    </span>
                  </div>
                </div>
              </div>

              {/* Bottom Row */}
              <div className="about-row-bottom">
                {/* Visual Assets Card */}
                <div className="glow-card about-mini-card" onPointerMove={moveGlow}>
                  <h3 className="about-mini-title">{lang === "es" ? "Activos Visuales" : "Visual Assets"}</h3>
                  <p className="about-mini-desc">
                    {lang === "es"
                      ? "Generación de fotos de producto, lifestyle y variaciones de campaña listas para tus canales."
                      : "High-impact product, lifestyle and campaign variations ready for your digital channels."}
                  </p>
                </div>

                {/* AI Video Card */}
                <div className="glow-card about-mini-card" onPointerMove={moveGlow}>
                  <h3 className="about-mini-title">{lang === "es" ? "Video con IA" : "AI Video"}</h3>
                  <p className="about-mini-desc">
                    {lang === "es"
                      ? "Edición y generación de video inteligente optimizado para engagement en TikTok, Reels y Shorts."
                      : "Smart video editing and generation optimized for engagement on TikTok, Reels and Shorts."}
                  </p>
                </div>

                {/* Creative Systems Card */}
                <div className="glow-card about-mini-card wide-bottom-card" onPointerMove={moveGlow}>
                  <h3 className="about-mini-title">
                    {lang === "es" ? "Sistemas Creativos" : "Creative Systems"}
                  </h3>
                  <p className="about-mini-desc">
                    {lang === "es"
                      ? "Guías de estilo asistidas por IA y frameworks de diseño reutilizables para mantener la coherencia de marca."
                      : "AI-assisted style guides and reusable design frameworks to maintain total brand consistency."}
                  </p>
                  <div style={{ position: "absolute", bottom: "18px", right: "18px", opacity: 0.12 }}>
                    <Workflow size={32} style={{ color: "var(--accent-color)" }} />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Tech stack icons row (Sliding Marquee) */}
          <div className="about-tech-strip">
            <div className="marquee-track">
              {/* Set 1 */}
              <div className="tech-icon-item" title="Texto 1">
                <img src="/assets/images/projects/Texto (1).webp" alt="Texto 1" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Texto 2">
                <img src="/assets/images/projects/Texto (2).webp" alt="Texto 2" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Texto 3">
                <img src="/assets/images/projects/Texto (3).webp" alt="Texto 3" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Texto 4">
                <img src="/assets/images/projects/Texto (4).webp" alt="Texto 4" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Texto">
                <img src="/assets/images/projects/Texto.webp" alt="Texto" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Claude">
                <img src="/assets/images/projects/Logo Claude.webp" alt="Claude" className="tech-logo-img" />
              </div>
              {/* Set 2 */}
              <div className="tech-icon-item" title="Texto 1">
                <img src="/assets/images/projects/Texto (1).webp" alt="Texto 1" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Texto 2">
                <img src="/assets/images/projects/Texto (2).webp" alt="Texto 2" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Texto 3">
                <img src="/assets/images/projects/Texto (3).webp" alt="Texto 3" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Texto 4">
                <img src="/assets/images/projects/Texto (4).webp" alt="Texto 4" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Texto">
                <img src="/assets/images/projects/Texto.webp" alt="Texto" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Claude">
                <img src="/assets/images/projects/Logo Claude.webp" alt="Claude" className="tech-logo-img" />
              </div>
              {/* Set 3 */}
              <div className="tech-icon-item" title="Texto 1">
                <img src="/assets/images/projects/Texto (1).webp" alt="Texto 1" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Texto 2">
                <img src="/assets/images/projects/Texto (2).webp" alt="Texto 2" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Texto 3">
                <img src="/assets/images/projects/Texto (3).webp" alt="Texto 3" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Texto 4">
                <img src="/assets/images/projects/Texto (4).webp" alt="Texto 4" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Texto">
                <img src="/assets/images/projects/Texto.webp" alt="Texto" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Claude">
                <img src="/assets/images/projects/Logo Claude.webp" alt="Claude" className="tech-logo-img" />
              </div>
              {/* Set 4 */}
              <div className="tech-icon-item" title="Texto 1">
                <img src="/assets/images/projects/Texto (1).webp" alt="Texto 1" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Texto 2">
                <img src="/assets/images/projects/Texto (2).webp" alt="Texto 2" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Texto 3">
                <img src="/assets/images/projects/Texto (3).webp" alt="Texto 3" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Texto 4">
                <img src="/assets/images/projects/Texto (4).webp" alt="Texto 4" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Texto">
                <img src="/assets/images/projects/Texto.webp" alt="Texto" className="tech-logo-img" />
              </div>
              <div className="tech-icon-item" title="Claude">
                <img src="/assets/images/projects/Logo Claude.webp" alt="Claude" className="tech-logo-img" />
              </div>
            </div>
          </div>
        </section>

        <section className="section-block" id="servicios">
          <div className="section-head">
            <div>
              <span className="eyebrow">{copy.blocks.eyebrow}</span>
              <h2>{copy.blocks.title}</h2>
            </div>
            <p>{copy.blocks.text}</p>
          </div>

          <div className="block-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
            {copy.blocks.items.map((block, index) => {
              return (
                <article
                  className="glow-card mini block-card cursor-pointer"
                  key={block}
                  tabIndex={0}
                  aria-label={block}
                  onPointerMove={moveGlow}
                  onClick={() => {
                    setActiveModalBlock(index);
                    setActiveModalService(blockToServiceMap[index] ?? 0);
                  }}
                >
                  <div className="block-card-media" aria-hidden="true">
                    <Image
                      src={BLOCK_IMAGES[index]}
                      alt=""
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 25vw"
                    />
                  </div>
                  <div className="block-card-scrim" aria-hidden="true" />
                  <div className="block-card-head">
                    <span className="card-num">{String(index + 1).padStart(2, "0")}</span>
                    {index === 0 && <Sparkles size={22} />}
                    {index === 1 && <Zap size={22} />}
                    {index === 2 && <Workflow size={22} />}
                  </div>
                  <h3>{block}</h3>
                </article>
              );
            })}
          </div>
        </section>

        <section className="section-block" id="portfolio">
          <div className="section-head">
            <div>
              <span className="eyebrow">{copy.portfolio.eyebrow}</span>
              <h2>{copy.portfolio.title}</h2>
            </div>
            <Button href="#contacto" variant="secondary">
              {copy.portfolio.all} <ArrowRight size={16} />
            </Button>
          </div>

          <div className="portfolio-grid">
            {copy.portfolio.items.map(([title, tag, size], index) => (
              <article
                className={`portfolio-card ${size} cursor-pointer`}
                key={title}
                tabIndex={0}
                aria-label={title}
                onPointerMove={moveGlow}
                onClick={() => {
                  const map = [0, 1, 0, 0, 2, 0, 1];
                  const svcIndex = map[index] ?? 0;
                  setActiveModalBlock(svcIndex);
                  setActiveModalService(svcIndex);
                }}
              >
                <div className="portfolio-media">
                  <Image
                    src={PORTFOLIO_IMAGES[index]}
                    alt=""
                    fill
                    loading="eager"
                    sizes="(max-width: 640px) 100vw, (max-width: 980px) 50vw, 33vw"
                  />
                  <span>{String(index + 1).padStart(2, "0")}</span>
                </div>
                <div>
                  <strong>{title}</strong>
                  <em>{tag}</em>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="cta-band">
          <div>
            <h2>{copy.cta.title}</h2>
            <p>{copy.cta.text}</p>
          </div>
          <Button href="#contacto">
            {copy.cta.button} <ArrowRight size={18} />
          </Button>
        </section>

        <section className="contact-section" id="contacto">
          <div className="contact-copy">
            <div>
              <span className="eyebrow">{copy.contact.eyebrow}</span>
              <h2>{copy.contact.title}</h2>
              <p>{copy.contact.text}</p>
            </div>

            <div className="contact-cards">
              <div><Mail size={20} /><span>{copy.contact.email}</span></div>
              <div><MessageCircle size={20} /><span>{copy.contact.whatsapp}</span></div>
              <div><Clock3 size={20} /><span>{copy.contact.response}</span></div>
            </div>
          </div>

          <form className="lead-form" onSubmit={submitForm}>
            <label>
              {copy.contact.fields.name} <span>*</span>
              <input required type="text" placeholder={copy.contact.placeholders.name} />
            </label>
            <label>
              {copy.contact.fields.company} <span>*</span>
              <input required type="text" placeholder={copy.contact.placeholders.company} />
            </label>
            <label>
              {copy.contact.fields.whatsapp} <span>*</span>
              <input required type="tel" placeholder={copy.contact.placeholders.whatsapp} />
            </label>
            <label>
              {copy.contact.fields.web}
              <input type="text" placeholder={copy.contact.placeholders.web} />
            </label>
            <label className="full">
              {copy.contact.fields.business}
              <input type="text" placeholder={copy.contact.placeholders.business} />
            </label>

            <div className="form-services full">
              <span>{copy.contact.fields.services} <small>{copy.contact.fields.multi}</small></span>
              <div>
                {copy.contact.serviceOptions.map((item, index) => (
                  <button
                    className={selected.includes(index) ? "selected" : ""}
                    key={item}
                    type="button"
                    onClick={() => toggleService(index)}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>

            <label className="full">
              {copy.contact.fields.message}
              <textarea placeholder={copy.contact.placeholders.message} />
            </label>

            <div className="form-foot full">
              <small>{sent ? copy.contact.fields.sent : copy.contact.fields.idle}</small>
              <button className="submit-btn" type="submit">
                {copy.contact.fields.submit} <ArrowRight size={17} />
              </button>
            </div>
          </form>
        </section>
      </main>

      <footer className="site-footer">
        <span>DANNA OLARTE © 2026</span>
        <span>{copy.footer}</span>
      </footer>

      {activeModalService !== null && (() => {
        let service = copy.services.items[activeModalService];
        if (!service) return null;
        
        let bannerImage = service.banner || '';
        let modalProjectsTitle = service.cardTitle || copy.services.selected;

        return (
          <div className="modal-overlay" onClick={handleBackdropClick}>
            <div className={`modal-container ${service.accent}`} onPointerMove={moveGlow}>
              <button
                type="button"
                className="modal-close-btn"
                onClick={() => setActiveModalService(null)}
                aria-label={copy.services.closeModal}
              >
                <X size={20} />
              </button>
              
              <div className="modal-content">
                <div className="modal-header">
                  <span className="modal-number">{service.number}</span>
                  <h2 className="modal-title">{service.title}</h2>
                </div>

                <div className="modal-banner" style={{ height: "auto", aspectRatio: "auto", overflow: "visible" }} onPointerMove={moveGlow}>
                  <div className="modal-banner-scrim" />
                  <img
                    src={bannerImage}
                    alt={service.title}
                    className="modal-banner-image"
                    style={{ position: "relative", display: "block", width: "100%", height: "auto", objectFit: "contain" }}
                  />
                </div>

                <div className="modal-body">
                  <div className="modal-info">
                    <p className="modal-desc">{service.description}</p>
                    
                    <div style={{ marginTop: "16px", marginBottom: "16px" }}>
                      <span className="eyebrow" style={{ fontSize: "11px", color: "var(--ink-muted)", letterSpacing: "0.1em" }}>
                        {lang === "es" ? "HERRAMIENTAS USADAS" : "TOOLS USED"}
                      </span>
                      <div style={{ display: "flex", gap: "16px", alignItems: "center", marginTop: "10px", flexWrap: "wrap" }}>
                        <img src="/assets/images/projects/Texto.webp" alt="Tool" style={{ height: "38px", width: "auto" }} />
                        <img src="/assets/images/projects/Texto (1).webp" alt="Tool" style={{ height: "38px", width: "auto" }} />
                        <img src="/assets/images/projects/Texto (2).webp" alt="Tool" style={{ height: "38px", width: "auto" }} />
                        <img src="/assets/images/projects/Texto (3).webp" alt="Tool" style={{ height: "38px", width: "auto" }} />
                        <img src="/assets/images/projects/Texto (4).webp" alt="Tool" style={{ height: "38px", width: "auto" }} />
                      </div>
                    </div>

                    <div className="modal-tags">
                      {service.tags.map((tag) => (
                        <em key={tag}>{tag}</em>
                      ))}
                    </div>
                  </div>

                  <div className="modal-projects-box">
                    <h3 className="modal-projects-title">{modalProjectsTitle}</h3>
                    <div className="modal-projects-list">
                      {service.projects.map((project) => (
                        <div className="modal-project-item" key={project}>
                          <CheckCircle2 size={16} />
                          <span>{project}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

                {service.projectsDetail && service.projectsDetail.length > 0 && (
                  <div className="modal-footer">
                    <Link
                      className="site-btn"
                      href={`/servicio/${activeModalService}`}
                      onClick={() => setActiveModalService(null)}
                      onPointerMove={moveGlow}
                    >
                      <span className="btn-glow" aria-hidden="true" />
                      <span className="btn-content">
                        {copy.services.viewProjects} <ArrowRight size={16} />
                      </span>
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        );
      })()}
    </div>
  );
}
