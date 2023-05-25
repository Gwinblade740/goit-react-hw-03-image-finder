import React, { Component } from 'react';
import css from './Modal.module.css';
import propTypes from 'prop-types';
export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener('keydown', this.handleEsc);
  }
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleEsc);
  }
  handleEsc = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };
  onClick = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };
  render() {
    const { largeImageURL } = this.props;
    return (
      <div class={css.Overlay} onClick={this.onClick}>
        <div class={css.Modal}>
          <img src={largeImageURL} className={css.ModalImg} alt="" />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  largeImageURL: propTypes.string.isRequired,
};
