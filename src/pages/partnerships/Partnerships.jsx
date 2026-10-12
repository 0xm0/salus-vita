import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const PARTNER_TYPES = [
  {
    title: "Manufacturers and CDMOs",
    desc: "Coordinate market access across international territories through structured commercial partnerships, regulatory pathway assessment, and documentation support.",
    to: "/partnerships/manufacturers",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#15324A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="4" y="18" width="14" height="18" rx="1" />
        <rect x="22" y="10" width="14" height="26" rx="1" />
        <path d="M8 22h6M8 26h6M8 30h6M26 14h6M26 18h6M26 22h6M26 26h6M26 30h6" />
        <path d="M11 4l0 14M9 6h4M9 9h4" />
      </svg>
    ),
  },
  {
    title: "Institutional Buyers",
    desc: "Access quality-assessed pharmaceutical sourcing through a single coordination point, with documented supplier qualification and transparent procurement processes.",
    to: "/partnerships/customers",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#15324A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 4l16 8v2H4v-2l16-8z" />
        <path d="M8 14v16M14 14v16M20 14v16M26 14v16M32 14v16" />
        <rect x="4" y="30" width="32" height="4" rx="1" />
        <circle cx="20" cy="9" r="2" />
      </svg>
    ),
  },
  {
    title: "Authorised Distributors",
    desc: "Build reliable sourcing partnerships with clearly defined territories, transparent commercial terms, and comprehensive compliance documentation.",
    to: "/partnerships/distributors",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" stroke="#15324A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="20" cy="20" r="14" />
        <ellipse cx="20" cy="20" rx="7" ry="14" />
        <path d="M6 14h28M6 26h28M6 20h28" />
      </svg>
    ),
  },
]

const PRINCIPLES = [
  {
    title: "Transparency",
    desc: "Every commercial arrangement is documented with clear terms, defined responsibilities, and open communication channels. Partners receive complete visibility into procurement processes relevant to their engagement.",
  },
  {
    title: "Clear Agreements",
    desc: "Formal agreements define the scope, obligations, and expectations of each party. Salus Vita operates with documented commercial terms that leave no ambiguity about roles, pricing, or deliverables.",
  },
  {
    title: "Documented Relationships",
    desc: "All partnership activities are recorded and maintained in accordance with regulatory requirements. From initial qualification through ongoing engagement, the relationship is fully traceable and auditable.",
  },
  {
    title: "Defined Responsibilities",
    desc: "Salus Vita coordinates procurement and facilitates commercial connections. Manufacturing, distribution, and regulatory responsibilities held by partners are clearly attributed and never misrepresented.",
  },
]

export default function Partnerships() {
  return (
    <>
      <PageHero
        eyebrow="STRATEGIC PARTNERSHIPS"
        title="Commercial Partnerships Across the Pharmaceutical Supply Chain"
        description="Salus Vita coordinates documented, transparent commercial partnerships with pharmaceutical manufacturers, institutional buyers, and authorised distributors. Each partnership is structured around clear agreements, defined responsibilities, and mutual accountability."
        primaryCTA={{ label: "Explore Partnership Opportunities", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "View Our Capabilities", to: "/capabilities" }}
      />

      {/* Partnership Principles */}
      <section className="content-section" data-reveal>
        <div style={{ maxWidth: 800 }}>
          <h2>Partnership Principles</h2>
          <p>
            Pharmaceutical procurement requires trust, and trust is built through structure, not assumptions.
            Salus Vita approaches every partnership with a commitment to clearly documented terms, transparent
            processes, and well-defined responsibilities. This discipline ensures that each party understands
            its role, its obligations, and the standards to which it will be held.
          </p>
          <p>
            As a sourcing and procurement coordination company, Salus Vita does not manufacture, warehouse,
            or distribute pharmaceutical products. The company facilitates connections between qualified
            manufacturers and buyers, coordinating the commercial, regulatory, and documentation requirements
            that enable compliant cross-border pharmaceutical trade. This distinction is fundamental to how
            partnerships are structured and communicated.
          </p>
        </div>
        <div className="feature-grid" style={{ marginTop: 32 }}>
          {PRINCIPLES.map((p, i) => (
            <div key={p.title} className="card" data-reveal style={rd(i * 80)}>
              <h3 style={{ color: "var(--navy)", marginBottom: 8 }}>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Who We Partner With */}
      <section className="content-section" data-reveal style={rd(80)}>
        <h2>Who We Partner With</h2>
        <p>
          Salus Vita works with three categories of partners across the pharmaceutical supply chain.
          Each partnership type is supported by a tailored engagement model designed to address the
          specific needs, regulatory context, and commercial objectives of that partner category.
        </p>
        <div className="feature-grid" style={{ marginTop: 28 }}>
          {PARTNER_TYPES.map((p, i) => (
            <Link
              to={p.to}
              key={p.title}
              className="card"
              data-reveal
              style={{ ...rd(i * 90), textDecoration: "none", color: "inherit" }}
            >
              <div style={{ marginBottom: 16 }}>{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
              <span style={{ color: "var(--teal)", fontWeight: 600, fontSize: 14, marginTop: 8, display: "inline-block" }}>
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* How Partnerships Work */}
      <section className="content-section" data-reveal style={rd(160)}>
        <div style={{ maxWidth: 800 }}>
          <h2>How Partnerships Work</h2>
          <p>
            Every partnership begins with a structured assessment process. Salus Vita evaluates alignment
            across regulatory requirements, commercial viability, product suitability, and operational
            capability before formalising any engagement. This assessment protects all parties and ensures
            that partnerships are built on a realistic foundation.
          </p>
          <p>
            Once a partnership is established, Salus Vita coordinates ongoing commercial activities through
            regular business reviews, documented performance tracking, and transparent communication.
            Changes to scope, pricing, or market conditions are addressed through formal processes with
            appropriate documentation and mutual agreement.
          </p>
          <p>
            Partnership governance is maintained through clearly defined escalation pathways, periodic
            compliance reviews, and structured feedback mechanisms. Salus Vita assigns dedicated account
            coordination for each active partnership, ensuring continuity and responsiveness throughout
            the engagement.
          </p>
        </div>
      </section>

      {/* What Salus Vita Brings */}
      <section className="content-section" data-reveal style={rd(240)}>
        <h2>What Salus Vita Brings to Each Partnership</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16, marginTop: 20 }}>
          {[
            { label: "Regulatory Knowledge", detail: "Understanding of TGA, PIC/S, WHO, and market-specific regulatory frameworks" },
            { label: "Sourcing Network", detail: "Assessed relationships with pharmaceutical manufacturers across multiple regions" },
            { label: "Documentation Capability", detail: "Coordination of regulatory and commercial documentation packages" },
            { label: "Commercial Coordination", detail: "Structured procurement facilitation with transparent terms and processes" },
            { label: "Quality Assessment", detail: "Systematic evaluation of manufacturing partners against defined criteria" },
            { label: "Market Intelligence", detail: "Insight into product demand, competitive positioning, and market access pathways" },
          ].map((item, i) => (
            <div key={item.label} className="card" data-reveal style={rd(i * 60)}>
              <p style={{ fontWeight: 600, color: "var(--navy)", marginBottom: 4 }}>{item.label}</p>
              <p style={{ fontSize: 14, opacity: 0.85 }}>{item.detail}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner" data-reveal>
        <div className="cta-card">
          <h2>Explore a Partnership with Salus Vita</h2>
          <p>
            Whether you are a manufacturer seeking market access, a buyer looking for quality-assessed
            sourcing, or a distributor exploring new product lines, we welcome the opportunity to discuss
            how a structured partnership could serve your objectives.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Start a Conversation</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </div>
    </>
  )
}
