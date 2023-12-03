import PropTypes from "prop-types";

import css from "./title.module.css";

const Title = ({ text }) => {
  return <h2 className={css.title}>{text}</h2>;
};

Title.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Title;
