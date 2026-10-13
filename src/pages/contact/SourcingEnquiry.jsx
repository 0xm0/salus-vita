import { useState } from "react"
import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"
import { submitForm } from "../../lib/submitForm"

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
  marginBottom: 8,
}

const legendStyle = {
  fontSize: 17,
  fontWeight: 700,
  color: "var(--navy)",
  marginBottom: 16,
  paddingBottom: 10,
  borderBottom: "1px solid var(--line)",
  width: "100%",
}

const fieldsetStyle = {
  border: "none",
  padding: 0,
  margin: 0,
  display: "flex",
  flexDirection: "column",
  gap: 16,
}

const ENQUIRY_CATEGORIES = [
  "Global sourcing",
  "API procurement",
  "Finished dosage forms",
  "Manufacturing partnerships",
  "Australian importation",
  "Cross-border supply",
  "Managed access",
  "Other",
]

const PRODUCT_CATEGORIES = [
  "API (Active Pharmaceutical Ingredient)",
  "Finished Dosage Form",
  "Both API and Finished Dosage Form",
  "Other",
]

export default function SourcingEnquiry() {
  const [form, setForm] = useState({
    organisation: "",
    website: "",
    contactName: "",
    email: "",
    country: "",
    role: "",
    enquiryCategory: "",
    intendedMarket: "",
    productCategory: "",
    indicativeVolumes: "",
    proposedTiming: "",
    supportingDocuments: null,
    message: "",
  })
  const [submitted, setSubmitted] = useState(false)
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState("")

  const update = (field) => (e) =>
    setForm((prev) => ({ ...prev, [field]: e.target.value }))

  const handleFileChange = (e) => {
    setForm((prev) => ({ ...prev, supportingDocuments: e.target.files[0] || null }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setSubmitting(true)
    setError("")
    // Exclude the file object from the JSON payload
    const { supportingDocuments, ...formData } = form
    const result = await submitForm(formData, "Sourcing Enquiry")
    setSubmitting(false)
    if (result.ok) {
      setSubmitted(true)
      window.scrollTo({ top: 0, behavior: "smooth" })
    } else {
      setError(result.message)
    }
  }

  const handleReset = () => {
    setForm({
      organisation: "",
      website: "",
      contactName: "",
      email: "",
      country: "",
      role: "",
      enquiryCategory: "",
      intendedMarket: "",
      productCategory: "",
      indicativeVolumes: "",
      proposedTiming: "",
      supportingDocuments: null,
      message: "",
    })
    setSubmitted(false)
    setError("")
  }

  return (
    <>
      <PageHero
        eyebrow="SOURCING"
        title="Submit a Sourcing Enquiry"
        description="Provide details of your pharmaceutical sourcing requirements and our specialist team will assess availability, pricing, and regulatory pathways."
        breadcrumbs={[
          { label: "Contact", path: "/contact" },
          { label: "Sourcing Enquiry" },
        ]}
      />

      {/* Confirmation Banner */}
      {submitted && (
        <section className="content-section" style={{ maxWidth: 800 }}>
          <div
            data-reveal
            style={{
              padding: "28px 32px",
              background: "#f0faf4",
              border: "1px solid #b8e6c8",
              borderRadius: "var(--radius)",
            }}
          >
            <div style={{ display: "flex", alignItems: "flex-start", gap: 16 }}>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="#16a34a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ width: 28, height: 28, flexShrink: 0, marginTop: 2 }}
              >
                <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                <path d="m9 11 3 3L22 4" />
              </svg>
              <div>
                <h3 style={{ fontSize: 18, fontWeight: 700, color: "#15803d", marginBottom: 8 }}>
                  Sourcing Enquiry Received
                </h3>
                <p style={{ fontSize: 15, color: "#166534", lineHeight: 1.7, margin: "0 0 6px" }}>
                  Your sourcing enquiry has been received. A member of our specialist team will review your requirements and respond within two business days.
                </p>
                <p style={{ fontSize: 14, color: "#166534", lineHeight: 1.6, margin: "0 0 16px" }}>
                  For urgent requirements, please contact your regional office directly. Our office details are available on the{" "}
                  <Link to="/contact" style={{ color: "#15803d", fontWeight: 600 }}>Contact page</Link>.
                </p>
                <div style={{ display: "flex", gap: 12, flexWrap: "wrap" }}>
                  <button
                    onClick={handleReset}
                    style={{
                      padding: "10px 22px",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "#fff",
                      background: "var(--teal)",
                      border: "none",
                      borderRadius: 8,
                      cursor: "pointer",
                      fontFamily: "inherit",
                    }}
                  >
                    Submit Another Enquiry
                  </button>
                  <Link
                    to="/case-studies"
                    style={{
                      padding: "10px 22px",
                      fontSize: 14,
                      fontWeight: 600,
                      color: "var(--teal)",
                      background: "none",
                      border: "1px solid var(--teal)",
                      borderRadius: 8,
                      textDecoration: "none",
                      display: "inline-block",
                    }}
                  >
                    View Case Studies
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Form */}
      {!submitted && (
        <section className="content-section" style={{ maxWidth: 800 }}>
          <h2 data-reveal>Your Requirements</h2>
          <p data-reveal>
            Please provide as much detail as possible to help our specialist sourcing team respond efficiently. All enquiries are treated as strictly confidential.
          </p>

          <form
            onSubmit={handleSubmit}
            data-reveal
            style={{
              display: "flex",
              flexDirection: "column",
              gap: 32,
              marginTop: 24,
            }}
          >
            {/* Contact Information */}
            <fieldset style={fieldsetStyle}>
              <legend style={legendStyle}>Contact Information</legend>

              <div className="grid-2-col">
                <div>
                  <label style={labelStyle} htmlFor="se-org">Organisation *</label>
                  <input
                    id="se-org"
                    type="text"
                    value={form.organisation}
                    onChange={update("organisation")}
                    placeholder="Company or organisation name"
                    required
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="se-website">Website (optional)</label>
                  <input
                    id="se-website"
                    type="url"
                    value={form.website}
                    onChange={update("website")}
                    placeholder="https://www.example.com"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div className="grid-2-col">
                <div>
                  <label style={labelStyle} htmlFor="se-name">Contact Name *</label>
                  <input
                    id="se-name"
                    type="text"
                    value={form.contactName}
                    onChange={update("contactName")}
                    placeholder="Full name"
                    required
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="se-role">Role / Job Title (optional)</label>
                  <input
                    id="se-role"
                    type="text"
                    value={form.role}
                    onChange={update("role")}
                    placeholder="e.g. Procurement Manager"
                    style={inputStyle}
                  />
                </div>
              </div>

              <div className="grid-2-col">
                <div>
                  <label style={labelStyle} htmlFor="se-email">Email Address *</label>
                  <input
                    id="se-email"
                    type="email"
                    value={form.email}
                    onChange={update("email")}
                    placeholder="you@company.com"
                    required
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="se-country">Country *</label>
                  <input
                    id="se-country"
                    type="text"
                    value={form.country}
                    onChange={update("country")}
                    placeholder="Your country"
                    required
                    style={inputStyle}
                  />
                </div>
              </div>
            </fieldset>

            {/* Enquiry Details */}
            <fieldset style={fieldsetStyle}>
              <legend style={legendStyle}>Enquiry Details</legend>

              <div className="grid-2-col">
                <div>
                  <label style={labelStyle} htmlFor="se-category">Enquiry Category (optional)</label>
                  <select
                    id="se-category"
                    value={form.enquiryCategory}
                    onChange={update("enquiryCategory")}

                    style={{ ...inputStyle, cursor: "pointer" }}
                  >
                    <option value="" disabled>Select a category</option>
                    {ENQUIRY_CATEGORIES.map((c) => (
                      <option key={c} value={c}>{c}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label style={labelStyle} htmlFor="se-market">Intended Market (optional)</label>
                  <input
                    id="se-market"
                    type="text"
                    value={form.intendedMarket}
                    onChange={update("intendedMarket")}
                    placeholder="e.g. Australia, Singapore, EU"

                    style={inputStyle}
                  />
                </div>
              </div>
            </fieldset>

            {/* Product Requirements */}
            <fieldset style={fieldsetStyle}>
              <legend style={legendStyle}>Product Requirements</legend>

              <div>
                <label style={labelStyle} htmlFor="se-product-cat">Product Category *</label>
                <select
                  id="se-product-cat"
                  value={form.productCategory}
                  onChange={update("productCategory")}
                  required
                  style={{ ...inputStyle, cursor: "pointer" }}
                >
                  <option value="" disabled>Select product category</option>
                  {PRODUCT_CATEGORIES.map((c) => (
                    <option key={c} value={c}>{c}</option>
                  ))}
                </select>
              </div>

              <div className="grid-2-col">
                <div>
                  <label style={labelStyle} htmlFor="se-volumes">Indicative Volumes (optional)</label>
                  <input
                    id="se-volumes"
                    type="text"
                    value={form.indicativeVolumes}
                    onChange={update("indicativeVolumes")}
                    placeholder="e.g. 500 kg/year, 10,000 units/month"
                    style={inputStyle}
                  />
                </div>
                <div>
                  <label style={labelStyle} htmlFor="se-timing">Proposed Timing (optional)</label>
                  <input
                    id="se-timing"
                    type="text"
                    value={form.proposedTiming}
                    onChange={update("proposedTiming")}
                    placeholder="e.g. Q1 2025, within 3 months"
                    style={inputStyle}
                  />
                </div>
              </div>
            </fieldset>

            {/* Additional Information */}
            <fieldset style={fieldsetStyle}>
              <legend style={legendStyle}>Additional Information</legend>

              <div>
                <label style={labelStyle} htmlFor="se-message">Message (optional)</label>
                <textarea
                  id="se-message"
                  value={form.message}
                  onChange={update("message")}
                  placeholder="Please describe your requirements, including specific product or molecule names, dosage forms, strengths, regulatory preferences, or any other relevant details."
                  rows={5}
                  style={{ ...inputStyle, resize: "vertical" }}
                />
              </div>

              <div>
                <label style={labelStyle} htmlFor="se-docs">Supporting Documents (optional)</label>
                <input
                  id="se-docs"
                  type="file"
                  onChange={handleFileChange}
                  accept=".pdf,.doc,.docx,.xls,.xlsx,.csv,.txt"
                  style={{
                    ...inputStyle,
                    padding: "10px 16px",
                    cursor: "pointer",
                  }}
                />
                <p style={{ fontSize: 12, color: "var(--muted-2)", marginTop: 4, marginBottom: 0 }}>
                  Accepted formats: PDF, DOC, DOCX, XLS, XLSX, CSV, TXT. Maximum file size: 10 MB.
                </p>
              </div>
            </fieldset>

            {/* Privacy Notice */}
            <div
              style={{
                padding: "16px 20px",
                background: "var(--pale-blue)",
                border: "1px solid var(--line)",
                borderRadius: "var(--radius)",
                fontSize: 13,
                color: "var(--muted)",
                lineHeight: 1.6,
              }}
            >
              <p style={{ margin: 0 }}>
                By submitting this form, you consent to Salus Vita processing your personal information in accordance with our{" "}
                <Link to="/privacy" style={{ color: "var(--teal)", fontWeight: 600 }}>Privacy Policy</Link>.
                All enquiries are treated as strictly confidential. Your information will only be used to assess and respond to your sourcing requirements and will not be shared with third parties without your explicit consent.
              </p>
            </div>

            {error && (
              <div
                style={{
                  padding: "12px 16px",
                  background: "#fef2f2",
                  border: "1px solid #fecaca",
                  borderRadius: 8,
                  color: "#991b1b",
                  fontSize: 14,
                }}
              >
                {error}
              </div>
            )}

            <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
              <button
                type="submit"
                className="btn btn-primary"
                style={{ opacity: submitting ? 0.7 : 1 }}
                disabled={submitting}
              >
                {submitting ? "Submitting..." : "Submit Sourcing Enquiry"}
              </button>
              <p style={{ fontSize: 13, color: "var(--muted-2)", margin: 0 }}>
                * Required fields. We aim to respond within two business days.
              </p>
            </div>
          </form>
        </section>
      )}

      <section className="related-links">
        <h3>Related</h3>
        <div className="related-grid">
          <Link to="/contact">General Contact</Link>
          <Link to="/capabilities">Our Capabilities</Link>
          <Link to="/solutions">Solutions</Link>
        </div>
      </section>
    </>
  )
}
