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

const OPENINGS = [
  {
    title: "Pharmaceutical Sourcing Coordinator",
    location: "Melbourne, Australia",
    type: "Full-time",
    desc: "Coordinate sourcing engagements with international pharmaceutical manufacturers, managing supplier communication and procurement timelines.",
  },
  {
    title: "Regulatory Documentation Specialist",
    location: "Melbourne / Remote",
    type: "Full-time",
    desc: "Facilitate the collation, review, and coordination of technical documentation packages for cross-border pharmaceutical transactions.",
  },
  {
    title: "Business Development Manager (Asia-Pacific)",
    location: "Melbourne, Australia",
    type: "Full-time",
    desc: "Develop manufacturer and buyer relationships across Asia-Pacific markets, identifying sourcing and procurement opportunities.",
  },
  {
    title: "Supply Chain Coordinator",
    location: "Melbourne, Australia",
    type: "Full-time",
    desc: "Coordinate logistics and freight activities through vetted partners, ensuring product integrity and compliance across international shipments.",
  },
]

export default function Careers() {
  return (
    <>
      <PageHero
        eyebrow="JOIN OUR TEAM"
        title="Careers at Salus Vita"
        description="Join a team of pharmaceutical professionals coordinating quality-assured supply across international markets. We are always looking for people who combine industry expertise with a commitment to compliance and integrity."
        breadcrumbs={[{ label: "About", path: "/about" }, { label: "Careers" }]}
        primaryCTA={{ label: "View Openings", to: "#openings" }}
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
              stability and structure of an established company combined with the agility
              and direct impact of a specialist organisation. We invest in our people
              because our business depends on the quality of their expertise and judgement.
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
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 20, marginTop: 24 }}>
          {WORKPLACE_VALUES.map((v, i) => (
            <div key={v.title} className="card" data-reveal style={rd(i * 80)}>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Current Openings */}
      <section className="content-section" data-reveal style={rd(200)} id="openings">
        <h2>Current Openings</h2>
        <p>We are currently recruiting for the following positions:</p>
        <div style={{ display: "flex", flexDirection: "column", gap: 14, marginTop: 24 }}>
          {OPENINGS.map((job, i) => (
            <div
              key={job.title}
              className="card"
              data-reveal
              style={{
                ...rd(i * 70),
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                flexWrap: "wrap",
                gap: 16,
              }}
            >
              <div>
                <h3>{job.title}</h3>
                <p style={{ marginBottom: 0 }}>{job.desc}</p>
              </div>
              <div style={{ textAlign: "right", minWidth: 160 }}>
                <p style={{ fontSize: 13, color: "var(--teal)", fontWeight: 600, marginBottom: 4 }}>{job.location}</p>
                <p style={{ fontSize: 13, color: "var(--muted-2)", marginBottom: 0 }}>{job.type}</p>
              </div>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 24, fontSize: 15, color: "var(--muted)" }}>
          If you do not see a role that matches your background, we welcome expressions of
          interest from experienced pharmaceutical professionals. Please{" "}
          <Link to="/contact" style={{ color: "var(--teal)", fontWeight: 600 }}>contact us</Link>{" "}
          with your CV and a brief outline of your areas of expertise and interest.
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
