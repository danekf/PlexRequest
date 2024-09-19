import { Link } from 'react-router-dom'
import './menu.css'; 

const Menu = () => {
  return(
    <header>
      <div className="container">
        <div className="header-left"> 
          <Link to='/'>
            <h1>Plex Request</h1>
          </Link>
        </div>

        <div className="header-right"> 
          <Link to='/requestnew'>
            <h1 className='requestNew'>Request new title</h1> 
          </Link>

          <Link to='/recentlyadded'>
            <h1 className='recentlyadded'>Recently added</h1>
          </Link>
        </div>
      </div>
    </header>
  )
};

export default Menu;