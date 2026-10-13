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
      { label: "Careers", path: "/about/careers" },
    ],
  },
  {
    heading: "Services",
    items: [
      { label: "Global Sourcing", path: "/capabilities/global-sourcing" },
      { label: "International Procurement", path: "/capabilities/international-procurement" },
      { label: "Australian Importation", path: "/capabilities/australian-importation" },
      { label: "Cross-Border Supply", path: "/capabilities/cross-border-supply" },
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
      { label: "Blog & Insights", path: "/resources" },
      { label: "Case Studies", path: "/case-studies" },
      { label: "FAQs", path: "/resources/faqs" },
      { label: "Glossary", path: "/resources/glossary" },
    ],
  },
]

export default function Footer() {
  return (
    <footer className="sv-footer">
      <div className="sv-footer-inner">
        {/* Centered fang mark above everything */}
        <div style={{ textAlign: "center", marginBottom: 32 }}>
          <FangMark size={48} strokeColor="rgba(255,255,255,0.6)" dotColor="rgba(255,255,255,0.4)" />
          <div style={{ width: 60, height: 1, background: "rgba(255,255,255,0.15)", margin: "20px auto 0" }} />
        </div>

        <div className="sv-footer-top">
          {/* Brand column */}
          <div className="sv-footer-brand">
            <Link to="/" className="sv-brand">
              <FangMark size={32} />
              Salus Vita
            </Link>
            <p>
              Connecting pharmaceutical manufacturers with markets worldwide.
              Australian-headquartered international pharmaceutical supply.
            </p>
            <p style={{ fontSize: 13, color: "var(--muted)", lineHeight: 1.6, margin: "8px 0 0" }}>
              Melbourne, Australia | Dubai, UAE
            </p>
            <p style={{ fontSize: 13, margin: "4px 0 0" }}>
              <a href="tel:1300692468" style={{ color: "var(--teal)", textDecoration: "none" }}>1300 692 468</a>
            </p>
            <p style={{ fontSize: 13, margin: "4px 0 0" }}>
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
