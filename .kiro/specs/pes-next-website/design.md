# Design Document

## Overview

This design document describes the technical implementation plan for the PES NEXT Innovation and Incubation Centre website — a production-ready, 8-page Next.js 14 application using Tailwind CSS, Framer Motion, and TypeScript.

The architecture follows Next.js App Router conventions with a component-driven approach. Static content is sourced from TypeScript data files, forms use client-side validation, and all animations leverage Framer Motion with intersection observer patterns.

## Architecture

### Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript (strict mode)
- **Styling**: Tailwind CSS with custom design tokens
- **Animations**: Framer Motion
- **Deployment**: Vercel (recommended) or any Node.js hosting

### Project Structure

```
src/
├── app/
│   ├── layout.tsx              # Root layout (fonts, metadata, theme provider)
│   ├── page.tsx                # Home page
│   ├── about/page.tsx          # About PES NEXT
│   ├── programs/page.tsx       # Programs
│   ├── ignite-cohort/page.tsx  # Ignite Cohort
│   ├── portfolio/page.tsx      # Startup Portfolio
│   ├── apply/page.tsx          # Apply for Incubation
│   ├── funding/page.tsx        # Funding & Grants
│   └── contact/page.tsx        # Contact
├── components/
│   ├── layout/
│   │   ├── Navbar.tsx          # Responsive navigation with mobile menu
│   │   ├── Footer.tsx          # Site-wide footer
│   │   └── PageWrapper.tsx     # Page transition wrapper
│   ├── ui/
│   │   ├── Button.tsx          # CTA button variants
│   │   ├── Card.tsx            # Base card component with hover effects
│   │   ├── Badge.tsx           # Status/sector badge component
│   │   ├── SectionHeading.tsx  # Section title + subtitle pattern
│   │   └── Container.tsx       # Max-width container wrapper
│   ├── home/
│   │   ├── HeroSection.tsx     # Hero with headline, sub-headline, CTAs
│   │   ├── StatsCounter.tsx    # Animated statistics counter bar
│   │   ├── AboutStrip.tsx      # Brief about section
│   │   ├── WhyPesNext.tsx      # 6 feature cards grid
│   │   ├── InfrastructureShowcase.tsx  # 6 facility cards
│   │   ├── ProgramsStrip.tsx   # 6 program pill cards
│   │   ├── StartupPreview.tsx  # 4 featured startup cards
│   │   ├── SuccessHighlights.tsx # 3 traction story cards
│   │   ├── IncubationTimeline.tsx # 5-step visual timeline
│   │   └── CTABanner.tsx       # Final call-to-action banner
│   ├── portfolio/
│   │   ├── StartupCard.tsx     # Full startup card with all fields
│   │   ├── StartupGrid.tsx     # Grid layout with filter integration
│   │   ├── FilterBar.tsx       # Sector, search, status filter controls
│   │   └── CohortDashboard.tsx # Visual progress map
│   ├── forms/
│   │   ├── ApplicationForm.tsx # Incubation application form
│   │   ├── ContactForm.tsx     # Contact enquiry form
│   │   └── FormField.tsx       # Reusable form field with validation
│   ├── shared/
│   │   ├── ScrollAnimation.tsx # Framer Motion scroll-trigger wrapper
│   │   ├── ThemeToggle.tsx     # Dark mode toggle button
│   │   └── AnnouncementsStrip.tsx # News/updates section
│   └── programs/
│       ├── IgniteDescription.tsx   # Ignite program details
│       ├── WeeklyTimeline.tsx      # 8-week journey timeline
│       └── ProgramCard.tsx         # Individual program card
├── data/
│   ├── startups.ts             # All 14 startup team data
│   ├── programs.ts             # Program descriptions and metadata
│   ├── infrastructure.ts       # Facility data
│   ├── navigation.ts           # Route definitions
│   ├── stats.ts                # Counter values and labels
│   └── seo.ts                  # Per-page metadata definitions
├── hooks/
│   ├── useInView.ts            # Intersection observer hook for animations
│   ├── useCounter.ts           # Animated number counter hook
│   ├── useFilter.ts            # Filter state management hook
│   └── useTheme.ts             # Dark mode theme hook with localStorage
├── lib/
│   ├── types.ts                # TypeScript interfaces and types
│   ├── constants.ts            # Design tokens, breakpoints, timing
│   └── utils.ts                # Helper functions (cn, formatCurrency)
└── styles/
    └── globals.css             # Tailwind directives, custom properties, fonts
```

### Data Architecture

All startup and program data is stored as typed TypeScript constants — no database or CMS required for the initial build. This approach enables:
- Full type safety across components
- Zero runtime data fetching for static content
- Easy future migration to a CMS or API

```typescript
// src/lib/types.ts
interface Startup {
  id: string;
  name: string;
  sector: string;
  problemStatement: string;
  solution: string;
  teamMembers: string[];
  status: 'Active' | 'Prototype Tested' | 'Under Review' | 'In Development';
  statusDetail: string;
  isHighPotential: boolean;
}

interface Program {
  id: string;
  name: string;
  description: string;
  duration?: string;
  type: 'flagship' | 'standard';
}

interface StatItem {
  label: string;
  value: number;
  suffix: string;
}
```

### Routing Strategy

Next.js App Router with file-based routing:

| Route | Page | SSR |
|-------|------|-----|
| `/` | Home | Static (SSG) |
| `/about` | About PES NEXT | Static (SSG) |
| `/programs` | Programs | Static (SSG) |
| `/ignite-cohort` | Ignite Cohort | Static (SSG) |
| `/portfolio` | Startup Portfolio | Static (SSG) |
| `/apply` | Apply for Incubation | Static shell + client form |
| `/funding` | Funding & Grants | Static (SSG) |
| `/contact` | Contact | Static shell + client form |

All pages are statically generated at build time since content is sourced from TypeScript data files. Form pages use client components for interactivity within a static shell.

### Component Design Patterns

**Server vs Client Components:**
- Server Components (default): Layout, navigation structure, static content sections, SEO metadata
- Client Components (`"use client"`): Forms, filter system, animations, theme toggle, stats counter, mobile menu

**Animation Pattern:**
```typescript
// ScrollAnimation wrapper using Framer Motion + Intersection Observer
"use client";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

export function ScrollAnimation({ children, className }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, ease: "easeOut" }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
```

**Filter Pattern:**
```typescript
// useFilter hook for startup directory
"use client";
import { useMemo, useState } from "react";
import { Startup } from "@/lib/types";

export function useFilter(startups: Startup[]) {
  const [sector, setSector] = useState<string>("");
  const [search, setSearch] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const filtered = useMemo(() => {
    return startups.filter((s) => {
      const matchesSector = !sector || s.sector === sector;
      const matchesStatus = !status || s.status === status;
      const matchesSearch = !search || 
        [s.name, s.sector, s.problemStatement, s.solution]
          .join(" ")
          .toLowerCase()
          .includes(search.toLowerCase());
      return matchesSector && matchesStatus && matchesSearch;
    });
  }, [startups, sector, search, status]);

  return { filtered, sector, setSector, search, setSearch, status, setStatus };
}
```

### Styling Strategy

**Tailwind Configuration:**
```typescript
// tailwind.config.ts
const config = {
  content: ["./src/**/*.{ts,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: { DEFAULT: "#1A2E6F", light: "#2A4090" },
        accent: { DEFAULT: "#F47C20", light: "#F89B50" },
        surface: { DEFAULT: "#FFFFFF", alt: "#F7F8FC" },
      },
      fontFamily: {
        sans: ["var(--font-jakarta)", "Inter", "sans-serif"],
      },
      maxWidth: {
        content: "1280px",
      },
    },
  },
};
```

**Dark Mode Implementation:**
- Uses Tailwind's `class` strategy with `dark:` prefix variants
- Theme state managed via `useTheme` hook with localStorage persistence
- `<html>` element gets `class="dark"` when active
- All colour tokens have dark variants defined in Tailwind config

### Form Handling

Forms use controlled React state with client-side validation:

```typescript
// Validation approach
interface FormErrors {
  [field: string]: string | undefined;
}

function validateRequired(value: string, fieldName: string): string | undefined {
  return value.trim() === "" ? `${fieldName} is required` : undefined;
}

function validateEmail(value: string): string | undefined {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return !emailRegex.test(value) ? "Valid email address is required" : undefined;
}
```

Form submission targets a Next.js API route or external form service (Formspree, Web3Forms) for processing.

### SEO Implementation

```typescript
// src/data/seo.ts - Per-page metadata
export const seoData = {
  home: {
    title: "PES NEXT Innovation and Incubation Centre | PES College of Engineering, Mandya",
    description: "...",
    ogImage: "/og/home.png",
  },
  // ... one entry per page
};

// Applied via Next.js Metadata API in each page
export const metadata: Metadata = {
  title: seoData.home.title,
  description: seoData.home.description,
  openGraph: { ... },
};
```

### Performance Strategy

- **Static Generation**: All pages pre-rendered at build time
- **Image Optimization**: Next.js `<Image>` with lazy loading for below-fold images
- **Font Loading**: `next/font` for optimal font loading with font-display: swap
- **Code Splitting**: Automatic per-route splitting via App Router
- **Animation Performance**: Framer Motion `will-change` and GPU-accelerated transforms only
- **Bundle Size**: Tree-shaking of Framer Motion, minimal client JavaScript

## Components and Interfaces

### Layout Components

| Component | Type | Props | Description |
|-----------|------|-------|-------------|
| `Navbar` | Server + Client | `currentPath: string` | Responsive navigation bar with desktop horizontal links and mobile hamburger menu overlay |
| `Footer` | Server | — | Site-wide footer with quick links, secondary links, tagline, and InUnity attribution |
| `PageWrapper` | Client | `children: ReactNode` | Wraps page content for route transition animations |
| `Container` | Server | `children: ReactNode, className?: string` | Max-width 1280px centered content wrapper |

### UI Components

| Component | Type | Props | Description |
|-----------|------|-------|-------------|
| `Button` | Client | `variant: 'primary' \| 'secondary' \| 'outline', href?: string, onClick?: () => void, children: ReactNode` | CTA button with hover transition, supports link or click action |
| `Card` | Client | `children: ReactNode, elevated?: boolean, className?: string` | Base card with optional hover elevation shadow |
| `Badge` | Server | `label: string, variant: 'sector' \| 'status', color?: string` | Colour-coded badge for sector or status display |
| `SectionHeading` | Server | `title: string, subtitle?: string` | Consistent section heading with optional subtitle |

### Home Page Components

| Component | Type | Props | Description |
|-----------|------|-------|-------------|
| `HeroSection` | Server | — | Hero with headline, sub-headline, and two CTA buttons |
| `StatsCounter` | Client | `stats: StatItem[]` | Animated number counters triggered on scroll into view |
| `AboutStrip` | Server | — | Brief about text section |
| `WhyPesNext` | Server | `features: FeatureCard[]` | 6 feature cards in responsive grid |
| `InfrastructureShowcase` | Server | `facilities: InfrastructureItem[]` | 6 facility cards |
| `ProgramsStrip` | Server | `programs: ProgramPill[]` | 6 program pill badges |
| `StartupPreview` | Server | `startups: Startup[]` | 4 featured startup cards |
| `SuccessHighlights` | Server | `highlights: HighlightItem[]` | 3 traction story cards |
| `IncubationTimeline` | Server | `steps: TimelineStep[]` | 5-step visual process timeline |
| `CTABanner` | Server | — | Final call-to-action section |

### Portfolio Components

| Component | Type | Props | Description |
|-----------|------|-------|-------------|
| `StartupCard` | Client | `startup: Startup` | Full card with name, sector badge, problem, solution, team, status badge; high-potential visual treatment |
| `StartupGrid` | Client | `startups: Startup[]` | Responsive grid displaying filtered startup cards |
| `FilterBar` | Client | `onSectorChange, onSearchChange, onStatusChange, sectors: string[], statuses: string[]` | Filter controls for sector dropdown, text search, and status filter |
| `CohortDashboard` | Client | `startups: Startup[]` | Visual progress map of startup advancement stages |

### Form Components

| Component | Type | Props | Description |
|-----------|------|-------|-------------|
| `ApplicationForm` | Client | — | Multi-field incubation application form with validation |
| `ContactForm` | Client | — | Contact enquiry form with name, email, subject, message |
| `FormField` | Client | `label: string, name: string, type: string, required?: boolean, error?: string` | Reusable input field with inline error display |

### Shared Components

| Component | Type | Props | Description |
|-----------|------|-------|-------------|
| `ScrollAnimation` | Client | `children: ReactNode, className?: string` | Framer Motion wrapper triggering entrance animation once on scroll |
| `ThemeToggle` | Client | — | Dark mode toggle button with localStorage persistence |
| `AnnouncementsStrip` | Client | `announcements: Announcement[]` | News/updates section |

### Custom Hooks Interface

| Hook | Parameters | Returns | Purpose |
|------|-----------|---------|---------|
| `useInView` | `options?: IntersectionObserverInit` | `{ ref: RefObject, isInView: boolean }` | Detect when element enters viewport |
| `useCounter` | `target: number, duration: number, enabled: boolean` | `currentValue: number` | Animate number from 0 to target |
| `useFilter` | `startups: Startup[]` | `{ filtered, sector, setSector, search, setSearch, status, setStatus }` | Manage filter state and derived results |
| `useTheme` | — | `{ theme: 'light' \| 'dark', toggleTheme: () => void }` | Dark mode state with localStorage round-trip |

## Data Models

### Core Types

```typescript
interface Startup {
  id: string;
  name: string;                    // Brand-accurate name (e.g., "bloomin.")
  sector: string;                  // E.g., "Healthcare / MedTech", "Event Technology"
  problemStatement: string;
  solution: string;
  teamMembers: string[];
  status: 'Active' | 'Prototype Tested' | 'Under Review' | 'In Development';
  statusDetail: string;            // E.g., "First Client Secured"
  isHighPotential: boolean;        // Visual prominence flag
}

interface Program {
  id: string;
  name: string;
  description: string;
  duration?: string;
  type: 'flagship' | 'standard';
  objectives?: string[];
  outcomes?: string[];
}

interface InfrastructureItem {
  id: string;
  name: string;
  description: string;
  icon?: string;
}

interface StatItem {
  label: string;
  value: number;
  suffix: string;                  // E.g., "+", "Sq Ft"
}

interface TimelineStep {
  stepNumber: number;
  title: string;
  description: string;
}
```

### Form Data Models

```typescript
interface ApplicationFormData {
  founderName: string;
  email: string;
  phone: string;
  startupName: string;
  sector: string;
  stage: string;
  problemStatement: string;
  proposedSolution: string;
  teamSize: string;
  previousFunding: string;
  additionalInfo?: string;
}

interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

interface FormErrors {
  [field: string]: string | undefined;
}
```

### Navigation & SEO Models

```typescript
interface NavItem {
  label: string;
  href: string;
}

interface PageSEO {
  title: string;
  description: string;
  ogImage: string;
}

interface SiteMetadata {
  [page: string]: PageSEO;
}
```

### Supplementary Models

```typescript
interface FeatureCard {
  title: string;
  description: string;
  icon: string;
}

interface HighlightItem {
  startupName: string;
  achievement: string;
  description: string;
}

interface GrantEntry {
  startupName: string;
  amount: string;           // Formatted with ₹ symbol
  milestones: string[];
}

interface Announcement {
  id: string;
  title: string;
  date: string;
  summary: string;
}

interface ProgramPill {
  name: string;
  description?: string;
}
```

## Correctness Properties

### Property 1: Filter System Correctness

*For any* combination of sector filter, search text, and status filter applied to the startup dataset, every displayed startup card satisfies ALL active filter conditions simultaneously.

**Formal Definition**: 
```
∀ startups s ∈ filtered_results:
  (sector_filter == "" OR s.sector == sector_filter) AND
  (status_filter == "" OR s.status == status_filter) AND
  (search_text == "" OR s.searchableText.includes(search_text))
```

**Test Approach**: Property-based test generating random filter combinations and verifying all results match all active conditions.

**Validates: Requirements 8.3, 8.4, 8.5, 8.6**

### Property 2: Filter Result Subset

*For any* filter state (any combination of sector, search, and status values), the filtered result set is always a subset of (or equal to) the complete startup dataset. Adding a filter never introduces startups not in the original dataset.

**Formal Definition**:
```
∀ filter_state: filtered_results ⊆ all_startups
```

**Test Approach**: Property-based test verifying filtered array length ≤ original array length and every item exists in the original.

**Validates: Requirements 8.3, 8.4, 8.5, 8.6**

### Property 3: Search Case Insensitivity

*For any* search term, the filter produces identical results regardless of the case used in the search input.

**Formal Definition**:
```
∀ search_text: filter(search_text.toLowerCase()) == filter(search_text.toUpperCase()) == filter(search_text)
```

**Test Approach**: Property-based test with random case variations of the same search term.

**Validates: Requirements 8.3**

### Property 4: Empty Filter Returns All

*For any* startup dataset, when all filters are empty/cleared, the system displays all startups without omission.

**Formal Definition**:
```
filter("", "", "") == all_startups (length: 14)
```

**Test Approach**: Example-based test verifying reset state.

**Validates: Requirements 8.3, 8.4, 8.5, 8.6**

### Property 5: Form Validation Completeness

*For any* form submission where N required fields are empty, exactly N inline error messages are displayed, each adjacent to its corresponding empty field.

**Formal Definition**:
```
∀ form_state: count(empty_required_fields) == count(displayed_errors)
AND ∀ field f where f.required AND f.value == "": error_displayed_for(f) == true
```

**Test Approach**: Property-based test generating random subsets of empty required fields.

**Validates: Requirements 9.6, 11.4**

### Property 6: Stats Counter Idempotence

*For any* sequence of scroll events after the initial trigger, the stats counter animation triggers exactly once per page load. Scrolling past the counter section multiple times does not re-trigger the animation.

**Formal Definition**:
```
∀ scroll_events after initial_trigger: counter_value == target_value (static)
```

**Test Approach**: Example-based test simulating multiple intersection events.

**Validates: Requirements 13.3**

### Property 7: Dark Mode Persistence Round-Trip

*For any* theme preference value, setting it, reloading the page, and reading the preference yields the original value. The round-trip through localStorage is lossless.

**Formal Definition**:
```
∀ theme ∈ {"light", "dark"}: load(save(theme)) == theme
```

**Test Approach**: Property-based test with round-trip verification.

**Validates: Requirements 14.3**

### Property 8: SEO Metadata Uniqueness

*For any* two distinct pages in the site, they have unique title tags and unique meta descriptions. No two pages share the same title or description.

**Formal Definition**:
```
∀ pages p1, p2 where p1 ≠ p2: p1.title ≠ p2.title AND p1.description ≠ p2.description
```

**Test Approach**: Property-based test iterating all page metadata entries.

**Validates: Requirements 15.1**

### Property 9: Heading Hierarchy Validity

*For any* page in the site, heading levels never skip (e.g., h1 → h3 without h2) and each page has exactly one h1.

**Formal Definition**:
```
∀ page: count(h1) == 1 AND ∀ heading h[n]: parent_section contains h[n-1] or h[n] == h1
```

**Test Approach**: Example-based test parsing rendered HTML heading structure per page.

**Validates: Requirements 15.3**

### Property 10: Brand Name Consistency

*For any* rendered output containing the bloomin brand name, it includes the trailing full stop. For any startup marked as high-potential, the rendered card receives the prominent visual treatment.

**Formal Definition**:
```
∀ rendered_text containing "bloomin": text.includes("bloomin.")
∀ startup s where s.isHighPotential: rendered_card(s).hasProminentStyle == true
```

**Test Approach**: Property-based test scanning rendered output for brand name compliance.

**Validates: Requirements 18.3, 18.4**

## Component Interaction Diagram

```
┌──────────────────────────────────────────────────────┐
│                    Root Layout                         │
│  ┌─────────────┐  ┌──────────────┐  ┌────────────┐  │
│  │   Navbar    │  │  ThemeToggle │  │  Font/Meta │  │
│  └─────────────┘  └──────────────┘  └────────────┘  │
├──────────────────────────────────────────────────────┤
│                    Page Content                        │
│  ┌────────────────────────────────────────────────┐  │
│  │  ScrollAnimation (wraps each section)           │  │
│  │  ┌──────────┐ ┌──────────┐ ┌──────────────┐   │  │
│  │  │  Cards   │ │  Forms   │ │  FilterBar   │   │  │
│  │  │  (UI)    │ │ (Client) │ │  + Grid      │   │  │
│  │  └──────────┘ └──────────┘ └──────────────┘   │  │
│  └────────────────────────────────────────────────┘  │
├──────────────────────────────────────────────────────┤
│                    Footer                              │
└──────────────────────────────────────────────────────┘
```

## Key Implementation Notes

1. **bloomin. Branding**: Store as `"bloomin."` in data file. Never strip trailing punctuation in display logic.
2. **High-Potential Teams**: Use `isHighPotential: true` flag in startup data. Render with accent border, larger card size, or featured badge.
3. **InUnity Attribution**: Text must read "Managed in association with InUnity Private Limited" — not "owned by" or "operated by InUnity".
4. **Grant Language**: Use "conditional milestone-based disbursement" terminology. Never use "loan" or "repayment".
5. **Stats Counter**: Use `countUp` pattern with requestAnimationFrame for smooth 60fps counter animation.
6. **Form Submission**: Implement API route at `/api/apply` and `/api/contact` for server-side handling, or integrate with external form service.
7. **Google Map Embed**: Use iframe embed with proper loading="lazy" and appropriate aspect ratio container.

## Error Handling

### Form Validation Errors

- **Required Field Validation**: When a user submits a form with empty required fields, inline error messages are displayed adjacent to each incomplete field. The form does not submit until all validations pass.
- **Email Format Validation**: Email fields validate format using regex pattern `/^[^\s@]+@[^\s@]+\.[^\s@]+$/`. Invalid formats display "Valid email address is required" inline.
- **Client-Side Only**: All validation is client-side. No server round-trip is needed for validation feedback.

### Navigation Errors

- **404 Handling**: Next.js App Router provides a custom `not-found.tsx` page for unmatched routes, guiding users back to the home page.
- **Client-Side Route Failures**: If client-side navigation fails (e.g., chunk load error), the application falls back to a full page reload.

### Form Submission Errors

- **Network Failures**: If the form submission API call fails, display a user-friendly error message (e.g., "Submission failed. Please try again.") without losing form data.
- **Rate Limiting**: If the API returns a 429 status, inform the user to wait before resubmitting.
- **Success Confirmation**: On successful submission, display a confirmation message and reset the form.

### Animation Errors

- **Intersection Observer Unavailable**: If `IntersectionObserver` is not supported (older browsers), elements render in their final animated state immediately — no animation, but content remains accessible.
- **Framer Motion Failures**: If Framer Motion encounters errors, components gracefully degrade to static rendering.

### Data Integrity

- **Missing Startup Data Fields**: Components handle optional fields gracefully with fallback displays (e.g., "No description available").
- **Brand Name Enforcement**: The `bloomin.` name is stored with the full stop in the data layer; display components never strip punctuation.

### External Resource Failures

- **Google Maps Embed**: If the iframe fails to load, display a fallback with the address text and a link to Google Maps.
- **Font Loading**: Use `font-display: swap` to prevent invisible text during font load. Fall back to system sans-serif.
- **Image Loading**: Use Next.js `<Image>` placeholder blur for graceful image loading states.

## Testing Strategy

### Unit Tests

- **Framework**: Jest + React Testing Library
- **Scope**: Individual component rendering, hook logic, utility functions
- **Focus Areas**:
  - Form validation logic (validateRequired, validateEmail)
  - Filter hook logic (useFilter) with specific input examples
  - Counter hook logic (useCounter) for animation state
  - Theme hook logic (useTheme) for localStorage interaction
  - Data utility functions (formatCurrency, cn)
  - Component rendering with expected props

### Property-Based Tests

- **Framework**: fast-check with Jest
- **Configuration**: Minimum 100 iterations per property test
- **Tag Format**: `Feature: pes-next-website, Property {number}: {property_text}`
- **Properties Under Test**:
  - Property 1: Filter system correctness (multi-filter AND logic)
  - Property 2: Filter result subset invariant
  - Property 3: Search case insensitivity
  - Property 5: Form validation completeness (error count matches empty field count)
  - Property 7: Dark mode persistence round-trip
  - Property 8: SEO metadata uniqueness across pages
  - Property 10: Brand name consistency in rendered output

### Example-Based Tests

- Property 4: Empty filter returns all startups (specific state verification)
- Property 6: Stats counter idempotence (simulate multiple scroll events)
- Property 9: Heading hierarchy validity per page

### Integration Tests

- **Framework**: Playwright or Cypress
- **Scope**: Full page rendering, navigation flow, form submission flow
- **Key Scenarios**:
  - Navigate between all 8 pages without full reload
  - Mobile hamburger menu open/close and navigation
  - Filter startup portfolio by sector, then search, then status
  - Submit application form with valid data
  - Submit contact form with missing fields and verify inline errors
  - Dark mode toggle persists across page navigation

### Accessibility Tests

- **Lighthouse CI**: Automated accessibility audit targeting score ≥ 90
- **Manual Testing**: Keyboard navigation through all interactive elements, screen reader testing for semantic structure
- **Axe-core**: Integrated into component tests for runtime a11y checks

### Performance Tests

- **Lighthouse CI**: Automated performance audit targeting score ≥ 90 on desktop
- **Bundle Analysis**: Track JavaScript bundle size per route
- **Core Web Vitals**: Monitor LCP, FID, CLS metrics
