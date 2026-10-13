import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const ABOUT_LINKS = [
  {
    title: "Our Story",
    desc: "The founding vision behind Salus Vita and the milestones that have shaped our growth as an international pharmaceutical sourcing and procurement company.",
    to: "/about/our-story",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 8v4l3 3" /><circle cx="12" cy="12" r="10" />
      </svg>
    ),
  },
  {
    title: "Leadership",
    desc: "Meet the experienced pharmaceutical professionals who guide Salus Vita's strategic direction and operational standards.",
    to: "/about/leadership",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    title: "Governance",
    desc: "Our corporate governance framework, compliance culture, and the ethical standards that underpin every engagement and transaction.",
    to: "/about/governance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" />
      </svg>
    ),
  },
  {
    title: "Responsibility",
    desc: "Our commitments to ethical sourcing, environmental sustainability, modern slavery prevention, and responsible supply chain practices.",
    to: "/about/responsibility",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78L12 21.23l8.84-8.84a5.5 5.5 0 0 0 0-7.78Z" />
      </svg>
    ),
  },
  {
    title: "Why Salus Vita",
    desc: "What sets us apart in international pharmaceutical supply - from our Australian regulatory position to our transparent, facilitator-led operating model.",
    to: "/about/why-salus-vita",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
      </svg>
    ),
  },
  {
    title: "Careers",
    desc: "Join a team of pharmaceutical professionals working across international markets to coordinate compliant pharmaceutical supply.",
    to: "/about/careers",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="7" width="20" height="14" rx="2" /><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" /><path d="M12 12v.01" />
      </svg>
    ),
  },
]

const VALUES = [
  {
    title: "Quality Assurance",
    desc: "Every manufacturer we engage with is assessed against internationally recognised quality standards. We do not compromise on the integrity of pharmaceutical supply.",
  },
  {
    title: "Regulatory Competence",
    desc: "Our team maintains working knowledge of regulatory frameworks across Australia, Asia-Pacific, Europe, and the Middle East, enabling us to coordinate compliant cross-border transactions.",
  },
  {
    title: "Transparent Partnerships",
    desc: "We build relationships founded on clear communication, documented processes, and honest commercial engagement. Our partners know exactly how we operate.",
  },
  {
    title: "Patient-Centred Purpose",
    desc: "Behind every pharmaceutical transaction is a healthcare provider and a patient in need. This understanding shapes the standards we set and the urgency with which we operate.",
  },
]

export default function About() {
  return (
    <>
      <PageHero
        eyebrow="WHO WE ARE"
        title="About Salus Vita"
        description="Australian-headquartered pharmaceutical sourcing and supply company. We connect vetted manufacturers with buyers across global markets."
        primaryCTA={{ label: "Discuss Your Requirements", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "Our Story", to: "/about/our-story" }}
      />

      {/* Company Overview */}
      <section className="content-section" data-reveal>
        <h2>Company Overview</h2>
        <div className="two-col">
          <div>
            <p>
              Salus Vita is a specialist pharmaceutical sourcing, procurement, and supply
              coordination company headquartered in Australia. Founded in 2023,
              the company facilitates the movement of active pharmaceutical ingredients (APIs)
              and finished dosage forms between overseas manufacturers and buyers in
              Australia and Asia-Pacific, with growing reach into European and Middle Eastern markets.
            </p>
            <p>
              We do not manufacture pharmaceutical products, operate warehousing facilities,
              or hold GMP certifications. Instead, Salus Vita acts as a coordinating
              intermediary - assessing manufacturer capabilities, facilitating commercial
              engagement, coordinating regulatory documentation, and managing logistics
              through vetted partners.
            </p>
          </div>
          <div>
            <p>
              Our team combines pharmaceutical industry experience spanning quality
              assurance, regulatory affairs, international procurement, and supply chain
              coordination. This cross-functional expertise enables us to navigate the
              complexities of international pharmaceutical trade with a structured,
              compliance-conscious approach.
            </p>
            <p>
              The name Salus Vita - derived from the Latin for "health of life" - reflects
              the purpose that underpins our work. Every sourcing engagement, every
              procurement cycle, and every logistics coordination ultimately serves the
              goal of improving access to quality pharmaceutical products for patients
              and healthcare providers.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="content-section" data-reveal style={rd(100)}>
        <h2>Our Values</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 24, marginTop: 24 }}>
          {VALUES.map((v, i) => (
            <div key={v.title} className="card" data-reveal style={rd(i * 80)}>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Operating Model */}
      <section className="content-section" data-reveal style={rd(200)}>
        <h2>Our Operating Model</h2>
        <p>
          Salus Vita operates across three principal transaction pathways, each adapted
          to the regulatory, commercial, and logistical context of the parties involved.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24, marginTop: 24 }}>
          {[
            {
              title: "Australian Importation",
              desc: "Coordinating the importation of pharmaceutical products into Australia on behalf of local buyers, managing documentation, supplier engagement, and freight logistics.",
            },
            {
              title: "Cross-Border Facilitation",
              desc: "Facilitating direct manufacturer-to-buyer transactions across international borders, coordinating quality documentation, commercial terms, and regulatory requirements.",
            },
            {
              title: "Manufacturer-to-Distributor",
              desc: "Connecting overseas manufacturers with established distributors in target markets, coordinating the commercial and regulatory framework for ongoing supply relationships.",
            },
          ].map((item, i) => (
            <div key={item.title} className="card" data-reveal style={rd(i * 80)}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* About Sub-Pages Grid */}
      <section className="content-section" data-reveal style={rd(300)}>
        <h2>Explore</h2>
        <p>Learn more about who we are, how we operate, and why organisations choose Salus Vita.</p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24, marginTop: 24 }}>
          {ABOUT_LINKS.map((item, i) => (
            <Link
              to={item.to}
              key={item.title}
              className="card"
              data-reveal
              style={{ ...rd(i * 70), textDecoration: "none", color: "inherit" }}
            >
              <span className="card-icon">{item.icon}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Get in Touch</span>
          <h2>Discuss Your Pharmaceutical Sourcing Requirements</h2>
          <p>
            Our team is ready to coordinate a sourcing solution tailored to your
            requirements. Get in touch to discuss how Salus Vita can support your
            next procurement engagement.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Submit an Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  )
}
