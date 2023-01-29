import React from 'react'
import { InfoPokemons } from '../helpers/InfoPokemons';
export const Card = (pokemons) => {

    const {name, url} = pokemons.data;
    const sprite = InfoPokemons(url);
    console.log(sprite);

  return (
      <>
        <div className="card" key={name}>
            <img src={sprite} className="card-img-top"></img>
            <div className="card-body">
             <h5 className="card-title">{name}</h5>
             <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
             <a href={url} className="btn btn-primary" target="_blank">Mas Information</a>
            </div>
        </div>
      </>
  )
}
