const getAllLibraries = async () => {
  const response = await fetch(process.env.REACT_APP_API_URI + '/api/libraries/getAllLibraries');
  if(response.ok) {
    return response.json();
  } else {
    console.error({error: 'Unable to get All Libraries'});
  }
}


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
  if(response.ok) {
    return response.json();
  } else {
    console.error({error: 'Unable to get' + library.section_name + ' library items.'});
  }
};

const getRecentLibraryItems = async (library) => {
  const response = await fetch(process.env.REACT_APP_API_URI + '/api/' + library.section_name.toLowerCase() + '/recent');
  if(response.ok) {
    return response.json();
  } else {
    console.error({error: 'Unable to get recent' + library.section_name + ' library items'});
  }
}


module.exports = {
  getAllLibraries,
  getAllLibraryItems,
  getRecentLibraryItems,
}