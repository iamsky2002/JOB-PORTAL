<div align="center">

# 💼 Web Job Portal

**A full-stack job portal I'm building with React and Spring Boot.**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Mantine](https://img.shields.io/badge/Mantine-9.1-339AF0?style=for-the-badge&logo=mantine&logoColor=white)](https://mantine.dev/)

<br/>

A job board where candidates can search and apply for jobs, and recruiters can post jobs and find talent. The plan is a full-stack app (React + Spring Boot + MongoDB); I'm building it in stages and right now the frontend is done.

**Status:** Frontend done ✅ · Backend in progress 🔨 (frontend runs on mock data for now)

</div>

---

## 💡 Why I Built This
I wanted to work on something bigger than the usual to-do app — a real, full-stack product with a lot of moving parts. A job portal was a good pick because it has search, filters, profiles, a post-job form, auth, notifications… so it pushes me to think about component structure, reusing code, and (later) how the frontend talks to a backend.

I'm building it from a product backlog (user stories for candidates and employers), and I didn't want it to look like a default template, so I spent time on a custom dark theme that stays consistent across Tailwind and Mantine.

I'm building it in stages: first the full frontend on mock data, then the Spring Boot + MongoDB backend, then wiring them together with auth and notifications.

## 🛠 Tech Stack

| Frontend (done) | Backend & State (in progress) |
| --- | --- |
| React 19 + TypeScript | Java / Spring Boot |
| Tailwind CSS | MongoDB |
| Mantine UI | Spring Security + JWT (auth) |
| React Router | Redux (state management) |
| Tabler Icons | REST APIs + email notifications (OTP) |
| Embla Carousel · react-fast-marquee | |

## 🖥️ What's Built So Far (Frontend)

### 🏠 Home Page (`/`)
- **Hero section** with the search inputs.
- **Company marquee** — auto-scrolling logos using `react-fast-marquee`.
- **Job categories** — a carousel built with Embla.
- **How It Works** section with a step-by-step layout.
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
- For now it logs the form data to the console (no backend yet).

### 🧭 Navigation
- Header with active-route highlighting and a notification bell.
- Footer with link columns and social icons.

> **Note:** a Job Description page (`JobDescPage.tsx`) is started but not wired into the routes yet.

## 🎨 Theming

The whole app uses a custom dark theme. The tricky part was keeping the same colors in sync between Tailwind classes and Mantine's color props, so both pull from the same palette (`mine-shaft` for surfaces, `bright-sun` for the accent), with Poppins as the font.

**tailwind.config.js:**
```javascript
theme: {
  extend: {
    colors: {
      'mine-shaft': {
        50: '#f6f6f6',
        // ...
        950: '#2d2d2d',   // app background
      },
      'bright-sun': {
        50: '#fffbeb',
        // ...
        300: '#ffd149',   // buttons / accent
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

I'm working from a product backlog with user stories for both candidates and employers. Big picture:

**Frontend**
- [x] Landing page + responsive sections
- [x] Find Jobs (search, filters, sorting)
- [x] Find Talent + Talent Profile
- [x] Post a Job form
- [x] Mock data for all of the above
- [ ] Job Description + Apply Job pages
- [ ] Company Profile, Posted Jobs, Job History pages
- [ ] Login / Signup + user Profile page
- [ ] Responsive pass across all pages

**Backend & integration**
- [ ] Spring Boot project + MongoDB schemas
- [ ] Auth APIs (email/password, JWT, Spring Security)
- [ ] Email OTP (expires after 5 mins)
- [ ] Redux for app state
- [ ] Profile API (incl. resume upload)
- [ ] Job, Apply Job, and Posted Jobs APIs
- [ ] Filtering, sorting, and notifications
- [ ] Replace mock data with real API calls
- [ ] Deploy

---

### 👤 Built By
**Sumit (SKY)**

[![GitHub](https://img.shields.io/badge/GitHub-iamsky2002-181717?style=for-the-badge&logo=github)](https://github.com/iamsky2002)
