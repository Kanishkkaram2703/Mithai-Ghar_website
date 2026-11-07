# Mithai Ghar — A Diwali Sweets Recipe Collection

> **College Project Submission**  
> *A high-fidelity digital archive documenting the culinary science, traditional techniques, and cultural heritage of authentic Indian sweets for Diwali.*

---

## 🪔 1. Project Overview & Purpose

**Mithai Ghar** ("House of Sweets") is a specialized food publication website created for an academic college project submission. It solves a real-world culinary problem: while commercial confections increasingly rely on artificial thickeners and vegetable fats, authentic festive Indian sweet-making (*halwai vidya*) is a precise thermal science rooted in three pillars:
1. **Grain Flour & Lentil Bhunao:** Slow-roasting besan and flours in pure desi ghee until starches caramelize.
2. **Chashni Concentration:** Precision sugar-syrup boiling across half-thread, 1-thread (*ek-taar*), 2-thread, and hard-ball stages.
3. **Dairy Curdling & Whey Management:** Acid-curdling fresh cow milk into airy chenna curds for rasgulla and sandesh.

This project delivers 14 comprehensive, authentic recipes from across all 4 quadrants of India (North, East, West, South), paired with interactive kitchen tools: dynamic serving scalers, countdown step timers, and a smart gift box planner that automatically merges and calculates an aggregated grocery shopping list.

---

## ✨ 2. Key Features

- **14 Authentic Master Recipes:**
  - *North India:* Besan Ladoo, Motichoor Ladoo, Kaju Katli, Gulab Jamun, Jalebi, Soan Papdi, Balushahi, Kalakand
  - *East India:* Rasgulla, Sandesh
  - *West India:* Coconut Barfi, Shankarpali
  - *South India:* Mysore Pak, Rava Ladoo
- **Standout Diwali Hero Animation:**
  - Handcrafted SVG Diya oil lamps with staggered flickering flame physics, soft radial glow illumination, and gently drifting golden sparks.
  - Zero performance lag and compliant with `prefers-reduced-motion`.
- **Zero-Pill Typography & Editorial Design:**
  - Curated Indian festive palette: Deep Maroon (`#5b1a1a`), Marigold (`#f2a900`), Saffron (`#e8590c`), Cream (`#fff8ec`), and Charcoal (`#231815`).
  - Google Fonts pairing: *Playfair Display* for royal confectionery titles and *Plus Jakarta Sans* for readable body text.
  - No generic clip art or copyright issues: elegant SVG rangoli watermarks and gradient confectionery badges.
- **Dynamic Servings Adjuster:**
  - Scales all ingredient quantities live in real-time based on selected servings or guest count, using exact metric units (`g`, `ml`, `tsp`, `tbsp`).
- **Interactive Step Timers:**
  - In-browser countdown timers on crucial steps (such as the 22-minute besan roast, 15-minute boondi syrup soak, or 18-minute slow lamination fry) with audio-visual completion cues.
- **Smart Diwali Gift Box & Consolidated Shopping List:**
  - Custom Mithai Dabba curator: select piece counts for each sweet.
  - Algorithmic shopping list consolidation: merges ingredients like Ghee, Sugar, Cardamom, Flours, and Cashews across different sweets into one unified shopping checklist.
  - One-click "Copy Shopping List" for clipboard and print-ready receipts.
  - Pre-set curated boxes: *The Royal Diwali Dabba*, *Sonar Bangla Platter*, and *Crunch & Festive Faral*.
- **Personal Bookmarks (Favorites):**
  - Instant offline persistence using HTML5 `localStorage`.
- **Kitchen Safety Protocol:**
  - Dedicated safety guide detailing thermal burn prevention when handling boiling sugar syrup (115°C–125°C) and hot ghee (140°C–180°C).
- **Print Optimization:**
  - Clean `@media print` styling that formats recipes and grocery lists for paper printouts without web navigation or button clutter.

---

## 🛠️ 3. Technical Architecture & Tech Stack

| Layer | Technology |
|---|---|
| **Framework** | React 19 + TypeScript (ES2022) |
| **Bundler** | Vite 8 + ESBuild |
| **Routing** | React Router DOM 7 |
| **Styling** | Tailwind CSS v4 (`@tailwindcss/vite`) with custom brand tokens |
| **Animation** | Motion / Framer Motion 12 (`useReducedMotion` support) |
| **Icons** | Lucide React |
| **State Management** | React Context API with HTML5 LocalStorage persistence |
| **Accessibility** | Semantic HTML5, visible focus states (`focus-visible`), WCAG AA contrast (4.5:1+) |

### Folder Structure
```
/
├── index.html                   # HTML5 shell with Google Fonts & SEO meta tags
├── metadata.json                # Project identification
├── package.json                 # Dependencies & build scripts
├── README.md                    # Project documentation
├── tsconfig.json                # Strict TypeScript configuration
├── vite.config.ts               # Vite configuration
└── src/
    ├── main.tsx                 # React DOM mount point
    ├── App.tsx                  # Router layout with Navbar & Footer
    ├── index.css                # Tailwind theme tokens & @media print styles
    ├── types.ts                 # Full TypeScript definitions for sweets, steps, box
    ├── context/
    │   └── AppContext.tsx       # Favorites and Gift Box LocalStorage state
    ├── data/
    │   └── sweets.ts            # 14 authentic recipes, regions, curated platters
    ├── hooks/
    │   └── usePageMeta.ts       # Dynamic per-route page titles and meta tags
    ├── utils/
    │   └── shoppingList.ts      # Ingredient consolidation algorithm
    ├── components/
    │   ├── Navbar.tsx           # 3-zone Top Bar Contract navigation
    │   ├── Footer.tsx           # Publication footer with standards & links
    │   ├── SweetCard.tsx        # Card with gradient block & unboxed metadata
    │   ├── DiyaRow.tsx          # Standout animated diya lamps & golden sparks
    │   ├── StepTimer.tsx        # Interactive recipe countdown timer
    │   └── PatternDivider.tsx   # Handcrafted SVG rangoli & paisley dividers
    └── pages/
        ├── HomePage.tsx         # Hero, featured sweets, regional strip, CTA
        ├── CatalogPage.tsx      # Search, 4 filter dimensions, slider, sorter
        ├── RecipeDetailPage.tsx # Scaler, step timers, tips, related sweets
        ├── GiftBoxPage.tsx      # Custom dabba curator & consolidated grocery list
        ├── FavoritesPage.tsx    # Saved bookmarked recipes
        ├── AboutPage.tsx        # Purpose, tech stack, hot syrup/ghee safety
        └── NotFoundPage.tsx     # 404 themed fallback page
```

---

## 🚀 4. How to Run Locally

### Prerequisites
- Node.js (v18.0.0 or higher)
- npm (v9.0.0 or higher)

### Installation
```bash
# Clone or navigate to the repository directory
cd /app/applet

# Install all dependencies
npm install

# Start the local development server (runs on port 3000)
npm run dev
```

Visit `http://localhost:3000` in your browser.

### Building for Production
```bash
# Type-check and build optimized static assets
npm run build

# Preview production build locally
npm run preview
```

---

## 📜 5. Standards & Ethics
- **Content Language:** Written entirely in English, with sweet names preserved in their traditional Hinglish nomenclature (e.g. *Besan Ladoo*, *Kaju Katli*, *Motichoor Ladoo*).
- **No Health Claims:** Adheres strictly to culinary food publication standards without unsupported dietary or medical claims.
- **Original Graphic Assets:** 100% custom SVG geometric rangoli motifs and CSS gradients; zero external copyrighted images or emojis.
