# Internship React App

This project is a React + Vite application that integrates with OMDb and Firebase to provide search, authentication, and per-user favourites persistence.

## Features

- OMDb movie search
- Firebase Authentication
- Login button and profile navigation
- Protected favourites page
- Per-user favourites stored in Firestore
- Breadcrumb navigation for route context
- Responsive modern UI with header and footer layout
- MVVM-style page and service separation
- Watch Now integration using JustWatch search

## Prompts Used for This App

Below are the main prompts used during development to shape features, routing, UI polish, and documentation. They were used to guide authentication, favourites persistence, modern styling, and layout improvements.

1. Add Home/Favourites MVVM architecture.
2. Integrate OMDb search using `import.meta.env.VITE_OMDB_API_KEY`.
3. Create Firebase service + favourites persistence.
4. Add authentication service wrappers and auth MVVM scaffolding.
5. Protect `/favourites` route and redirect unauthenticated users.
6. Store favourites under signed-in user's profile.
7. Style the login page, favourite button, and overall UI.
8. Create a login button and profile tab.
9. Add a fixed header with navigation, search bar, and responsive actions.
10. Add breadcrumbs and a footer for navigation and layout polish.
11. Debug UI issues, ensure responsive design, and update README documentation.

## Project Structure

- `src/components`: shared UI components such as `Header` and `MovieCard`
- `src/pages/Home`: home page view and view model
- `src/pages/Favourites`: favourites page and view model
- `src/pages/Auth`: authentication page model and view model
- `src/pages/Profile`: profile page
- `src/services`: Firebase and OMDb service wrappers
- `src/context`: global auth context

## Running locally

1. Install dependencies:
   ```bash
   npm install
   ```
2. Create a `.env` file with your OMDb API key and Firebase config.
3. Start the development server:
   ```bash
   npm run dev
   ```

## Notes

- `VITE_OMDB_API_KEY` is read through `import.meta.env`.
- `AuthProvider` supplies authentication state across the app.
- Favourites are stored under `users/{userId}/favourites/{imdbID}` in Firestore.

---

# AI Development Documentation

This project was developed with AI assistance as a development companion.

## AI Prompts Used

The prompts used throughout development are documented here:

[View AI Prompts](./PROMPTS.md)

## AI Assistance Report

The explanation of how AI contributed to development, along with manual improvements and refactoring decisions, can be found here:

[View AI Report](./AI_REPORT.md)