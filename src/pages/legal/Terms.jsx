import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

export default function Terms() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL"
        title="Terms of Use"
        description="The terms and conditions governing your use of the Salus Vita website and services."
        breadcrumbs={[{ label: "Terms of Use" }]}
      />

      <section className="content-section" style={{ maxWidth: 800 }}>
        <p data-reveal style={{ fontSize: 13, color: "var(--muted-2)" }}>Last updated: October 2026</p>

        <h2 data-reveal>1. Acceptance of Terms</h2>
        <p data-reveal>
          By accessing, browsing, or otherwise using the Salus Vita website (the "Site"), you acknowledge
          that you have read, understood, and agree to be bound by these Terms of Use ("Terms"), together
          with our <Link to="/privacy">Privacy Policy</Link> and <Link to="/disclaimer">Disclaimer</Link>,
          which are incorporated herein by reference. These Terms constitute a legally binding agreement
          between you and Salus Vita Pty Ltd (ABN 92 668 370 518).
        </p>
        <p data-reveal>
          You represent that you are at least eighteen (18) years of age and possess the legal authority
          to enter into this agreement. If you are accessing the Site on behalf of an organisation, you
          represent and warrant that you have the authority to bind that organisation to these Terms.
        </p>
        <p data-reveal>
          If you do not agree with any provision of these Terms, you must immediately discontinue your
          use of the Site.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>2. Definitions</h2>
        <p data-reveal>In these Terms, the following definitions apply:</p>
        <ul data-reveal style={{ lineHeight: 1.9 }}>
          <li><strong>"Company", "we", "our", or "us"</strong> refers to Salus Vita Pty Ltd (ABN 92 668 370 518), an Australian company.</li>
          <li><strong>"Site"</strong> refers to the website located at salusvita.net and all associated subdomains.</li>
          <li><strong>"User", "you", or "your"</strong> refers to any individual or entity that accesses or uses the Site.</li>
          <li><strong>"Professional Portal"</strong> refers to the authenticated section of the Site available to approved Users following a verification process.</li>
          <li><strong>"Services"</strong> refers to the pharmaceutical sourcing, procurement, supply, and related services offered by Salus Vita, whether through the Site or otherwise.</li>
          <li><strong>"Content"</strong> refers to all text, graphics, images, data, documents, software, and other materials published on or made available through the Site.</li>
        </ul>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>3. Website Use</h2>

        <h3 data-reveal>3.1 Permitted Use</h3>
        <p data-reveal>
          You may access and use the Site for lawful purposes consistent with these Terms. The Site is
          intended for use by pharmaceutical industry professionals, healthcare providers, procurement
          organisations, and other entities engaged in legitimate pharmaceutical supply activities.
        </p>

        <h3 data-reveal>3.2 Prohibited Conduct</h3>
        <p data-reveal>You agree not to:</p>
        <ul data-reveal>
          <li>Use the Site for any purpose that is unlawful or prohibited by these Terms;</li>
          <li>Attempt to gain unauthorised access to any portion of the Site, its servers, or any systems or networks connected to the Site;</li>
          <li>Reverse engineer, decompile, disassemble, or otherwise attempt to derive the source code of any software used in connection with the Site;</li>
          <li>Use any automated system, including robots, spiders, scrapers, or data mining tools, to access, collect, or extract data from the Site;</li>
          <li>Transmit any viruses, malware, or other harmful code through or to the Site;</li>
          <li>Impersonate any person or entity or misrepresent your affiliation with any person or entity;</li>
          <li>Interfere with or disrupt the operation of the Site or the servers, systems, or networks used to make the Site available;</li>
          <li>Use the Site to collect or harvest personal information about other Users without their consent; or</li>
          <li>Reproduce, duplicate, copy, sell, resell, or exploit any portion of the Site or its Content for commercial purposes without our express written permission.</li>
        </ul>

        <h3 data-reveal>3.3 Account Responsibilities</h3>
        <p data-reveal>
          Where you create an account to access the Site or the Professional Portal, you are responsible
          for maintaining the confidentiality of your login credentials and for all activities that occur
          under your account. You agree to notify us immediately of any unauthorised use of your account
          or any other breach of security.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>4. Professional Portal Terms</h2>

        <h3 data-reveal>4.1 Application and Verification</h3>
        <p data-reveal>
          Access to the Professional Portal is granted at the sole discretion of Salus Vita following
          a verification process. You must submit an application providing accurate information about
          your organisation, professional role, regulatory licence status, and intended use. We reserve
          the right to decline any application without providing reasons and to revoke access at any time
          if information provided is found to be inaccurate, incomplete, or misleading.
        </p>

        <h3 data-reveal>4.2 Account Security</h3>
        <p data-reveal>
          Professional Portal accounts are issued to verified individuals and are not transferable. You
          must not share your login credentials with any other person. If your role or organisational
          affiliation changes, you must notify us promptly so that your access can be reviewed.
        </p>

        <h3 data-reveal>4.3 Use of Portal Content</h3>
        <p data-reveal>
          Documents, data, and materials accessed through the Professional Portal are provided solely
          for your internal business purposes in connection with your commercial relationship with
          Salus Vita. You must not distribute, publish, or disclose Portal Content to any third party
          without our prior written consent, except as required by law or by a regulatory authority
          with jurisdiction over your activities.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>5. Intellectual Property</h2>
        <p data-reveal>
          All Content on the Site, including but not limited to text, graphics, logos, icons, images,
          data compilations, software, and the design, selection, and arrangement thereof, is the
          property of Salus Vita Pty Ltd or its licensors and is protected by Australian and
          international copyright, trademark, and other intellectual property laws.
        </p>
        <p data-reveal>
          The Salus Vita name, logo, and all related names, logos, product and service names, designs,
          and slogans are trademarks of Salus Vita Pty Ltd. You must not use such marks without our
          prior written permission.
        </p>
        <p data-reveal>
          No licence or right is granted to you by implication, estoppel, or otherwise under any
          intellectual property right of the Company, other than the limited right to view the Site
          for its intended purpose. You may not reproduce, modify, distribute, display, perform,
          prepare derivative works from, republish, download, store, or transmit any Content from
          the Site except as expressly permitted by these Terms.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>6. Product and Service Information</h2>
        <p data-reveal>
          All product descriptions, specifications, availability, and pricing information published
          on the Site are indicative only and do not constitute an offer to sell or supply any product
          or service. Product availability, regulatory status, and commercial terms may vary by market
          and are subject to change without notice.
        </p>
        <p data-reveal>
          No information on the Site should be interpreted as a guarantee that any particular product
          will be available, that supply can be maintained, or that a product holds any specific
          regulatory status in your jurisdiction. All commercial arrangements are subject to the
          execution of a separate written agreement between you and Salus Vita.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>7. No Medical or Regulatory Advice</h2>
        <p data-reveal>
          The Content on this Site does not constitute medical advice, pharmaceutical recommendation,
          clinical guidance, or regulatory advice. Nothing on the Site is intended to be a substitute
          for professional medical advice, diagnosis, or treatment, nor for the independent assessment
          of regulatory requirements applicable to your products or activities.
        </p>
        <p data-reveal>
          You should always seek the advice of qualified healthcare professionals regarding any medical
          questions or conditions. Similarly, you should consult with appropriately qualified regulatory
          professionals in relation to regulatory compliance matters in your jurisdiction.
        </p>
        <p data-reveal>
          Salus Vita expressly disclaims any responsibility for decisions made or actions taken in
          reliance on any Content provided on the Site or through the Professional Portal.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>8. Disclaimers</h2>
        <p data-reveal>
          The Site and all Content are provided on an "as is" and "as available" basis without
          warranties of any kind, either express or implied. To the fullest extent permitted by
          applicable law, including the Australian Consumer Law (Schedule 2 of the Competition and
          Consumer Act 2010 (Cth)), Salus Vita disclaims all warranties, including but not limited to
          implied warranties of merchantability, fitness for a particular purpose, non-infringement,
          and accuracy.
        </p>
        <p data-reveal>
          Salus Vita does not warrant that the Site will be available on an uninterrupted, timely,
          secure, or error-free basis, or that any defects will be corrected. We do not warrant that
          the results obtained from the use of the Site will be accurate or reliable.
        </p>
        <p data-reveal>
          Nothing in these Terms is intended to exclude, restrict, or modify any consumer guarantee,
          right, or remedy conferred by the Australian Consumer Law or any other applicable law that
          cannot be excluded, restricted, or modified by agreement.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>9. Limitation of Liability</h2>
        <p data-reveal>
          To the maximum extent permitted by law, in no event shall Salus Vita Pty Ltd, its directors,
          officers, employees, agents, or affiliates be liable for any indirect, incidental, special,
          consequential, or punitive damages, including but not limited to loss of profits, data,
          business opportunity, or goodwill, arising out of or in connection with your access to or
          use of (or inability to access or use) the Site or any Content, whether based on warranty,
          contract, tort (including negligence), strict liability, or any other legal theory.
        </p>
        <p data-reveal>
          Where liability cannot be excluded under the Competition and Consumer Act 2010 (Cth) or
          other applicable legislation, Salus Vita's total aggregate liability to you for all claims
          arising out of or relating to these Terms or your use of the Site shall be limited to the
          amount of one hundred Australian dollars (AUD $100).
        </p>
        <p data-reveal>
          You acknowledge that this limitation of liability reflects a reasonable allocation of risk
          and is a fundamental element of the basis of the bargain between you and the Company.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>10. Indemnification</h2>
        <p data-reveal>
          You agree to indemnify, defend, and hold harmless Salus Vita Pty Ltd and its directors,
          officers, employees, agents, and affiliates from and against any and all claims, liabilities,
          damages, losses, costs, and expenses (including reasonable legal fees) arising out of or
          in any way connected with your access to or use of the Site, your violation of these Terms,
          or your infringement of any intellectual property or other rights of any third party.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>11. Third-Party Links</h2>
        <p data-reveal>
          The Site may contain links to third-party websites or services that are not owned or
          controlled by Salus Vita. The inclusion of any link does not imply endorsement, approval,
          or recommendation by Salus Vita of the linked site or its content, products, or services.
        </p>
        <p data-reveal>
          We have no control over, and assume no responsibility for, the content, privacy policies,
          or practices of any third-party websites or services. You access third-party websites
          entirely at your own risk and subject to the terms and conditions of use for those websites.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>12. Termination</h2>
        <p data-reveal>
          We may, in our sole discretion, suspend or terminate your access to the Site or the
          Professional Portal at any time, with or without cause, and with or without notice. Upon
          termination, your right to use the Site will immediately cease.
        </p>
        <p data-reveal>
          All provisions of these Terms that by their nature should survive termination shall survive,
          including, without limitation, ownership provisions, warranty disclaimers, indemnification
          obligations, and limitations of liability.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>13. Governing Law and Jurisdiction</h2>
        <p data-reveal>
          These Terms are governed by and construed in accordance with the laws of the State of
          Victoria, Australia, without regard to its conflict of law principles. You irrevocably
          submit to the exclusive jurisdiction of the courts of the State of Victoria and the
          Federal Court of Australia sitting in Victoria for the resolution of any dispute arising
          out of or in connection with these Terms.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>14. Severability</h2>
        <p data-reveal>
          If any provision of these Terms is held to be invalid, illegal, or unenforceable by a
          court of competent jurisdiction, that provision shall be modified to the minimum extent
          necessary to make it valid, legal, and enforceable, or if modification is not possible,
          shall be severed from these Terms. The invalidity, illegality, or unenforceability of any
          provision shall not affect the validity, legality, or enforceability of the remaining
          provisions.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>15. Changes to These Terms</h2>
        <p data-reveal>
          Salus Vita reserves the right to modify, amend, or replace these Terms at any time. Changes
          will be effective immediately upon posting the revised Terms on the Site, with the "Last
          updated" date revised accordingly. It is your responsibility to review these Terms
          periodically for changes.
        </p>
        <p data-reveal>
          Your continued use of the Site following the posting of revised Terms constitutes your
          acceptance of and agreement to the changes. If you do not agree to the revised Terms,
          you must stop using the Site.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>16. Contact</h2>
        <p data-reveal>
          If you have any questions or concerns about these Terms, please contact our legal team:
        </p>
        <ul data-reveal style={{ lineHeight: 1.9 }}>
          <li><strong>Email:</strong> legal@salusvita.net</li>
          <li><strong>Post:</strong> Legal Department, Salus Vita Pty Ltd, Melbourne, Victoria, Australia</li>
        </ul>
      </section>

      <section className="related-links">
        <h3>Related</h3>
        <div className="related-grid">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/disclaimer">Disclaimer</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
