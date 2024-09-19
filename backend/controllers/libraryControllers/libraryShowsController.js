const Show = require('../../schemas/requestSchemas/showSchema');



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

const updateShow = async (rq, res) => {
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
  addShow,
  deleteShow,
  updateShow,

}