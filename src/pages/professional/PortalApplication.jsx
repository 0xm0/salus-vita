import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

export default function PortalApplication() {
  return (
    <>
      <PageHero
        eyebrow="PROFESSIONAL PORTAL"
        title="Portal Application"
        description="Apply for verified access to the Salus Vita Professional Portal."
        breadcrumbs={[{ label: "Professional", path: "/professional" }, { label: "Apply" }]}
      />

      <section className="content-section" style={{ maxWidth: 640, textAlign: "center" }}>
        <div
          style={{
            padding: "48px 32px",
            background: "var(--pale-blue)",
            borderRadius: "var(--radius)",
          }}
        >
          <h2 style={{ marginBottom: 16, color: "var(--navy)" }}>Portal Applications Are Not Yet Open</h2>
          <p style={{ color: "var(--muted)", lineHeight: 1.7, marginBottom: 24 }}>
            The Professional Portal is currently in development. Applications will open when the portal launches. Register your interest on the portal landing page and we will notify you when access becomes available.
          </p>
          <Link to="/professional" className="btn btn-primary">
            Register Your Interest
          </Link>
        </div>
      </section>
    </>
  )
}
