import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import * as bookShelfAPI from "../../services/movieshelf-api";
import s from "./MoviesList.module.css";

const MoviesList = ({ movies, location, btnName }) => {
  return (
    <ul className={s.list}>
      {movies.map((movie) => (
        <li key={movie.id} className={s.item}>
          <Link
            to={
              location.pathname === "/movies"
                ? `${movie.id}`
                : `movies/${movie.id}`
            }
            state={{ from: location, label: "Back to trending" }}
          >
            <img
              className={s.itemImg}
              src={
                movie.poster_path
                  ? `${bookShelfAPI.IMAGE_URL}${movie.poster_path}`
                  : null
              }
              alt={movie.title}
            />
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default MoviesList;

MoviesList.propTypes = {
  movies: PropTypes.array.isRequired,
  btnName: PropTypes.string.isRequired,
  location: PropTypes.object.isRequired,
};
