/*
@params user.username : username entered by user on login page => string.
@params user.password : password entered by user on login page => string.
*/

/* TODO
  1. Add encryption to backend.
*/

const verifyUser = (user) => {
 
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

export default verifyUser;