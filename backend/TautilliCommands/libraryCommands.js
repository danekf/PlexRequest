//Interface with tautilli to export library
//https://github.com/Tautulli/Tautulli/wiki/Tautulli-API-Reference#export_metadata


const axios = require('axios');

/*
@params
*/
//gets all libraries and returns their details. Useful for admin overview of all plex libraries, among others.
const getAllLibraries = async (req, res) => {
  const tautilliApiEndpoint = process.env.TAUTILLI_API_ENDPOINT;
  const cmd = "get_library_names";

  const URL = tautilliApiEndpoint+cmd;

 let allLibraries = '';

  await axios.get(URL)
    .then((response)=>{
      //looks weird... but is correct.
      allLibraries = response.data.response.data;
    })
    .catch(err => console.log(err));
    return allLibraries;
};

/*
@params
libraryToExport : string
*/
const exportLibrary =  async (libraryToExport) => {
  let librarySections = await getAllLibraries();
  
  //map into sections we actually are about
  const sections = (librarySections.map((section)=>{
    return {
      section_id: section.section_id,
      section_name: section.section_name,
      num_of_items: section.count,
    }
  }));

  let exportId = undefined;
  //if section found by id or name...
  if(sections.find((section) => section.section_id === libraryToExport)) {
    const tautilliApiEndpoint = process.env.TAUTILLI_API_ENDPOINT;
    const cmd = "export_metadata"
    
    const section_id = '&section_id='+libraryToExport;
    const fileFormat = '&file_format=json';

    const URL = tautilliApiEndpoint+cmd+section_id+fileFormat;

    await axios.get(URL)
      .then((res)=>{
        exportId = res.data.response.data;
      })
      .catch(err => console.log(err)); 
  
  } else if (sections.find((section) => section.section_name === libraryToExport)){
    const tautilliApiEndpoint = process.env.TAUTILLI_API_ENDPOINT;
    const cmd = "export_metadata"

    const section_name = '&section_name='+libraryToExport;
    const fileFormat = '&file_format=json';

    const URL = tautilliApiEndpoint+cmd+section_id+fileFormat;
    
    await axios.get(URL)
      .then((res)=>{
        exportId = res.data.response.data;
      })
      .catch(err => console.log(err)); 
  
  } else {
    console.error('Library not found');
  }

  return exportId.export_id;
}


/*
@params
export_id : string
*/
//Returns data from a library with a given ID. Should be a number but names can also work.
const getLibraryExportById = async (export_id) => {
  const tautilliApiEndpoint = process.env.TAUTILLI_API_ENDPOINT;
  const cmd = "download_export";
  
  const exportId = '&export_id='+export_id;

  const URL = tautilliApiEndpoint+cmd+exportId;
  
  let libraryExport = '';
  await axios.get(URL)
    .then((response)=> {
      //do something with response
      libraryExport = response.data;
    })
    .catch(err => console.log(err)); 
    
    console.log(libraryExport);

    return libraryExport;
};



module.exports = {
  exportLibrary,
  getLibraryExportById,
  getAllLibraries,
};


