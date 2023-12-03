import PropTypes from "prop-types";

import css from "./button.module.css";

const Button = ({ text, active = false }) => {
  const style = active ? `${css.button} ${css.active}` : `${css.button}`;
  return (
    <button className={style}>
      <h3>{text}</h3>
      <svg
        width="14"
        height="14"
        viewBox="0 0 14 15"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={css.ellips}
      >
        <circle cx="7" cy="7.5" r="7" />
        <path
          d="M9.27588 8.31006L6.99963 10.3334L4.72338 8.31006"
          stroke="#173D33"
          strokeWidth="0.833607"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M6.99951 4.66675L6.99951 10.2767"
          stroke="#173D33"
          strokeWidth="0.833607"
          strokeMiterlimit="10"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
};

Button.propTypes = {
  text: PropTypes.string.isRequired,
};

export default Button;
