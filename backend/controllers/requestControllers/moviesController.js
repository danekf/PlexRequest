const Movie = require('../../schemas/requestSchemas/movieSchema');

//get all movies
const getAllMovies = async (req, res) => {

  try {
    const movies = await Movie.find({status: 'complete'}).sort({year: -1});
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({error: error.message});
  }

};

//get recently added movies
const getRecentlyAddedMovies = async (req, res) => {

  try {
    const movies = await Movie.find({status: 'complete'}).sort({updatedAt: -1}).limit(10);
    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({error: error.message});
  }

};


//getmovie by genre
const getMoviesByGenre = async (req, res) => {
  const {genre} = req.params || 'Comedy' //add OR statement for TESTING.


  try {
    const movies = await Movie.find({genre: genre.toLowerCase(), status: 'complete'}).sort({year: -1});
    if(!movies) {
      return res.status(404).json({error: 'No movies found for genre.'})
    }

    res.status(200).json(movies);
  } catch (error) {
    res.status(400).json({error: error.message});
  }

};

module.exports = {
  getAllMovies,
  getRecentlyAddedMovies,
  getMoviesByGenre,
};