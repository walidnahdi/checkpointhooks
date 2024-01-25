
import './App.css';
import MoviesList from './components/MoviesList';
import { moviesData } from './components/MoviesData';
import { useState } from 'react';
import AddMovies from './components/AddMovies';
import SearchMovie from './components/SearchMovie';


function App() {
  const [moviesList, setMoviesList]= useState(moviesData);
  const [nameSearch, setNameSearch] = useState("");
  
  //function add
  const addNewMovie = (newMovie) => {
  setMoviesList ([...moviesList, newMovie])
  };
  return (
    <div style={{backgroundColor:'#ccd5df'}} className="App">
      
       <SearchMovie nameSearch ={setNameSearch} moviesList ={moviesList}/>
       <AddMovies addNewMovie={addNewMovie}/>
      <MoviesList moviesList ={moviesList} />
      
    </div>
  );
}

export default App;
