import { useEffect, useState } from "react"
import AdminLibrary from "./AdminLibrary/AdminLibrary";



const AdminReview = () => {
  const [allLibraries, setAllLibraries ] = useState(['No Libraries']);

  //get all libraries on first load to populate admin dashboard.
  useEffect( ()=> {
    const getAllLibraries = async () => {
      const response = await fetch(process.env.REACT_APP_API_URI + '/api/libraries/getAllLibraries');
      const libraries = await response.json();
      if(response.ok) {
        setAllLibraries(libraries)
      }
    }
    getAllLibraries();
  },[]);

  const showLibraries = allLibraries.map((library, index)=>{
    return (
      <AdminLibrary library={library} key={index}/>
    )
  })

  return (
    <div className="adminReview">
      {showLibraries}
    </div>
  )
};

export default AdminReview;