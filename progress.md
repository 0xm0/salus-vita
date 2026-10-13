# Salus Vita - Site Review Progress Tracker

## Status Key
- [ ] Pending
- [~] In Progress
- [x] Complete
- [!] Blocked / Needs User Input

---

## Critical Fixes

| # | Issue | File(s) | Status | Agent | Notes |
|---|-------|---------|--------|-------|-------|
| 1 | Fake people on Leadership page | Leadership.jsx | [x] | A | Replaced with role-based descriptions, no names |
| 2 | FAQs says "15 years of experience" | FAQs.jsx | [x] | B | Rewritten to reflect May 2023 founding |
| 3 | FAQs claims Singapore/UK offices, 40+ countries | FAQs.jsx | [x] | B | Changed to "headquartered in Australia, operating internationally" |

## Inflated Stats / Claims

| # | Issue | File(s) | Status | Agent | Notes |
|---|-------|---------|--------|-------|-------|
| 4 | Home stats inflated (200+, 15+, 24/7) | Home.jsx | [x] | C | Now: 8+ countries, 30+ contacts, "Dedicated" |
| 5 | Global Markets "30+ jurisdictions" contradicts Home | GlobalMarkets.jsx | [x] | C | Now: 12+ jurisdictions, aligned with Home |
| 6 | Careers lists fake job openings + "established company" | Careers.jsx | [x] | D | Role categories instead of fake listings |
| 7 | Responsibility claims modern slavery reporting | Responsibility.jsx | [x] | D | Softened to aspirational/growth language |
| 8 | Governance reads like large enterprise | Governance.jsx | [x] | A | "Board of Directors" -> "company's directors" |

## Tone / Repetition

| # | Issue | File(s) | Status | Agent | Notes |
|---|-------|---------|--------|-------|-------|
| 9 | "quality-assured" overused sitewide | Multiple | [x] | E | Reduced from 20 to ~11 instances, varied alternatives |
| 10 | CTA sections all use same formula | Multiple | [x] | E | Varied 4 CTAs with distinct copy |
| 11 | OurStory duplicate CTA links | OurStory.jsx | [x] | E | Removed secondaryCTA |
| 12 | About.jsx overstates geographic scope | About.jsx | [x] | E | Softened to "growing reach" language |

## Mobile / UX Fix

| # | Issue | File(s) | Status | Agent | Notes |
|---|-------|---------|--------|-------|-------|
| 13 | Mobile hamburger menu not opening | Navbar.jsx, index.css | [x] | - | Moved overlay outside nav, z-index 200 |

## Additional Fixes (Pre-Agent)

| # | Issue | File(s) | Status | Notes |
|---|-------|---------|--------|-------|
| 14 | Wrong founding date "2009" | OurStory, About, Leadership, siteContent | [x] | Changed to May 2023 |
| 15 | ABN placeholder "XX XXX XXX XXX" | Privacy, Terms, Disclaimer, Footer | [x] | Set to 92 668 370 518 |

## Post-Fix Pipeline

| Step | Status | Notes |
|------|--------|-------|
| All agent fixes | [x] | 5/5 agents complete |
| Build verification | [x] | Clean build, no errors |
| Code review | [~] | Running now |
| QA Desktop (Chrome) | [ ] | Full functionality test |
| QA Mobile (Chrome) | [ ] | Responsiveness, touch targets, nav |
| Final deploy | [ ] | Push to GitHub + Vercel |
