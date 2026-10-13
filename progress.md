# Salus Vita - Advisory Fixes Progress Tracker

## Status Key
- [ ] Pending
- [~] In Progress
- [x] Complete

---

## Tasks

| # | Issue | File(s) | Status | Agent | Notes |
|---|-------|---------|--------|-------|-------|
| 1 | Forms submit to admin@salusvita.net via email | Contact.jsx, SourcingEnquiry.jsx, PortalApplication.jsx | [ ] | A | Use Formspree or serverless, all forms send to admin@salusvita.net |
| 2 | Add 404 page | router.jsx, new NotFound.jsx | [ ] | B | Catch-all route, branded 404 page with nav back |
| 3 | Phone number 1300 692 468 | Contact.jsx, siteContent.js, Footer.jsx | [ ] | B | Replace placeholder +61 3 9000 0000 |
| 4 | Professional Portal "Coming Soon" | ProfessionalLanding.jsx, navigation.js, Navbar | [ ] | C | Show coming soon state, keep in nav but disable login/apply |
| 5 | Leadership page | - | [x] | - | Leave as-is per user |
| 6 | Contact map + address | Contact.jsx | [ ] | D | 2 Queen Street Melbourne, embed Google Maps |
| 7 | Footer incomplete (slice fix) | Footer.jsx | [ ] | D | Show all section links, not just first submenu |
| 8 | CMS/Blog | - | [x] | - | Leave as-is per user |
| 9 | "Dedicated" stat fix | Home.jsx | [ ] | E | Replace with something that reads as a real stat |
| 10 | Sourcing enquiry form - reduce friction | SourcingEnquiry.jsx | [ ] | E | Make half the fields optional |
| 11 | Trust signals (ABN link, LinkedIn) | Footer.jsx, Contact.jsx | [ ] | E | Link ABN to ABR lookup, add LinkedIn |
| 12 | About breadcrumbs | About.jsx | [ ] | E | Add breadcrumbs matching other pages |

## Post-Fix Pipeline

| Step | Status | Notes |
|------|--------|-------|
| All agent fixes | [ ] | 5 agents in parallel |
| Build verification | [ ] | Clean build, no errors |
| Code review | [ ] | Review all changed files |
| QA Desktop (Chrome) | [ ] | Full functionality test |
| QA Mobile (Chrome) | [ ] | Responsiveness, nav, forms |
| Commit + Deploy | [ ] | Push to GitHub + Vercel |

---

## Agent Assignment Plan

- **Agent A**: #1 - Form email submissions (all 3 forms -> admin@salusvita.net)
- **Agent B**: #2, #3 - 404 page + phone number fix
- **Agent C**: #4 - Professional Portal coming soon state
- **Agent D**: #6, #7 - Contact map/address + footer fix
- **Agent E**: #9, #10, #11, #12 - Stats, form UX, trust signals, breadcrumbs
