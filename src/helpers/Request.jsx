import React, { useEffect, useState }from 'react'

export const Request =() => {

    const [datos, setDatos] = useState();

    useEffect(() => {
        fetchApi();
    }, [])
    
    const fetchApi = async() => {
    const url = 'https://pokeapi.co/api/v2/pokemon/?limit=151&offset=0'
    const resp = await fetch(url);
    const data  =await resp.json();
    const pokemons = data.results;
    setDatos(pokemons)
   }

   return (datos);

}
