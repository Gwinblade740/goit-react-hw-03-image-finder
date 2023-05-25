import React, { Component } from 'react';
import css from './Searchbar.module.css';
import propTypes from 'prop-types';
export default class Searchbar extends Component {
  state = {
    value: '',
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ value });
  };
  handleSubmit = e => {
    e.preventDefault();
    if (this.state.value.trim() !== '') {
      this.props.onSubmit(this.state.value);
    }

    this.setState({ value: '' });
  };
  render() {
    return (
      <div>
        <header className={css.search_bar}>
          <form className={css.SearchForm} onSubmit={this.handleSubmit}>
            <button type="submit" className={css.SearchFormButton}>
              <span className={css.SearchFormButtonLabel}>Search</span>
            </button>

            <input
              className={css.SearchForm_input}
              name="search"
              type="text"
              value={this.state.value}
              onChange={this.handleChange}
              autoComplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </form>
        </header>
      </div>
    );
  }
}

export { Searchbar };

Searchbar.propTypes = {
  onSubmit: propTypes.func,
};
