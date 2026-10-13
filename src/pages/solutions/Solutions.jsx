import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const SOLUTIONS = [
  {
    title: "Active Pharmaceutical Ingredients",
    desc: "Coordinating the identification, assessment and procurement of bulk active substances from qualified manufacturers across established and emerging production regions.",
    to: "/solutions/apis",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="14" width="14" height="20" rx="2" stroke="#2d8a56" strokeWidth="2" />
        <rect x="22" y="6" width="14" height="20" rx="2" stroke="#2d8a56" strokeWidth="2" />
        <path d="M11 14V10a4 4 0 0 1 8 0v4" stroke="#2d8a56" strokeWidth="2" />
        <circle cx="11" cy="24" r="3" stroke="#2d8a56" strokeWidth="2" />
        <circle cx="29" cy="16" r="3" stroke="#2d8a56" strokeWidth="2" />
        <path d="M18 24h4M22 26v8" stroke="#2d8a56" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Finished Dosage Forms",
    desc: "Facilitating the sourcing and procurement of market-ready pharmaceutical products, with coordination across product assessment, packaging requirements and regulatory documentation.",
    to: "/solutions/finished-dosage-forms",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="6" y="8" width="28" height="24" rx="3" stroke="#2d8a56" strokeWidth="2" />
        <path d="M6 16h28" stroke="#2d8a56" strokeWidth="2" />
        <circle cx="14" cy="24" r="3" stroke="#2d8a56" strokeWidth="2" />
        <circle cx="26" cy="24" r="3" stroke="#2d8a56" strokeWidth="2" />
        <path d="M14 12h4M22 12h4" stroke="#2d8a56" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Specialist Procurement",
    desc: "Addressing complex sourcing requirements for products that demand additional regulatory diligence, qualified counterparty assessment and coordinated project management.",
    to: "/solutions/specialist-procurement",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="16" r="10" stroke="#2d8a56" strokeWidth="2" />
        <path d="M27 23l7 7" stroke="#2d8a56" strokeWidth="2" strokeLinecap="round" />
        <path d="M16 16h8M20 12v8" stroke="#2d8a56" strokeWidth="2" strokeLinecap="round" />
        <path d="M10 34h20" stroke="#2d8a56" strokeWidth="2" strokeLinecap="round" />
        <path d="M14 34v-4M26 34v-4" stroke="#2d8a56" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Managed Access Programs",
    desc: "Coordinating regulatory pathways and access frameworks that enable healthcare professionals to obtain products through recognised special access and named-patient provisions.",
    to: "/solutions/managed-access",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4v8M20 28v8" stroke="#2d8a56" strokeWidth="2" strokeLinecap="round" />
        <path d="M4 20h8M28 20h8" stroke="#2d8a56" strokeWidth="2" strokeLinecap="round" />
        <circle cx="20" cy="20" r="8" stroke="#2d8a56" strokeWidth="2" />
        <circle cx="20" cy="20" r="3" fill="#2d8a56" />
        <path d="M10 10l4 4M26 26l4 4M26 10l-4 4M14 26l-4 4" stroke="#2d8a56" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

const PROCESS_STEPS = [
  {
    step: "01",
    title: "Requirement Definition",
    desc: "We begin with a thorough understanding of your product specifications, target market, regulatory context and commercial parameters.",
  },
  {
    step: "02",
    title: "Sourcing Assessment",
    desc: "Our team assesses qualified manufacturers and evaluates potential sources against quality, regulatory standing, capacity and pricing criteria.",
  },
  {
    step: "03",
    title: "Counterparty Qualification",
    desc: "Selected sources undergo due diligence review, including GMP compliance verification, documentation assessment and reference validation.",
  },
  {
    step: "04",
    title: "Coordination and Delivery",
    desc: "We coordinate procurement, documentation, logistics and regulatory requirements through to successful delivery into your target market.",
  },
]

const VALUE_PROPS = [
  {
    title: "Regulatory Awareness",
    desc: "Working knowledge of TGA, EMA, WHO PQ and regional frameworks informs every sourcing decision, ensuring alignment with your market requirements.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="4" y="4" width="24" height="24" rx="3" stroke="#0f3d22" strokeWidth="2" />
        <path d="M10 14l4 4 8-8" stroke="#2d8a56" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M10 22h12" stroke="#0f3d22" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Quality-Focused Assessment",
    desc: "Manufacturer evaluation follows a structured methodology aligned with international GMP standards, with ongoing monitoring of qualified sources.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" stroke="#0f3d22" strokeWidth="2" />
        <path d="M16 8v8l6 4" stroke="#2d8a56" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Product-Neutral Approach",
    desc: "Our recommendations are driven by your requirements and the quality profile of available sources, not by commercial affiliations with any manufacturer.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 4l3 6h7l-5.5 4.5L22 22l-6-4-6 4 1.5-7.5L6 10h7l3-6z" stroke="#0f3d22" strokeWidth="2" strokeLinejoin="round" />
        <circle cx="16" cy="14" r="3" stroke="#2d8a56" strokeWidth="2" />
      </svg>
    ),
  },
  {
    title: "International Reach",
    desc: "Established relationships with manufacturers across multiple production regions provide access to a broad range of pharmaceutical products and active substances.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="16" cy="16" r="12" stroke="#0f3d22" strokeWidth="2" />
        <ellipse cx="16" cy="16" rx="6" ry="12" stroke="#0f3d22" strokeWidth="1.5" />
        <path d="M4 16h24M6 10h20M6 22h20" stroke="#2d8a56" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
]

export default function Solutions() {
  return (
    <>
      <PageHero
        eyebrow="PHARMACEUTICAL SOLUTIONS"
        title="Pharmaceutical Sourcing Built Around Customer Requirements"
        description="Sourcing, procurement and supply services across active ingredients, finished products, specialist categories and managed access pathways."
        primaryCTA={{ label: "Submit a Sourcing Enquiry", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "Explore Capabilities", to: "/capabilities" }}
      />

      <section className="content-section" data-reveal>
        <h2>Sourcing Structured Around Your Needs</h2>
        <div className="two-col">
          <div>
            <p>
              Pharmaceutical sourcing involves more than identifying a manufacturer and placing an order. It requires
              an understanding of regulatory frameworks, quality expectations, documentation standards and the
              commercial realities of each target market. Salus Vita coordinates this process from initial requirement
              through to successful delivery.
            </p>
            <p>
              As a sourcing, procurement and supply company, we do not manufacture pharmaceutical products ourselves.
              Instead, we assess and qualify external manufacturers, facilitate procurement on behalf of our customers
              and coordinate the documentation, logistics and regulatory requirements that underpin compliant
              international supply.
            </p>
          </div>
          <div>
            <p>
              This product-neutral approach means our recommendations are guided by the quality profile of available
              sources and the specific requirements of each customer. Whether you are a pharmaceutical distributor
              seeking a reliable source of finished products, a manufacturer requiring active ingredients, or a
              healthcare institution navigating a complex access pathway, we structure our engagement to address your
              particular requirements.
            </p>
            <p>
              Our solutions are organised into four core areas, each reflecting a distinct set of customer needs
              and procurement considerations.
            </p>
          </div>
        </div>
      </section>

      <section className="content-section">
        <h2 data-reveal>Our Solutions</h2>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {SOLUTIONS.map((s, i) => (
            <Link
              to={s.to}
              key={s.title}
              className="card"
              data-reveal
              style={{ ...rd(i * 90), textDecoration: "none", color: "inherit" }}
            >
              <div style={{ marginBottom: 16 }}>{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
              <span style={{ marginTop: 16, display: "inline-block", fontSize: 14, fontWeight: 600, color: "var(--teal)" }}>
                Learn more &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>

      <section className="content-section" data-reveal>
        <h2>How We Work</h2>
        <p>
          Every sourcing engagement follows a structured process designed to ensure that the products we facilitate
          meet the quality, regulatory and commercial expectations of our customers.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {PROCESS_STEPS.map((p, i) => (
            <div key={p.step} className="card" data-reveal style={rd(i * 90)}>
              <span style={{ fontSize: 28, fontWeight: 800, color: "var(--teal)", display: "block", marginBottom: 8 }}>
                {p.step}
              </span>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section" data-reveal>
        <h2>Why Salus Vita</h2>
        <p style={{ maxWidth: 720, marginBottom: 32 }}>
          Our value lies in the rigour of our assessment processes, the breadth of our manufacturer relationships
          and our understanding of the regulatory and commercial landscape across multiple markets.
        </p>
        <div className="feature-grid">
          {VALUE_PROPS.map((v, i) => (
            <div key={v.title} className="card" data-reveal style={rd(i * 90)}>
              <div style={{ marginBottom: 16 }}>{v.icon}</div>
              <h3>{v.title}</h3>
              <p>{v.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="content-section" data-reveal>
        <h2>Related Pages</h2>
        <div className="related-grid">
          <Link to="/capabilities">Our Capabilities</Link>
          <Link to="/quality">Quality Assurance</Link>
          <Link to="/global-markets">Global Markets</Link>
          <Link to="/about">About Salus Vita</Link>
        </div>
      </section>

      <section className="cta-banner" data-reveal>
        <div className="cta-card">
          <h2>Discuss Your Sourcing Requirements</h2>
          <p>
            Whether you have a defined product specification or are exploring sourcing options for a new market,
            our team can help structure the right approach. Submit an enquiry and we will respond within one
            business day.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Submit Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  )
}
