import './AdminLibrary.css';
import { useState, useEffect } from "react";
import { getAllLibraryItems } from "../../../../helpers/libraryHelpers";
import LibraryItem from './LibraryItem/LibraryItem';


const AdminLibrary = (props) => {
  const { library, index } = props;

  const [ items, setItems ] = useState([]);
  const [ loadingerror, setLoadingError ] = useState(false);
  const [ showItems, setShowItems ] = useState(false);
  const [ loading, setLoading ] = useState(true);


  const getLibraryItems = async () => {
    const allLibraryItems = await getAllLibraryItems(library);
    if(allLibraryItems){
      setItems(allLibraryItems);
      setLoadingError(false);
      setLoading(false);
    } else{
      setLoadingError(true);
    };
  }; 

  const libraryOnClick = () => {
    if(items.length === 0){
      getLibraryItems();
    };
    setShowItems(!showItems);
  };


  //////////////Conditional formatting section
  /* 
  Not super happy with this section yet, but I am trying out different methods of conditional formatting without nesting multiple additional components.
  */

  //items container
  let itemsContainer;
    //if there are items in the current state, map them out as list items.
  if(items.length > 0 ){
    itemsContainer = items.map((item, index)=>{
      return(
        <li key={index}>
          <LibraryItem item={item} />
        </li>
      );
    });
  };

  //items list
  let itemList;
    //Conditional rendering of the item list based on current state.
  if(showItems && !loading){
    itemList = (
      <div className="itemList">
        <ul>
          {itemsContainer}
        </ul>
      </div>
    );
  } else if(showItems && loading && !loadingerror){
    itemList = (
      <div className="itemList">
        Loading items...
      </div>
    );
  } else if(loadingerror && showItems){
    itemList = (
      <div className="itemList Error">
        There was an error loading items.
      </div>
    );
  };

  //////////////

  return (
    <div className="library" key={index} onClick={libraryOnClick}>
      ({library.section_id}){library.section_name}
      {itemList}
    </div>
  )

};

export default AdminLibrary;