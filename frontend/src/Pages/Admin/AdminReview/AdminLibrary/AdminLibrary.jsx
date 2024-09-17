
const AdminLibrary = (props) => {
  const { library, index } = props;

  return (
    <div className="library" key={index}>
      ({library.section_id}){library.section_name}
    </div>
  )

};

export default AdminLibrary;