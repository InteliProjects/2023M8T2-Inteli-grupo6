const jwt = require('jsonwebtoken');

function authenticateToken(req, res, next) {
  const token = req.header('Authorization');

  if (!token) {
    return res.status(401).json({ error: 'Token não fornecido' });
  }

  try {
    const decodedToken = jwt.verify(token, 'secret');

    req.userId = decodedToken.loginId;
    req.adminStatus = decodedToken.adminStatus;
    req.email = decodedToken.email;

    next();
    
  } catch (error) {
    return res.status(401).json({ error: 'Token inválido' });
  }
}

// Generate JWT token for a user
function generateToken(user) {
    return jwt.sign({ user_id: user.user_id, username: user.username, userpassword: user.userpassword }, secretKey, { expiresIn: '1m' });
  }

module.exports = {
    authenticateToken,
    generateToken
};