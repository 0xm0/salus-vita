import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const MILESTONES = [
  { year: "2009", title: "Founded in Melbourne", desc: "Salus Vita established in Melbourne, Australia, with a founding focus on pharmaceutical sourcing coordination for the Australian market." },
  { year: "2011", title: "First International Relationships", desc: "Established first international manufacturer relationships in India and Southeast Asia, beginning to build the sourcing network that would define the company." },
  { year: "2013", title: "Expanded Procurement Scope", desc: "Extended procurement coordination to cover both active pharmaceutical ingredients (APIs) and finished dosage forms, broadening the range of products facilitated." },
  { year: "2015", title: "Cross-Border Supply Facilitation", desc: "Expanded facilitation services to include cross-border pharmaceutical supply between Asia-Pacific markets, moving beyond Australian importation." },
  { year: "2018", title: "European and Middle Eastern Expansion", desc: "Broadened geographic scope to include manufacturer relationships across Europe and the Middle East, strengthening the diversity of the sourcing network." },
  { year: "2021", title: "Three-Pathway Operating Model", desc: "Formalised the three-pathway operating model - Australian importation, cross-border facilitation, and manufacturer-to-distributor coordination - providing a structured framework for all engagements." },
  { year: "2024", title: "200+ Manufacturer Relationships", desc: "Surpassed 200 manufacturer relationships across 15+ countries, reflecting sustained growth in the depth and breadth of the international sourcing network." },
]

export default function OurStory() {
  return (
    <>
      <PageHero
        eyebrow="OUR JOURNEY"
        title="Our Story"
        description="From a founding vision in pharmaceutical sourcing coordination to a trusted international partner - the Salus Vita story is one of purpose, structured growth, and an unwavering commitment to quality."
        breadcrumbs={[{ label: "About", path: "/about" }, { label: "Our Story" }]}
        primaryCTA={{ label: "Meet the Team", to: "/about/leadership" }}
        secondaryCTA={{ label: "Contact Us", to: "/contact" }}
      />

      {/* Founding Narrative */}
      <section className="content-section" data-reveal>
        <h2>Why Salus Vita Was Founded</h2>
        <div className="two-col">
          <div>
            <p>
              Salus Vita was founded in 2009 to address a persistent gap in
              international pharmaceutical supply. Quality-assured manufacturers
              in established and emerging markets often lacked efficient pathways
              to connect with buyers in Australia and across the broader
              Asia-Pacific region. At the same time, pharmaceutical buyers and
              distributors faced significant barriers when attempting to identify,
              assess, and engage with overseas production facilities directly.
            </p>
            <p>
              The founders - experienced pharmaceutical professionals with
              backgrounds in procurement, quality assurance, and international
              trade - recognised that what the market needed was not another
              manufacturer or wholesaler, but a specialist coordinator. An
              organisation that could bridge the information, regulatory, and
              logistical gaps between the two sides of the supply chain.
            </p>
          </div>
          <div>
            <p>
              Headquartered in Melbourne, Australia, Salus Vita was built on
              the principle that pharmaceutical supply coordination should be
              transparent, compliance-conscious, and centred on patient
              outcomes. From the outset, the company invested in building deep
              regulatory knowledge and structured assessment processes that
              would underpin every manufacturer relationship and procurement
              engagement.
            </p>
            <p>
              The name Salus Vita - derived from the Latin for "health of life" -
              was chosen to reflect the foundational belief that reliable access
              to quality pharmaceutical products is essential to improving health
              outcomes globally. That belief continues to guide every aspect of
              the business today.
            </p>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="content-section" data-reveal style={rd(100)}>
        <h2>Key Milestones</h2>
        <p style={{ marginBottom: 40 }}>
          Salus Vita's growth has been deliberate and structured, expanding
          capabilities, geographic reach, and manufacturer relationships over
          more than fifteen years of operation.
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
                  marginBottom: 6,
                }}
              >
                {m.year}
              </span>
              <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--navy)", marginBottom: 6 }}>
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
          quality-assured outcomes for manufacturers, buyers, and the
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
            Whether you are a manufacturer seeking access to new markets or a
            buyer seeking quality-assured pharmaceutical products, our team is
            ready to discuss how we can help.
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
