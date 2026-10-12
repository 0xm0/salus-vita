import { useState } from "react"
import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const TERMS = [
  {
    term: "API",
    full: "Active Pharmaceutical Ingredient",
    definition: "The biologically active component of a drug product that produces the intended therapeutic effect. APIs may be produced through chemical synthesis, fermentation, or extraction from natural sources. The quality, purity, and consistency of an API are governed by pharmacopoeial standards and GMP requirements.",
  },
  {
    term: "ARTG",
    full: "Australian Register of Therapeutic Goods",
    definition: "The official register of therapeutic goods that have been evaluated and approved for lawful supply in Australia. The ARTG is maintained by the TGA, and inclusion on the register is generally required before a product can be imported, exported, manufactured, or supplied in Australia.",
  },
  {
    term: "CDMO",
    full: "Contract Development and Manufacturing Organisation",
    definition: "A company that provides drug development and manufacturing services on a contract basis to pharmaceutical and biotechnology companies. CDMOs offer capabilities ranging from formulation development and process optimisation through to commercial-scale production, enabling clients to bring products to market without investing in their own manufacturing infrastructure.",
  },
  {
    term: "CEP",
    full: "Certificate of Suitability",
    definition: "A certificate issued by the European Directorate for the Quality of Medicines (EDQM) confirming that the quality of a pharmaceutical substance is suitably controlled by the relevant European Pharmacopoeia monograph. CEPs are widely used in regulatory submissions across Europe and other markets that recognise EDQM standards.",
  },
  {
    term: "cGMP",
    full: "Current Good Manufacturing Practice",
    definition: "Regulations enforced by regulatory agencies such as the FDA and TGA that require manufacturers to ensure pharmaceutical products are consistently produced and controlled according to quality standards appropriate for their intended use. The term 'current' emphasises that manufacturers must employ up-to-date technologies and systems.",
  },
  {
    term: "CoA",
    full: "Certificate of Analysis",
    definition: "A document issued by a manufacturer's quality control department that confirms a specific batch of product has been tested and meets its predetermined quality specifications. A CoA typically includes test results for identity, purity, potency, and other parameters defined in the product specification.",
  },
  {
    term: "CRO",
    full: "Contract Research Organisation",
    definition: "A company that provides outsourced research services to the pharmaceutical and biotechnology industries on a contract basis. CROs may conduct clinical trials, bioanalytical testing, regulatory affairs consulting, pharmacovigilance, and other development activities. They enable sponsors to access specialised expertise without maintaining all capabilities in-house.",
  },
  {
    term: "DMF",
    full: "Drug Master File",
    definition: "A confidential document submitted to a regulatory authority containing detailed information about the manufacture, processing, packaging, and quality controls of an active pharmaceutical ingredient or other component. DMFs allow manufacturers to share proprietary technical information with regulators without disclosing it directly to their customers.",
  },
  {
    term: "EDQM",
    full: "European Directorate for the Quality of Medicines and HealthCare",
    definition: "A directorate of the Council of Europe responsible for setting quality standards for medicines, pharmaceutical substances, and blood products across Europe. The EDQM publishes the European Pharmacopoeia and administers the CEP programme, both of which play a central role in the regulation of pharmaceutical quality.",
  },
  {
    term: "EMA",
    full: "European Medicines Agency",
    definition: "The EU agency responsible for the scientific evaluation, supervision, and safety monitoring of medicines across the European Union. The EMA coordinates the centralised marketing authorisation procedure for medicines and provides scientific guidance to applicants seeking to develop new treatments for the European market.",
  },
  {
    term: "FDF",
    full: "Finished Dosage Form",
    definition: "A pharmaceutical product in its final form ready for administration to the patient. Finished dosage forms include tablets, capsules, injectables, suspensions, creams, and other formulations. The manufacture of FDFs from APIs is subject to GMP requirements and must comply with the regulatory standards of the target market.",
  },
  {
    term: "FDA",
    full: "Food and Drug Administration",
    definition: "The United States federal agency responsible for protecting public health by regulating pharmaceuticals, biologics, food products, medical devices, and cosmetics. The FDA's regulatory standards, including its cGMP requirements and inspection programme, are recognised and referenced by regulatory authorities worldwide.",
  },
  {
    term: "GDP",
    full: "Good Distribution Practice",
    definition: "Guidelines and standards that govern the proper storage, transportation, and handling of pharmaceutical products throughout the distribution chain. GDP ensures that product quality and integrity are maintained from the manufacturer's release point through to the end user. Compliance with GDP is a regulatory requirement in most pharmaceutical markets.",
  },
  {
    term: "GMP",
    full: "Good Manufacturing Practice",
    definition: "A system of standards, guidelines, and procedures that ensures pharmaceutical products are consistently produced and controlled according to quality requirements appropriate for their intended use. GMP covers all aspects of manufacturing, from raw materials and facility design through to staff training and quality documentation. Compliance is verified through regulatory inspections.",
  },
  {
    term: "GWP",
    full: "Good Warehousing Practice",
    definition: "Standards and guidelines for the proper storage and handling of pharmaceutical products in warehouse facilities. GWP covers environmental controls such as temperature and humidity management, security measures, pest control, inventory management, and staff training. Adherence to GWP ensures that product quality is preserved during storage prior to distribution.",
  },
  {
    term: "GxP",
    full: "Good Practice (collective term)",
    definition: "An umbrella term encompassing all regulated good practice quality guidelines and regulations applicable to the pharmaceutical and life sciences industries. GxP includes GMP (manufacturing), GDP (distribution), GLP (laboratory), GCP (clinical), and GWP (warehousing), among others. Each standard addresses quality requirements at a specific stage of the product lifecycle.",
  },
  {
    term: "ICH",
    full: "International Council for Harmonisation",
    definition: "An organisation that brings together regulatory authorities and pharmaceutical industry representatives from Europe, Japan, the United States, and other regions to develop harmonised technical guidelines for drug quality, safety, and efficacy. ICH guidelines are widely adopted by regulatory authorities worldwide and form the basis of many national regulatory requirements.",
  },
  {
    term: "MAP",
    full: "Managed Access Programme",
    definition: "A structured programme through which patients can access pharmaceutical products that are not yet registered or commercially available in their market. Managed access programmes are also known as compassionate use, expanded access, or named patient programmes in various jurisdictions. They typically require regulatory authorisation and may involve specific documentation, reporting, and pharmacovigilance obligations.",
  },
  {
    term: "NRA",
    full: "National Regulatory Authority",
    definition: "The government body responsible for regulating pharmaceutical products, medical devices, and other health products within a given country. NRAs set the standards for product registration, manufacturing, importation, distribution, and post-market surveillance. Examples include the TGA (Australia), EMA (European Union), FDA (United States), and HSA (Singapore).",
  },
  {
    term: "PBS",
    full: "Pharmaceutical Benefits Scheme",
    definition: "An Australian Government programme that subsidises the cost of prescription medicines for Australian residents. The PBS is administered by the Department of Health and Aged Care, with medicines listed on the PBS schedule following evaluation by the Pharmaceutical Benefits Advisory Committee (PBAC). Listing on the PBS is a key step in achieving broad market access for pharmaceutical products in Australia.",
  },
  {
    term: "PHARMAC",
    full: "Pharmaceutical Management Agency",
    definition: "The New Zealand Government agency responsible for deciding which pharmaceutical products are publicly funded and available through the New Zealand health system. PHARMAC manages the Pharmaceutical Schedule, negotiates pricing with suppliers, and makes funding decisions based on clinical evidence, cost-effectiveness, and the health needs of the population.",
  },
  {
    term: "PIC/S",
    full: "Pharmaceutical Inspection Co-operation Scheme",
    definition: "An international cooperative arrangement between regulatory authorities that aims to harmonise GMP inspection procedures and standards across member countries. PIC/S facilitates the exchange of inspection reports, mutual recognition of GMP findings, and the development of common training standards for pharmaceutical inspectors. Membership in PIC/S is an indicator of a national authority's inspection capability.",
  },
  {
    term: "QA",
    full: "Quality Assurance",
    definition: "A systematic approach to ensuring that pharmaceutical products and processes meet predefined quality criteria throughout the entire product lifecycle. QA encompasses the design, implementation, and ongoing monitoring of quality systems, procedures, and controls. It is a proactive discipline that aims to prevent quality issues rather than detect them after the fact.",
  },
  {
    term: "QC",
    full: "Quality Control",
    definition: "The set of testing, sampling, and analytical activities performed to verify that pharmaceutical products, raw materials, and intermediates meet their specification requirements. QC is a component of the broader quality assurance framework and typically involves laboratory testing of batches against predefined acceptance criteria before release.",
  },
  {
    term: "SAS",
    full: "Special Access Scheme",
    definition: "An Australian regulatory pathway administered by the TGA that allows healthcare practitioners to access therapeutic goods not included on the Australian Register of Therapeutic Goods (ARTG) for individual patients. The SAS has multiple categories, each with different requirements for notification or approval. It is one of the primary mechanisms for importing unregistered medicines into Australia.",
  },
  {
    term: "Section 19A",
    full: "Section 19A of the New Zealand Medicines Act 1981",
    definition: "A provision in New Zealand legislation that allows the Minister of Health to approve the importation of medicines that do not have New Zealand marketing consent, typically when there is a shortage of the consented medicine or when no consented alternative is available. Section 19A approvals are subject to specific conditions and are used to maintain continuity of supply for essential medicines.",
  },
  {
    term: "TGA",
    full: "Therapeutic Goods Administration",
    definition: "Australia's national regulatory authority for therapeutic goods, operating as a division of the Department of Health and Aged Care. The TGA is responsible for evaluating, assessing, and monitoring therapeutic products including medicines, medical devices, and biologicals to ensure they meet acceptable standards of quality, safety, and efficacy for supply in Australia.",
  },
  {
    term: "WHO",
    full: "World Health Organization",
    definition: "The United Nations agency responsible for directing and coordinating international health matters. In the pharmaceutical context, the WHO publishes guidelines on GMP, GDP, and other quality standards, and administers the WHO Prequalification Programme, which evaluates the quality, safety, and efficacy of medicines intended for use in resource-limited settings.",
  },
  {
    term: "WHO PQ",
    full: "WHO Prequalification",
    definition: "A programme administered by the World Health Organization that evaluates and prequalifies pharmaceutical products, active ingredients, and manufacturing sites. WHO prequalification serves as an assurance to procurement agencies and countries that prequalified products meet acceptable standards of quality, safety, and efficacy. It is a key requirement for products procured through international agencies such as UNICEF, the Global Fund, and UNITAID.",
  },
]

export default function Glossary() {
  const [search, setSearch] = useState("")

  const filtered = TERMS.filter((t) => {
    const q = search.toLowerCase()
    return (
      t.term.toLowerCase().includes(q) ||
      t.full.toLowerCase().includes(q) ||
      t.definition.toLowerCase().includes(q)
    )
  })

  // Group by first letter
  const grouped = {}
  filtered.forEach((t) => {
    const letter = t.term.charAt(0).toUpperCase()
    if (!grouped[letter]) grouped[letter] = []
    grouped[letter].push(t)
  })
  const letters = Object.keys(grouped).sort()

  return (
    <>
      <PageHero
        eyebrow="RESOURCES"
        title="Pharmaceutical Glossary"
        description="Key terms, abbreviations, and definitions used across international pharmaceutical supply, regulatory affairs, and quality assurance."
        breadcrumbs={[
          { label: "Resources", path: "/resources" },
          { label: "Glossary" },
        ]}
      />

      {/* Search */}
      <section className="content-section">
        <div data-reveal style={{ maxWidth: 480 }}>
          <div style={{ position: "relative" }}>
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{
                position: "absolute",
                left: 14,
                top: "50%",
                transform: "translateY(-50%)",
                width: 18,
                height: 18,
                color: "var(--muted-2)",
                pointerEvents: "none",
              }}
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <input
              type="text"
              placeholder="Search terms, abbreviations, or definitions..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              style={{
                width: "100%",
                padding: "14px 16px 14px 44px",
                fontSize: 15,
                border: "1px solid var(--line-strong)",
                borderRadius: 10,
                background: "#fff",
                color: "var(--ink)",
                fontFamily: "inherit",
                outline: "none",
              }}
            />
          </div>
          {search && (
            <p style={{ fontSize: 13, color: "var(--muted-2)", marginTop: 8 }}>
              Showing {filtered.length} of {TERMS.length} terms
            </p>
          )}
        </div>
      </section>

      {/* Alphabet Navigation */}
      <section className="content-section" style={{ paddingTop: 0 }}>
        <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: 6 }}>
          {letters.map((letter) => (
            <a
              key={letter}
              href={`#letter-${letter}`}
              style={{
                width: 36,
                height: 36,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 14,
                fontWeight: 600,
                color: "var(--teal)",
                background: "var(--pale-blue)",
                borderRadius: 8,
                textDecoration: "none",
                border: "1px solid var(--line)",
              }}
            >
              {letter}
            </a>
          ))}
        </div>
      </section>

      {/* Terms by Letter */}
      {letters.map((letter) => (
        <section className="content-section" key={letter} id={`letter-${letter}`} style={{ paddingTop: 8 }}>
          <h2
            data-reveal
            style={{
              fontSize: 28,
              fontWeight: 800,
              color: "var(--teal)",
              opacity: 0.3,
              marginBottom: 16,
            }}
          >
            {letter}
          </h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            {grouped[letter].map((t, i) => (
              <div
                key={t.term}
                data-reveal
                style={{
                  "--rd": `${i * 40}ms`,
                  padding: "20px 24px",
                  background: "var(--glass-2)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius)",
                }}
              >
                <div style={{ display: "flex", alignItems: "baseline", gap: 12, marginBottom: 8 }}>
                  <span style={{ fontSize: 18, fontWeight: 700, color: "var(--teal)", flexShrink: 0 }}>
                    {t.term}
                  </span>
                  <span style={{ fontSize: 14, color: "var(--muted-2)", fontWeight: 500 }}>
                    {t.full}
                  </span>
                </div>
                <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.7, margin: 0 }}>
                  {t.definition}
                </p>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* No Results */}
      {filtered.length === 0 && (
        <section className="content-section" style={{ textAlign: "center", padding: "60px 24px" }}>
          <p style={{ color: "var(--muted-2)", fontSize: 16 }}>
            No terms found matching "{search}". Try a different search term or{" "}
            <button
              onClick={() => setSearch("")}
              style={{
                background: "none",
                border: "none",
                color: "var(--teal)",
                cursor: "pointer",
                fontFamily: "inherit",
                fontSize: "inherit",
                textDecoration: "underline",
                padding: 0,
              }}
            >
              view all terms
            </button>
            .
          </p>
        </section>
      )}

      <section className="related-links">
        <h3>Related Resources</h3>
        <div className="related-grid">
          <Link to="/resources/faqs">Frequently Asked Questions</Link>
          <Link to="/resources">All Resources</Link>
          <Link to="/quality">Quality and Compliance</Link>
        </div>
      </section>

      <section className="cta-banner" data-reveal>
        <div className="cta-card" style={{ background: "var(--navy)", color: "#fff", borderRadius: 16, padding: "48px 32px", textAlign: "center" }}>
          <h2 style={{ color: "#fff", marginBottom: 16 }}>Need Help Understanding a Term?</h2>
          <p style={{ color: "var(--pale-blue)", maxWidth: 560, margin: "0 auto 24px" }}>
            If you have questions about pharmaceutical terminology or regulatory concepts, our team can provide guidance relevant to your specific requirements.
          </p>
          <Link
            to="/contact"
            className="btn btn-primary"
            style={{ background: "var(--teal)", color: "#fff", padding: "14px 32px", borderRadius: 8, textDecoration: "none", display: "inline-block", fontWeight: 600 }}
          >
            Contact Our Team
          </Link>
        </div>
      </section>
    </>
  )
}
