import { searchMovies, getPopularMovies, type Movie } from '../../services/tmdbMovieService';
import type { HomeModel } from '../../types/home';

const TARGET_MOVIE_COUNT = 20;

export const createHomeModel = (): HomeModel => ({
  title: 'Home',
});

export async function getMovies(query: string): Promise<Movie[]> {
  const cleanedQuery = query.trim();

  if (cleanedQuery.length === 0) {
    return initialMovies();
  }

  if (cleanedQuery.length < 2) {
    return [];
  }

  return searchMovies(cleanedQuery);
}

export async function initialMovies(): Promise<Movie[]> {
  const movies = await getPopularMovies();

  if (movies.length === 0) {
    throw new Error('Unable to load movies.');
  }

  return movies.slice(0, TARGET_MOVIE_COUNT);
}

export type { HomeModel };