import React from 'react';

const Card = ({id, name, type1, type2}) => (
  <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 align-items w-20">
    <img alt='image' src={`https://assets.pokemon.com/assets/cms2/img/pokedex/full/${id}.png`}/>
    <div className="tc">
      <h2>{name}</h2>
      <p>Type: {type1}</p>
      {type2 ? <p>Type: {type2}</p> : <p>Type 2: None</p>}
    </div>
  </div>
);

export default Card;