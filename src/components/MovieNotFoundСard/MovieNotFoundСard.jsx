import PropTypes from "prop-types";
import errorImg from "../../images/error.jpg";
import s from "./MovieNotFoundСard.module.css";

const MovieNotFoundСard = ({ message }) => {
  return (
    <div className={s.card} role="alert">
      <img src={errorImg} width="240" alt="sadcat" />
      <h2>{message}</h2>
    </div>
  );
};

export default MovieNotFoundСard;

MovieNotFoundСard.propTypes = {
  message: PropTypes.string.isRequired,
};
