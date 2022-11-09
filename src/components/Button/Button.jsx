import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import s from "./Button.module.css";

const Button = ({ onBackLink, location }) => {
  return (
    <Link className={s.button} to={onBackLink}>
      {location?.state?.label ?? "Back"}
    </Link>
  );
};

export default Button;

Button.propTypes = {
  location: PropTypes.object.isRequired,
  onBackLink: PropTypes.object.isRequired,
};
