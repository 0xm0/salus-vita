import { Link } from "react-router-dom"
import Planet from "../Planet.jsx"
import FangMark from "../components/ui/FangMark"

const rd = (ms) => ({ "--rd": `${ms}ms` })

/* Inline icons */
const Icon = {
  globe: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
    </svg>
  ),
  procurement: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42Z" />
      <path d="M12 5.36 8.87 8.5a2.13 2.13 0 0 0 0 3h0a2.13 2.13 0 0 0 3 0l2.26-2.21" />
    </svg>
  ),
  docs: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" /><path d="M14 2v6h6" /><path d="M16 13H8" /><path d="M16 17H8" /><path d="M10 9H8" />
    </svg>
  ),
  crossborder: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12h4l3-9 4 18 3-9h4" /><path d="M2 20h20" />
    </svg>
  ),
  logistics: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <rect x="1" y="3" width="15" height="13" rx="2" /><path d="M16 8h4l3 3v5a2 2 0 0 1-2 2h-1" /><circle cx="5.5" cy="18.5" r="2.5" /><circle cx="18.5" cy="18.5" r="2.5" /><path d="M8 18h8" />
    </svg>
  ),
  bespoke: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><circle cx="12" cy="12" r="6" /><circle cx="12" cy="12" r="2" />
    </svg>
  ),
  arrow: (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
    </svg>
  ),
}

const CAPABILITIES = [
  {
    icon: Icon.globe,
    title: "Global Sourcing",
    body: "Identifying and assessing pharmaceutical manufacturers across key international markets, connecting buyers with quality-assured production facilities.",
    to: "/capabilities/global-sourcing",
  },
  {
    icon: Icon.procurement,
    title: "International Procurement",
    body: "Coordinating the full procurement cycle from commercial negotiation and supplier engagement through to order fulfilment and shipment confirmation.",
    to: "/capabilities/international-procurement",
  },
  {
    icon: Icon.docs,
    title: "Technical Documentation",
    body: "Facilitating the collation and review of regulatory dossiers, certificates of analysis, stability data, and GMP documentation required for market access.",
    to: "/capabilities/technical-documentation",
  },
  {
    icon: Icon.crossborder,
    title: "Cross-Border Supply",
    body: "Navigating the regulatory and commercial complexities of international pharmaceutical trade, facilitating compliant product movement between jurisdictions.",
    to: "/capabilities/cross-border-supply",
  },
  {
    icon: Icon.logistics,
    title: "Logistics Coordination",
    body: "Coordinating temperature-controlled, GDP-aligned freight and logistics through vetted partners, ensuring product integrity from point of manufacture to destination.",
    to: "/capabilities/logistics",
  },
  {
    icon: Icon.bespoke,
    title: "Bespoke Sourcing",
    body: "Tailored procurement solutions for hard-to-find APIs, niche generics, and specialty pharmaceutical products that standard commercial channels cannot readily access.",
    to: "/capabilities/bespoke-sourcing",
  },
]

const STATS = [
  { value: "8+", label: "Countries Sourced" },
  { value: "30+", label: "Manufacturer Contacts" },
  { value: "3", label: "Transaction Pathways" },
  { value: "100%", label: "Compliance Focus" },
]

const PATHWAYS = [
  {
    title: "Australian Importation",
    desc: "Salus Vita coordinates the importation of pharmaceutical products into Australia on behalf of buyers, managing regulatory documentation, supplier engagement, and logistics through to delivery.",
  },
  {
    title: "Cross-Border Facilitation",
    desc: "We facilitate direct manufacturer-to-buyer transactions across international borders, coordinating documentation, quality assurance requirements, and freight logistics between jurisdictions.",
  },
  {
    title: "Manufacturer-to-Distributor",
    desc: "Salus Vita connects overseas manufacturers with established distributors in target markets, coordinating the commercial and regulatory framework to enable ongoing supply relationships.",
  },
]


export default function Home() {
  return (
    <>
      {/* ---- SECTION 1: HERO ---- */}
      <header className="home-hero">
        <Planet />

        {/* Fang mark watermark */}
        <svg
          className="hero-fang-watermark"
          viewBox="0 0 48 48"
          width="360"
          height="360"
          style={{
            position: "absolute",
            right: "8%",
            top: "50%",
            transform: "translateY(-50%)",
            opacity: 0.05,
            pointerEvents: "none",
            zIndex: 1,
          }}
          aria-hidden="true"
        >
          <g transform="translate(24, 22)">
            <path d="M -10,-16 C -10,-16 -12,0 -4,10 C 0,15 6,16 6,16" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
            <path d="M 10,-16 C 10,-16 12,0 4,10 C 0,15 -6,16 -6,16" fill="none" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round"/>
            <circle cx="0" cy="20" r="1.5" fill="#ffffff"/>
          </g>
        </svg>

        <div style={{ flex: 1, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "96px 0 0", position: "relative", zIndex: 2 }}>
          <span className="eyebrow" data-reveal style={rd(60)}>
            AUSTRALIAN-HEADQUARTERED | INTERNATIONAL PHARMACEUTICAL SUPPLY
          </span>
          <h1 data-reveal style={rd(120)}>
            Connecting Pharmaceutical Manufacturers with Markets Worldwide
          </h1>
          <p data-reveal style={rd(200)}>
            We coordinate the movement of pharmaceutical ingredients and finished dosage forms
            between quality-assured manufacturers and global buyers.
          </p>
          <div className="hero-actions" data-reveal style={rd(300)}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">
              Discuss Your Requirements {Icon.arrow}
            </Link>
            <Link to="/capabilities" className="btn btn-outline">
              Explore Our Capabilities
            </Link>
          </div>
        </div>

      </header>

      {/* ---- SECTION 2: CAPABILITIES ---- */}
      <section className="home-section">
        <div className="section" id="capabilities">
          <div className="section-head">
            <h2 data-reveal style={rd(80)}>Pharmaceutical Sourcing and Supply Coordination</h2>
            <p data-reveal style={rd(160)}>
              From manufacturer identification and assessment through to procurement coordination,
              documentation facilitation, and logistics management, Salus Vita provides a structured
              approach to international pharmaceutical supply.
            </p>
          </div>
          <div className="feature-grid">
            {CAPABILITIES.map((c, i) => (
              <Link to={c.to} key={c.title} className="card" data-reveal style={{ ...rd(i * 90), textDecoration: "none", color: "inherit" }}>
                <span className="card-icon">{c.icon}</span>
                <h3>{c.title}</h3>
                <p>{c.body}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div style={{ textAlign: "center", padding: "8px 0" }}>
        <FangMark size={24} strokeColor="rgba(15, 61, 34, 0.25)" dotColor="rgba(45, 138, 86, 0.3)" />
      </div>

      {/* ---- SECTION 3: SHOWCASE / OPERATING MODEL ---- */}
      <section className="home-section home-section--white">
        <div className="section">
          <div className="showcase-grid">
            <div className="showcase-copy">
              <span className="eyebrow" data-reveal>Three pathways, one approach</span>
              <h2 data-reveal style={rd(90)}>Three Transaction Pathways, One Coordinated Approach</h2>
              <p data-reveal style={rd(180)}>
                Salus Vita operates across three principal transaction pathways, each tailored to the
                regulatory, commercial, and logistical requirements of the parties involved. We do not
                manufacture, warehouse, or hold GMP certifications. Instead, we coordinate and facilitate
                each stage of the supply process on behalf of our partners.
              </p>

              {PATHWAYS.map((item, i) => (
                <div key={item.title} data-reveal style={{ ...rd(220 + i * 90), marginBottom: i < 2 ? 16 : 0, paddingLeft: 16, borderLeft: "3px solid rgba(45, 138, 86, 0.25)" }}>
                  <h3 style={{ fontSize: 17, fontWeight: 700, color: "#0f3d22", marginBottom: 8 }}>{item.title}</h3>
                  <p style={{ fontSize: 15, lineHeight: 1.65 }}>{item.desc}</p>
                </div>
              ))}

              <Link to="/about" className="btn btn-primary" data-reveal style={rd(500)}>
                Learn More About Our Model {Icon.arrow}
              </Link>
            </div>

            <div className="dashboard" data-reveal style={rd(160)} aria-hidden="true">
              <div className="dash-top">
                <span className="dash-title">Supply Pipeline</span>
                <span className="dash-live"><span className="pill-dot" /> Active</span>
              </div>
              <div className="dash-bars">
                {[62, 88, 47, 95, 71, 80, 58].map((h, i) => (
                  <span key={i} className="dash-bar" style={{ "--h": `${h}%`, "--d": `${i * 90}ms` }} />
                ))}
              </div>
              <div className="dash-rows">
                {["API Sourcing", "Documentation Review", "Logistics Coordination", "Delivered"].map((r, i) => (
                  <div className="dash-row" key={r}>
                    <span>{r}</span>
                    <span className="dash-track"><span className="dash-fill" style={{ "--w": `${[90, 72, 48, 34][i]}%` }} /></span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      <div style={{ textAlign: "center", padding: "8px 0" }}>
        <FangMark size={24} strokeColor="rgba(15, 61, 34, 0.25)" dotColor="rgba(45, 138, 86, 0.3)" />
      </div>

      {/* ---- SECTION 3B: STATS ---- */}
      <section className="home-section home-section--pale">
        <div className="section">
          <div className="stats">
            {STATS.map((s, i) => (
              <div className="stat" key={s.label} data-reveal style={rd(i * 80)}>
                <span className="stat-value">{s.value}</span>
                <span className="stat-label">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ---- SECTION 4: CTA ---- */}
      <section className="home-section">
        <div className="section">
          <div className="cta-card" data-reveal>
            <h2 data-reveal style={rd(140)}>Discuss Your Requirements with Salus Vita</h2>
            <p data-reveal style={rd(220)}>
              Whether you are a manufacturer seeking access to new markets or a buyer seeking
              quality-assured pharmaceutical products, our team is ready to discuss how we can
              coordinate a solution tailored to your needs. We operate across Australia and
              internationally, supporting clients through every stage of the supply process.
            </p>
            <div className="hero-actions" data-reveal style={rd(300)}>
              <Link to="/contact/sourcing-enquiry" className="btn btn-primary">
                Submit a Sourcing Enquiry {Icon.arrow}
              </Link>
              <Link to="/capabilities" className="btn btn-outline">
                Explore Capabilities
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
