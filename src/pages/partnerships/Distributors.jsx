import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const RELATED = [
  {
    title: "For Manufacturers",
    desc: "Pharmaceutical manufacturers and CDMOs seeking coordinated market access, documentation support, and territory planning.",
    to: "/partnerships/manufacturers",
  },
  {
    title: "For Customers",
    desc: "Institutional buyers, wholesale purchasers, and commercial procurement teams seeking quality-assessed pharmaceutical sourcing.",
    to: "/partnerships/customers",
  },
  {
    title: "Partnerships Overview",
    desc: "Learn about Salus Vita's partnership principles, engagement model, and how we coordinate relationships across the pharmaceutical supply chain.",
    to: "/partnerships",
  },
]

export default function Distributors() {
  return (
    <>
      <PageHero
        eyebrow="STRATEGIC PARTNERSHIPS"
        title="For Authorised Distributors"
        description="Reliable pharmaceutical sourcing for authorised distributors with quality-assessed products and compliance support."
        breadcrumbs={[
          { label: "Partnerships", path: "/partnerships" },
          { label: "Distributors" },
        ]}
        primaryCTA={{ label: "Explore Distribution Opportunities", to: "/contact/sourcing-enquiry" }}
      />

      {/* Territory Assessment */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <circle cx="20" cy="20" r="15" stroke="#0f3d22" strokeWidth="1.5" />
            <path d="M14 20h12M20 14v12M15 15l10 10M25 15l-10 10" stroke="#0f3d22" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="20" cy="20" r="3" stroke="#0f3d22" strokeWidth="1.5" />
          </svg>
          <h2 style={{ margin: 0 }}>Territory Assessment</h2>
        </div>
        <p>
          Before establishing a distribution partnership, Salus Vita conducts a structured assessment
          of the proposed territory to evaluate commercial viability and regulatory feasibility. This
          assessment considers market size and therapeutic demand, the prevailing regulatory
          environment, existing competitive dynamics, logistics infrastructure, and the commercial
          potential for each product category under discussion. The objective is to ensure that both
          parties enter the relationship with a clear, evidence-based understanding of the opportunity.
        </p>
        <p>
          Territory assessments are conducted collaboratively. Salus Vita brings international sourcing
          perspective and cross-market intelligence, while distribution partners contribute local
          knowledge of prescriber behaviour, formulary structures, reimbursement frameworks, and
          channel economics. This combined view enables realistic forecasting and well-informed
          go-to-market planning.
        </p>
        <p>
          Where a territory presents regulatory or logistical complexity, Salus Vita works with the
          distribution partner to identify practical pathways forward. This may involve phased product
          introductions, preliminary registration assessments, or coordination with local regulatory
          consultants to confirm the viability of specific product categories before commercial
          commitments are formalised.
        </p>
      </section>

      {/* Product Eligibility */}
      <section className="content-section" data-reveal style={rd(80)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <rect x="8" y="6" width="24" height="28" rx="2" stroke="#0f3d22" strokeWidth="1.5" />
            <path d="M14 14h12M14 19h12M14 24h8" stroke="#0f3d22" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M26 24l2 2 4-4" stroke="#0f3d22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 style={{ margin: 0 }}>Product Eligibility</h2>
        </div>
        <p>
          Not every product in Salus Vita's sourcing network is suitable for every territory.
          Product eligibility is assessed on a market-by-market basis, taking into account current
          registration status, the complexity and timeline of the applicable regulatory pathway,
          therapeutic demand relative to existing supply, competitive positioning, and the readiness
          of supporting documentation including stability data, certificates of analysis, and
          regulatory dossiers.
        </p>
        <p>
          This assessment protects both parties from pursuing product introductions where the
          regulatory or commercial pathway is unclear. Salus Vita coordinates with its manufacturing
          partners to confirm documentation availability, assess any gaps in the registration
          dossier, and determine whether the product can meet the pharmacopoeial and labelling
          requirements of the target market within a commercially reasonable timeframe.
        </p>
        <p>
          For products that meet eligibility criteria, Salus Vita prepares a product information
          package that includes technical specifications, regulatory status across relevant markets,
          indicative pricing, minimum order quantities, and lead time expectations. This package
          provides distribution partners with the information needed to evaluate commercial fit and
          begin internal planning.
        </p>
      </section>

      {/* Commercial Structures */}
      <section className="content-section" data-reveal style={rd(160)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <rect x="6" y="10" width="28" height="20" rx="2" stroke="#0f3d22" strokeWidth="1.5" />
            <path d="M6 16h28" stroke="#0f3d22" strokeWidth="1.5" />
            <path d="M12 23h6M12 27h4" stroke="#0f3d22" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="28" cy="25" r="4" stroke="#0f3d22" strokeWidth="1.5" />
          </svg>
          <h2 style={{ margin: 0 }}>Commercial Structures</h2>
        </div>
        <p>
          Salus Vita structures distribution agreements around principles of transparency, mutual
          accountability, and clearly documented commercial terms. Pricing frameworks are established
          with reference to prevailing market conditions and are structured to provide competitive
          positioning while supporting sustainable margins for both parties. Payment terms,
          volume commitments, and order lead times are defined in writing and reviewed periodically.
        </p>
        <p>
          Territory definitions are a central component of every distribution agreement. Salus Vita
          works with each distribution partner to define geographic and channel boundaries that
          reflect the partner's operational reach and investment commitment. Performance expectations,
          including minimum annual purchase volumes and market development milestones, are agreed
          collaboratively and documented as part of the formal partnership framework.
        </p>
        <p>
          Commercial arrangements are subject to regular review through structured business
          discussions. These reviews assess performance against agreed targets, evaluate market
          developments that may warrant pricing adjustments or portfolio changes, and identify
          opportunities for expanding the product range or extending territorial coverage. The
          objective is to maintain commercial arrangements that remain fair, competitive, and
          aligned with evolving market realities.
        </p>
      </section>

      {/* Compliance Framework */}
      <section className="content-section" data-reveal style={rd(240)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <path d="M20 4L6 12v8c0 9.33 5.97 18.06 14 20 8.03-1.94 14-10.67 14-20v-8L20 4z" stroke="#0f3d22" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M15 20l3 3 7-7" stroke="#0f3d22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 style={{ margin: 0 }}>Compliance Framework</h2>
        </div>
        <p>
          Distribution partnerships with Salus Vita are underpinned by a compliance framework that
          establishes clear responsibilities for both parties. Before a partnership is formalised,
          Salus Vita verifies the distribution partner's licensing status, GDP (Good Distribution
          Practice) compliance, and regulatory standing in the relevant territory. This verification
          is documented and reviewed periodically as a condition of the ongoing relationship.
        </p>
        <p>
          Pharmacovigilance responsibilities are defined explicitly within each distribution
          agreement. Distribution partners are expected to maintain adverse event reporting
          procedures that align with the requirements of their local regulatory authority, and to
          communicate any safety-related information to Salus Vita promptly. Salus Vita coordinates
          pharmacovigilance information flows between manufacturing partners and distribution
          partners to ensure that safety obligations are met across the supply chain.
        </p>
        <p>
          Regulatory change management is an ongoing component of the compliance framework. When
          regulatory requirements change in a distribution territory, whether related to labelling,
          serialisation, storage conditions, or reporting obligations, Salus Vita works with the
          distribution partner and the relevant manufacturing partner to assess the impact and
          coordinate any necessary adjustments. This proactive approach minimises disruption and
          ensures continued compliance as regulatory landscapes evolve.
        </p>
      </section>

      {/* Related Partnership Pages */}
      <section className="content-section" data-reveal style={rd(320)}>
        <h2>Related Partnership Pages</h2>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {RELATED.map((r, i) => (
            <Link
              to={r.to}
              key={r.title}
              className="card"
              data-reveal
              style={{ ...rd(i * 90), textDecoration: "none", color: "inherit" }}
            >
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <div className="cta-banner" data-reveal>
        <div className="cta-card">
          <h2>Interested in Distribution Partnership?</h2>
          <p>
            Contact our partnerships team to discuss territory availability, product eligibility,
            and how Salus Vita can coordinate reliable pharmaceutical sourcing for your distribution
            network.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">
              Start a Conversation
            </Link>
            <Link to="/contact" className="btn btn-outline">
              General Enquiries
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}
