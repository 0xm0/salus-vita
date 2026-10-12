import { createBrowserRouter } from "react-router-dom"
import Layout from "./components/layout/Layout"
import ProtectedRoute from "./components/ui/ProtectedRoute"

// Pages
import Home from "./pages/Home"

// About
import About from "./pages/about/About"
import OurStory from "./pages/about/OurStory"
import Leadership from "./pages/about/Leadership"
import Governance from "./pages/about/Governance"
import Responsibility from "./pages/about/Responsibility"
import WhySalusVita from "./pages/about/WhySalusVita"
import Careers from "./pages/about/Careers"

// Capabilities
import Capabilities from "./pages/capabilities/Capabilities"
import GlobalSourcing from "./pages/capabilities/GlobalSourcing"
import InternationalProcurement from "./pages/capabilities/InternationalProcurement"
import AustralianImportation from "./pages/capabilities/AustralianImportation"
import CrossBorderSupply from "./pages/capabilities/CrossBorderSupply"
import TechnicalDocumentation from "./pages/capabilities/TechnicalDocumentation"
import Logistics from "./pages/capabilities/Logistics"
import BespokeSourcing from "./pages/capabilities/BespokeSourcing"

// Solutions
import Solutions from "./pages/solutions/Solutions"
import APIs from "./pages/solutions/APIs"
import FinishedDosageForms from "./pages/solutions/FinishedDosageForms"
import SpecialistProcurement from "./pages/solutions/SpecialistProcurement"
import ManagedAccess from "./pages/solutions/ManagedAccess"

// Global Markets
import GlobalMarkets from "./pages/global-markets/GlobalMarkets"
import AustraliaNewZealand from "./pages/global-markets/AustraliaNewZealand"
import AsiaPacific from "./pages/global-markets/AsiaPacific"
import Europe from "./pages/global-markets/Europe"
import MiddleEastAfrica from "./pages/global-markets/MiddleEastAfrica"

// Quality
import Quality from "./pages/quality/Quality"
import SupplierAssessment from "./pages/quality/SupplierAssessment"
import RegulatoryFramework from "./pages/quality/RegulatoryFramework"
import SupplyChainIntegrity from "./pages/quality/SupplyChainIntegrity"
import DocumentationStandards from "./pages/quality/DocumentationStandards"

// Partnerships
import Partnerships from "./pages/partnerships/Partnerships"
import Manufacturers from "./pages/partnerships/Manufacturers"
import Customers from "./pages/partnerships/Customers"
import Distributors from "./pages/partnerships/Distributors"

// Case Studies
import CaseStudies from "./pages/case-studies/CaseStudies"
import CaseStudy from "./pages/case-studies/CaseStudy"

// Resources
import Resources from "./pages/resources/Resources"
import BlogPost from "./pages/resources/BlogPost"
import FAQs from "./pages/resources/FAQs"
import Glossary from "./pages/resources/Glossary"

// Contact
import Contact from "./pages/contact/Contact"
import SourcingEnquiry from "./pages/contact/SourcingEnquiry"

// Professional
import ProfessionalLanding from "./pages/professional/ProfessionalLanding"
import PortalApplication from "./pages/professional/PortalApplication"
import Dashboard from "./pages/professional/Dashboard"
import DocumentLibrary from "./pages/professional/DocumentLibrary"

// Legal
import Privacy from "./pages/legal/Privacy"
import Terms from "./pages/legal/Terms"
import Disclaimer from "./pages/legal/Disclaimer"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },

      // About
      { path: "about", element: <About /> },
      { path: "about/our-story", element: <OurStory /> },
      { path: "about/leadership", element: <Leadership /> },
      { path: "about/governance", element: <Governance /> },
      { path: "about/responsibility", element: <Responsibility /> },
      { path: "about/why-salus-vita", element: <WhySalusVita /> },
      { path: "about/careers", element: <Careers /> },

      // Capabilities
      { path: "capabilities", element: <Capabilities /> },
      { path: "capabilities/global-sourcing", element: <GlobalSourcing /> },
      { path: "capabilities/international-procurement", element: <InternationalProcurement /> },
      { path: "capabilities/australian-importation", element: <AustralianImportation /> },
      { path: "capabilities/cross-border-supply", element: <CrossBorderSupply /> },
      { path: "capabilities/technical-documentation", element: <TechnicalDocumentation /> },
      { path: "capabilities/logistics", element: <Logistics /> },
      { path: "capabilities/bespoke-sourcing", element: <BespokeSourcing /> },

      // Solutions
      { path: "solutions", element: <Solutions /> },
      { path: "solutions/apis", element: <APIs /> },
      { path: "solutions/finished-dosage-forms", element: <FinishedDosageForms /> },
      { path: "solutions/specialist-procurement", element: <SpecialistProcurement /> },
      { path: "solutions/managed-access", element: <ManagedAccess /> },

      // Global Markets
      { path: "global-markets", element: <GlobalMarkets /> },
      { path: "global-markets/australia-new-zealand", element: <AustraliaNewZealand /> },
      { path: "global-markets/asia-pacific", element: <AsiaPacific /> },
      { path: "global-markets/europe", element: <Europe /> },
      { path: "global-markets/middle-east-africa", element: <MiddleEastAfrica /> },

      // Quality
      { path: "quality", element: <Quality /> },
      { path: "quality/supplier-assessment", element: <SupplierAssessment /> },
      { path: "quality/regulatory-framework", element: <RegulatoryFramework /> },
      { path: "quality/supply-chain-integrity", element: <SupplyChainIntegrity /> },
      { path: "quality/documentation-standards", element: <DocumentationStandards /> },

      // Partnerships
      { path: "partnerships", element: <Partnerships /> },
      { path: "partnerships/manufacturers", element: <Manufacturers /> },
      { path: "partnerships/customers", element: <Customers /> },
      { path: "partnerships/distributors", element: <Distributors /> },

      // Case Studies
      { path: "case-studies", element: <CaseStudies /> },
      { path: "case-studies/:slug", element: <CaseStudy /> },

      // Resources
      { path: "resources", element: <Resources /> },
      { path: "resources/faqs", element: <FAQs /> },
      { path: "resources/glossary", element: <Glossary /> },
      { path: "resources/:slug", element: <BlogPost /> },

      // Contact
      { path: "contact", element: <Contact /> },
      { path: "contact/sourcing-enquiry", element: <SourcingEnquiry /> },

      // Professional
      { path: "professional", element: <ProfessionalLanding /> },
      { path: "professional/apply", element: <PortalApplication /> },
      {
        path: "professional/dashboard",
        element: (
          <ProtectedRoute>
            <Dashboard />
          </ProtectedRoute>
        ),
      },
      {
        path: "professional/documents",
        element: (
          <ProtectedRoute>
            <DocumentLibrary />
          </ProtectedRoute>
        ),
      },

      // Legal
      { path: "privacy", element: <Privacy /> },
      { path: "terms", element: <Terms /> },
      { path: "disclaimer", element: <Disclaimer /> },
    ],
  },
])

export default router
