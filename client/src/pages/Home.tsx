import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Braces,
  Check,
  ChevronRight,
  Code2,
  Database,
  Github,
  Layers3,
  Mail,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  TerminalSquare,
  X,
} from "lucide-react";

const ASSETS = {
  portrait: "/manus-storage/malika-portrait_f2240e5c.png",
  mark: "/manus-storage/malika-monogram-mark_98ec5ab0.png",
};

const navigation = [
  { label: "Fokus", href: "#focus" },
  { label: "Pendekatan", href: "#approach" },
  { label: "Roadmap", href: "#roadmap" },
  { label: "Kontak", href: "#contact" },
];

const focusAreas = [
  {
    index: "01",
    evidence: "UI / SCOPE",
    icon: Code2,
    title: "Sistem interface",
    copy: "Membangun antarmuka yang responsif, mudah dipahami, dan tersusun dari komponen yang dapat dipelihara.",
    tags: ["React", "TypeScript", "Accessible UI"],
  },
  {
    index: "02",
    evidence: "SYSTEM / SCOPE",
    icon: Database,
    title: "Fondasi aplikasi",
    copy: "Menerjemahkan kebutuhan menjadi struktur data, kontrak API, alur autentikasi, dan logika aplikasi yang jelas.",
    tags: ["API Design", "Data Modeling", "System Design"],
  },
  {
    index: "03",
    evidence: "AI / ROADMAP",
    icon: Sparkles,
    title: "Produk siap AI",
    copy: "Mempelajari cara mengintegrasikan model AI secara bertanggung jawab melalui output terstruktur, retrieval, evaluasi, dan guardrail.",
    tags: ["LLM Integration", "RAG", "Evaluation"],
  },
];

const workflow = [
  ["01", "Membingkai sistem", "Memetakan pengguna, batasan, data, dan keputusan yang perlu dibuat oleh aplikasi."],
  ["02", "Membangun alur", "Menyusun interface, API, dan struktur aplikasi sebagai satu alur yang saling mendukung."],
  ["03", "Memvalidasi perilaku", "Menguji alur penting, menangani failure state, dan mencatat asumsi sebelum iterasi berikutnya."],
  ["04", "Mendokumentasikan pembelajaran", "Mencatat keputusan teknis dan trade-off agar setiap build memperjelas langkah engineering berikutnya."],
];

const roadmap = [
  {
    state: "Sekarang",
    title: "Fondasi Full-Stack",
    copy: "Memperkuat pola aplikasi web modern: komponen UI, TypeScript, kontrak API, struktur data, dan pengalaman pengguna yang aksesibel.",
    tone: "active",
  },
  {
    state: "Build berikutnya",
    title: "Knowledge assistant dengan RAG",
    copy: "Membangun aplikasi retrieval-augmented generation dengan sumber jawaban yang jelas, batas confidence, dan pengalaman pencarian yang rapi.",
    tone: "planned",
  },
  {
    state: "Pendalaman",
    title: "Workflow AI berbasis evaluation",
    copy: "Mendokumentasikan test set, structured output, evaluasi kualitas, serta penanganan error untuk melihat AI sebagai sistem, bukan sekadar demo.",
    tone: "planned",
  },
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

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main-content">Lewati ke konten utama</a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kembali ke beranda Malika">
          <span className="brand-mark"><img src={ASSETS.mark} alt="" /><Mark /></span>
          <span className="brand-name">Malika<span>.</span></span>
          <small><b>MA // 01</b>Engineering Portfolio</small>
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
            <div className="eyebrow"><span /> Information Systems Graduate · Indonesia</div>
            <p className="hero-kicker">Positioning file / Junior Full-Stack Engineer</p>
            <h1 id="hero-title">Membangun sistem digital dengan arah <em>yang jelas</em> menuju AI.</h1>
            <p className="hero-summary">Fokus saya adalah membangun aplikasi web yang terstruktur dari interface hingga fondasinya. Di saat yang sama, saya sedang memperluas praktik ke AI Engineering melalui output terstruktur, evaluasi, dan reliability sebagai bagian dari sistem.</p>
            <div className="hero-actions">
              <a className="button button-light" href="#focus">Lihat fokus teknis <ArrowRight size={17} /></a>
              <a className="inline-link" href="#roadmap">Lihat roadmap <ArrowDownRight size={17} /></a>
            </div>
            <div className="signal-row" aria-label="Arah kompetensi teknis">
              <span><Braces size={15} /> Fondasi Full-Stack</span>
              <span><Network size={15} /> Sistem AI dalam pengembangan</span>
            </div>
          </div>

          <div className="hero-visual reveal-two">
            <div className="portrait-grid" aria-hidden="true" />
            <div className="portrait-frame">
              <img src={ASSETS.portrait} alt="Foto portrait profesional Malika Fanyzar Azzahra." />
              <div className="portrait-overlay" aria-hidden="true" />
              <div className="portrait-label"><span>Malika Fanyzar Azzahra</span><small>Full-Stack → AI Engineering</small></div>
            </div>
            <div className="system-card">
              <div className="system-card-head"><TerminalSquare size={15} /><span>Snapshot engineering</span></div>
              <div className="system-card-line"><small>CAKUPAN BUILD</small><strong>Web interface + application logic</strong></div>
              <div className="system-card-line"><small>PRAKTIK AI</small><strong>Structured output + evaluation mindset</strong></div>
              <div className="system-card-line"><small>GAYA KERJA</small><strong>Keputusan tercatat, iterasi bertahap</strong></div>
            </div>
          </div>

          <div className="hero-footnote reveal-three">
            <span>Mencari kesempatan untuk belajar, melakukan delivery, dan tumbuh bersama tim engineering.</span>
            <strong>FULL-STACK ENGINEERING · SISTEM AI</strong>
          </div>
        </section>

        <section id="focus" className="focus-section" aria-labelledby="focus-title">
          <div className="section-wrap">
            <div className="section-heading">
              <div className="marker-stack"><SectionMarker number="02">Fokus engineering</SectionMarker><span className="dossier-stamp">MA // FOCUS FILE</span></div>
              <div>
                <p className="overline">Kedalaman yang sedang dibangun</p>
                <h2 id="focus-title">Mindset Full-Stack, <em>dirancang</em> untuk langkah berikutnya.</h2>
              </div>
              <p className="heading-note">Portfolio engineering tidak hanya menampilkan tools. Ia perlu memperlihatkan scope, keputusan sistem, dan bukti build yang bisa ditinjau.</p>
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
              <div><span>BUILD NOTE / 01</span><strong>Scope sebelum tools</strong><p>Implementasi dipilih setelah alur pengguna, batasan, dan keputusan sistem dipetakan.</p></div>
              <div><span>BUILD NOTE / 02</span><strong>Bukti setelah build</strong><p>Setiap project berikutnya akan memuat repository, demo, dan catatan keputusan yang dapat ditinjau.</p></div>
              <div><span>BUILD NOTE / 03</span><strong>AI perlu evaluation</strong><p>Integrasi model perlu diuji dengan data, metrik, dan failure case—bukan hanya disaksikan saat berhasil.</p></div>
            </div>

            <div className="focus-note"><ShieldCheck size={18} /><p><strong>Honest positioning.</strong> Area di atas menunjukkan fokus kompetensi dan arah build saya. Project case study, repository, dan demo akan ditambahkan sebagai bukti kerja ketika siap dipublikasikan.</p></div>
          </div>
        </section>

        <section id="approach" className="approach-section" aria-labelledby="approach-title">
          <div className="section-wrap approach-layout">
            <div className="approach-intro">
              <div className="marker-stack"><SectionMarker number="03">Pendekatan</SectionMarker><span className="dossier-stamp">MA // DECISION LOG</span></div>
              <h2 id="approach-title">Sistem yang dapat <em>dijelaskan.</em></h2>
              <p>Saya tertarik pada engineering yang membuat keputusan terlihat: mengapa struktur dipilih, alur apa yang diuji, dan bagaimana sistem merespons ketika state tidak berjalan sempurna.</p>
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

        <section id="roadmap" className="roadmap-section" aria-labelledby="roadmap-title">
          <div className="section-wrap">
            <div className="roadmap-heading">
              <div className="marker-stack"><SectionMarker number="04">Roadmap AI Engineering</SectionMarker><span className="dossier-stamp">MA // ROADMAP FILE</span></div>
              <div>
                <p className="overline">Transisi yang terukur</p>
                <h2 id="roadmap-title">Dari aplikasi menuju sistem yang <em>AI-aware.</em></h2>
              </div>
            </div>

            <div className="roadmap-grid">
              {roadmap.map((item, index) => (
                <article className={`roadmap-card ${item.tone}`} key={item.title}>
                  <div className="roadmap-card-head"><span>{String(index + 1).padStart(2, "0")}</span><small>{item.state}</small></div>
                  <h3>{item.title}</h3>
                  <p>{item.copy}</p>
                  <div className="roadmap-line"><i /><span>{item.tone === "active" ? "Sedang dibangun" : "Project terencana"}</span></div>
                </article>
              ))}
            </div>

            <div className="research-strip">
              <div><Layers3 size={21} /><span>Prinsip portfolio</span></div>
              <p>Untuk proyek AI, prioritasnya adalah kualitas retrieval, structured output, evaluation, deployment, dan failure case—bukan hanya tampilan demo yang menarik.</p>
            </div>
          </div>
        </section>

        <section className="proof-section" aria-labelledby="proof-title">
          <div className="section-wrap proof-layout">
            <div className="proof-copy">
              <div className="marker-stack"><SectionMarker number="05">Bukti portfolio</SectionMarker><span className="dossier-stamp">MA // EVIDENCE REGISTER</span></div>
              <h2 id="proof-title">Bukti berikutnya lahir dari <em>build.</em></h2>
              <p>Website ini adalah baseline portfolio engineering. Tahap berikutnya adalah menambahkan case study aplikasi Full-Stack, repository publik, catatan arsitektur, status deployment, dan demo yang dapat diuji langsung.</p>
            </div>
            <div className="proof-list">
              <div><Check size={18} /><span>Case study aplikasi yang dapat dijalankan</span></div>
              <div><Check size={18} /><span>Catatan arsitektur dan keputusan API</span></div>
              <div><Check size={18} /><span>Project AI dengan bukti evaluation</span></div>
              <div><Check size={18} /><span>Repository GitHub dan tautan deployment</span></div>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <div className="contact-grid-pattern" aria-hidden="true" />
          <div className="section-wrap contact-layout">
            <div className="contact-mark"><Mark /><span>MA //<br />06</span></div>
            <div className="contact-copy">
              <div className="marker-stack"><SectionMarker number="06">Kontak</SectionMarker><span className="dossier-stamp">MA // AVAILABILITY FILE</span></div>
              <h2 id="contact-title">Tersedia untuk peran <em>Engineering</em> junior.</h2>
              <p>Saya mencari lingkungan engineering untuk berkontribusi pada aplikasi web end-to-end, mendokumentasikan keputusan teknis, dan mengembangkan fondasi AI Engineering secara bertanggung jawab.</p>
              <div className="contact-actions">
                <a className="button button-light" href="mailto:malikafanyzara34@gmail.com">Email Malika <Mail size={17} /></a>
                <a className="inline-link light-link" href="https://www.linkedin.com/in/malika-fanyzar-azzahra-49873b292" target="_blank" rel="noreferrer">Profil LinkedIn <ArrowUpRight size={17} /></a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div><Mark /><span>© 2026 Malika Fanyzar Azzahra</span><span>Indonesia</span></div>
        <p>MA // Catatan Engineering</p>
        <a href="#top" aria-label="Kembali ke atas"><ArrowUpRight size={19} /></a>
      </footer>
    </div>
  );
}
