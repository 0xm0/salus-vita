import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const TEAM_ROLES = [
  {
    title: "Founder and Managing Director",
    icon: "⚓",
    desc: "Salus Vita's founder brings direct experience in pharmaceutical procurement and international trade, with a background spanning wholesale pharmaceutical operations and cross-border supply coordination across Australia and the Asia-Pacific region. The founder sets the company's strategic direction and leads manufacturer relationship development.",
  },
  {
    title: "Operations Lead",
    icon: "⚙",
    desc: "Day-to-day coordination of sourcing and procurement activities is managed by an operations lead with a background in pharmaceutical supply chain management and international logistics. This role ensures documentation, timelines, and quality requirements are met consistently across every engagement.",
  },
  {
    title: "Quality and Regulatory Lead",
    icon: "✔",
    desc: "A qualified pharmacist with experience in pharmaceutical quality assurance across TGA, EMA, and ASEAN frameworks leads Salus Vita's supplier assessment program and regulatory documentation processes. This ensures every manufacturer engaged by the company meets the quality and compliance standards required for each target market.",
  },
  {
    title: "Commercial Lead",
    icon: "⇄",
    desc: "Business development, market access strategy, and commercial engagement with both manufacturers and buyers are managed by a commercial lead with experience across Asia-Pacific and European pharmaceutical markets. This role identifies and develops supply opportunities aligned with client requirements.",
  },
]

const ADVISORY_AREAS = [
  {
    title: "Pharmaceutical Regulatory",
    desc: "Salus Vita draws on advisory input from professionals with senior-level experience in regulatory affairs, including familiarity with TGA and international regulatory frameworks. This guidance helps the company stay current with regulatory developments and compliance expectations relevant to its operations.",
  },
  {
    title: "International Trade",
    desc: "Advisory support in international trade covers pharmaceutical export facilitation, trade compliance, market access strategy, and cross-border commercial structures across Asia-Pacific, Middle Eastern, and African markets.",
  },
  {
    title: "Healthcare Policy",
    desc: "The company's advisory network includes professionals with experience in pharmaceutical access policy, medicine supply security, and public health procurement frameworks in Australia and the broader region.",
  },
]

export default function Leadership() {
  return (
    <>
      <PageHero
        eyebrow="OUR PEOPLE"
        title="Our Team"
        description="Pharmaceutical professionals with practical expertise in procurement, quality assurance, regulatory affairs, and international trade."
        breadcrumbs={[{ label: "About", path: "/about" }, { label: "Leadership" }]}
        primaryCTA={{ label: "Submit an Enquiry", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "Careers", to: "/about/careers" }}
      />

      {/* Founding Team */}
      <section className="content-section" data-reveal>
        <h2>Our Founding Team</h2>
        <p>
          Founded in May 2023, Salus Vita is built on a small, focused team that
          combines pharmaceutical industry knowledge with international business
          experience. Each member brings a practical understanding of what it takes
          to coordinate compliant, quality-assured pharmaceutical supply across
          multiple jurisdictions.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24, marginTop: 24 }}>
          {TEAM_ROLES.map((role, i) => (
            <div key={role.title} className="card" data-reveal style={rd(i * 80)}>
              <div
                style={{
                  width: 64,
                  height: 64,
                  borderRadius: "50%",
                  background: "var(--pale-blue)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 16,
                  fontSize: 24,
                  color: "var(--teal)",
                }}
              >
                {role.icon}
              </div>
              <h3>{role.title}</h3>
              <p>{role.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Network */}
      <section className="content-section" data-reveal style={rd(100)}>
        <h2>Advisory Network</h2>
        <p>
          Salus Vita supplements its core team with advisory input from experienced
          professionals in areas directly relevant to international pharmaceutical
          supply coordination. These advisors provide guidance on regulatory
          developments, trade compliance, and healthcare policy as needed.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24, marginTop: 24 }}>
          {ADVISORY_AREAS.map((area, i) => (
            <div key={area.title} className="card" data-reveal style={rd(i * 80)}>
              <h3>{area.title}</h3>
              <p>{area.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Working With Us */}
      <section className="content-section" data-reveal style={rd(200)}>
        <h2>A Collaborative Approach</h2>
        <div className="two-col">
          <div>
            <p>
              The team operates with a flat, collaborative structure that reflects
              the cross-functional nature of international pharmaceutical supply
              coordination. Sourcing, quality, regulatory, and commercial decisions
              are made collectively, ensuring that every engagement benefits from
              the full breadth of the team's experience.
            </p>
          </div>
          <div>
            <p>
              This approach allows the company to respond efficiently to complex
              sourcing requirements, adapt to regulatory changes across
              jurisdictions, and provide clients with informed, practical guidance
              at every stage of the procurement and supply process.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Get in Touch</span>
          <h2>Speak with Our Team</h2>
          <p>
            Whether you have a sourcing requirement, a partnership enquiry, or
            simply want to learn more about how Salus Vita operates, our team is
            available to discuss your needs.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Submit an Enquiry</Link>
          </div>
        </div>
      </section>

      <section className="related-links">
        <h3>Explore More</h3>
        <div className="related-grid">
          <Link to="/about">About Overview</Link>
          <Link to="/about/our-story">Our Story</Link>
          <Link to="/about/governance">Governance</Link>
          <Link to="/about/responsibility">Responsibility</Link>
          <Link to="/about/why-salus-vita">Why Salus Vita</Link>
          <Link to="/about/careers">Careers</Link>
        </div>
      </section>
    </>
  )
}
