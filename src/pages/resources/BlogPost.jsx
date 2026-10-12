import { useParams, Link } from "react-router-dom"
import PageHero from "../../components/layout/PageHero"

const POSTS = {
  "navigating-tga-importation": {
    title: "Navigating TGA Importation Requirements for Pharmaceutical Products",
    date: "15 October 2024",
    category: "Regulatory",
    readTime: "8 min read",
    author: {
      name: "Regulatory Affairs Team",
      role: "Salus Vita",
      bio: "The Salus Vita regulatory affairs team provides specialist guidance on pharmaceutical importation, registration, and market access across Australia and the Asia-Pacific region.",
    },
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Importing pharmaceutical products into Australia requires compliance with a detailed regulatory framework administered by the Therapeutic Goods Administration (TGA). For organisations sourcing medicines, active pharmaceutical ingredients (APIs), or finished dosage forms from international suppliers, understanding these requirements is critical to avoiding delays, seizures at the border, or regulatory non-compliance.",
          "This article provides a practical overview of the TGA's importation framework as it applies to pharmaceutical supply organisations, with a focus on the pathways most relevant to international sourcing and procurement activities.",
        ],
      },
      {
        heading: "The ARTG and Product Registration",
        paragraphs: [
          "The Australian Register of Therapeutic Goods (ARTG) is the central register of all therapeutic goods approved for lawful supply in Australia. Products that are included on the ARTG have been evaluated by the TGA for quality, safety, and efficacy. For the majority of pharmaceutical imports, inclusion on the ARTG is a prerequisite for lawful importation and supply.",
          "However, there are important exceptions. Unregistered products may be imported under specific regulatory pathways, including the Special Access Scheme (SAS), the Authorised Prescriber scheme, and clinical trial exemptions. Each of these pathways has distinct documentation, approval, and reporting requirements that must be satisfied prior to importation.",
        ],
      },
      {
        heading: "Special Access Scheme Pathways",
        paragraphs: [
          "The Special Access Scheme enables healthcare practitioners to access therapeutic goods that are not on the ARTG for individual patients with serious conditions. The scheme operates across several categories, each with different levels of regulatory oversight. Category A applies to seriously ill patients, while Category B requires prior TGA approval and involves a formal application process.",
          "For supply organisations facilitating SAS imports, the practical requirements include sourcing the product from a GMP-compliant manufacturer, preparing the necessary regulatory documentation, and coordinating importation logistics in compliance with the TGA's conditions. Detailed record-keeping and post-supply reporting are also required.",
          "Salus Vita regularly supports hospital pharmacies, specialist clinics, and compounding pharmacies in navigating SAS pathways, managing the documentation and logistics on behalf of the prescribing practitioner and their patients.",
        ],
      },
      {
        heading: "GMP Evidence and Manufacturer Qualification",
        paragraphs: [
          "The TGA requires that all imported pharmaceutical products are manufactured in facilities that meet acceptable GMP standards. For products sourced from overseas manufacturers, this typically means that the manufacturing site holds a current GMP certificate issued by a regulatory authority recognised by the TGA, or has undergone a TGA inspection.",
          "Supply organisations must verify and maintain current GMP evidence for every manufacturer in their supply network. This includes monitoring certificate expiry dates, tracking any regulatory actions against manufacturing sites, and ensuring that the scope of GMP certification covers the specific products being sourced.",
        ],
      },
      {
        heading: "Documentation and Compliance Planning",
        paragraphs: [
          "Successful importation depends on assembling a complete documentation package before the product reaches Australian borders. This typically includes the manufacturer's GMP certificate, a Certificate of Analysis (CoA) for the specific batch, stability data, product specifications, and any applicable Drug Master File (DMF) or Certificate of Suitability (CEP).",
          "Engaging with customs brokers experienced in therapeutic goods importation is also advisable, as pharmaceutical shipments are subject to specific border controls and may require additional declarations or permits depending on the product classification.",
          "Early engagement with the TGA's Office of Product Review can help to identify any additional requirements or potential issues before committing to a supply arrangement, particularly for products that are new to the Australian market.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Navigating TGA importation requirements demands a thorough understanding of the regulatory landscape, proactive documentation management, and strong relationships with qualified manufacturing partners. For organisations that do not maintain in-house regulatory expertise, partnering with a specialist supply organisation can significantly reduce risk and accelerate time to market.",
          "Salus Vita's team works closely with clients to manage every aspect of the importation process, from initial regulatory pathway assessment through to compliant delivery and post-supply reporting.",
        ],
      },
    ],
    related: ["gmp-certification-guide", "managed-access-programs", "cross-border-regulatory-landscape"],
  },

  "gmp-certification-guide": {
    title: "GMP Certification: A Guide for International Pharmaceutical Supply",
    date: "10 September 2024",
    category: "Quality",
    readTime: "7 min read",
    author: {
      name: "Quality Assurance Team",
      role: "Salus Vita",
      bio: "Salus Vita's quality assurance team oversees supplier qualification, audit coordination, and ongoing GMP compliance monitoring across our international manufacturing network.",
    },
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Good Manufacturing Practice (GMP) certification is the foundation of quality assurance in the pharmaceutical industry. For organisations involved in international pharmaceutical sourcing and procurement, understanding GMP standards and their implications is essential to building a reliable, compliant supply chain.",
          "This guide provides an overview of GMP certification in the context of cross-border pharmaceutical supply, covering the key standards, the role of regulatory mutual recognition agreements, and practical considerations for supplier qualification.",
        ],
      },
      {
        heading: "What GMP Certification Means",
        paragraphs: [
          "GMP certification confirms that a manufacturing facility operates in accordance with a defined set of quality standards governing the production, testing, and release of pharmaceutical products. These standards cover every aspect of the manufacturing process, from facility design and equipment maintenance through to personnel training, batch documentation, and quality control testing.",
          "GMP certificates are issued by national regulatory authorities following inspections of manufacturing sites. The scope of certification specifies the types of products and dosage forms the facility is qualified to manufacture. It is important to verify that the scope of a manufacturer's GMP certificate covers the specific products being sourced.",
        ],
      },
      {
        heading: "International GMP Standards",
        paragraphs: [
          "While the principles of GMP are broadly consistent worldwide, the specific requirements and inspection standards vary between regulatory jurisdictions. The most widely referenced GMP frameworks include those maintained by the World Health Organization (WHO), the European Medicines Agency (EMA) through the EU GMP guidelines, the US Food and Drug Administration (FDA), and the TGA in Australia.",
          "The Pharmaceutical Inspection Co-operation Scheme (PIC/S) plays an important role in harmonising GMP inspection standards across its member authorities. Membership of PIC/S provides a degree of mutual confidence in the quality of GMP inspections conducted by different national authorities, which can facilitate cross-border supply arrangements.",
        ],
      },
      {
        heading: "Mutual Recognition and Regulatory Equivalence",
        paragraphs: [
          "Mutual Recognition Agreements (MRAs) between regulatory authorities allow participating countries to recognise each other's GMP inspections and certificates. For pharmaceutical supply organisations, MRAs can significantly simplify the process of qualifying manufacturers in foreign jurisdictions.",
          "For example, Australia's MRA with the European Union means that GMP certificates issued by EU member state authorities are generally accepted by the TGA without the need for a separate TGA inspection. However, the scope and limitations of each MRA must be carefully reviewed, as not all product types or manufacturing activities may be covered.",
        ],
      },
      {
        heading: "Supplier Qualification in Practice",
        paragraphs: [
          "Effective supplier qualification goes beyond simply verifying that a manufacturer holds a current GMP certificate. A comprehensive qualification process includes reviewing the manufacturer's regulatory history, assessing their quality management system, confirming the scope of their GMP certification, and evaluating their track record for supply reliability and consistency.",
          "Ongoing monitoring is equally important. Salus Vita maintains a continuous supplier surveillance programme that tracks GMP certificate renewals, regulatory actions, audit findings, and any changes to manufacturing processes or sites that could affect product quality or compliance status.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "GMP certification is a necessary condition for inclusion in any pharmaceutical supply chain, but it is not sufficient on its own. Effective quality assurance requires ongoing vigilance, structured qualification processes, and a deep understanding of the regulatory landscape in both the source and destination markets.",
          "Salus Vita's quality team works with clients and manufacturers to ensure that every product in our supply network meets the highest standards of GMP compliance, supported by comprehensive documentation and transparent reporting.",
        ],
      },
    ],
    related: ["navigating-tga-importation", "gdp-compliance-pharma-supply", "cold-chain-best-practices"],
  },

  "cold-chain-best-practices": {
    title: "Cold-Chain Logistics: Maintaining Product Integrity Across Borders",
    date: "20 August 2024",
    category: "Supply Chain",
    readTime: "6 min read",
    author: {
      name: "Supply Chain Team",
      role: "Salus Vita",
      bio: "Salus Vita's supply chain team manages end-to-end logistics for pharmaceutical shipments across the Asia-Pacific, Europe, and the Middle East, with specialist expertise in temperature-controlled distribution.",
    },
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Temperature-sensitive pharmaceutical products represent a growing share of the global medicines supply chain. Biologics, vaccines, certain APIs, and a range of finished dosage forms require strict temperature control throughout storage and transport to maintain their safety, efficacy, and regulatory compliance.",
          "For organisations coordinating international pharmaceutical supply, establishing and maintaining a GDP-compliant cold chain is one of the most complex and critical logistical challenges. This article outlines the key considerations for effective cold-chain management in cross-border pharmaceutical distribution.",
        ],
      },
      {
        heading: "Understanding Temperature Requirements",
        paragraphs: [
          "Pharmaceutical products are classified into temperature storage categories based on their stability profiles. Common categories include controlled room temperature (15 to 25 degrees Celsius), refrigerated (2 to 8 degrees Celsius), and frozen (minus 20 degrees Celsius or below). Some advanced biologics require ultra-cold storage at minus 70 degrees Celsius or colder.",
          "The specific temperature requirements for each product are defined in its approved stability data and must be maintained continuously from the point of manufacture through to final delivery. Any temperature excursion, even a brief one, can compromise product integrity and render a shipment non-compliant.",
        ],
      },
      {
        heading: "GDP Compliance in Cold-Chain Operations",
        paragraphs: [
          "Good Distribution Practice (GDP) guidelines, as defined by the WHO, the EU, and national regulatory authorities, set out the minimum standards for the storage, transport, and distribution of pharmaceutical products. For cold-chain shipments, GDP compliance requires validated temperature-controlled packaging, calibrated monitoring devices, documented standard operating procedures, and trained personnel at every handling point.",
          "Supply organisations must ensure that every logistics partner in the supply chain, from the manufacturer's warehouse through to the destination, operates in accordance with applicable GDP standards. This includes freight forwarders, airlines, customs brokers, and last-mile delivery providers.",
        ],
      },
      {
        heading: "Monitoring and Documentation",
        paragraphs: [
          "Continuous temperature monitoring is a cornerstone of cold-chain integrity. Modern data loggers and IoT-enabled sensors provide real-time visibility into temperature conditions throughout transit, with automated alerts if conditions move outside the acceptable range.",
          "Complete chain-of-custody documentation is essential for regulatory compliance and for providing assurance to clients and regulators that product integrity has been maintained. This documentation should include temperature records for every leg of the journey, handover confirmations at each transfer point, and a clear audit trail linking the shipment to its origin batch records.",
        ],
      },
      {
        heading: "Risk Mitigation and Contingency Planning",
        paragraphs: [
          "International pharmaceutical shipments are exposed to a range of risks, including transport delays, customs holds, equipment failures, and adverse weather events. Effective cold-chain management requires proactive risk assessment and contingency planning for each supply corridor.",
          "Key mitigation strategies include maintaining qualified backup logistics providers, pre-positioning buffer stock at strategic locations, using validated passive packaging systems with sufficient holdover time, and establishing clear escalation protocols for temperature excursion events. Salus Vita works with specialist logistics partners to design supply corridors that minimise risk while maintaining cost efficiency.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Cold-chain logistics in pharmaceutical supply demands rigorous planning, qualified partners, and continuous monitoring. As the share of temperature-sensitive products in the global supply chain continues to grow, the ability to manage cold-chain requirements reliably and compliantly will be an increasingly important differentiator for pharmaceutical supply organisations.",
          "Salus Vita's supply chain team has extensive experience in designing and managing cold-chain supply corridors across the Asia-Pacific and beyond, supported by a network of GDP-qualified logistics partners and advanced monitoring capabilities.",
        ],
      },
    ],
    related: ["gdp-compliance-pharma-supply", "api-sourcing-trends", "gmp-certification-guide"],
  },

  "managed-access-programs": {
    title: "Managed Access Programs: Enabling Patient Access to Unregistered Medicines",
    date: "5 May 2024",
    category: "Market Access",
    readTime: "7 min read",
    author: {
      name: "Market Access Team",
      role: "Salus Vita",
      bio: "Salus Vita's market access team supports healthcare providers and institutions in navigating managed access pathways across Australia, New Zealand, and the broader Asia-Pacific region.",
    },
    sections: [
      {
        heading: "Introduction",
        paragraphs: [
          "Patients with serious or life-threatening conditions sometimes require access to medicines that are not yet registered or commercially available in their country. Managed access programs, also known as compassionate use, expanded access, or special access schemes, provide regulatory pathways to supply these unregistered medicines to eligible patients under defined conditions.",
          "For pharmaceutical supply organisations, facilitating managed access requires specialist knowledge of the applicable regulatory frameworks, reliable sourcing from qualified manufacturers, and the logistical capability to deliver products compliantly and in a timely manner.",
        ],
      },
      {
        heading: "Regulatory Frameworks Across Key Markets",
        paragraphs: [
          "The regulatory framework for managed access varies significantly between jurisdictions. In Australia, the TGA administers the Special Access Scheme (SAS) and the Authorised Prescriber pathway. New Zealand operates its own Section 29 provisions under the Medicines Act 1981. In Europe, the EMA provides guidelines for compassionate use, while individual member states maintain their own national frameworks.",
          "Despite these differences, most managed access frameworks share common principles: the patient must have a serious or life-threatening condition, no suitable registered alternative is available, and the prescribing physician must take responsibility for the clinical decision to use the unregistered product.",
        ],
      },
      {
        heading: "The Role of Supply Partners",
        paragraphs: [
          "Supply organisations play a critical role in the managed access process. Their responsibilities typically include identifying and qualifying a suitable manufacturer, sourcing the product at the required specification and dosage form, preparing the regulatory documentation package, and managing compliant importation and delivery.",
          "In many cases, managed access supply must be arranged urgently, particularly for oncology treatments or therapies for rapidly progressing conditions. The ability to mobilise quickly, drawing on established supplier relationships and pre-validated logistics corridors, can be the difference between a patient receiving treatment or facing a critical delay.",
          "Salus Vita maintains an extensive network of pre-qualified manufacturers and established supply corridors specifically to support managed access requirements, enabling rapid response to urgent clinical needs.",
        ],
      },
      {
        heading: "Documentation and Compliance",
        paragraphs: [
          "Managed access programs impose specific documentation and reporting obligations on both the prescribing practitioner and the supply organisation. These typically include the regulatory application or notification, GMP evidence for the manufacturer, batch-specific Certificates of Analysis, product information for the prescriber, and post-supply outcome reporting.",
          "Meticulous record-keeping is essential, as regulatory authorities may audit managed access supply activities and require full traceability from the prescriber's application through to the patient's receipt of the medicine.",
        ],
      },
      {
        heading: "Conclusion",
        paragraphs: [
          "Managed access programs serve a vital function in healthcare systems worldwide, bridging the gap between clinical need and regulatory approval. For supply organisations, supporting these programs requires a combination of regulatory expertise, sourcing capability, and logistical agility.",
          "Salus Vita is committed to supporting healthcare providers and their patients through managed access pathways, providing the expertise and infrastructure needed to navigate complex regulatory requirements and deliver needed therapies reliably and compliantly.",
        ],
      },
    ],
    related: ["navigating-tga-importation", "cross-border-regulatory-landscape", "cold-chain-best-practices"],
  },
}

const ALL_SLUGS = [
  { slug: "navigating-tga-importation", title: "Navigating TGA Importation Requirements for Pharmaceutical Products", category: "Regulatory" },
  { slug: "gmp-certification-guide", title: "GMP Certification: A Guide for International Pharmaceutical Supply", category: "Quality" },
  { slug: "cold-chain-best-practices", title: "Cold-Chain Logistics: Maintaining Product Integrity Across Borders", category: "Supply Chain" },
  { slug: "cross-border-regulatory-landscape", title: "Cross-Border Regulatory Landscape in the Asia-Pacific Region", category: "Regulatory" },
  { slug: "api-sourcing-trends", title: "Global API Sourcing Trends and Supply Chain Resilience", category: "Supply Chain" },
  { slug: "managed-access-programs", title: "Managed Access Programs: Enabling Patient Access to Unregistered Medicines", category: "Market Access" },
  { slug: "gdp-compliance-pharma-supply", title: "GDP Compliance in International Pharmaceutical Distribution", category: "Quality" },
  { slug: "who-prequalification-programme", title: "WHO Prequalification: What It Means for Pharmaceutical Sourcing", category: "Market Access" },
]

export default function BlogPost() {
  const { slug } = useParams()
  const post = POSTS[slug]

  if (!post) {
    return (
      <>
        <PageHero
          eyebrow="INSIGHTS"
          title="Article Not Found"
          description="The article you are looking for may have been moved or is no longer available."
          breadcrumbs={[
            { label: "Resources", path: "/resources" },
            { label: "Not Found" },
          ]}
        />
        <section className="content-section" style={{ textAlign: "center" }}>
          <p data-reveal>We could not locate an article matching this address.</p>
          <Link to="/resources" className="btn btn-primary" data-reveal style={{ marginTop: 16 }}>
            Browse All Articles
          </Link>
        </section>
      </>
    )
  }

  const relatedPosts = (post.related || [])
    .map((s) => ALL_SLUGS.find((a) => a.slug === s))
    .filter(Boolean)

  return (
    <>
      <PageHero
        eyebrow={post.category.toUpperCase()}
        title={post.title}
        description={`Published ${post.date} - ${post.readTime}`}
        breadcrumbs={[
          { label: "Resources", path: "/resources" },
          { label: post.title },
        ]}
      />

      {post.sections.map((section, i) => (
        <section
          key={i}
          className="content-section"
          style={{ maxWidth: 780 }}
        >
          <h2 data-reveal>{section.heading}</h2>
          {section.paragraphs.map((para, j) => (
            <p key={j} data-reveal>
              {para}
            </p>
          ))}
        </section>
      ))}

      <section className="content-section" style={{ maxWidth: 780 }}>
        <div
          data-reveal
          style={{
            display: "flex",
            gap: 20,
            padding: 24,
            background: "var(--glass-2)",
            border: "1px solid var(--line)",
            borderRadius: "var(--radius)",
            marginTop: 32,
          }}
        >
          <div
            style={{
              width: 56,
              height: 56,
              borderRadius: "50%",
              background: "var(--pale-blue)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexShrink: 0,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="var(--teal)"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ width: 26, height: 26 }}
            >
              <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
              <circle cx="12" cy="7" r="4" />
            </svg>
          </div>
          <div>
            <div
              style={{
                fontWeight: 700,
                fontSize: 16,
                color: "var(--navy)",
              }}
            >
              {post.author.name}
            </div>
            <div
              style={{
                fontSize: 13,
                color: "var(--teal)",
                fontWeight: 600,
                marginBottom: 6,
              }}
            >
              {post.author.role}
            </div>
            <p
              style={{
                fontSize: 14,
                color: "var(--muted)",
                lineHeight: 1.6,
                margin: 0,
              }}
            >
              {post.author.bio}
            </p>
          </div>
        </div>
      </section>

      {relatedPosts.length > 0 && (
        <section className="content-section" style={{ maxWidth: 780 }}>
          <h2 data-reveal>Related Articles</h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
              gap: 16,
              marginTop: 16,
            }}
          >
            {relatedPosts.map((rp, i) => (
              <Link
                to={`/resources/${rp.slug}`}
                key={rp.slug}
                className="card"
                data-reveal
                style={{
                  "--rd": `${i * 80}ms`,
                  textDecoration: "none",
                  color: "inherit",
                }}
              >
                <span
                  style={{
                    fontSize: 11,
                    fontWeight: 600,
                    textTransform: "uppercase",
                    color: "var(--teal)",
                    letterSpacing: "0.04em",
                  }}
                >
                  {rp.category}
                </span>
                <h3 style={{ fontSize: 15, marginTop: 6 }}>{rp.title}</h3>
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="related-links">
        <h3>Explore More</h3>
        <div className="related-grid">
          <Link to="/resources">All Articles</Link>
          <Link to="/resources/faqs">FAQs</Link>
          <Link to="/resources/glossary">Glossary</Link>
        </div>
      </section>
    </>
  )
}
