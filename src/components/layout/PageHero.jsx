import { Link } from "react-router-dom"

export default function PageHero({ eyebrow, title, description, primaryCTA, secondaryCTA, breadcrumbs }) {
  return (
    <section className="page-hero">
      <div className="page-hero-inner">
        {breadcrumbs && breadcrumbs.length > 0 && (
          <nav className="breadcrumbs" aria-label="Breadcrumb">
            <Link to="/">Home</Link>
            {breadcrumbs.map((crumb, i) => (
              <span key={i}>
                <span className="separator">/</span>
                {crumb.path ? (
                  <Link to={crumb.path}>{crumb.label}</Link>
                ) : (
                  <span>{crumb.label}</span>
                )}
              </span>
            ))}
          </nav>
        )}
        {eyebrow && <span className="eyebrow">{eyebrow}</span>}
        <h1>{title}</h1>
        {description && <p>{description}</p>}
        {(primaryCTA || secondaryCTA) && (
          <div className="hero-actions">
            {primaryCTA && (
              <Link to={primaryCTA.to || "/contact"} className="btn btn-primary">
                {primaryCTA.label}
              </Link>
            )}
            {secondaryCTA && (
              <Link to={secondaryCTA.to || "/about"} className="btn btn-outline">
                {secondaryCTA.label}
              </Link>
            )}
          </div>
        )}
      </div>
    </section>
  )
}
