# Web Portfolio - Adith

An interactive and modern portfolio site belonging to **Adith — Software Developer & Machine Learning Engineer**. Built with bleeding-edge web technologies to showcase projects, experiences, certificates, and expertise in Machine Learning, Mobile Development, and IoT systems.

---

## 1. Technologies Used

This project is built using a modern frontend stack focusing on performance, smooth animations, and interactive interfaces:

- **Framework:** [Nuxt 4](https://nuxt.com/) & [Vue 3](https://vuejs.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Animations & Interactive Effects:** 
  - `@vueuse/motion` for scroll-triggered animation components (`ScrollReveal`, `ScrollVelocity`).
  - Custom animated components like `MagicCard` and `ParticlesBackground`.
- **Theming (Light/Dark Mode):** `@nuxtjs/color-mode`
- **Typography & Icons:** `@nuxtjs/google-fonts` (Inter & JetBrains Mono), `@nuxt/icon`, and `lucide-vue-next`.
- **Drag & Drop Features:** `vuedraggable`

---

## 2. Project Folder Structure

This project follows the standard Nuxt 4 directory structure, primarily located within the `app/` directory:

```text
📦 web_porto
 ┣ 📂 app
 ┃ ┣ 📂 assets/        # Contains static assets like global CSS (main.css)
 ┃ ┣ 📂 components/    # Reusable Vue UI components
 ┃ ┃ ┣ 📂 ui/          # Base/Core UI components
 ┃ ┃ ┣ MagicCard.vue         # Interactive card with a spotlight hover effect
 ┃ ┃ ┣ ParticlesBackground.vue # Animated particle background
 ┃ ┃ ┣ ThemeToggle.vue       # Light/Dark theme toggle button
 ┃ ┃ ┗ ... (Navbar, Footer, ProjectCard, ContactForm, etc.)
 ┃ ┣ 📂 composables/   # Vue Composition API functions (e.g., useScrollAnimation.ts)
 ┃ ┣ 📂 layouts/       # Wrapper layouts for pages (default.vue) and specific layouts (admin.vue)
 ┃ ┗ 📂 pages/         # Main pages (Handled by Nuxt Auto-Routing)
 ┃   ┣ index.vue       # The main portfolio page (Public)
 ┃   ┗ admin.vue       # Admin control dashboard (Content Management)
 ┣ 📂 public/          # Static files served directly (icons, images, etc.)
 ┣ 📜 nuxt.config.ts   # Core Nuxt configuration (Modules, Meta Info, Fonts)
 ┣ 📜 tailwind.config.ts # Tailwind CSS configuration
 ┗ 📜 package.json     # NPM dependencies and script configuration
```

---

## 3. Key Features

- **Dynamic Portfolio Interface (`index.vue`):** The public-facing page to view the profile summary, skills (`TechBadge`), career journey, projects, certificates, and a contact feature (`ContactForm`).
- **Admin Dashboard (`admin.vue`):** A secluded page designed to manage the content data displayed on the main portfolio directly.
- **Micro-Interactions & Animations:** A *magic card* effect tied to the user's cursor position (spotlight effect), smooth scroll transitions, and an interactive particle background.
- **Dark Mode Support:** Supports seamless real-time switching between light and dark themes.
- **Fully Responsive:** Beautifully tailored UI optimized for smartphones, tablets, and desktop displays using Tailwind CSS utility classes.

---

## 4. Usage & Setup Guide

The web application can be replicated and run locally by following the steps below:

### Prerequisites

Ensure you have installed a JavaScript runtime environment that supports:
- **Node.js** (Recommended: v18.x or higher)
- **NPM** (Adaptable if you prefer using **pnpm**, **yarn**, or **bun**)

### 1. Install Dependencies

Install all required project dependencies:

```bash
# Using npm
npm install
```

### 2. Run the Development Server (Local Development)

Start the development server with Hot-Module Replacement (HMR) enabled:

```bash
# Using npm
npm run dev

# The application will run locally at: http://localhost:3000
```
> **Note:** This application may depend on a specific backend. By default, the Nuxt configuration will look for the `NUXT_PUBLIC_API_BASE` environment variable (falling back to `http://localhost:3001` as the default value).

### 3. Build for Production (Deployment)

If you want to deploy or build a production-ready bundle:

```bash
# Generate the production build bundle
npm run build

# Run and preview the generated production build locally
npm run preview
```

For more supported hosting options and deployment services, please refer to the [Nuxt Deployment Documentation](https://nuxt.com/docs/getting-started/deployment).
