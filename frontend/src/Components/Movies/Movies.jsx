import {useState, useEffect} from 'react';
import MovieCard from "./MovieCard/MovieCard";

const Movies = ({movies, setMovies}) => {
  const [state, setState] = useState({
    movieGenre: 'All'
  });

  const updateState = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.value,
    })
  }

  //fetch movies by genre, when it changes,
  useEffect(()=>{
    const fetchRecentMovies = async () => {
      //get all movies
      const response = await fetch(process.env.REACT_APP_API_URI + '/api/movies/recent');
      const moviesJSON = await response.json();

      //if there are no errors, ie if the response status is in the range of 200-299
      if(response.ok) {
        setMovies(moviesJSON);
      }
    }
    fetchRecentMovies()
  }, [state.genre])

  //cards handler
  const movieCards = movies.map((movie)=>{
    return <MovieCard movie={movie} key={movie.title + movie.year}/>
  });

  return (
    <div className="moviesContainer">
      <h1>Recently added Movies</h1>
      <select name="movieGenre" id="movieGenre" className="movieGenre" value={state.movieGenre} onChange={(event)=> updateState(event)}>
        {/* TODO, add option for each unique genre in db, automatically */}
        <option value="All" className="option">All</option>

      </select>

      {movieCards}
    </div>
    
  )

}

export default Movies;