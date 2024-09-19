const express = require('express');

const {
  getTautiliLibraries
} = require('../controllers/libraryControllers/libraryController');


const router = express.Router();

router.get('/getAllLibraries', getTautiliLibraries);


module.exports = router