import { Link } from "react-router-dom"

const useUser = () => ({ user: { firstName: "Professional", lastName: "User", emailAddresses: [{ emailAddress: "user@example.com" }] } })

const ENQUIRIES = [
  { id: "ENQ-2026-0847", subject: "Metformin HCl API - Technical Specifications", status: "Awaiting Response", date: "2026-10-11" },
  { id: "ENQ-2026-0831", subject: "Amoxicillin Trihydrate - Certificate of Analysis", status: "Documentation Sent", date: "2026-10-08" },
  { id: "ENQ-2026-0819", subject: "Omeprazole Pellets - Commercial Quotation", status: "Under Review", date: "2026-10-04" },
  { id: "ENQ-2026-0802", subject: "Atorvastatin Calcium - Regulatory Dossier", status: "Completed", date: "2026-09-28" },
  { id: "ENQ-2026-0788", subject: "Losartan Potassium - Supply Agreement", status: "Completed", date: "2026-09-21" },
]

const STATS = [
  { value: "3", label: "Active Enquiries", color: "#176E79" },
  { value: "14", label: "Documents Available", color: "#15324A" },
  { value: "2", label: "Pending Responses", color: "#b47a00" },
]

const QUICK_ACTIONS = [
  {
    title: "New Enquiry",
    desc: "Submit a product-specific sourcing or supply enquiry to our commercial team.",
    to: "/contact/sourcing-enquiry",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14M5 12h14" />
      </svg>
    ),
  },
  {
    title: "View Documents",
    desc: "Access certificates, technical specifications, regulatory files, and commercial documentation.",
    to: "/professional/documents",
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="16" y1="13" x2="8" y2="13" />
        <line x1="16" y1="17" x2="8" y2="17" />
        <polyline points="10 9 9 9 8 9" />
      </svg>
    ),
  },
  {
    title: "Update Profile",
    desc: "Manage your organisation details, contact information, and communication preferences.",
    to: null,
    icon: (
      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
        <circle cx="12" cy="7" r="4" />
      </svg>
    ),
  },
]

function statusStyle(status) {
  switch (status) {
    case "Awaiting Response":
      return { background: "rgba(245, 166, 35, 0.1)", color: "#b47a00" }
    case "Documentation Sent":
      return { background: "rgba(23, 110, 121, 0.1)", color: "#176E79" }
    case "Under Review":
      return { background: "var(--pale-blue, #E9F0F2)", color: "#15324A" }
    case "Completed":
      return { background: "rgba(23, 110, 121, 0.12)", color: "#0e5a62" }
    default:
      return { background: "var(--pale-blue, #E9F0F2)", color: "var(--muted)" }
  }
}

export default function Dashboard() {
  const { user } = useUser()
  const firstName = user?.firstName || "Professional"
  const today = new Date()
  const dateStr = today.toLocaleDateString("en-AU", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  })

  return (
    <>
      {/* Welcome Banner */}
      <section
        style={{
          background: "linear-gradient(135deg, #15324A 0%, #176E79 100%)",
          padding: "64px 0 48px",
          color: "#fff",
        }}
      >
        <div className="page-hero-inner" style={{ maxWidth: 1120, margin: "0 auto", padding: "0 24px" }}>
          <nav className="breadcrumbs" aria-label="Breadcrumb" style={{ marginBottom: 24, opacity: 0.7 }}>
            <Link to="/" style={{ color: "#fff", textDecoration: "none" }}>Home</Link>
            <span className="separator" style={{ margin: "0 6px", color: "rgba(255,255,255,0.5)" }}>/</span>
            <Link to="/professional" style={{ color: "#fff", textDecoration: "none" }}>Professional</Link>
            <span className="separator" style={{ margin: "0 6px", color: "rgba(255,255,255,0.5)" }}>/</span>
            <span>Dashboard</span>
          </nav>
          <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 8 }}>
            <div
              style={{
                width: 52,
                height: 52,
                borderRadius: "50%",
                background: "rgba(255,255,255,0.15)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                fontSize: 22,
                fontWeight: 700,
                flexShrink: 0,
              }}
            >
              {(user?.firstName?.[0] || "P").toUpperCase()}
            </div>
            <div>
              <h1 style={{ fontSize: 28, fontWeight: 700, margin: 0, lineHeight: 1.3 }}>
                Welcome back, {firstName}
              </h1>
              <p style={{ margin: "4px 0 0", fontSize: 15, opacity: 0.75 }}>{dateStr}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Row */}
      <section className="content-section" style={{ marginTop: -24 }}>
        <div
          className="stats"

          data-reveal
        >
          {STATS.map((s, i) => (
            <div
              className="stat"
              key={s.label}
              data-reveal
              style={{
                "--rd": `${i * 80}ms`,
                borderLeft: `3px solid ${s.color}`,
              }}
            >
              <span className="stat-value" style={{ color: s.color }}>{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Recent Enquiries */}
      <section className="content-section">
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: 12, marginBottom: 16 }}>
          <h2 data-reveal style={{ margin: 0 }}>Recent Enquiries</h2>
          <Link
            to="/contact/sourcing-enquiry"
            className="btn btn-outline"
            data-reveal
            style={{ fontSize: 14, padding: "8px 20px" }}
          >
            New Enquiry
          </Link>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
          {ENQUIRIES.map((enq, i) => {
            const badge = statusStyle(enq.status)
            return (
              <div
                key={enq.id}
                className="card"
                data-reveal
                style={{
                  "--rd": `${i * 60}ms`,
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: 12,
                }}
              >
                <div style={{ flex: 1, minWidth: 200 }}>
                  <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 4 }}>
                    <span style={{ fontSize: 13, fontWeight: 600, color: "var(--teal, #176E79)" }}>{enq.id}</span>
                  </div>
                  <h3 style={{ fontSize: 15, margin: 0, fontWeight: 500 }}>{enq.subject}</h3>
                </div>
                <div style={{ display: "flex", alignItems: "center", gap: 16, flexShrink: 0 }}>
                  <span
                    style={{
                      display: "inline-block",
                      padding: "5px 14px",
                      borderRadius: 999,
                      fontSize: 12,
                      fontWeight: 600,
                      ...badge,
                    }}
                  >
                    {enq.status}
                  </span>
                  <span style={{ fontSize: 13, color: "var(--muted-2, #8c9bab)", whiteSpace: "nowrap" }}>{enq.date}</span>
                </div>
              </div>
            )
          })}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="content-section">
        <h2 data-reveal>Quick Actions</h2>
        <div
          className="feature-grid"
        >
          {QUICK_ACTIONS.map((action, i) => {
            const inner = (
              <>
                <div
                  style={{
                    width: 48,
                    height: 48,
                    borderRadius: 10,
                    background: "rgba(23, 110, 121, 0.08)",
                    color: "var(--teal, #176E79)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    marginBottom: 16,
                    flexShrink: 0,
                  }}
                >
                  {action.icon}
                </div>
                <h3 style={{ fontSize: 16, marginBottom: 8 }}>{action.title}</h3>
                <p style={{ fontSize: 14, margin: 0 }}>{action.desc}</p>
              </>
            )

            if (action.to) {
              return (
                <Link
                  to={action.to}
                  key={action.title}
                  className="card"
                  data-reveal
                  style={{
                    "--rd": `${i * 80}ms`,
                    textDecoration: "none",
                    color: "inherit",
                    display: "flex",
                    flexDirection: "column",
                  }}
                >
                  {inner}
                </Link>
              )
            }

            return (
              <div
                key={action.title}
                className="card"
                data-reveal
                style={{
                  "--rd": `${i * 80}ms`,
                  display: "flex",
                  flexDirection: "column",
                  opacity: 0.7,
                  cursor: "default",
                }}
              >
                {inner}
                <span style={{ fontSize: 12, color: "var(--muted-2, #8c9bab)", marginTop: 8 }}>Coming soon</span>
              </div>
            )
          })}
        </div>
      </section>

      {/* Account Overview */}
      <section className="content-section">
        <h2 data-reveal>Account Overview</h2>
        <div className="card" data-reveal style={{ display: "flex", flexDirection: "column", gap: 16 }}>
          <div className="grid-2-col">
            <div>
              <span style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted-2, #8c9bab)" }}>
                Account Holder
              </span>
              <p style={{ margin: "4px 0 0", fontSize: 15 }}>{user?.fullName || "Professional User"}</p>
            </div>
            <div>
              <span style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted-2, #8c9bab)" }}>
                Email
              </span>
              <p style={{ margin: "4px 0 0", fontSize: 15 }}>{user?.primaryEmailAddress?.emailAddress || "Not available"}</p>
            </div>
          </div>
          <div className="grid-2-col">
            <div>
              <span style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted-2, #8c9bab)" }}>
                Account Status
              </span>
              <p style={{ margin: "4px 0 0", fontSize: 15 }}>
                <span style={{
                  display: "inline-block",
                  padding: "3px 12px",
                  borderRadius: 999,
                  fontSize: 12,
                  fontWeight: 600,
                  background: "rgba(23, 110, 121, 0.1)",
                  color: "#176E79",
                }}>
                  Active
                </span>
              </p>
            </div>
            <div>
              <span style={{ fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.05em", color: "var(--muted-2, #8c9bab)" }}>
                Member Since
              </span>
              <p style={{ margin: "4px 0 0", fontSize: 15 }}>
                {user?.createdAt
                  ? new Date(user.createdAt).toLocaleDateString("en-AU", { year: "numeric", month: "long" })
                  : "N/A"}
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="related-links">
        <h3>Related</h3>
        <div className="related-grid">
          <Link to="/professional/documents">Document Library</Link>
          <Link to="/professional">Professional Portal</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
