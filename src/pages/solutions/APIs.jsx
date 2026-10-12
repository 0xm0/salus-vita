import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const PROCESS_STEPS = [
  {
    title: "Sourcing Assessment",
    desc: "Systematic evaluation of manufacturer capability, regulatory standing, and commercial viability to identify optimal API sources for each requirement.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="20" cy="20" r="19" stroke="#176E79" strokeWidth="2" />
        <path d="M12 20l4 4 12-12" stroke="#176E79" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Specification Review",
    desc: "Detailed technical alignment between customer requirements and manufacturer capabilities, covering pharmacopoeial grade, purity profiles, and particle characteristics.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="6" width="24" height="28" rx="3" stroke="#176E79" strokeWidth="2" />
        <line x1="14" y1="14" x2="26" y2="14" stroke="#176E79" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="20" x2="26" y2="20" stroke="#176E79" strokeWidth="2" strokeLinecap="round" />
        <line x1="14" y1="26" x2="22" y2="26" stroke="#176E79" strokeWidth="2" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    title: "Documentation",
    desc: "Coordination of complete regulatory documentation packages including Drug Master Files, Certificates of Suitability, stability data, and certificates of analysis.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 8h14l8 8v18a2 2 0 01-2 2H10a2 2 0 01-2-2V10a2 2 0 012-2z" stroke="#176E79" strokeWidth="2" />
        <path d="M24 8v8h8" stroke="#176E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    title: "Quality Assurance",
    desc: "Ongoing assessment of manufacturing standards, batch consistency, and regulatory compliance across every API source in the Salus Vita network.",
    icon: (
      <svg width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M20 4l4 2v8c0 7-8 12-8 12s-8-5-8-12V6l4-2h8z" stroke="#176E79" strokeWidth="2" strokeLinejoin="round" />
        <path d="M16 18l3 3 6-6" stroke="#176E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
]

const SOURCING_CAPABILITIES = [
  { title: "Multi-Source Identification", desc: "Assessment of multiple qualified manufacturers for each API to provide supply continuity and competitive positioning." },
  { title: "Regulatory Pre-Screening", desc: "Evaluation of each candidate manufacturer's regulatory filing status in your target market before commercial engagement." },
  { title: "Commercial Benchmarking", desc: "Comparative pricing analysis across qualified sources, accounting for freight, duty, and total landed cost considerations." },
]

const SPEC_DETAILS = [
  { title: "Pharmacopoeial Compliance", desc: "Alignment with USP, EP, BP, JP, and other pharmacopoeial monograph requirements applicable to your target registration." },
  { title: "Impurity Profiling", desc: "Review of process-related and degradation impurities against ICH Q3A/Q3B thresholds and market-specific limits." },
  { title: "Physical Characteristics", desc: "Assessment of particle size distribution, polymorphic form, bulk density, and other physical parameters critical to downstream formulation." },
]

const QA_ELEMENTS = [
  { title: "GMP Compliance Verification", desc: "Independent assessment of manufacturer GMP status against PIC/S, ICH Q7, and target-market regulatory expectations." },
  { title: "Batch Consistency Review", desc: "Evaluation of historical batch data to confirm reproducibility and identify potential variability risks before commercial commitment." },
  { title: "Ongoing Monitoring", desc: "Periodic reassessment of qualified manufacturers including review of regulatory inspection outcomes, quality metrics, and CAPA effectiveness." },
]

const RELATED = [
  { title: "Finished Dosage Forms", desc: "Market-ready pharmaceutical products coordinated through qualified manufacturing partners worldwide.", to: "/solutions/finished-dosage-forms" },
  { title: "Specialist Procurement", desc: "Complex sourcing for controlled substances, orphan categories, and products requiring additional regulatory diligence.", to: "/solutions/specialist-procurement" },
  { title: "Managed Access Programs", desc: "Regulatory pathway coordination for pre-registration and unregistered product access.", to: "/solutions/managed-access" },
  { title: "Global Sourcing", desc: "International manufacturer identification and qualification across four continents.", to: "/capabilities/global-sourcing" },
]

export default function APIs() {
  return (
    <>
      <PageHero
        eyebrow="PHARMACEUTICAL SOLUTIONS"
        title="Active Pharmaceutical Ingredients"
        description="Quality-assured API supply from assessed manufacturers worldwide for manufacturing, research, and institutional buyers."
        breadcrumbs={[{ label: "Solutions", path: "/solutions" }, { label: "Active Pharmaceutical Ingredients" }]}
        primaryCTA={{ label: "Request API Sourcing", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "View All Solutions", to: "/solutions" }}
      />

      {/* Process Overview */}
      <section className="content-section" data-reveal>
        <h2>A Structured Approach to API Sourcing</h2>
        <p>
          Procuring active pharmaceutical ingredients for regulated markets requires more than identifying a manufacturer
          at a competitive price. It demands systematic assessment of manufacturing capability, thorough technical alignment,
          complete regulatory documentation, and sustained quality oversight. Salus Vita coordinates each of these elements
          on behalf of our clients, applying a structured methodology that has been refined across hundreds of sourcing
          engagements.
        </p>
        <p>
          Our approach is designed for organisations that require reliable, compliant API supply but may not maintain
          the in-house resources to conduct global manufacturer assessments, manage multi-jurisdictional documentation
          requirements, or monitor ongoing supplier performance across geographies. Whether the end use is commercial
          manufacturing, clinical research, or institutional compounding, the same rigour applies.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.title} className="card" data-reveal style={rd(i * 90)}>
              <div style={{ marginBottom: 16 }}>{step.icon}</div>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Sourcing Assessment */}
      <section className="content-section" data-reveal>
        <h2>Sourcing Assessment</h2>
        <div className="two-col">
          <div>
            <p>
              Every API sourcing engagement begins with a comprehensive assessment of the requirement and the available
              supply landscape. Salus Vita evaluates candidate manufacturers against a defined set of criteria that
              encompasses regulatory standing, production capability, quality track record, financial stability, and
              capacity to support the volumes and timelines required.
            </p>
            <p>
              This assessment extends beyond the manufacturer's own representations. Where appropriate, our team reviews
              publicly available inspection outcomes from regulatory authorities such as the TGA, EMA, FDA, and PMDA, as
              well as WHO prequalification status and PIC/S membership of the manufacturer's national inspectorate.
              The objective is to present clients with a shortlist of sources that have been independently validated
              before any commercial commitment is made.
            </p>
            <p>
              For clients requiring dual or multiple sourcing strategies, Salus Vita assesses alternative manufacturers
              in parallel, enabling supply continuity planning and competitive tension from the outset of the engagement.
            </p>
          </div>
          <div>
            {SOURCING_CAPABILITIES.map((item, i) => (
              <div key={item.title} className="card" data-reveal style={{ ...rd(i * 100), marginBottom: i < SOURCING_CAPABILITIES.length - 1 ? 16 : 0 }}>
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Specification Review */}
      <section className="content-section" data-reveal>
        <h2>Specification Review</h2>
        <p>
          Technical alignment between the customer's specification and the manufacturer's product profile is critical
          to avoiding costly delays, failed batches, or regulatory complications downstream. Salus Vita facilitates a
          detailed specification review process that examines every parameter relevant to the intended use and target
          market registration.
        </p>
        <p>
          This review encompasses pharmacopoeial compliance, impurity profiling against ICH guidelines, residual
          solvent limits, heavy metal specifications, microbiological standards, and any customer-specific requirements
          beyond compendial norms. For APIs intended for sterile or parenteral formulations, additional assessment of
          endotoxin levels, particulate matter, and sterilisation compatibility is conducted.
        </p>
        <p>
          Where specification gaps are identified, Salus Vita coordinates between the manufacturer and the client to
          evaluate feasibility of adjustment, whether through process modification, additional testing, or alternative
          source selection.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {SPEC_DETAILS.map((item, i) => (
            <div key={item.title} className="card" data-reveal style={rd(i * 90)}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Documentation */}
      <section className="content-section" data-reveal>
        <h2>Regulatory Documentation</h2>
        <div className="two-col">
          <div>
            <p>
              Regulatory documentation is the foundation of any compliant pharmaceutical supply chain, and its quality
              frequently determines the pace and success of product registration. Salus Vita coordinates the assembly
              and review of complete documentation packages tailored to the regulatory requirements of each target market.
            </p>
            <p>
              Documentation packages typically include Drug Master Files (DMFs) or Active Substance Master Files (ASMFs),
              Certificates of Suitability (CEPs) where applicable, current GMP certificates issued by recognised
              inspectorates, certificates of analysis for recent commercial batches, and long-term stability data
              supporting the proposed retest period.
            </p>
            <p>
              Our team reviews each document for completeness, currency, and alignment with the specific expectations
              of the target regulatory authority, whether that is the TGA, EMA, FDA, or a national agency in the
              Asia-Pacific or Middle East. Where gaps are identified, we coordinate with the manufacturer to obtain
              supplementary data or updated filings before the dossier is submitted.
            </p>
          </div>
          <div>
            <div className="card" data-reveal style={rd(120)}>
              <h3>Documentation Scope</h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {[
                  "Drug Master Files (DMFs / ASMFs)",
                  "Certificates of Suitability (CEPs)",
                  "GMP Certificates (PIC/S, EU, TGA)",
                  "Certificates of Analysis (CoA)",
                  "Stability Data and Retest Periods",
                  "Impurity Qualification Reports",
                  "Residual Solvent Data (ICH Q3C)",
                  "Transmissible Spongiform Encephalopathy (TSE) Declarations",
                ].map((item) => (
                  <li key={item} style={{ padding: "6px 0", borderBottom: "1px solid var(--pale-blue)", fontSize: 14, color: "var(--navy)" }}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Quality Assurance */}
      <section className="content-section" data-reveal>
        <h2>Quality Assurance</h2>
        <p>
          Salus Vita's quality assurance framework for API sourcing operates on the principle that supplier qualification
          is not a one-time event but an ongoing commitment. Every manufacturer in our assessed network is subject to
          initial qualification, periodic reassessment, and continuous monitoring of quality indicators and regulatory
          standing.
        </p>
        <p>
          Initial qualification encompasses a thorough review of the manufacturer's quality management system, GMP
          compliance history, deviation and CAPA processes, change control procedures, and batch release protocols.
          This assessment is conducted against the expectations of the target market's regulatory authority and
          international standards including ICH Q7 (GMP for APIs) and ICH Q10 (Pharmaceutical Quality System).
        </p>
        <p>
          Once qualified, manufacturers are monitored on an ongoing basis. Salus Vita tracks regulatory inspection
          outcomes, reviews batch analytical data for consistency trends, and maintains awareness of any changes to
          manufacturing processes, sites, or key personnel that may affect product quality or regulatory status.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {QA_ELEMENTS.map((item, i) => (
            <div key={item.title} className="card" data-reveal style={rd(i * 90)}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Use Cases */}
      <section className="content-section" data-reveal>
        <h2>Who We Work With</h2>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {[
            { title: "Pharmaceutical Manufacturers", desc: "Sourcing APIs for commercial production of finished dosage forms across generic, branded generic, and specialty portfolios." },
            { title: "Research Organisations", desc: "Facilitating access to reference standards, development-grade APIs, and small-quantity supply for formulation development and bioequivalence studies." },
            { title: "Institutional Buyers", desc: "Coordinating API procurement for compounding pharmacies, hospital pharmacy departments, and government health procurement agencies." },
          ].map((item, i) => (
            <div key={item.title} className="card" data-reveal style={rd(i * 90)}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Solutions */}
      <section className="content-section" data-reveal>
        <h3 style={{ fontSize: 20, fontWeight: 700, color: "var(--navy)", marginBottom: 16 }}>Related Solutions</h3>
        <div className="feature-grid">
          {RELATED.map((r, i) => (
            <Link
              to={r.to}
              key={r.title}
              className="card"
              data-reveal
              style={{ ...rd(i * 90), textDecoration: "none", color: "inherit" }}
            >
              <h3>{r.title}</h3>
              <p>{r.desc}</p>
              <span style={{ marginTop: 16, display: "inline-block", fontSize: 14, fontWeight: 600, color: "var(--teal)" }}>
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" data-reveal>
        <div className="cta-card">
          <h2>Discuss Your API Requirements</h2>
          <p>
            Whether you are seeking a single-source API for a new registration or building a diversified supply
            strategy across multiple markets, our sourcing team is ready to assist.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Submit Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  )
}
