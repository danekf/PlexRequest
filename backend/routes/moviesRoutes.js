const express = require('express');
const Movie = require('../schemas/movieSchema');
//controllers
const { 
  getAllMovies,
  getRecentlyAddedMovies,
  getMoviesByGenre,
  addMovie,
  deleteMovie,
  updateMovie, 
} = require('../controllers/moviesController')

const router = express.Router();

router.get('/', getAllMovies);
router.get('/recent', getRecentlyAddedMovies);
router.get('/genre/:genre', getMoviesByGenre);
router.post('/', addMovie);
router.delete('/:title', deleteMovie);
router.patch('/:title', updateMovie);

module.exports = router