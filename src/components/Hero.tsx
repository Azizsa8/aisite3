/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { ArrowLeft, Clock, Shield, ArrowUpLeft, Play, Sparkles, MessageSquare, CheckCircle2, Server, Database, PhoneCall, Check } from "lucide-react";

interface HeroProps {
  onCTAHandled: (targetSection: string) => void;
  lang: "ar" | "en";
}

export default function Hero({ onCTAHandled, lang }: HeroProps) {
  const [activeWorkflowNode, setActiveWorkflowNode] = useState<string>("trigger");

  const isRtl = lang === "ar";

  const workflowProcess = isRtl
    ? [
        {
          id: "trigger",
          title: "1. من صفحة الهبوط",
          role: "الواجهة الرقمية للتسجيل",
          desc: "يسجل العميل اهتمامه بنموذج تفاعلي ذكي وسريع جداً.",
          color: "border-blue-200 bg-blue-50/50 text-blue-600"
        },
        {
          id: "automation",
          title: "2. أتمتة الربط الفوري",
          role: "أداة الربط المنفذة للحدث",
          desc: "النسخ اليدوي ملغى تماماً! نظام الأتمتة يمسك الطلب بالثانية وينقله.",
          color: "border-emerald-200 bg-emerald-50/50 text-emerald-600"
        },
        {
          id: "crm",
          title: "3. تنظيم المتابعة CRM",
          role: "تأطير وتصنيف العميل",
          desc: "يدخل العميل كفرصة جديدة ببطاقة Kanban مرئية لفريق المبيعات جاهزة للمتابعة.",
          color: "border-purple-200 bg-purple-50/50 text-purple-600"
        },
        {
          id: "notification",
          title: "4. إشعار واتساب تلقائي",
          role: "السرعة التي تبرد المنافسين",
          desc: "رسالة هاتفية فورية تصل للفريق أو العميل لجدولة مكالمة والبدء فوراً.",
          color: "border-amber-200 bg-amber-50/50 text-amber-600"
        }
      ]
    : [
        {
          id: "trigger",
          title: "1. Landing Form Intake",
          role: "Smart Interface Intake",
          desc: "Dynamic client interest captured cleanly and instantly with zero response lag.",
          color: "border-blue-200 bg-blue-50/50 text-blue-600"
        },
        {
          id: "automation",
          title: "2. Instant API Automation",
          role: "Backend Trigger Agent",
          desc: "No manual copying! Ingress systems synchronize customer records across suites in 1s flat.",
          color: "border-emerald-200 bg-emerald-50/50 text-emerald-600"
        },
        {
          id: "crm",
          title: "3. Visual CRM Pipeline",
          role: "Kanban Deal Board",
          desc: "Leads land straight on visual boards as active cards for immediate advisor followups.",
          color: "border-purple-200 bg-purple-50/50 text-purple-600"
        },
        {
          id: "notification",
          title: "4. Autonomous WhatsApp Alert",
          role: "Blazing Fast Response",
          desc: "Instant automated WhatsApp or email pings keep leads hot, suggesting meeting bookings.",
          color: "border-amber-200 bg-amber-50/50 text-amber-600"
        }
      ];

  const CTAIcon = isRtl ? ArrowLeft : ArrowLeft;

  return (
    <section id="hero" className="relative pt-24 pb-12 sm:pt-32 sm:pb-20 overflow-hidden bg-slate-50">
      
      {/* Visual background details */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(16,185,129,0.06),transparent_50%)]" />
      <div className="absolute -top-32 left-1/3 w-96 h-96 bg-emerald-100/20 rounded-full blur-3xl opacity-60" />
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-slate-200/40 rounded-full blur-2xl opacity-50" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Main Hero texts */}
          <div className={`lg:col-span-7 space-y-6 ${isRtl ? "text-right" : "text-left"}`} id="hero-text-and-actions">
            
            {/* Attention grabber tag */}
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold border border-emerald-100 tracking-wide" id="hero-sparkle-badge">
              <Sparkles className="w-3.5 h-3.5 text-emerald-600 animate-pulse" />
              <span>
                {isRtl
                  ? "أطلق واجهتك • رتّب تشغيلك • أتمِتْ سير عملك"
                  : "Launch Interfaces • Organize Operations • Automate Workflows"}
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 tracking-tight leading-tight font-sans" id="hero-headline">
              {isRtl ? (
                <>ننفذ حلول تشغيل وأتمتة للأعمال <span className="text-emerald-600 relative inline-block">بشكل سريع وعملي</span></>
              ) : (
                <>We engineer operations & automation <span className="text-emerald-600 relative inline-block">swiftly & practically</span></>
              )}
            </h1>

            <p className="text-lg text-slate-600 leading-relaxed font-normal max-w-2xl font-sans" id="hero-subtext">
              {isRtl
                ? "من صفحات الهبوط والمواقع التعريفية الجذّابة إلى أنظمة الـ CRM، التحليلات التفصيلية، وأتمتة التكرار اليومي وضبط مسارات العمل الداخلي. مع خيارات استضافة ذاتية (Self-hosting) تمنحك سيادة وتحكماً مطلقاً ببياناتك وأمانها."
                : "From fast, beautiful landing pages to unified Kanban CRMs, custom API integrations, real-time metrics, and administrative automations. Plus, private self-hosting clouds giving you absolute data sovereignty & lower subscription costs."}
            </p>

            {/* Quick trust points bullets */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pt-2" id="hero-bullet-points">
              <div className="flex items-center gap-2.5 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-semibold">
                  {isRtl ? "تنفيذ سريع ومدروس (3-7 أيام)" : "Fast, tailored delivery (3-7 days)"}
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-semibold">
                  {isRtl ? "لوحات CRM وتحليلات ملموسة" : "Visual CRMs & rich analytics dashboards"}
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-semibold">
                  {isRtl ? "أتمتة تلغي النسخ اليدوي 100%" : "Triggers eliminating manual copy-pasting"}
                </span>
              </div>
              <div className="flex items-center gap-2.5 text-slate-700">
                <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0" />
                <span className="text-sm font-semibold">
                  {isRtl ? "عقد استضافة ذاتية وسيادة البيانات" : "Sovereign deployment & database control"}
                </span>
              </div>
            </div>

            {/* CTAs panel */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4" id="hero-cta-buttons-container">
              <button
                onClick={() => onCTAHandled("contact")}
                id="hero-primary-cta"
                className="px-8 py-4 bg-emerald-600 hover:bg-emerald-700 text-white rounded-2xl font-bold shadow-lg shadow-emerald-600/10 hover:shadow-emerald-600/20 text-center transition-all flex items-center justify-center gap-2 group transform hover:-translate-y-0.5 font-sans cursor-pointer"
              >
                <span>{isRtl ? "ابدأ الآن ورتّب عملياتك" : "Start Now & Streamline"}</span>
                <CTAIcon className={`w-5 h-5 text-emerald-100 transition-transform ${isRtl ? "group-hover:-translate-x-1" : "rotate-180 group-hover:translate-x-1"}`} />
              </button>

              <button
                onClick={() => onCTAHandled("audit-tool")}
                id="hero-secondary-cta"
                className="px-6 py-4 bg-white hover:bg-slate-50 text-slate-800 border border-slate-200 rounded-2xl font-semibold text-center transition-all flex items-center justify-center gap-2 shadow-sm font-sans cursor-pointer"
              >
                <span>{isRtl ? "ابدأ فحص هدر تشغيلك (مجاناً)" : "Unveil Your Tech-Leakage (Free)"}</span>
                <Clock className="w-4 h-4 text-emerald-600" />
              </button>
            </div>

            {/* Under-hero micro social proof */}
            <div className="flex items-center gap-4 text-slate-500 text-sm font-sans pt-1" id="hero-social-proof">
              <span className="inline-block w-2.5 h-2.5 bg-emerald-500 rounded-full animate-ping" />
              <span>
                {isRtl
                  ? "مناسب لأصحاب الشركات المهتمين بالسرعة والاستقرار والنمو الهادئ."
                  : "Built for companies focused on rapid execution, operating silence, and steady growth."}
              </span>
            </div>

          </div>

          {/* Interactive Operational Schematic Illustrative Diagram (Left Side) */}
          <div className="lg:col-span-5" id="hero-interactive-dashboard-mockup">
            <div className="bg-white rounded-3xl border border-slate-200/80 p-5 sm:p-7 shadow-xl shadow-slate-100 relative overflow-hidden backdrop-blur-md">
              
              {/* Header inside mockup */}
              <div className="flex items-center justify-between border-b border-slate-100 pb-4 mb-5" id="mockup-header-section">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 bg-red-400 rounded-full" />
                  <span className="w-3 h-3 bg-amber-400 rounded-full" />
                  <span className="w-3 h-3 bg-emerald-400 rounded-full" />
                </div>
                <div className="bg-slate-100 px-3 py-1 rounded-full text-[10px] font-mono text-slate-500 flex items-center gap-1.5 border border-slate-200">
                  <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  <span>{isRtl ? "بنية تدفق العمليات النشطة" : "Active Flow Schematics"}</span>
                </div>
              </div>

              <p className={`text-xs text-slate-500 leading-relaxed mb-4 font-sans ${isRtl ? "text-right" : "text-left"}`}>
                {isRtl
                  ? "كيف تترابط منظومتك معنا؟ اضغط للتنقل لرؤية كيف يتفوق الحدث التلقائي ويوفر ساعات من العمل:"
                  : "How does your system link together? Click through the stages below to see automation in action:"}
              </p>

              {/* Dynamic Schematics Nodes Map */}
              <div className="grid grid-cols-2 gap-3" id="mockup-nodes-grid">
                {workflowProcess.map((step) => {
                  const isActive = activeWorkflowNode === step.id;
                  return (
                    <button
                      key={step.id}
                      id={`mock-node-${step.id}`}
                      onClick={() => setActiveWorkflowNode(step.id)}
                      className={`p-3.5 rounded-2xl border transition-all duration-200 relative cursor-pointer ${isRtl ? "text-right" : "text-left"} ${
                        isActive
                          ? "border-emerald-500 bg-emerald-50/40 shadow-sm ring-1 ring-emerald-500/10"
                          : "border-slate-100 hover:border-slate-200 hover:bg-slate-50/50 bg-white"
                      }`}
                    >
                      <div className="flex items-center justify-between pointer-events-none mb-1">
                        <span className="text-xs font-bold text-slate-800">{step.title}</span>
                        {isActive ? (
                          <div className="p-0.5 bg-emerald-500 text-white rounded-full">
                            <Check className="w-3 h-3" />
                          </div>
                        ) : (
                          <div className="w-2.5 h-2.5 rounded-full bg-slate-200" />
                        )}
                      </div>
                      <span className="block text-[11px] text-slate-400 font-sans pointer-events-none">{step.role}</span>
                    </button>
                  );
                })}
              </div>

              {/* Connector visualization line / block details depending on selected node */}
              <div className={`mt-5 p-4 rounded-2xl border border-slate-100 bg-slate-50 transition-all ${isRtl ? "text-right" : "text-left"}`} id="workflow-node-feedback-box">
                {activeWorkflowNode && (
                  <div className="space-y-1.5 animate-in fade-in duration-300">
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 rounded bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">
                        i
                      </div>
                      <span className="text-xs font-bold text-slate-700">
                        {isRtl ? "التفاصيل الفنية والتشغيلية المترابطة:" : "Operational & Technical Insight:"}
                      </span>
                    </div>
                    <p className="text-xs text-slate-600 leading-relaxed font-sans">
                      {workflowProcess.find((w) => w.id === activeWorkflowNode)?.desc}
                    </p>
                    <div className="text-[10px] text-emerald-600 font-bold flex items-center gap-1 font-sans">
                      <span>{isRtl ? "✓ الكفاءة المتوقعة:" : "✓ Metric Gain:"}</span>
                      <span>
                        {isRtl
                          ? "استبقاء فوري، تقليص الأخطاء اليدوية 100%، عمل مستمر 24/7."
                          : "Immediate lead grab, 100% data fidelity, quiet 24/7 operations."}
                      </span>
                    </div>
                  </div>
                )}
              </div>

              {/* Self-hosted metadata indicator at base */}
              <div className="mt-4 pt-3.5 border-t border-slate-100 flex items-center justify-between text-[11px]" id="mockup-meta-indicators">
                <span className="text-slate-400 flex items-center gap-1 font-mono">
                  <Database className="w-3.5 h-3.5 text-slate-400" />
                  <span>MySQL / PostgreSQL Host</span>
                </span>
                <span className="text-slate-500 font-semibold flex items-center gap-1 text-emerald-600 font-sans">
                  <Shield className="w-3.5 h-3.5 text-emerald-400" />
                  <span>{isRtl ? "خاضع لاتفاق استضافة آمن" : "Sovereign Cloud Secured"}</span>
                </span>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
