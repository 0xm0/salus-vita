import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const PILLARS = [
  {
    title: "Supplier Assessment",
    desc: "Structured evaluation of manufacturing partners against regulatory standing, production capability, and quality system maturity.",
    to: "/quality/supplier-assessment",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="6" width="32" height="28" rx="3" stroke="#2d8a56" strokeWidth="2" fill="none" />
        <path d="M12 18l4 4 8-8" stroke="#2d8a56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <line x1="4" y1="14" x2="36" y2="14" stroke="#2d8a56" strokeWidth="2" />
        <circle cx="10" cy="10" r="1.5" fill="#2d8a56" />
        <circle cx="15" cy="10" r="1.5" fill="#2d8a56" />
        <circle cx="20" cy="10" r="1.5" fill="#2d8a56" />
      </svg>
    ),
  },
  {
    title: "Regulatory Framework",
    desc: "Alignment with TGA, PIC/S, ICH, and other international regulatory standards applicable to pharmaceutical procurement.",
    to: "/quality/regulatory-framework",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4L6 10v12c0 8 6 13 14 16 8-3 14-8 14-16V10L20 4z" stroke="#2d8a56" strokeWidth="2" fill="none" />
        <path d="M15 20l3 3 7-7" stroke="#2d8a56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Supply Chain Integrity",
    desc: "Traceability protocols, counterparty verification, and documented chain-of-custody across every transaction.",
    to: "/quality/supply-chain-integrity",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="8" cy="20" r="4" stroke="#2d8a56" strokeWidth="2" fill="none" />
        <circle cx="20" cy="10" r="4" stroke="#2d8a56" strokeWidth="2" fill="none" />
        <circle cx="20" cy="30" r="4" stroke="#2d8a56" strokeWidth="2" fill="none" />
        <circle cx="32" cy="20" r="4" stroke="#2d8a56" strokeWidth="2" fill="none" />
        <line x1="12" y1="18" x2="16" y2="12" stroke="#2d8a56" strokeWidth="1.5" />
        <line x1="12" y1="22" x2="16" y2="28" stroke="#2d8a56" strokeWidth="1.5" />
        <line x1="24" y1="12" x2="28" y2="18" stroke="#2d8a56" strokeWidth="1.5" />
        <line x1="24" y1="28" x2="28" y2="22" stroke="#2d8a56" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Documentation Standards",
    desc: "Comprehensive documentation coordination ensuring audit readiness and regulatory compliance for every transaction.",
    to: "/quality/documentation-standards",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="4" width="24" height="32" rx="2" stroke="#2d8a56" strokeWidth="2" fill="none" />
        <line x1="13" y1="12" x2="27" y2="12" stroke="#2d8a56" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="13" y1="18" x2="27" y2="18" stroke="#2d8a56" strokeWidth="1.5" strokeLinecap="round" />
        <line x1="13" y1="24" x2="22" y2="24" stroke="#2d8a56" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M24 28l2 2 4-4" stroke="#2d8a56" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const RESPONSIBILITIES = [
  {
    heading: "What Salus Vita Does",
    items: [
      "Assesses and qualifies manufacturing partners against defined criteria",
      "Coordinates the collection and verification of regulatory documentation",
      "Facilitates traceability and chain-of-custody across the supply chain",
      "Monitors supplier performance and escalates quality concerns",
      "Maintains procurement-level quality records and audit trails",
    ],
  },
  {
    heading: "What Our Partners Hold",
    items: [
      "GMP certifications issued by the relevant regulatory authority",
      "Manufacturing licences and product registrations",
      "Responsibility for product quality, safety, and efficacy at the point of manufacture",
      "Pharmacopoeial compliance and batch-level testing obligations",
      "Post-market surveillance obligations for their registered products",
    ],
  },
]

export default function Quality() {
  return (
    <>
      <PageHero
        eyebrow="QUALITY & COMPLIANCE"
        title="Quality-Conscious Procurement. Clearly Defined Responsibilities."
        description="Assessing, verifying, and monitoring quality credentials across our international manufacturing partner network."
        primaryCTA={{ label: "Request a Quality Information Pack", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "View Regulatory Framework", to: "/quality/regulatory-framework" }}
      />

      <section className="content-section" data-reveal>
        <div style={{ maxWidth: 800 }}>
          <h2>A Quality-Conscious Approach to Procurement</h2>
          <p>
            Pharmaceutical procurement carries inherent quality obligations. As a sourcing and supply
            company, Salus Vita operates with the understanding that every product we coordinate must
            meet the regulatory and quality expectations of its destination market. Our role is not to
            manufacture or to certify, but to apply rigorous, documented processes at every stage of
            the procurement cycle.
          </p>
          <p>
            This means selecting manufacturing partners whose quality systems have been independently
            verified, coordinating the flow of regulatory documentation between parties, and maintaining
            oversight of the supply chain from source to delivery. We hold ourselves accountable for the
            diligence of our assessments and the integrity of our coordination, while respecting that
            manufacturing quality remains the responsibility of our qualified partners.
          </p>
        </div>
      </section>

      <section className="content-section" data-reveal style={rd(80)}>
        <h2>Our Quality Pillars</h2>
        <p style={{ maxWidth: 700 }}>
          Our quality framework is built on four integrated pillars. Together, they provide the
          structure through which Salus Vita evaluates, documents, and monitors every aspect of
          the pharmaceutical procurement process.
        </p>
        <div className="feature-grid">
          {PILLARS.map((p, i) => (
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
              <span style={{ color: "var(--teal, #2d8a56)", fontWeight: 600, fontSize: 14, marginTop: 8, display: "inline-block" }}>
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section" data-reveal style={{ background: "var(--pale-blue, #f0f5f2)", ...rd(160) }}>
        <h2>Clearly Defined Responsibilities</h2>
        <p style={{ maxWidth: 760 }}>
          Salus Vita does not claim certifications, licences, or manufacturing credentials that belong
          to our partners. We believe that transparency about roles and responsibilities is fundamental
          to a trustworthy pharmaceutical supply chain. The table below outlines the distinction between
          what Salus Vita undertakes as a procurement coordinator and what our manufacturing and
          distribution partners hold independently.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fit, minmax(320px, 1fr))", gap: 24 }}>
          {RESPONSIBILITIES.map((col, ci) => (
            <div key={ci} className="card" data-reveal style={rd(ci * 100)}>
              <h3 style={{ color: "var(--navy, #0f3d22)" }}>{col.heading}</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {col.items.map((item, ii) => (
                  <li key={ii} style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 8 }}>
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
                      <circle cx="10" cy="10" r="9" stroke="#2d8a56" strokeWidth="1.5" fill="none" />
                      <path d="M6 10l3 3 5-5" stroke="#2d8a56" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section" data-reveal style={rd(240)}>
        <div style={{ maxWidth: 800 }}>
          <h2>Quality Assurance in a Procurement Context</h2>
          <p>
            As a procurement and supply coordination company, Salus Vita applies quality assurance
            principles at the level appropriate to our role. This includes supplier qualification and
            ongoing performance monitoring, verification of GMP and regulatory documentation prior to
            each transaction, and structured procedures for handling deviations, complaints, and recalls.
          </p>
          <p>
            Our quality system is designed to complement - not duplicate - the quality systems operated
            by our manufacturing partners. Where a manufacturer holds a GMP certificate issued by a
            PIC/S-member authority, we verify that certificate and assess the associated inspection
            history. Where documentation is required for market access, we coordinate its collection,
            review its completeness, and ensure it reaches the relevant parties in the correct format.
          </p>
          <p>
            This approach allows Salus Vita to add genuine value at the procurement layer without
            overstepping into areas that are properly the domain of licensed manufacturers and
            registered sponsors.
          </p>
        </div>
      </section>

      <section className="content-section" data-reveal style={rd(320)}>
        <h2>Standards We Assess Against</h2>
        <p style={{ maxWidth: 700 }}>
          Our procurement assessments reference the following international standards and guidelines.
          These are the benchmarks against which we evaluate our manufacturing partners - they are
          not certifications held by Salus Vita.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(220px, 1fr))", gap: 16 }}>
          {[
            { standard: "PIC/S GMP Guide", context: "Manufacturing quality baseline" },
            { standard: "ICH Q7 / Q10", context: "API and pharmaceutical quality systems" },
            { standard: "WHO Prequalification", context: "Manufacturer eligibility assessment" },
            { standard: "TGA GMP Requirements", context: "Australian market access" },
            { standard: "EU GMP Annexes", context: "European regulatory alignment" },
            { standard: "GDP Guidelines", context: "Distribution and logistics oversight" },
          ].map((s, i) => (
            <div key={s.standard} className="card" data-reveal style={rd(i * 60)}>
              <p style={{ fontWeight: 600, color: "var(--navy, #0f3d22)", marginBottom: 4 }}>{s.standard}</p>
              <p style={{ fontSize: 14, color: "#555", margin: 0 }}>{s.context}</p>
            </div>
          ))}
        </div>
      </section>

      <div className="cta-banner" data-reveal>
        <div className="cta-card">
          <h2>Discuss Your Quality Requirements</h2>
          <p>
            Request a quality information pack or speak with our team about how Salus Vita coordinates
            quality-conscious procurement for your market.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Request Quality Information Pack</Link>
          </div>
        </div>
      </div>
    </>
  )
}
