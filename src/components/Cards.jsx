import React from 'react'
import { Card } from './Card'
import { Request } from "../helpers/Request";

export const Cards = () => {
  //Se solicita el llamado al API general que trae la lista de pokimons
  const datos  = Request();
  console.log(datos)
  return (
    <div className="cards">
        { !datos ? 
            <div className="alert alert-info text-center">
                Loading...
            </div>
            :
            datos.map((pokemons) =>
              <div>
                <Card key={pokemons.name} data={pokemons}/>
              </div>)
        }   
    </div>
  )
}
