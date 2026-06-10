/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { getUseCasesData } from "../data";
import { 
  Briefcase, 
  ShoppingBag, 
  Lock, 
  Sparkles, 
  ArrowLeft, 
  ArrowRight,
  HelpCircle, 
  Check, 
  Activity, 
  AlertTriangle 
} from "lucide-react";

interface CaseStudiesProps {
  lang: "ar" | "en";
}

export default function CaseStudies({ lang }: CaseStudiesProps) {
  const isRtl = lang === "ar";
  const caseList = getUseCasesData(lang);

  const [selectedCaseId, setSelectedCaseId] = useState("");

  // Populate first ID dynamically is more reliable during language toggling
  useEffect(() => {
    if (caseList.length > 0) {
      setSelectedCaseId(caseList[0].id);
    }
  }, [lang]);

  const activeCase = caseList.find((c) => c.id === selectedCaseId) || caseList[0] || {
    id: "dummy",
    title: "",
    businessType: "",
    problem: "",
    solution: "",
    impactMetrics: []
  };

  const getCaseIcon = (iconName: string) => {
    switch (iconName) {
      case "Briefcase": return <Briefcase className="w-5 h-5 text-indigo-500" />;
      case "ShoppingBag": return <ShoppingBag className="w-5 h-5 text-emerald-500" />;
      case "Lock": return <Lock className="w-5 h-5 text-rose-500" />;
      default: return <Briefcase className="w-5 h-5 text-slate-500" />;
    }
  };

  return (
    <section id="cases" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="cases-intro">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold border border-emerald-100 animate-pulse">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {isRtl ? "حالات استخدام واقعية من التشغيل" : "Real-World Operational Studies"}
            </span>
          </div>

          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            {isRtl
              ? "أنشطة تخلصت من فوضى التشتت وحققت أقصى استقرار"
              : "Business Verticals That Shook Out Inefficiency"}
          </h2>

          <p className="text-base text-slate-600 leading-relaxed font-sans font-normal">
            {isRtl
              ? "تأثير الأتمتة والتشغيل الذكي يظهر سريعاً فـور البـدء. انقر على نوع نشاطك أدناه لترى المشاكل التي عولجت وكيف أصبحت الكفاءة والسرعة لديهم بعد تطبيق البنية الخاصة بنا."
              : "Automation effects appear immediately upon implementation. Click through the respective business models below to view pain points resolved and how daily accuracy surged under our layout."}
          </p>
        </div>

        {/* Use Cases Interactive Box */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch" id="cases-interactive-dashboard">
          
          {/* Use Case Tabs Selection list (Right Side/Left Side depending on RTL) */}
          <div className={`lg:col-span-4 flex flex-col gap-3 ${isRtl ? "text-right" : "text-left"} ${!isRtl ? "order-last" : ""}`} id="cases-tab-selectors">
            <span className="text-xs font-bold text-slate-400 font-sans block mb-1">
              {isRtl ? "اختر نوع نشاطك:" : "Select your business type:"}
            </span>
            {caseList.map((caseItem) => {
              const isSelected = caseItem.id === selectedCaseId;
              return (
                <button
                  key={caseItem.id}
                  id={`case-tab-trigger-${caseItem.id}`}
                  onClick={() => setSelectedCaseId(caseItem.id)}
                  className={`text-right p-5 rounded-2xl border text-sm transition-all duration-200 flex items-center justify-between group cursor-pointer ${
                    isSelected
                      ? "border-slate-900 bg-slate-900 text-slate-100 shadow-md transform -translate-y-0.5"
                      : "border-slate-200 hover:border-slate-300 hover:bg-slate-50 bg-white text-slate-700"
                  }`}
                >
                  <div className={`flex items-center gap-3.5 pointer-events-none ${isRtl ? "flex-row" : "flex-row-reverse"}`}>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border shrink-0 transition-colors ${
                      isSelected ? "bg-white/10 border-white/10" : "bg-slate-100 border-slate-200"
                    }`}>
                      {getCaseIcon(caseItem.iconName)}
                    </div>
                    <div className={`font-sans ${isRtl ? "text-right" : "text-left"}`}>
                      <span className="block font-bold text-xs sm:text-sm">{caseItem.title}</span>
                      <span className={`block text-[10px] mt-0.5 ${isSelected ? "text-slate-350 text-slate-300" : "text-slate-550 text-slate-400"}`}>
                        {caseItem.businessType}
                      </span>
                    </div>
                  </div>

                  {isRtl ? (
                    <ArrowLeft className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-emerald-400 -translate-x-0.5" : "text-slate-400 group-hover:-translate-x-0.5"
                    }`} />
                  ) : (
                    <ArrowRight className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-emerald-400 translate-x-0.5" : "text-slate-400 group-hover:translate-x-0.5"
                    }`} />
                  )}
                </button>
              );
            })}
          </div>

          {/* Active Case Details view Pane (Left/Right Side depending on RTL) */}
          <div className={`lg:col-span-8 bg-slate-50 border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-inner ${isRtl ? "text-right" : "text-left"}`} id="cases-details-panel">
            
            <div className="space-y-6">
              
              {/* Heading */}
              <div className="border-b border-slate-200 pb-4 space-y-2" id="cases-panel-header">
                <span className="text-xs font-bold text-emerald-600 font-sans block">
                  {isRtl ? `دراسة حالة متكاملة • ${activeCase.businessType}` : `Comprehensive Review • ${activeCase.businessType}`}
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans">{activeCase.title}</h3>
              </div>

              {/* Grid content: before vs after */}
              <div className="grid sm:grid-cols-2 gap-6" id="cases-problem-vs-solution">
                
                {/* Problem */}
                <div className="space-y-2.5 bg-white p-5 rounded-2xl border border-red-100/50" id="case-issue-card">
                  <div className={`flex items-center gap-2 text-red-600 font-bold text-sm ${isRtl ? "" : "flex-row-reverse"}`}>
                    <AlertTriangle className="w-4 h-4 text-red-500 shrink-0" />
                    <span>
                      {isRtl ? "الوضع السابق (تشتت وهدر):" : "Legacy State (Confusion & Churn):"}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans">
                    {activeCase.problem}
                  </p>
                </div>

                {/* Solution */}
                <div className="space-y-2.5 bg-white p-5 rounded-2xl border border-emerald-100/50" id="case-success-card">
                  <div className={`flex items-center gap-2 text-emerald-700 font-bold text-sm ${isRtl ? "" : "flex-row-reverse"}`}>
                    <Check className="w-4 h-4 text-emerald-500 bg-emerald-100 rounded-full shrink-0" />
                    <span>
                      {isRtl ? "منظومة أيسرز الفعالة (التشغيل اللين):" : "Sovereign Aisers Setup (Lean Scale):"}
                    </span>
                  </div>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-sans font-medium">
                    {activeCase.solution}
                  </p>
                </div>

              </div>

              {/* Quantifiable results with graphs details */}
              <div className="space-y-4 pt-2" id="case-impact-metrics-section font-sans">
                <h4 className="text-xs font-extrabold text-slate-400 uppercase tracking-widest font-sans">
                  {isRtl ? "مؤشرات التأثير الفوري والوفر الحقيقي:" : "Measured Strategic Revenue & Time Impact:"}
                </h4>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4" id="cases-metrics-grid">
                  {activeCase.impactMetrics.map((met, index) => {
                    return (
                      <div
                        key={index}
                        id={`case-metric-cell-${index}`}
                        className="bg-white p-4 rounded-xl border border-slate-200 text-center space-y-1 transition-all hover:border-slate-350 hover:border-slate-300"
                      >
                        <Activity className="w-4 h-4 text-indigo-500 mx-auto animate-pulse" />
                        <span className="block font-sans text-[10px] text-slate-400">
                          {isRtl ? `معدل التحسن والوفر ${index + 1}:` : `Efficiency gain metric ${index + 1}:`}
                        </span>
                        <p className="font-extrabold text-xs sm:text-sm text-slate-900 leading-snug font-sans">{met}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
