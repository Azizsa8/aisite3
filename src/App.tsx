/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUp } from "lucide-react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import InteractiveDemo from "./components/InteractiveDemo";
import AuditTool from "./components/AuditTool";
import HowWeWork from "./components/HowWeWork";
import CaseStudies from "./components/CaseStudies";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";

const progressSections = [
  { id: "hero", ar: "الرئيسية", en: "Home" },
  { id: "services", ar: "ماذا ننفذ", en: "Services" },
  { id: "interactive-demo", ar: "تجربة حيّة", en: "Live Demo" },
  { id: "audit-tool", ar: "تقييم الهدر", en: "Leakage Audit" },
  { id: "methodology", ar: "طريقة العمل", en: "Methodology" },
  { id: "cases", ar: "حالات الاستخدام", en: "Case Studies" },
  { id: "contact", ar: "اتصل بنا", en: "Contact Us" }
];

export default function App() {
  const [activeSection, setActiveSection] = useState("hero");
  const [lang, setLang] = useState<"ar" | "en">("ar");

  // Sync HTML & body directionality based on current active language
  useEffect(() => {
    const dir = lang === "ar" ? "rtl" : "ltr";
    document.documentElement.dir = dir;
    document.documentElement.lang = lang;
    document.body.dir = dir;
  }, [lang]);

  // Dynamically update document title and description meta for peak SEO tracking
  useEffect(() => {
    const seoData: Record<"ar" | "en", Record<string, { title: string; desc: string }>> = {
      ar: {
        hero: {
          title: "أيسرز ويب - تصميم مواقع وأتمتة العمليات والتشغيل الذكي للأعمال",
          desc: "أيسرز ويب هي برمجيات أتمتة تشغيل الشركات واستضافة سحابية ذاتية آمنة. وفر هدر ميزانيتك التشغيلية واحمِ بياناتك من مخاطر الاشتراك السحابي التقليدي."
        },
        services: {
          title: "خدماتنا - أيسرز ويب | تطوير واجهات برمجية مخصصة وأنظمة CRM",
          desc: "تصفح خدماتنا في بناء صفحات الهبوط، أنظمة إدارة العملاء CRM، أتمتة سير العمل اليومي بالكامل، وصناعة تحليلات متقدمة لشركتك بمرونة عالية."
        },
        "interactive-demo": {
          title: "محاكاة نظام CRM التفاعلي - أيسرز ويب",
          desc: "جرب محاكي تتبع العمليات الفوري ومسارات المبيعات في لوحة تحكم CRM تفاعلية مخصصة تظهر قوة الأتمتة الفورية في أيسرز ويب."
        },
        "audit-tool": {
          title: "أداة تقييم الهدر التشغيلي والتقني المباشر - أيسرز ويب",
          desc: "ابدأ فحص الأخطاء اليدوية وهدر ميزانيتك الآن. احصل على تقرير تشخيصي فوري يوضح أماكن تسريب البيانات والموارد في شركتك وكيفية إصلاحها."
        },
        methodology: {
          title: "منهجية العمل والتحول الرقمي - أيسرز ويب",
          desc: "كيف ننجز مشروعك خلال 3 إلى 7 أيام؟ تعرف على خارطة الطريق الهادئة من التحليل والتصميم للأتمتة الفعالة وبدء العمل الفوري."
        },
        cases: {
          title: "دراسات الحالة وقصص نجاح الشركاء - أيسرز ويب",
          desc: "اطلع على دراسات حالة حقيقية لشركات في قطاعات لوجستية، عقارية وصحية حققت زيادة 150% في الكفاءة التشغيلية عبر حلول أتمتة أيسرز ويب."
        },
        contact: {
          title: "تواصل معنا واطلب استشارة تقنية مجانية - أيسرز ويب",
          desc: "ابدأ الآن ورتب مسار عملياتك التقنية. تواصل معنا للحصول على فحص تقني مجاني للمؤسسات وبدء تصميم حلول أتمتة مخصصة لعملك."
        }
      },
      en: {
        hero: {
          title: "Aisers Web - Custom Web Development, Intelligent Workflows & Automation",
          desc: "Leverage lightning-fast web experiences, tailored modern CRMs, and self-hosted private clouds built to skyrocket operational efficiency while securing data privacy."
        },
        services: {
          title: "Our Services - Aisers Web | Tailored CRM, API & Full-scale Automation",
          desc: "Explore custom services: High-conversion landing pages, unified administrative dashboards, automated notification nodes, and continuous operational flow engineering."
        },
        "interactive-demo": {
          title: "Interactive CRM Simulator & Pipeline Demo - Aisers Web",
          desc: "Experiment with live automated drag-drop pipeline components and see how Aisers CRM visualizes process updates and instant client communications."
        },
        "audit-tool": {
          title: "Operational Tech-Leakage Test & Audit Tool - Aisers Web",
          desc: "Take our rapid operational audit. Instantly assess your company's risk points, redundant manual steps, and score data leakages with actionable remedies."
        },
        methodology: {
          title: "How We Deliver Operational Excellence - Aisers Web",
          desc: "Explore our frictionless design-to-build approach. Learn how we deliver production-ready custom architectures within a swift 3-7 day lifecycle."
        },
        cases: {
          title: "Real-world Case Studies & Partner Success - Aisers Web",
          desc: "Discover how commercial enterprise partners across real estate, logistics, and medical clinics successfully optimized operations up to 150% with our services."
        },
        contact: {
          title: "Get a Free Tech Audit & Schedule Consultation - Aisers Web",
          desc: "Get in touch or trigger a premium engineering audit request for free. Elevate your operational silence and discover dedicated workflow options."
        }
      }
    };

    const sectionMeta = seoData[lang]?.[activeSection] || seoData[lang]?.hero;
    if (sectionMeta) {
      document.title = sectionMeta.title;
      
      let metaDesc = document.querySelector('meta[name="description"]');
      if (!metaDesc) {
        metaDesc = document.createElement("meta");
        metaDesc.setAttribute("name", "description");
        document.head.appendChild(metaDesc);
      }
      metaDesc.setAttribute("content", sectionMeta.desc);
    }
  }, [activeSection, lang]);

  // Audit diagnostic state piped directly to contact form
  const [leakageScore, setLeakageScore] = useState<number | undefined>(undefined);
  const [recommendationText, setRecommendationText] = useState<string | undefined>(undefined);

  const handleAuditComplete = (score: number, recom: string) => {
    setLeakageScore(score);
    setRecommendationText(recom);
  };

  const handleCTAHandled = (targetSection: string) => {
    const el = document.getElementById(targetSection);
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const [showScrollTop, setShowScrollTop] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  };

  useEffect(() => {
    const handleScrollButtonVisibility = () => {
      if (window.scrollY > 400) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };
    window.addEventListener("scroll", handleScrollButtonVisibility);
    return () => window.removeEventListener("scroll", handleScrollButtonVisibility);
  }, []);

  // Observe active sections for high-end sticky nav linkages highlights
  useEffect(() => {
    const sections = [
      "hero",
      "services",
      "interactive-demo",
      "audit-tool",
      "methodology",
      "cases",
      "contact"
    ];

    const handleScroll = () => {
      const scrollPosition = window.scrollY + 140;
      
      for (const sectionId of sections) {
        const borderElement = document.getElementById(sectionId);
        if (borderElement) {
          const top = borderElement.offsetTop;
          const height = borderElement.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLangToggle = () => {
    setLang((prev) => (prev === "ar" ? "en" : "ar"));
  };

  const sectionContainerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.18,
        delayChildren: 0.05
      }
    }
  };

  const sectionItemVariants = {
    hidden: { opacity: 0, y: 35 },
    show: { 
      opacity: 1, 
      y: 0, 
      transition: { 
        duration: 0.8, 
        ease: [0.21, 0.47, 0.32, 0.98] 
      } 
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col justify-between selection:bg-emerald-500 selection:text-white" id="main-app-content">
      
      {/* Sleek sticky header bar */}
      <Navbar 
        onNavigate={setActiveSection} 
        activeSection={activeSection} 
        lang={lang} 
        onLangToggle={handleLangToggle} 
      />

      {/* Main interactive landing pages content */}
      <main className="flex-grow w-full">
        
        {/* Section 1: Hero Block */}
        <motion.div 
          initial="hidden"
          animate="show"
          variants={sectionContainerVariants}
          className="w-full"
        >
          <motion.div variants={sectionItemVariants}>
            <Hero onCTAHandled={handleCTAHandled} lang={lang} />
          </motion.div>
        </motion.div>

        {/* Section 2: Services Catalogue */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={sectionContainerVariants}
          className="w-full"
        >
          <motion.div variants={sectionItemVariants}>
            <Services onServiceSelect={handleCTAHandled} lang={lang} />
          </motion.div>
        </motion.div>

        {/* Section 3: CRM Simulator Playground */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={sectionContainerVariants}
          className="w-full"
        >
          <motion.div variants={sectionItemVariants}>
            <InteractiveDemo lang={lang} />
          </motion.div>
        </motion.div>

        {/* Section 4: Operational Leakage Audit Quiz */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={sectionContainerVariants}
          className="w-full"
        >
          <motion.div variants={sectionItemVariants}>
            <AuditTool onDiagnosticComplete={handleAuditComplete} lang={lang} />
          </motion.div>
        </motion.div>

        {/* Section 5: Methodology timeline */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={sectionContainerVariants}
          className="w-full"
        >
          <motion.div variants={sectionItemVariants}>
            <HowWeWork lang={lang} />
          </motion.div>
        </motion.div>

        {/* Section 7: Selected sector Case studies */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={sectionContainerVariants}
          className="w-full"
        >
          <motion.div variants={sectionItemVariants}>
            <CaseStudies lang={lang} />
          </motion.div>
        </motion.div>

        {/* Section 8: Consultation Multi-step contact form & FAQs */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.12 }}
          variants={sectionContainerVariants}
          className="w-full"
        >
          <motion.div variants={sectionItemVariants}>
            <ContactForm 
              initialLeakageScore={leakageScore} 
              initialRecommendation={recommendationText} 
              lang={lang}
            />
          </motion.div>
        </motion.div>

      </main>

      {/* Structured Footer */}
      <Footer onNavigate={setActiveSection} lang={lang} />

      {/* Floating Side Progress Indicator Dots */}
      <div 
        id="side-progress-dots" 
        className="fixed right-4 lg:right-6 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-3 py-4 px-1.5 bg-white/80 border border-slate-200/60 backdrop-blur-md rounded-full shadow-lg items-center"
        aria-label="Section navigation tracker"
      >
        {progressSections.map((section) => {
          const isActive = activeSection === section.id;
          return (
            <button
              key={section.id}
              id={`progress-dot-${section.id}`}
              onClick={() => handleCTAHandled(section.id)}
              className="relative w-6 h-6 flex items-center justify-center group focus:outline-none cursor-pointer"
              title={lang === "ar" ? section.ar : section.en}
              aria-label={lang === "ar" ? section.ar : section.en}
            >
              {/* Floating Tooltip positioned on the left side of the dots stack */}
              <div 
                className={`absolute right-full mr-3 px-2.5 py-1 bg-slate-900 text-white text-[11px] font-bold rounded-lg whitespace-nowrap shadow-xl opacity-0 group-hover:opacity-100 pointer-events-none transition-all duration-200 transform translate-x-1 group-hover:translate-x-0 ${
                  lang === "ar" ? "font-sans text-right" : "font-sans text-left"
                }`}
              >
                {lang === "ar" ? section.ar : section.en}
              </div>

              {/* Framer motion active outline feedback pill */}
              {isActive && (
                <motion.div
                  layoutId="activeDotOutline"
                  className="absolute inset-0 rounded-full bg-emerald-500/10 border border-emerald-500/35"
                  transition={{ type: "spring", stiffness: 350, damping: 25 }}
                />
              )}

              {/* Core Dot bullet */}
              <div
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 z-10 ${
                  isActive
                    ? "bg-emerald-500 scale-110 shadow-sm"
                    : "bg-slate-300 group-hover:bg-slate-400 group-hover:scale-110"
                }`}
              />
            </button>
          );
        })}
      </div>

      {/* Floating Back to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            key="back-to-top"
            id="back-to-top-button"
            onClick={scrollToTop}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            transition={{ type: "spring", stiffness: 260, damping: 20 }}
            className={`fixed bottom-6 z-50 p-3.5 bg-slate-900 border border-slate-800 text-white rounded-full shadow-2xl hover:bg-slate-850 hover:ring-4 hover:ring-emerald-500/15 focus:outline-none transition-all flex items-center justify-center cursor-pointer ${
              lang === "ar" ? "left-6" : "right-6"
            }`}
            title={lang === "ar" ? "الرجوع للأعلى" : "Back to top"}
            aria-label={lang === "ar" ? "الرجوع للأعلى" : "Back to top"}
          >
            <ArrowUp className="w-5 h-5 text-emerald-400" />
          </motion.button>
        )}
      </AnimatePresence>

    </div>
  );
}

