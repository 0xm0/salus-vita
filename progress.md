# Salus Vita - Brand Visibility Fixes

## Status Key
- [ ] Pending
- [~] In Progress
- [x] Complete

---

## Tasks

| # | Task | File(s) | Status | Agent | Notes |
|---|------|---------|--------|-------|-------|
| 1 | Hero watermark - large fang mark ~5% opacity behind headline | Home.jsx, index.css | [ ] | A | 300-400px, white stroke, absolute positioned |
| 2 | CTA card watermark - fang mark bottom-right ~8% opacity | index.css | [ ] | B | SVG data URI in .cta-card background, ~120px |
| 3 | 404 page - large FangMark replaces "404" text | NotFound.jsx | [ ] | C | FangMark size={120}, brand touchpoint |
| 4 | Footer - 48px standalone fang mark above columns | Footer.jsx | [ ] | D | Centered, standalone element with separator |
| 5 | Homepage section dividers - small fang mark between sections | Home.jsx | [ ] | E | 24px, 30% opacity, centered between sections |
| 6 | Cleanup dead code (submitForm.js) | src/lib/submitForm.js | [ ] | C | Orphaned after Typeform switch |

## Post-Fix Pipeline

| Step | Status | Notes |
|------|--------|-------|
| All agent fixes | [ ] | 5 agents in parallel |
| Build verification | [ ] | Clean build |
| QA Desktop (Chrome) | [ ] | Screenshots + visual check |
| QA Mobile (Chrome) | [ ] | Responsive check |
| Commit + Deploy | [ ] | Push to GitHub + Vercel |

## Agent Assignment
- **Agent A**: #1 - Hero watermark (Home.jsx + CSS)
- **Agent B**: #2 - CTA card watermark (index.css only)
- **Agent C**: #3 + #6 - 404 page fang mark + delete dead code
- **Agent D**: #4 - Footer fang mark upgrade
- **Agent E**: #5 - Homepage section dividers
