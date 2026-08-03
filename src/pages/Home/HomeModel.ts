import { searchMovies, type Movie } from '../../services/omdbMovieService';
import type { HomeModel } from '../../types/home';

const SEED_KEYWORDS = [
  'Batman',
  'Avengers',
  'Harry Potter',
  'Star Wars',
  'Spider-Man',
  'Marvel',
  'Disney',
  'Matrix',
  'Lord of the Rings',
  'Fast',
  'Mission Impossible',
  'Pixar',
  'Horror',
  'Comedy',
  'Action',
];

const TARGET_MOVIE_COUNT = 20;

function shuffle<T>(items: T[]): T[] {
  const clonedItems = [...items];

  for (let index = clonedItems.length - 1; index > 0; index -= 1) {
    const randomIndex = Math.floor(Math.random() * (index + 1));
    [clonedItems[index], clonedItems[randomIndex]] = [clonedItems[randomIndex], clonedItems[index]];
  }

  return clonedItems;
}

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
  const keywordPool = shuffle(SEED_KEYWORDS);
  const searchResults = await Promise.allSettled(keywordPool.map((keyword) => searchMovies(keyword)));
  const successfulResults = searchResults
    .filter((result): result is PromiseFulfilledResult<Movie[]> => result.status === 'fulfilled')
    .flatMap((result) => result.value);

  const uniqueMoviesMap = new Map<string, Movie>();
  successfulResults.forEach((movie) => {
    if (!uniqueMoviesMap.has(movie.imdbID)) {
      uniqueMoviesMap.set(movie.imdbID, movie);
    }
  });

  const uniqueMovies = shuffle(Array.from(uniqueMoviesMap.values())).slice(0, TARGET_MOVIE_COUNT);

  if (uniqueMovies.length === 0) {
    throw new Error('Unable to load initial movies. Please verify your OMDb API key and try again.');
  }

  return uniqueMovies;
}

export type { HomeModel };