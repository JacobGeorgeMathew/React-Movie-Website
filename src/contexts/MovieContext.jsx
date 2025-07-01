import React, {createContext,useState,useContext,useEffect} from "react";

const MovieContext = createContext();

export const useMovieContext = () => useContext(MovieContext);

export const MovieProvider = ({children}) => {

  const [favourites,setFavourites] = useState([]);

  useEffect(() => {
    const storedFavs = localStorage.getItem("favourites");

    if(storedFavs){
      setFavourites(JSON.parse(storedFavs));
    }
  }, []); // Added missing dependency array

  useEffect(() => {
    localStorage.setItem('favourites',JSON.stringify(favourites))
  },[favourites]);

  const addTofavourites = (movie) => {
    // Store the complete movie object, not just the ID
    setFavourites(prev => [...prev, movie]);
  };

  const removeFromFavourites = (movieId) => {
    setFavourites(prev => prev.filter(movie => movie.id !== movieId));
  }

  const isFavourite = (movieId) => {
    // Fixed: use 'favourites' state instead of 'Favourites' component
    return favourites.some(movie => movie.id === movieId);
  }

  const value = {
    favourites,
    addTofavourites,
    removeFromFavourites,
    isFavourite
  };

  return <MovieContext.Provider value={value}>
    {children}
  </MovieContext.Provider>
}