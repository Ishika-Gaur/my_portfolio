# 🌸 Ishika Gaur — Portfolio

A stunning, animated personal portfolio built with **Next.js 14**, **Framer Motion**, and **Tailwind CSS**.

## ✨ Features

- **Animated Hero** with orbiting rings, floating tech badges, and 3D cartoon avatar
- **Smooth Scroll Animations** — every section animates in on scroll
- **Custom Cursor Glow** — mouse trail effect
- **Floating Particle Background** — animated orbs and grid
- **Glass Morphism** cards throughout
- **Gradient Shimmer Text** effects
- **Fully Responsive** — mobile-first design
- **Dark elegant theme** — deep navy/black with violet, rose & teal accents

## 📁 Folder Structure

```
ishika-portfolio/
├── public/
│   └── ishika-avatar.png        # Your cartoon avatar
├── src/
│   ├── app/
│   │   ├── globals.css          # Global styles, animations, CSS variables
│   │   ├── layout.tsx           # Root layout + metadata
│   │   └── page.tsx             # Main page (composes all sections)
│   ├── components/
│   │   ├── CursorGlow.tsx       # Custom animated cursor
│   │   ├── FloatingOrbs.tsx     # Animated background
│   │   ├── Navbar.tsx           # Sticky nav with scroll detection
│   │   ├── Hero.tsx             # Hero section with avatar
│   │   ├── About.tsx            # About section
│   │   ├── Experience.tsx       # Work experience timeline
│   │   ├── Projects.tsx         # Live project cards
│   │   ├── Skills.tsx           # Skill bars + badge cloud
│   │   ├── Certifications.tsx   # Cert cards
│   │   ├── Contact.tsx          # Contact section
│   │   ├── Footer.tsx           # Footer
│   │   └── SectionHeader.tsx    # Reusable section header
│   └── lib/
│       └── useInView.ts         # Scroll intersection hook
├── next.config.js
├── tailwind.config.js
├── tsconfig.json
└── package.json
```

## 🚀 Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to see your portfolio!

### 3. Build for production

```bash
npm run build
npm start
```

## 🌐 Deploy to Vercel (Free)

1. Push this project to GitHub
2. Go to [vercel.com](https://vercel.com) → New Project
3. Import your repo → Deploy

Your portfolio will be live at `your-name.vercel.app` in seconds!

## 🎨 Customization

- **Colors**: Edit CSS variables in `src/app/globals.css`
- **Content**: Update data in each component file
- **Avatar**: Replace `public/ishika-avatar.png`
- **Fonts**: Change Google Fonts import in `globals.css`

## 🛠 Tech Stack

- **Next.js 14** — React framework
- **TypeScript** — Type safety
- **Framer Motion** — Animations
- **Tailwind CSS** — Styling
- **Lucide React** — Icons
