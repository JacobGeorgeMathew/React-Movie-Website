import { useMovieContext } from "../contexts/MovieContext";
import "../css/MovieCard.css";

function MovieCard({movie}) {
  const {isFavourite, addTofavourites, removeFromFavourites} = useMovieContext();
  const favourite = isFavourite(movie.id);
  
  function onFavouriteClick(e) {
    e.preventDefault();
    e.stopPropagation();
    
    if(favourite) {
      removeFromFavourites(movie.id);
    } else {
      addTofavourites(movie);
    }
  }

  return(
    <div className="movie-card">
      <div className="movie-poster">
        <img 
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
          alt={movie.title}
          loading="lazy"
        />
        <div className="movie-overlay">
          <button 
            className={`favourite-btn ${favourite ? "active" : ""}`} 
            onClick={onFavouriteClick}
            aria-label={favourite ? "Remove from favorites" : "Add to favorites"}
          >
            {favourite ? "❤️" : "🤍"}
          </button>
        </div>
      </div>
      <div className="movie-info">
        <h3>{movie.title}</h3>
        <p>{movie.release_date?.split("-")[0]}</p>
      </div>
    </div>
  );
}

export default MovieCard;