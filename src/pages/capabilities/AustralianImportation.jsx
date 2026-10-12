import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

export default function AustralianImportation() {
  return (
    <>
      <PageHero
        eyebrow="CAPABILITIES"
        title="Australian Importation"
        description="Salus Vita facilitates the importation of pharmaceutical products into Australia, coordinating TGA regulatory assessment, import permit processes, customs requirements, and the identification of sponsor and importer obligations."
        breadcrumbs={[
          { label: "Capabilities", path: "/capabilities" },
          { label: "Australian Importation" },
        ]}
        primaryCTA={{ label: "Enquire About Importation", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "View All Capabilities", to: "/capabilities" }}
      />

      {/* TGA Regulatory Assessment */}
      <section className="content-section" data-reveal>
        <h2>TGA Regulatory Assessment</h2>
        <div className="two-col">
          <div>
            <p>
              Australia's Therapeutic Goods Administration (TGA) maintains one of the most rigorous
              pharmaceutical regulatory frameworks internationally. Before any pharmaceutical product
              can be imported into Australia, the applicable regulatory pathway must be identified and
              the product's compliance status assessed against TGA requirements.
            </p>
            <p>
              Salus Vita assesses each importation requirement against the Therapeutic Goods Act 1989
              and associated regulations, identifying the applicable product classification, scheduling
              status, and the regulatory pathway most appropriate for the intended use. This includes
              evaluation of whether the product requires listing or registration on the Australian
              Register of Therapeutic Goods (ARTG), or whether it may be imported under an exemption
              or special access arrangement.
            </p>
            <p>
              Our assessment also covers the GMP clearance status of the overseas manufacturing site.
              Where a manufacturer does not yet hold TGA GMP clearance, we advise on the clearance
              process and coordinate with the manufacturer to prepare the necessary documentation and
              site information required by the TGA.
            </p>
          </div>
          <div>
            <div className="card" data-reveal style={{ "--rd": "100ms" }}>
              <h3>Product Classification</h3>
              <p>
                Assessment of product classification under Australian therapeutic goods legislation,
                including scheduling status and applicable regulatory pathway.
              </p>
            </div>
            <div className="card" data-reveal style={{ "--rd": "180ms", marginTop: 16 }}>
              <h3>GMP Clearance Status</h3>
              <p>
                Review of the overseas manufacturer's TGA GMP clearance status and coordination of
                clearance applications where required.
              </p>
            </div>
            <div className="card" data-reveal style={{ "--rd": "260ms", marginTop: 16 }}>
              <h3>ARTG Considerations</h3>
              <p>
                Guidance on Australian Register of Therapeutic Goods listing or registration
                requirements applicable to the product and its intended use.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Import Permits */}
      <section className="content-section" data-reveal>
        <h2>Import Permits</h2>
        <p>
          Pharmaceutical importation into Australia requires specific permits and authorisations
          depending on the product type, scheduling status, and intended use. Salus Vita coordinates
          the preparation and submission of import permit applications, ensuring that all required
          information is compiled accurately and submitted within applicable timeframes.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {[
            {
              title: "Scheduled Substance Permits",
              desc: "Coordination of import permits for products containing scheduled substances, including preparation of the required supporting documentation and regulatory justifications.",
            },
            {
              title: "Special Access Scheme",
              desc: "Facilitation of access to unapproved therapeutic goods through TGA Special Access Scheme (SAS) Category A and B pathways, including application preparation and manufacturer coordination.",
            },
            {
              title: "Authorised Prescriber Pathway",
              desc: "Support for importation under the Authorised Prescriber framework, including coordination of the documentation required by prescribers and the TGA.",
            },
            {
              title: "Clinical Trial Supply",
              desc: "Coordination of import requirements for clinical trial materials, including Clinical Trial Notification (CTN) and Clinical Trial Approval (CTA) pathway considerations.",
            },
          ].map((item, i) => (
            <div key={item.title} className="card" data-reveal style={{ "--rd": `${i * 90}ms` }}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Customs Coordination */}
      <section className="content-section" data-reveal>
        <h2>Customs Coordination</h2>
        <div className="two-col">
          <div>
            <p>
              Pharmaceutical goods entering Australia are subject to specific customs requirements,
              including biosecurity assessments, controlled substance declarations, and product-specific
              clearance procedures. Salus Vita coordinates with customs brokers and relevant border
              agencies to facilitate compliant and timely clearance of pharmaceutical shipments.
            </p>
            <p>
              Our coordination covers pre-arrival documentation preparation, tariff classification,
              duty and GST assessment, and liaison with the Australian Border Force and Department of
              Agriculture where biosecurity considerations apply. For temperature-sensitive products,
              we coordinate with customs brokers and freight handlers to ensure that cold-chain
              integrity is maintained throughout the clearance process.
            </p>
            <p>
              Where shipments are subject to customs holds or additional scrutiny, our team works with
              the relevant broker and border agency to resolve queries and secure release as efficiently
              as possible, minimising delays that could affect product quality or supply timelines.
            </p>
          </div>
          <div>
            <div className="card" data-reveal style={{ "--rd": "100ms" }}>
              <h3>Pre-Arrival Documentation</h3>
              <p>
                Preparation and coordination of all customs documentation prior to shipment arrival
                to facilitate timely clearance.
              </p>
            </div>
            <div className="card" data-reveal style={{ "--rd": "180ms", marginTop: 16 }}>
              <h3>Biosecurity and Border Compliance</h3>
              <p>
                Coordination with biosecurity authorities for products subject to additional border
                requirements, including biological and veterinary products.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Obligations */}
      <section className="content-section" data-reveal>
        <h2>Sponsor Obligations</h2>
        <p>
          Under Australian therapeutic goods legislation, the sponsor of a therapeutic good bears
          specific legal obligations relating to product safety, quality, and post-market monitoring.
          The role of sponsor must be held by an entity that is either resident in, or has an
          established place of business in, Australia.
        </p>
        <p>
          Salus Vita assists clients in understanding the obligations associated with the sponsor role
          and identifying the appropriate entity to fulfil this function. This includes guidance on
          sponsor responsibilities under the Therapeutic Goods Act, including adverse event reporting,
          product recall obligations, annual charge requirements, and ongoing compliance with conditions
          of ARTG listing or registration.
        </p>
        <p>
          Where clients require assistance identifying an Australian-based entity to act as sponsor,
          Salus Vita can facilitate introductions to established pharmaceutical sponsors and regulatory
          service providers. We coordinate between the overseas manufacturer, the Australian sponsor,
          and any regulatory consultants involved to ensure that all parties understand their respective
          obligations and that the importation pathway is structured appropriately.
        </p>
      </section>

      {/* Related Capabilities */}
      <section className="content-section" data-reveal>
        <h3>Related Capabilities</h3>
        <div className="feature-grid" style={{ marginTop: 16 }}>
          <Link to="/capabilities/cross-border-supply" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>Cross-Border Supply</h3>
            <p>Structuring overseas-to-overseas transactions where products do not enter Australia.</p>
          </Link>
          <Link to="/capabilities/technical-documentation" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>Technical Documentation</h3>
            <p>Coordinating the compilation of regulatory documentation required for TGA assessment and market access.</p>
          </Link>
          <Link to="/capabilities/logistics" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>Logistics Coordination</h3>
            <p>Coordinating freight forwarding, customs brokerage, and cold-chain management for pharmaceutical shipments.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Get Started</span>
          <h2>Discuss Your Importation Requirements</h2>
          <p>
            Our team can assess your product against Australian regulatory requirements and advise on
            the appropriate importation pathway. Submit an enquiry to begin.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Submit an Importation Enquiry</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
