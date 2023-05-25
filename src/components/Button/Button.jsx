import React from 'react';
import propTypes from 'prop-types';
import css from './Button.module.css';
const Button = ({ handleClick }) => {
  return (
    <div>
      <button className={css.Button_load} onClick={handleClick} type="button">
        Load more
      </button>
    </div>
  );
};
Button.propTypes = {
  handleClick: propTypes.func.isRequired,
};
export default Button;
