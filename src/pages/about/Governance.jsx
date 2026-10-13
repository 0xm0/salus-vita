import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const PILLARS = [
  {
    title: "Supply Chain Integrity",
    desc: "Structured oversight of manufacturer assessment, documentation review, and logistics coordination to ensure every transaction meets defined quality and compliance thresholds.",
  },
  {
    title: "Commercial Ethics",
    desc: "Clear policies governing commercial negotiations, pricing transparency, conflict of interest management, and fair dealing with all manufacturer and buyer partners.",
  },
  {
    title: "Regulatory Compliance in Trade",
    desc: "Systematic adherence to pharmaceutical trade regulations across every jurisdiction in which Salus Vita facilitates transactions, with documented processes for each market.",
  },
]

const COMPLIANCE_AREAS = [
  {
    title: "Anti-Bribery and Corruption",
    desc: "Zero-tolerance policy aligned with Australian anti-corruption legislation and international standards including the UK Bribery Act and US FCPA. All personnel and partners are bound by clear prohibitions on facilitation payments, improper inducements, and corrupt practices.",
  },
  {
    title: "Trade Sanctions Compliance",
    desc: "Active monitoring of Australian, UN, US, and EU sanctions regimes. All manufacturer and buyer engagements are screened against current sanctions lists before transactions are facilitated, with ongoing monitoring throughout the relationship.",
  },
  {
    title: "Pharmaceutical Regulatory Adherence",
    desc: "Working knowledge of regulatory frameworks maintained across every jurisdiction in which Salus Vita coordinates transactions. Regulatory requirements are documented and verified for each cross-border engagement.",
  },
  {
    title: "Code of Conduct",
    desc: "A formal Code of Conduct applies to all Salus Vita personnel, contractors, and commercial partners. The Code sets expectations for ethical behaviour, confidentiality, lawful conduct, and the reporting of concerns through established channels.",
  },
]

export default function Governance() {
  return (
    <>
      <PageHero
        eyebrow="GOVERNANCE"
        title="Corporate Governance"
        description="Supply chain integrity, commercial ethics, and regulatory compliance across every jurisdiction we operate in."
        breadcrumbs={[{ label: "About", path: "/about" }, { label: "Governance" }]}
        primaryCTA={{ label: "Discuss Your Requirements", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "Leadership", to: "/about/leadership" }}
      />

      {/* Business Structure */}
      <section className="content-section" data-reveal>
        <h2>Business Structure</h2>
        <div className="two-col">
          <div>
            <p>
              Salus Vita Pty Ltd is an Australian proprietary limited company headquartered
              in Melbourne, Victoria. The company operates as an international pharmaceutical
              sourcing, procurement, and supply coordination business - facilitating transactions
              between overseas manufacturers and buyers across multiple jurisdictions.
            </p>
            <p>
              The company's directors set the strategic direction and maintain oversight of
              operational performance, risk management, and compliance. Day-to-day operations
              are conducted within a clear framework of accountability appropriate to the
              company's size and scope.
            </p>
          </div>
          <div>
            <p>
              As a sourcing and procurement coordinator rather than a manufacturer or
              distributor, Salus Vita's governance framework is specifically designed
              around the risks and responsibilities inherent in facilitating international
              pharmaceutical trade. This includes oversight of supplier assessment processes,
              cross-border regulatory compliance, commercial ethics, and the integrity of
              documentation that accompanies every transaction.
            </p>
            <p>
              Key governance documents - including the Code of Conduct, Whistleblower
              Policy, and Anti-Bribery Policy - are reviewed regularly to ensure they
              reflect current regulatory expectations and industry best practice.
            </p>
          </div>
        </div>
      </section>

      {/* Governance Pillars */}
      <section className="content-section" data-reveal style={rd(100)}>
        <h2>Governance Pillars</h2>
        <p>
          Three core governance priorities reflect the nature of Salus Vita's role as a
          pharmaceutical supply coordinator operating across international markets.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24, marginTop: 24 }}>
          {PILLARS.map((p, i) => (
            <div key={p.title} className="card" data-reveal style={rd(i * 80)}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Compliance Culture */}
      <section className="content-section" data-reveal style={rd(200)}>
        <h2>Compliance Culture</h2>
        <p>
          Compliance at Salus Vita is not treated as a separate function. It is embedded
          in the way every engagement is structured, every manufacturer is assessed, and every
          transaction is documented. All personnel are expected to understand their compliance
          obligations, and compliance performance is reviewed regularly by the company's
          directors.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))", gap: 24, marginTop: 24 }}>
          {COMPLIANCE_AREAS.map((c, i) => (
            <div key={c.title} className="card" data-reveal style={rd(i * 70)}>
              <h3>{c.title}</h3>
              <p>{c.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Ethical Framework */}
      <section className="content-section" data-reveal style={rd(300)}>
        <h2>Ethical Framework</h2>
        <div className="two-col">
          <div>
            <p>
              Salus Vita's ethical framework is built on the principle that trust is the
              foundation of every successful pharmaceutical supply relationship. Our
              manufacturers trust us to represent their capabilities accurately. Our
              buyers trust us to coordinate quality-assured products. And the patients who
              ultimately depend on reliable pharmaceutical supply trust the integrity of
              the entire chain.
            </p>
            <p>
              Transparency in commercial dealings is a non-negotiable standard. We disclose
              our role, our commercial interest, and our processes clearly to all parties.
              There are no undisclosed intermediaries and no hidden arrangements in any
              transaction Salus Vita facilitates.
            </p>
          </div>
          <div>
            <p>
              We maintain a zero-tolerance position on counterfeit, substandard, or falsified
              pharmaceutical products. Every manufacturer in our network is assessed against
              defined quality criteria, and any indication of compromised product quality
              results in immediate suspension of the relationship pending investigation.
            </p>
            <p>
              Fair treatment of manufacturer partners is central to our approach. We do not
              engage in exploitative commercial practices, and we expect reciprocal fairness
              from every party in our network. This principle extends to payment terms,
              contractual obligations, and the resolution of commercial disputes.
            </p>
          </div>
        </div>
      </section>

      {/* Quality Oversight */}
      <section className="content-section" data-reveal style={rd(400)}>
        <h2>Quality Oversight</h2>
        <p>
          While Salus Vita does not manufacture pharmaceutical products or hold GMP
          certifications, quality oversight is central to our governance framework. Our
          role as a sourcing and procurement coordinator requires us to assess, verify,
          and continuously monitor the quality credentials of the manufacturers we engage with.
        </p>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: 24, marginTop: 24 }}>
          {[
            {
              title: "Supplier Assessment Framework",
              desc: "A structured, documented assessment process evaluates every manufacturer against defined criteria including GMP certification status, regulatory inspection history, product quality track record, and documentation capability before any commercial engagement is facilitated.",
            },
            {
              title: "Documentation Review",
              desc: "Certificates of analysis, GMP certificates, stability data, regulatory dossiers, and other technical documentation are reviewed for completeness, currency, and consistency before being coordinated between manufacturer and buyer.",
            },
            {
              title: "Ongoing Monitoring",
              desc: "Manufacturer relationships are subject to ongoing review. Changes in GMP status, regulatory actions, product quality issues, or commercial conduct trigger reassessment under defined escalation procedures.",
            },
          ].map((item, i) => (
            <div key={item.title} className="card" data-reveal style={rd(i * 80)}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Work With Confidence</span>
          <h2>Partner with a Governance-Led Pharmaceutical Sourcing Company</h2>
          <p>
            Our governance framework is designed to give manufacturers and buyers confidence
            that every transaction Salus Vita coordinates meets the highest standards of
            integrity, compliance, and ethical conduct.
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
          <Link to="/about/responsibility">Responsibility</Link>
          <Link to="/about/why-salus-vita">Why Salus Vita</Link>
          <Link to="/about/careers">Careers</Link>
        </div>
      </section>
    </>
  )
}
