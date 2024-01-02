//Interface with tautilli to export library
//https://github.com/Tautulli/Tautulli/wiki/Tautulli-API-Reference#export_metadata

const axios = require('axios');

const exportLibrary = (libraryToExport) => {
  const tautilliApiEndpoint = process.env.TAUTILLI_API_ENDPOINT;
  
  // tautilli command parameters
  const cmd = "export_metadata"
  const section_id = 1; //defaulting to 1 for testing, using section name is possible but not guaranteed to work
  const section_name = libraryToExport;

  const URL = tautilliApiEndpoint+cmd;
  
  const request = axios.get(URL)
    .catch(err => console.log(err)); 

}

module.exports = exportLibrary;
