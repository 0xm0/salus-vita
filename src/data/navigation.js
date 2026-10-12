import {
  Globe,
  Building2,
  Users,
  Shield,
  Heart,
  Award,
  Briefcase,
  Search,
  FileText,
  Truck,
  ArrowLeftRight,
  Package,
  Target,
  Settings,
  Beaker,
  Pill,
  AlertTriangle,
  Key,
  MapPin,
  Globe2,
  ClipboardCheck,
  Scale,
  Link2,
  FileCheck,
  Factory,
  ShoppingCart,
  Store,
  BookOpen,
  FolderOpen,
  HelpCircle,
  BookA,
} from "lucide-react"

export const navigation = [
  {
    id: "company",
    label: "Company",
    subMenus: [
      {
        title: "Company",
        items: [
          { label: "About Salus Vita", path: "/about", description: "Our identity and operating model", icon: Globe },
          { label: "Our Story", path: "/about/our-story", description: "Founding narrative and vision", icon: Building2 },
          { label: "Leadership", path: "/about/leadership", description: "Team and advisory board", icon: Users },
          { label: "Governance", path: "/about/governance", description: "Compliance and ethical framework", icon: Shield },
          { label: "Responsibility", path: "/about/responsibility", description: "ESG and responsible sourcing", icon: Heart },
          { label: "Why Salus Vita", path: "/about/why-salus-vita", description: "What sets us apart", icon: Award },
          { label: "Careers", path: "/about/careers", description: "Join our team", icon: Briefcase },
        ],
      },
    ],
  },
  {
    id: "services",
    label: "Services",
    subMenus: [
      {
        title: "Capabilities",
        items: [
          { label: "Global Sourcing", path: "/capabilities/global-sourcing", description: "Worldwide supplier networks", icon: Search },
          { label: "International Procurement", path: "/capabilities/international-procurement", description: "Cross-border purchasing", icon: FileText },
          { label: "Australian Importation", path: "/capabilities/australian-importation", description: "TGA-compliant import pathways", icon: Package },
          { label: "Cross-Border Supply", path: "/capabilities/cross-border-supply", description: "Multi-jurisdiction logistics", icon: ArrowLeftRight },
          { label: "Technical Documentation", path: "/capabilities/technical-documentation", description: "Regulatory file preparation", icon: Settings },
          { label: "Logistics", path: "/capabilities/logistics", description: "End-to-end freight management", icon: Truck },
          { label: "Bespoke Sourcing", path: "/capabilities/bespoke-sourcing", description: "Tailored procurement solutions", icon: Target },
        ],
      },
      {
        title: "Solutions",
        items: [
          { label: "APIs", path: "/solutions/apis", description: "Active pharmaceutical ingredients", icon: Beaker },
          { label: "Finished Dosage Forms", path: "/solutions/finished-dosage-forms", description: "Ready-to-dispense products", icon: Pill },
          { label: "Specialist Procurement", path: "/solutions/specialist-procurement", description: "Hard-to-find medicines", icon: AlertTriangle },
          { label: "Managed Access", path: "/solutions/managed-access", description: "Compassionate-use programmes", icon: Key },
        ],
      },
      {
        title: "Markets",
        items: [
          { label: "Australia & NZ", path: "/global-markets/australia-new-zealand", description: "Oceania operations", icon: MapPin },
          { label: "Asia-Pacific", path: "/global-markets/asia-pacific", description: "APAC regional coverage", icon: Globe2 },
          { label: "Europe", path: "/global-markets/europe", description: "EU and UK markets", icon: Globe2 },
          { label: "Middle East & Africa", path: "/global-markets/middle-east-africa", description: "MEA regional reach", icon: Globe2 },
        ],
      },
    ],
  },
  {
    id: "quality",
    label: "Quality",
    subMenus: [
      {
        title: "Quality & Compliance",
        items: [
          { label: "Supplier Assessment", path: "/quality/supplier-assessment", description: "Vendor qualification process", icon: ClipboardCheck },
          { label: "Regulatory Framework", path: "/quality/regulatory-framework", description: "Standards and compliance", icon: Scale },
          { label: "Supply Chain Integrity", path: "/quality/supply-chain-integrity", description: "End-to-end traceability", icon: Link2 },
          { label: "Documentation Standards", path: "/quality/documentation-standards", description: "Record-keeping protocols", icon: FileCheck },
        ],
      },
      {
        title: "Partnerships",
        items: [
          { label: "For Manufacturers", path: "/partnerships/manufacturers", description: "Partner with us as a supplier", icon: Factory },
          { label: "For Customers", path: "/partnerships/customers", description: "Procurement partnerships", icon: ShoppingCart },
          { label: "For Distributors", path: "/partnerships/distributors", description: "Distribution network access", icon: Store },
        ],
      },
    ],
  },
  {
    id: "resources",
    label: "Resources",
    subMenus: [
      {
        title: "Resources",
        items: [
          { label: "Blog & Insights", path: "/resources", description: "Industry news and analysis", icon: BookOpen },
          { label: "Case Studies", path: "/case-studies", description: "Client success stories", icon: FolderOpen },
          { label: "FAQs", path: "/resources/faqs", description: "Common questions answered", icon: HelpCircle },
          { label: "Glossary", path: "/resources/glossary", description: "Pharmaceutical terminology", icon: BookA },
        ],
      },
    ],
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
