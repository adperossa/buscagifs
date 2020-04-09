import React, { Component } from 'react';
import './App.css';
import SearchForm from './Components/SearchForm';
import GifList from './Components/GifList';

//TODO: crear fn reusable para evitar codigo duplicado entre busqueda y carga inicial
//      unificar ingles en metodos y variables a lo largo del codigo

export default class App extends Component {
  
  constructor() {
    super();

    this.state = {
      gifs: [],
      cargando: true
    }
  } 

  componentDidMount() {
    fetch('http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC&limit=24')
      .then(res => res.json())
      .then(responseData => this.setState({
        gifs: responseData.data,
        cargando: false
      }))
      .catch(error => console.log(error));
  }

  ejecutarBusqueda = (query) => {
    fetch(`http://api.giphy.com/v1/gifs/search?api_key=dc6zaTOxFJmzC&q=${query}&limit=24`)
      .then(res => res.json())
      .then(responseData => this.setState({
        gifs: responseData.data,
        cargando: false
      }))
      .catch(error => console.log(error));
  }

  render() { 
    return (
      <div>
        <div className="main-header">
          <div className="inner">
            <h1 className="main-title">BuscaGifs</h1>
            <SearchForm onBusqueda={this.ejecutarBusqueda}/>      
          </div>   
        </div>    
        <div className="main-content">
          {
            this.state.cargando ? 
              <p>Cargando.....</p>
            :
              <GifList data={this.state.gifs}/>
          }
          
        </div>
      </div>
    );
  }
}
