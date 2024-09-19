
/* 
  @params
  library = {
    agent : String
    section_id : Int
    section_name : String
    section_type : String
  }
*/
const getAllLibraryItems = async (library) => {
  const response = await fetch(process.env.REACT_APP_API_URI + '/api/' + library.section_name.toLowerCase() + '/getAll');
  return response.json();
};

const getRecentLibraryItems = async (library) => {
  const response = await fetch(process.env.REACT_APP_API_URI + '/api/' + library.section_name.toLowerCase() + '/recent');
  return response.json();
}


module.exports = {
  getAllLibraryItems,
  getRecentLibraryItems,
}