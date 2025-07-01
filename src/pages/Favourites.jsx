import "../css/favorites.css";
import { useMovieContext } from "../contexts/MovieContext";
import MovieCard from "../components/MovieCard";

function Favourites() {
  const {favourites} = useMovieContext(); // Fixed: use 'favourites' instead of 'Favourites'

  if(favourites && favourites.length > 0) {
    return (
      <div className="favourites">
        <h2>Your Favourite Movies</h2>
        <div className="movie-grid">
          {favourites.map((movie) => {
            return <MovieCard key={movie.id} movie={movie} />
          })}
        </div>
      </div>
    );
  }

  // Added proper return for empty favourites
  return (
    <div className="favourites">
      <h2>Your Favourite Movies</h2>
      <p>No favourite movies yet. Start adding some!</p>
    </div>
  );
}

export default Favourites;