# Mrugansi Kathiriya — Personal Developer Portfolio

A premium, modern, and responsive developer portfolio built for **Mrugansi Kathiriya**, an MSc IT Student and Aspiring Software Engineer based in Surat, Gujarat, India.

Designed with a dark charcoal aesthetic, subtle purple and electric blue accents, modern typography, smooth scroll-driven navigation, and interactive code visualization.

---

## 🚀 Live Links & Profiles

- **LinkedIn**: [linkedin.com/in/mrugansi-kathiriya](https://linkedin.com/in/mrugansi-kathiriya/)
- **GitHub**: [github.com/mrugansikathiriya](https://github.com/mrugansikathiriya)
- **Email**: [mrugansikathiriya505@gmail.com](mailto:mrugansikathiriya505@gmail.com)
- **Live Project Demo (CareerCraft)**: [carrercraft.freedev.app](https://carrercraft.freedev.app/)

---

## ✨ Features & Sections

- **Sticky Navigation Bar**:
  - Personal branding logo (`Mrugansi.dev`).
  - Active section scroll tracking with smooth scrolling.
  - Resume download CTA (`/resume.pdf`).
  - Mobile responsive drawer navigation with backdrop blur.
- **Hero Section**:
  - Engaging intro with live availability badge.
  - Primary CTAs: *"View My Projects"* and *"Download Resume"*.
  - Direct GitHub and LinkedIn links.
  - Interactive syntax-highlighted developer terminal card showcasing real qualifications, core languages, and education metrics.
- **About Me**:
  - Detailed professional narrative and educational foundation.
  - Core engineering pillars and development interests.
  - Stated career objective: building reliable, scalable, and impactful software solutions.
- **Technical Skills**:
  - Categorized across **Programming Languages**, **Core Computer Science**, **Web Development**, **Databases**, **Tools & Platforms**, and **Cloud**.
  - Clean badge-based layout without arbitrary or unverified proficiency percentages.
- **Featured Academic Projects**:
  - **CareerCraft (Job Portal Web Application)**: Multi-role portal (job seekers, companies, administrators) with team leadership, CSRF protection, RBAC, MySQL query optimization, and live demo link.
  - **LeetMetric**: Responsive analytics dashboard fetching LeetCode metrics via REST APIs, circular progress indicators, and CORS handling.
- **Education Timeline**:
  - **Master of Science in Information Technology (MSc IT)** — Charotar University of Science and Technology (CHARUSAT), Expected 2028.
  - **Bachelor of Science in Information Technology (BSc IT)** — J.P. Dawar Institute of Information Science & Technology (VNSGU), 2023–2026, **CGPA: 8.18**.
- **Professional Certifications**:
  - HTML Training Certificate — IIT Bombay (Feb 2024).
  - C Training Certificate — IIT Bombay (Sep 2024).
  - Software Engineering — Coursera (Oct 2026).
- **Contact & Connect**:
  - Direct mailto integration with subject prefill.
  - One-click email clipboard copy button.
  - Quick access cards for Email, LinkedIn, and GitHub.
- **Footer**:
  - Branding, navigation links, quick resume link, back-to-top button, and copyright.

---

## 🛠️ Technology Stack

- **Framework**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Bundler & Tooling**: [Vite](https://vite.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG brand marks

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── favicon.svg             # Website favicon
│   ├── icons.svg               # SVG sprite
│   └── resume.pdf              # Downloadable resume document
├── src/
│   ├── assets/                 # Static media and brand assets
│   ├── components/             # Reusable UI components
│   │   ├── BackgroundGlow.tsx  # Ambient background gradient lighting
│   │   ├── Badge.tsx           # Reusable status and category chips
│   │   ├── Footer.tsx          # Clean footer with quick links
│   │   ├── Navbar.tsx          # Responsive navbar with mobile drawer
│   │   ├── SectionHeading.tsx  # Section headings with gradient pills
│   │   └── SocialIcons.tsx     # Crisp SVG icons for GitHub & LinkedIn
│   ├── data/
│   │   └── portfolioData.ts    # Centralized portfolio content & metadata
│   ├── hooks/
│   │   ├── useActiveSection.ts # Scroll spy hook for active nav highlighting
│   │   └── useScrollPosition.ts# Window scroll listener hook
│   ├── sections/
│   │   ├── AboutSection.tsx    # Professional background & career objective
│   │   ├── CertificationsSection.tsx # Verified training & certifications
│   │   ├── ContactSection.tsx  # Direct mailto & social channels
│   │   ├── EducationSection.tsx# Academic milestones & timeline
│   │   ├── HeroSection.tsx     # Hero banner & interactive code card
│   │   ├── ProjectsSection.tsx # CareerCraft & LeetMetric cards
│   │   └── SkillsSection.tsx   # Categorized skills matrix
│   ├── types/
│   │   └── index.ts            # TypeScript interfaces & definitions
│   ├── utils/
│   │   └── cn.ts               # Class name utility helper
│   ├── App.css                 # Custom scrollbar & base enhancements
│   ├── App.tsx                 # Main application composition
│   ├── index.css               # Tailwind CSS v4 import & font definitions
│   └── main.tsx                # React DOM entry point
├── index.html                  # HTML entry point with meta tags & fonts
├── package.json                # Project dependencies and npm scripts
├── tsconfig.json               # TypeScript workspace config
├── vite.config.ts              # Vite & Tailwind CSS plugins
└── README.md                   # Project documentation
```

---

## 💻 Local Development Setup

### Prerequisites
- Node.js (v18 or higher recommended)
- npm or pnpm or yarn

### 1. Clone the repository
```bash
git clone https://github.com/mrugansikathiriya/portfolio.git
cd portfolio
```

### 2. Install dependencies
```bash
npm install
```

### 3. Start development server
```bash
npm run dev
```
Open [http://localhost:5173](http://localhost:5173) in your browser to view the application.

### 4. Build for production
```bash
npm run build
```
This generates the optimized, production-ready static assets in the `dist/` directory.

### 5. Preview production build
```bash
npm run preview
```

### 6. Lint the code
```bash
npm run lint
```

---

## 📄 License & Attribution

Designed and developed for **Mrugansi Kathiriya**. Feel free to use this project as inspiration for your developer portfolio.
