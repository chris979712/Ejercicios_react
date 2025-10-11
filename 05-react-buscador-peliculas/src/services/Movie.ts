import type { MoviesResponse } from "../classes/Movie";

export async function SearchMovie(query: string){
    let dataObtained: MoviesResponse = {}; 
    try
    {
        const responseFetch = await fetch(`https://www.omdbapi.com/?apikey=dbf0c205&s=${query}`);
        if( responseFetch.status === 200){
            dataObtained = await responseFetch.json();
        }else if(responseFetch.status === 404){
            dataObtained = {
                Response: "No se ha encontrado la película a buscar"
            }
        }
    }
    catch(error)
    {
        console.log('Error al buscar la pelicula deseada: '+error)
        dataObtained = {
            Response: "Ha ocurrido un error al intentar obtener los datos de la película del servidor"
        }
    }
    return dataObtained;
} 
