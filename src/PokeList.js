import React from 'react';
import PokeItem from './PokeItem.js';

function PokeList(props){
  function createList(){
    return props.pokemonList.map(poke => {
      return <PokeItem pokeItem={poke} key={poke.id}/>
    })
  }
  return(
    <div className="poke-list">
      {
        createList()
      }
    </div>
  )
}

export default PokeList;
