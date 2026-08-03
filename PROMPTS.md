# AI Prompts Used During Development

This document contains the main prompts used while developing the React application with AI assistance.

## Project Setup and Architecture

1. Create a React + Vite application structure suitable for a movie search application.

2. Add a clean MVVM-inspired architecture separating views, view models, components, and services.

3. Organize the project folders to improve maintainability and scalability.

## Movie Search Feature

4. Integrate the OMDb API for movie searching.

5. Use `import.meta.env.VITE_OMDB_API_KEY` to securely access the API key.

6. Create a reusable movie service for handling API requests.

## Authentication

7. Add Firebase Authentication to the React application.

8. Create authentication service wrappers for login, logout, and user state management.

9. Create an authentication context to provide user information throughout the application.

10. Add protected routes that prevent unauthenticated users from accessing favourites.

## Favourites Feature

11. Create a Firebase Firestore service for storing user favourites.

12. Store favourites under each authenticated user's profile.

13. Allow users to add and remove favourite movies.

14. Create a dedicated favourites page with its own view model.

## User Interface Improvements

15. Improve the styling of the login page and movie cards.

16. Create a responsive header with navigation and search functionality.

17. Add a profile page and login button.

18. Add breadcrumb navigation to show route context.

19. Add a footer and improve overall page layout.

## Debugging and Documentation

20. Help debug React errors and improve application reliability.

21. Review the code structure and suggest refactoring improvements.

22. Improve the README documentation with setup instructions and project details.