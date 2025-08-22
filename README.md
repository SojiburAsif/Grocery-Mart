# 🛒 Grocery Mart

**Live:** [https://grocery-mart-git-main-md-asifs-projects-6f72bb60.vercel.app/](https://grocery-mart-git-main-md-asifs-projects-6f72bb60.vercel.app/)

---

## ✨ Short project description

**Grocery Mart** is a responsive Next.js grocery storefront built as a demo/portfolio project. It showcases product listings, detailed product pages, cart and checkout flows, and API routes (mock or real) for product management. The UI is mobile-first, fast, and clean — perfect for showcasing front-end skills.

---

## 🚀 Features

* 🧾 Product listing with categories and search
* 📦 Product detail pages with multiple images and descriptions
* 🛒 Cart management (add / remove / update quantity)
* 💳 Checkout flow (mocked or integrated with a payment provider)
* 📱 Responsive Swiper hero and polished UI components
* 🔌 API routes for products (mock JSON or connected DB)

---

## 🧰 Tech stack

* Next.js (app / pages)
* React
* Tailwind CSS
* Swiper.js (carousel)
* react-icons
* (Optional) MongoDB / Firebase for persistence

---

## 🛠️ Setup & Installation

> **Prerequisites:** Node.js (v16+ recommended) and npm or Yarn.

### 1. Clone the repo

```bash
git clone https://github.com/MD-AsifS-Projects/grocery-mart.git
cd grocery-mart
```

### 2. Install dependencies

```bash
# using npm
npm install

# or using yarn
# yarn
```

### 3. Environment variables

Create a `.env.local` file in the project root and add any required keys. Example:

```env
NEXT_PUBLIC_BASE_URL=http://localhost:3000
MONGODB_URI=your_mongodb_connection_string
NEXTAUTH_URL=http://localhost:3000
# any other keys your app needs (STRIPE keys, API keys...)
```

> If you are using mock JSON data (e.g. `/data/products.json`), you **don't** need a database to start.

### 4. Run development server

```bash
npm run dev
# or
# yarn dev
```

Open: [http://localhost:3000](http://localhost:3000)

### 5. Build & production

```bash
npm run build
npm run start
# or deploy on Vercel / Netlify: push to the repo and let the platform handle builds
```

---

## 🧩 Scripts (from `package.json`)

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

## 🗺️ Route Summary

> Example routes — update according to your implementation.

### 📖 Public pages

* `/` — Home (Hero, featured products, categories)
* `/products` — Product listing (filter / search)
* `/products/[id]` — Product detail page
* `/about` — About / info (optional)

### 🛍️ Cart & Checkout

* `/cart` — User cart (view & update quantities)
* `/checkout` — Checkout / payment page (mock or integrated)

### 👤 Auth & User

* `/auth/login` — Login (if applicable)
* `/auth/register` — Register (if applicable)
* `/profile` — User profile / order history (protected)

### 🔒 Admin (example)

* `/dashboard` — Admin area (manage products / orders) — protected

### 🧾 API routes (Next.js API)

* `/api/products` — GET list / POST create (mock or DB)
* `/api/products/[id]` — GET / PUT / DELETE single product
* `/api/cart` — cart actions (optional)

---

## 💡 Notes & Tips

* For quick demos keep product data in `/data/products.json` and fetch it from API routes; later replace with a DB.
* Keep environment secrets out of the repo; use `.env.local` locally and platform secrets on Vercel.
* If you use Google Fonts via `@import` in `globals.css`, consider `next/font` or `<link rel="preconnect">` for better performance.

---

## 🤝 Contributing

1. Fork the repo
2. Create a feature branch: `git checkout -b feature/your-feature`
3. Commit your changes: `git commit -m "Add new feature"`
4. Push to the branch and open a PR

---

## 📞 Contact & License

This project is a demo/portfolio. Use as you like.

**Contact:** MD Asif — open an issue or DM on the repo.


