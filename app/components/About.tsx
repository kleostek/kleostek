"use client";

import { useLanguage } from "./LanguageContext";
import { useInView } from "./useInView";

const icons = [
  /* Mission - Rocket */
  <svg key="mission" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>,
  /* Vision - Eye */
  <svg key="vision" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7z"/><circle cx="12" cy="12" r="3"/></svg>,
  /* Values - Diamond */
  <svg key="values" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 3h12l4 6-10 13L2 9z"/><path d="M11 3l1 6"/><path d="M2 9h20"/><path d="M7 9l5 13"/><path d="M17 9l-5 13"/></svg>,
];

export default function About() {
  const { t } = useLanguage();
  const { ref: sectionRef, isVisible } = useInView();
  const { ref: cardsRef, isVisible: cardsVisible } = useInView();

  return (
    <section id="about" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />

      {/* Decorative orb */}
      <div className="orb orb-blue w-[350px] h-[350px] top-0 right-0 opacity-[0.08] animate-float-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={sectionRef}
          className={`text-center mb-20 reveal ${isVisible ? "visible" : ""}`}
        >
          <span className="section-tag mb-6 inline-flex">{t.about.tag}</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-6 mb-6">
            <span className="gradient-text">{t.about.title}</span>
          </h2>
          <p className="max-w-3xl mx-auto text-lg text-muted-foreground leading-relaxed">
            {t.about.description}
          </p>
        </div>

        {/* Cards */}
        <div
          ref={cardsRef}
          className="grid md:grid-cols-3 gap-6 lg:gap-8"
        >
          {t.about.cards.map((card, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl p-8 lg:p-10 relative group reveal ${
                cardsVisible ? "visible" : ""
              } stagger-${i + 1}`}
            >
              {/* Icon container */}
              <div className="w-14 h-14 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary mb-6 transition-all duration-500 group-hover:bg-primary/15 group-hover:shadow-lg group-hover:shadow-primary/10">
                {icons[i]}
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-foreground mb-3">
                {card.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed text-[0.95rem]">
                {card.description}
              </p>

              {/* Bottom accent line */}
              <div className="absolute bottom-0 left-8 right-8 h-[2px] bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
