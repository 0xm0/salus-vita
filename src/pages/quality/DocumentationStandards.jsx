import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const STANDARD_DOCS = [
  { title: "Certificate of Analysis (CoA)", desc: "Batch-specific analytical results confirming product identity, purity, potency, and compliance with pharmacopoeial specifications." },
  { title: "GMP Certificate", desc: "Current Good Manufacturing Practice certification from a recognised regulatory authority for each manufacturing site involved in production." },
  { title: "Batch Manufacturing Records", desc: "Summary batch records detailing production parameters, in-process controls, and release decisions for every consignment." },
  { title: "Shipping Documentation", desc: "Commercial invoices, packing lists, certificates of origin, and customs declarations coordinated for each shipment." },
  { title: "Temperature Records", desc: "Calibrated data logger records documenting cold-chain compliance throughout storage and transit for temperature-sensitive products." },
  { title: "Regulatory Certificates", desc: "Market-specific certificates including CPP, free sale certificates, and import permits as required by the destination authority." },
]

const MARKET_REQS = [
  {
    market: "Australia (TGA)",
    items: [
      "TGA GMP clearance evidence for manufacturing site",
      "Certificate of Pharmaceutical Product (CPP)",
      "Australian-format Certificate of Analysis",
      "Stability data supporting shelf-life claims",
      "Product Information and Consumer Medicine Information",
    ],
  },
  {
    market: "European Union",
    items: [
      "EU GMP certificate or MRA-equivalent documentation",
      "Certificate of Suitability (CEP) where applicable",
      "Qualified Person (QP) release documentation",
      "EU-format batch certificates and analytical data",
      "Falsified Medicines Directive serialisation records",
    ],
  },
  {
    market: "ASEAN Markets",
    items: [
      "ACTD-format dossier documentation",
      "Country-specific GMP clearance or inspection evidence",
      "Legalised or apostilled certificates of origin",
      "Translated labelling and product information",
      "Market-specific import permit documentation",
    ],
  },
  {
    market: "Middle East & Africa",
    items: [
      "Gulf Centralised Registration (GCC DR) documentation",
      "SAHPRA-format regulatory submissions",
      "WHO prequalification evidence where required",
      "Legalised commercial and quality documentation",
      "Country-specific labelling compliance evidence",
    ],
  },
]

export default function DocumentationStandards() {
  return (
    <>
      <PageHero
        eyebrow="QUALITY & COMPLIANCE"
        title="Documentation Standards and Practices"
        description="Comprehensive documentation for every transaction, ensuring audit readiness and regulatory compliance across all markets."
        breadcrumbs={[{ label: "Quality", path: "/quality" }, { label: "Documentation Standards" }]}
        primaryCTA={{ label: "Request Documentation Overview", to: "/contact/sourcing-enquiry" }}
      />

      {/* Standard Documentation */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <rect x="8" y="4" width="24" height="32" rx="2" stroke="#0f3d22" strokeWidth="1.5" />
            <path d="M14 14h12M14 20h12M14 26h8" stroke="#0f3d22" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M26 4v8h8" stroke="#0f3d22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 style={{ margin: 0 }}>Standard Documentation</h2>
        </div>
        <p>
          Every transaction coordinated by Salus Vita is supported by a defined set of quality
          and commercial documentation. Rather than generating these documents directly, Salus Vita
          collates, verifies, and organises records provided by manufacturing partners, logistics
          providers, and regulatory bodies to form a complete, traceable documentation package for
          each consignment.
        </p>
        <p>
          This documentation serves multiple purposes: it provides the receiving party with
          assurance of product quality and regulatory compliance, it satisfies import and customs
          requirements in the destination market, and it creates a permanent audit trail that can
          be referenced in the event of a regulatory enquiry or product quality investigation.
          Each document is reviewed for completeness and consistency before being included in the
          transaction file.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 16, marginTop: 24 }}>
          {STANDARD_DOCS.map((doc, i) => (
            <div key={doc.title} className="card" data-reveal style={rd(i * 70)}>
              <h4 style={{ color: "var(--navy)", marginBottom: 8 }}>{doc.title}</h4>
              <p style={{ fontSize: "0.95rem", lineHeight: 1.6, margin: 0 }}>{doc.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Market-Specific Requirements */}
      <section className="content-section" data-reveal style={rd(80)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <circle cx="20" cy="20" r="14" stroke="#0f3d22" strokeWidth="1.5" />
            <ellipse cx="20" cy="20" rx="7" ry="14" stroke="#0f3d22" strokeWidth="1.5" />
            <path d="M6 20h28M8 12h24M8 28h24" stroke="#0f3d22" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <h2 style={{ margin: 0 }}>Market-Specific Requirements</h2>
        </div>
        <p>
          Documentation requirements vary considerably between regulatory jurisdictions.
          A documentation package suitable for Australian TGA importation may differ substantially
          from one required for EU market entry or ASEAN registration. Salus Vita coordinates the
          assembly of market-appropriate documentation packages, working with manufacturing partners
          to ensure that every certificate, analytical record, and regulatory submission meets the
          specific expectations of the destination authority.
        </p>
        <p>
          This coordination extends beyond simple document collection. Salus Vita assesses
          whether existing documentation meets the format, content, and certification requirements
          of the target market, and works with manufacturers to address any gaps before shipment.
          Where documents require legalisation, apostille, or notarised translation, Salus Vita
          facilitates these processes to prevent delays at the point of importation.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24, marginTop: 24 }}>
          {MARKET_REQS.map((m, i) => (
            <div key={m.market} className="card" data-reveal style={{ ...rd(i * 90), padding: "24px" }}>
              <h4 style={{ color: "var(--navy)", marginBottom: 8 }}>{m.market}</h4>
              <ul style={{ margin: 0, paddingLeft: 18, lineHeight: 1.8 }}>
                {m.items.map((item) => (
                  <li key={item} style={{ fontSize: "0.93rem" }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Document Management */}
      <section className="content-section" data-reveal style={rd(160)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <rect x="6" y="8" width="28" height="24" rx="2" stroke="#0f3d22" strokeWidth="1.5" />
            <path d="M6 8l8-4h12l8 4" stroke="#0f3d22" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M14 18h12M14 23h8" stroke="#0f3d22" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <h2 style={{ margin: 0 }}>Document Management</h2>
        </div>
        <p>
          Salus Vita applies structured document management practices across all quality and
          regulatory records. Every document entering the system is logged, classified, and stored
          with version control to ensure that current and historical records can be distinguished
          and retrieved with confidence. Retention periods are aligned with the requirements of
          applicable legislation and regulatory guidance, with minimum retention typically set at
          the product shelf life plus one year, or as specified by the relevant regulatory authority.
        </p>
        <p>
          Data integrity principles underpin all document management activities. Salus Vita
          applies the ALCOA+ framework, ensuring that records are attributable, legible,
          contemporaneous, original, and accurate, as well as complete, consistent, enduring,
          and available. Electronic records are maintained in validated systems with access
          controls, audit trails, and backup procedures that protect against data loss or
          unauthorised modification.
        </p>
        <p>
          Where documentation is received from third parties, including manufacturing partners
          and logistics providers, Salus Vita verifies each document for authenticity, completeness,
          and internal consistency before accepting it into the quality system. Discrepancies
          are flagged and resolved with the originating party before the documentation package
          is considered complete.
        </p>
      </section>

      {/* Audit Readiness */}
      <section className="content-section" data-reveal style={rd(240)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <path d="M20 6l12 6v10c0 7-5 12-12 14C13 34 8 29 8 22V12l12-6z" stroke="#0f3d22" strokeWidth="1.5" strokeLinejoin="round" />
            <path d="M15 20l4 4 7-8" stroke="#0f3d22" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 style={{ margin: 0 }}>Audit Readiness</h2>
        </div>
        <p>
          Salus Vita maintains its documentation systems in a state of continuous audit readiness.
          This means that at any point, the documentation for any transaction, supplier, or product
          can be retrieved, reviewed, and presented to a regulatory inspector, customer auditor,
          or internal quality reviewer without delay. Organised filing systems, consistent naming
          conventions, and indexed archives ensure that documents can be located rapidly regardless
          of when the transaction occurred.
        </p>
        <p>
          Periodic document completeness checks are conducted across active supplier files and
          recent transaction records. These reviews identify any missing or expiring documentation,
          such as GMP certificates approaching renewal or Certificates of Analysis not yet received
          for recent batches, and trigger follow-up actions to close gaps before they become
          compliance issues.
        </p>
        <p>
          When customers or regulatory authorities request documentation for audit or inspection
          purposes, Salus Vita coordinates the preparation and presentation of relevant records.
          This includes assembling documentation packages tailored to the scope of the audit,
          providing supporting context where needed, and facilitating direct communication between
          auditors and manufacturing partners when appropriate. The objective is to demonstrate
          not only the existence of required documentation, but the integrity and traceability of
          the processes that produced it.
        </p>
      </section>

      {/* Related Quality Pages */}
      <section className="content-section" data-reveal style={rd(320)}>
        <h3>Related Quality Pages</h3>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {[
            { title: "Supplier Assessment", desc: "How Salus Vita evaluates and qualifies manufacturing partners through structured assessment criteria.", to: "/quality/supplier-assessment" },
            { title: "Regulatory Framework", desc: "The international regulatory landscape that informs documentation and compliance requirements.", to: "/quality/regulatory-framework" },
            { title: "Supply Chain Integrity", desc: "Traceability systems and counterparty verification that documentation standards support.", to: "/quality/supply-chain-integrity" },
            { title: "Quality Overview", desc: "An introduction to the quality-conscious procurement approach that underpins all Salus Vita activities.", to: "/quality" },
          ].map((p, i) => (
            <Link to={p.to} key={p.title} className="card" data-reveal style={{ ...rd(i * 80), textDecoration: "none", color: "inherit" }}>
              <h4 style={{ color: "var(--navy)" }}>{p.title}</h4>
              <p style={{ fontSize: "0.93rem", margin: 0 }}>{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <div className="cta-banner" data-reveal>
        <div className="cta-card">
          <h2>Documentation That Withstands Scrutiny</h2>
          <p>
            Request an overview of the documentation standards Salus Vita applies, or discuss
            the specific documentation requirements for your market and product category.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Request Documentation Overview</Link>
          </div>
        </div>
      </div>
    </>
  )
}
