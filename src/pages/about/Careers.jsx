import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const WORKPLACE_VALUES = [
  {
    title: "Integrity",
    desc: "We operate with honesty and transparency in every interaction. Our partners trust us because our conduct matches our commitments.",
  },
  {
    title: "Collaboration",
    desc: "International pharmaceutical supply is inherently cross-functional. We work closely across regulatory, quality, commercial, and logistics disciplines to deliver coordinated outcomes.",
  },
  {
    title: "Expertise",
    desc: "We value deep knowledge and continuous professional development. Our team members bring specialist skills and are supported in expanding their capabilities.",
  },
  {
    title: "Impact",
    desc: "Every sourcing engagement we coordinate ultimately serves patients and healthcare providers. We take pride in the meaningful contribution our work makes to pharmaceutical access.",
  },
]

const ROLE_CATEGORIES = [
  {
    title: "Procurement and Sourcing",
    desc: "Coordinating sourcing engagements with international pharmaceutical manufacturers, managing supplier relationships and procurement timelines.",
  },
  {
    title: "Quality and Regulatory",
    desc: "Supporting the collation, review, and coordination of technical documentation packages and regulatory requirements for cross-border pharmaceutical transactions.",
  },
  {
    title: "Operations and Logistics",
    desc: "Coordinating logistics activities through vetted partners, supporting product integrity and compliance across international shipments.",
  },
  {
    title: "Commercial Development",
    desc: "Building manufacturer and buyer relationships across target markets, identifying sourcing and procurement opportunities.",
  },
]

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="JOIN OUR TEAM"
        title="Careers at Salus Vita"
        description="Pharmaceutical professionals coordinating quality-assured supply across international markets."
        breadcrumbs={[{ label: "About", path: "/about" }, { label: "Careers" }]}
        primaryCTA={{ label: "Get in Touch", to: "/contact" }}
        secondaryCTA={{ label: "About Us", to: "/about" }}
      />

      {/* Culture */}
      <section className="content-section" data-reveal>
        <h2>Our Culture</h2>
        <div className="two-col">
          <div>
            <p>
              Salus Vita is a focused, collaborative team working at the intersection of
              pharmaceutical quality, international trade, and regulatory coordination. We
              operate with a small-team mindset where every contribution has a visible
              impact on the outcomes we deliver for our partners and the patients they serve.
            </p>
            <p>
              Our work spans multiple jurisdictions and product categories, which means our
              team members gain exposure to a broad range of pharmaceutical supply challenges.
              From coordinating API sourcing in South Asia to facilitating regulatory
              documentation for European market access, no two engagements are the same.
            </p>
          </div>
          <div>
            <p>
              Cross-functional collaboration is central to how we operate. Our regulatory,
              quality, commercial, and logistics functions work in close coordination on
              every engagement, and team members are encouraged to develop understanding
              across disciplines.
            </p>
            <p>
              Based in Melbourne with an international outlook, Salus Vita offers the
              focus and professionalism of a growing specialist team combined with the
              agility and direct impact that comes from working in a lean organisation.
              We invest in our people because our business depends on the quality of
              their expertise and judgement.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="content-section" data-reveal style={rd(100)}>
        <h2>What We Value</h2>
        <p>
          Our workplace values reflect the same principles that guide our approach to
          pharmaceutical supply coordination.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24, marginTop: 24 }}>
          {WORKPLACE_VALUES.map((v, i) => (
            <div key={v.title} className="card" data-reveal style={rd(i * 80)}>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Role Categories */}
      <section className="content-section" data-reveal style={rd(200)} id="openings">
        <h2>Roles We Recruit For</h2>
        <p>
          We periodically recruit for roles across the following areas. If you have
          relevant experience and are interested in joining our team, we welcome
          expressions of interest at any time.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24, marginTop: 24 }}>
          {ROLE_CATEGORIES.map((role, i) => (
            <div key={role.title} className="card" data-reveal style={rd(i * 80)}>
              <h3>{role.title}</h3>
              <p>{role.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 24, fontSize: 15, color: "var(--muted)" }}>
          To register your interest or enquire about current opportunities, please{" "}
          <Link to="/contact" style={{ color: "var(--teal)", fontWeight: 600 }}>contact us</Link>{" "}
          with your CV and a brief outline of your areas of expertise.
        </p>
      </section>

      {/* Application CTA */}
      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Ready to Apply?</span>
          <h2>Submit Your Interest</h2>
          <p>
            We are always interested in hearing from pharmaceutical professionals who share
            our commitment to quality, compliance, and transparent partnership. Reach out to
            start a conversation.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
            <Link to="/about" className="btn btn-outline">Learn About Us</Link>
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
          <Link to="/about/why-salus-vita">Why Salus Vita</Link>
        </div>
      </section>
    </>
  )
}
