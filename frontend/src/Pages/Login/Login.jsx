import {useState, useEffect} from "react";
import './login.css';

//auth
import verifyUser from "../../utils/auth";

//redux testing
import { useSelector, useDispatch } from "react-redux";
import { setUser } from '../../Redux/Slice/userSlice';




const Login = () => { 

  const user = useSelector((state)=> state.user);
  const dispatch = useDispatch();

  const [pageState, setPageState] = useState({
    userName: '',
    password: '',
    message: '',
  });

  

  const updateState = (event) => {
    setPageState({
      ...pageState,
      [event.target.name]: event.target.value,
    })
  }


  const submitForm = (event) => {
      event.preventDefault();

      //check user info using whatever auth ends up being setup.
      const user = verifyUser(pageState);

      if (user) {
        dispatch(setUser(user));
      } else {
        setPageState({
          ...pageState,
          message: 'Invalid user, please try again.'
        })
      }
  }
  
  return (
      <div className="loginContainer">
        <h2>Login to Plex Request</h2>
        <form>
          <input type="text" value={pageState.userName} title='Enter title' name='userName' placeholder='Username' onChange={(event) => updateState(event)} required/> <br/>
          <input type='password' value={pageState.password} title='Enter password.' name='password' placeholder= 'Password' onChange={(event) => updateState(event)}></input> <br/>
          <button onClick={event => submitForm(event)}>Submit Request</button>
        </form>
        <div className="errorMessage">
          {pageState.message}
        </div>
      </div>
  );
}
export default Login;