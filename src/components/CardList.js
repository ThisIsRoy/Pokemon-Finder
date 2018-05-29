import React from 'react';
import Card from './Card';

const CardList = ({ pokemons }) => {
  const cardArray = pokemons.map((pokemon, idx) => {
    return <Card key={idx} id={pokemons[idx].id} name={pokemons[idx].name} type1={pokemons[idx].type1} type2={pokemons[idx].type2} />
  });

  return (
    <div>
      {cardArray}
    </div>
  );
};

// (
//   <div>
//     <Card id={pokemons[0].id} name={pokemons[0].name} type1={pokemons[0].type1} type2={pokemons[0].type2} />
//     <Card id={pokemons[1].id} name={pokemons[1].name} type1={pokemons[1].type1} type2={pokemons[1].type2} />
//     <Card id={pokemons[2].id} name={pokemons[2].name} type1={pokemons[2].type1} type2={pokemons[2].type2} />
//   </div>
// );

export default CardList;