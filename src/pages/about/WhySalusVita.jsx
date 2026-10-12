import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const DIFFERENTIATORS = [
  {
    title: "Australian Regulatory Position",
    challenge: "Navigating TGA requirements and APAC regulatory frameworks from outside the region introduces complexity, delays, and risk of non-compliance.",
    approach: "As an Australian-headquartered company, Salus Vita operates with direct knowledge of the TGA regulatory environment and maintains working familiarity with APAC market access requirements.",
  },
  {
    title: "Single Coordinating Partner",
    challenge: "Engaging multiple intermediaries across sourcing, documentation, and logistics creates fragmentation, duplicated effort, and accountability gaps throughout the supply chain.",
    approach: "Salus Vita coordinates the full procurement cycle through a single point of engagement - from manufacturer assessment and commercial negotiation through to documentation facilitation and logistics coordination.",
  },
  {
    title: "Manufacturer Assessment",
    challenge: "Verifying the quality credentials, production capabilities, and regulatory standing of overseas pharmaceutical manufacturers requires specialist expertise and structured evaluation.",
    approach: "Our team assesses manufacturer capabilities against internationally recognised quality standards using a structured qualification framework, evaluating GMP compliance, production capacity, and regulatory history.",
  },
  {
    title: "Documentation Coordination",
    challenge: "Managing the volume and complexity of cross-border regulatory documentation - certificates of analysis, stability data, GMP certificates, DMFs - is resource-intensive and error-prone.",
    approach: "Salus Vita facilitates the collation, review, and coordination of technical documentation packages, working with manufacturers and buyers to ensure documentation meets target market requirements.",
  },
  {
    title: "Transparent Commercial Model",
    challenge: "Opaque pricing structures and hidden margins in pharmaceutical supply chains erode trust and make it difficult for buyers to evaluate true cost-effectiveness.",
    approach: "We operate on a transparent, fee-for-service commercial model. Our partners have clear visibility into how our services are priced and what value each element of our coordination delivers.",
  },
  {
    title: "Bespoke Sourcing Capability",
    challenge: "Standard commercial supply channels often cannot accommodate requests for niche APIs, low-volume generics, or specialty products with limited global availability.",
    approach: "Salus Vita provides tailored sourcing solutions for hard-to-find pharmaceutical products, drawing on our manufacturer network and industry relationships to identify viable supply options.",
  },
]

export default function WhySalusVita() {
  return (
    <>
      <PageHero
        eyebrow="OUR DIFFERENCE"
        title="Why Salus Vita"
        description="Structured, transparent, and compliance-conscious pharmaceutical sourcing coordination across international markets."
        breadcrumbs={[{ label: "About", path: "/about" }, { label: "Why Salus Vita" }]}
        primaryCTA={{ label: "Discuss Your Requirements", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "Our Capabilities", to: "/capabilities" }}
      />

      {/* Intro */}
      <section className="content-section" data-reveal>
        <h2>What Sets Us Apart</h2>
        <p>
          International pharmaceutical sourcing presents a distinct set of challenges - from
          verifying manufacturer quality across jurisdictions to managing complex regulatory
          documentation and coordinating cross-border logistics. Salus Vita was built to
          address these challenges through a focused, facilitator-led operating model.
        </p>
        <p>
          The following differentiators reflect the practical advantages our partners gain
          when they engage Salus Vita as their pharmaceutical sourcing and procurement
          coordinator.
        </p>
      </section>

      {/* Differentiators - comparison-style cards */}
      <section className="content-section" data-reveal style={rd(100)}>
        <h2>The Salus Vita Difference</h2>
        <div style={{ display: "flex", flexDirection: "column", gap: 24, marginTop: 24 }}>
          {DIFFERENTIATORS.map((d, i) => (
            <div key={d.title} className="card" data-reveal style={rd(i * 70)}>
              <h3 style={{ marginBottom: 16 }}>{d.title}</h3>
              <div className="grid-2-col" style={{ gap: 32 }}>
                <div>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--muted-2)",
                      marginBottom: 8,
                    }}
                  >
                    The Challenge
                  </span>
                  <p style={{ margin: 0 }}>{d.challenge}</p>
                </div>
                <div style={{ borderLeft: "2px solid var(--teal)", paddingLeft: 24 }}>
                  <span
                    style={{
                      display: "inline-block",
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "0.14em",
                      textTransform: "uppercase",
                      color: "var(--teal)",
                      marginBottom: 8,
                    }}
                  >
                    The Salus Vita Approach
                  </span>
                  <p style={{ margin: 0 }}>{d.approach}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Commitment */}
      <section className="content-section" data-reveal style={rd(200)}>
        <h2>Our Commitment to Partnership</h2>
        <div className="two-col">
          <div>
            <p>
              At Salus Vita, partnership extends beyond the transactional. We invest in
              understanding our partners' strategic priorities, regulatory environments,
              and supply chain requirements so that our coordination is genuinely
              fit for purpose.
            </p>
            <p>
              Every engagement begins with a thorough scoping process. We work to
              understand the specific product requirements, target market regulations,
              timeline constraints, and commercial parameters before recommending a
              sourcing and procurement approach.
            </p>
          </div>
          <div>
            <p>
              Our team provides dedicated coordination throughout the engagement lifecycle,
              with proactive communication, documented milestone tracking, and responsive
              support when requirements change or challenges arise.
            </p>
            <p>
              We measure the quality of our work not only in commercial terms but in the
              reliability, compliance, and transparency of the supply pathways we coordinate.
              When you choose Salus Vita, you gain a partner whose reputation depends on
              delivering exactly what was discussed and agreed.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Ready to Learn More?</span>
          <h2>Discuss How Salus Vita Can Support Your Requirements</h2>
          <p>
            Whether you are exploring international sourcing options or looking for a
            more structured approach to pharmaceutical procurement, our team is ready
            to discuss your needs.
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
          <Link to="/about/leadership">Leadership</Link>
          <Link to="/about/governance">Governance</Link>
          <Link to="/about/responsibility">Responsibility</Link>
          <Link to="/about/careers">Careers</Link>
        </div>
      </section>
    </>
  )
}
