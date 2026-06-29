"use client";

import React, { createContext, useContext, useState, useCallback } from "react";

type Lang = "en" | "es";

const translations = {
  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Services",
      portfolio: "Portfolio",
      contact: "Contact",
    },
    hero: {
      title1: "Your business deserves",
      title2: "software that works the way you do.",
      subtitle:
        "At Kleostek we develop custom web applications, integrations, and automations for companies ready to leave manual processes behind. We work with agility, transparency, and a focus on real results.",
      cta1: "Let's talk about your project",
      cta2: "Explore our services",
      stats: [
        { value: "6", label: "Specialized services" },
        { value: "Modern", label: "Tech stack" },
        { value: "Agro", label: "Logistics & more" },
        { value: "Flexible", label: "Availability" },
      ],
    },
    about: {
      tag: "About Kleostek",
      title: "About Kleostek",
      description:
        "We are a growing software development company, founded with the purpose of bringing technology closer to the Colombian businesses that need it most. We believe well-built software transforms the way teams work — and that is exactly our commitment to every client.",
      cards: [
        {
          title: "Our Mission",
          description:
            "To develop tailored digital solutions that solve real problems, with honesty, technical quality, and a focus on business impact for our clients.",
        },
        {
          title: "Our Vision",
          description:
            "To become the go-to technology partner for Colombian SMEs looking to digitize their operations without relying on generic, one-size-fits-all solutions.",
        },
        {
          title: "Our Values",
          description:
            "Honesty — we deliver what we promise. Technical quality — clean code and scalable solutions. Results-driven — our client's success is our success.",
        },
      ],
    },
    services: {
      tag: "What We Do",
      title: "Our Services",
      subtitle:
        "Technology solutions designed for your company's real needs.",
      items: [
        {
          title: "Custom Web Applications",
          description:
            "We build internal portals, dashboards, and management systems tailored exactly to your processes. No templates, no unnecessary features.",
          icon: "code",
        },
        {
          title: "Integrations & Automations",
          description:
            "We connect the systems that don't talk to each other today. WhatsApp, ERPs, spreadsheets, APIs — all integrated so your team stops doing repetitive manual work.",
          icon: "cloud",
        },
        {
          title: "Process Digitization",
          description:
            "We take the processes that currently live on paper, Excel, or WhatsApp messages and turn them into usable, traceable, and scalable applications.",
          icon: "device",
        },
        {
          title: "SaaS Products",
          description:
            "We design and develop software-as-a-service products from architecture to deployment, ready to scale with your business.",
          icon: "brain",
        },
        {
          title: "Cloud Infrastructure",
          description:
            "We set up, migrate, and optimize cloud infrastructure so your software is fast, secure, and available when you need it.",
          icon: "server",
        },
        {
          title: "Technology Consulting",
          description:
            "If you're not sure where to start your digital transformation, we help you define the path: what to build, in what order, and with what budget.",
          icon: "lightbulb",
        },
      ],
    },
    portfolio: {
      tag: "Reference Projects",
      title: "Reference Projects",
      subtitle:
        "We are building our portfolio. The following projects are illustrative examples of the solutions we develop. Contact us to learn how we can apply them to your business.",
      items: [
        {
          title: "Enterprise Analytics Platform",
          category: "AI / Data Analytics",
          description:
            "Real-time data visualization and predictive analytics platform powered by machine learning algorithms.",
          gradient: 1,
          isDemo: true,
        },
        {
          title: "Cloud Migration Suite",
          category: "Cloud Infrastructure",
          description:
            "End-to-end cloud migration toolkit with automated assessment, planning, and deployment capabilities.",
          gradient: 2,
          isDemo: true,
        },
        {
          title: "FinTech Mobile App",
          category: "Mobile Development",
          description:
            "Secure, intuitive mobile banking application with real-time transactions and biometric authentication.",
          gradient: 3,
          isDemo: true,
        },
        {
          title: "Smart ERP System",
          category: "Custom Software",
          description:
            "Modular enterprise resource planning system with AI-powered workflow automation and insights.",
          gradient: 4,
          isDemo: true,
        },
      ],
    },
    contact: {
      tag: "Let's Talk About Your Project",
      title: "Let's Talk About Your Project",
      subtitle:
        "Tell us about the problem you want to solve. We'll get back to you within 24 hours.",
      form: {
        name: "Full name",
        email: "Email address",
        subject: "Subject",
        message: "Tell us about your project or the problem you want to solve",
        submit: "Send message",
        sending: "Sending...",
        success: "Message sent successfully! We'll get back to you soon.",
      },
      info: {
        email: "kleostek@gmail.com",
        location: "Global · Remote-First",
        availability: "We respond within 24 hours",
      },
    },
    footer: {
      description:
        "Next-generation software engineering company dedicated to building transformative digital solutions.",
      navigation: "Navigation",
      services: "Services",
      connect: "Connect",
      rights: "All rights reserved.",
    },
  },
  es: {
    nav: {
      home: "Inicio",
      about: "Nosotros",
      services: "Servicios",
      portfolio: "Portfolio",
      contact: "Contacto",
    },
    hero: {
      title1: "Su empresa merece",
      title2: "software que funcione como usted trabaja.",
      subtitle:
        "En Kleostek desarrollamos aplicaciones web, integraciones y automatizaciones a medida para empresas que buscan dejar atrás los procesos manuales. Trabajamos con agilidad, transparencia y enfoque en resultados reales.",
      cta1: "Hablemos de su proyecto",
      cta2: "Ver nuestros servicios",
      stats: [
        { value: "6", label: "Servicios especializados" },
        { value: "Stack", label: "Tecnológico moderno" },
        { value: "Agro",label: "Logística y más" },
        { value: "Flexible", label: "Disponibilidad" },
      ],
    },
    about: {
      tag: "Sobre Kleostek",
      title: "Sobre Kleostek",
      description:
        "Somos una empresa de desarrollo de software en crecimiento, fundada con el propósito de acercar la tecnología a las empresas colombianas que más la necesitan. Creemos que el software bien construido transforma la forma en que los equipos trabajan — y ese es exactamente nuestro compromiso con cada cliente.",
      cards: [
        {
          title: "Nuestra Misión",
          description:
            "Desarrollar soluciones digitales a medida que resuelvan problemas reales, con honestidad, calidad técnica y enfoque en el impacto para el negocio del cliente.",
        },
        {
          title: "Nuestra Visión",
          description:
            "Ser el aliado tecnológico de referencia para las pymes colombianas que buscan digitalizar su operación sin depender de soluciones genéricas.",
        },
        {
          title: "Nuestros Valores",
          description:
            "Honestidad — entregamos lo que prometemos. Calidad técnica — código limpio y soluciones que escalan. Enfoque en resultados — el éxito del cliente es nuestro éxito.",
        },
      ],
    },
    services: {
      tag: "Lo Que Hacemos",
      title: "Nuestros Servicios",
      subtitle:
        "Soluciones tecnológicas diseñadas para las necesidades reales de su empresa.",
      items: [
        {
          title: "Aplicaciones Web a Medida",
          description:
            "Desarrollamos portales internos, dashboards y sistemas de gestión adaptados exactamente a sus procesos. Sin moldes, sin funciones que no necesita.",
          icon: "code",
        },
        {
          title: "Integraciones y Automatizaciones",
          description:
            "Conectamos los sistemas que hoy no se comunican entre sí. WhatsApp, ERPs, hojas de cálculo, APIs — todo integrado para que su equipo deje de hacer trabajo manual repetitivo.",
          icon: "cloud",
        },
        {
          title: "Digitalización de Procesos",
          description:
            "Tomamos los procesos que hoy viven en papel, Excel o mensajes de WhatsApp y los convertimos en aplicaciones usables, trazables y escalables.",
          icon: "device",
        },
        {
          title: "Productos SaaS",
          description:
            "Diseñamos y desarrollamos productos de software como servicio desde la arquitectura hasta el despliegue, listos para escalar con su negocio.",
          icon: "brain",
        },
        {
          title: "Infraestructura en la Nube",
          description:
            "Configuramos, migramos y optimizamos infraestructura cloud para que su software sea rápido, seguro y disponible cuando lo necesite.",
          icon: "server",
        },
        {
          title: "Consultoría Tecnológica",
          description:
            "Si no sabe por dónde empezar su transformación digital, nosotros le ayudamos a definir el camino: qué construir, en qué orden y con qué presupuesto.",
          icon: "lightbulb",
        },
      ],
    },
    portfolio: {
      tag: "Proyectos de Referencia",
      title: "Proyectos de Referencia",
      subtitle:
        "Estamos construyendo nuestro portafolio. Los siguientes proyectos son ejemplos ilustrativos de las soluciones que desarrollamos. Contáctenos para conocer cómo podemos aplicarlos a su empresa.",
      items: [
        {
          title: "Plataforma de Analítica Empresarial",
          category: "IA / Analítica de Datos",
          description:
            "Plataforma de visualización de datos en tiempo real y analítica predictiva impulsada por machine learning.",
          gradient: 1,
          isDemo: true,
        },
        {
          title: "Suite de Migración Cloud",
          category: "Infraestructura Cloud",
          description:
            "Kit de herramientas de migración cloud integral con evaluación automatizada y despliegue.",
          gradient: 2,
          isDemo: true,
        },
        {
          title: "App Móvil FinTech",
          category: "Desarrollo Móvil",
          description:
            "Aplicación de banca móvil segura e intuitiva con transacciones en tiempo real y autenticación biométrica.",
          gradient: 3,
          isDemo: true,
        },
        {
          title: "Sistema ERP Inteligente",
          category: "Software a Medida",
          description:
            "Sistema modular de planificación de recursos con automatización de flujos impulsada por IA.",
          gradient: 4,
          isDemo: true,
        },
      ],
    },
    contact: {
      tag: "Hablemos de su Proyecto",
      title: "Hablemos de su Proyecto",
      subtitle:
        "Cuéntenos el problema que quiere resolver. Le respondemos en menos de 24 horas.",
      form: {
        name: "Nombre completo",
        email: "Correo electrónico",
        subject: "Asunto",
        message: "Cuéntenos sobre su proyecto o el problema que quiere resolver",
        submit: "Enviar mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado con éxito! Te responderemos pronto.",
      },
      info: {
        email: "kleostek@gmail.com",
        location: "Global · Remote-First",
        availability: "Respondemos en menos de 24 horas",
      },
    },
    footer: {
      description:
        "Empresa de ingeniería de software de nueva generación dedicada a construir soluciones digitales transformadoras.",
      navigation: "Navegación",
      services: "Servicios",
      connect: "Conectar",
      rights: "Todos los derechos reservados.",
    },
  },
} as const;

type Translations = typeof translations;
type TranslationData = Translations[Lang];

interface LanguageContextType {
  lang: Lang;
  t: TranslationData;
  toggleLang: () => void;
}

const LanguageContext = createContext<LanguageContextType | null>(null);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");

  const toggleLang = useCallback(() => {
    setLang((prev) => (prev === "en" ? "es" : "en"));
  }, []);

  const value: LanguageContextType = {
    lang,
    t: translations[lang],
    toggleLang,
  };

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
