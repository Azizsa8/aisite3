/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { getGeneralFaq } from "../data";
import { 
  Send, 
  CheckCircle, 
  MessageCircle, 
  ArrowLeft, 
  ArrowRight,
  Clock, 
  HelpCircle,
  FileText,
  Building,
  User,
  Phone,
  Mail,
  ChevronDown,
  Sparkles,
  Inbox
} from "lucide-react";

interface ContactFormProps {
  initialLeakageScore?: number;
  initialRecommendation?: string;
  lang: "ar" | "en";
}

interface SubmittedRequest {
  id: string;
  name: string;
  company: string;
  interest: string;
  score?: number;
  timestamp: string;
  status: string;
}

export default function ContactForm({ initialLeakageScore, initialRecommendation, lang }: ContactFormProps) {
  const isRtl = lang === "ar";
  
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [interest, setInterest] = useState("");
  const [message, setMessage] = useState("");
  
  const [isSuccess, setIsSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<{name: string, company: string, phone: string, email: string, interest: string, message: string} | null>(null);
  const [activeFAQ, setActiveFAQ] = useState<number | null>(null);
  const [submittedRequestsList, setSubmittedRequestsList] = useState<SubmittedRequest[]>([]);

  const FAQS = getGeneralFaq(lang);

  // Sync default selection and lists on language change
  useEffect(() => {
    setInterest(isRtl 
      ? "أوتوماتيكية كاملة (CRM + أتمتة + واجهة)" 
      : "Full-Stack Setup (Design, CRM Boards, Server Configuration)"
    );

    setSubmittedRequestsList([
      {
        id: "req-1",
        name: isRtl ? "شركة السيف العقارية" : "Al-Saif Real Estate",
        company: isRtl ? "صناعة المقاولات والعقار" : "Contracting & Construction",
        interest: isRtl ? "أتمتة المبيعات وتنبيهات الواتساب" : "Lead Automation & WhatsApp API",
        score: 75,
        timestamp: isRtl ? "منذ ساعة" : "1 hour ago",
        status: isRtl ? "بانتظار التواصل" : "In Review"
      },
      {
        id: "req-2",
        name: isRtl ? "د. هادي الطبي" : "Dr. Hadi Dental",
        company: isRtl ? "مجمع عيادات استشاري" : "Premium Specialty Center",
        interest: isRtl ? "صفحة هبوط مع CRM مخصص" : "Landing Page & Custom CRM",
        score: 55,
        timestamp: isRtl ? "منذ 4 ساعات" : "4 hours ago",
        status: isRtl ? "تم الفرز" : "Triage Done"
      }
    ]);
  }, [lang]);

  // Handle auto-fill if leakage score is updated/passed
  useEffect(() => {
    if (initialLeakageScore !== undefined && initialLeakageScore > 0) {
      if (isRtl) {
        setMessage(
          `لقد قمت بإجراء الفحص التفاعلي وحققت مؤشر تسريب يساوي: ${initialLeakageScore}%.\nموجز التشخيص المقترح: ${initialRecommendation || ""}\n\nيرجى التواصل معي لعلاج هذا الهدر وحجز الاستشارة المجانية السريعة.`
        );
      } else {
        setMessage(
          `I completed the interactive assessment and generated a technical leakage of ${initialLeakageScore}%.\nProposed Recommendation: ${initialRecommendation || ""}\n\nPlease reach out to configure my sovereign architecture consultation.`
        );
      }
    }
  }, [initialLeakageScore, initialRecommendation, lang]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !company || !phone) return;

    // Add to submitted requests view list on screen
    const newRequest: SubmittedRequest = {
      id: `req-${Date.now()}`,
      name: name,
      company: company,
      interest: interest,
      score: initialLeakageScore,
      timestamp: isRtl ? "الآن" : "Just now",
      status: isRtl ? "مستلم حديثاً" : "Received"
    };

    setSubmittedRequestsList(prev => [newRequest, ...prev]);
    setSubmittedData({ name, company, phone, email, interest, message });
    setIsSuccess(true);
    
    // Reset form fields
    setName("");
    setCompany("");
    setPhone("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id="contact" className="py-20 bg-slate-50 border-t border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          
          {/* FAQ Accordion Side Columns (Right/Left Side depending on RTL) */}
          <div className={`lg:col-span-5 space-y-8 ${isRtl ? "text-right" : "text-left"} ${!isRtl ? "order-last" : ""}`} id="contact-faq-section">
            
            <div className="space-y-3 font-sans">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-800 rounded-full text-xs font-semibold border border-indigo-150">
                <HelpCircle className="w-3.5 h-3.5 text-indigo-600" />
                <span>
                  {isRtl ? "الأسئلة المتداولة والشفافية" : "Transparency & Frequently Asked"}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                {isRtl ? "كل ما يدور في ذهنك حول الأتمتة والتشغيل" : "Questions Frequently Asked on Operations"}
              </h2>
              
              <p className="text-xs sm:text-sm text-slate-500 leading-relaxed font-sans">
                {isRtl
                  ? "نحن واضحون تماماً في طريقة عملنا. إذا كانت لديك أسئلة أخرى، تصفح الأجوبة الشائعة والسريعة لأصحاب الأعمال والشركات هنا:"
                  : "We are committed to absolute systems transparency. If you have any inquiries regarding self-hosting or pricing, feel free to examine common answers here:"}
              </p>
            </div>

            {/* Accordion list */}
            <div className="space-y-3" id="faq-accordions">
              {FAQS.map((faq, idx) => {
                const isOpen = activeFAQ === idx;
                return (
                  <div
                    key={idx}
                    id={`faq-item-box-${idx}`}
                    className="bg-white border border-slate-200 rounded-2xl overflow-hidden transition-all duration-200"
                  >
                    <button
                      type="button"
                      id={`faq-question-btn-${idx}`}
                      onClick={() => setActiveFAQ(isOpen ? null : idx)}
                      className={`w-full ${isRtl ? "text-right flex-row" : "text-left flex-row-reverse"} p-4.5 font-bold text-slate-850 hover:bg-slate-50 flex items-center justify-between text-sm sm:text-base cursor-pointer`}
                    >
                      <span className="font-sans leading-relaxed text-slate-800 text-sm sm:text-base">{faq.q}</span>
                      <ChevronDown className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                        isOpen ? "transform rotate-180 text-emerald-600" : ""
                      }`} />
                    </button>
                    
                    {isOpen && (
                      <div className="px-4.5 pb-4 text-xs sm:text-sm text-slate-650 leading-relaxed border-t border-slate-100 bg-slate-50/50 pt-3 font-sans animate-in fade-in duration-200" id={`faq-answer-box-${idx}`}>
                        {faq.a}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            {/* Micro active requests ledger display on screen showing incoming requests queue */}
            <div className="bg-white border border-slate-200 rounded-2xl p-4.5 space-y-3 shadow-md font-sans" id="requests-ledger">
              <div className={`flex items-center justify-between border-b border-slate-100 pb-2.5 ${isRtl ? "" : "flex-row-reverse"}`}>
                <div className="flex items-center gap-2">
                  <Inbox className="w-4 h-4 text-emerald-500 animate-pulse" />
                  <span className="text-xs font-bold text-slate-700">
                    {isRtl ? "سجل طلبات التقييم النشطة اليوم" : "Today's Active Intake Queue"}
                  </span>
                </div>
                <span className="text-[9px] bg-slate-100 px-2 py-0.5 rounded text-slate-500 font-mono">
                  Queue: {submittedRequestsList.length} Active
                </span>
              </div>

              <div className="space-y-2 max-h-[170px] overflow-y-auto pr-0.5" id="requests-scroller">
                {submittedRequestsList.map((req) => (
                  <div key={req.id} className={`bg-slate-50 p-3 rounded-xl border border-slate-150 flex items-center justify-between ${isRtl ? "text-right" : "text-left"} text-[11px] font-sans`}>
                    <div className="space-y-0.5">
                      <span className="font-bold text-slate-800 block">{req.name}</span>
                      <span className="text-slate-400 text-[10px] block font-sans">{req.company} • {req.interest}</span>
                    </div>
                    <div className={`flex flex-col ${isRtl ? "items-end" : "items-start"} gap-1 shrink-0`}>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-indigo-50 text-indigo-700 font-semibold leading-none">
                        {req.status}
                      </span>
                      {req.score !== undefined && (
                        <span className="text-[9px] text-red-500 font-mono">
                          {isRtl ? `تسريب: ${req.score}%` : `Leakage: ${req.score}%`}
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-400 text-center font-sans">
                {isRtl
                  ? "سجل شفاف يظهر تسارع استقبال وفحص طلبات التشغيل من مجتمع الأعمال."
                  : "A transparent log showing live pipeline setups arriving from our corporate partners."}
              </p>
            </div>

          </div>

          {/* Core Proposal Request Form (Left/Right Side depending on RTL) */}
          <div className={`lg:col-span-7 bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-xl relative ${isRtl ? "text-right" : "text-left"}`} id="contact-proposal-panel">
            
            <div className="space-y-4 mb-8" id="contact-panel-intro">
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold border border-emerald-100 italic">
                <Sparkles className="w-3.5 h-3.5 text-emerald-600" />
                <span>
                  {isRtl ? "فرز تشغيلي وسريع بطلبك" : "Bespoke Request Triage Ready"}
                </span>
              </div>
              
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight leading-snug font-sans">
                {isRtl ? "إذا كنت تريد نتيجة واضحة بسرعة فلنبدأ معاً" : "Let's Design Your Sovereign Operations"}
              </h2>
              
              <p className="text-sm text-slate-600 leading-relaxed font-sans font-normal">
                {isRtl
                  ? "أرسل طلبك الآن مع بعض التفاصيل الأولية. سنقوم بفحص طلبك وجدولة جلسة تشخيص مجانية سريعة معك عبر تطبيق زوم لشرح مسار تصفير هدر عملياتك."
                  : "Submit your basic inputs below. We will review your targets in detail and schedule a free Zoom-based live walkthrough showing you how to eradicate operational friction."}
              </p>
            </div>

            {/* Success screen state */}
            {isSuccess ? (
              <div className="border border-emerald-100 bg-emerald-50/50 rounded-2xl p-6 sm:p-8 space-y-4 text-center animate-in fade-in zoom-in-95 duration-300" id="form-success-receipt">
                <span className="p-3 bg-emerald-100 text-emerald-600 rounded-full inline-block">
                  <CheckCircle className="w-10 h-10 mx-auto text-emerald-600" />
                </span>
                
                <h3 className="text-xl font-extrabold text-emerald-950 font-sans">
                  {isRtl ? "تم استلام طلب التقييم والتشاور بنجاح!" : "Review Request Dispatched Successfully!"}
                </h3>
                
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed font-sans max-w-lg mx-auto">
                  {isRtl
                    ? "نشكرك على ثقتك بـ أيسرز ويب. قمنا بإدراج طلبك في طابور الفرز اللحظي فورا وتعيين مستشار تشغيل لفحصه. سنتواصل معك عبر واتساب خلال بضعة ساعات لترتيب التشاور المباشر."
                    : "We appreciate your interest in Aisers. We have queued your details instantly for triage and assigned an advisor. Expect a direct WhatsApp contact within standard business hours to schedule a session."}
                </p>

                <div className={`pt-4 flex flex-col sm:flex-row gap-3 justify-center items-stretch sm:items-center ${isRtl ? "" : "flex-row-reverse"}`} id="success-screener-ctas">
                  <a
                    href={`https://wa.me/966503159115?text=${encodeURIComponent(
                      isRtl
                        ? `مرحباً، أود الاستفسار عن خدماتكم بناءً على طلبي في الموقع.\n\nالاسم: ${submittedData?.name || ''}\nالمؤسسة/المشروع: ${submittedData?.company || ''}\nالخدمة المطلوبة: ${submittedData?.interest || ''}\n\nالتفاصيل أو التحدي:\n${submittedData?.message || ''}`
                        : `Hello, I'd like to reach out regarding my submitted request.\n\nName: ${submittedData?.name || ''}\nCompany/Project: ${submittedData?.company || ''}\nService Requested: ${submittedData?.interest || ''}\n\nDetails / Frictions:\n${submittedData?.message || ''}`
                    )}`}
                    target="_blank"
                    rel="noreferrer"
                    className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 transition-transform hover:-translate-y-0.5"
                  >
                    <MessageCircle className="w-4 h-4 text-white" />
                    <span>
                      {isRtl ? "تحدث معنا عبر واتساب للمتابعة العاجلة" : "Connect Instantly on WhatsApp"}
                    </span>
                  </a>
                  
                  <button
                    type="button"
                    onClick={() => setIsSuccess(false)}
                    className="px-5 py-3 rounded-xl border border-slate-200 text-xs font-semibold text-slate-600 hover:bg-white cursor-pointer font-sans"
                  >
                    {isRtl ? "سجل طلباً لخدمة إضافية" : "Submit Another Request"}
                  </button>
                </div>
              </div>
            ) : (
              
              /* Form Box input Fields */
              <form onSubmit={handleSubmit} className="space-y-5" id="proposal-interactive-form">
                
                {/* Visual feedback notice of autofilled Audit Leakage Score */}
                {initialLeakageScore !== undefined && initialLeakageScore > 0 && (
                  <div className="bg-red-50 border border-red-200/60 p-3.5 rounded-2xl text-xs text-red-805 text-red-800 leading-relaxed flex items-start gap-2.5 animate-in slide-in-from-top-1" id="score-pipe-alert">
                    <CheckCircle className="w-4 h-4 text-red-650 text-red-600 shrink-0 mt-0.5 animate-pulse" />
                    <div className="font-sans">
                      {isRtl ? (
                        <>
                          تم استيراد مؤشر التسريب من أداة الفحص التلقائي بنجاح: <strong className="font-mono">{initialLeakageScore}% هدر تشغيلي</strong>.<br />
                          سنقوم بصياغة الباقة التشغيلية المقترحة لمكافحة هذا المعيار فوراً.
                        </>
                      ) : (
                        <>
                          Successfully imported leakage metric from active audit tool: <strong className="font-mono">{initialLeakageScore}% Operational Waste</strong>.<br />
                          We are prioritizing custom mitigation pathways tailored to resolve these vectors.
                        </>
                      )}
                    </div>
                  </div>
                )}

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* Full Name */}
                  <div className="space-y-1">
                    <label className={`text-xs sm:text-sm font-extrabold text-slate-805 text-slate-850 flex items-center gap-1.5 font-sans ${isRtl ? "justify-start" : "justify-start flex-row-reverse"}`}>
                      <User className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>
                        {isRtl ? "اسمك الكريم أو اسم المسؤول:" : "Your Full Name / POC Name:"} <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans focus:outline-none focus:bg-white focus:ring-1 focus:ring-emerald-500 text-slate-800"
                      placeholder={isRtl ? "أمثلة: م. أحمد المطيري" : "e.g., Alex Reed"}
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  </div>

                  {/* Company/Project */}
                  <div className="space-y-1">
                    <label className={`text-xs sm:text-sm font-extrabold text-slate-805 text-slate-850 flex items-center gap-1.5 font-sans ${isRtl ? "justify-start" : "justify-start flex-row-reverse"}`}>
                      <Building className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>
                        {isRtl ? "اسم المؤسسة أو المشروع:" : "Enterprise / Project Title:"} <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <input
                      type="text"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans focus:outline-none focus:bg-white focus:ring-1 focus:ring-emerald-500 text-slate-800"
                      placeholder={isRtl ? "أمثلة: مستودعات النخبة للشحن" : "e.g., Nexus Retailers"}
                      value={company}
                      onChange={(e) => setCompany(e.target.value)}
                      required
                    />
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  {/* WhatsApp/Phone */}
                  <div className="space-y-1">
                    <label className={`text-xs sm:text-sm font-extrabold text-slate-850 flex items-center gap-1.5 font-sans ${isRtl ? "justify-start" : "justify-start flex-row-reverse"}`}>
                      <Phone className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>
                        {isRtl ? "رقم المتابعة والواتساب:" : "WhatsApp Calling Contact:"} <span className="text-red-500">*</span>
                      </span>
                    </label>
                    <input
                      type="tel"
                      className={`w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans ${isRtl ? "text-left" : "text-left"} focus:outline-none focus:bg-white focus:ring-1 focus:ring-emerald-500 text-slate-800`}
                      placeholder={isRtl ? "+966 5X XXX XXXX" : "e.g., +966 50 000 0000"}
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      required
                    />
                  </div>

                  {/* Email */}
                  <div className="space-y-1">
                    <label className={`text-xs sm:text-sm font-extrabold text-slate-850 flex items-center gap-1.5 font-sans ${isRtl ? "justify-start" : "justify-start flex-row-reverse"}`}>
                      <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                      <span>
                        {isRtl ? "البريد الإلكتروني للتقارير والمقترحات:" : "Work Email Address:"}
                      </span>
                    </label>
                    <input
                      type="email"
                      className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans text-left focus:outline-none focus:bg-white focus:ring-1 focus:ring-emerald-500 text-slate-800"
                      placeholder="username@domain.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                  </div>
                </div>

                {/* Focus element */}
                <div className="space-y-1">
                  <label className="text-xs sm:text-sm font-extrabold text-slate-850 font-sans block mb-1">
                    {isRtl ? "ما هو التحدي أو الخدمة الأكثر أهمية لطلبك حالياً؟" : "Select Your Highest Priority Target Solution:"}
                  </label>
                  <select
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans text-slate-700 focus:outline-none focus:bg-white focus:ring-1 focus:ring-emerald-500 cursor-pointer"
                    value={interest}
                    onChange={(e) => setInterest(e.target.value)}
                  >
                    {isRtl ? (
                      <>
                        <option value="صفحات هبوط ومواقع تعريفية">صفحات هبوط ومواقع تعريفية مصممة للتحويل والربط</option>
                        <option value="بناء CRM وتتبع الفرص التجارية">لوحات CRM مرئية لتتبع العميل والمبيعات</option>
                        <option value="أتمتة العمليات وربط الأدوات">أتمتة العمليات المتكررة وربط الأدوات بالواتساب</option>
                        <option value="التحليلات ومؤشرات الأداء d3">أجهزة تحليلات مركزية d3 لقراء القرار</option>
                        <option value="الاستضافة الذاتية للبرامج (Self-hosting)">الاستضافة الذاتية للأدوات مفتوحة المصدر وحماية الخصوصية</option>
                        <option value="باقة تشغيل كاملة متكاملة">باقة تشبيك كاملة متكاملة (تصميم وربط وأتمتة واستضافة)</option>
                      </>
                    ) : (
                      <>
                        <option value="Landing Pages & Corporate Presence">High-Conversion Landing Pages with integrated API routing</option>
                        <option value="CRM Boards & Lead Pipelines">Visual CRM Boards to track communications and customer states</option>
                        <option value="Process Workflows & WhatsApp Sync">Background Automation trigger loops paired with WhatsApp APIs</option>
                        <option value="Interactive BI Analysis & Charts">Executive BI dashboards featuring custom-crafted graphs</option>
                        <option value="Self-Hosted Private Servers">Private-cloud sovereign deployment of open-source software stacks</option>
                        <option value="Integrated Full-Stack Setup">Complete Aisers Transformation (SaaS-free, fully integrated setup)</option>
                      </>
                    )}
                  </select>
                </div>

                {/* Workflow Bottle Neck Description */}
                <div className="space-y-1 font-sans">
                  <label className="text-xs sm:text-sm font-extrabold text-slate-850 font-sans block mb-1">
                    {isRtl ? "حدثنا قليلاً عن طريقة عملك الحالية أو مواطن الهدر والتشتت التي ترغب بحلها:" : "Elaborate briefly on your current methods or systems friction you wish to solve:"}
                  </label>
                  <textarea
                    rows={4}
                    className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-xs sm:text-sm font-sans focus:outline-none focus:bg-white focus:ring-1 focus:ring-emerald-500 text-slate-800 leading-relaxed"
                    placeholder={isRtl ? "مثال: يضيع منا الكثير من المبيعات لفرص عاجزة عن التواصل بسبب الفرز اليدوي المتأخر، ونريد واتساب تلقائي مع CRM.." : "e.g., We are losing transactions due to slow follow-up intervals. Excel entries are updated manually. We need automated alerts with a unified pipeline board."}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                  />
                </div>

                {/* Submit buttons */}
                <div className={`pt-2 flex flex-col sm:flex-row gap-4 items-stretch sm:items-center justify-between ${isRtl ? "" : "flex-row-reverse"}`} id="form-actions-row">
                  <div className={`text-xs text-slate-400 font-sans flex items-center gap-1.5 ${isRtl ? "justify-start" : "justify-start flex-row-reverse"}`}>
                    <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                    <span>
                      {isRtl ? "متوسط زمن الفرز: سنتواصل معك خلال 120 دقيقة عمل." : "Triage time: We review requests in less than 120 active minutes."}
                    </span>
                  </div>
                  
                  <button
                    type="submit"
                    id="submit-form-proposal-btn"
                    className="px-8 py-3.5 bg-slate-900 hover:bg-slate-800 text-white font-extrabold rounded-xl text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 group cursor-pointer transition-transform hover:-translate-y-0.5 active:translate-y-0 text-center font-sans font-black"
                  >
                    <span>{isRtl ? "أرسل معلومات الطلب فوراً" : "Submit Proposal Inquiry"}</span>
                    {isRtl ? (
                      <Send className="w-4 h-4 text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                    ) : (
                      <Send className="w-4 h-4 text-emerald-400 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-transform rotate-180" />
                    )}
                  </button>
                </div>

              </form>
            )}

          </div>

        </div>

      </div>
    </section>
  );
}
