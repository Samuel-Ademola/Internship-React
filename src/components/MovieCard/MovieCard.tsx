import type { Movie } from '../../services/omdbMovieService';

interface MovieCardProps {
  movie: Movie;
  onFavouriteClick?: () => void;
}

function MovieCard({ movie, onFavouriteClick }: MovieCardProps) {
  return (
    <li className="movie-card">
      {movie.Poster && movie.Poster !== 'N/A' ? (
        <img className="movie-card__poster" src={movie.Poster} alt={movie.Title} />
      ) : null}
      <div className="movie-card__content">
        <div>
          <h3 className="movie-card__title">{movie.Title}</h3>
          <p className="movie-card__meta">{movie.Year} · {movie.Type}</p>
        </div>
        <button
          className="movie-card__button"
          type="button"
          onClick={onFavouriteClick}
        >
          ❤️ Favourite
        </button>
      </div>
    </li>
  );
}

export default MovieCard;
