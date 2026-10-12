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
  display: "flex",
  flexDirection: "column",
  gap: 6,
  fontSize: 14,
  fontWeight: 500,
  color: "var(--ink)",
}

export default function PortalApplication() {
  const [form, setForm] = useState({
    fullName: "",
    email: "",
    phone: "",
    organisationName: "",
    abn: "",
    country: "",
    professionalRole: "",
    licenceNumber: "",
    intendedUse: "",
    consent: false,
  })

  const [submitted, setSubmitted] = useState(false)

  const update = (field) => (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setSubmitted(true)
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  if (submitted) {
    return (
      <>
        <PageHero
          eyebrow="APPLICATION RECEIVED"
          title="Thank You for Your Application"
          description="Your application for Professional Portal access has been submitted successfully."
          breadcrumbs={[
            { label: "Professional", path: "/professional" },
            { label: "Application Submitted" },
          ]}
        />

        <section className="content-section" style={{ maxWidth: 720 }}>
          <div
            data-reveal
            style={{
              padding: "24px 28px",
              background: "rgba(23, 110, 121, 0.06)",
              border: "1px solid rgba(23, 110, 121, 0.15)",
              borderRadius: 12,
              marginBottom: 32,
            }}
          >
            <h3 style={{ color: "var(--teal)", marginBottom: 8 }}>Application Reference</h3>
            <p style={{ margin: 0, fontSize: 14, color: "var(--muted)" }}>
              A confirmation has been sent to <strong>{form.email || "your email address"}</strong>.
              Please retain this for your records.
            </p>
          </div>

          <h2 data-reveal>What Happens Next</h2>
          <div style={{ display: "flex", flexDirection: "column", gap: 16, marginTop: 16 }}>
            {[
              {
                step: "01",
                title: "Application Review",
                desc: "Our compliance team will review your application details, including your organisation type, professional role, and stated intended use. This initial review is typically completed within one to two business days.",
              },
              {
                step: "02",
                title: "Credential Verification",
                desc: "We verify your regulatory licence number, ABN or registration details, and professional standing against relevant registries and databases. You may be contacted if additional documentation is required.",
              },
              {
                step: "03",
                title: "Account Activation",
                desc: "Upon successful verification, you will receive secure login credentials and a guided introduction to the Professional Portal. Your dedicated account manager will reach out to assist with onboarding.",
              },
            ].map((s, i) => (
              <div
                key={s.step}
                className="card"
                data-reveal
                style={{ "--rd": `${i * 100}ms`, display: "flex", gap: 20, alignItems: "flex-start" }}
              >
                <span
                  style={{
                    fontSize: 32,
                    fontWeight: 800,
                    color: "var(--teal)",
                    opacity: 0.25,
                    flexShrink: 0,
                    lineHeight: 1,
                    minWidth: 48,
                  }}
                >
                  {s.step}
                </span>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="cta-banner">
          <div className="cta-card" data-reveal>
            <h2>Questions About Your Application?</h2>
            <p>
              If you have questions about the verification process or need to update your application
              details, our team is available to assist.
            </p>
            <div className="hero-actions" style={{ justifyContent: "center" }}>
              <Link to="/contact" className="btn btn-primary">Contact Us</Link>
              <Link to="/professional" className="btn btn-outline">Back to Portal</Link>
            </div>
          </div>
        </section>
      </>
    )
  }

  return (
    <>
      <PageHero
        eyebrow="REGISTRATION"
        title="Apply for Portal Access"
        description="Complete the application below to request verified access to the Salus Vita Professional Portal. All fields marked with an asterisk are required."
        breadcrumbs={[
          { label: "Professional", path: "/professional" },
          { label: "Apply" },
        ]}
      />

      <section className="content-section" style={{ maxWidth: 720 }}>
        <h2 data-reveal>Eligibility</h2>
        <p data-reveal>
          Portal access is available to licensed pharmaceutical professionals, accredited healthcare
          organisations, authorised distributors, and government health agencies. All applications are
          subject to credential verification, including validation of regulatory licence numbers and
          organisational registration details.
        </p>
        <p data-reveal style={{ fontSize: 14, color: "var(--muted)" }}>
          This is not a self-certification process. Salus Vita independently verifies all applicant
          credentials before granting portal access.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 720 }}>
        <h2 data-reveal>Application Form</h2>

        <form
          onSubmit={handleSubmit}
          data-reveal
          style={{ display: "flex", flexDirection: "column", gap: 20, marginTop: 24 }}
        >
          {/* Personal Details */}
          <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--navy)", margin: "8px 0 0" }}>
            Applicant Details
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <label style={labelStyle}>
              Full Name *
              <input
                type="text"
                value={form.fullName}
                onChange={update("fullName")}
                placeholder="Your full name"
                style={inputStyle}
                required
              />
            </label>
            <label style={labelStyle}>
              Business Email *
              <input
                type="email"
                value={form.email}
                onChange={update("email")}
                placeholder="jane.smith@organisation.com"
                style={inputStyle}
                required
              />
            </label>
          </div>

          <label style={labelStyle}>
            Phone Number
            <input
              type="tel"
              value={form.phone}
              onChange={update("phone")}
              placeholder="+61 4XX XXX XXX"
              style={inputStyle}
            />
          </label>

          {/* Organisation Details */}
          <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--navy)", margin: "16px 0 0" }}>
            Organisation Details
          </h3>

          <label style={labelStyle}>
            Organisation Name *
            <input
              type="text"
              value={form.organisationName}
              onChange={update("organisationName")}
              placeholder="Organisation or business name"
              style={inputStyle}
              required
            />
          </label>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <label style={labelStyle}>
              ABN / Registration Number *
              <input
                type="text"
                value={form.abn}
                onChange={update("abn")}
                placeholder="XX XXX XXX XXX or equivalent"
                style={inputStyle}
                required
              />
            </label>
            <label style={labelStyle}>
              Country *
              <select
                value={form.country}
                onChange={update("country")}
                style={{ ...inputStyle, color: form.country ? "var(--ink)" : "#999" }}
                required
              >
                <option value="" disabled>Select country</option>
                <option value="AU">Australia</option>
                <option value="NZ">New Zealand</option>
                <option value="SG">Singapore</option>
                <option value="MY">Malaysia</option>
                <option value="TH">Thailand</option>
                <option value="PH">Philippines</option>
                <option value="ID">Indonesia</option>
                <option value="VN">Vietnam</option>
                <option value="IN">India</option>
                <option value="AE">United Arab Emirates</option>
                <option value="SA">Saudi Arabia</option>
                <option value="DE">Germany</option>
                <option value="GB">United Kingdom</option>
                <option value="OTHER">Other</option>
              </select>
            </label>
          </div>

          {/* Professional Credentials */}
          <h3 style={{ fontSize: 16, fontWeight: 600, color: "var(--navy)", margin: "16px 0 0" }}>
            Professional Credentials
          </h3>

          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
            <label style={labelStyle}>
              Professional Role *
              <select
                value={form.professionalRole}
                onChange={update("professionalRole")}
                style={{ ...inputStyle, color: form.professionalRole ? "var(--ink)" : "#999" }}
                required
              >
                <option value="" disabled>Select your role</option>
                <option value="pharmacist">Licensed Pharmacist</option>
                <option value="hospital-procurement">Hospital Procurement Officer</option>
                <option value="manufacturer">Pharmaceutical Manufacturer</option>
                <option value="distributor">Authorised Distributor</option>
                <option value="regulatory-consultant">Regulatory Consultant</option>
                <option value="government">Government Health Agency</option>
                <option value="other">Other</option>
              </select>
            </label>
            <label style={labelStyle}>
              Regulatory Licence Number *
              <input
                type="text"
                value={form.licenceNumber}
                onChange={update("licenceNumber")}
                placeholder="e.g. AHPRA, TGA, GMP licence"
                style={inputStyle}
                required
              />
            </label>
          </div>

          {/* Supporting Documents */}
          <label style={labelStyle}>
            Supporting Documents
            <div
              style={{
                border: "2px dashed var(--line-strong)",
                borderRadius: 8,
                padding: "28px 20px",
                textAlign: "center",
                background: "var(--pale-blue)",
                cursor: "pointer",
              }}
            >
              <svg
                width="36"
                height="36"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#176E79"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
                style={{ marginBottom: 8, opacity: 0.5 }}
              >
                <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
                <polyline points="17 8 12 3 7 8" />
                <line x1="12" y1="3" x2="12" y2="15" />
              </svg>
              <p style={{ margin: 0, fontSize: 14, color: "var(--muted)" }}>
                Upload copies of your regulatory licence, GMP certificate, or organisational registration.
              </p>
              <p style={{ margin: "4px 0 0", fontSize: 12, color: "var(--muted-2)" }}>
                PDF, JPG, or PNG files up to 10 MB each.
              </p>
            </div>
          </label>

          {/* Intended Use */}
          <label style={labelStyle}>
            Description of Intended Use *
            <textarea
              value={form.intendedUse}
              onChange={update("intendedUse")}
              placeholder="Please describe how you intend to use the Professional Portal, including the types of products you are seeking and the markets you serve."
              rows={5}
              style={{ ...inputStyle, resize: "vertical" }}
              required
            />
          </label>

          {/* Privacy Notice */}
          <div
            style={{
              padding: "16px 20px",
              background: "var(--pale-blue)",
              borderRadius: 8,
              fontSize: 13,
              color: "var(--muted)",
              lineHeight: 1.6,
            }}
          >
            <strong style={{ color: "var(--ink)" }}>Privacy Notice</strong>
            <br />
            The personal information collected in this form is handled in accordance with the
            Australian Privacy Act 1988 and the Australian Privacy Principles (APPs). Your information
            will be used solely for the purpose of assessing your application for Professional Portal
            access and, if approved, managing your portal account. We do not disclose your personal
            information to third parties without your consent, except as required by law. For full
            details, please review our <Link to="/privacy" style={{ color: "var(--teal)" }}>Privacy Policy</Link>.
          </div>

          {/* Consent */}
          <label
            style={{
              display: "flex",
              alignItems: "flex-start",
              gap: 12,
              fontSize: 14,
              color: "var(--muted)",
              cursor: "pointer",
            }}
          >
            <input
              type="checkbox"
              checked={form.consent}
              onChange={update("consent")}
              style={{ marginTop: 3, flexShrink: 0 }}
              required
            />
            <span>
              I confirm that the information provided is accurate and complete. I have read and agree
              to the Salus Vita <Link to="/terms" style={{ color: "var(--teal)" }}>Terms of Use</Link> and{" "}
              <Link to="/privacy" style={{ color: "var(--teal)" }}>Privacy Policy</Link>. I understand
              that Salus Vita will verify my professional credentials and that providing false or
              misleading information may result in the rejection of my application.
            </span>
          </label>

          <button
            type="submit"
            className="btn btn-primary"
            style={{ alignSelf: "flex-start", marginTop: 8 }}
          >
            Submit Application
          </button>
        </form>
      </section>

      {/* What Happens Next */}
      <section className="content-section" style={{ maxWidth: 720 }}>
        <h2 data-reveal>What Happens Next</h2>
        <p data-reveal style={{ marginBottom: 16 }}>
          All applications undergo a structured review and verification process before portal
          access is granted.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            {
              step: "01",
              title: "Application Review",
              desc: "Our compliance team reviews your application details, including your organisation type, professional credentials, and stated intended use. This initial review is typically completed within one to two business days.",
            },
            {
              step: "02",
              title: "Credential Verification",
              desc: "We independently verify your regulatory licence number, ABN or registration details, and professional standing against relevant registries. You may be contacted if additional documentation is required.",
            },
            {
              step: "03",
              title: "Account Activation",
              desc: "Upon successful verification, you will receive secure login credentials and a guided introduction to the Professional Portal. A dedicated account manager will be assigned to support your onboarding.",
            },
          ].map((s, i) => (
            <div
              key={s.step}
              className="card"
              data-reveal
              style={{ "--rd": `${i * 100}ms`, display: "flex", gap: 20, alignItems: "flex-start" }}
            >
              <span
                style={{
                  fontSize: 32,
                  fontWeight: 800,
                  color: "var(--teal)",
                  opacity: 0.25,
                  flexShrink: 0,
                  lineHeight: 1,
                  minWidth: 48,
                }}
              >
                {s.step}
              </span>
              <div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="related-links">
        <h3>Related</h3>
        <div className="related-grid">
          <Link to="/professional">Professional Portal</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
