"use client";

import { useLanguage } from "./LanguageContext";
import { useInView } from "./useInView";

const decorativePatterns = [
  /* Pattern 1 - Grid lines */
  <svg key="p1" className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 200">
    <defs>
      <pattern id="grid1" width="20" height="20" patternUnits="userSpaceOnUse">
        <path d="M 20 0 L 0 0 0 20" fill="none" stroke="rgba(96,165,250,0.3)" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#grid1)" />
    <circle cx="100" cy="100" r="40" fill="none" stroke="rgba(96,165,250,0.2)" strokeWidth="1" />
    <circle cx="100" cy="100" r="60" fill="none" stroke="rgba(96,165,250,0.1)" strokeWidth="0.5" />
  </svg>,
  /* Pattern 2 - Hexagonal */
  <svg key="p2" className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 200">
    <defs>
      <pattern id="hex1" width="40" height="40" patternUnits="userSpaceOnUse">
        <polygon points="20,2 38,12 38,28 20,38 2,28 2,12" fill="none" stroke="rgba(129,140,248,0.2)" strokeWidth="0.5"/>
      </pattern>
    </defs>
    <rect width="200" height="200" fill="url(#hex1)" />
    <rect x="60" y="60" width="80" height="80" rx="8" fill="none" stroke="rgba(129,140,248,0.2)" strokeWidth="1" />
  </svg>,
  /* Pattern 3 - Circles */
  <svg key="p3" className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 200">
    <circle cx="100" cy="100" r="80" fill="none" stroke="rgba(34,211,238,0.15)" strokeWidth="0.5" strokeDasharray="4 4" />
    <circle cx="100" cy="100" r="50" fill="none" stroke="rgba(34,211,238,0.2)" strokeWidth="0.5" />
    <circle cx="100" cy="100" r="20" fill="none" stroke="rgba(34,211,238,0.3)" strokeWidth="1" />
    <line x1="0" y1="100" x2="200" y2="100" stroke="rgba(34,211,238,0.08)" strokeWidth="0.5" />
    <line x1="100" y1="0" x2="100" y2="200" stroke="rgba(34,211,238,0.08)" strokeWidth="0.5" />
  </svg>,
  /* Pattern 4 - Abstract */
  <svg key="p4" className="absolute inset-0 w-full h-full opacity-10" viewBox="0 0 200 200">
    <path d="M20 100 Q100 20 180 100 Q100 180 20 100" fill="none" stroke="rgba(96,165,250,0.2)" strokeWidth="0.5" />
    <path d="M40 100 Q100 40 160 100 Q100 160 40 100" fill="none" stroke="rgba(96,165,250,0.15)" strokeWidth="0.5" />
    <rect x="70" y="70" width="60" height="60" rx="12" fill="none" stroke="rgba(96,165,250,0.25)" strokeWidth="1" transform="rotate(45 100 100)" />
  </svg>,
];

export default function Portfolio() {
  const { t, lang } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useInView();
  const { ref: gridRef, isVisible: gridVisible } = useInView();

  const gradients = [
    "portfolio-gradient-1",
    "portfolio-gradient-2",
    "portfolio-gradient-3",
    "portfolio-gradient-4",
  ];

  return (
    <section id="portfolio" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background-secondary via-background to-background" />

      <div className="orb orb-cyan w-[300px] h-[300px] top-20 right-0 opacity-[0.06] animate-float" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-20 reveal ${headerVisible ? "visible" : ""}`}
        >
          <span className="section-tag mb-6 inline-flex">{t.portfolio.tag}</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-6 mb-6">
            <span className="gradient-text">{t.portfolio.title}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            {t.portfolio.subtitle}
          </p>
        </div>

        {/* Portfolio grid */}
        <div
          ref={gridRef}
          className="grid md:grid-cols-2 gap-6 lg:gap-8"
        >
          {t.portfolio.items.map((item, i) => (
            <div
              key={i}
              className={`group relative rounded-2xl overflow-hidden reveal ${
                gridVisible ? "visible" : ""
              } stagger-${i + 1}`}
            >
              {/* Card */}
              <div className="glass-card rounded-2xl overflow-hidden h-full">
                {/* Preview area */}
                <div
                  className={`relative h-52 md:h-60 ${gradients[i]} overflow-hidden`}
                >
                  {/* Decorative pattern */}
                  {decorativePatterns[i]}

                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />

                  {/* Category badge */}
                  <div className="absolute top-4 left-4 px-3 py-1 text-xs font-mono font-semibold text-white/90 bg-black/30 backdrop-blur-sm rounded-full border border-white/10">
                    {item.category}
                  </div>

                  {/* Demo badge */}
                  {item.isDemo && (
                    <div className="absolute top-4 right-4 px-2 py-1 text-xs font-semibold text-amber-100 bg-amber-600/40 backdrop-blur-sm rounded-full border border-amber-400/30">
                      Demo
                    </div>
                  )}

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Content */}
                <div className="p-6 lg:p-8">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-white transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed text-[0.95rem]">
                    {item.description}
                  </p>

                  {/* View project link */}
                  <div className="mt-5 flex items-center gap-2 text-primary text-sm font-medium opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-2 group-hover:translate-y-0">
                    <span>{lang === "en" ? "View Details" : "Ver Detalles"}</span>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
