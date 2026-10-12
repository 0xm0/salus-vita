import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const rd = (ms) => ({ "--rd": `${ms}ms` })

const PROCESS_STEPS = [
  {
    title: "Scope Definition",
    desc: "Detailed requirement analysis covering product specifications, target market regulations, volume requirements, and timeline constraints.",
  },
  {
    title: "Source Identification",
    desc: "Targeted search across qualified manufacturer networks, using regulatory databases and industry intelligence to identify viable counterparties.",
  },
  {
    title: "Risk Evaluation",
    desc: "Comprehensive assessment of supply chain risk factors including geopolitical exposure, single-source dependency, and regulatory vulnerability.",
  },
  {
    title: "Ongoing Oversight",
    desc: "Continuous monitoring of supplier performance, regulatory standing, and market conditions throughout the engagement lifecycle.",
  },
]

export default function SpecialistProcurement() {
  return (
    <>
      <PageHero
        eyebrow="PHARMACEUTICAL SOLUTIONS"
        title="Specialist Procurement"
        description="Coordinating procurement for complex, high-risk, and hard-to-source pharmaceutical products through enhanced due diligence, rigorous counterparty assessment, and dedicated project management."
        breadcrumbs={[{ label: "Solutions", path: "/solutions" }, { label: "Specialist Procurement" }]}
        primaryCTA={{ label: "Discuss Your Requirements", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "View All Solutions", to: "/solutions" }}
      />

      {/* Intro */}
      <section className="content-section" data-reveal>
        <div className="two-col">
          <div>
            <h2>When Standard Sourcing Is Not Enough</h2>
            <p>
              Certain pharmaceutical products present sourcing challenges that extend well beyond routine procurement.
              Controlled substances, orphan designations, products with limited global manufacturing capacity, and
              items requiring cold-chain or specialised handling all demand a heightened level of diligence,
              regulatory awareness, and project coordination.
            </p>
            <p>
              Salus Vita's specialist procurement service is designed for these situations. We apply additional
              layers of counterparty assessment, regulatory verification, and risk management to ensure that
              complex sourcing requirements are met with the same reliability and compliance rigour as
              standard engagements, while addressing the unique challenges each product category presents.
            </p>
          </div>
          <div>
            <div className="card" data-reveal style={rd(100)}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              <h3 style={{ marginTop: 16 }}>Enhanced Diligence</h3>
              <p>Every specialist engagement includes additional verification steps beyond our standard supplier qualification process.</p>
            </div>
            <div className="card" data-reveal style={{ ...rd(200), marginTop: 16 }}>
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              <h3 style={{ marginTop: 16 }}>Dedicated Coordination</h3>
              <p>A named project lead manages each specialist engagement from initial scoping through to completed delivery.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Risk Assessment */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 4 }}>
            <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z"/>
            <line x1="12" y1="9" x2="12" y2="13"/>
            <line x1="12" y1="17" x2="12.01" y2="17"/>
          </svg>
          <h2 style={{ margin: 0 }}>Risk Assessment</h2>
        </div>
        <p>
          Every specialist procurement engagement begins with a structured risk assessment that evaluates
          the full spectrum of factors that could affect supply reliability, regulatory compliance, and
          product integrity. This assessment informs the engagement strategy, counterparty selection criteria,
          and the level of ongoing oversight applied throughout the project.
        </p>
        <p>
          Risk dimensions include product classification and scheduling status, manufacturing complexity and
          geographic concentration of supply, regulatory requirements in both the source and destination
          jurisdictions, shelf-life and storage constraints, and the commercial sensitivity of the requirement.
          Where elevated risk is identified, Salus Vita recommends mitigation strategies such as dual-sourcing,
          pre-shipment independent testing, or phased qualification before committing to full-scale supply.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {[
            { title: "Regulatory Risk", desc: "Assessment of scheduling status, controlled substance classifications, import/export licensing requirements, and market-specific restrictions." },
            { title: "Supply Continuity Risk", desc: "Evaluation of manufacturing capacity, geographic concentration, lead times, and vulnerability to disruption from single-source dependency." },
            { title: "Product Integrity Risk", desc: "Analysis of storage requirements, cold-chain needs, shelf-life constraints, and handling protocols that affect product quality during transit." },
          ].map((item, i) => (
            <div key={item.title} className="card" data-reveal style={rd(i * 90)}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Qualified Counterparties */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 4 }}>
            <path d="M16 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/>
            <circle cx="8.5" cy="7" r="4"/>
            <polyline points="17 11 19 13 23 9"/>
          </svg>
          <h2 style={{ margin: 0 }}>Qualified Counterparties</h2>
        </div>
        <p>
          For specialist procurement, counterparty qualification extends beyond standard GMP verification. Salus
          Vita assesses each potential supplier against an expanded set of criteria tailored to the specific risk
          profile of the product and transaction. This includes verification of relevant controlled substance
          licences, orphan drug designations, facility certifications for specialised manufacturing processes,
          and the counterparty's track record with comparable products and markets.
        </p>
        <p>
          Where a product requirement falls outside our existing qualified network, we conduct targeted
          identification and due diligence on new counterparties. This process includes desktop assessment
          of regulatory standing, review of inspection history with relevant authorities, evaluation of
          quality management system documentation, and, where warranted, coordination of independent
          on-site assessment. Only counterparties that satisfy all applicable qualification criteria
          are progressed to commercial engagement.
        </p>
        <p>
          For controlled substances, Salus Vita verifies that all counterparties hold the appropriate
          licences issued by their national competent authority and that proposed transaction volumes
          align with International Narcotics Control Board (INCB) estimates and quotas. This verification
          is completed before any commercial terms are agreed.
        </p>
      </section>

      {/* Specialist Advisory */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 4 }}>
            <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/>
            <path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
          </svg>
          <h2 style={{ margin: 0 }}>Specialist Advisory</h2>
        </div>
        <p>
          Complex procurement often involves regulatory and commercial questions that require specialist
          knowledge beyond routine pharmaceutical sourcing. Salus Vita provides advisory support across
          controlled substance scheduling, orphan drug access pathways, cold-chain logistics design, and
          cross-border regulatory strategy for products subject to market-specific restrictions or conditions.
        </p>
        <p>
          Our advisory approach is practical and engagement-specific. Rather than providing generic regulatory
          summaries, we focus on the particular requirements of each transaction: identifying the licences,
          permits, and documentation needed, mapping the regulatory pathway in each relevant jurisdiction,
          and advising on timeline and sequencing to avoid delays. Where a requirement falls outside our
          internal expertise, we coordinate with specialist regulatory consultants and legal advisors
          who have direct experience with the product category and target markets.
        </p>
        <div className="two-col" style={{ marginTop: 24 }}>
          <div className="card" data-reveal style={rd(80)}>
            <h3>Controlled Substance Advisory</h3>
            <p>
              Guidance on INCB frameworks, national narcotics authority requirements, import/export
              permit sequencing, and secure logistics for scheduled products across Schedules II through V.
            </p>
          </div>
          <div className="card" data-reveal style={rd(160)}>
            <h3>Orphan and Rare Disease Access</h3>
            <p>
              Navigation of orphan drug designation requirements, special access scheme eligibility, and
              cross-border supply arrangements for products with limited commercial availability.
            </p>
          </div>
        </div>
      </section>

      {/* Project Coordination */}
      <section className="content-section" data-reveal>
        <div style={{ display: "flex", alignItems: "flex-start", gap: 16, marginBottom: 16 }}>
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 4 }}>
            <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/>
          </svg>
          <h2 style={{ margin: 0 }}>Project Coordination</h2>
        </div>
        <p>
          Specialist procurement engagements are managed as discrete projects, each with a named Salus Vita
          project lead responsible for coordinating all parties, managing timelines, and maintaining
          communication across the engagement lifecycle. This structured approach ensures that the
          additional complexity inherent in specialist sourcing does not introduce gaps in oversight
          or accountability.
        </p>
        <p>
          The project lead serves as a single point of contact for the client, consolidating updates from
          manufacturers, logistics providers, regulatory consultants, and quality assurance personnel into
          regular status reporting. Milestone tracking, risk register maintenance, and escalation protocols
          are established at the outset of each engagement and maintained through to delivery completion.
        </p>

        <h3 style={{ marginTop: 24, marginBottom: 16, color: "var(--navy)" }}>Engagement Lifecycle</h3>
        <div className="feature-grid">
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.title} className="card" data-reveal style={rd(i * 90)}>
              <span style={{ display: "inline-block", width: 28, height: 28, borderRadius: "50%", background: "var(--teal)", color: "#fff", textAlign: "center", lineHeight: "28px", fontWeight: 700, fontSize: 14, marginBottom: 8 }}>
                {i + 1}
              </span>
              <h3>{step.title}</h3>
              <p>{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Related Solutions */}
      <section className="related-links" data-reveal>
        <h3>Related Solutions</h3>
        <div className="related-grid">
          <Link to="/solutions/apis">Active Pharmaceutical Ingredients</Link>
          <Link to="/solutions/finished-dosage-forms">Finished Dosage Forms</Link>
          <Link to="/solutions/managed-access">Managed Access Programs</Link>
          <Link to="/capabilities/bespoke-sourcing">Bespoke Sourcing</Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner" data-reveal>
        <div className="cta-card">
          <h2>Complex Sourcing Requirement?</h2>
          <p>
            Our specialist procurement team can assess your requirement and recommend
            the right approach for complex, high-risk, or hard-to-source products.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Discuss Your Requirement</Link>
          </div>
        </div>
      </section>
    </>
  )
}
