import './AdminLibrary.css';
import { useState, useEffect } from "react";
import { getAllLibraryItems } from "../../../../helpers/libraryHelpers";
import LibraryItem from './LibraryItem/LibraryItem';


const AdminLibrary = (props) => {
  const { library, index } = props;

  const [ items, setItems ] = useState([]);
  const [ showItems, setShowItems ] = useState(false);
  const [ loading, setLoading ] = useState(true);

  const getLibraryItems = async () => {
    const allLibraryItems = await getAllLibraryItems(library);
    setItems(allLibraryItems);
    setLoading(false);
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
          {item.title}
        </li>
      );
    });
  };

  //items list
  let itemList;
    //if items are to be shown, itemList is a div and ul of items, otherwise it is nothing.
  if(showItems){
    itemList = (
      <div className="items">
        <ul>
          {itemsContainer}
        </ul>
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