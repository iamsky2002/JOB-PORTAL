<div align="center">

# 💼 Web Job Portal

### Full Stack Job Portal Web Application

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![Redux](https://img.shields.io/badge/Redux-764ABC?style=for-the-badge&logo=redux&logoColor=white)](https://redux.js.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=openjdk&logoColor=white)](https://www.java.com/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Mantine](https://img.shields.io/badge/Mantine-v9.1-339AF0?style=for-the-badge&logo=mantine&logoColor=white)](https://mantine.dev/)

<br/>

A full stack job portal web application built with **React** & **Java, Spring, Spring Boot** on the backend,<br/>
**MongoDB** for data persistence, and **Redux** for state management — featuring a sleek dark-themed UI<br/>
where job seekers can explore opportunities, browse companies, and connect with recruiters.

<br/>

`🟢 Frontend — Complete` &nbsp;&nbsp; `🟡 Backend (Spring Boot + MongoDB) — In Progress` &nbsp;&nbsp; `⚪ Deployment — Pending`

<br/>

[Features](#-whats-built-so-far) · [Tech Stack](#-tech-stack) · [Quick Start](#-quick-start) · [Project Structure](#-project-structure) · [Roadmap](#-development-roadmap)

</div>

---

<br/>

## ⚡ Project Highlights

<table>
<tr>
<td align="center" width="25%">
<br/>
<img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"/>
<br/><br/>
<b>React 19</b>
<br/>
Latest React with hooks &<br/>concurrent features
<br/><br/>
</td>
<td align="center" width="25%">
<br/>
<img width="50" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg"/>
<br/><br/>
<b>Fully Typed</b>
<br/>
TypeScript interfaces for<br/>every data model
<br/><br/>
</td>
<td align="center" width="25%">
<br/>
🎨
<br/><br/>
<b>Dark Mode First</b>
<br/>
Custom mine-shaft & bright-sun<br/>dual color palette
<br/><br/>
</td>
<td align="center" width="25%">
<br/>
🧩
<br/><br/>
<b>14 Components</b>
<br/>
Modular architecture with<br/>clean separation of concerns
<br/><br/>
</td>
</tr>
</table>

<br/>

---

<br/>

## 🖥️ What's Built So Far

> The frontend is **fully functional** with 2 routed pages, 14 components, 8 data modules, and 30+ static assets.

<br/>

### 🏠 Home Page — `/`

The landing page is assembled from **6 independent sections**, each its own component:

| # | Section | Component | What's Happening |
|:-:|---------|-----------|-----------------|
| 1 | **Hero** | `DreamJob.tsx` | Bold "Find your dream job" headline, two inline search inputs (Job Title + Job Type), and a floating **glassmorphism** job card with Google logo + a "12k+ got job" avatar group badge — all layered over a character illustration (`newboy.png`) |
| 2 | **Company Marquee** | `Companies.tsx` | Infinite auto-scrolling ticker of **11 company logos** (Google, Amazon, Figma, Netflix, Meta, Microsoft, Pinterest, Slack, Spotify, Oracle, Walmart) using `react-fast-marquee` with pause-on-hover |
| 3 | **Career Carousel** | `NewJobCategory.tsx` | Embla-powered Mantine carousel with **6 category cards** (Digital Marketing, Web Developer, Arts & Design, Data Entry, UI-UX Designer, Content Writing) — each showing an icon, description, and job count. Controls appear on hover with a glowing `box-shadow` effect |
| 4 | **How It Works** | `Working.tsx` | 3-step guide (Design Your Resume → Apply for Job → Land Your Dream Job) displayed alongside an illustration with a **floating profile completion card** showing a 60% progress bar |
| 5 | **Testimonials** | `Testimonials.tsx` | 4 user review cards (Ritesh, Prashant, Buddha, Anshika) with avatars and Mantine `Rating` stars (3.5 – 4.5 range) in a bordered grid |
| 6 | **Subscribe CTA** | `Subscribe.tsx` | Email input with an animated subscribe button — toggles to green "Subscribed! ✓" state for 5 seconds on click, with a focus ring and hover glow |

<br/>

### 🔍 Find Jobs Page — `/find-jobs`

Currently features the **search/filter bar** with 3 multi-select dropdowns:

| Filter | Options Available |
|--------|-------------------|
| 🔍 Job Title | Designer, Developer, Product Manager, Marketing Specialist, Data Analyst, Sales Executive, Content Writer, Customer Support |
| 📍 Location | Delhi, New York, San Francisco, London, Berlin, Tokyo, Sydney, Toronto |
| 💼 Experience | Entry Level, Intermediate, Expert |

Each filter uses a custom-built `MultiInput` combobox (110+ lines) featuring:
- Searchable dropdown with checkbox selection
- Selected items shown as **removable pill tags** (max 2 visible + "+N more" badge)
- **"+ Create"** option to add custom values on the fly
- Keyboard support (Backspace to remove last pill)
- Dark-themed dropdown with border & shadow styling

<br/>

### 🧭 Navigation

| Component | Details |
|-----------|---------|
| **Header** | Brand logo ("JobHook" with chef-hat icon), 4 nav links (Find Jobs, Find Talent, Upload Job, About Us) with **active-route border highlighting**, user avatar, settings gear, and animated notification bell with a pulsing indicator |
| **Footer** | Brand + tagline, 3 link columns (Product: 3 links, Company: 4 links, Support: 3 links), social icons (Facebook, Instagram, X) with hover scale + color animations |
| **Routing** | React Router v7 — `/find-jobs` route is live, `/*` catches everything else to HomePage |

<br/>

### 📦 Data Models Ready (No UI Yet)

These data files are **already written** and waiting for their corresponding pages to be built:

<details>
<summary><b>Click to see what's prepared</b></summary>

<br/>

| Data File | What It Contains | Planned Page |
|-----------|-----------------|--------------|
| `JobsData.tsx` | **8 detailed job listings** — Meta, Netflix, Microsoft, Adobe, Google, Spotify, Amazon, Apple — with title, location, salary, experience, applicant count, and full description paragraphs | Job Listings Grid |
| `JobDescData.tsx` | Single job detail card (Location, Experience, Salary, Job Type icons), 9 skill tags, and a full HTML job description with About/Responsibilities/Qualifications sections | Job Detail Page |
| `TalentData.tsx` | **8 candidate profiles** — Jarrod Wood (Google), Alice Johnson (Facebook), Bob Smith (Amazon), Diana Prince (Adobe), Charlie Brown (Microsoft), Fiona Gallagher (Netflix), Ethan Hunt (IBM), Helen Mirren (Apple) — each with role, skills, about paragraph, expected CTC, location. Also includes a **detailed profile** with work experience (2 entries), skills list (15 skills), and certifications (2 certs) | Find Talent Page |
| `Company.tsx` | Google company profile (overview, industry, website, size, HQ, 8 specialties) + 8 similar companies with employee counts (Meta, Netflix, Microsoft, Adobe, Google, Spotify, Amazon, Apple) | Company Profile Page |
| `Profile.tsx` | User profile form fields — Job Title, Company, Location — with dropdown options and pre-filled values | User Profile Page |
| `PostJob.tsx` | Job posting form with 6 fields (Job Title, Company, Experience, Job Type, Location, Salary) + HTML template for job description editor | Post a Job Page |
| `PostedJob.tsx` | **10 active job postings** + **3 draft postings** with titles, locations, and posted dates | Employer Dashboard |

</details>

<br/>

### 🎨 Static Assets

```
public/
├── Companies/     → 12 company logo PNGs (Amazon, Figma, Google, Meta, Microsoft,
│                    Netflix, Oracle, Pinterest, Slack, Spotify, Walmart, pngwing)
├── Category/      → 10 job category icon PNGs (Digital Marketing, Web Developer,
│                    Arts & Design, Data Entry, UI-UX Designer, Content Writing,
│                    Customer Support, Finance, Human Resource, Sales)
├── Working/       → 4 files — girl illustration (1.4MB) + 3 step icons
├── avatar-*.png   → 4 user avatar images
├── newboy.png     → Hero section character illustration
└── Google.png     → Google logo for floating job card
```

**Total: 33 static image assets** across 3 organized subdirectories.

<br/>

---

<br/>

## 🛠 Tech Stack

### Frontend

| Category | Technology | Version | Role in Project |
|----------|-----------|:-------:|------------------|
| **Core Framework** | React | 19.2 | Component rendering, hooks, concurrent features |
| **Language** | TypeScript | 5.9 | Static typing for all components and data models |
| **State Management** | Redux | — | Global state management across components *(integrating)* |
| **UI Library** | Mantine | 9.1 | TextInput, Button, Avatar, Rating, Carousel, Combobox, Indicator, Pill |
| **Styling** | Tailwind CSS | 3.4 | Utility classes, custom colors, responsive layout, hover/focus states |
| **Routing** | React Router DOM | 7.14 | Client-side navigation with `Link`, `Routes`, `useLocation` |
| **Carousel** | Embla Carousel | 8.6 | Powers Mantine's Carousel with smooth looping & drag |
| **Animations** | react-fast-marquee | 1.6 | Infinite scrolling company logo ticker |
| **Icons** | Tabler Icons React | 3.41 | 20+ icons used across header, footer, filters, cards |
| **Font** | Poppins | — | Loaded via Google Fonts CDN in `index.html` |
| **Build Tool** | Create React App | 5.0 | Webpack bundling, dev server, hot reload |

### Backend *(In Progress)*

| Category | Technology | Role in Project |
|----------|-----------|------------------|
| **Language** | Java | Backend business logic & services |
| **Framework** | Spring / Spring Boot | REST API, dependency injection, auto-configuration |
| **Database** | MongoDB | NoSQL document storage for jobs, users, companies, applications |
| **Authentication** | Spring Security + JWT | Secure login, signup, role-based access control |
| **API Layer** | RESTful APIs | CRUD endpoints consumed by the React frontend |

<br/>

---

<br/>

## 🎨 Theming

The project runs a **dual-layer theme** — the same custom colors are registered in both Tailwind and Mantine so utility classes and component props stay perfectly in sync.

```
 TAILWIND CONFIG (tailwind.config.js)        MANTINE THEME (App.tsx)
┌────────────────────────────────────┐   ┌──────────────────────────────────┐
│                                    │   │                                  │
│  mine-shaft:                       │   │  colors: {                       │
│    50:  #fafafa  ░░░░░             │   │    "mine-shaft": [               │
│    100: #f5f5f5  ░░░░░             │   │      "#fafafa", "#f5f5f5", ...   │
│    ...                             │   │    ],                            │
│    900: #1a1a1a  █████             │   │    "bright-sun": [               │
│    950: #0a0a0a  █████             │   │      "#fffbeb", "#fff3c6", ...   │
│                                    │   │    ]                             │
│  bright-sun:                       │   │  }                               │
│    50:  #fffbeb  ░░░░░             │   │                                  │
│    400: #ffbd20  ▓▓▓▓▓  ← accent   │   │  fontFamily: "Poppins"           │
│    ...                             │   │  defaultColorScheme: "dark"      │
│    950: #461802  █████             │   │                                  │
│                                    │   │                                  │
└────────────────────────────────────┘   └──────────────────────────────────┘

Usage examples:
  Tailwind  →  className="bg-mine-shaft-900 text-bright-sun-400"
  Mantine   →  <Button color="bright-sun.4">  <Indicator color="bright-sun.4">
```

<br/>

---

<br/>

## 📁 Project Structure

<details>
<summary><b>📂 Click to expand full directory tree</b></summary>

<br/>

```
job-portal/
│
├── public/                          → Static assets served directly
│   ├── Category/                    → 10 job category icon PNGs
│   ├── Companies/                   → 12 company logo PNGs
│   ├── Working/                     → Girl illustration + 3 step icons
│   ├── avatar-1.png … avatar-4.png  → User avatars
│   ├── newboy.png                   → Hero illustration
│   ├── Google.png                   → Floating job card logo
│   └── index.html                   → HTML template (Poppins font loaded here)
│
├── src/
│   ├── App.tsx                      → Root — MantineProvider + theme + BrowserRouter
│   ├── index.tsx                    → ReactDOM.createRoot entry point
│   ├── index.css                    → Tailwind directives (@base, @components, @utilities)
│   │
│   ├── Pages/                       → Route-level page components
│   │   ├── HomePage.tsx             → Assembles 6 landing page sections
│   │   └── FindJobs.tsx             → Search filter page (SearchBar component)
│   │
│   ├── LandingPage/                 → Individual homepage sections
│   │   ├── DreamJob.tsx             → Hero — headline, search inputs, floating cards
│   │   ├── Companies.tsx            → Auto-scrolling company marquee
│   │   ├── NewJobCategory.tsx       → Career category carousel
│   │   ├── Working.tsx              → "How to Get Started" 3-step guide
│   │   ├── Testimonials.tsx         → User review cards with ratings
│   │   └── Subscribe.tsx            → Email subscription CTA
│   │
│   ├── FindJobs/                    → Job search components
│   │   ├── SearchBar.tsx            → Filter bar layout (renders 3 MultiInputs)
│   │   └── MultiInput.tsx           → Custom multi-select combobox (reusable)
│   │
│   ├── Header/
│   │   ├── Header.tsx               → Top nav — brand, user controls, notification bell
│   │   └── NavLink.tsx              → Route-aware links with active border
│   │
│   ├── Footer/
│   │   └── Footer.tsx               → Link columns + social icons
│   │
│   └── Data/                        → All mock data & TypeScript interfaces
│       ├── Data.tsx                 → companies, jobCategory, work, testimonials, footerLinks
│       ├── JobsData.tsx             → dropdownData + jobList (8 job listings)
│       ├── JobDescData.tsx          → Job detail card fields + skills + HTML description
│       ├── TalentData.tsx           → searchFields + talents (8 profiles) + detailed profile
│       ├── Company.tsx              → companyData (Google) + similar companies (8)
│       ├── Profile.tsx              → User profile form field definitions
│       ├── PostJob.tsx              → Job posting form fields + description template
│       └── PostedJob.tsx            → activeJobs (10) + drafts (3)
│
├── tailwind.config.js               → Custom colors (mine-shaft, bright-sun)
├── postcss.config.js                → Tailwind PostCSS plugin
├── tsconfig.json                    → TypeScript compiler settings
└── package.json                     → 16 dependencies, 4 scripts
```

</details>

<br/>

---

<br/>

## 🚀 Quick Start

### Prerequisites

| Tool | Version | Check Command |
|------|:-------:|---------------|
| Node.js | 18+ | `node -v` |
| npm | 9+ | `npm -v` |
| Git | any | `git --version` |

### Installation & Running

```bash
# Clone the repository
git clone https://github.com/iamsky2002/JOB-PORTAL.git
cd job-portal

# Install all dependencies (16 packages + dev dependencies)
npm install

# Start the development server
npm start
```

App opens at **[http://localhost:3000](http://localhost:3000)** — hot-reload is enabled, every saved change reflects instantly.

<details>
<summary><b>📦 Available Scripts</b></summary>

<br/>

| Command | What It Does |
|---------|-------------|
| `npm start` | Starts the dev server on port 3000 with hot-reload |
| `npm run build` | Creates optimized production bundle in `build/` |
| `npm test` | Runs test suite with Jest |
| `npm run eject` | Ejects CRA config (⚠️ irreversible) |

</details>

<br/>

---

<br/>

## 🗺 Development Roadmap

### ✅ Phase 1 — Frontend (Complete)

- [x] Hero section with search inputs & glassmorphism floating cards
- [x] Infinite company logo marquee (11 companies)
- [x] Job category carousel with 6 cards & hover glow effects
- [x] "How It Works" 3-step guide with profile completion card
- [x] Testimonials grid with 4 reviews & star ratings
- [x] Email subscription CTA with animated state toggle
- [x] Multi-select combobox search filters (Job Title, Location, Experience)
- [x] Route-aware header navigation with active highlighting
- [x] Footer with 3 link columns & animated social icons
- [x] Custom dark theme with Tailwind + Mantine dual registration
- [x] 8 data modules with TypeScript interfaces (ready for UI)
- [x] 33 static image assets organized across 3 directories

### 🔨 Phase 2 — Backend with Java + Spring Boot + MongoDB (In Progress)

- [ ] Spring Boot project setup with Maven & project structure
- [ ] MongoDB integration — database connection, collections design
- [ ] Data models — User, Job, Company, Application schemas (Spring Data MongoDB)
- [ ] Redux setup — global state management on the frontend
- [ ] REST API endpoints — Job CRUD (create, read, update, delete)
- [ ] Search & filter API — by title, location, experience, job type with pagination
- [ ] JWT-based authentication — login, signup, token refresh
- [ ] Role-based authorization — Job Seeker vs Employer access control
- [ ] User profile API — skills, certifications, work history
- [ ] Job application flow — apply, withdraw, track status
- [ ] Employer API — post jobs, view applicants, manage drafts
- [ ] Connect React frontend to Spring Boot APIs (replace mock data with Redux + API calls)

### 🔮 Phase 3 — Full Feature Set & Deployment

- [ ] Job detail page (data model already exists)
- [ ] Talent browse page (8 profiles ready in data)
- [ ] Company profile page (Google data + 8 similar companies ready)
- [ ] Post a job form (form fields + HTML template ready)
- [ ] Employer dashboard (10 active + 3 draft postings ready)
- [ ] Responsive breakpoints for mobile & tablet
- [ ] Dark / Light theme toggle
- [ ] Real-time notifications
- [ ] Resume upload & parsing
- [ ] Deploy — React on Vercel/Netlify + Spring Boot on AWS/Railway + MongoDB Atlas

<br/>

---

<br/>

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

```
1. Fork this repo
2. Create a branch         →  git checkout -b feature/your-feature
3. Make your changes       →  Follow existing patterns (TypeScript, Tailwind, Mantine)
4. Commit                  →  git commit -m "Add: your feature description"
5. Push                    →  git push origin feature/your-feature
6. Open a Pull Request     →  Describe what changed and why
```

<br/>

---

<br/>

## 📜 License

This project is open for learning and personal use. For commercial use, please reach out.

<br/>

---

<br/>

<div align="center">

### 👤 Built By

**Sumit (SKY)**

[![GitHub](https://img.shields.io/badge/GitHub-iamsky2002-181717?style=for-the-badge&logo=github)](https://github.com/iamsky2002)

<br/>

---

<sub>⭐ Star this repo if you found it useful — it keeps me motivated!</sub>

<br/>

Built with ☕, React, and countless late nights.

</div>
