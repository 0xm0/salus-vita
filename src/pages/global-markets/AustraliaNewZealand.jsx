import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const TGA_STEPS = [
  {
    title: "GMP Clearance Coordination",
    desc: "Facilitating overseas manufacturer applications for TGA GMP clearance, including documentation preparation, inspection readiness, and liaison with the TGA throughout the assessment process.",
  },
  {
    title: "ARTG Registration Support",
    desc: "Coordinating the preparation and submission of product dossiers for inclusion on the Australian Register of Therapeutic Goods, across prescription, OTC, and complementary medicine categories.",
  },
  {
    title: "Post-Market Compliance",
    desc: "Ongoing monitoring of TGA regulatory updates, variation management, and periodic safety reporting obligations to maintain continued compliance for registered products.",
  },
]

const IMPORT_REQUIREMENTS = [
  {
    title: "Import Permit Management",
    desc: "Coordinating TGA import permit applications for therapeutic goods, including scheduling classification, controlled substance permits, and biosecurity clearance documentation.",
  },
  {
    title: "Cold Chain and Special Handling",
    desc: "Assessing temperature-sensitive and controlled logistics requirements, and coordinating with GDP-compliant freight and distribution partners to maintain product integrity from origin to destination.",
  },
  {
    title: "Customs and Border Compliance",
    desc: "Facilitating customs documentation, tariff classification, and border clearance procedures in coordination with licensed customs brokers and the Australian Border Force.",
  },
]

export default function AustraliaNewZealand() {
  return (
    <>
      <PageHero
        eyebrow="GLOBAL MARKETS"
        title="Australia & New Zealand"
        description="As Salus Vita's home market, Australia and New Zealand anchor our operations. We bring deep expertise in TGA and Medsafe regulatory frameworks, established relationships with licensed distribution partners, and proven import pathways for pharmaceutical products."
        breadcrumbs={[
          { label: "Global Markets", path: "/global-markets" },
          { label: "Australia & New Zealand" },
        ]}
        primaryCTA={{ label: "Enquire About ANZ Supply", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "All Markets", to: "/global-markets" }}
      />

      {/* TGA Framework */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
          </svg>
          <h2 style={{ margin: 0 }}>TGA Regulatory Framework</h2>
        </div>
        <p>
          Australia's Therapeutic Goods Administration (TGA) maintains one of the world's most rigorous
          pharmaceutical regulatory environments. Salus Vita's regulatory team brings extensive experience
          navigating TGA requirements for product registration, overseas manufacturer GMP clearance, and
          ongoing post-market obligations. This depth of knowledge allows us to coordinate efficient
          pathways for international manufacturers seeking access to the Australian market.
        </p>
        <p>
          Our role centres on facilitating the regulatory process: preparing documentation to TGA standards,
          coordinating between manufacturers and the TGA during assessment periods, and ensuring that
          product dossiers address the specific evidentiary requirements of each submission category.
          We monitor TGA guidance updates, policy consultations, and legislative changes to keep our
          clients informed of shifting requirements before they affect supply timelines.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {TGA_STEPS.map((item, i) => (
            <div key={item.title} className="card" data-reveal style={rd(i * 90)}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Import Requirements */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <rect x="2" y="7" width="20" height="14" rx="2" />
            <path d="M16 7V5a4 4 0 0 0-8 0v2" />
          </svg>
          <h2 style={{ margin: 0 }}>Import Requirements</h2>
        </div>
        <p>
          Importing pharmaceutical products into Australia requires compliance with multiple regulatory
          frameworks, including TGA import permits, Australian Border Force requirements, and - for
          controlled substances - additional oversight from the Office of Drug Control. Salus Vita
          coordinates these requirements end-to-end, working with licensed customs brokers, freight
          forwarders, and regulatory authorities to facilitate compliant importation.
        </p>
        <p>
          For New Zealand, Medsafe operates a distinct import framework with its own consent and
          notification procedures. Where products are destined for both markets, our team assesses
          the regulatory alignment between TGA and Medsafe requirements, identifying opportunities
          to streamline documentation and reduce duplication across the two jurisdictions.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {IMPORT_REQUIREMENTS.map((item, i) => (
            <div key={item.title} className="card" data-reveal style={rd(i * 90)}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Market Access */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10A15.3 15.3 0 0 1 12 2z" />
          </svg>
          <h2 style={{ margin: 0 }}>Market Access</h2>
        </div>
        <p>
          The combined Australian and New Zealand pharmaceutical market is valued at approximately
          AUD 25 billion annually. In Australia, the Pharmaceutical Benefits Scheme (PBS) shapes
          formulary decisions, pricing, and reimbursement, while New Zealand's PHARMAC operates
          one of the most cost-conscious procurement frameworks in the developed world. Successfully
          entering either market requires an understanding of these mechanisms alongside regulatory
          compliance.
        </p>
        <p>
          Salus Vita assists manufacturers in assessing the commercial feasibility of market entry,
          evaluating pricing and reimbursement landscapes, and identifying the most appropriate
          registration pathway for each product. Our market knowledge extends to hospital tender
          processes, pharmacy distribution models, and the commercial dynamics that shape buyer
          decision-making across both public and private healthcare settings.
        </p>
        <div className="two-col" style={{ marginTop: 24 }}>
          <div className="card" data-reveal style={rd(0)}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>Australia</h3>
            <p>
              PBS listing, private market distribution, hospital and institutional supply, and
              Section 19A pathways for unapproved therapeutic goods. Salus Vita coordinates with
              sponsors, wholesalers, and healthcare providers to facilitate product availability
              across all channels.
            </p>
          </div>
          <div className="card" data-reveal style={rd(100)}>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>New Zealand</h3>
            <p>
              Medsafe approval, PHARMAC-funded supply, and Section 29 named patient pathways.
              We assess Medsafe-specific requirements and coordinate with local distribution
              partners to facilitate access within New Zealand's regulatory and commercial framework.
            </p>
          </div>
        </div>
      </section>

      {/* Distribution Partners */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
          <h2 style={{ margin: 0 }}>Distribution Partners</h2>
        </div>
        <p>
          Salus Vita does not operate its own warehousing or distribution infrastructure. Instead,
          we maintain established relationships with TGA-licensed and Medsafe-compliant distribution
          partners across Australia and New Zealand. These partners provide GDP-compliant storage,
          cold chain management, serialisation capabilities, and last-mile distribution to pharmacies,
          hospitals, and wholesalers.
        </p>
        <p>
          Our approach to distribution is partnership-driven: we assess each product's specific storage,
          handling, and distribution requirements, then coordinate with the most appropriate licensed
          partner to ensure compliant, reliable delivery. This model provides manufacturers with access
          to proven distribution infrastructure without the complexity and cost of establishing their
          own in-market presence.
        </p>
        <p>
          For products requiring specialised handling - including controlled substances, biologics
          requiring cold chain integrity, and high-value oncology products - we coordinate with
          distribution partners that hold the relevant licences and maintain the infrastructure
          necessary for compliant, secure supply.
        </p>
      </section>

      {/* Medsafe & Trans-Tasman Alignment */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 8 }}>
          <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
            <polyline points="22 4 12 14.01 9 11.01" />
          </svg>
          <h2 style={{ margin: 0 }}>Trans-Tasman Regulatory Alignment</h2>
        </div>
        <p>
          While Australia and New Zealand maintain separate regulatory authorities, ongoing
          alignment initiatives between the TGA and Medsafe create opportunities to streamline
          product registration and reduce time to market across both jurisdictions. Salus Vita
          monitors these bilateral developments closely, advising clients on where mutual
          recognition or harmonised assessment pathways can be leveraged.
        </p>
        <p>
          Our team assesses each product against both frameworks simultaneously, identifying
          shared documentation requirements and jurisdictional differences early in the process.
          This dual-market perspective allows manufacturers to plan efficient registration
          strategies that address both Australian and New Zealand requirements without unnecessary
          duplication of effort or cost.
        </p>
      </section>

      {/* CTA */}
      <section className="cta-banner" data-reveal>
        <div className="cta-card">
          <h2>Entering the ANZ Market?</h2>
          <p>
            Our team can assess your product's regulatory pathway, identify appropriate distribution
            partners, and coordinate the documentation required for compliant market entry across
            Australia and New Zealand.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Start a Conversation</Link>
            <Link to="/global-markets" className="btn btn-outline">Explore All Markets</Link>
          </div>
        </div>
      </section>

      {/* Related Markets */}
      <section className="related-links" data-reveal>
        <h3>Other Markets</h3>
        <div className="related-grid">
          <Link to="/global-markets/asia-pacific">Asia Pacific</Link>
          <Link to="/global-markets/europe">Europe</Link>
          <Link to="/global-markets/middle-east-africa">Middle East & Africa</Link>
          <Link to="/capabilities/australian-importation">Australian Importation</Link>
        </div>
      </section>
    </>
  )
}
