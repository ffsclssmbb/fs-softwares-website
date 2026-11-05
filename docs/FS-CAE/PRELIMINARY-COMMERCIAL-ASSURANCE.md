# FS Softwares Website — Preliminary FS-CAE Assessment

**Assessment date:** 2026-11-05  
**Repository:** https://github.com/ffsclssmbb/fs-softwares-website  
**Assessed branch/commit:** main (source reviewed through GitHub repository files; commit baseline to be captured in final CI run)  
**Assessment scope:** README, package manifest and lockfile, Next.js configuration, TypeScript config, app routes, contact form, pricing page, deployment guide, launch checklist, changelog and public SEO files  
**Assessment status:** PARTIAL — no local execution, live deployment inspection, authenticated hosting access, or dynamic testing performed

## 1. Product profile

The repository describes FS Softwares as a nationwide business-management software provider for Philippine enterprises, with NCR, Cebu and Davao hubs. It documents a Next.js 14 / React 18 / TypeScript / Tailwind application and product, pricing, process, about, industries and contact pages.

The repository is public. A package lockfile is present. TypeScript strict mode is enabled. The current package manifest includes scripts for development, production build, lint and type-check, but no test script.

## 2. Confirmed source-level findings

### FSW-01 — Contact form simulates successful submission and discards lead data
**Severity: CRITICAL for business function / HIGH for customer trust**

In `src/views/ContactPage.tsx`, `handleSubmit` waits for a timer, displays a success toast, and resets the form. The source comment explicitly identifies this as a simulated API call. No actual request or durable submission path is present in the inspected handler.

**Impact:** Prospects can be told their enquiry was received when no lead is actually transmitted or stored. This is a material commercial-functionality and trust failure.

**Required remediation:** Implement a real server-side contact endpoint or trusted CRM/form provider; validate all fields server-side; apply rate limiting, spam controls and CSRF/origin protections; provide privacy notice and consent where appropriate; store/transmit only necessary data; log delivery status without exposing personal data; send a genuine success message only after confirmed acceptance; test delivery, failure, retry and duplicate submission behavior.

### FSW-02 — CSP claim does not match inspected Next.js configuration
**Severity: HIGH**

The README says CSP headers are configured. The inspected `next.config.js` sets X-DNS-Prefetch-Control, X-Frame-Options, X-Content-Type-Options and Referrer-Policy, but does not set Content-Security-Policy or Strict-Transport-Security.

**Impact:** Documentation overstates the inspected security-header posture. CSP and HSTS behavior may be supplied by the hosting edge, but that has not been verified.

**Required remediation:** Verify production response headers at the actual domain and hosting edge. Define a nonce/hash-aware CSP compatible with required scripts, analytics and 3D assets; avoid broad unsafe directives. Configure HSTS at the HTTPS edge after confirming all relevant subdomains are HTTPS-ready. Add Permissions-Policy and other headers based on actual app needs. Test CSP in report-only mode before enforcement.

### FSW-03 — Missing routes referenced by footer and documentation
**Severity: HIGH for commercial/customer readiness**

The inspected App Router tree includes routes for home, about, contact, industries, pricing, process and products. The footer references additional routes including resources/blog, privacy, terms, security, SLA, documentation and support. The inspected route tree does not show matching local pages for several of these references. The README also describes a Resources page that was not found in the inspected route listing.

**Impact:** Users may reach dead links or lack access to essential privacy, terms, support and service information. The route inventory should be fully checked before launch.

**Required remediation:** Enumerate every internal link and compare it to actual routes; implement required legal/support pages or remove links until available; add automated broken-link/route checks.

### FSW-04 — Pricing and support commitments are hardcoded marketing content
**Severity: HIGH pending business approval**

`src/views/PricingPage.tsx` contains hardcoded implementation fees, monthly fees, bundle discounts, response times and support coverage (including 24/7 access and on-call language). The README and launch checklist do not provide evidence that these amounts and service commitments have current authorized approval or operational capacity.

**Impact:** Customers may rely on prices, discounts, response times or service coverage that are not contractually approved or operationally deliverable.

**Required remediation:** Obtain commercial owner approval for each figure and SLA; align website copy with signed offer, EULA/terms, service scope, exclusions, taxes, renewal and support policies; timestamp/review pricing; ensure 24/7 and immediate/on-call statements match actual staffing and contractual response definitions.

### FSW-05 — Analytics and marketing integrations are described but not evidenced as operational
**Severity: MEDIUM**

The README lists GA4, Hotjar, CRM event tracking and regional lead tracking. `.env.example` contains public analytics IDs and API URL placeholders, but the inspected package manifest and root layout do not establish that those integrations are implemented, consent-managed, or operational. The changelog describes analytics integration as pending.

**Impact:** Potential mismatch between documented capabilities and implementation; tracking could be absent or could collect personal data without appropriate transparency/consent if later enabled.

**Required remediation:** Verify actual script loading and events; implement privacy-aware consent and opt-out controls where required; document processors, data destinations and retention; remove unused feature flags and placeholder configuration; do not claim integrations until verified.

### FSW-06 — Accessibility and performance claims are unverified
**Severity: MEDIUM**

README, deployment guide and changelog claim WCAG 2.1 AA and sub-three-second performance, while the launch checklist still lists accessibility and performance tests as unchecked. No independent audit or Lighthouse/browser test evidence was retrieved.

**Required remediation:** Perform keyboard and screen-reader testing, automated accessibility checks plus manual review, contrast testing, responsive testing, and real-user/lab performance checks across representative mobile networks and devices. Publish only verified claims.

### FSW-07 — No CI/test evidence or reproducible release result retrieved
**Severity: HIGH / evidence gap**

A package-lock file exists and package scripts include build, lint and type-check. No test script is declared in the inspected package manifest. No CI workflow, successful build, npm audit report, SBOM, license inventory, secret scan, deployment artifact or artifact hash was retrieved in this pass.

**Required remediation:** Run clean `npm ci`, `npm audit`, `npm run type-check`, `npm run lint`, and `npm run build`; add meaningful tests; collect scan and inventory outputs; tie artifacts to a reviewed commit.

### FSW-08 — MIT license and ownership scope need legal verification
**Severity: MEDIUM**

The repository contains an MIT license naming FS Softwares by TophComm Systems. This is a repository-level license declaration, not proof that the legal entity owns all code, contributions, dependencies, images, fonts, logos or other assets.

**Required remediation:** Verify IP assignment and contributor rights, dependency/asset licenses, trademark permissions, and whether MIT is intended for the entire public repository or only its source code. Obtain qualified legal review before distribution claims.

## 3. Additional scope checks

- `.env.example` contains public-prefixed analytics IDs, API URL and feature flags. Confirm no secrets are ever placed in NEXT_PUBLIC variables; values compiled into browser bundles are public.
- Next.js configuration does not show remote image allowlist beyond two domains; verify all production images use optimized and approved sources.
- Metadata references `https://fssoftwares.ph` and an OG image; verify domain ownership, DNS, TLS, canonical URL, and image availability.
- Sitemap last-modified dates are 2026-08-30; verify current route coverage and regenerate at release.
- Robots file excludes paths such as /admin and /api, but robots directives are not access controls. Verify sensitive routes are protected server-side if present.
- `npm run lint` uses `next lint`; confirm it remains supported by the installed Next.js 14 version and passes in CI.
- Validate all regional hub locations, emails, phone numbers, legal entity name, product names and sales claims with the business owner.

## 4. Preliminary release disposition

**NOT APPROVED FOR COMMERCIAL WEBSITE RELEASE — REMEDIATION REQUIRED.**

The simulated contact form is a confirmed critical commercial-functionality defect. The mismatch between CSP documentation and inspected configuration, missing legal/support routes, and unverified pricing/SLA commitments are additional blockers. This assessment does not include live response-header verification, full source-tree audit, dependency scan execution, accessibility testing, legal review or production deployment inspection.

## 5. Immediate remediation order

1. Replace simulated contact form submission with a real, secured and tested delivery path.
2. Reconcile footer links and implement verified Privacy, Terms, Security, SLA, Support and Documentation routes.
3. Verify and correct all published pricing, discounts and service-level commitments.
4. Verify live edge security headers and implement a tested CSP/HSTS policy.
5. Add CI with secret scanning, CodeQL, dependency audit, type-check, lint, production build, SBOM and license inventory.
6. Add automated tests for contact submission, form validation, routing, navigation and critical user journeys.
7. Complete accessibility, responsive, SEO and performance testing.
8. Complete IP/license, privacy and commercial/legal review.
9. Produce exact release artifact, hash, provenance and signed release decision.

