import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

export default function CrossBorderSupply() {
  return (
    <>
      <PageHero
        eyebrow="CAPABILITIES"
        title="Cross-Border Supply"
        description="Structuring pharmaceutical supply pathways between overseas markets, with regulatory and commercial assessment for each jurisdiction involved."
        breadcrumbs={[
          { label: "Capabilities", path: "/capabilities" },
          { label: "Cross-Border Supply" },
        ]}
        primaryCTA={{ label: "Discuss Cross-Border Needs", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "View All Capabilities", to: "/capabilities" }}
      />

      {/* Transaction Structuring */}
      <section className="content-section" data-reveal>
        <h2>Transaction Structuring</h2>
        <div className="two-col">
          <div>
            <p>
              Not all pharmaceutical procurement involves importation into Australia. Salus Vita
              regularly coordinates transactions where products are sourced from a manufacturer in one
              country and delivered to a buyer in another, without the goods passing through Australian
              territory. These overseas-to-overseas transactions require careful structuring to ensure
              that commercial terms, documentation, and logistics are appropriate for the jurisdictions
              involved.
            </p>
            <p>
              Our team assesses each cross-border transaction to determine the optimal supply pathway,
              considering factors such as the regulatory status of the product in the destination market,
              the manufacturer's export capabilities, applicable trade regulations, and the commercial
              preferences of both buyer and seller.
            </p>
            <p>
              Transaction structures may involve direct supply from manufacturer to buyer, or may
              require intermediate steps such as quality testing at an independent laboratory, repackaging
              or relabelling to meet destination market requirements, or consolidation of shipments from
              multiple origins. Salus Vita coordinates each element of the transaction structure to
              ensure that the arrangement functions smoothly and compliantly.
            </p>
          </div>
          <div>
            <div className="card" data-reveal style={{ "--rd": "100ms" }}>
              <h3>Direct Supply Pathways</h3>
              <p>
                Coordination of manufacturer-to-buyer supply arrangements with appropriate commercial
                and quality documentation for the destination market.
              </p>
            </div>
            <div className="card" data-reveal style={{ "--rd": "180ms", marginTop: 16 }}>
              <h3>Multi-Origin Coordination</h3>
              <p>
                Management of transactions involving multiple manufacturing origins or intermediate
                processing steps across different jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Counterparty Identification */}
      <section className="content-section" data-reveal>
        <h2>Counterparty Identification</h2>
        <p>
          Cross-border pharmaceutical supply often involves identifying and qualifying counterparties
          in markets where the client may not have established relationships. Salus Vita facilitates
          this process by drawing on our international network to identify suitable manufacturers,
          distributors, or importers in the relevant jurisdictions.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {[
            {
              title: "Manufacturer Identification",
              desc: "Identification of qualified manufacturers in the origin country with the production capability, regulatory standing, and export experience required for the transaction.",
            },
            {
              title: "Distributor and Importer Matching",
              desc: "Identification of licensed pharmaceutical distributors or importers in the destination market who hold the necessary registrations and market authorisations.",
            },
            {
              title: "Counterparty Due Diligence",
              desc: "Assessment of potential counterparties against regulatory, financial, and operational criteria to ensure they are appropriate partners for the transaction.",
            },
          ].map((item, i) => (
            <div key={item.title} className="card" data-reveal style={{ "--rd": `${i * 90}ms` }}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 24 }}>
          Where clients already have identified counterparties, Salus Vita can assist with due diligence
          assessment and the structuring of appropriate commercial and quality agreements between the
          parties.
        </p>
      </section>

      {/* Regulatory Assessment */}
      <section className="content-section" data-reveal>
        <h2>Regulatory Assessment</h2>
        <div className="two-col">
          <div>
            <p>
              Each jurisdiction involved in a cross-border pharmaceutical transaction has its own
              regulatory requirements governing the manufacture, export, import, and distribution
              of pharmaceutical products. Salus Vita assesses the regulatory landscape for each
              transaction to identify the requirements that must be satisfied in both the origin
              and destination countries.
            </p>
            <p>
              This assessment covers product registration or approval status in the destination
              market, export licensing requirements in the origin country, GMP certification
              recognition between jurisdictions, and any specific documentation or labelling
              requirements that apply. Where mutual recognition arrangements exist between
              regulatory authorities, we identify opportunities to use these to streamline
              the compliance process.
            </p>
            <p>
              For transactions involving markets where Salus Vita does not hold direct regulatory
              expertise, we coordinate with local regulatory consultants and in-country partners
              to ensure that all applicable requirements are identified and addressed.
            </p>
          </div>
          <div>
            <div className="card" data-reveal style={{ "--rd": "100ms" }}>
              <h3>Destination Market Requirements</h3>
              <p>
                Assessment of product registration status, import licensing, and documentation
                requirements in the destination jurisdiction.
              </p>
            </div>
            <div className="card" data-reveal style={{ "--rd": "180ms", marginTop: 16 }}>
              <h3>Export Compliance</h3>
              <p>
                Review of export licensing, controlled substance regulations, and trade compliance
                requirements in the country of manufacture.
              </p>
            </div>
            <div className="card" data-reveal style={{ "--rd": "260ms", marginTop: 16 }}>
              <h3>Mutual Recognition</h3>
              <p>
                Identification of mutual recognition arrangements between regulatory authorities
                that may simplify GMP certification or product approval processes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Commercial Coordination */}
      <section className="content-section" data-reveal>
        <h2>Commercial Coordination</h2>
        <p>
          Cross-border transactions involve commercial coordination across multiple parties, currencies,
          and legal frameworks. Salus Vita manages the commercial elements of these transactions,
          including pricing negotiations, contract development, payment term structuring, and ongoing
          order management.
        </p>
        <p>
          Our team coordinates communication between all parties involved in the transaction, ensuring
          that expectations regarding product specifications, delivery schedules, documentation
          requirements, and quality standards are clearly understood and agreed upon before orders are
          placed. We maintain oversight of the transaction from commercial agreement through to
          confirmed delivery, providing status updates and managing any issues that arise.
        </p>
        <p>
          For clients conducting regular cross-border transactions, we develop standardised processes
          and documentation templates that improve efficiency and reduce the administrative burden
          associated with repeat orders across the same supply corridors.
        </p>
      </section>

      {/* Related Capabilities */}
      <section className="content-section" data-reveal>
        <h3>Related Capabilities</h3>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          <Link to="/capabilities/australian-importation" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>Australian Importation</h3>
            <p>Facilitating TGA regulatory assessment, import permits, and customs coordination for goods entering Australia.</p>
          </Link>
          <Link to="/capabilities/international-procurement" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>International Procurement</h3>
            <p>Coordinating quotations, negotiations, contract structuring, and order planning for pharmaceutical products.</p>
          </Link>
          <Link to="/capabilities/logistics" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>Logistics Coordination</h3>
            <p>Coordinating third-party freight, customs brokerage, and temperature-controlled transport across international routes.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Get Started</span>
          <h2>Discuss Your Cross-Border Requirements</h2>
          <p>
            Our team can assess the regulatory and commercial requirements for your cross-border
            pharmaceutical supply needs. Submit an enquiry to begin the conversation.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Submit an Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  )
}
