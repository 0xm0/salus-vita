import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const CAPABILITIES = [
  {
    title: "Global Sourcing",
    desc: "Identifying and evaluating pharmaceutical manufacturers and CDMOs across international markets to match your product and quality requirements.",
    to: "/capabilities/global-sourcing",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="18" stroke="#176E79" strokeWidth="2" fill="none" />
        <ellipse cx="20" cy="20" rx="8" ry="18" stroke="#176E79" strokeWidth="1.5" fill="none" />
        <line x1="2" y1="14" x2="38" y2="14" stroke="#176E79" strokeWidth="1.5" />
        <line x1="2" y1="26" x2="38" y2="26" stroke="#176E79" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "International Procurement",
    desc: "Coordinating quotations, commercial negotiations, contract structuring, and order planning for pharmaceutical products sourced from overseas.",
    to: "/capabilities/international-procurement",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="8" width="32" height="24" rx="2" stroke="#176E79" strokeWidth="2" fill="none" />
        <path d="M4 16h32" stroke="#176E79" strokeWidth="1.5" />
        <rect x="8" y="22" width="10" height="4" rx="1" stroke="#176E79" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    title: "Australian Importation",
    desc: "Facilitating TGA regulatory assessment, import permit coordination, customs processes, and sponsor obligation identification for goods entering Australia.",
    to: "/capabilities/australian-importation",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4l14 8v16l-14 8-14-8V12l14-8z" stroke="#176E79" strokeWidth="2" fill="none" />
        <path d="M20 4v32M6 12l14 8 14-8" stroke="#176E79" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Cross-Border Supply",
    desc: "Structuring overseas-to-overseas pharmaceutical transactions where products do not enter Australia, with regulatory assessment for each jurisdiction.",
    to: "/capabilities/cross-border-supply",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 20h24M26 14l6 6-6 6" stroke="#176E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M32 20h-24M14 26l-6-6 6-6" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" opacity="0.5" />
        <circle cx="8" cy="20" r="3" stroke="#176E79" strokeWidth="1.5" fill="none" />
        <circle cx="32" cy="20" r="3" stroke="#176E79" strokeWidth="1.5" fill="none" />
      </svg>
    ),
  },
  {
    title: "Technical Documentation",
    desc: "Coordinating Certificates of Analysis, GMP certificates, product specifications, stability data, and regulatory dossier compilation with manufacturers.",
    to: "/capabilities/technical-documentation",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 4h14l8 8v24a2 2 0 01-2 2H10a2 2 0 01-2-2V6a2 2 0 012-2z" stroke="#176E79" strokeWidth="2" fill="none" />
        <path d="M24 4v8h8" stroke="#176E79" strokeWidth="1.5" />
        <line x1="14" y1="20" x2="26" y2="20" stroke="#176E79" strokeWidth="1.5" />
        <line x1="14" y1="26" x2="26" y2="26" stroke="#176E79" strokeWidth="1.5" />
        <line x1="14" y1="32" x2="22" y2="32" stroke="#176E79" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    title: "Logistics Coordination",
    desc: "Coordinating third-party freight forwarding, customs brokerage, cold-chain management, and warehousing partnerships for pharmaceutical shipments.",
    to: "/capabilities/logistics",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2" y="14" width="22" height="16" rx="2" stroke="#176E79" strokeWidth="2" fill="none" />
        <path d="M24 18h8l4 6v6h-12v-12z" stroke="#176E79" strokeWidth="2" fill="none" />
        <circle cx="10" cy="32" r="3" stroke="#176E79" strokeWidth="2" fill="none" />
        <circle cx="30" cy="32" r="3" stroke="#176E79" strokeWidth="2" fill="none" />
      </svg>
    ),
  },
  {
    title: "Bespoke Sourcing",
    desc: "Managing customer-specific, complex procurement requirements through dedicated feasibility assessment, custom supply solutions, and structured project oversight.",
    to: "/capabilities/bespoke-sourcing",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="16" r="8" stroke="#176E79" strokeWidth="2" fill="none" />
        <path d="M20 24v8M16 28h8" stroke="#176E79" strokeWidth="2" strokeLinecap="round" />
        <path d="M26 10l4-4M28 8l-2 4 4-2" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Capabilities() {
  return (
    <>
      <PageHero
        eyebrow="OUR CAPABILITIES"
        title="Coordinating Pharmaceutical Procurement Across Borders"
        description="We coordinate each step of international pharmaceutical procurement so buyers and suppliers transact with confidence."
        primaryCTA={{ label: "Submit a Sourcing Enquiry", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "View Our Solutions", to: "/solutions" }}
      />

      <section className="content-section" data-reveal>
        <h2>An End-to-End Approach to Pharmaceutical Procurement</h2>
        <div className="two-col">
          <div>
            <p>
              International pharmaceutical procurement presents a distinct set of challenges. Identifying
              qualified manufacturers, assessing product capability, navigating regulatory frameworks across
              jurisdictions, and coordinating logistics all require specialist knowledge and established
              relationships.
            </p>
            <p>
              Salus Vita coordinates each of these elements on behalf of our clients. We do not manufacture
              or warehouse pharmaceutical products ourselves. Instead, we act as a dedicated intermediary,
              facilitating transactions between overseas manufacturers and buyers in Australia and across
              international markets. Our value lies in the depth of our assessment processes, our
              understanding of regulatory requirements, and our ability to coordinate complex, multi-party
              supply arrangements.
            </p>
          </div>
          <div>
            <p>
              Whether a client requires a single active pharmaceutical ingredient for a niche formulation
              or a portfolio of finished dosage forms for multi-market distribution, Salus Vita brings the
              technical knowledge, commercial relationships, and operational discipline needed to facilitate
              the procurement effectively.
            </p>
            <p>
              Each engagement is structured around the client's specific requirements, regulatory context,
              and commercial objectives. We work to understand the full scope of what is needed before
              recommending a sourcing pathway, and we maintain transparency throughout every stage of the
              process.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2>Explore Our Capabilities</h2>
        <p style={{ maxWidth: 720, marginBottom: 32 }}>
          Select a capability below to learn more about how Salus Vita coordinates each stage of the
          pharmaceutical procurement process.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {CAPABILITIES.map((c, i) => (
            <Link
              to={c.to}
              key={c.title}
              className="card"
              data-reveal
              style={{ "--rd": `${i * 80}ms`, textDecoration: "none", color: "inherit" }}
            >
              <div style={{ marginBottom: 16 }}>{c.icon}</div>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
              <span style={{ display: "inline-block", marginTop: 16, fontSize: 14, fontWeight: 600, color: "var(--teal)" }}>
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section" data-reveal>
        <h2>How We Work</h2>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {[
            {
              title: "Assessment-Led",
              desc: "Every engagement begins with a thorough assessment of requirements, regulatory context, and available supply options before any procurement activity commences.",
            },
            {
              title: "Transparent Coordination",
              desc: "We maintain clear communication between all parties throughout the procurement process, providing visibility into timelines, documentation status, and any issues that arise.",
            },
            {
              title: "Regulatory Awareness",
              desc: "Our team maintains current knowledge of regulatory frameworks across key markets, ensuring that sourcing recommendations account for the documentation and compliance requirements of each jurisdiction.",
            },
          ].map((item, i) => (
            <div key={item.title} className="card" data-reveal style={{ "--rd": `${i * 90}ms` }}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Work With Us</span>
          <h2>Discuss Your Procurement Requirements</h2>
          <p>
            Our team is ready to assess your pharmaceutical sourcing needs and recommend an appropriate
            procurement pathway. Get in touch to start the conversation.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Submit an Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  )
}
