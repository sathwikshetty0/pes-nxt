# Requirements Document

## Introduction

PES NEXT Innovation and Incubation Centre is the official incubation and startup ecosystem of PES College of Engineering, Mandya, Karnataka, India. Managed in association with InUnity Private Limited and operating under People's Education Trust (R), the centre provides infrastructure, mentorship, funding, and ecosystem access to technology-driven startups, social-impact enterprises, and rural innovation ventures.

This document defines the requirements for a production-ready, 8-page website built with Next.js 14, Tailwind CSS, Framer Motion, and TypeScript. The website serves as the digital presence for PES NEXT, showcasing programs, startup portfolio, funding information, and incubation application processes.

## Glossary

- **Website**: The PES NEXT Innovation and Incubation Centre production website built with Next.js 14, Tailwind CSS, Framer Motion, and TypeScript
- **Home_Page**: The landing page featuring hero section, stats, feature cards, infrastructure showcase, programs strip, startup portfolio preview, and incubation process timeline
- **About_Page**: The page presenting vision, mission, and startup support services of PES NEXT
- **Programs_Page**: The page describing PES NEXT Ignite and other innovation programs
- **Ignite_Cohort_Page**: The page displaying Cohort 1 overview with filterable startup grid
- **Portfolio_Page**: The page showing all 14 startup teams with filtering, search, and status indicators
- **Apply_Page**: The page containing eligibility criteria, evaluation process, and application form
- **Funding_Page**: The page presenting seed fund initiative, eligibility, process, and grant approvals
- **Contact_Page**: The page with contact information, contact form, and embedded map
- **Navigation_System**: The responsive header navigation with mobile menu and page routing
- **Footer_Component**: The site-wide footer with quick links, secondary links, tagline, and partner acknowledgement
- **Stats_Counter**: The animated counter component that increments numbers on scroll entry
- **Startup_Card**: A card component displaying startup name, sector badge, problem statement, solution, team members, and colour-coded status badge
- **Filter_System**: The client-side filtering mechanism supporting sector, search, and status filters on startup data
- **Application_Form**: The multi-field form on the Apply page that collects incubation applications
- **Contact_Form**: The form on the Contact page for general enquiries
- **Dark_Mode_Toggle**: An optional UI control for switching between light and dark colour themes
- **Scroll_Animation**: Framer Motion-powered entrance animations triggered on element scroll visibility
- **Responsive_Layout**: The mobile-first responsive design system supporting mobile, tablet, and desktop breakpoints
- **CTA_Button**: A call-to-action button component used across pages for primary user actions
- **Incubation_Timeline**: A 5-step visual process timeline showing the incubation journey
- **Infrastructure_Card**: A card component showcasing a specific lab or facility
- **Program_Card**: A pill/badge-style card representing a program offering
- **Cohort_Dashboard**: A visual progress map displaying cohort startup advancement
- **Announcements_Strip**: A news/updates section for latest PES NEXT announcements

## Requirements

### Requirement 1: Site Architecture and Navigation

**User Story:** As a visitor, I want a clear multi-page navigation structure, so that I can easily find information about PES NEXT programs, startups, and application processes.

#### Acceptance Criteria

1. THE Website SHALL render 8 distinct pages: Home, About PES NEXT, Programs, Ignite Cohort, Startup Portfolio, Apply for Incubation, Funding & Grants, and Contact
2. THE Navigation_System SHALL display all 8 page links in a horizontal menu on desktop viewports wider than 1024 pixels
3. WHEN the viewport width is less than 1024 pixels, THE Navigation_System SHALL collapse into a hamburger menu icon that reveals a full-screen mobile navigation overlay on tap
4. WHEN a visitor clicks a navigation link, THE Website SHALL route to the corresponding page without a full page reload using Next.js client-side navigation
5. THE Navigation_System SHALL highlight the currently active page link with a visual indicator distinct from inactive links
6. THE Footer_Component SHALL display quick links to all 8 pages, secondary links, the tagline "Empowering Innovators. Building Ventures. Transforming Mandya.", and an acknowledgement of InUnity Private Limited as operating partner

### Requirement 2: Responsive Layout System

**User Story:** As a visitor on any device, I want the website to display correctly, so that I can access all content on mobile, tablet, and desktop screens.

#### Acceptance Criteria

1. THE Responsive_Layout SHALL follow a mobile-first design approach where base styles target mobile viewports and progressively enhance for larger screens
2. THE Responsive_Layout SHALL support three breakpoint tiers: mobile (below 768px), tablet (768px to 1023px), and desktop (1024px and above)
3. WHEN viewed on a mobile device, THE Website SHALL render single-column layouts with touch-friendly tap targets of at least 44x44 pixels
4. WHEN viewed on a tablet, THE Website SHALL render two-column grid layouts where appropriate
5. WHEN viewed on a desktop, THE Website SHALL render multi-column grid layouts up to a maximum content width of 1280 pixels
6. THE Website SHALL use the colour palette of white base (#FFFFFF), deep blue primary (#1A2E6F), orange accent (#F47C20), and light grey sections (#F7F8FC)
7. THE Website SHALL use Inter or Plus Jakarta Sans as the primary typeface family

### Requirement 3: Home Page Hero Section

**User Story:** As a first-time visitor, I want to immediately understand what PES NEXT offers, so that I can decide whether to explore further or apply for incubation.

#### Acceptance Criteria

1. THE Home_Page SHALL display a hero section with the headline "Where Ideas Become Startups"
2. THE Home_Page SHALL display a sub-headline reading "PES NEXT Innovation and Incubation Centre empowers students, researchers, alumni, and entrepreneurs to transform innovative ideas into scalable ventures. Established under PES College of Engineering, Mandya."
3. THE Home_Page SHALL display two CTA_Button elements in the hero section: "Apply for Incubation" linking to the Apply_Page and "Explore Startups" scrolling to the startup portfolio preview section
4. WHEN the hero stat bar scrolls into the viewport, THE Stats_Counter SHALL animate four counters from zero to their target values: Innovation Space 9,000+ Sq Ft, Dedicated Workspaces 50+, Startup Teams Supported 14, and Cohort Duration 8 Weeks

### Requirement 4: Home Page Content Sections

**User Story:** As a visitor, I want to see PES NEXT capabilities, programs, and startups on the home page, so that I can quickly assess the ecosystem value.

#### Acceptance Criteria

1. THE Home_Page SHALL display an About Strip section containing the text describing PES NEXT as the official incubation centre of PES College of Engineering, Mandya, with 9,000 sq. ft., 50+ workspaces, and managed in association with InUnity Private Limited
2. THE Home_Page SHALL display 6 feature cards under "Why PES NEXT" with titles: Infrastructure, Mentorship, Seed Funding, Startup Support, Ecosystem Access, and Research & Labs, each with corresponding descriptions
3. THE Home_Page SHALL display an Infrastructure Showcase section titled "World-Class Facilities at Your Fingertips" with 6 Infrastructure_Card components: Centre of Excellence in Electric Vehicles, Intel HP Artificial Intelligence Lab, Apple Centre for Education, Microchip Centre of Excellence, Prototyping & Product Development Facilities, and Meeting Rooms & Co-working Spaces
4. THE Home_Page SHALL display a Programs Strip section titled "Programs Designed for Every Stage" with 6 Program_Card components: PES NEXT Ignite, Innovation Development Programs, Ideathons, Hackathons, Startup Weekends, and Skill Certification Programs
5. THE Home_Page SHALL display a Startup Portfolio Preview section featuring 4 Startup_Card components for Amritava (Sustainable Products, Active · Strong Market Traction), bloomin. (Healthcare / MedTech, Active · First Client Secured), Snapmeet (Event Technology, Active · Under Review), and Chaduranga (Technology / Sports, Prototype Tested)
6. THE Home_Page SHALL display a Success Highlights section with 3 cards presenting real traction stories from Cohort 1
7. THE Home_Page SHALL display an Incubation_Timeline section with 5 sequential steps: Application Submission, Evaluation & Screening, Pitch Presentation, Selection & Onboarding, and Incubation & Growth
8. THE Home_Page SHALL display a CTA Banner section with the text "Ready to Build Your Startup?" and an "Apply Now" CTA_Button linking to the Apply_Page

### Requirement 5: About Page

**User Story:** As a visitor, I want to understand PES NEXT vision, mission, and services, so that I can evaluate alignment with my startup goals.

#### Acceptance Criteria

1. THE About_Page SHALL display the full vision statement for PES NEXT Innovation and Incubation Centre
2. THE About_Page SHALL display the mission statement as a bulleted list of objectives
3. THE About_Page SHALL display a startup support services grid presenting all services offered by the incubation centre

### Requirement 6: Programs Page

**User Story:** As a potential applicant, I want to learn about available programs, so that I can identify which program suits my stage of development.

#### Acceptance Criteria

1. THE Programs_Page SHALL display a detailed description of the PES NEXT Ignite program including objectives, structure, and outcomes
2. THE Programs_Page SHALL display an 8-week session journey timeline showing the progression of activities across the Ignite program
3. THE Programs_Page SHALL display cards for other programs offered: Innovation Development Programs, Ideathons, Hackathons, Startup Weekends, and Skill Certification Programs

### Requirement 7: Ignite Cohort Page

**User Story:** As a visitor, I want to see Cohort 1 startups and their progress, so that I can understand the quality and diversity of incubated ventures.

#### Acceptance Criteria

1. THE Ignite_Cohort_Page SHALL display a Cohort 1 overview section with a stats bar summarizing cohort metrics
2. THE Ignite_Cohort_Page SHALL display a filterable grid of all 14 Startup_Card components from Cohort 1
3. WHEN a visitor selects a sector filter, THE Filter_System SHALL display only Startup_Card components matching the selected sector
4. THE Ignite_Cohort_Page SHALL display the Cohort_Dashboard with a visual progress map showing startup advancement stages

### Requirement 8: Startup Portfolio Page

**User Story:** As an investor or ecosystem partner, I want to browse all incubated startups with detailed information, so that I can identify collaboration or investment opportunities.

#### Acceptance Criteria

1. THE Portfolio_Page SHALL display all 14 Startup_Card components, each showing: startup name, sector badge, problem statement, solution description, team member names, and a colour-coded status badge
2. THE Portfolio_Page SHALL provide a Filter_System with three filter types: sector dropdown, text search by name or keyword, and status filter
3. WHEN a visitor enters text in the search field, THE Filter_System SHALL filter Startup_Card components to show only those whose name, sector, problem statement, or solution contains the search text (case-insensitive)
4. WHEN a visitor selects a sector filter value, THE Filter_System SHALL display only Startup_Card components matching the selected sector
5. WHEN a visitor selects a status filter value, THE Filter_System SHALL display only Startup_Card components matching the selected status
6. WHEN multiple filters are active simultaneously, THE Filter_System SHALL display only Startup_Card components satisfying all active filter conditions
7. THE Portfolio_Page SHALL display Amritava, Syncally, bloomin., and Snapmeet with visual prominence distinguishing them from other startup cards
8. THE Portfolio_Page SHALL render "bloomin." with a full stop as part of the brand name in all instances

### Requirement 9: Apply for Incubation Page

**User Story:** As a potential startup founder, I want to understand eligibility, evaluation criteria, and submit an application, so that I can apply for incubation at PES NEXT.

#### Acceptance Criteria

1. THE Apply_Page SHALL display a "Who Can Apply" section listing eligibility criteria for incubation
2. THE Apply_Page SHALL display an "Evaluation Criteria" section detailing how applications are assessed
3. THE Apply_Page SHALL display the "Application Process" as 3 distinct stages with clear descriptions
4. THE Apply_Page SHALL display the Application_Form with all specified input fields for collecting applicant information
5. WHEN a visitor submits the Application_Form with all required fields completed, THE Application_Form SHALL validate all inputs and submit the form data
6. IF a visitor submits the Application_Form with one or more required fields empty, THEN THE Application_Form SHALL display inline error messages adjacent to each incomplete required field without submitting the form

### Requirement 10: Funding and Grants Page

**User Story:** As an incubated startup, I want to understand funding opportunities, eligibility, and disbursement process, so that I can plan my milestone-based funding applications.

#### Acceptance Criteria

1. THE Funding_Page SHALL display the Seed Fund Initiative description including its purpose and structure
2. THE Funding_Page SHALL display eligibility conditions for seed fund access
3. THE Funding_Page SHALL display the 3-step funding process showing how funds are applied for and disbursed
4. THE Funding_Page SHALL display a grant approvals table with 4 entries: Syncally (₹10,000), Amritava (₹70,000), Snapmeet (₹43,560), and bloomin. (₹1,02,040)
5. THE Funding_Page SHALL display incubation tenure details including duration and terms
6. THE Funding_Page SHALL display quarterly monitoring criteria used to evaluate startup progress
7. THE Funding_Page SHALL present grants as conditional milestone-based disbursements, not loans

### Requirement 11: Contact Page

**User Story:** As a visitor, I want to reach PES NEXT through multiple channels, so that I can get answers to specific questions or visit the centre.

#### Acceptance Criteria

1. THE Contact_Page SHALL display contact information including address, email, and phone details for PES NEXT
2. THE Contact_Page SHALL display the Contact_Form with fields for name, email, subject, and message
3. WHEN a visitor submits the Contact_Form with all required fields completed, THE Contact_Form SHALL validate inputs and submit the enquiry
4. IF a visitor submits the Contact_Form with one or more required fields empty, THEN THE Contact_Form SHALL display inline error messages adjacent to each incomplete required field
5. THE Contact_Page SHALL display an embedded Google Map showing the location of PES College of Engineering, Mandya

### Requirement 12: Scroll Animations and Micro-interactions

**User Story:** As a visitor, I want smooth visual feedback as I browse the site, so that the experience feels polished and professional.

#### Acceptance Criteria

1. WHEN a section or card element scrolls into the viewport, THE Scroll_Animation SHALL trigger a Framer Motion entrance animation (fade-in, slide-up, or scale) with a duration between 300ms and 600ms
2. THE Scroll_Animation SHALL trigger animations only once per element per page load to avoid repetitive motion
3. WHEN a visitor hovers over a CTA_Button, THE CTA_Button SHALL display a hover state transition within 200ms
4. WHEN a visitor hovers over a Startup_Card or Infrastructure_Card, THE card SHALL display a subtle elevation change via box-shadow transition
5. THE Website SHALL use smooth scrolling behaviour for all anchor-based in-page navigation

### Requirement 13: Animated Statistics Counter

**User Story:** As a visitor, I want to see stats animate as I scroll to them, so that key metrics capture my attention and feel dynamic.

#### Acceptance Criteria

1. WHEN the Stats_Counter component scrolls into the viewport for the first time, THE Stats_Counter SHALL animate each numeric value from zero to its target value over a duration of 1500ms to 2500ms
2. THE Stats_Counter SHALL animate all counters simultaneously when the container enters the viewport
3. THE Stats_Counter SHALL display the final target value after animation completes and remain static on subsequent scrolls

### Requirement 14: Dark Mode Support

**User Story:** As a visitor who prefers dark interfaces, I want to toggle dark mode, so that I can browse comfortably in low-light environments.

#### Acceptance Criteria

1. WHERE the Dark_Mode_Toggle is implemented, THE Website SHALL provide a toggle control accessible from the navigation area
2. WHERE the Dark_Mode_Toggle is implemented, WHEN a visitor activates the toggle, THE Website SHALL switch all page elements to a dark colour scheme within 200ms
3. WHERE the Dark_Mode_Toggle is implemented, THE Website SHALL persist the visitor's theme preference in local storage and apply it on subsequent visits

### Requirement 15: SEO and Metadata

**User Story:** As the PES NEXT marketing team, I want proper SEO metadata on all pages, so that the website ranks well in search engines for relevant queries.

#### Acceptance Criteria

1. THE Website SHALL render unique title tags and meta description tags for each of the 8 pages
2. THE Website SHALL include Open Graph meta tags (og:title, og:description, og:image) for social media sharing on all pages
3. THE Website SHALL generate a semantic HTML structure using appropriate heading hierarchy (h1, h2, h3) on every page
4. THE Website SHALL render server-side using Next.js to provide search engine crawlers with fully rendered HTML content

### Requirement 16: Performance and Accessibility

**User Story:** As any visitor including those using assistive technology, I want the site to load quickly and be fully accessible, so that I can access all content regardless of ability or connection speed.

#### Acceptance Criteria

1. THE Website SHALL achieve a Lighthouse Performance score of 90 or above on desktop
2. THE Website SHALL achieve a Lighthouse Accessibility score of 90 or above
3. THE Website SHALL provide alt text for all images and decorative icons
4. THE Website SHALL support keyboard navigation for all interactive elements including the Navigation_System, Filter_System, forms, and CTA_Button components
5. THE Website SHALL use semantic HTML elements (nav, main, section, article, header, footer) for page structure
6. WHEN images are below the viewport fold, THE Website SHALL defer image loading using native lazy loading

### Requirement 17: Special Features

**User Story:** As a visitor, I want additional discovery and engagement features, so that I can stay informed and access resources beyond basic page content.

#### Acceptance Criteria

1. THE Portfolio_Page SHALL function as a Startup Directory with combined sector filter, text search, and status filter capabilities
2. THE Ignite_Cohort_Page SHALL display the Cohort_Dashboard presenting a visual progress map of startup stages
3. THE Website SHALL provide a Downloadable Resources section where visitors can access program-related documents
4. THE Home_Page SHALL include the Stats_Counter section with animated counters for key metrics
5. THE Website SHALL display an Announcements_Strip section for latest PES NEXT news and updates

### Requirement 18: Partner Attribution and Branding

**User Story:** As the PES NEXT team, I want correct attribution for all partners and branded elements, so that institutional relationships are accurately represented.

#### Acceptance Criteria

1. THE Website SHALL acknowledge InUnity Private Limited as the operating partner (not owner) in the footer and about section
2. THE Website SHALL reference People's Education Trust (R) as the parent trust where contextually appropriate
3. THE Website SHALL render "bloomin." with a trailing full stop in all instances as a brand stylistic choice
4. THE Website SHALL visually distinguish Amritava, Syncally, bloomin., and Snapmeet as high-potential teams wherever startup cards are displayed
5. THE Funding_Page SHALL present all grants as conditional milestone-based disbursements and not describe them as loans
