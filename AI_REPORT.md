# AI Development Report

## Project: Internship React Movie Application

## Overview

This project is a React + Vite movie application developed as part of an internship assignment.

The goal was to independently build a React application similar to the provided example while using AI as a development assistant throughout the development process.

The application allows users to:

- Search movies using the OMDb API.
- Create accounts and authenticate using Firebase.
- Save favourite movies per user.
- Navigate through protected pages.
- Find legal streaming options using the Watch Now feature.

---

# Technology Stack

## Frontend

- React
- TypeScript
- Vite
- CSS

## Services

- OMDb API
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

The application integrates with the OMDb API to search and display movie information.

Features:

- Search movies by title.
- Display movie posters.
- Display movie information.
- Handle API responses.

Environment variable used:

```env
VITE_OMDB_API_KEY
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
users/{userId}/favourites/{imdbID}
```

Features:

- Add favourite movie.
- Remove favourite movie.
- Load saved favourites.
- Protect favourites page for authenticated users.

---

## 4. Watch Now Feature

The Watch Now feature helps users find legitimate streaming options for selected movies.

Implementation:

- Added Watch Now button to every movie card.
- Opens JustWatch search results in a new browser tab.
- Uses the selected movie title dynamically.

Example:

```
Interstellar
```

Search result:

```
https://www.justwatch.com/search?q=Interstellar
```

Technical implementation:

- Movie title is encoded using `encodeURIComponent()`.
- Uses `window.open()` to launch the external search.

---

# AI Assistance During Development

AI was used as a development assistant during different stages of the project.

AI assisted with:

- Project planning.
- React component structure.
- MVVM architecture decisions.
- Debugging TypeScript errors.
- Firebase integration guidance.
- Code improvements.
- Documentation writing.
- Git workflow guidance.

AI suggestions were reviewed, tested, and modified before being added to the project.

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
## 5. Streaming Providers

The application was extended with TMDb Watch Providers integration.

Implemented:

- TMDb API configuration.
- Movie lookup using IMDb IDs.
- Streaming provider retrieval.
- Provider display component.
- Region-based provider availability.

AI assistance was used for:

- Designing the integration flow.
- Debugging TypeScript issues.
- Reviewing component structure.
- Improving documentation.

Manual improvements included:

- Adjusting state management.
- Fixing API integration issues.
- Testing provider availability.
- Maintaining existing Favourite functionality.

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

## OMDb API Integration

Prompt:

```
Integrate OMDb movie search using import.meta.env.VITE_OMDB_API_KEY.
```

Purpose:

Used to connect the application with movie data.

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

## TypeScript Fixes

Problems fixed:

- Incorrect exports.
- Incorrect imports.
- Function argument mismatches.

Example:

A build error showed that `HomeModel` was imported but not exported.

The issue was manually corrected by updating exports and imports.

---

## Firebase Validation

Additional validation was manually added.

Examples:

- Checking missing environment variables.
- Validating user IDs.
- Validating movie data before saving.

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
- Mobile improvements.
- Header and footer adjustments.

---

# Git Workflow

The project followed a professional feature branch workflow.

Example:

```
main
 |
 |
feature/watch-now
 |
 |
Pull Request
 |
 |
main
```

Process:

1. Created a feature branch.
2. Developed the feature independently.
3. Tested locally.
4. Added documentation.
5. Created a Pull Request.
6. Reviewed changes.
7. Merged into main.

---

# Watch Now Feature Development Workflow

Branch created:

```
feature/watch-now
```

Changes made:

Files modified:

```
src/components/MovieCard/MovieCard.tsx
src/index.css
README.md
docs/features/watch-now.md
```

Testing performed:

- Confirmed Watch Now button appears on movie cards.
- Confirmed clicking the button opens a new browser tab.
- Confirmed movie title is included in the search.
- Confirmed Favourite functionality still works.
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

The deployed application displayed:

```
Missing Firebase configuration
```

Solution:

Added Firebase environment variables to Vercel project settings.

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

This project demonstrates the ability to use AI effectively as a development assistant while maintaining understanding of the codebase, making technical decisions, and following a professional software development workflow.