import type { Movie } from '../../services/tmdbMovieService';
import { addFavourite, getFavourites, removeFavourite } from '../../services/firebaseService';
import type { FavouritesModel } from '../../types/favourites';

export const createFavouritesModel = (): FavouritesModel => ({
  title: 'Favourites',
});

export async function loadFavourites(userId: string): Promise<Movie[]> {
  return getFavourites(userId);
}

export async function saveFavourite(userId: string, movie: Movie): Promise<void> {
  await addFavourite(userId, movie);
}

export async function deleteFavourite(userId: string, imdbID: string): Promise<void> {
  await removeFavourite(userId, imdbID);
}
