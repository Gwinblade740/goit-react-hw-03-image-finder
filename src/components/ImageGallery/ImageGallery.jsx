import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import propTypes from 'prop-types';
import css from './ImageGallery.module.css';
const ImageGallery = ({ images }) => {
  return (
    <div>
      <ul className={css.ImageGallery}>
        {images.map(img => {
          return <ImageGalleryItem img={img}></ImageGalleryItem>;
        })}
      </ul>
    </div>
  );
};
ImageGallery.propTypes = {
  images: propTypes.array,
};
export default ImageGallery;
