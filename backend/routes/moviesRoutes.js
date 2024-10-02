const express = require('express');

const { 
  getAllMovies,
  getRecentlyAddedMovies,
  getMoviesByGenre,
  // addMovie,
  // deleteMovie,
  // updateMovie, 
} = require('../controllers/requestControllers/moviesController')

const router = express.Router();

router.get('/getAll', getAllMovies);
router.get('/recent', getRecentlyAddedMovies);
router.get('/genre/:genre', getMoviesByGenre);
// router.post('/', addMovie);
// router.delete('/:title', deleteMovie);
// router.patch('/:title', updateMovie);

module.exports = router