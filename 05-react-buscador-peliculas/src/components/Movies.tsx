import type { Movie } from "../classes/Movie"

type ListOfMoviesProps = {
    Movies: Movie[]
}

function ListOfMovies(props: ListOfMoviesProps) {
    const {Movies} = props;
    return (
        <ul className="movies">
            {
            Movies.map(movie => (
                <li className="movie" key={movie.imdbID}>
                <h3>{movie.Title}</h3>
                <p>{movie.Year} - {movie.Type}</p>
                <img src={movie.Poster} alt={movie.Title} />
                </li>
            ))
            }
        </ul>
    );
}

function NoResults(){
    return (
        <p>'No se ha podido encontrar la pelicula deseada'</p>
    )
}

export function Movies(props: ListOfMoviesProps){
    const hasMovies = props.Movies.length>0;
    return (
        hasMovies 
        ? <ListOfMovies Movies={props.Movies} />
        : <NoResults />
    )
}