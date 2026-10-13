import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

export default function SupplyChainIntegrity() {
  return (
    <>
      <PageHero
        eyebrow="QUALITY & COMPLIANCE"
        title="Supply Chain Integrity and Traceability"
        description="Transparent, traceable pharmaceutical supply chains with verified counterparties and documented chain of custody."
        breadcrumbs={[{ label: "Quality", path: "/quality" }, { label: "Supply Chain Integrity" }]}
        primaryCTA={{ label: "Learn About Our Approach", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "Quality Overview", to: "/quality" }}
      />

      {/* Traceability Systems */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <path d="M8 12h24M8 20h24M8 28h24" stroke="#0f3d22" strokeWidth="2" strokeLinecap="round" />
            <circle cx="14" cy="12" r="2" stroke="#0f3d22" strokeWidth="1.5" fill="none" />
            <circle cx="26" cy="20" r="2" stroke="#0f3d22" strokeWidth="1.5" fill="none" />
            <circle cx="18" cy="28" r="2" stroke="#0f3d22" strokeWidth="1.5" fill="none" />
          </svg>
          <h2 style={{ margin: 0 }}>Traceability Systems</h2>
        </div>
        <p>
          Every product coordinated through Salus Vita is accompanied by complete chain-of-custody
          documentation from the point of manufacturer release through to final delivery. This
          documentation includes batch-specific certificates of analysis, GMP certificates for the
          manufacturing site, commercial invoices, packing lists, and transport records that together
          establish an unbroken audit trail for each consignment.
        </p>
        <p>
          Batch-level traceability is maintained across all transactions. Salus Vita records and
          cross-references batch numbers, manufacturing dates, expiry dates, and quantities at each
          transfer point. Where serialisation requirements apply, including obligations under the
          EU Falsified Medicines Directive, the US Drug Supply Chain Security Act, and Australian
          TGA serialisation expectations, Salus Vita coordinates with manufacturers and logistics
          partners to verify that serialisation data is captured, transmitted, and reconciled in
          the formats required by the destination market.
        </p>
        <p>
          This traceability framework allows any product to be traced back to its origin within
          hours, supporting rapid response to quality concerns, regulatory enquiries, or recall
          events. Documentation packages are structured to meet the expectations of multiple
          regulatory authorities simultaneously, reducing duplication and facilitating efficient
          multi-market distribution.
        </p>
      </section>

      {/* Counterparty Verification */}
      <section className="content-section" data-reveal style={rd(80)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <rect x="6" y="8" width="28" height="24" rx="3" stroke="#0f3d22" strokeWidth="2" fill="none" />
            <path d="M16 20l3 3 6-6" stroke="#0f3d22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M6 14h28" stroke="#0f3d22" strokeWidth="1.5" />
          </svg>
          <h2 style={{ margin: 0 }}>Counterparty Verification</h2>
        </div>
        <p>
          Salus Vita verifies every counterparty in the supply chain before any commercial
          engagement commences. For manufacturers, this includes confirmation of current GMP
          certification from a recognised regulatory authority, review of recent inspection
          history, verification of manufacturing licences, and assessment of quality management
          system maturity. These assessments are conducted as part of the broader supplier
          qualification process and are refreshed at defined intervals.
        </p>
        <p>
          Logistics partners are assessed against Good Distribution Practice (GDP) requirements
          applicable to their jurisdiction and role. Salus Vita evaluates temperature control
          capabilities, handling procedures, storage conditions, personnel training records, and
          deviation management systems. Only logistics providers that demonstrate compliance with
          GDP standards and hold the appropriate licences are engaged to handle pharmaceutical
          consignments coordinated through the Salus Vita network.
        </p>
        <p>
          Downstream counterparties, including distributors and institutional buyers, are also
          subject to due diligence. Salus Vita confirms that each receiving party holds the
          regulatory authorisations necessary to import, store, and distribute the products in
          question within their jurisdiction. This end-to-end counterparty verification process
          mitigates the risk of products entering uncontrolled or non-compliant channels and
          supports the integrity of the supply chain from origin to patient.
        </p>
      </section>

      {/* Recall Procedures */}
      <section className="content-section" data-reveal style={rd(160)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <path d="M20 6l14 24H6L20 6z" stroke="#0f3d22" strokeWidth="2" strokeLinejoin="round" fill="none" />
            <path d="M20 16v6" stroke="#0f3d22" strokeWidth="2" strokeLinecap="round" />
            <circle cx="20" cy="26" r="1.2" fill="#0f3d22" />
          </svg>
          <h2 style={{ margin: 0 }}>Recall Procedures</h2>
        </div>
        <p>
          Salus Vita maintains documented recall coordination procedures that can be activated
          promptly in response to a product quality issue, regulatory directive, or safety concern.
          As a procurement and supply coordination company, Salus Vita does not hold inventory
          directly. Instead, the recall procedure focuses on facilitating communication between
          manufacturers, logistics partners, and customers to ensure that affected batches are
          identified, isolated, and managed in accordance with applicable regulatory requirements.
        </p>
        <p>
          When a recall event is initiated, whether by the manufacturer, a regulatory authority,
          or through Salus Vita's own quality monitoring processes, the recall coordination
          protocol identifies all affected batches by cross-referencing distribution records against
          the batch numbers, markets, and quantities in question. Notifications are issued to all
          relevant counterparties within defined timeframes, with clear instructions on required
          actions, documentation expectations, and reporting obligations.
        </p>
        <p>
          Salus Vita documents every step of the recall process, including initial notification,
          counterparty acknowledgements, quantities accounted for, disposition decisions, and final
          reconciliation. Post-recall reviews are conducted in collaboration with the manufacturer
          to identify root causes, assess the effectiveness of the recall response, and implement
          any necessary corrective or preventive actions. Recall records are retained in accordance
          with regulatory retention requirements and are available for regulatory inspection.
        </p>
      </section>

      {/* Adverse Event Handling */}
      <section className="content-section" data-reveal style={rd(240)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <rect x="8" y="6" width="24" height="28" rx="3" stroke="#0f3d22" strokeWidth="2" fill="none" />
            <path d="M14 14h12M14 20h12M14 26h8" stroke="#0f3d22" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="30" cy="28" r="5" stroke="#0f3d22" strokeWidth="1.5" fill="none" />
            <path d="M30 25v4M30 31v0.5" stroke="#0f3d22" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <h2 style={{ margin: 0 }}>Adverse Event Handling</h2>
        </div>
        <p>
          Salus Vita recognises that timely and accurate adverse event reporting is a critical
          obligation within the pharmaceutical supply chain. While pharmacovigilance
          responsibilities rest primarily with marketing authorisation holders and manufacturers,
          Salus Vita plays an important coordinating role in ensuring that adverse event information
          received from any source in the supply chain is documented, escalated, and communicated
          to the responsible parties without delay.
        </p>
        <p>
          All Salus Vita personnel involved in product-related communications are trained to
          recognise potential adverse events and to follow established escalation procedures. When
          an adverse event report or product quality complaint is received, it is recorded using
          standardised intake forms that capture the essential information required for regulatory
          reporting. This information is forwarded to the relevant manufacturer or marketing
          authorisation holder within defined timeframes, typically within 24 hours of receipt for
          serious events.
        </p>
        <p>
          Salus Vita maintains records of all adverse event communications and coordinates with
          manufacturers to ensure that follow-up information is obtained and transmitted as required.
          Where multiple markets are involved, Salus Vita facilitates communication across
          jurisdictions to support coordinated safety assessments. Periodic reviews of adverse event
          and complaint data are conducted to identify trends that may warrant further investigation
          or proactive risk management action.
        </p>
      </section>

      {/* Key Principles */}
      <section className="content-section" data-reveal style={rd(320)}>
        <h2>Guiding Principles for Supply Chain Integrity</h2>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))", gap: 16, marginTop: 24 }}>
          {[
            { title: "Direct Sourcing Relationships", text: "Every product is sourced directly from qualified manufacturers or their authorised representatives, eliminating unverified intermediaries from the supply chain." },
            { title: "Documented Chain of Custody", text: "Comprehensive documentation accompanies each consignment, establishing an unbroken audit trail from manufacturer release to customer receipt." },
            { title: "Qualified Logistics Partners", text: "All logistics providers are assessed against GDP requirements, with ongoing monitoring of temperature control, handling, and compliance standards." },
            { title: "Regulatory Alignment", text: "Traceability and integrity procedures are designed to satisfy the requirements of TGA, EMA, FDA, WHO, and other relevant regulatory authorities." },
          ].map((item, i) => (
            <div key={item.title} className="card" data-reveal style={rd(320 + i * 60)}>
              <h3 style={{ color: "var(--navy)", fontSize: "1.05rem", marginBottom: 8 }}>{item.title}</h3>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>{item.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Quality Pages */}
      <section className="content-section" data-reveal style={rd(400)}>
        <h2>Related Quality Pages</h2>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {[
            { title: "Supplier Assessment", desc: "How Salus Vita evaluates and qualifies manufacturing partners through structured assessment and ongoing monitoring.", to: "/quality/supplier-assessment" },
            { title: "Regulatory Framework", desc: "The regulatory standards and frameworks that guide Salus Vita's procurement and supply coordination activities.", to: "/quality/regulatory-framework" },
            { title: "Documentation Standards", desc: "Documentation practices and data integrity principles applied across all Salus Vita transactions.", to: "/quality/documentation-standards" },
            { title: "Quality Overview", desc: "An introduction to Salus Vita's quality-conscious procurement approach and clearly defined responsibilities.", to: "/quality" },
          ].map((p, i) => (
            <Link to={p.to} key={p.title} className="card" data-reveal style={{ ...rd(400 + i * 90), textDecoration: "none", color: "inherit" }}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <div className="cta-banner" data-reveal>
        <div className="cta-card">
          <h2>Transparent, Traceable Pharmaceutical Supply</h2>
          <p>Discuss your supply chain integrity requirements with Salus Vita's quality and compliance team.</p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Submit an Enquiry</Link>
            <Link to="/quality" className="btn btn-outline">Explore Quality</Link>
          </div>
        </div>
      </div>
    </>
  )
}
