"use client";

import { useEffect, useState, useRef } from "react";
import { useLanguage } from "./LanguageContext";

function AnimatedCounter({ target, suffix = "" }: { target: string; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const [started, setStarted] = useState(false);

  const numericPart = parseInt(target.replace(/[^0-9]/g, ""), 10);
  const hasPlus = target.includes("+");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started) {
          setStarted(true);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.unobserve(el);
  }, [started]);

  useEffect(() => {
    if (!started || isNaN(numericPart)) return;

    const duration = 2000;
    const steps = 60;
    const increment = numericPart / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= numericPart) {
        setCount(numericPart);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);

    return () => clearInterval(timer);
  }, [started, numericPart]);

  if (isNaN(numericPart)) {
    return <span ref={ref}>{target}</span>;
  }

  return (
    <span ref={ref}>
      {count}
      {suffix}
      {hasPlus ? "+" : ""}
    </span>
  );
}

export default function Hero() {
  const { t, lang } = useLanguage();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20"
    >
      {/* Background effects */}
      <div className="absolute inset-0 bg-background" />

      {/* Grid background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(rgba(59, 130, 246, 0.03) 1px, transparent 1px),
            linear-gradient(90deg, rgba(59, 130, 246, 0.03) 1px, transparent 1px)
          `,
          backgroundSize: "60px 60px",
          maskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 70%)",
          WebkitMaskImage: "radial-gradient(ellipse 80% 70% at 50% 50%, black 30%, transparent 70%)",
        }} />
      </div>

      {/* Orbs */}
      <div
        className="orb orb-blue w-[500px] h-[500px] -top-32 -right-32 animate-float-slow"
        style={{ animationDelay: "0s" }}
      />
      <div
        className="orb orb-indigo w-[400px] h-[400px] -bottom-20 -left-20 animate-float-slow"
        style={{ animationDelay: "-4s" }}
      />
      <div
        className="orb orb-cyan w-[300px] h-[300px] top-1/3 left-1/4 animate-float"
        style={{ animationDelay: "-2s", opacity: 0.08 }}
      />

      {/* Floating geometric shapes */}
      <div className="absolute top-1/4 right-[15%] w-16 h-16 border border-primary/20 rounded-xl rotate-45 animate-float opacity-20" style={{ animationDelay: "-1s" }} />
      <div className="absolute bottom-1/3 left-[12%] w-10 h-10 border border-chart-1/20 rounded-full animate-float-slow opacity-15" style={{ animationDelay: "-3s" }} />
      <div className="absolute top-[40%] right-[8%] w-6 h-6 bg-primary/10 rounded-md rotate-12 animate-float" style={{ animationDelay: "-5s" }} />
      <div className="absolute top-[20%] left-[20%] w-3 h-3 bg-chart-1/30 rounded-full animate-float" style={{ animationDelay: "-4s" }} />
      <div className="absolute bottom-[25%] right-[25%] w-4 h-4 border border-primary/15 rounded-sm rotate-45 animate-float-slow" style={{ animationDelay: "-2s" }} />

      {/* Radial gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
        <div
          className={`transition-all duration-1000 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-8 rounded-full border border-primary/20 bg-primary/5 text-primary text-sm font-medium">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="font-mono text-xs tracking-wider uppercase">
              {lang === "en"
                ? "Next-Gen Software Engineering"
                : "Ingeniería de Software de Nueva Generación"}
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[1.05] tracking-tight mb-8">
            <span className="block text-foreground">{t.hero.title1}</span>
            <span className="block gradient-text-hero mt-2">{t.hero.title2}</span>
          </h1>

          {/* Subtitle */}
          <p
            className={`max-w-2xl mx-auto text-lg sm:text-xl text-muted-foreground leading-relaxed mb-12 transition-all duration-1000 delay-300 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t.hero.subtitle}
          </p>

          {/* CTAs */}
          <div
            className={`flex flex-col sm:flex-row items-center justify-center gap-4 mb-20 transition-all duration-1000 delay-500 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            <a href="#services" className="btn-primary">
              <span className="flex items-center gap-2">
                {t.hero.cta1}
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </a>
            <a href="#contact" className="btn-secondary">
              {t.hero.cta2}
            </a>
          </div>

          {/* Stats */}
          <div
            className={`grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 max-w-3xl mx-auto transition-all duration-1000 delay-700 ${
              mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
            }`}
          >
            {t.hero.stats.map((stat, i) => (
              <div
                key={i}
                className="flex flex-col items-center gap-1 group"
              >
                <span className="text-3xl sm:text-4xl font-bold gradient-text font-mono tracking-tight">
                  {stat.value.includes("/") ? (
                    stat.value
                  ) : (
                    <AnimatedCounter
                      target={stat.value}
                      suffix={stat.value.includes("%") ? "%" : ""}
                    />
                  )}
                </span>
                <span className="text-xs sm:text-sm text-muted-foreground font-medium uppercase tracking-wider">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-all duration-1000 delay-1000 ${
            mounted ? "opacity-60" : "opacity-0"
          }`}
        >
          <span className="text-xs text-muted-foreground uppercase tracking-widest font-medium">
            Scroll
          </span>
          <div className="w-5 h-8 border-2 border-muted-foreground/30 rounded-full flex justify-center pt-1">
            <div className="w-1 h-2 bg-primary rounded-full animate-bounce" />
          </div>
        </div>
      </div>
    </section>
  );
}
