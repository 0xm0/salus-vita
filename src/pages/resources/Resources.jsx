import { useState } from "react"
import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const POSTS = [
  {
    slug: "navigating-tga-importation",
    title: "Navigating TGA Importation Requirements for Pharmaceutical Products",
    date: "October 2024",
    category: "Regulatory",
    excerpt:
      "A practical overview of the Therapeutic Goods Administration's current framework for importing pharmaceutical products into Australia, including Special Access Scheme pathways and documentation requirements.",
  },
  {
    slug: "gmp-certification-guide",
    title: "GMP Certification: A Guide for International Pharmaceutical Supply",
    date: "September 2024",
    category: "Quality",
    excerpt:
      "Understanding Good Manufacturing Practice certification, its role in cross-border pharmaceutical supply, and how sourcing partners can verify and maintain GMP compliance across supplier networks.",
  },
  {
    slug: "cold-chain-best-practices",
    title: "Cold-Chain Logistics: Maintaining Product Integrity Across Borders",
    date: "August 2024",
    category: "Supply Chain",
    excerpt:
      "Key considerations for temperature-controlled pharmaceutical supply chains, from GDP-compliant storage through to last-mile delivery and chain-of-custody documentation.",
  },
  {
    slug: "cross-border-regulatory-landscape",
    title: "Cross-Border Regulatory Landscape in the Asia-Pacific Region",
    date: "July 2024",
    category: "Regulatory",
    excerpt:
      "An analysis of the diverse regulatory requirements across Asia-Pacific pharmaceutical markets and strategies for efficient multi-market registration and supply.",
  },
  {
    slug: "api-sourcing-trends",
    title: "Global API Sourcing Trends and Supply Chain Resilience",
    date: "June 2024",
    category: "Supply Chain",
    excerpt:
      "How shifting supply dynamics, geopolitical factors, and evolving quality expectations are reshaping active pharmaceutical ingredient sourcing strategies worldwide.",
  },
  {
    slug: "managed-access-programs",
    title: "Managed Access Programs: Enabling Patient Access to Unregistered Medicines",
    date: "May 2024",
    category: "Market Access",
    excerpt:
      "How managed access, compassionate use, and special access frameworks operate across key markets, and the role of supply partners in facilitating compliant access to needed therapies.",
  },
  {
    slug: "gdp-compliance-pharma-supply",
    title: "GDP Compliance in International Pharmaceutical Distribution",
    date: "April 2024",
    category: "Quality",
    excerpt:
      "A comprehensive look at Good Distribution Practice requirements, their application to cross-border pharmaceutical supply, and how sourcing organisations ensure compliance throughout the logistics chain.",
  },
  {
    slug: "who-prequalification-programme",
    title: "WHO Prequalification: What It Means for Pharmaceutical Sourcing",
    date: "March 2024",
    category: "Market Access",
    excerpt:
      "Understanding the World Health Organization's Prequalification Programme, its significance for procurement by international agencies, and how it influences sourcing decisions in developing markets.",
  },
]

const CATEGORIES = ["All", ...Array.from(new Set(POSTS.map((p) => p.category)))]

const categoryColors = {
  Regulatory: { bg: "rgba(23,110,121,0.10)", color: "#176E79" },
  Quality: { bg: "rgba(21,50,74,0.10)", color: "#15324A" },
  "Supply Chain": { bg: "rgba(23,110,121,0.15)", color: "#0f5a63" },
  "Market Access": { bg: "rgba(21,50,74,0.08)", color: "#2a5a7a" },
}

export default function Resources() {
  const [activeCategory, setActiveCategory] = useState("All")

  const filtered =
    activeCategory === "All"
      ? POSTS
      : POSTS.filter((p) => p.category === activeCategory)

  return (
    <>
      <PageHero
        eyebrow="KNOWLEDGE HUB"
        title="Resources and Insights"
        description="Industry analysis, regulatory updates, and practical guidance from the Salus Vita team. Explore our latest thinking on pharmaceutical sourcing, supply chain management, and market access."
        primaryCTA={{ label: "Subscribe to Updates", to: "/contact" }}
      />

      <section className="content-section">
        <div
          data-reveal
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 16,
            maxWidth: 480,
          }}
        >
          <Link
            to="/resources/faqs"
            className="card"
            style={{
              textDecoration: "none",
              color: "inherit",
              textAlign: "center",
              padding: "24px 20px",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--teal)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: 28, height: 28, marginBottom: 10 }}
            >
              <circle cx="12" cy="12" r="10" />
              <path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3" />
              <line x1="12" y1="17" x2="12.01" y2="17" />
            </svg>
            <h3 style={{ fontSize: 15 }}>Frequently Asked Questions</h3>
          </Link>
          <Link
            to="/resources/glossary"
            className="card"
            style={{
              textDecoration: "none",
              color: "inherit",
              textAlign: "center",
              padding: "24px 20px",
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--teal)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: 28, height: 28, marginBottom: 10 }}
            >
              <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20" />
              <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z" />
              <line x1="8" y1="7" x2="16" y2="7" />
              <line x1="8" y1="11" x2="14" y2="11" />
            </svg>
            <h3 style={{ fontSize: 15 }}>Pharmaceutical Glossary</h3>
          </Link>
        </div>
      </section>

      <section className="content-section">
        <h2 data-reveal>Latest Articles</h2>
        <div
          data-reveal
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 8,
            marginTop: 12,
            marginBottom: 28,
          }}
        >
          {CATEGORIES.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: "7px 18px",
                fontSize: 13,
                fontWeight: 600,
                fontFamily: "inherit",
                borderRadius: 100,
                border:
                  activeCategory === cat
                    ? "1.5px solid var(--teal)"
                    : "1.5px solid var(--line)",
                background:
                  activeCategory === cat
                    ? "var(--teal)"
                    : "transparent",
                color:
                  activeCategory === cat ? "#fff" : "var(--muted)",
                cursor: "pointer",
                transition: "all 0.2s",
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        <div className="feature-grid">
          {filtered.map((post, i) => {
            const chip = categoryColors[post.category] || {
              bg: "rgba(21,50,74,0.08)",
              color: "#15324A",
            }
            return (
              <Link
                to={`/resources/${post.slug}`}
                key={post.slug}
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
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    marginBottom: 10,
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 600,
                      letterSpacing: "0.04em",
                      textTransform: "uppercase",
                      padding: "3px 10px",
                      borderRadius: 100,
                      background: chip.bg,
                      color: chip.color,
                    }}
                  >
                    {post.category}
                  </span>
                  <span
                    style={{
                      fontSize: 12,
                      color: "var(--muted-2)",
                      fontWeight: 500,
                    }}
                  >
                    {post.date}
                  </span>
                </div>
                <h3 style={{ marginTop: 4 }}>{post.title}</h3>
                <p style={{ flex: 1 }}>{post.excerpt}</p>
                <span
                  style={{
                    fontSize: 13,
                    fontWeight: 600,
                    color: "var(--teal)",
                    marginTop: 12,
                  }}
                >
                  Read Article
                </span>
              </Link>
            )
          })}
        </div>

        {filtered.length === 0 && (
          <p
            data-reveal
            style={{
              textAlign: "center",
              color: "var(--muted-2)",
              padding: "40px 0",
            }}
          >
            No articles found in this category.
          </p>
        )}
      </section>

      <section className="cta-banner">
        <div className="cta-card" data-reveal>
          <h2>Stay Informed</h2>
          <p>
            Subscribe to receive the latest insights on pharmaceutical supply,
            regulatory developments, and market access from the Salus Vita team.
          </p>
          <div className="hero-actions" style={{ justifyContent: "center" }}>
            <Link to="/contact" className="btn btn-primary">
              Contact Us
            </Link>
            <Link to="/resources/faqs" className="btn btn-outline">
              View FAQs
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
