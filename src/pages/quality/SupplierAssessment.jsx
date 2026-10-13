import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const CRITERIA = [
  { title: "Regulatory Standing", desc: "Current GMP certification from a PIC/S-recognised authority, clean inspection history, and active marketing authorisations in relevant jurisdictions." },
  { title: "Production Capability", desc: "Demonstrated capacity for the required dosage forms, validated manufacturing processes, and scalable output aligned with forecast demand." },
  { title: "Quality System Maturity", desc: "Documented quality management system with effective CAPA, change control, deviation management, and data integrity programmes." },
  { title: "Financial Stability", desc: "Verified financial standing sufficient to sustain ongoing investment in quality, regulatory compliance, and uninterrupted supply commitments." },
  { title: "Track Record", desc: "Established history of reliable supply, regulatory compliance, and responsiveness to quality communications across existing commercial relationships." },
  { title: "Pharmacovigilance Readiness", desc: "Defined adverse event reporting processes, qualified pharmacovigilance personnel, and documented signal detection and risk management procedures." },
]

const DOCUMENTS = [
  "Current GMP Certificate (PIC/S-recognised authority)",
  "Site Master File (SMF) or equivalent facility overview",
  "Product-specific dossier (CTD or ACTD format)",
  "Certificates of Analysis (recent batches)",
  "Stability data (long-term, accelerated, and in-use)",
  "Regulatory inspection history (last 3-5 years)",
  "Drug Master File (DMF) or Certificate of Suitability (CEP)",
  "Pharmacopoeial compliance statements (BP, Ph. Eur., USP)",
  "Validation summary reports (process, cleaning, analytical)",
  "Supply chain and GDP qualification records",
]

const KPIS = [
  { label: "On-time Delivery", desc: "Adherence to confirmed delivery schedules across all active orders" },
  { label: "Batch Compliance", desc: "Percentage of batches meeting specification on first release without deviation" },
  { label: "Documentation Accuracy", desc: "Completeness and timeliness of certificates of analysis and shipping documentation" },
  { label: "CAPA Responsiveness", desc: "Time to acknowledge, investigate, and close corrective and preventive actions" },
  { label: "Regulatory Currency", desc: "Timely renewal and provision of GMP certificates, marketing authorisations, and updated dossiers" },
  { label: "Communication Quality", desc: "Responsiveness to quality queries, change notifications, and information requests" },
]

export default function SupplierAssessment() {
  return (
    <>
      <PageHero
        eyebrow="QUALITY & COMPLIANCE"
        title="Supplier Assessment and Evaluation"
        description="Structured, multi-stage qualification of every manufacturing partner for regulatory standing, capability, and quality maturity."
        breadcrumbs={[{ label: "Quality", path: "/quality" }, { label: "Supplier Assessment" }]}
        primaryCTA={{ label: "Discuss Supplier Qualification", to: "/contact/sourcing-enquiry" }}
      />

      {/* Evaluation Criteria */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <rect x="6" y="6" width="28" height="28" rx="4" stroke="#0f3d22" strokeWidth="2" />
            <path d="M14 20l4 4 8-8" stroke="#0f3d22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 style={{ margin: 0 }}>Evaluation Criteria</h2>
        </div>
        <p>
          Salus Vita applies a structured evaluation framework to every prospective manufacturing partner before any commercial engagement proceeds. This framework is informed by ICH Q10 pharmaceutical quality system principles and incorporates risk-based assessment at each stage, from initial desktop review through to detailed questionnaire exchange and, where warranted, on-site evaluation by experienced pharmaceutical quality professionals.
        </p>
        <p>
          The assessment process is designed to verify that a manufacturer can consistently produce pharmaceutical products that meet the quality, safety, and efficacy requirements of the intended target markets. Rather than relying on a single data point, Salus Vita evaluates manufacturers across multiple dimensions to build a comprehensive risk-rated profile that guides engagement terms and ongoing monitoring intensity.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {CRITERIA.map((c, i) => (
            <div key={c.title} className="card" data-reveal style={rd(i * 70)}>
              <h3 style={{ color: "var(--navy)", marginBottom: 8 }}>{c.title}</h3>
              <p style={{ margin: 0, fontSize: "0.95rem" }}>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Manufacturing Documentation */}
      <section className="content-section" data-reveal style={rd(80)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <path d="M12 6h12l8 8v20a2 2 0 01-2 2H12a2 2 0 01-2-2V8a2 2 0 012-2z" stroke="#0f3d22" strokeWidth="2" strokeLinejoin="round" />
            <path d="M24 6v8h8" stroke="#0f3d22" strokeWidth="2" strokeLinejoin="round" />
            <path d="M16 22h8M16 27h5" stroke="#0f3d22" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <h2 style={{ margin: 0 }}>Manufacturing Documentation</h2>
        </div>
        <p>
          Comprehensive documentation forms the foundation of every supplier qualification. Salus Vita requires prospective manufacturing partners to provide a defined set of technical and regulatory documents that demonstrate compliance with applicable standards and enable thorough evaluation of product quality and manufacturing consistency.
        </p>
        <p>
          The documentation package is tailored to the specific product type, dosage form, and target market. For products intended for the Australian market, documentation must satisfy TGA expectations for imported therapeutic goods. For multi-market supply, Salus Vita coordinates with manufacturers to ensure that a single documentation set can address the requirements of all intended regulatory authorities, reducing duplication and accelerating review timelines.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 16, marginTop: 24 }}>
          {DOCUMENTS.map((doc, i) => (
            <div key={doc} className="card" data-reveal style={{ ...rd(i * 50), display: "flex", alignItems: "center", gap: 12, padding: "14px 18px" }}>
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" style={{ flexShrink: 0 }}>
                <path d="M6 10h8M6 14h5" stroke="#2d8a56" strokeWidth="1.5" strokeLinecap="round" />
                <rect x="3" y="2" width="14" height="16" rx="2" stroke="#2d8a56" strokeWidth="1.5" />
              </svg>
              <span style={{ fontSize: "0.92rem", color: "var(--navy)" }}>{doc}</span>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 24, fontSize: "0.92rem", color: "#555" }}>
          All documentation received from third parties is verified for authenticity, completeness, and currency before acceptance into the Salus Vita quality system. Documents approaching expiry are flagged for proactive renewal to ensure continuous qualification status.
        </p>
      </section>

      {/* Ongoing Monitoring */}
      <section className="content-section" data-reveal style={rd(160)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <circle cx="20" cy="20" r="14" stroke="#0f3d22" strokeWidth="2" />
            <path d="M20 12v8l5 3" stroke="#0f3d22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 style={{ margin: 0 }}>Ongoing Monitoring</h2>
        </div>
        <p>
          Supplier qualification at Salus Vita is not a single event. Once a manufacturing partner is approved, they enter a continuous monitoring programme that tracks performance against clearly defined key performance indicators. This ongoing assessment ensures that the standards demonstrated during initial qualification are maintained throughout the commercial relationship.
        </p>
        <p>
          Salus Vita monitors publicly available regulatory databases for inspection outcomes, warning letters, import alerts, and enforcement actions affecting qualified partners. Any significant regulatory action triggers an immediate internal risk reassessment and, where appropriate, direct engagement with the manufacturer to understand the scope and remediation plan. Formal re-qualification reviews are conducted at defined intervals, with frequency determined by the supplier's risk category.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {KPIS.map((kpi, i) => (
            <div key={kpi.label} className="card" data-reveal style={rd(i * 70)}>
              <h3 style={{ color: "var(--navy)", marginBottom: 8, fontSize: "1rem" }}>{kpi.label}</h3>
              <p style={{ margin: 0, fontSize: "0.92rem" }}>{kpi.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 24 }}>
          Where performance falls below agreed thresholds, Salus Vita initiates a structured improvement process with the manufacturing partner. Persistent underperformance may result in supply reduction, suspension of new orders, or activation of alternative qualified sources to protect continuity of supply for customers.
        </p>
      </section>

      {/* Risk Assessment */}
      <section className="content-section" data-reveal style={rd(240)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <path d="M20 6L34 32H6L20 6z" stroke="#0f3d22" strokeWidth="2" strokeLinejoin="round" />
            <path d="M20 17v7" stroke="#0f3d22" strokeWidth="2" strokeLinecap="round" />
            <circle cx="20" cy="28" r="1" fill="#0f3d22" />
          </svg>
          <h2 style={{ margin: 0 }}>Risk Assessment</h2>
        </div>
        <p>
          Salus Vita employs a risk-based approach to supplier management, categorising each manufacturing partner according to the level of inherent and residual risk they present. This categorisation determines the intensity of monitoring, the frequency of re-qualification reviews, and the extent of contingency planning applied to each supply relationship.
        </p>
        <p>
          Risk factors considered include the regulatory environment of the manufacturing country, the complexity of the product and dosage form, the manufacturer's inspection history, the criticality of the product to customer supply continuity, and the availability of alternative qualified sources. Suppliers are assigned to one of three risk tiers, with each tier carrying defined monitoring requirements and escalation protocols.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(250px, 1fr))", gap: 16, marginTop: 24 }}>
          {[
            { tier: "Standard", colour: "#2d8a56", items: ["Annual performance review", "Routine documentation updates", "Standard re-qualification cycle"] },
            { tier: "Elevated", colour: "#B8860B", items: ["Bi-annual performance review", "Enhanced documentation monitoring", "Accelerated re-qualification cycle", "Contingency source identification"] },
            { tier: "Critical", colour: "#A0522D", items: ["Quarterly performance review", "Active contingency source qualification", "Intensive regulatory monitoring", "Executive escalation pathway", "Supply continuity planning"] },
          ].map((t, i) => (
            <div key={t.tier} className="card" data-reveal style={{ ...rd(i * 90), borderTop: `3px solid ${t.colour}` }}>
              <h3 style={{ color: t.colour, marginBottom: 8 }}>{t.tier} Risk</h3>
              <ul style={{ margin: 0, paddingLeft: 18, fontSize: "0.92rem" }}>
                {t.items.map((item) => (
                  <li key={item} style={{ marginBottom: 8 }}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 24 }}>
          Events that may trigger an elevation in risk categorisation include regulatory warning letters, confirmed batch failures, significant supply disruptions, changes in manufacturing site or process, and adverse findings during re-qualification review. Salus Vita maintains documented contingency plans for all products sourced from elevated and critical-risk suppliers, ensuring that customer supply is protected in the event of a disruption.
        </p>
      </section>

      {/* Related Quality Pages */}
      <section className="content-section" data-reveal style={rd(320)}>
        <h2>Related Quality Pages</h2>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {[
            { title: "Regulatory Framework", desc: "How Salus Vita aligns procurement activities with TGA, international GMP standards, and market-specific regulatory requirements.", to: "/quality/regulatory-framework" },
            { title: "Supply Chain Integrity", desc: "Traceability, counterparty verification, and recall management across the pharmaceutical supply chain.", to: "/quality/supply-chain-integrity" },
            { title: "Documentation Standards", desc: "Data-integrity-driven documentation practices supporting audit readiness and regulatory compliance.", to: "/quality/documentation-standards" },
            { title: "Quality Overview", desc: "An overview of Salus Vita's quality-conscious approach to pharmaceutical procurement and supply coordination.", to: "/quality" },
          ].map((p, i) => (
            <Link to={p.to} key={p.title} className="card" data-reveal style={{ ...rd(i * 80), textDecoration: "none", color: "inherit" }}>
              <h3 style={{ color: "var(--navy)" }}>{p.title}</h3>
              <p style={{ fontSize: "0.92rem" }}>{p.desc}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA Banner */}
      <div className="cta-banner" data-reveal>
        <div className="cta-card">
          <h2>Discuss Supplier Qualification Requirements</h2>
          <p>
            Have questions about our supplier qualification process? Our team can walk you through how Salus Vita's assessment framework applies to your specific requirements.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Start a Conversation</Link>
            <Link to="/quality" className="btn btn-outline">Quality Overview</Link>
          </div>
        </div>
      </div>
    </>
  )
}
