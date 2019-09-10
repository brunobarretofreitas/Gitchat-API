const jwt = require('jsonwebtoken');
const { SECRET } = require('../config');

const GithubService = require('../Services/github');


module.exports = {
  async login(req, res) {
    const { username } = req.body;

    try {
      const { name, bio, avatar_url: avatar } = await GithubService.searchUser(username);
      return res.json({
        token: jwt.sign({name, bio, avatar}, SECRET, {expiresIn: '1h'}),
        user: {
          name, bio, avatar
        }
      })
    } catch (error) {
      return res.status(404).json({
        status: 404,
        developerMessage: error.message,
        userMessage: `No user found for ${username}`
      })
    }
  }
}