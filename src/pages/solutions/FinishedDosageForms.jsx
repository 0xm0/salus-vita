import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const PROCESS_STEPS = [
  {
    title: "Manufacturer Identification",
    desc: "Systematic evaluation of qualified manufacturers against product specifications, regulatory standing, and production capacity.",
  },
  {
    title: "Formulation Review",
    desc: "Assessment of dosage form suitability, excipient compatibility, stability profile, and bioequivalence data where applicable.",
  },
  {
    title: "Regulatory Alignment",
    desc: "Verification that the finished product dossier meets the registration requirements of the intended destination market.",
  },
  {
    title: "Commercial Evaluation",
    desc: "Analysis of landed cost, minimum order quantities, lead times, and long-term supply sustainability.",
  },
]

const DOSAGE_CATEGORIES = [
  {
    title: "Oral Solid Dosage",
    desc: "Tablets, capsules, and modified-release formulations coordinated from manufacturers with demonstrated process validation and batch consistency.",
  },
  {
    title: "Oral Liquids",
    desc: "Solutions, suspensions, and syrups sourced from facilities equipped for liquid manufacturing under appropriate environmental controls.",
  },
  {
    title: "Injectables",
    desc: "Sterile products including ampoules, vials, and pre-filled syringes from manufacturers with validated aseptic processing capability.",
  },
  {
    title: "Topical and Specialty",
    desc: "Creams, ointments, transdermal systems, and specialty formulations assessed for stability, packaging integrity, and market-specific compliance.",
  },
]

export default function FinishedDosageForms() {
  return (
    <>
      <PageHero
        eyebrow="PHARMACEUTICAL SOLUTIONS"
        title="Finished Dosage Forms"
        description="Salus Vita coordinates the procurement of market-ready finished pharmaceutical products from qualified external manufacturers, managing the assessment, documentation, and regulatory alignment required to connect products with their intended markets."
        breadcrumbs={[{ label: "Solutions", path: "/solutions" }, { label: "Finished Dosage Forms" }]}
        primaryCTA={{ label: "Request Product Sourcing", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "View All Solutions", to: "/solutions" }}
      />

      {/* Product Assessment */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
            <rect x="9" y="3" width="6" height="4" rx="1" />
            <path d="M9 14l2 2 4-4" />
          </svg>
          <h2 style={{ margin: 0 }}>Product Assessment</h2>
        </div>
        <p>
          Every finished dosage form engagement begins with a structured product assessment. Salus Vita evaluates the
          technical and commercial viability of sourcing a given product from external manufacturers, considering
          formulation complexity, regulatory pathway requirements, and the specific quality expectations of the
          destination market.
        </p>
        <p>
          This assessment examines the manufacturer's production history for comparable dosage forms, their quality
          management system maturity, and the completeness of their product dossier. Where gaps are identified,
          our team works with the manufacturer to determine whether the outstanding requirements can be addressed
          within the project timeline.
        </p>
        <p>
          Product assessment is not a single checkpoint but an iterative process. As specifications are refined and
          regulatory intelligence is gathered, the assessment evolves to reflect current market conditions, pricing
          dynamics, and any changes to the regulatory landscape in the target jurisdiction.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {DOSAGE_CATEGORIES.map((cat, i) => (
            <div key={cat.title} className="card" data-reveal style={rd(i * 90)}>
              <h3>{cat.title}</h3>
              <p>{cat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Commercial Feasibility */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
          </svg>
          <h2 style={{ margin: 0 }}>Commercial Feasibility</h2>
        </div>
        <p>
          Sourcing a finished dosage form involves more than identifying a capable manufacturer. Salus Vita
          conducts a thorough commercial feasibility analysis that considers landed cost modelling, minimum
          viable order quantities, lead times from order placement through to delivery, and the long-term
          sustainability of the proposed supply arrangement.
        </p>
        <p>
          Our commercial analysis accounts for the full cost chain, including manufacturing, packaging,
          quality release, freight, insurance, import duties, and any market-specific levies or registration
          fees. This transparent cost modelling allows our clients to evaluate the true economics of each
          sourcing option before committing to a supply agreement.
        </p>
        <p>
          For products entering price-regulated markets, we assess the relationship between achievable
          landed costs and prevailing reimbursement or formulary pricing. This ensures that the supply
          arrangement is commercially viable not only at launch but across the expected product lifecycle,
          accounting for potential price adjustments and competitive dynamics.
        </p>
      </section>

      {/* Packaging and Labelling */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
            <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
            <line x1="12" y1="22.08" x2="12" y2="12" />
          </svg>
          <h2 style={{ margin: 0 }}>Packaging and Labelling</h2>
        </div>
        <div className="two-col">
          <div>
            <p>
              Packaging and labelling requirements vary significantly across regulatory jurisdictions.
              Salus Vita coordinates with manufacturers to ensure that finished products meet the specific
              packaging standards, artwork specifications, and labelling regulations of each destination market.
            </p>
            <p>
              This coordination encompasses primary and secondary packaging format selection, patient
              information leaflet content and layout, language requirements, Braille compliance where mandated,
              and country-specific elements such as barcode standards and warning statements. Our team manages
              the artwork review cycle from initial design through to regulatory approval, reducing the risk of
              delays caused by non-compliant packaging.
            </p>
            <p>
              Where serialisation is required under track-and-trace regulations, Salus Vita facilitates
              alignment between the manufacturer's serialisation capability and the specific requirements
              of the destination market, whether under the EU Falsified Medicines Directive, Saudi Arabia's
              RSD system, or other national frameworks.
            </p>
          </div>
          <div>
            <div className="card" data-reveal style={rd(100)}>
              <h3>Artwork Management</h3>
              <p>
                Coordinated review cycles covering regulatory content, translation accuracy, and
                print-ready specifications aligned to manufacturer capabilities.
              </p>
            </div>
            <div className="card" data-reveal style={{ ...rd(180), marginTop: 16 }}>
              <h3>Serialisation Compliance</h3>
              <p>
                Alignment of manufacturer serialisation systems with destination market track-and-trace
                regulations and aggregation requirements.
              </p>
            </div>
            <div className="card" data-reveal style={{ ...rd(260), marginTop: 16 }}>
              <h3>Stability and Shelf Life</h3>
              <p>
                Assessment of packaging suitability for intended climate zones and verification
                of shelf-life claims against stability data.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Market Requirements */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <line x1="2" y1="12" x2="22" y2="12" />
            <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
          </svg>
          <h2 style={{ margin: 0 }}>Market Requirements</h2>
        </div>
        <p>
          Each pharmaceutical market operates within its own regulatory framework, and finished dosage
          forms must satisfy market-specific requirements before they can be imported, registered, or
          distributed. Salus Vita assesses these requirements early in the sourcing process, ensuring that
          the selected manufacturer and product configuration align with the expectations of the target
          regulatory authority.
        </p>
        <p>
          Market requirements extend beyond product registration. They encompass import licensing, GMP
          recognition of the manufacturing site, pharmacovigilance obligations, pricing and reimbursement
          submissions, and ongoing post-market compliance. Our team coordinates across these workstreams to
          ensure that nothing is overlooked as a product moves from sourcing through to market entry.
        </p>
        <p>
          For clients seeking to introduce a finished product into multiple markets simultaneously,
          Salus Vita evaluates the regulatory alignment across those jurisdictions. Where mutual recognition
          agreements or harmonised standards exist, we identify opportunities to streamline the registration
          process and reduce duplication of effort.
        </p>
      </section>

      {/* Process Overview */}
      <section className="content-section" data-reveal>
        <h2>How We Work</h2>
        <p>
          Salus Vita follows a structured process for every finished dosage form engagement. From initial
          product scoping through to ongoing supply management, each phase is designed to reduce risk,
          ensure quality, and deliver a supply arrangement that meets both regulatory and commercial objectives.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.title} className="card" data-reveal style={rd(i * 90)}>
              <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                <span style={{
                  display: "inline-flex", alignItems: "center", justifyContent: "center",
                  width: 28, height: 28, borderRadius: "50%", backgroundColor: "#176E79",
                  color: "#fff", fontSize: 13, fontWeight: 700,
                }}>
                  {i + 1}
                </span>
                <h3 style={{ margin: 0 }}>{step.title}</h3>
              </div>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Solutions */}
      <section className="related-links" data-reveal>
        <h3>Related Solutions</h3>
        <div className="related-grid">
          <Link to="/solutions/apis">Active Pharmaceutical Ingredients</Link>
          <Link to="/solutions/specialist-procurement">Specialist Procurement</Link>
          <Link to="/solutions/managed-access">Managed Access Programs</Link>
          <Link to="/capabilities/international-procurement">International Procurement</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" data-reveal>
        <div className="cta-card">
          <h2>Looking for a Finished Product Source?</h2>
          <p>
            Share your product requirements and target market details. Our team will assess sourcing
            options and provide a structured proposal covering manufacturer qualification, regulatory
            pathway, and commercial terms.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Submit Sourcing Enquiry</Link>
            <Link to="/contact" className="btn btn-outline">Contact Our Team</Link>
          </div>
        </div>
      </section>
    </>
  )
}
