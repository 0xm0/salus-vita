import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

export default function Privacy() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL"
        title="Privacy Policy"
        description="How Salus Vita Pty Ltd collects, uses, and protects your personal information in accordance with the Australian Privacy Act 1988."
        breadcrumbs={[{ label: "Privacy Policy" }]}
      />

      <section className="content-section" style={{ maxWidth: 800 }}>
        <p data-reveal style={{ fontSize: 13, color: "var(--muted-2)" }}>Last updated: October 2026</p>

        <h2 data-reveal>1. Introduction</h2>
        <p data-reveal>
          Salus Vita Pty Ltd (ABN <a href="https://abr.business.gov.au/ABN/View?abn=92668370518" target="_blank" rel="noopener noreferrer" style={{ color: "var(--teal)" }}>92 668 370 518</a>) ("Salus Vita", "we", "our", "us") is an Australian-headquartered
          international pharmaceutical sourcing, procurement and supply company. We are committed to protecting
          the privacy and security of the personal information we collect and hold.
        </p>
        <p data-reveal>
          This Privacy Policy explains how we collect, use, disclose, store and otherwise handle personal
          information in accordance with the Privacy Act 1988 (Cth) ("Privacy Act") and the Australian
          Privacy Principles ("APPs"). It applies to all personal information collected through our website,
          Professional Portal, enquiry forms, and any direct interactions with our team.
        </p>
        <p data-reveal>
          By accessing our website or providing personal information to us, you acknowledge that you have
          read and understood this Privacy Policy. We encourage you to review this policy periodically,
          as it may be updated from time to time.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>2. Information We Collect</h2>
        <p data-reveal>
          We collect personal information that is reasonably necessary for, or directly related to, the
          functions and activities described in this policy. The types of information we may collect include:
        </p>

        <h3 data-reveal>Personal and Contact Information</h3>
        <ul data-reveal>
          <li>Full name, job title and professional role</li>
          <li>Business email address and telephone number</li>
          <li>Organisation name, ABN or equivalent registration number</li>
          <li>Country or region of operation</li>
          <li>Regulatory licence numbers (such as TGA licence numbers, pharmacy registrations, or equivalent credentials)</li>
          <li>Supporting documentation provided during Professional Portal applications</li>
        </ul>

        <h3 data-reveal>Technical and Usage Information</h3>
        <ul data-reveal>
          <li>IP address, browser type and version, and operating system</li>
          <li>Pages visited, time spent on pages, and navigation paths</li>
          <li>Referring URLs and search terms used to reach our website</li>
          <li>Cookie identifiers and analytics data (see our cookie practices below)</li>
        </ul>

        <h3 data-reveal>Professional Portal Information</h3>
        <ul data-reveal>
          <li>Enquiry and request history, including product-specific enquiries</li>
          <li>Document access and download logs</li>
          <li>Communication records with our account management team</li>
          <li>Account preferences and notification settings</li>
        </ul>

        <h3 data-reveal>Cookies and Similar Technologies</h3>
        <p data-reveal>
          We use cookies and similar tracking technologies to enhance your experience on our website,
          analyse site usage, and support our marketing activities. You can manage your cookie preferences
          through your browser settings. Disabling certain cookies may affect the functionality of our
          website and Professional Portal.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>3. How We Use Your Information</h2>
        <p data-reveal>
          We collect and use personal information for the following purposes:
        </p>
        <ul data-reveal>
          <li>Responding to sourcing, procurement and supply enquiries</li>
          <li>Processing Professional Portal access applications and verifying eligibility</li>
          <li>Providing access to technical documentation, certificates of analysis, and regulatory files</li>
          <li>Managing your Professional Portal account and user credentials</li>
          <li>Facilitating commercial quotations and supply agreements</li>
          <li>Communicating with you about your enquiries, orders, and account activity</li>
          <li>Sending relevant industry updates, product availability notices, and regulatory information where you have consented to receive these</li>
          <li>Improving our website, services, and user experience through analytics</li>
          <li>Complying with our legal and regulatory obligations, including those imposed by the Therapeutic Goods Administration (TGA) and other relevant authorities</li>
          <li>Preventing fraud, ensuring security, and protecting our legitimate business interests</li>
        </ul>
        <p data-reveal>
          We will not use your personal information for purposes other than those outlined in this policy
          unless we obtain your consent or are otherwise permitted or required by law.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>4. Legal Basis for Processing</h2>
        <p data-reveal>
          Under the Privacy Act and the APPs, we process personal information on the following bases:
        </p>
        <ul data-reveal>
          <li>
            <strong>Consent:</strong> Where you have provided your express or implied consent, such as when
            submitting an enquiry form, applying for Professional Portal access, or opting in to receive
            communications from us.
          </li>
          <li>
            <strong>Contractual necessity:</strong> Where processing is necessary to perform our obligations
            under a commercial agreement or supply arrangement, or to take steps at your request prior to
            entering such an arrangement.
          </li>
          <li>
            <strong>Legitimate business interests:</strong> Where processing is reasonably necessary for our
            legitimate business operations, including account management, service improvement, and supply
            chain coordination, provided these interests are not overridden by your privacy rights.
          </li>
          <li>
            <strong>Legal obligations:</strong> Where we are required to collect, retain, or disclose personal
            information to comply with applicable laws and regulations, including requirements of the TGA,
            the Therapeutic Goods Act 1989 (Cth), and other pharmaceutical regulatory frameworks in the
            jurisdictions where we operate.
          </li>
        </ul>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>5. Data Sharing and Disclosure</h2>
        <p data-reveal>
          We do not sell, rent, or trade your personal information to third parties. We may share your
          personal information in the following circumstances:
        </p>
        <ul data-reveal>
          <li>
            <strong>Service providers:</strong> We engage trusted third-party service providers who assist
            us in operating our website and delivering our services. These may include web hosting providers,
            cloud infrastructure services, analytics platforms, authentication and identity verification
            services, and communication tools. All service providers are bound by contractual obligations
            to protect the confidentiality and security of your personal information.
          </li>
          <li>
            <strong>Regulatory authorities:</strong> We may disclose personal information to regulatory
            bodies such as the Therapeutic Goods Administration (TGA), the Office of the Australian
            Information Commissioner (OAIC), or equivalent authorities in other jurisdictions, where
            required by law or in connection with regulatory enquiries or audits.
          </li>
          <li>
            <strong>Professional advisers:</strong> We may share information with our legal, accounting,
            and compliance advisers where necessary for the management of our business and the protection
            of our legal rights.
          </li>
          <li>
            <strong>Related entities:</strong> We may share personal information with our related bodies
            corporate and affiliated entities for the purposes described in this policy, subject to equivalent
            privacy protections.
          </li>
          <li>
            <strong>Legal requirements:</strong> We may disclose personal information where required or
            authorised by law, including in response to court orders, subpoenas, or lawful requests from
            law enforcement agencies.
          </li>
        </ul>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>6. International Data Transfers</h2>
        <p data-reveal>
          As an international pharmaceutical sourcing and supply company, we operate across multiple
          jurisdictions. Your personal information may be transferred to, and processed in, countries
          other than Australia in connection with our supply chain operations, service delivery, and
          business activities.
        </p>
        <p data-reveal>
          In accordance with Australian Privacy Principle 8 (APP 8), before disclosing personal information
          to an overseas recipient, we take reasonable steps to ensure that the recipient does not breach
          the APPs in relation to that information. These steps may include:
        </p>
        <ul data-reveal>
          <li>Entering into contractual arrangements that require the overseas recipient to comply with privacy obligations substantially similar to the APPs</li>
          <li>Conducting due diligence on the privacy and data protection laws of the recipient country</li>
          <li>Implementing technical safeguards such as encryption of data in transit and at rest</li>
          <li>Limiting the scope of information transferred to what is strictly necessary for the specified purpose</li>
        </ul>
        <p data-reveal>
          Countries to which we may transfer personal information include, but are not limited to, those
          in which our supply chain partners, logistics providers, and technology service providers operate.
          If you would like further information about the countries to which your information may be
          transferred, please contact our Privacy Officer.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>7. Data Security</h2>
        <p data-reveal>
          Salus Vita takes the security of your personal information seriously. We implement a range of
          technical and organisational measures designed to protect personal information from misuse,
          interference, loss, unauthorised access, modification, and disclosure. These measures include:
        </p>
        <ul data-reveal>
          <li>Encryption of personal data in transit (TLS/SSL) and at rest</li>
          <li>Role-based access controls and multi-factor authentication for internal systems</li>
          <li>Regular security assessments, vulnerability scanning, and penetration testing</li>
          <li>Staff training on data protection, privacy obligations, and information security awareness</li>
          <li>Incident response procedures for the identification, containment, and notification of data breaches in accordance with the Notifiable Data Breaches (NDB) scheme under Part IIIC of the Privacy Act</li>
          <li>Secure disposal procedures for personal information that is no longer required</li>
        </ul>
        <p data-reveal>
          Our information security practices are aligned with the principles of ISO/IEC 27001, the
          international standard for information security management systems. While no method of data
          storage or electronic transmission can be guaranteed to be completely secure, we are committed
          to maintaining the highest practicable level of protection for your personal information.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>8. Your Rights Under the Australian Privacy Principles</h2>
        <p data-reveal>
          Under the Privacy Act and the APPs, you have the following rights in relation to your personal information:
        </p>
        <ul data-reveal>
          <li>
            <strong>Right of access (APP 12):</strong> You may request access to the personal information
            we hold about you. We will respond to your request within a reasonable period and provide access
            in the manner you have requested, where it is reasonable and practicable to do so.
          </li>
          <li>
            <strong>Right of correction (APP 13):</strong> If you believe that any personal information we
            hold about you is inaccurate, out of date, incomplete, irrelevant, or misleading, you may
            request that we correct it. We will take reasonable steps to correct the information and notify
            any third parties to whom we have previously disclosed it.
          </li>
          <li>
            <strong>Right to complain:</strong> If you believe we have breached your privacy or handled your
            personal information in a manner inconsistent with the APPs, you may lodge a complaint with us.
            We will investigate your complaint and respond within 30 days. If you are not satisfied with our
            response, you may escalate your complaint to the Office of the Australian Information
            Commissioner (OAIC).
          </li>
          <li>
            <strong>Opt-out of marketing:</strong> You may opt out of receiving direct marketing communications
            from us at any time by using the unsubscribe mechanism in our communications or by contacting
            our Privacy Officer. We will process your opt-out request promptly and at no cost to you,
            in accordance with APP 7.
          </li>
          <li>
            <strong>Account deletion:</strong> If you hold a Professional Portal account, you may request
            the deletion of your account and associated personal information. Please note that we may be
            required to retain certain information to comply with our legal and regulatory obligations.
          </li>
        </ul>
        <p data-reveal>
          To exercise any of these rights, please contact our Privacy Officer using the details provided
          in Section 11 below. We may need to verify your identity before processing your request.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>9. Data Retention</h2>
        <p data-reveal>
          We retain personal information only for as long as it is reasonably necessary for the purposes
          for which it was collected, or as required by applicable law. In determining retention periods,
          we consider:
        </p>
        <ul data-reveal>
          <li>The nature and sensitivity of the personal information</li>
          <li>The purposes for which it was collected and processed</li>
          <li>Our legal and regulatory obligations, including record-keeping requirements under the Therapeutic Goods Act 1989 (Cth) and related regulations</li>
          <li>The applicable statute of limitations for potential legal claims</li>
          <li>Our legitimate business interests, including the management of ongoing commercial relationships</li>
        </ul>
        <p data-reveal>
          When personal information is no longer required, we will take reasonable steps to destroy or
          de-identify it in accordance with APP 11. Destruction is carried out using secure methods
          appropriate to the format of the information, including secure digital deletion for electronic
          records and confidential shredding for physical documents.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>10. Changes to This Policy</h2>
        <p data-reveal>
          We may update this Privacy Policy from time to time to reflect changes in our practices,
          technology, legal requirements, or business operations. When we make material changes, we
          will update the "Last updated" date at the top of this page and, where appropriate, provide
          additional notice through our website or by email.
        </p>
        <p data-reveal>
          We encourage you to review this policy periodically to stay informed about how we protect
          your personal information. Your continued use of our website and services following the
          posting of changes constitutes your acceptance of those changes.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>11. Contact Information</h2>
        <p data-reveal>
          If you have any questions about this Privacy Policy, wish to exercise your privacy rights,
          or would like to make a complaint about our handling of your personal information, please
          contact our Privacy Officer:
        </p>
        <div data-reveal style={{
          padding: "20px 24px",
          background: "var(--pale-blue)",
          borderRadius: "var(--radius)",
          marginTop: 16,
          lineHeight: 1.8,
        }}>
          <strong>Privacy Officer</strong><br />
          Salus Vita Pty Ltd<br />
          ABN <a href="https://abr.business.gov.au/ABN/View?abn=92668370518" target="_blank" rel="noopener noreferrer" style={{ color: "var(--teal)" }}>92 668 370 518</a><br />
          Email: privacy@salusvita.net<br />
          Melbourne, Victoria, Australia
        </div>
        <p data-reveal style={{ marginTop: 24 }}>
          If you are not satisfied with our response to your privacy complaint, you have the right
          to lodge a complaint with the Office of the Australian Information Commissioner (OAIC):
        </p>
        <div data-reveal style={{
          padding: "20px 24px",
          background: "var(--pale-blue)",
          borderRadius: "var(--radius)",
          marginTop: 16,
          lineHeight: 1.8,
        }}>
          <strong>Office of the Australian Information Commissioner</strong><br />
          GPO Box 5218, Sydney NSW 2001<br />
          Phone: 1300 363 992<br />
          Website: www.oaic.gov.au
        </div>
      </section>

      <section className="related-links">
        <h3>Related</h3>
        <div className="related-grid">
          <Link to="/terms">Terms of Use</Link>
          <Link to="/disclaimer">Disclaimer</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
