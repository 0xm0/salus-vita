import { useState, useEffect, useCallback } from "react"
import { Link, useLocation } from "react-router-dom"
import { navigation, utilityNav } from "../../data/navigation"

const ChevronDown = () => (
  <svg className="chevron" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="m6 9 6 6 6-6" />
  </svg>
)

const MenuIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 6h16M4 12h16M4 18h16" />
  </svg>
)

const CloseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 6 6 18M6 6l12 12" />
  </svg>
)

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const location = useLocation()

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false)
  }, [location.pathname])

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const toggleMobile = useCallback(() => {
    setMobileOpen(prev => !prev)
  }, [])

  const isHome = location.pathname === "/"

  return (
    <nav className={`sv-navbar${isHome ? " sv-navbar-transparent" : ""}`} role="navigation" aria-label="Main navigation">
      <div className="sv-navbar-inner">
        {/* Brand */}
        <Link to="/" className="sv-brand">
          <span className="sv-brand-icon" aria-hidden="true">SV</span>
          Salus Vita
        </Link>

        {/* Desktop nav */}
        <ul className="sv-nav-links">
          {navigation.map((item) => (
            <li key={item.label} className="sv-nav-item">
              {item.children ? (
                <>
                  <Link
                    to={item.path}
                    className={`sv-nav-link${location.pathname.startsWith(item.path) && item.path !== "/" ? " active" : ""}`}
                  >
                    {item.label}
                    <ChevronDown />
                  </Link>
                  <div className="sv-dropdown">
                    {item.children.map((child) => (
                      <Link key={child.path} to={child.path}>
                        {child.label}
                      </Link>
                    ))}
                  </div>
                </>
              ) : (
                <Link
                  to={item.path}
                  className={`sv-nav-link${location.pathname === item.path ? " active" : ""}`}
                >
                  {item.label}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Utility nav */}
        <div className="sv-utility-nav">
          {utilityNav.map((item) =>
            item.isPrimary ? (
              <Link key={item.path} to={item.path} className="btn btn-primary" style={{ padding: "8px 18px", fontSize: "14px" }}>
                {item.label}
              </Link>
            ) : (
              <Link key={item.path} to={item.path} className="sv-utility-link">
                {item.label}
              </Link>
            )
          )}
          <button
            className="sv-mobile-toggle"
            onClick={toggleMobile}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`sv-mobile-menu${mobileOpen ? " open" : ""}`} aria-hidden={!mobileOpen}>
        {navigation.map((item) => (
          <div key={item.label} className="sv-mobile-section">
            <Link to={item.path} onClick={() => setMobileOpen(false)} style={{ fontWeight: 600 }}>
              {item.label}
            </Link>
            {item.children && item.children.map((child) => (
              <Link key={child.path} to={child.path} onClick={() => setMobileOpen(false)} style={{ paddingLeft: 32 }}>
                {child.label}
              </Link>
            ))}
          </div>
        ))}
        <div className="sv-mobile-cta">
          {utilityNav.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              className={item.isPrimary ? "btn btn-primary" : "btn btn-outline"}
              onClick={() => setMobileOpen(false)}
              style={{ justifyContent: "center" }}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  )
}
