# KK Consultancy Website

A professional pharma regulatory consultancy landing page built with React + Vite + Tailwind CSS.

## Tech Stack

- **React 19** + **TypeScript**
- **Vite 6** (dev server & build)
- **Tailwind CSS v4**
- **Framer Motion** (animations)
- **Lucide React** (icons)
- **Wouter** (routing / smooth scroll)

## Getting Started

```bash
# Install dependencies
npm install

# Start the dev server (opens at http://localhost:5173)
npm run dev

# Build for production
npm run build

# Preview the production build
npm run preview
```

## Project Structure

```
kk-consultancy/
├── public/             # Static assets (favicon, robots.txt)
├── src/
│   ├── components/     # Page sections
│   │   ├── Navbar.tsx
│   │   ├── Hero.tsx
│   │   ├── About.tsx
│   │   ├── Services.tsx
│   │   ├── WhyChooseUs.tsx
│   │   ├── Contact.tsx
│   │   ├── Footer.tsx
│   │   └── ui/         # shadcn/ui base components
│   ├── pages/
│   │   └── Home.tsx
│   ├── hooks/
│   ├── lib/
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css       # Tailwind theme + CSS variables
├── index.html
├── package.json
├── vite.config.ts
└── tsconfig.json
```

## Customisation

- **Logo** — replace the "KK" monogram in `src/components/Navbar.tsx` and `src/components/Hero.tsx` with your logo image.
- **Colors** — the blue theme is defined via CSS variables in `src/index.css`.
- **Contact details** — update phone/email in `src/components/Contact.tsx` and `src/components/Footer.tsx`.
- **Services** — edit the `services` array in `src/components/Services.tsx`.
