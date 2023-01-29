import React from 'react'
import { InfoPokemons } from '../helpers/InfoPokemons';
export const Card = (pokemons) => {

    const {name, url} = pokemons.data;
    const sprite = InfoPokemons(url); 
    console.log(sprite.descripcion);
  return (
      <>
      {
        ! sprite ?
        <div>Cargando</div>
        :
      
        <div className="card" key={name}>
            <img src={sprite.datos} className="card-img-top" alt='Img pokemon' />
            <div className="card-body">
             <h5 className="card-title">{name}</h5>
             {
              !sprite.descripcion ?
              <p className="card-text">Información no encontrada</p>
              :
              <p className="card-text">{sprite.descripcion}</p>
             }
             <a href={url} className="btn btn-primary">Mas Information</a>
            </div>
        </div>
        }
      </>
  )
}
