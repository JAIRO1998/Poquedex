import React, { useEffect, useState }from 'react'

export const InfoPokemons =(url) => {

    const [datos, setDatos] = useState();

    useEffect(() => {
        fetchApi();
    }, [url])
    
    const fetchApi = async() => {
    const link = url
    const resp = await fetch(link);
    const data  =await resp.json();
    const sprite = data.sprites.other.home.front_default;
    setDatos(sprite);
   }
   
   return (datos);

}
