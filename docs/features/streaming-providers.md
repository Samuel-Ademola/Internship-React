# Feature: Streaming Providers

## Goal

Allow users to see available streaming platforms for a selected movie.

## User Story

As a user,

I want to see where a movie is available to watch,

so that I can choose a streaming platform without searching manually.

## Feature Overview

The Streaming Providers feature improves the Watch Now experience by displaying available streaming services for movies.

Examples:

- Netflix
- Amazon Prime Video
- Disney+
- Apple TV
- Hulu

## MVP

For the first version:

- Add a streaming providers section to movie details.
- Fetch provider information from an external movie API.
- Display available streaming platforms.
- Keep Watch Now functionality working.

## Technical Approach

Possible API:

- TMDb API

Required data:

- Movie ID
- Country/region
- Streaming provider information

## Implementation Plan

1. Add TMDb API integration.
2. Create streaming provider service.
3. Add provider model/types.
4. Display providers in UI.
5. Add loading and error states.
6. Test with multiple movies.

## Future Improvements

- Detect user's country automatically.
- Add provider logos.
- Add direct provider links.
- Allow filtering by subscription service.

## Acceptance Criteria

- Users can see streaming providers.
- Provider information loads correctly.
- Existing Favourite feature still works.
- Existing Watch Now feature still works.
- Production build succeeds.