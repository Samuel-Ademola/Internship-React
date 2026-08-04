import type { Movie } from '../../services/omdbMovieService';

interface MovieCardProps {
  movie: Movie;
  onFavouriteClick?: () => void;
}

function MovieCard({ movie, onFavouriteClick }: MovieCardProps) {
  const handleWatchNow = () => {
  const query = encodeURIComponent(movie.Title);
  window.open(`https://www.justwatch.com/us/search?q=${query}`, '_blank');
};

  return (
    <li className="movie-card">
      {movie.Poster && movie.Poster !== 'N/A' ? (
        <img
          className="movie-card__poster"
          src={movie.Poster}
          alt={movie.Title}
        />
      ) : (
        <div className="movie-card__poster-placeholder">
          No Image
        </div>
      )}

      <div className="movie-card__content">
        <div>
          <h3 className="movie-card__title">{movie.Title}</h3>

          <p className="movie-card__meta">
            {movie.Year} • {movie.Type}
          </p>
        </div>

        <div className="movie-card__actions">
          <button
            className="movie-card__button movie-card__button--watch"
            type="button"
            onClick={handleWatchNow}
          >
            🎬 Watch Now
          </button>

          <button
            className="movie-card__button"
            type="button"
            onClick={onFavouriteClick}
          >
            ❤️ Favourite
          </button>
        </div>
      </div>
    </li>
  );
}

export default MovieCard;