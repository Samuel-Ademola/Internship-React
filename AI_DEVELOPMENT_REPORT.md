# AI Development Report

## Project: Internship React Movie Application

## Overview

This project is a React + Vite movie application developed as part of an internship assignment.

The goal was to independently build a React application similar to the provided example while using AI as a development assistant throughout the development process.

The application allows users to:

- Search movies using the TMDB API.
- Create accounts and authenticate using Firebase.
- Save favourite movies per user.
- Navigate through protected pages.
- View available streaming providers using TMDB Watch Providers API.

---

# Technology Stack

## Frontend

- React
- TypeScript
- Vite
- CSS

## Services

- TMDB API
- TMDB Watch Providers API
- Firebase Authentication
- Firebase Firestore

## Development Tools

- VS Code
- Git
- GitHub
- Vercel
- AI development assistants

---

# Application Features

## 1. Movie Search

The application integrates with the TMDB API to search and display movie information.

Features:

- Search movies by title.
- Display movie posters.
- Display movie information.
- Handle API responses.
- Load popular movies on the homepage.

Environment variable used:

```env
VITE_TMDB_API_KEY
```

---

## 2. Firebase Authentication

Firebase Authentication was implemented to allow users to create accounts and sign in.

Implemented:

- User registration.
- User login.
- User logout.
- Authentication state tracking.

An Auth Context was created to provide authentication information throughout the application.

---

## 3. Favourite Movies

Users can save movies to their personal favourites list.

Implementation:

- Favourite movies are stored in Firestore.
- Each user has a separate favourites collection.

Firestore structure:

```
users/{userId}/favourites/{movieId}
```

Features:

- Add favourite movie.
- Remove favourite movie.
- Load saved favourites.
- Protect favourites page for authenticated users.

---

## 4. Streaming Providers Feature

The application was extended with TMDB Watch Providers integration.

Implementation:

- Added TMDB Watch Providers API integration.
- Retrieves available streaming platforms for movies.
- Displays provider logos and names.
- Supports regional provider availability.
- Provides fallback regions when providers are unavailable.

The feature helps users discover where movies are legally available to stream.

---

# AI Assistance During Development

AI was used as a development assistant during different stages of the project.

AI assisted with:

- Project planning.
- React component structure.
- MVVM architecture decisions.
- Debugging TypeScript errors.
- Firebase integration guidance.
- TMDB API integration.
- Code improvements.
- Documentation writing.
- Git workflow guidance.

AI suggestions were reviewed, tested, modified, and adapted before being added to the project.

---

# Prompts Used During Development

## React Project Architecture

Prompt:

```
Create a React + Vite application structure using TypeScript.
Organize the project using clean folders and reusable components.
```

Purpose:

Used to establish the initial project structure.

---

## MVVM Architecture

Prompt:

```
Add Home and Favourites MVVM architecture.
Separate models, views, and view models.
```

Purpose:

Used to improve separation of responsibilities and maintainability.

---

## TMDB API Integration

Prompt:

```
Help me migrate this React movie application from OMDb API to TMDB API while keeping the existing architecture.
```

Purpose:

Used to replace the original movie data source with TMDB.

---

## Streaming Providers Integration

Prompt:

```
Help me implement TMDB Watch Providers so users can see where movies are available to stream.
```

Purpose:

Used to design and implement streaming availability functionality.

---

## Firebase Integration

Prompt:

```
Create Firebase service wrappers for authentication and Firestore favourites persistence.
```

Purpose:

Used to implement authentication and database functionality.

---

## Protected Routes

Prompt:

```
Protect the favourites route and redirect unauthenticated users.
```

Purpose:

Used to secure user-specific pages.

---

## UI Improvements

Prompt:

```
Improve the application UI with a responsive modern layout.
Add header, footer, breadcrumbs, and better movie cards.
```

Purpose:

Used to improve usability and visual presentation.

---

## Debugging

Prompt:

```
Review the TypeScript build errors and explain how to fix them.
```

Purpose:

Used to identify and resolve compilation problems.

---

# Manual Improvements and Corrections

After reviewing AI-generated suggestions, manual changes were made.

## TMDB Migration

Manual improvements included:

- Replacing OMDb API integration with TMDB endpoints.
- Updating movie data handling to match TMDB responses.
- Implementing popular movies loading.
- Updating TypeScript interfaces.

---

## Production Debugging

Problem:

The application worked locally but failed after deployment.

Error:

```
Invalid API key: You must be granted a valid key.
```

Solution:

- Investigated the production environment.
- Identified missing VITE_TMDB_API_KEY configuration in Vercel.
- Updated Vercel environment variables.
- Redeployed and verified production functionality.

---

## TypeScript Fixes

Problems fixed:

- Incorrect exports.
- Incorrect imports.
- Function argument mismatches.
- Type conflicts between streaming provider objects.

Example:

A build error showed that imported types did not match component props. The issue was manually corrected by updating interfaces and component usage.

---

## Code Organization

The project structure was manually reviewed and improved.

Organized folders:

```
src/components
src/pages
src/services
src/context
src/types
```

This improved maintainability and readability.

---

## UI Adjustments

Manual improvements included:

- Responsive layouts.
- Button styling.
- Movie card spacing.
- Streaming provider display improvements.
- Mobile layout improvements.
- Header and footer adjustments.

---

# Git Workflow

The project followed a professional feature branch workflow.

Example:

```
main
 |
 |
feature/tmdb-migration
 |
 |
Pull Request
 |
 |
main
```

Process:

1. Created a feature branch.
2. Developed features independently.
3. Tested locally.
4. Created a Pull Request.
5. Reviewed changes.
6. Merged into main.

---

# TMDB Streaming Provider Development Workflow

Branch created:

```
feature/tmdb-migration
```

Files modified:

```
src/components/MovieCard/MovieCard.tsx
src/components/StreamingProviders/StreamingProviders.tsx
src/pages/Home/HomeView.tsx
src/pages/Home/useHomeViewModel.ts
src/services/tmdbService.ts
src/services/tmdbMovieService.ts
src/types/streaming.ts
src/index.css
```

Testing performed:

- Confirmed homepage loads movies.
- Confirmed movie search works.
- Confirmed streaming providers display correctly.
- Confirmed favourites functionality still works.
- Confirmed production build succeeds.

---

# Deployment

The application was deployed using Vercel.

Deployment process:

1. Connected GitHub repository.
2. Added environment variables.
3. Built production version.
4. Verified live deployment.

Production build command:

```bash
npm run build
```

---

# Challenges Encountered

## Firebase Environment Variables

Problem:

The deployed application displayed missing configuration errors.

Solution:

Added Firebase environment variables to Vercel project settings.

---

## TMDB Environment Variables

Problem:

TMDB worked locally but failed in production.

Solution:

Configured VITE_TMDB_API_KEY correctly in Vercel and redeployed.

---

## TypeScript Build Errors

Problems:

- Missing exports.
- Incorrect function parameters.
- Import issues.

Solution:

Reviewed compiler errors and manually corrected the code.

---

## Git Branch Management

Challenges:

- Understanding branches.
- Creating Pull Requests.
- Protecting the main branch.

Solution:

Implemented:

- Feature branches.
- Pull Requests.
- Protected main branch.

---

# Final Reflection

AI helped improve development speed by providing guidance, debugging support, architecture suggestions, and documentation assistance.

However, all AI-generated suggestions were reviewed, tested, and adjusted manually.

This project demonstrates the ability to use AI effectively as a development assistant while maintaining understanding of the codebase, making technical decisions, debugging issues, and following a professional software development workflow.