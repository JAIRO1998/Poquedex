import { useEffect, useState } from 'react'

export const InfoPokemons =(url) => {

    const [datos, setDatos] = useState();
    const [descripcion, setDescripcion] = useState();

    useEffect(() => {
        fetchApi();
    }, [url])
    
    const fetchApi = async() => {
    const link = url
    const resp = await fetch(link);
    const data  = await resp.json();
    const sprite = data.sprites.other.home.front_default;
    const idPokemon = data.id;
    fetchDescripcion(idPokemon)
    setDatos(sprite);
   }

   const fetchDescripcion = async(id) => {
    const resp = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    const data  = await resp.json();
    const description = data.flavor_text_entries;
    const pokeDesc = description.filter(desc => desc.language.name ==='es' && desc.version.name === "shield");
    console.log(data);
    setDescripcion(pokeDesc[0].flavor_text);
   }

   return ({datos, descripcion});

}
