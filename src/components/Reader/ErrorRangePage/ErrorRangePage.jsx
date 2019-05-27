import React from 'react';
import css from './ErrorRangePage.module.css';
import { NavLink } from 'react-router-dom';

const ErrorRangePage = () => {
  return (
    <div>
      <p className={css.title}>Такой страници нету</p>
      <NavLink className={css.btn} to="/reader">
        Вернуться
      </NavLink>
    </div>
  );
};

export default ErrorRangePage;
