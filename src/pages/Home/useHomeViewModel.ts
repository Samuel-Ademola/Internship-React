import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { createHomeModel, getMovies, initialMovies, type HomeModel } from './HomeModel';
import { saveFavourite as saveFavouriteMovie } from '../Favourites/FavouritesModel';
import type { Movie } from '../../services/tmdbMovieService';
import { getStreamingProvidersWithFallback, type StreamingAvailability, } from "../../services/tmdbService";

export const useHomeViewModel = () => {
  const [model] = useState<HomeModel>(() => createHomeModel());
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
  const [streamingProviders, setStreamingProviders] = useState<
  Record<string, StreamingAvailability>
>({});
const [loadedProviderMovies, setLoadedProviderMovies] =
  useState<Set<number>>(new Set());
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [hasLoadedInitialMovies, setHasLoadedInitialMovies] = useState(false);
  const navigate = useNavigate();
  const { user } = useAuth();

  const loadInitialMovies = useCallback(async () => {
    setLoading(true);
    setError(null);

    try {
      const results = await initialMovies();
      setMovies(results);
    } catch (err) {
      setMovies([]);
      setError(err instanceof Error ? err.message : 'Something went wrong while loading movies.');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (!hasLoadedInitialMovies) {
      void loadInitialMovies();
      setHasLoadedInitialMovies(true);
    }
  }, [hasLoadedInitialMovies, loadInitialMovies]);

  
  const handleSearch = async () => {
    setLoading(true);
    setError(null);

    try {
      const results = await getMovies(query);
      setMovies(results);
    } catch (err) {
      setMovies([]);
      setError(err instanceof Error ? err.message : 'Something went wrong while searching movies.');
    } finally {
      setLoading(false);
    }
  };

  const saveFavourite = useCallback(async (movie: Movie) => {
    if (!user?.uid) {
      navigate('/auth');
      return;
    }

    try {
      await saveFavouriteMovie(user.uid, movie);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save favourite movie.');
    }
  }, [navigate, user?.uid]);

  const handleFavouriteClick = useCallback(
    async (movie: Movie) => {
      if (!user?.uid) {
        navigate('/auth');
        return;
      }

      await saveFavouriteMovie(user.uid, movie);
    },
    [navigate, user?.uid],
  );

  const loadStreamingProviders = useCallback(async (movie: Movie) => {
  console.log("Loading providers for:", movie.title);

  try {
    const availability =
  await getStreamingProvidersWithFallback(movie.id);

setStreamingProviders((previous) => ({
  ...previous,
  [String(movie.id)]: availability,
}));

  } catch (err) {
    console.error(
      "Failed to load streaming providers:",
      err
    );
  }
}, []);

 useEffect(() => {
  if (!movies.length) {
    return;
  }

  movies.forEach((movie) => {
    if (!loadedProviderMovies.has(movie.id)) {
      setLoadedProviderMovies((previous) => {
        const updated = new Set(previous);
        updated.add(movie.id);
        return updated;
      });

      void loadStreamingProviders(movie);
    }
  });
}, [movies, loadedProviderMovies, loadStreamingProviders]);



  return {
    model,
    query,
    setQuery,
    movies,
    loading,
    error,
    handleSearch,
    loadInitialMovies,
    handleFavouriteClick,
    loadStreamingProviders,
    streamingProviders,
  };
};
