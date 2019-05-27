import React from 'react';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import queryString from 'query-string';
import Publication from './Publication/Publication';
import Counter from './Counter/Counter';
import Controls from './Controls/Controls';

import styles from './Reader.module.css';
import Modal from '../Modal/Modal';
import ErrorRangePage from './ErrorRangePage/ErrorRangePage';

const getPageFromProps = props => queryString.parse(props.location.search).item;
class Reader extends React.Component {
  state = {
    showModal: false,
  };

  handelToggleModal = () => {
    this.setState(state => ({ showModal: !state.showModal }));
  };

  prevPublic = () => {
    const { location, history } = this.props;
    const index = +getPageFromProps(this.props);
    history.push({
      pathname: location.pathname,
      search: `item=${index - 1}`,
    });
  };

  nextPublic = () => {
    const { location, history } = this.props;
    const index = +getPageFromProps(this.props);
    history.push({
      pathname: location.pathname,
      search: `item=${index + 1}`,
    });
  };

  render() {
    const { items } = this.props;
    const { showModal } = this.state;
    const index = getPageFromProps(this.props) - 1;
    const length = items.length - 1;
    if (index >= items.length || index < 0) {
      return <ErrorRangePage />;
    }
    return (
      <div className={styles.reader}>
        <Publication item={items[index]} onOpen={this.handelToggleModal} />
        <Counter index={index} length={length} />
        <Controls
          prevPublic={this.prevPublic}
          nextPublic={this.nextPublic}
          length={length}
          index={index}
        />
        {showModal && (
          <Modal onClose={this.handelToggleModal}>
            <Publication item={items[index]} isShowAll />
          </Modal>
        )}
      </div>
    );
  }
}
Reader.propTypes = {
  items: PropTypes.array.isRequired,
  location: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
};
export default withRouter(Reader);
