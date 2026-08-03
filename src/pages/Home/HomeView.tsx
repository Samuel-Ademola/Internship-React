import MovieCard from '../../components/MovieCard/MovieCard';
import type { Movie } from '../../services/omdbMovieService';

interface HomeViewProps {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  onFavouriteClick: (movie: Movie) => void;
}

export function HomeView({ movies, loading, error, onFavouriteClick }: HomeViewProps) {
  return (
    <section className="page-shell">
      <div className="page-header">
        <div>
          <p className="page-eyebrow">Search the catalog</p>
          <h1 className="page-title">Discover your next favourite movie</h1>
          <p className="page-copy">
            Browse the OMDb collection, save favourites, and keep them synced to your account.
          </p>
        </div>
      </div>

      {loading && <p className="page-status">Loading movies...</p>}
      {error && <p className="page-status page-status--error">{error}</p>}

      <ul className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.imdbID}
            movie={movie}
            onFavouriteClick={() => onFavouriteClick(movie)}
          />
        ))}
      </ul>
    </section>
  );
}

export default HomeView;
