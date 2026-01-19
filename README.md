# Appextech Homepage

A modern, responsive React homepage for Appextech Software Solutions with component-based CSS, interactive review carousel, and multi-level navigation.

## Features

- **Responsive Design**: Mobile-first layout with breakpoints for tablets and desktops.
- **Component-Specific CSS**: Each component imports its own stylesheet for maintainability.
- **Interactive Review Carousel**: Auto-rotating client testimonials with dot navigation.
- **Multi-Level Navigation**: Dropdown and mega menu support in the header.
- **Smooth Animations**: Fade-up effects and hover transitions throughout.
- **Modern UI**: Clean typography, gradients, and card-based layouts.

## Tech Stack

- **React 18** with hooks
- **Vite** for development and build
- **CSS3** with custom properties and animations
- **Inline SVGs** for icons (no external icon libraries)

## Project Structure

```
src/
├── components/
│   ├── Header.jsx & Header.css
│   ├── Hero.jsx & Hero.css
│   ├── Services.jsx & Services.css
│   ├── Marketing.jsx & Marketing.css
│   ├── Hosting.jsx & Hosting.css
│   ├── Footer.jsx & Footer.css
│   └── review.jsx & review.css
├── assets/
│   └── (images used in components)
├── App.jsx
└── Global.css
```

## Getting Started

### Prerequisites
- Node.js 18+  
- npm or yarn

### Installation

```bash
# Clone the repository
git clone <your-repo-url>
cd appextech-hompage

# Install dependencies
npm install

# Start the development server
npm run dev
```

Open http://localhost:5173 to view the site.

### Build for Production

```bash
npm run build
```

The build output will be in `dist/`.

## Components Overview

### Header
- Top bar with contact info and login/register links
- Main navigation with dropdowns and mega menus
- Logo links to homepage

### Hero
- Headline and call-to-action
- Responsive typography

### Services
- “Who We Are” principles section
- Services grid with icons

### Marketing
- Marketing solutions grid
- Email marketing visual collage

### Hosting
- Hosting plans grid
- “Why Choose Appextech” section

### Review
- Auto-rotating client testimonials
- Dot navigation (6s interval)
- Blue gradient background

### Footer
- Four-column layout
- Social links and bottom bar

## Customization

### Colors & Fonts
Edit `src/Global.css` to change:
- CSS custom properties (`--primary`, `--text`, etc.)
- Base font stacks
- Global animations

### Adding New Sections
1. Create a new component in `src/components/`
2. Add its own `.css` file and import it
3. Import and render the component in `src/App.jsx`

### Navigation Updates
Edit `src/components/Header.jsx`:
- Add/modify `navItems` array
- Use `items` for simple dropdowns
- Use `mega: true` + `columns` for mega menus

## Scripts

- `npm run dev` – start dev server
- `npm run build` – production build
- `npm run preview` – preview production build locally
- `npm run lint` – run ESLint

## Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## License

© Appextech Software Solutions. All rights reserved.
