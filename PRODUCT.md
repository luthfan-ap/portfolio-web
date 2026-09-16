# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Hiring managers and engineering teams, explicitly confirmed by the owner earlier in this conversation. They need to quickly understand Luthfan's engineering focus, professional experience, contribution to projects, and approach to technical problems, then inspect supporting sources or make contact.

## Product Purpose

Luthfan Aryananda Purwito's professional portfolio and technical writing index. Present an early-career engineer with real professional experience, make qualifications and evidence easy to scan, and provide access to deeper work through GitHub and Medium.

## Positioning

The owner confirms that he is an Information Systems graduate from Institut Teknologi Sepuluh Nopember (ITS), focused on data engineering, backend systems, and software engineering, with professional experience at Sampoerna and PLN. These statements supersede the repository's outdated undergraduate and expected-graduation copy.

Professional experience should be prominent. Projects demonstrate engineering decisions and implementation; writing demonstrates technical understanding and communication. Do not present all projects as equally significant or production-ready.

## Operating Context

The current implementation is a React 19 / TypeScript / Vite application with Tailwind CSS. Its entry is `src/App.tsx`; `index.html` is the document shell. Development runs with `npm run dev`, validation with `npm run build` and `npm run lint`. Navigation is within one page. The application already offers light and dark themes and links to GitHub, LinkedIn, and Medium.

This checkout is the active React portfolio. The earlier Astro implementation discussed in the conversation is not a source of design authority; its generated metadata and obsolete review captures have been removed.

## Capabilities and Constraints

- The owner has authorized direct restructuring and implementation, followed by responsive, motion, hierarchy, and accessibility refinement. This init operation records the brief; it does not itself implement the redesign.
- Preserve the current portfolio as the foundation. The latest brief supersedes the earlier request for a wholly different visual concept and the previous Visible Logic design contract.
- Retain useful project, GitHub, LinkedIn, and Medium destinations. Verify outdated destinations when updating their content.
- Prioritize the strongest recent engineering work, distinguish flagship work from smaller experiments, and show technologies in the context of actual projects and professional experience.
- Include a real owner-supplied portrait when available. Use original project screenshots, photos, and research artifacts where they explain the work. Do not fabricate a portrait or project evidence.
- Reduce repetitive copy and unnecessary skill badges. Preserve concise access to deeper project details and writing.
- Do not invent dates, job titles, achievements, metrics, technologies, outcomes, or implementation details. Unverified details need explicit placeholders or omission until supported.
- No deployment destination, public resume URL, or public email destination is confirmed in the current brief. Keep these open rather than creating links.

## Brand Commitments

The owner explicitly wants the existing portfolio's clean, welcoming, light, readable, approachable character preserved while making it more mature and professional. Simple navigation, smooth motion, and a visible personal presence are binding qualities. The existing name and local logo are authentic identity assets. Init does not establish a replacement palette, typography system, component vocabulary, or page composition.

## Evidence on Hand

- `src/components/ProfessionalPortfolio.tsx` and `ResearchProject.tsx`: active professional content, project selection, writing destinations, and thesis presentation.
- `src/components/Navbar.tsx`, `src/index.css`, and `src/portfolio.css`: active interface and visual system.
- `src/assets/logo-luthfan.svg`: existing identity asset.
- Owner-confirmed public destinations: `https://github.com/luthfan-ap`, `https://medium.com/@luthfan-ap`, and `https://www.linkedin.com/in/luthfan-aryananda/`.
- Earlier in this conversation, three portraits, a thesis defense PDF, CVs, repository code, and Medium articles were reviewed. The original portrait derivative, thesis slide derivative, and full defense PDF have now been recovered from the earlier build into `public/images/` and `public/documents/`. See `docs/asset-provenance.md`. These are authentic supplied assets, not generated substitutes.
- Earlier source review distinguished the ETL/ELT/Hybrid thesis benchmark from the separate Delta Lake idempotency demonstration. My Simple DB's inspected SELECT implementation used sequential fixed-size record reads; the key-value store's inspected replication used local disk directories. Recheck relevant source when updating these descriptions rather than repeating broader legacy claims.

## Open Content Decisions

Experience was reconciled with the supplied BCG CV during implementation: Sampoerna Software Quality Assurance Engineer Intern, May 2026?present; PLN Business Analyst Intern in Strategic Planning, September?December 2025. The CV supports the displayed 47 backlog items, approximately 210 test cases, six operational units, GPA 3.65, cum laude graduation, and HMSI leadership. The portrait and thesis materials have been recovered. No public resume or email link has been supplied; contact uses the confirmed LinkedIn profile.

## Product Principles

1. Make professional identity and experience immediately understandable.
2. Use attributable evidence and distinguish measured results, implementation, and illustrative explanations.
3. Keep the personal voice welcoming and the content concise.
4. Offer deeper technical detail without requiring it for basic understanding.
5. Keep navigation and interactions usable on mobile, with keyboard access and respect for reduced motion.

## Accessibility & Inclusion

The owner explicitly requests accessibility refinement. Implementation should verify reading order, keyboard navigation, visible focus, readable contrast in both existing themes, responsive layouts, reduced-motion behavior, and useful text alternatives for authentic visual material. No additional product-specific accessibility standard has been specified.
