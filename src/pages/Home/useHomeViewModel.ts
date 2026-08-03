import { useCallback, useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import { createHomeModel, getMovies, initialMovies, type HomeModel } from './HomeModel';
import { saveFavourite as saveFavouriteMovie } from '../Favourites/FavouritesModel';
import type { Movie } from '../../services/omdbMovieService';

export const useHomeViewModel = () => {
  const [model] = useState<HomeModel>(() => createHomeModel());
  const [query, setQuery] = useState('');
  const [movies, setMovies] = useState<Movie[]>([]);
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
    try {
      await saveFavouriteMovie(movie);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save favourite movie.');
    }
  }, []);

  const handleFavouriteClick = useCallback(
    async (movie: Movie) => {
      if (!user) {
        navigate('/auth');
        return;
      }

      await saveFavourite(movie);
    },
    [navigate, saveFavourite, user],
  );

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
  };
};
