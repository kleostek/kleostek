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
      title1: "Where Innovation",
      title2: "Meets Execution",
      subtitle:
        "We engineer cutting-edge software solutions that transform businesses and redefine what's possible in the digital landscape.",
      cta1: "Explore Our Services",
      cta2: "Get in Touch",
      stats: [
        { value: "50+", label: "Projects Ready" },
        { value: "15+", label: "Technologies" },
        { value: "99%", label: "Client Satisfaction" },
        { value: "24/7", label: "Uptime Guaranteed" },
      ],
    },
    about: {
      tag: "About Us",
      title: "Building the Future of Technology",
      description:
        "Kleostek is a next-generation software company born from a passion for technology and a relentless drive for innovation. We bring together elite engineering talent to deliver transformative digital solutions that empower businesses worldwide.",
      cards: [
        {
          title: "Our Mission",
          description:
            "To democratize access to cutting-edge technology by delivering world-class software solutions that drive growth, efficiency, and digital transformation.",
        },
        {
          title: "Our Vision",
          description:
            "To become the global standard for software engineering excellence, shaping how businesses interact with technology.",
        },
        {
          title: "Our Values",
          description:
            "Innovation, integrity, and impact drive everything we do. We believe in pushing boundaries while maintaining the highest standards of quality.",
        },
      ],
    },
    services: {
      tag: "What We Do",
      title: "Our Services",
      subtitle:
        "From concept to deployment, we deliver end-to-end technology solutions tailored to your unique business needs.",
      items: [
        {
          title: "Custom Software",
          description:
            "Tailored solutions designed to solve your most complex business challenges with precision and scalability.",
          icon: "code",
        },
        {
          title: "SaaS Products",
          description:
            "Cloud-native applications built for performance, security, and seamless user experience at scale.",
          icon: "cloud",
        },
        {
          title: "Web & Mobile",
          description:
            "Stunning, responsive digital experiences that engage users and drive conversions across all platforms.",
          icon: "device",
        },
        {
          title: "AI & Machine Learning",
          description:
            "Intelligent systems that learn, adapt, and deliver actionable insights to give you a competitive edge.",
          icon: "brain",
        },
        {
          title: "Cloud Infrastructure",
          description:
            "Robust, scalable cloud architectures that ensure reliability, security, and optimal performance.",
          icon: "server",
        },
        {
          title: "Tech Consulting",
          description:
            "Strategic guidance to navigate digital transformation and make technology decisions with confidence.",
          icon: "lightbulb",
        },
      ],
    },
    portfolio: {
      tag: "Our Capabilities",
      title: "What We Build",
      subtitle:
        "Explore our capabilities and the types of transformative solutions we deliver to businesses across industries.",
      items: [
        {
          title: "Enterprise Analytics Platform",
          category: "AI / Data Analytics",
          description:
            "Real-time data visualization and predictive analytics platform powered by machine learning algorithms.",
          gradient: 1,
        },
        {
          title: "Cloud Migration Suite",
          category: "Cloud Infrastructure",
          description:
            "End-to-end cloud migration toolkit with automated assessment, planning, and deployment capabilities.",
          gradient: 2,
        },
        {
          title: "FinTech Mobile App",
          category: "Mobile Development",
          description:
            "Secure, intuitive mobile banking application with real-time transactions and biometric authentication.",
          gradient: 3,
        },
        {
          title: "Smart ERP System",
          category: "Custom Software",
          description:
            "Modular enterprise resource planning system with AI-powered workflow automation and insights.",
          gradient: 4,
        },
      ],
    },
    contact: {
      tag: "Get In Touch",
      title: "Let's Build Something Amazing",
      subtitle:
        "Ready to transform your business with technology? We'd love to hear about your project.",
      form: {
        name: "Full Name",
        email: "Email Address",
        subject: "Subject",
        message: "Your Message",
        submit: "Send Message",
        sending: "Sending...",
        success: "Message sent successfully! We'll get back to you soon.",
      },
      info: {
        email: "hello@kleostek.com",
        location: "Global · Remote-First",
        availability: "Available 24/7",
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
      title1: "Donde la Innovación",
      title2: "se Encuentra con la Ejecución",
      subtitle:
        "Diseñamos soluciones de software de vanguardia que transforman negocios y redefinen lo posible en el panorama digital.",
      cta1: "Explorar Servicios",
      cta2: "Contáctanos",
      stats: [
        { value: "50+", label: "Proyectos Listos" },
        { value: "15+", label: "Tecnologías" },
        { value: "99%", label: "Satisfacción" },
        { value: "24/7", label: "Disponibilidad" },
      ],
    },
    about: {
      tag: "Sobre Nosotros",
      title: "Construyendo el Futuro de la Tecnología",
      description:
        "Kleostek es una empresa de software de nueva generación nacida de la pasión por la tecnología y un impulso incansable por la innovación. Reunimos talento de ingeniería de élite para ofrecer soluciones digitales transformadoras.",
      cards: [
        {
          title: "Nuestra Misión",
          description:
            "Democratizar el acceso a tecnología de punta ofreciendo soluciones de software de clase mundial que impulsan el crecimiento y la transformación digital.",
        },
        {
          title: "Nuestra Visión",
          description:
            "Convertirnos en el estándar global de excelencia en ingeniería de software, moldeando cómo las empresas interactúan con la tecnología.",
        },
        {
          title: "Nuestros Valores",
          description:
            "Innovación, integridad e impacto impulsan todo lo que hacemos. Creemos en superar límites manteniendo los más altos estándares de calidad.",
        },
      ],
    },
    services: {
      tag: "Lo Que Hacemos",
      title: "Nuestros Servicios",
      subtitle:
        "Desde el concepto hasta el despliegue, ofrecemos soluciones tecnológicas integrales adaptadas a las necesidades de tu negocio.",
      items: [
        {
          title: "Software a Medida",
          description:
            "Soluciones personalizadas para resolver los desafíos más complejos de tu negocio con precisión y escalabilidad.",
          icon: "code",
        },
        {
          title: "Productos SaaS",
          description:
            "Aplicaciones nativas en la nube construidas para rendimiento, seguridad y experiencia de usuario fluida a escala.",
          icon: "cloud",
        },
        {
          title: "Web y Móvil",
          description:
            "Experiencias digitales impresionantes y responsivas que cautivan usuarios en todas las plataformas.",
          icon: "device",
        },
        {
          title: "IA y Machine Learning",
          description:
            "Sistemas inteligentes que aprenden, se adaptan y ofrecen información accionable para tu ventaja competitiva.",
          icon: "brain",
        },
        {
          title: "Infraestructura Cloud",
          description:
            "Arquitecturas cloud robustas y escalables que aseguran confiabilidad, seguridad y rendimiento óptimo.",
          icon: "server",
        },
        {
          title: "Consultoría Tech",
          description:
            "Orientación estratégica para navegar la transformación digital y tomar decisiones tecnológicas con confianza.",
          icon: "lightbulb",
        },
      ],
    },
    portfolio: {
      tag: "Nuestras Capacidades",
      title: "Lo Que Construimos",
      subtitle:
        "Explora nuestras capacidades y los tipos de soluciones transformadoras que entregamos a empresas de diversas industrias.",
      items: [
        {
          title: "Plataforma de Analítica Empresarial",
          category: "IA / Analítica de Datos",
          description:
            "Plataforma de visualización de datos en tiempo real y analítica predictiva impulsada por machine learning.",
          gradient: 1,
        },
        {
          title: "Suite de Migración Cloud",
          category: "Infraestructura Cloud",
          description:
            "Kit de herramientas de migración cloud integral con evaluación automatizada y despliegue.",
          gradient: 2,
        },
        {
          title: "App Móvil FinTech",
          category: "Desarrollo Móvil",
          description:
            "Aplicación de banca móvil segura e intuitiva con transacciones en tiempo real y autenticación biométrica.",
          gradient: 3,
        },
        {
          title: "Sistema ERP Inteligente",
          category: "Software a Medida",
          description:
            "Sistema modular de planificación de recursos con automatización de flujos impulsada por IA.",
          gradient: 4,
        },
      ],
    },
    contact: {
      tag: "Contáctanos",
      title: "Construyamos Algo Increíble",
      subtitle:
        "¿Listo para transformar tu negocio con tecnología? Nos encantaría conocer tu proyecto.",
      form: {
        name: "Nombre Completo",
        email: "Correo Electrónico",
        subject: "Asunto",
        message: "Tu Mensaje",
        submit: "Enviar Mensaje",
        sending: "Enviando...",
        success: "¡Mensaje enviado con éxito! Te responderemos pronto.",
      },
      info: {
        email: "hello@kleostek.com",
        location: "Global · Remote-First",
        availability: "Disponible 24/7",
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
