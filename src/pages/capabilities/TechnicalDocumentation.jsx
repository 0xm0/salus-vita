import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

export default function TechnicalDocumentation() {
  return (
    <>
      <PageHero
        eyebrow="CAPABILITIES"
        title="Technical Documentation"
        description="Compiling, reviewing, and managing technical and regulatory documentation to meet the requirements of target regulatory authorities."
        breadcrumbs={[
          { label: "Capabilities", path: "/capabilities" },
          { label: "Technical Documentation" },
        ]}
        primaryCTA={{ label: "Discuss Documentation Needs", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "View All Capabilities", to: "/capabilities" }}
      />

      {/* Documentation Requirements */}
      <section className="content-section" data-reveal>
        <h2>Documentation Requirements</h2>
        <div className="two-col">
          <div>
            <p>
              Pharmaceutical products require extensive technical documentation to support regulatory
              assessment, market authorisation, and ongoing quality assurance. The specific documentation
              requirements vary by product type, regulatory pathway, and target market, but typically
              encompass product specifications, analytical data, manufacturing process descriptions,
              stability studies, and evidence of GMP compliance.
            </p>
            <p>
              Salus Vita assesses the documentation requirements applicable to each client's product
              and target market, identifying what is needed, what is available from the manufacturer,
              and what gaps need to be addressed. This assessment forms the basis of a structured
              documentation plan that guides the compilation process and ensures that all elements are
              addressed within the required timeframe.
            </p>
            <p>
              Our team maintains current knowledge of the documentation expectations of key regulatory
              authorities, including the TGA, EMA, and regulatory bodies across the Asia-Pacific region.
              This allows us to advise clients on the specific format, content, and supporting data
              requirements that apply to their submissions.
            </p>
          </div>
          <div>
            <div className="card" data-reveal style={{ "--rd": "100ms" }}>
              <h3>Certificates of Analysis</h3>
              <p>
                Product-specific CoAs aligned with the relevant pharmacopoeial standards, including
                identity, assay, impurity profiles, and dissolution data.
              </p>
            </div>
            <div className="card" data-reveal style={{ "--rd": "180ms", marginTop: 16 }}>
              <h3>GMP Certificates</h3>
              <p>
                Current GMP certificates from relevant inspectorates, site master files, and
                summaries of recent inspection outcomes.
              </p>
            </div>
            <div className="card" data-reveal style={{ "--rd": "260ms", marginTop: 16 }}>
              <h3>Stability Data</h3>
              <p>
                ICH-compliant stability study reports covering long-term, accelerated, and where
                applicable, stress testing conditions and in-use stability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Manufacturer Liaison */}
      <section className="content-section" data-reveal>
        <h2>Manufacturer Liaison</h2>
        <p>
          Much of the technical documentation required for pharmaceutical market access originates
          with the manufacturer. Salus Vita acts as an intermediary between clients and manufacturers,
          coordinating the provision of documentation and ensuring that what is provided meets the
          format, content, and quality expectations of the target regulatory authority.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {[
            {
              title: "Documentation Requests",
              desc: "Structured communication with manufacturers specifying the exact documentation required, the format expected, and the timeframe for provision. We ensure requests are clear and comprehensive to minimise back-and-forth.",
            },
            {
              title: "Gap Analysis and Resolution",
              desc: "Identification of gaps between the documentation available from the manufacturer and the requirements of the target regulatory authority, with coordination of additional data generation or studies where needed.",
            },
            {
              title: "Quality Review",
              desc: "Review of documentation received from manufacturers for completeness, internal consistency, and alignment with regulatory expectations before inclusion in submission packages.",
            },
            {
              title: "Translation Coordination",
              desc: "Where documentation originates in a language other than English, coordination of certified translation by qualified pharmaceutical translators to meet regulatory authority requirements.",
            },
          ].map((item, i) => (
            <div key={item.title} className="card" data-reveal style={{ "--rd": `${i * 90}ms` }}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Dossier Compilation */}
      <section className="content-section" data-reveal>
        <h2>Dossier Compilation</h2>
        <div className="two-col">
          <div>
            <p>
              For clients requiring complete regulatory dossiers, Salus Vita coordinates the compilation
              of documentation into the format expected by the target regulatory authority. For most
              markets, this follows the ICH Common Technical Document (CTD) structure, with Module 3
              (Quality) being the primary focus of our compilation work.
            </p>
            <p>
              The dossier compilation process involves organising manufacturer-provided data alongside
              independently generated documentation, ensuring internal consistency across all sections,
              and preparing the dossier for submission in the required format. Where electronic
              submission is required (eCTD), we coordinate with specialist eCTD publishing services
              to produce submission-ready files.
            </p>
            <p>
              Our team conducts thorough pre-submission review of compiled dossiers, checking for
              completeness, consistency between sections, and alignment with known regulatory authority
              expectations. This review process reduces the likelihood of assessment queries and
              contributes to more efficient regulatory review timelines.
            </p>
          </div>
          <div>
            <div className="card" data-reveal style={{ "--rd": "100ms" }}>
              <h3>CTD Module 3 Assembly</h3>
              <p>
                Organisation and compilation of drug substance and drug product quality data in
                ICH CTD format for regulatory submission.
              </p>
            </div>
            <div className="card" data-reveal style={{ "--rd": "180ms", marginTop: 16 }}>
              <h3>Pre-Submission Review</h3>
              <p>
                Internal quality review of all dossier components for completeness, consistency,
                and alignment with regulatory expectations prior to filing.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Records */}
      <section className="content-section" data-reveal>
        <h2>Quality Records</h2>
        <p>
          Beyond initial regulatory submissions, pharmaceutical products require ongoing documentation
          management throughout their lifecycle. Salus Vita coordinates the maintenance of quality
          records, including batch-specific Certificates of Analysis, updated stability data, change
          control documentation, and periodic review reports.
        </p>
        <p>
          For each product we facilitate, we maintain a structured documentation file that records the
          regulatory and quality documentation associated with the supply relationship. This provides
          clients with an accessible record of documentation status and supports efficient responses
          to regulatory authority queries or audit requests.
        </p>
        <p>
          Where manufacturers implement changes that affect product documentation, such as process
          modifications, specification updates, or site transfers, Salus Vita coordinates the provision
          of updated documentation and assesses the implications for regulatory filings in each
          affected market.
        </p>
      </section>

      {/* Related Capabilities */}
      <section className="content-section" data-reveal>
        <h3>Related Capabilities</h3>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          <Link to="/capabilities/global-sourcing" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>Global Sourcing</h3>
            <p>Identifying and evaluating manufacturers whose documentation capabilities match your regulatory requirements.</p>
          </Link>
          <Link to="/capabilities/australian-importation" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>Australian Importation</h3>
            <p>Facilitating TGA regulatory assessment and the documentation required for Australian market access.</p>
          </Link>
          <Link to="/capabilities/cross-border-supply" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>Cross-Border Supply</h3>
            <p>Coordinating documentation requirements across multiple jurisdictions for overseas-to-overseas transactions.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Get Started</span>
          <h2>Discuss Your Documentation Requirements</h2>
          <p>
            Our team can assess the documentation needed for your product and target market, and
            coordinate with manufacturers to compile the required package. Submit an enquiry to begin.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Submit a Documentation Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  )
}
