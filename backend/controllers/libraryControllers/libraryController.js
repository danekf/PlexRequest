const { getAllLibraries } = require('../../TautilliCommands/libraryCommands');

const getTautiliLibraries = async (req, res) => {
  
  try {
    const libraries = await getAllLibraries();
    res.status(200).json(libraries);
  } catch (error) {
    res.status(400).json({error: error.message});
  }

};

module.exports = {
  getTautiliLibraries,
};