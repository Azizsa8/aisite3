/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { Cpu, Heart, Shield, Lock, CheckCircle } from "lucide-react";
import sawaedLogo from "../assets/sawaed-logo.png";
import logo2 from "../assets/logo2.png";

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  lang: "ar" | "en";
}

export default function Footer({ onNavigate, lang }: FooterProps) {
  const isRtl = lang === "ar";
  const [logoError, setLogoError] = React.useState(false);

  const handleFootClick = (id: string) => {
    onNavigate(id);
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

  return (
    <footer className="bg-slate-950 text-slate-400 py-12 sm:py-16 border-t border-slate-900" id="main-footer">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className={`grid md:grid-cols-12 gap-8 ${isRtl ? "text-right" : "text-left"} pb-10 border-b border-slate-900`} id="footer-top-row">
          
          {/* Logo Column (6 columns) */}
          <div className="md:col-span-6 space-y-5" id="footer-brand-column">
            <div className={`flex items-center gap-3 cursor-pointer ${isRtl ? "" : "flex-row-reverse justify-end"}`} onClick={() => handleFootClick("hero")} id="footer-logo">
              {/* Swaid Monumental Monogram Logo SVG replaced with Logo2 */}
              <div className="bg-white/5 p-1 rounded-2xl flex items-center justify-center border border-white/10 shrink-0 shadow-lg relative group transition-all hover:bg-white/10">
                <img src={logo2} alt="AISERS WEB Logo" className="w-10 h-10 object-contain invert" />
              </div>

              <div className={`flex flex-col ${isRtl ? "items-start" : "items-end"}`}>
                <span className="font-extrabold text-lg sm:text-xl text-white tracking-tight font-sans">
                  {isRtl ? (
                    <>أيسرز <span className="text-emerald-400 font-medium">ويب</span></>
                  ) : (
                    <>Aisers <span className="text-emerald-400 font-medium">Web</span></>
                  )}
                </span>
                <span className="text-[10px] text-slate-500 font-sans tracking-widest leading-none mt-1">
                  AISERS WEB
                </span>
              </div>
            </div>

            <p className={`text-slate-400 text-xs sm:text-sm font-sans leading-relaxed max-w-md ${isRtl ? "text-right" : "text-left"}`}>
              {isRtl
                ? "ننفذ حلول تشغيل وأتمتة للأعمال بشكل سريع وعملي، من صفحات الهبوط وإستضافة قواعد البيانات وإدارة المبيعات المتكاملة (CRM) إلى أتمتة سلاسل المهام المكررة وحوكمة الخصوصية لتأمين عمل هادئ ومستقر. أيسرز ويب هي إحدى منصات ومشاريع السواعد الذكية."
                : "We build rapid, highly integrated operational automations and front-ends: from high-conversion landing pages to custom CRM pipelines, database self-hosting, and background workflow triggers. Aisers Web is a sovereign platform of AlSawaed AlThakya."}
            </p>

            {/* Prominent Owning Company Logo Card */}
            <div className={`p-4 rounded-xl bg-white/[0.03] border border-white/5 flex items-center gap-4 ${isRtl ? "flex-row" : "flex-row-reverse"} max-w-md shadow-inner`} id="footer-owner-logo">
              <div className="shrink-0 bg-slate-900 p-1.5 rounded-xl border border-slate-800 flex items-center justify-center shadow-lg w-16 h-16 overflow-hidden relative">
                {!logoError ? (
                  <img
                    src={sawaedLogo}
                    alt={isRtl ? "شعار السواعد الذكية" : "AlSawaed AlThakya Corporate Logo"}
                    className="w-full h-full object-contain select-none"
                    onError={() => setLogoError(true)}
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center h-full w-full text-amber-500 font-extrabold text-[10px] tracking-tight leading-none select-none text-center">
                    <Shield className="w-5 h-5 mb-0.5 text-amber-500" />
                    <span>سواعد</span>
                  </div>
                )}
              </div>
              <div className={`flex flex-col ${isRtl ? "text-right" : "text-left"} space-y-0.5`}>
                <span className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">
                  {isRtl ? "الشركة المالكة والمنفّذة" : "DEVELOPED & OWNED BY"}
                </span>
                <span className="font-extrabold text-sm text-white tracking-wide font-sans">
                  {isRtl ? "السواعد الذكية للتشغيل" : "AlSawaed AlThakya for Operation & Maintenance"}
                </span>
                <span className="text-[10px] text-emerald-400 font-sans tracking-tight">
                  {isRtl ? "حلول تشغيلية وأتمتة تقنية متكاملة" : "Integrated Operational & Tech Solutions"}
                </span>
              </div>
            </div>

            <div className={`flex items-center gap-4 text-xs font-sans text-slate-500 pt-1 ${isRtl ? "justify-start" : "justify-start flex-row-reverse"}`} id="footer-badges">
              <span className="flex items-center gap-1">
                <Shield className="w-3.5 h-3.5 text-emerald-500" />
                <span>
                  {isRtl ? "بيانات مستضافة بأمان" : "Data Safely Self-Hosted"}
                </span>
              </span>
              <span className="flex items-center gap-1">
                <Lock className="w-3.5 h-3.5 text-emerald-500" />
                <span>
                  {isRtl ? "سيادة خصوصية 100%" : "100% Data Sovereignty"}
                </span>
              </span>
            </div>
          </div>

          {/* Quick links Column (3 columns) */}
          <div className="md:col-span-3 space-y-3" id="footer-links-column-1">
            <span className="block text-xs font-bold text-slate-200 tracking-wider font-sans">
              {isRtl ? "المنصة والحلول:" : "Platform & Solutions:"}
            </span>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button onClick={() => handleFootClick("services")} id="footer-link-services" className={`hover:text-emerald-400 transition-colors cursor-pointer ${isRtl ? "text-right" : "text-left"} w-full`}>
                  {isRtl ? "ما الذي ننفذه (الخدمات)" : "Unified Services (What We Do)"}
                </button>
              </li>
              <li>
                <button onClick={() => handleFootClick("interactive-demo")} id="footer-link-demo" className={`hover:text-emerald-400 transition-colors cursor-pointer ${isRtl ? "text-right" : "text-left"} w-full`}>
                  {isRtl ? "بيئة العمل التجريبية الحية" : "Interactive Client Sandbox"}
                </button>
              </li>
              <li>
                <button onClick={() => handleFootClick("audit-tool")} id="footer-link-audit" className={`hover:text-emerald-400 transition-colors cursor-pointer ${isRtl ? "text-right" : "text-left"} w-full`}>
                  {isRtl ? "فحص تسريب وهدر العمليات" : "Process Leakage Assessment"}
                </button>
              </li>
              <li>
                <button onClick={() => handleFootClick("calculator")} id="footer-link-calc" className={`hover:text-emerald-400 transition-colors cursor-pointer ${isRtl ? "text-right" : "text-left"} w-full`}>
                  {isRtl ? "حاسبة وفر الاستضافة الذاتية" : "Self-Hosting Cost Calculator"}
                </button>
              </li>
            </ul>
          </div>

          {/* Custom policy terms columns (3 columns) */}
          <div className="md:col-span-3 space-y-3" id="footer-links-column-2">
            <span className="block text-xs font-bold text-slate-200 tracking-wider font-sans">
              {isRtl ? "العهد والدعم الجوهري:" : "Company & Commitments:"}
            </span>
            <ul className="space-y-2 text-xs font-sans">
              <li>
                <button onClick={() => handleFootClick("methodology")} id="footer-link-method" className={`hover:text-emerald-400 transition-colors cursor-pointer ${isRtl ? "text-right" : "text-left"} w-full`}>
                  {isRtl ? "طريقة العمل والفرز الإداري" : "Our Agile Engagement Steps"}
                </button>
              </li>
              <li>
                <button onClick={() => handleFootClick("cases")} id="footer-link-cases" className={`hover:text-emerald-400 transition-colors cursor-pointer ${isRtl ? "text-right" : "text-left"} w-full`}>
                  {isRtl ? "دراسات وحالات استخدام حقيقية" : "Case Studies & Adaptations"}
                </button>
              </li>
              <li>
                <button onClick={() => handleFootClick("contact")} id="footer-link-contact" className={`hover:text-emerald-400 transition-colors cursor-pointer ${isRtl ? "text-right" : "text-left"} w-full font-bold`}>
                  {isRtl ? "احجز جلسة استشارة مجانية" : "Schedule Free Review Session"}
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright list */}
        <div className={`pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 font-sans ${isRtl ? "" : "flex-row-reverse"}`} id="footer-bottom-bar">
          <p>
            {isRtl
              ? `© ${new Date().getFullYear()} السواعد الذكية (AlSawaed AlThakya). جميع الحقوق محفوظة لشركة السواعد الذكية للتشغيل والصيانة.`
              : `© ${new Date().getFullYear()} AlSawaed AlThakya (السواعد الذكية). All rights reserved.`}
          </p>
          
          <div className="flex items-center gap-1.5 mt-4 sm:mt-0 font-sans" id="footer-heart-credit">
            <span>
              {isRtl
                ? "صمم وبني بكفاءة استباقية عالية لضمان الهدوء التشغيلي"
                : "Engineered with precision for absolute operational stability"}
            </span>
            <Heart className="w-3 h-3 text-red-500 fill-current" />
          </div>
        </div>

      </div>
    </footer>
  );
}
