<div align="center">

# 💼 Web Job Portal

**A job portal web app I'm building with React and TypeScript.**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Mantine](https://img.shields.io/badge/Mantine-9.1-339AF0?style=for-the-badge&logo=mantine&logoColor=white)](https://mantine.dev/)

<br/>

A job board where candidates can search for jobs and recruiters can post jobs and find talent. Dark theme, reusable components, and everything is wired up on the frontend.

**Status:** Frontend done · Backend not started yet (running on mock data for now)

</div>

---

## 💡 Why I Built This
I wanted to work on something bigger than the usual to-do app or a basic CRUD project. A job portal felt like a good pick because it has a lot of moving parts — search, filters, profiles, a post-job form — so it forced me to actually think about how to structure components and reuse them instead of copy-pasting the same card three times.

I also didn't want it to look like a default template, so I spent a fair bit of time getting a custom dark theme to work nicely across both Tailwind and Mantine.

The backend (Spring Boot + MongoDB) is the next thing I'm planning to pick up. Right now everything runs on mock data.

## ⚡ What I Used
- **React 19 + TypeScript** — functional components, hooks, and typed props/data.
- **Dark theme UI** — built with Tailwind CSS and Mantine components.
- **Reusable components** — shared cards, a custom multi-select input, dropdowns, etc.
- **Client-side routing** — handled with React Router.

## 🖥️ What's Built So Far (Frontend)

### 🏠 Home Page (`/`)
- **Hero section** with the search inputs.
- **Company marquee** — auto-scrolling logos using `react-fast-marquee`.
- **Job categories** — a carousel built with Embla.
- **How It Works** section with a simple step-by-step layout.
- **Testimonials** and a newsletter **Subscribe** block.

### 🔍 Find Jobs (`/find-jobs`)
- Search and filter bar (Job Title, Location, Experience) using a custom multi-select input.
- Salary range slider.
- Grid of job cards with sorting (Relevance, Recent, Salary).

### 🎯 Find Talent (`/find-talent`)
- Candidate browsing page with filters (Title, Location, Skills).
- Grid of talent cards showing skills and expected CTC.

### 👤 Talent Profile (`/talent-profile`)
- Profile view with experience and certification lists.
- A "save" heart toggle.
- A "recommended talent" section at the bottom.

### 📝 Post a Job (`/post-job`)
- Form to post a new job — title, company, experience, job type, location, salary, skills and description.
- For now it just logs the form data to the console (no backend yet).

### 🧭 Navigation
- Header with active-route highlighting and a notification bell.
- Footer with link columns and social icons.

> **Note:** there's also a Job Description page (`JobDescPage.tsx`) that's still a work in progress — it isn't wired into the routes yet.

## 🛠 Tech Stack

**Frontend (done):**
- React 19
- TypeScript
- Tailwind CSS
- Mantine UI
- React Router DOM
- Tabler Icons
- Embla Carousel + react-fast-marquee

**Backend (planned, not started):**
- Java / Spring Boot
- MongoDB
- Spring Security + JWT for auth
- REST APIs

## 🎨 Theming

The whole app uses a custom dark theme. The tricky part was keeping the same colors in sync between Tailwind classes and Mantine's color props, so both pull from the same palette.

**tailwind.config.js:**
```javascript
theme: {
  extend: {
    colors: {
      'mine-shaft': {
        50: '#fafafa',
        // ...
        900: '#1a1a1a',
      },
      'bright-sun': {
        50: '#fffbeb',
        // ...
        400: '#ffbd20',
      },
    }
  }
}
```

## 📁 Project Structure

```
src/
├── Components/      # Shared reusable components (e.g. MultiInput)
├── Pages/           # Route pages (Home, FindJobs, FindTalent, PostJob, etc.)
├── LandingPage/     # Home page sections (Hero, Companies, Testimonials...)
├── FindJobs/        # Job search components (JobCard, SearchBar, Sort)
├── FindTalent/      # Talent search components (TalentCard, SearchBar)
├── TalentProfile/   # Profile, Experience, Certification, Recommend cards
├── PostJob/         # Post-a-job form components
├── Header/          # Navigation components
├── Footer/          # Footer components
└── Data/            # Mock data and TypeScript interfaces
```

## 🚀 Getting Started

1. **Clone the repo**
   ```bash
   git clone https://github.com/iamsky2002/JOB-PORTAL.git
   cd JOB-PORTAL
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the dev server**
   ```bash
   npm start
   ```
   Then open `http://localhost:3000`.

## 🛠️ Things I Ran Into (and Learned)
This is still under active development, so these are some of the problems I hit and how I sorted them out:

- **Keeping two themes in sync** — at first my Tailwind colors and Mantine's colors didn't match up. I fixed it by defining the same palette in both places so they pull from the same tokens.
- **The custom multi-select input** — building the multi-select for the filters taught me a lot about handling local state in React, especially the edge cases like adding and removing tags.
- **Repeating myself** — early on I had almost the same code for job cards and talent cards. Pulling the shared bits into a `Components/` folder made things much easier to manage.

## 🗺 Roadmap

- [x] Frontend UI and responsive design
- [x] Routing and navigation
- [x] Mock data to test the UI
- [x] Post a Job form (frontend only)
- [ ] Wire up the Job Description page
- [ ] Set up the Spring Boot backend
- [ ] Connect MongoDB and design the schemas
- [ ] Build REST APIs for jobs and users
- [ ] Replace mock data with real API calls
- [ ] Add JWT authentication
- [ ] Deploy

---

### 👤 Built By
**Sumit (SKY)**

[![GitHub](https://img.shields.io/badge/GitHub-iamsky2002-181717?style=for-the-badge&logo=github)](https://github.com/iamsky2002)
