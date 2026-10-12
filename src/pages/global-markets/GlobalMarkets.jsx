import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const REGIONS = [
  {
    title: "Australia & New Zealand",
    desc: "Our home market and operational headquarters. Deep expertise in TGA and Medsafe regulatory frameworks, established distribution relationships, and direct coordination with local prescribers and hospital networks.",
    to: "/global-markets/australia-new-zealand",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="20" cy="20" r="18" stroke="#176E79" strokeWidth="1.5" fill="none" />
        <path d="M14 22c1-2 3-3 5-2s3 2 5 1 3-3 4-2" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="18" cy="24" r="1.5" fill="#176E79" />
        <circle cx="24" cy="20" r="1" fill="#176E79" />
        <path d="M2 20h36M20 2v36" stroke="#176E79" strokeWidth="0.5" opacity="0.3" />
        <ellipse cx="20" cy="20" rx="10" ry="18" stroke="#176E79" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Asia Pacific",
    desc: "The world's fastest-growing pharmaceutical region. Salus Vita facilitates access across ASEAN, Japan, South Korea, and Greater China through established local partnerships and regulatory intelligence.",
    to: "/global-markets/asia-pacific",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="20" cy="20" r="18" stroke="#176E79" strokeWidth="1.5" fill="none" />
        <path d="M22 10c-1 2-1 4 1 5s4 0 5 2-1 4-3 5" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M16 18c1 1 2 3 1 5s-2 3-1 4" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="26" cy="14" r="1" fill="#176E79" />
        <path d="M2 20h36M20 2v36" stroke="#176E79" strokeWidth="0.5" opacity="0.3" />
        <ellipse cx="20" cy="20" rx="10" ry="18" stroke="#176E79" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Europe",
    desc: "Mature regulatory environments with rigorous quality expectations. We coordinate supply across EMA centralised procedures, national variations, and post-Brexit MHRA pathways.",
    to: "/global-markets/europe",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="20" cy="20" r="18" stroke="#176E79" strokeWidth="1.5" fill="none" />
        <path d="M16 10c0 2 1 4 3 5s2 3 1 5-3 2-3 4" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 12c1 1 1 3 0 4" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="19" cy="16" r="1" fill="#176E79" />
        <path d="M2 20h36M20 2v36" stroke="#176E79" strokeWidth="0.5" opacity="0.3" />
        <ellipse cx="20" cy="20" rx="10" ry="18" stroke="#176E79" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
  },
  {
    title: "Middle East & Africa",
    desc: "High-growth markets with expanding healthcare infrastructure. Salus Vita facilitates market entry across the GCC states, North Africa, and Sub-Saharan Africa through tailored regulatory and distribution strategies.",
    to: "/global-markets/middle-east-africa",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="20" cy="20" r="18" stroke="#176E79" strokeWidth="1.5" fill="none" />
        <path d="M17 12c1 3 0 6-1 8s0 5 2 7" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M22 14c0 2 1 3 2 4" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="20" cy="18" r="1" fill="#176E79" />
        <path d="M2 20h36M20 2v36" stroke="#176E79" strokeWidth="0.5" opacity="0.3" />
        <ellipse cx="20" cy="20" rx="10" ry="18" stroke="#176E79" strokeWidth="0.5" opacity="0.3" />
      </svg>
    ),
  },
]

const PATHWAYS = [
  {
    title: "Australian Importation",
    desc: "Products sourced from international manufacturers and imported into Australia under TGA regulatory oversight. Salus Vita coordinates manufacturer qualification, import licensing, TGA GMP clearance, and local distribution to wholesalers, hospital pharmacies, and registered healthcare providers.",
    step: "01",
  },
  {
    title: "Cross-Border Facilitation",
    desc: "International transactions where products move between two markets outside Australia. Salus Vita acts as the coordinating intermediary, managing documentation, regulatory alignment, quality verification, and logistics between the manufacturing origin and the destination market.",
    step: "02",
  },
  {
    title: "Manufacturer-to-Distributor",
    desc: "Direct supply pathways connecting qualified manufacturers with in-market distributors. Salus Vita assesses both counterparties, facilitates commercial terms, coordinates regulatory submissions, and provides ongoing quality oversight throughout the relationship.",
    step: "03",
  },
]

const STATS = [
  { value: "4", label: "Operating Regions" },
  { value: "30+", label: "Active Market Jurisdictions" },
  { value: "3", label: "Transaction Pathway Models" },
  { value: "100%", label: "Counterparty Assessed" },
]

export default function GlobalMarkets() {
  return (
    <>
      <PageHero
        eyebrow="GLOBAL REACH"
        title="International Pharmaceutical Supply Without Geographic Boundaries"
        description="Headquartered in Australia with coordination capabilities spanning the Asia-Pacific, Europe, and the Middle East and Africa, Salus Vita facilitates pharmaceutical supply wherever quality medicines are needed and qualified counterparties are ready to transact."
        primaryCTA={{ label: "Discuss Market Entry", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "Our Capabilities", to: "/capabilities" }}
      />

      {/* International Reach */}
      <section className="content-section" data-reveal>
        <h2>Coordinating Supply Across Borders</h2>
        <div className="two-col">
          <div>
            <p>
              Pharmaceutical supply chains are inherently international. Active ingredients produced in one jurisdiction
              are formulated in another, packaged to meet a third market's requirements, and distributed through
              locally licensed channels. Salus Vita operates at the intersection of these movements, coordinating
              the regulatory, commercial, and logistical elements that connect manufacturers with the markets they serve.
            </p>
            <p>
              Our role is not to manufacture or warehouse pharmaceutical products. Instead, we assess counterparties,
              facilitate compliant transactions, and coordinate the documentation and quality oversight that
              international pharmaceutical trade demands. Every engagement begins with an understanding of the
              destination market's regulatory framework and the specific requirements of the buyer.
            </p>
          </div>
          <div>
            <p>
              This coordination model allows Salus Vita to remain product-neutral and market-responsive. Rather than
              holding inventory or committing to fixed supply lines, we evaluate each sourcing requirement on its
              merits, identifying the most appropriate manufacturer and pathway for the specific product, market,
              and timeline involved.
            </p>
            <p>
              The result is a supply facilitation service that adapts to each client's circumstances, whether that
              involves a single product for one market or a multi-product program spanning several jurisdictions.
            </p>
          </div>
        </div>
      </section>

      {/* Region Cards */}
      <section className="content-section">
        <h2 data-reveal>Our Operating Regions</h2>
        <p data-reveal style={{ maxWidth: 720, marginBottom: 28 }}>
          Salus Vita coordinates pharmaceutical supply across four principal regions, each presenting distinct
          regulatory requirements, commercial dynamics, and patient needs. Our regional knowledge informs every
          sourcing assessment and transaction pathway we facilitate.
        </p>
        <div className="feature-grid" style={{ marginTop: 8, gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))" }}>
          {REGIONS.map((r, i) => (
            <Link
              to={r.to}
              key={r.title}
              className="card"
              data-reveal
              style={{ ...rd(i * 90), textDecoration: "none", color: "inherit" }}
            >
              <div style={{ marginBottom: 12 }}>{r.icon}</div>
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
              <span style={{ marginTop: 14, display: "inline-block", fontSize: 14, fontWeight: 600, color: "var(--teal)" }}>
                Explore market details →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Transaction Pathways */}
      <section className="content-section" data-reveal>
        <h2>Transaction Pathways</h2>
        <p style={{ maxWidth: 720, marginBottom: 28 }}>
          International pharmaceutical transactions follow different pathways depending on the origin of the product,
          the destination market, and the regulatory requirements of both. Salus Vita facilitates three principal
          transaction models, each with tailored coordination, documentation, and quality oversight.
        </p>
        <div className="feature-grid" style={{ gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))" }}>
          {PATHWAYS.map((p, i) => (
            <div key={p.title} className="card" data-reveal style={rd(i * 100)}>
              <span style={{
                display: "inline-block",
                fontSize: 13,
                fontWeight: 700,
                color: "#176E79",
                backgroundColor: "#E9F0F2",
                borderRadius: 4,
                padding: "3px 10px",
                marginBottom: 12,
                letterSpacing: "0.05em",
              }}>
                PATHWAY {p.step}
              </span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="content-section" data-reveal>
        <h2>International Coordination at Scale</h2>
        <p style={{ maxWidth: 720, marginBottom: 28 }}>
          Our operational footprint reflects the breadth of markets and counterparties we coordinate across. Every
          manufacturer, distributor, and regulatory pathway is individually assessed before any transaction proceeds.
        </p>
        <div className="stats">
          {STATS.map((s, i) => (
            <div className="stat" key={s.label} data-reveal style={rd(i * 80)}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Related Pages */}
      <section className="related-links" data-reveal>
        <h3>Explore Further</h3>
        <div className="related-grid">
          <Link to="/solutions">Pharmaceutical Solutions</Link>
          <Link to="/capabilities/global-sourcing">Global Sourcing</Link>
          <Link to="/capabilities/cross-border-supply">Cross-Border Supply</Link>
          <Link to="/capabilities/australian-importation">Australian Importation</Link>
          <Link to="/quality">Quality Assurance</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" data-reveal>
        <div className="cta-card">
          <h2>Entering a New Market?</h2>
          <p>
            Whether you are a manufacturer seeking distribution in a new jurisdiction or a buyer looking to
            source from international suppliers, Salus Vita can coordinate the regulatory, commercial, and
            logistical elements of your market entry.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Start a Conversation</Link>
            <Link to="/capabilities" className="btn btn-outline">View Capabilities</Link>
          </div>
        </div>
      </section>
    </>
  )
}
