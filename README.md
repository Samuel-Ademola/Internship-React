# Internship React Movie Application

A React + Vite movie application developed as part of an internship assignment.

The application allows users to discover movies, search the TMDB collection, create accounts, save favourite movies, and find where movies are legally available to stream.

---

# Live Demo

Vercel Deployment:

https://internship-react-black.vercel.app/

---

# Repository

https://github.com/Samuel-Ademola/Internship-React

---

# Features

## Movie Discovery

Users can:

- Browse popular movies from TMDB.
- Search movies by title.
- View movie posters and movie information.
- Explore available streaming providers.

---

## Authentication

Authentication is implemented using Firebase Authentication.

Features:

- User registration.
- User login.
- User logout.
- Persistent authentication state.
- Protected user pages.

---

## Favourite Movies

Users can create their own personal movie collection.

Features:

- Add movies to favourites.
- Remove movies from favourites.
- View saved favourite movies.
- Store favourites per authenticated user.

Firestore structure:

```text
users/{userId}/favourites/{movieId}
```

---

## Streaming Providers

The application integrates with TMDB Watch Providers.

Features:

- Display available streaming platforms.
- Show streaming provider logos.
- Display region-based availability.
- Link users to streaming service options.

---

## Watch Now

The Watch Now feature helps users find legal streaming options for selected movies.

Features:

- Opens movie streaming search results.
- Uses the selected movie title dynamically.
- Encodes movie titles safely using `encodeURIComponent()`.

---

# Technology Stack

## Frontend

- React
- TypeScript
- Vite
- CSS

## APIs and Services

- TMDB API
- Firebase Authentication
- Firebase Firestore

## Development Tools

- VS Code
- Git
- GitHub
- Vercel
- AI development assistants

---

# Project Architecture

The application follows an MVVM-style structure.

```text
src/
│
├── components/
│   ├── Header
│   ├── Footer
│   ├── MovieCard
│   └── StreamingProviders
│
├── pages/
│   ├── Home
│   ├── Favourites
│   ├── Auth
│   └── Profile
│
├── services/
│   ├── tmdbService
│   ├── tmdbMovieService
│   └── firebaseService
│
├── context/
│   └── AuthContext
│
├── types/
│
└── App.tsx
```

---

# Running Locally

## 1. Clone Repository

```bash
git clone https://github.com/Samuel-Ademola/Internship-React.git

cd Internship-React
```

---

## 2. Install Dependencies

```bash
npm install
```

---

## 3. Configure Environment Variables

Create a `.env` file in the project root.

Example:

```env
VITE_TMDB_API_KEY=your_tmdb_api_key

VITE_FIREBASE_API_KEY=your_firebase_api_key
VITE_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
VITE_FIREBASE_PROJECT_ID=your_firebase_project_id
VITE_FIREBASE_STORAGE_BUCKET=your_storage_bucket
VITE_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
VITE_FIREBASE_APP_ID=your_app_id
```

---

## 4. Start Development Server

```bash
npm run dev
```

---

## 5. Create Production Build

```bash
npm run build
```

---

# Git Workflow

The project followed a professional feature branch workflow.

Example:

```text
main
 |
 |
feature branch
 |
 |
Pull Request
 |
 |
main
```

Development process:

1. Create feature branch.
2. Implement changes.
3. Test locally.
4. Run production build.
5. Create Pull Request.
6. Review changes.
7. Merge into main.

---

# AI Development Documentation

AI was used as a development assistant throughout the project.

AI assistance included:

- Project planning.
- React architecture suggestions.
- MVVM implementation guidance.
- Debugging TypeScript errors.
- Firebase integration support.
- TMDB API integration guidance.
- Code review.
- Documentation improvements.

All AI-generated suggestions were reviewed, tested, and manually modified where necessary.

---

## AI Prompts Used

The development prompts are documented here:

[AI Development Prompts](./PROMPTS.md)

---

## AI Development Report

The complete explanation of:

- How AI assisted during development.
- Prompts used.
- Manual improvements.
- Corrections made after reviewing AI-generated code.

View:

[AI Development Report](./AI_DEVELOPMENT_REPORT.md)

---

# Manual Improvements and Corrections

After reviewing AI-generated suggestions, manual changes were made.

Examples:

## TypeScript Corrections

Fixed:

- Incorrect imports.
- Missing exports.
- Function parameter mismatches.
- Type definition issues.

---

## API Integration Improvements

Manually handled:

- TMDB migration from OMDb.
- Streaming provider integration.
- API error handling.
- Environment variable configuration.

---

## UI Improvements

Manually improved:

- Responsive layouts.
- Movie card design.
- Header and footer styling.
- Navigation experience.
- Streaming provider display.

---

## Code Organization

Improved maintainability by organizing code into:

- Components.
- Pages.
- Services.
- Context.
- Types.

---

# Deployment

The application is deployed using Vercel.

Deployment process:

1. Connected GitHub repository.
2. Added environment variables.
3. Configured production build.
4. Verified deployed application.

Production build command:

```bash
npm run build
```

---

# Challenges Encountered

## Environment Variables

Problem:

The application worked locally but failed after deployment.

Solution:

Added required TMDB and Firebase environment variables to Vercel settings.

---

## TMDB Migration

Problem:

The application originally used OMDb.

Solution:

Migrated movie data fetching to TMDB and updated services, types, and components.

---

## Streaming Provider Integration

Problem:

Provider availability required additional API handling.

Solution:

Implemented TMDB Watch Providers integration and created a reusable StreamingProviders component.

---

## Protected Main Branch

Problem:

Direct pushes to main were blocked.

Solution:

Used feature branches and Pull Requests following GitHub repository rules.

---

# Final Reflection

This project demonstrates the effective use of AI as a development assistant while maintaining understanding of the codebase.

AI helped accelerate development through:

- Faster debugging.
- Architecture suggestions.
- Documentation support.
- Code review assistance.

However, all implementation decisions, testing, corrections, and final improvements were manually reviewed and completed.

---

# License

This project was created for educational purposes as part of an internship assignment.