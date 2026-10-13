import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const MILESTONES = [
  { year: "May 2023", title: "Founded in Australia", desc: "Salus Vita established with a focus on pharmaceutical sourcing coordination, connecting qualified manufacturers with buyers in Australia and the Asia-Pacific region." },
  { year: "Late 2023", title: "First Manufacturer Relationships", desc: "Secured initial manufacturer relationships across India and Southeast Asia, laying the groundwork for the international sourcing network." },
  { year: "2024", title: "Cross-Border Facilitation Launched", desc: "Expanded beyond Australian importation to coordinate cross-border pharmaceutical supply between Asia-Pacific, European, and Middle Eastern markets." },
  { year: "2025", title: "Three-Pathway Model Formalised", desc: "Structured the operating model around three transaction pathways: Australian importation, cross-border facilitation, and manufacturer-to-distributor coordination." },
]

export default function OurStory() {
  return (
    <>
      <PageHero
        eyebrow="OUR JOURNEY"
        title="Our Story"
        description="Founded in 2023, Salus Vita coordinates pharmaceutical sourcing and supply between assessed manufacturers and global buyers."
        breadcrumbs={[{ label: "About", path: "/about" }, { label: "Our Story" }]}
        primaryCTA={{ label: "Meet the Team", to: "/about/leadership" }}
      />

      {/* Founding Narrative */}
      <section className="content-section" data-reveal>
        <h2>Why Salus Vita Was Founded</h2>
        <div className="two-col">
          <div>
            <p>
              Salus Vita was founded in May 2023 to address a gap in
              international pharmaceutical supply. Qualified manufacturers
              in established and emerging markets often lack efficient pathways
              to connect with buyers in Australia and the broader Asia-Pacific
              region. Buyers and distributors face real barriers when trying
              to identify, assess, and engage with overseas production
              facilities directly.
            </p>
            <p>
              The founding team recognised that the market needed a specialist
              coordinator, not another manufacturer or wholesaler. An
              organisation that could bridge the regulatory, commercial, and
              logistical gaps between the two sides of the supply chain.
            </p>
          </div>
          <div>
            <p>
              Headquartered in Australia, Salus Vita was built on the principle
              that pharmaceutical supply coordination should be transparent,
              compliance-conscious, and focused on patient outcomes. From the
              outset, the company has invested in regulatory knowledge and
              structured assessment processes that underpin every manufacturer
              relationship and procurement engagement.
            </p>
            <p>
              The name Salus Vita, derived from the Latin for "health of life",
              reflects the belief that reliable access to quality pharmaceutical
              products is essential to improving health outcomes globally.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="content-section" data-reveal style={rd(100)}>
        <h2>Key Milestones</h2>
        <p style={{ marginBottom: 32 }}>
          Since founding in 2023, Salus Vita has steadily expanded its
          capabilities, geographic reach, and manufacturer relationships.
        </p>
        <div style={{ position: "relative", paddingLeft: 40 }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: 15,
              top: 8,
              bottom: 8,
              width: 2,
              background: "linear-gradient(to bottom, var(--teal), var(--pale-blue))",
              borderRadius: 1,
            }}
          />
          {MILESTONES.map((m, i) => (
            <div
              key={m.year}
              data-reveal
              style={{
                ...rd(i * 90),
                position: "relative",
                paddingBottom: i < MILESTONES.length - 1 ? 40 : 0,
                paddingLeft: 32,
              }}
            >
              {/* Dot */}
              <div
                style={{
                  position: "absolute",
                  left: -25,
                  top: 6,
                  width: 14,
                  height: 14,
                  borderRadius: "50%",
                  background: "var(--teal)",
                  border: "3px solid var(--pale-blue)",
                  zIndex: 1,
                }}
              />
              <span
                style={{
                  display: "inline-block",
                  fontSize: 13,
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "var(--teal)",
                  marginBottom: 8,
                }}
              >
                {m.year}
              </span>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>
                {m.title}
              </h3>
              <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.65, maxWidth: 580 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="content-section" data-reveal style={rd(200)}>
        <h2>Mission</h2>
        <div className="two-col">
          <div>
            <p>
              Our mission is to improve access to quality pharmaceutical products
              by creating efficient, compliant, and transparent supply pathways
              between manufacturers and markets around the world.
            </p>
            <p>
              We believe that access to quality medicines should not be
              constrained by geography, regulatory complexity, or a lack of
              coordinated supply infrastructure. Salus Vita exists to address
              these challenges - connecting established manufacturers with new
              markets, and connecting healthcare providers with the products
              their patients require.
            </p>
          </div>
          <div>
            <p>
              We achieve this through a combination of structured manufacturer
              assessment, regulatory knowledge, comprehensive documentation
              facilitation, and coordinated logistics - all underpinned by a
              commitment to transparency, quality, and ethical business practice.
            </p>
            <p>
              Every engagement is guided by the understanding that pharmaceutical
              supply is ultimately about patient outcomes. This focus on purpose
              shapes the standards we maintain and the partnerships we build.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section" data-reveal style={rd(250)}>
        <h2>Vision</h2>
        <p>
          To be the most trusted coordinating partner in international
          pharmaceutical supply - recognised for transparency, regulatory
          competence, and an operating model that consistently delivers
          reliable outcomes for manufacturers, buyers, and the
          patients they serve.
        </p>
        <p>
          We envision a pharmaceutical supply landscape where quality-assured
          manufacturers in any region can efficiently reach the markets that
          need their products, supported by a professional, independent
          coordination partner that understands the regulatory, commercial,
          and logistical requirements of every jurisdiction involved.
        </p>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Partner With Us</span>
          <h2>Discuss Your Pharmaceutical Sourcing Requirements</h2>
          <p>
            Ready to explore how Salus Vita can support your pharmaceutical
            sourcing needs? Our team is available to discuss your requirements
            and outline a clear path forward.
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
          <Link to="/about/leadership">Leadership</Link>
          <Link to="/about/governance">Governance</Link>
          <Link to="/about/responsibility">Responsibility</Link>
          <Link to="/about/why-salus-vita">Why Salus Vita</Link>
          <Link to="/about/careers">Careers</Link>
        </div>
      </section>
    </>
  )
}
