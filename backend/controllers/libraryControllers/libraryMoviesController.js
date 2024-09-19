

//add movie
const addMovie = async (req, res) => {
  const { title, year, genre } = req.body;

  try {
    const movie = await Movie.create({title, year, genre});
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

//delete movie
const deleteMovie = async (req, res) => {
  const { title } = req.params;

  if (!mongoose.Types.ObjectID.isValid(title)) {
    return res.status(404).json({error : "No such movie found"})
  }

  const movie = await Movie.findOneAndDelete({ title: title });

  if(!movie){
    return res.status(400).json({error: 'Error deleting movie, title not found.'})
  }

  res.status(200).json(movie);

}

//update movie
const updateMovie = async (req, res) => {
  const { title } =  req.params;

  
  if (!mongoose.Types.ObjectID.isValid(title)) {
    return res.status(404).json({error : "No such movie found"})
  }


  const movie = await Movie.findOneAndUpdate( {title: title}, {
    ...req.body
  })

  //catch if movie could not update
  if(!movie){
    return res.status(400).json({error: "Problem updating movie, title not found."})
  }

  res.status(200).json(movie);
}



module.exports = {
  addMovie,
  deleteMovie,
  updateMovie,
}