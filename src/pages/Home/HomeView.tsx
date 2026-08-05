import MovieCard from '../../components/MovieCard/MovieCard';
import type { Movie } from '../../services/tmdbMovieService';
import type { StreamingProvider } from '../../types/streaming';

interface HomeViewProps {
  movies: Movie[];
  loading: boolean;
  error: string | null;
  onFavouriteClick: (movie: Movie) => void;
  streamingProviders: Record<string, StreamingProvider[]>;
}

export function HomeView({
  movies,
  loading,
  error,
  onFavouriteClick,
  streamingProviders,
}: HomeViewProps) {
  return (
    <section className="page-shell">
      <div className="page-header">
        <div>
          <p className="page-eyebrow">Latest releases</p>

          <h1 className="page-title">
            Discover your next favourite movie
          </h1>

          <p className="page-copy">
            Browse the TMDB collection, save favourites, and find where movies are available to stream.
          </p>
        </div>
      </div>

      {loading && (
        <p className="page-status">
          Loading movies...
        </p>
      )}

      {error && (
        <p className="page-status page-status--error">
          {error}
        </p>
      )}

      <ul className="movie-grid">
        {movies.map((movie) => (
          <MovieCard
            key={movie.id}
            movie={movie}
            onFavouriteClick={() => onFavouriteClick(movie)}
            providers={streamingProviders[String(movie.id)] || []}
          />
        ))}
      </ul>
    </section>
  );
}

export default HomeView;