import { useEffect, useState, useCallback } from 'react';
import type { Movie } from '../../services/tmdbMovieService';
import { createFavouritesModel, deleteFavourite, loadFavourites } from './FavouritesModel';
import { useAuth } from '../../context/AuthContext';

export const useFavouritesViewModel = () => {
  const model = createFavouritesModel();
  const [favourites, setFavourites] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { user } = useAuth();

  const loadMovies = useCallback(async () => {
    if (!user?.uid) {
      setError('Unable to load favourites without a signed-in user.');
      setFavourites([]);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const movies = await loadFavourites(user.uid);
      setFavourites(movies);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to load favourites.');
      setFavourites([]);
    } finally {
      setLoading(false);
    }
  }, [user?.uid]);

  const removeMovie = useCallback(
    async (imdbID: string) => {
      if (!user?.uid) {
        setError('Unable to remove favourites without a signed-in user.');
        return;
      }

      setLoading(true);
      setError(null);

      try {
        await deleteFavourite(user.uid, imdbID);
        setFavourites((current) => current.filter((movie) => String(movie.id) !== imdbID));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to remove favourite.');
      } finally {
        setLoading(false);
      }
    },
    [user?.uid]
  );

  useEffect(() => {
    void loadMovies();
  }, [loadMovies]);

  return {
    model,
    favourites,
    loading,
    error,
    loadMovies,
    removeMovie,
  };
};
