import { Link } from "react-router-dom"
import { navigation, legalLinks } from "../../data/navigation"
import FangMark from "../ui/FangMark"

export default function Footer() {
  // Build footer columns from the new subMenus structure
  const footerColumns = navigation.flatMap((navItem) =>
    navItem.subMenus
      ? navItem.subMenus.slice(0, 1).map((sub) => ({
          heading: navItem.label,
          items: sub.items.slice(0, 5),
        }))
      : []
  )

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
          </div>

          {/* Link columns */}
          {footerColumns.map((col) => (
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
