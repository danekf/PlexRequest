//Interface with tautilli to export library
//https://github.com/Tautulli/Tautulli/wiki/Tautulli-API-Reference#export_metadata


const axios = require('axios');
const getLibrarySections = require('./getSections');

/*
@params
libraryToExport : string
*/
const exportLibrary =  async (libraryToExport) => {
  let librarySections = await getLibrarySections();
  
  //map into sections we actually are about
  const sections = (librarySections.map((section)=>{
    return {
      section_id: section.section_id,
      section_name: section.section_name,
      num_of_items: section.count,
    }
  }));

  console.log(sections)

  let exportId = undefined;
  //if section found...
  if(sections.find((section) => section.section_id === libraryToExport)) {
    const tautilliApiEndpoint = process.env.TAUTILLI_API_ENDPOINT;
    const cmd = "export_metadata"

    const section_id = '&section_id='+libraryToExport;

    const URL = tautilliApiEndpoint+cmd+section_id;

    await axios.get(URL)
      .then((res)=>{
        exportId = res.data.response.data;
      })
      .catch(err => console.log(err)); 
  
  } else if (sections.find((section) => section.section_name === libraryToExport)){
    const tautilliApiEndpoint = process.env.TAUTILLI_API_ENDPOINT;
    const cmd = "export_metadata"

    const section_name = '&section_name='+libraryToExport;

    const URL = tautilliApiEndpoint+cmd+section_name;
    
    await axios.get(URL)
      .then((res)=>{
        exportId = res.data.response.data;
      })
      .catch(err => console.log(err)); 
  
  } else {
    console.error('Library not found');
  }

  console.log(exportId);
  return exportId;
}


/*
@params
export_id : string
*/
const getLibraryExportById = async (export_id) => {
  const tautilliApiEndpoint = process.env.TAUTILLI_API_ENDPOINT;
  const cmd = "download_export";
  
  const exportId = '&export_id='+export_id;

  const URL = tautilliApiEndpoint+cmd+exportId;
  
  let libraryExport = '';
  await axios.get(URL)
    .then((response)=> {
      //do something with response
      libraryExport = response;
    })
    .catch(err => console.log(err)); 

  console.log(libraryExport.data);
};


module.exports = {
  exportLibrary,
  getLibraryExportById,
};


