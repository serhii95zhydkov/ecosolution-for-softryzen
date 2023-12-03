import PropTypes from "prop-types";

import css from "./container.module.css";

const Container = ({ children, id = "home" }) => {
  return (
    <div className={css.container} id={id}>
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.any.isRequired,
};

export default Container;
