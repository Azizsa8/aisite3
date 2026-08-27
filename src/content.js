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
    ar: "نبني أنظمة برمجية سيادية، وحلول أتمتة، ومنصات رقمية تملكونها بالكامل وتُدار تحت علامتكم التجارية.",
    en: "We build sovereign software, automation, and platforms you own outright and run under your own brand.",
  },
  cta: { ar: "استعراض الخدمات", en: "Explore Services" },
};

export const SERVICES_KICKER = { ar: "استعراض الخدمات · ١١ خدمة", en: "Service Catalog · 11 capabilities" };

export const SERVICES = [
  {
    n: "01", en: "WORKFLOWS", icon: "platform",
    title: { ar: "أتمتة سير العمل", en: "Workflow Automation" },
    desc: {
      ar: "نبني أنظمة أتمتة مخصصة لعملياتكم اليومية تقلل التدخل اليدوي وتُسرّع التنفيذ.",
      en: "We build automation workflows for daily operations that cut manual work and speed up execution.",
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
      en: "Pick a ready AI workspace, apply your identity, connect local merchant accounts, and start collecting subscription payments.",
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
      ar: "نصمم ونطوّر مواقع متحركة كاملة لعلامتكم التجارية، بحركات وتفاعلات مصممة خصيصًا لهويتكم.",
      en: "We build 60fps, physics-driven websites with custom motion and interactions for your brand.",
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
      ar: "عندما لا يناسب أي منتج جاهز احتياجكم، نبني منصتكم أو حلّكم الرقمي من الصفر لمعالجة تعقيدات عملكم الخاصة.",
      en: "When no off-the-shelf product fits, we build your platform from the ground up, engineered for high concurrency, strong security, and full IP ownership.",
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
      ar: "نُجهّز منصات وتطبيقات سحابية ونطبّق هويتكم البصرية عليها بالكامل: الشعار، الألوان، والنطاق. تطرحونها كمنتجكم الخاص وتحتفظون بـ 100% من الإيرادات والاشتراكات.",
      en: "We set up cloud platforms and apps under your full visual identity: logo, colors, and domain. You launch it as your own product and keep 100% of subscription revenue.",
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
      ar: "نبني متجركم الإلكتروني من الصفر بالشكل والتجربة التي تناسب علامتكم، بدل قالب جاهز ومحدود يحدّ من هويتكم.",
      en: "We build your store from the ground up instead of relying on a limited template, with fast checkout and warehouse inventory integration.",
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
      ar: "نؤتمت العمليات المتكررة في متجركم القائم: تحديث المخزون، ومعالجة الطلبات، والتواصل مع العملاء، لتقليل الأخطاء وزيادة الكفاءة.",
      en: "We automate the repeat work in your existing store: syncing stock across branches, sending tax invoices, and triggering order-tracking notifications.",
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
      ar: "ننشئ أنظمة تؤتمت جدولة المحتوى والنشر والتفاعل عبر منصاتكم الاجتماعية.",
      en: "We build automated systems that handle content scheduling, multi-network publishing, and lead qualification for your social channels.",
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
      ar: "نربط واتساب بالكامل بأنظمتكم: ردود تلقائية، طلبات مباشرة، إشعارات فورية، ودعم عملاء، بأتمتة كاملة.",
      en: "We connect WhatsApp to your systems for sales and support: official cloud APIs, dialect-aware bots, direct ordering, and shared inboxes.",
    },
    bullets: {
      ar: ["WhatsApp Business API رسمي", "مساعد ذكي باللهجة المحلية", "صندوق وارد مشترك للفريق"],
      en: ["Official WhatsApp Business API", "Dialect-Aware AI Assistant", "Multi-Agent Inbox"],
    },
    spec: [["Official Cloud API Webhook", "CONNECTED"], ["Dialect NLP Matcher", "TRAINED"], ["Instant Contact Sync", "SYNCED"]],
  },
  {
    n: "10", en: "DASHBOARDS", icon: "platform",
    title: { ar: "لوحات تحكم وأنظمة تتبع مخصصة", en: "Custom Dashboards & BI" },
    desc: {
      ar: "نبني لوحات تحكم وأنظمة تتبع مصمّمة لمقاييسكم وعملياتكم أنتم، لا مقاييس عامة، لتمنح متخذي القرار رؤية لحظية.",
      en: "We bring your company data together into live dashboards with threshold alerts, built for decision-makers.",
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
      ar: "نراجع معكم عملياتكم الحالية، ونوصي بالمسار الأنسب: أتمتة، منصة جاهزة، حل مخصص، أو نظام بهويتكم.",
      en: "We audit your architecture, analyze total cost of ownership, and build a vendor-neutral roadmap for your software investments.",
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
