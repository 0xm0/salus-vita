import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

export default function RegulatoryFramework() {
  return (
    <>
      <PageHero
        eyebrow="QUALITY & COMPLIANCE"
        title="Regulatory Framework and Compliance"
        description="Salus Vita coordinates pharmaceutical procurement in alignment with the regulatory frameworks of every target market. Our processes are structured to facilitate compliance with TGA, PIC/S, WHO, and other international standards, ensuring that every product sourced through our network meets the expectations of the relevant regulatory authority."
        breadcrumbs={[{ label: "Quality", path: "/quality" }, { label: "Regulatory Framework" }]}
        primaryCTA={{ label: "Discuss Regulatory Requirements", to: "/contact/sourcing-enquiry" }}
      />

      {/* Australian Framework (TGA) */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 12 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <rect x="4" y="8" width="32" height="24" rx="3" stroke="#15324A" strokeWidth="2" fill="none" />
            <path d="M4 14h32" stroke="#15324A" strokeWidth="2" />
            <circle cx="20" cy="23" r="4" stroke="#15324A" strokeWidth="2" fill="none" />
            <path d="M20 19v8M16 23h8" stroke="#15324A" strokeWidth="1.5" />
          </svg>
          <h2 style={{ margin: 0 }}>Australian Framework (TGA)</h2>
        </div>
        <p>
          The Therapeutic Goods Administration is the regulatory authority responsible for evaluating and monitoring therapeutic goods in Australia, including pharmaceuticals imported for commercial distribution. Any product entering the Australian market must be included on the Australian Register of Therapeutic Goods (ARTG), and the manufacturing site must hold current GMP clearance issued or recognised by the TGA. Salus Vita coordinates procurement specifically to satisfy these requirements, working with manufacturing partners to confirm that GMP clearance is in place before any supply commitment is made.
        </p>
        <p>
          It is important to note that Salus Vita does not itself hold GMP certification or ARTG listings. These obligations rest with the product sponsor and the manufacturing facility respectively. Salus Vita's role is to assess and verify that these regulatory prerequisites are met, to coordinate the assembly of supporting documentation, and to facilitate the regulatory pathway on behalf of commercial partners. This clear delineation of responsibility ensures that all parties understand their obligations within the supply arrangement.
        </p>
        <p>
          For products requiring TGA GMP clearance from overseas manufacturing sites, Salus Vita assists partners in understanding the inspection and clearance process, including the timeframes, documentation requirements, and any conditions that the TGA may impose. Where a manufacturing site has not yet been inspected by the TGA, we can advise on alternative pathways, such as mutual recognition arrangements under PIC/S, that may expedite the clearance process.
        </p>
      </section>

      {/* International Standards */}
      <section className="content-section" data-reveal style={rd(80)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 12 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <circle cx="20" cy="20" r="15" stroke="#15324A" strokeWidth="2" fill="none" />
            <ellipse cx="20" cy="20" rx="7" ry="15" stroke="#15324A" strokeWidth="1.5" fill="none" />
            <path d="M5 20h30" stroke="#15324A" strokeWidth="1.5" />
            <path d="M8 12h24M8 28h24" stroke="#15324A" strokeWidth="1" />
          </svg>
          <h2 style={{ margin: 0 }}>International Standards</h2>
        </div>
        <p>
          Salus Vita assesses manufacturing partners against a matrix of internationally recognised pharmaceutical quality standards. The Pharmaceutical Inspection Co-operation Scheme (PIC/S) provides the baseline GMP framework, with its guidelines adopted or referenced by regulatory authorities across more than 50 participating countries. We verify that each manufacturing site holds current GMP certification from a PIC/S member authority and evaluate inspection histories to understand the compliance profile of every facility in our network.
        </p>
        <p>
          Beyond PIC/S, our assessment criteria incorporate the ICH Q7 guidelines for active pharmaceutical ingredients, ICH Q10 pharmaceutical quality system principles, and WHO prequalification standards where products are destined for procurement by international health organisations. For European markets, we confirm compliance with EU GMP Annexes relevant to the specific dosage form and product category. This multi-framework approach allows Salus Vita to facilitate procurement across jurisdictions with differing regulatory expectations, identifying the standard that applies in each case and confirming manufacturer alignment before supply is initiated.
        </p>
        <p>
          Salus Vita does not certify or audit manufacturing sites on behalf of any regulatory authority. Our role is to conduct commercial due diligence that includes a thorough review of existing regulatory credentials, third-party audit reports, and inspection outcomes. Where gaps or risks are identified, we engage with the manufacturer to understand remediation plans and timelines before proceeding with any commercial arrangement.
        </p>
      </section>

      {/* Product Classification */}
      <section className="content-section" data-reveal style={rd(160)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 12 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <rect x="6" y="6" width="12" height="12" rx="2" stroke="#15324A" strokeWidth="2" fill="none" />
            <rect x="22" y="6" width="12" height="12" rx="2" stroke="#15324A" strokeWidth="2" fill="none" />
            <rect x="6" y="22" width="12" height="12" rx="2" stroke="#15324A" strokeWidth="2" fill="none" />
            <rect x="22" y="22" width="12" height="12" rx="2" stroke="#15324A" strokeWidth="2" fill="none" />
            <path d="M12 10v4M10 12h4" stroke="#15324A" strokeWidth="1.5" />
          </svg>
          <h2 style={{ margin: 0 }}>Product Classification</h2>
        </div>
        <p>
          The regulatory pathway for any pharmaceutical product is determined by its classification within the target market. In Australia, the TGA classifies therapeutic goods into categories including prescription medicines (Schedule 4 and Schedule 8), pharmacist-only medicines (Schedule 3), over-the-counter products (Schedule 2), complementary medicines, and medical devices. Each classification carries distinct requirements for registration, labelling, quality documentation, and post-market obligations. Salus Vita's procurement processes are structured to accommodate these differences, ensuring that documentation and compliance activities are matched to the product category.
        </p>
        <p>
          For prescription medicines, procurement coordination typically involves verification of ARTG registration status, confirmation of approved product information documents, and alignment of batch documentation with the conditions of the marketing authorisation. Complementary medicines and listed products follow a different regulatory pathway, with requirements centred on ingredient pre-approval, evidence of traditional use or clinical substantiation, and compliance with the Therapeutic Goods Advertising Code. Salus Vita assesses the classification of each product at the outset of any sourcing engagement to confirm that the correct regulatory framework is applied throughout the procurement process.
        </p>
        <p>
          Where a product is intended for multiple markets, classification differences between jurisdictions can introduce complexity in areas such as labelling, pack size, and permitted claims. Our team coordinates with partners to identify these differences early, facilitating the development of market-specific packaging and documentation that satisfies the requirements of each regulatory authority without disrupting the manufacturing and supply timeline.
        </p>
      </section>

      {/* Compliance Monitoring */}
      <section className="content-section" data-reveal style={rd(240)}>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 20, marginBottom: 12 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg" style={{ flexShrink: 0 }}>
            <path d="M20 4l14 7v10c0 8-6 14-14 17C12 35 6 29 6 21V11l14-7z" stroke="#15324A" strokeWidth="2" fill="none" />
            <path d="M14 20l4 4 8-8" stroke="#15324A" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 style={{ margin: 0 }}>Compliance Monitoring</h2>
        </div>
        <p>
          Regulatory frameworks are not static. Requirements evolve as authorities update guidance documents, introduce new compliance obligations, and respond to emerging safety signals. Salus Vita maintains an active regulatory intelligence function that monitors changes across our key markets, including TGA regulatory updates, PIC/S guidance revisions, ICH guideline developments, and WHO prequalification programme changes. This ongoing monitoring ensures that our procurement processes remain aligned with current requirements and that our partners receive timely advice on changes that may affect their products or supply arrangements.
        </p>
        <p>
          In the area of pharmacovigilance, Salus Vita coordinates with manufacturing partners and marketing authorisation holders to facilitate the flow of safety information. While pharmacovigilance reporting obligations rest with the product sponsor and the marketing authorisation holder, Salus Vita supports the timely communication of adverse event reports, safety signal assessments, and any product quality complaints that arise within our supply chain. This coordination role ensures that all parties with regulatory reporting obligations have access to the information they need to fulfil those obligations without delay.
        </p>
        <p>
          Our compliance monitoring extends to tracking the regulatory standing of every manufacturing site in our network. We review inspection outcomes published by the TGA, FDA, EMA, and other authorities, and we monitor public enforcement actions such as warning letters, import alerts, and GMP non-compliance findings. Where a manufacturing partner's regulatory status changes materially, Salus Vita reassesses the risk profile of the supply arrangement and communicates transparently with affected customers about any implications for ongoing supply.
        </p>
      </section>

      {/* Related Quality Pages */}
      <section className="content-section" data-reveal style={rd(320)}>
        <h2>Related Quality Pages</h2>
        <div className="feature-grid" style={{ marginTop: 20 }}>
          <Link to="/quality/supplier-assessment" className="card" data-reveal style={{ ...rd(0), textDecoration: "none", color: "inherit" }}>
            <h3>Supplier Assessment</h3>
            <p>How Salus Vita evaluates and qualifies manufacturing partners through structured due diligence and ongoing performance monitoring.</p>
          </Link>
          <Link to="/quality/supply-chain-integrity" className="card" data-reveal style={{ ...rd(90), textDecoration: "none", color: "inherit" }}>
            <h3>Supply Chain Integrity</h3>
            <p>Traceability systems, counterparty verification, and the protocols that protect the integrity of every transaction.</p>
          </Link>
          <Link to="/quality/documentation-standards" className="card" data-reveal style={{ ...rd(180), textDecoration: "none", color: "inherit" }}>
            <h3>Documentation Standards</h3>
            <p>The documentation framework that supports audit readiness and regulatory compliance across all supply arrangements.</p>
          </Link>
          <Link to="/quality" className="card" data-reveal style={{ ...rd(270), textDecoration: "none", color: "inherit" }}>
            <h3>Quality Overview</h3>
            <p>An introduction to the quality principles and systems that underpin all Salus Vita procurement activities.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <div className="cta-banner" data-reveal>
        <div className="cta-card">
          <h2>Regulatory Questions? We Can Help.</h2>
          <p>Discuss your market-specific regulatory requirements or request detailed compliance documentation for any product in our network.</p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Discuss Requirements</Link>
            <Link to="/contact" className="btn btn-outline">Contact Our Team</Link>
          </div>
        </div>
      </div>
    </>
  )
}
