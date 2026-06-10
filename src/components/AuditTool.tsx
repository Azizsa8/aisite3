/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { getAuditQuestions } from "../data";
import { 
  ClipboardCheck, 
  HelpCircle, 
  ArrowLeft, 
  ArrowRight,
  ShieldAlert, 
  TrendingUp, 
  Volume2, 
  FileText, 
  Sparkles,
  Award,
  Zap
} from "lucide-react";

interface AuditToolProps {
  onDiagnosticComplete: (score: number, recom: string) => void;
  lang: "ar" | "en";
}

export default function AuditTool({ onDiagnosticComplete, lang }: AuditToolProps) {
  const [currentQuestionIdx, setCurrentQuestionIdx] = useState(0);
  const [answers, setAnswers] = useState<Record<string, { score: number; text: string; feedback: string }>>({});
  const [isCompleted, setIsCompleted] = useState(false);

  const isRtl = lang === "ar";
  const questionsList = getAuditQuestions(lang);
  const currentQuestion = questionsList[currentQuestionIdx];
  const totalQuestions = questionsList.length;

  const handleSelectOption = (qId: string, opt: { text: string; score: number; feedback: string }) => {
    setAnswers((prev) => ({
      ...prev,
      [qId]: { score: opt.score, text: opt.text, feedback: opt.feedback }
    }));

    // Auto advance after slight delay for visual satisfaction
    setTimeout(() => {
      if (currentQuestionIdx < totalQuestions - 1) {
        setCurrentQuestionIdx((prev) => prev + 1);
      } else {
        setIsCompleted(true);
      }
    }, 280);
  };

  const handlePrev = () => {
    if (currentQuestionIdx > 0) {
      setCurrentQuestionIdx((prev) => prev - 1);
    }
  };

  const handleRestart = () => {
    setAnswers({});
    setCurrentQuestionIdx(0);
    setIsCompleted(false);
  };

  // Calculate stats
  const totalScorePoints = Object.keys(answers).reduce((acc, qId) => {
    const item = answers[qId];
    return acc + (item ? item.score : 0);
  }, 0);
  
  // Max possible score is around 185 (40 + 35 + 45 + 35 + 30 = 185)
  // Let's normalize to a percentage of leakage 0% - 100%
  const maxPossible = 185;
  const leakagePercentage = Math.min(Math.round((totalScorePoints / maxPossible) * 100), 100);

  // Generate diagnosis
  let diagnosisTitle = "";
  let diagnosisColor = "";
  let diagnosisDesc = "";
  let diagnosisRecom = "";

  if (isRtl) {
    if (leakagePercentage <= 20) {
      diagnosisTitle = "صحة تشغيلية ممتازة وعمل مؤتمت مستقر";
      diagnosisColor = "text-emerald-600 bg-emerald-50 border-emerald-200";
      diagnosisDesc = "أنت تدير عملك بوعي هندسي لائق ونسب هدر ضئيلة جداً. عمليات المتابعة والواجهات لديك بأمان.";
      diagnosisRecom = "نوصيك بالتركيز على إيجاد خيارات الاستضافة الذاتية (Self-hosting) لتخفيض فواتير SaaS والسيطرة الكاملة على البيانات لتوحيد السيادة التقنية لشركتك.";
    } else if (leakagePercentage <= 50) {
      diagnosisTitle = "تسريب تشغيلي متوسط ومساحات هدر كامنة";
      diagnosisColor = "text-amber-600 bg-amber-50 border-amber-200";
      diagnosisDesc = "يرجح أنك تفقد بعض المتابعات ولديك استنزاف زمني يدوي دوري تظنه غير خطير لكنه يعيق تسريع نموك.";
      diagnosisRecom = "أنت بحاجة عاجلة إلى أتمتة ربط نموذج صفحات هبوطك مع لوحة CRM للمتابعة التلقائية وإرسال رسائل واتساب فورية في 60 ثانية لحماية مبیعاتك الباردة.";
    } else {
      diagnosisTitle = "تسريب تشغيلي خطر واستنزاف بشري مفرط";
      diagnosisColor = "text-red-600 bg-red-50 border-red-200";
      diagnosisDesc = "تنبيه هام! تعاني شركتك من فوضى تشغيلية بين واتساب والجداول المتفرقة، زوار موقعك يبردون بسرعة فائقة، وفريق العمل تائه في القيام بمهام نقل يدوية مكررة.";
      diagnosisRecom = "أنت تخسر حوالي 45% من أرباحك وعملائك المحتملين بسبب سرعة الرد اليدوية البطيئة وغياب لوحة مركزية للمبيعات الموحدة. نوجهك ببدء تشييد واجهة ومنظومة أتمتة CRM متكاملة فوراً.";
    }
  } else {
    if (leakagePercentage <= 20) {
      diagnosisTitle = "Excellent Operational Health & High Efficiency";
      diagnosisColor = "text-emerald-600 bg-emerald-50 border-emerald-200";
      diagnosisDesc = "You govern operations with strong technical awareness and minimal leaks. Your leads are handled securely.";
      diagnosisRecom = "We recommend migrating to private self-hosted clouds (n8n, Baserow) to cut down persistent per-user seat monthly license fees and control corporate records.";
    } else if (leakagePercentage <= 50) {
      diagnosisTitle = "Moderate Operational Leakage & Latent Waste";
      diagnosisColor = "text-amber-600 bg-amber-50 border-amber-200";
      diagnosisDesc = "You might be losing potential conversions due to manual intervals, which you think are harmless but actually slow your scaling.";
      diagnosisRecom = "We advise immediate automated API synchronization routing landing page intakes to a central CRM board followed by automated WhatsApp schedules to prevent lead cooling.";
    } else {
      diagnosisTitle = "Critical Operational Leakage & Severe Fatigue";
      diagnosisColor = "text-red-600 bg-red-50 border-red-200";
      diagnosisDesc = "Warning! Your workflows are heavily fragmented across scattered chats and spreadsheets. Lead reaction speed is too slow and your core team is bogged down by manual copy-pasting.";
      diagnosisRecom = "You are likely losing up to 45% of potential conversion revenue. Establish custom front-ends integrated with solid, instant backend pipeline relays immediately.";
    }
  }

  // Trigger scroll to contact and autofill on parent
  const handleApplyDiagnosis = () => {
    onDiagnosticComplete(leakagePercentage, isRtl ? `${diagnosisTitle} - المقترح: ${diagnosisRecom}` : `${diagnosisTitle} - Recommendation: ${diagnosisRecom}`);
    const el = document.getElementById("contact");
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="audit-tool" className="py-20 bg-slate-50 border-y border-slate-100">
      <div className="max-w-5xl mx-auto px-4 sm:px-6">
        
        {/* Module Header */}
        <div className="text-center space-y-4 mb-12" id="audit-intro-box">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-emerald-50 text-emerald-800 rounded-full text-xs font-semibold border border-emerald-200">
            <ClipboardCheck className="w-3.5 h-3.5 text-emerald-600" />
            <span>
              {isRtl ? "أداة التشخيص التفاعلي المجاني" : "Interactive Diagnostic Tool (Free)"}
            </span>
          </div>
          
          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans">
            {isRtl ? "افحص حجم التسريب والهدْر في عملياتك بالثانية" : "Diagnose Your Operational Leakage Index"}
          </h2>
          
          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans">
            {isRtl
              ? "أجب على 5 أسئلة سريعة لتكشف بدقة كم ساعة تفقدها أسبوعياً، وأين تضيع مبيعاتك المتوقعة، وما هي حزمة التطبيقات الأوفر والأكثر أماناً لنشاطك التجاري."
              : "Answer 5 quick assessments to calculate precisely how many administrative hours you lose per week, where deal slips occur, and matching open cloud software stacks."}
          </p>
        </div>

        {/* Audit Quiz Card */}
        <div className="bg-white border border-slate-200 rounded-3xl p-6 sm:p-10 shadow-lg relative" id="audit-box-container">
          
          {!isCompleted ? (
            <div className="space-y-6" id="audit-step-active">
              
              {/* Question Progress bar */}
              <div className={`flex items-center justify-between text-xs text-slate-400 font-sans border-b border-slate-100 pb-3 ${isRtl ? "" : "flex-row-reverse"}`} id="audit-progress-indicators">
                <span>
                  {isRtl ? `سؤال ${currentQuestionIdx + 1} من ${totalQuestions}` : `Question ${currentQuestionIdx + 1} of ${totalQuestions}`}
                </span>
                <span className="font-bold text-emerald-600">
                  {isRtl ? `معدل التقدم ${Math.round(((currentQuestionIdx) / totalQuestions) * 100)}%` : `Progress ${Math.round(((currentQuestionIdx) / totalQuestions) * 100)}%`}
                </span>
                <div className="w-24 bg-slate-100 h-1.5 rounded-full overflow-hidden shrink-0">
                  <div 
                    className="bg-emerald-500 h-full rounded-full transition-all duration-300"
                    style={{ width: `${((currentQuestionIdx + 1) / totalQuestions) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question Text */}
              <div className={`space-y-2 ${isRtl ? "text-right" : "text-left"}`} id="question-text-row">
                <span className="inline-block px-2.5 py-0.5 bg-slate-100 text-slate-600 rounded-lg text-[10px] font-bold font-mono">
                  {isRtl ? `معيار التقييم التشغيلي ${currentQuestionIdx + 1}` : `Evaluation Metric ${currentQuestionIdx + 1}`}
                </span>
                <h3 className="text-lg sm:text-xl font-extrabold text-slate-900 leading-snug font-sans">
                  {currentQuestion?.text}
                </h3>
              </div>

              {/* Options list selection */}
              <div className="space-y-3 pt-2" id="options-holder">
                {currentQuestion?.options.map((option, idx) => {
                  const isSelected = answers[currentQuestion.id]?.text === option.text;
                  return (
                    <button
                      key={idx}
                      id={`opt-btn-${currentQuestion.id}-${idx}`}
                      onClick={() => handleSelectOption(currentQuestion.id, option)}
                      className={`w-full ${isRtl ? "text-right flex-row" : "text-left flex-row-reverse"} p-4 rounded-2xl border text-sm transition-all flex items-start gap-3 group selection-btn cursor-pointer`}
                    >
                      <div className={`w-5 h-5 rounded-full border flex items-center justify-center shrink-0 mt-0.5 pointer-events-none transition-colors ${
                        isSelected ? "border-emerald-500 bg-emerald-500 text-white" : "border-slate-300 bg-white group-hover:border-slate-400"
                      }`}>
                        {isSelected && <Award className="w-3 h-3 text-white" />}
                      </div>
                      <span className="font-sans leading-relaxed pointer-events-none flex-1 text-slate-700 font-medium">{option.text}</span>
                    </button>
                  );
                })}
              </div>

              {/* Back navigation */}
              <div className={`pt-4 border-t border-slate-100 flex justify-between items-center text-xs text-slate-500 ${isRtl ? "" : "flex-row-reverse"}`} id="quiz-navigation">
                <span>
                  {isRtl ? "* الإجابات سرية بالكامل وتساعد في بناء خطة أتمتتك الاستشفائية." : "* Complete confidentiality. Guides bespoke cloud integrations."}
                </span>
                {currentQuestionIdx > 0 && (
                  <button
                    onClick={handlePrev}
                    id="quiz-back-btn"
                    className="font-bold text-slate-700 hover:text-slate-900 transition-colors flex items-center gap-1 bg-slate-100 px-3 py-1.5 rounded-lg cursor-pointer font-sans"
                  >
                    <span>{isRtl ? "السابق" : "Back"}</span>
                    {isRtl ? <ArrowRight className="w-3.5 h-3.5" /> : <ArrowLeft className="w-3.5 h-3.5" />}
                  </button>
                )}
              </div>

            </div>
          ) : (
            
            /* Completed Diagnostic Report View */
            <div className={`space-y-6 ${isRtl ? "text-right" : "text-left"} animate-in fade-in duration-500`} id="audit-completed-report">
              
              <div className="text-center space-y-2 mb-4" id="report-centered-header border-b border-slate-100 pb-2">
                <span className="p-3 bg-red-100 text-red-600 rounded-full inline-block mb-2">
                  <ShieldAlert className="w-8 h-8 mx-auto text-red-600 animate-bounce" />
                </span>
                <h3 className="text-xl sm:text-2xl font-extrabold text-slate-900 font-sans">
                  {isRtl ? "تم الانتهاء • فحص تسريب عملياتك جاهز بالثانية" : "Completed • Tech Audit Report Ready"}
                </h3>
                <p className="text-xs text-slate-500 font-sans">
                  {isRtl 
                    ? "تم تسجيل وتحليل إجاباتك بناء على نظام المعايرة اللحظية الموحد" 
                    : "Individual metrics calculated and scored against global operational standards"}
                </p>
              </div>

              {/* Total leakage graphic score */}
              <div className="bg-slate-900 text-white p-6 sm:p-8 rounded-3xl grid sm:grid-cols-12 gap-6 items-center border border-slate-800" id="report-metrics-box">
                
                <div className="sm:col-span-4 text-center space-y-1 border-b sm:border-b-0 sm:border-l border-slate-850 pb-4 sm:pb-0 shrink-0">
                  <span className="text-[11px] uppercase tracking-widest text-slate-400 font-mono">
                    {isRtl ? "مؤشر التسريب الرقمي" : "Operational Leakage Index"}
                  </span>
                  <div className="text-5xl font-extrabold text-red-400 font-mono tracking-tight my-1.5">
                    {leakagePercentage}%
                  </div>
                  <span className="text-xs text-slate-400 font-sans block">
                    {isRtl ? "تسريب وهدر تشغيلي مالي" : "Estimated Conversion Friction"}
                  </span>
                </div>

                <div className="sm:col-span-8 space-y-3 px-2">
                  <div className={`inline-block px-3 py-1 rounded-full text-xs font-bold border ${diagnosisColor}`}>
                    {diagnosisTitle}
                  </div>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                    {diagnosisDesc}
                  </p>
                  <div className="text-[11px] text-slate-400 font-mono">
                    {isRtl ? "مستوى الكفاءة التشغيلية الحرة المقدر حالياً: " : "Calculated automation reliability percentage: "}
                    <strong className="text-white">{100 - leakagePercentage}%</strong>
                  </div>
                </div>

              </div>

              {/* Diagnostic items breakdown details */}
              <div className="space-y-4 font-sans" id="detailed-feedback-list-breakdown">
                <h4 className="text-sm font-bold text-slate-800 border-r-4 border-slate-900 pr-2">
                  {isRtl ? "رؤية تشخيصية تفصيلية مبنية على خياراتك:" : "Granular diagnostic review from answers:"}
                </h4>
                <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1">
                  {Object.keys(answers).map((qId, idx) => {
                    const data = answers[qId];
                    if (!data) return null;
                    return (
                      <div key={qId} className="bg-slate-50 p-3 rounded-xl text-xs space-y-1 border border-slate-150">
                        <div className="flex items-center gap-1 text-slate-800 font-bold">
                          <span className="text-slate-400">{idx + 1}.</span>
                          <span>{data.text.slice(0, 75)}...</span>
                        </div>
                        <p className="text-[11px] text-slate-600 leading-relaxed font-sans">{data.feedback}</p>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Recommendation Box */}
              <div className="p-4 rounded-2xl bg-emerald-50/50 border border-emerald-100 space-y-1.5 text-right font-sans" id="recom-blueprint">
                <div className={`flex items-center gap-2 text-emerald-800 font-bold text-sm ${isRtl ? "" : "flex-row-reverse"}`}>
                  <Zap className="w-4 h-4 text-emerald-600" />
                  <span>
                    {isRtl ? "مخطط الأتمتة المقترح لشركتك من أيسرز:" : "Aisers Suggested Remediation Plan:"}
                  </span>
                </div>
                <p className={`text-xs sm:text-sm text-slate-700 leading-relaxed font-sans ${isRtl ? "text-right" : "text-left"}`}>
                  {diagnosisRecom}
                </p>
              </div>

              {/* Actions */}
              <div className={`pt-4 border-t border-slate-100 flex flex-col sm:flex-row gap-3 items-stretch sm:items-center justify-between ${isRtl ? "" : "flex-row-reverse"}`} id="report-action-buttons">
                <button
                  onClick={handleRestart}
                  id="restart-audit-btn"
                  className="px-5 py-3 rounded-xl border border-slate-200 text-xs font-bold text-slate-600 hover:bg-slate-50 text-center cursor-pointer font-sans"
                >
                  {isRtl ? "إعادة إجراء الفحص والتقييم" : "Retake Operations Assessment"}
                </button>

                <button
                  onClick={handleApplyDiagnosis}
                  id="apply-diagnosis-to-form-btn"
                  className="px-6 py-3 bg-emerald-600 hover:bg-emerald-700 text-white font-bold rounded-xl text-xs sm:text-sm shadow-md flex items-center justify-center gap-2 text-center transform hover:-translate-y-0.5 transition-transform cursor-pointer font-sans"
                >
                  <span>{isRtl ? "أرسل النتيجة واطلب مراجعة تشخيصية (مجاناً)" : "Submit & Book My Free Tech Consultation"}</span>
                  <ArrowLeft className={`w-4 h-4 text-emerald-100 ${isRtl ? "" : "rotate-180"}`} />
                </button>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
}
