import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const PATHWAYS = [
  {
    title: "TGA Special Access Scheme",
    desc: "Category A (serious conditions, informed consent), Category B (individual notification to TGA), and Category C (specific product classes) each carry distinct documentation, approval, and reporting obligations.",
  },
  {
    title: "Section 19A Approvals",
    desc: "Permits the importation and supply of therapeutic goods that are not included in the Australian Register of Therapeutic Goods, subject to conditions determined by the Secretary of the Department of Health.",
  },
  {
    title: "Authorised Prescriber Pathway",
    desc: "Enables approved prescribers to access specific unapproved therapeutic goods for classes of patients within their clinical practice, under TGA oversight and with ethics committee endorsement.",
  },
  {
    title: "Named-Patient Programs",
    desc: "Individual patient access frameworks operating across multiple jurisdictions, coordinating prescriber documentation, import authorisation, and compliant distribution for a single identified patient.",
  },
]

export default function ManagedAccess() {
  return (
    <>
      <PageHero
        eyebrow="PHARMACEUTICAL SOLUTIONS"
        title="Managed Access Programs"
        description="Regulatory pathway coordination for TGA Special Access, Section 19A provisions, and international named-patient programs."
        breadcrumbs={[
          { label: "Solutions", path: "/solutions" },
          { label: "Managed Access Programs" },
        ]}
        primaryCTA={{ label: "Enquire About Access Pathways", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "View All Solutions", to: "/solutions" }}
      />

      {/* Regulatory Pathways */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ flexShrink: 0, marginTop: 4 }}>
            <rect width="40" height="40" rx="8" fill="#E9F0F2" />
            <path d="M12 14h16M12 20h16M12 26h10" stroke="#176E79" strokeWidth="2" strokeLinecap="round" />
            <circle cx="28" cy="26" r="4" stroke="#15324A" strokeWidth="2" />
            <path d="M31 29l2 2" stroke="#15324A" strokeWidth="2" strokeLinecap="round" />
          </svg>
          <h2 style={{ margin: 0 }}>Regulatory Pathways</h2>
        </div>
        <p>
          Managed access refers to the established regulatory mechanisms through which prescribers may
          lawfully access therapeutic goods that are not currently registered or listed on a national
          medicines register. These pathways exist within defined legal frameworks and are subject to
          the oversight of the relevant regulatory authority in each jurisdiction.
        </p>
        <p>
          Salus Vita coordinates the administrative and logistical requirements associated with these
          pathways. Our role is to facilitate the process between prescribers, regulatory authorities,
          and product holders, ensuring that all documentation, notifications, and approvals are
          completed in accordance with the applicable legislation. We do not assess or make
          representations regarding the therapeutic merit of any product accessed through these schemes.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {PATHWAYS.map((p, i) => (
            <div key={p.title} className="card" data-reveal style={rd(i * 90)}>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Access Frameworks */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ flexShrink: 0, marginTop: 4 }}>
            <rect width="40" height="40" rx="8" fill="#E9F0F2" />
            <path d="M20 10v6l4 2" stroke="#176E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <circle cx="20" cy="10" r="0" />
            <rect x="10" y="22" width="8" height="8" rx="2" stroke="#15324A" strokeWidth="2" />
            <rect x="22" y="22" width="8" height="8" rx="2" stroke="#15324A" strokeWidth="2" />
            <path d="M14 22v-4h12v4" stroke="#176E79" strokeWidth="2" />
            <path d="M20 12v6" stroke="#176E79" strokeWidth="2" />
          </svg>
          <h2 style={{ margin: 0 }}>Access Frameworks</h2>
        </div>
        <p>
          Each jurisdiction maintains its own framework for permitting access to therapeutic goods
          outside standard registration channels. In Australia, the Therapeutic Goods Act 1989 and
          its associated regulations establish the legal basis for the Special Access Scheme, the
          Authorised Prescriber pathway, and Section 19A provisions. Internationally, equivalent
          frameworks operate under different nomenclature but share similar principles of regulatory
          oversight and prescriber accountability.
        </p>
        <p>
          Salus Vita maintains current working knowledge of these frameworks across the markets in
          which we operate. Our coordination team monitors regulatory updates, changes to
          notification requirements, and evolving documentation standards to ensure that every
          access request is processed in accordance with the most current requirements. This
          includes tracking changes to TGA reporting obligations under Category A and Category B
          of the Special Access Scheme, as well as parallel frameworks administered by Medsafe in
          New Zealand and other regional regulators.
        </p>
        <div className="two-col" style={{ marginTop: 24 }}>
          <div className="card" data-reveal style={rd(0)}>
            <h3>Australian Frameworks</h3>
            <p>
              TGA Special Access Scheme (Categories A, B, and C), Section 19A exemptions,
              Authorised Prescriber pathway, and Clinical Trial Notification / Clinical Trial
              Approval schemes under the CTN/CTA framework. Each carries distinct regulatory
              obligations for the prescriber and any parties involved in the supply chain.
            </p>
          </div>
          <div className="card" data-reveal style={rd(90)}>
            <h3>International Frameworks</h3>
            <p>
              Named-patient import schemes, compassionate use provisions under EU regulations,
              and equivalent frameworks across Asia-Pacific jurisdictions. Salus Vita coordinates
              the cross-border logistics, import licensing, and documentation requirements that
              connect these frameworks with product holders in other territories.
            </p>
          </div>
        </div>
      </section>

      {/* Patient Access Coordination */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ flexShrink: 0, marginTop: 4 }}>
            <rect width="40" height="40" rx="8" fill="#E9F0F2" />
            <circle cx="20" cy="15" r="5" stroke="#15324A" strokeWidth="2" />
            <path d="M11 30c0-5 4-9 9-9s9 4 9 9" stroke="#176E79" strokeWidth="2" strokeLinecap="round" />
            <path d="M26 18l4-4M26 14l4 4" stroke="#15324A" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <h2 style={{ margin: 0 }}>Patient Access Coordination</h2>
        </div>
        <p>
          The administrative requirements of managed access pathways can be substantial. For a single
          patient access request, the process may involve prescriber applications to the relevant
          regulatory authority, informed consent documentation, import permit applications, customs
          clearance, cold-chain logistics coordination, and post-supply reporting. Each step must
          be completed accurately and in sequence.
        </p>
        <p>
          Salus Vita acts as a coordination point for these processes, working alongside the prescribing
          clinician, the product holder or manufacturer, licensed importers, and the regulatory authority.
          Our role is to manage the procedural and logistical elements so that the prescriber can focus on
          clinical decision-making and patient care. We do not influence prescribing decisions, recommend
          specific products, or represent the therapeutic suitability of any good accessed through these
          pathways.
        </p>
        <p>
          For ongoing access arrangements, we establish repeatable workflows that reduce administrative
          burden on healthcare providers. This includes maintaining current documentation templates,
          tracking approval validity periods, coordinating re-supply logistics, and managing the
          notification and reporting requirements that accompany each access event.
        </p>
      </section>

      {/* Compliance & Documentation */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="40" height="40" viewBox="0 0 40 40" fill="none" style={{ flexShrink: 0, marginTop: 4 }}>
            <rect width="40" height="40" rx="8" fill="#E9F0F2" />
            <path d="M14 10h12a2 2 0 012 2v16a2 2 0 01-2 2H14a2 2 0 01-2-2V12a2 2 0 012-2z" stroke="#15324A" strokeWidth="2" />
            <path d="M17 17l2 2 4-4" stroke="#176E79" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M16 24h8M16 27h5" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
          <h2 style={{ margin: 0 }}>Compliance and Documentation</h2>
        </div>
        <p>
          Regulatory compliance is the central obligation of any managed access arrangement. The TGA
          requires detailed record-keeping for all products accessed through the Special Access Scheme,
          including prescriber notification records, patient consent documentation, product traceability
          data, and adverse event reporting. Similar obligations apply under Medsafe and other
          international frameworks.
        </p>
        <p>
          Salus Vita maintains comprehensive documentation systems designed to support full regulatory
          traceability for every managed access transaction. Our records capture the regulatory pathway
          utilised, the approval or notification reference, the product batch and origin details, the
          import and distribution chain, and all correspondence with the regulatory authority. These
          records are maintained in accordance with data integrity principles and are available to
          support regulatory audit or inspection at any time.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {[
            {
              title: "Regulatory Traceability",
              desc: "End-to-end documentation linking each access event to its regulatory pathway, approval reference, and reporting obligations.",
            },
            {
              title: "Audit Readiness",
              desc: "Records maintained to data-integrity standards, structured for rapid retrieval in the event of regulatory inspection or audit.",
            },
            {
              title: "Adverse Event Reporting",
              desc: "Coordination of post-supply adverse event reporting in accordance with TGA, Medsafe, and other jurisdictional pharmacovigilance requirements.",
            },
          ].map((item, i) => (
            <div key={item.title} className="card" data-reveal style={rd(i * 90)}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Important Notice */}
      <section className="content-section" data-reveal>
        <div className="card" style={{ borderLeft: "4px solid #176E79", background: "#F6F8F9" }}>
          <h3 style={{ color: "var(--navy)", marginTop: 0 }}>Important Notice</h3>
          <p style={{ fontSize: 14, lineHeight: 1.7, color: "#4A5568" }}>
            Salus Vita does not manufacture, distribute, or make representations regarding the safety,
            efficacy, or therapeutic suitability of any product accessed through managed access pathways.
            All clinical decisions, including the decision to seek access to an unapproved or unregistered
            therapeutic good, remain the responsibility of the prescribing clinician. Managed access
            pathways operate under the regulatory oversight of the relevant national authority, and access
            to any product through these schemes does not constitute or imply regulatory approval.
          </p>
        </div>
      </section>

      {/* Related Solutions */}
      <section className="content-section" data-reveal>
        <h3>Related Solutions</h3>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {[
            {
              title: "Active Pharmaceutical Ingredients",
              desc: "Coordinating API sourcing from assessed manufacturers for research, manufacturing, and institutional requirements.",
              to: "/solutions/apis",
            },
            {
              title: "Finished Dosage Forms",
              desc: "Facilitating access to finished pharmaceutical products from qualified external manufacturers across global markets.",
              to: "/solutions/finished-dosage-forms",
            },
            {
              title: "Specialist Procurement",
              desc: "Complex procurement coordination for products requiring additional regulatory, quality, or logistical diligence.",
              to: "/solutions/specialist-procurement",
            },
            {
              title: "Cross-Border Supply",
              desc: "International supply chain coordination across regulatory jurisdictions, import frameworks, and distribution requirements.",
              to: "/capabilities/cross-border-supply",
            },
          ].map((s, i) => (
            <Link
              to={s.to}
              key={s.title}
              className="card"
              data-reveal
              style={{ ...rd(i * 90), textDecoration: "none", color: "inherit" }}
            >
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
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
          <h2>Need Assistance with a Managed Access Pathway?</h2>
          <p>
            Our coordination team can guide you through the regulatory requirements, documentation
            obligations, and logistical considerations for your specific access scenario.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Discuss Access Pathways</Link>
          </div>
        </div>
      </section>
    </>
  )
}
