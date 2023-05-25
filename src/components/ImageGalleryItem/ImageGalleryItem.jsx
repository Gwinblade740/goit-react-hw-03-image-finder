import React, { Component } from 'react';
import css from './ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';
import propTypes from 'prop-types';
export class ImageGalleryItem extends Component {
  state = {
    isShowModal: false,
  };
  toggleClickImage = e => {
    this.setState(prevState => {
      return { isShowModal: !prevState.isShowModal };
    });
  };
  render() {
    const {
      img: { id, webformatURL, largeImageURL },
    } = this.props;
    const { isShowModal } = this.state;
    return (
      <>
        {isShowModal && (
          <Modal
            closeModal={this.toggleClickImage}
            largeImageURL={largeImageURL}
          ></Modal>
        )}
        <li
          key={id}
          onClick={this.toggleClickImage}
          className={css.ImageGalleryItem}
        >
          <img
            src={webformatURL}
            className={css.ImageGalleryItem_image}
            alt=""
          />
        </li>
      </>
    );
  }
}

ImageGalleryItem.propTypes = {
  img: propTypes.array,
};
export default ImageGalleryItem;
