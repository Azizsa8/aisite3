// Real AISERS SYSTEMS content (AR + EN). Third-party app/product/brand names and
// brand-label wording removed per request — replaced with neutral capability language.
// NOTE: values marked /* PLACEHOLDER */ should be swapped for real details.

export const BRAND = "AISERS";
export const CONTACT = {
  phone: "+966 50 869 1529",
  wa: "966508691529",
  email: "hello@aisers.sa",
  cities: { ar: "الرياض · جدة · الدمام", en: "Riyadh · Jeddah · Dammam" },
};

export const NAV = {
  ar: [["services", "استعراض الخدمات"], ["proposal", "طلب عرض مخصص"]],
  en: [["services", "Services"], ["proposal", "Request Proposal"]],
};

export const PORTFOLIO_NAV = { ar: "أعمالنا", en: "Portfolio" };

export const HERO = {
  kicker: "A SYSTEMS & SOFTWARE HOUSE · RIYADH",
  tagline: {
    ar: "نبني أنظمة برمجية سيادية، وحلول أتمتة، ومنصات رقمية تملكونها بالكامل وتُدار تحت علامتكم التجارية.",
    en: "We build sovereign software, automation, and platforms you own outright and run under your own brand.",
  },
  cta: { ar: "استعراض الخدمات", en: "Explore Services" },
};

export const SERVICES_KICKER = { ar: "استعراض الخدمات · ١١ خدمة", en: "Service Catalog · 11 capabilities" };

// ---- Proof strip: real, verifiable claims only — no fabricated numbers. ----
export const PROOF = {
  kicker: { ar: "لماذا أيسرز", en: "Why AISERS" },
  stats: [
    {
      value: 11,
      suffix: "",
      label: { ar: "خدمة تقنية متكاملة", en: "Integrated service lines" },
      note: { ar: "من الأتمتة إلى الاستشارات، تحت سقف واحد", en: "From automation to consulting, under one roof" },
    },
    {
      value: 100,
      suffix: "%",
      label: { ar: "سيادة كاملة على بياناتكم", en: "Full data sovereignty" },
      note: { ar: "بياناتكم تبقى داخل المملكة دائمًا", en: "Your data stays in the Kingdom — always" },
    },
  ],
  ctaLabel: { ar: "استعرضوا أعمالنا", en: "See Our Work" },
};

export const SERVICES = [
  {
    n: "01", en: "WORKFLOWS", slug: "workflow-automation", icon: "platform",
    title: { ar: "أتمتة سير العمل", en: "Workflow Automation" },
    desc: {
      ar: "نبني أنظمة أتمتة مخصصة لعملياتكم اليومية تقلل التدخل اليدوي وتُسرّع التنفيذ.",
      en: "We build automation workflows for daily operations that cut manual work and speed up execution.",
    },
    bullets: {
      ar: ["ربط الأنظمة المؤسسية", "محركات أتمتة متقدمة", "تقليل التكلفة التشغيلية"],
      en: ["Enterprise systems integration", "Advanced automation engines", "Zero per-seat fees"],
    },
    spec: [["Event triggers & webhooks", "ACTIVE"], ["ETL & transformation flow", "<10MS"], ["Automated error recovery", "SYNCED"]],
  },
  {
    n: "02", en: "AI PLATFORMS", slug: "ai-platforms", icon: "ai",
    title: { ar: "منصات AI جاهزة، بهويتكم الكاملة", en: "Turnkey AI Platforms" },
    desc: {
      ar: "تختارون منصة ذكاء اصطناعي جاهزة، ترسلون لنا هويتكم البصرية، ونطبّقها عليها بالكامل. بعد ذلك تربطون حساباتكم البنكية وتبدأون باستقبال اشتراكات مستخدميكم مباشرة.",
      en: "Pick a ready AI workspace, apply your identity, connect local merchant accounts, and start collecting subscription payments.",
    },
    bullets: {
      ar: ["نماذج ذكاء اصطناعي محلية 100%", "بوابات دفع محلية", "بحث ذكي في مستندات الشركة"],
      en: ["100% on-premise models", "Local payment gateways", "Internal document intelligence"],
    },
    altCta: { ar: "استعراض 30+ منصة جاهزة للتملك", en: "Explore 30+ Ready AI Platforms" },
    spec: [["Local inference engine", "ONLINE"], ["Enterprise vector knowledge", "READY"], ["Automated billing gateway", "SECURE"]],
  },
  {
    n: "03", en: "ANIMATED WEB", slug: "animated-web", icon: "brand",
    title: { ar: "مواقع متحركة عالية الجودة", en: "High-End Motion Websites" },
    desc: {
      ar: "نصمم ونطوّر مواقع متحركة كاملة لعلامتكم التجارية، بحركات وتفاعلات مصممة خصيصًا لهويتكم.",
      en: "We build 60fps, physics-driven websites with custom motion and interactions for your brand.",
    },
    bullets: {
      ar: ["حركات 60fps سينمائية", "محركات حركة ورسوميات متقدمة", "سرعة تحميل قياسية 95+"],
      en: ["60fps physics motion", "Advanced motion & graphics", "95+ performance score"],
    },
    spec: [["Physics & motion engine", "60 FPS"], ["Micro-interactions pipeline", "OPTIMIZED"], ["Performance score", "98/100"]],
  },
  {
    n: "04", en: "CUSTOM PLATFORMS", slug: "custom-platforms", icon: "platform",
    title: { ar: "منصات وحلول مخصّصة من الصفر", en: "Custom Platforms & Software" },
    desc: {
      ar: "عندما لا يناسب أي منتج جاهز احتياجكم، نبني منصتكم أو حلّكم الرقمي من الصفر لمعالجة تعقيدات عملكم الخاصة.",
      en: "When no off-the-shelf product fits, we build your platform from the ground up, engineered for high concurrency, strong security, and full IP ownership.",
    },
    bullets: {
      ar: ["معمارية خدمات مصغّرة", "كود مصدري ملك لكم", "أمان مؤسسي متشدد"],
      en: ["Microservices infrastructure", "100% owned IP code", "Hardened security"],
    },
    spec: [["Distributed core backend", "RESILIENT"], ["High-availability DB cluster", "99.99%"], ["Automated CI/CD deployment", "AUTOMATED"]],
  },
  {
    n: "05", en: "BRANDED APPS", slug: "branded-apps", icon: "brand",
    title: { ar: "أنظمة جاهزة بهويتكم — إطلاق مباشر وربحية كاملة", en: "Branded Turnkey Solutions" },
    desc: {
      ar: "نُجهّز منصات وتطبيقات سحابية ونطبّق هويتكم البصرية عليها بالكامل: الشعار، الألوان، والنطاق. تطرحونها كمنتجكم الخاص وتحتفظون بـ 100% من الإيرادات والاشتراكات.",
      en: "We set up cloud platforms and apps under your full visual identity: logo, colors, and domain. You launch it as your own product and keep 100% of subscription revenue.",
    },
    bullets: {
      ar: ["إطلاق فوري بهويتكم", "تطبيقات سطح مكتب وجوال", "100% إيرادات لكم"],
      en: ["Live in 14 days", "Desktop & mobile apps", "100% revenue kept"],
    },
    spec: [["Brand identity engine", "LOCKED"], ["Multi-tenant isolation layer", "ACTIVE"], ["Branded client apps (mobile & desktop)", "DEPLOYED"]],
  },
  {
    n: "06", en: "ONLINE STORES", slug: "online-stores", icon: "platform",
    title: { ar: "متاجر إلكترونية مبنية خصيصًا لكم", en: "Bespoke E-Commerce Stores" },
    desc: {
      ar: "نبني متجركم الإلكتروني من الصفر بالشكل والتجربة التي تناسب علامتكم، بدل قالب جاهز ومحدود يحدّ من هويتكم.",
      en: "We build your store from the ground up instead of relying on a limited template, with fast checkout and warehouse inventory integration.",
    },
    bullets: {
      ar: ["دفع فوري سريع", "ربط شركات الشحن والمستودعات", "تجربة جوال فائقة السلاسة"],
      en: ["Instant 1-click checkout", "Warehouse & courier sync", "Sub-second mobile UX"],
    },
    spec: [["Headless commerce core", "FAST"], ["Omnichannel payment link", "ENABLED"], ["Real-time warehouse sync", "LIVE"]],
  },
  {
    n: "07", en: "STORE AUTOMATION", slug: "store-automation", icon: "ai",
    title: { ar: "أتمتة العمليات داخل متجركم", en: "E-Commerce Operations Automation" },
    desc: {
      ar: "نؤتمت العمليات المتكررة في متجركم القائم: تحديث المخزون، ومعالجة الطلبات، والتواصل مع العملاء، لتقليل الأخطاء وزيادة الكفاءة.",
      en: "We automate the repeat work in your existing store: syncing stock across branches, sending tax invoices, and triggering order-tracking notifications.",
    },
    bullets: {
      ar: ["مزامنة المخزون لحظياً", "الفوترة الإلكترونية الضريبية آلياً", "إشعارات تتبع الشحنات الفورية"],
      en: ["Realtime multi-branch sync", "Automated tax e-invoicing", "Instant order-tracking notifications"],
    },
    spec: [["Multi-branch stock sync", "SYNCED"], ["Auto tax e-invoicing", "VERIFIED"], ["Abandoned cart recovery", "+24% ROI"]],
  },
  {
    n: "08", en: "SOCIAL MARKETING", slug: "social-marketing", icon: "brand",
    title: { ar: "تسويق اجتماعي يعمل بدون تدخل يومي", en: "Automated Social & Growth Marketing" },
    desc: {
      ar: "ننشئ أنظمة تؤتمت جدولة المحتوى والنشر والتفاعل عبر منصاتكم الاجتماعية.",
      en: "We build automated systems that handle content scheduling, multi-network publishing, and lead qualification for your social channels.",
    },
    bullets: {
      ar: ["نشر متعدد القنوات", "ردود آلية على الرسائل", "تقارير أداء دورية"],
      en: ["Multi-network dispatch", "Auto-DM lead qualification", "Attribution reports"],
    },
    spec: [["Multi-platform dispatcher", "SCHEDULED"], ["Automated lead qualification", "RUNNING"], ["Growth sentiment tracking", "ACTIVE"]],
  },
  {
    n: "09", en: "WHATSAPP", slug: "whatsapp", icon: "ai",
    title: { ar: "واتساب كقناة عمل متكاملة", en: "WhatsApp Business Infrastructure" },
    desc: {
      ar: "نربط واتساب بالكامل بأنظمتكم: ردود تلقائية، طلبات مباشرة، إشعارات فورية، ودعم عملاء، بأتمتة كاملة.",
      en: "We connect WhatsApp to your systems for sales and support: official cloud APIs, dialect-aware bots, direct ordering, and shared inboxes.",
    },
    bullets: {
      ar: ["WhatsApp Business API رسمي", "مساعد ذكي باللهجة المحلية", "صندوق وارد مشترك للفريق"],
      en: ["Official WhatsApp Business API", "Dialect-aware AI assistant", "Multi-agent inbox"],
    },
    spec: [["Official cloud API webhook", "CONNECTED"], ["Dialect NLP matcher", "TRAINED"], ["Instant contact sync", "SYNCED"]],
  },
  {
    n: "10", en: "DASHBOARDS", slug: "dashboards", icon: "platform",
    title: { ar: "لوحات تحكم وأنظمة تتبع مخصصة", en: "Custom Dashboards & BI" },
    desc: {
      ar: "نبني لوحات تحكم وأنظمة تتبع مصمّمة لمقاييسكم وعملياتكم أنتم، لا مقاييس عامة، لتمنح متخذي القرار رؤية لحظية.",
      en: "We bring your company data together into live dashboards with threshold alerts, built for decision-makers.",
    },
    bullets: {
      ar: ["بيانات لحظية Real-time", "تنبيهات فورية عند الانحراف", "عزل الصلاحيات RBAC"],
      en: ["Streaming realtime BI", "Anomaly threshold alerts", "Granular RBAC"],
    },
    spec: [["Live data ingestion stream", "STREAMING"], ["Executive KPI radar", "ACCURATE"], ["PDF/Excel auto reports", "SCHEDULED"]],
  },
  {
    n: "11", en: "CONSULTING", slug: "consulting", icon: "sovereign",
    title: { ar: "استشارات في الأعمال والتقنية", en: "Strategic Tech Consulting" },
    desc: {
      ar: "نراجع معكم عملياتكم الحالية، ونوصي بالمسار الأنسب: أتمتة، منصة جاهزة، حل مخصص، أو نظام بهويتكم.",
      en: "We audit your architecture, analyze total cost of ownership, and build a vendor-neutral roadmap for your software investments.",
    },
    bullets: {
      ar: ["تحليل التكلفة الإجمالية", "ضمان الامتثال لأنظمة حماية البيانات", "تصميم خارطة التحول الرقمي"],
      en: ["Total cost analysis", "Data-protection compliance", "5-year tech roadmap"],
    },
    spec: [["Architecture audit protocol", "AUDITED"], ["Data-protection compliance", "COMPLIANT"], ["Digital transformation map", "READY"]],
  },
];

// ---- Portfolio: placeholder entries — swap for the real project list. ----
export const PORTFOLIO_PAGE = {
  kicker: { ar: "أعمالنا · ٨ مشاريع", en: "Our Work · 8 projects" },
  title: { ar: "مشاريع بنيناها لعملائنا", en: "Projects We've Built" },
  intro: {
    ar: "لمحة عن أنظمة ومنصات قمنا بتصميمها وتطويرها. تفاصيل هذه القائمة مؤقتة وسيتم استبدالها بمشاريعنا الفعلية.",
    en: "A look at systems and platforms we've designed and built. This list is a placeholder and will be replaced with our real project roster.",
  },
  placeholderNote: {
    ar: "* عناصر نائبة مؤقتة بانتظار قائمة المشاريع الفعلية.",
    en: "* Placeholder entries, pending the real project list.",
  },
};

export const PORTFOLIO = [
  { n: "01", tag: { ar: "منصة سحابية", en: "Cloud Platform" }, title: { ar: "منصة إدارة عمليات", en: "Ops Management Platform" }, blurb: { ar: "منصة داخلية لتنسيق الفرق والمهام في الوقت الفعلي.", en: "An internal platform coordinating teams and tasks in real time." } },
  { n: "02", tag: { ar: "أتمتة", en: "Automation" }, title: { ar: "نظام أتمتة مخزون", en: "Inventory Automation System" }, blurb: { ar: "أتمتة كاملة لمزامنة المخزون بين عدة فروع.", en: "End-to-end automation syncing stock across multiple branches." } },
  { n: "03", tag: { ar: "تجارة إلكترونية", en: "E-Commerce" }, title: { ar: "متجر إلكتروني مخصص", en: "Bespoke Online Store" }, blurb: { ar: "متجر مبني من الصفر بتجربة دفع سريعة.", en: "A ground-up storefront with a fast, custom checkout flow." } },
  { n: "04", tag: { ar: "واتساب", en: "WhatsApp" }, title: { ar: "بنية واتساب للأعمال", en: "WhatsApp Business Infrastructure" }, blurb: { ar: "ربط كامل لواتساب بأنظمة الطلبات والدعم.", en: "Full WhatsApp integration with ordering and support systems." } },
  { n: "05", tag: { ar: "لوحة تحكم", en: "Dashboard" }, title: { ar: "لوحة تحكم تنفيذية", en: "Executive BI Dashboard" }, blurb: { ar: "رؤية لحظية لمؤشرات الأداء الرئيسية.", en: "Live visibility into key operational metrics." } },
  { n: "06", tag: { ar: "تطبيق بهوية العميل", en: "Branded App" }, title: { ar: "تطبيق جوال بهوية كاملة", en: "Fully Branded Mobile App" }, blurb: { ar: "تطبيق جوال أُطلق بهوية العميل الكاملة خلال أسابيع.", en: "A mobile app launched under the client's full identity in weeks." } },
  { n: "07", tag: { ar: "ذكاء اصطناعي", en: "AI Platform" }, title: { ar: "مساعد ذكاء اصطناعي داخلي", en: "Internal AI Assistant" }, blurb: { ar: "مساعد ذكاء اصطناعي محلي للبحث في مستندات الشركة.", en: "An on-premise AI assistant for internal document search." } },
  { n: "08", tag: { ar: "استشارات", en: "Consulting" }, title: { ar: "خارطة تحول رقمي", en: "Digital Transformation Roadmap" }, blurb: { ar: "خارطة طريق تقنية لمدة خمس سنوات لمؤسسة متوسطة.", en: "A five-year technology roadmap for a mid-size enterprise." } },
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
    name: { ar: "الاسم الكامل", en: "Full Name", req: true, ph: { ar: "مثال: محمد العتيبي", en: "e.g. Mohammed Al-Otaibi" } },
    org: { ar: "اسم المنشأة / الجهة", en: "Company / Organization", req: true, ph: { ar: "اسم شركتكم", en: "Your company name" } },
    phone: { ar: "رقم الجوال", en: "Mobile Number", req: true, ph: { ar: "05XXXXXXXX", en: "+966 5X XXX XXXX" } },
    email: { ar: "البريد الإلكتروني للعمل", en: "Business Email", req: false, ph: { ar: "name@company.com", en: "name@company.com" } },
    details: { ar: "تفاصيل الطلب والاحتياجات الخاصة", en: "Project Scope & Custom Requirements", req: true, ph: { ar: "صف احتياجكم باختصار…", en: "Briefly describe what you need…" } },
  },
  selectLabel: { ar: "حددوا الخدمات الإضافية التي تودون ضمّها للعرض:", en: "Select additional capabilities to include in this proposal:" },
  // Full Arabic plural agreement (0 / 1 / 2 / 3–10 / 11+) + Arabic-Indic digits, matching "١١ خدمة" above.
  counter: {
    ar: (n) => {
      if (n === 0) return "لا خدمات إضافية مختارة";
      if (n === 1) return "خدمة إضافية واحدة مختارة";
      if (n === 2) return "خدمتان إضافيتان مختارتان";
      const digits = toArabicDigits(n);
      if (n >= 3 && n <= 10) return `${digits} خدمات إضافية مختارة`;
      return `${digits} خدمة إضافية مختارة`;
    },
    en: (n) => `${n} ${n === 1 ? "capability" : "capabilities"} selected`,
  },
  submit: { ar: "إرسال الطلب", en: "Send Request" },
  sending: { ar: "جارٍ تحويلكم…", en: "Redirecting…" },
};

export function toArabicDigits(n) {
  const map = ["٠", "١", "٢", "٣", "٤", "٥", "٦", "٧", "٨", "٩"];
  return String(n).replace(/[0-9]/g, (d) => map[d]);
}

// ---- SEO: per-route title/description (used to update document.head on nav) ----
export const SEO = {
  site: { ar: "أيسرز سيستمز", en: "AISERS SYSTEMS" },
  home: {
    title: { ar: "أيسرز سيستمز — أنظمة برمجية سيادية وأتمتة ومنصات رقمية | الرياض", en: "AISERS SYSTEMS — Sovereign Software, Automation & Digital Platforms | Riyadh" },
    desc: {
      ar: "بيت برمجيات سعودي في الرياض يبني أنظمة سيادية وحلول أتمتة ومنصات رقمية تملكونها بالكامل. ١١ خدمة من التأسيس التقني إلى الاستشارات.",
      en: "A Riyadh-based systems & software house building sovereign software, automation and digital platforms you own outright. 11 services from build to consulting.",
    },
  },
  serviceSuffix: { ar: " | أيسرز سيستمز", en: " | AISERS SYSTEMS" },
  portfolio: {
    title: { ar: "أعمالنا | أيسرز سيستمز", en: "Our Work | AISERS SYSTEMS" },
    desc: {
      ar: "لمحة عن أنظمة ومنصات صممناها وطورناها لعملائنا.",
      en: "A look at systems and platforms we've designed and built for our clients.",
    },
  },
  notFound: {
    title: { ar: "الصفحة غير موجودة | أيسرز سيستمز", en: "Page Not Found | AISERS SYSTEMS" },
  },
};

export const MISC = {
  skipLink: { ar: "تخطَّ إلى المحتوى", en: "Skip to content" },
  waFloat: { ar: "تواصل واتساب", en: "Chat on WhatsApp" },
  notFound: {
    code: "404",
    title: { ar: "هذه الصفحة غير موجودة", en: "This page doesn't exist" },
    body: { ar: "قد يكون الرابط قديمًا أو غير صحيح.", en: "The link may be outdated or incorrect." },
    home: { ar: "العودة للرئيسية", en: "Back to home" },
  },
  pricingNote: {
    ar: "السعر النهائي يُحدَّد بعد مراجعة نطاق العمل. اطلبوا عرضًا مخصصًا أدناه.",
    en: "Final pricing is determined after scoping the work. Request a tailored quote below.",
  },
};

export const LEGAL = {
  privacy: {
    slug: "privacy",
    nav: { ar: "سياسة الخصوصية", en: "Privacy Policy" },
    title: { ar: "سياسة الخصوصية", en: "Privacy Policy" },
    updated: { ar: "آخر تحديث: أغسطس 2026", en: "Last updated: August 2026" },
    sections: [
      {
        h: { ar: "المعلومات التي نجمعها", en: "Information we collect" },
        p: {
          ar: "عند تعبئة نموذج طلب العرض، نجمع اسمكم واسم منشأتكم ورقم جوالكم وبريدكم الإلكتروني (إن أدخلتموه) وتفاصيل طلبكم. لا نجمع أي بيانات دون تعبئتكم للنموذج بأنفسكم.",
          en: "When you submit the proposal form, we collect your name, organization, mobile number, email (if provided), and the details of your request. We do not collect any data unless you submit the form yourself.",
        },
      },
      {
        h: { ar: "كيف نستخدم معلوماتكم", en: "How we use your information" },
        p: {
          ar: "نستخدم هذه المعلومات فقط للتواصل معكم بخصوص طلبكم وإعداد عرض السعر المناسب. لا نبيع بياناتكم ولا نشاركها مع أي طرف ثالث لأغراض تسويقية.",
          en: "We use this information only to contact you about your request and prepare a suitable quote. We do not sell your data or share it with third parties for marketing purposes.",
        },
      },
      {
        h: { ar: "استضافة البيانات", en: "Data hosting" },
        p: {
          ar: "بيانات طلبكم تُرسل مباشرة إلى فريقنا عبر واتساب عند إرسال النموذج. لا تُخزَّن بيانات الطلبات على خوادم هذا الموقع.",
          en: "Your request data is sent directly to our team via WhatsApp when you submit the form. Request data is not stored on this website's servers.",
        },
      },
      {
        h: { ar: "تواصلوا معنا", en: "Contact us" },
        p: {
          ar: "لأي استفسار بخصوص خصوصيتكم، راسلونا على hello@aisers.sa.",
          en: "For any privacy questions, reach us at hello@aisers.sa.",
        },
      },
    ],
  },
  terms: {
    slug: "terms",
    nav: { ar: "الشروط والأحكام", en: "Terms of Service" },
    title: { ar: "الشروط والأحكام", en: "Terms of Service" },
    updated: { ar: "آخر تحديث: أغسطس 2026", en: "Last updated: August 2026" },
    sections: [
      {
        h: { ar: "نطاق الخدمات", en: "Scope of services" },
        p: {
          ar: "الخدمات الموضّحة في هذا الموقع وصفٌ عام لقدراتنا. نطاق العمل والأتعاب والجدول الزمني الفعلي لكل مشروع يُحدَّد كتابيًا بعد ورشة تقييم أو استشارة أولية.",
          en: "The services described on this site are a general description of our capabilities. The actual scope, fees, and timeline for any project are defined in writing after an assessment workshop or initial consultation.",
        },
      },
      {
        h: { ar: "طلبات العروض", en: "Proposal requests" },
        p: {
          ar: "إرسال نموذج طلب العرض لا يُنشئ التزامًا تعاقديًا من أي طرف. أي اتفاقية تصبح سارية فقط بعد توقيع الطرفين على عرض أو عقد مكتوب.",
          en: "Submitting the proposal form does not create a contractual obligation for either party. Any agreement takes effect only once both parties sign a written proposal or contract.",
        },
      },
      {
        h: { ar: "الملكية الفكرية", en: "Intellectual property" },
        p: {
          ar: "ما لم يُنص على خلاف ذلك في العقد، تنتقل ملكية الأنظمة والأكواد المخصصة المبنية لكم إليكم عند اكتمال المشروع والسداد الكامل.",
          en: "Unless otherwise stated in the contract, ownership of custom systems and code built for you transfers to you upon project completion and full payment.",
        },
      },
    ],
  },
};
