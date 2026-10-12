import { Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

export default function Disclaimer() {
  return (
    <>
      <PageHero
        eyebrow="LEGAL"
        title="Disclaimer"
        description="Important legal notices regarding the content, products, and services referenced on the Salus Vita website."
        breadcrumbs={[{ label: "Disclaimer" }]}
      />

      <section className="content-section" style={{ maxWidth: 800 }}>
        <p data-reveal style={{ fontSize: 13, color: "var(--muted-2)" }}>Last updated: October 2026</p>

        <h2 data-reveal>1. General Disclaimer</h2>
        <p data-reveal>
          The information provided on this website (salusvita.net) is published by Salus Vita Pty Ltd
          (ABN XX XXX XXX XXX) and is intended for general informational purposes only. While Salus Vita
          endeavours to ensure that the content on this website is accurate, complete, and current, we make
          no representations or warranties of any kind, whether express, implied, or statutory, regarding
          the accuracy, reliability, completeness, suitability, or availability of any information, products,
          services, or related materials contained on this website.
        </p>
        <p data-reveal>
          Any reliance you place on the information presented on this website is strictly at your own risk.
          Salus Vita Pty Ltd accepts no liability for any loss or damage, including without limitation any
          indirect or consequential loss or damage, arising from or in connection with the use of this
          website or any information contained herein.
        </p>
        <p data-reveal>
          The content of this website does not constitute a binding offer, representation, or undertaking
          by Salus Vita Pty Ltd. All commercial arrangements are subject to separate written agreements
          executed between the relevant parties.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>2. Not Medical Advice</h2>
        <p data-reveal>
          Nothing on this website constitutes, or is intended to constitute, medical advice, pharmaceutical
          recommendation, clinical guidance, or a substitute for professional medical judgment. The content
          of this website is not intended to be used for the diagnosis, treatment, cure, or prevention of
          any disease or medical condition.
        </p>
        <p data-reveal>
          Any references to pharmaceutical products, active pharmaceutical ingredients (APIs), or finished
          dosage forms on this website are provided solely in the context of business-to-business supply
          and procurement. Such references should not be interpreted as clinical recommendations or
          endorsements of any product for a specific therapeutic purpose.
        </p>
        <p data-reveal>
          Always seek the advice of a qualified healthcare professional, pharmacist, or medical practitioner
          with any questions you may have regarding a medical condition or pharmaceutical product. Never
          disregard professional medical advice or delay seeking treatment because of information you have
          read on this website. Salus Vita Pty Ltd does not practise medicine and does not provide clinical
          or therapeutic guidance of any kind.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>3. Not Regulatory Guidance</h2>
        <p data-reveal>
          The information on this website does not constitute regulatory advice, regulatory consulting, or
          legal guidance of any kind. Regulatory requirements for pharmaceutical products, active
          pharmaceutical ingredients, and related materials vary significantly between jurisdictions and
          are subject to frequent change.
        </p>
        <p data-reveal>
          Salus Vita Pty Ltd does not provide regulatory consulting services. Any references to regulatory
          frameworks, registration requirements, import procedures, or compliance standards on this website
          are provided for general informational purposes only and may not reflect the current regulatory
          position in your jurisdiction.
        </p>
        <p data-reveal>
          Users of this website are strongly advised to obtain independent regulatory counsel and to verify
          all regulatory requirements with the relevant national regulatory authority in their jurisdiction
          before making any procurement, importation, or supply decisions. Salus Vita Pty Ltd accepts no
          responsibility for any regulatory non-compliance arising from reliance on information presented
          on this website.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>4. Product Information Limitations</h2>
        <p data-reveal>
          All product information, including but not limited to specifications, descriptions, certificates,
          availability indicators, and pricing references presented on this website, is indicative only and
          is subject to change without notice. Product specifications, formulations, and packaging may differ
          from those described or depicted on this website.
        </p>
        <p data-reveal>
          Product availability varies by market and is subject to manufacturing schedules, regulatory
          approvals, export and import restrictions, and commercial agreements. The inclusion of any product
          on this website does not guarantee its availability in any particular jurisdiction or at any
          particular time.
        </p>
        <p data-reveal>
          Any pricing information referenced on this website is indicative only and does not constitute a
          binding quotation. Final pricing is subject to volume, delivery terms, regulatory requirements,
          and the terms of individual commercial agreements. All quotations are provided separately and
          remain valid only for the period specified in the relevant quotation document.
        </p>
        <p data-reveal>
          Images, diagrams, and visual representations of products are provided for illustrative purposes
          only. Actual products may differ in appearance, packaging, and labelling from those depicted.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>5. No Guarantee of Supply</h2>
        <p data-reveal>
          Enquiries submitted through this website or through the Salus Vita Professional Portal do not
          constitute binding orders, purchase agreements, or contractual commitments. All supply arrangements
          are subject to the execution of formal commercial agreements between Salus Vita Pty Ltd and the
          relevant counterparty.
        </p>
        <p data-reveal>
          The ability of Salus Vita Pty Ltd to supply any product is contingent upon, among other factors,
          regulatory approvals in the relevant jurisdiction, manufacturer availability, export and import
          permit requirements, and the satisfactory completion of due diligence and quality assurance
          procedures.
        </p>
        <p data-reveal>
          Salus Vita Pty Ltd reserves the right to decline any enquiry or to discontinue supply
          discussions at any time, at its sole discretion, without obligation or liability. No communication
          from Salus Vita, whether through this website, by email, or otherwise, shall be construed as a
          binding commitment to supply unless confirmed in a signed written agreement.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>6. TGA and Regulatory Status</h2>
        <p data-reveal>
          Salus Vita Pty Ltd operates within the Australian regulatory framework as administered by the
          Therapeutic Goods Administration (TGA) under the Therapeutic Goods Act 1989 (Cth) and associated
          legislation, including the Therapeutic Goods Regulations 1990 and applicable TGA orders and
          determinations.
        </p>
        <p data-reveal>
          The importation, supply, and distribution of therapeutic goods in Australia is subject to TGA
          approval, registration on the Australian Register of Therapeutic Goods (ARTG), and compliance
          with relevant manufacturing and quality standards, including the Pharmaceutical Inspection
          Co-operation Scheme (PIC/S) Guide to Good Manufacturing Practice.
        </p>
        <p data-reveal>
          Products referenced on this website may not be registered, approved, or authorised for sale or
          supply in all jurisdictions. The regulatory status of any product may differ between markets.
          References to a product on this website should not be interpreted as a representation that the
          product is registered, approved, or available for supply in any particular jurisdiction.
        </p>
        <p data-reveal>
          Where products are imported into Australia, Salus Vita Pty Ltd holds or obtains the necessary
          import permits and licences as required by the TGA. Users outside Australia should note that
          products supplied by Salus Vita may require separate regulatory approvals, import permits,
          and registration in their jurisdiction before they may be lawfully imported, distributed, or used.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>7. International Supply Considerations</h2>
        <p data-reveal>
          The cross-border supply of pharmaceutical products and active pharmaceutical ingredients is
          subject to the regulatory requirements of both the exporting and importing countries. These
          requirements may include, but are not limited to, import permits, export licences, customs
          declarations, product registration, Good Distribution Practice (GDP) compliance, and local
          labelling and packaging requirements.
        </p>
        <p data-reveal>
          Users of this website who are considering the importation of pharmaceutical products into their
          jurisdiction are solely responsible for ensuring compliance with all applicable laws, regulations,
          and regulatory requirements in their country. This includes obtaining all necessary permits,
          licences, and authorisations prior to importation.
        </p>
        <p data-reveal>
          Salus Vita Pty Ltd does not warrant that any product can be lawfully imported into, registered
          in, or distributed within any particular jurisdiction. It is the responsibility of the buyer or
          importer to verify the regulatory pathway and requirements applicable to their specific
          circumstances. Salus Vita will provide reasonable assistance with documentation to support
          regulatory submissions, but this assistance does not extend to regulatory consulting or
          guarantee of regulatory outcomes.
        </p>
        <p data-reveal>
          Transit, customs clearance, cold chain management, and delivery timelines for international
          shipments are subject to factors beyond the control of Salus Vita Pty Ltd, including customs
          processing times, regulatory inspections, and carrier performance. Salus Vita accepts no
          liability for delays or losses arising from such factors unless otherwise specified in a
          written supply agreement.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>8. Intellectual Property</h2>
        <p data-reveal>
          All content on this website, including but not limited to text, graphics, logos, icons, images,
          data compilations, and software, is the property of Salus Vita Pty Ltd or its licensors and is
          protected by Australian and international intellectual property laws, including the Copyright
          Act 1968 (Cth) and the Trade Marks Act 1995 (Cth).
        </p>
        <p data-reveal>
          The Salus Vita name, logo, and associated branding elements are trademarks of Salus Vita Pty Ltd.
          No licence or right to use any trademark, trade name, or branding element displayed on this
          website is granted to any user by implication, estoppel, or otherwise, without the express
          prior written permission of Salus Vita Pty Ltd.
        </p>
        <p data-reveal>
          You may not reproduce, modify, distribute, republish, display, transmit, or create derivative
          works from any content on this website without obtaining prior written consent from Salus Vita
          Pty Ltd.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>9. Third-Party Content and Links</h2>
        <p data-reveal>
          This website may contain links to external websites, resources, or services that are not owned
          or controlled by Salus Vita Pty Ltd. The inclusion of any external link does not imply
          endorsement, sponsorship, or recommendation by Salus Vita of the linked website, its content,
          or the organisation that operates it.
        </p>
        <p data-reveal>
          Salus Vita Pty Ltd has no control over the content, accuracy, privacy practices, or availability
          of third-party websites and accepts no responsibility or liability for any loss or damage that
          may arise from your use of such websites. We encourage you to review the terms and privacy
          policies of any third-party website before providing any personal information or relying on
          its content.
        </p>
        <p data-reveal>
          Where this website references third-party trademarks, product names, or regulatory bodies (such
          as the TGA, FDA, EMA, or WHO), such references are provided for informational purposes only and
          do not imply affiliation with or endorsement by those organisations.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>10. Limitation of Liability</h2>
        <p data-reveal>
          To the maximum extent permitted by applicable law, including the Australian Consumer Law (Schedule
          2 of the Competition and Consumer Act 2010 (Cth)), Salus Vita Pty Ltd, its directors, officers,
          employees, agents, and affiliates shall not be liable for any direct, indirect, incidental,
          special, consequential, or punitive damages arising out of or in connection with your access to
          or use of this website, or any information, products, or services obtained through this website.
        </p>
        <p data-reveal>
          Nothing in this disclaimer is intended to exclude, restrict, or modify any rights or remedies
          that you may have under the Australian Consumer Law or any other applicable legislation that
          cannot be excluded, restricted, or modified by agreement. Where such non-excludable rights
          apply, the liability of Salus Vita Pty Ltd is limited, to the extent permitted by law, to the
          re-supply of the relevant services or the payment of the cost of having those services supplied
          again.
        </p>
        <p data-reveal>
          Salus Vita Pty Ltd does not exclude liability for fraud, personal injury caused by negligence, or
          any other liability that cannot be excluded under applicable Australian law.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>11. Changes to This Disclaimer</h2>
        <p data-reveal>
          Salus Vita Pty Ltd reserves the right to update, amend, or replace this disclaimer at any time
          without prior notice. Any changes will be effective immediately upon publication on this website.
          The "Last updated" date at the top of this page indicates the most recent revision.
        </p>
        <p data-reveal>
          Your continued use of this website following the publication of any changes constitutes your
          acceptance of those changes. We encourage you to review this disclaimer periodically to remain
          informed of any updates.
        </p>
      </section>

      <section className="content-section" style={{ maxWidth: 800 }}>
        <h2 data-reveal>12. Contact</h2>
        <p data-reveal>
          If you have any questions or concerns regarding this disclaimer or the information presented on
          this website, please contact our legal team:
        </p>
        <div data-reveal style={{ marginTop: 16, padding: "20px 24px", background: "var(--pale-blue)", borderRadius: "var(--radius)" }}>
          <p style={{ margin: "0 0 4px", fontWeight: 600 }}>Salus Vita Pty Ltd</p>
          <p style={{ margin: "0 0 4px" }}>ABN: XX XXX XXX XXX</p>
          <p style={{ margin: "0 0 4px" }}>
            Email: <a href="mailto:legal@salusvita.net" style={{ color: "var(--teal)" }}>legal@salusvita.net</a>
          </p>
          <p style={{ margin: 0 }}>Melbourne, Victoria, Australia</p>
        </div>
      </section>

      <section className="related-links">
        <h3>Related</h3>
        <div className="related-grid">
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms of Use</Link>
          <Link to="/contact">Contact Us</Link>
        </div>
      </section>
    </>
  )
}
