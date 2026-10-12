import { useState } from "react"
import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const inputStyle = {
  padding: "12px 16px",
  fontSize: 15,
  border: "1px solid var(--line-strong)",
  borderRadius: 8,
  background: "#fff",
  color: "var(--ink)",
  fontFamily: "inherit",
  outline: "none",
  width: "100%",
  boxSizing: "border-box",
}

const labelStyle = {
  fontSize: 13,
  fontWeight: 600,
  color: "var(--navy)",
  display: "block",
  marginBottom: 6,
}

const ENQUIRY_TYPES = [
  "Global sourcing",
  "API procurement",
  "Finished products",
  "Manufacturing partnerships",
  "Australian importation",
  "Cross-border supply",
  "Other",
]

const OFFICES = [
  {
    name: "Australia (Head Office)",
    address: ["Level 12, 100 Collins Street", "Melbourne VIC 3000", "Australia"],
    phone: "+61 3 9000 0000",
    email: "info@salusvita.net",
  },
  {
    name: "Singapore (Asia-Pacific)",
    address: ["1 Raffles Place, #20-01", "Singapore 048616"],
    phone: "+65 6000 0000",
    email: "apac@salusvita.net",
  },
  {
    name: "United Kingdom (Europe)",
    address: ["30 St Mary Axe", "London EC3A 8BF", "United Kingdom"],
    phone: "+44 20 7000 0000",
    email: "europe@salusvita.net",
  },
]

export default function Contact() {
  const [form, setForm] = useState({
    organisation: "",
    contactName: "",
    email: "",
    country: "",
    enquiryType: "",
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
  }

  const handleReset = () => {
    setForm({
      organisation: "",
      contactName: "",
      email: "",
      country: "",
      enquiryType: "",
      message: "",
    })
    setSubmitted(false)
  }

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
          {/* Form Column */}
          <div>
            <h2 data-reveal>Send Us a Message</h2>
            <p data-reveal>
              Complete the form below and a member of our team will respond within two business days. For detailed product sourcing requirements, please use our{" "}
              <Link to="/contact/sourcing-enquiry" style={{ color: "var(--teal)" }}>
                dedicated sourcing enquiry form
              </Link>.
            </p>

            {submitted ? (
              <div
                data-reveal
                style={{
                  padding: "24px 28px",
                  background: "#f0faf4",
                  border: "1px solid #b8e6c8",
                  borderRadius: "var(--radius)",
                  marginTop: 20,
                }}
              >
                <div style={{ display: "flex", alignItems: "flex-start", gap: 12 }}>
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#16a34a"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{ width: 24, height: 24, flexShrink: 0, marginTop: 2 }}
                  >
                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                    <path d="m9 11 3 3L22 4" />
                  </svg>
                  <div>
                    <h3 style={{ fontSize: 16, fontWeight: 700, color: "#15803d", marginBottom: 6 }}>
                      Message Received
                    </h3>
                    <p style={{ fontSize: 15, color: "#166534", lineHeight: 1.6, margin: 0 }}>
                      Thank you for contacting Salus Vita. A member of our team will review your enquiry and respond within two business days.
                    </p>
                    <button
                      onClick={handleReset}
                      style={{
                        marginTop: 16,
                        padding: "8px 20px",
                        fontSize: 14,
                        fontWeight: 600,
                        color: "var(--teal)",
                        background: "none",
                        border: "1px solid var(--teal)",
                        borderRadius: 8,
                        cursor: "pointer",
                        fontFamily: "inherit",
                      }}
                    >
                      Send Another Message
                    </button>
                  </div>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                data-reveal
                style={{
                  display: "flex",
                  flexDirection: "column",
                  gap: 18,
                  marginTop: 20,
                }}
              >
                <div>
                  <label style={labelStyle} htmlFor="contact-org">Organisation *</label>
                  <input
                    id="contact-org"
                    type="text"
                    value={form.organisation}
                    onChange={update("organisation")}
                    placeholder="Your company or organisation"
                    required
                    style={inputStyle}
                  />
                </div>

                <div>
                  <label style={labelStyle} htmlFor="contact-name">Contact Name *</label>
                  <input
                    id="contact-name"
                    type="text"
                    value={form.contactName}
                    onChange={update("contactName")}
                    placeholder="Full name"
                    required
                    style={inputStyle}
                  />
                </div>

                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
                  <div>
                    <label style={labelStyle} htmlFor="contact-email">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      value={form.email}
                      onChange={update("email")}
                      placeholder="you@company.com"
                      required
                      style={inputStyle}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="contact-country">Country *</label>
                    <input
                      id="contact-country"
                      type="text"
                      value={form.country}
                      onChange={update("country")}
                      placeholder="Your country"
                      required
                      style={inputStyle}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle} htmlFor="contact-type">Enquiry Type *</label>
                  <select
                    id="contact-type"
                    value={form.enquiryType}
                    onChange={update("enquiryType")}
                    required
                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="" disabled>Select an enquiry type</option>
                    {ENQUIRY_TYPES.map((t) => (
                      <option key={t} value={t}>{t}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label style={labelStyle} htmlFor="contact-message">Message *</label>
                  <textarea
                    id="contact-message"
                    value={form.message}
                    onChange={update("message")}
                    placeholder="Please describe your enquiry or requirements"
                    required
                    rows={5}
                    style={{ ...inputStyle, resize: "vertical" }}
                  />
                </div>

                <p style={{ fontSize: 13, color: "var(--muted-2)", margin: 0 }}>
                  * Required fields. Your information will be handled in accordance with our{" "}
                  <Link to="/privacy" style={{ color: "var(--teal)" }}>Privacy Policy</Link>.
                </p>

                <button
                  type="submit"
                  className="btn btn-primary"
                  style={{ alignSelf: "flex-start" }}
                >
                  Send Message
                </button>
              </form>
            )}
          </div>

          {/* Office Details Column */}
          <div>
            <h2 data-reveal>Our Offices</h2>
            <p data-reveal style={{ marginBottom: 24 }}>
              Salus Vita operates from offices in Australia, Singapore, and the United Kingdom, enabling us to support clients and supply partners across the Asia-Pacific, Europe, and beyond.
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
                <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 10 }}>
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
                      <span style={{ fontWeight: 600, color: "var(--navy)" }}>Phone:</span> {office.phone}
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
              <h3 style={{ fontSize: 16, fontWeight: 700, color: "var(--navy)", marginBottom: 10 }}>
                Business Hours
              </h3>
              <p style={{ color: "var(--muted)", fontSize: 14, lineHeight: 1.7, margin: 0 }}>
                Monday to Friday: 9:00 AM - 5:30 PM (local office time)
                <br />
                Weekend and public holidays: Closed
              </p>
              <p style={{ color: "var(--muted-2)", fontSize: 13, marginTop: 8, marginBottom: 0 }}>
                For urgent supply matters outside business hours, please email your regional office and include "URGENT" in the subject line.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="content-section">
        <h2 data-reveal>Our Global Presence</h2>
        <div
          data-reveal
          style={{
            width: "100%",
            height: 320,
            borderRadius: "var(--radius)",
            background: "var(--pale-blue)",
            border: "1px solid var(--line)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "var(--muted-2)",
            fontSize: 15,
            flexDirection: "column",
            gap: 12,
          }}
        >
          <svg
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            style={{ width: 40, height: 40, opacity: 0.5 }}
          >
            <circle cx="12" cy="12" r="10" />
            <path d="M2 12h20" />
            <path d="M12 2a15 15 0 0 1 0 20 15 15 0 0 1 0-20Z" />
          </svg>
          Interactive map integration - Melbourne, Singapore, London
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
