// Real AISERS SYSTEMS content, captured verbatim (AR + EN) from aisers.net.
// Structure: 11 services, each with its own detail sub-page, + proposal form.

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
      ar: ["ربط أنظمة CRM & ERP", "محركات n8n / Temporal", "تقليل التكلفة التشغيلية"],
      en: ["CRM & ERP Integration", "Self-Hosted n8n / Temporal", "Zero Per-Seat Fees"],
    },
    spec: [["Event Triggers & Webhooks", "ACTIVE"], ["ETL & Transformation Flow", "<10MS"], ["Automated Error Recovery", "SYNCED"]],
  },
  {
    n: "02", en: "AI PLATFORMS", icon: "ai",
    title: { ar: "منصات AI جاهزة، بهويتكم الكاملة", en: "Turnkey White-Label AI Platforms" },
    desc: {
      ar: "تختارون منصة ذكاء اصطناعي جاهزة، ترسلون لنا هويتكم البصرية، ونطبّقها عليها بالكامل. بعد ذلك تربطون حساباتكم البنكية وتبدأون باستقبال اشتراكات مستخدميكم مباشرة.",
      en: "Select a turnkey AI workspace, apply your visual identity, connect local merchant accounts, and monetize subscriptions immediately.",
    },
    bullets: {
      ar: ["نماذج محلية 100%", "بوابات دفع مدى وأبل باي", "RAG على مستندات الشركة"],
      en: ["100% On-Premise LLMs", "Mada & Apple Pay", "Internal Docs RAG"],
    },
    altCta: { ar: "استعراض 30+ منصة جاهزة للتملك", en: "Explore 30+ Ready AI Platforms" },
    spec: [["Local LLM Inference Engine", "ONLINE"], ["Enterprise Vector Knowledge", "READY"], ["Automated Billing Gateway", "SECURE"]],
  },
  {
    n: "03", en: "ANIMATED WEB", icon: "whitelabel",
    title: { ar: "مواقع متحركة عالية الجودة", en: "High-End Motion Websites" },
    desc: {
      ar: "نصمم وننفّذ مواقع متحركة بالكامل لعلامتكم التجارية بمستوى بصري سينمائي وحركات تفاعلية فريدة تعكس ريادتكم في السوق.",
      en: "We craft immersive, 60fps physics-driven websites that elevate your brand and drastically boost conversion rates.",
    },
    bullets: {
      ar: ["حركات 60fps سينمائية", "Anime.js & WebGL", "سرعة تحميل قياسية 95+"],
      en: ["60fps Physics Motion", "Anime.js & WebGL", "95+ Lighthouse Score"],
    },
    spec: [["Physics & Motion Engine", "60 FPS"], ["Micro-Interactions Pipeline", "OPTIMIZED"], ["Lighthouse Performance Score", "98/100"]],
  },
  {
    n: "04", en: "CUSTOM PLATFORMS", icon: "platform",
    title: { ar: "منصات وحلول مخصّصة من الصفر", en: "Custom Platforms & Software" },
    desc: {
      ar: "عندما لا يفي أي منتج جاهز بالغرض، نبني منصتكم أو حلّكم الرقمي المخصص بالكامل من الأساس لمعالجة تعقيدات أعمالكم الفريدة.",
      en: "Full-cycle software engineering designed for high concurrency, rock-solid security, and full intellectual property ownership.",
    },
    bullets: {
      ar: ["معمارية Microservices", "كود مصدري ملك لكم", "أمان مؤسسي متشدد"],
      en: ["Microservices Infra", "100% Owned IP Code", "Hardened Security"],
    },
    spec: [["Distributed Core Backend", "RESILIENT"], ["High-Availability DB Cluster", "99.99%"], ["Automated CI/CD Deployment", "AUTOMATED"]],
  },
  {
    n: "05", en: "BRANDED APPS", icon: "whitelabel",
    title: { ar: "أنظمة جاهزة بهويتكم — إطلاق مباشر وربحية كاملة", en: "White Label & Branded SaaS Solutions" },
    desc: {
      ar: "نقوم بتهيئة منصات وتطبيقات سحابية متقدمة وتطبيق هويتكم البصرية عليها بالكامل — الشعار، الألوان، النطاق — لتطرحونها كمنتجكم الحصري وتحتفظون بـ 100% من الإيرادات والاشتراكات.",
      en: "Repackage world-class open-source platforms into your exclusive branded product. Keep 100% of recurring subscriber revenues.",
    },
    bullets: {
      ar: ["إطلاق فوري بهويتكم", "تطبيقات سطح مكتب وجوال", "100% إيرادات لكم"],
      en: ["Live in 14 Days", "Desktop & Mobile Apps", "100% Revenue Kept"],
    },
    spec: [["White-Label Brand Engine", "LOCKED"], ["Multi-Tenant Isolation Layer", "ACTIVE"], ["Branded Client Apps (iOS/Android)", "DEPLOYED"]],
  },
  {
    n: "06", en: "ONLINE STORES", icon: "platform",
    title: { ar: "متاجر إلكترونية مبنية خصيصًا لكم", en: "Bespoke E-Commerce Stores" },
    desc: {
      ar: "نبني متجركم الإلكتروني من الصفر بالشكل والتجربة التي تناسب علامتكم، بدل الاعتماد على قالب جاهز ومحدود يضعف تميزكم التجاري.",
      en: "Custom e-commerce platforms engineered for extreme responsiveness, instant local checkout, and ERP inventory integration.",
    },
    bullets: {
      ar: ["دفع فوري سريع", "ربط شركات الشحن والمستودعات", "تجربة جوال فائقة السلاسة"],
      en: ["Instant 1-Click Checkout", "Warehouse & Courier Sync", "Sub-Second Mobile UX"],
    },
    spec: [["Headless Commerce Core", "FAST"], ["Omnichannel Payment Link", "MADA/APPLE"], ["Real-time Warehouse Sync", "LIVE"]],
  },
  {
    n: "07", en: "STORE AUTOMATION", icon: "ai",
    title: { ar: "أتمتة العمليات داخل متجركم", en: "E-Commerce Operations Automation" },
    desc: {
      ar: "من تحديث المخزون إلى معالجة الطلبات والتواصل مع العملاء، نؤتمت العمليات المتكررة داخل متجركم القائم لتقليص الأخطاء وزيادة الإنتاجية والربحية.",
      en: "Automate stock synchronization across physical branches, auto-dispatch ZATCA tax invoices, and trigger WhatsApp order tracking.",
    },
    bullets: {
      ar: ["مزامنة المخزون لحظياً", "فواتير هيئة الزكاة آلياً", "إشعارات تتبع الشحنات بالواتساب"],
      en: ["Realtime Multi-Branch Sync", "Automated ZATCA Invoicing", "WhatsApp Tracking Bots"],
    },
    spec: [["Multi-Branch Stock Sync", "SYNCED"], ["Auto ZATCA E-Invoicing", "VERIFIED"], ["Abandoned Cart Recovery", "+24% ROI"]],
  },
  {
    n: "08", en: "SOCIAL MARKETING", icon: "whitelabel",
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
    n: "09", en: "WHATSAPP", icon: "ai",
    title: { ar: "واتساب كقناة عمل متكاملة", en: "WhatsApp Business Infrastructure" },
    desc: {
      ar: "نربط واتساب بالكامل بأنظمتكم — ردود تلقائية ذكية، طلبات مباشرة، إشعارات فورية، ودعم عملاء — بأتمتة كاملة من طرف إلى طرف.",
      en: "Transform WhatsApp into an enterprise sales and support machine with Meta Cloud API, dialect NLP bots, and shared inboxes.",
    },
    bullets: {
      ar: ["WhatsApp Business API رسمي", "شاتبوت ذكي باللهجة المحلية", "صندوق وارد مشترك للفريق"],
      en: ["Official Cloud API", "Dialect-Aware AI Bots", "Multi-Agent Inbox"],
    },
    spec: [["Official Cloud API Webhook", "CONNECTED"], ["Dialect NLP Matcher", "TRAINED"], ["CRM Instant Contact Sync", "SYNCED"]],
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
      ar: "نجلس معكم لتحليل عملياتكم الحالية، ونوصي بالمسار الأنسب: أتمتة، منصة جاهزة، علامة بيضاء، أو حلّ مخصص بأعلى عائد استثماري.",
      en: "Deep architectural audits, TCO analysis, and vendor-neutral roadmaps ensuring your software assets generate maximum value.",
    },
    bullets: {
      ar: ["تحليل التكلفة TCO", "ضمان الامتثال لسدايا", "تصميم خارطة التحول الرقمي"],
      en: ["TCO Financial Feasibility", "SDAIA / PDPL Mandates", "5-Year Tech Roadmap"],
    },
    spec: [["Architecture Audit Protocol", "AUDITED"], ["SDAIA / PDPL Compliance", "COMPLIANT"], ["Digital Transformation Map", "READY"]],
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
    phone: { ar: "رقم الجوال / الواتساب", en: "Mobile / WhatsApp Number", req: true },
    email: { ar: "البريد الإلكتروني للعمل", en: "Business Email", req: false },
    details: { ar: "تفاصيل الطلب والاحتياجات الخاصة", en: "Project Scope & Custom Requirements", req: true },
  },
  selectLabel: { ar: "حددوا الخدمات الإضافية التي تودون ضمّها للعرض:", en: "Select additional capabilities to include in this proposal:" },
  counter: { ar: (n) => `${n} خدمات إضافية مختارة`, en: (n) => `${n} capabilities selected` },
  submit: { ar: "إرسال الطلب", en: "Send Request" },
  sending: { ar: "جاري تحويلكم إلى الواتساب…", en: "Redirecting to WhatsApp…" },
};
