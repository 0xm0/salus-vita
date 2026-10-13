import { Link } from "react-router-dom"
import { legalLinks } from "../../data/navigation"
import FangMark from "../ui/FangMark"

const FOOTER_COLUMNS = [
  {
    heading: "Company",
    items: [
      { label: "About", path: "/about" },
      { label: "Our Story", path: "/about/our-story" },
      { label: "Leadership", path: "/about/leadership" },
      { label: "Careers", path: "/careers" },
    ],
  },
  {
    heading: "Services",
    items: [
      { label: "Global Sourcing", path: "/solutions/global-sourcing" },
      { label: "International Procurement", path: "/solutions/international-procurement" },
      { label: "Australian Importation", path: "/solutions/australian-importation" },
      { label: "Cross-Border Supply", path: "/solutions/cross-border-supply" },
    ],
  },
  {
    heading: "Quality",
    items: [
      { label: "Supplier Assessment", path: "/quality/supplier-assessment" },
      { label: "Regulatory Framework", path: "/quality/regulatory-framework" },
      { label: "Supply Chain Integrity", path: "/quality/supply-chain-integrity" },
    ],
  },
  {
    heading: "Resources",
    items: [
      { label: "Blog & Insights", path: "/resources/blog" },
      { label: "Case Studies", path: "/resources/case-studies" },
      { label: "FAQs", path: "/resources/faqs" },
      { label: "Glossary", path: "/resources/glossary" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="sv-footer">
      <div className="sv-footer-inner">
        <div className="sv-footer-top">
          {/* Brand column */}
          <div className="sv-footer-brand">
            <Link to="/" className="sv-brand">
              <FangMark size={28} />
              Salus Vita
            </Link>
            <p>
              Connecting pharmaceutical manufacturers with markets worldwide.
              Australian-headquartered international pharmaceutical supply.
            </p>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, margin: "8px 0 0" }}>
              2 Queen Street<br />
              Melbourne VIC 3000, Australia
            </p>
            <p style={{ fontSize: 13, margin: "8px 0 0" }}>
              <a
                href="https://salusvita.net"
                style={{ color: "var(--teal)", textDecoration: "none" }}
                target="_blank"
                rel="noopener noreferrer"
              >
                salusvita.net
              </a>
            </p>
          </div>

          {/* Link columns */}
          {FOOTER_COLUMNS.map((col) => (
            <div key={col.heading} className="sv-footer-col">
              <h4>{col.heading}</h4>
              {col.items.map((item) => (
                <Link key={item.path} to={item.path}>
                  {item.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="sv-footer-bottom">
          <span>&copy; {new Date().getFullYear()} Salus Vita Pty Ltd (ABN 92 668 370 518). All rights reserved.</span>
          <nav className="sv-footer-legal" aria-label="Legal links">
            {legalLinks.map((link) => (
              <Link key={link.path} to={link.path}>
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </footer>
  )
}
