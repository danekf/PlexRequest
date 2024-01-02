import { Link } from 'react-router-dom'
import './menu.css'; 

const Menu = () => {

  return(
    <header>
      <div className="container">
        <Link to='/'>
          <h1>Plex Request</h1>
        </Link>

        <Link to='/requestnew'>
          <h1 className='requestNew'>Request new title</h1>
        </Link>
      </div>
    </header>
  )
};

export default Menu;