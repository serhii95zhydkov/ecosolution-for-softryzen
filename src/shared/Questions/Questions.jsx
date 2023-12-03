import PropTypes from "prop-types";

import css from "./questions.module.css";

const Questions = ({ title, text, isOpen, onClick }) => {
  const styleTitle = isOpen
    ? `${css.q__title} ${css.active}`
    : `${css.q__title}`;
  const styleParagraph = isOpen
    ? `${css.q__text} ${css.active}`
    : `${css.q__text}`;

  return (
    <div className={css.question} onClick={onClick}>
      <h4 className={styleTitle}>{title}</h4>

      <p className={styleParagraph}>{text}</p>
    </div>
  );
};

Questions.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default Questions;
