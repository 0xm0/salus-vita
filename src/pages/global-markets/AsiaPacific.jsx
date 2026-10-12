import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const FRAMEWORKS = [
  {
    title: "ASEAN Harmonisation",
    desc: "ASEAN member states are progressively aligning pharmaceutical regulations through the ASEAN Common Technical Dossier (ACTD) and mutual recognition arrangements, creating streamlined pathways for product registration across Southeast Asia.",
  },
  {
    title: "PMDA (Japan)",
    desc: "Japan's Pharmaceuticals and Medical Devices Agency maintains one of the world's most rigorous approval processes. Salus Vita coordinates with local partners to facilitate regulatory submissions and post-market compliance.",
  },
  {
    title: "MFDS (South Korea)",
    desc: "South Korea's Ministry of Food and Drug Safety applies demanding quality and safety standards. Our team facilitates engagement with local regulatory consultants to support registration and GMP assessment requirements.",
  },
  {
    title: "NMPA (China)",
    desc: "China's National Medical Products Administration has undergone significant reform in recent years, accelerating approval timelines while maintaining stringent safety requirements for imported pharmaceuticals.",
  },
]

const PARTNERSHIPS = [
  {
    title: "Local Distributor Alignment",
    desc: "Identifying and assessing qualified distribution partners with established market presence, regulatory standing, and logistical capability in each target jurisdiction.",
  },
  {
    title: "Joint Venture Facilitation",
    desc: "Coordinating introductions and commercial frameworks between international manufacturers and regional partners seeking collaborative market entry arrangements.",
  },
  {
    title: "Regulatory Agent Coordination",
    desc: "Facilitating engagement with in-country regulatory agents and consultants who hold the local expertise required for product registration and ongoing compliance.",
  },
]

export default function AsiaPacific() {
  return (
    <>
      <PageHero
        eyebrow="GLOBAL MARKETS"
        title="Asia Pacific"
        description="Facilitating pharmaceutical market access across ASEAN, Japan, South Korea, and Greater China with tailored regulatory and distribution support."
        breadcrumbs={[{ label: "Global Markets", path: "/global-markets" }, { label: "Asia Pacific" }]}
        primaryCTA={{ label: "Explore APAC Opportunities", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "All Markets", to: "/global-markets" }}
      />

      {/* Regional Landscape */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <circle cx="20" cy="20" r="18" stroke="#176E79" strokeWidth="2" fill="none" />
            <path d="M12 20c0-4.4 3.6-8 8-8s8 3.6 8 8-3.6 8-8 8" stroke="#176E79" strokeWidth="1.5" fill="none" />
            <path d="M20 12v16M12 20h16" stroke="#176E79" strokeWidth="1" opacity="0.5" />
            <circle cx="20" cy="20" r="2" fill="#176E79" />
          </svg>
          <h2 style={{ margin: 0 }}>Regional Landscape</h2>
        </div>
        <p>
          The Asia-Pacific pharmaceutical market encompasses some of the world's most dynamic and rapidly evolving healthcare economies. Population growth, rising life expectancy, expanding insurance coverage, and increased government investment in healthcare infrastructure are driving sustained demand for quality pharmaceutical products across the region.
        </p>
        <p>
          However, the regulatory and commercial landscape varies significantly between jurisdictions. A market entry strategy that succeeds in Singapore may bear little resemblance to the approach required in Vietnam or Japan. Salus Vita provides clients with the regional perspective needed to make informed decisions about where and how to pursue APAC opportunities.
        </p>
        <div className="two-col" style={{ marginTop: 24 }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>Southeast Asia</h3>
            <p>
              The ASEAN pharmaceutical market is characterised by strong growth fundamentals, progressive regulatory harmonisation, and increasing demand for both innovative and generic medicines. Key markets include Singapore, Malaysia, Thailand, Vietnam, the Philippines, and Indonesia, each with distinct regulatory frameworks, pricing mechanisms, and distribution structures.
            </p>
            <p>
              Salus Vita coordinates market assessments across ASEAN nations, evaluating regulatory requirements, competitive positioning, and distribution channel options to identify the most viable entry pathways for each product category.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>Northeast Asia</h3>
            <p>
              Japan, South Korea, and Greater China represent the region's largest and most sophisticated pharmaceutical markets. These jurisdictions maintain rigorous regulatory standards, established procurement systems, and well-developed distribution networks that present both opportunity and complexity for international suppliers.
            </p>
            <p>
              Salus Vita facilitates market access in these jurisdictions by coordinating with experienced local partners who hold the regulatory expertise and commercial relationships essential for successful market entry.
            </p>
          </div>
        </div>
      </section>

      {/* Regulatory Frameworks */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <rect x="8" y="6" width="24" height="28" rx="3" stroke="#176E79" strokeWidth="2" fill="none" />
            <path d="M14 14h12M14 19h12M14 24h8" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="28" cy="28" r="6" stroke="#176E79" strokeWidth="1.5" fill="#E9F0F2" />
            <path d="M26 28l1.5 1.5L30 27" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 style={{ margin: 0 }}>Regulatory Frameworks</h2>
        </div>
        <p>
          The APAC region presents one of the most diverse regulatory environments in global pharmaceuticals. From highly developed agencies with long-established review processes to emerging regulators adopting international standards, each jurisdiction requires tailored regulatory strategy and local expertise.
        </p>
        <p>
          Salus Vita monitors regulatory developments across all APAC jurisdictions of interest, providing clients with current intelligence on registration requirements, labelling standards, pharmacovigilance obligations, and pricing and reimbursement frameworks. This enables informed sequencing of market entry activities and efficient allocation of regulatory resources.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {FRAMEWORKS.map((f, i) => (
            <div key={f.title} className="card" data-reveal style={rd(i * 90)}>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Market Opportunities */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <rect x="6" y="6" width="28" height="28" rx="4" stroke="#176E79" strokeWidth="2" fill="none" />
            <path d="M12 28l5-8 4 4 7-12" stroke="#176E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="28" cy="12" r="2" fill="#176E79" />
          </svg>
          <h2 style={{ margin: 0 }}>Market Opportunities</h2>
        </div>
        <p>
          Several structural factors are creating new opportunities for pharmaceutical supply across the Asia-Pacific. Governments throughout the region are expanding healthcare coverage, investing in hospital infrastructure, and modernising pharmaceutical procurement systems. These developments are increasing both the volume and quality expectations for imported medicines.
        </p>
        <p>
          Generic pharmaceutical demand continues to grow as patent expiry timelines create new competitive openings across therapeutic categories. Simultaneously, rising demand for specialist and innovative therapies is opening pathways for products that address unmet clinical needs in oncology, rare diseases, and chronic conditions.
        </p>
        <p>
          Salus Vita assesses these opportunities on behalf of clients, evaluating commercial feasibility, competitive landscape, and regulatory pathway complexity for specific product categories in target APAC jurisdictions. Our assessments consider both near-term viability and longer-term market trajectory.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {[
            { title: "Generic Expansion", desc: "Patent expiry timelines across key therapeutic areas are creating competitive openings for quality generic products in established APAC markets." },
            { title: "Hospital Procurement", desc: "Modernised hospital tender systems in markets such as China and Indonesia present volume opportunities for competitively positioned products." },
            { title: "Specialist Therapies", desc: "Growing demand for oncology, immunology, and rare disease treatments is driving interest in innovative product sourcing across the region." },
          ].map((item, i) => (
            <div key={item.title} className="card" data-reveal style={rd(i * 90)}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Partnership Models */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <circle cx="14" cy="14" r="6" stroke="#176E79" strokeWidth="2" fill="none" />
            <circle cx="26" cy="14" r="6" stroke="#176E79" strokeWidth="2" fill="none" />
            <circle cx="20" cy="26" r="6" stroke="#176E79" strokeWidth="2" fill="none" />
            <path d="M17 19l3 3M23 19l-3 3" stroke="#176E79" strokeWidth="1.5" />
          </svg>
          <h2 style={{ margin: 0 }}>Partnership Models</h2>
        </div>
        <p>
          Successful market entry in the Asia-Pacific typically depends on the strength of local partnerships. Regulatory requirements, distribution logistics, and commercial relationships in most APAC jurisdictions necessitate engagement with established in-country partners who understand the local environment.
        </p>
        <p>
          Salus Vita facilitates the identification, assessment, and engagement of local partners across the region. Our approach involves evaluating potential partners against criteria that include regulatory standing, distribution capability, financial stability, and alignment with the client's commercial objectives and quality standards.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {PARTNERSHIPS.map((p, i) => (
            <div key={p.title} className="card" data-reveal style={rd(i * 90)}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Markets */}
      <section className="related-links" data-reveal>
        <h3>Other Markets</h3>
        <div className="related-grid">
          <Link to="/global-markets/australia-new-zealand" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h4 style={{ color: "var(--navy)", marginBottom: 4 }}>Australia & New Zealand</h4>
            <p style={{ fontSize: 14 }}>TGA and Medsafe regulatory expertise in Salus Vita's home market.</p>
          </Link>
          <Link to="/global-markets/europe" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h4 style={{ color: "var(--navy)", marginBottom: 4 }}>Europe</h4>
            <p style={{ fontSize: 14 }}>EMA framework navigation and cross-border supply coordination.</p>
          </Link>
          <Link to="/global-markets/middle-east-africa" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h4 style={{ color: "var(--navy)", marginBottom: 4 }}>Middle East & Africa</h4>
            <p style={{ fontSize: 14 }}>Emerging market access and regulatory partnership coordination.</p>
          </Link>
          <Link to="/capabilities/cross-border-supply" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h4 style={{ color: "var(--navy)", marginBottom: 4 }}>Cross-Border Supply</h4>
            <p style={{ fontSize: 14 }}>International supply chain coordination and logistics facilitation.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" data-reveal>
        <div className="cta-card">
          <h2>Exploring Asia-Pacific Markets?</h2>
          <p>
            Discuss your APAC market entry objectives with our team. We can assess regulatory pathways, identify partnership opportunities, and coordinate the groundwork for successful market access.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Discuss APAC Opportunities</Link>
          </div>
        </div>
      </section>
    </>
  )
}
