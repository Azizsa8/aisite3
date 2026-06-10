/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from "react";
import { motion } from "motion/react";
import { getMethodologySteps } from "../data";
import { HelpCircle, Sparkles, Network, ArrowLeft, Lightbulb, PenTool, CheckCircle, Video } from "lucide-react";

interface HowWeWorkProps {
  lang: "ar" | "en";
}

export default function HowWeWork({ lang }: HowWeWorkProps) {
  const isRtl = lang === "ar";
  const methodologyList = getMethodologySteps(lang);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0: return <Lightbulb className="w-6 h-6 text-indigo-500" />;
      case 1: return <Network className="w-6 h-6 text-purple-500" />;
      case 2: return <PenTool className="w-6 h-6 text-emerald-500" />;
      case 3: return <Video className="w-6 h-6 text-amber-500" />;
      default: return <CheckCircle className="w-6 h-6 text-slate-500" />;
    }
  };

  const getStepIndicatorMetadata = (idx: number) => {
    if (isRtl) {
      if (idx === 0) return "المدة: جلسة مكثفة لمدة ساعة";
      if (idx === 1) return "المخرج: مسودة الأولوية ونطاق التنفيذ";
      if (idx === 2) return "الأهمية: بناء برمجيات وتكامل السيرفر بالكامل";
      if (idx === 3) return "الختام: تسليم وفهم فريقك للاستخدام الفوري";
    } else {
      if (idx === 0) return "Duration: 1-Hour Deep Dive Session";
      if (idx === 1) return "Deliverable: Priority Blueprint Scope Draft";
      if (idx === 2) return "Execution: Sandbox Integration & API Deployment";
      if (idx === 3) return "Handover: Standard Operation Playbook Setup";
    }
    return "";
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98]
      }
    }
  };

  return (
    <section id="methodology" className="py-20 bg-slate-50 border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <motion.div 
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4" 
          id="methodology-intro"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold border border-emerald-100 italic">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {isRtl ? "نظام التشغيل والاستشارات المرن" : "Our Agile Engagement Roadmap"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            {isRtl
              ? "كيف نعمل على ترتيب وإنجاز أتمتتك في 4 خطوات؟"
              : "How We Deploy Your Automated Pipeline in 4 Steps?"}
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-sans">
            {isRtl
              ? "نحن نقدس الوقت، ونبتعد تماماً عن الخطابات الفلسفية المعقدة. بدلاً من ذلك، نتحرك كمستشار تقني منفذ يساعدك على الانتقال لنظام تشغيلي هادئ في غضون أيام."
              : "We value speed and bypass complex, abstract theory. We step in as active technical implementers, migrating your operations to an organized state in days."}
          </p>
        </motion.div>

        {/* Dynamic Timeline Grid */}
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative" 
          id="methodology-timeline-grid"
        >
          
          {/* Connector dashed lines for desktop */}
          <div className="hidden lg:block absolute top-[62px] left-[15%] right-[15%] h-[2px] border-t-2 border-dashed border-slate-200 pointer-events-none z-0" />

          {methodologyList.map((step, idx) => (
            <motion.div
              key={idx}
              variants={itemVariants}
              id={`methodology-step-box-${idx}`}
              className={`bg-white rounded-3xl p-6 sm:p-8 border border-slate-180 relative z-10 transition-all hover:scale-[1.02] shadow-sm hover:shadow-md ${isRtl ? "text-right" : "text-left"} flex flex-col justify-between`}
            >
              <div className="space-y-4">
                
                {/* Steps order bubble & Icon */}
                <div className={`flex items-center justify-between ${isRtl ? "" : "flex-row-reverse"}`} id={`timeline-badge-row-${idx}`}>
                  <div className="w-12 h-12 bg-slate-55 rounded-2xl flex items-center justify-center border border-slate-100 shadow-sm bg-slate-50">
                    {getStepIcon(idx)}
                  </div>
                  
                  <span className="text-3xl font-black text-slate-200 font-mono tracking-tight bg-slate-50 border border-slate-100/50 w-10 h-10 rounded-full flex items-center justify-center font-bold">
                    0{step.step}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 font-sans">
                  {step.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans pb-2">
                  {step.description}
                </p>

              </div>

              {/* Step indicator metadata */}
              <div className="pt-3 border-t border-slate-100/80 text-[10px] text-slate-400 font-sans mt-4">
                {getStepIndicatorMetadata(idx)}
              </div>

            </motion.div>
          ))}

        </motion.div>

        {/* Quality Guarantee Note at base */}
        <motion.div 
          variants={itemVariants}
          className={`mt-14 bg-gradient-to-r from-emerald-500/5 to-indigo-500/5 border border-slate-200/50 rounded-2xl p-5 ${isRtl ? "text-right" : "text-left flex-row-reverse"} flex flex-col sm:flex-row items-center gap-4 justify-between`} 
          id="methodology-bottom-guarantee"
        >
          <div className="space-y-1" id="guarantee-message-text">
            <span className="text-sm font-bold text-emerald-800 font-sans block">
              {isRtl ? "🛡️ عهد أيسرز وراء كل خدمة تسلم لك:" : "🛡️ The Aisers Quality Pledge Behind Every Project:"}
            </span>
            <p className="text-xs text-slate-600 font-sans">
              {isRtl
                ? "لا نسلمك أبداً أكواد برمجية معقدة أو أدوات فارغة. نحن لا نتركك حتى نرى النظام يعمل بهدوء واستقرار، ونقوم بتوثيق كل شيء بفيديوهات قصيرة وخاصة بمسارك."
                : "We never deliver confusing, bare assemblies or unconfigured boards. In keeping with our professional pride, we only sign off when the platform operates smoothly, documenting flows via dedicated video playbooks."}
            </p>
          </div>
          <p className="text-xs font-bold text-indigo-700 font-sans bg-white border border-indigo-100 px-3.5 py-1.5 rounded-lg shrink-0">
            {isRtl ? "انطلاقة مستقرة 100%" : "100% Stable Launch"}
          </p>
        </motion.div>

      </div>
    </section>
  );
}
