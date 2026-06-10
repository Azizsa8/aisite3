/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { 
  Plus, 
  Trash2, 
  ArrowLeft, 
  Play, 
  Check, 
  MessageSquare, 
  Bell, 
  RefreshCw, 
  Sparkles, 
  ArrowRightLeft,
  ChevronLeft,
  ChevronRight
} from "lucide-react";

interface Lead {
  id: string;
  name: string;
  service: string;
  budget: string;
  stage: "incoming" | "in_progress" | "automated";
  source: string;
  timestamp: string;
}

interface InteractiveDemoProps {
  lang: "ar" | "en";
}

export default function InteractiveDemo({ lang }: InteractiveDemoProps) {
  const isRtl = lang === "ar";

  const [leads, setLeads] = useState<Lead[]>([]);
  const [logs, setLogs] = useState<string[]>([]);
  const [newName, setNewName] = useState("");
  const [newService, setNewService] = useState(isRtl ? "أتمتة العمليات وربط الأدوات" : "Administrative Workflow Automations");
  const [showAddForm, setShowAddForm] = useState(false);

  // Sync state initially and upon language alteration
  useEffect(() => {
    setLeads([
      {
        id: "lead-1",
        name: isRtl ? "أحمد المرزوقي" : "Ahmed Almarzouqi",
        service: isRtl ? "صفحة هبوط + CRM للتسويق" : "Landing Page + Marketing CRM",
        budget: isRtl ? "متوسط" : "Medium",
        stage: "incoming",
        source: isRtl ? "إعلان سناب" : "Snapchat Ads",
        timestamp: isRtl ? "منذ دقيقة" : "1 min ago"
      },
      {
        id: "lead-2",
        name: isRtl ? "عيادات المجد لطب الأسنان" : "Alpha Dental Clinics",
        service: isRtl ? "أتمتة المواعيد وربط الواتساب" : "Booking Engine & WhatsApp API",
        budget: isRtl ? "عالي" : "High",
        stage: "in_progress",
        source: isRtl ? "مباشر وموقع" : "Web Direct",
        timestamp: isRtl ? "منذ ساعة" : "1 hour ago"
      }
    ]);
    setLogs([
      isRtl ? "النظام جاهز... تصفير الهدر التشغيلي نشط." : "Pipeline active... Operational leak tracking live.",
      isRtl ? "أوتوميت: الاتصال بالواتساب السحابي مستقر 100% [OK]" : "Automate: WhatsApp Cloud API sync established 100% [OK]"
    ]);
  }, [lang]);

  const addLog = (message: string) => {
    const time = new Date().toLocaleTimeString("en-US", { hour12: false });
    setLogs((prev) => [`[${time}] ${message}`, ...prev.slice(0, 7)]);
  };

  const handleCreateLead = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newName.trim()) return;

    const newLd: Lead = {
      id: `lead-${Date.now()}`,
      name: newName,
      service: newService,
      budget: isRtl ? "مرن" : "Flexible",
      stage: "incoming",
      source: isRtl ? "تجربة الزائر الحية" : "Live Web Visitor",
      timestamp: isRtl ? "الآن" : "Just now"
    };

    setLeads((prev) => [...prev, newLd]);
    
    if (isRtl) {
      addLog(`✨ تم استقبال مستخدم محاكي جديد: "${newName}" عبر نموذج الواجهة الرقمية!`);
      addLog(`⚙️ تنبيه الأتمتة: فحص وتأهيل البيانات تلقائياً... العميل مستعد.`);
    } else {
      addLog(`✨ New lead captured: "${newName}" via simulated intake form!`);
      addLog(`⚙️ Automation Alert: Ingress qualification passes... Lead assigned automatically.`);
    }
    
    setNewName("");
    setShowAddForm(false);
  };

  const handleMoveStage = (id: string, currentStage: "incoming" | "in_progress" | "automated") => {
    let nextStage: "incoming" | "in_progress" | "automated";

    if (currentStage === "incoming") {
      nextStage = "in_progress";
    } else if (currentStage === "in_progress") {
      nextStage = "automated";
    } else {
      nextStage = "incoming";
    }

    setLeads((prev) =>
      prev.map((ld) => (ld.id === id ? { ...ld, stage: nextStage } : ld))
    );

    const leadName = leads.find(ld => ld.id === id)?.name || (isRtl ? "عميل" : "Lead");

    if (nextStage === "in_progress") {
      if (isRtl) {
        addLog(`⚡ تم نقل "${leadName}" إلى مرحلة (التواصل والإسناد)`);
        addLog(`💬 أتمتة الواتساب: إرسال قالب 'أهلاً بك، تم تعيين مستشار لمتابعة طلبك...' للأرقام بنجاح.`);
      } else {
        addLog(`⚡ Guided "${leadName}" to the (Follow-Up & Communications) pipeline.`);
        addLog(`💬 WhatsApp Auto: Dispatched introduction templates outlining assigned advisors successfully.`);
      }
    } else if (nextStage === "automated") {
      if (isRtl) {
        addLog(`🎉 تم حسم صفقة "${leadName}" ونقله للمستندات والفوترة!`);
        addLog(`📝 أتمتة المالية: تصدير فاتورة تلقائية وسحب العقد، مع إشعار للمحاسبة بـ Slack/Teams.`);
      } else {
        addLog(`🎉 Deal Won for "${leadName}"! Synchronized folder attachments.`);
        addLog(`📝 Ledger: Issued invoice PDF statement, updated CRM value, and updated accounts on Slack channels.`);
      }
    } else {
      addLog(isRtl ? `🔄 تم إرجاع "${leadName}" للمرحلة التمهيدية.` : `🔄 Reverted "${leadName}" to initial intake.`);
    }
  };

  const handleDeleteLead = (id: string, name: string) => {
    setLeads((prev) => prev.filter((ld) => ld.id !== id));
    addLog(isRtl 
      ? `🗑 تم ترحيل بطاقة العميل "${name}" إلى أرشيف السجلات للسلامة.`
      : `🗑 Relocated "${name}" record safely to secure repository vaults.`);
  };

  return (
    <section id="interactive-demo" className="py-20 bg-slate-900 text-slate-100 relative overflow-hidden border-b border-slate-800">
      
      {/* Background accents */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(16,185,129,0.08),transparent_55%)] pointer-events-none" />
      <div className="absolute top-20 right-10 w-96 h-96 bg-emerald-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Intro */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4" id="demo-intro-header">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-500/10 text-emerald-400 rounded-full text-xs font-semibold border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" />
            <span>
              {isRtl ? "محاكي بيئة العمل والأتمتة الحقيقية" : "Interactive CRM & Automation Playground"}
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight font-sans">
            {isRtl
              ? "جرّب بنفسك: كيف يعمل نظام المبيعات المؤتمت؟"
              : "Experience Live: How Does Automated Sales Pipeline Work?"}
          </h2>
          
          <p className="text-sm sm:text-base text-slate-400 leading-relaxed font-sans">
            {isRtl
              ? "قم بإضافة عميل محاكي واضغط على الأزرار لتحريكه بين مراحل عمل الـ CRM. راقب مربع الأحداث على اليسار لتشاهد الأتمتة والرسائل الفورية وهي تنطلق تلقائياً دون أي كتابة يدوية!"
              : "Create a simulated prospect and click buttons to slide progress cards through CRM lanes. Watch logs stream on the side to monitor how background hooks and immediate alerts dispatch instantly without manual labor!"}
          </p>
        </div>

        {/* Dashboard Grid Container */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch" id="demo-dashboard-canvas">
          
          {/* CRM Board (Right/Left Side depending on RTL) */}
          <div className={`lg:col-span-8 bg-slate-950 border border-slate-800 rounded-3xl p-5 sm:p-6 shadow-2xl flex flex-col justify-between space-y-6 ${!isRtl ? "order-first" : ""}`} id="dashboard-crm-board">
            
            {/* Board Header Actions */}
            <div className={`flex items-center justify-between border-b border-slate-800 pb-4 ${isRtl ? "" : "flex-row-reverse"}`} id="crm-mock-header">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full animate-ping" />
                <span className="text-xs font-bold text-slate-300 font-sans">
                  {isRtl ? "لوحة مبيعات أيسرز للجمهور" : "Aisers Public CRM Sandbox"}
                </span>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={() => setShowAddForm(!showAddForm)}
                  id="add-simulated-lead-btn"
                  className="px-3.5 py-1.5 bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-xs font-bold flex items-center gap-1.5 transition-all shadow-md shadow-emerald-600/5 active:scale-95 cursor-pointer font-sans"
                >
                  <Plus className="w-4 h-4" />
                  <span>{isRtl ? "إضافة عميل مهتم محاكٍ" : "Add Test Lead"}</span>
                </button>
                
                <button
                  onClick={() => {
                    setLeads([
                      { 
                        id: "lead-1", 
                        name: isRtl ? "أحمد المرزوقي" : "Ahmed Almarzouqi", 
                        service: isRtl ? "صفحة هبوط + CRM للتسويق" : "Landing Page + Marketing CRM", 
                        budget: isRtl ? "متوسط" : "Medium", 
                        stage: "incoming", 
                        source: isRtl ? "إعلان سناب" : "Snapchat Ads", 
                        timestamp: isRtl ? "الآن" : "Just now" 
                      },
                      { 
                        id: "lead-2", 
                        name: isRtl ? "عيادات المجد لطب الأسنان" : "Alpha Dental Clinics", 
                        service: isRtl ? "أتمتة المواعيد وربط الواتساب" : "Booking Engine & WhatsApp API", 
                        budget: isRtl ? "عالي" : "High", 
                        stage: "in_progress", 
                        source: isRtl ? "موقع مباشر" : "Web Direct", 
                        timestamp: isRtl ? "منذ ساعة" : "1 hour ago" 
                      }
                    ]);
                    addLog(isRtl ? "🔄 تمت تهيئة لوحة الـ CRM ومسح السجلات القديمة للتجربة." : "🔄 Reinitialized CRM lanes and cleared logs database.");
                  }}
                  id="reset-demo-board-btn"
                  className="p-1 px-2.5 border border-slate-800 hover:bg-slate-900 rounded-xl text-slate-400 hover:text-slate-200 text-xs font-semibold flex items-center gap-1 transition-all cursor-pointer font-sans"
                  title={isRtl ? "إعادة تعيين المحاكي" : "Reset Sandbox State"}
                >
                  <RefreshCw className="w-3.5 h-3.5" />
                  <span>{isRtl ? "إعادة تعيين" : "Reset Board"}</span>
                </button>
              </div>
            </div>

            {/* Dynamic Add Form Popup inside the dashboard */}
            {showAddForm && (
              <form onSubmit={handleCreateLead} id="crm-add-lead-inner-form" className={`bg-slate-900 border border-slate-800/80 rounded-2xl p-4 space-y-3 animate-in fade-in zoom-in-95 duration-200 ${isRtl ? "text-right" : "text-left"}`}>
                <span className="block text-xs font-bold text-emerald-400 mb-1 font-sans">
                  {isRtl ? "تسجيل عميل جديد من صفحة هبوط محاكاة:" : "Simulate new intake lead from custom lander form:"}
                </span>
                <div className="grid sm:grid-cols-2 gap-3">
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1 font-sans">
                      {isRtl ? "اسم العميل أو اسم الكيان:" : "Contact / Corporate Name:"}
                    </label>
                    <input
                      type="text"
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-sans text-white focus:outline-none focus:border-emerald-500"
                      placeholder={isRtl ? "مثال: عقارات مكة / م. محمد الفهد" : "e.g., Prime Logistics / Alex Jones"}
                      value={newName}
                      onChange={(e) => setNewName(e.target.value)}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-[11px] text-slate-400 mb-1 font-sans">
                      {isRtl ? "الخدمة المطلوبة حالياً:" : "Selected Solution Category:"}
                    </label>
                    <select
                      className="w-full bg-slate-950 border border-slate-800 rounded-xl px-3 py-2 text-xs font-sans text-slate-300 focus:outline-none focus:border-emerald-500"
                      value={newService}
                      onChange={(e) => setNewService(e.target.value)}
                    >
                      <option value={isRtl ? "صفحات هبوط ومواقع تعريفية" : "Landing Page & Web Presence"}>
                        {isRtl ? "صفحات هبوط ومواقع تعريفية" : "Landing Page & Web Presence"}
                      </option>
                      <option value={isRtl ? "ربط CRM وتتبع الفرص التجارية" : "Unified CRM Sales Boards"}>
                        {isRtl ? "ربط CRM وتتبع الفرص التجارية" : "Unified CRM Sales Boards"}
                      </option>
                      <option value={isRtl ? "أتمتة العمليات وربط الأدوات" : "Administrative Workflow Automation"}>
                        {isRtl ? "أتمتة العمليات وربط الأدوات" : "Administrative Workflow Automation"}
                      </option>
                      <option value={isRtl ? "الاستضافة الذاتية للبيانات" : "Sovereign Self-Hosting Configuration"}>
                        {isRtl ? "الاستضافة الذاتية للبيانات" : "Sovereign Self-Hosting Configuration"}
                      </option>
                    </select>
                  </div>
                </div>
                <div className={`flex justify-end gap-2 pt-1.5 ${isRtl ? "" : "flex-row-reverse"}`}>
                  <button
                    type="button"
                    onClick={() => setShowAddForm(false)}
                    className="px-3 py-1.5 rounded-xl border border-slate-800 text-xs text-slate-400 hover:bg-slate-800 cursor-pointer font-sans"
                  >
                    {isRtl ? "إلغاء" : "Cancel"}
                  </button>
                  <button
                    type="submit"
                    className="px-4 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold cursor-pointer font-sans"
                  >
                    {isRtl ? "إطلاق الحدث التلقائي 🚀" : "Deploy Web Trigger 🚀"}
                  </button>
                </div>
              </form>
            )}

            {/* CRM Columns board list */}
            <div className="grid md:grid-cols-3 gap-4" id="crm-stages-columns">
              
              {/* Column 1: Incoming */}
              <div className="bg-slate-900/60 rounded-2xl p-3 border border-slate-800/50 flex flex-col h-[280px]">
                <div className={`flex items-center justify-between mb-3 border-b border-slate-800 pb-1.5 ${isRtl ? "" : "flex-row-reverse"}`}>
                  <span className="text-xs font-bold text-slate-300 font-sans">
                    {isRtl ? "1. وارد جديد (Leads)" : "1. New Leads"}
                  </span>
                  <span className="bg-slate-800 text-slate-400 text-[10px] px-2 py-0.5 rounded-full font-mono">
                    {leads.filter(l => l.stage === "incoming").length}
                  </span>
                </div>

                <div className={`space-y-2 overflow-y-auto pr-1 flex-1 ${isRtl ? "text-right" : "text-left"}`} id="column-list-incoming">
                  {leads.filter(l => l.stage === "incoming").map((ld) => (
                    <div key={ld.id} className="bg-slate-950 border border-slate-800/80 rounded-xl p-3 space-y-1.5 shadow-sm hover:border-slate-700 transition-all font-sans relative group">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-extrabold text-white font-sans">{ld.name}</span>
                        <button 
                          onClick={() => handleDeleteLead(ld.id, ld.name)}
                          className="text-slate-600 hover:text-red-400 p-0.5 transition-colors shrink-0 cursor-pointer"
                          title={isRtl ? "حذف البطاقة" : "Delete Card"}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="block text-[10px] text-emerald-400 font-semibold font-sans">{ld.service}</span>
                      <div className={`flex items-center justify-between text-[9px] text-slate-500 pt-1 border-t border-slate-900 ${isRtl ? "" : "flex-row-reverse"}`}>
                        <span>{isRtl ? `المصدر: ${ld.source}` : `Src: ${ld.source}`}</span>
                        <button
                          onClick={() => handleMoveStage(ld.id, "incoming")}
                          className="px-2 py-1 bg-emerald-500/10 hover:bg-emerald-500 text-emerald-400 hover:text-white rounded-md text-[9px] font-bold transition-all flex items-center gap-1 cursor-pointer font-sans"
                        >
                          <span>{isRtl ? "إسناد وفحص" : "Assign Rep"}</span>
                          {isRtl ? <ChevronLeft className="w-2.5 h-2.5" /> : <ChevronRight className="w-2.5 h-2.5" />}
                        </button>
                      </div>
                    </div>
                  ))}
                  {leads.filter(l => l.stage === "incoming").length === 0 && (
                    <p className="text-[11px] text-slate-600 text-center py-8 font-sans">
                      {isRtl
                        ? "لا يوجد عملاء جدد حالياً. سجل مستخدماً جديداً بالأعلى!"
                        : "No active incoming leads. Use simulation header button to intake!"}
                    </p>
                  )}
                </div>
              </div>

              {/* Column 2: In Progress */}
              <div className="bg-slate-900/60 rounded-2xl p-3 border border-slate-800/50 flex flex-col h-[280px]">
                <div className={`flex items-center justify-between mb-3 border-b border-slate-800 pb-1.5 ${isRtl ? "" : "flex-row-reverse"}`}>
                  <span className="text-xs font-bold text-slate-300 font-sans">
                    {isRtl ? "2. التواصل والمتابعة" : "2. Active Follow-Up"}
                  </span>
                  <span className="bg-slate-800 text-slate-400 text-[10px] px-2 py-0.5 rounded-full font-mono">
                    {leads.filter(l => l.stage === "in_progress").length}
                  </span>
                </div>

                <div className={`space-y-2 overflow-y-auto pr-1 flex-1 ${isRtl ? "text-right" : "text-left"}`} id="column-list-inprogress">
                  {leads.filter(l => l.stage === "in_progress").map((ld) => (
                    <div key={ld.id} className="bg-slate-950/80 border border-indigo-900/40 rounded-xl p-3 space-y-1.5 shadow-sm hover:border-indigo-800 transition-all font-sans relative">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-extrabold text-slate-100 font-sans">{ld.name}</span>
                        <button 
                          onClick={() => handleDeleteLead(ld.id, ld.name)}
                          className="text-slate-600 hover:text-red-400 p-0.5 transition-colors shrink-0 cursor-pointer"
                          title={isRtl ? "حذف البطاقة" : "Delete Card"}
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="block text-[10px] text-indigo-400 font-semibold font-sans">{ld.service}</span>
                      <div className={`flex items-center justify-between text-[9px] text-slate-500 pt-1 border-t border-slate-900 ${isRtl ? "" : "flex-row-reverse"}`}>
                        <span className="text-emerald-500 font-semibold flex items-center gap-0.5">
                          <MessageSquare className="w-2.5 h-2.5 text-emerald-500" />
                          <span>{isRtl ? "تم إرسال واتساب" : "WhatsApp Sent"}</span>
                        </span>
                        <button
                          onClick={() => handleMoveStage(ld.id, "in_progress")}
                          className="px-2 py-1 bg-indigo-500/10 hover:bg-indigo-600 text-indigo-400 hover:text-white rounded-md text-[9px] font-bold transition-all flex items-center gap-1 animate-pulse cursor-pointer font-sans"
                        >
                          <span>{isRtl ? "أتمتة الفاتورة" : "Auto Ledger"}</span>
                          {isRtl ? <ChevronLeft className="w-2.5 h-2.5" /> : <ChevronRight className="w-2.5 h-2.5" />}
                        </button>
                      </div>
                    </div>
                  ))}
                  {leads.filter(l => l.stage === "in_progress").length === 0 && (
                    <p className="text-[11px] text-slate-600 text-center py-8 font-sans">
                      {isRtl
                        ? "اضغط على زر (إسناد وفحص) في العمود الأول لنقل عميل إلى هنا وبدء أتمتة الرسائل!"
                        : "Click 'Assign Rep' on lane 1 to route cards and dispatch initial simulated pingers."}
                    </p>
                  )}
                </div>
              </div>

              {/* Column 3: Done/Automated */}
              <div className="bg-slate-900/60 rounded-2xl p-3 border border-slate-800/50 flex flex-col h-[280px]">
                <div className={`flex items-center justify-between mb-3 border-b border-slate-800 pb-1.5 ${isRtl ? "" : "flex-row-reverse"}`}>
                  <span className="text-xs font-bold text-slate-300 font-sans">
                    {isRtl ? "3. مكتمل وعقد مؤتمت" : "3. Secured Wins"}
                  </span>
                  <span className="bg-slate-800 text-slate-400 text-[10px] px-2 py-0.5 rounded-full font-mono">
                    {leads.filter(l => l.stage === "automated").length}
                  </span>
                </div>

                <div className={`space-y-2 overflow-y-auto pr-1 flex-1 ${isRtl ? "text-right" : "text-left"}`} id="column-list-automated">
                  {leads.filter(l => l.stage === "automated").map((ld) => (
                    <div key={ld.id} className="bg-slate-950/40 border border-emerald-900/30 rounded-xl p-3 space-y-1.5 shadow-sm hover:border-emerald-800 transition-all font-sans relative opacity-85">
                      <div className="flex justify-between items-start">
                        <span className="text-xs font-extrabold text-emerald-400 font-sans">{ld.name}</span>
                        <button 
                          onClick={() => handleDeleteLead(ld.id, ld.name)}
                          className="text-slate-600 hover:text-red-400 p-0.5 transition-colors shrink-0 cursor-pointer"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>
                      <span className="block text-[10px] text-slate-400 font-sans">{ld.service}</span>
                      <div className={`flex items-center justify-between text-[9px] text-slate-500 pt-1 border-t border-slate-900 ${isRtl ? "" : "flex-row-reverse"}`}>
                        <span className="text-emerald-500 font-bold flex items-center gap-0.5">
                          <Check className="w-3 h-3 text-emerald-400" />
                          <span>{isRtl ? "فاتورة دقيقة" : "SLA Secured"}</span>
                        </span>
                        <span className="text-[8px] font-mono bg-slate-800 text-slate-400 px-1.5 py-0.5 rounded">
                          {isRtl ? "إرسال كلي ناجح" : "Dispatched OK"}
                        </span>
                      </div>
                    </div>
                  ))}
                  {leads.filter(l => l.stage === "automated").length === 0 && (
                    <p className="text-[11px] text-slate-600 text-center py-8 font-sans">
                      {isRtl
                        ? "اضغط على زر (أتمتة الفاتورة) بالعمود الثاني لحل الصفقات ومزامنة الملفات والمحاسب مالياً!"
                        : "Click 'Auto Ledger' on active deals to lock invoice, synchronize contacts, and alert Slack accounting."}
                    </p>
                  )}
                </div>
              </div>

            </div>

          </div>

          {/* Real-time automation log console (Left/Right Side depending on RTL) */}
          <div className="lg:col-span-4 bg-slate-950 border border-slate-800 rounded-3xl p-5 shadow-2xl flex flex-col justify-between h-full space-y-4" id="dashboard-log-console">
            
            <div className="space-y-2.5">
              <div className={`flex items-center justify-between border-b border-slate-800 pb-3 ${isRtl ? "" : "flex-row-reverse"}`} id="log-console-title-row">
                <div className="flex items-center gap-2">
                  <div className="w-4 h-4 rounded bg-emerald-500/10 text-emerald-500 flex items-center justify-center text-[10px] font-bold">L</div>
                  <h3 className="text-xs font-extrabold text-slate-300 font-sans">
                    {isRtl ? "مراقب الأتمتة المباشرة" : "Automation Log Stream"}
                  </h3>
                </div>
                <span className="text-[9px] bg-slate-900 border border-slate-800 px-2 py-0.5 rounded text-emerald-400 font-mono">
                  n8n Server / Docker VPS
                </span>
              </div>

              <p className={`text-[10px] text-slate-400 leading-relaxed font-sans ${isRtl ? "text-right" : "text-left"}`}>
                {isRtl
                  ? "هذا المربع يمثل خادم الأتمتة الخاص بك (استضافة ذاتية). يشير السجل لأحداث الربط السحابي والتشغيل بالثواني:"
                  : "This console simulates your private on-premise cloud trigger logs. Events occur live in high-fidelity as deal pipelines develop:"}
              </p>

              {/* Console logs output */}
              <div className={`bg-slate-900/90 border border-slate-800/80 rounded-2xl p-3.5 h-[230px] overflow-y-auto space-y-2 ${isRtl ? "text-right" : "text-left"} text-[10px] font-mono leading-relaxed`} id="live-log-screener">
                {logs.map((log, idx) => {
                  let logColor = "text-slate-300";
                  if (log.includes("✨")) logColor = "text-amber-300 font-bold";
                  if (log.includes("💬")) logColor = "text-emerald-400 font-semibold";
                  if (log.includes("📝")) logColor = "text-indigo-400";
                  if (log.includes("⚙️")) logColor = "text-slate-400";
                  if (log.includes("🗑")) logColor = "text-red-400";

                  return (
                    <div key={idx} className={`${logColor} animate-in fade-in slide-in-from-bottom-1 duration-200 border-b border-slate-800/30 pb-1.5`}>
                      {log}
                    </div>
                  );
                })}
              </div>
            </div>

            <div className={`bg-slate-900 p-3.5 rounded-2xl text-[10px] text-slate-400 leading-relaxed space-y-2.5 border border-slate-850 ${isRtl ? "text-right" : "text-left"}`} id="log-console-meta">
              <div className={`flex items-center gap-2 text-slate-300 font-bold ${isRtl ? "" : "flex-row-reverse"}`}>
                <Bell className="w-3.5 h-3.5 text-emerald-400 animate-bounce" />
                <span className="font-sans">
                  {isRtl ? "كيف يوفر هذا وقتك؟" : "How does this recover your hours?"}
                </span>
              </div>
              <p className="font-sans text-[10px] text-slate-400 leading-relaxed">
                {isRtl
                  ? "بدلاً من مراقبة الإيميلات يدوياً، نسخ الأرقام، إنشاء فواتير الـ PDF يدوياً وصعوبة المتابعة، يقوم النظام بكافة المهام الشاقة تلقائياً في 0.8 ثانية فقط. يستقر العمل، ويرتاح فريقك، ويبهر عميلك بالاحترافية!"
                  : "Instead of copying numbers across worksheets, typing contract PDFs manually, scheduling emails, and lagging on customer engagement — backend tasks complete silently in 0.8 seconds. Less friction, absolute governance."}
              </p>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
