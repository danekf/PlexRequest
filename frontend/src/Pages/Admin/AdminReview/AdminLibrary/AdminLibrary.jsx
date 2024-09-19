import { useState } from "react";
import { getAllLibraryItems } from "../../../../helpers/libraryHelpers";


const AdminLibrary = (props) => {
  const { library, index } = props;

  const [ items, setItems ] = useState([null]);

  const tempOnClick = async () => {
    const allLibraryItems = await getAllLibraryItems(library);
    setItems(allLibraryItems);
  };

  return (
    <div className="library" key={index} onClick={tempOnClick}>
      ({library.section_id}){library.section_name}
    </div>
  )

};

export default AdminLibrary;