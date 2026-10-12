import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

export default function GlobalSourcing() {
  return (
    <>
      <PageHero
        eyebrow="CAPABILITIES"
        title="Global Sourcing"
        description="Salus Vita identifies and evaluates pharmaceutical manufacturers and contract development and manufacturing organisations (CDMOs) across international markets, assessing their capability to meet specific product, quality, and regulatory requirements."
        breadcrumbs={[
          { label: "Capabilities", path: "/capabilities" },
          { label: "Global Sourcing" },
        ]}
        primaryCTA={{ label: "Discuss Your Requirements", to: "/contact/sourcing-enquiry" }}
        secondaryCTA={{ label: "View All Capabilities", to: "/capabilities" }}
      />

      {/* Manufacturer Identification */}
      <section className="content-section" data-reveal>
        <h2>Manufacturer Identification</h2>
        <div className="two-col">
          <div>
            <p>
              The foundation of effective pharmaceutical sourcing is identifying manufacturers whose
              capabilities align with the specific requirements of the product and its target market.
              Salus Vita maintains an active network of manufacturer relationships across Europe, the
              Indian subcontinent, South-East Asia, and the Americas, spanning producers of active
              pharmaceutical ingredients, intermediates, and finished dosage forms.
            </p>
            <p>
              When a client engages Salus Vita with a sourcing requirement, our team begins by
              defining the product specification, target market regulatory context, and commercial
              parameters. We then identify candidate manufacturers from our existing network or
              conduct targeted searches for new partners capable of meeting the brief. Each potential
              manufacturer is assessed against a structured set of criteria before being presented to
              the client as a viable option.
            </p>
            <p>
              This process is not limited to our existing contacts. Where a requirement calls for
              specialised manufacturing capability or a particular geographic origin, we conduct
              broader market research to identify manufacturers that may not yet be in our network
              but possess the relevant technical capacity and regulatory standing.
            </p>
          </div>
          <div>
            <div className="card" data-reveal style={{ "--rd": "120ms" }}>
              <h3>Network Scope</h3>
              <p>
                Active sourcing relationships across multiple continents, covering APIs, intermediates,
                excipients, and finished dosage forms in a range of therapeutic categories.
              </p>
            </div>
            <div className="card" data-reveal style={{ "--rd": "200ms", marginTop: 16 }}>
              <h3>Targeted Search</h3>
              <p>
                For specialised or niche requirements, we conduct dedicated manufacturer research
                beyond our existing network to identify suitable production partners.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Capability Assessment */}
      <section className="content-section" data-reveal>
        <h2>Capability Assessment</h2>
        <p>
          Once candidate manufacturers have been identified, Salus Vita conducts a detailed capability
          assessment. This evaluation focuses on whether the manufacturer can consistently produce the
          required product to the specified quality, in the volumes needed, and within acceptable lead
          times. The assessment is structured and documented, providing clients with a clear basis for
          their sourcing decisions.
        </p>
        <div className="feature-grid" style={{ marginTop: 24 }}>
          {[
            {
              title: "Product Capability",
              desc: "Evaluation of the manufacturer's ability to produce the required product form, strength, and specification, including any specialised manufacturing processes or technologies.",
            },
            {
              title: "Production Capacity",
              desc: "Assessment of available manufacturing capacity, current utilisation levels, and the manufacturer's ability to accommodate the client's volume requirements and growth projections.",
            },
            {
              title: "Lead Times and Reliability",
              desc: "Review of typical production lead times, historical delivery performance, and the manufacturer's track record in meeting committed schedules.",
            },
            {
              title: "Documentation Readiness",
              desc: "Evaluation of the manufacturer's ability to provide the technical and regulatory documentation required for the target market, including Certificates of Analysis, stability data, and GMP certificates.",
            },
          ].map((item, i) => (
            <div key={item.title} className="card" data-reveal style={{ "--rd": `${i * 90}ms` }}>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Due Diligence */}
      <section className="content-section" data-reveal>
        <h2>Due Diligence</h2>
        <div className="two-col">
          <div>
            <p>
              Beyond technical capability, Salus Vita assesses each manufacturer against a broader due
              diligence framework. This includes verification of regulatory standing, review of inspection
              history with relevant authorities, and assessment of quality management system maturity.
            </p>
            <p>
              Regulatory due diligence covers GMP certification status with bodies such as the TGA, EMA,
              FDA, and PIC/S-member inspectorates. We review recent inspection outcomes, any regulatory
              actions or warning letters, and the manufacturer's track record of maintaining compliance
              across the jurisdictions relevant to the client's needs.
            </p>
            <p>
              Where appropriate, Salus Vita facilitates on-site assessments or coordinates with third-party
              auditing firms to conduct quality audits on behalf of clients. We can also leverage mutual
              recognition arrangements between inspection agencies to streamline the qualification process
              for manufacturers already holding recognised GMP certifications.
            </p>
          </div>
          <div>
            <div className="card" data-reveal style={{ "--rd": "100ms" }}>
              <h3>Regulatory Verification</h3>
              <p>
                Confirmation of GMP certification status, inspection history, and regulatory standing
                with authorities relevant to the target market.
              </p>
            </div>
            <div className="card" data-reveal style={{ "--rd": "180ms", marginTop: 16 }}>
              <h3>Quality System Review</h3>
              <p>
                Assessment of quality management systems, CAPA processes, deviation handling, and change
                control procedures against international standards.
              </p>
            </div>
            <div className="card" data-reveal style={{ "--rd": "260ms", marginTop: 16 }}>
              <h3>Financial and Operational Stability</h3>
              <p>
                Review of the manufacturer's financial standing, ownership structure, and operational
                continuity to assess long-term supply reliability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Ongoing Evaluation */}
      <section className="content-section" data-reveal>
        <h2>Ongoing Evaluation</h2>
        <p>
          Manufacturer qualification is not a one-time exercise. Salus Vita maintains an ongoing
          evaluation programme for manufacturers within our network, monitoring changes in regulatory
          status, production capacity, quality performance, and commercial viability. This continuous
          assessment ensures that our sourcing recommendations remain current and that any emerging
          risks to supply continuity are identified early.
        </p>
        <p>
          Where a manufacturer's circumstances change in a way that may affect product quality or
          supply reliability, we assess the implications for affected clients and, where necessary,
          identify alternative supply options. This proactive approach to supplier monitoring is a
          core element of the value Salus Vita provides to its clients.
        </p>
        <p>
          Our team also monitors broader market developments, including API pricing trends,
          manufacturing capacity shifts across key production regions, and regulatory changes that
          may affect the viability of particular supply corridors. This intelligence informs our
          sourcing recommendations and supports clients in their supply planning decisions.
        </p>
      </section>

      {/* Related Capabilities */}
      <section className="content-section" data-reveal>
        <h3>Related Capabilities</h3>
        <div className="feature-grid" style={{ marginTop: 16 }}>
          <Link to="/capabilities/international-procurement" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>International Procurement</h3>
            <p>Coordinating quotations, negotiations, and contract structuring for international pharmaceutical transactions.</p>
          </Link>
          <Link to="/capabilities/technical-documentation" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>Technical Documentation</h3>
            <p>Facilitating the compilation of regulatory documentation, quality records, and dossier components from manufacturers.</p>
          </Link>
          <Link to="/capabilities/bespoke-sourcing" className="card" style={{ textDecoration: "none", color: "inherit" }}>
            <h3 style={{ color: "var(--teal)" }}>Bespoke Sourcing</h3>
            <p>Dedicated sourcing for hard-to-find products, niche requirements, and complex procurement challenges.</p>
          </Link>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <span className="eyebrow" style={{ color: "rgba(255,255,255,0.6)" }}>Get Started</span>
          <h2>Discuss Your Sourcing Requirements</h2>
          <p>
            Whether you have a specific product in mind or need guidance on available supply options,
            our team can help you identify and evaluate qualified manufacturers.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">Submit a Sourcing Enquiry</Link>
            <Link to="/contact" className="btn btn-outline">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
