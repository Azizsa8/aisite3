import React, { useRef, useEffect, useLayoutEffect, useState, useCallback, lazy, Suspense } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BRAND, CONTACT, NAV, PORTFOLIO_NAV, HERO, PROOF, SERVICES_KICKER, SERVICES, SVC_LINKS, PORTFOLIO_PAGE, PORTFOLIO, FORM, SEO, MISC, LEGAL } from "./content.js";
import Mark, { MARK_PATHS } from "./Mark.jsx";
import LineIcon from "./Icons.jsx";
// Lazy-load the 3D scene: three.js is ~800KB and must never block first paint.
// The preloader animation covers the fetch; reduced-motion visitors never load it.
const Scene3D = lazy(() => import("./Scene3D.jsx"));

gsap.registerPlugin(ScrollTrigger);

const SITE = "https://www.aisers.net";
const prefersReduced = () =>
  typeof window !== "undefined" && window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function primeDraw(root, sel) {
  root.querySelectorAll(sel).forEach((p) => {
    const len = p.getTotalLength();
    p.style.strokeDasharray = len;
    p.style.strokeDashoffset = len;
  });
}

// Pill-badge section kicker: small illuminated chip + label.
function Kick({ children, ...rest }) {
  return (
    <span className="kick" {...rest}>
      <i className="ic" aria-hidden="true">
        <svg viewBox="0 0 24 24" width="10" height="10" fill="currentColor">
          <path d="M12 1.5 14.2 9.8 22.5 12 14.2 14.2 12 22.5 9.8 14.2 1.5 12 9.8 9.8 Z" />
        </svg>
      </i>
      <span>{children}</span>
    </span>
  );
}

// ---- tiny path-based router helpers ----
function slugIndex(slug) {
  return SERVICES.findIndex((s) => s.slug === slug);
}
function pathFor(page, i) {
  if (page === "service") return `/services/${SERVICES[i].slug}`;
  if (page === "legal") return `/${i}`; // i = "privacy" | "terms"
  if (page === "portfolio") return "/portfolio";
  return "/";
}
function routeFromPath(pathname) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return { page: "home", i: 0 };
  if (parts[0] === "services" && parts[1]) {
    const idx = slugIndex(parts[1]);
    if (idx >= 0) return { page: "service", i: idx };
    return { page: "notfound", i: 0 };
  }
  if (parts[0] === "portfolio") return { page: "portfolio", i: 0 };
  if (parts[0] === LEGAL.privacy.slug) return { page: "legal", i: "privacy" };
  if (parts[0] === LEGAL.terms.slug) return { page: "legal", i: "terms" };
  return { page: "notfound", i: 0 };
}

function setMeta(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`) || document.querySelector(`meta[property="${name}"]`);
  if (!el) {
    el = document.createElement("meta");
    if (name.startsWith("og:") || name.startsWith("twitter:")) el.setAttribute("property", name);
    else el.setAttribute("name", name);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}
function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) { el = document.createElement("link"); el.setAttribute("rel", "canonical"); document.head.appendChild(el); }
  el.setAttribute("href", href);
}

export default function App() {
  const [lang, setLangState] = useState(() => {
    try { return localStorage.getItem("aisers_lang") || "ar"; } catch { return "ar"; }
  });
  const [menu, setMenu] = useState(false);
  const [route, setRoute] = useState(() => routeFromPath(window.location.pathname));
  const [selected, setSelected] = useState([]);
  const [flashIdx, setFlashIdx] = useState(null);
  const [booted, setBooted] = useState(false);
  const [activeSvc, setActiveSvc] = useState(0);
  const root = useRef(null);
  const fill = useRef(null);
  const xfade = useRef(null);
  const preRef = useRef(null);
  const sceneProgress = useRef(0); // 0..1 scroll progress feeding the 3D scene

  const isAr = lang === "ar";
  const t = (o) => (o ? o[lang] : "");

  const setLang = useCallback((l) => {
    setLangState(l);
    try { localStorage.setItem("aisers_lang", l); } catch {}
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.documentElement.setAttribute("data-lang", lang);
  }, [lang, isAr]);

  // ---- SEO: title / description / canonical per route + language ----
  useEffect(() => {
    let title, desc;
    if (route.page === "service") {
      const svc = SERVICES[route.i];
      title = t(svc.title) + t(SEO.serviceSuffix);
      desc = t(svc.desc);
    } else if (route.page === "legal") {
      const l = LEGAL[route.i];
      title = t(l.title) + t(SEO.serviceSuffix);
      desc = t(l.title);
    } else if (route.page === "portfolio") {
      title = t(SEO.portfolio.title);
      desc = t(SEO.portfolio.desc);
    } else if (route.page === "notfound") {
      title = t(SEO.notFound.title);
      desc = t(SEO.notFound.title);
    } else {
      title = t(SEO.home.title);
      desc = t(SEO.home.desc);
    }
    document.title = title;
    setMeta("description", desc);
    setMeta("og:title", title);
    setMeta("og:description", desc);
    setMeta("og:locale", isAr ? "ar_SA" : "en_US");
    setMeta("twitter:title", title);
    setMeta("twitter:description", desc);
    setCanonical(SITE + pathFor(route.page, route.i));
  }, [route, lang]);

  // ---- popstate: browser Back/Forward ----
  useEffect(() => {
    const onPop = () => {
      setRoute(routeFromPath(window.location.pathname));
      window.scrollTo(0, 0);
    };
    window.addEventListener("popstate", onPop);
    return () => window.removeEventListener("popstate", onPop);
  }, []);

  // Hide the intro strokes BEFORE first paint so nothing flashes fully-drawn.
  useLayoutEffect(() => {
    if (preRef.current) primeDraw(preRef.current, ".preStroke");
    document.body.style.overflow = "hidden";
  }, []);

  // Preloader: draw the mark, illuminate, hold, then fade to reveal the hero.
  useEffect(() => {
    if (prefersReduced()) { setBooted(true); document.body.style.overflow = ""; return; }
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => { setBooted(true); document.body.style.overflow = ""; },
      });
      tl.to(".preloader .preStroke", { strokeDashoffset: 0, duration: 1.25, stagger: 0.16, ease: "power2.inOut" }, 0.2)
        .to(".pre-mark", { filter: "brightness(1.6)", duration: 0.4, yoyo: true, repeat: 1 }, 1.15)
        .addLabel("reveal", "+=0.45")
        .to(".preloader", { autoAlpha: 0, duration: 0.75, ease: "power2.inOut" }, "reveal")
        .from(".hero-mark", { opacity: 0, duration: 0.8 }, "reveal+=0.15")
        .from(".wordmark", { opacity: 0, y: 14, duration: 0.8 }, "reveal+=0.25")
        .from(".sub", { opacity: 0, duration: 0.8 }, "reveal+=0.35")
        .from("#hero .hero-tag", { opacity: 0, y: 16, duration: 0.7 }, "reveal+=0.45")
        .from("#hero .hero-cta", { opacity: 0, y: 16, duration: 0.7 }, "reveal+=0.55")
        .from(".scrollcue", { opacity: 0, duration: 0.6 }, "reveal+=0.7");
    });
    return () => ctx.revert();
  }, []);

  // Cinematic navigation — full page changes (home <-> service <-> legal).
  const go = useCallback((page, i = 0, scrollTarget = null) => {
    setMenu(false);
    const path = pathFor(page, i);
    const samePath = window.location.pathname === path;

    if (prefersReduced()) {
      if (!samePath) window.history.pushState({}, "", path);
      setRoute({ page, i });
      window.scrollTo(0, 0);
      if (scrollTarget) requestAnimationFrame(() => document.getElementById(scrollTarget)?.scrollIntoView());
      return;
    }

    const el = xfade.current;
    primeDraw(el, ".xpath");
    const tl = gsap.timeline();
    tl.set(el, { yPercent: 100 })
      .to(el, { yPercent: 0, duration: 0.5, ease: "power3.inOut" })
      .to(el.querySelectorAll(".xpath"), { strokeDashoffset: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" }, "-=0.15")
      .add(() => {
        if (!samePath) window.history.pushState({}, "", path);
        setRoute({ page, i });
        window.scrollTo(0, 0);
      })
      .to(el, { yPercent: -100, duration: 0.55, ease: "power3.inOut", delay: 0.15 })
      .add(() => { if (scrollTarget) document.getElementById(scrollTarget)?.scrollIntoView(); })
      .set(el, { yPercent: 100 });
  }, []);

  const toggleSel = (i) => setSelected((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));

  // Quick quote — no cinematic wipe when already on the home scene; just a fast
  // scroll to the form and a brief flash on the chip that was just preselected.
  const quickQuote = useCallback((i) => {
    setSelected((s) => (s.includes(i) ? s : [...s, i]));
    setFlashIdx(i);
    setTimeout(() => setFlashIdx(null), 1700);
    if (route.page !== "home") {
      go("home", 0, null);
      setTimeout(() => {
        document.getElementById("proposal")?.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth", block: "start" });
      }, 1250);
    } else {
      document.getElementById("proposal")?.scrollIntoView({ behavior: prefersReduced() ? "auto" : "smooth", block: "start" });
    }
  }, [route.page, go]);

  // ---- HOME animations ----
  useEffect(() => {
    if (route.page !== "home") return;
    if (prefersReduced()) return; // leave everything statically visible
    const ctx = gsap.context(() => {
      primeDraw(root.current, ".glyph .gdraw");

      gsap.to(fill.current, { width: "100%", ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } });

      // master scroll progress → drives the persistent 3D scene's camera orbit
      sceneProgress.current = 0;
      gsap.to(sceneProgress, { current: 1, ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.5 } });

      gsap.utils.toArray(".glyph").forEach((g) => {
        gsap.to(g.querySelectorAll(".gdraw"), { strokeDashoffset: 0, duration: 1.2, stagger: 0.12, ease: "power2.out",
          scrollTrigger: { trigger: g, start: "top 88%" } });
        gsap.from(g, { opacity: 0, scale: 0.9, duration: 1, ease: "power2.out", scrollTrigger: { trigger: g, start: "top 88%" } });
      });
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.from(el, { y: 40, opacity: 0, duration: 0.9, ease: "power3.out", scrollTrigger: { trigger: el, start: "top 88%" } });
      });
      ScrollTrigger.refresh();
      if (document.fonts && document.fonts.ready) document.fonts.ready.then(() => ScrollTrigger.refresh());
      window.addEventListener("load", () => ScrollTrigger.refresh());
    }, root);
    return () => ctx.revert();
  }, [lang, route.page]);

  // Track which service is centered in the viewport → drives the ambient lighting.
  useEffect(() => {
    if (route.page !== "home") return;
    const steps = [...document.querySelectorAll(".svc-step")];
    if (!steps.length) return;
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => { if (e.isIntersecting) setActiveSvc(Number(e.target.dataset.idx)); });
      },
      { rootMargin: "-45% 0px -45% 0px", threshold: 0 }
    );
    steps.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, [route.page, lang]);

  const waHref = `https://wa.me/${CONTACT.wa}`;
  const telHref = `tel:${CONTACT.phone.replace(/[^\d+]/g, "")}`;
  const mailHref = `mailto:${CONTACT.email}`;

  // Show the floating WhatsApp button only once the visitor has scrolled past
  // the hero — it must never sit on top of the hero's own CTA/scroll-cue,
  // which land at the same screen position on short mobile viewports.
  const [showWa, setShowWa] = useState(false);
  useEffect(() => {
    if (route.page !== "home") { setShowWa(true); return; }
    setShowWa(false);
    const heroEl = document.getElementById("hero");
    if (!heroEl) { setShowWa(true); return; }
    const io = new IntersectionObserver(([entry]) => setShowWa(!entry.isIntersecting), { threshold: 0.15 });
    io.observe(heroEl);
    return () => io.disconnect();
  }, [route.page, booted]);

  return (
    <div ref={root}>
      <a href="#main" className="skip-link">{t(MISC.skipLink)}</a>

      {!booted && (
        <div className="preloader" ref={preRef}>
          <div className="pre-mark"><Mark size={54} stroke={7} glow={0} drawClass="preStroke" /></div>
        </div>
      )}
      <div className="rail"><i ref={fill} /></div>

      <div className="xfade" ref={xfade}>
        <svg width="70" height="350" viewBox="0 0 60 300" fill="none" style={{ overflow: "visible" }}>
          {MARK_PATHS.map((d, i) => (
            <path key={i} className="xpath" d={d} stroke="#fff" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
          ))}
        </svg>
      </div>

      {/* nav */}
      <header className="topbar">
        <button className="bm" onClick={() => go("home")} style={{ background: "none", border: "none", color: "inherit", cursor: "pointer" }}>
          <Mark size={9} stroke={9} glow={0.7} /><b>{BRAND}</b>
        </button>
        <nav className="desknav">
          {NAV[lang].map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={(e) => { if (route.page !== "home") { e.preventDefault(); go("home", 0, id); } }}>{label}</a>
          ))}
          <a href="/portfolio" onClick={(e) => { e.preventDefault(); go("portfolio"); }}>{t(PORTFOLIO_NAV)}</a>
        </nav>
        <div className="rt">
          <button className="lang" onClick={() => setLang(isAr ? "en" : "ar")}>{isAr ? "EN" : "ع"}</button>
          <button className="menu-btn" onClick={() => setMenu(true)} aria-label="menu"><i /><i /><i /></button>
        </div>
      </header>

      <div className={`sheet ${menu ? "open" : ""}`}>
        <button className="close" onClick={() => setMenu(false)}>×</button>
        {NAV[lang].map(([id, label], i) => (
          <a key={id} href={`#${id}`} onClick={(e) => { setMenu(false); if (route.page !== "home") { e.preventDefault(); go("home", 0, id); } }}>
            {label}<span className="n">0{i + 1}</span>
          </a>
        ))}
        <a href="/portfolio" onClick={(e) => { e.preventDefault(); setMenu(false); go("portfolio"); }}>
          {t(PORTFOLIO_NAV)}<span className="n">0{NAV[lang].length + 1}</span>
        </a>
      </div>

      <a className={`wa-float ${showWa ? "show" : ""}`} href={waHref} target="_blank" rel="noopener noreferrer" aria-label={t(MISC.waFloat)}>
        <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.48 2 2 6.48 2 12c0 1.85.5 3.58 1.35 5.07L2 22l5.09-1.32A9.94 9.94 0 0 0 12 22c5.52 0 10-4.48 10-10S17.52 2 12 2Zm0 18a7.9 7.9 0 0 1-4.2-1.22l-.3-.18-3.12.82.84-3.03-.2-.31A7.93 7.93 0 1 1 12 20Zm4.4-5.9c-.24-.12-1.43-.7-1.65-.78-.22-.08-.38-.12-.54.12-.16.24-.62.78-.76.94-.14.16-.28.18-.52.06-.24-.12-1-.37-1.9-1.17-.7-.63-1.18-1.4-1.32-1.64-.14-.24-.02-.37.1-.49.11-.11.24-.28.36-.42.12-.14.16-.24.24-.4.08-.16.04-.3-.02-.42-.06-.12-.54-1.3-.74-1.78-.2-.47-.4-.4-.54-.41h-.46c-.16 0-.42.06-.64.3-.22.24-.84.82-.84 2s.86 2.32.98 2.48c.12.16 1.7 2.6 4.12 3.64.58.25 1.03.4 1.38.51.58.18 1.11.16 1.53.1.47-.07 1.43-.58 1.63-1.15.2-.57.2-1.05.14-1.15-.06-.1-.22-.16-.46-.28Z"/></svg>
        <span>{t(MISC.waFloat)}</span>
      </a>

      <main id="main">
        {route.page === "service" && (
          <ServicePage svc={SERVICES[route.i]} idx={route.i} t={t} isAr={isAr} go={go} onQuick={() => quickQuote(route.i)} />
        )}
        {route.page === "legal" && <LegalPage doc={LEGAL[route.i]} t={t} isAr={isAr} go={go} />}
        {route.page === "portfolio" && <PortfolioPage t={t} isAr={isAr} go={go} />}
        {route.page === "notfound" && <NotFound t={t} isAr={isAr} go={go} />}
        {route.page === "home" && (
          <>
            {/* Persistent 3D sovereign core — fixed behind the whole page.
                Reduced-motion visitors get the static starfield instead. */}
            {prefersReduced()
              ? null
              : <Suspense fallback={null}><Scene3D progress={sceneProgress} active={activeSvc} total={SERVICES.length} /></Suspense>}

            {/* HERO */}
            <section id="hero">
              {prefersReduced() && <div className="hero-stars" aria-hidden="true" />}
              <div className="wrap">
                <div className="hero-mark"><Mark size={44} stroke={7} glow={0.9} /></div>
                <div className="wordmark" dir="ltr">
                  <span className="rule" />
                  <h1 aria-label={`AISERS SYSTEMS — ${t(HERO.tagline)}`}>
                    {"AISERS".split("").map((c, i) => <span key={i} aria-hidden="true">{c}</span>)}
                  </h1>
                  <span className="rule" />
                </div>
                <div className="sub" dir="ltr">SYSTEMS</div>
                <p className="hero-tag">{t(HERO.tagline)}</p>
                <div className="hero-cta">
                  <a className="btn" href="#services">{t(HERO.cta)} <span className="ar">↓</span></a>
                </div>
              </div>
              <div className="scrollcue"><span>{isAr ? "مرّروا" : "SCROLL"}</span><span className="bar" /></div>
            </section>

            {/* PROOF STRIP — real, verifiable stats + gateway to the portfolio */}
            <ProofStrip t={t} isAr={isAr} go={go} />

            {/* SERVICES — scroll-driven scene, lighting changes per active service */}
            <section id="services" className="svc-scene">
              <div className="svc-ambient" aria-hidden="true">
                {/* the 3D scene is the ambient lighting now; the glow div is only
                    needed as a fallback when the canvas isn't mounted */}
                {prefersReduced() && <div className="svc-glow" style={{
                  left: `${50 + Math.cos((activeSvc / SERVICES.length) * Math.PI * 2) * 26}%`,
                  top: `${46 + Math.sin((activeSvc / SERVICES.length) * Math.PI * 2) * 22}%`,
                }} />}
                <div className="svc-ghost">{SERVICES[activeSvc].n}</div>
                <div className="svc-counter mono">{SERVICES[activeSvc].n} <span>/ 11</span></div>
              </div>

              <div className="svc-track">
                <div className="svc-intro wrap"><Kick>{t(SERVICES_KICKER)}</Kick></div>
                {SERVICES.map((s, i) => (
                  <article id={`svc-${i}`} className={`svc-step ${i === activeSvc ? "active" : ""}`} data-idx={i} key={s.n}>
                    <div className="svc-step-in wrap">
                      <div className="svc-meta">
                        <span className="svc-mn">{s.n}</span><span className="svc-mline" /><span className="svc-men">{s.en}</span>
                      </div>
                      <h3>{t(s.title)}</h3>
                      <p className="svc-desc">{t(s.desc)}</p>
                      <ul className="svc-bullets">
                        {s.bullets[isAr ? "ar" : "en"].map((b) => (<li key={b}><span className="dot" />{b}</li>))}
                      </ul>
                      <div className="svc-status">
                        {s.spec.map(([l, v]) => (<span className="stat-chip" key={l}><b>{v}</b>{l}</span>))}
                      </div>
                      <div className="svc-actions">
                        <button className="btn solid" onClick={() => go("service", i)}>{t(SVC_LINKS.detail)} <span className="ar">→</span></button>
                        <button className="btn" onClick={() => quickQuote(i)}>{t(SVC_LINKS.quick)}</button>
                      </div>
                    </div>
                  </article>
                ))}
              </div>
            </section>

            {/* PROPOSAL FORM */}
            <ProposalForm t={t} isAr={isAr} selected={selected} toggleSel={toggleSel} flashIdx={flashIdx} />
          </>
        )}
        <SiteFooter t={t} isAr={isAr} go={go} telHref={telHref} mailHref={mailHref} />
      </main>
    </div>
  );
}

function ProofStrip({ t, isAr, go }) {
  const ref = useRef(null);

  useEffect(() => {
    if (prefersReduced()) return;
    const ctx = gsap.context(() => {
      const nums = gsap.utils.toArray(".proof-num", ref.current);
      const tl = gsap.timeline({ scrollTrigger: { trigger: ref.current, start: "top 80%", once: true } });
      tl.from(".proof-card", { y: 30, opacity: 0, duration: 0.7, stagger: 0.15, ease: "power3.out" });
      nums.forEach((el, i) => {
        const target = Number(el.dataset.value);
        const obj = { v: 0 };
        tl.to(obj, {
          v: target, duration: 1.2, ease: "power2.out",
          onUpdate: () => { el.textContent = Math.round(obj.v) + (el.dataset.suffix || ""); },
        }, i === 0 ? "-=0.3" : "<");
      });
      tl.from(".proof-cta", { y: 20, opacity: 0, scale: 0.92, duration: 0.6, ease: "back.out(1.6)" });
    }, ref);
    return () => ctx.revert();
  }, []);

  return (
    <section className="proof" ref={ref}>
      <div className="wrap">
        <Kick>{t(PROOF.kicker)}</Kick>
        <div className="proof-grid">
          {PROOF.stats.map((s, i) => (
            <div className="proof-card" key={i}>
              <div className="proof-num mono" data-value={s.value} data-suffix={s.suffix}>{`0${s.suffix}`}</div>
              <div className="proof-label">{t(s.label)}</div>
              <div className="proof-note">{t(s.note)}</div>
            </div>
          ))}
        </div>
        <div className="proof-cta">
          <button className="btn solid portfolio-cta" onClick={() => go("portfolio")}>
            {t(PROOF.ctaLabel)} <span className="ar">→</span>
          </button>
        </div>
      </div>
    </section>
  );
}

function PortfolioPage({ t, isAr, go }) {
  useEffect(() => {
    if (prefersReduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".subpage .kick, .subpage h1, .subpage .lead", { y: 20, opacity: 0, duration: 0.7, stagger: 0.08, ease: "power3.out" });
      gsap.utils.toArray(".pf-card").forEach((card) => {
        gsap.from(card, { y: 40, opacity: 0, duration: 0.7, ease: "power3.out", scrollTrigger: { trigger: card, start: "top 90%" } });
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <section className="subpage">
      <div className="wrap">
        <a className="back" onClick={() => go("home")} style={{ cursor: "pointer" }}>
          <span className="ar">←</span> {isAr ? "الرئيسية" : "Home"}
        </a>
        <div className="glyph"><LineIcon name="brand" size={72} /></div>
        <Kick>{t(PORTFOLIO_PAGE.kicker)}</Kick>
        <h1 className="svc-title">{t(PORTFOLIO_PAGE.title)}</h1>
        <p className="lead">{t(PORTFOLIO_PAGE.intro)}</p>

        <div className="pf-grid">
          {PORTFOLIO.map((p) => (
            <article className="pf-card" key={p.n}>
              <div className="pf-thumb" aria-hidden="true"><span className="pf-n mono">{p.n}</span></div>
              <div className="pf-body">
                <span className="pf-tag mono">{t(p.tag)}</span>
                <h3>{t(p.title)}</h3>
                <p>{t(p.blurb)}</p>
              </div>
            </article>
          ))}
        </div>
        <p className="pf-note mono">{t(PORTFOLIO_PAGE.placeholderNote)}</p>
      </div>
    </section>
  );
}

function SiteFooter({ t, isAr, go, telHref, mailHref }) {
  return (
    <footer className="foot">
      <div className="bm"><Mark size={9} stroke={9} glow={0.6} /></div>
      <div className="c">
        {t(CONTACT.cities)} · <a href={telHref} dir="ltr">{CONTACT.phone}</a> · <a href={mailHref}>{CONTACT.email}</a>
      </div>
      <div className="legal">
        <a href={`/${LEGAL.privacy.slug}`} onClick={(e) => { e.preventDefault(); go("legal", "privacy"); }}>{t(LEGAL.privacy.nav)}</a>
        <a href={`/${LEGAL.terms.slug}`} onClick={(e) => { e.preventDefault(); go("legal", "terms"); }}>{t(LEGAL.terms.nav)}</a>
      </div>
    </footer>
  );
}

function ServicePage({ svc, idx, t, isAr, go, onQuick }) {
  const total = SERVICES.length;
  const prev = (idx - 1 + total) % total;
  const next = (idx + 1) % total;

  useEffect(() => {
    if (prefersReduced()) return;
    const ctx = gsap.context(() => {
      primeDraw(document, ".svc-hero-glyph .gdraw");
      const tl = gsap.timeline({ defaults: { ease: "power3.out" }, delay: 0.15 });
      tl.to(".svc-hero-glyph .gdraw", { strokeDashoffset: 0, duration: 1, stagger: 0.1 }, 0)
        .from(".subpage .crumb, .subpage .kick, .subpage h1, .subpage .lead", { y: 20, opacity: 0, duration: 0.7, stagger: 0.08 }, 0.1)
        .from(".bullet, .spec-panel", { y: 24, opacity: 0, duration: 0.6, stagger: 0.08 }, 0.4)
        .from(".svc-wayfind", { y: 20, opacity: 0, duration: 0.6 }, 0.55);
    });
    return () => ctx.revert();
  }, [idx]);

  return (
    <section className="subpage">
      <div className="wrap">
        {/* breadcrumb + position — always know where you are */}
        <div className="crumb">
          <a onClick={() => go("home", 0, `svc-${idx}`)} style={{ cursor: "pointer" }}>
            <span className="ar">←</span> {isAr ? "الخدمات" : "Services"}
          </a>
          <span className="crumb-sep">/</span>
          <span className="crumb-here">{svc.en}</span>
          <span className="crumb-pos mono">{svc.n} / {String(total).padStart(2, "0")}</span>
        </div>

        {/* jump-to index: all 11, current highlighted */}
        <div className="svc-index" role="tablist">
          {SERVICES.map((s, k) => (
            <button key={s.n} className={`idxchip ${k === idx ? "on" : ""}`} aria-current={k === idx ? "page" : undefined}
              onClick={() => k !== idx && go("service", k)} title={t(s.title)}>
              {s.n}
            </button>
          ))}
        </div>

        <div className="svc-detail">
          <div className="svc-detail-main">
            <div className="glyph svc-hero-glyph" style={{ margin: "0 0 1.6rem" }}><LineIcon name={svc.icon} size={84} drawClass="gdraw" /></div>
            <Kick>{svc.n} · {svc.en}</Kick>
            <h1 className="svc-title">{t(svc.title)}</h1>
            <p className="lead">{t(svc.desc)}</p>
            <div className="bullets">
              {svc.bullets[isAr ? "ar" : "en"].map((b, i) => (
                <div className="bullet" key={i}><span className="dot" />{b}</div>
              ))}
            </div>
            <p className="lead" style={{ marginTop: "1.4rem", fontSize: "13.5px" }}>{t(MISC.pricingNote)}</p>
            <div className="hero-cta" style={{ marginTop: "1.2rem" }}>
              <button className="btn solid" onClick={onQuick}>{t(SVC_LINKS.quick)} <span className="ar">→</span></button>
            </div>
          </div>

          {/* architecture spec panel */}
          <aside className="spec-panel" dir="ltr">
            <div className="spec-head">
              <span>{SVC_LINKS.specTitle}</span>
              <span className="res"><span className="pip" />{SVC_LINKS.residency}</span>
            </div>
            <div className="spec-rows">
              {svc.spec.map(([l, v], i) => (
                <div className="spec-row" key={i}><span className="sl">{l}</span><span className="sv">{v}</span></div>
              ))}
            </div>
            <div className="spec-foot">
              {SVC_LINKS.footer.map(([l, v]) => (<span key={l}>{l}: <b>{v}</b></span>))}
            </div>
          </aside>
        </div>

        {/* prev / next service — move between services without going home */}
        <nav className="svc-wayfind">
          <button className="wf wf-prev" onClick={() => go("service", prev)}>
            <span className="wf-dir mono"><span className="ar">←</span> {isAr ? "السابقة" : "Prev"}</span>
            <span className="wf-name">{SERVICES[prev].n} · {t(SERVICES[prev].title)}</span>
          </button>
          <button className="wf wf-next" onClick={() => go("service", next)}>
            <span className="wf-dir mono">{isAr ? "التالية" : "Next"} <span className="ar">→</span></span>
            <span className="wf-name">{SERVICES[next].n} · {t(SERVICES[next].title)}</span>
          </button>
        </nav>
      </div>
    </section>
  );
}

function LegalPage({ doc, t, isAr, go }) {
  useEffect(() => {
    if (prefersReduced()) return;
    const ctx = gsap.context(() => {
      gsap.from(".staticpage h1, .staticpage .updated, .staticpage section", {
        y: 20, opacity: 0, duration: 0.6, stagger: 0.08, ease: "power3.out",
      });
    });
    return () => ctx.revert();
  }, [doc]);

  return (
    <section className="subpage">
      <div className="wrap staticpage">
        <a className="back" onClick={() => go("home")} style={{ cursor: "pointer" }}>
          <span className="ar">←</span> {isAr ? "الرئيسية" : "Home"}
        </a>
        <h1 style={{ fontWeight: 200, fontSize: "clamp(1.8rem, 7vw, 2.6rem)" }}>{t(doc.title)}</h1>
        <p className="updated mono" style={{ color: "var(--dim)", fontSize: 12, marginTop: "0.6rem" }}>{t(doc.updated)}</p>
        {doc.sections.map((s, i) => (
          <section key={i}>
            <h2>{t(s.h)}</h2>
            <p>{t(s.p)}</p>
          </section>
        ))}
      </div>
    </section>
  );
}

function NotFound({ t, isAr, go }) {
  return (
    <section className="notfound">
      <div className="code mono">{MISC.notFound.code}</div>
      <h1>{t(MISC.notFound.title)}</h1>
      <p className="lead">{t(MISC.notFound.body)}</p>
      <div className="hero-cta" style={{ marginTop: "1.6rem" }}>
        <button className="btn solid" onClick={() => go("home")}>{t(MISC.notFound.home)} <span className="ar">→</span></button>
      </div>
    </section>
  );
}

function ProposalForm({ t, isAr, selected, toggleSel, flashIdx }) {
  const [f, setF] = useState({ name: "", org: "", phone: "", email: "", details: "" });
  const [sent, setSent] = useState(false);
  const F = FORM.fields;
  const set = (k) => (e) => setF((p) => ({ ...p, [k]: e.target.value }));

  const submit = (e) => {
    e.preventDefault();
    const svcNames = selected.map((i) => `${SERVICES[i].n} ${SERVICES[i].en}`).join(", ");
    const L = isAr
      ? [`طلب عرض — ${BRAND} SYSTEMS`, `الاسم: ${f.name}`, `المنشأة: ${f.org}`, `الجوال: ${f.phone}`,
         f.email && `البريد: ${f.email}`, svcNames && `الخدمات: ${svcNames}`, `التفاصيل: ${f.details}`]
      : [`Proposal request — ${BRAND} SYSTEMS`, `Name: ${f.name}`, `Company: ${f.org}`, `Mobile: ${f.phone}`,
         f.email && `Email: ${f.email}`, svcNames && `Services: ${svcNames}`, `Details: ${f.details}`];
    const msg = L.filter(Boolean).join("\n");
    setSent(true);
    window.open(`https://wa.me/${CONTACT.wa}?text=${encodeURIComponent(msg)}`, "_blank");
    setTimeout(() => setSent(false), 2500);
  };

  return (
    <section id="proposal" className="blk">
      <div className="wrap">
        <div className="glyph"><LineIcon name="next" size={88} drawClass="gdraw" /></div>
        <Kick data-reveal>{FORM.kicker}</Kick>
        <h2 data-reveal>{t(FORM.title)}</h2>
        <p className="lead" data-reveal>{t(FORM.intro)}</p>

        <form className="pform" data-reveal onSubmit={submit}>
          <div className="fgrid">
            {["name", "org", "phone", "email"].map((k) => (
              <label className="field" key={k}>
                <span>{t(F[k])}{F[k].req && <b> *</b>}</span>
                <input name={k} type={k === "email" ? "email" : k === "phone" ? "tel" : "text"}
                  placeholder={F[k].ph ? t(F[k].ph) : undefined}
                  required={F[k].req} value={f[k]} onChange={set(k)} dir={k === "phone" || k === "email" ? "ltr" : undefined} />
              </label>
            ))}
          </div>

          <div className="selwrap">
            <div className="sel-head">
              <span>{t(FORM.selectLabel)}</span>
              <span className="sel-count">{FORM.counter[isAr ? "ar" : "en"](selected.length)}</span>
            </div>
            <div className="chips">
              {SERVICES.map((s, i) => (
                <button type="button" key={s.n}
                  className={`chip ${selected.includes(i) ? "on" : ""} ${flashIdx === i ? "flash" : ""}`}
                  aria-pressed={selected.includes(i)}
                  onClick={() => toggleSel(i)}>
                  <span className="cn">{s.n}</span>{t(s.title)}
                </button>
              ))}
            </div>
          </div>

          <label className="field">
            <span>{t(F.details)}<b> *</b></span>
            <textarea name="details" rows={4} required placeholder={F.details.ph ? t(F.details.ph) : undefined}
              value={f.details} onChange={set("details")} />
          </label>

          <button className="btn solid submit" type="submit">
            {sent ? t(FORM.sending) : t(FORM.submit)} <span className="ar">→</span>
          </button>
          <div className="contact-line mono">{t(CONTACT.cities)} · <span dir="ltr">{CONTACT.phone}</span> · {CONTACT.email}</div>
        </form>
      </div>
    </section>
  );
}
