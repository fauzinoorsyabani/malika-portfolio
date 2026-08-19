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
  { label: "Keahlian", href: "#focus" },
  { label: "Proses", href: "#approach" },
  { label: "Pertumbuhan", href: "#roadmap" },
  { label: "Kontak", href: "#contact" },
];

const focusAreas = [
  {
    index: "01",
    evidence: "ANALYSIS / SCOPE",
    icon: Code2,
    title: "Requirements analysis",
    copy: "Menyusun kebutuhan, tujuan, dan batasan menjadi ruang lingkup yang lebih jelas sebelum sebuah solusi dibangun.",
    tags: ["User Needs", "Scope", "Requirements"],
  },
  {
    index: "02",
    evidence: "SYSTEM / STRUCTURE",
    icon: Database,
    title: "System analysis",
    copy: "Memetakan alur, data, aktor, dan aturan agar keputusan sistem dapat dijelaskan serta ditinjau kembali.",
    tags: ["System Flow", "Data", "Use Case"],
  },
  {
    index: "03",
    evidence: "SOLUTION / DIRECTION",
    icon: Sparkles,
    title: "Digital solutions",
    copy: "Menghubungkan analisis bisnis dan sistem menjadi pengalaman digital yang terstruktur, relevan, dan siap dikembangkan.",
    tags: ["Business Needs", "System Design", "Digital Product"],
  },
];

const workflow = [
  ["01", "Membaca kebutuhan", "Menyatukan tujuan, pengguna, informasi, dan batasan sebagai dasar pengambilan keputusan."],
  ["02", "Memetakan sistem", "Menerjemahkan kebutuhan menjadi alur proses, peran pengguna, serta struktur informasi yang saling terhubung."],
  ["03", "Merancang solusi", "Menyusun pengalaman digital yang membantu pengguna menyelesaikan pekerjaan dengan lebih jelas dan terarah."],
  ["04", "Mencatat keputusan", "Menjaga asumsi, scope, dan alasan di balik solusi agar proses berikutnya dapat ditinjau serta ditingkatkan."],
];

const roadmap = [
  {
    state: "Fondasi saat ini",
    title: "Information Systems",
    copy: "Lulusan Sistem Informasi Universitas Siliwangi dengan fokus pada requirements analysis, systems analysis, dan digital solutions.",
    tone: "active",
  },
  {
    state: "Arah berikutnya",
    title: "Full-Stack foundations",
    copy: "Mendalami proses membangun aplikasi web dari kebutuhan pengguna, struktur sistem, hingga pengalaman digital yang dapat digunakan.",
    tone: "planned",
  },
  {
    state: "Eksplorasi lanjutan",
    title: "AI-enabled solutions",
    copy: "Mempelajari bagaimana AI dapat memperkuat solusi digital melalui alur yang bertanggung jawab, terukur, dan berpusat pada kebutuhan pengguna.",
    tone: "planned",
  },
];

const proofRecords = [
  ["FOUNDATION", "Information Systems · Universitas Siliwangi", "2022—2026"],
  ["FOCUS", "Requirements Analysis dan Systems Analysis", "AKTIF"],
  ["DIRECTION", "Full-Stack dan AI-enabled Digital Solutions", "BERTUMBUH"],
  ["LOCATION", "Bandung, Jawa Barat, Indonesia", "INDONESIA"],
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
      <a className="skip-link" href="#main-content">Lewati ke konten utama</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kembali ke beranda Malika">
          <span className="brand-mark"><img src={ASSETS.mark} alt="" /><Mark /></span>
          <span className="brand-name">Malika<span>.</span></span>
          <small><b>MA // 01</b><span>Portfolio<br />Engineering</span></small>
        </a>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navigation.map((item) => <a key={item.href} href={item.href}>{item.label}</a>)}
        </nav>

        <a className="header-contact" href="#contact">Terbuka untuk peran <ArrowUpRight size={15} /></a>
        <button className="menu-toggle" type="button" onClick={() => setMenuOpen((open) => !open)} aria-expanded={menuOpen} aria-label={menuOpen ? "Tutup menu" : "Buka menu"}>
          {menuOpen ? <X size={22} /> : <Menu size={23} />}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <span className="mobile-menu-label">Navigasi</span>
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
            <div className="eyebrow"><span /> Portfolio Sistem Informasi · Bandung, Indonesia</div>
            <p className="hero-kicker">FULL-STACK ENGINEER · INFORMATION SYSTEMS</p>
            <h1 id="hero-title">Sistem Full-Stack, dibangun dari <em>kebutuhan</em> yang jelas.</h1>
            <p className="hero-summary">Portfolio kandidat Full-Stack Engineer dengan dasar Information Systems: menyusun kebutuhan menjadi alur, struktur sistem, dan arah AI Engineering yang dapat ditinjau serta dikembangkan.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#focus">Lihat bidang fokus <ArrowRight size={17} /></a>
              <a className="inline-link" href="#roadmap">Lihat roadmap AI <ArrowDownRight size={17} /></a>
              <a className="button button-cv" href="/manus-storage/malika-profile-cv_b8f7a275.pdf" target="_blank" rel="noreferrer"><span>Unduh CV</span><Download size={16} /></a>
            </div>
            <div className="signal-row" aria-label="Bidang kompetensi utama">
              <span><Braces size={15} /> Requirements analysis</span>
              <span><Network size={15} /> System analysis</span>
              <span><Sparkles size={15} /> AI Engineering roadmap</span>
            </div>
          </div>

          <div className="hero-visual reveal-two">
            <div className="portrait-grid" aria-hidden="true" />
            <div className="portrait-frame">
              <img src={ASSETS.portrait} alt="Foto portrait profesional Malika Fanyzar Azzahra." />
            </div>
          </div>

          <div className="hero-footnote reveal-three">
            <span>Requirements → system design → Full-Stack Engineering.</span>
            <strong>FULL-STACK ENGINEERING · AI ROADMAP</strong>
          </div>
        </section>

        <section className="motion-marquee" aria-label="Bidang engineering">
          <div className="marquee-viewport">
            <div className="marquee-track">
              <div className="marquee-set">
                <span>FULL-STACK ENGINEERING</span><i>✦</i><span>SISTEM INTERFACE</span><i>✦</i><span>DESAIN API</span><i>✦</i><span>AI ENGINEERING</span><i>✦</i><span>DELIVERY RELIABLE</span><i>✦</i>
              </div>
              <div className="marquee-set" aria-hidden="true">
                <span>FULL-STACK ENGINEERING</span><i>✦</i><span>SISTEM INTERFACE</span><i>✦</i><span>DESAIN API</span><i>✦</i><span>AI ENGINEERING</span><i>✦</i><span>DELIVERY RELIABLE</span><i>✦</i>
              </div>
            </div>
          </div>
        </section>

        <section id="focus" className="focus-section" aria-labelledby="focus-title" data-reveal>
          <div className="section-wrap">
            <div className="section-heading">
              <div className="marker-stack"><SectionMarker number="02">Bidang kompetensi</SectionMarker><span className="dossier-stamp">MA // FOCUS FILE</span></div>
              <div>
                <p className="overline">Dari insight menuju solusi</p>
                <h2 id="focus-title">Kompetensi yang membentuk <em>sistem</em> digital.</h2>
              </div>
              <p className="heading-note">Rekrutmen-ready berarti mampu menjelaskan kebutuhan, struktur sistem, keputusan implementasi, serta arah pengembangan teknologi berikutnya.</p>
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
                    <div className="focus-card-state"><span>Bidang fokus</span><b>Kompetensi yang terus dikembangkan</b></div>
                  </article>
                );
              })}
            </div>

            <div className="focus-evidence" aria-label="Catatan sistem">
              <div><span>CATATAN SISTEM / 01</span><strong>Tujuan sebelum tools</strong><p>Setiap solusi berangkat dari tujuan pengguna, kebutuhan informasi, dan batasan yang perlu dipahami lebih dulu.</p></div>
              <div><span>CATATAN SISTEM / 02</span><strong>Struktur sebelum fitur</strong><p>Alur proses, peran pengguna, serta struktur data menjadi pijakan agar pengalaman digital tidak dibangun secara terpisah.</p></div>
              <div><span>CATATAN SISTEM / 03</span><strong>Keputusan perlu alasan</strong><p>Scope, alur, dan keputusan sistem sebaiknya dapat dijelaskan agar solusi mudah ditinjau serta dikembangkan.</p></div>
            </div>

            <div className="focus-note"><ShieldCheck size={18} /><p><strong>Dasar yang terverifikasi.</strong> Portfolio ini berangkat dari latar Sistem Informasi dengan fokus pada requirements analysis, systems analysis, dan digital solutions.</p></div>
          </div>
        </section>

        <section id="approach" className="approach-section" aria-labelledby="approach-title" data-reveal>
          <div className="section-wrap approach-layout">
            <div className="approach-intro">
              <div className="marker-stack"><SectionMarker number="03">Proses kerja</SectionMarker><span className="dossier-stamp">MA // DECISION LOG</span></div>
              <h2 id="approach-title">Dari kebutuhan menuju <em>implementasi.</em></h2>
              <p>Setiap build perlu membuat keputusan terlihat: kebutuhan apa yang diprioritaskan, alur mana yang dilayani, dan struktur apa yang menjaga sistem tetap jelas.</p>
              <div className="approach-mark"><Mark /><span>Kejelasan adalah bagian dari implementasi.</span></div>
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
              <div className="marker-stack"><SectionMarker number="04">Arah pertumbuhan</SectionMarker><span className="dossier-stamp">MA // GROWTH FILE</span></div>
              <div>
                <p className="overline">Fondasi, pengembangan, eksplorasi</p>
                <h2 id="roadmap-title">Membangun kapabilitas untuk <em>solusi</em> berikutnya.</h2>
              </div>
            </div>

            <div className="roadmap-grid">
              {roadmap.map((item, index) => (
                <article className={`roadmap-card ${item.tone}`} key={item.title}>
                  <div className="roadmap-card-head"><span>{String(index + 1).padStart(2, "0")}</span><small>{item.state}</small></div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <div className="roadmap-line"><i /><span>{item.tone === "active" ? "Fondasi aktif" : "Arah pengembangan"}</span></div>
                </article>
              ))}
            </div>

            <div className="research-strip">
              <div><Layers3 size={21} /><span>Prinsip solusi</span></div>
              <p>Teknologi dipilih untuk memperjelas proses, membantu pengguna mengambil keputusan, dan memperkuat kualitas solusi digital—bukan semata untuk menambah fitur.</p>
            </div>
          </div>
        </section>

        <section className="proof-section" aria-labelledby="proof-title" data-reveal>
          <div className="section-wrap proof-layout">
            <div className="proof-copy">
              <div className="marker-stack"><SectionMarker number="05">Fondasi portfolio</SectionMarker><span className="dossier-stamp">MA // PROFILE REGISTER</span></div>
              <h2 id="proof-title">Latar yang membentuk <em>arah</em> kerja.</h2>
              <p>Dasar Sistem Informasi membangun cara pandang yang menghubungkan kebutuhan, proses, data, dan pengalaman pengguna ke dalam satu solusi digital yang utuh.</p>
            </div>
            <div className="proof-list" aria-label="Register profil portfolio">
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
              <div className="marker-stack"><SectionMarker number="06">Kontak</SectionMarker><span className="dossier-stamp">MA // AVAILABILITY FILE</span></div>
              <h2 id="contact-title">Terbuka untuk peluang <em>Full-Stack Engineering.</em></h2>
              <p>Untuk peluang kerja junior, program pengembangan, atau kolaborasi engineering yang memperluas fondasi sistem dan AI, silakan terhubung melalui email dan LinkedIn.</p>
              <div className="contact-actions">
                <a className="button button-light" href="mailto:malikafanyzara34@gmail.com">Email Malika <Mail size={17} /></a>
                <a className="inline-link light-link" href="https://www.linkedin.com/in/malika-fanyzar-azzahra-49873b292" target="_blank" rel="noreferrer">Profil LinkedIn <ArrowUpRight size={17} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div><Mark /><span>MA // 01</span><span>© 2026 Malika Fanyzar Azzahra · Indonesia</span></div>
        <p>MA // Catatan Engineering</p>
        <a href="#top" aria-label="Kembali ke atas"><ArrowUpRight size={19} /></a>
      </footer>
    </div>
  );
}
