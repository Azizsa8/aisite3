import React, { useRef, useEffect, useLayoutEffect, useState, useCallback } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { BRAND, CONTACT, NAV, HERO, SERVICES_KICKER, SERVICES, SVC_LINKS, FORM } from "./content.js";
import Mark, { MARK_PATHS } from "./Mark.jsx";
import LineIcon from "./Icons.jsx";

gsap.registerPlugin(ScrollTrigger);

function primeDraw(root, sel) {
  root.querySelectorAll(sel).forEach((p) => {
    const len = p.getTotalLength();
    p.style.strokeDasharray = len;
    p.style.strokeDashoffset = len;
  });
}

export default function App() {
  const [lang, setLang] = useState("ar");
  const [menu, setMenu] = useState(false);
  const [route, setRoute] = useState({ page: "home", i: 0 });
  const [selected, setSelected] = useState([]); // service indices for the proposal
  const [booted, setBooted] = useState(false);
  const [activeSvc, setActiveSvc] = useState(0);
  const root = useRef(null);
  const fill = useRef(null);
  const xfade = useRef(null);
  const preRef = useRef(null);

  const isAr = lang === "ar";
  const t = (o) => (o ? o[lang] : "");

  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = isAr ? "rtl" : "ltr";
    document.documentElement.setAttribute("data-lang", lang);
  }, [lang, isAr]);

  // Hide the intro strokes BEFORE first paint so nothing flashes fully-drawn.
  useLayoutEffect(() => {
    if (preRef.current) primeDraw(preRef.current, ".preStroke");
    document.body.style.overflow = "hidden";
  }, []);

  // Preloader: draw the mark, illuminate, hold, then fade to reveal the hero.
  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({
        onComplete: () => { setBooted(true); document.body.style.overflow = ""; },
      });
      tl.to(".preloader .preStroke", { strokeDashoffset: 0, duration: 1.25, stagger: 0.16, ease: "power2.inOut" }, 0.2)
        .to(".pre-mark", { filter: "brightness(1.6)", duration: 0.4, yoyo: true, repeat: 1 }, 1.15)
        .addLabel("reveal", "+=0.45")
        .to(".preloader", { autoAlpha: 0, duration: 0.75, ease: "power2.inOut" }, "reveal")
        .from("#hero .hero-kick", { opacity: 0, y: 14, duration: 0.7 }, "reveal+=0.15")
        .from(".hero-mark", { opacity: 0, duration: 0.8 }, "reveal+=0.15")
        .from(".wordmark", { opacity: 0, y: 14, duration: 0.8 }, "reveal+=0.25")
        .from(".sub", { opacity: 0, duration: 0.8 }, "reveal+=0.35")
        .from("#hero .hero-tag", { opacity: 0, y: 16, duration: 0.7 }, "reveal+=0.45")
        .from("#hero .hero-cta", { opacity: 0, y: 16, duration: 0.7 }, "reveal+=0.55")
        .from(".scrollcue", { opacity: 0, duration: 0.6 }, "reveal+=0.7");
    });
    return () => ctx.revert();
  }, []);

  const go = useCallback((page, i = 0, scrollTarget = null) => {
    setMenu(false);
    const el = xfade.current;
    primeDraw(el, ".xpath");
    const tl = gsap.timeline();
    tl.set(el, { yPercent: 100 })
      .to(el, { yPercent: 0, duration: 0.5, ease: "power3.inOut" })
      .to(el.querySelectorAll(".xpath"), { strokeDashoffset: 0, duration: 0.5, stagger: 0.05, ease: "power2.out" }, "-=0.15")
      .add(() => { setRoute({ page, i }); window.scrollTo(0, 0); })
      .to(el, { yPercent: -100, duration: 0.55, ease: "power3.inOut", delay: 0.15 })
      .add(() => { if (scrollTarget) document.getElementById(scrollTarget)?.scrollIntoView(); })
      .set(el, { yPercent: 100 });
  }, []);

  const toggleSel = (i) => setSelected((s) => (s.includes(i) ? s.filter((x) => x !== i) : [...s, i]));
  const quickQuote = (i) => { setSelected((s) => (s.includes(i) ? s : [...s, i])); go("home", 0, "proposal"); };

  // ---- HOME animations ----
  useEffect(() => {
    if (route.page !== "home") return;
    const ctx = gsap.context(() => {
      primeDraw(root.current, ".glyph .gdraw");

      gsap.to(fill.current, { width: "100%", ease: "none", scrollTrigger: { start: 0, end: "max", scrub: 0.3 } });

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

  return (
    <div ref={root}>
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
      </div>

      {route.page === "service"
        ? <ServicePage svc={SERVICES[route.i]} idx={route.i} t={t} isAr={isAr} go={go} onQuick={() => quickQuote(route.i)} />
        : (
          <main>
            {/* HERO */}
            <section id="hero">
              <div className="wrap">
                <div className="hero-kick"><span className="kick" style={{ margin: 0 }}>{HERO.kicker}</span></div>
                <div className="hero-mark"><Mark size={44} stroke={7} glow={0.9} /></div>
                <div className="wordmark" dir="ltr">
                  <span className="rule" /><h1>{"AISERS".split("").map((c, i) => <span key={i}>{c}</span>)}</h1><span className="rule" />
                </div>
                <div className="sub" dir="ltr">SYSTEMS</div>
                <p className="hero-tag">{t(HERO.tagline)}</p>
                <div className="hero-cta">
                  <a className="btn" href="#services">{t(HERO.cta)} <span className="ar">↓</span></a>
                </div>
              </div>
              <div className="scrollcue"><span>{isAr ? "مرّروا" : "SCROLL"}</span><span className="bar" /></div>
            </section>

            {/* SERVICES — scroll-driven scene, lighting changes per active service */}
            <section id="services" className="svc-scene">
              <div className="svc-ambient" aria-hidden="true">
                <div className="svc-glow" style={{
                  left: `${50 + Math.cos((activeSvc / SERVICES.length) * Math.PI * 2) * 26}%`,
                  top: `${46 + Math.sin((activeSvc / SERVICES.length) * Math.PI * 2) * 22}%`,
                }} />
                <div className="svc-ghost">{SERVICES[activeSvc].n}</div>
                <div className="svc-counter mono">{SERVICES[activeSvc].n} <span>/ 11</span></div>
              </div>

              <div className="svc-track">
                <div className="svc-intro wrap"><span className="kick">{t(SERVICES_KICKER)}</span></div>
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
            <ProposalForm t={t} isAr={isAr} selected={selected} toggleSel={toggleSel} />

            <footer className="foot">
              <div className="bm"><Mark size={9} stroke={9} glow={0.6} /></div>
              <div className="c">{t(CONTACT.cities)} · {CONTACT.phone} · {CONTACT.email}</div>
            </footer>
          </main>
        )}
    </div>
  );
}

function ServicePage({ svc, idx, t, isAr, go, onQuick }) {
  const total = SERVICES.length;
  const prev = (idx - 1 + total) % total;
  const next = (idx + 1) % total;

  useEffect(() => {
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
            <button key={s.n} className={`idxchip ${k === idx ? "on" : ""}`} onClick={() => k !== idx && go("service", k)} title={t(s.title)}>
              {s.n}
            </button>
          ))}
        </div>

        <div className="svc-detail">
          <div className="svc-detail-main">
            <div className="glyph svc-hero-glyph" style={{ margin: "0 0 1.6rem" }}><LineIcon name={svc.icon} size={84} drawClass="gdraw" /></div>
            <span className="kick">{svc.n} · {svc.en}</span>
            <h1 style={{ fontWeight: 200, fontSize: "clamp(2rem, 8vw, 3.4rem)", letterSpacing: "-0.01em", lineHeight: 1.08 }}>{t(svc.title)}</h1>
            <p className="lead">{t(svc.desc)}</p>
            <div className="bullets">
              {svc.bullets[isAr ? "ar" : "en"].map((b, i) => (
                <div className="bullet" key={i}><span className="dot" />{b}</div>
              ))}
            </div>
            <div className="hero-cta" style={{ marginTop: "2.2rem" }}>
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

function ProposalForm({ t, isAr, selected, toggleSel }) {
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
        <span className="kick" data-reveal>{FORM.kicker}</span>
        <h2 data-reveal>{t(FORM.title)}</h2>
        <p className="lead" data-reveal>{t(FORM.intro)}</p>

        <form className="pform" data-reveal onSubmit={submit}>
          <div className="fgrid">
            {["name", "org", "phone", "email"].map((k) => (
              <label className="field" key={k}>
                <span>{t(F[k])}{F[k].req && <b> *</b>}</span>
                <input type={k === "email" ? "email" : k === "phone" ? "tel" : "text"}
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
                <button type="button" key={s.n} className={`chip ${selected.includes(i) ? "on" : ""}`} onClick={() => toggleSel(i)}>
                  <span className="cn">{s.n}</span>{t(s.title)}
                </button>
              ))}
            </div>
          </div>

          <label className="field">
            <span>{t(F.details)}<b> *</b></span>
            <textarea rows={4} required value={f.details} onChange={set("details")} />
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
