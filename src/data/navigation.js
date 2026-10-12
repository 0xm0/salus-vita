export const navigation = [
  {
    label: "Home",
    path: "/",
  },
  {
    label: "About",
    path: "/about",
    children: [
      { label: "Our Story", path: "/about/our-story" },
      { label: "Leadership", path: "/about/leadership" },
      { label: "Governance", path: "/about/governance" },
      { label: "Responsibility", path: "/about/responsibility" },
      { label: "Why Salus Vita", path: "/about/why-salus-vita" },
      { label: "Careers", path: "/about/careers" },
    ],
  },
  {
    label: "Capabilities",
    path: "/capabilities",
    children: [
      { label: "Global Sourcing", path: "/capabilities/global-sourcing" },
      { label: "International Procurement", path: "/capabilities/international-procurement" },
      { label: "Australian Importation", path: "/capabilities/australian-importation" },
      { label: "Cross-Border Supply", path: "/capabilities/cross-border-supply" },
      { label: "Technical Documentation", path: "/capabilities/technical-documentation" },
      { label: "Logistics", path: "/capabilities/logistics" },
      { label: "Bespoke Sourcing", path: "/capabilities/bespoke-sourcing" },
    ],
  },
  {
    label: "Solutions",
    path: "/solutions",
    children: [
      { label: "APIs", path: "/solutions/apis" },
      { label: "Finished Dosage Forms", path: "/solutions/finished-dosage-forms" },
      { label: "Specialist Procurement", path: "/solutions/specialist-procurement" },
      { label: "Managed Access", path: "/solutions/managed-access" },
    ],
  },
  {
    label: "Global Markets",
    path: "/global-markets",
    children: [
      { label: "Australia & New Zealand", path: "/global-markets/australia-new-zealand" },
      { label: "Asia Pacific", path: "/global-markets/asia-pacific" },
      { label: "Europe", path: "/global-markets/europe" },
      { label: "Middle East & Africa", path: "/global-markets/middle-east-africa" },
    ],
  },
  {
    label: "Quality",
    path: "/quality",
    children: [
      { label: "Supplier Assessment", path: "/quality/supplier-assessment" },
      { label: "Regulatory Framework", path: "/quality/regulatory-framework" },
      { label: "Supply Chain Integrity", path: "/quality/supply-chain-integrity" },
      { label: "Documentation Standards", path: "/quality/documentation-standards" },
    ],
  },
  {
    label: "Partnerships",
    path: "/partnerships",
    children: [
      { label: "Manufacturers", path: "/partnerships/manufacturers" },
      { label: "Customers", path: "/partnerships/customers" },
      { label: "Distributors", path: "/partnerships/distributors" },
    ],
  },
  {
    label: "Resources",
    path: "/resources",
    children: [
      { label: "Blog & Insights", path: "/resources" },
      { label: "Case Studies", path: "/case-studies" },
      { label: "FAQs", path: "/resources/faqs" },
      { label: "Glossary", path: "/resources/glossary" },
    ],
  },
  {
    label: "Contact",
    path: "/contact",
  },
]

export const utilityNav = [
  { label: "Professional Access", path: "/professional" },
  { label: "Submit Enquiry", path: "/contact/sourcing-enquiry", isPrimary: true },
]

export const legalLinks = [
  { label: "Privacy Policy", path: "/privacy" },
  { label: "Terms of Use", path: "/terms" },
  { label: "Disclaimer", path: "/disclaimer" },
]
