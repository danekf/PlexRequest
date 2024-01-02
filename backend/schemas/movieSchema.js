const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const movieSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  year: Number,
  genre: String,
  status: String,
    
}, { timestamps: true})

module.exports = mongoose.model('Movie', movieSchema);