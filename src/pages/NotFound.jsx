import { Link } from "react-router-dom"

export default function NotFound() {
  return (
    <section
      style={{
        minHeight: "60vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        textAlign: "center",
        padding: "80px 24px",
      }}
    >
      <div style={{ maxWidth: 520 }}>
        <p
          style={{
            fontSize: 80,
            fontWeight: 700,
            color: "var(--teal)",
            lineHeight: 1,
            margin: 0,
          }}
        >
          404
        </p>
        <h1
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "var(--navy)",
            margin: "16px 0 12px",
          }}
        >
          Page Not Found
        </h1>
        <p
          style={{
            fontSize: 17,
            color: "var(--muted)",
            lineHeight: 1.6,
            margin: "0 0 32px",
          }}
        >
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
          <Link
            to="/"
            className="sv-btn sv-btn-primary"
            style={{ minWidth: 160 }}
          >
            Back to Home
          </Link>
          <Link
            to="/contact"
            className="sv-btn sv-btn-outline"
            style={{ minWidth: 160 }}
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  )
}
