import './App.css'
import { useSearch } from './hooks/useSearch';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovie';
import debounce from 'just-debounce-it';
import React, { useState, useCallback} from 'react';

function App() {
  const [sort, setSort] = useState(false);
  const {error, query, setQuery} = useSearch();
  const {movies, getMovies} = useMovies(query, sort);
  
  const debouncedGetMovies = useCallback((query: string) => {
    debounce(() => {
      getMovies(query);
    }, 500);
  }, [getMovies]);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    getMovies(query);
  }

  const handleSort = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSort(event.target.checked)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newSearch = event.target.value;
    setQuery(newSearch);
    debouncedGetMovies(newSearch)
    setQuery(event.target.value);
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} name="query" type="text" placeholder='Avengers, Spiderman, etc...'/>
          <input type="checkbox" onChange={handleSort} checked={sort} />
          <button type='submit'>Buscar</button>
        </form>
        {error && <p style={{color:'red'}}>{error}</p>}
      </header>
      <main>
        <Movies Movies={movies}/>
      </main>
    </div>
  )
}

export default App
