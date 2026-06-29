"use client";

import { useLanguage } from "./LanguageContext";
import { useInView } from "./useInView";

const serviceIcons: Record<string, React.ReactNode> = {
  code: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" />
      <polyline points="8 6 2 12 8 18" />
      <line x1="14" y1="4" x2="10" y2="20" />
    </svg>
  ),
  cloud: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M17.5 19H9a7 7 0 1 1 6.71-9h1.79a4.5 4.5 0 1 1 0 9z" />
    </svg>
  ),
  device: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" />
      <line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  brain: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2z" />
      <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2z" />
    </svg>
  ),
  server: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" />
      <rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" />
      <line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  lightbulb: (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  ),
};

export default function Services() {
  const { t, lang } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useInView();
  const { ref: gridRef, isVisible: gridVisible } = useInView();

  return (
    <section id="services" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background-secondary" />

      {/* Dot pattern */}
      <div className="absolute inset-0" style={{
        backgroundImage: "radial-gradient(circle, rgba(59, 130, 246, 0.06) 1px, transparent 1px)",
        backgroundSize: "50px 50px",
        maskImage: "radial-gradient(ellipse at center, black 20%, transparent 65%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 65%)",
      }} />

      {/* Orbs */}
      <div className="orb orb-indigo w-[400px] h-[400px] bottom-0 left-0 opacity-[0.06] animate-float-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 reveal ${headerVisible ? "visible" : ""}`}
        >
          <span className="section-tag mb-6 inline-flex">{t.services.tag}</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-6 mb-6">
            <span className="gradient-text">{t.services.title}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            {t.services.subtitle}
          </p>
        </div>

        {/* Services grid */}
        <div
          ref={gridRef}
          className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {t.services.items.map((service, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-8 relative group overflow-hidden reveal ${
                gridVisible ? "visible" : ""
              } stagger-${i + 1}`}
            >
              {/* Background hover glow */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

              {/* Icon */}
              <div className="relative z-10 w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 transition-all duration-500 group-hover:bg-primary/20 group-hover:border-primary/30 group-hover:shadow-lg group-hover:shadow-primary/10 group-hover:scale-110">
                {serviceIcons[service.icon]}
              </div>

              {/* Content */}
              <h3 className="relative z-10 text-xl font-bold text-foreground mb-3 group-hover:text-white transition-colors duration-300">
                {service.title}
              </h3>
              <p className="relative z-10 text-muted-foreground leading-relaxed text-[0.95rem] group-hover:text-muted-foreground/90 transition-colors duration-300">
                {service.description}
              </p>

              {/* Arrow indicator */}
              <div className="relative z-10 mt-6 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-10px] group-hover:translate-x-0">
                <span>{lang === "en" ? "Learn more" : "Saber más"}</span>
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </div>

              {/* Corner decoration */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/5 to-transparent rounded-bl-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
