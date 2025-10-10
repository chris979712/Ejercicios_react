type Movie = {
    title?: string
    year?: string
    id?: string
    type?: string
    poster?: string 
}

type ListOfMoviesProps = {
    Movies: Movie[]
}

function ListOfMovies(props: ListOfMoviesProps) {
    const {Movies} = props;
    return (
        <ul>
            {
            Movies.map(movie => (
                <li key={movie.id}>
                <h3>{movie.title}</h3>
                <p>{movie.year} - {movie.type}</p>
                <img src={movie.poster} alt={movie.title} />
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