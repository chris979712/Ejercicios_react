import './App.css'
import { useSearch } from './hooks/useSearch';
import { Movies } from './components/Movies';
import { useMovies } from './hooks/useMovie';
//API_key= dbf0c205

function App() {
  const {movies} = useMovies();
  const {error, query, setQuery} = useSearch();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(query)
  }

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  }

  return (
    <div className="page">
      <header>
        <h1>Buscador de películas</h1>
        <form className='form' onSubmit={handleSubmit}>
          <input onChange={handleChange} name="query" type="text" placeholder='Avengers, Spiderman, etc...'/>
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
