/**
 * STYLE REMINDER — Soft Systems Editorial:
 * New editorial minimalism with warm ivory space, Mulberry Ink accents,
 * elegant display serif, asymmetric rails, and evidence presented with grace.
 */
import { useState } from "react";
import {
  ArrowDownRight,
  ArrowRight,
  ArrowUpRight,
  Check,
  ChevronDown,
  CircleDot,
  ExternalLink,
  Mail,
  Menu,
  MoveRight,
  Sparkles,
  X,
} from "lucide-react";

const ASSETS = {
  hero: "/manus-storage/malika-hero-systems-editorial_bd996974.jpg",
  caseStudy: "/manus-storage/malika-case-study-abstract_a37b498a.jpg",
  paperDetail: "/manus-storage/malika-paper-texture-detail_c142145d.jpg",
  mark: "/manus-storage/malika-monogram-mark_98ec5ab0.png",
};

const navItems = [
  { label: "Work", href: "#work" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "#contact" },
];

const capabilities = [
  {
    number: "01",
    title: "Understand",
    copy: "Memetakan kebutuhan pengguna, konteks layanan, dan masalah yang benar-benar perlu diselesaikan.",
    tags: ["Requirements Analysis", "User Needs", "Information Systems"],
  },
  {
    number: "02",
    title: "Structure",
    copy: "Menyusun peran, alur, hak akses, dan struktur informasi agar sistem menjadi lebih mudah dipahami.",
    tags: ["Systems Analysis", "UML", "Process Mapping"],
  },
  {
    number: "03",
    title: "Build & validate",
    copy: "Menerjemahkan struktur menjadi pengalaman digital lalu mengecek apakah setiap fungsi berjalan sesuai kebutuhan.",
    tags: ["Web Development", "Interface Flow", "Functional Testing"],
  },
];

const roles = [
  {
    title: "User / UMKM",
    copy: "Mengirim pengaduan, menerima nomor pengaduan, lalu mengecek perkembangan secara mandiri.",
    tone: "plum",
  },
  {
    title: "Admin Kelurahan",
    copy: "Meninjau detail, memberi catatan tindak lanjut, dan memperbarui status penanganan.",
    tone: "apricot",
  },
  {
    title: "Admin BPS",
    copy: "Memonitor data, melihat detail, dan mengunduh rekap tanpa mengubah status pengaduan.",
    tone: "sage",
  },
];

const radStages = [
  ["01", "Requirement planning", "Mengidentifikasi keterbatasan tracking pada sistem existing."],
  ["02", "User design", "Menyusun alur, model peran, dan prototype interaksi."],
  ["03", "Construction", "Menerapkan tracking, catatan tindak lanjut, akses peran, dan ekspor data."],
  ["04", "Cutover", "Menguji fungsi utama melalui skenario Functional Testing."],
];

function SectionLabel({ number, children }: { number: string; children: string }) {
  return (
    <div className="section-label">
      <span>{number}</span>
      <i />
      <p>{children}</p>
    </div>
  );
}

function Monogram({ className = "" }: { className?: string }) {
  return (
    <svg className={`monogram ${className}`} viewBox="0 0 88 72" aria-hidden="true">
      <path d="M10 61V14l20 30L49 14v47" />
      <path d="M44 61 62 13l18 48M51 43h22" />
      <circle cx="49" cy="14" r="3.5" />
    </svg>
  );
}

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main-content">
        Lewati ke konten utama
      </a>

      <header className="site-header">
        <a className="brand" href="#top" aria-label="Kembali ke beranda Malika">
          <span className="brand-symbol" aria-hidden="true">
            <img src={ASSETS.mark} alt="" className="brand-generated-seal" />
            <Monogram />
          </span>
          <span>Malika<span className="brand-dot">.</span></span>
        </a>

        <nav className="desktop-nav" aria-label="Navigasi utama">
          {navItems.map((item) => (
            <a key={item.href} href={item.href}>
              {item.label}
            </a>
          ))}
        </nav>

        <a className="nav-contact" href="#contact">
          Let&apos;s connect <ArrowUpRight size={15} strokeWidth={1.8} />
        </a>

        <button
          type="button"
          className="menu-toggle"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
        >
          {menuOpen ? <X size={21} /> : <Menu size={22} />}
        </button>
      </header>

      <div className={`mobile-menu ${menuOpen ? "is-open" : ""}`} aria-hidden={!menuOpen}>
        <div className="mobile-menu-note">Navigate</div>
        {navItems.map((item, index) => (
          <a key={item.href} href={item.href} onClick={closeMenu} style={{ transitionDelay: `${60 + index * 55}ms` }}>
            <span>0{index + 1}</span>
            {item.label}
            <ArrowDownRight size={23} strokeWidth={1.5} />
          </a>
        ))}
        <a className="mobile-email" href="mailto:malikafanyzara34@gmail.com" onClick={closeMenu}>
          malikafanyzara34@gmail.com
        </a>
      </div>

      <main id="main-content">
        <section id="top" className="hero-section" aria-labelledby="hero-title">
          <div className="hero-rail" aria-hidden="true">
            <span>01</span>
            <i />
            <p>PORTFOLIO / 2026</p>
          </div>

          <div className="hero-copy reveal-one">
            <div className="eyebrow">
              <span className="eyebrow-dot" />
              Information Systems Graduate · Bandung, Indonesia
            </div>
            <h1 id="hero-title">
              Designing <em>clearer</em> digital solutions through systems thinking.
            </h1>
            <p className="hero-intro">
              Saya menghubungkan kebutuhan pengguna, proses bisnis, dan teknologi untuk membangun pengalaman digital yang lebih terstruktur, relevan, dan mudah dipahami.
            </p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                Lihat proyek unggulan <ArrowRight size={17} strokeWidth={1.8} />
              </a>
              <a className="text-link" href="#about">
                Tentang Malika <ArrowDownRight size={17} strokeWidth={1.8} />
              </a>
            </div>
          </div>

          <div className="hero-visual reveal-two">
            <div className="hero-visual-frame">
              <img src={ASSETS.hero} alt="Komposisi editorial abstrak yang merepresentasikan alur sistem dan kejelasan proses." />
            </div>
            <div className="evidence-ticket" aria-hidden="true">
              <div><span>CASE / 01</span><span>3 ROLES</span><span>27 VALIDATED</span></div>
              <i />
              <p>tracking → follow up → clarity</p>
            </div>
            <div className="visual-caption top-caption">
              <span>Systems</span>
              <span>with care</span>
            </div>
            <div className="visual-caption bottom-caption">
              <span className="caption-node" />
              Mulberry Ink / #6B3D58
            </div>
          </div>

          <div className="hero-footnote reveal-three">
            <span>Open to opportunities in</span>
            <strong>Business Analysis · Systems Analysis · Digital Solutions</strong>
          </div>
        </section>

        <section id="work" className="work-section" aria-labelledby="work-title">
          <div className="content-rail">
            <SectionLabel number="02">Selected work</SectionLabel>
          </div>

          <div className="work-heading">
            <div>
              <p className="kicker">A closer look at how I think and build.</p>
              <h2 id="work-title">A system is only useful when people can <em>understand</em> its next step.</h2>
            </div>
            <p className="work-heading-note">Featured case study</p>
          </div>

          <article className="featured-project" aria-labelledby="project-title">
            <div className="project-main">
              <div className="project-image-wrap">
                <img src={ASSETS.caseStudy} alt="Visual konseptual tentang tiga peran yang terhubung dalam alur pelacakan pengaduan." className="project-image" />
                <div className="route-fragment" aria-hidden="true"><span /> <i /> <span /> <i /> <span /></div>
                <div className="project-stamp">CASE STUDY<br />2026</div>
                <div className="project-image-note">Documented flow · visual abstraction</div>
              </div>

              <div className="project-card-copy">
                <div className="project-meta">
                  <span>Information Systems</span>
                  <span>·</span>
                  <span>Web Development</span>
                  <span>·</span>
                  <span>Systems Analysis</span>
                </div>
                <h3 id="project-title">LaporinAja — Complaint Status Tracking System</h3>
                <p>
                  Mengembangkan fitur pelacakan status pada sistem pengaduan UMKM agar pelapor dapat melihat perkembangan tindak lanjut secara mandiri, dengan peran administratif yang tetap terpisah secara jelas.
                </p>
                <a href="#case-study" className="button button-dark">
                  Baca studi kasus <MoveRight size={17} strokeWidth={1.8} />
                </a>
              </div>
            </div>

            <div className="project-proof">
              <div>
                <strong>27</strong>
                <span>Skenario Functional Testing yang terdokumentasi valid</span>
              </div>
              <div>
                <strong>3</strong>
                <span>Peran pengguna dengan kewenangan yang dipisahkan</span>
              </div>
              <div>
                <strong>4</strong>
                <span>Tahap pengembangan dalam pendekatan RAD</span>
              </div>
            </div>
          </article>
        </section>

        <section id="about" className="about-section" aria-labelledby="about-title">
          <div className="about-art" aria-hidden="true">
            <div className="about-art-image">
              <img src={ASSETS.paperDetail} alt="" />
            </div>
            <span className="about-art-note">Simplicity holds<br />the system together.</span>
          </div>

          <div className="about-copy">
            <SectionLabel number="03">About Malika</SectionLabel>
            <h2 id="about-title">Curious about what makes a digital experience feel <em>clear.</em></h2>
            <p>
              Saya adalah lulusan Sistem Informasi dari Universitas Siliwangi yang tertarik memahami bagaimana sebuah sistem bekerja dari sisi pengguna, proses, dan kebutuhan bisnis.
            </p>
            <p>
              Saya menikmati proses merapikan masalah yang kompleks menjadi alur yang lebih jelas—mulai dari memahami kebutuhan, menyusun struktur solusi, hingga melihat bagaimana solusi tersebut diterapkan dan diuji.
            </p>
            <div className="about-signature">
              <Monogram />
              <div>
                <span>Currently exploring</span>
                <strong>Business Analysis, Systems Analysis, dan Digital Product Development</strong>
              </div>
            </div>
          </div>
        </section>

        <section className="capability-section" aria-labelledby="capability-title">
          <div className="capability-head">
            <SectionLabel number="04">Capabilities</SectionLabel>
            <div>
              <p className="kicker">What I bring into the room.</p>
              <h2 id="capability-title">A practical lens for finding structure in the details.</h2>
            </div>
          </div>

          <div className="capability-list">
            {capabilities.map((capability) => (
              <article className="capability-item" key={capability.number}>
                <div className="capability-number">{capability.number}</div>
                <div className="capability-content">
                  <h3>{capability.title}</h3>
                  <p>{capability.copy}</p>
                </div>
                <div className="tag-list" aria-label={`Kemampuan ${capability.title}`}>
                  {capability.tags.map((tag) => <span key={tag}>{tag}</span>)}
                </div>
              </article>
            ))}
          </div>
        </section>

        <section id="case-study" className="case-study-section" aria-labelledby="case-study-title">
          <div className="case-top">
            <div>
              <SectionLabel number="05">LaporinAja · Case study</SectionLabel>
              <h2 id="case-study-title">From a complaint number to a <em>clearer</em> next step.</h2>
            </div>
            <div className="case-summary">
              <span className="case-summary-label">The starting point</span>
              <p>Sistem dapat menerima pengaduan, tetapi belum dapat menunjukkan perkembangan setelah pengaduan dikirim.</p>
            </div>
          </div>

          <div className="case-overview-grid">
            <div className="case-problem">
              <span className="detail-label">Problem</span>
              <p>
                Pada sistem sebelumnya, nomor pengaduan berfungsi sebagai bukti pengiriman. Untuk mengetahui tindak lanjut, pelapor masih perlu menghubungi petugas secara langsung.
              </p>
            </div>
            <div className="case-goal">
              <span className="detail-label">Goal</span>
              <p>
                Memungkinkan pelapor mengecek status secara mandiri sambil menjaga pemisahan kewenangan antara pihak yang menangani dan pihak yang memonitor data.
              </p>
            </div>
            <div className="case-role-pill">
              <span className="detail-label">My contribution</span>
              <p>Research · Systems Analysis · Feature Development</p>
              <small>Timeline & stack: to be confirmed</small>
            </div>
          </div>

          <div className="roles-layout">
            <div className="roles-intro">
              <span className="detail-label">Role-based thinking</span>
              <h3>Three people, one transparent flow.</h3>
              <p>Struktur akses membantu memastikan siapa yang dapat memperbarui proses dan siapa yang hanya melakukan monitoring.</p>
            </div>
            <div className="roles-list">
              {roles.map((role, index) => (
                <article className={`role-card role-${role.tone}`} key={role.title}>
                  <span>0{index + 1}</span>
                  <h4>{role.title}</h4>
                  <p>{role.copy}</p>
                  <ArrowDownRight size={21} strokeWidth={1.45} />
                </article>
              ))}
            </div>
          </div>

          <div className="tracking-flow">
            <div className="tracking-heading">
              <span className="detail-label">The tracking experience</span>
              <h3>A simple verification,<br /><em>a visible process.</em></h3>
            </div>
            <ol className="flow-steps">
              <li><span>01</span><p>Pelapor mengirim pengaduan tanpa perlu login.</p></li>
              <li><span>02</span><p>Sistem menampilkan nomor pengaduan yang dapat disalin.</p></li>
              <li><span>03</span><p>Pelapor memasukkan nomor pengaduan dan empat digit terakhir WhatsApp.</p></li>
              <li><span>04</span><p>Jika data cocok, sistem menampilkan status dan catatan tindak lanjut.</p></li>
            </ol>
          </div>

          <div className="status-board">
            <div className="status-board-copy">
              <span className="detail-label">Status journey</span>
              <h3>Progress made visible.</h3>
              <p>Status diperbarui Admin Kelurahan dan disinkronkan kembali ke halaman tracking pelapor.</p>
            </div>
            <div className="status-line" aria-label="Alur status pengaduan">
              <div className="status-item is-complete">
                <span><Check size={14} strokeWidth={2.4} /></span>
                <strong>Menunggu ditindaklanjuti</strong>
                <small>Pengaduan diterima</small>
              </div>
              <i />
              <div className="status-item is-current">
                <span><CircleDot size={15} strokeWidth={2.2} /></span>
                <strong>Sedang ditindaklanjuti</strong>
                <small>Proses berjalan</small>
              </div>
              <i />
              <div className="status-item">
                <span>3</span>
                <strong>Selesai</strong>
                <small>Tindak lanjut selesai</small>
              </div>
            </div>
          </div>

          <div className="rad-layout">
            <div className="rad-copy">
              <span className="detail-label">Method</span>
              <h3>Fast iteration, guided by real needs.</h3>
              <p>Pengembangan mengikuti pendekatan Rapid Application Development (RAD), karena fokusnya adalah meningkatkan sistem yang sudah ada dengan lingkup yang jelas.</p>
            </div>
            <ol className="rad-list">
              {radStages.map(([number, title, copy]) => (
                <li key={number}>
                  <span>{number}</span>
                  <div><strong>{title}</strong><p>{copy}</p></div>
                </li>
              ))}
            </ol>
          </div>

          <div className="testing-banner">
            <div className="testing-number">27<span>×</span></div>
            <div className="testing-copy">
              <span className="detail-label">Functional testing</span>
              <h3>Every documented scenario produced the expected output.</h3>
            </div>
            <div className="testing-list">
              <span><Check size={14} /> Submission & evidence</span>
              <span><Check size={14} /> Tracking & verification</span>
              <span><Check size={14} /> Role-based administration</span>
              <span><Check size={14} /> Status updates & data export</span>
            </div>
          </div>

          <details className="learning-note">
            <summary>
              <span><Sparkles size={17} /> What I would explore next</span>
              <ChevronDown size={18} />
            </summary>
            <div>
              <p>Pengembangan ini berfokus pada verifikasi fungsi. Tahap selanjutnya dapat mencakup usability testing atau UAT, notifikasi otomatis melalui WhatsApp atau email, serta mekanisme keamanan yang lebih kuat seperti OTP atau login pengguna.</p>
            </div>
          </details>
        </section>

        <section id="process" className="process-section" aria-labelledby="process-title">
          <aside className="publication-rail process-publication-rail" aria-hidden="true"><span>06</span><i /><small>WORKING NOTES</small></aside>
          <div className="process-heading">
            <SectionLabel number="06">Process</SectionLabel>
            <h2 id="process-title">Listen, map, build, <em>learn.</em></h2>
          </div>
          <div className="process-grid">
            <article><span>01</span><h3>Listen</h3><p>Memahami konteks, pengguna, dan masalah yang ingin diselesaikan.</p></article>
            <article><span>02</span><h3>Map</h3><p>Menyusun kebutuhan, peran, alur, dan struktur informasi agar masalah lebih mudah dilihat.</p></article>
            <article><span>03</span><h3>Build</h3><p>Menerjemahkan struktur tersebut menjadi fitur dan pengalaman digital yang dapat digunakan.</p></article>
            <article><span>04</span><h3>Learn</h3><p>Menguji, menerima masukan, mengenali keterbatasan, lalu memperbaiki solusi secara bertahap.</p></article>
          </div>
        </section>

        <section className="education-section" aria-labelledby="education-title">
          <aside className="publication-rail education-publication-rail" aria-hidden="true"><span>07</span><i /><small>RESEARCH TRAIL</small></aside>
          <SectionLabel number="07">Education & milestones</SectionLabel>
          <div className="education-layout">
            <h2 id="education-title">Built through <em>curiosity</em>, research, and thoughtful practice.</h2>
            <div className="timeline">
              <article>
                <span>2026</span>
                <div><strong>LaporinAja · Final Project</strong><p>Pengembangan fitur pelacakan pengaduan pada sistem informasi pengaduan layanan masyarakat dalam konteks Program Desa Cinta Statistik.</p></div>
              </article>
              <article>
                <span>2022—2026</span>
                <div><strong>Universitas Siliwangi</strong><p>Program Studi Sistem Informasi.</p></div>
              </article>
              <article>
                <span>2019—2022</span>
                <div><strong>SMAN 2 Tasikmalaya</strong><p>Pendidikan menengah atas, peminatan Ilmu Pengetahuan Alam.</p></div>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="contact-section" aria-labelledby="contact-title">
          <aside className="publication-rail contact-publication-rail" aria-hidden="true"><span>08</span><i /><small>OPEN CHANNEL</small></aside>
          <div className="contact-mark-wrap" aria-hidden="true">
            <Monogram className="contact-monogram" />
            <span>Let&apos;s<br />connect</span>
          </div>
          <div className="contact-copy">
            <SectionLabel number="08">Contact</SectionLabel>
            <h2 id="contact-title">Punya masalah yang bisa dibuat <em>lebih jelas?</em></h2>
            <p>Saya terbuka untuk peluang, percakapan, dan kolaborasi yang mempertemukan kebutuhan manusia dengan solusi digital yang lebih bermakna.</p>
            <div className="contact-actions">
              <a className="button button-primary" href="mailto:malikafanyzara34@gmail.com">
                Kirim email <Mail size={17} strokeWidth={1.8} />
              </a>
              <a className="contact-social" href="https://www.linkedin.com/in/malika-fanyzar-azzahra-49873b292" target="_blank" rel="noreferrer">
                LinkedIn <ExternalLink size={16} strokeWidth={1.8} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div><span className="footer-knot"><Monogram /></span><span>© 2026 Malika Fanyzar Azzahra</span><span>Bandung, Indonesia</span></div>
        <p>Built with curiosity, structure, and care.</p>
        <a href="#top" aria-label="Kembali ke atas"><ArrowUpRight size={19} /></a>
      </footer>
    </div>
  );
}
