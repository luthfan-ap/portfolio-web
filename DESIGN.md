---
name: Luthfan's Portfolio
description: Friendly blue engineering portfolio with soft depth, current professional evidence, and an approachable personal voice.
colors:
  primary: "#5a7bc4"
  primary-hover: "#4a66a8"
  action: "#3d5490"
  primary-soft: "#eef2ff"
  background: "#ffffff"
  background-tint: "#f8fafc"
  ink: "#1e293b"
  muted: "#64748b"
  dark-background: "#060a12"
  dark-surface: "#111827"
  dark-ink: "#e2e8f0"
  dark-accent: "#93acff"
typography:
  display:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "clamp(2.25rem, 5vw, 3.75rem)"
    fontWeight: 700
    lineHeight: 1.15
    letterSpacing: "-0.025em"
  headline:
    fontFamily: "JetBrains Mono, ui-monospace, monospace"
    fontSize: "clamp(1.875rem, 3vw, 2.25rem)"
    fontWeight: 700
    lineHeight: 1.2
  body:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
  label:
    fontFamily: "Inter, ui-sans-serif, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 600
rounded:
  control: "8px"
  card: "12px"
  flagship: "16px"
spacing:
  xs: "8px"
  sm: "12px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.action}"
    textColor: "{colors.background}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
  button-secondary:
    backgroundColor: "transparent"
    textColor: "{colors.muted}"
    rounded: "{rounded.control}"
    padding: "12px 24px"
  card:
    backgroundColor: "{colors.background}"
    textColor: "{colors.ink}"
    rounded: "{rounded.card}"
    padding: "28px"
---

# Design System: Luthfan's Portfolio

## Overview

**Creative North Star: "The Friendly Systems Notebook"**

The portfolio restores the original React site's welcoming blue, white, and slate identity. A centered dot-pattern hero, translucent compact navigation, softly rounded cards, and restrained blue glow create the recognizable personal tone. Current professional experience and authentic engineering evidence give that familiar style greater maturity.

**Key Characteristics:**
- Centered, approachable first impression with an animated multilingual greeting.
- Cool blue accents, white space, and soft card depth in both themes.
- Authentic portrait and thesis artifact integrated with factual content.
- Technical hierarchy through JetBrains Mono headings and concise Inter body copy.

## Colors

The palette uses the original muted blue scale against cool white and blue-black surfaces. Primary blue carries identity and large emphasis. The deeper action blue is reserved for small white-text controls so they retain accessible contrast. Dark mode uses a lighter blue accent on near-black surfaces.

**The Blue Restraint Rule.** Blue identifies actions, links, and selected states; it does not wash entire content regions.

## Typography

**Display and Body Font:** Inter with system sans fallbacks.  
**Technical Heading Font:** JetBrains Mono with monospace fallbacks.

Inter keeps the page personal and readable. JetBrains Mono returns the original technical character to section headings without turning general body copy into a developer costume.

- **Display:** bold, compact hero identity with blue name emphasis.
- **Headline:** monospace section titles at 30–36px.
- **Title:** 18–22px semibold for projects and roles.
- **Body:** 16px with 1.65 line height; supporting details use 12–14px with stronger contrast.
- **Label:** 14px semibold for navigation and actions.

## Layout

Content uses a centered 72rem shell with 32px desktop gutters and 20px mobile gutters. Sections use 96px vertical padding, reducing to 64px on mobile. The hero is centered and approximately 82vh rather than a forced full viewport. Experience and supporting work use paired cards; the flagship remains full width. At 768px, the flagship, About, and writing layouts stack in document order. The portrait appears only within About.

## Elevation & Depth

Cards are flat at rest with fine low-contrast borders. Hover introduces a soft 8px/32px blue-tinted ambient shadow. Primary actions use a deeper 10px/25px blue shadow. The flagship carries a subtle persistent ambient shadow because it is the main interactive artifact. The header uses the incumbent translucent backdrop blur.

**The Responsive Depth Rule.** Elevation responds to interaction and hierarchy; it never competes with the portrait or thesis slide.

## Shapes

Controls use an 8px radius, ordinary cards use 12px, and the flagship uses 16px. Borders remain one pixel. The portrait keeps a simple 16px photographic frame. Pills appear only in the compact architecture selector surface; general content does not use badge clusters.

## Components

### Buttons
Primary buttons use deep blue, white text, 12px/24px padding, an 8px radius, and a subtle upward hover shift. Secondary buttons use a transparent surface and neutral border. Focus uses a 3px blue outline with 4px offset.

### Cards / Containers
Experience, supporting systems, smaller projects, and writing reuse white or dark slate cards with 12px corners and quiet borders. Card hover adds blue-tinted ambient depth. Technologies remain contextual footer text.

### Navigation
The original fixed header is preserved: translucent white or deep navy surface, backdrop blur, script mark, compact active link, social icons, and theme toggle. The mobile version keeps the same icon controls and opens an in-flow menu.

### Thesis flagship
The full-width 16px surface combines the benchmark question, verified summary, architecture switch, technical path, original thesis slide, benchmark limitations, results disclosure, and source link. ETL, Hybrid, and ELT buttons use `aria-pressed`; static evidence remains useful without interaction.

### Motion
The hero uses the original staggered 600ms fade-up sequence and rotating greeting. Cards, links, arrows, and buttons transition over 200–300ms. Reduced motion removes entrances, transitions, smooth scrolling, and greeting rotation.

## Do's and Don'ts

### Do:
- **Do** preserve the original header, centered dot-pattern hero, muted blue scale, and soft card glow.
- **Do** keep professional experience ahead of projects and the portrait in About.
- **Do** use authentic project artifacts and state benchmark limits clearly.
- **Do** keep technologies attached to the work that uses them.

### Don't:
- **Don't** move the portrait back into the hero.
- **Don't** replace the restored style with editorial open rows or a systems-dashboard aesthetic.
- **Don't** invent roles, results, metrics, technologies, or project behavior.
- **Don't** make animation necessary to understand or navigate the page.
