# Brian Zalewski — Personal Portfolio

A personal portfolio website showcasing software engineering experience, core competencies, and featured side projects. Re-engineered from a Gatsby/MongoDB architecture into a fast, zero-database static Single Page Application.

## Tech Stack

* **Framework:** Vue 3 (Composition API / `<script setup>`)
* **Build Tool:** Vite
* **Styling:** Tailwind CSS
* **Data Layer:** Flat local JSON collections (`src/data/`)

## Architecture & Design Decisions

* **Zero-Database Overhead:** Replaced remote cloud database queries (MongoDB Atlas) and build-time GraphQL schemas with flat, version-controlled JSON files. Updating roles, project links, or tech stacks only requires editing local data.
* **Pure Static Delivery:** Compiles to static assets (`index.html`, minified JS/CSS bundles) deployed directly to the web root without requiring a persistent Node.js runtime process.
* **Component System:** Responsive single-page layout utilizing Tailwind tokens for strict spacing, typography, and dark-mode contrast.

## Project Structure

```text
├── public/
│   ├── favicon.svg           # Custom SVG glyph
│   └── images/               # Profile and project visual assets
├── src/
│   ├── assets/               # Global styles and static vectors
│   ├── components/
│   │   ├── Navbar.vue        # Responsive header and jump navigation
│   │   ├── Hero.vue          # Overview and core technical focus
│   │   ├── AboutMe.vue       # About Me
│   │   ├── Experience.vue    # Tabbed career history and role details
│   │   ├── Projects.vue      # Card grid consuming flat project schemas
│   │   └── Contact.vue       # Communication links and footer
│   ├── data/
│   │   ├── jobs.json         # Career timeline and duty breakdowns
│   │   └── projects.json     # Project metadata and repository links
│   ├── App.vue               # Root layout container
│   ├── main.js               # Application bootstrap
│   └── style.css             # Tailwind base layers and directives
├── index.html
├── package.json
└── vite.config.js