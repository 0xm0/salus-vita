import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

export default function Logistics() {
  return (
    <>
      <PageHero
        eyebrow="CAPABILITIES"
        title="Logistics Coordination"
        description="Coordinating freight forwarding, customs brokerage, cold-chain management, and warehousing for pharmaceutical shipments."
        breadcrumbs={[
          { label: "Capabilities", path: "/capabilities" },
          { label: "Logistics" },
        ]}
        primaryCTA={{ label: "Discuss Logistics Needs", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "View All Capabilities", to: "/capabilities" }}
      />

      {/* Freight Coordination */}
      <section className="content-section" data-reveal>
        <h2>Freight Coordination</h2>
        <div className="two-col">
          <div>
            <p>
              Salus Vita does not operate its own freight or transport fleet. Instead, we coordinate
              with established third-party freight forwarding partners who specialise in pharmaceutical
              logistics. Our role is to select the appropriate logistics provider for each shipment,
              negotiate favourable terms, and oversee the transport process to ensure that products
              arrive on time and in the condition required.
            </p>
            <p>
              Freight coordination covers mode selection (air, sea, or road), routing optimisation,
              and scheduling that accounts for manufacturing release timelines, documentation
              preparation, and destination market clearance requirements. For time-sensitive shipments,
              we arrange expedited transport options and provide enhanced tracking and communication
              throughout transit.
            </p>
            <p>
              Each freight arrangement is assessed against the specific requirements of the product
              being transported, including temperature sensitivity, security classification, and any
              dangerous goods considerations. We ensure that the selected carrier and route are
              appropriate for the product and that all applicable transport regulations are satisfied.
            </p>
          </div>
          <div>
            <div className="card" data-reveal style={{ "--rd": "100ms" }}>
              <h3>Mode and Route Selection</h3>
              <p>
                Assessment of available transport options based on product requirements, destination,
                cost, and transit time to determine the optimal freight arrangement.
              </p>
            </div>
            <div className="card" data-reveal style={{ "--rd": "180ms", marginTop: 16 }}>
              <h3>Shipment Tracking</h3>
              <p>
                Monitoring of shipment progress from manufacturer dispatch through to destination
                delivery, with proactive communication of any delays or exceptions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Cold-Chain Management */}
      <section className="content-section" data-reveal>
        <h2>Cold-Chain Management</h2>
        <p>
          Many pharmaceutical products require strict temperature control throughout the supply chain.
          Salus Vita coordinates cold-chain logistics through specialist transport and storage partners
          who maintain validated temperature-controlled environments for pharmaceutical products.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {[
            {
              title: "2-8 degrees C (Refrigerated)",
              desc: "Coordination of refrigerated transport and storage for biologicals, vaccines, and temperature-sensitive APIs that require cold-chain conditions, with validated packaging and continuous temperature monitoring.",
            },
            {
              title: "15-25 degrees C (Controlled Room Temperature)",
              desc: "Arrangement of controlled room temperature logistics for standard pharmaceutical products, ensuring that ambient conditions remain within specification throughout transit and storage.",
            },
            {
              title: "Temperature Monitoring and Documentation",
              desc: "Coordination of calibrated data logger placement, temperature record review, and excursion assessment documentation in accordance with GDP requirements for all temperature-controlled shipments.",
            },
          ].map((item, i) => (
            <div key={item.title} className="card" data-reveal style={{ "--rd": `${i * 90}ms` }}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 24 }}>
          Where temperature excursions occur during transit, our team coordinates the excursion
          assessment process with the manufacturer and quality team, documenting the event and
          determining whether the affected product remains within acceptable quality parameters.
          All excursion records are maintained as part of the shipment quality file.
        </p>
      </section>

      {/* Customs Brokerage */}
      <section className="content-section" data-reveal>
        <h2>Customs Brokerage</h2>
        <div className="two-col">
          <div>
            <p>
              Pharmaceutical imports are subject to specific customs requirements that vary by
              jurisdiction. Salus Vita coordinates with licensed customs brokers in each relevant
              market to facilitate compliant and timely clearance of pharmaceutical shipments.
            </p>
            <p>
              Our customs coordination covers pre-arrival documentation preparation, tariff
              classification, duty assessment, and liaison with border agencies for any product-specific
              clearance requirements. For controlled substances, we coordinate the additional
              declarations and permits required by customs and drug regulatory authorities.
            </p>
            <p>
              We maintain relationships with customs brokers who have specific experience with
              pharmaceutical imports, ensuring that the complexities of therapeutic goods clearance
              are handled by practitioners with relevant expertise. Where shipments are subject to
              holds or additional scrutiny, our team works with the broker to resolve queries and
              secure release efficiently.
            </p>
          </div>
          <div>
            <div className="card" data-reveal style={{ "--rd": "100ms" }}>
              <h3>Documentation Preparation</h3>
              <p>
                Compilation and verification of all customs documentation prior to shipment arrival,
                including commercial invoices, packing lists, and regulatory certificates.
              </p>
            </div>
            <div className="card" data-reveal style={{ "--rd": "180ms", marginTop: 16 }}>
              <h3>Broker Coordination</h3>
              <p>
                Management of the customs clearance process through specialist pharmaceutical
                customs brokers with relevant market expertise.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Warehousing Partners */}
      <section className="content-section" data-reveal>
        <h2>Warehousing Partners</h2>
        <p>
          Salus Vita does not operate warehouse facilities directly. Instead, we coordinate with
          licensed pharmaceutical warehousing partners who maintain GDP-compliant storage facilities
          with appropriate temperature control, security, and inventory management systems.
        </p>
        <p>
          Our warehousing partnerships cover key distribution hubs in Australia and the Asia-Pacific
          region, providing clients with access to compliant storage for both short-term holding and
          longer-term inventory management. Partner facilities maintain segregated temperature zones,
          controlled access, and batch-level inventory tracking systems that support full traceability
          from receipt through to dispatch.
        </p>
        <p>
          Where clients require ongoing warehousing and distribution services, we facilitate
          arrangements with our warehouse partners that include inventory management, expiry
          monitoring, pick-and-pack services, and dispatch coordination. All warehousing arrangements
          are documented through formal storage agreements that define responsibilities, conditions,
          and quality requirements.
        </p>
      </section>

      {/* Related Capabilities */}
      <section className="content-section" data-reveal>
        <h3>Related Capabilities</h3>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          <Link to="/capabilities/international-procurement" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>International Procurement</h3>
            <p>Coordinating the full procurement cycle from quotation through to supply coordination and delivery management.</p>
          </Link>
          <Link to="/capabilities/australian-importation" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>Australian Importation</h3>
            <p>Facilitating TGA regulatory assessment, import permits, and customs processes for goods entering Australia.</p>
          </Link>
          <Link to="/capabilities/cross-border-supply" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>Cross-Border Supply</h3>
            <p>Coordinating logistics for overseas-to-overseas transactions across multiple international jurisdictions.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Get Started</span>
          <h2>Discuss Your Logistics Requirements</h2>
          <p>
            Our team can coordinate the freight, customs, and storage arrangements needed for your
            pharmaceutical supply chain. Submit an enquiry to begin.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Submit a Logistics Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  )
}
