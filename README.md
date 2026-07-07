# 🍽️ ZESTO

A modern, full-featured food ordering web app built with React — browse a menu, search dishes, manage a cart, and check out, all wrapped in a warm orange/red theme with light & dark mode.

**[Live Demo](#)** · https://zesto-ten.vercel.app/

---

## 📖 Overview

ZESTO lets users explore a categorized food menu, search for specific dishes, add items to a cart with live quantity controls, and walk through a simple checkout flow. It started as a food-app template and was rebranded, re-themed, and enhanced with new features and UI polish.

## 🛠️ Tech Stack

- **React 18** — component-based UI
- **Vite** — build tool & dev server
- **React Router DOM** — client-side routing (`/`, `/cart`, `/Order`)
- **Context API** — global state for cart, search, and theme
- **CSS3** — custom properties (CSS variables) for theming, no CSS framework lock-in
- **Tailwind CSS** — configured and available for utility classes
- **ESLint** — code quality and linting
- **gh-pages** — one-command deployment to GitHub Pages

## ✨ Features

- 🔍 **Live search** — filter dishes by name directly from the navbar
- 🍔 **Category explorer** — browse dishes by category (Salad, Rolls, Pasta, etc.)
- 🛒 **Cart management** — add/remove items with a real-time item count badge
- 🌗 **Light/dark mode** — toggle persists across visits via localStorage
- 📱 **Responsive design** — mobile-friendly navbar with a hamburger menu
- 🔗 **Smooth-scroll navigation** — Home/About/Products/Contact links jump to the right section
- 🧾 **Checkout flow** — delivery details form with a live order summary
- 🎨 **Consistent warm theme** — unified orange/red palette via CSS variables across every component

## 🚀 Getting Started

```bash
# clone the repo
git clone https://github.com/joneabishek777/zesto.git
cd zesto

# install dependencies
npm install

# start the dev server
npm run dev
```

## 📦 Build

```bash
npm run build
```

## 🌍 Deploy to GitHub Pages

```bash
npm run deploy
```

## 👤 Author

**Jone Abishek**
GitHub: [@joneabishek777](https://github.com/joneabishek777)

## 📄 License

This project is open source and available for personal and educational use.
