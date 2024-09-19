import './RecentlyAdded.css';
import { useEffect, useState } from 'react';

const RecentlyAdded = () => {
  const [recentItems, setRecentItems] = useState({
    movies: [],
    shows: []
  });

  useEffect(() => {
    const fetchRecentData = async () => {
        // Fetch recent movies
        try {
          const moviesResponse = await fetch('your_movies_api_endpoint');
          const moviesData = await moviesResponse.json();
          setRecentItems(prevState => ({
              ...prevState, 
              movies: moviesData
          }));
        } catch (error) {
          console.error('Error fetching movies:', error);
        }

        // Fetch recent shows
        try {
          const showsResponse = await fetch('your_shows_api_endpoint');
          const showsData = await showsResponse.json();
          setRecentItems(prevState => ({
             ...prevState,
             shows: showsData
          }));
        } catch (error) {
          console.error('Error fetching shows:', error);
        } 
    };

    fetchRecentData();
  }, []);

  return (
    <div className="recentlyAddedContainer">
      <h2>Recently Added Movies</h2>
       {recentItems.movies.length === 0 ? (
         <p>Loading recently added movies...</p>
       ) : (
         <div className="itemsGrid">
          {recentItems.movies.map((movie) => (
            <div className="itemCard" key={movie.id}>
              {/* Display movie details */}
            </div>
          ))}
       </div>
       )}

       <h2>Recently Added Shows</h2>
       {recentItems.shows.length === 0 ? (
         <p>Loading recently added shows...</p>
       ) : (
         <div className="itemsGrid">
          {recentItems.shows.map((show) => (
            <div className="itemCard" key={show.id}>
              {/* Display movie details */}
            </div>
          ))}
       </div>
       )}
    </div>
  );
};

export default RecentlyAdded;