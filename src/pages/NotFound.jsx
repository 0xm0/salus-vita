import { Link } from "react-router-dom"
import FangMark from "../components/ui/FangMark"

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
        <div style={{ marginBottom: 24, display: "flex", justifyContent: "center" }}>
          <FangMark size={120} />
        </div>
        <h1
          style={{
            fontSize: 32,
            fontWeight: 700,
            color: "var(--dark-green, #0f3d22)",
            margin: "0 0 12px",
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
          The page you are looking for does not exist or has been moved.
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
