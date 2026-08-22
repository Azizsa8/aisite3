// Real AISERS SYSTEMS content (AR + EN). Third-party app/product/brand names and
// brand-label wording removed per request — replaced with neutral capability language.
// NOTE: values marked /* PLACEHOLDER */ should be swapped for real details.

export const BRAND = "AISERS";
export const CONTACT = {
  phone: "+966 50 315 9115",
  wa: "966503159115",
  email: "hello@aisers.sa",
  cities: { ar: "الرياض · جدة · الدمام", en: "Riyadh · Jeddah · Dammam" },
};

export const NAV = {
  ar: [["services", "استعراض الخدمات"], ["proposal", "طلب عرض مخصص"]],
  en: [["services", "Services"], ["proposal", "Request Proposal"]],
};

export const HERO = {
  kicker: "A SYSTEMS & SOFTWARE HOUSE · RIYADH",
  tagline: {
    ar: "نبني المنظومات البرمجية السيادية، الأتمتة المتقدمة، والمنصات الرقمية التي تقود نمو أعمالكم — مصمّمة للسيطرة والامتلاك الكامل، وتحت علامتكم التجارية.",
    en: "We architect sovereign software engines, mission-critical automations, and enterprise platforms — engineered for total ownership, absolute control, and unstoppable scale.",
  },
  cta: { ar: "استعراض الخدمات", en: "Explore Services" },
};

export const SERVICES_KICKER = { ar: "استعراض الخدمات · ١١ خدمة", en: "Service Catalog · 11 capabilities" };

export const SERVICES = [
  {
    n: "01", en: "WORKFLOWS", icon: "platform",
    title: { ar: "أتمتة سير العمل", en: "Workflow Automation" },
    desc: {
      ar: "نبني أنظمة أتمتة مخصصة لعمليات عملكم اليومية، من الشركات الناشئة إلى المؤسسات الكبرى، لتقليل التدخل اليدوي وتسريع التنفيذ.",
      en: "We engineer bespoke automation workflows for daily operations, eliminating manual friction from startups to enterprises.",
    },
    bullets: {
      ar: ["ربط الأنظمة المؤسسية", "محركات أتمتة متقدمة", "تقليل التكلفة التشغيلية"],
      en: ["Enterprise Systems Integration", "Advanced Automation Engines", "Zero Per-Seat Fees"],
    },
    spec: [["Event Triggers & Webhooks", "ACTIVE"], ["ETL & Transformation Flow", "<10MS"], ["Automated Error Recovery", "SYNCED"]],
  },
  {
    n: "02", en: "AI PLATFORMS", icon: "ai",
    title: { ar: "منصات AI جاهزة، بهويتكم الكاملة", en: "Turnkey AI Platforms" },
    desc: {
      ar: "تختارون منصة ذكاء اصطناعي جاهزة، ترسلون لنا هويتكم البصرية، ونطبّقها عليها بالكامل. بعد ذلك تربطون حساباتكم البنكية وتبدأون باستقبال اشتراكات مستخدميكم مباشرة.",
      en: "Select a turnkey AI workspace, apply your visual identity, connect local merchant accounts, and monetize subscriptions immediately.",
    },
    bullets: {
      ar: ["نماذج ذكاء اصطناعي محلية 100%", "بوابات دفع محلية", "بحث ذكي في مستندات الشركة"],
      en: ["100% On-Premise Models", "Local Payment Gateways", "Internal Document Intelligence"],
    },
    altCta: { ar: "استعراض 30+ منصة جاهزة للتملك", en: "Explore 30+ Ready AI Platforms" },
    spec: [["Local Inference Engine", "ONLINE"], ["Enterprise Vector Knowledge", "READY"], ["Automated Billing Gateway", "SECURE"]],
  },
  {
    n: "03", en: "ANIMATED WEB", icon: "brand",
    title: { ar: "مواقع متحركة عالية الجودة", en: "High-End Motion Websites" },
    desc: {
      ar: "نصمم وننفّذ مواقع متحركة بالكامل لعلامتكم التجارية بمستوى بصري سينمائي وحركات تفاعلية فريدة تعكس ريادتكم في السوق.",
      en: "We craft immersive, 60fps physics-driven websites that elevate your brand and drastically boost conversion rates.",
    },
    bullets: {
      ar: ["حركات 60fps سينمائية", "محركات حركة ورسوميات متقدمة", "سرعة تحميل قياسية 95+"],
      en: ["60fps Physics Motion", "Advanced Motion & Graphics", "95+ Performance Score"],
    },
    spec: [["Physics & Motion Engine", "60 FPS"], ["Micro-Interactions Pipeline", "OPTIMIZED"], ["Performance Score", "98/100"]],
  },
  {
    n: "04", en: "CUSTOM PLATFORMS", icon: "platform",
    title: { ar: "منصات وحلول مخصّصة من الصفر", en: "Custom Platforms & Software" },
    desc: {
      ar: "عندما لا يفي أي منتج جاهز بالغرض، نبني منصتكم أو حلّكم الرقمي المخصص بالكامل من الأساس لمعالجة تعقيدات أعمالكم الفريدة.",
      en: "Full-cycle software engineering designed for high concurrency, rock-solid security, and full intellectual property ownership.",
    },
    bullets: {
      ar: ["معمارية خدمات مصغّرة", "كود مصدري ملك لكم", "أمان مؤسسي متشدد"],
      en: ["Microservices Infrastructure", "100% Owned IP Code", "Hardened Security"],
    },
    spec: [["Distributed Core Backend", "RESILIENT"], ["High-Availability DB Cluster", "99.99%"], ["Automated CI/CD Deployment", "AUTOMATED"]],
  },
  {
    n: "05", en: "BRANDED APPS", icon: "brand",
    title: { ar: "أنظمة جاهزة بهويتكم — إطلاق مباشر وربحية كاملة", en: "Branded Turnkey Solutions" },
    desc: {
      ar: "نقوم بتهيئة منصات وتطبيقات سحابية متقدمة وتطبيق هويتكم البصرية عليها بالكامل — الشعار، الألوان، النطاق — لتطرحونها كمنتجكم الحصري وتحتفظون بـ 100% من الإيرادات والاشتراكات.",
      en: "Repackage world-class platforms into your exclusive branded product. Keep 100% of recurring subscriber revenues.",
    },
    bullets: {
      ar: ["إطلاق فوري بهويتكم", "تطبيقات سطح مكتب وجوال", "100% إيرادات لكم"],
      en: ["Live in 14 Days", "Desktop & Mobile Apps", "100% Revenue Kept"],
    },
    spec: [["Brand Identity Engine", "LOCKED"], ["Multi-Tenant Isolation Layer", "ACTIVE"], ["Branded Client Apps (Mobile & Desktop)", "DEPLOYED"]],
  },
  {
    n: "06", en: "ONLINE STORES", icon: "platform",
    title: { ar: "متاجر إلكترونية مبنية خصيصًا لكم", en: "Bespoke E-Commerce Stores" },
    desc: {
      ar: "نبني متجركم الإلكتروني من الصفر بالشكل والتجربة التي تناسب علامتكم، بدل الاعتماد على قالب جاهز ومحدود يضعف تميزكم التجاري.",
      en: "Custom e-commerce platforms engineered for extreme responsiveness, instant local checkout, and warehouse inventory integration.",
    },
    bullets: {
      ar: ["دفع فوري سريع", "ربط شركات الشحن والمستودعات", "تجربة جوال فائقة السلاسة"],
      en: ["Instant 1-Click Checkout", "Warehouse & Courier Sync", "Sub-Second Mobile UX"],
    },
    spec: [["Headless Commerce Core", "FAST"], ["Omnichannel Payment Link", "ENABLED"], ["Real-time Warehouse Sync", "LIVE"]],
  },
  {
    n: "07", en: "STORE AUTOMATION", icon: "ai",
    title: { ar: "أتمتة العمليات داخل متجركم", en: "E-Commerce Operations Automation" },
    desc: {
      ar: "من تحديث المخزون إلى معالجة الطلبات والتواصل مع العملاء، نؤتمت العمليات المتكررة داخل متجركم القائم لتقليص الأخطاء وزيادة الإنتاجية والربحية.",
      en: "Automate stock synchronization across physical branches, auto-dispatch tax invoices, and trigger instant order-tracking notifications.",
    },
    bullets: {
      ar: ["مزامنة المخزون لحظياً", "الفوترة الإلكترونية الضريبية آلياً", "إشعارات تتبع الشحنات الفورية"],
      en: ["Realtime Multi-Branch Sync", "Automated Tax E-Invoicing", "Instant Order-Tracking Notifications"],
    },
    spec: [["Multi-Branch Stock Sync", "SYNCED"], ["Auto Tax E-Invoicing", "VERIFIED"], ["Abandoned Cart Recovery", "+24% ROI"]],
  },
  {
    n: "08", en: "SOCIAL MARKETING", icon: "brand",
    title: { ar: "تسويق اجتماعي يعمل بدون تدخل يومي", en: "Automated Social & Growth Marketing" },
    desc: {
      ar: "ننشئ أنظمة تؤتمت جدولة المحتوى، النشر، والتفاعل عبر منصاتكم الاجتماعية لتعزيز حضور علامتكم التجارية ونموها المستمر.",
      en: "End-to-end automated social marketing engines handling multi-network publishing, auto-replies, and lead qualification.",
    },
    bullets: {
      ar: ["نشر متعدد القنوات", "ردود آلية على الرسائل", "تقارير أداء دورية"],
      en: ["Multi-Network Dispatch", "Auto-DM Lead Qualification", "Attribution Reports"],
    },
    spec: [["Multi-Platform Dispatcher", "SCHEDULED"], ["Automated Lead Qualification", "RUNNING"], ["Growth Sentiment Tracking", "ACTIVE"]],
  },
  {
    n: "09", en: "MESSAGING", icon: "ai",
    title: { ar: "قنوات المراسلة كأداة عمل متكاملة", en: "Business Messaging Infrastructure" },
    desc: {
      ar: "نربط قنوات المراسلة بالكامل بأنظمتكم — ردود تلقائية ذكية، طلبات مباشرة، إشعارات فورية، ودعم عملاء — بأتمتة كاملة من طرف إلى طرف.",
      en: "Transform business messaging into an enterprise sales and support engine — dialect-aware bots, direct ordering, instant notifications and shared inboxes.",
    },
    bullets: {
      ar: ["واجهات مراسلة رسمية", "مساعد ذكي باللهجة المحلية", "صندوق وارد مشترك للفريق"],
      en: ["Official Messaging API", "Dialect-Aware AI Assistant", "Multi-Agent Inbox"],
    },
    spec: [["Official Messaging Webhook", "CONNECTED"], ["Dialect NLP Matcher", "TRAINED"], ["Instant Contact Sync", "SYNCED"]],
  },
  {
    n: "10", en: "DASHBOARDS", icon: "platform",
    title: { ar: "لوحات تحكم وأنظمة تتبع مخصصة", en: "Custom Dashboards & BI" },
    desc: {
      ar: "نبني لوحات تحكم وأنظمة تتبع مصمّمة خصيصًا لمقاييسكم وعملياتكم، لا مقاييس أحد آخر، لتمكين متخذي القرار برؤية لحظية حية.",
      en: "Consolidate scattered company databases into high-speed, live executive dashboards with smart threshold alerts.",
    },
    bullets: {
      ar: ["بيانات لحظية Real-time", "تنبيهات فورية عند الانحراف", "عزل الصلاحيات RBAC"],
      en: ["Streaming Realtime BI", "Anomaly Threshold Alerts", "Granular RBAC"],
    },
    spec: [["Live Data Ingestion Stream", "STREAMING"], ["Executive KPI Radar", "ACCURATE"], ["PDF/Excel Auto Reports", "SCHEDULED"]],
  },
  {
    n: "11", en: "CONSULTING", icon: "sovereign",
    title: { ar: "استشارات في الأعمال والتقنية", en: "Strategic Tech Consulting" },
    desc: {
      ar: "نجلس معكم لتحليل عملياتكم الحالية، ونوصي بالمسار الأنسب: أتمتة، منصة جاهزة، حل مخصص، أو نظام بهويتكم بأعلى عائد استثماري.",
      en: "Deep architectural audits, TCO analysis, and vendor-neutral roadmaps ensuring your software assets generate maximum value.",
    },
    bullets: {
      ar: ["تحليل التكلفة الإجمالية", "ضمان الامتثال لأنظمة حماية البيانات", "تصميم خارطة التحول الرقمي"],
      en: ["Total Cost Analysis", "Data-Protection Compliance", "5-Year Tech Roadmap"],
    },
    spec: [["Architecture Audit Protocol", "AUDITED"], ["Data-Protection Compliance", "COMPLIANT"], ["Digital Transformation Map", "READY"]],
  },
];

export const SVC_LINKS = {
  detail: { ar: "تفاصيل الخدمة وطلب العرض", en: "Deep-Dive & Request Quote" },
  quick: { ar: "طلب فوري لهذه الخدمة", en: "Quick Quote for this Service" },
  residency: "KSA RESIDENCY",
  specTitle: "ARCHITECTURE SPEC",
  footer: [["LATENCY", "<14MS"], ["ENCRYPTION", "AES-256"]],
};

export const FORM = {
  kicker: "TAILORED PROPOSAL",
  title: { ar: "طلب عرض سعر مباشر ومخصص", en: "Instant Tailored Proposal Request" },
  intro: {
    ar: "حددوا الخدمات التي ترغبون في إدراجها ضمن العرض، واملأوا بيانات التواصل لإرسال الطلب مباشرة إلى فريق العمل.",
    en: "Configure your service bundle, enter your requirements, and submit to send your request directly to our team.",
  },
  fields: {
    name: { ar: "الاسم الكامل", en: "Full Name", req: true },
    org: { ar: "اسم المنشأة / الجهة", en: "Company / Organization", req: true },
    phone: { ar: "رقم الجوال", en: "Mobile Number", req: true },
    email: { ar: "البريد الإلكتروني للعمل", en: "Business Email", req: false },
    details: { ar: "تفاصيل الطلب والاحتياجات الخاصة", en: "Project Scope & Custom Requirements", req: true },
  },
  selectLabel: { ar: "حددوا الخدمات الإضافية التي تودون ضمّها للعرض:", en: "Select additional capabilities to include in this proposal:" },
  counter: { ar: (n) => `${n} خدمات إضافية مختارة`, en: (n) => `${n} capabilities selected` },
  submit: { ar: "إرسال الطلب", en: "Send Request" },
  sending: { ar: "جارٍ تحويلكم…", en: "Redirecting…" },
};
