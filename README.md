# Luthfan Aryananda Purwito — Portfolio

Personal engineering portfolio built with React, TypeScript, Vite, and Tailwind CSS.

The homepage presents:

- Professional experience at Sampoerna and PLN
- Selected data engineering and backend systems work
- Interactive ETL, Hybrid, and ELT thesis research
- Technical writing published on Medium
- Education, leadership, and contact information

## Development

```bash
npm install
npm run dev
```

The development server is normally available at `http://localhost:5173`.

## Validation

```bash
npm run lint
npm run build
```

## Active source structure

```text
src/
├── components/
│   ├── Navbar.tsx
│   ├── PortfolioArrow.tsx
│   ├── ProfessionalPortfolio.tsx
│   └── ResearchProject.tsx
├── App.tsx
├── ThemeContext.tsx
├── useTheme.ts
├── index.css
├── main.tsx
└── portfolio.css
```

Authentic portfolio media lives in `public/images/` and `public/documents/`. Its origin is recorded in `docs/asset-provenance.md`.
