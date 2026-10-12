import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const DISTRIBUTION_MODELS = [
  {
    title: "Exclusive Distribution",
    desc: "Coordinating exclusive distribution arrangements where a single in-country partner holds product rights for a defined territory. Salus Vita facilitates partner identification, due diligence, and commercial framework development.",
  },
  {
    title: "Multi-Channel Distribution",
    desc: "Facilitating supply through multiple distribution channels including hospital tenders, retail pharmacy networks, and institutional procurement systems to maximise market coverage within a jurisdiction.",
  },
  {
    title: "Public Health Programme Supply",
    desc: "Coordinating supply arrangements for government-led public health programmes, including WHO prequalified product sourcing, tender documentation support, and logistics coordination for large-volume deliveries.",
  },
]

export default function MiddleEastAfrica() {
  return (
    <>
      <PageHero
        eyebrow="GLOBAL MARKETS"
        title="Middle East & Africa"
        description="The Middle East and Africa encompass some of the world's most dynamic pharmaceutical markets. Salus Vita facilitates market access and supply coordination across the GCC, North Africa, and Sub-Saharan Africa through regulatory navigation and local partnership development."
        breadcrumbs={[{ label: "Global Markets", path: "/global-markets" }, { label: "Middle East & Africa" }]}
        primaryCTA={{ label: "Discuss MEA Opportunities", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "All Markets", to: "/global-markets" }}
      />

      {/* Regulatory Landscape */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 20 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <rect x="8" y="6" width="24" height="28" rx="3" stroke="#176E79" strokeWidth="2" fill="none" />
            <path d="M14 14h12M14 19h12M14 24h8" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" />
            <path d="M8 10h24" stroke="#176E79" strokeWidth="1.5" />
            <circle cx="30" cy="30" r="5" stroke="#176E79" strokeWidth="1.5" fill="#E9F0F2" />
            <path d="M28.5 30l1 1 2-2.5" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
          <h2 style={{ margin: 0 }}>Regulatory Landscape</h2>
        </div>
        <p>
          The Middle East and Africa present one of the most varied regulatory environments in global pharmaceuticals. The region spans jurisdictions with well-established regulatory authorities and mature GMP inspection frameworks through to emerging regulators that are progressively adopting international standards and building institutional capacity.
        </p>
        <p>
          Salus Vita monitors regulatory developments across the MEA region, tracking changes in registration requirements, GMP recognition frameworks, import licensing procedures, and pharmacovigilance obligations. This awareness enables our team to assess market entry feasibility and advise clients on the regulatory pathway, timeline, and documentation requirements applicable to each target jurisdiction.
        </p>
        <div className="two-col" style={{ marginTop: 28 }}>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>Gulf Cooperation Council</h3>
            <p>
              The GCC states maintain well-funded healthcare systems and increasingly rigorous pharmaceutical regulatory frameworks. Saudi Arabia's SFDA, the UAE's Ministry of Health and Prevention, and the regulatory authorities of Kuwait, Qatar, Bahrain, and Oman each apply distinct registration and GMP requirements, though GCC harmonisation initiatives continue to advance mutual recognition of approvals and inspections.
            </p>
            <p>
              Salus Vita facilitates regulatory engagement across the GCC, coordinating with local agents and regulatory consultants to support product registration, variation management, and ongoing compliance in each member state.
            </p>
          </div>
          <div>
            <h3 style={{ fontSize: 18, fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>Africa</h3>
            <p>
              African pharmaceutical markets are characterised by significant unmet medical need, growing healthcare investment, and a regulatory landscape that is evolving rapidly. Key regulatory authorities include South Africa's SAHPRA, Egypt's EDA, Kenya's PPB, Nigeria's NAFDAC, and Ghana's FDA, each with their own approval timelines, dossier requirements, and GMP recognition frameworks.
            </p>
            <p>
              Continental harmonisation efforts, notably through the African Medicines Regulatory Harmonisation (AMRH) initiative and the African Medicines Agency (AMA), are progressively creating more aligned regulatory pathways across the continent.
            </p>
          </div>
        </div>
      </section>

      {/* Market Access Strategies */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 20 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <circle cx="20" cy="20" r="16" stroke="#176E79" strokeWidth="2" fill="none" />
            <path d="M20 8v12l8 4" stroke="#176E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="20" cy="20" r="2" fill="#176E79" />
          </svg>
          <h2 style={{ margin: 0 }}>Market Access Strategies</h2>
        </div>
        <p>
          Effective market access in the MEA region requires strategies that account for the significant variation in healthcare infrastructure, regulatory maturity, procurement mechanisms, and commercial dynamics between jurisdictions. A successful approach in the GCC, where mature healthcare systems and established procurement processes prevail, will differ substantially from the approach required in Sub-Saharan African markets where public health programme procurement and donor-funded supply chains play a larger role.
        </p>
        <p>
          Salus Vita assesses market access opportunities by evaluating the regulatory pathway, competitive landscape, pricing environment, and distribution infrastructure in each target jurisdiction. Our assessments consider both the immediate commercial opportunity and the longer-term trajectory of each market, including expected regulatory reform, healthcare expenditure trends, and evolving procurement practices.
        </p>
        <div className="feature-grid" style={{ marginTop: 24, gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))" }}>
          {[
            { title: "Regulatory Pathway Assessment", desc: "Evaluating registration requirements, expected timelines, GMP recognition frameworks, and documentation needs for each target jurisdiction." },
            { title: "Competitive Landscape Analysis", desc: "Assessing the existing market for comparable products, pricing benchmarks, market share distribution, and potential competitive positioning." },
            { title: "Partner Identification", desc: "Identifying and assessing potential local partners based on regulatory standing, distribution capability, market presence, and commercial alignment." },
            { title: "Supply Chain Design", desc: "Coordinating logistics planning that accounts for import licensing, cold chain requirements, customs clearance, and in-country distribution infrastructure." },
          ].map((item, i) => (
            <div key={item.title} className="card" data-reveal style={rd(i * 90)}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Distribution Networks */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 20 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <circle cx="20" cy="10" r="4" stroke="#176E79" strokeWidth="2" fill="none" />
            <circle cx="10" cy="30" r="4" stroke="#176E79" strokeWidth="2" fill="none" />
            <circle cx="30" cy="30" r="4" stroke="#176E79" strokeWidth="2" fill="none" />
            <path d="M20 14v4l-7 8M20 18l7 8" stroke="#176E79" strokeWidth="1.5" />
            <path d="M14 30h12" stroke="#176E79" strokeWidth="1" strokeDasharray="2 2" />
          </svg>
          <h2 style={{ margin: 0 }}>Distribution Networks</h2>
        </div>
        <p>
          Distribution infrastructure in the MEA region varies widely, from the well-developed logistics networks of the GCC states to the more fragmented distribution channels in parts of Sub-Saharan Africa. Effective pharmaceutical supply requires careful partner selection and logistics coordination tailored to the realities of each jurisdiction.
        </p>
        <p>
          Salus Vita does not operate distribution facilities directly. Instead, we facilitate connections between manufacturers and qualified local distribution partners who hold the necessary regulatory licences, storage infrastructure, and logistical capability to manage pharmaceutical supply within their jurisdictions. Our role is to assess, coordinate, and monitor these partnerships to ensure they meet the quality and compliance standards required by both the manufacturer and the regulatory authority.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {DISTRIBUTION_MODELS.map((d, i) => (
            <div key={d.title} className="card" data-reveal style={rd(i * 90)}>
              <h3>{d.title}</h3>
              <p>{d.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Growth Opportunities */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 20 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ flexShrink: 0, marginTop: 2 }}>
            <rect x="6" y="6" width="28" height="28" rx="4" stroke="#176E79" strokeWidth="2" fill="none" />
            <path d="M12 28l5-6 4 3 7-11" stroke="#176E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="28" cy="14" r="2.5" fill="#176E79" />
          </svg>
          <h2 style={{ margin: 0 }}>Growth Opportunities</h2>
        </div>
        <p>
          Several macroeconomic and policy trends are creating expanded opportunities for pharmaceutical supply across the Middle East and Africa. Government investment in healthcare infrastructure, population growth, rising chronic disease prevalence, and increasing health insurance coverage are driving sustained demand growth across the region.
        </p>
        <p>
          The African Continental Free Trade Area (AfCFTA) is progressively reducing barriers to intra-African trade, creating potential for streamlined cross-border pharmaceutical supply. Concurrently, regional regulatory harmonisation initiatives, including the East African Community's joint registration framework and the ECOWAS harmonisation programme, are simplifying multi-country registration for products that meet agreed standards.
        </p>
        <p>
          In the GCC, government strategies such as Saudi Arabia's Vision 2030 and the UAE's pharmaceutical sector development programmes are driving investment in local manufacturing capacity, encouraging technology transfer partnerships, and creating new procurement opportunities for international pharmaceutical suppliers.
        </p>
        <div className="two-col" style={{ marginTop: 24 }}>
          <div className="card" data-reveal style={rd(0)}>
            <h3 style={{ color: "var(--navy)" }}>Regulatory Convergence</h3>
            <p>
              The establishment of the African Medicines Agency (AMA) and advancing GCC harmonisation initiatives are creating more predictable regulatory environments. Salus Vita monitors these developments to identify when streamlined pathways become available for specific product categories and market combinations.
            </p>
          </div>
          <div className="card" data-reveal style={rd(100)}>
            <h3 style={{ color: "var(--navy)" }}>Healthcare Infrastructure Investment</h3>
            <p>
              Significant government and private sector investment in hospital construction, primary care expansion, and pharmaceutical supply chain infrastructure is expanding the addressable market across the MEA region. These investments are creating new procurement channels and raising quality expectations for pharmaceutical supply.
            </p>
          </div>
        </div>
      </section>

      {/* Related Markets */}
      <section className="related-links" data-reveal>
        <h3>Other Markets</h3>
        <div className="related-grid">
          <Link to="/global-markets/australia-new-zealand" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h4 style={{ color: "var(--navy)", marginBottom: 4 }}>Australia & New Zealand</h4>
            <p style={{ fontSize: 14 }}>TGA and Medsafe regulatory coordination in Salus Vita's home market.</p>
          </Link>
          <Link to="/global-markets/asia-pacific" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h4 style={{ color: "var(--navy)", marginBottom: 4 }}>Asia Pacific</h4>
            <p style={{ fontSize: 14 }}>APAC market access across ASEAN, Japan, Korea, and Greater China.</p>
          </Link>
          <Link to="/global-markets/europe" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h4 style={{ color: "var(--navy)", marginBottom: 4 }}>Europe</h4>
            <p style={{ fontSize: 14 }}>EMA framework navigation and cross-border supply coordination.</p>
          </Link>
          <Link to="/capabilities/global-sourcing" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h4 style={{ color: "var(--navy)", marginBottom: 4 }}>Global Sourcing</h4>
            <p style={{ fontSize: 14 }}>International supplier assessment and procurement coordination.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" data-reveal>
        <div className="cta-card">
          <h2>Exploring Middle East and African Markets?</h2>
          <p>
            Discuss your MEA market objectives with our team. We can assess regulatory requirements, evaluate partnership opportunities, and coordinate the market entry activities needed to establish supply in your target jurisdictions.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Discuss MEA Opportunities</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
