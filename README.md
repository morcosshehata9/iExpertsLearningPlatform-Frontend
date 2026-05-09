# 📖 iExperts Learning Platform - E-Learning Platform

iExperts Learning Platform is a modern E-Learning SaaS landing page with a fully integrated backend API. It showcases clean frontend architecture using Angular 17 standalone components

## Features

- ✅ Angular 17 **standalone components** (no NgModules)
- ✅ **Reactive Forms** with field-level validation messages
- ✅ **Signal-based** UI state management (`idle | loading | success | error`)
- ✅ **Loading spinner** during API submission
- ✅ Success and error states with user feedback
- ✅ **Mobile-first** responsive layout (Bootstrap 5 + custom SCSS)
- ✅ Smooth scroll navigation with sticky navbar
- ✅ CSS **keyframe animations** (staggered hero entrance)
- ✅ Environment-based API URL configuration
- ✅ Typed HTTP client with `Observable` and `catchError`


---

## Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | Angular 17, TypeScript, SCSS        |
| UI Library | Bootstrap 5   |
| Forms      | Angular Reactive Forms              |
| HTTP       | Angular HttpClient (Fetch API)      |
| Fonts      | DM Sans, Fraunces (Google Fonts)    |

---

## Project Structure

```
── iExpertsLearningPlatform-frontend/             # Angular 17 Frontend
    └── src/
        └── app/
            ├── components/
            │   ├── navbar/         # Sticky responsive navbar
            │   ├── hero/           # Hero section + CTA
            │   ├── features/       # Why iExpertsLearningPlatform section
            │   ├── courses/        # Featured course cards
            │   ├── about/          # About section
            │   ├── testimonials/   # Student reviews
            │   ├── contact/        # Reactive form + API call
            │   └── footer/         # Footer with links
            ├── models/
            │   └── contact.model.ts
            ├── services/
            │   └── contact.service.ts
            ├── environments/
            │   ├── environment.ts
            │   └── environment.prod.ts
            ├── app.component.ts
            ├── app.config.ts
            └── styles.scss
```

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/morcosshehata9/iExpertsLearningPlatform-Frontend.git
cd iExpertsLearningPlatform
```

### 2. Set up the Frontend

Open a **new terminal window**:

```bash
cd iExpertsLearningPlatform-frontend

# Install npm dependencies
npm install

# Start the Angular dev server
ng serve
```

The app will be available at `http://localhost:4200`.

### 4. Configure Bootstrap in angular.json

In `angular.json`, under `projects → architect → build → options → styles`, ensure this order:

```json
"styles": [
  "node_modules/bootstrap/dist/css/bootstrap.min.css",
  "src/styles.scss"
]
```

---

## Pages & Sections

| Section        | Description                                               |
|----------------|-----------------------------------------------------------|
| **Navbar**     | Sticky, scroll-aware with mobile hamburger menu           |
| **Hero**       | Headline, subheadline, dual CTA buttons, stats, logos     |
| **Features**   | 6-card grid highlighting platform benefits                |
| **Courses**    | 3 featured course cards with level, duration, rating      |
| **About**      | Mission statement and key differentiators                 |
| **Testimonials** | 3 student reviews with ratings and avatars              |
| **Contact**    | Reactive form → POST to .NET API → success/error feedback |
| **Footer**     | Brand, copyright, policy links                            |

---

<div align="center">

Built with ❤️ using **Angular 17** + **ASP.NET Core 8**

</div>
