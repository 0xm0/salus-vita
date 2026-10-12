import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const EXECUTIVES = [
  {
    name: "Daniel Harrington",
    role: "Founder and Managing Director",
    bio: "Daniel founded Salus Vita in 2009 after more than fifteen years in pharmaceutical procurement and international trade. His experience spans wholesale pharmaceutical operations, cross-border supply coordination, and regulatory engagement across Australia and the Asia-Pacific region. Daniel provides strategic direction for the company and leads its manufacturer relationship development program.",
  },
  {
    name: "Rachel Nguyen",
    role: "Director of Operations",
    bio: "Rachel oversees the day-to-day coordination of Salus Vita's sourcing and procurement activities. With a background in pharmaceutical supply chain management and international logistics, she brings structured operational discipline to cross-border engagements, ensuring documentation, timelines, and quality requirements are met consistently.",
  },
  {
    name: "Dr. Andrew Keane",
    role: "Head of Quality and Regulatory",
    bio: "Andrew leads Salus Vita's supplier assessment program and regulatory documentation processes. A qualified pharmacist with experience in pharmaceutical quality assurance across TGA, EMA, and ASEAN frameworks, he ensures that every manufacturer engaged by Salus Vita meets the quality and compliance standards required for the target market.",
  },
  {
    name: "Priya Desai",
    role: "Head of Commercial",
    bio: "Priya is responsible for business development, market access strategy, and commercial engagement with both manufacturers and buyers. Her background in pharmaceutical business development across Asia-Pacific and European markets enables Salus Vita to identify and develop supply opportunities that align with client requirements.",
  },
]

const ADVISORS = [
  {
    name: "Prof. Margaret Liu",
    role: "Pharmaceutical Regulatory Advisor",
    desc: "Former senior regulatory affairs executive with over 25 years of experience across TGA and international regulatory bodies. Margaret provides strategic guidance on regulatory developments and compliance frameworks relevant to Salus Vita's operations.",
  },
  {
    name: "David Okafor",
    role: "International Trade Advisor",
    desc: "International trade consultant with extensive experience in pharmaceutical export facilitation across Asia-Pacific, Middle Eastern, and African markets. David advises on trade compliance, market access strategy, and cross-border commercial structures.",
  },
  {
    name: "Dr. Susan Carmichael",
    role: "Healthcare Policy Advisor",
    desc: "Health policy specialist and former government advisor with deep expertise in pharmaceutical access policy, medicine supply security, and public health procurement frameworks in Australia and the broader region.",
  },
]

export default function Leadership() {
  return (
    <>
      <PageHero
        eyebrow="OUR PEOPLE"
        title="Leadership Team"
        description="The Salus Vita leadership team brings together pharmaceutical industry experience across procurement, quality assurance, regulatory affairs, and international trade coordination."
        breadcrumbs={[{ label: "About", path: "/about" }, { label: "Leadership" }]}
        primaryCTA={{ label: "Contact Us", to: "/contact" }}
        secondaryCTA={{ label: "Careers", to: "/about/careers" }}
      />

      {/* Executive Team */}
      <section className="content-section" data-reveal>
        <h2>Executive Team</h2>
        <p>
          Our executive team combines deep pharmaceutical expertise with international
          business experience to drive Salus Vita's mission and growth. Together, they
          bring a practical understanding of what it takes to coordinate compliant,
          quality-assured pharmaceutical supply across multiple jurisdictions.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 20, marginTop: 24 }}>
          {EXECUTIVES.map((exec, i) => (
            <div key={exec.name} className="card" data-reveal style={rd(i * 80)}>
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
                  fontSize: 22,
                  fontWeight: 700,
                  color: "var(--teal)",
                }}
              >
                {exec.name.split(" ").filter((_, idx) => idx === 0 || idx === exec.name.split(" ").length - 1).map(n => n[0]).join("")}
              </div>
              <h3>{exec.name}</h3>
              <p style={{ fontSize: 13, fontWeight: 600, color: "var(--teal)", marginBottom: 10 }}>{exec.role}</p>
              <p>{exec.bio}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Advisory Board */}
      <section className="content-section" data-reveal style={rd(100)}>
        <h2>Advisory Board</h2>
        <p>
          Salus Vita's Advisory Board comprises professionals with recognised
          expertise in pharmaceutical regulation, international trade, and
          healthcare policy. Their insights help shape our strategic direction
          and ensure we remain well-positioned to navigate changes in the
          regulatory and commercial landscape.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 20, marginTop: 24 }}>
          {ADVISORS.map((adv, i) => (
            <div key={adv.name} className="card" data-reveal style={rd(i * 80)}>
              <div
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: "50%",
                  background: "var(--pale-blue)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: 14,
                  fontSize: 18,
                  fontWeight: 700,
                  color: "var(--teal)",
                }}
              >
                {adv.name.split(" ").filter((_, idx) => idx === 0 || idx === adv.name.split(" ").length - 1).map(n => n[0]).join("")}
              </div>
              <h3>{adv.name}</h3>
              <p style={{ fontSize: 13, fontWeight: 600, color: "var(--teal)", marginBottom: 10 }}>{adv.role}</p>
              <p>{adv.desc}</p>
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
              Salus Vita's leadership team operates with a flat, collaborative
              structure that reflects the cross-functional nature of international
              pharmaceutical supply coordination. Sourcing, quality, regulatory,
              and commercial decisions are made collectively, ensuring that every
              engagement benefits from the full breadth of the team's experience.
            </p>
          </div>
          <div>
            <p>
              This approach enables Salus Vita to respond efficiently to complex
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
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
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
