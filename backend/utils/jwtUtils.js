const jwt = require('jsonwebtoken');

// Utility function to decode the JWT token and get user ID
function getUserIdFromToken(token) {

  if (!token) {
    throw new Error("Token is required");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    return decoded.id;
  } catch (error) {
    throw new Error("Invalid token");
  }
}

module.exports = { getUserIdFromToken };
