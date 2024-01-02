const axios = require('axios');


const getSectionIDs = () => {
  const tautilliApiEndpoint = process.env.TAUTILLI_API_ENDPOINT;
  const cmd = "get_libraries"

  const URL = tautilliApiEndpoint+cmd;

  let sectionIDs = ''
  
  axios.get(URL)
  .then((response)=> {
    sectionIDs = response.data.response.data; //yes, this is correct even though it looks...odd
    console.log(sectionIDs)
  })
  .catch(err => console.log(err));


};

module.exports = getSectionIDs;