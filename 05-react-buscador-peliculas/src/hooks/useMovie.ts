import responseMovies from '../mocks/with-results.json'
//import withoutMovies from './mocks/no-results.json'


export function useMovies(){
    const moviesData = responseMovies.Search;
    const mappedMovies = moviesData?.map(movie  => ({
        id: movie.imdbID,
        title: movie.Title,
        year: movie.Year,
        type: movie.Type,
        poster: movie.Poster
    }))
    return {movies: mappedMovies}
}