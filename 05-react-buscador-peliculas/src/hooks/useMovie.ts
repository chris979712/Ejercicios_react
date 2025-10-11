import { useState, useRef, useMemo, useCallback} from 'react';
import withoutMovies from '../mocks/no-results.json'
import type {Movie, MoviesResponse} from '../classes/Movie'
import { SearchMovie } from '../services/Movie';

export function useMovies(search: string, sort: boolean){
    const [responseMovies, setResponseMovies] = useState<MoviesResponse | null>(null);
    const moviesData = responseMovies?.Search ?? [];
    const mappedMovies: Movie[] = moviesData;
    const previousSearch = useRef(search);

    const getMovies = useCallback(
        async (search: string) => {
            if(previousSearch.current === search) return
            if(search){
                const dataObtained = await SearchMovie(search);
                setResponseMovies(dataObtained)
                previousSearch.current = search;
            }else{
                setResponseMovies(withoutMovies as MoviesResponse)
            }
        }, [])

    const sortedMovies = useMemo(() => {
        return sort
        ? [...mappedMovies].sort((a,b) => a.Title.localeCompare(b.Title))
        : mappedMovies
    }, [sort, mappedMovies])

    return {movies: sortedMovies, getMovies}
}