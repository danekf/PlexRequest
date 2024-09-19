import { useState, useEffect } from 'react';
import Movies from '../../Components/Movies/Movies';
import { getRecentLibraryItems } from '../../helpers/libraryHelpers';

const Home = () => {
  const [movies, setMovies] = useState(null);

  useEffect(()=>{
    const fetchRecentMovies = async () => {
      const recentMovies = await getRecentLibraryItems({section_name : 'movies'});
      setMovies(recentMovies);
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