# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static event website for PyCon Busan 2026, deployed on GitHub Pages. Built with React + Vite, bilingual (KR/EN), fully data-driven.

**License**: Apache License 2.0

## Technology Stack

- **Framework**: React 18 with functional components and hooks
- **Build Tool**: Vite 6
- **Routing**: React Router 6 with HashRouter (GitHub Pages compatible)
- **i18n**: i18next + react-i18next (Korean/English)
- **Styling**: Plain CSS, mobile-first, no CSS frameworks
- **Deployment**: GitHub Pages (`base: '/PyConKR-Busan2026/'` in vite.config.js)

## Development Commands

```bash
npm run dev       # Start dev server (http://localhost:5173)
npm run build     # Build for production → dist/
npm run preview   # Preview production build
```

No test framework or linter is configured.

## Architecture

### Component Hierarchy

```
App (HashRouter)
├── Navbar            # Dropdown nav + KR/EN language switcher
├── Routes
│   ├── /             → Home → Hero
│   ├── /pyconbusan   → PyConBusan
│   ├── /safety       → Safety
│   ├── /conduct      → Conduct
│   ├── /volunteer    → Volunteer
│   ├── /team         → Team → TeamList → TeamItem
│   ├── /timetable    → Timetable → TimetableList → TimetableItem
│   ├── /sprint       → Sprint
│   ├── /lighttalk    → LightTalk
│   ├── /schedule     → Schedule → ScheduleItem
│   ├── /keynotes     → Keynotes
│   ├── /session      → Session → SessionList → SessionItem
│   ├── /goods        → Goods
│   ├── /prospectus   → Prospectus
│   └── /patrons      → Patrons
└── Footer            # Social links, business info
```

### Data Flow

Pages import static data files → pass as props → List components map → Item components render.

```
src/data/schedule.js   { id, time, title, speaker, room }
src/data/session.js    { id, title, abstract, speakers[], tags[], do_not_record }
src/data/team.js       { id, name, role, org, image }
```

To update content, edit only the relevant data file — components update automatically.

### i18n

Config in `src/i18n.js`. Translation files: `src/locales/en/translation.json` and `src/locales/kr/translation.json`. Default language is English.

```jsx
const { t, i18n } = useTranslation();
t('heroDate')                   // string key
i18n.changeLanguage('kr')       // switch language
t('goodsItems.mug.name')        // nested key
```

The Navbar includes a KR/EN toggle button that calls `i18n.changeLanguage()`.

### Styling Conventions

- Each component has a co-located CSS file (e.g. `Hero.jsx` / `Hero.css`)
- Mobile breakpoint: `@media (max-width: 768px)`
- Tablet: `@media (max-width: 1024px)`
- Desktop: `@media (min-width: 1024px)`
- Theme gradient: `#667eea → #764ba2`

### Static Deployment Constraints

- HashRouter required — all routes use `/#/` prefix
- No server-side APIs; all data is static imports
- `dist/` is the deployment artifact for GitHub Pages
