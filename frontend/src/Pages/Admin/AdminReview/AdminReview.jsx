import './AdminReview.css'
import { useEffect, useState } from "react"
import AdminLibrary from "./AdminLibrary/AdminLibrary";
import { getAllLibraries } from "../../../helpers/libraryHelpers";



const AdminReview = () => {
  const [allLibraries, setAllLibraries ] = useState(['No Libraries']);

  //get all libraries on first load to populate admin dashboard.
  useEffect( ()=> {
    const fetchLibraries = async () => {
      const librariesResponse = await getAllLibraries();
      setAllLibraries(librariesResponse);
    }

    fetchLibraries();
  },[]);

  const adminLibraries = allLibraries.map((library, index)=>{
    return ( 
      <AdminLibrary library={library} key={index}/>
    )
  });

  return (
    <div className="adminReview">
      {adminLibraries}
    </div>
  )
};

export default AdminReview;