const Show = require('../schemas/showSchema');

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

//add show
const addShow = async (req, res) => {
  const { title, year } = req.body;

  try {
    const show = await Show.create({title, year});
    res.status(200).json(show);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

//delete show
const deleteShow = async (req, res) => {
  const { title } = req.params;

  if (!mongoose.Types.ObjectID.isValid(title)) {
    return res.status(404).json({error : "No such show found"})
  }

  const show = await Show.findOneAndDelete({ title: title });

  if(!show){
    return res.status(400).json({error: 'Error deleting show, title not found.'})
  }

  res,status(200).json(show);

}

//update movie
const updateShow = async (req, res) => {
  const { title } =  req.params;

  
  if (!mongoose.Types.ObjectID.isValid(title)) {
    return res.status(404).json({error : "No such movie found"})
  }


  const show = await Show.findOneAndUpdate( {title: title}, {
    ...req.body
  })

  //catch if movie could not update
  if(!show){
    return res.status(400).json({error: "Problem updating movie, title not found."})
  }

  res.status(200).json(show);
}

module.exports = {
  getAllShows,
  getRecentlyAddedShows,
  getShowsByGenre,
  addShow,
  deleteShow,
  updateShow,
}