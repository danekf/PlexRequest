const express = require('express');

const { 
  getAllShows,
  getRecentlyAddedShows,
  getShowsByGenre,
  // addShow, 
  // deleteShow,
  // updateShow,
} = require('../controllers/requestControllers/showsController')

const router = express.Router();

router.get('/getAll', getAllShows);
router.get('/recent', getRecentlyAddedShows);
router.get('/genre/:genre', getShowsByGenre);
// router.post('/', addShow);
// router.delete('/:title', deleteShow);
// router.patch('/:title', updateShow);

module.exports = router