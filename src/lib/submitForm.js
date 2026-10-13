const FORMSPREE_ID = import.meta.env.VITE_FORMSPREE_ID || ""
const RECIPIENT = "admin@salusvita.net"

/**
 * Submit form data via Formspree, with a mailto: fallback when Formspree
 * is not configured (i.e. VITE_FORMSPREE_ID is empty or unset).
 *
 * @param {Record<string, string>} data   Key-value pairs from the form
 * @param {string}                 formType  Human-readable form name used in
 *                                           the email subject and as a hidden
 *                                           _formtype field
 * @returns {Promise<{ ok: boolean, message: string }>}
 */
export async function submitForm(data, formType) {
  // Build the payload with Formspree-specific hidden fields
  const payload = {
    ...data,
    _replyto: data.email || "",
    _subject: `Salus Vita - ${formType}`,
    _formtype: formType,
  }

  // ---- Formspree path ----
  if (FORMSPREE_ID) {
    try {
      const res = await fetch(`https://formspree.io/f/${FORMSPREE_ID}`, {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify(payload),
      })

      if (res.ok) {
        return { ok: true, message: "Your submission has been received." }
      }

      // Formspree returns structured errors on validation failures
      const body = await res.json().catch(() => null)
      const detail = body?.errors?.map((e) => e.message).join(", ") || res.statusText
      return { ok: false, message: `Submission failed: ${detail}` }
    } catch (err) {
      // Network error - fall through to mailto
      console.warn("Formspree submission failed, falling back to mailto:", err)
    }
  }

  // ---- mailto: fallback ----
  const subject = encodeURIComponent(`Salus Vita - ${formType}`)
  const body = encodeURIComponent(
    Object.entries(data)
      .filter(([, v]) => v) // skip empty values
      .map(([k, v]) => `${formatLabel(k)}: ${v}`)
      .join("\n")
  )

  window.open(`mailto:${RECIPIENT}?subject=${subject}&body=${body}`, "_self")
  return {
    ok: true,
    message:
      "Your email client has been opened with the form details pre-filled. Please send the email to complete your submission.",
  }
}

/** Convert camelCase / snake_case keys into readable labels */
function formatLabel(key) {
  return key
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (c) => c.toUpperCase())
}
