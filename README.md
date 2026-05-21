<div align="center">

# 💼 Web Job Portal

**A Full Stack Job Portal Web Application built with React, Spring Boot, MongoDB, and Redux.**

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Spring Boot](https://img.shields.io/badge/Spring_Boot-3.x-6DB33F?style=for-the-badge&logo=spring-boot&logoColor=white)](https://spring.io/projects/spring-boot)
[![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)](https://www.mongodb.com/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.9-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-3.4-06B6D4?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)

<br/>

A responsive job board where candidates can find jobs and employers can find talent. Features a clean dark theme and modular components.

**Status:** Frontend Completed | Backend In Progress

</div>

---

## 💡 Why I Built This
I built this project to challenge myself with a full-stack application that goes beyond a simple CRUD app. I wanted to learn how to properly structure a React frontend with a premium UI (mixing Tailwind and Mantine) and connect it to a robust Java Spring Boot backend. My goal was to build something that looks and feels like a real product that users would actually want to interact with.

## ⚡ Project Highlights
- **React 19 & TypeScript**: Built with functional components, hooks, and static typing.
- **Dark Mode UI**: Custom design using Tailwind CSS and Mantine UI components.
- **Modular Components**: Reusable UI elements like custom dropdowns, sliders, and cards.
- **Routing**: Client-side routing with React Router for seamless navigation.

## 🖥️ What's Built So Far (Frontend)

### 🏠 Home Page (`/`)
- **Hero Section**: Search inputs and dynamic UI elements.
- **Company Marquee**: Auto-scrolling logos using `react-fast-marquee`.
- **Career Categories**: Embla-powered carousel for browsing job fields.
- **How It Works**: Step-by-step visual guide.
- **Testimonials & Subscribe**: User reviews and email newsletter CTA.

### 🔍 Find Jobs (`/find-jobs`)
- Search and filter bar (Job Title, Location, Experience) using a custom multi-select combobox.
- Salary range slider.
- Grid of job listings with sorting options (Relevance, Recent, Salary).

### 🎯 Find Talent (`/find-talent`)
- Candidate browsing page with search filters (Title, Location, Skills).
- Talent grid showing candidate cards with skills and expected CTC.

### 👤 Candidate Profile (`/talent-profile`)
- Interactive profile view with dynamic experience and certifications lists.
- Clickable "save" heart toggle on profiles.

### 🧭 Navigation
- Header with active-route highlighting and notification bell.
- Footer with responsive link columns and social icons.

## 🛠 Tech Stack

**Frontend:**
- React (v19)
- TypeScript
- Tailwind CSS
- Mantine UI
- React Router DOM
- Tabler Icons React

**Backend (In Progress):**
- Java / Spring Boot
- MongoDB
- Spring Security + JWT for Auth
- RESTful APIs

## 🎨 Theming

The project uses a custom dark theme across Tailwind and Mantine.

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

## 📁 Project Structure (Overview)

```
src/
├── Components/    # Shared reusable components (e.g., MultiInput)
├── Pages/         # Main route pages (Home, FindJobs, FindTalent)
├── LandingPage/   # Components for the home page sections
├── FindJobs/      # Job search specific components
├── FindTalent/    # Talent search specific components
├── Header/        # Navigation components
├── Footer/        # Footer components
└── Data/          # Mock data and TypeScript interfaces
```

## 🚀 Quick Start

1. **Clone the repository**
   ```bash
   git clone https://github.com/iamsky2002/JOB-PORTAL.git
   cd job-portal
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```
   Open `http://localhost:3000` to view it in the browser.

## 🧠 Challenges & What I Learned
Building this wasn't without its hurdles. A few key takeaways from my journey so far:
- **Theme Synchronization:** I initially struggled to keep my custom Tailwind colors perfectly synced with Mantine's UI components. I learned how to properly configure a dual-layer theme so that both libraries pull from the same design tokens.
- **Complex UI State:** Building the custom multi-select combobox for the job filters taught me a lot about managing complex local state in React and handling edge cases (like keyboard navigation and dynamically removing tags).
- **Component Reusability:** I realized early on that I was repeating code for the job cards and talent cards. Refactoring these into shared, reusable components in a `Components/` folder really cleaned up my architecture.

## 🗺 Development Roadmap

- [x] Complete frontend UI and responsive design
- [x] Implement routing and navigation
- [x] Create mock data structures for testing UI
- [ ] Set up Spring Boot backend project
- [ ] Connect MongoDB and design schemas
- [ ] Implement REST APIs for jobs and users
- [ ] Connect frontend to APIs (replace mock data)
- [ ] Implement JWT Authentication
- [ ] Deploy application

---

### 👤 Built By
**Sumit (SKY)**
[![GitHub](https://img.shields.io/badge/GitHub-iamsky2002-181717?style=for-the-badge&logo=github)](https://github.com/iamsky2002)
