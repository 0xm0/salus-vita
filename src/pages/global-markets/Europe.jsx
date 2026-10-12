import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const PATHWAYS = [
  {
    title: "Centralised Procedure",
    desc: "The EMA centralised procedure provides a single marketing authorisation valid across all EU and EEA member states. Salus Vita facilitates coordination with regulatory consultants and local representatives to support centralised submissions for eligible product categories.",
  },
  {
    title: "Decentralised Procedure",
    desc: "For products seeking simultaneous approval in multiple member states without prior authorisation, the decentralised procedure allows parallel review. Our team coordinates reference and concerned member state activities to align timelines and documentation.",
  },
  {
    title: "Mutual Recognition",
    desc: "Where a product already holds national authorisation in one EU member state, mutual recognition enables extension to additional markets. Salus Vita facilitates the coordination of MRP submissions and manages variations across participating jurisdictions.",
  },
  {
    title: "National Authorisation",
    desc: "Individual national authorisations remain appropriate for certain product types and single-market strategies. We coordinate with local regulatory agents in each target jurisdiction to support national-level submissions and approvals.",
  },
]

const MARKETS = [
  { name: "Germany", body: "The largest European pharmaceutical market, with established pricing and reimbursement frameworks, a robust hospital sector, and significant generic uptake." },
  { name: "United Kingdom", body: "Operating under the MHRA framework post-Brexit, with distinct regulatory pathways, NICE HTA requirements, and NHS procurement structures." },
  { name: "France", body: "A significant market with ANSM oversight, transparent pricing negotiations, and strong public hospital demand for both innovative and generic products." },
  { name: "Italy & Spain", body: "Major Southern European markets with AIFA and AEMPS regulatory oversight respectively, regional procurement structures, and active generic tender systems." },
  { name: "Nordics & Benelux", body: "Mature, well-regulated markets with high per-capita pharmaceutical expenditure, collaborative procurement, and stringent quality expectations." },
]

export default function Europe() {
  return (
    <>
      <PageHero
        eyebrow="GLOBAL MARKETS"
        title="Europe"
        description="European pharmaceutical markets set a global benchmark for regulatory rigour, quality standards, and supply chain transparency. Salus Vita facilitates market access and supply coordination across the EU, EEA, and United Kingdom."
        breadcrumbs={[{ label: "Global Markets", path: "/global-markets" }, { label: "Europe" }]}
        primaryCTA={{ label: "Discuss European Supply", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "All Markets", to: "/global-markets" }}
      />

      {/* EMA Framework */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 20 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <circle cx="20" cy="20" r="16" stroke="#176E79" strokeWidth="2" fill="none" />
            <path d="M11 16h18M11 24h18" stroke="#176E79" strokeWidth="1" opacity="0.4" />
            <path d="M20 4v32" stroke="#176E79" strokeWidth="1" opacity="0.4" />
            <ellipse cx="20" cy="20" rx="8" ry="16" stroke="#176E79" strokeWidth="1.5" fill="none" />
            <circle cx="20" cy="20" r="3" fill="#176E79" opacity="0.3" />
          </svg>
          <h2 style={{ margin: 0 }}>EMA Framework</h2>
        </div>
        <p>
          The European Medicines Agency coordinates the scientific evaluation and supervision of medicines across the European Union and the European Economic Area. The regulatory landscape encompasses multiple authorisation pathways, each suited to different product types, commercial strategies, and market entry objectives.
        </p>
        <p>
          Salus Vita facilitates engagement with the EMA framework by coordinating regulatory activities, liaising with local regulatory agents, and aligning documentation requirements across member states. Our team maintains awareness of evolving EMA guidance, including changes to GMP inspection expectations, pharmacovigilance requirements, and post-authorisation commitments.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {PATHWAYS.map((p, i) => (
            <div key={p.title} className="card" data-reveal style={rd(i * 90)}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* National Variations */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 20 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <rect x="6" y="8" width="28" height="24" rx="3" stroke="#176E79" strokeWidth="2" fill="none" />
            <path d="M6 16h28" stroke="#176E79" strokeWidth="1.5" />
            <path d="M16 16v16M26 16v16" stroke="#176E79" strokeWidth="1" opacity="0.5" />
            <circle cx="11" cy="22" r="2" fill="#176E79" opacity="0.6" />
            <circle cx="21" cy="22" r="2" fill="#176E79" opacity="0.6" />
            <circle cx="31" cy="22" r="2" fill="#176E79" opacity="0.6" />
          </svg>
          <h2 style={{ margin: 0 }}>National Variations</h2>
        </div>
        <p>
          While the EMA framework provides a harmonised foundation, significant variation exists at the national level across pricing, reimbursement, distribution requirements, and local regulatory expectations. Each member state maintains its own competent authority, and many retain specific requirements for labelling, packaging, pharmacovigilance reporting, and post-market surveillance that extend beyond harmonised standards.
        </p>
        <p>
          Salus Vita assesses these national variations as part of every European market entry engagement, ensuring that product registration, supply chain design, and commercial strategy account for jurisdiction-specific requirements from the outset. This includes evaluating language requirements for patient information leaflets, country-specific serialisation obligations, and local qualified person (QP) release arrangements.
        </p>
        <div className="feature-grid" style={{ marginTop: 24, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {MARKETS.map((m, i) => (
            <div key={m.name} className="card" data-reveal style={rd(i * 80)}>
              <h3>{m.name}</h3>
              <p>{m.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Cross-Border Within Europe */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 20 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <path d="M8 20h24" stroke="#176E79" strokeWidth="2" strokeLinecap="round" />
            <path d="M26 14l6 6-6 6" stroke="#176E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M14 14l-6 6 6 6" stroke="#176E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="20" cy="20" r="3" stroke="#176E79" strokeWidth="1.5" fill="#E9F0F2" />
          </svg>
          <h2 style={{ margin: 0 }}>Cross-Border Within Europe</h2>
        </div>
        <p>
          Cross-border pharmaceutical supply within Europe presents distinct considerations, including parallel distribution rights, country-of-origin labelling requirements, GDP compliance across multiple jurisdictions, and the requirements of the Falsified Medicines Directive (FMD) for serialisation and verification.
        </p>
        <p>
          Since the United Kingdom's departure from the European Union, supply chains that previously operated as intra-EU movements now involve separate regulatory frameworks under the MHRA. Products authorised under EU centralised procedures require separate MHRA authorisation for the GB market, while Northern Ireland remains aligned with EU regulations under the Windsor Framework. Salus Vita facilitates coordination of these parallel supply chains, ensuring regulatory compliance in both jurisdictions.
        </p>
        <div className="two-col" style={{ marginTop: 24 }}>
          <div className="card" data-reveal style={rd(0)}>
            <h3 style={{ color: "var(--navy)" }}>EU/EEA Supply Coordination</h3>
            <p>
              Facilitating the movement of pharmaceutical products across EU member states with attention to GDP compliance, QP release requirements, batch certification, and country-specific packaging and labelling obligations. Our team coordinates with logistics partners and local agents to ensure compliant cross-border supply.
            </p>
          </div>
          <div className="card" data-reveal style={rd(100)}>
            <h3 style={{ color: "var(--navy)" }}>Post-Brexit UK Supply</h3>
            <p>
              Coordinating the parallel regulatory and supply chain requirements that arise from the UK's separate MHRA framework. This includes managing dual authorisation processes, coordinating UK-specific QP release, and aligning labelling and serialisation with both EU and GB requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Market Entry */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 20 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <rect x="8" y="10" width="24" height="20" rx="3" stroke="#176E79" strokeWidth="2" fill="none" />
            <path d="M20 10v-4M16 6h8" stroke="#176E79" strokeWidth="2" strokeLinecap="round" />
            <path d="M14 18h12M14 23h8" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" opacity="0.7" />
            <circle cx="28" cy="26" r="5" stroke="#176E79" strokeWidth="1.5" fill="#E9F0F2" />
            <path d="M28 24v4M26 26h4" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <h2 style={{ margin: 0 }}>Market Entry</h2>
        </div>
        <p>
          European market entry requires coordinated planning across regulatory, commercial, and logistical dimensions. The choice of registration pathway, launch sequencing across member states, pricing strategy, and distribution partner selection all contribute to the viability and timeline of market access.
        </p>
        <p>
          Salus Vita facilitates market entry assessments that evaluate commercial feasibility, regulatory pathway options, competitive positioning, and supply chain requirements for each target European jurisdiction. Our assessments consider factors including reference pricing implications, health technology assessment requirements, tender market dynamics, and the availability of qualified local partners for distribution and pharmacovigilance.
        </p>
        <p>
          For generic and biosimilar products, market entry planning also involves evaluating launch sequencing relative to patent expiry timelines, assessing tender participation requirements in hospital markets, and coordinating with local distribution partners who hold established relationships with pharmacy chains, wholesalers, and hospital procurement groups.
        </p>
        <div className="feature-grid" style={{ marginTop: 24, gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))" }}>
          {[
            { title: "Regulatory Strategy", desc: "Assessing the optimal authorisation pathway and registration sequence for each target market based on product type and commercial priorities." },
            { title: "Commercial Assessment", desc: "Evaluating pricing, reimbursement, and competitive landscape to determine commercial viability in each European jurisdiction." },
            { title: "Distribution Coordination", desc: "Identifying and assessing qualified distribution partners with the regulatory standing and logistics capability to support European supply." },
            { title: "Compliance Planning", desc: "Ensuring alignment with FMD serialisation, GDP requirements, QP release obligations, and pharmacovigilance frameworks from the outset." },
          ].map((item, i) => (
            <div key={item.title} className="card" data-reveal style={rd(i * 90)}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Markets */}
      <section className="related-links" data-reveal>
        <h3>Other Markets</h3>
        <div className="related-grid">
          <Link to="/global-markets/australia-new-zealand" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h4 style={{ color: "var(--navy)", marginBottom: 4 }}>Australia & New Zealand</h4>
            <p style={{ fontSize: 14 }}>TGA and Medsafe regulatory coordination in Salus Vita's home market.</p>
          </Link>
          <Link to="/global-markets/asia-pacific" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h4 style={{ color: "var(--navy)", marginBottom: 4 }}>Asia Pacific</h4>
            <p style={{ fontSize: 14 }}>APAC market access across ASEAN, Japan, Korea, and Greater China.</p>
          </Link>
          <Link to="/global-markets/middle-east-africa" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h4 style={{ color: "var(--navy)", marginBottom: 4 }}>Middle East & Africa</h4>
            <p style={{ fontSize: 14 }}>Emerging market access and regulatory partnership coordination.</p>
          </Link>
          <Link to="/capabilities/international-procurement" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h4 style={{ color: "var(--navy)", marginBottom: 4 }}>International Procurement</h4>
            <p style={{ fontSize: 14 }}>Global procurement coordination and supplier assessment capabilities.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" data-reveal>
        <div className="cta-card">
          <h2>Considering European Market Access?</h2>
          <p>
            Discuss your European market objectives with our team. We can assess regulatory pathways, evaluate commercial feasibility, and coordinate the activities required for successful market entry.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Discuss European Supply</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
