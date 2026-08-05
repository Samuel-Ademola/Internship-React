import type { Movie } from '../../services/tmdbMovieService';
import type { StreamingProvider } from '../../types/streaming';
import StreamingProviders from '../StreamingProviders/StreamingProviders';

interface MovieCardProps {
  movie: Movie;
  onFavouriteClick?: () => void;
  providers?: StreamingProvider[];
}

function MovieCard({
  movie,
  onFavouriteClick,
  providers = [],
}: MovieCardProps) {
  const handleWatchNow = () => {
    const query = encodeURIComponent(`${movie.title} watch online`);

    window.open(
      `https://www.google.com/search?q=${query}`,
      "_blank"
    );
  };

  return (
    <li className="movie-card">
      {movie.poster_path && (
<img
 className="movie-card__poster"
 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
 alt={movie.title}
/>
)}

      <div className="movie-card__content">
        <div>
          <h3 className="movie-card__title">
            {movie.title}
            </h3>

          <p className="movie-card__meta">
            {movie.release_date?.split("-")[0]}
          </p>
        </div>

        <div className="movie-card__actions">

          <button
            className="movie-card__button"
            type="button"
            onClick={onFavouriteClick}
          >
            ❤️ Favourite
          </button>

          <button
            className="movie-card__button movie-card__button--watch"
            type="button"
            onClick={handleWatchNow}
          >
            ▶ Watch Now
          </button>

        </div>
      </div>

      <StreamingProviders providers={providers} />

    </li>
  );
}

export default MovieCard;