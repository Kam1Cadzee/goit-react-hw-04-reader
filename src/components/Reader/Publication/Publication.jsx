import React from 'react';
import PropTypes from 'prop-types';
import styles from './Publication.module.css';

const MAX_LENGHT = 400;
const Publication = ({ item, onOpen, isShowAll = false }) => {
  const { text, title } = item;
  const isBigText = text.length > MAX_LENGHT;
  return (
    <section className={styles.publication}>
      <h2>{title}</h2>
      {!isShowAll && isBigText ? (
        <p>
          {text.slice(0, MAX_LENGHT)}...
          <button type="button" onClick={onOpen}>
            Read all
          </button>
        </p>
      ) : (
        <p>{text}</p>
      )}
    </section>
  );
};
Publication.defaultProps = {
  isShowAll: false,
};
Publication.propTypes = {
  item: PropTypes.shape({
    text: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
  onOpen: PropTypes.func.isRequired,
  isShowAll: PropTypes.bool,
};
export default Publication;
