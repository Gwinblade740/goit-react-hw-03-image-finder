import Searchbar from './Searchbar/Searchbar';
import React, { Component } from 'react';
import fetchFunc from './ImageInfo/ImageInfo';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import { Loader } from './Loader/Loader';
export default class App extends Component {
  state = {
    value: '',
    images: null,
    page: 1,
    per_page: 12,
    isLoading: false,
    isShowBtn: false,
  };
  componentDidUpdate(prevProps, prevState) {
    if (
      prevState.page !== this.state.page ||
      prevState.value !== this.state.value
    ) {
      this.setState({ isLoading: true });
      fetchFunc(this.state.value, this.state.per_page, this.state.page)
        .then(images => {
          const hits = images.hits.map(
            ({ id, webformatURL, largeImageURL }) => {
              return { id, webformatURL, largeImageURL };
            }
          );
          this.setState(prevState => {
            return {
              images: prevState.images ? [...prevState.images, ...hits] : hits,
              isShowBtn: this.state.page < Math.ceil(images.totalHits / 12),
            };
          });
        })
        .finally(() => this.setState({ isLoading: false }));
    }
  }
  handleFormSubmit = cardTitle => {
    this.setState({ value: cardTitle, images: null, page: 1 });
  };
  handleClick = () => {
    this.setState(prevState => {
      return { page: prevState.page + 1 };
    });
  };
  render() {
    const { images, isShowBtn, isLoading } = this.state;
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit}></Searchbar>
        {images && <ImageGallery images={images}></ImageGallery>}
        {isLoading && <Loader></Loader>}
        {images?.length > 0 && isShowBtn && (
          <Button handleClick={this.handleClick}></Button>
        )}
      </div>
    );
  }
}

export { App };
