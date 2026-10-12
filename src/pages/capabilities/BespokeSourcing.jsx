import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

export default function BespokeSourcing() {
  return (
    <>
      <PageHero
        eyebrow="CAPABILITIES"
        title="Bespoke Sourcing"
        description="Salus Vita manages customer-specific, complex procurement requirements that fall outside standard sourcing pathways, applying structured feasibility assessment, custom supply solutions, and dedicated project management to deliver results."
        breadcrumbs={[
          { label: "Capabilities", path: "/capabilities" },
          { label: "Bespoke Sourcing" },
        ]}
        primaryCTA={{ label: "Submit a Bespoke Request", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "View All Capabilities", to: "/capabilities" }}
      />

      {/* Requirement Analysis */}
      <section className="content-section" data-reveal>
        <h2>Requirement Analysis</h2>
        <div className="two-col">
          <div>
            <p>
              Not every pharmaceutical sourcing requirement fits a standard procurement pathway. Some
              products are difficult to locate due to limited global manufacturing capacity. Others
              involve complex regulatory constraints, unusual specifications, or commercial conditions
              that require a tailored approach. Salus Vita's bespoke sourcing service is designed for
              these situations.
            </p>
            <p>
              Each bespoke engagement begins with a thorough analysis of the client's requirement. Our
              team works with the client to develop a detailed brief that covers the product specification,
              target market regulatory context, volume requirements, acceptable lead times, and any
              constraints relating to manufacturer geography, intellectual property, or commercial terms.
            </p>
            <p>
              This requirement analysis is critical to the success of the sourcing engagement. A clear,
              well-defined brief allows us to conduct a focused search and present the client with
              options that genuinely meet their needs, rather than requiring multiple rounds of
              refinement. Where requirements are complex or evolving, we maintain an iterative dialogue
              with the client to ensure the brief remains current throughout the engagement.
            </p>
          </div>
          <div>
            <div className="card" data-reveal style={{ "--rd": "100ms" }}>
              <h3>Detailed Product Brief</h3>
              <p>
                Comprehensive specification development covering pharmacopoeial standards, dosage form,
                strength, packaging, and any market-specific requirements.
              </p>
            </div>
            <div className="card" data-reveal style={{ "--rd": "180ms", marginTop: 16 }}>
              <h3>Constraint Mapping</h3>
              <p>
                Identification and documentation of all constraints that will shape the sourcing
                approach, including regulatory, commercial, IP, and geographic factors.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Feasibility Assessment */}
      <section className="content-section" data-reveal>
        <h2>Feasibility Assessment</h2>
        <p>
          Before committing resources to a full sourcing programme, Salus Vita conducts a feasibility
          assessment to determine whether the requirement can realistically be met within the client's
          parameters. This assessment draws on our market knowledge, manufacturer relationships, and
          regulatory expertise to evaluate the likelihood of identifying a viable supply source.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {[
            {
              title: "Market Availability Assessment",
              desc: "Evaluation of the number and capability of known manufacturers globally, including those not currently in our network, to determine whether suitable production capacity exists for the required product.",
            },
            {
              title: "Regulatory Pathway Review",
              desc: "Assessment of the regulatory pathways available in the target market, including whether the product can be registered, imported under special access provisions, or supplied through alternative channels.",
            },
            {
              title: "Commercial Viability Analysis",
              desc: "Evaluation of whether the likely cost of supply, including manufacturing, documentation, logistics, and regulatory costs, is compatible with the client's commercial expectations and market pricing.",
            },
          ].map((item, i) => (
            <div key={item.title} className="card" data-reveal style={{ "--rd": `${i * 90}ms` }}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 24 }}>
          The feasibility assessment provides clients with an honest appraisal of the sourcing
          landscape before they commit to a full engagement. Where feasibility is confirmed, the
          assessment also provides the foundation for a structured sourcing plan. Where significant
          obstacles are identified, we advise on potential alternatives or modifications to the
          requirement that could improve the likelihood of success.
        </p>
      </section>

      {/* Custom Supply Solutions */}
      <section className="content-section" data-reveal>
        <h2>Custom Supply Solutions</h2>
        <div className="two-col">
          <div>
            <p>
              When a bespoke sourcing engagement proceeds to the supply phase, Salus Vita develops
              a custom supply solution tailored to the specific circumstances of the requirement. This
              may involve identifying and qualifying a new manufacturer, negotiating non-standard
              commercial arrangements, coordinating specialised documentation, or structuring a supply
              pathway that accommodates unusual regulatory or logistical constraints.
            </p>
            <p>
              The range of situations we address through bespoke sourcing includes products with limited
              global manufacturers, shortage products requiring rapid alternative supply identification,
              legacy or discontinued products, products with complex intellectual property considerations,
              and requirements involving unusual dosage forms, strengths, or packaging configurations.
            </p>
            <p>
              Each solution is developed in consultation with the client and presented with a clear
              outline of the proposed supply pathway, including the identified manufacturer, commercial
              terms, regulatory implications, documentation requirements, and estimated timelines. We
              do not proceed with procurement until the client has reviewed and approved the proposed
              solution.
            </p>
          </div>
          <div>
            <div className="card" data-reveal style={{ "--rd": "100ms" }}>
              <h3>Shortage and Discontinuation Response</h3>
              <p>
                Rapid identification and qualification of alternative supply sources during drug
                shortages or following manufacturer discontinuation decisions.
              </p>
            </div>
            <div className="card" data-reveal style={{ "--rd": "180ms", marginTop: 16 }}>
              <h3>Niche and Orphan Products</h3>
              <p>
                Sourcing of low-volume active ingredients and specialty products with limited
                global manufacturing capacity and few established supply channels.
              </p>
            </div>
            <div className="card" data-reveal style={{ "--rd": "260ms", marginTop: 16 }}>
              <h3>Complex IP Landscapes</h3>
              <p>
                Navigation of sourcing requirements where intellectual property considerations
                constrain the selection of eligible manufacturers or supply jurisdictions.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Project Management */}
      <section className="content-section" data-reveal>
        <h2>Project Management</h2>
        <p>
          Bespoke sourcing engagements are managed as dedicated projects, with a defined scope,
          timeline, and assigned team. Salus Vita provides structured project management throughout
          the engagement, ensuring that the client has visibility into progress, decisions, and any
          issues that require their input.
        </p>
        <p>
          Project management activities include regular progress reporting, milestone tracking,
          risk identification and mitigation planning, and coordination of all parties involved in
          the supply solution. For complex engagements that span multiple months or involve multiple
          workstreams, we establish formal project governance arrangements with the client.
        </p>
        <p>
          All bespoke sourcing engagements are conducted under strict confidentiality arrangements.
          Client product strategies, sourcing intelligence, and commercial terms are treated as
          confidential information and are not disclosed to any party without explicit authorisation.
        </p>
      </section>

      {/* Related Capabilities */}
      <section className="content-section" data-reveal>
        <h3>Related Capabilities</h3>
        <div className="feature-grid" style={{ marginTop: 16 }}>
          <Link to="/capabilities/global-sourcing" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>Global Sourcing</h3>
            <p>Identifying and evaluating manufacturers across international markets for standard and specialised requirements.</p>
          </Link>
          <Link to="/capabilities/international-procurement" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>International Procurement</h3>
            <p>Coordinating quotations, negotiations, and contract structuring once a supply source has been identified.</p>
          </Link>
          <Link to="/capabilities/technical-documentation" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>Technical Documentation</h3>
            <p>Coordinating the specialised documentation packages often required for bespoke and niche pharmaceutical products.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Get Started</span>
          <h2>Discuss Your Bespoke Sourcing Needs</h2>
          <p>
            If you have a pharmaceutical sourcing requirement that falls outside standard channels,
            our team can assess the feasibility and develop a tailored solution. Submit an enquiry
            to begin.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Submit a Bespoke Request</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
