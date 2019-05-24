import React from 'react';
import PropTypes from 'prop-types';
import Reader from '../Reader/Reader';
import items from '../../publications';

const ReaderPage = props => {
  const { location, history } = props;
  if (location.search === '') {
    history.replace({
      pathname: location.pathname,
      search: `item=1`,
    });
    return null;
  }

  return (
    <div>
      <Reader items={items} />
    </div>
  );
};
ReaderPage.propTypes = {
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
export default ReaderPage;
