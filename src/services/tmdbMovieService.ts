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

export async function searchMovies(query: string): Promise<Movie[]> {
  const response = await fetch(
    `${TMDB_BASE_URL}/search/movie?api_key=${tmdbApiKey}&query=${encodeURIComponent(query)}&language=en-US&include_adult=false`
  );

  if (!response.ok) {
    throw new Error("Failed to search movies.");
  }

  const data = await response.json();

  return data.results ?? [];
}

export async function getPopularMovies(): Promise<Movie[]> {
  const today = new Date();

  const currentDate = today.toISOString().split("T")[0];

  const response = await fetch(
  `${TMDB_BASE_URL}/discover/movie?api_key=${tmdbApiKey}&sort_by=popularity.desc&vote_count.gte=100&language=en-US`
);

  if (!response.ok) {
    throw new Error("Failed to fetch popular movies.");
  }

  const data = await response.json();

  return (data.results ?? []).filter(
  (movie: Movie) => movie.poster_path && movie.release_date
);
}