import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"
import { Widget } from "@typeform/embed-react"

export default function SourcingEnquiry() {
  return (
    <>
      <PageHero
        eyebrow="SOURCING ENQUIRY"
        title="Submit a Sourcing Enquiry"
        description="Provide your product requirements and our team will assess sourcing options and respond with a detailed proposal."
        breadcrumbs={[{ label: "Contact", path: "/contact" }, { label: "Sourcing Enquiry" }]}
      />

      <section className="content-section" style={{ maxWidth: 800 }}>
        <p data-reveal style={{ marginBottom: 8 }}>
          Use this form to submit a detailed sourcing request. Our team will review your requirements and respond within two business days with an initial assessment.
        </p>
        <p data-reveal style={{ fontSize: 14, color: "var(--muted-2)", marginBottom: 24 }}>
          For general enquiries, please use our <Link to="/contact" style={{ color: "var(--teal)" }}>contact form</Link> instead.
        </p>
        <div data-reveal>
          <Widget id="w4pIuHGS" style={{ height: 600, borderRadius: 12 }} />
        </div>
      </section>

      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <h2>Prefer to Speak Directly?</h2>
          <p>
            Call us on <a href="tel:1300692468" style={{ color: "#fff", fontWeight: 600 }}>1300 692 468</a> or email <a href="mailto:info@salusvita.net" style={{ color: "#fff", fontWeight: 600 }}>info@salusvita.net</a> to discuss your requirements with a member of our team.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact" className="btn btn-primary">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
