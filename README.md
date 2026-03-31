<!-- <h1>Ammar Sherif || Portfolio</h1>
<br/>
<hr/>
<h4>
A cinematic, interactive portfolio built with React, TypeScript, and GPU-accelerated visuals.
<br/>
The site combines smooth section choreography, animated UI layers, skills visualization, project galleries, certifications, and social/contact surfaces in one cohesive experience.

</h4>

<h1>Hero Section Image</h1> 
<hr/>
<img width="1916" height="859" alt="Screenshot 2026-03-30 232039" src="https://github.com/user-attachments/assets/e9753a8d-9821-48bc-89c4-6debd9d408da" />

</br>

<h2>Live Deployment</h2>
<p>Live link : <span></span></p> -->


<div align="center">

# ⚡ Ammar Sherif — Frontend Developer Portfolio

### A modern, fully responsive personal portfolio built with React, Vite & Tailwind CSS

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind_CSS-0F172A?style=for-the-badge&logo=tailwind-css&logoColor=38BDF8)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

## 📖 Introduction

This repository contains the source code for **Ammar Sherif's Portfolio** — a single-page application (SPA) designed with a strong focus on visual quality, performance, and user experience.

The portfolio features:
- 🌗 Dark / Light mode theming via CSS custom properties
- 🎞️ Fluid scroll-triggered animations
- 🖼️ Live project preview system using iframes
- 🤖 AI-powered contact form connected to the **Anthropic Claude API**

---

## 🎯 Goals

- Showcase frontend development projects with live previews
- Present skills, certifications, and experience clearly
- Provide a professional contact channel for freelance work
- Demonstrate proficiency in React, Tailwind CSS, and modern JavaScript
- Achieve a pixel-perfect, production-grade result with smooth animations

---

## 🚀 Core Experience

- **Immersive hero** with an interactive image reveal lens
- **Animated navigation** and section transitions
- **Reusable section system** with motion-based reveal wrappers
- **Lazy-loaded** heavy sections for better initial load performance
- **3D skills cloud** powered by WebGL
- **Project gallery** with reusable project cards
- **Certifications gallery** and contact hub
- **Startup loader** with explicit user choice for sound
- **Responsive behavior** across desktop, tablet, and mobile breakpoints

---

## 🛠️ Technologies & Packages

### Core Stack

| Technology | Version | Purpose |
|---|---|---|
| **React** | 18.2 | UI component library — handles state, rendering, and component lifecycle |
| **Vite** | 5.1 | Ultra-fast build tool and dev server with Hot Module Replacement (HMR) |
| **Tailwind CSS** | 3.4 | Utility-first CSS framework for rapid, consistent styling |
| **JavaScript (ES2023)** | Native | Language foundation — hooks, async/await, destructuring, modules |

### Supporting Libraries & Tools

| Technology | Version | Purpose |
|---|---|---|
| **PostCSS** | 8.4 | CSS transformation pipeline — required by Tailwind |
| **Autoprefixer** | 10.4 | Adds vendor prefixes automatically for cross-browser support |
| **Google Fonts** | CDN | Syne (headings) + DM Sans (body text) |
| **Anthropic Claude API** | v1 | Powers the AI-enhanced contact form message processing |
| **IntersectionObserver** | Native | Browser API for scroll-triggered animations |
| **Canvas API** | Native | Browser API for the animated particle network background |

---

## 🏗️ Brief Architecture Notes

- **Section composition** is centralized in App-level orchestration, while visual blocks are extracted into focused components.
- **Expensive visual pieces** are lazy-loaded with Suspense fallbacks to reduce first-paint cost.
- **Styling** uses a mix of shared global styles and CSS Modules in reusable UI components.
- **Motion behavior** is intentionally layered: macro section reveals, micro component transitions, and shader/3D visuals.

---

## 📁 Project Structure

```
portfolio/
├── index.html                  ← HTML entry point
├── package.json                ← Dependencies & scripts
├── vite.config.js              ← Vite configuration
├── tailwind.config.js          ← Tailwind theme & content paths
├── postcss.config.js           ← PostCSS plugins
├── README.md
└── src/
    ├── main.jsx                ← React root mount
    ├── App.jsx                 ← Root component + theme state
    ├── index.css               ← Global styles & CSS variables
    ├── data/
    │   └── index.js            ← All static content (skills, projects, etc.)
    ├── hooks/
    │   ├── useInView.js        ← Scroll-triggered visibility hook
    │   └── useTyping.js        ← Typewriter animation hook
    └── components/
        ├── Particles.jsx       ← Animated canvas background
        ├── Navbar.jsx          ← Navigation + mobile menu + theme toggle
        ├── Hero.jsx            ← Landing section with typing effect
        ├── SectionTitle.jsx    ← Reusable animated heading
        ├── About.jsx           ← Bio, skill bars, certificate slider
        ├── Projects.jsx        ← Project cards with live iframe previews
        ├── Contact.jsx         ← Form + validation + social links
        ├── Footer.jsx          ← Site footer
        └── BackToTop.jsx       ← Floating scroll-to-top button
```

---

## ⚙️ Local Development

### Prerequisites

- **Node.js** 18+ — [nodejs.org](https://nodejs.org)
- **npm** 9+ (included with Node.js) or yarn
- Any modern code editor (**VS Code** recommended)
- Modern browser with ES2020+ support

### Install

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Open your browser at: **http://localhost:5173**

> 💡 The dev server supports **Hot Module Replacement (HMR)** — any saved change instantly reflects in the browser without a full page reload.

### Build for Production

```bash
npm run build
```

### Preview Production Build Locally

```bash
npm run preview
```

The build output goes into a `dist/` folder. Upload it to any static hosting service such as **Netlify**, **Vercel**, or **GitHub Pages**.

---

## 📜 Available Scripts

| Script | Description |
|---|---|
| `npm run dev` | Start Vite development server with HMR at localhost:5173 |
| `npm run build` | Build optimized production bundle into the `dist/` folder |
| `npm run preview` | Preview the production build locally before deploying |


---

## 🤖 AI Contact Form

When the user submits the contact form, data is validated client-side then sent to the **Anthropic Claude API**. Claude returns a professional confirmation message displayed via a colored feedback banner in the UI.

---

## 🌐 Live Projects Featured

| Project | URL |
|---|---|
| **Appexy** — SaaS App Landing Page | [Live Demo](https://ammarsherifmohamed.github.io/Appexy---Tailwind-Project/) |
| **Dentist** — Medical Clinic Website | [Live Demo](https://ammarsherifmohamed.github.io/Dentist-Project/) |
| **TemplateMo** — Multi-purpose Template | [Live Demo](https://ammarsherifmohamed.github.io/Templatemo/) |

---

## 📬 Contact & Links

| Platform | Link |
|---|---|
| 📧 Email | ammar.s.fouad555@gmail.com |
| 💼 LinkedIn | [linkedin.com/in/ammar-sherif-564409313](https://linkedin.com/in/ammar-sherif-564409313/) |
| 🐙 GitHub | [github.com/ammarsherifmohamed](https://github.com/ammarsherifmohamed) |
| 🧑‍💻 Freelancer | [freelancer.com/u/ammars591](https://freelancer.com/u/ammars591) |
| 🟡 Mostaql | [mostaql.com/u/Ammar_Sherif_AS](https://mostaql.com/u/Ammar_Sherif_AS) |

---

<div align="center">

*Made with ❤️ by **Ammar Sherif** — Frontend Developer*

</div>
