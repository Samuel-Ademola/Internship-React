# Feature: Watch Now

## Goal

Allow users to quickly find legitimate platforms where a selected movie can be watched.

## User Story

As a user,  
I want to click a "Watch Now" button,  
so that I can find where a movie is legally available.

## Feature Overview

The Watch Now feature adds a button to every movie card that allows users to search for available streaming options for a selected movie.

The feature uses JustWatch search and opens the results in a new browser tab.

## Implementation

The following functionality was added:

- Added a "Watch Now" button to every movie card.
- Opens a new browser tab when clicked.
- Searches JustWatch using the selected movie title.
- Keeps the existing Favourite functionality working.
- Added responsive styling for the new button layout.

Example:

Movie:

Interstellar

Search URL:

https://www.justwatch.com/us/search?q=Interstellar


## Technical Changes

### Modified Files

- src/components/MovieCard/MovieCard.tsx
- src/index.css


### MovieCard Changes

Implemented:

- Added `handleWatchNow()` function.
- Added Watch Now button action.
- Used `encodeURIComponent()` to safely handle movie titles with spaces and special characters.
- Used `window.open()` to launch JustWatch in a new browser tab.

Feature flow:

User clicks Watch Now  
↓  
Movie title is captured  
↓  
Movie title is encoded  
↓  
JustWatch search URL is generated  
↓  
New browser tab opens


### Styling Changes

Updated:

- src/index.css

Added:

- `.movie-card__actions`
- `.movie-card__button--watch`

Improvements:

- Watch Now button has a separate style from Favourite.
- Buttons align correctly on desktop.
- Buttons stack vertically on smaller screens.


## Testing

The feature was tested locally.

Testing steps:

1. Started the development server:

npm run dev

2. Opened the application in the browser.
3. Searched for different movies.
4. Confirmed the Watch Now button appears on movie cards.
5. Clicked the Watch Now button.
6. Confirmed JustWatch opens in a new browser tab.
7. Confirmed the selected movie title appears in the search.
8. Confirmed Favourite functionality still works.

Result:

Feature works successfully.


## AI Assistance

AI was used during development to assist with:

- Planning the Watch Now feature.
- Updating the MovieCard component.
- Suggesting UI improvements.
- Reviewing implementation approaches.
- Helping debug issues during development.


## Manual Improvements

Changes made manually after reviewing AI suggestions:

- Adjusted the implementation to match the existing project structure.
- Changed the JustWatch URL format after testing revealed the first URL returned a 404 error.
- Tested the feature manually in the browser.
- Verified existing application functionality was not affected.


## Future Improvements

Possible improvements for future versions:

- Integrate TMDb API for richer movie information.
- Display streaming providers directly inside the application.
- Add a movie details page.
- Show trailers and ratings.
- Filter providers by user's country.
- Display streaming availability information.


## Acceptance Criteria

- [x] Button appears on every movie card.
- [x] Clicking it opens a new browser tab.
- [x] Search contains the selected movie title.
- [x] Existing Favourite functionality still works.
- [x] Feature tested locally.
- [x] Documentation completed.


## Progress Log

- [x] Feature planned
- [x] UI implemented
- [x] Functionality implemented
- [x] Styling completed
- [x] Tested locally
- [x] Documentation completed
- [ ] Committed to feature branch
- [ ] Merged into main