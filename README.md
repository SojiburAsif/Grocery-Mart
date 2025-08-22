# Grocery Mart

Live: [https://grocery-mart-git-main-md-asifs-projects-6f72bb60.vercel.app/](https://grocery-mart-git-main-md-asifs-projects-6f72bb60.vercel.app/)

---

## Short project description

**Grocery Mart** is a responsive Next.js grocery storefront built for demo and portfolio use. It showcases product listings, a product detail view, cart and checkout flows, and admin-style API endpoints (mock or real) for managing products. The design focuses on fast browsing, clear product cards, and a modern mobile-first UI.

---

## Features

* Product listing with categories and search
* Product detail pages with images and descriptions
* Cart management (add / remove / update quantity)
* Checkout flow (mocked or integrated with a payment provider)
* Responsive Swiper hero and clean UI components
* API routes for products (mock JSON or connected DB)

---

## Tech stack

* Next.js (app / pages — whichever your repo uses)
* React
* Tailwind CSS
* Swiper.js for carousels
* react-icons
* (Optional) MongoDB / Firebase for persistence

---

## Setup & Installation

> **Prerequisites**: Node.js (v16+ recommended) and npm or Yarn.

1. **Clone the repo**

```bash
git clone https://github.com/MD-AsifS-Projects/grocery-mart.git
cd grocery-mart
```

2. **Install dependencies**

```bash
# using npm
npm install

# or using yarn
# yarn
```

3. **Environment variables**

Create a `.env.local` file in the project root and add any required keys. Example:

```
NEXT_PUBLIC_BASE_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
# any other keys your app needs (STRIPE keys, API keys...)
```

> If you are using mock JSON data (e.g. `/data/products.json`), you don't need a database to start.

4. **Run development server**

```bash
npm run dev
# or
# yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

5. **Build & production**

```bash
npm run build
npm run start
# or using Vercel / Netlify: push to the repo and let platform handle builds
```

---

## Scripts (example from `package.json`)

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint"
  }
}
```

---

## Route Summary

> Below routes are example routes — adjust based on your implementation.

### Public pages

* `/` — Home (Hero, featured products, categories)
* `/products` — Product listing (filter / search)
* `/products/[id]` — Product detail page
* `/about` — About / info (optional)

### Cart & Checkout

* `/cart` — User cart (view & update quantities)
* `/checkout` — Checkout / payment page (mock or integrated)

### Auth & User

* `/auth/login` — Login (if applicable)
* `/auth/register` — Register (if applicable)
* `/profile` — User profile / order history (protected)

### Admin (example)

* `/dashboard` — Admin area (manage products / orders) — protected

### API routes (Next.js API)

* `/api/products` — GET list / POST create (mock or DB)
* `/api/products/[id]` — GET / PUT / DELETE single product
* `/api/cart` — cart actions (optional)

---

## Notes & Tips

* For quick demos you can keep product data in `/data/products.json` and fetch it from API routes, then later replace with a DB.
* Keep environment secrets out of the repo; use `.env.local` and platform secrets on Vercel.
* If you use Google Fonts via `@import` in `globals.css`, consider switching to `next/font` or `link` preconnect for performance.

---

## License & Contact

This project is for demo/portfolio. Use as you like. For questions or help, contact: **MD Asif** (ask in the repo issues or DM).

---

*README generated for your Grocery Mart project. Need changes, extra sections (API examples, database seeding script, or badges)? বলো আমি update করে দেই.*
