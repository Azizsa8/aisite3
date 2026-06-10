/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion } from "motion/react";
import { getServicesData } from "../data";
import { ServiceCategory, ServiceItem } from "../types";
import { 
  Monitor, 
  Users, 
  Cpu, 
  BarChart3, 
  GitBranch, 
  Server, 
  Check, 
  ArrowLeft, 
  CheckCircle,
  Activity,
  Workflow,
  Sparkles
} from "lucide-react";

interface ServicesProps {
  onServiceSelect: (targetSection: string) => void;
  lang: "ar" | "en";
}

export default function Services({ onServiceSelect, lang }: ServicesProps) {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>(ServiceCategory.Interfaces);

  const isRtl = lang === "ar";
  const servicesList = getServicesData(lang);

  // Icon mapping helper
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Monitor": return <Monitor className="w-5 h-5 text-indigo-500" />;
      case "Users": return <Users className="w-5 h-5 text-emerald-500" />;
      case "Cpu": return <Cpu className="w-5 h-5 text-cyan-500" />;
      case "BarChart3": return <BarChart3 className="w-5 h-5 text-amber-500" />;
      case "GitBranch": return <GitBranch className="w-5 h-5 text-purple-500" />;
      case "ShieldAlert": return <Server className="w-5 h-5 text-rose-500" />;
      default: return <Monitor className="w-5 h-5 text-slate-500" />;
    }
  };

  const currentService = servicesList.find(s => s.category === selectedCategory) || servicesList[0];

  // Mock schematic visual layouts corresponding to each selected service category
  const renderInteractiveMockup = (category: ServiceCategory) => {
    switch (category) {
      case ServiceCategory.Interfaces:
        return (
          <div className="bg-slate-900 text-slate-100 rounded-2xl p-5 font-mono text-[11px] h-full space-y-4 shadow-inner" id="mock-visual-interfaces">
            <div className={`flex items-center justify-between border-b border-slate-800 pb-2.5 ${isRtl ? "flex-row-reverse" : ""}`}>
              <span className="text-slate-400 font-sans">
                {isRtl ? "معاينة: صفحة الهبوط الذكية" : "Preview: Smart Landing Page"}
              </span>
              <span className="text-emerald-400">
                {isRtl ? "100% متجاوب" : "100% Responsive"}
              </span>
            </div>
            <div className={`space-y-2 ${isRtl ? "text-right" : "text-left"}`}>
              <div className="h-6 bg-slate-800 rounded-md w-11/12 flex items-center px-2 text-emerald-400 font-bold font-sans">
                {isRtl ? "ننفذ حلول تشغيل وأتمتة للأعمال..." : "We engineer operations & automation..."}
              </div>
              <div className="h-12 bg-slate-800/40 rounded-md w-full p-2 text-slate-400 text-[10px] font-sans">
                {isRtl
                  ? "نص تسويقي مدروس وموجه لجذب اهتمام العميل وتحسين المتابعة."
                  : "Copywriting structured to capture client motivation and trigger follow-up pipelines."}
              </div>
              <div className="grid grid-cols-2 gap-2 pt-1 font-sans">
                <div className="bg-slate-800 p-2 rounded border border-slate-700/80">
                  <span className="block text-slate-500 text-[9px]">
                    {isRtl ? "الطلب الأساسي" : "Primary Intake"}
                  </span>
                  <span className="text-emerald-300 font-bold text-[10px]">
                    {isRtl ? "استشارة مجانية" : "Free Audit"}
                  </span>
                </div>
                <div className="bg-slate-800 p-2 rounded border border-slate-700/80">
                  <span className="block text-slate-500 text-[9px]">
                    {isRtl ? "الربط التلقائي" : "Auto API Push"}
                  </span>
                  <span className="text-indigo-300 font-bold text-[10px]">Active Hubspot/n8n</span>
                </div>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-800 flex justify-between items-center text-[10px] text-slate-500">
              <span>SSL: Active (Let's Encrypt)</span>
              <span>{isRtl ? "سرعة الفحص: 98% (PageSpeed)" : "Speed Index: 98% (PageSpeed)"}</span>
            </div>
          </div>
        );
      case ServiceCategory.CRM:
        return (
          <div className="bg-white text-slate-800 rounded-2xl p-4 font-sans text-xs h-full space-y-3 shadow-md border border-slate-100" id="mock-visual-crm">
            <div className={`flex items-center justify-between border-b border-slate-100 pb-2 ${isRtl ? "flex-row-reverse" : ""}`}>
              <span className="font-bold text-slate-700">
                {isRtl ? "متابعة الفرص (Kanban)" : "Visual Pipelines (Kanban)"}
              </span>
              <span className="text-xs bg-emerald-50 text-emerald-700 font-semibold px-2 py-0.5 rounded-full">
                {isRtl ? "استقرار تشغيلي" : "Active Flow"}
              </span>
            </div>
            <div className="grid grid-cols-3 gap-2">
              {/* Kanban Column 1 */}
              <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                <span className="block text-[10px] font-bold text-slate-400 mb-1.5 border-b border-slate-200 pb-1 text-center">
                  {isRtl ? "جديد (Leads)" : "Intake Leads"}
                </span>
                <div className="bg-white p-1.5 rounded-lg border border-slate-200 text-[9px] shadow-sm mb-1">
                  <span className="font-bold block text-slate-700">
                    {isRtl ? "عبدالعزيز سليمان" : "Alex Mercer"}
                  </span>
                  <span className="text-emerald-600 block">
                    {isRtl ? "مهتم بـ CRM" : "CRM Consult"}
                  </span>
                </div>
              </div>
              {/* Kanban Column 2 */}
              <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                <span className="block text-[10px] font-bold text-slate-400 mb-1.5 border-b border-slate-200 pb-1 text-center">
                  {isRtl ? "مفاوضات" : "Proposal"}
                </span>
                <div className="bg-emerald-50/50 p-1.5 rounded-lg border border-emerald-200 text-[9px] shadow-sm mb-1">
                  <span className="font-bold block text-slate-800">
                    {isRtl ? "شركة السيف" : "AeroLogistics Ltd"}
                  </span>
                  <span className="text-indigo-600 font-bold block">
                    {isRtl ? "أتمتة المواعيد" : "Route Automation"}
                  </span>
                </div>
              </div>
              {/* Kanban Column 3 */}
              <div className="bg-slate-50 p-2 rounded-xl border border-slate-100">
                <span className="block text-[10px] font-bold text-slate-400 mb-1.5 border-b border-slate-200 pb-1 text-center">
                  {isRtl ? "مغلق ناجح" : "Won Deal"}
                </span>
                <div className="bg-blue-50/50 p-1.5 rounded-lg border border-blue-200 text-[9px] shadow-sm mb-1 opacity-70">
                  <span className="font-bold block text-slate-700">
                    {isRtl ? "عقارات الخليج" : "Prime Estates"}
                  </span>
                  <span className="text-green-600 block">
                    {isRtl ? "تم تسليم هبوط" : "Page Delivered"}
                  </span>
                </div>
              </div>
            </div>
            <p className="text-[10px] text-slate-400 text-center font-sans">
              {isRtl
                ? "أيقونة السحب والإفلات تسجل الأحداث والواتساب يرسل تلقائياً."
                : "Dragging cards logs historic updates and triggers WhatsApp templates autonomously."}
            </p>
          </div>
        );
      case ServiceCategory.Automation:
        return (
          <div className="bg-slate-900 text-slate-100 rounded-2xl p-4 font-mono text-[10px] h-full space-y-3 shadow-inner" id="mock-visual-automation">
            <div className={`flex items-center justify-between border-b border-slate-800 pb-2 ${isRtl ? "flex-row-reverse" : ""}`}>
              <span className="text-slate-400 font-sans">
                {isRtl ? "محاكاة مسار الأتمتة • n8n workflow" : "Automation Workflow Map • n8n active"}
              </span>
              <span className="text-emerald-400 animate-pulse font-sans">
                • {isRtl ? "متصل" : "Live Webhook"}
              </span>
            </div>
            <div className={`space-y-3 text-slate-300 ${isRtl ? "text-right" : "text-left"}`}>
              <div className={`flex items-center gap-2 ${isRtl ? "justify-end flex-row-reverse" : "justify-start"}`}>
                <span className="bg-slate-800 px-2 py-1 rounded text-red-500 font-bold border border-slate-700">Form Submission</span>
                <span>←</span>
                <span className="text-slate-400">
                  {isRtl ? "(تم تسجيل فرصة)" : "(Visitor submits intake)"}
                </span>
              </div>
              <div className={`flex items-center gap-2 ${isRtl ? "justify-end flex-row-reverse" : "justify-start"}`}>
                <span className="bg-slate-800 px-2 py-1 rounded text-purple-400 font-bold border border-slate-700">Database Entry</span>
                <span>←</span>
                <span className="text-slate-400">
                  {isRtl ? "(إدراج وتجزئة الرقم)" : "(Insert & trigger SLA timer)"}
                </span>
              </div>
              <div className={`flex items-center gap-2 ${isRtl ? "justify-end flex-row-reverse" : "justify-start"}`}>
                <span className="bg-slate-800 px-2 py-1 rounded text-emerald-400 font-bold border border-slate-700">WhatsApp Dispatch</span>
                <span>←</span>
                <span className="text-slate-400">
                  {isRtl ? "(إعلام المبيعات والعميل)" : "(Alert advisor in 1s flat)"}
                </span>
              </div>
            </div>
            <div className="pt-2 border-t border-slate-800 text-[9px] text-slate-500 flex justify-between items-center font-sans">
              <span>{isRtl ? "زمن الاستجابة: 0.8 ثانية" : "Dispatch Latency: 0.8s"}</span>
              <span>{isRtl ? "نجاح: 100% (459 تكرار اليوم)" : "Success Index: 100% (459 runs)"}</span>
            </div>
          </div>
        );
      case ServiceCategory.Analytics:
        return (
          <div className="bg-slate-950 text-slate-100 rounded-2xl p-4 font-sans text-xs h-full space-y-3 shadow-xl" id="mock-visual-analytics">
            <div className={`flex items-center justify-between border-b border-slate-800 pb-1.5 ${isRtl ? "flex-row-reverse" : ""}`}>
              <span className="font-bold text-slate-300">
                {isRtl ? "لوحة تحليل المبيعات والتشغيل" : "Operational & Financial Dashboards"}
              </span>
              <span className="text-[10px] text-emerald-400 font-mono">LIVE FEED</span>
            </div>
            <div className={`grid grid-cols-2 gap-2 ${isRtl ? "text-right" : "text-left"}`}>
              <div className="bg-slate-900 p-2 rounded-xl border border-slate-800">
                <span className="block text-[9px] text-slate-500">
                  {isRtl ? "معدل التحويل (CR)" : "Conversion Rate (CR)"}
                </span>
                <span className="text-lg font-bold text-emerald-400 font-mono">14.2%</span>
                <span className="block text-[8px] text-slate-400 leading-none mt-1">
                  {isRtl ? "المتوسط العام: 4.5%" : "SaaS Average: 4.5%"}
                </span>
              </div>
              <div className="bg-slate-900 p-2 rounded-xl border border-slate-800">
                <span className="block text-[9px] text-slate-500">
                  {isRtl ? "الوقت الموفر تشغيلياً" : "Automated Hours Saved"}
                </span>
                <span className="text-lg font-bold text-indigo-400 font-mono">42 hrs</span>
                <span className="block text-[8px] text-slate-400 leading-none mt-1">
                  {isRtl ? "لكل أسبوع عمل يدوي" : "Per business week flat"}
                </span>
              </div>
            </div>
            {/* Visual simulation of d3 bars */}
            <div className="space-y-1.5 pt-1.5" id="mock-d3-bars">
              <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono">
                <span>{isRtl ? "أتمتة المبيعات" : "Interactive Triggers"}</span>
                <span>80%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-emerald-400 h-full rounded-full" style={{ width: "80%" }} />
              </div>
              <div className="flex items-center justify-between text-[9px] text-slate-400 font-mono">
                <span>{isRtl ? "تقليص الهدر" : "Leakage Mitigation"}</span>
                <span>95%</span>
              </div>
              <div className="w-full bg-slate-800 h-1.5 rounded-full overflow-hidden">
                <div className="bg-indigo-400 h-full rounded-full" style={{ width: "95%" }} />
              </div>
            </div>
          </div>
        );
      case ServiceCategory.Workflows:
        return (
          <div className="bg-white text-slate-800 rounded-2xl p-4 font-sans text-xs h-full space-y-3.5 shadow-md border border-slate-100" id="mock-visual-workflows">
            <div className={`flex items-center justify-between border-b border-slate-100 pb-2 ${isRtl ? "flex-row-reverse" : ""}`}>
              <span className="font-bold text-slate-700">
                {isRtl ? "سلسلة المتابعة والـ Workflow" : "Operational SLA Handoff Flow"}
              </span>
              <span className="text-[10px] bg-indigo-50 text-indigo-700 font-semibold px-2 py-0.5 rounded-full">
                {isRtl ? "نظام العمليات" : "Process Core"}
              </span>
            </div>
            <div className={`space-y-2 ${isRtl ? "text-right" : "text-left"} text-[10px]`}>
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold shrink-0 mt-0.5">1</div>
                <div>
                  <span className="block font-bold">
                    {isRtl ? "تسجيل الرغبة ومسار الطلب" : "Client Form Submission"}
                  </span>
                  <span className="text-slate-400">
                    {isRtl ? "العميل يطلب مراجعة من صفحة أيسرز الهابطة." : "Leads record intention on custom portal."}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold shrink-0 mt-0.5">2</div>
                <div>
                  <span className="block font-bold">
                    {isRtl ? "التوزيع والتحكيم العادل" : "Sovereign rep handoff"}
                  </span>
                  <span className="text-slate-400">
                    {isRtl ? "إحالة الطلب مباشرة للزميل المتخصص تلقائياً." : "Instant algorithm matches file to specialized reps."}
                  </span>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-4 h-4 bg-emerald-100 text-emerald-700 rounded-full flex items-center justify-center font-bold shrink-0 mt-0.5">3</div>
                <div>
                  <span className="block font-bold">
                    {isRtl ? "صياغة التسليمة و SLA" : "Pipeline timers trigger"}
                  </span>
                  <span className="text-slate-400">
                    {isRtl ? "بدء التنفيذ مع مؤقت زمني يضمن حق العميل." : "Active countdown guarantees shipping accuracy."}
                  </span>
                </div>
              </div>
            </div>
          </div>
        );
      case ServiceCategory.SelfHosting:
        return (
          <div className="bg-slate-900 text-slate-100 rounded-2xl p-4 font-mono text-[11px] h-full space-y-3 shadow-inner" id="mock-visual-selfhosted">
            <div className={`flex items-center justify-between border-b border-slate-800 pb-2 ${isRtl ? "flex-row-reverse" : ""}`}>
              <span className="text-slate-400 font-sans">
                {isRtl ? "بيئة الخادم السحابي المستقل" : "Independent Cloud VPS Instance"}
              </span>
              <span className="text-emerald-400 font-sans">
                {isRtl ? "سيادة بيانات 100%" : "Data Sovereign 100%"}
              </span>
            </div>
            <div className={`bg-slate-950 p-2 rounded-xl text-emerald-300 font-mono text-[10px] space-y-1 ${isRtl ? "text-right" : "text-left"}`}>
              <div>$ ssh admin@aws.yourdomain.com</div>
              <div className="text-slate-400">✔ Connect established securely.</div>
              <div>$ docker compose ps</div>
              <div className="text-slate-500 font-sans text-[9px] leading-relaxed">
                • base-n8n-automation: RUNNING (Port 5678)<br />
                • direct-baserow-database: RUNNING (Port 8080)<br />
                • automated-backups-active: COMPLETE
              </div>
            </div>
            <div className={`text-[10px] text-slate-400 font-sans leading-relaxed ${isRtl ? "text-right" : "text-left"}`}>
              {isRtl
                ? "لا اشتراكات شهرية لكل مستخدم. بيانات شركتك وسجل عملائك محمي بمستندات التشفير الخاصة بك ولا يطلع عليها أي طرف خارجي."
                : "Zero monthly per-user seat software fee scaling. Your customer databases reside safely in encrypted networks that you govern absolutely."}
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
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
    <section id="services" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <motion.div 
          variants={itemVariants}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4" 
          id="services-main-intro"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold border border-emerald-100">
            <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {isRtl ? "نطاق التنفيذ الشامل والمترابط" : "End-to-End Delivery Integration"}
            </span>
          </div>
          
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            {isRtl ? "الحلول الستة لهندسة واجهتك وضبط تشغيلك" : "Our Six Operational Engineering Offerings"}
          </h2>
          
          <p className="text-base text-slate-600 leading-relaxed font-sans">
            {isRtl
              ? "لا تشتت عملك بين عشرات الوكالات والأدوات المعزولة. ننفذ لك جميع تفاصيل النظام التشغيلي في حزم متناغمة مترابطة تضمن السرعة والاستقرار وهدوء سير العمل."
              : "Avoid splitting your company over isolated software stacks and conflicting freelancers. We build your entire operational engine in synchronized packages to secure speed, clarity, and peace-of-mind."}
          </p>
        </motion.div>

        {/* 6 Grid items as Service cards */}
        <motion.div 
          variants={containerVariants}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8" 
          id="services-cards-grid"
        >
          {servicesList.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              id={`service-card-${service.id}`}
              className={`group bg-slate-50/50 hover:bg-white rounded-3xl p-6 sm:p-8 border border-slate-100 hover:border-slate-200 hover:shadow-xl hover:shadow-slate-100/50 transition-all ${isRtl ? "text-right" : "text-left"} flex flex-col justify-between`}
            >
              <div className="space-y-4">
                {/* Icon Circle */}
                <div className="w-12 h-12 bg-white rounded-2xl flex items-center justify-center shadow-sm border border-slate-100 group-hover:scale-110 transition-transform">
                  {getIcon(service.iconName)}
                </div>
                
                <h3 className="text-lg font-bold text-slate-900 group-hover:text-emerald-700 transition-colors font-sans">
                  {service.title}
                </h3>
                
                <p className="text-sm text-slate-600 leading-relaxed font-sans">
                  {service.shortDescription}
                </p>

                {/* Micro checklist inside card for visual density */}
                <ul className="space-y-2 pt-2">
                  {service.features.slice(0, 2).map((feat, i) => (
                    <li key={i} className="text-xs text-slate-500 flex items-center justify-start gap-2 font-sans">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                      <span>{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100/70 flex items-center justify-between text-xs">
                <span className="text-slate-500 font-sans">
                  {isRtl ? "المدة: " : "Speed: "}
                  <strong className="text-slate-800">{service.duration}</strong>
                </span>
                
                <button
                  onClick={() => {
                    setSelectedCategory(service.category);
                    const el = document.getElementById("interactive-mockup-showcase");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                  className="text-emerald-600 font-bold group-hover:text-emerald-700 flex items-center gap-1 hover:underline transition-colors navigation-interactive-tab shadow-sm px-2.5 py-1 bg-white border border-slate-100 rounded-lg cursor-pointer font-sans"
                >
                  <span>{isRtl ? "عرض التفاصيل الحية" : "Interactive Blueprint"}</span>
                  <ArrowLeft className={`w-3 h-3 group-hover:-translate-x-0.5 transition-transform ${isRtl ? "" : "rotate-180"}`} />
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Detailed Interactive tab-based Showcase Section */}
        <div id="interactive-mockup-showcase" className="mt-20 bg-slate-50 border border-slate-200/60 rounded-3xl p-6 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50/25 via-transparent to-transparent pointer-events-none" />
          
          <div className="relative z-10 grid lg:grid-cols-12 gap-8 items-center">
            
            {/* Descriptive Content (Right/Left Side depending on RTL) */}
            <div className={`lg:col-span-7 space-y-6 ${isRtl ? "text-right order-last lg:order-first" : "text-left order-last"}`}>
              
              {/* Tabs list filter controls */}
              <div className={`flex flex-wrap gap-2 justify-start mb-2`} id="showcase-tabs-control-list">
                {servicesList.map((item) => (
                  <button
                    key={item.category}
                    id={`showcase-tab-${item.category}`}
                    onClick={() => setSelectedCategory(item.category)}
                    className={`px-3.5 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                      selectedCategory === item.category
                        ? "bg-slate-900 text-white shadow-sm"
                        : "bg-white hover:bg-slate-100 text-slate-600 border border-slate-200/70"
                    }`}
                  >
                    {item.title.split(" ")[0]}..
                  </button>
                ))}
              </div>

              <div id="showcase-text-details-pane" className="space-y-4">
                <span className="text-xs font-bold text-emerald-600 uppercase tracking-widest font-sans">
                  {isRtl ? `معاينة الأنظمة • ${currentService.title}` : `Engine Preview • ${currentService.title}`}
                </span>
                
                <h3 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-sans">
                  {currentService.title}
                </h3>
                
                <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
                  {currentService.detailedDescription}
                </p>

                {/* Features and Benefits List columns */}
                <div className="grid sm:grid-cols-2 gap-6 pt-2">
                  <div className="space-y-3">
                    <span className={`block text-xs font-bold text-slate-800 ${isRtl ? "border-r-2 pr-2" : "border-l-2 pl-2"} border-emerald-500`}>
                      {isRtl ? "ما نوفره لك:" : "Included Deliverables:"}
                    </span>
                    <ul className="space-y-2">
                      {currentService.features.map((feat, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-2 font-sans">
                          <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{feat}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div className="space-y-3">
                    <span className={`block text-xs font-bold text-slate-800 ${isRtl ? "border-r-2 pr-2" : "border-l-2 pl-2"} border-indigo-500`}>
                      {isRtl ? "العائد والمنفعة الأكيدة:" : "Strategic Impact Return:"}
                    </span>
                    <ul className="space-y-2">
                      {currentService.benefits.map((bene, idx) => (
                        <li key={idx} className="text-xs text-slate-600 flex items-start gap-2 font-sans">
                          <Activity className="w-4 h-4 text-indigo-500 shrink-0 mt-0.5" />
                          <span>{bene}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Duration info and request trigger */}
                <div className="pt-5 border-t border-slate-200/80 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between" id="showcase-cta">
                  <div className="text-xs sm:text-sm text-slate-500 font-sans">
                    {isRtl
                      ? "متوسط سرعة الإطلاق المتوقع لهذه الخدمة: "
                      : "Anticipated production and launch speed: "}
                    <strong className="text-slate-800">{currentService.duration}</strong>
                  </div>
                  
                  <button
                    onClick={() => {
                      onServiceSelect("contact");
                      const el = document.getElementById("contact");
                      if (el) {
                        el.scrollIntoView({ behavior: "smooth" });
                      }
                    }}
                    id="showcase-request-services-btn"
                    className="px-5 py-2.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs sm:text-sm font-bold shadow-md shadow-emerald-600/5 flex items-center justify-center gap-1.5 transition-all cursor-pointer font-sans text-right hover:-translate-y-0.5"
                  >
                    <span>{isRtl ? "طلب هذا الحل لشركتك" : "Consult On This Service"}</span>
                    <ArrowLeft className={`w-4 h-4 text-emerald-100 ${isRtl ? "" : "rotate-180"}`} />
                  </button>
                </div>
              </div>

            </div>

            {/* Interactive Functional Preview Screen Mockup (Left/Right Side depending on LTR) */}
            <div className={`lg:col-span-5 w-full ${isRtl ? "" : "order-first"}`}>
              <div className="relative">
                {/* Visual outline decoration */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-emerald-500 to-indigo-500 rounded-3xl blur opacity-15" />
                
                {/* Visual representation card */}
                <div className="relative bg-slate-900 border border-slate-800 rounded-2xl min-h-[220px] shadow-2xl p-0.5">
                  <div className={`bg-slate-950 p-2 sm:p-4 rounded-t-2xl flex items-center justify-between border-b border-slate-800/80 ${isRtl ? "flex-row-reverse" : ""}`}>
                    <div className="w-3 h-3 rounded-full bg-slate-800" />
                    <span className="text-[10px] font-mono text-slate-400">
                      {isRtl ? "أيسرز ويب • محاكي البناء" : "AISERS WEB • Build Simulator"}
                    </span>
                    <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                  </div>
                  <div className="p-4 sm:p-5 h-full">
                    {renderInteractiveMockup(selectedCategory)}
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
