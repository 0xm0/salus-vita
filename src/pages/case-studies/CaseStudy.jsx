import { useParams, Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const CASE_STUDIES = {
  "cross-border-api-sourcing-apac": {
    title: "Cross-Border API Sourcing for APAC Manufacturer",
    client: "Regional Pharmaceutical Manufacturer",
    region: "Asia-Pacific",
    category: "API Sourcing",
    challenge: [
      "A mid-size pharmaceutical manufacturer operating across three Asia-Pacific markets was experiencing significant supply disruptions with its existing active pharmaceutical ingredient (API) suppliers. Lead times had become unpredictable, quality documentation was inconsistent across suppliers, and the manufacturer's production planning was suffering as a result.",
      "The manufacturer required a stable, GMP-compliant supply of four high-volume APIs used in its cardiovascular and metabolic product lines. Each target market had distinct regulatory requirements for API documentation, including specific formats for Drug Master Files, GMP certificates, and Certificates of Analysis. The manufacturer needed a supply partner capable of navigating these regulatory differences while maintaining consistent supply across all three markets.",
      "Compounding the challenge, the manufacturer's existing procurement arrangements were fragmented across multiple intermediaries, each with limited visibility into upstream supply chains. This made it difficult to verify the provenance and quality credentials of incoming materials with the rigour expected by regulators in the region.",
    ],
    approach: [
      "Salus Vita conducted a comprehensive requirement analysis, working closely with the manufacturer's procurement and quality teams to define the technical, regulatory, and commercial parameters for each API. This included detailed specifications, target pricing, volume forecasts, and delivery schedules aligned with the manufacturer's production calendar.",
      "Our sourcing team then evaluated manufacturers across India, China, and Europe, assessing each against international GMP standards, WHO Prequalification status, regulatory inspection history, and demonstrated capacity to supply the required volumes reliably. Each candidate underwent our structured supplier qualification process, including documentation review, reference checks, and where applicable, coordination of third-party audits.",
      "For each qualified supplier, Salus Vita assembled a complete regulatory documentation package tailored to the requirements of each target market's national regulatory authority. This ensured that the manufacturer could integrate the new supply sources into its existing regulatory filings without delay. We also established GDP-compliant logistics corridors with continuous temperature monitoring and full chain-of-custody documentation.",
    ],
    outcome: [
      "The engagement resulted in the qualification and onboarding of two primary API suppliers and one contingency supplier, providing the manufacturer with a diversified and resilient supply base. All suppliers were qualified within the project timeline and were able to commence supply within the agreed delivery schedules.",
      "The manufacturer reported improved production planning confidence, reduced procurement overhead, and a measurable improvement in the consistency and completeness of incoming quality documentation. The supply arrangement has since been extended to include additional APIs as the manufacturer expands its product portfolio.",
    ],
    stats: [
      { value: "40%", label: "Reduction in average lead times" },
      { value: "4", label: "APIs sourced and qualified" },
      { value: "3", label: "Markets supported" },
      { value: "100%", label: "Documentation compliance rate" },
    ],
    relatedSlugs: ["managed-access-australian-hospital", "generic-portfolio-southeast-asia"],
  },
  "managed-access-australian-hospital": {
    title: "Managed Access Supply for Australian Hospital Network",
    client: "Tertiary Hospital Network",
    region: "Australia",
    category: "Managed Access",
    challenge: [
      "A major Australian tertiary hospital network required urgent access to a therapeutic product that was not registered on the Australian Register of Therapeutic Goods (ARTG). The product was needed for compassionate use in a critical care setting where no registered alternative was available or clinically appropriate for the patient cohort.",
      "The hospital's pharmacy team had identified the product through clinical literature but had limited experience navigating the TGA's Special Access Scheme (SAS) pathway and the associated importation requirements. Time was critical, as the clinical team needed the product within a defined treatment window to commence therapy.",
      "Beyond the immediate regulatory and logistical requirements, the hospital also needed to establish a repeatable supply arrangement, as the clinical need was expected to be ongoing for a cohort of patients over the following 12 to 18 months.",
    ],
    approach: [
      "Salus Vita's regulatory team worked with the hospital's pharmacy and clinical staff to identify the appropriate SAS pathway and prepare the required documentation for TGA notification. This included compiling product information, manufacturer quality documentation, and clinical justification materials in the format required by the TGA.",
      "Simultaneously, our sourcing team identified and qualified a manufacturer of the required product in Europe, verifying current GMP certification, batch availability, and the manufacturer's ability to supply the specific presentation and pack size needed. We negotiated commercial terms and coordinated the necessary export documentation with the manufacturer and their local regulatory authority.",
      "Our logistics team established a temperature-controlled import corridor from Europe to Australia, arranging GDP-compliant freight, customs clearance, and last-mile delivery to the hospital's pharmacy. All shipments were accompanied by full chain-of-custody documentation, Certificates of Analysis, and batch-specific quality records.",
    ],
    outcome: [
      "The initial supply was delivered to the hospital within three weeks of the enquiry being received, well within the clinical treatment window. The hospital was able to commence the compassionate use programme on schedule, and ongoing supply arrangements were established to support continued access for the patient cohort.",
      "The hospital's pharmacy team subsequently engaged Salus Vita to support additional managed access requirements as they arose, citing the efficiency, transparency, and regulatory rigour of the initial engagement as key factors in their decision to establish an ongoing supply relationship.",
    ],
    stats: [
      { value: "3 wks", label: "From enquiry to first delivery" },
      { value: "100%", label: "Regulatory compliance" },
      { value: "18 mo", label: "Ongoing supply arrangement" },
      { value: "Zero", label: "Supply interruptions" },
    ],
    relatedSlugs: ["cross-border-api-sourcing-apac", "bespoke-sourcing-rare-ingredient"],
  },
  "generic-portfolio-southeast-asia": {
    title: "Generic Portfolio Expansion Across Southeast Asia",
    client: "Pharmaceutical Distributor",
    region: "Southeast Asia",
    category: "Portfolio Expansion",
    challenge: [
      "A regional pharmaceutical distributor sought to expand its portfolio of generic finished dosage forms across four Southeast Asian markets. The distributor had identified strong commercial demand for a range of cardiovascular, anti-infective, and metabolic products but lacked the sourcing infrastructure and regulatory expertise to identify, qualify, and onboard the required manufacturers.",
      "Each of the four target markets had distinct registration requirements, quality documentation standards, and importation procedures. The distributor needed a partner that could navigate this regulatory complexity while sourcing products from manufacturers that met the quality expectations of each national regulatory authority.",
      "The project required coordination across multiple stakeholders, including manufacturers in India and Europe, national regulatory authorities in each target market, and the distributor's own commercial and operations teams. The distributor's target was to have at least 12 new products qualified and available for market within 12 months.",
    ],
    approach: [
      "Salus Vita began with a portfolio mapping exercise, working with the distributor to prioritise the product list based on commercial potential, regulatory feasibility, and supply availability. For each product, we defined the technical specification, target pricing, and regulatory documentation requirements for each target market.",
      "Our sourcing team identified candidate manufacturers for each product, drawing on our existing supplier network and conducting targeted outreach where needed. Each manufacturer underwent our structured qualification process, including GMP documentation review, regulatory inspection history assessment, and capacity and reliability evaluation. Where existing audit reports were not available, we coordinated third-party GMP audits.",
      "For each qualified product-manufacturer combination, Salus Vita assembled a comprehensive documentation package tailored to the requirements of the relevant national regulatory authority. We supported the distributor's regulatory affairs team in preparing and submitting the necessary registration or notification dossiers, and we coordinated initial supply logistics for each product as regulatory approvals were obtained.",
    ],
    outcome: [
      "Within the 12-month project timeline, Salus Vita successfully sourced, qualified, and delivered 14 finished dosage forms from seven GMP-certified manufacturers across India and Europe, exceeding the distributor's initial target of 12 products. Regulatory documentation packages were accepted by all four national regulatory authorities without significant deficiency queries.",
      "The distributor has since engaged Salus Vita for a second phase of portfolio expansion, targeting an additional eight products and two further markets in the region.",
    ],
    stats: [
      { value: "14", label: "Products sourced and qualified" },
      { value: "7", label: "Manufacturers onboarded" },
      { value: "4", label: "Markets supported" },
      { value: "12 mo", label: "Project completion timeline" },
    ],
    relatedSlugs: ["cross-border-api-sourcing-apac", "managed-access-australian-hospital"],
  },
  "bespoke-sourcing-rare-ingredient": {
    title: "Bespoke Sourcing of a Rare Active Ingredient",
    client: "Compounding Pharmacy Group",
    region: "Australia and New Zealand",
    category: "Bespoke Sourcing",
    challenge: [
      "A compounding pharmacy group operating across Australia and New Zealand required a low-volume active pharmaceutical ingredient (API) that had been discontinued by its previous supplier. The API was used in a compounded formulation for a small but clinically significant patient population, and no commercially available alternative existed.",
      "The pharmacy group had spent several months attempting to identify a replacement supplier independently but had been unable to locate a GMP-certified source that could supply the required grade and quantity. Without a reliable supply, the pharmacy risked being unable to continue dispensing the formulation to patients who depended on it.",
    ],
    approach: [
      "Salus Vita's bespoke sourcing team conducted an extensive search across our global manufacturer network, supplemented by targeted outreach to specialist API producers in India, China, and Europe. The search prioritised manufacturers with demonstrated capability in low-volume, niche API production and current GMP certification recognised by the TGA and Medsafe (New Zealand's regulatory authority).",
      "We identified three potential manufacturers and conducted a detailed evaluation of each, including documentation review, quality assessment, and commercial viability analysis for the required volumes. The preferred manufacturer was a European producer with extensive experience in specialty APIs and a strong regulatory compliance record.",
      "Salus Vita negotiated supply terms, coordinated the necessary quality documentation (including a Certificate of Analysis, GMP certificate, and stability data), and arranged GDP-compliant importation into Australia. We also prepared the documentation required for the pharmacy to satisfy TGA requirements for importing an API for compounding purposes.",
    ],
    outcome: [
      "A qualified GMP-certified source was identified and supply was established within eight weeks of the initial enquiry. The pharmacy group was able to resume production of the compounded formulation without any interruption to patient supply.",
      "The engagement has since expanded to include two additional niche APIs required by the pharmacy group, with Salus Vita serving as the group's preferred sourcing partner for hard-to-find pharmaceutical ingredients.",
    ],
    stats: [
      { value: "8 wks", label: "From enquiry to first supply" },
      { value: "3", label: "Manufacturers evaluated" },
      { value: "Zero", label: "Patient supply interruptions" },
      { value: "2", label: "Additional APIs subsequently sourced" },
    ],
    relatedSlugs: ["managed-access-australian-hospital", "cross-border-api-sourcing-apac"],
  },
}

// All slugs for related post lookups
const ALL_STUDIES = Object.entries(CASE_STUDIES).map(([slug, data]) => ({
  slug,
  ...data,
}))

export default function CaseStudy() {
  const { slug } = useParams()
  const study = CASE_STUDIES[slug]

  if (!study) {
    return (
      <>
        <PageHero
          eyebrow="CASE STUDY"
          title="Case Study Not Found"
          description="The case study you are looking for could not be located."
          breadcrumbs={[
            { label: "Case Studies", path: "/case-studies" },
            { label: "Not Found" },
          ]}
        />
        <section className="content-section" style={{ textAlign: "center", padding: "60px 24px" }}>
          <p style={{ color: "var(--muted)", fontSize: 16, marginBottom: 24 }}>
            This case study may have been moved or is no longer available. Please browse our full collection of case studies.
          </p>
          <Link to="/case-studies" className="btn btn-primary">
            View All Case Studies
          </Link>
        </section>
      </>
    )
  }

  const related = ALL_STUDIES.filter((s) => study.relatedSlugs.includes(s.slug))

  return (
    <>
      <PageHero
        eyebrow="CASE STUDY"
        title={study.title}
        description={`${study.client} | ${study.region}`}
        breadcrumbs={[
          { label: "Case Studies", path: "/case-studies" },
          { label: study.title },
        ]}
      />

      {/* Overview Chips */}
      <section className="content-section">
        <div data-reveal style={{ display: "flex", flexWrap: "wrap", gap: 10 }}>
          <span
            style={{
              padding: "6px 14px",
              fontSize: 13,
              fontWeight: 600,
              color: "#fff",
              background: "var(--teal)",
              borderRadius: 16,
            }}
          >
            {study.region}
          </span>
          <span
            style={{
              padding: "6px 14px",
              fontSize: 13,
              fontWeight: 600,
              color: "var(--navy)",
              background: "var(--pale-blue)",
              borderRadius: 16,
              border: "1px solid var(--line)",
            }}
          >
            {study.category}
          </span>
          <span
            style={{
              padding: "6px 14px",
              fontSize: 13,
              fontWeight: 600,
              color: "var(--navy)",
              background: "var(--pale-blue)",
              borderRadius: 16,
              border: "1px solid var(--line)",
            }}
          >
            {study.client}
          </span>
        </div>
      </section>

      {/* The Challenge */}
      <section className="content-section">
        <h2 data-reveal>The Challenge</h2>
        {study.challenge.map((para, i) => (
          <p key={i} data-reveal style={{ "--rd": `${i * 60}ms` }}>
            {para}
          </p>
        ))}
      </section>

      {/* Our Approach */}
      <section className="content-section">
        <h2 data-reveal>Our Approach</h2>
        {study.approach.map((para, i) => (
          <p key={i} data-reveal style={{ "--rd": `${i * 60}ms` }}>
            {para}
          </p>
        ))}
      </section>

      {/* Outcome */}
      <section className="content-section">
        <h2 data-reveal>Outcome</h2>
        {study.outcome.map((para, i) => (
          <p key={i} data-reveal style={{ "--rd": `${i * 60}ms` }}>
            {para}
          </p>
        ))}
      </section>

      {/* Key Results */}
      <section className="content-section">
        <h2 data-reveal>Key Results</h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            gap: 24,
            marginTop: 24,
          }}
        >
          {study.stats.map((stat, i) => (
            <div
              className="stat"
              key={stat.label}
              data-reveal
              style={{ "--rd": `${i * 80}ms` }}
            >
              <span className="stat-value">{stat.value}</span>
              <span className="stat-label">{stat.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Related Case Studies */}
      {related.length > 0 && (
        <section className="content-section">
          <h2 data-reveal>Related Case Studies</h2>
          <div className="feature-grid" style={{ marginTop: 24 }}>
            {related.map((cs, i) => (
              <Link
                to={`/case-studies/${cs.slug}`}
                key={cs.slug}
                className="card"
                data-reveal
                style={{
                  "--rd": `${i * 80}ms`,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <span
                  style={{
                    fontSize: 12,
                    fontWeight: 600,
                    letterSpacing: "0.06em",
                    textTransform: "uppercase",
                    color: "#fff",
                    background: "var(--teal)",
                    padding: "3px 8px",
                    borderRadius: 10,
                    display: "inline-block",
                    marginBottom: 8,
                  }}
                >
                  {cs.region}
                </span>
                <h3>{cs.title}</h3>
                <p style={{ fontSize: 14 }}>{cs.client}</p>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <h2>Have a Similar Requirement?</h2>
          <p>
            Contact our team to discuss how Salus Vita can develop a tailored pharmaceutical supply solution for your organisation.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">
              Submit a Sourcing Enquiry
            </Link>
            <Link to="/case-studies" className="btn btn-outline">
              View All Case Studies
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
