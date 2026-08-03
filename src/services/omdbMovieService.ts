// This file will contain communication with the OMDb API.

export interface Movie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
}

export interface OmdbSearchResponse {
  Response: string;
  Search?: Movie[];
  Error?: string;
}

const API_URL = 'https://www.omdbapi.com/';

export async function searchMovies(query: string): Promise<Movie[]> {
  const trimmedQuery = query.trim();

  console.log('searchMovies called with query:', trimmedQuery);

  if (!trimmedQuery) {
    console.log('Empty query, returning []');
    return [];
  }

  const apiKey = import.meta.env.VITE_OMDB_API_KEY;

  if (!apiKey) {
    console.error('Missing OMDb API key.');
    throw new Error('Missing OMDb API key. Set VITE_OMDB_API_KEY in your environment.');
  }

  const url = `${API_URL}?apikey=${encodeURIComponent(apiKey)}&s=${encodeURIComponent(trimmedQuery)}`;
  console.log('Requesting OMDb URL:', url);

  try {
    const response = await fetch(url);
    console.log('OMDb response status:', response.status);

    const responseText = await response.text();
    let data: OmdbSearchResponse | null = null;

    try {
      data = JSON.parse(responseText) as OmdbSearchResponse;
    } catch {
      data = null;
    }

    if (!response.ok) {
      const errorMessage = data?.Error ?? `OMDb request failed with status ${response.status}.`;
      throw new Error(errorMessage);
    }

    if (data?.Response === 'False') {
      console.error('OMDb returned an error response:', data.Error);
      throw new Error(data.Error || 'OMDb returned an error response.');
    }

    console.log('OMDb response data:', data);
    console.log('Movies found:', data?.Search ?? []);
    return data?.Search ?? [];
  } catch (error) {
    console.error('OMDb search error:', error);
    if (error instanceof Error) {
      throw error;
    }

    throw new Error('Failed to search movies from OMDb.');
  }
}
