import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

export default function Dashboard() {
  return (
    <>
      <PageHero
        eyebrow="PROFESSIONAL PORTAL"
        title="Dashboard"
        description="The Professional Portal dashboard will be available when the portal launches."
        breadcrumbs={[
          { label: "Professional", path: "/professional" },
          { label: "Dashboard" },
        ]}
      />

      <section className="content-section" style={{ maxWidth: 720 }}>
        <div
          data-reveal
          style={{
            padding: "32px 28px",
            background: "rgba(23, 110, 121, 0.06)",
            border: "1px solid rgba(23, 110, 121, 0.15)",
            borderRadius: 12,
            textAlign: "center",
          }}
        >
          <span
            style={{
              display: "inline-block",
              padding: "6px 18px",
              borderRadius: 999,
              fontSize: 13,
              fontWeight: 600,
              background: "rgba(23, 110, 121, 0.12)",
              color: "#176E79",
              letterSpacing: "0.04em",
              marginBottom: 16,
            }}
          >
            COMING SOON
          </span>
          <h2 style={{ margin: "0 0 12px", fontSize: 22 }}>
            The Professional Portal Is Not Yet Available
          </h2>
          <p style={{ margin: "0 0 24px", color: "var(--muted)", lineHeight: 1.6 }}>
            The Professional Portal is currently in development. Check back soon for updates,
            or register your interest on the portal landing page to be notified when it launches.
          </p>
          <Link to="/professional" className="btn btn-primary">
            Back to Professional Portal
          </Link>
        </div>
      </section>
    </>
  )
}
