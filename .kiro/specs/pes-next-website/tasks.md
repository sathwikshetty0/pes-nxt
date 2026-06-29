# Implementation Plan: PES NEXT Website

## Overview

Build a production-ready, 8-page Next.js 14 website for PES NEXT Innovation and Incubation Centre using TypeScript, Tailwind CSS, and Framer Motion. The implementation follows an incremental approach: project setup, data layer, shared components, layout, pages (home through contact), cross-cutting concerns (SEO, accessibility, animations), and property-based tests for the filter system.

## Tasks

- [x] 1. Project Setup and Configuration
  - [x] 1.1 Initialize Next.js 14 project with TypeScript, Tailwind CSS, and App Router
    - _Requirements: 1.1, 2.1_
  - [x] 1.2 Install dependencies: framer-motion, @types/node, and any utility libraries (clsx, tailwind-merge)
    - _Requirements: 12.1_
  - [x] 1.3 Configure tailwind.config.ts with custom colours (primary #1A2E6F, accent #F47C20, surface #F7F8FC), font family (Plus Jakarta Sans/Inter), max-width content (1280px), and dark mode class strategy
    - _Requirements: 2.6, 2.7, 14.1_
  - [x] 1.4 Configure next/font to load Plus Jakarta Sans with font-display swap and CSS variable binding
    - _Requirements: 2.7, 16.1_
  - [x] 1.5 Create globals.css with Tailwind directives, CSS custom properties for design tokens, and smooth scroll behaviour
    - _Requirements: 12.5_
  - [x] 1.6 Create src/lib/constants.ts with breakpoints, animation timing values, and design token references
    - _Requirements: 2.2, 12.1_
  - [x] 1.7 Create src/lib/types.ts with TypeScript interfaces: Startup, Program, StatItem, NavLink, FormField, SEOData
    - _Requirements: 8.1, 6.1_
  - [x] 1.8 Create src/lib/utils.ts with helper functions: cn (class merge), formatCurrency (INR ₹ format)
    - _Requirements: 10.4_

- [x] 2. Data Layer
  - [x] 2.1 Create src/data/startups.ts with all 14 startup objects including: id, name, sector, problemStatement, solution, teamMembers array, status, statusDetail, isHighPotential flag — mark Amritava, Syncally, bloomin., and Snapmeet as high-potential
    - _Requirements: 8.1, 8.7, 8.8, 18.3, 18.4_
  - [x] 2.2 Create src/data/programs.ts with PES NEXT Ignite flagship data (8-week timeline sessions) and 5 other program entries
    - _Requirements: 6.1, 6.2, 6.3_
  - [x] 2.3 Create src/data/infrastructure.ts with 6 facility objects: EV Centre, AI Lab, Apple Centre, Microchip Centre, Prototyping Facilities, Co-working Spaces
    - _Requirements: 4.3_
  - [x] 2.4 Create src/data/navigation.ts with route definitions for all 8 pages (path, label, order)
    - _Requirements: 1.1, 1.2_
  - [x] 2.5 Create src/data/stats.ts with 4 stat items: Innovation Space 9000 "Sq Ft", Workspaces 50 "+", Teams 14 "", Duration 8 "Weeks"
    - _Requirements: 3.4, 13.1_
  - [x] 2.6 Create src/data/seo.ts with unique title, description, and OG image path for each of the 8 pages
    - _Requirements: 15.1, 15.2_

- [x] 3. Shared UI Components
  - [x] 3.1 Create src/components/ui/Container.tsx — max-width 1280px centered wrapper with responsive padding
    - _Requirements: 2.5_
  - [x] 3.2 Create src/components/ui/Button.tsx — CTA button with primary (deep blue) and secondary (orange accent) variants, hover transitions under 200ms, minimum 44x44px touch target
    - _Requirements: 2.3, 12.3_
  - [x] 3.3 Create src/components/ui/Card.tsx — base card with subtle shadow, rounded corners, hover elevation transition via box-shadow
    - _Requirements: 12.4_
  - [x] 3.4 Create src/components/ui/Badge.tsx — sector badge and colour-coded status badge component (Active: green, Prototype Tested: blue, Under Review: amber, In Development: grey)
    - _Requirements: 8.1_
  - [x] 3.5 Create src/components/ui/SectionHeading.tsx — section title with optional subtitle, consistent spacing
    - _Requirements: 15.3_

- [x] 4. Layout Components
  - [x] 4.1 Create src/components/layout/Navbar.tsx — responsive navigation: horizontal links on desktop (>1024px), hamburger with full-screen overlay on mobile (<1024px), active page indicator, PES NEXT logo/wordmark
    - _Requirements: 1.2, 1.3, 1.4, 1.5_
  - [x] 4.2 Create src/components/layout/Footer.tsx — quick links (8 pages), secondary links, tagline "Empowering Innovators. Building Ventures. Transforming Mandya.", InUnity Private Limited operating partner acknowledgement
    - _Requirements: 1.6, 18.1_
  - [x] 4.3 Create src/app/layout.tsx — root layout with font provider, metadata defaults, Navbar, Footer, ThemeProvider wrapper, semantic HTML (html, body, main)
    - _Requirements: 16.5_

- [x] 5. Animation and Theme Hooks
  - [x] 5.1 Create src/components/shared/ScrollAnimation.tsx — Framer Motion wrapper using useInView with once:true, fade-in + slide-up animation (300-600ms duration), configurable delay for staggered children
    - _Requirements: 12.1, 12.2_
  - [x] 5.2 Create src/hooks/useCounter.ts — animated number counter hook using requestAnimationFrame, animates from 0 to target over 1500-2500ms, triggered by IntersectionObserver, fires only once
    - _Requirements: 13.1, 13.2, 13.3_
  - [x] 5.3 Create src/hooks/useFilter.ts — filter state management: sector string, search string, status string, memoized filtered results computed from all three conditions (AND logic)
    - _Requirements: 8.3, 8.4, 8.5, 8.6_
  - [x] 5.4 Create src/hooks/useTheme.ts — dark mode hook: reads/writes localStorage, toggles "dark" class on html element, defaults to system preference on first visit
    - _Requirements: 14.2, 14.3_
  - [x] 5.5 Create src/components/shared/ThemeToggle.tsx — toggle button in nav area using useTheme hook, sun/moon icon, theme switch within 200ms
    - _Requirements: 14.1_

- [x] 6. Home Page — Hero and Stats
  - [x] 6.1 Create src/components/home/HeroSection.tsx — headline "Where Ideas Become Startups", sub-headline paragraph, two CTA buttons (Apply for Incubation → /apply, Explore Startups → smooth scroll to portfolio preview), responsive layout
    - _Requirements: 3.1, 3.2, 3.3_
  - [x] 6.2 Create src/components/home/StatsCounter.tsx — 4 animated counters (9000+ Sq Ft, 50+ Workspaces, 14 Teams, 8 Weeks), triggers on scroll into viewport, animates simultaneously, remains static after completion
    - _Requirements: 3.4, 13.1, 13.2, 13.3_
  - [x] 6.3 Create src/app/page.tsx — compose Home page with HeroSection, StatsCounter, and placeholder sections for remaining content
    - _Requirements: 3.1_

- [x] 7. Checkpoint - Verify project foundation
  - Ensure all tests pass, ask the user if questions arise.

- [x] 8. Home Page — Content Sections
  - [x] 8.1 Create src/components/home/AboutStrip.tsx — brief about paragraph with PES NEXT description (9,000 sq. ft., 50+ workspaces, InUnity association)
    - _Requirements: 4.1, 18.1_
  - [x] 8.2 Create src/components/home/WhyPesNext.tsx — 6 feature cards in responsive grid (1 col mobile, 2 col tablet, 3 col desktop): Infrastructure, Mentorship, Seed Funding, Startup Support, Ecosystem Access, Research & Labs with descriptions
    - _Requirements: 4.2_
  - [x] 8.3 Create src/components/home/InfrastructureShowcase.tsx — heading "World-Class Facilities at Your Fingertips", 6 Infrastructure_Card components in responsive grid
    - _Requirements: 4.3_
  - [x] 8.4 Create src/components/home/ProgramsStrip.tsx — heading "Programs Designed for Every Stage", 6 pill/badge-style program cards
    - _Requirements: 4.4_
  - [x] 8.5 Create src/components/home/StartupPreview.tsx — 4 featured startup cards (Amritava, bloomin., Snapmeet, Chaduranga) with sector, status detail, scroll animation entry
    - _Requirements: 4.5, 18.3_
  - [x] 8.6 Create src/components/home/SuccessHighlights.tsx — 3 traction story cards from Cohort 1 with real data
    - _Requirements: 4.6_
  - [x] 8.7 Create src/components/home/IncubationTimeline.tsx — 5-step visual timeline: Application Submission → Evaluation & Screening → Pitch Presentation → Selection & Onboarding → Incubation & Growth, connected with line/step indicators
    - _Requirements: 4.7_
  - [x] 8.8 Create src/components/home/CTABanner.tsx — "Ready to Build Your Startup?" text with "Apply Now" button linking to /apply, accent background treatment
    - _Requirements: 4.8_
  - [x] 8.9 Update src/app/page.tsx — integrate all home sections in order: Hero, Stats, AboutStrip, WhyPesNext, InfrastructureShowcase, ProgramsStrip, StartupPreview, SuccessHighlights, IncubationTimeline, CTABanner, each wrapped in ScrollAnimation
    - _Requirements: 4.1, 4.2, 4.3, 4.4, 4.5, 4.6, 4.7, 4.8, 12.1_

- [x] 9. About Page
  - [x] 9.1 Create src/app/about/page.tsx with metadata from seo.ts
    - _Requirements: 5.1, 15.1_
  - [x] 9.2 Implement vision statement section with prominent typography
    - _Requirements: 5.1_
  - [x] 9.3 Implement mission statement as styled bulleted list
    - _Requirements: 5.2_
  - [x] 9.4 Implement startup support services grid (responsive cards layout showing all services)
    - _Requirements: 5.3_
  - [x] 9.5 Wrap all sections in ScrollAnimation for entrance effects
    - _Requirements: 12.1, 12.2_

- [x] 10. Programs Page
  - [x] 10.1 Create src/app/programs/page.tsx with metadata from seo.ts
    - _Requirements: 6.1, 15.1_
  - [x] 10.2 Create src/components/programs/IgniteDescription.tsx — detailed PES NEXT Ignite section with objectives, structure, outcomes
    - _Requirements: 6.1_
  - [x] 10.3 Create src/components/programs/WeeklyTimeline.tsx — 8-week session journey visual timeline with week-by-week activity breakdown
    - _Requirements: 6.2_
  - [x] 10.4 Create other program cards section: Innovation Development Programs, Ideathons, Hackathons, Startup Weekends, Skill Certification Programs
    - _Requirements: 6.3_
  - [x] 10.5 Compose page with IgniteDescription, WeeklyTimeline, other programs grid, all with scroll animations
    - _Requirements: 6.1, 6.2, 6.3, 12.1_

- [x] 11. Ignite Cohort Page
  - [x] 11.1 Create src/app/ignite-cohort/page.tsx with metadata from seo.ts
    - _Requirements: 7.1, 15.1_
  - [x] 11.2 Implement Cohort 1 overview section with stats bar (total teams, sectors represented, duration, key outcomes)
    - _Requirements: 7.1_
  - [x] 11.3 Create src/components/portfolio/FilterBar.tsx — sector dropdown filter, reusable across cohort and portfolio pages
    - _Requirements: 7.3, 8.2_
  - [x] 11.4 Create src/components/portfolio/StartupCard.tsx — full card showing name, sector badge, problem, solution, team members, colour-coded status badge, high-potential visual treatment
    - _Requirements: 8.1, 8.7, 18.3, 18.4_
  - [x] 11.5 Create src/components/portfolio/StartupGrid.tsx — responsive grid of StartupCard components receiving filtered data
    - _Requirements: 7.2_
  - [x] 11.6 Create src/components/portfolio/CohortDashboard.tsx — visual progress map showing startup advancement stages
    - _Requirements: 7.4, 17.2_
  - [x] 11.7 Compose page: overview stats, CohortDashboard, FilterBar (sector filter), StartupGrid with all 14 startups
    - _Requirements: 7.1, 7.2, 7.3, 7.4_

- [x] 12. Startup Portfolio Page
  - [x] 12.1 Create src/app/portfolio/page.tsx with metadata from seo.ts
    - _Requirements: 8.1, 15.1_
  - [x] 12.2 Implement full FilterBar with 3 controls: sector dropdown, text search input, status dropdown
    - _Requirements: 8.2, 8.3, 8.4, 8.5, 17.1_
  - [x] 12.3 Integrate useFilter hook connecting FilterBar to StartupGrid with AND logic across all three filters
    - _Requirements: 8.6_
  - [x] 12.4 Ensure bloomin. renders with trailing full stop in all card instances
    - _Requirements: 8.8, 18.3_
  - [x] 12.5 Implement visual prominence for high-potential teams (Amritava, Syncally, bloomin., Snapmeet) — accent border, featured badge, or larger card variant
    - _Requirements: 8.7, 18.4_
  - [x] 12.6 Verify all 14 startups display: name, sector badge, problem statement, solution, team members, status badge
    - _Requirements: 8.1_

- [x] 13. Checkpoint - Verify pages and filter system
  - Ensure all tests pass, ask the user if questions arise.

- [x] 14. Apply for Incubation Page
  - [x] 14.1 Create src/app/apply/page.tsx with metadata from seo.ts
    - _Requirements: 9.1, 15.1_
  - [x] 14.2 Implement "Who Can Apply" section with eligibility criteria list
    - _Requirements: 9.1_
  - [x] 14.3 Implement "Evaluation Criteria" section with assessment details
    - _Requirements: 9.2_
  - [x] 14.4 Implement "Application Process" section with 3 distinct stages and visual step indicators
    - _Requirements: 9.3_
  - [x] 14.5 Create src/components/forms/FormField.tsx — reusable form field with label, input/textarea/select, inline error message display
    - _Requirements: 9.6, 11.4_
  - [x] 14.6 Create src/components/forms/ApplicationForm.tsx — all required fields with controlled state, client-side validation (required fields, email format), inline error display on submit with empty fields, success state on valid submission
    - _Requirements: 9.4, 9.5, 9.6_
  - [x] 14.7 Create API route /api/apply (src/app/api/apply/route.ts) or integrate external form service for submission handling
    - _Requirements: 9.5_

- [x] 15. Funding and Grants Page
  - [x] 15.1 Create src/app/funding/page.tsx with metadata from seo.ts
    - _Requirements: 10.1, 15.1_
  - [x] 15.2 Implement Seed Fund Initiative description section (purpose, structure, conditional nature)
    - _Requirements: 10.1, 18.5_
  - [x] 15.3 Implement eligibility conditions section
    - _Requirements: 10.2_
  - [x] 15.4 Implement 3-step funding process visual (application → evaluation → disbursement)
    - _Requirements: 10.3_
  - [x] 15.5 Implement grant approvals table: Syncally ₹10,000, Amritava ₹70,000, Snapmeet ₹43,560, bloomin. ₹1,02,040 — using "conditional milestone-based disbursement" language, never "loan"
    - _Requirements: 10.4, 10.7, 18.3, 18.5_
  - [x] 15.6 Implement incubation tenure details section
    - _Requirements: 10.5_
  - [x] 15.7 Implement quarterly monitoring criteria section
    - _Requirements: 10.6_

- [x] 16. Contact Page
  - [x] 16.1 Create src/app/contact/page.tsx with metadata from seo.ts
    - _Requirements: 11.1, 15.1_
  - [x] 16.2 Implement contact information display (address, email, phone for PES NEXT / PES College of Engineering, Mandya)
    - _Requirements: 11.1_
  - [x] 16.3 Create src/components/forms/ContactForm.tsx — fields: name, email, subject, message; validation for required fields and email format; inline errors on invalid submission
    - _Requirements: 11.2, 11.3, 11.4_
  - [x] 16.4 Implement embedded Google Map iframe for PES College of Engineering, Mandya location with loading="lazy" and responsive aspect ratio container
    - _Requirements: 11.5_
  - [x] 16.5 Create API route /api/contact (src/app/api/contact/route.ts) or integrate external form service
    - _Requirements: 11.3_

- [x] 17. Announcements and Downloadable Resources
  - [x] 17.1 Create src/components/shared/AnnouncementsStrip.tsx — news/updates section with recent announcements, date stamps, used on Home page or as site-wide banner
    - _Requirements: 17.5_
  - [x] 17.2 Implement downloadable resources section (program brochures, application guidelines) with download links — placeable on Programs page or as a shared section
    - _Requirements: 17.3_

- [x] 18. SEO, Accessibility, and Performance
  - [x] 18.1 Apply unique metadata (title, description, OG tags) to all 8 pages using Next.js Metadata API and seo.ts data
    - _Requirements: 15.1, 15.2_
  - [x] 18.2 Audit heading hierarchy on all pages — ensure single h1 per page, no skipped levels
    - _Requirements: 15.3_
  - [x] 18.3 Add alt text to all images and decorative icons (aria-hidden for decorative, descriptive alt for meaningful)
    - _Requirements: 16.3_
  - [x] 18.4 Verify keyboard navigation: all interactive elements (nav links, buttons, form fields, filters) reachable and operable via Tab/Enter/Space
    - _Requirements: 16.4_
  - [x] 18.5 Apply semantic HTML: nav for navigation, main for page content, section for content blocks, footer for footer
    - _Requirements: 16.5_
  - [x] 18.6 Add loading="lazy" to all below-fold images using Next.js Image component priority prop for above-fold hero images
    - _Requirements: 16.6_
  - [x] 18.7 Verify page build output is static (SSG) for all routes — check next build output
    - _Requirements: 15.4, 16.1_

- [x] 19. Checkpoint - Verify all pages complete
  - Ensure all tests pass, ask the user if questions arise.

- [x] 20. Responsive Testing and Polish
  - [x] 20.1 Test all pages at mobile viewport (<768px) — verify single-column layouts, readable text, 44px tap targets, hamburger menu functionality
    - _Requirements: 2.1, 2.3_
  - [x] 20.2 Test all pages at tablet viewport (768-1023px) — verify two-column grids, proper spacing
    - _Requirements: 2.4_
  - [x] 20.3 Test all pages at desktop viewport (≥1024px) — verify multi-column layouts, max-width 1280px, horizontal navigation
    - _Requirements: 2.5, 1.2_
  - [x] 20.4 Verify smooth scroll behaviour for "Explore Startups" CTA and any in-page anchor links
    - _Requirements: 12.5_
  - [x] 20.5 Verify all scroll animations trigger once, hover states work on cards and buttons, stats counter animates and stays static
    - _Requirements: 12.1, 12.2, 12.3, 12.4, 13.3_
  - [x] 20.6 Test dark mode toggle — verify all sections switch colours correctly, preference persists across reload
    - _Requirements: 14.2, 14.3_

- [x] 21. Property-Based Tests for Filter System
  - [x] 21.1 `[PBT]` Write property test: for any combination of sector, search, and status filters, every item in filtered results satisfies ALL active conditions
    - **Property 1: Filter System Correctness**
    - **Validates: Requirements 8.3, 8.4, 8.5, 8.6**
  - [x] 21.2 `[PBT]` Write property test: filtered results are always a subset of the original startup array (length ≤ 14, every item exists in source)
    - **Property 2: Filter Result Subset**
    - **Validates: Requirements 8.3, 8.4, 8.5, 8.6**
  - [x] 21.3 `[PBT]` Write property test: search filtering is case-insensitive — same results regardless of input case
    - **Property 3: Search Case Insensitivity**
    - **Validates: Requirements 8.3**
  - [x] 21.4 `[PBT]` Write property test: empty filters (all cleared) return all 14 startups
    - **Property 4: Empty Filter Returns All**
    - **Validates: Requirements 8.3, 8.4, 8.5, 8.6**
  - [x] 21.5 `[PBT]` Write property test: form validation displays exactly N errors for N empty required fields
    - **Property 5: Form Validation Completeness**
    - **Validates: Requirements 9.6, 11.4**

- [x] 22. Final checkpoint - Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for faster MVP
- Each task references specific requirements for traceability
- Checkpoints ensure incremental validation throughout the build
- Property tests validate universal correctness properties from the design document
- Unit tests validate specific examples and edge cases
- The implementation uses TypeScript throughout with Next.js 14 App Router conventions
- All content is sourced from static TypeScript data files — no database required for initial build
- bloomin. must always include the trailing full stop as a brand requirement
- Grants must use "conditional milestone-based disbursement" language, never "loan"

## Task Dependency Graph

```json
{
  "waves": [
    { "id": 0, "tasks": ["1.1", "1.2"] },
    { "id": 1, "tasks": ["1.3", "1.4", "1.5", "1.6", "1.7", "1.8"] },
    { "id": 2, "tasks": ["2.1", "2.2", "2.3", "2.4", "2.5", "2.6"] },
    { "id": 3, "tasks": ["3.1", "3.2", "3.3", "3.4", "3.5"] },
    { "id": 4, "tasks": ["4.1", "4.2", "4.3", "5.1", "5.2", "5.3", "5.4", "5.5"] },
    { "id": 5, "tasks": ["6.1", "6.2", "6.3"] },
    { "id": 6, "tasks": ["8.1", "8.2", "8.3", "8.4", "8.5", "8.6", "8.7", "8.8"] },
    { "id": 7, "tasks": ["8.9", "9.1", "10.1"] },
    { "id": 8, "tasks": ["9.2", "9.3", "9.4", "9.5", "10.2", "10.3", "10.4", "10.5"] },
    { "id": 9, "tasks": ["11.1", "11.2", "11.3", "11.4", "11.5", "11.6"] },
    { "id": 10, "tasks": ["11.7", "12.1", "12.2"] },
    { "id": 11, "tasks": ["12.3", "12.4", "12.5", "12.6"] },
    { "id": 12, "tasks": ["14.1", "14.2", "14.3", "14.4", "14.5", "15.1", "15.2", "15.3"] },
    { "id": 13, "tasks": ["14.6", "14.7", "15.4", "15.5", "15.6", "15.7"] },
    { "id": 14, "tasks": ["16.1", "16.2", "16.3", "16.4", "16.5", "17.1", "17.2"] },
    { "id": 15, "tasks": ["18.1", "18.2", "18.3", "18.4", "18.5", "18.6", "18.7"] },
    { "id": 16, "tasks": ["20.1", "20.2", "20.3", "20.4", "20.5", "20.6"] },
    { "id": 17, "tasks": ["21.1", "21.2", "21.3", "21.4", "21.5"] }
  ]
}
```
