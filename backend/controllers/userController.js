const User = require('../schemas/userSchema');
const bcrypt = require('bcrypt');

const loginUser = async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username: username }); 
    if (!user) {
      return res.status(401).json({ error: 'Incorrect username or password' });
    }

    const correctPassword = await bcrypt.compare(password, user.passwordHash); 
    if (correctPassword) {
      res.status(200).json({ message: 'Login Successful' });
    } else {
      res.status(401).json({ error: 'Incorrect username or password' }); 
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const registerUser = async (req, res) => {
  const { username, password, email } = req.body;

  //bcrypt
  try {
    const saltRounds = 10; 
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      username: username,
      passwordHash: passwordHash, 
      email: email,
      isAdmin: false,
    });

    res.status(201).json({ message: 'User Created' });
  } catch (error) {
    if (error.code === 11000) { // MongoDB duplicate key error
      return res.status(400).json({ error: 'Username or email already exists' });
    }
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  loginUser,
  registerUser,
} 