import { useEffect, useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  ChevronRight,
  Code2,
  Database,
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
  { label: "Focus", href: "#focus" },
  { label: "Approach", href: "#approach" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Contact", href: "#contact" },
];

const focusAreas = [
  {
    index: "01",
    evidence: "UI / SCOPE",
    icon: Code2,
    title: "Interface systems",
    copy: "Building responsive, understandable interfaces from components that can be maintained with care.",
    tags: ["React", "TypeScript", "Accessible UI"],
  },
  {
    index: "02",
    evidence: "SYSTEM / SCOPE",
    icon: Database,
    title: "Application foundations",
    copy: "Translating requirements into data structures, API contracts, authentication flows, and clear application logic.",
    tags: ["API Design", "Data Modeling", "System Design"],
  },
  {
    index: "03",
    evidence: "AI / ROADMAP",
    icon: Sparkles,
    title: "AI-ready products",
    copy: "Learning to integrate AI models responsibly through structured outputs, retrieval, evaluation, and guardrails.",
    tags: ["LLM Integration", "RAG", "Evaluation"],
  },
];

const workflow = [
  ["01", "Frame the system", "Map users, constraints, data, and the decisions the application needs to make."],
  ["02", "Build the path", "Compose the interface, API, and application structure as one connected experience."],
  ["03", "Validate behaviour", "Test critical flows, handle failure states, and record assumptions before the next iteration."],
  ["04", "Document the learning", "Capture technical decisions and trade-offs so each build clarifies the next engineering step."],
];

const roadmap = [
  {
    state: "Now",
    title: "Full-Stack foundations",
    copy: "Strengthening modern web application patterns: UI components, TypeScript, API contracts, data structures, and accessible user experiences.",
    tone: "active",
  },
  {
    state: "Next build",
    title: "Knowledge assistant with RAG",
    copy: "Building a retrieval-augmented generation application with traceable sources, confidence boundaries, and a clear search experience.",
    tone: "planned",
  },
  {
    state: "Deepen",
    title: "Evaluation-driven AI workflow",
    copy: "Documenting test sets, structured outputs, quality evaluation, and error handling so AI is treated as a system, not merely a demo.",
    tone: "planned",
  },
];

const proofRecords = [
  ["CASE STUDY", "Runnable application case study", "PLANNED"],
  ["DECISION LOG", "Architecture and API decision notes", "PLANNED"],
  ["EVALUATION", "AI project with evaluation evidence", "PLANNED"],
  ["RELEASE", "GitHub repository and deployment link", "PENDING"],
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

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">Skip to main content</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Back to Malika's home page">
          <span className="brand-mark"><img src={ASSETS.mark} alt="" /><Mark /></span>
          <span className="brand-name">Malika<span>.</span></span>
          <small><b>MA // 01</b>Engineering Portfolio</small>
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
            <div className="eyebrow"><span /> Information Systems Graduate · Indonesia</div>
            <p className="hero-kicker">Positioning file / Junior Full-Stack Engineer</p>
            <h1 id="hero-title">Building digital systems with a <em>clear path</em> toward AI.</h1>
            <p className="hero-summary">My focus is building structured web applications from interface to foundation. In parallel, I am expanding into AI Engineering through structured outputs, evaluation, and reliability as part of the system.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#focus">Explore technical focus <ArrowRight size={17} /></a>
              <a className="inline-link" href="#roadmap">View roadmap <ArrowDownRight size={17} /></a>
            </div>
            <div className="signal-row" aria-label="Technical direction">
              <span><Braces size={15} /> Full-Stack foundations</span>
              <span><Network size={15} /> AI systems in progress</span>
            </div>
          </div>

          <div className="hero-visual reveal-two">
            <div className="portrait-grid" aria-hidden="true" />
            <div className="portrait-frame">
              <img src={ASSETS.portrait} alt="Professional portrait of Malika Fanyzar Azzahra." />
            </div>
          </div>

          <div className="hero-footnote reveal-three">
            <span>Seeking opportunities to learn, ship, and grow with an engineering team.</span>
            <strong>FULL-STACK ENGINEERING · AI SYSTEMS</strong>
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
              <div className="marker-stack"><SectionMarker number="02">Engineering focus</SectionMarker><span className="dossier-stamp">MA // FOCUS FILE</span></div>
              <div>
                <p className="overline">Building depth with intent</p>
                <h2 id="focus-title">A Full-Stack mindset, <em>designed</em> for the next layer.</h2>
              </div>
              <p className="heading-note">An engineering portfolio should do more than list tools. It should surface scope, system decisions, and reviewable build evidence.</p>
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
                    <div className="focus-card-state"><span>Repository</span><b>Pending project release</b></div>
                  </article>
                );
              })}
            </div>

            <div className="focus-evidence" aria-label="Catatan bukti engineering">
              <div><span>BUILD NOTE / 01</span><strong>Scope before tools</strong><p>Implementation follows a map of user flows, constraints, and system decisions.</p></div>
              <div><span>BUILD NOTE / 02</span><strong>Evidence after the build</strong><p>Each project will include a repository, demo, and decision notes designed for review.</p></div>
              <div><span>BUILD NOTE / 03</span><strong>AI needs evaluation</strong><p>Model integration requires data, metrics, and failure cases—not only a successful demo.</p></div>
            </div>

            <div className="focus-note"><ShieldCheck size={18} /><p><strong>Honest positioning.</strong> The areas above describe my current technical focus and build direction. Case studies, repositories, and demos will be added as evidence when they are ready to publish.</p></div>
          </div>
        </section>

        <section id="approach" className="approach-section" aria-labelledby="approach-title" data-reveal>
          <div className="section-wrap approach-layout">
            <div className="approach-intro">
              <div className="marker-stack"><SectionMarker number="03">Approach</SectionMarker><span className="dossier-stamp">MA // DECISION LOG</span></div>
              <h2 id="approach-title">Systems you can <em>explain.</em></h2>
              <p>I am interested in engineering that makes decisions visible: why a structure was chosen, which flows were tested, and how a system responds when a state does not behave as expected.</p>
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

        <section id="roadmap" className="roadmap-section" aria-labelledby="roadmap-title" data-reveal>
          <div className="section-wrap">
            <div className="roadmap-heading">
              <div className="marker-stack"><SectionMarker number="04">Roadmap AI Engineering</SectionMarker><span className="dossier-stamp">MA // ROADMAP FILE</span></div>
              <div>
                <p className="overline">A measured transition</p>
                <h2 id="roadmap-title">From applications to <em>AI-aware</em> systems.</h2>
              </div>
            </div>

            <div className="roadmap-grid">
              {roadmap.map((item, index) => (
                <article className={`roadmap-card ${item.tone}`} key={item.title}>
                  <div className="roadmap-card-head"><span>{String(index + 1).padStart(2, "0")}</span><small>{item.state}</small></div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <div className="roadmap-line"><i /><span>{item.tone === "active" ? "In development" : "Planned project"}</span></div>
                </article>
              ))}
            </div>

            <div className="research-strip">
              <div><Layers3 size={21} /><span>Portfolio principle</span></div>
              <p>For AI builds, the priority is retrieval quality, structured output, evaluation, deployment, and failure cases—not only an attractive demo.</p>
            </div>
          </div>
        </section>

        <section className="proof-section" aria-labelledby="proof-title" data-reveal>
          <div className="section-wrap proof-layout">
            <div className="proof-copy">
              <div className="marker-stack"><SectionMarker number="05">Portfolio evidence</SectionMarker><span className="dossier-stamp">MA // EVIDENCE REGISTER</span></div>
              <h2 id="proof-title">The next proof belongs in the <em>build.</em></h2>
              <p>This website is an engineering portfolio baseline. The next step is adding Full-Stack application case studies, public repositories, architecture notes, deployment status, and directly testable demos.</p>
            </div>
            <div className="proof-list" aria-label="Planned portfolio evidence register">
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
              <div className="marker-stack"><SectionMarker number="06">Contact</SectionMarker><span className="dossier-stamp">MA // AVAILABILITY FILE</span></div>
              <h2 id="contact-title">Available for junior <em>Engineering</em> roles.</h2>
              <p>I am looking for an engineering environment where I can contribute to end-to-end web applications, document technical decisions, and develop AI Engineering foundations responsibly.</p>
              <div className="contact-actions">
                <a className="button button-light" href="mailto:malikafanyzara34@gmail.com">Email Malika <Mail size={17} /></a>
                <a className="inline-link light-link" href="https://www.linkedin.com/in/malika-fanyzar-azzahra-49873b292" target="_blank" rel="noreferrer">LinkedIn profile <ArrowUpRight size={17} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div><Mark /><span>MA // 01</span><span>© 2026 Malika Fanyzar Azzahra · Indonesia</span></div>
        <p>MA // Engineering field notes</p>
        <a href="#top" aria-label="Back to top"><ArrowUpRight size={19} /></a>
      </footer>
    </div>
  );
}
