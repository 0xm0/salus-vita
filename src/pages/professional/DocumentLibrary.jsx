import { useState } from "react"
import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const DOCUMENTS = [
  {
    category: "Technical Specifications",
    docs: [
      { title: "Metformin HCl API - Product Specification", date: "2026-10-01", status: "Available" },
      { title: "Amoxicillin Trihydrate - Technical Data Sheet", date: "2026-09-15", status: "Available" },
      { title: "Omeprazole Pellets - Formulation Guide", date: "2026-08-28", status: "Available" },
      { title: "Atorvastatin Calcium - Analytical Methods", date: "2026-09-20", status: "Pending" },
    ],
  },
  {
    category: "Certificates of Analysis",
    docs: [
      { title: "Metformin HCl - Batch MET-2026-Q3-041", date: "2026-10-05", status: "Available" },
      { title: "Amoxicillin Trihydrate - Batch AMX-2026-Q3-018", date: "2026-09-22", status: "Available" },
      { title: "Omeprazole Sodium - Batch OMP-2026-Q3-007", date: "2026-08-30", status: "Available" },
      { title: "Losartan Potassium - Batch LOS-2026-Q3-012", date: "2026-10-08", status: "Pending" },
    ],
  },
  {
    category: "Regulatory Documents",
    docs: [
      { title: "GMP Certificate - Manufacturing Partner Vorentis", date: "2026-07-15", status: "Available" },
      { title: "WHO Prequalification - Metformin HCl", date: "2026-06-20", status: "Available" },
      { title: "TGA Import Licence - Current Period", date: "2026-09-01", status: "Restricted" },
    ],
  },
  {
    category: "Commercial Documents",
    docs: [
      { title: "Supply Agreement Template", date: "2026-08-01", status: "Available" },
      { title: "Commercial Quotation - Q4 2026", date: "2026-10-10", status: "Pending" },
      { title: "Payment Terms and Conditions", date: "2026-07-20", status: "Available" },
    ],
  },
]

const ALL_CATEGORIES = ["All", ...DOCUMENTS.map((d) => d.category)]

function statusColor(status) {
  switch (status) {
    case "Available":
      return { bg: "rgba(23, 110, 121, 0.08)", color: "#176E79" }
    case "Pending":
      return { bg: "rgba(196, 150, 40, 0.10)", color: "#9a7b1c" }
    case "Restricted":
      return { bg: "rgba(180, 50, 50, 0.08)", color: "#a03030" }
    default:
      return { bg: "var(--pale-blue)", color: "var(--muted)" }
  }
}

const PdfIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
    <polyline points="14 2 14 8 20 8" />
  </svg>
)

const DownloadIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
)

const SearchIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
)

export default function DocumentLibrary() {
  const [search, setSearch] = useState("")
  const [activeCategory, setActiveCategory] = useState("All")

  const filteredDocs = DOCUMENTS.map((cat) => ({
    ...cat,
    docs: cat.docs.filter((doc) =>
      doc.title.toLowerCase().includes(search.toLowerCase())
    ),
  })).filter(
    (cat) =>
      (activeCategory === "All" || cat.category === activeCategory) &&
      cat.docs.length > 0
  )

  const totalDocs = DOCUMENTS.reduce((sum, cat) => sum + cat.docs.length, 0)
  const availableCount = DOCUMENTS.reduce(
    (sum, cat) => sum + cat.docs.filter((d) => d.status === "Available").length,
    0
  )

  return (
    <>
      <PageHero
        eyebrow="DOCUMENT LIBRARY"
        title="Technical and Regulatory Documents"
        description="Access product specifications, certificates of analysis, regulatory documentation, and commercial files from your secure document repository."
        breadcrumbs={[
          { label: "Professional", path: "/professional" },
          { label: "Documents" },
        ]}
      />

      {/* Summary Stats */}
      <section className="content-section">
        <div className="stats">
          {[
            { value: String(totalDocs), label: "Total Documents" },
            { value: String(availableCount), label: "Available for Download" },
            { value: String(DOCUMENTS.length), label: "Document Categories" },
          ].map((s, i) => (
            <div className="stat" key={s.label} data-reveal style={{ "--rd": `${i * 80}ms` }}>
              <span className="stat-value">{s.value}</span>
              <span className="stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Search and Filters */}
      <section className="content-section" style={{ paddingTop: 0 }}>
        {/* Search Bar */}
        <div
          data-reveal
          style={{
            display: "flex",
            alignItems: "center",
            gap: 12,
            padding: "12px 16px",
            border: "1px solid var(--line-strong)",
            borderRadius: 8,
            background: "#fff",
            marginBottom: 16,
          }}
        >
          <span style={{ color: "var(--muted)", flexShrink: 0 }}>
            <SearchIcon />
          </span>
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search documents by title..."
            style={{
              border: "none",
              outline: "none",
              fontSize: 15,
              fontFamily: "inherit",
              color: "var(--ink)",
              background: "transparent",
              width: "100%",
            }}
          />
          {search && (
            <button
              onClick={() => setSearch("")}
              style={{
                border: "none",
                background: "none",
                cursor: "pointer",
                color: "var(--muted)",
                fontSize: 18,
                lineHeight: 1,
                padding: 0,
              }}
              aria-label="Clear search"
            >
              x
            </button>
          )}
        </div>

        {/* Category Tabs */}
        <div
          data-reveal
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginBottom: 8,
          }}
        >
          {ALL_CATEGORIES.map((cat) => {
            const count =
              cat === "All"
                ? totalDocs
                : DOCUMENTS.find((d) => d.category === cat)?.docs.length || 0
            const isActive = activeCategory === cat
            return (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                style={{
                  padding: "8px 16px",
                  borderRadius: 6,
                  border: isActive ? "1px solid #176E79" : "1px solid var(--line-strong)",
                  background: isActive ? "rgba(23, 110, 121, 0.08)" : "#fff",
                  color: isActive ? "#176E79" : "var(--muted)",
                  fontSize: 13,
                  fontWeight: isActive ? 600 : 400,
                  fontFamily: "inherit",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                }}
              >
                {cat} ({count})
              </button>
            )
          })}
        </div>
      </section>

      {/* Document List */}
      {filteredDocs.length === 0 ? (
        <section className="content-section">
          <div
            style={{
              textAlign: "center",
              padding: "48px 20px",
              color: "var(--muted)",
            }}
          >
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginBottom: 16, opacity: 0.4 }}
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <h3 style={{ color: "var(--muted)" }}>No Documents Found</h3>
            <p>
              No documents match your current search or filter criteria. Try adjusting your search
              term or selecting a different category.
            </p>
          </div>
        </section>
      ) : (
        filteredDocs.map((cat, ci) => (
          <section className="content-section" key={cat.category} style={{ paddingTop: ci === 0 ? 0 : undefined }}>
            <h2 data-reveal style={{ display: "flex", alignItems: "center", gap: 12 }}>
              {cat.category}
              <span
                style={{
                  fontSize: 12,
                  fontWeight: 500,
                  color: "var(--muted)",
                  background: "var(--pale-blue)",
                  padding: "2px 10px",
                  borderRadius: 12,
                }}
              >
                {cat.docs.length} {cat.docs.length === 1 ? "document" : "documents"}
              </span>
            </h2>
            <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
              {cat.docs.map((doc, di) => {
                const sc = statusColor(doc.status)
                return (
                  <div
                    key={doc.title}
                    className="card"
                    data-reveal
                    style={{
                      "--rd": `${(ci * 4 + di) * 50}ms`,
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      flexWrap: "wrap",
                      gap: 12,
                    }}
                  >
                    <div style={{ display: "flex", alignItems: "center", gap: 16, flex: 1, minWidth: 0 }}>
                      <span
                        style={{
                          display: "inline-flex",
                          alignItems: "center",
                          justifyContent: "center",
                          width: 42,
                          height: 42,
                          borderRadius: 8,
                          background: "rgba(23, 110, 121, 0.06)",
                          color: "#176E79",
                          flexShrink: 0,
                        }}
                      >
                        <PdfIcon />
                      </span>
                      <div style={{ minWidth: 0 }}>
                        <h3 style={{ fontSize: 15, marginBottom: 2, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis" }}>
                          {doc.title}
                        </h3>
                        <p style={{ margin: 0, fontSize: 13, color: "var(--muted-2)" }}>
                          PDF - Updated {doc.date}
                        </p>
                      </div>
                    </div>
                    <div style={{ display: "flex", alignItems: "center", gap: 12, flexShrink: 0 }}>
                      <span
                        style={{
                          display: "inline-block",
                          padding: "4px 12px",
                          borderRadius: 999,
                          fontSize: 12,
                          fontWeight: 600,
                          background: sc.bg,
                          color: sc.color,
                        }}
                      >
                        {doc.status}
                      </span>
                      {doc.status === "Available" ? (
                        <button
                          style={{
                            display: "inline-flex",
                            alignItems: "center",
                            gap: 6,
                            padding: "6px 14px",
                            borderRadius: 6,
                            border: "1px solid #176E79",
                            background: "transparent",
                            color: "#176E79",
                            fontSize: 13,
                            fontWeight: 500,
                            fontFamily: "inherit",
                            cursor: "pointer",
                            transition: "all 0.15s ease",
                          }}
                          onClick={() => {}}
                        >
                          <DownloadIcon />
                          Download
                        </button>
                      ) : doc.status === "Pending" ? (
                        <span style={{ fontSize: 13, color: "var(--muted)", fontStyle: "italic" }}>
                          Processing
                        </span>
                      ) : (
                        <span style={{ fontSize: 13, color: "var(--muted)", fontStyle: "italic" }}>
                          Request Access
                        </span>
                      )}
                    </div>
                  </div>
                )
              })}
            </div>
          </section>
        ))
      )}

      {/* Information Notice */}
      <section className="content-section" style={{ maxWidth: 720 }}>
        <div
          data-reveal
          style={{
            padding: "20px 24px",
            background: "var(--pale-blue)",
            borderRadius: 8,
            fontSize: 14,
            color: "var(--muted)",
            lineHeight: 1.6,
          }}
        >
          <strong style={{ color: "var(--ink)" }}>About This Document Library</strong>
          <br />
          Documents available in this library are provided to verified Professional Portal members only.
          All documents are confidential and subject to the terms of your portal access agreement.
          Documents marked as "Pending" are currently being prepared and will be made available shortly.
          Documents marked as "Restricted" require additional authorisation. Please contact your account
          manager or <Link to="/contact" style={{ color: "var(--teal)" }}>reach out to our team</Link> if
          you require access to a restricted document.
        </div>
      </section>

      <section className="related-links">
        <h3>Related</h3>
        <div className="related-grid">
          <Link to="/professional/dashboard">Dashboard</Link>
          <Link to="/professional">Professional Portal</Link>
          <Link to="/quality">Quality and Compliance</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
