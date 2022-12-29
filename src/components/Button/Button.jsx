import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./Button.module.css";

const Button = ({ onBackLink, onBtnContent }) => {
  return (
    <Link className={s.button} to={onBackLink}>
      {onBtnContent}
    </Link>
  );
};

export default Button;

Button.propTypes = {
  location: PropTypes.object.isRequired,
};
