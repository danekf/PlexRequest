import React, {useState, useEffect} from "react";
import './RegisterUser.css';

//auth
import { registerUserWithBackend } from '../../utils/auth';

//redux testing
import { useSelector, useDispatch } from "react-redux";
import { setUser } from '../../Redux/Slice/userSlice';


const RegisterUser = () => { 

  const user = useSelector((state)=> state.user);
  //TODO -> show option to logout if there is a user, which clears.
  /*
    if(user){
      redirect to login page, where they can logout.
    } 
  */
  
  const dispatch = useDispatch();

  const [pageState, setPageState] = useState({
    userName: '',
    password: '',
    message: '',
    email: '',
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
      const user = registerUserWithBackend(pageState);

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
        <h2>Register New User</h2>
        <form>
          <input type="email" value={pageState.email} title='Enter email' name='email' placeholder='Enter Email' onChange={(event) => updateState(event)} required /> <br />
          <input type="text" value={pageState.userName} title='Enter title' name='userName' placeholder='Enter Username' onChange={(event) => updateState(event)} required/> <br />
          <input type='password' value={pageState.password} title='Enter password.' name='password' placeholder= 'Enter Password' onChange={(event) => updateState(event)}></input> <br />
          
          <button onClick={event => submitForm(event)}>Login</button>
        </form>
        <div className="errorMessage">
          {pageState.message}
        </div>
      </div>
  );
}
export default RegisterUser;