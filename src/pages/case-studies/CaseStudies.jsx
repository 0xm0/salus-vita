import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const CASE_STUDIES = [
  {
    slug: "cross-border-api-sourcing-apac",
    title: "Cross-Border API Sourcing for APAC Manufacturer",
    client: "Regional Pharmaceutical Manufacturer",
    region: "Asia-Pacific",
    summary: "A mid-size pharmaceutical manufacturer required a reliable, compliant supply of multiple active pharmaceutical ingredients to support its growing generics portfolio across three Asia-Pacific markets. Salus Vita identified and qualified alternative suppliers, reducing lead times and ensuring uninterrupted supply.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" /><path d="M2 12h20" /><path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
      </svg>
    ),
  },
  {
    slug: "managed-access-australian-hospital",
    title: "Managed Access Supply for Australian Hospital Network",
    client: "Tertiary Hospital Network",
    region: "Australia",
    summary: "A major Australian hospital network required urgent access to a therapeutic product not registered on the ARTG for compassionate use in a critical care setting. Salus Vita coordinated the regulatory pathway, sourced the product from a qualified overseas manufacturer, and managed compliant importation under the Special Access Scheme.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
  },
  {
    slug: "generic-portfolio-southeast-asia",
    title: "Generic Portfolio Expansion Across Southeast Asia",
    client: "Pharmaceutical Distributor",
    region: "Southeast Asia",
    summary: "A regional pharmaceutical distributor sought to expand its portfolio of generic finished dosage forms across multiple Southeast Asian markets. Salus Vita sourced and qualified a range of products from GMP-certified manufacturers, assembling the necessary documentation packages for each target market's regulatory authority.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
  },
  {
    slug: "bespoke-sourcing-rare-ingredient",
    title: "Bespoke Sourcing of a Rare Active Ingredient",
    client: "Compounding Pharmacy Group",
    region: "Australia and New Zealand",
    summary: "A compounding pharmacy group required a low-volume, hard-to-find active pharmaceutical ingredient that had been discontinued by its previous supplier. Salus Vita conducted an extensive global search, identified a GMP-certified alternative, and established a reliable supply arrangement within eight weeks.",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
        <path d="M13 2 3 14h9l-1 8 10-12h-9l1-8Z" />
      </svg>
    ),
  },
]

export default function CaseStudies() {
  return (
    <>
      <PageHero
        eyebrow="OUR WORK"
        title="Case Studies"
        description="Real-world examples of how Salus Vita delivers pharmaceutical supply solutions for manufacturers, distributors, and healthcare providers across international markets."
        primaryCTA={{ label: "Submit an Enquiry", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "View Capabilities", to: "/capabilities" }}
      />

      {/* Introduction */}
      <section className="content-section">
        <h2 data-reveal>Proven Results Across Complex Supply Challenges</h2>
        <p data-reveal>
          Every pharmaceutical supply engagement presents a unique combination of regulatory, quality, logistical, and commercial considerations. The case studies below illustrate how Salus Vita applies its sourcing expertise, manufacturer network, and regulatory knowledge to deliver reliable outcomes for our partners.
        </p>
        <p data-reveal>
          All case studies have been anonymised in accordance with client confidentiality obligations and regulatory requirements. Product names, dosages, and specific client identifiers have been removed.
        </p>
      </section>

      {/* Case Study Grid */}
      <section className="content-section">
        <div className="feature-grid">
          {CASE_STUDIES.map((cs, i) => (
            <Link
              to={`/case-studies/${cs.slug}`}
              key={cs.slug}
              className="card"
              data-reveal
              style={{
                "--rd": `${i * 80}ms`,
                textDecoration: "none",
                color: "inherit",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span className="card-icon">{cs.icon}</span>
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#fff",
                    background: "var(--teal)",
                    padding: "4px 10px",
                    borderRadius: 12,
                  }}
                >
                  {cs.region}
                </span>
              </div>
              <span
                className="eyebrow"
                style={{ fontSize: 11, color: "var(--muted-2)", marginBottom: 4 }}
              >
                {cs.client}
              </span>
              <h3>{cs.title}</h3>
              <p style={{ flex: 1 }}>{cs.summary}</p>
              <span
                style={{
                  fontSize: 14,
                  fontWeight: 600,
                  color: "var(--teal)",
                  marginTop: 16,
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 6,
                }}
              >
                Read case study
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  style={{ width: 16, height: 16 }}
                >
                  <path d="M5 12h14" />
                  <path d="m12 5 7 7-7 7" />
                </svg>
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Engagement Model */}
      <section style={{ background: "var(--pale-blue)" }}>
        <div className="content-section">
          <h2 data-reveal>Our Engagement Approach</h2>
          <p data-reveal>
            Each engagement follows a structured process designed to deliver reliable, compliant outcomes.
          </p>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 24,
              marginTop: 24,
            }}
          >
            {[
              {
                step: "01",
                title: "Understand",
                desc: "We begin with a detailed assessment of your product requirements, target markets, regulatory context, and commercial objectives.",
              },
              {
                step: "02",
                title: "Source and Qualify",
                desc: "Our team identifies and evaluates potential suppliers against international quality standards, regulatory requirements, and commercial criteria.",
              },
              {
                step: "03",
                title: "Document and Comply",
                desc: "We assemble complete regulatory documentation packages tailored to each target market, ensuring alignment with all applicable requirements.",
              },
              {
                step: "04",
                title: "Deliver",
                desc: "GDP-compliant logistics arrangements ensure product integrity from manufacturer release through to final delivery, with full traceability throughout.",
              },
            ].map((item, i) => (
              <div
                key={item.step}
                className="card"
                data-reveal
                style={{ "--rd": `${i * 90}ms` }}
              >
                <span
                  style={{
                    fontSize: 36,
                    fontWeight: 800,
                    color: "var(--teal)",
                    opacity: 0.25,
                    display: "block",
                    marginBottom: 16,
                  }}
                >
                  {item.step}
                </span>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <h2>Have a Similar Challenge?</h2>
          <p>
            Talk to our team about how Salus Vita can develop a tailored solution for your pharmaceutical supply requirements.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">
              Submit a Sourcing Enquiry
            </Link>
            <Link to="/contact" className="btn btn-outline">
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
