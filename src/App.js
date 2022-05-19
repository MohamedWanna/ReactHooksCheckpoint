import './App.css';
import MovieList from './components/MovieList';
import Search from './components/Search';
import {movie} from './data'
import 'bootstrap/dist/css/bootstrap.min.css';
import AddMovie from './components/AddMovie';
import { useState } from 'react';


function App() {
  const [movies, setMovies] = useState(movie);
  const [searchValue, setSearchValue] = useState("");
  const [searchRating, setSearchRating] = useState(0);
  const handleadd= (newmovie) => {setMovies([...movies,newmovie]);
}

const handleRating = (rate)=> setSearchRating(rate);
const handleSearch = (e)=> setSearchValue(e.target.value);
  return (
    <div className="App">
      <header className="App-header">
        <Search 
        searchValue={searchValue} 
        searchRating={searchRating} 
        handleRating={handleRating} 
        handleSearch={handleSearch} 
        />
        <MovieList movies={movies.filter((el)=>el.title.toLowerCase().includes(searchValue.toLowerCase()) && el.rate>=searchRating)
      }/>
        <AddMovie handleadd={handleadd}  />
      </header>
    </div>
  );
}

export default App;
