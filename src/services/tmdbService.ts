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
      link?: string;
      flatrate?: StreamingProvider[];
      rent?: StreamingProvider[];
      buy?: StreamingProvider[];
    };
  };
}

export async function getStreamingProviders(
  tmdbMovieId: number,
  country = "NG"
): Promise<StreamingAvailability> {
  const response = await fetch(
    `${TMDB_BASE_URL}/movie/${tmdbMovieId}/watch/providers?api_key=${tmdbApiKey}&watch_region=${country}`
  );

  if (!response.ok) {
    throw new Error("Failed to fetch streaming providers.");
  }

  const data: WatchProviderResponse = await response.json();
  console.log("TMDb provider response:", data);

  const countryData = data.results?.[country];

return {
  providers:
    countryData?.flatrate ??
    countryData?.rent ??
    countryData?.buy ??
    [],
  link: countryData?.link,
};
}

export interface StreamingAvailability {
  providers: StreamingProvider[];
  link?: string;
}

export async function getStreamingProvidersWithFallback(
  tmdbMovieId: number
): Promise<StreamingAvailability> {

  const regions = [
    "NG",
    "US",
    "GB",
    "CA",
  ];

  for (const region of regions) {
  const result = await getStreamingProviders(
    tmdbMovieId,
    region
  );

  if (result.providers.length > 0) {
    return result;
  }
}

return {
  providers: [],
  link: undefined,
};
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