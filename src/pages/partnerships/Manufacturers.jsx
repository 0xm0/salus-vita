import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

export default function Manufacturers() {
  return (
    <>
      <PageHero
        eyebrow="STRATEGIC PARTNERSHIPS"
        title="For Manufacturers and CDMOs"
        description="Salus Vita coordinates international market access for pharmaceutical manufacturers and contract development and manufacturing organisations seeking to reach new territories through structured, transparent commercial partnerships."
        breadcrumbs={[{ label: "Partnerships", path: "/partnerships" }, { label: "Manufacturers" }]}
        primaryCTA={{ label: "Discuss Market Access", to: "/contact/sourcing-enquiry" }}
      />

      {/* Market Access Support */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#15324A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <circle cx="20" cy="20" r="14" />
            <ellipse cx="20" cy="20" rx="7" ry="14" />
            <path d="M6 14h28M6 26h28" />
            <path d="M20 6v28" />
          </svg>
          <h2 style={{ margin: 0 }}>Market Access Support</h2>
        </div>
        <p>
          Entering a new pharmaceutical market requires more than a competitive product. It demands
          an understanding of local regulatory frameworks, commercial channel structures, and buyer
          expectations. Salus Vita facilitates this process by coordinating between manufacturers and
          the regulatory, commercial, and logistical requirements of each target territory.
        </p>
        <p>
          Salus Vita's market access coordination covers Australia, the broader Asia-Pacific region,
          select Middle Eastern markets, and parts of Africa. For each territory, the company
          assesses the regulatory pathway, identifies potential commercial partners, and facilitates
          introductions with qualified buyers and distributors. This coordination enables manufacturers
          to evaluate market opportunities with structured information rather than speculation.
        </p>
        <p>
          It is important to note that Salus Vita does not itself register pharmaceutical products
          with regulatory authorities. The company coordinates the commercial and documentation
          requirements that support registration processes undertaken by sponsors and marketing
          authorisation holders in each jurisdiction.
        </p>
      </section>

      {/* Portfolio Discussion */}
      <section className="content-section" data-reveal style={rd(80)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#15324A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <rect x="6" y="6" width="28" height="28" rx="2" />
            <path d="M6 14h28M6 22h28M20 14v20" />
          </svg>
          <h2 style={{ margin: 0 }}>Portfolio Discussion</h2>
        </div>
        <p>
          Before committing to a market access engagement, Salus Vita conducts a structured portfolio
          assessment with each prospective manufacturing partner. This assessment evaluates product
          suitability for target markets based on therapeutic area demand, existing competitive
          landscape, regulatory classification, and documentation readiness.
        </p>
        <p>
          The portfolio discussion process is designed to provide manufacturers with a realistic
          picture of market potential. Salus Vita assesses factors including current formulary
          inclusion, pricing benchmarks, tender eligibility, and anticipated time-to-market for each
          product under consideration. This analysis helps manufacturers prioritise their
          international expansion efforts based on commercial viability rather than assumption.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16, marginTop: 20 }}>
          {[
            "Therapeutic area demand analysis",
            "Competitive landscape assessment",
            "Regulatory pathway evaluation",
            "Documentation gap analysis",
            "Pricing and reimbursement context",
            "Production capacity alignment",
          ].map((item, i) => (
            <div key={item} className="card" data-reveal style={rd(i * 60)}>
              <p style={{ fontWeight: 600, color: "var(--navy)", fontSize: 14, margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Documentation Coordination */}
      <section className="content-section" data-reveal style={rd(160)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#15324A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <path d="M10 4h14l8 8v24a2 2 0 01-2 2H10a2 2 0 01-2-2V6a2 2 0 012-2z" />
            <path d="M24 4v8h8" />
            <path d="M14 18h12M14 22h12M14 26h8" />
          </svg>
          <h2 style={{ margin: 0 }}>Documentation Coordination</h2>
        </div>
        <p>
          Each target market imposes specific documentation requirements for pharmaceutical product
          registration and importation. Salus Vita coordinates the assembly of documentation packages
          that align with these requirements, working directly with manufacturing partners to identify
          gaps and facilitate their resolution.
        </p>
        <p>
          Documentation coordination typically encompasses GMP certificates, site master files,
          product dossiers in Common Technical Document (CTD) format, stability data, certificates of
          pharmaceutical product (CPP), and certificates of analysis. Salus Vita assesses
          documentation completeness against the specific requirements of each target regulatory
          authority, identifying any areas that require supplementation or reformatting.
        </p>
        <p>
          This coordination role is particularly valuable for manufacturers entering markets with
          unfamiliar regulatory frameworks. Salus Vita's familiarity with TGA, Medsafe, Gulf
          Cooperation Council, and ASEAN regulatory expectations enables the company to provide
          practical guidance on documentation priorities, reducing the risk of incomplete submissions
          and associated delays.
        </p>
      </section>

      {/* Territory Planning */}
      <section className="content-section" data-reveal style={rd(240)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#15324A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <rect x="4" y="8" width="32" height="24" rx="2" />
            <path d="M4 16h32" />
            <path d="M16 16v16M28 16v16" />
            <circle cx="10" cy="12" r="1.5" fill="#15324A" />
            <circle cx="16" cy="12" r="1.5" fill="#15324A" />
            <circle cx="22" cy="12" r="1.5" fill="#15324A" />
          </svg>
          <h2 style={{ margin: 0 }}>Territory Planning</h2>
        </div>
        <p>
          Effective international expansion requires a considered approach to territory selection and
          sequencing. Salus Vita works with manufacturing partners to develop territory strategies
          that account for market size, regulatory complexity, competitive dynamics, and existing
          distribution infrastructure.
        </p>
        <p>
          Territory planning discussions address market prioritisation based on commercial potential
          and regulatory accessibility, channel strategy for each territory, demand forecasting based
          on available market data, and pricing considerations relative to local market conditions and
          reimbursement frameworks. These discussions produce a structured market entry plan that
          guides both parties' investment of time and resources.
        </p>
        <p>
          Salus Vita advocates for a phased approach to territory development, beginning with markets
          where the regulatory pathway is most clearly defined and commercial demand is well
          established. This approach allows manufacturers to build an international track record
          incrementally, generating revenue and market references that support subsequent territory
          expansion.
        </p>
      </section>

      {/* Engagement Process */}
      <section className="content-section" data-reveal style={rd(320)}>
        <h2>The Manufacturer Engagement Process</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16, marginTop: 20 }}>
          {[
            { step: "01", title: "Initial Enquiry", detail: "Manufacturer or CDMO contacts Salus Vita with a product portfolio or market access objective" },
            { step: "02", title: "Portfolio Assessment", detail: "Salus Vita evaluates product suitability for target markets based on defined criteria" },
            { step: "03", title: "Commercial Discussion", detail: "Parties discuss territory strategy, pricing framework, and partnership terms" },
            { step: "04", title: "Documentation Review", detail: "Salus Vita assesses documentation readiness against target market requirements" },
            { step: "05", title: "Agreement", detail: "Formal partnership agreement executed with clear terms, territories, and responsibilities" },
            { step: "06", title: "Market Coordination", detail: "Ongoing coordination of commercial activities, buyer introductions, and documentation support" },
          ].map((item, i) => (
            <div key={item.step} className="card" data-reveal style={rd(i * 60)}>
              <p style={{ fontWeight: 700, color: "var(--teal)", fontSize: 24, margin: "0 0 4px 0" }}>{item.step}</p>
              <p style={{ fontWeight: 600, color: "var(--navy)", margin: "0 0 6px 0" }}>{item.title}</p>
              <p style={{ fontSize: 14, opacity: 0.85, margin: 0 }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Pages */}
      <section className="content-section" data-reveal style={rd(400)}>
        <h3>Related Partnership Pages</h3>
        <div className="feature-grid" style={{ marginTop: 16 }}>
          {[
            { title: "For Institutional Buyers", desc: "Sourcing coordination for hospitals, wholesalers, and procurement teams.", to: "/partnerships/customers" },
            { title: "For Authorised Distributors", desc: "Territory-based sourcing partnerships with transparent commercial terms.", to: "/partnerships/distributors" },
            { title: "Partnerships Overview", desc: "Our partnership principles, engagement models, and what Salus Vita brings to each relationship.", to: "/partnerships" },
          ].map((p, i) => (
            <Link to={p.to} key={p.title} className="card" data-reveal style={{ ...rd(i * 80), textDecoration: "none", color: "inherit" }}>
              <h3>{p.title}</h3>
              <p style={{ fontSize: 14 }}>{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner" data-reveal>
        <div className="cta-card">
          <h2>Discuss Market Access for Your Products</h2>
          <p>
            If you are a pharmaceutical manufacturer or CDMO exploring international market access,
            Salus Vita welcomes the opportunity to assess how its coordination capabilities might
            support your objectives.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Submit an Enquiry</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  )
}
