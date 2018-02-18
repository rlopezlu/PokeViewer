import React , {Component} from 'react';

class PokeItem extends Component{
  constructor(props){
    super(props)
    this.state = {imgSrc:this.props.pokeItem.sprites.front_default}
  }

  onEnter = () =>{
    this.setState({
      imgSrc: this.props.pokeItem.sprites.back_default
    })
    console.log("enter element");
  }

  onLeave = () =>{
    this.setState({
      imgSrc: this.props.pokeItem.sprites.front_default
    })
    console.log("leave element");
  }

  render(){
    let pokeItem = this.props.pokeItem;
    return(
      <div className="poke-item">
        <img
          onMouseEnter={this.onEnter}
          onMouseLeave={this.onLeave}
          src={this.state.imgSrc} alt={pokeItem.id}
        />
        {/* <img src={pokeItem.sprites.back_default} alt={pokeItem.id} /> */}
        <p>Name: {pokeItem.name}</p>
        <p>ID: {pokeItem.id}</p>
        <p>Weight: {pokeItem.weight}</p>
        <p>Height: {pokeItem.height}</p>
        <p>Type: {pokeItem.types[0].type.name}</p>
        <p>Add to party</p>
      </div>
    )
  }
}

export default PokeItem;
