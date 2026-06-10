/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Cpu, Menu, X, ArrowUpLeft, MessageCircle } from "lucide-react";
import logo2 from "../assets/logo2.png";

interface NavbarProps {
  onNavigate: (sectionId: string) => void;
  activeSection: string;
  lang: "ar" | "en";
  onLangToggle: () => void;
}

export default function Navbar({ onNavigate, activeSection, lang, onLangToggle }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      if (totalHeight > 0) {
        const progress = (window.scrollY / totalHeight) * 100;
        setScrollProgress(progress);
      } else {
        setScrollProgress(0);
      }
    };
    window.addEventListener("scroll", handleScroll);
    // Initial calculation
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = lang === "ar" ? [
    { id: "hero", label: "الرئيسية" },
    { id: "services", label: "ماذا ننفذ" },
    { id: "interactive-demo", label: "تجربة حيّة" },
    { id: "audit-tool", label: "تقييم الهدر" },
    { id: "calculator", label: "حاسبة التكاليف" },
    { id: "methodology", label: "طريقة العمل" },
    { id: "cases", label: "حالات الاستخدام" }
  ] : [
    { id: "hero", label: "Home" },
    { id: "services", label: "Services" },
    { id: "interactive-demo", label: "Live Demo" },
    { id: "audit-tool", label: "Leakage Audit" },
    { id: "calculator", label: "SaaS Calculator" },
    { id: "methodology", label: "Methodology" },
    { id: "cases", label: "Case Studies" }
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  const isRtl = lang === "ar";

  return (
    <nav
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-white/90 backdrop-blur-md shadow-sm border-b border-slate-100 py-3 text-slate-800"
          : "bg-slate-50/60 backdrop-blur-sm py-5 text-slate-800"
      }`}
    >
      {/* Dynamic Slim Scroll Progress Bar */}
      <div 
        id="header-scroll-progress" 
        className="absolute top-0 left-0 h-[3px] bg-gradient-to-r from-emerald-500 via-emerald-600 to-teal-500 z-50 transition-all duration-75 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Logo & Brand */}
          <div className="flex items-center gap-3 cursor-pointer" onClick={() => handleNavClick("hero")} id="brand-logo-container">
            {/* Swaid Monumental Monogram Logo SVG replaced with Logo2 */}
            <div className="bg-white p-1 rounded-xl flex items-center justify-center shadow-sm border border-slate-200 transition-transform hover:scale-105" id="navbar-logo-badge">
              <img src={logo2} alt="AISERS WEB Logo" className="w-9 h-9 object-contain" />
            </div>
            <div className={`flex flex-col ${isRtl ? "text-right" : "text-left"}`}>
              <span className="font-extrabold text-lg sm:text-xl tracking-tight text-slate-900 font-sans" id="brand-name">
                {isRtl ? (
                  <>أيسرز <span className="text-emerald-600 font-medium">ويب</span></>
                ) : (
                  <>AISERS <span className="text-emerald-600 font-medium">WEB</span></>
                )}
              </span>
              <span className="text-[10px] text-slate-500 font-sans -mt-1 tracking-wider" id="brand-subname">
                {isRtl ? "إحدى منصات السواعد الذكية" : "AN ALSAWAED ALTHAKYA PLATFORM"}
              </span>
            </div>
          </div>

          {/* Desktop Navigation Links in the Middle */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2" id="desktop-nav-menu">
            {navItems.map((item) => (
              <button
                key={item.id}
                id={`nav-link-${item.id}`}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-lg text-sm font-semibold transition-all duration-200 ${
                  activeSection === item.id
                    ? "text-emerald-700 bg-emerald-50/70 shadow-sm border border-emerald-500/10"
                    : "text-slate-600 hover:text-slate-900 hover:bg-slate-100/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Contact CTAs & Lang Toggle in the Left/Right */}
          <div className="hidden sm:flex items-center gap-3" id="navbar-ctas">
            {/* Bilingual Switcher */}
            <button
              onClick={onLangToggle}
              id="lang-toggle-btn"
              className="flex items-center gap-1.5 px-3 py-2 border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/10 text-slate-700 text-xs font-semibold rounded-xl transition-all cursor-pointer font-sans"
            >
              <span className="text-emerald-600 text-sm">🌐</span>
              <span>{isRtl ? "English" : "العربية"}</span>
            </button>

            <a
              href="https://wa.me/966503159115"
              target="_blank"
              rel="noreferrer"
              id="navbar-wa-link"
              className="flex items-center gap-2 px-4 py-2 border border-slate-200 rounded-xl text-slate-700 hover:text-emerald-700 hover:border-emerald-200 hover:bg-emerald-50/25 text-sm font-medium transition-all font-sans"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>{isRtl ? "واتساب مباشر" : "WhatsApp"}</span>
            </a>
            
            <button
              onClick={() => handleNavClick("contact")}
              id="navbar-request-assessment-btn"
              className="flex items-center gap-1.5 px-4 py-2 bg-slate-900 text-white rounded-xl text-sm font-semibold shadow-sm hover:bg-slate-800 transition-all transition-transform hover:-translate-y-0.5 active:translate-y-0 font-sans cursor-pointer"
            >
              <span>{isRtl ? "طلب تقييم مجاني" : "Free Audit"}</span>
              <ArrowUpLeft className={`w-4 h-4 text-emerald-400 transition-transform ${isRtl ? "" : "rotate-90"}`} />
            </button>
          </div>

          {/* Mobile Menu Button on the Left/Right */}
          <div className="flex lg:hidden items-center gap-2" id="mobile-menu-trigger-container">
            {/* Lang Toggle for Mobile */}
            <button
              onClick={onLangToggle}
              id="mobile-lang-toggle-btn"
              className="p-1 px-2.5 border border-slate-200 text-slate-600 rounded-lg text-xs font-semibold hover:bg-slate-50 transition-colors"
            >
              {isRtl ? "EN" : "AR"}
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              id="mobile-menu-toggle-btn"
              className="p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-colors"
              aria-label="Toggle Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Box */}
      {mobileMenuOpen && (
        <div id="mobile-dropdown-menu" className="lg:hidden absolute top-full left-0 right-0 bg-white shadow-xl border-t border-slate-100 p-4 flex flex-col gap-2 transition-all animate-in fade-in slide-in-from-top-2 duration-200">
          {navItems.map((item) => (
            <button
              key={item.id}
              id={`mobile-nav-link-${item.id}`}
              onClick={() => handleNavClick(item.id)}
              className={`w-full ${isRtl ? "text-right" : "text-left"} px-4 py-3 rounded-xl text-base font-semibold transition-colors ${
                activeSection === item.id
                  ? "text-emerald-700 bg-emerald-50 border-r-4 border-emerald-500"
                  : "text-slate-700 hover:bg-slate-50"
              }`}
            >
              {item.label}
            </button>
          ))}
          <div className="grid grid-cols-2 gap-3 mt-3 pt-3 border-t border-slate-100 animate-in fade-in" id="mobile-nav-actions">
            <a
              href="https://wa.me/966503159115"
              target="_blank"
              rel="noreferrer"
              id="mobile-wa-link"
              className="flex items-center justify-center gap-2 px-4 py-3 border border-slate-200 rounded-xl text-slate-700 text-sm font-semibold hover:bg-slate-50 transition-all font-sans"
            >
              <MessageCircle className="w-4 h-4 text-emerald-500" />
              <span>{isRtl ? "واتساب" : "WhatsApp"}</span>
            </a>
            <button
              onClick={() => handleNavClick("contact")}
              id="mobile-request-assessment-btn"
              className="px-4 py-3 bg-slate-900 text-white rounded-xl text-sm font-semibold hover:bg-slate-800 transition-all text-center font-sans"
            >
              {isRtl ? "طلب تقييم مجاني" : "Free Audit"}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
