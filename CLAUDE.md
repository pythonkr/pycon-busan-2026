# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fully implemented static event website for PyCon Busan 2026, deployed on GitHub Pages. Modern, responsive conference site built with React and Vite, featuring a data-driven timetable system and mobile-first design.

**License**: Apache License 2.0

## Technology Stack

- **Framework**: React 18 with functional components and hooks
- **Build Tool**: Vite 6
- **Routing**: React Router 6 with HashRouter (GitHub Pages compatible)
- **Styling**: Plain CSS with responsive design (no CSS frameworks)
- **Deployment**: GitHub Pages static hosting
- **Architecture**: Fully static (no backend/SSR)

## Development Commands

```bash
npm install          # Install dependencies (already done)
npm run dev          # Start development server (http://localhost:5173)
npm run build        # Build for production (output to dist/)
npm run preview      # Preview production build locally
```

**Build Output**: ~169KB JS, ~4KB CSS, successfully tested

## Project Structure

```
src/
  components/
    Navbar.jsx + Navbar.css           # Top navigation with Home/Timetable links
    Hero.jsx + Hero.css               # Full-screen hero with gradient background
    TimetableList.jsx + TimetableList.css   # Schedule list container
    TimetableItem.jsx + TimetableItem.css   # Individual schedule card
  data/
    schedule.js                       # Event schedule (14 sample sessions)
  pages/
    Home.jsx                          # Landing page with hero + CTA
    Timetable.jsx + Timetable.css     # Schedule page with data-driven list
  App.jsx + App.css                   # Main app with HashRouter setup
  main.jsx                            # React entry point
public/
  images/                             # Static assets directory (empty)
index.html                            # HTML entry point
vite.config.js                        # Vite config (base: '/PyConKR-Busan2026/')
package.json                          # Dependencies and scripts
.gitignore                            # Git ignore rules (node_modules, dist)
```

## Current Implementation Status

**✅ Fully Implemented**
- All core components with responsive CSS
- Data-driven timetable with 14 sample sessions
- HashRouter navigation (Home, Timetable pages)
- Mobile-first responsive design
- GitHub Pages deployment configuration
- Production build tested and working

## Architecture Principles

### Data-Driven Design
- Schedule content stored in [src/data/schedule.js](src/data/schedule.js)
- Each session object: `{ id, time, title, speaker, room }`
- Currently contains 14 sample sessions (opening, keynote, talks, breaks, lightning talks)
- **To update schedule**: Edit `schedule.js` array only, components auto-update

### Responsive Design (Mobile-First)
- **Breakpoints implemented**: <768px (mobile), 768-1024px (tablet), >1024px (desktop)
- **Mobile**: Stacked card layout, smaller fonts, touch-friendly buttons (44x44px minimum)
- **Desktop**: Horizontal layouts, larger typography, hover effects
- All components include responsive CSS with media queries

### Component Patterns
- **Single Responsibility**: Each component has one clear purpose
- **Props-based**: TimetableItem receives data via props, no internal state
- **Composition**: TimetableList maps over data and renders TimetableItem components
- **Styling**: Component-specific CSS files, no global style conflicts
- **No external UI libraries**: Pure React + CSS implementation

### Static Deployment Constraints
- **HashRouter**: All routes use `/#/` prefix (required for GitHub Pages)
- **Base Path**: `vite.config.js` sets `base: '/PyConKR-Busan2026/'`
- **No server APIs**: All data is static imports
- **Build output**: Self-contained `dist/` folder ready for static hosting

## GitHub Pages Deployment

**Current Configuration:**
- `vite.config.js` base path: `/PyConKR-Busan2026/`
- HashRouter ensures all routes work with static file serving
- Build command: `npm run build` → outputs to `dist/`
- Deployment: Push `dist/` contents to `gh-pages` branch or use GitHub Actions

**Manual Deployment Steps:**
1. Run `npm run build` to generate `dist/` folder
2. Push code to GitHub repository
3. In repository settings → Pages → Select source (gh-pages branch or GitHub Actions)
4. Site will be available at: `https://[username].github.io/PyConKR-Busan2026/`

## Key Implementation Details

### Schedule Data Structure
```javascript
{
  id: 1,               // Unique identifier
  time: '09:00',       // Session time (HH:MM format)
  title: '세션 제목',   // Session title
  speaker: '발표자',    // Speaker name (use '-' for breaks)
  room: '메인홀'        // Room/location name
}
```

### Component Hierarchy
```
App (HashRouter)
├── Navbar (sticky, on all pages)
└── Routes
    ├── Home
    │   └── Hero (full-screen with CTA)
    └── Timetable
        ├── TimetableList
        └── TimetableItem (mapped for each session)
```

### Styling Approach
- No CSS frameworks (Bootstrap, Tailwind, etc.)
- Component-scoped CSS files
- Mobile-first media queries
- CSS custom properties for colors/spacing would be a good future enhancement
- Current gradient theme: Purple/blue gradient (#667eea → #764ba2)

## Common Development Tasks

### Adding a New Session
1. Edit [src/data/schedule.js](src/data/schedule.js)
2. Add new object to `schedule` array with unique `id`
3. Save file - no component changes needed

### Adding a New Page
1. Create page component in `src/pages/YourPage.jsx`
2. Add corresponding CSS file if needed
3. Add route in [src/App.jsx](src/App.jsx): `<Route path="/your-path" element={<YourPage />} />`
4. Add navigation link in [src/components/Navbar.jsx](src/components/Navbar.jsx)

### Modifying Styles
- Each component has its own CSS file (e.g., `Hero.css` for `Hero.jsx`)
- Mobile breakpoint: `@media (max-width: 768px)`
- Tablet breakpoint: `@media (max-width: 1024px)` or `@media (min-width: 768px) and (max-width: 1024px)`
- Desktop: `@media (min-width: 1024px)`

## Claude Agent Reference

The `.claude/agents/pycon-frontend-builder.md` agent has detailed specifications for:
- Component implementation patterns
- Responsive design guidelines
- Quality checklist
- Deployment procedures

However, **the core website is now fully implemented**. Use the agent for:
- Adding new features (Sponsors page, Speaker profiles, etc.)
- Fixing bugs or improving existing components
- Enhancing responsive behavior
