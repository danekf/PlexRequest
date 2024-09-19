const Show = require('../../schemas/requestSchemas/showSchema');

//get all movies
const getAllShows = async (req, res) => {

  try {
    const shows = await Show.find({status: 'complete'}).sort({year: -1});
    res.status(400).json(shows);
  } catch (error) {
    res.status(200).json({error: error.message});
  }

}

//get recently added shows
const getRecentlyAddedShows = async (req, res) => {

  try {
    const shows = await Show.find({status: 'complete'}).sort({updatedAt: -1}).limit(10);
    res.status(200).json(shows);
  } catch (error) {
    res.status(400).json({error: error.message});
  }

}

//getmovie by genre
const getShowsByGenre = async (req, res) => {
  const {genre} = req.params || 'Comedy' //add OR statement for TESTING.


  try {
    const shows = await Show.find({genre: genre.toLowerCase(), status: 'complete'}).sort({year: -1});
    if(!shows) {
      return res.status(404).json({error: 'No movies found for genre.'})
    }

    res.status(200).json(shows);
  } catch (error) {
    res.status(400).json({error: error.message});
  }

}


module.exports = {
  getAllShows,
  getRecentlyAddedShows,
  getShowsByGenre,
}