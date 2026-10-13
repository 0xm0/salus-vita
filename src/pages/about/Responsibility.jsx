import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const ESG_PILLARS = [
  {
    label: "Environmental",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M2 22c1.25-1.25 2.5-2 4-2 3 0 4 3 7 3s4-1 5-2" /><path d="M11 4C6 4 3 8 3 14" /><path d="M12 3c3.5 0 7 2 8.5 5.5" /><path d="M14 5a16 16 0 0 1 2 9" />
      </svg>
    ),
    items: [
      "Prioritising consolidated freight arrangements to reduce per-unit transport emissions",
      "Engaging logistics partners with recognised environmental certifications and sustainability programs",
      "Preferencing sea freight over air freight where product stability and timelines allow",
      "Assessing manufacturer environmental practices as part of supplier qualification",
    ],
  },
  {
    label: "Social",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87" /><path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    ),
    items: [
      "Facilitating access to pharmaceutical products in markets where conventional supply pathways are limited",
      "Coordinating sourcing for managed access and compassionate use programs where appropriate",
      "Supporting healthcare outcomes by connecting quality-assured manufacturers with buyers who serve patient populations",
      "Fostering a workplace culture built on respect, inclusion, and professional development",
    ],
  },
  {
    label: "Governance",
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" style={{ width: 28, height: 28 }}>
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10Z" /><path d="m9 12 2 2 4-4" />
      </svg>
    ),
    items: [
      "Maintaining transparent commercial practices across all manufacturer and buyer relationships",
      "Operating under a formal Code of Conduct that applies to all personnel and partners",
      "Building a culture of compliance awareness and ongoing review of governance practices",
      "Leadership-level oversight of ethical standards, risk management, and corporate responsibility",
    ],
  },
]

export default function Responsibility() {
  return (
    <>
      <PageHero
        eyebrow="RESPONSIBILITY"
        title="Corporate Responsibility"
        description="Responsibility that extends beyond commercial outcomes, to communities, manufacturing partners, and the environment."
        breadcrumbs={[{ label: "About", path: "/about" }, { label: "Responsibility" }]}
        primaryCTA={{ label: "Discuss Your Requirements", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "Governance", to: "/about/governance" }}
      />

      {/* ESG Commitments */}
      <section className="content-section" data-reveal>
        <h2>ESG Commitments</h2>
        <p>
          Salus Vita's approach to environmental, social, and governance (ESG)
          responsibility reflects the realities of our operating model. As a sourcing
          and procurement coordinator, our most significant impacts arise through our
          choice of manufacturer partners, logistics arrangements, and the standards
          we set for every transaction we facilitate.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24, marginTop: 24 }}>
          {ESG_PILLARS.map((pillar, i) => (
            <div key={pillar.label} className="card" data-reveal style={rd(i * 90)}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
                <span style={{ color: "var(--teal)" }}>{pillar.icon}</span>
                <h3 style={{ marginBottom: 0 }}>{pillar.label}</h3>
              </div>
              <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
                {pillar.items.map((item, j) => (
                  <li
                    key={j}
                    style={{
                      padding: "10px 0",
                      borderTop: j > 0 ? "1px solid var(--line)" : "none",
                      color: "var(--muted)",
                      fontSize: 15,
                      lineHeight: 1.6,
                      display: "flex",
                      gap: 10,
                    }}
                  >
                    <span style={{ color: "var(--teal)", fontWeight: 700, flexShrink: 0 }}>-</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      {/* Ethical Supply Chain Practices */}
      <section className="content-section" data-reveal style={rd(100)}>
        <h2>Ethical Supply Chain Practices</h2>
        <div className="two-col">
          <div>
            <p>
              Salus Vita is committed to preventing modern slavery, forced labour, human
              trafficking, and exploitative labour practices within its operations and
              across its supply chain. We are building our compliance framework with
              reference to the Australian Modern Slavery Act 2018, and we are committed
              to meeting modern slavery reporting obligations as the company grows.
            </p>
            <p>
              As a company that coordinates transactions between overseas pharmaceutical
              manufacturers and international buyers, we recognise that our supply chain
              carries inherent risks related to labour practices in manufacturing
              jurisdictions. We take these risks seriously and are developing structured
              due diligence processes, contractual requirements, and ongoing engagement
              practices with our manufacturer partners.
            </p>
          </div>
          <div>
            <p>
              Our approach includes assessing manufacturer labour practices as part of
              our supplier qualification framework, requiring adherence to ethical
              sourcing standards, and monitoring for indicators of forced or exploitative
              labour. Where concerns arise, we engage directly with the manufacturer
              and, where necessary, suspend the relationship pending investigation.
            </p>
            <p>
              As Salus Vita grows, we intend to formalise and expand these practices
              in line with Australian legislative requirements. Personnel receive
              guidance on modern slavery risks relevant to international pharmaceutical
              supply chains, including how to identify and escalate concerns.
            </p>
          </div>
        </div>
      </section>

      {/* Responsible Sourcing */}
      <section className="content-section" data-reveal style={rd(200)}>
        <h2>Responsible Sourcing</h2>
        <p>
          Responsible sourcing is fundamental to Salus Vita's operating model. We only
          facilitate transactions with manufacturers operating within regulated
          frameworks, and we assess each potential manufacturing partner against criteria
          that extend beyond product quality to encompass ethical and environmental
          standards.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24, marginTop: 24 }}>
          {[
            {
              title: "Regulated Manufacturers Only",
              desc: "Salus Vita engages exclusively with manufacturers operating under recognised regulatory oversight. GMP certification, regulatory inspection history, and licensing status are assessed and verified before any commercial engagement is facilitated.",
            },
            {
              title: "Labour and Working Conditions",
              desc: "Manufacturer labour practices, working conditions, and occupational health and safety standards are assessed as part of our qualification process. We seek to identify and avoid engagement with facilities that do not meet acceptable standards.",
            },
            {
              title: "Environmental Practices",
              desc: "We assess manufacturers' environmental management practices, including waste treatment, emissions controls, and compliance with local environmental regulations. Manufacturers with recognised environmental certifications are preferenced where product and commercial requirements allow.",
            },
            {
              title: "Recognised Certifications",
              desc: "Preference is given to manufacturers holding internationally recognised certifications including WHO prequalification, EU GMP, US FDA approval, PIC/S membership, or equivalent national regulatory approvals, providing an additional layer of assurance around quality and compliance.",
            },
          ].map((item, i) => (
            <div key={item.title} className="card" data-reveal style={rd(i * 80)}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Data Protection */}
      <section className="content-section" data-reveal style={rd(300)}>
        <h2>Data Protection and Privacy</h2>
        <div className="two-col">
          <div>
            <p>
              Salus Vita handles commercially sensitive information on behalf of
              manufacturers, buyers, and logistics partners across multiple jurisdictions.
              We take the protection of this information seriously, maintaining data
              handling practices that comply with the Australian Privacy Principles under
              the Privacy Act 1988 and applicable data protection laws in the jurisdictions
              in which we operate.
            </p>
            <p>
              Commercial information shared by manufacturer and buyer partners -
              including pricing, product specifications, regulatory documentation, and
              supply volumes - is treated as confidential and is not disclosed to third
              parties without explicit authorisation or legal obligation.
            </p>
          </div>
          <div>
            <p>
              Pharmaceutical regulatory documentation coordinated through Salus Vita is
              handled under defined access controls and document management procedures.
              This includes certificates of analysis, GMP certificates, stability data,
              drug master files, and other technical documents that accompany cross-border
              pharmaceutical transactions.
            </p>
            <p>
              Our data protection practices are reviewed regularly to ensure they remain
              aligned with evolving regulatory requirements and industry best practice.
              All personnel receive training on data handling obligations relevant to
              their role.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Responsible Pharmaceutical Supply</span>
          <h2>Partner with a Company That Prioritises Integrity</h2>
          <p>
            Our approach to corporate responsibility is not separate from our
            commercial operations. It is embedded in how we assess manufacturers,
            coordinate transactions, and engage with every partner in our network.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Discuss Your Requirements</Link>
          </div>
        </div>
      </section>

      <section className="related-links">
        <h3>Explore More</h3>
        <div className="related-grid">
          <Link to="/about">About Overview</Link>
          <Link to="/about/our-story">Our Story</Link>
          <Link to="/about/leadership">Leadership</Link>
          <Link to="/about/governance">Governance</Link>
          <Link to="/about/why-salus-vita">Why Salus Vita</Link>
          <Link to="/about/careers">Careers</Link>
        </div>
      </section>
    </>
  )
}
