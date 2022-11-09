import PropTypes from "prop-types";
import s from "./Title.module.css";

const Title = ({ text }) => {
  return <h1 className={s.title}>{text}</h1>;
};

export default Title;

Title.propTypes = {
  text: PropTypes.string.isRequired,
};
