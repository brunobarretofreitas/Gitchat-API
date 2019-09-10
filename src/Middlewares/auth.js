const jwt = require('jsonwebtoken');
const { SECRET } = require('../config');

module.exports = {
  isAuthenticated(req, res, next) {
    let { authorization: authenticationToken } = req.headers;
    console.log(req.headers);
    if (authenticationToken && authenticationToken.split(' ').length > 1) {
      authenticationToken = authenticationToken.split(' ')[1];
    } else {
      return res.status(401).json({
        status: 401,
        developerMessage: "A valid JWT token must be provided",
        userMessage: "You must be authenticated to access this resource"
      });
    }

    try {
      const validJTWToken = jwt.verify(authenticationToken, SECRET);
      return next();
    } catch(error) {
      return res.status(401).json({
        status: 401,
        developerMessage: error,
        userMessage: "You must be authenticated to access this resource"
      });
    }
  }
}