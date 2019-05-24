import React from 'react';
import css from './Modal.module.css';

class Modal extends React.Component {
  refBackdrop = React.createRef();

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  componentWillUnmount() {
    window.addEventListener('keydown', this.handleKeyPress);
  }

  handleKeyPress = e => {
    if (e.code !== 'Escape') return;

    const { onClose } = this.props;
    onClose();
  };

  handleBackdropClick = e => {
    const { current } = this.refBackdrop;

    if (current && e.target !== current) {
      return;
    }

    const { onClose } = this.props;
    onClose();
  };

  render() {
    const { children } = this.props;
    return (
      <div
        className={css.backdrop}
        ref={this.refBackdrop}
        onClick={this.handleBackdropClick}
      >
        <div className={css.modal}>{children}</div>
      </div>
    );
  }
}

export default Modal;
