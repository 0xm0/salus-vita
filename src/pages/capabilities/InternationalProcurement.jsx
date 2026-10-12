import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

export default function InternationalProcurement() {
  return (
    <>
      <PageHero
        eyebrow="CAPABILITIES"
        title="International Procurement"
        description="Coordinating quotations, commercial negotiations, contract structuring, and supply coordination for international pharmaceutical procurement."
        breadcrumbs={[
          { label: "Capabilities", path: "/capabilities" },
          { label: "International Procurement" },
        ]}
        primaryCTA={{ label: "Start a Procurement Enquiry", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "View All Capabilities", to: "/capabilities" }}
      />

      {/* Commercial Negotiations */}
      <section className="content-section" data-reveal>
        <h2>Commercial Negotiations</h2>
        <div className="two-col">
          <div>
            <p>
              Effective procurement of pharmaceutical products from international manufacturers requires
              structured commercial engagement. Salus Vita coordinates the quotation and negotiation
              process on behalf of clients, managing the interface between buyer requirements and
              manufacturer capabilities.
            </p>
            <p>
              Our procurement team solicits and evaluates quotations from qualified manufacturers,
              assessing each offer against a balanced set of criteria that includes pricing, quality
              assurance provisions, minimum order quantities, lead times, and payment terms. We do not
              simply select the lowest-cost option. Instead, we present clients with a structured
              comparison that accounts for total cost of procurement, including documentation, logistics,
              and regulatory compliance considerations.
            </p>
            <p>
              Where multiple manufacturers are capable of supplying the same product, we facilitate
              competitive tendering processes that give clients visibility into market pricing and the
              ability to make informed decisions based on the full picture of cost, quality, and supply
              reliability.
            </p>
          </div>
          <div>
            <div className="card" data-reveal style={{ "--rd": "100ms" }}>
              <h3>Structured Quotation Process</h3>
              <p>
                Formal solicitation and comparative evaluation of manufacturer quotations against
                defined commercial and quality criteria.
              </p>
            </div>
            <div className="card" data-reveal style={{ "--rd": "180ms", marginTop: 16 }}>
              <h3>Total Cost Assessment</h3>
              <p>
                Evaluation that accounts for product cost, documentation, freight, duties, and
                regulatory compliance to present the complete procurement picture.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contract Structuring */}
      <section className="content-section" data-reveal>
        <h2>Contract Structuring</h2>
        <p>
          Pharmaceutical supply agreements must address a range of commercial, quality, and regulatory
          considerations that are specific to the industry. Salus Vita facilitates the development of
          supply contracts that protect the interests of all parties while establishing clear terms for
          product specification, quality assurance, pricing, delivery, and dispute resolution.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {[
            {
              title: "Supply Agreements",
              desc: "Structuring of supply agreements that define product specifications, quality requirements, delivery terms, pricing mechanisms, and the obligations of each party.",
            },
            {
              title: "Quality and Technical Agreements",
              desc: "Coordination of quality agreements that establish responsibilities for product testing, release, documentation, change control, and deviation management between buyer and manufacturer.",
            },
            {
              title: "Pricing Mechanisms",
              desc: "Development of pricing structures appropriate to the commercial relationship, including fixed-price arrangements, volume-based pricing, and framework agreements for ongoing supply.",
            },
          ].map((item, i) => (
            <div key={item.title} className="card" data-reveal style={{ "--rd": `${i * 90}ms` }}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
        <p style={{ marginTop: 24 }}>
          Where multi-year supply arrangements are appropriate, Salus Vita facilitates framework
          agreements that provide pricing stability and supply continuity while maintaining the
          flexibility to accommodate market changes, regulatory developments, or evolving client
          requirements.
        </p>
      </section>

      {/* Order Planning */}
      <section className="content-section" data-reveal>
        <h2>Order Planning</h2>
        <div className="two-col">
          <div>
            <p>
              Once commercial terms are agreed, Salus Vita coordinates the operational planning
              required to execute procurement orders effectively. This includes aligning order
              quantities with manufacturing schedules, coordinating documentation timelines, and
              ensuring that all pre-shipment requirements are met before production commences.
            </p>
            <p>
              Our order planning process accounts for manufacturing lead times, regulatory documentation
              preparation, quality control testing cycles, and logistics scheduling. By coordinating
              these elements in advance, we reduce the risk of delays and ensure that orders progress
              smoothly from placement through to delivery.
            </p>
            <p>
              For clients with recurring procurement needs, we develop rolling order plans that align
              with their demand forecasts and inventory management requirements, providing manufacturers
              with the forward visibility they need to allocate production capacity.
            </p>
          </div>
          <div>
            <div className="card" data-reveal style={{ "--rd": "100ms" }}>
              <h3>Production Scheduling</h3>
              <p>
                Alignment of order placement with manufacturer production schedules to secure
                preferred production slots and minimise lead time uncertainty.
              </p>
            </div>
            <div className="card" data-reveal style={{ "--rd": "180ms", marginTop: 16 }}>
              <h3>Demand Forecasting Support</h3>
              <p>
                For ongoing supply relationships, coordination of rolling forecasts that give
                manufacturers advance visibility of expected order volumes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Supply Coordination */}
      <section className="content-section" data-reveal>
        <h2>Supply Coordination</h2>
        <p>
          Salus Vita manages the coordination of each procurement order from placement through to
          delivery. This includes monitoring production progress with the manufacturer, tracking
          quality control and documentation milestones, and coordinating with logistics providers
          to arrange shipment and customs clearance.
        </p>
        <p>
          Throughout the supply coordination process, we provide clients with regular status updates
          and proactively flag any issues that may affect delivery timelines or documentation
          completeness. Where exceptions arise, whether production delays, quality holds, or logistics
          disruptions, our team works to resolve them quickly and transparently.
        </p>
        <p>
          Post-delivery, we facilitate the resolution of any quality or documentation queries,
          coordinate returns or corrections where necessary, and capture lessons learned to improve
          the efficiency of future procurement cycles.
        </p>
      </section>

      {/* Related Capabilities */}
      <section className="content-section" data-reveal>
        <h3>Related Capabilities</h3>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          <Link to="/capabilities/global-sourcing" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>Global Sourcing</h3>
            <p>Identifying and evaluating pharmaceutical manufacturers and CDMOs across international markets.</p>
          </Link>
          <Link to="/capabilities/logistics" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>Logistics Coordination</h3>
            <p>Coordinating third-party freight, customs brokerage, and temperature-controlled transport for pharmaceutical shipments.</p>
          </Link>
          <Link to="/capabilities/cross-border-supply" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>Cross-Border Supply</h3>
            <p>Structuring overseas-to-overseas pharmaceutical transactions with regulatory assessment for each jurisdiction.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Get Started</span>
          <h2>Discuss Your Procurement Needs</h2>
          <p>
            Our team can help you structure and coordinate international pharmaceutical procurement
            from quotation through to delivery. Submit an enquiry to begin.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Submit a Procurement Enquiry</Link>
          </div>
        </div>
      </section>
    </>
  )
}
