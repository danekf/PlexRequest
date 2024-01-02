const axios = require('axios');


const getLibrarySections = async () => {
  const tautilliApiEndpoint = process.env.TAUTILLI_API_ENDPOINT;
  const cmd = "get_libraries"

  const URL = tautilliApiEndpoint+cmd;

  let librarySections = ''
  
  //get sectionIDs from Tautilli
  await axios.get(URL)
    .then((response)=> {
      librarySections = response.data.response.data; //yes, this is correct even though it looks...odd
    })
    .catch(err => console.log(err))

  return librarySections;
};


module.exports = getLibrarySections;