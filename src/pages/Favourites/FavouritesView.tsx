import MovieCard from '../../components/MovieCard/MovieCard';
import { useFavouritesViewModel } from './useFavouritesViewModel';
import type { Movie } from '../../services/tmdbMovieService';

export function FavouritesView() {
  const { model, favourites, loading, error, removeMovie } = useFavouritesViewModel();

  return (
    <section className="page-shell">
      <div className="page-header">
        <div>
          <p className="page-eyebrow">Saved favourites</p>
          <h1 className="page-title">Your selected movies</h1>
        </div>
      </div>

      {loading && <p className="page-status">Loading favourites...</p>}
      {error && <p className="page-status page-status--error">{error}</p>}

      {!loading && !error && favourites.length === 0 && (
        <div className="page-empty">No favourites yet — search a movie and add it to your list.</div>
      )}

      <div className="favourites-list">
        {favourites.map((movie) => (
          <article key={movie.id} className="favourites-item">
            <MovieCard movie={movie} />
            <button
              className="favourites-item__remove"
              type="button"
              onClick={() => void removeMovie(String(movie.id))}
            >
              Remove
            </button>
          </article>
        ))}
      </div>
    </section>
  );
}

export default FavouritesView;
