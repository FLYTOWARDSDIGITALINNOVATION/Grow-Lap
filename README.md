# Grow Lap - Digital Marketing & Creative Agency

Grow Lap is a high-performance, modern digital marketing and creative agency website built with **React**, **Vite**, and **React Router**. It features complete SEO optimization, responsive modular architecture, dynamic blog management, and dedicated industry & service pages.

---

## 🚀 Features

- **Consolidated Clean Architecture**: Page-specific `.jsx` and `.css` files are cleanly organized (Self-contained pages for Home, About, Blog, Contact, Services, and Industry).
- **Comprehensive SEO**: Dynamic OpenGraph, Twitter Cards, Canonical URLs, and JSON-LD structured schema dynamically updated across pages.
- **Dedicated Service & Industry Folders**:
  - `src/pages/services/` - Contains 30+ service, shoot, design, and marketing detail pages.
  - `src/pages/industry/` - Tailored pages for various business sectors (Healthcare, Real Estate, Retail, Automobile, etc.).
  - `src/pages/admin/` - Admin portal for dynamic blog content management.
- **Interactive UI Components**:
  - Global Floating WhatsApp Click-to-Chat Widget.
  - AI Assistant Chatbot widget.
  - Custom Animated Counters & Interactive Tabs.

---

## 📂 Project Structure

```
Grow-Lap/
├── public/                  # Static assets (images, favicon, robots.txt, sitemap.xml)
├── src/
│   ├── assets/              # WebP optimized images and design media
│   ├── components/          # Reusable global components (Navbar, Footer, SEO, Chatbot, etc.)
│   ├── data/                # Data structures (servicesData.jsx, industries.jsx)
│   ├── pages/
│   │   ├── HomePage.jsx & HomePage.css
│   │   ├── AboutPage.jsx & AboutPage.css
│   │   ├── BlogPage.jsx & BlogPage.css
│   │   ├── ContactPage.jsx & ContactPage.css
│   │   ├── services/       # All service detail pages & styles
│   │   ├── industry/       # Sector-specific pages & styles
│   │   └── admin/          # Admin login and dashboard
│   ├── utils/               # Utilities & storage helpers
│   ├── App.jsx              # Main router & routes definition
│   └── main.jsx             # React DOM entry point
├── package.json
└── README.md
```

---

## 🛠️ Getting Started

### Prerequisites

Make sure you have Node.js (v18+ recommended) installed on your system.

### Installation

1. Clone the repository or navigate to the project directory:
   ```bash
   cd Grow-Lap
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Build for production:
   ```bash
   npm run build
   ```

---

## 📄 License

© Grow Lap. All rights reserved.
