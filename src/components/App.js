import React, { Component } from 'react';

import CardList from './CardList';
import SearchBox from './SearchBox';

import pokemons from '../pokemons';

class App extends Component {
  constructor() {
    super();
    this.state = {
      pokemons: pokemons,
      searchField: '',
      dropdownField: ''
    };
  }

  onSearchChange = (event) => { // need to use arrow functions to allow this to access state
    this.setState({ searchField: event.target.value });
  }

  onDropdownChange = (event) => {
    this.setState({ dropdownField: event.target.value });
  }

  render() {
    const filteredPokemons = this.state.pokemons.filter(pokemon => {
      return pokemon.name.toLowerCase().includes(this.state.searchField.toLowerCase())
    });

    return (
      <div className="tc">
        <h1>Pokemon Finder</h1>
        <SearchBox  searchChange={this.onSearchChange} dropdownChange={ this.dropdownChange } />
        <CardList pokemons={filteredPokemons} />
      </div>
    );
  }
};
  
export default App;