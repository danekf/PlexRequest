import './LibraryItem.css'

const LibraryItem = (props) => {
  const { item } = props;

  return (
    <>
      {item.title}
    </>
  )
};

export default LibraryItem;