import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUp,
  ArrowUpRight,
  Braces,
  Check,
  ChevronRight,
  Code2,
  Database,
  Download,
  Layers3,
  Mail,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  X,
} from "lucide-react";

const ASSETS = {
  portrait: "/manus-storage/malika-portrait_f2240e5c.png",
  mark: "/manus-storage/malika-monogram-mark_98ec5ab0.png",
};

const navigation = [
  { label: "Expertise", href: "#focus" },
  { label: "Process", href: "#approach" },
  { label: "Growth", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

const focusAreas = [
  {
    index: "01",
    evidence: "ANALYSIS / SCOPE",
    icon: Code2,
    title: "Requirements analysis",
    copy: "Turning goals, requirements, and constraints into a clearer scope before a solution is built.",
    tags: ["User Needs", "Scope", "Requirements"],
  },
  {
    index: "02",
    evidence: "SYSTEM / STRUCTURE",
    icon: Database,
    title: "System analysis",
    copy: "Mapping flows, data, actors, and rules so system decisions can be explained and reviewed.",
    tags: ["System Flow", "Data", "Use Case"],
  },
  {
    index: "03",
    evidence: "SOLUTION / DIRECTION",
    icon: Sparkles,
    title: "Digital solutions",
    copy: "Connecting business and system analysis into structured, relevant digital experiences that are ready to grow.",
    tags: ["Business Needs", "System Design", "Digital Product"],
  },
];

const workflow = [
  ["01", "Read the requirements", "Bring goals, users, information, and constraints together as a foundation for decisions."],
  ["02", "Map the system", "Translate requirements into process flows, user roles, and connected information structures."],
  ["03", "Shape the solution", "Design digital experiences that help users complete work with more clarity and direction."],
  ["04", "Record decisions", "Keep assumptions, scope, and rationale visible so each next step can be reviewed and improved."],
];

const roadmap = [
  {
    state: "Current foundation",
    title: "Information Systems",
    copy: "Information Systems graduate from Universitas Siliwangi, focused on requirements analysis, systems analysis, and digital solutions.",
    tone: "active",
  },
  {
    state: "Next direction",
    title: "Full-Stack foundations",
    copy: "Deepening the practice of building web applications from user requirements and system structure to usable digital experiences.",
    tone: "planned",
  },
  {
    state: "Further exploration",
    title: "AI-enabled solutions",
    copy: "Exploring how AI can strengthen digital solutions through responsible, measurable, user-centred workflows.",
    tone: "planned",
  },
];

const proofRecords = [
  ["FOUNDATION", "Information Systems · Universitas Siliwangi", "2022—2026"],
  ["FOCUS", "Requirements Analysis and Systems Analysis", "ACTIVE"],
  ["DIRECTION", "Full-Stack and AI-enabled Digital Solutions", "GROWING"],
  ["LOCATION", "Bandung, West Java, Indonesia", "INDONESIA"],
];

function Mark({ className = "" }: { className?: string }) {
  return (
    <svg className={`mark ${className}`} viewBox="0 0 72 52" aria-hidden="true">
      <path d="M7 43V10c7 0 9 22 17 22s10-22 17-22c7 0 9 22 17 22V43" />
      <path d="M13 43c6 0 8-25 17-25s10 25 21 25c5 0 7-10 9-18" />
      <circle cx="36" cy="32" r="3" />
    </svg>
  );
}

function SectionMarker({ number, children }: { number: string; children: string }) {
  return (
    <div className="section-marker">
      <span>{number}</span>
      <i />
      <p>{children}</p>
    </div>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const targets = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal]"));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 },
    );
    targets.forEach((target) => observer.observe(target));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const updateScrollState = () => setShowScrollTop(window.scrollY > 520);
    updateScrollState();
    window.addEventListener("scroll", updateScrollState, { passive: true });
    return () => window.removeEventListener("scroll", updateScrollState);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Back to Malika's home page">
          <span className="brand-mark"><img src={ASSETS.mark} alt="" /><Mark /></span>
          <span className="brand-name">Malika<span>.</span></span>
          <small><b>MA // 01</b><span>Portfolio<br />Engineering</span></small>
        </a>

        <nav className="desktop-nav" aria-label="Primary navigation">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <a className="header-contact" href="#contact">Open to roles <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "Close menu" : "Open menu"}>
          {menuOpen ? <X size={22} /> : <Menu size={23} />}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <span className="mobile-menu-label">Navigate</span>
        {navigation.map((item, index) => (
          <a key={item.href} href={item.href} onClick={closeMenu}>
            <span>0{index + 1}</span>{item.label}<ArrowDownRight size={23} />
          </a>
        ))}
        <a className="mobile-email" href="mailto:malikafanyzara34@gmail.com" onClick={closeMenu}>malikafanyzara34@gmail.com</a>
      </div>

      <main id="main-content">
        <section id="top" className="hero-section" aria-labelledby="hero-title">
          <aside className="hero-rail" aria-hidden="true"><span>01</span><i /><small>PORTFOLIO / 2026</small></aside>

          <div className="hero-copy reveal-one">
            <div className="eyebrow"><span /> Information Systems Portfolio · Bandung, Indonesia</div>
            <p className="hero-kicker">FULL-STACK ENGINEER · INFORMATION SYSTEMS</p>
            <h1 id="hero-title">Full-Stack systems, built from <em>clear</em> requirements.</h1>
            <p className="hero-summary">A Full-Stack Engineer portfolio grounded in Information Systems: translating requirements into flows, system structures, and an AI Engineering direction that can be reviewed and developed.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#focus">Explore expertise <ArrowRight size={17} /></a>
              <a className="inline-link" href="#roadmap">View AI roadmap <ArrowDownRight size={17} /></a>
              <a className="button button-cv" href="/manus-storage/malika-profile-cv_b8f7a275.pdf" target="_blank" rel="noreferrer"><span>Download CV</span><Download size={16} /></a>
            </div>
            <div className="signal-row" aria-label="Core focus areas">
              <span><Braces size={15} /> Requirements analysis</span>
              <span><Network size={15} /> System analysis</span>
              <span><Sparkles size={15} /> AI Engineering roadmap</span>
            </div>
          </div>

          <div className="hero-visual reveal-two">
            <div className="portrait-grid" aria-hidden="true" />
            <div className="portrait-frame">
              <img src={ASSETS.portrait} alt="Professional portrait of Malika Fanyzar Azzahra." />
            </div>
          </div>

          <div className="hero-footnote reveal-three">
            <span>Requirements → system design → Full-Stack Engineering.</span>
            <strong>FULL-STACK ENGINEERING · AI ROADMAP</strong>
          </div>
        </section>

        <section className="motion-marquee" aria-label="Engineering disciplines">
          <div className="marquee-viewport">
            <div className="marquee-track">
              <div className="marquee-set">
                <span>FULL-STACK ENGINEERING</span><i>✦</i><span>INTERFACE SYSTEMS</span><i>✦</i><span>API DESIGN</span><i>✦</i><span>AI ENGINEERING</span><i>✦</i><span>RELIABLE DELIVERY</span><i>✦</i>
              </div>
              <div className="marquee-set" aria-hidden="true">
                <span>FULL-STACK ENGINEERING</span><i>✦</i><span>INTERFACE SYSTEMS</span><i>✦</i><span>API DESIGN</span><i>✦</i><span>AI ENGINEERING</span><i>✦</i><span>RELIABLE DELIVERY</span><i>✦</i>
              </div>
            </div>
          </div>
        </section>

        <section id="focus" className="focus-section" aria-labelledby="focus-title" data-reveal>
          <div className="section-wrap">
            <div className="section-heading">
              <div className="marker-stack"><SectionMarker number="02">Core expertise</SectionMarker><span className="dossier-stamp">MA // FOCUS FILE</span></div>
              <div>
                <p className="overline">From insight to implementation</p>
                <h2 id="focus-title">The capabilities behind <em>digital</em> systems.</h2>
              </div>
              <p className="heading-note">Recruitment-ready means being able to explain requirements, system structure, implementation decisions, and the direction of the next technology layer.</p>
            </div>

            <div className="focus-grid">
              {focusAreas.map((area) => {
                const Icon = area.icon;
                return (
                  <article className="focus-card" key={area.index}>
                    <div className="focus-card-top"><span>{area.index}</span><small>{area.evidence}</small><Icon size={22} strokeWidth={1.55} /></div>
                    <h3>{area.title}</h3>
                    <p>{area.copy}</p>
                    <div className="tag-list">{area.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
                    <div className="focus-card-state"><span>Focus area</span><b>Capability in active development</b></div>
                  </article>
                );
              })}
            </div>

            <div className="focus-evidence" aria-label="System notes">
              <div><span>SYSTEM NOTE / 01</span><strong>Goals before tools</strong><p>Every solution begins with user goals, information needs, and constraints that need to be understood first.</p></div>
              <div><span>SYSTEM NOTE / 02</span><strong>Structure before features</strong><p>Process flows, user roles, and data structures create a foundation so digital experiences are not built in isolation.</p></div>
              <div><span>SYSTEM NOTE / 03</span><strong>Decisions need rationale</strong><p>Scope, flows, and system decisions should be explainable so a solution remains easy to review and develop.</p></div>
            </div>

            <div className="focus-note"><ShieldCheck size={18} /><p><strong>Verified foundation.</strong> This portfolio is grounded in Information Systems with a focus on requirements analysis, systems analysis, and digital solutions.</p></div>
          </div>
        </section>

        <section id="approach" className="approach-section" aria-labelledby="approach-title" data-reveal>
          <div className="section-wrap approach-layout">
            <div className="approach-intro">
              <div className="marker-stack"><SectionMarker number="03">Working process</SectionMarker><span className="dossier-stamp">MA // DECISION LOG</span></div>
              <h2 id="approach-title">From requirements to <em>implementation.</em></h2>
              <p>Every build should make decisions visible: which requirements are prioritised, which flows are served, and which structure keeps the system clear.</p>
              <div className="approach-mark"><Mark /><span>Clarity is part of the implementation.</span></div>
            </div>
            <ol className="workflow-list">
              {workflow.map(([number, title, copy]) => (
                <li key={number}>
                  <span>{number}</span>
                  <div><h3>{title}</h3><p>{copy}</p></div>
                  <ChevronRight size={20} strokeWidth={1.5} />
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section id="case-study" className="case-study-section" aria-labelledby="case-study-title" data-reveal>
          <div className="section-wrap">
            <div className="case-study-heading">
              <div className="marker-stack"><SectionMarker number="04">Final project case study</SectionMarker><span className="dossier-stamp">MA // PROJECT RECORD</span></div>
              <div>
                <p className="overline">LaporinAja · 2026</p>
                <h2 id="case-study-title">Complaint tracking, made <em>visible.</em></h2>
              </div>
              <p className="heading-note">A web-based public-service complaint information system for the Desa Cinta Statistik programme at Statistics Indonesia (BPS) Kota Tasikmalaya.</p>
            </div>

            <div className="case-study-lead">
              <div className="case-study-record">
                <span>PROJECT / 01</span>
                <h3>Developing a complaint information system with a self-service tracking flow.</h3>
                <p>Before this final project, complaint submissions could be received, but reporters could not independently follow the status of their cases. The project extends that flow with traceable complaint progress, verification, status updates, and follow-up information.</p>
                <div className="case-study-actions">
                  <span className="case-demo-pending"><i /> Live demo · Coming soon</span>
                  <span className="case-source">Source: Final Project Record · 2026</span>
                </div>
              </div>
              <div className="case-study-facts" aria-label="Final project facts">
                <div><small>METHOD</small><strong>Rapid Application Development</strong></div>
                <div><small>SYSTEM TYPE</small><strong>Web-based public-service information system</strong></div>
                <div><small>PRIMARY CHANGE</small><strong>Independent complaint tracking</strong></div>
                <div><small>PROJECT CONTEXT</small><strong>Desa Cinta Statistik · BPS Kota Tasikmalaya</strong></div>
              </div>
            </div>

            <div className="case-study-flow" aria-label="LaporinAja system flow">
              <article><span>01</span><div><small>REPORTER FLOW</small><h3>Submit a complaint</h3><p>UMKM actors can submit a public-service complaint through the system.</p></div></article>
              <article><span>02</span><div><small>TRACKING FLOW</small><h3>Find and verify</h3><p>A complaint number and the last four WhatsApp digits form a lightweight verification step for status tracking.</p></div></article>
              <article><span>03</span><div><small>KELURAHAN ADMIN</small><h3>Manage the follow-up</h3><p>Local administrators manage complaint status and maintain follow-up notes.</p></div></article>
              <article><span>04</span><div><small>BPS ADMIN</small><h3>Review and export</h3><p>BPS administrators can review complaint details and download complaint recap data.</p></div></article>
            </div>

            <div className="case-study-evidence">
              <div><span>USER VALUE</span><p>Complaint progress becomes accessible to reporters instead of remaining hidden after submission.</p></div>
              <div><span>SYSTEM VALUE</span><p>Status, follow-up notes, and administrative access are organised around a traceable complaint record.</p></div>
              <div><span>NOTIFICATION</span><p>Email messages communicate the complaint number, status changes, and follow-up updates.</p></div>
            </div>
          </div>
        </section>

        <section id="roadmap" className="roadmap-section" aria-labelledby="roadmap-title" data-reveal>
          <div className="section-wrap">
            <div className="roadmap-heading">
              <div className="marker-stack"><SectionMarker number="05">Growth direction</SectionMarker><span className="dossier-stamp">MA // GROWTH FILE</span></div>
              <div>
                <p className="overline">Foundation, development, exploration</p>
                <h2 id="roadmap-title">Building capability for the <em>next</em> solution.</h2>
              </div>
            </div>

            <div className="roadmap-grid">
              {roadmap.map((item, index) => (
                <article className={`roadmap-card ${item.tone}`} key={item.title}>
                  <div className="roadmap-card-head"><span>{String(index + 1).padStart(2, "0")}</span><small>{item.state}</small></div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <div className="roadmap-line"><i /><span>{item.tone === "active" ? "Active foundation" : "Growth direction"}</span></div>
                </article>
              ))}
            </div>

            <div className="research-strip">
              <div><Layers3 size={21} /><span>Solution principle</span></div>
              <p>Technology is selected to clarify processes, help users make decisions, and strengthen the quality of a digital solution—not simply to add features.</p>
            </div>
          </div>
        </section>

        <section className="proof-section" aria-labelledby="proof-title" data-reveal>
          <div className="section-wrap proof-layout">
            <div className="proof-copy">
              <div className="marker-stack"><SectionMarker number="06">Portfolio foundation</SectionMarker><span className="dossier-stamp">MA // PROFILE REGISTER</span></div>
              <h2 id="proof-title">The foundation behind the <em>direction.</em></h2>
              <p>An Information Systems foundation builds a perspective that connects requirements, processes, data, and user experience into one integrated digital solution.</p>
            </div>
            <div className="proof-list" aria-label="Portfolio profile register">
              {proofRecords.map(([label, copy, status]) => (
                <div key={label}>
                  <Check size={18} />
                  <span><small>{label}</small>{copy}</span>
                  <b>{status}</b>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title" data-reveal>
          <div className="contact-grid-pattern" aria-hidden="true" />
          <div className="section-wrap contact-layout">
            <div className="contact-mark"><Mark /><span>MA //<br />06</span></div>
            <div className="contact-copy">
              <div className="marker-stack"><SectionMarker number="07">Contact</SectionMarker><span className="dossier-stamp">MA // AVAILABILITY FILE</span></div>
              <h2 id="contact-title">Open to <em>Full-Stack Engineering</em> opportunities.</h2>
              <p>For junior roles, development programmes, or engineering collaborations that deepen system and AI foundations, please connect by email or LinkedIn.</p>
              <div className="contact-actions">
                <a className="button button-light" href="mailto:malikafanyzara34@gmail.com">Email Malika <Mail size={17} /></a>
                <a className="inline-link light-link" href="https://www.linkedin.com/in/malika-fanyzar-azzahra-49873b292" target="_blank" rel="noreferrer">LinkedIn profile <ArrowUpRight size={17} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <button className={`mobile-scroll-top ${showScrollTop ? "is-visible" : ""}`} type="button" onClick={scrollToTop} aria-label="Scroll back to top">
        <ArrowUp size={18} /><span>TOP</span>
      </button>

      <footer className="site-footer">
        <div><Mark /><span>MA // 01</span><span>© 2026 Malika Fanyzar Azzahra · Indonesia</span></div>
        <p>MA // Engineering field notes</p>
        <a href="#top" aria-label="Back to top"><ArrowUpRight size={19} /></a>
      </footer>
    </div>
  );
}
