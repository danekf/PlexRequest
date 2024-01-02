//Interface with tautilli
//https://github.com/Tautulli/Tautulli/wiki/Tautulli-API-Reference#export_metadata

//This is a template for interacting with the tautilli api use it and remove comments when in use.
const axios = require('axios');

//RENAME THE FUNCTION
const exampleCommand = async () => {
  const tautilliApiEndpoint = process.env.TAUTILLI_API_ENDPOINT;
  const cmd = "command name goes here as text"
  
  // tautilli command parameters go here
  const exampleOptionalParameter1 = '&exampleParam=value'
  const exampleOptionalParameter2 = '&exampleParam=value'

  const URL = tautilliApiEndpoint+cmd+exampleOptionalParameter1+exampleOptionalParameter2;
  
  let data = '';
  await get(URL)
    .then((response)=> {
      //do something with response
      data = response;
    })
    .catch(err => console.log(err)); 

  return data;
}

//DO NOT FORGET TO RENAME THE EXPORT
module.exports = exampleCommand;
