import React from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

const Controls = ({ prevPublic, nextPublic, length, index }) => {
  return (
    <section className={styles.controls}>
      <button
        className={styles.button}
        type="button"
        onClick={prevPublic}
        disabled={index === 0}
      >
        Назад
      </button>
      <button
        className={styles.button}
        type="button"
        onClick={nextPublic}
        disabled={index === length}
      >
        Вперед
      </button>
    </section>
  );
};

Controls.propTypes = {
  prevPublic: PropTypes.func.isRequired,
  nextPublic: PropTypes.func.isRequired,
  length: PropTypes.number.isRequired,
  index: PropTypes.number.isRequired,
};
export default Controls;
