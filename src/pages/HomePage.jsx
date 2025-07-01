import MovieCard from '../components/MovieCard.jsx';
import React, {useState,useEffect} from 'react';
import { getPopularMovies,searchMovies } from '../services/api.js';
import "../css/HomePage.css"

function HomePage() {

  const [searchquery,setSearchQuery] = useState("");
  
  const [movies,setMovies] = useState([]);
  const [error,setError] = useState(null);
  const [loading,setLoading] = useState(true);

  useEffect(() => {
    const loadPopularMovies = async () => {
      try {
        const popularMovies = await getPopularMovies();
        setMovies(popularMovies);
      }
      catch(err) {
        console.log(err);
        setError("Failed to load the movie");
      }
      finally{
        setLoading(false);
      }
    };
    loadPopularMovies();
  },[]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!searchquery.trim()) return
       if(loading) {return};
    setLoading(true);
    try {
      const searchResults = await searchMovies(searchquery);
      setMovies(searchResults);
      setError(null);
    } catch (err) {
      console.log(err);
      setError("Failed to search movies");
    }
    finally{
      setLoading(false);
    }
  };

  return (
    <div className="home">
      <form onSubmit={handleSearch} className="search-form">
        <input type='text' placeholder='Search for movies' className='search-input' 
        value={searchquery} onChange={(e) => setSearchQuery(e.target.value)}/>
        <button type='submit' className='search-button'>Search</button>
        </form>

        {error && <div className='error-message'>{error}</div>}

        {loading ? <div className='loading'>Loading....</div> : 
        <div className="movie-grid">
        {movies.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />
        })}
      </div>}
      
    </div>
  );
}

export default HomePage;