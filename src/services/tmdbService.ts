const TMDB_BASE_URL = "https://api.themoviedb.org/3";

const tmdbApiKey = import.meta.env.VITE_TMDB_API_KEY;

if (!tmdbApiKey) {
  throw new Error(
    "Missing TMDb API key. Set VITE_TMDB_API_KEY in your environment."
  );
}

import type { StreamingProvider } from "../types/streaming";

interface WatchProviderResponse {
  results?: {
    [country: string]: {
      flatrate?: StreamingProvider[];
      rent?: StreamingProvider[];
      buy?: StreamingProvider[];
    };
  };
}

export async function getStreamingProviders(
  tmdbMovieId: number,
  country = "NG"
): Promise<StreamingProvider[]> {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${tmdbMovieId}/watch/providers?api_key=${tmdbApiKey}&watch_region=${country}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch streaming providers.");
  }

  const data: WatchProviderResponse = await response.json();
  console.log("TMDb provider response:", data);

  const providers =
    data.results?.[country]?.flatrate ??
    data.results?.[country]?.rent ??
    data.results?.[country]?.buy ??
    [];

  return providers;
}

export async function findTMDbMovieId(
  imdbId: string
): Promise<number | null> {
  const response = await fetch(
    `${TMDB_BASE_URL}/find/${imdbId}?api_key=${tmdbApiKey}&external_source=imdb_id`
  );

  if (!response.ok) {
    throw new Error("Failed to find TMDb movie.");
  }

  const data = await response.json();

console.log("TMDb find response:", data);

return data.movie_results?.[0]?.id ?? null;
}