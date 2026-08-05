const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY;

if (!tmdbApiKey) {
  throw new Error(
    "Missing TMDB API key. Set VITE_TMDB_API_KEY in your environment."
  );
}

export interface Movie {
  id: number;
  title: string;
  release_date: string;
  poster_path: string | null;
}

interface TMDBSearchResponse {
  results: Movie[];
}

export async function searchMovies(query: string): Promise<Movie[]> {
  const response = await fetch(
    `${TMDB_BASE_URL}/search/movie?api_key=${tmdbApiKey}&query=${encodeURIComponent(query)}`
  );

  if (!response.ok) {
    throw new Error("Failed to search TMDB movies.");
  }

  const data: TMDBSearchResponse = await response.json();

  return data.results;
}

export async function getPopularMovies(): Promise<Movie[]> {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/popular?api_key=${tmdbApiKey}`
  );

  if (!response.ok) {
    throw new Error("Failed to load popular movies.");
  }

  const data: TMDBSearchResponse = await response.json();

  return data.results;
}