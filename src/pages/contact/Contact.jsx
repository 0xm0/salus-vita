import { useState } from "react"
import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"
import { Widget } from "@typeform/embed-react"

const OFFICES = [
  {
    name: "Australia (Head Office)",
    address: ["2 Queen Street", "Melbourne VIC 3000, Australia"],
    phone: "1300 692 468",
    email: "info@salusvita.net",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.835434509374!2d144.96715931531888!3d-37.81627997975159!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642b4e7b28dad%3A0x6e3b4b7b0f9a2d0!2s2%20Queen%20St%2C%20Melbourne%20VIC%203000!5e0!3m2!1sen!2sau!4v1697000000000!5m2!1sen!2sau",
  },
  {
    name: "UAE (Middle East)",
    address: ["Gate Village, Building 3", "DIFC, Dubai, UAE"],
    phone: null,
    email: "mena@salusvita.net",
    mapSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.941!2d55.2780!3d25.2130!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4296e7e7e7e7%3A0x3e5f4296e7e7e7e7!2sGate%20Village%20Building%203%2C%20DIFC%2C%20Dubai!5e0!3m2!1sen!2sae!4v1697000000000!5m2!1sen!2sae",
  },
]

export default function Contact() {
  const [activeMap, setActiveMap] = useState(0)

  return (
    <>
      <PageHero
        eyebrow="GET IN TOUCH"
        title="Contact Us"
        description="Reach out to discuss your pharmaceutical supply requirements, partnership opportunities, or general enquiries."
        primaryCTA={{ label: "Submit a Sourcing Enquiry", to: "/contact/sourcing-enquiry" }}
      />

      <section className="content-section">
        <div className="two-col">
          {/* Form Column - Typeform Embed */}
          <div>
            <h2 data-reveal>Send Us a Message</h2>
            <p data-reveal>
              Complete the form below and a member of our team will respond within two business days. For detailed product sourcing requirements, please use our{" "}
              <Link to="/contact/sourcing-enquiry" style={{ color: "var(--teal)" }}>
                dedicated sourcing enquiry form
              </Link>.
            </p>
            <div data-reveal style={{ marginTop: 24 }}>
              <Widget id="fffctBhE" style={{ height: 500, borderRadius: 12 }} />
            </div>
          </div>

          {/* Office Details Column */}
          <div>
            <h2 data-reveal>Our Offices</h2>
            <p data-reveal style={{ marginBottom: 24 }}>
              Salus Vita is headquartered in Melbourne, Australia, with a regional presence in the UAE to support clients across the Middle East, Asia-Pacific, Europe, and beyond.
            </p>

            {OFFICES.map((office, i) => (
              <div
                key={office.name}
                data-reveal
                style={{
                  "--rd": `${i * 80}ms`,
                  padding: "20px 24px",
                  background: "var(--glass-2)",
                  border: "1px solid var(--line)",
                  borderRadius: "var(--radius)",
                  marginBottom: 16,
                }}
              >
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 8 }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="var(--teal)"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: 20, height: 20, flexShrink: 0 }}
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" />
                    <circle cx="12" cy="10" r="3" />
                  </svg>
                  <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--navy)", margin: 0 }}>
                    {office.name}
                  </h3>
                </div>
                <p style={{ color: "var(--muted)", fontSize: 15, lineHeight: 1.7, margin: "0 0 8px 30px" }}>
                  {office.address.map((line, j) => (
                    <span key={j}>
                      {line}
                      {j < office.address.length - 1 && <br />}
                    </span>
                  ))}
                </p>
                <div style={{ marginLeft: 30 }}>
                  {office.phone && (
                    <p style={{ color: "var(--muted)", fontSize: 14, margin: "4px 0" }}>
                      <span style={{ fontWeight: 600, color: "var(--navy)" }}>Phone:</span>{" "}
                      <a href="tel:1300692468" style={{ color: "var(--teal)", textDecoration: "none" }}>{office.phone}</a>
                    </p>
                  )}
                  {office.email && (
                    <p style={{ color: "var(--muted)", fontSize: 14, margin: "4px 0" }}>
                      <span style={{ fontWeight: 600, color: "var(--navy)" }}>Email:</span> {office.email}
                    </p>
                  )}
                </div>
              </div>
            ))}

            {/* Business Hours */}
            <div
              data-reveal
              style={{
                padding: "20px 24px",
                background: "var(--pale-blue)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius)",
              }}
            >
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--navy)", marginBottom: 8 }}>
                Business Hours
              </h3>
              <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                <strong style={{ color: "var(--navy)" }}>Melbourne:</strong> Mon-Fri, 9:00 AM - 5:30 PM AEST
                <br />
                <strong style={{ color: "var(--navy)" }}>Dubai:</strong> Sun-Thu, 9:00 AM - 6:00 PM GST
              </p>
              <p style={{ color: "var(--muted-2)", fontSize: 13, marginTop: 8, marginBottom: 0 }}>
                For urgent supply matters outside business hours, please email your regional office and include "URGENT" in the subject line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Google Maps Embed */}
      <section className="content-section">
        <h2 data-reveal>Our Locations</h2>
        <div data-reveal style={{ display: "flex", gap: 8, marginBottom: 20 }}>
          {OFFICES.map((office, i) => (
            <button
              key={office.name}
              type="button"
              onClick={() => setActiveMap(i)}
              style={{
                padding: "10px 20px",
                fontSize: 14,
                fontWeight: 600,
                fontFamily: "inherit",
                border: activeMap === i ? "2px solid var(--teal)" : "1px solid var(--line)",
                borderRadius: 8,
                background: activeMap === i ? "var(--pale-blue)" : "#fff",
                color: activeMap === i ? "var(--teal)" : "var(--muted)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {office.name}
            </button>
          ))}
        </div>
        <div data-reveal>
          <iframe
            src={OFFICES[activeMap].mapSrc}
            width="100%"
            height="350"
            style={{ border: 0, borderRadius: 12 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title={`${OFFICES[activeMap].name} Office Location`}
          ></iframe>
          <p style={{ fontSize: 13, color: "var(--muted)", marginTop: 12, textAlign: "center" }}>
            {OFFICES[activeMap].address.join(", ")}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <h2>Have a Specific Sourcing Requirement?</h2>
          <p>
            Use our dedicated sourcing enquiry form to provide detailed product requirements for a faster, more targeted response from our specialist team.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact/sourcing-enquiry" className="btn btn-primary">
              Submit Sourcing Enquiry
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
