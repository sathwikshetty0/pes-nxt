# Requirements Document

## Introduction

PES NEXT Innovation and Incubation Centre requires a single-page scrolling website that replaces the existing multi-page site. Modeled after the SHINE (Sahyadri) website style, the new site presents all content on one continuous page with smooth vertical scrolling between sections. The design prioritizes simplicity, professionalism, and mobile responsiveness with minimal engineering overhead.

The project uses the existing Next.js 14, TypeScript, and Tailwind CSS stack with Framer Motion already installed. The restructure removes all routing and consolidates content into distinct scrollable sections accessed via anchor links from a sticky navigation bar.

## Glossary

- **Website**: The PES NEXT single-page scrolling website built with Next.js 14, Tailwind CSS, Framer Motion, and TypeScript
- **Page**: The single HTML page containing all sections rendered as a continuous vertical scroll
- **Navbar**: The sticky top navigation bar displaying the PES NEXT logo text and anchor links to each section
- **Hero_Section**: The full-screen introductory section with Ken Burns zoom animation, dark overlay, headline, and scroll-down CTA
- **About_Section**: The two-column section presenting PES NEXT description and numbered vision/mission items
- **Stats_Counter_Bar**: The horizontal bar displaying four animated numeric counters that count up on scroll into view
- **Startups_Marquee**: The horizontal auto-scrolling strip of startup name pills that pauses on hover
- **Services_Section**: The section displaying six service pill badges and four service detail cards in a 2x2 grid
- **Programs_Section**: The section displaying three program cards (Ignite, Incubation, Innovation Events)
- **CTA_Banner**: The full-width deep blue banner with an "Apply Now" call-to-action button
- **Contact_Footer**: The two-column footer section with address, contact details, and navigation links
- **Ken_Burns_Effect**: A CSS animation applying continuous slow zoom (scale transform) to the hero background image
- **Smooth_Scroll**: The CSS scroll-behavior smooth property enabling animated transitions when navigating between sections via anchor links
- **Counter_Animation**: The JavaScript animation that increments numeric values from zero to target when the Stats_Counter_Bar enters the viewport

## Requirements

### Requirement 1: Single-Page Architecture

**User Story:** As a visitor, I want all website content on one scrolling page, so that I can browse everything without navigating between separate pages.

#### Acceptance Criteria

1. THE Website SHALL render all content sections on a single page in vertical scroll order: Hero, About, Stats Counter Bar, Our Startups Marquee, Our Services, Programs, CTA Banner, and Contact Footer
2. THE Website SHALL NOT use client-side routing or multiple route pages beyond the single root page
3. WHEN a visitor scrolls vertically, THE Page SHALL transition smoothly between sections without page reloads or route changes
4. THE Website SHALL assign a unique HTML id attribute to each section (home, about, services, programs, contact) for anchor-based navigation

### Requirement 2: Sticky Navigation Bar

**User Story:** As a visitor, I want a persistent navigation bar at the top, so that I can jump to any section at any time while scrolling.

#### Acceptance Criteria

1. THE Navbar SHALL remain fixed at the top of the viewport while the visitor scrolls (sticky positioning)
2. THE Navbar SHALL display the text "PES NEXT" as the logo on the left side
3. THE Navbar SHALL display anchor links labeled Home, About, Services, Programs, and Contact that scroll to corresponding sections
4. WHEN a visitor clicks a Navbar anchor link, THE Page SHALL smooth-scroll to the target section without a page reload
5. WHEN the viewport width is less than 768 pixels, THE Navbar SHALL collapse navigation links into a hamburger menu icon that reveals a mobile menu overlay on tap
6. THE Navbar SHALL use a semi-transparent or solid background with sufficient contrast to remain readable over page content while scrolling

### Requirement 3: Hero Section with Ken Burns Effect

**User Story:** As a first-time visitor, I want an impactful full-screen introduction, so that I immediately understand the purpose of PES NEXT.

#### Acceptance Criteria

1. THE Hero_Section SHALL occupy the full viewport height (100vh) as the first visible section
2. THE Hero_Section SHALL display a background using the deep blue colour (#1A2E6F) as a placeholder with the Ken_Burns_Effect applied
3. THE Ken_Burns_Effect SHALL apply a continuous CSS animation using transform scale transitioning from scale(1.0) to scale(1.15) over a duration of 15 to 25 seconds
4. THE Hero_Section SHALL display a dark semi-transparent overlay on top of the background to ensure text readability
5. THE Hero_Section SHALL display the headline "Empowering Innovators and Entrepreneurs of the Mandya Region" centered over the overlay
6. THE Hero_Section SHALL display an "Explore More" button that smooth-scrolls to the About_Section when clicked
7. THE Hero_Section SHALL vertically and horizontally center the headline text and button within the viewport

### Requirement 4: About Section

**User Story:** As a visitor, I want to learn about PES NEXT's purpose and goals, so that I can understand what the centre offers.

#### Acceptance Criteria

1. THE About_Section SHALL use a two-column layout on desktop viewports (1024 pixels and above) with text content on the left and a numbered vision/mission list on the right
2. THE About_Section left column SHALL contain descriptive text about PES NEXT as the official incubation centre of PES College of Engineering, Mandya, managed in association with InUnity Private Limited
3. THE About_Section right column SHALL display a numbered list of vision and mission statements for PES NEXT
4. WHEN the viewport width is less than 1024 pixels, THE About_Section SHALL stack columns vertically with text content above the vision/mission list

### Requirement 5: Stats Counter Bar

**User Story:** As a visitor, I want to see key metrics animate as I scroll, so that impact numbers capture my attention.

#### Acceptance Criteria

1. THE Stats_Counter_Bar SHALL display four counters with these labels and target values: "9,000+" with label "Sq Ft", "14" with label "Teams", "₹2.2L+" with label "Grants", and "4" with label "Incubation Teams"
2. WHEN the Stats_Counter_Bar scrolls into the viewport for the first time, THE Counter_Animation SHALL animate each numeric value from zero to its target value over a duration between 1500ms and 2500ms
3. THE Stats_Counter_Bar SHALL trigger all four counter animations simultaneously when the container enters the viewport
4. THE Stats_Counter_Bar SHALL display final target values after animation completes and remain static on subsequent scrolls past the section
5. THE Stats_Counter_Bar SHALL render as a horizontal row on desktop and a 2x2 grid on mobile viewports

### Requirement 6: Our Startups Marquee

**User Story:** As a visitor, I want to see all incubated startup names at a glance, so that I can quickly understand the breadth of the ecosystem.

#### Acceptance Criteria

1. THE Startups_Marquee SHALL display 13 startup name pills in a horizontal auto-scrolling strip: Chaduranga, Amritava, Udaan IQ, Atri Nexus, Syncally, bloomin., Swap Karo, AuditEase, StartSafe, Swaastya, LawLite, Reshme Siri, and Snapmeet
2. THE Startups_Marquee SHALL scroll continuously from right to left in an infinite loop without visible gaps or jumps
3. WHEN a visitor hovers over the Startups_Marquee, THE Startups_Marquee SHALL pause the scrolling animation
4. WHEN the visitor moves the cursor away from the Startups_Marquee, THE Startups_Marquee SHALL resume scrolling from the paused position
5. THE Startups_Marquee SHALL render "bloomin." with a trailing full stop as part of the brand name
6. THE Startups_Marquee SHALL use CSS animation (translateX) for smooth performant scrolling without JavaScript frame-by-frame updates

### Requirement 7: Our Services Section

**User Story:** As a visitor, I want to see what services PES NEXT provides, so that I can evaluate the support available to incubated startups.

#### Acceptance Criteria

1. THE Services_Section SHALL display six service pill badges at the top: Infrastructure, Mentorship, Seed Funding, Startup Support, Ecosystem Access, and Research & Labs
2. THE Services_Section SHALL display four service detail cards in a 2x2 grid layout below the pills with titles: Lab & Workspace, Funding, Mentors, and Networking
3. WHEN the viewport width is less than 768 pixels, THE Services_Section SHALL stack service cards in a single column
4. THE Services_Section SHALL use the section heading "Our Services" above the pill badges

### Requirement 8: Programs Section

**User Story:** As a potential applicant, I want to see available programs, so that I can identify which program fits my stage.

#### Acceptance Criteria

1. THE Programs_Section SHALL display three program cards with titles: Ignite, Incubation, and Innovation Events
2. THE Programs_Section SHALL display a brief description on each program card explaining the program's purpose and duration
3. THE Programs_Section SHALL use the section heading "Programs" above the cards
4. WHEN the viewport width is less than 768 pixels, THE Programs_Section SHALL stack program cards vertically in a single column

### Requirement 9: CTA Banner

**User Story:** As an interested visitor, I want a clear call to action, so that I know how to apply to PES NEXT.

#### Acceptance Criteria

1. THE CTA_Banner SHALL span the full width of the viewport with a deep blue (#1A2E6F) background colour
2. THE CTA_Banner SHALL display a headline text encouraging visitors to apply
3. THE CTA_Banner SHALL display an "Apply Now" button styled with the orange accent colour (#F47C20)
4. WHEN a visitor clicks the "Apply Now" button, THE CTA_Banner SHALL open an external application link or scroll to the contact section

### Requirement 10: Contact and Footer Section

**User Story:** As a visitor, I want to find contact information easily, so that I can reach PES NEXT for enquiries or visits.

#### Acceptance Criteria

1. THE Contact_Footer SHALL use a two-column layout on desktop viewports with address and contact details on the left and navigation or additional information on the right
2. THE Contact_Footer SHALL display the full address: PES College of Engineering, Mandya — 571 401, Karnataka, India
3. THE Contact_Footer SHALL display an email contact and phone number for PES NEXT
4. THE Contact_Footer SHALL display the text "Managed in association with InUnity Private Limited"
5. WHEN the viewport width is less than 768 pixels, THE Contact_Footer SHALL stack columns vertically

### Requirement 11: Responsive Design

**User Story:** As a mobile user, I want the website to display correctly on my device, so that I can access all content without horizontal scrolling or broken layouts.

#### Acceptance Criteria

1. THE Website SHALL follow a mobile-first design approach where base styles target viewports below 768 pixels
2. THE Website SHALL support three breakpoint tiers: mobile (below 768px), tablet (768px to 1023px), and desktop (1024px and above)
3. WHEN viewed on a mobile device, THE Website SHALL render single-column layouts with touch-friendly tap targets of at least 44x44 pixels
4. THE Website SHALL use the colour palette: deep blue primary (#1A2E6F), orange accent (#F47C20), light grey sections (#F7F8FC), and white base (#FFFFFF)
5. THE Website SHALL use Inter or Plus Jakarta Sans as the primary font family
6. THE Website SHALL prevent horizontal overflow on all viewport sizes

### Requirement 12: Smooth Scroll Behavior

**User Story:** As a visitor, I want smooth animated transitions when navigating between sections, so that the experience feels polished and connected.

#### Acceptance Criteria

1. THE Website SHALL apply CSS scroll-behavior smooth to the html element for all anchor-based navigation
2. WHEN a visitor clicks any Navbar anchor link, THE Page SHALL animate scrolling to the target section over a visually smooth duration rather than jumping instantly
3. THE Smooth_Scroll SHALL account for the sticky Navbar height by applying a scroll offset so that target sections do not render hidden behind the Navbar

### Requirement 13: Visual Design and Branding

**User Story:** As the PES NEXT team, I want consistent branding and clean aesthetics, so that the website reflects professionalism and trustworthiness.

#### Acceptance Criteria

1. THE Website SHALL use deep blue (#1A2E6F) as the primary colour for headings, the Navbar background, the CTA_Banner, and key UI elements
2. THE Website SHALL use orange (#F47C20) as the accent colour for buttons, highlights, and interactive elements
3. THE Website SHALL use light grey (#F7F8FC) as the background colour for alternating sections to create visual separation
4. THE Website SHALL render "bloomin." with a trailing full stop in all instances as a brand stylistic requirement
5. THE Website SHALL maintain generous whitespace between sections consistent with a minimal clean design aesthetic
6. THE Website SHALL NOT implement dark mode — the design uses a light-only colour scheme

### Requirement 14: Performance and Accessibility

**User Story:** As any visitor including those using assistive technology, I want the site to load quickly and be navigable by keyboard, so that I can access all content regardless of ability.

#### Acceptance Criteria

1. THE Website SHALL use semantic HTML elements (nav, main, section, header, footer) for page structure
2. THE Website SHALL support full keyboard navigation for the Navbar, hamburger menu, and all interactive buttons
3. THE Website SHALL provide appropriate aria-labels for the navigation, hamburger menu toggle, and section landmarks
4. THE Website SHALL render server-side using Next.js to provide search engine crawlers with fully rendered HTML content
5. THE Website SHALL use a single page title "PES NEXT — Innovation & Incubation Centre, Mandya" and an appropriate meta description

