"use client";

import { useState, type FormEvent } from "react";
import { useLanguage } from "./LanguageContext";
import { useInView } from "./useInView";

export default function Contact() {
  const { t, lang } = useLanguage();
  const { ref: headerRef, isVisible: headerVisible } = useInView();
  const { ref: contentRef, isVisible: contentVisible } = useInView();
  const [status, setStatus] = useState<"idle" | "sending" | "sent">("idle");

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus("sending");
    // Simulated submission
    setTimeout(() => {
      setStatus("sent");
      setTimeout(() => setStatus("idle"), 4000);
    }, 1500);
  };

  return (
    <section id="contact" className="relative py-28 md:py-36 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background-secondary to-background" />

      {/* Grid background */}
      <div className="absolute inset-0" style={{
        backgroundImage: `
          linear-gradient(rgba(59, 130, 246, 0.02) 1px, transparent 1px),
          linear-gradient(90deg, rgba(59, 130, 246, 0.02) 1px, transparent 1px)
        `,
        backgroundSize: "80px 80px",
        maskImage: "radial-gradient(ellipse at center, black 20%, transparent 60%)",
        WebkitMaskImage: "radial-gradient(ellipse at center, black 20%, transparent 60%)",
      }} />

      <div className="orb orb-blue w-[350px] h-[350px] bottom-0 left-1/4 opacity-[0.07] animate-float-slow" />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        {/* Header */}
        <div
          ref={headerRef}
          className={`text-center mb-16 reveal ${headerVisible ? "visible" : ""}`}
        >
          <span className="section-tag mb-6 inline-flex">{t.contact.tag}</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mt-6 mb-6">
            <span className="gradient-text">{t.contact.title}</span>
          </h2>
          <p className="max-w-2xl mx-auto text-lg text-muted-foreground leading-relaxed">
            {t.contact.subtitle}
          </p>
        </div>

        {/* Content */}
        <div
          ref={contentRef}
          className={`grid lg:grid-cols-5 gap-8 lg:gap-12 max-w-5xl mx-auto reveal ${
            contentVisible ? "visible" : ""
          }`}
        >
          {/* Form */}
          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.name}
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    className="form-input"
                    placeholder={t.contact.form.name}
                  />
                </div>
                <div>
                  <label htmlFor="contact-email" className="block text-sm font-medium text-foreground mb-2">
                    {t.contact.form.email}
                  </label>
                  <input
                    id="contact-email"
                    type="email"
                    required
                    className="form-input"
                    placeholder={t.contact.form.email}
                  />
                </div>
              </div>
              <div>
                <label htmlFor="contact-subject" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.form.subject}
                </label>
                <input
                  id="contact-subject"
                  type="text"
                  required
                  className="form-input"
                  placeholder={t.contact.form.subject}
                />
              </div>
              <div>
                <label htmlFor="contact-message" className="block text-sm font-medium text-foreground mb-2">
                  {t.contact.form.message}
                </label>
                <textarea
                  id="contact-message"
                  rows={5}
                  required
                  className="form-input resize-none"
                  placeholder={t.contact.form.message}
                />
              </div>

              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-primary w-full sm:w-auto disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <span className="flex items-center gap-2">
                  {status === "sending" ? (
                    <>
                      <svg className="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="50 14" />
                      </svg>
                      {t.contact.form.sending}
                    </>
                  ) : (
                    <>
                      {t.contact.form.submit}
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                        <line x1="22" y1="2" x2="11" y2="13" />
                        <polygon points="22 2 15 22 11 13 2 9 22 2" />
                      </svg>
                    </>
                  )}
                </span>
              </button>

              {/* Success message */}
              {status === "sent" && (
                <div className="flex items-center gap-2 text-green-400 text-sm font-medium animate-fade-in-up">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <polyline points="22 4 12 14.01 9 11.01" />
                  </svg>
                  {t.contact.form.success}
                </div>
              )}
            </form>
          </div>

          {/* Info cards */}
          <div className="lg:col-span-2 flex flex-col gap-5">
            {/* Email */}
            <div className="glass-card rounded-2xl p-6 group">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="4" width="20" height="16" rx="2" />
                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a href={`mailto:${t.contact.info.email}`} className="text-foreground font-medium hover:text-primary transition-colors">
                    {t.contact.info.email}
                  </a>
                </div>
              </div>
            </div>

            {/* Location */}
            <div className="glass-card rounded-2xl p-6 group">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <path d="M2 12h20" />
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {lang === "en" ? "Location" : "Ubicación"}
                  </p>
                  <p className="text-foreground font-medium">
                    {t.contact.info.location}
                  </p>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className="glass-card rounded-2xl p-6 group">
              <div className="flex items-start gap-4">
                <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <polyline points="12 6 12 12 16 14" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {lang === "en" ? "Availability" : "Disponibilidad"}
                  </p>
                  <p className="text-foreground font-medium flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    {t.contact.info.availability}
                  </p>
                </div>
              </div>
            </div>

            {/* GitHub link */}
            <a
              href="https://github.com/kleostek"
              target="_blank"
              rel="noopener noreferrer"
              className="glass-card rounded-2xl p-6 group flex items-center gap-4 hover:border-primary/20"
            >
              <div className="w-11 h-11 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center text-primary flex-shrink-0 group-hover:bg-primary/20 transition-all duration-300">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-0.5">GitHub</p>
                <p className="text-foreground font-medium group-hover:text-primary transition-colors">
                  github.com/kleostek
                </p>
              </div>
              <svg className="ml-auto text-muted-foreground group-hover:text-primary transition-colors" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 17l9.2-9.2M17 17V7.8H7.8" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
