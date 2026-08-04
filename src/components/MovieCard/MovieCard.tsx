import type { Movie } from '../../services/omdbMovieService';
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
    const query = encodeURIComponent(`${movie.Title} watch online`);

    window.open(
      `https://www.google.com/search?q=${query}`,
      "_blank"
    );
  };

  return (
    <li className="movie-card">
      {movie.Poster && movie.Poster !== "N/A" ? (
        <img
          className="movie-card__poster"
          src={movie.Poster}
          alt={movie.Title}
        />
      ) : null}

      <div className="movie-card__content">
        <div>
          <h3 className="movie-card__title">
            {movie.Title}
          </h3>

          <p className="movie-card__meta">
            {movie.Year} · {movie.Type}
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