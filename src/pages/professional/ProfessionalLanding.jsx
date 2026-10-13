import { useState } from "react"
import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"
import { submitForm } from "../../lib/submitForm"

const FEATURES = [
  {
    title: "Product-Specific Enquiries",
    desc: "Submit detailed enquiries for APIs, finished dosage forms, and specialist pharmaceutical products with full traceability through our response workflow.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z" />
      </svg>
    ),
  },
  {
    title: "Technical Documentation",
    desc: "Access certificates of analysis, product specification sheets, stability data, and Drug Master File references directly from your secure document repository.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "Commercial Quotations",
    desc: "Request and receive commercial quotations for pharmaceutical products, with transparent pricing structures and clearly defined supply terms.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="2" y="3" width="20" height="14" rx="2" ry="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
  {
    title: "Regulatory Support",
    desc: "Access market-specific regulatory guidance, GMP certificates, WHO prequalification documents, and TGA import licence references relevant to your supply chain.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
      </svg>
    ),
  },
  {
    title: "Account Management",
    desc: "Manage your organisational profile, update contact details, adjust communication preferences, and oversee user access for your team.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 00-3-3.87" />
        <path d="M16 3.13a4 4 0 010 7.75" />
      </svg>
    ),
  },
  {
    title: "Secure Communications",
    desc: "Communicate directly with your dedicated Salus Vita account team through encrypted, auditable messaging channels within the portal environment.",
    icon: (
      <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#176E79" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0110 0v4" />
      </svg>
    ),
  },
]

const ELIGIBILITY = [
  {
    title: "Licensed Pharmacists",
    desc: "Registered pharmacists with current AHPRA registration or equivalent international licensure.",
  },
  {
    title: "Hospital Procurement",
    desc: "Procurement officers and pharmacy directors within public and private hospital networks.",
  },
  {
    title: "Pharmaceutical Manufacturers",
    desc: "Licensed manufacturers requiring APIs, intermediates, or finished dosage form sourcing.",
  },
  {
    title: "Authorised Distributors",
    desc: "Wholesale distributors holding valid pharmaceutical distribution licences in their operating jurisdictions.",
  },
  {
    title: "Regulatory Consultants",
    desc: "Qualified regulatory affairs professionals acting on behalf of eligible organisations.",
  },
  {
    title: "Government Health Agencies",
    desc: "National and regional health authorities, public health procurement bodies, and ministry-level organisations.",
  },
]

export default function ProfessionalLanding() {
  const [email, setEmail] = useState("")
  const [status, setStatus] = useState(null) // null | "sending" | "success" | "error"

  const handleInterest = async (e) => {
    e.preventDefault()
    if (!email) return

    setStatus("sending")
    try {
      const result = await submitForm({ email }, "Professional Portal Interest Registration")
      setStatus(result.ok ? "success" : "error")
    } catch {
      setStatus("error")
    }
  }

  return (
    <>
      <PageHero
        eyebrow="PROFESSIONAL PORTAL"
        title="Secure Access for Pharmaceutical Professionals"
        description="The Salus Vita Professional Portal will provide verified pharmaceutical professionals with direct access to product-specific enquiries, technical documentation, and commercial quotations."
      />

      {/* Coming Soon Notice */}
      <section className="content-section" style={{ maxWidth: 720 }}>
        <div
          data-reveal
          style={{
            padding: "32px 28px",
            background: "rgba(23, 110, 121, 0.06)",
            border: "1px solid rgba(23, 110, 121, 0.15)",
            borderRadius: 12,
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "6px 18px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              background: "rgba(23, 110, 121, 0.12)",
              color: "#176E79",
              letterSpacing: "0.04em",
              marginBottom: 16,
            }}
          >
            COMING SOON
          </span>
          <h2 style={{ margin: "0 0 12px", fontSize: 22 }}>
            The Professional Portal is Currently in Development
          </h2>
          <p style={{ margin: "0 0 24px", color: "var(--muted)", lineHeight: 1.6 }}>
            Register your interest below and we will notify you when the portal launches.
          </p>

          {status === "success" ? (
            <div
              style={{
                padding: "16px 20px",
                background: "rgba(23, 110, 121, 0.08)",
                borderRadius: 8,
                color: "#176E79",
                fontWeight: 500,
                fontSize: 15,
              }}
            >
              Thank you. We will be in touch when the Professional Portal launches.
            </div>
          ) : (
            <form
              onSubmit={handleInterest}
              style={{
                display: "flex",
                gap: 12,
                maxWidth: 480,
                margin: "0 auto",
                flexWrap: "wrap",
                justifyContent: "center",
              }}
            >
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Your business email address"
                required
                style={{
                  flex: "1 1 260px",
                  padding: "12px 16px",
                  fontSize: 15,
                  border: "1px solid var(--line-strong)",
                  borderRadius: 8,
                  background: "#fff",
                  color: "var(--ink)",
                  fontFamily: "inherit",
                  outline: "none",
                  boxSizing: "border-box",
                }}
              />
              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === "sending"}
                style={{ flexShrink: 0 }}
              >
                {status === "sending" ? "Sending..." : "Register Interest"}
              </button>
            </form>
          )}
          {status === "error" && (
            <p style={{ margin: "12px 0 0", fontSize: 14, color: "#a03030" }}>
              Something went wrong. Please try again or contact us directly at admin@salusvita.net.
            </p>
          )}
        </div>
      </section>

      {/* Value Proposition */}
      <section className="content-section">
        <h2 data-reveal>A Platform Built for Pharmaceutical Professionals</h2>
        <p data-reveal>
          The Salus Vita Professional Portal is a restricted-access platform designed exclusively for verified
          pharmaceutical industry participants. Unlike generic customer portals, access requires formal
          verification of professional credentials, regulatory licences, and organisational standing.
        </p>
        <p data-reveal>
          Once approved, portal members will gain direct access to the tools and documentation that support
          informed procurement decisions, streamlined enquiry management, and transparent supply chain
          communication.
        </p>
      </section>

      {/* Portal Features */}
      <section className="content-section">
        <h2 data-reveal>Portal Capabilities</h2>
        <p data-reveal>
          The Professional Portal will centralise the resources and communication channels that pharmaceutical
          professionals need to evaluate, procure, and manage pharmaceutical supply relationships.
        </p>
        <div className="feature-grid">
          {FEATURES.map((f, i) => (
            <div key={f.title} className="card" data-reveal style={{ "--rd": `${i * 80}ms` }}>
              <div style={{ marginBottom: 16 }}>{f.icon}</div>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Eligibility */}
      <section className="content-section" style={{ background: "var(--pale-blue)" }}>
        <h2 data-reveal>Eligibility Requirements</h2>
        <p data-reveal>
          Portal access will be restricted to qualified pharmaceutical professionals and organisations.
          Salus Vita verifies all applications against regulatory databases and professional registries
          before granting access. The following categories of professionals will be eligible to apply.
        </p>
        <div className="feature-grid">
          {ELIGIBILITY.map((e, i) => (
            <div key={e.title} className="card" data-reveal style={{ "--rd": `${i * 80}ms` }}>
              <h3>{e.title}</h3>
              <p>{e.desc}</p>
            </div>
          ))}
        </div>
        <p data-reveal style={{ marginTop: 24, marginBottom: 0, fontSize: 14, color: "var(--muted)" }}>
          If your organisation type is not listed above, please <Link to="/contact" style={{ color: "var(--teal)" }}>contact us</Link> to
          discuss eligibility. Salus Vita reserves the right to approve or decline any application at its discretion.
        </p>
      </section>

      {/* Verification Process */}
      <section className="content-section">
        <h2 data-reveal>Verification Process</h2>
        <p data-reveal>
          Portal access will not be instant. Every application will undergo a structured verification process
          to ensure the security and integrity of the platform.
        </p>
        <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          {[
            {
              step: "01",
              title: "Submit Your Application",
              desc: "Complete the online application form with your organisation details, ABN or registration number, regulatory licence information, and a description of your intended use of the portal.",
            },
            {
              step: "02",
              title: "Credential Verification",
              desc: "Our compliance team verifies your professional credentials, regulatory licence status, and organisational standing against relevant registries and databases.",
            },
            {
              step: "03",
              title: "Account Activation",
              desc: "Upon successful verification, you receive secure login credentials and a guided introduction to the portal. The typical review period is one to two business days.",
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

      {/* CTA Banner */}
      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <h2>Stay Informed</h2>
          <p>
            The Professional Portal is under active development. Register your interest above
            or contact our team to learn more about what the portal will offer.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <Link to="/about" className="btn btn-outline">
              About Salus Vita
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
