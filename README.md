<div align="center">

  <img src="./image/Logo.png" alt="Positivus Logo" width="180" />

  # Positivus — Digital Marketing Agency

  **A modern, pixel-perfect, fully responsive landing page built with semantic HTML5 and modern CSS3.**

  [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
  [![HTML5](https://img.shields.io/badge/HTML5-%23E34F26.svg?logo=html5&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/HTML)
  [![CSS3](https://img.shields.io/badge/CSS3-%231572B6.svg?logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
  [![Responsive](https://img.shields.io/badge/Design-Responsive-success)](#features)
  [![Status](https://img.shields.io/badge/Status-Completed-brightgreen)](#)

  [Live Demo](https://aj0710.github.io/Resonsive.project/) • [Explore Features](#features) • [Getting Started](#getting-started) • [Project Structure](#project-structure)

</div>

---

## 📖 Overview

**Positivus** is a sleek, responsive landing page for a modern digital marketing agency. Crafted based on contemporary UI/UX design trends (inspired by the Positivus design system), it highlights marketing services, case studies, operational processes, team credentials, client testimonials, and a lead capture contact form.

The project demonstrates clean architectural practices using **pure vanilla HTML5 and CSS3**, utilizing modern CSS layout engines (**Flexbox** and **CSS Grid**) along with a centralized CSS custom property (variable) system for straightforward theming and maintenance.

---

## ✨ Features

- **📱 Fully Responsive Design**: Seamlessly adapts to mobile screens, tablets, laptops, and ultra-wide desktop displays.
- **🎨 Modern Design Language**:
  - High-contrast, brand-aligned color scheme featuring vibrant neon green (`#B9FF66`), dark charcoal (`#191A23`), and crisp neutral grays.
  - Distinctive typography using Google Fonts (**Space Grotesk** & **Host Grotesk**).
- **🧭 Intuitive Navigation**: Header featuring branded logo, desktop navigation menu, call-to-action button, and mobile hamburger toggle.
- **⚡ Brand Showcase**: Client and partner logo carousel/ticker highlighting industry leaders (Amazon, HubSpot, Notion, Netflix, Zoom, etc.).
- **🧩 Service Offerings Grid**: Dynamic cards featuring diverse background styles (light, green, and dark) with custom illustrations and interactive CTA links.
- **📈 Proven Case Studies**: Impactful statistics and real-world success stories.
- **🔄 Step-by-Step Working Process**: Numbered process workflow cards (01 to 06) detailing the consultation through continuous improvement lifecycle.
- **👥 Team Members Showcase**: Profile cards with executive and specialist titles, bios, headshots, and LinkedIn profile badges.
- **💬 Testimonials & Social Proof**: Customer feedback and ratings showcase.
- **📩 Interactive Lead Capture**: Dual-purpose contact form ("Say Hi" vs. "Get a Quote") with responsive input layouts.
- **🚀 Zero Dependencies**: 100% lightweight vanilla code—no bulky frameworks, lightning-fast initial load times.

---

## 🛠️ Tech Stack

| Technology | Purpose |
| :--- | :--- |
| **HTML5** | Semantic structure, accessible landmarks, and SEO metadata |
| **CSS3** | Responsive layouts (Flexbox & CSS Grid), CSS variables, animations |
| **Google Fonts** | `Space Grotesk` & `Host Grotesk` font pairings |
| **SVG / PNG** | Vector iconography, illustrations, and optimized asset graphics |

---

## 📁 Project Structure

```plaintext
Responsive_project/
├── .vscode/
│   └── settings.json         # Workspace and Live Server settings
├── image/                    # Brand assets, illustrations, team photos & icons
│   ├── Logo.png              # Primary company logo
│   ├── right-container-image.png # Hero section graphic
│   ├── cta-block.png         # Call-to-action illustration
│   ├── card-*.png            # Service card artwork
│   ├── *.png / *.svg         # Partner logos, team portraits & icons
├── .gitignore                # Git ignore rules for OS, IDEs & build artifacts
├── index.html                # Main semantic HTML document
├── style.css                 # Master stylesheet with design tokens & media queries
└── README.md                 # Project documentation
```

---

## 🚀 Getting Started

### Prerequisites

You only need a modern web browser (Google Chrome, Mozilla Firefox, Microsoft Edge, Safari, or Brave).

### Installation & Local Setup

1. **Clone the repository:**
   ```bash
   git clone https://github.com/aj0710/Resonsive.project.git
   ```

2. **Navigate into the project directory:**
   ```bash
   cd Resonsive.project
   ```

3. **Launch the site:**

   - **Option A (VS Code Live Server - Recommended):**
     Open the folder in Visual Studio Code, right-click `index.html`, and select **"Open with Live Server"**.

   - **Option B (Direct in Browser):**
     Double-click the `index.html` file to open it directly in any browser.

   - **Option C (Simple Local Server):**
     ```bash
     # Using Python
     python -m http.server 3000

     # Using Node npx
     npx serve .
     ```
     Open `http://localhost:3000` in your browser.

---

## 🎨 Design System & Customization

The styling is controlled via centralized CSS Custom Properties in [`style.css`](style.css):

```css
:root {
  --primary-color: #b9ff66;   /* Positivus signature lime green */
  --secondary-color: #f3f3f3; /* Light background card tint */
  --dark-color: #191a23;      /* Deep charcoal for dark cards & text */
  --white-color: #ffffff;     /* Pure white */

  --primary-font: "Space Grotesk", sans-serif;
}
```

To rebrand or adjust themes, simply modify the values in the `:root` pseudo-class in [`style.css`](style.css).

---

## 🌐 Deployment to GitHub Pages

To host this site live on GitHub Pages for free:

1. Push your repository to GitHub.
2. In your GitHub repository, go to **Settings** > **Pages** (under the "Code and automation" sidebar).
3. Under **Branch**, select `main` (or your default branch) and folder `/ (root)`.
4. Click **Save**.
5. Within 1–2 minutes, your site will be live at `https://<username>.github.io/<repository-name>/`.

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m "Add some AmazingFeature"`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📝 License

This project is licensed under the [MIT License](LICENSE) — feel free to use it for personal and commercial projects.

---

<div align="center">
  Made with ❤️ by <a href="https://github.com/aj0710">aj0710</a>
</div>
