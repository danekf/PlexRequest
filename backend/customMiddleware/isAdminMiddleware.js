const jwt = require('jsonwebtoken');

const isAdminMiddleware = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).redirect('/'); // Redirect to home if no token
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    // Attach user data to the request
    req.user = { userId: decoded.userId, isAdmin: decoded.isAdmin };
    next();
  } catch (error) {
    res.status(401).redirect('/'); // Redirect if the token is invalid
  }
};

module.exports = isAdminMiddleware;