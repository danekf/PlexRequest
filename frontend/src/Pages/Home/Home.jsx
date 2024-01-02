import { useState, useEffect } from 'react';
import Movies from '../../Components/Movies/Movies';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(()=>{
    const fetchRecentMovies = async () => {
      //get all movies
      const response = await fetch(process.env.REACT_APP_API_URI + '/api/movies/recent');
      const moviesJSON = await response.json();

      //if there are no errors, ie if the response status is in the range of 200-299
      if(response.ok) {
        setMovies(moviesJSON)
      }
    }
    fetchRecentMovies();
  }, [])

  return (
    <div className="home">
      <div className="movies">
        {!movies && <h1>Fetching data...</h1>}
        {movies && <Movies movies = {movies} setMovies={setMovies}/> }

      </div>
    </div>
  )
};

export default Home;