import * as bookShelfAPI from "../../services/movieshelf-api";
import PropTypes from "prop-types";
import s from "./MovieСard.module.css";

const MovieСard = ({ movie }) => {
  const reliseDate = movie.release_date.split("-")[0];
  const voteAverage = movie.vote_average * 10;
  return (
    <div className={s.card}>
      <img
        className={s.img}
        src={
          movie.poster_path
            ? `${bookShelfAPI.IMAGE_URL}${movie.poster_path}`
            : null
        }
        alt={movie.title}
      />
      <div className={s.info}>
        <h2>
          {movie.title} <span>{reliseDate}</span>
        </h2>
        <h3>Overview</h3>
        <p>{movie.overview}</p>
        <h3>
          Genres <span>{voteAverage}%</span>
        </h3>
      </div>
    </div>
  );
};

export default MovieСard;

MovieСard.propTypes = {
  movie: PropTypes.object.isRequired,
};
