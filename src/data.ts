/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ServiceItem, ServiceCategory, UseCase, AuditQuestion } from "./types";

const SERVICES_DATA_AR: ServiceItem[] = [
  {
    id: "digital-interfaces",
    category: ServiceCategory.Interfaces,
    title: "الواجهات الرقمية وهندسة الهبوط",
    shortDescription: "صفحات هبوط ومواقع تعريفية مصممة خصيصاً للتحويل والتقديم المهني الاحترافي.",
    detailedDescription: "لا نقوم بمجرد رصّ النصوص والتصاميم؛ بل نقوم ببناء صفحات هبوط ومواقع تعريفية سريعة ومحسّنة تهدف إلى جذب العميل المناسب وفهم خدماتك بوضوح تام، وتكون مهيأة بالكامل للربط مع أنظمتك الداخلية تلقائياً.",
    features: [
      "تصميم متجاوب وسريع جداً للجوال والكمبيوتر",
      "كتابة نصوص تركز على القيمة التجارية للزائر",
      "ربط مباشر وفوري مع قواعد بيانات أو CRM",
      "لوحات تحكم بسيطة لتعديل المحتوى ذاتياً"
    ],
    benefits: [
      "ظهور فوري للعلامة التجارية بثقة واحترافية عالية",
      "زيادة ملحوظة في معدل تحجيم وتأهيل الزوار (Conversion Rate)",
      "إنهاء عزل الواجهة الرقمية عن العمل التشغيلية الداخلي"
    ],
    duration: "3-5 أيام",
    iconName: "Monitor"
  },
  {
    id: "crm-setup",
    category: ServiceCategory.CRM,
    title: "أنظمة إدارة العملاء والمتابعة (CRM)",
    shortDescription: "تصميم وإعداد لوحات CRM عملية لتتبع الفرص والصفقات وتأمين تواصل هادئ.",
    detailedDescription: "ننهي فوضى تتبع العملاء والمتابعات عبر الإيميل أو الواتساب الشخصي. نبني لك أو نجهّز لك لوحات CRM مرئية ومرتبة لتتبع العميل من لحظة تسجيله حتى استلام الخدمة، لضمان عدم ضياع أي صفقة.",
    features: [
      "لوحات مرئية (Kanban Boards) لسير العمليات والصفقات",
      "تأهيل وتصنيف تلقائي للعملاء المتوقعين (Leads)",
      "تنبيهات مخصصة لمسؤولي المبيعات للمتابعة السريعة",
      "تسجيل تلقائي لبيانات التواصل والملاحظات التفصيلية"
    ],
    benefits: [
      "تجنب ضياع المبيعات بسبب ضعف أو تأخر المتابعة",
      "رؤية شاملة ولحظية لجميع العملاء والمفاوضات الحالية",
      "تحسين أداء فريق المبيعات بنسبة تصل إلى 40%"
    ],
    duration: "5-7 أيام",
    iconName: "Users"
  },
  {
    id: "automation-engines",
    category: ServiceCategory.Automation,
    title: "أتمتة الأعمال وربط الأدوات",
    shortDescription: "تنفيذ أوتوماتيكي للمهام المتكررة لتقليل الهدر والأعمال اليدوية والآدمية المعقدة.",
    detailedDescription: "أفضل الموظفين هو الآلة التي لا تنام ولا تنسى. نقوم بهندسة وربط مختلف أدواتك الحالية (جداول بيانات، منصات تواصل، بريد إلكتروني، CRM) لتعمل معاً بذكاء ودون أدنى تدخل بشري لحركات النقل والنسخ واللصق المعقدة.",
    features: [
      "ربط فوري للتطبيقات المختلفة (Zapier, Make, n8n)",
      "أتمتة الإشعارات وإرسال الرسائل للعملاء فوراً",
      "مزامنة تلقائية للمعلومات وتحديث مستندات الفواتير",
      "بناء مسارات تشغيل متسلسلة للوظائف المكررة"
    ],
    benefits: [
      "توفير عشرات الساعات أسبوعياً من الاستنزاف الإداري اليدوي",
      "تخفيض نسبة الأخطاء البشرية في نقل البيانات إلى الصفر",
      "ضمان سرعة رد فائقة تبهر العملاء وتعزز مصداقيتك"
    ],
    duration: "4-6 أيام",
    iconName: "Cpu"
  },
  {
    id: "analytics-dashboards",
    category: ServiceCategory.Analytics,
    title: "لوحات التحليلات ومؤشرات الأداء",
    shortDescription: "بناء لوحات قياسية رقمية تمنحك رؤية تفصيلية فورية على المبيعات والتشغيل.",
    detailedDescription: "اتخاذ القرارات المبنية على الحدس يضرّ بعملك. نجمع لك بياناتك المتفرقة في لوحة تحكم واحدة ممتازة، تظهر أهم مؤشرات الأداء (KPIs) وأرقام المبيعات ومصادر العملاء وتكلفة الاستقطاب، لتقود شركتك بوعي تام وصورة شديدة الوضوح.",
    features: [
      "لوحات تحليلات تفاعلية ومرسومة برسوم ومخططات بيانية d3",
      "تجميع مصادر البيانات (CRM، المبيعات، التسويق) في شاشة مفردة",
      "تحديث تلقائي وفوري ومؤشرات قياس واضحة",
      "إمكانية تنزيل التقارير وتصديرها بصيغ قياسية"
    ],
    benefits: [
      "رؤية دقيقة وفورية لأداء العمل والصحة المالية والتشغيلية",
      "اتخاذ قرارات نمو وتوسع مدروسة ومدعومة بالبيانات الحية",
      "سهولة استكشاف المشاكل والاختناقات قبل تفاقمها"
    ],
    duration: "5-8 أيام",
    iconName: "BarChart3"
  },
  {
    id: "workflows-optimization",
    category: ServiceCategory.Workflows,
    title: "هندسة وتنظيم العمليات الداخلية",
    shortDescription: "تنظيم الـ Workflows وإجراءات التسليم بين الأقسام والفرق لمنع تشتت الفوضى.",
    detailedDescription: "أحياناً لا تكون المشكلة في البرامج بل في كيفية تدفق العمل. نقوم بتحليل وهيكلة سير العمل الداخلي وتصميم إجراءات ثابتة وسريعة لتسليم المهام بين أفراد الفريق، مع توثيق دورة حياة كل طلب لضمان استقرار التشغيل وهدوئه.",
    features: [
      "تصميم مسار واضح للمهام والمسؤوليات (Workflows)",
      "توزيع المهام تلقائياً على الشخص المناسب في الفريق",
      "بناء قوالب رقمية ثابتة للاستقبال والتسليم والتقييم",
      "تحديد مؤقتات وإنذارات لتجاوز الفترات المسموحة لـ SLAs"
    ],
    benefits: [
      "منع تضارب الأدوار أو ضياع المهام بين الأقسام",
      "توحيد معايير جودة الخدمة وضمان سرعة التسليم للعميل بالموعد",
      "صناعة بيئة داخلية هادئة ومنظمة تشجع على الإنتاجية"
    ],
    duration: "6-10 أيام",
    iconName: "GitBranch"
  },
  {
    id: "self-hosting-privacy",
    category: ServiceCategory.SelfHosting,
    title: "الاستضافة الذاتية وحوكمة الخصوصية",
    shortDescription: "أنظمة مستضافة على خوادمك الخاصة لتوفير تحكّم مطلق خصوصية فائقة وتخفيض التكاليف الدورية.",
    detailedDescription: "إذا كانت بيانات عملائك وملفاتك حساسة، أو تعبت من الاشتراكات الشهرية المرتفعة للميكرو-خدمات المغلقة، نوفر لك خيارات مذهلة للاستضافة الذاتية (Self-Hosting) للأدوات ذات المصدر المفتوح على خوادمك السحابية الخاصة تحت إدارتك الكاملة.",
    features: [
      "إعداد خوادم سحابية خاصة للمؤسسة (AWS, Google Cloud, DigitalOcean)",
      "تثبيت وتكوين بدائل ممتازة مفتوحة المصدر ( n8n, Baserow, Odoo, Rocket.Chat)",
      "حق وصول كامل وتام بنسبة 100% للشيفرات البرمجية والبيانات دون قيود",
      "أنظمة حماية نسخ احتياطي وتشفير متقدمة"
    ],
    benefits: [
      "تأمين الخصوصية وسيادة البيانات الكاملة للشركات الحساسة",
      "إلغاء الاشتراكات الشهرية المتصاعدة لصالح تكلفة استضافة ثابتة وزهيدة",
      "تخصيص لانهائي للبرامج بدون التقيّد بخريطة طريق مطوري الخدمة"
    ],
    duration: "7-12 يوم",
    iconName: "ShieldAlert"
  }
];

const SERVICES_DATA_EN: ServiceItem[] = [
  {
    id: "digital-interfaces",
    category: ServiceCategory.Interfaces,
    title: "Digital Interfaces & Landing Pages",
    shortDescription: "High-converting landing pages and websites crafted for professional presence and action.",
    detailedDescription: "We don't just assemble text and grids. We build fast, lightweight, search-optimized landing pages designed to filter visitors, highlight value propositions, and pipe submissions directly into your internal systems.",
    features: [
      "Ultra-responsive designs for seamless mobile & desktop views",
      "Actionable copywriting focusing on distinct customer value",
      "Immediate, native APIs integrating with database/CRM systems",
      "Super simple dashboards for future self-managed updates"
    ],
    benefits: [
      "Establishing trusted brand authority with professional visuals",
      "Marked climb in visitor tracking and lead conversion rate",
      "Bridging the disconnect between frontend visitor and backend workflow"
    ],
    duration: "3-5 Days",
    iconName: "Monitor"
  },
  {
    id: "crm-setup",
    category: ServiceCategory.CRM,
    title: "CRM & Pipelines Setup",
    shortDescription: "Order the receipt and lifecycle of customer inquiries in visual, collaborative pipelines.",
    detailedDescription: "Unify scattered customer logs out of WhatsApp threads, private logs, or lost emails. We build highly visible pipeline boards (Kanban CRM) tracking each client journey from lead to contract billing.",
    features: [
      "Visual Kanban boards representing sales processes and stages",
      "Automated lead sorting and immediate sales team assignment",
      "Push alerts for reps to secure speed-of-lead under minutes",
      "Automatic ledger records of customer context and history"
    ],
    benefits: [
      "Stop losing prospective revenue due to slow follow-up cycles",
      "Gain absolute real-time overview over aggregate deals and margins",
      "Boost your sales team productivity by up to 40%"
    ],
    duration: "5-7 Days",
    iconName: "Users"
  },
  {
    id: "automation-engines",
    category: ServiceCategory.Automation,
    title: "Workflow Automation & Integrations",
    shortDescription: "Seamless backend triggers to clear repetitive administrative copy-pasting from your desk.",
    detailedDescription: "The ideal employee is a quiet program that never sleeps, repeats actions correctly, and doesn't forget. We orchestrate triggers and integrations syncing your emails, spreadsheets, bills, and CRM autonomously.",
    features: [
      "Zero-code & custom code integrations (n8n, Zapier, Make)",
      "Triggering instant client notifications and confirmation alerts",
      "Real-time synchronized records and billing creation",
      "Sequential automation pipelines for recursive admin jobs"
    ],
    benefits: [
      "Reclaim hours of manual labor and administrative drudgery",
      "Settle human transcription and data errors down to absolute zero",
      "Delight clients with blazing-fast replies and high responsiveness"
    ],
    duration: "4-6 Days",
    iconName: "Cpu"
  },
  {
    id: "analytics-dashboards",
    category: ServiceCategory.Analytics,
    title: "KPI & Analytics Dashboards",
    shortDescription: "Interactive, clean dashboards that visually consolidate your sales, marketing, and performance.",
    detailedDescription: "Ditch guesswork and intuitive calculations. We pull your disconnected platforms into a unified dashboard of charts (custom d3) showing sales volumes, client sources, acquisition indices, and margin health.",
    features: [
      "Interactive data plots modeled with beautiful D3 and SVG charting",
      "Aggregated visual dashboard of multi-source sales registers",
      "Automatic background recalculation and live progress flags",
      "Quick formatting exports for PDF sheets and Excel files"
    ],
    benefits: [
      "Gain precise operational awareness of your business pulse",
      "Execute decisions backed by clear, real-time factual trends",
      "Uncover blockages and lead-loss links before they disrupt growth"
    ],
    duration: "5-8 Days",
    iconName: "BarChart3"
  },
  {
    id: "workflows-optimization",
    category: ServiceCategory.Workflows,
    title: "Standard Internal Operating Procedures",
    shortDescription: "Structure clear department handoffs and task assignments to ensure structural stability.",
    detailedDescription: "Often the friction lies in procedural structure rather than code. We consult, chart, and design standardized templates, mapping step ownerships and timelines to keep teams organized and accountable.",
    features: [
      "Procedural maps detailing state hand-offs and step owners",
      "Autonomous notifications alerting engineers of newly assigned jobs",
      "Rigid visual guidelines for intakes, reviews, and client handback",
      "Triggering timing flags and alerts to protect project SLAs"
    ],
    benefits: [
      "Eliminate duplicate efforts or loose loose ends in handovers",
      "Unify output quality standards and assure clients of timely shipment",
      "Build a quiet, predictable internal atmosphere which fosters focus"
    ],
    duration: "6-10 Days",
    iconName: "GitBranch"
  },
  {
    id: "self-hosting-privacy",
    category: ServiceCategory.SelfHosting,
    title: "Sovereign Self-Hosting & Privacy",
    shortDescription: "Install open-source business suites on your private servers to protect privacy and slash SaaS bills.",
    detailedDescription: "If customer confidentiality is vital, or your company spends a fortune on recurring SaaS bills, we help you transition to self-hosted open-source counterparts running on flat-rate cloud resources that you own.",
    features: [
      "Provisioning secure VPS computing hosts (AWS, Google Cloud, DigitalOcean)",
      "Deploying top open-source business engines (n8n, Baserow, Odoo, Rocket.Chat)",
      "100% database sovereignty and root access logs under your terms",
      "Strict automated daily snapshots, mirrors, and security layers"
    ],
    benefits: [
      "Guarantee bulletproof data privacy and regional sovereign compliance",
      "Slash ongoing software bills of seats by up to 85% with flat host rates",
      "Boundless custom alterations without being gridlocked by SaaS frameworks"
    ],
    duration: "7-12 Days",
    iconName: "ShieldAlert"
  }
];

const USE_CASES_DATA_AR: UseCase[] = [
  {
    id: "service-agency",
    title: "شركة خدمات ومبيعات استشارية",
    businessType: "شركة خدمات واستشارات",
    problem: "العملاء يسجلون في نموذج بدائي، المبيعات يتابعون يدوياً بعد 24 ساعة، هناك تشتت كبير في معرفة حالة كل طلب وضياع مستمر للمهمات.",
    solution: "بناء صفحة هبوط سريعة جداً، ربط النموذج بـ CRM وتنبيه فوري لمدير المبيعات عبر واتساب بمجرد تسجيل الطلب، وأتمتة مسار المتابعة.",
    result: "انخفاض زمن الاستجابة من 24 ساعة إلى دقيقتين فقط، تصفير لضياع المبيعات، ومتابعة واضحة لمدى تقدم المشاريع.",
    impactMetrics: [
      "استجابة فورية خلال 120 ثانية",
      "+45% نمو في المبيعات المغلقة",
      "توفير 15 ساعة عمل أسبوعياً"
    ],
    iconName: "Briefcase"
  },
  {
    id: "delivery-ecommerce",
    title: "نشاط مبيعات وتجارة خدمات لوجستية",
    businessType: "تجارة رقمية وخدمات شحن",
    problem: "يتلقون طلبات الشحن عبر الإكسل، وتنسيق العنوان يدوياً لإرساله لمندوب التوصيل، وكتابة فواتير البيع يدوياً، وصعوبة قياس الأرباح بدقة.",
    solution: "أتمتة كاملة للربط بين نموذج الاستلام وجداول العمل ونقل المواقع مباشرة لمندوبي التوصيل مع لوحة تحليلات تفاعلية للمبيعات والعمولة السنوية.",
    result: "أتمتة دورة حياة الفواتير تماماً، وتوفير الأخطاء اليدوية، وحصول الإدارة على لوحة تحكم ذكية تعطي صافي الأرباح لحظة بلحظة.",
    impactMetrics: [
      "تصفير الأخطاء البشرية 0%",
      "توفير كلفة موظفين إدخال بيانات",
      "لوحة قيادة مالية تفاعلية بوضوح 100%"
    ],
    iconName: "ShoppingBag"
  },
  {
    id: "tech-startup-privacy",
    title: "شركة تقنية وكيان مالي محلي",
    businessType: "مؤسسة مالية / شركة ناشئة",
    problem: "رغبة صارمة في حوكمة الخصوصية، الخوف من تسرب بيانات العملاء الحساسة عبر اشتراك بجهات أتمتة خارجية سحابية، مع فواتير SaaS شهرية هائلة.",
    solution: "تهيئة بيئة استضافة ذاتية (Self-hosted Environment) على خادم الشركة، وتثبيت نظام أتمتة n8n وقاعدة بيانات مركزية مستقلة تماماً.",
    result: "سيادة كاملة على البيانات، حماية أمنية مطابقة للمواصفات الحكومية، وإلغاء فواتير اشتراك البرمجيات الخارجية.",
    impactMetrics: [
      "خصوصية وسيادة بيانات 100%",
      "تخفيض كلفة الاشتراك بـ SaaS بنسبة 85%",
      "تخصيص كامل للأداة والأذونات"
    ],
    iconName: "Lock"
  }
];

const USE_CASES_DATA_EN: UseCase[] = [
  {
    id: "service-agency",
    title: "B2B Consulting & Consultation Firm",
    businessType: "Agency & Advisory Firm",
    problem: "Prospects registered through raw, sluggish input forms. Reps followed up manually hours or days later. Deals were constantly details-omitted or forgotten.",
    solution: "Built a lightning-fast responsive landing page, synchronized form intakes with visual CRM boards, and configured push Whatsapp alerts instantly.",
    result: "Slashed lead response speed from 24 hours down to 120 seconds, eliminated data loss, and centralized pipeline monitoring.",
    impactMetrics: [
      "Instant response under 120 seconds",
      "+45% increase in closure margins",
      "Saved 15 business hours weekly"
    ],
    iconName: "Briefcase"
  },
  {
    id: "delivery-ecommerce",
    title: "Shipping Logistics & E-Commerce",
    businessType: "E-Commerce Fulfilment & Logistics",
    problem: "Orders collected via Excel grids, routes typed manually to dispatch riders, invoices typed by hand, making growth margins extremely labor-intensive to extract.",
    solution: "Integrated automated syncing connecting client forms with map pins, triggering instant invoice generations and custom decision dashboards.",
    result: "Completely automated transaction and tracking lifecycle, cutting redundant typing and presenting real-time clean profit analytics.",
    impactMetrics: [
      "Zero manual typing errors 0%",
      "Removed administrative data-entry costs",
      "100% visible gross margins dashboard"
    ],
    iconName: "ShoppingBag"
  },
  {
    id: "tech-startup-privacy",
    title: "Sovereign FinTech & Software Entity",
    businessType: "Tech Startup / FinTech Entity",
    problem: "High compliance demands. Fear of leaking sensitive customer logs to public third-party SaaS cloud parsers, compounded by bloated user license costs.",
    solution: "Set up a highly secured on-premise VPS hosting, deploying open-source automation servers and central databases completely offline from external clouds.",
    result: "Acquired absolute database sovereignty, cleared external data leak risks, and removed costly recurring monthly CRM seat bills.",
    impactMetrics: [
      "100% data sovereignty and control",
      "Clipped SaaS recurring bills by 85%",
      "Complete custom server flexibility"
    ],
    iconName: "Lock"
  }
];

const METHODOLOGY_STEPS_AR = [
  {
    step: "1",
    title: "فهم وتشخيص الوضع الحالي",
    description: "نجلس معك في جلسة سريعة وعملية لمدة ساعة لنرسم خريطة للعمليات الحالية، نقوم باستكشاف الاختناقات، الفوضى، والأدوات المستخدمة لتشخيص مواطن الهدر بشكل دقيق."
  },
  {
    step: "2",
    title: "الفلترة وتحديد الأولوية المفيدة",
    description: "لا نحب التعقيد الزائد؛ بدلاً من اقتراح نظام عملاق، نحدّد النقطة أو الأداة الأكثر تأثيراً التي ستوفر لك 80% من الهدر بأقل وقت وتنفيذ."
  },
  {
    step: "3",
    title: "بناء وتنفيذ هندسي ذكي",
    description: "نقوم بهندسة وبناء الحلول المطلوبة بسرعة: مواقع، CRM، أتمتة، أو تنصيب خوادم الاستضافة الذاتية. نعمل بكفاءة ونقدم لك الحل خالياً من الحشو التقني المعقد."
  },
  {
    step: "4",
    title: "الضبط، الاستقرار وبدء التشغيل",
    description: "نضبط واجهات العمل ونقوم بتدريب فريقك ببساطة عبر شروحات مرئية قصيرة، ونشغّل البنية تحت هدوء تام ومراقبة حية لنضمن استقرارها الكامل."
  }
];

const METHODOLOGY_STEPS_EN = [
  {
    step: "1",
    title: "Diagnostic Operational Audit",
    description: "We host a fast, 1-hour workshop mapping your current logs, evaluating internal handoffs and software bottlenecks to pinpoint operational flow leakage."
  },
  {
    step: "2",
    title: "Filter & Prioritize Value Links",
    description: "We bypass structural bloating. Instead of recommending a clumsy multi-month overhaul, we script the single bridge tackling 80% of leakages swiftly."
  },
  {
    step: "3",
    title: "Agile Engineering & Build",
    description: "We assemble the exact required suite: landing pages, CRM boards, auto-alerts or private cloud hosts. We keep code lean, agile, and robust."
  },
  {
    step: "4",
    title: "Stabilize, Onboard & Live Run",
    description: "We test pipelines, onboard your team using short screen casts, and trigger live executions under real-time monitoring to ensure absolute silence."
  }
];

const INTERACTIVE_AUDIT_QUESTIONS_AR: AuditQuestion[] = [
  {
    id: "q1",
    text: "كيف تتعامل مع تسجيل وحفظ وفحص بيانات العملاء الجدد (Leads)؟",
    options: [
      { text: "تضيع الأرقام والأسماء بين واتساب، الإيميل، وفواتير ورقية متناثرة.", score: 40, feedback: "تشتت خطر يؤدي لضياع 30-50% من فرص المبيعات المحتملة بسبب عدم ترابط الواجهة وحفظ السجلات." },
      { text: "نعتمد على ملف إكسل أو جدول بيانات مشترك يتم ملؤه يدوياً ببطء شديد.", score: 25, feedback: "خطأ بشري متوقع، تأخر في سرعة الاستجابة وصعوبة معرفة حالة المتابعة التاريخية لكل عميل." },
      { text: "لدينا لوحة CRM منظمة ومرتبة تنتقل فيها الفرص تلقائياً لكن ربطها مع الواجهة يدوي.", score: 10, feedback: "وضع مرن، لكن يحتاج أتمتة ربط الواجهات لتوفير الوقت البشري والجهود الإدارية." },
      { text: "نظام أوتوماتيكي متكامل، حيث يسجل العميل فتنتقل بياناته فوراً للـ CRM والمبيعات.", score: 0, feedback: "ممتاز جداً! تشغلك في جانب رعاية العملاء يسير بكفاءة واستقرار عالي." }
    ]
  },
  {
    id: "q2",
    text: "ما هو زمن الاستجابة الأولي المعتاد للتواصل مع العميل المهتم الجديد؟",
    options: [
      { text: "بعد يوم أو يومين، عندما يتفرغ أحد المسؤولين لمراجعة الطلبات.", score: 35, feedback: "تأخير فج يجعل العميل يبرد أو يذهب للمنافسين. سرعة الاستجابة هي 50% من قرار الشراء اليوم." },
      { text: "خلال بضعة ساعات (2 - 8 ساعات) بشكل يدوي بمجرد قراءة الإشعار.", score: 20, feedback: "استجابة متوسطة تفقد زخم الاهتمام الأولي، يمكن تحسينها بوضع طلقة أتمتة سريعة تبعث رسالة ترحيبية فورية." },
      { text: "خلال ساعة أو أقل، لأن فريقنا يبذل جهوداً هائلة في مراقبة الإشعارات باستمرار.", score: 10, feedback: "الجهد البشري مستنزف للغاية في المراقبة، التنبيهات المؤتمتة الفورية عبر واتساب توفر مجهود فريقك." },
      { text: "تلقائياً وفوراً (في غضون دقائق) برسالة أو إيميل ترحيبي يتضمن جدولة حية.", score: 0, feedback: "استجابة عالمية ممتازة تحافظ على شغف العميل الساخن فور تسجيل رغبته." }
    ]
  },
  {
    id: "q3",
    text: "كيف يتم تنفيذ ونقل المهام ومعالجة تكرار العمليات الإدارية اليومية؟",
    options: [
      { text: "كل شيء يدوي تماماً: نسخ ولصق بين الجداول، إرسال فواتير بالايميل، وتنبيهات شفهية.", score: 45, feedback: "أعلى معدل تشتت واستنزاف بشري. فريقك يقوم بمهمة الآلات، مما يسبب انعدام الإبداع والبطء." },
      { text: "جزء منها مؤتمت بشكل بدائي، لكن لا يزال هناك نقل يدوي دوري للكثير من البيانات المتفرقة.", score: 25, feedback: "نصف استقرار، توجد فجوات تشغيلية تسبب نسيان بعض الخطوات أو حدوث أخطاء مزعجة في تسليم المهام." },
      { text: "معظم العمليات الرقمية مترابطة، لكننا نعاني من كثرة تكلفة اشتراكات الأدوات الأجنبية السحابية.", score: 15, feedback: "أتمتة جيدة لكن الميزانية مستنزفة. خيار الاستضافة الذاتية (Self-hosting) سيحل أعبائكم المادية والخصوصية." },
      { text: "أتمتة ذكية متكاملة، حيث تنتقل الملفات وتصدر الفواتير والتقارير بأقل تدخل بشري.", score: 0, feedback: "أداء تشغيلي رائع وصحي يحقق أقصى كفاءة لشركتك ويعزز هوامش الأرباح." }
    ]
  },
  {
    id: "q4",
    text: "ما مدى وضوح الرؤية الإدارية لديك على المبيعات اللحظية ومؤشرات الأداء؟",
    options: [
      { text: "مبهمة أو غير واضحة تماماً؛ نعرف الوضع فقط بشكل تقريبي بنهاية الشهر أو ربع السنة.", score: 35, feedback: "قيادة معصوبة العينين لعمل تجاري. هذا يمنعك من اتخاذ قرارات تسويقية أو مالية سريعة ومثمرة." },
      { text: "نجمع الأرقام يدوياً من عدة برامج وشاشات ونعكف على إعدادها في تقارير تستغرق أياماً.", score: 20, feedback: "كلفة زمنية مرهقة من تجهيز التحليلات والتقارير، غالباً تكون الأرقام قديمة نسبياً عند مراجعتها." },
      { text: "لدينا تحليلات منفصلة لكل أداة (تطبيق المبيعات لوحدها، التسويق لوحده) ولكنها ليست مدمجة.", score: 10, feedback: "رؤية جزئية مشتتة تحدّ من فهم مسار تدفق العائد الحقيقي بشكل كلي ومتصل." },
      { text: "شاشة واحدة مركزية (Dashboard) تعطينا جميع البيانات الحية والمؤشرات لحظة بلحظة.", score: 0, feedback: "تحكم إداري احترافي يسهل القراءة ويمنح ميزة القرارات السريعة الحكيمة المبنية على وضوح تام." }
    ]
  },
  {
    id: "q5",
    text: "هل تشكّل اشتراكات البرامج الشهرية (SaaS) أو حماية خصوصية بيانات عملاءك عقبة لك؟",
    options: [
      { text: "ندفع مبالغ ضخمة متصاعدة لشركات أجنبية مع مخاوف حول خصوصية معلوماتنا وبياناتنا الخاصة.", score: 30, feedback: "خطورة مزدوجة: كلفة متراكمة وعبث بالسيادة. حل الاستضافة الذاتية مخصص تماماً لمعالجة هذه المعضلة." },
      { text: "الاشتراكات مقبولة، لكن ليس لدينا أي تحكم حقيقي بالبيانات ولا يمكن تصديرها أو حمايتها ذاتياً.", score: 15, feedback: "تعلق بنظام سد مغلق. السيرفرات الخاصة تمنح حرية كاملة وقدرات غير محدودة للتحكم والفلترة." },
      { text: "نلجأ للأدوات المجانية فقط، مما يحد من خياراتنا ومميزاتنا ويعطل جودة وتوسع أعمالنا.", score: 20, feedback: "القيود المجانية تمنع النمو. تتوفر تطبيقات عالمية بديلة مجانية ومفتوحة المصدر فقط تحتاج تهيئة مستقرة وخادم رخيص." },
      { text: "بياناتنا مستضافة وآمنة بالكامل تحت سيادتنا وتكلفتنا التشغيلية في السيرفرات ضئيلة جداً.", score: 0, feedback: "سيادة تقنية وخصوصية متطورة للغاية تليق بنشاط حديث وناضج يحمي حقوقه ومستقبله." }
    ]
  }
];

const INTERACTIVE_AUDIT_QUESTIONS_EN: AuditQuestion[] = [
  {
    id: "q1",
    text: "How do you handle incoming client inquiries & leads registration?",
    options: [
      { text: "Details are scattered across Whatsapp threads, email logs, and loose notes.", score: 40, feedback: "Severe operational leakage. You are likely losing 30-50% of qualified incoming sales opportunities due to lack of a structured intake ledger." },
      { text: "We compile them manually inside a shared spreadsheet slowly.", score: 25, feedback: "High risk of human transcription errors. Speeds of reply are sluggish, and sales history is hard to log sequentially." },
      { text: "We use visual CRM boards, but getting leads from forms to the boards is manual.", score: 10, feedback: "Reasonable foundation, but manual data-transfers distract sales reps and cost precious hours daily." },
      { text: "100% automated: submissions immediately populate CRM lanes and notify reps.", score: 0, feedback: "Superb alignment! Your client absorption pipelines operate with exceptional speed and structural stability." }
    ]
  },
  {
    id: "q2",
    text: "What is your average response speed to contact a hot new lead?",
    options: [
      { text: "Usually 24 to 48 hours, whenever an administrator gets a break from tasks.", score: 35, feedback: "A fatal lag. Speed-to-lead commands up to 50% of modern buying decisions; hot prospects freeze if left unanswered." },
      { text: "Within a few business hours, triggered manually after looking at inbox alerts.", score: 20, feedback: "Moderate response; misses the peak high-interest window. Easily solved with an automatic instant follow-up." },
      { text: "Within an hour, but it requires grueling, constant tracking from our staff.", score: 10, feedback: "Protects the lead but exhausted staff labor. Automated notifications would free your group." },
      { text: "Instantly (within 5 minutes) via an automated WhatsApp/email containing dynamic booking links.", score: 0, feedback: "Top tier performance. Your responsiveness matches global speeds and projects deep professional prestige." }
    ]
  },
  {
    id: "q3",
    text: "How are repetitive daily administration and communication routines handled?",
    options: [
      { text: "Fully manual: copy-pasting numbers, typing out PDF invoices, and sending followups.", score: 45, feedback: "Massive friction trap. Your staff is performing mechanical routines, capping scale and squandering creative focus." },
      { text: "Semi-automated, but there is still manual entry needed to bridge many of our platforms.", score: 25, feedback: "Fragmented efficiency. Operational cracks still prompt missed steps or sluggish delivery timelines." },
      { text: "Highly integrated, but we pay massive, inflating monthly subscription bills to SaaS companies.", score: 15, feedback: "Excellent workflow logic but high bill pressure. Independent self-hosting is the prime solution to cut seat costs." },
      { text: "Autonomous backend triggers: tools talk securely with near-zero manual typing of spreadsheets.", score: 0, feedback: "Impressive data logistics. Healthy margins, minimal errors, and supreme business efficiency." }
    ]
  },
  {
    id: "q4",
    text: "How clear is your management overview on real-time sales and performance metrics?",
    options: [
      { text: "Unclear or estimated; we only deduce real figures at the close of months or quarters.", score: 35, feedback: "Navigating your business blindfolded. It prevents prompt marketing corrections or rapid budget scaling." },
      { text: "We compile logs manually into spreadsheets, an error-prone task taking days of labour.", score: 20, feedback: "Wasted energy on obsolete stats. Metrics are already cold and historic by the time they hit desks." },
      { text: "We check statistics on isolated panels (Marketing separately, Sales separately).", score: 10, feedback: "Fragmented focus. Lacks a single-source overarching line of revenue and operational flow." },
      { text: "One unified display panel (KPI Dashboard) charting live data flows 24/7.", score: 0, feedback: "Precision management. Accurate, data-backed strategic calibrations are easily deployed on demand." }
    ]
  },
  {
    id: "q5",
    text: "Are monthly software subscription (SaaS) fees or client database leak worries an obstacle?",
    options: [
      { text: "We pay bloated seat licenses with persistent fears of customer database leaks on foreign clouds.", score: 30, feedback: "Double threat: rising overheads and weak sovereignty. Self-hosted database engines are custom tailored to solve this." },
      { text: "Cost is ok, but we don't own the codebase or have easy on-demand local copies of databases.", score: 15, feedback: "Vendor lock-in susceptibility. Private server deployments secure unlimited data exports and absolute operational freedom." },
      { text: "We exclusively rely on free-tier tools, which severely limits limits, growth, and features.", score: 20, feedback: "Free limits halt expansion. Sovereign open-source tools deployed on cheap cloud servers eliminate all limits." },
      { text: "All databases and automation scripts are self-hosted on custom nodes at minimal flat costs.", score: 0, feedback: "Fascinating security compliance. Minimal overhead with total sovereignty over your corporate future." }
    ]
  }
];

const GENERAL_FAQ_AR = [
  {
    q: "هل خدماتكم تقتصر على تصميم المواقع والصفحات فقط؟",
    a: "إطلاقاً لا. تصميم صفحات الهبوط والمواقع هو مجرد واجهة رقمية أولى للمشروع. نحن نقوم بهيكلة وبناء الأنظمة التشغيلية تحتها بالكامل: من سير عمل المبيعات (CRM)، التحليلات الإدارية، أتمتة التكرار اليومي، ربط وتكامل الأدوات، بالإضافة إلى هندسة الاستضافة الذاتية للشركات الساعية للاستقلالية والخصوصية."
  },
  {
    q: "ما هي كلفة بناء هذه الحلول وتجهيزها؟",
    a: "نحن دقيقون ونعمل بمبدأ البساطة والمنفعة العملية. تكلفتنا مبنية على نطاق المشروع وبدون زيادات تنظيرية أو حشو برمجيات. نقوم بتقديم عرض سعر مسبق وثابت لكل خدمة أو حزمة بعد إجراء التشخيص السريع لتقييم الوضع وتحديد الاحتياج."
  },
  {
    q: "كم يستغرق إطلاق نظام العمل والأتمتة عادة؟",
    a: "في المتوسط، تتراوح مدة التنفيذ للخدمات السريعة بين 3 إلى 7 أيام عمل، وتصل إلى 12 يوم للأنظمة المعقدة أو الاستضافة الذاتية متبوعة بالتدريب والتسليم. نحن نركز على الوصول لنتائج واضحة بأسرع وقت ممكن لمشروعك."
  },
  {
    q: "ما هي الاستضافة الذاتية (Self-Hosting) ولماذا قد أحتاجها؟",
    a: "الاستضافة الذاتية تعني أننا نقوم بتهيئة وتثبيت برمجيات إدارة العمليات والأتمتة وقواعد البيانات على خادم سحابي مستأجر وخاضع لملكية شركتك حصراً (بدلاً من الاشتراك شهرياً بخدمات مغلقة). تمنحك هذه الطريقة سيادة مطلقة على خصوصية بياناتك للعملاء، وحرية تعديل كاملة، مع هبوط ضخم بكلفة الاشتراكات الدورية."
  },
  {
    q: "ماذا يحدث بعد انتهاء التنفيذ وإطلاق الأنظمة؟",
    a: "نحن نسلمك نظاماً يتميز بالثبات والاستقرار والهدوء. نوفر لك شروحات فيديو مبسطة لتدريب فريقك، كما نمنحك دعماً تشغيلياً مجانياً ومراقبة مستمرة لمدة أيام للتأكد من انسياب وحفظ العمليات بلا مشاكل."
  }
];

const GENERAL_FAQ_EN = [
  {
    q: "Are your solutions limited to building landing pages and simple sites?",
    a: "Absolutely not. Websites and landing pages are merely the visual front door. We architect and calibrate the complete system underneath: structured CRM pipelines, clean analytical dashboards, workflow automations, API integrations, and self-hosted open-source software deployments."
  },
  {
    q: "What is the typical cost of setting up these automated systems?",
    a: "We are practical and enforce ultra-lean, reliable setups. Fees are structured explicitly around project scopes with zero complex overhead or unnecessary billable additions. We present a fixed, flat price upfront after a quick diagnostic review."
  },
  {
    q: "How long does a typical migration and automation build take?",
    a: "On average, rapid landing pages and automations take 3 to 7 business days. Complex structures or secure self-hosting parameters take up to 12 business days, followed by structured team walk-throughs and screencast recordings."
  },
  {
    q: "What is self-hosting and why is it beneficial?",
    a: "Self-hosting means deploying software engines (like databases, ERP, or automation tools) on cloud instances completely owned by your enterprise. It gives you 100% security sovereignty, unbound customization control, and cuts software bills of user seats down to a negligible flat rate."
  },
  {
    q: "What support is provided after launch?",
    a: "We transfer robust, peaceful, self-operating setups. We send short, narrated screen recordings to train your team and include a guaranteed grace period of live monitoring and support to verify everything remains stable."
  }
];

export const getServicesData = (lang: "ar" | "en"): ServiceItem[] => {
  return lang === "ar" ? SERVICES_DATA_AR : SERVICES_DATA_EN;
};

export const getUseCasesData = (lang: "ar" | "en"): UseCase[] => {
  return lang === "ar" ? USE_CASES_DATA_AR : USE_CASES_DATA_EN;
};

export const getMethodologySteps = (lang: "ar" | "en") => {
  return lang === "ar" ? METHODOLOGY_STEPS_AR : METHODOLOGY_STEPS_EN;
};

export const getAuditQuestions = (lang: "ar" | "en"): AuditQuestion[] => {
  return lang === "ar" ? INTERACTIVE_AUDIT_QUESTIONS_AR : INTERACTIVE_AUDIT_QUESTIONS_EN;
};

export const getGeneralFaq = (lang: "ar" | "en") => {
  return lang === "ar" ? GENERAL_FAQ_AR : GENERAL_FAQ_EN;
};

// Legacy Exports for safety backward compatibility
export const SERVICES_DATA = SERVICES_DATA_AR;
export const USE_CASES_DATA = USE_CASES_DATA_AR;
export const METHODOLOGY_STEPS = METHODOLOGY_STEPS_AR;
export const INTERACTIVE_AUDIT_QUESTIONS = INTERACTIVE_AUDIT_QUESTIONS_AR;
export const GENERAL_FAQ = GENERAL_FAQ_AR;
