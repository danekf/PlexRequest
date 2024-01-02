const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.send('home screen')
});

router.post('/', (req,res) => {

});

module.exports = router