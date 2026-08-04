# Feature: Streaming Providers

## Goal

Allow users to see legitimate streaming platforms where a selected movie is available.

## User Story

As a user,  
I want to see available streaming providers for a movie,  
so that I can quickly find where I can watch it legally.

---

# Feature Overview

The Streaming Providers feature integrates with the TMDb Watch Providers API to retrieve available streaming platforms for movies.

The feature extends the existing movie application by displaying providers such as:

- Amazon Prime Video
- Netflix
- Disney+
- Other supported platforms

Availability depends on region and current provider licensing.

---

# Implementation

The feature flow:

```text
User searches movie
        |
        ↓
OMDb returns movie data
        |
        ↓
Movie IMDb ID sent to TMDb
        |
        ↓
TMDb finds matching movie
        |
        ↓
Watch Providers API request
        |
        ↓
Streaming providers displayed on movie card
```

---

# Technical Changes

## Added Files

```text
src/services/tmdbService.ts
src/types/streaming.ts
src/components/StreamingProviders/StreamingProviders.tsx
```

---

## Modified Files

```text
src/App.tsx
src/pages/Home/HomeView.tsx
src/pages/Home/useHomeViewModel.ts
src/components/MovieCard/MovieCard.tsx
```

---

# TMDb Integration

A TMDb API configuration was added using an environment variable:

```text
VITE_TMDB_API_KEY
```

The application uses the TMDb Watch Providers endpoint:

```text
/movie/{movie_id}/watch/providers
```

to retrieve available streaming services.

---

# Provider Loading Process

When movies are loaded:

1. The application receives movie information from OMDb.
2. The movie IMDb ID is used to search TMDb for the matching movie.
3. The TMDb movie ID is retrieved.
4. The Watch Providers API is called.
5. Provider information is stored in React state.
6. Available streaming platforms are displayed on the movie card.

---

# Region Handling

Streaming availability depends on the selected country because licensing differs between regions.

Current default region:

```text
US (United States)
```

The API supports changing the region code for different markets.

Examples:

```text
United States → US
Nigeria → NG
United Kingdom → GB
```

Future improvements can include automatic user location detection.

---

# Streaming Provider Component

A reusable component was created:

```text
src/components/StreamingProviders/StreamingProviders.tsx
```

Responsibilities:

- Receive provider data as props.
- Display available streaming platforms.
- Handle cases where no providers are available.

---

# Testing

The feature was tested locally.

Testing results:

- Movie search works correctly.
- TMDb movie lookup works correctly.
- Streaming provider requests succeed.
- Providers display when available.
- Movies without provider information show a fallback message.
- Existing Favourite functionality continues to work.
- Production build completes successfully.

Build command:

```bash
npm run build
```

---

# Known Limitations

Some movies may display:

```text
No streaming providers available
```

This does not always indicate an application error.

Possible reasons:

- The movie is not available on streaming platforms in the selected region.
- Streaming licenses change over time.
- TMDb does not have provider information for that movie.

---

# Future Improvements

Possible improvements include:

- Add automatic user country detection.
- Add multiple region fallback.
- Add direct links to streaming provider pages.
- Replace Watch Now search with direct provider navigation.
- Add provider logos and improved UI design.
- Cache provider results to reduce API requests.

---

# Development Notes

The Streaming Providers feature was developed using a feature branch workflow.

Branch:

```text
feature/streaming-providers
```

Development process:

1. Created a dedicated feature branch.
2. Added TMDb API configuration.
3. Created streaming provider service.
4. Added provider types.
5. Built reusable provider component.
6. Integrated providers into movie cards.
7. Tested production build.
8. Documented the feature.