# Luthfan's Portfolio

A personal portfolio and personal knowledge base built with **React**, **TypeScript**, **Tailwind CSS v4**, and **Vite**.

## Features

- **Hero Section** — Greeting, headline, and CTA links to GitHub, LinkedIn, and Medium
- **About** — Brief bio and key stats
- **Skills** — Tag-based skill badges grouped by category (Languages, Databases, Tools & Platforms, Concepts)
- **Projects** — Curated project cards with descriptions, tags, and GitHub links
- **Personal Knowledge Base** — Documentation-style learning log with sidebar navigation, tag filtering, and external article links
- **Active Navbar** — Scroll-aware navigation with section highlighting
- **Responsive** — Mobile-first design with hamburger menu on small screens
- **Dark Mode** — Sleek dark aesthetic with glassmorphism effects

## Tech Stack

| Layer     | Technology                        |
| --------- | --------------------------------- |
| Framework | React 19                          |
| Language  | TypeScript                        |
| Styling   | Tailwind CSS v4                   |
| Bundler   | Vite 7                            |
| Fonts     | Inter, JetBrains Mono             |

## Getting Started

```bash
# Clone the repository
git clone https://github.com/luthfan-ap/portfolio-web.git
cd portfolio-web

# Install dependencies
npm install

# Start the dev server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

## Build for Production

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── assets/              # SVG logo and static assets
├── components/          # React components
│   ├── Navbar.tsx       # Scroll-aware navigation bar
│   ├── Hero.tsx         # Landing section with CTAs
│   ├── About.tsx        # Bio and stats
│   ├── Skills.tsx       # Tag-based skill badges
│   ├── Projects.tsx     # Project showcase cards
│   ├── KnowledgeBase.tsx       # Personal Knowledge Base / learning log
│   └── Footer.tsx       # Footer with social links
├── data/                # Content data files
│   ├── projects.ts      # Project entries
│   ├── skills.ts        # Skill categories
│   └── knowledgeBaseEntries.ts # Personal Knowledge Base entries
├── App.tsx              # Root layout
├── main.tsx             # Entry point
└── index.css            # Tailwind config and custom styles
```
