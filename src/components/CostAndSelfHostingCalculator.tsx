/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from "react";
import { Server, Database, PiggyBank, Shield, HelpCircle, HardDrive, Cpu, CheckCircle } from "lucide-react";

import CostSavingsChart from "./CostSavingsChart";

interface SaasTool {
  name: string;
  avgCostPerSeat: number;
  description: string;
  selfHostedAlternative: string;
}

interface CostAndSelfHostingCalculatorProps {
  lang: "ar" | "en";
}

export default function CostAndSelfHostingCalculator({ lang }: CostAndSelfHostingCalculatorProps) {
  const isRtl = lang === "ar";

  const tools: SaasTool[] = isRtl ? [
    { name: "أداة ربط وأتمتة (مثل Zapier)", avgCostPerSeat: 49, description: "نقل البيانات والتشغيل المتفرق", selfHostedAlternative: "n8n community edition" },
    { name: "إدارة العملاء والمبيعات (مثل HubSpot CRM)", avgCostPerSeat: 45, description: "حفظ ومتابعة الفرص والمراسلات", selfHostedAlternative: "Odoo / Baserow CRM" },
    { name: "نماذج ونماذج متقدمة (مثل Typeform)", avgCostPerSeat: 29, description: "استقبال طلبات الجمهور والفرز", selfHostedAlternative: "Formbricks / NocoDB" },
    { name: "تواصل جماعي داخلي (مثل Slack Pro)", avgCostPerSeat: 15, description: "مراسلات الفريق والتسليمات", selfHostedAlternative: "Rocket.Chat / Mattermost" }
  ] : [
    { name: "Workflow Integrations (e.g., Zapier)", avgCostPerSeat: 49, description: "Relaying data and scattered systems", selfHostedAlternative: "n8n community edition" },
    { name: "Client & Sales CRM (e.g., HubSpot)", avgCostPerSeat: 45, description: "Archiving conversations and tracking deal pipelines", selfHostedAlternative: "Odoo / Baserow CRM" },
    { name: "Advanced Form Intakes (e.g., Typeform)", avgCostPerSeat: 29, description: "Retrieving prospect configurations & scoring", selfHostedAlternative: "Formbricks / NocoDB" },
    { name: "Team Internal Chat (e.g., Slack Pro)", avgCostPerSeat: 15, description: "Central communications and file dispatch", selfHostedAlternative: "Rocket.Chat / Mattermost" }
  ];

  const [selectedTools, setSelectedTools] = useState<string[]>([]);
  const [employeeCount, setEmployeeCount] = useState(5);

  // Sync selection when lang toggles to avoid key mismatch
  useEffect(() => {
    setSelectedTools([tools[0].name, tools[1].name]);
  }, [lang]);

  const handleToggleTool = (name: string) => {
    setSelectedTools(prev =>
      prev.includes(name) ? prev.filter(t => t !== name) : [...prev, name]
    );
  };

  // Calculate SaaS Cost
  const activeToolsData = tools.filter(t => selectedTools.includes(t.name));
  const costPerSeatMonthly = activeToolsData.reduce((acc, curr) => acc + curr.avgCostPerSeat, 0);
  
  // SaaS monthly cost grows linearly with seats/employees in typical SaaS licenses
  const monthlySaasCost = costPerSeatMonthly * employeeCount;
  const yearlySaasCost = monthlySaasCost * 12;

  // Self-Hosted Cost stays flat on VPS
  // Typically a single $15/mo VPS server can handle all these tools for 1-30 employees easily
  const monthlySelfHostedServerFee = employeeCount > 15 ? 30 : 15;
  const yearlySelfHostedCost = monthlySelfHostedServerFee * 12;

  const yearlySavings = Math.max(yearlySaasCost - yearlySelfHostedCost, 0);

  return (
    <section id="calculator" className="py-20 bg-white border-b border-slate-100">
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Block */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4" id="calc-intro">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-indigo-50 text-indigo-800 rounded-full text-xs font-semibold border border-indigo-150">
            <PiggyBank className="w-3.5 h-3.5 text-indigo-600" />
            <span>
              {isRtl ? "حاسبة العائد والوفر المالي والخصوصية" : "Cost-Benefit & Privacy Calculator"}
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold text-slate-900 tracking-tight font-sans text-center">
            {isRtl
              ? "وفر فواتير المايكرو-برمجيات المشتتة حتى 85%"
              : "Reduce Friction & Cut SaaS Costs up to 85%"}
          </h2>

          <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-sans font-normal text-center">
            {isRtl
              ? "حدد التطبيقات التي تميل أو تفكر باستخدامها لعملك ومرر شريط الموظفين، لترى الفرق المالي الضخم والخصوصية المطلقة بين اشتراكات الشركات السحابية الأجنبية وحزمة الاستضافة الذاتية المودعة على سيرفراتك الخاصة."
              : "Select the software applications you deploy for daily workflows and slide the user licenses count. Witness the massive cost separation and supreme data privacy of private host VPS clusters over recurring subscription tiers."}
          </p>
        </div>

        {/* Dynamic Calculator Structure */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch" id="calculator-canvas">
          
          {/* Controls Input (Right/Left Side depending on RTL) */}
          <div className={`lg:col-span-6 bg-slate-50 border border-slate-200/80 rounded-3xl p-6 sm:p-8 space-y-6 ${isRtl ? "text-right" : "text-left"} ${!isRtl ? "order-last" : ""}`} id="calc-controls-form">
            
            <div className="space-y-1.5" id="step-apps-selection font-sans">
              <span className="text-xs font-bold text-slate-400 font-sans block">
                {isRtl ? "الخطوة 1: حدد تطبيقات التشغيل الأساسية لعملك:" : "Step 1: Select Your Current Operational Tools:"}
              </span>
              <h3 className="text-base font-extrabold text-slate-800">
                {isRtl ? "الأدوات التي تدفع اشتراكاتها شهرياً:" : "Apps currently requiring renewal licenses:"}
              </h3>
            </div>

            {/* Checkbox list */}
            <div className="space-y-3" id="saas-checks-list font-sans">
              {tools.map((tool, idx) => {
                const isChecked = selectedTools.includes(tool.name);
                return (
                  <button
                    key={idx}
                    id={`saas-tool-checkbox-${idx}`}
                    type="button"
                    onClick={() => handleToggleTool(tool.name)}
                    className={`w-full ${isRtl ? "text-right" : "text-left"} p-3.5 rounded-2xl border text-sm transition-all flex items-start justify-between cursor-pointer`}
                  >
                    <div className={`flex gap-3 ${isRtl ? "flex-row text-right" : "flex-row-reverse text-left"}`}>
                      <div className={`mt-0.5 w-4 h-4 rounded border flex items-center justify-center shrink-0 ${
                        isChecked ? "bg-indigo-650 border-indigo-650 text-white" : "bg-white border-slate-300"
                      }`}>
                        {isChecked && (
                          <svg className="w-3 h-3 fill-current" viewBox="0 0 20 20">
                            <path d="M0 11l2-2 5 5L18 3l2 2L7 18z" />
                          </svg>
                        )}
                      </div>
                      <div className="font-sans flex-1">
                        <span className="block font-bold text-xs sm:text-sm text-slate-800">{tool.name}</span>
                        <span className="block text-[11px] text-slate-500 mt-0.5">{tool.description}</span>
                        <span className="block text-[10px] text-emerald-600 font-bold mt-1">
                          {isRtl ? `✓ البديل الذكي بالاقتباس: ${tool.selfHostedAlternative}` : `✓ Sovereign alternative: ${tool.selfHostedAlternative}`}
                        </span>
                      </div>
                    </div>
                    
                    <span className="text-xs font-bold text-slate-550 font-mono shrink-0 whitespace-nowrap pt-1">
                      {isRtl ? `$${tool.avgCostPerSeat}/موظف` : `$${tool.avgCostPerSeat}/Seat/Mo`}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* Seat selection Slider */}
            <div className="space-y-3 pt-2 font-sans" id="step-seats">
              <div className={`flex items-center justify-between ${isRtl ? "" : "flex-row-reverse"}`}>
                <span className="text-xs font-bold text-slate-550 font-sans">
                  {isRtl ? "عدد الموظفين أو الحسابات المطلوبة (Seats):" : "Number of registered employees (Seats):"}
                </span>
                <span className="text-sm font-extrabold text-indigo-700 font-mono">
                  {employeeCount} {isRtl ? "موظفين / تراخيص" : "Users / Seats"}
                </span>
              </div>
              
              <input
                type="range"
                min="1"
                max="30"
                id="seats-range-slider"
                value={employeeCount}
                onChange={(e) => setEmployeeCount(parseInt(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-650 focus:outline-none"
              />
              
              <div className={`flex justify-between text-[11px] text-slate-400 font-mono ${isRtl ? "" : "flex-row-reverse"}`}>
                <span>{isRtl ? "1 ترخيص" : "1 Seat"}</span>
                <span>{isRtl ? "15 تراخيص" : "15 Seats"}</span>
                <span>{isRtl ? "30 ترخيص" : "30 Seats"}</span>
              </div>
            </div>

            <p className="text-[10px] text-slate-400 leading-relaxed font-sans">
              {isRtl
                ? "* ملحوظة: تفترض معظم برمجيات الساس ضرب تكلفة الاشتراك شهرياً بعدد الموظفين المسجلين، بينما لا يتأثر السيرفر الخاص بعدد التراخيص في الاستضافة الذاتية."
                : "* Note: Commercial SaaS layouts calculate seat pricing linearly. Private VPS self-hosting remains flat-rate with infinite accounts."}
            </p>

          </div>

          {/* Outputs Canvas (Left/Right Side depending on RTL) */}
          <div className="lg:col-span-6 bg-slate-900 text-slate-100 rounded-3xl p-6 sm:p-8 flex flex-col justify-between space-y-6" id="calc-outputs-pane">
            
            <div className="space-y-4">
              <div className={`flex items-center justify-between border-b border-slate-850 pb-3 ${isRtl ? "" : "flex-row-reverse"}`} id="calc-result-header">
                <div className="flex items-center gap-2">
                  <Server className="w-5 h-5 text-indigo-400 animate-pulse" />
                  <span className="text-xs font-bold text-slate-300 font-sans">
                    {isRtl ? "جدول الإجماليات والمقارنة السنوية" : "Yearly Cost & Control Projections"}
                  </span>
                </div>
                <span className="text-[10px] bg-indigo-500/10 border border-indigo-500/20 px-2.5 py-0.5 rounded-full text-indigo-300 font-sans">
                  {isRtl ? "منظومة كاملة السيادة" : "100% On-Prem Flat Rate"}
                </span>
              </div>

              {/* Head-to-Head Comparison */}
              <div className="grid grid-cols-2 gap-4" id="head-to-head-numeric">
                
                {/* Traditional SaaS spend */}
                <div className={`bg-slate-950 p-4 rounded-2xl border border-slate-800 ${isRtl ? "text-right" : "text-left"} space-y-1`}>
                  <span className="text-[10px] text-slate-400 block font-sans">
                    {isRtl ? "تكلفة الساس (SaaS) السنوية:" : "Commercial SaaS (Yearly):"}
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-red-400 font-mono leading-none py-1">
                    ${yearlySaasCost.toLocaleString()}
                  </div>
                  <span className="text-[9px] text-slate-500 font-mono block">
                    (${monthlySaasCost}/{isRtl ? "شهر متراكم" : "mo billing"})
                  </span>
                </div>

                {/* Self Hosted VPC Flat Spend */}
                <div className={`bg-slate-950 p-4 rounded-2xl border border-slate-800 ${isRtl ? "text-right" : "text-left"} space-y-1`}>
                  <span className="text-[10px] text-slate-400 block font-sans">
                    {isRtl ? "الاستضافة الذاتية (Sovereign):" : "Sovereign Flat Hosted:"}
                  </span>
                  <div className="text-2xl sm:text-3xl font-extrabold text-emerald-400 font-mono leading-none py-1">
                    ${yearlySelfHostedCost.toLocaleString()}
                  </div>
                  <span className="text-[9px] text-slate-500 font-mono block">
                    (${monthlySelfHostedServerFee}/{isRtl ? "خادم مستقر" : "mo server"})
                  </span>
                </div>

              </div>

              {/* Dynamic Savings Card with details */}
              <div className={`bg-gradient-to-br from-indigo-900/40 to-slate-950 p-5 rounded-2xl border border-indigo-850 space-y-3 ${isRtl ? "text-right" : "text-left"}`} id="savings-feedback-box">
                <span className="text-[11px] text-indigo-300 font-bold tracking-wider font-sans block">
                  {isRtl ? "✔ قيمة التوفير السنوية الكافية لشركتك:" : "✔ Recovered Yearly Capital Savings:"}
                </span>
                
                <div className={`flex items-baseline gap-1 ${isRtl ? "" : "flex-row-reverse"}`} id="savings-amount-row">
                  <span className="text-3xl sm:text-4xl font-black text-emerald-400 font-mono">${yearlySavings.toLocaleString()}</span>
                  <span className="text-xs text-slate-350 font-sans">
                    {isRtl ? "وفر تشغيلي سنوي متوقع" : "Projected funds returned"}
                  </span>
                </div>

                <div className="space-y-1 text-slate-400 text-[11px] font-sans">
                  <div className={`flex items-center gap-1.5 ${isRtl ? "justify-start" : "justify-start flex-row-reverse"}`}>
                    <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full" />
                    <span>
                      {isRtl 
                        ? `تخفيض التكاليف بنسبة تزيد عن ${yearlySaasCost > 0 ? Math.round((yearlySavings / yearlySaasCost) * 100) : 0}% سنوياً.` 
                        : `Retain over ${yearlySaasCost > 0 ? Math.round((yearlySavings / yearlySaasCost) * 100) : 0}% of systems expenses yearly.`}
                    </span>
                  </div>
                  <div className={`flex items-center gap-1.5 ${isRtl ? "justify-start" : "justify-start flex-row-reverse"}`}>
                    <span className="w-1.5 h-1.5 bg-indigo-400 rounded-full" />
                    <span>
                      {isRtl
                        ? "ملكية الخادم والملفات 100% لك دون تحكّم طرف وسيط خارجي."
                        : "Private, enterprise-grade cloud with 100% ownership of your business data."}
                    </span>
                  </div>
                </div>
              </div>

              {/* D3 Bar Chart */}
              <CostSavingsChart
                yearlySaasCost={yearlySaasCost}
                yearlySelfHostedCost={yearlySelfHostedCost}
                lang={lang}
              />

            </div>

            {/* Quality attributes of self hosting */}
            <div className="grid grid-cols-3 gap-2 text-center font-sans" id="selfhost-tech-features">
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 text-slate-300 space-y-1">
                <Cpu className="w-4 h-4 text-emerald-400 mx-auto" />
                <span className="block text-[9px] font-bold">
                  {isRtl ? "معالجة مستقلة" : "Isolated CPU"}
                </span>
                <span className="block text-[8px] text-slate-500 leading-none">
                  {isRtl ? "تأمين كلي للأداء" : "Bespoke Speeds"}
                </span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 text-slate-300 space-y-1">
                <Database className="w-4 h-4 text-indigo-400 mx-auto animate-pulse" />
                <span className="block text-[9px] font-bold">
                  {isRtl ? "أمان تام للبيانات" : "Sovereign DB"}
                </span>
                <span className="block text-[8px] text-slate-500 leading-none">
                  {isRtl ? "تشفير وحجز ذاتي" : "Corporate Storage"}
                </span>
              </div>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-900 text-slate-300 space-y-1">
                <Shield className="w-4 h-4 text-amber-400 mx-auto" />
                <span className="block text-[9px] font-bold">
                  {isRtl ? "لا قيود مستخدم" : "No Seat Cap"}
                </span>
                <span className="block text-[8px] text-slate-500 leading-none">
                  {isRtl ? "تراخيص لانهائية" : "Infinite Users"}
                </span>
              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
