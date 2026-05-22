[![My Skills](https://skillicons.dev/icons?i=react,vite,js,html,css,tailwind,bulma,highcharts,gh)](https://skillicons.dev)

# Portfolio Website

This is my personal portfolio website built with **React** and **Vite**, featuring interactive visualizations, responsive design, and animated UI components.

Live demo: [https://amilcartorres1000-web.github.io/portfolio/](https://amilcartorres1000-web.github.io/portfolio/)

---

## Technologies Used

- React 19
- Vite
- Bulma
- Tailwind CSS
- Highcharts / Highcharts React
- motion (motion/react)
- Lucide React
- clsx / tailwind-merge / class-variance-authority
- GitHub Pages (gh-pages)
- tw-animate-css

> Note: The project uses Bulma for layout, Tailwind for custom UI utilities, and modern React animation patterns. If desired, `badtz-ui` could also be integrated as an additional component library for card-style UI elements.

---

## Key Features

- Responsive portfolio layout with a combined Bulma + Tailwind approach
- Interactive charts for:
  - Data analysis
  - Particle collision simulation
  - Web development tech stack
  - AI training progress
- Custom reusable components:
  - `ExpandableCard`
  - `Meteors` background effect
  - `TypingAnimation`
- Image assets served from `public/` for easy static hosting
- Deployment via GitHub Pages

---

## Project Structure

- `src/App.jsx` — main app shell and routed sections
- `src/components/` — all page components, sections, and charts
- `src/components/ui/` — reusable UI components and animation helpers
- `src/index.css` — global styling and Tailwind imports
- `public/` — static images and assets

---

## Installation

```bash
npm install
npm run dev
```

Build for production:

```bash
npm run build
```

Preview production build locally:

```bash
npm run preview
```

Deploy to GitHub Pages:

```bash
npm run deploy
```

---

## Notes

- Image assets are loaded from the `public/` folder.
- The project alias `@` is configured in `vite.config.js` to simplify imports like `@/components/ui/meteors`.
- The current codebase mixes Bulma layout classes with Tailwind utility classes for flexible styling.

---

## Future Improvements

- Add more project details and external links for each card
- Improve the ExpandableCard component with better accessibility
- Add full theme toggling (light/dark)
- Optionally integrate `badtz-ui` for prebuilt card/UI components

