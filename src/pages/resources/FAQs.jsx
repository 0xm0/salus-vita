import { useState } from "react"
import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const FAQ_CATEGORIES = [
  {
    category: "About Salus Vita",
    questions: [
      {
        q: "What does Salus Vita do?",
        a: "Salus Vita is an Australian-headquartered international pharmaceutical sourcing, procurement, and supply company. We connect quality-assured manufacturers with healthcare markets worldwide, coordinating every stage of the supply process from initial sourcing through to final delivery. We do not manufacture pharmaceutical products ourselves; rather, we facilitate the procurement, documentation, and logistics required to move products across borders compliantly and efficiently.",
      },
      {
        q: "Where is Salus Vita headquartered and where does it operate?",
        a: "Our head office is located in Melbourne, Australia, with additional offices in Singapore and the United Kingdom. We operate supply corridors spanning the Asia-Pacific, Europe, the Middle East, and Africa, serving clients in more than 40 countries. Our regional presence allows us to maintain close relationships with both regulatory authorities and supply chain partners in each market.",
      },
      {
        q: "Does Salus Vita hold a manufacturing licence or GMP certification?",
        a: "No. Salus Vita is not a manufacturer and does not hold GMP certification. Our role is to source, coordinate, and facilitate the supply of pharmaceutical products from qualified, GMP-certified manufacturers. We conduct rigorous supplier assessments to ensure that every manufacturing partner in our network meets the relevant international quality and regulatory standards.",
      },
      {
        q: "What types of organisations does Salus Vita work with?",
        a: "We work with a broad range of pharmaceutical industry stakeholders, including generic and innovator manufacturers seeking market access, hospital networks and health systems requiring managed access products, wholesale distributors expanding their portfolios, compounding pharmacies sourcing specialist ingredients, and government procurement bodies. Each engagement is tailored to the specific requirements of the partner and the regulatory context of the target market.",
      },
      {
        q: "How long has Salus Vita been operating?",
        a: "Salus Vita has more than 15 years of experience in international pharmaceutical supply. Over that period, we have built an extensive network of manufacturer relationships, developed deep regulatory expertise across multiple jurisdictions, and established supply corridors that deliver reliable, quality-assured pharmaceutical products to markets worldwide.",
      },
    ],
  },
  {
    category: "Sourcing Process",
    questions: [
      {
        q: "How does the sourcing process begin?",
        a: "The process begins when you submit a sourcing enquiry through our website or contact our team directly. We will ask you to provide details about the product you require, including the molecule or product name, dosage form, target market, estimated volumes, and any specific regulatory or documentation requirements. Our specialist sourcing team then assesses availability across our manufacturer network and presents qualified options.",
      },
      {
        q: "How long does it take to identify a suitable supplier?",
        a: "Timelines vary depending on the complexity of the requirement. For commonly available APIs and finished dosage forms, we can typically identify qualified sources within one to two weeks. For bespoke or hard-to-find products, the process may take four to eight weeks, as it may involve extended manufacturer outreach, qualification checks, and documentation preparation. We provide transparent timelines at the outset of every engagement.",
      },
      {
        q: "Can Salus Vita source products that are not registered in my market?",
        a: "Yes. We have extensive experience facilitating managed access and special access pathways, which allow healthcare providers to obtain products that are not yet registered in their jurisdiction. This includes the Australian Special Access Scheme (SAS), Section 19A provisions under New Zealand legislation, and analogous frameworks in other markets. We manage the regulatory documentation and importation logistics on behalf of our clients.",
      },
      {
        q: "What information should I include in a sourcing enquiry?",
        a: "To enable the fastest and most accurate response, we recommend providing: the product or molecule name, the required dosage form and strength, the target market or markets, estimated annual volumes, any preferred manufacturer certifications (such as WHO prequalification or EU GMP), and your desired delivery timeline. You can submit this information through our dedicated Sourcing Enquiry form, which guides you through each field.",
      },
      {
        q: "Does Salus Vita handle small-volume or one-off requirements?",
        a: "Yes. While we support large-scale procurement programmes, we also specialise in low-volume and bespoke sourcing engagements. This includes sourcing rare or niche APIs for compounding pharmacies, supplying small quantities for clinical trials or pilot programmes, and facilitating one-off managed access imports for individual patient needs.",
      },
    ],
  },
  {
    category: "Regulatory",
    questions: [
      {
        q: "Which regulatory frameworks does Salus Vita work within?",
        a: "We operate across a range of international regulatory frameworks, including those administered by the Australian Therapeutic Goods Administration (TGA), the European Medicines Agency (EMA), the WHO Prequalification Programme, and national regulatory authorities across Asia, the Middle East, and Africa. Our regulatory team maintains current knowledge of the requirements in each target market and ensures that all documentation and processes align with the applicable standards.",
      },
      {
        q: "What is the TGA and how does it affect pharmaceutical imports into Australia?",
        a: "The Therapeutic Goods Administration (TGA) is Australia's regulatory authority for therapeutic goods. All pharmaceutical products supplied in Australia must either be included on the Australian Register of Therapeutic Goods (ARTG) or be imported under an approved access pathway such as the Special Access Scheme or Authorised Prescriber arrangements. Salus Vita manages TGA-related documentation and compliance requirements on behalf of clients importing into the Australian market.",
      },
      {
        q: "What documentation does Salus Vita provide with supplied products?",
        a: "We provide comprehensive regulatory documentation packages tailored to the requirements of each target market. This typically includes Drug Master Files (DMFs), Certificates of Suitability (CEPs), GMP certificates, Certificates of Analysis (CoAs), stability data, pharmacopoeial compliance statements, and any additional documentation required by local regulatory authorities. All documentation undergoes internal review before being shared with clients.",
      },
      {
        q: "Can Salus Vita assist with regulatory submissions?",
        a: "While we do not act as a regulatory affairs consultancy, we support our clients by preparing and assembling the technical documentation packages required for regulatory submissions in their target markets. This includes ensuring that manufacturer documentation meets the format, content, and currency requirements of the relevant regulatory authority. For complex submissions, we can recommend specialist regulatory affairs partners from our professional network.",
      },
    ],
  },
  {
    category: "Quality",
    questions: [
      {
        q: "How does Salus Vita qualify its manufacturing partners?",
        a: "Every manufacturer in our supply network undergoes a structured qualification process that evaluates GMP compliance, regulatory standing, production capability, quality management systems, and track record of supply reliability. We review current GMP certificates, audit reports (where available), and regulatory inspection histories. Ongoing monitoring ensures that any changes in a manufacturer's compliance status are identified and addressed promptly.",
      },
      {
        q: "Does Salus Vita conduct on-site audits of manufacturers?",
        a: "We coordinate on-site audits as part of our supplier qualification and ongoing monitoring processes. These audits may be conducted directly by our quality team or through qualified third-party audit firms with pharmaceutical sector expertise. Audit findings are documented and reviewed internally, and any corrective actions required are tracked through to resolution before supply commences or continues.",
      },
      {
        q: "How is product integrity maintained during transport?",
        a: "All logistics arrangements are managed in accordance with Good Distribution Practice (GDP) guidelines. For temperature-sensitive products, we use validated cold-chain logistics corridors with continuous temperature monitoring, data logging, and excursion alerting. Full chain-of-custody documentation is maintained from the manufacturer's release point through to final delivery, ensuring complete traceability at every stage.",
      },
      {
        q: "What happens if a quality issue is identified with a supplied product?",
        a: "We maintain a formal quality incident management process. If a quality concern is raised by a client or identified through our own monitoring, we initiate an investigation in coordination with the manufacturing partner. This includes root cause analysis, corrective and preventive action (CAPA) planning, and transparent communication with all affected parties. Where necessary, product recall or replacement procedures are activated in line with regulatory requirements.",
      },
      {
        q: "Does Salus Vita maintain a quality management system?",
        a: "Yes. We operate a comprehensive quality management system that governs all aspects of our sourcing, procurement, documentation, and supply activities. This system is aligned with international pharmaceutical industry standards, including GDP and relevant elements of GMP as they apply to our role in the supply chain. Regular internal reviews and continuous improvement processes ensure that our quality standards remain current and effective.",
      },
    ],
  },
  {
    category: "Partnerships",
    questions: [
      {
        q: "How can a manufacturer partner with Salus Vita?",
        a: "Manufacturers interested in expanding their market reach through Salus Vita can begin by contacting our partnerships team or submitting an enquiry through our website. We will discuss your product portfolio, current regulatory certifications, manufacturing capacity, and target markets. If there is alignment, we proceed with our supplier qualification process, which includes documentation review, quality assessment, and commercial terms negotiation.",
      },
      {
        q: "What does Salus Vita offer its distribution partners?",
        a: "For distribution partners, we provide access to a curated portfolio of quality-assured pharmaceutical products sourced from qualified manufacturers worldwide. We handle all upstream procurement, regulatory documentation, and logistics coordination, allowing distributors to focus on their market-facing activities. Our partners also benefit from dedicated account management, competitive pricing structures, and supply continuity planning.",
      },
      {
        q: "Does Salus Vita offer exclusive supply arrangements?",
        a: "We are open to discussing exclusive or preferential supply arrangements on a case-by-case basis. These arrangements are typically considered for high-volume, long-term partnerships where both parties benefit from supply certainty and commercial commitment. The terms of any exclusive arrangement are negotiated transparently and formalised through a supply agreement.",
      },
      {
        q: "What is the Professional Portal and how do I access it?",
        a: "The Professional Portal is a secure online platform that provides registered partners with access to documentation libraries, order tracking, product catalogues, and regulatory resources. Access is available to qualified pharmaceutical professionals and organisations with an active commercial relationship with Salus Vita. You can apply for access through the Professional section of our website.",
      },
    ],
  },
]

export default function FAQs() {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleFaq = (categoryIdx, questionIdx) => {
    const key = `${categoryIdx}-${questionIdx}`
    setOpenIndex(openIndex === key ? null : key)
  }

  return (
    <>
      <PageHero
        eyebrow="RESOURCES"
        title="Frequently Asked Questions"
        description="Answers to common questions about pharmaceutical sourcing, regulatory compliance, quality assurance, and partnering with Salus Vita."
        breadcrumbs={[
          { label: "Resources", path: "/resources" },
          { label: "FAQs" },
        ]}
      />

      {/* Quick Navigation */}
      <section className="content-section">
        <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          {FAQ_CATEGORIES.map((cat, i) => (
            <a
              key={i}
              href={`#faq-${i}`}
              style={{
                padding: "8px 16px",
                fontSize: 14,
                fontWeight: 500,
                color: "var(--teal)",
                background: "var(--pale-blue)",
                borderRadius: 20,
                textDecoration: "none",
                border: "1px solid var(--line)",
                transition: "background 0.2s",
              }}
            >
              {cat.category}
            </a>
          ))}
        </div>
      </section>

      {/* FAQ Categories */}
      {FAQ_CATEGORIES.map((cat, catIdx) => (
        <section className="content-section" key={catIdx} id={`faq-${catIdx}`}>
          <h2 data-reveal>{cat.category}</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 12, marginTop: 24 }}>
            {cat.questions.map((faq, qIdx) => (
              <details
                key={qIdx}
                open={openIndex === `${catIdx}-${qIdx}`}
                data-reveal
                style={{
                  "--rd": `${qIdx * 60}ms`,
                  background: "var(--glass-2)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius)",
                  overflow: "hidden",
                }}
              >
                <summary
                  onClick={(e) => {
                    e.preventDefault()
                    toggleFaq(catIdx, qIdx)
                  }}
                  style={{
                    padding: "18px 24px",
                    fontSize: 16,
                    fontWeight: 600,
                    color: "var(--navy)",
                    cursor: "pointer",
                    listStyle: "none",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    userSelect: "none",
                  }}
                >
                  {faq.q}
                  <span
                    style={{
                      fontSize: 20,
                      color: "var(--teal)",
                      flexShrink: 0,
                      marginLeft: 16,
                      transition: "transform 0.2s",
                      transform: openIndex === `${catIdx}-${qIdx}` ? "rotate(45deg)" : "none",
                    }}
                  >
                    +
                  </span>
                </summary>
                {openIndex === `${catIdx}-${qIdx}` && (
                  <div style={{ padding: "0 24px 18px", color: "var(--muted)", fontSize: 15, lineHeight: 1.7 }}>
                    {faq.a}
                  </div>
                )}
              </details>
            ))}
          </div>
        </section>
      ))}

      {/* Still Have Questions CTA */}
      <section className="content-section" style={{ textAlign: "center" }}>
        <h2 data-reveal>Still Have Questions?</h2>
        <p data-reveal style={{ maxWidth: 560, margin: "16px auto 24px" }}>
          Our team is available to discuss your specific requirements, answer technical questions, or explore how Salus Vita can support your pharmaceutical supply needs.
        </p>
        <div className="hero-actions" data-reveal style={{ justifyContent: "center" }}>
          <Link to="/contact" className="btn btn-primary">Contact Our Team</Link>
          <Link to="/contact/sourcing-enquiry" className="btn btn-outline">Submit a Sourcing Enquiry</Link>
        </div>
      </section>

      <section className="related-links">
        <h3>Related Resources</h3>
        <div className="related-grid">
          <Link to="/resources/glossary">Pharmaceutical Glossary</Link>
          <Link to="/resources">All Resources</Link>
          <Link to="/about">About Salus Vita</Link>
        </div>
      </section>
    </>
  )
}
