import React, { Component } from 'react';

export default class SearchForm extends Component {
      
  handleSubmit = e => {
    e.preventDefault();
    this.props.onBusqueda(this.input.value);
    e.currentTarget.reset();
  }
  
  render() {  
    return (
      <form className="search-form" onSubmit={this.handleSubmit} >
        <label className="is-hidden" htmlFor="search">Buscar</label>
        <input type="search"
               name="search"
               ref={input => this.input = input}
               placeholder="Buscar..." />
        <button type="submit" id="submit" className="search-button"><i className="material-icons icn-search">buscar</i></button>
      </form>      
    );
  }
}