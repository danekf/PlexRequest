import axios from 'axios'


/*
@params user.username : username entered by user on login page => string.
@params user.password : password entered by user on login page => string.
*/
export const verifyUser = (user) => {
 
//placeholder dev or user login info, will be replaced by proper auth once backend is built up.
if(user.userName === 'dev'){
  return {
    userName: 'Danek',
    isAdmin: true,
  }
} else if(user.userName === 'user'){
  return {
    userName: 'User',
    isAdmin: false,
  }
}

};

export const registerUserWithBackend = async (user) => {
  const {userName, password, email} = user;
  console.log(user);

  axios.post(process.env.REACT_APP_API_URI + '/register' , {
    userName: userName,
    password: password,
    email: email,
  })
  .then((response)=>{
    console.log(response);
  })

}

