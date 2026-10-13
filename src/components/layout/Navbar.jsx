import { useState, useEffect, useCallback } from "react"
import { Link, useLocation } from "react-router-dom"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown, Menu, X } from "lucide-react"
import { navigation, utilityNav } from "../../data/navigation"
import FangMark from "../ui/FangMark"

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState(null)
  const [hoverId, setHoverId] = useState(null)
  const [mobileOpen, setMobileOpen] = useState(false)
  const [mobileAccordion, setMobileAccordion] = useState(null)
  const location = useLocation()

  /* Close everything on route change */
  useEffect(() => {
    setMobileOpen(false)
    setMobileAccordion(null)
    setOpenMenu(null)
  }, [location.pathname])

  /* Lock body scroll when mobile menu is open */
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : ""
    return () => { document.body.style.overflow = "" }
  }, [mobileOpen])

  const toggleMobile = useCallback(() => {
    setMobileOpen(prev => !prev)
  }, [])

  const toggleAccordion = useCallback((label) => {
    setMobileAccordion(prev => prev === label ? null : label)
  }, [])

  return (
    <>
    <nav className="sv-navbar" role="navigation" aria-label="Main navigation">
      <div className="sv-navbar-inner">
        {/* Brand */}
        <Link to="/" className="sv-brand">
          <FangMark size={32} />
          <span className="sv-brand-text">Salus Vita</span>
        </Link>

        {/* Desktop nav - dorpdown pattern */}
        <ul className="sv-nav-links">
          {navigation.map((navItem) => (
            <li
              key={navItem.id}
              className="relative"
              onMouseEnter={() => setOpenMenu(navItem.label)}
              onMouseLeave={() => setOpenMenu(null)}
            >
              <button
                type="button"
                className="sv-dorpdown-trigger group"
                onMouseEnter={() => setHoverId(navItem.id)}
                onMouseLeave={() => setHoverId(null)}
              >
                <span>{navItem.label}</span>
                {navItem.subMenus && (
                  <ChevronDown
                    className={`sv-dorpdown-chevron ${openMenu === navItem.label ? "sv-dorpdown-chevron--open" : ""}`}
                  />
                )}
                <AnimatePresence>
                  {(hoverId === navItem.id || openMenu === navItem.label) && (
                    <motion.div
                      layoutId="hover-bg"
                      className="sv-dorpdown-pill"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                    />
                  )}
                </AnimatePresence>
              </button>

              <AnimatePresence>
                {openMenu === navItem.label && navItem.subMenus && (
                  <div className="sv-dorpdown-anchor">
                    <motion.div
                      className="sv-dorpdown-panel"
                      layoutId="menu"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ type: "spring", bounce: 0.15, duration: 0.4 }}
                    >
                      <div className="sv-dorpdown-columns">
                        {navItem.subMenus.map((sub) => (
                          <motion.div layout className="sv-dorpdown-col" key={sub.title}>
                            <h3 className="sv-dorpdown-heading">{sub.title}</h3>
                            <ul className="sv-dorpdown-items">
                              {sub.items.map((item) => {
                                const Icon = item.icon
                                return (
                                  <li key={item.path}>
                                    <Link
                                      to={item.path}
                                      className="sv-dorpdown-item group"
                                    >
                                      <div className="sv-dorpdown-item-icon">
                                        <Icon className="h-5 w-5 flex-none" />
                                      </div>
                                      <div className="sv-dorpdown-item-text">
                                        <p className="sv-dorpdown-item-label">
                                          {item.label}
                                        </p>
                                        <p className="sv-dorpdown-item-desc">
                                          {item.description}
                                        </p>
                                      </div>
                                    </Link>
                                  </li>
                                )
                              })}
                            </ul>
                          </motion.div>
                        ))}
                      </div>
                    </motion.div>
                  </div>
                )}
              </AnimatePresence>
            </li>
          ))}
        </ul>

        {/* Utility nav */}
        <div className="sv-utility-nav">
          {utilityNav.map((item) =>
            item.isPrimary ? (
              <Link key={item.path} to={item.path} className="btn btn-primary sv-utility-btn">
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
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

    </nav>
    {/* Mobile menu overlay - rendered outside nav to avoid stacking context from backdrop-filter */}
    <AnimatePresence>
      {mobileOpen && (
        <motion.div
          className="sv-mobile-menu"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          aria-hidden={!mobileOpen}
        >
          <div className="sv-mobile-menu-body">
            {navigation.map((item) => (
              <div key={item.id} className="sv-mobile-section">
                <button
                  type="button"
                  className={`sv-mobile-accordion-btn${mobileAccordion === item.label ? " open" : ""}`}
                  onClick={() => toggleAccordion(item.label)}
                >
                  {item.label}
                  <ChevronDown
                    size={14}
                    className={`transition-transform duration-250 ${mobileAccordion === item.label ? "rotate-180" : ""}`}
                  />
                </button>
                <div className={`sv-mobile-accordion-panel${mobileAccordion === item.label ? " open" : ""}`}>
                  {item.subMenus && item.subMenus.map((sub) => (
                    <div key={sub.title} className="sv-mobile-group">
                      {item.subMenus.length > 1 && (
                        <span className="sv-mobile-group-heading">{sub.title}</span>
                      )}
                      {sub.items.map((link) => (
                        <Link
                          key={link.path}
                          to={link.path}
                          className="sv-mobile-link"
                          onClick={() => setMobileOpen(false)}
                        >
                          {link.label}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          <div className="sv-mobile-cta">
            {utilityNav.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={item.isPrimary ? "btn btn-primary sv-mobile-cta-btn" : "btn btn-outline sv-mobile-cta-btn"}
                onClick={() => setMobileOpen(false)}
              >
                {item.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
    </>
  )
}
