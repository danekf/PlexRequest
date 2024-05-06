const User = require('../schemas/userSchema');

const loginUser = async (req, res) => {

  const {username, password} = req.data;
  //TODO : add bcrypt compare/other encryption
  const passwordHash = password;

  try {
    const user = await User.find({
      username: username,
      passwordHash: passwordHash,
    });
    //TODO : Set cookie on user
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({error: error.message});
  }
}

const registerUser = async (req, res) => {
  const {username, password, email} = req.data;
  //TODO : add bcrypt compare/other encryption
  const passwordHash = password;

  try {
    const user = await User.create({
      username: username,
      passwordHash: passwordHash, 
      email: email,
      isAdmin: false,
    });
    //TODO : Set cookie on user
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({error: error.message});
  }

};

module.exports = {
  loginUser,
  registerUser,
} 