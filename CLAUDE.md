# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Static event website for PyCon Busan 2026, designed for deployment on GitHub Pages. This is a modern, responsive conference site built with React and Vite.

**License**: Apache License 2.0

## Technology Stack

- **Framework**: React with functional components and hooks
- **Build Tool**: Vite
- **Routing**: HashRouter (GitHub Pages compatible)
- **Deployment**: GitHub Pages static hosting
- **Architecture**: Fully static (no backend/SSR)

## Development Commands

Once the project is initialized with npm/Vite:

```bash
npm install          # Install dependencies
npm run dev          # Start development server
npm run build        # Build for production (output to dist/)
npm run preview      # Preview production build locally
```

## Project Structure

```
src/
  components/
    Navbar.jsx          # Top navigation
    Hero.jsx            # Landing hero section
    TimetableList.jsx   # Schedule list container
    TimetableItem.jsx   # Individual schedule item
  data/
    schedule.js         # Event schedule data
  pages/
    Home.jsx            # Landing page with hero + CTA
    Timetable.jsx       # Schedule page
  App.jsx
  main.jsx
public/
  images/              # Static assets
vite.config.js         # Vite configuration (base path for GH Pages)
```

## Architecture Principles

### Data-Driven Design
- Schedule content stored in `src/data/schedule.js`
- Each session supports: time, title, speaker, room
- Update schedule by editing data file only, not components

### Responsive Design (Mobile-First)
- **Breakpoints**: <768px (mobile), 768-1024px (tablet), >1024px (desktop)
- Card layout on mobile, grid/table on desktop
- Touch-friendly tap targets (minimum 44x44px)

### Component Patterns
- Reusable components following single responsibility principle
- Functional components with hooks
- Clean separation between layout, presentation, and data

### Static Deployment Constraints
- All routes must work with static file serving
- Use HashRouter or configure Vite for SPA routing
- Relative asset paths throughout
- No runtime server dependencies

## GitHub Pages Deployment

- Configure `vite.config.js` with correct `base` path for repository name
- Build output goes to `dist/` directory
- Ensure all routes work when served from a subdirectory
- Use HashRouter from react-router-dom for client-side routing

## Claude Agent

For website development tasks, use the `pycon-frontend-builder` agent defined in `.claude/agents/pycon-frontend-builder.md`. This agent has detailed specifications for:
- Component implementation
- Responsive design guidelines
- Quality checklist
- Deployment procedures
