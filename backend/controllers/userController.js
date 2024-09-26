const User = require('../schemas/userSchema');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
  const { userName, password } = req.body;

  try {
    const user = await User.findOne({ userName: userName }); 
    if (!user) {
      return res.status(401).json({ error: 'Incorrect userName or password' });
    }

    const correctPassword = await bcrypt.compare(password, user.passwordHash); 
    if (correctPassword) {
      const token = jwt.sign(
        { userId: user._id, isAdmin: user.isAdmin }, // Payload
        process.env.JWT_SECRET, 
        // { expiresIn: process.env.JWT_EXPIRY },
      );

      res.status(200).json({ message: 'Login Successful', token });
    } else {
      res.status(401).json({ error: 'Incorrect username or password' }); 
    }

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
}

const registerUser = async (req, res) => {
  const { userName, password, email } = req.body;

  //bcrypt
  try {
    const saltRounds = 10; 
    const passwordHash = await bcrypt.hash(password, saltRounds);

    const user = await User.create({
      userName: userName,
      passwordHash: passwordHash, 
      email: email,
      isAdmin: false,
    });

    // Generate JWT upon successful registration
    const token = jwt.sign(
      { userId: user._id, isAdmin: user.isAdmin },
      process.env.JWT_SECRET,
        // { expiresIn: process.env.JWT_EXPIRY }, 
    );

    res.status(201).json({ message: 'User Created', token });
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