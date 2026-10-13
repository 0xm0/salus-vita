import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

export default function Customers() {
  return (
    <>
      <PageHero
        eyebrow="STRATEGIC PARTNERSHIPS"
        title="For Institutional Buyers and Procurement Teams"
        description="Pharmaceutical sourcing for hospitals, pharmacy groups, wholesalers, and government procurement agencies requiring quality-assessed products."
        breadcrumbs={[{ label: "Partnerships", path: "/partnerships" }, { label: "Customers" }]}
        primaryCTA={{ label: "Submit a Sourcing Enquiry", to: "/contact/sourcing-enquiry" }}
      />

      {/* Requirements Assessment */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#0f3d22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <rect x="6" y="4" width="28" height="32" rx="2" />
            <path d="M12 12h16M12 18h16M12 24h10" />
            <path d="M14 8l-2 2 4 4" />
          </svg>
          <h2 style={{ margin: 0 }}>Requirements Assessment</h2>
        </div>
        <p>
          Every sourcing engagement begins with a structured assessment of the buyer's procurement
          requirements. Salus Vita works with institutional buyers to document the specific parameters
          that define a successful sourcing outcome, ensuring alignment before any supplier evaluation
          commences.
        </p>
        <p>
          The requirements assessment covers product specifications including active pharmaceutical
          ingredient, dosage form, strength, and pack size. It also addresses volume requirements and
          projected demand patterns, delivery schedules and logistics preferences, regulatory and
          documentation requirements specific to the buyer's jurisdiction, and budget parameters or
          pricing benchmarks against which sourcing options will be evaluated.
        </p>
        <p>
          This structured approach ensures that Salus Vita's sourcing activities are targeted and
          efficient. Rather than presenting buyers with a broad catalogue, the company identifies
          specific manufacturing sources that match documented requirements, reducing evaluation time
          and improving the relevance of each sourcing recommendation.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))", gap: 16, marginTop: 24 }}>
          {[
            "Product specifications",
            "Volume and demand forecasts",
            "Delivery and logistics needs",
            "Regulatory requirements",
            "Documentation standards",
            "Budget parameters",
          ].map((item, i) => (
            <div key={item} className="card" data-reveal style={rd(i * 60)}>
              <p style={{ fontWeight: 600, color: "var(--navy)", fontSize: 14, margin: 0 }}>{item}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sourcing Solutions */}
      <section className="content-section" data-reveal style={rd(80)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#0f3d22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <circle cx="16" cy="16" r="10" />
            <path d="M24 24l10 10" />
            <path d="M12 16h8M16 12v8" />
          </svg>
          <h2 style={{ margin: 0 }}>Sourcing Solutions</h2>
        </div>
        <p>
          Once requirements are documented, Salus Vita identifies and evaluates potential manufacturing
          sources from its assessed supplier network. Each prospective source is evaluated against the
          buyer's documented requirements, the company's supplier assessment criteria, and the
          regulatory expectations of the destination market.
        </p>
        <p>
          Sourcing recommendations are presented with supporting information including manufacturer
          profile, GMP certification status, product specifications, indicative pricing, available
          documentation, and estimated lead times. Where multiple qualified sources are available,
          Salus Vita presents comparative options to support informed procurement decisions.
        </p>
        <p>
          For products that require sample evaluation, Salus Vita coordinates sample procurement,
          documentation, and logistics between the manufacturer and the buyer. This coordination
          includes certificates of analysis, stability data summaries, and any additional technical
          documentation required for the buyer's internal qualification process.
        </p>
      </section>

      {/* Procurement Planning */}
      <section className="content-section" data-reveal style={rd(160)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#0f3d22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <rect x="4" y="8" width="32" height="28" rx="2" />
            <path d="M4 16h32" />
            <path d="M12 4v8M28 4v8" />
            <rect x="10" y="20" width="4" height="4" rx="0.5" />
            <rect x="18" y="20" width="4" height="4" rx="0.5" />
            <rect x="26" y="20" width="4" height="4" rx="0.5" />
            <rect x="10" y="28" width="4" height="4" rx="0.5" />
            <rect x="18" y="28" width="4" height="4" rx="0.5" />
          </svg>
          <h2 style={{ margin: 0 }}>Procurement Planning</h2>
        </div>
        <p>
          Consistent pharmaceutical supply requires forward planning. Salus Vita coordinates
          procurement planning with institutional buyers to establish order schedules, manage lead
          times, and anticipate demand fluctuations. This planning process is designed to reduce
          the risk of supply interruptions and ensure that procurement activities align with the
          buyer's operational requirements.
        </p>
        <p>
          Procurement planning activities include demand forecasting based on historical consumption
          data and anticipated changes, order scheduling aligned with manufacturing lead times and
          shipping logistics, buffer stock considerations for critical products, multi-source
          strategies where appropriate to mitigate single-supplier risk, and regular review cycles
          to adjust plans based on evolving requirements.
        </p>
        <p>
          For buyers with complex procurement needs spanning multiple products, therapeutic areas, or
          delivery points, Salus Vita provides consolidated procurement coordination. This approach
          simplifies the buyer's supplier management by providing a single coordination point for
          sourcing activities across their product portfolio.
        </p>
      </section>

      {/* Ongoing Support */}
      <section className="content-section" data-reveal style={rd(240)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#0f3d22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0 }}>
            <path d="M20 6a14 14 0 110 28 14 14 0 010-28z" />
            <path d="M20 14v8l5 3" />
          </svg>
          <h2 style={{ margin: 0 }}>Ongoing Support</h2>
        </div>
        <p>
          Salus Vita's relationship with institutional buyers extends beyond initial sourcing.
          Throughout the engagement, the company provides ongoing documentation management, ensuring
          that certificates of analysis, GMP certificates, and other quality documentation remain
          current and accessible. When regulatory changes affect documentation requirements, Salus
          Vita communicates these changes and coordinates updated documentation from manufacturing
          partners.
        </p>
        <p>
          Quality communications are managed proactively. If a manufacturing partner experiences a
          quality event, regulatory action, or production change that could affect supply, Salus Vita
          communicates the relevant information to affected buyers in a timely and structured manner.
          This transparency enables buyers to make informed decisions about their supply chain and
          fulfil their own regulatory obligations.
        </p>
        <p>
          Account coordination is provided by dedicated Salus Vita personnel who maintain familiarity
          with each buyer's product portfolio, procurement patterns, and operational preferences.
          Regular account reviews assess procurement performance, identify emerging requirements, and
          ensure that the partnership continues to deliver value aligned with the buyer's evolving
          needs.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16, marginTop: 24 }}>
          {[
            { title: "Documentation Management", detail: "Ongoing coordination of quality and regulatory documentation" },
            { title: "Quality Communications", detail: "Timely notification of quality events and regulatory changes" },
            { title: "Supply Continuity", detail: "Proactive monitoring and contingency planning for supply risks" },
            { title: "Account Coordination", detail: "Dedicated personnel with familiarity of your procurement needs" },
          ].map((item, i) => (
            <div key={item.title} className="card" data-reveal style={rd(i * 60)}>
              <p style={{ fontWeight: 600, color: "var(--navy)", margin: "0 0 4px 0" }}>{item.title}</p>
              <p style={{ fontSize: 14, opacity: 0.85, margin: 0 }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Pages */}
      <section className="content-section" data-reveal style={rd(320)}>
        <h3>Related Partnership Pages</h3>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {[
            { title: "For Manufacturers and CDMOs", desc: "Market access coordination for pharmaceutical manufacturers seeking international distribution.", to: "/partnerships/manufacturers" },
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
          <h2>Discuss Your Sourcing Requirements</h2>
          <p>
            If your organisation requires pharmaceutical sourcing coordination with documented quality
            assessment and transparent procurement processes, Salus Vita welcomes the opportunity to
            understand your needs.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Submit a Sourcing Enquiry</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  )
}
