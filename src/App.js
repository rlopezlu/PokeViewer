import React, { Component } from 'react';
// import logo from './img/logo.svg';
import './App.css';
import PokeList from './PokeList.js'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      pokeList: []
    }
  }

  componentDidMount(){
    let startIndex = 101;
    let amount = 5;
    console.log("mounted");
    fetch(`/pokeList/${startIndex}/${amount}`)
      .then(response => {return response.json()})
      .then(data => {
        console.log("got the list of data");
        console.log(data);
        this.setState({
          pokeList: data
        })
      })
      .catch(error => {
        console.log("error fetching data");
        console.log(error.response);
      })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Pokedex</h1>
        </header>
        <PokeList pokemonList={this.state.pokeList}/>
      </div>
    );
  }
}

export default App;
