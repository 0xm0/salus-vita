import { Link } from "react-router-dom"
import { navigation, legalLinks } from "../../data/navigation"

export default function Footer() {
  // Select columns for footer: About, Solutions, Quality, Resources
  const footerSections = navigation.filter(
    (n) => n.children && ["About", "Solutions", "Quality", "Resources"].includes(n.label)
  )

  return (
    <footer className="sv-footer">
      <div className="sv-footer-inner">
        <div className="sv-footer-top">
          {/* Brand column */}
          <div className="sv-footer-brand">
            <Link to="/" className="sv-brand">
              <span className="sv-brand-icon" aria-hidden="true">SV</span>
              Salus Vita
            </Link>
            <p>
              Connecting pharmaceutical manufacturers with markets worldwide.
              Australian-headquartered international pharmaceutical supply.
            </p>
          </div>

          {/* Link columns */}
          {footerSections.map((section) => (
            <div key={section.label} className="sv-footer-col">
              <h4>{section.label}</h4>
              <Link to={section.path}>{section.label} Overview</Link>
              {section.children.map((child) => (
                <Link key={child.path} to={child.path}>
                  {child.label}
                </Link>
              ))}
            </div>
          ))}
        </div>

        <div className="sv-footer-bottom">
          <span>&copy; {new Date().getFullYear()} Salus Vita Pty Ltd. All rights reserved.</span>
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
